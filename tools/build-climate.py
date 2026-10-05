#!/usr/bin/env python3
"""מחשב מחדש את assets/climate.js מארכיוני Open-Meteo.

הנורמות הן קלט בנייה, לא תוצר של עריכה ידנית, ולכן הן צריכות להיות
ניתנות לשחזור: אם חלון הטיול יזוז, או אם יתווסף יעד, זה הקובץ שמריצים.

גשם וטמפרטורה נשמרים כפי שהם מהקובץ הקיים — הם אומתו בנפרד ואין טעם
לטלטל אותם. רוח וגל מחושבים מחדש בכל הרצה.

הגל נמדד בנקודה שבים ולא במרכז העיר: אן תוי ולא דואונג דונג, צ'אם ולא
הוי אן. זה המקום שבו הפעילות שהוא מגביל מתקיימת, וההפרש אינו זניח —
בחלון הטיול אן תוי על 0.57 מ' וצ'אם על 1.53.

    python tools/build-climate.py

אין מפתח ואין הרשמה. שתי ה-API חינמיות.
"""
import json
import re
import sys
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
POI = ROOT / "assets" / "poi-data.js"
CLIMATE = ROOT / "assets" / "climate.js"

# חלון הטיול. אם הוא משתנה, גם TRIP ב-trip-template.html צריך לזוז.
WINDOW = ((10, 26), (11, 24))
YEARS = (2019, 2025)

# נקודות ים — שלוש התחנות שיש בהן פעילות ימית.
SEA = {
    "ha-long": (20.90, 107.10),    # המפרץ
    "hoi-an": (15.95, 108.50),     # איי צ'אם
    "phu-quoc": (10.05, 104.02),   # ארכיפלג אן תוי
}

ORDER = ["hanoi", "ha-giang", "sapa", "ha-long", "ninh-binh", "phong-nha", "hue",
         "hoi-an", "buon-ma-thuot", "lak-lake", "da-lat", "saigon", "mekong", "phu-quoc"]

HEADER = """/* נורמות אקלים לחלון 26/10-24/11, Open-Meteo Archive.
   גשם וטמפרטורה: ממוצע 6 שנים. רוח וגל: ממוצע 7 שנים (2019-2025).
   wind הוא ממוצע wind_speed_10m_max בקמ"ש; wave הוא ממוצע wave_height_max
   במטרים מה-Marine API, ונמדד בנקודה שבים ולא במרכז העיר — אן תוי ולא
   דואונג דונג, צ'אם ולא הוי אן — כי שם מתקיימת הפעילות שהוא מגביל.
   wave קיים רק לשלוש התחנות שיש בהן פעילות ימית.
   משמשות כגיבוי בלבד: כשיש תחזית חיה בתוך חלון הטיול היא גוברת.
   נוצר ע"י tools/build-climate.py — לא לערוך ביד. */
"""


def _json(url, tries=3):
    for attempt in range(tries):
        try:
            with urllib.request.urlopen(url, timeout=60) as r:
                return json.load(r)
        except Exception:
            if attempt == tries - 1:
                raise
            time.sleep(2)


def _in_window(stamp):
    _, month, day = (int(x) for x in stamp.split("-"))
    (m0, d0), (m1, d1) = WINDOW
    return (month == m0 and day >= d0) or (month == m1 and day <= d1)


def _window_mean(times, values):
    kept = [v for t, v in zip(times, values or []) if v is not None and _in_window(t)]
    if not kept:
        raise SystemExit("no days inside the window — check WINDOW and YEARS")
    return sum(kept) / len(kept), len(kept)


def load_block(path, pattern=r"=\s*(\{.*\})\s*;"):
    text = path.read_text(encoding="utf-8")
    match = re.search(pattern, text, re.S)
    if not match:
        raise SystemExit(f"could not find a JSON object in {path.name}")
    return json.loads(match.group(1))


def main():
    coords = {k: (v["lat"], v["lng"]) for k, v in load_block(POI, r"=\s*(\{.*\})\s*;?\s*$").items()}
    existing = load_block(CLIMATE)

    out = {}
    for key in ORDER:
        lat, lng = coords[key]
        url = ("https://archive-api.open-meteo.com/v1/archive"
               f"?latitude={lat}&longitude={lng}"
               f"&start_date={YEARS[0]}-10-20&end_date={YEARS[1]}-11-30"
               "&daily=wind_speed_10m_max&timezone=Asia%2FBangkok")
        daily = _json(url)["daily"]
        wind, days = _window_mean(daily["time"], daily.get("wind_speed_10m_max"))

        record = dict(existing[key])
        record["wind"] = round(wind, 1)
        print(f"wind {key:<14} {record['wind']:>5} km/h  ({days} days)", file=sys.stderr)

        if key in SEA:
            slat, slng = SEA[key]
            surl = ("https://marine-api.open-meteo.com/v1/marine"
                    f"?latitude={slat}&longitude={slng}"
                    f"&start_date={YEARS[0]}-10-20&end_date={YEARS[1]}-11-30"
                    "&daily=wave_height_max&timezone=Asia%2FBangkok")
            sdaily = _json(surl)["daily"]
            wave, sdays = _window_mean(sdaily["time"], sdaily.get("wave_height_max"))
            record["wave"] = round(wave, 2)
            print(f"wave {key:<14} {record['wave']:>5} m     ({sdays} days)", file=sys.stderr)

        out[key] = record

    # סדר המפתחות קבוע, כדי שה-diff בין הרצות יראה רק שינויי ערך.
    keys = ["tmax", "tmin", "mm", "rd", "worst", "wind", "wave"]
    lines = []
    for key in ORDER:
        body = ",".join(f'"{k}":{out[key][k]}' for k in keys if k in out[key])
        lines.append(f'"{key}":{{{body}}}')
    CLIMATE.write_text(HEADER + "const CLIMATE={\n" + ",\n".join(lines) + "\n};\n",
                       encoding="utf-8", newline="\n")
    print(f"\nwrote {CLIMATE.relative_to(ROOT)}", file=sys.stderr)


if __name__ == "__main__":
    main()
