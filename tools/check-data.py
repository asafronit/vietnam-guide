#!/usr/bin/env python3
"""בודק את חוזה הנתונים של המדריך מול התוצרים שנשלחים בפועל.

הטסטים ב-VIETNAM/kml בודקים את הצינור; זה בודק את מה ש**נשלח**. שתי
שאלות שונות: צינור יכול לעבור בעוד הקובץ שבאתר הוא מלפני שבוע, וכבר
קרה כאן שה-sw החזיק גרסה חדשה בעוד הנכסים היו ישנים.

    python tools/check-data.py            # מקומי, assets/
    python tools/check-data.py --live     # מה שהאתר באמת מגיש

יוצא בקוד 1 אם יש כשל, 0 אם רק אזהרות. אין תלויות מעבר לספרייה התקנית.
"""
import argparse
import json
import re
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LIVE = "https://asafronit.github.io/vietnam-guide/assets/"

CATEGORIES = ("hotels", "must_see", "attractions", "food", "street_food", "restaurants",
              "markets", "nightlife", "spa", "diving", "logistics", "contacts")
LOW_SENS = ("restaurants", "hotels", "nightlife", "spa", "contacts")
LIMITERS = ("rain", "wind", "sea", "flood")
ROUTE = ["hanoi", "ha-giang", "sapa", "ha-long", "ninh-binh", "phong-nha", "hue",
         "hoi-an", "buon-ma-thuot", "lak-lake", "da-lat", "saigon", "mekong", "phu-quoc"]

fails: list[str] = []
warns: list[str] = []


def fail(msg):
    fails.append(msg)


def warn(msg):
    warns.append(msg)


def load(name, live):
    if live:
        with urllib.request.urlopen(LIVE + name, timeout=60) as r:
            text = r.read().decode("utf-8")
    else:
        text = (ROOT / "assets" / name).read_text(encoding="utf-8")
    m = re.search(r"=\s*(\{.*\}|\[.*\])\s*;?\s*$", text, re.S)
    if not m:
        fail(f"{name}: could not find a JSON literal")
        return None
    try:
        return json.loads(m.group(1))
    except json.JSONDecodeError as e:
        fail(f"{name}: invalid JSON — {e}")
        return None


def check_pool(poi):
    """הרשומות. כל בדיקה כאן נובעת מבאג אמיתי שנתפס בעבר."""
    if set(poi) != set(ROUTE):
        fail(f"pool: stations are {sorted(poi)}, expected the 14 on the itinerary")
    total = 0
    for sid, st in poi.items():
        for key in ("name", "region", "lat", "lng", "poi", "counts"):
            if key not in st:
                fail(f"{sid}: missing {key}")
        for cat, recs in st.get("poi", {}).items():
            if cat not in CATEGORIES:
                fail(f"{sid}: unknown category {cat}")
            for r in recs:
                total += 1
                where = f"{sid}/{cat}/{r.get('name', '?')}"
                # עברית: כל רשומה נושאת תאום, אחרת הדף נופל ללטינית בשקט
                for k in ("whatHe", "whyHe"):
                    if not (r.get(k) or "").strip():
                        fail(f"{where}: {k} is empty")
                if not (r.get("what") or "").strip():
                    fail(f"{where}: what is empty")
                if (r.get("what") or "").strip() == (r.get("why") or "").strip():
                    fail(f"{where}: why restates what")
                # מחיר בלי יחידה הוא מספר שאי אפשר לפעול לפיו
                if r.get("priceLow") is not None and not r.get("priceUnit"):
                    fail(f"{where}: priceLow without priceUnit")
                if r.get("priceHigh") is not None and r.get("priceLow") is None:
                    fail(f"{where}: priceHigh without priceLow")
                if (r.get("priceLow") is not None and r.get("priceHigh") is not None
                        and r["priceHigh"] < r["priceLow"]):
                    fail(f"{where}: priceHigh below priceLow")
                # שעות: תאום עברי חובה, אחרת הכרטיס נופל ללטינית בשקט;
                # ומנה או איש קשר עם שעות הוא שדה שמולא בקטגוריה הלא נכונה.
                if r.get("hours") and not (r.get("hoursHe") or "").strip():
                    fail(f"{where}: hours without hoursHe")
                if r.get("hoursHe") and not (r.get("hours") or "").strip():
                    fail(f"{where}: hoursHe without hours")
                if r.get("hours") and (r.get("isDish") or cat == "contacts"):
                    fail(f"{where}: hours on a dish or a contact")
                # איש קשר עם נ"צ מקבל פין שמשקר, והוא גם דוחף את ה-KML
                # לשכבה אחת-עשרה שחורגת ממה ש-My Maps מקבלת
                if cat == "contacts" and r.get("lat") is not None:
                    fail(f"{where}: a contact carries coordinates")
                # המגביל מניע את הצ'יפ; ערך לא מוכר שולח אותו לנוסחת הגשם בשקט
                if r.get("limiter") not in LIMITERS:
                    fail(f"{where}: limiter {r.get('limiter')!r} not in {LIMITERS}")
                if cat == "diving" and r.get("limiter") != "sea":
                    warn(f"{where}: diving record limited by {r.get('limiter')}, not sea")
                # צ'יפ ההיתכנות מוסר בקטגוריות low; limiter שאינו rain שם לא נראה
                if cat in LOW_SENS and r.get("limiter") != "rain":
                    warn(f"{where}: limiter {r.get('limiter')} on a low-sensitivity category "
                         f"— the chip is hidden, so it never shows")
                # מקור אחד לפחות, שניים למלונות
                need = 2 if cat == "hotels" else 1
                if len(r.get("sources") or []) < need:
                    fail(f"{where}: {len(r.get('sources') or [])} sources, needs {need}")
                for u in r.get("sources") or []:
                    if not u.startswith("https://"):
                        fail(f"{where}: source is not https — {u[:60]}")
                # איש קשר בלי דרך להגיע אליו אינו איש קשר
                if cat == "contacts" and not (r.get("whatsapp") or r.get("phone") or r.get("email")):
                    fail(f"{where}: a contact with no whatsapp, phone or email")
                if r.get("whatsapp") and not re.fullmatch(r"\+?[\d\s\-()]{8,20}", str(r["whatsapp"])):
                    fail(f"{where}: whatsapp {r['whatsapp']!r} is not a dialable number")
                if r.get("video") and not re.match(r"https://(www\.)?(youtube\.com|youtu\.be)/", r["video"]):
                    fail(f"{where}: video is not a youtube URL — {r['video'][:60]}")
                # נ"צ בתוך ויאטנם; פין שנדד הוא באג שקרה
                if r.get("lat") is not None:
                    if not (8.0 <= r["lat"] <= 24.0 and 102.0 <= r["lng"] <= 110.0):
                        fail(f"{where}: coordinates outside Vietnam — {r['lat']},{r['lng']}")
        # counts חייב להתאים למה שבאמת יש, אחרת הטאב משקר
        for cat, n in (st.get("counts") or {}).items():
            real = len(st.get("poi", {}).get(cat) or [])
            if n != real:
                fail(f"{sid}: counts[{cat}]={n} but poi has {real}")
    hours = sum(1 for st in poi.values() for recs in st.get("poi", {}).values()
                for r in recs if r.get("hours"))
    print(f"pool: {total} records across {len(poi)} stations, {hours} with opening hours")
    return total


def check_transfers(legs):
    legs = legs if isinstance(legs, list) else list(legs.values())
    ids = set(ROUTE)
    pairs = set()
    opts = 0
    for L in legs:
        where = f"{L.get('from')}->{L.get('to')}"
        for side in ("from", "to"):
            if L.get(side) not in ids:
                fail(f"{where}: {side} is not a known station")
        pairs.add((L.get("from"), L.get("to")))
        if not (L.get("noteHe") or "").strip():
            fail(f"{where}: noteHe is empty")
        if not (L.get("options") or []):
            fail(f"{where}: no options")
        for o in L.get("options") or []:
            opts += 1
            w = f"{where} [{o.get('mode')}]"
            if not (o.get("operator") or "").strip():
                fail(f"{w}: operator is empty")
            if o.get("opLang") not in ("vi", "en"):
                fail(f"{w}: opLang {o.get('opLang')!r}")
            # Vietjet — אסור מפורשות
            if re.search(r"viet\s*jet", o.get("operator", ""), re.I):
                fail(f"{w}: Vietjet is excluded from this trip")
            b = o.get("board")
            if not b:
                fail(f"{w}: no board")
            else:
                if b.get("lang") not in ("vi", "en"):
                    fail(f"{w}: board.lang {b.get('lang')!r}")
                if not b.get("pickupHotel"):
                    if not (b.get("address") or "").strip():
                        fail(f"{w}: board has no address and is not a hotel pickup")
                    if b.get("lat") is None:
                        fail(f"{w}: board has no coordinates — no Grab button")
                    elif not (8.0 <= b["lat"] <= 24.0 and 102.0 <= b["lng"] <= 110.0):
                        fail(f"{w}: board coordinates outside Vietnam")
            # תאומים עבריים
            for k in ("pros", "cons"):
                if (o.get(k) or []) and not (o.get(k + "He") or []):
                    fail(f"{w}: {k} without {k}He")
            for k in ("tips", "departures"):
                if (o.get(k) or "").strip() and not (o.get(k + "He") or "").strip():
                    fail(f"{w}: {k} without {k}He")
            if o.get("priceLow") is not None:
                if o.get("currency") not in ("VND", "USD"):
                    fail(f"{w}: currency {o.get('currency')!r}")
                if not o.get("priceUnit"):
                    fail(f"{w}: priceLow without priceUnit")
            if (o.get("durationMin") is not None and o.get("durationMax") is not None
                    and o["durationMax"] < o["durationMin"]):
                fail(f"{w}: durationMax below durationMin")
            for bl in o.get("bookLinks") or []:
                if not (bl.get("url") or "").startswith("https://"):
                    fail(f"{w}: booking link is not https")
            # אופציה בלי קישור וגם בלי טיפ אינה ניתנת לפעולה
            if not (o.get("bookLinks") or []) and not (o.get("tips") or "").strip():
                warn(f"{w}: no booking link and no tip — a price with nothing to act on")
            # שני מקורות על אותו דומיין מקבלים תווית זהה בדף
            hosts = [re.sub(r"^www\.", "", re.sub(r"^https?://([^/]+).*$", r"\1", u))
                     for u in (o.get("sources") or [])]
            dupes = {h for h in hosts if hosts.count(h) > 1}
            if dupes:
                warn(f"{w}: {len(dupes)} source host(s) appear twice ({', '.join(sorted(dupes))}) "
                     f"— identical link labels in the card")
    # כל קטע רצוף במסלול חייב להיות מכוסה, בכיוון כלשהו
    for a, b in zip(ROUTE, ROUTE[1:]):
        if (a, b) not in pairs and (b, a) not in pairs:
            fail(f"itinerary leg {a} -> {b} has no transfer")
    print(f"transfers: {len(legs)} legs, {opts} options")
    return opts


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--live", action="store_true", help="check what the site serves, not the working tree")
    args = ap.parse_args()
    src = "live" if args.live else "local"
    print(f"source: {src}\n")

    poi = load("poi-data.js", args.live)
    if poi:
        check_pool(poi)
    legs = load("transfers-data.js", args.live)
    if legs:
        check_transfers(legs)

    print()
    for w in warns:
        print(f"WARN  {w}")
    for f in fails:
        print(f"FAIL  {f}")
    print(f"\n{len(fails)} failures, {len(warns)} warnings")
    return 1 if fails else 0


if __name__ == "__main__":
    raise SystemExit(main())
