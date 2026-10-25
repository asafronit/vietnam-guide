/* מדריך ויאטנם 2026 — service worker
 *
 * למה זה לא עותק של ה-worker של האתר הראשי:
 * שם ה-HTML מוגש ב-stale-while-revalidate, כלומר כל טעינה מציירת את הדף
 * מהביקור הקודם. מעלים גרסה חדשה, פותחים בטלפון, ורואים את הישנה — ורק
 * ריענון שני מביא את החדשה. זה בדיוק מה שגרם ל"מקרטע באייפון".
 *
 * כאן ההיפך: HTML תמיד מהרשת, והקאש הוא רק רשת ביטחון לניתוק.
 * הנכסים כן נשמרים, אבל הם מגורסאים דרך VERSION, אז דיפלוי חדש מנקה אותם.
 */
// build-site.ps1 כותב לכאן חתימה של תוכן הנכסים. אין כאן מספר ידני:
// גרסה שתלויה בזיכרון של מי שפורס נשכחת בדיוק בדיפלוי שהכי חשוב שיעבור.
const VERSION = "9933bf74df51";
const SHELL = `guide-shell-${VERSION}`;
const ASSETS = `guide-assets-${VERSION}`;

const PRECACHE = [
  "./",
  "./index.html",
  "./assets/app.js",
  "./assets/poi-data.js",
  "./assets/transfers-data.js",
  "./assets/photos.js",
  "./assets/poi-photos.js",
  "./assets/climate.js",
  /* הגופנים חייבים להיות כאן. הם הוטמעו מקומית בדיוק כדי לעבוד בלי
     רשת, ובלי precache הטעינה הראשונה אופליין הייתה נופלת ל-fallback
     של המערכת — כלומר ההטמעה לא הייתה שווה דבר. העבריים ראשונים:
     הם אלה שנטענים בפועל בממשק עברי. */
  "./assets/fonts/Heebo-hebrew.woff2",
  "./assets/fonts/Heebo-latin.woff2",
  "./assets/fonts/Heebo-latin-ext.woff2",
  "./assets/fonts/Assistant-hebrew.woff2",
  "./assets/fonts/Assistant-latin.woff2",
  /* הספלאש חייב להיות בקאש, אחרת הטעינה הראשונה אופליין מציגה
     שכבה ריקה עד שהשער משחרר אותה. */
  "./assets/splash/sat.webp",
  "./assets/splash/hat.webp",
  "./assets/splash/lantern.webp",
  "./assets/splash/boat.webp",
  "./assets/splash/pho.webp",
  "./assets/splash/lotus.webp",
  "./manifest.webmanifest",
  /* 14-01: התצלומים וספריית המפה. הרשימה נכתבת ע"י build-site.ps1
     מתוכן התיקיות, כדי שתצלום שנוסף לא ייפול בשקט מחוץ לקאש — 14 מתוך
     14 התצלומים היו שבורים בלי רשת. אריחי המפה עצמם לא כאן: מדיניות
     OSM אוסרת הורדה גורפת, והמפה מודיעה כשאין רשת. */
  /* __PRECACHE_GEN_START__ */
  "./assets/photos/buon-ma-thuot.jpg",
  "./assets/photos/buon-ma-thuot-tile.jpg",
  "./assets/photos/da-lat.jpg",
  "./assets/photos/da-lat-tile.jpg",
  "./assets/photos/ha-giang.jpg",
  "./assets/photos/ha-giang-tile.jpg",
  "./assets/photos/ha-long.jpg",
  "./assets/photos/ha-long-tile.jpg",
  "./assets/photos/hanoi.jpg",
  "./assets/photos/hanoi-tile.jpg",
  "./assets/photos/hoi-an.jpg",
  "./assets/photos/hoi-an-tile.jpg",
  "./assets/photos/hue.jpg",
  "./assets/photos/hue-tile.jpg",
  "./assets/photos/lak-lake.jpg",
  "./assets/photos/lak-lake-tile.jpg",
  "./assets/photos/mekong.jpg",
  "./assets/photos/mekong-tile.jpg",
  "./assets/photos/ninh-binh.jpg",
  "./assets/photos/ninh-binh-tile.jpg",
  "./assets/photos/phong-nha.jpg",
  "./assets/photos/phong-nha-tile.jpg",
  "./assets/photos/phu-quoc.jpg",
  "./assets/photos/phu-quoc-tile.jpg",
  "./assets/photos/saigon.jpg",
  "./assets/photos/saigon-tile.jpg",
  "./assets/photos/sapa.jpg",
  "./assets/photos/sapa-tile.jpg",
  "./assets/poi-photos/dish-banh-beo.jpg",
  "./assets/poi-photos/dish-banh-canh-cua.jpg",
  "./assets/poi-photos/dish-banh-cuon.jpg",
  "./assets/poi-photos/dish-banh-khoai.jpg",
  "./assets/poi-photos/dish-banh-mi.jpg",
  "./assets/poi-photos/dish-banh-xeo.jpg",
  "./assets/poi-photos/dish-bun-bo-hue.jpg",
  "./assets/poi-photos/dish-bun-cha.jpg",
  "./assets/poi-photos/dish-bun-rieu.jpg",
  "./assets/poi-photos/dish-bun-thang.jpg",
  "./assets/poi-photos/dish-bun-thit-nuong.jpg",
  "./assets/poi-photos/dish-cao-lau.jpg",
  "./assets/poi-photos/dish-ca-phe-trung.jpg",
  "./assets/poi-photos/dish-cha-ca.jpg",
  "./assets/poi-photos/dish-com-lam.jpg",
  "./assets/poi-photos/dish-com-tam.jpg",
  "./assets/poi-photos/dish-ga-nuong.jpg",
  "./assets/poi-photos/dish-my-quang.jpg",
  "./assets/poi-photos/dish-pho.jpg",
  "./assets/poi-photos/dish-thang-co.jpg",
  "./assets/poi-photos/dish-tra-atiso.jpg",
  "./assets/poi-photos/poi-da-lat-must-see-xuan-huong-lake.jpg",
  "./assets/poi-photos/poi-ha-giang-must-see-lung-cu-flag-tower.jpg",
  "./assets/poi-photos/poi-ha-long-attractions-trung-trang-cave.jpg",
  "./assets/poi-photos/poi-ha-long-must-see-cat-ba-national-park.jpg",
  "./assets/poi-photos/poi-hanoi-attractions-st-joseph-s-cathedral.jpg",
  "./assets/poi-photos/poi-hanoi-attractions-thang-long-water-puppet-thea.jpg",
  "./assets/poi-photos/poi-hanoi-must-see-imperial-citadel-of-thang-long.jpg",
  "./assets/poi-photos/poi-hanoi-must-see-temple-of-literature.jpg",
  "./assets/poi-photos/poi-hoi-an-must-see-ba-na-hills-and-golden-bridge.jpg",
  "./assets/poi-photos/poi-hoi-an-must-see-hoi-an-ancient-town-and-japane.jpg",
  "./assets/poi-photos/poi-hue-attractions-tu-duc-tomb.jpg",
  "./assets/poi-photos/poi-hue-must-see-hue-imperial-city-the-citadel.jpg",
  "./assets/poi-photos/poi-hue-must-see-khai-dinh-tomb.jpg",
  "./assets/poi-photos/poi-mekong-attractions-vinh-trang-pagoda.jpg",
  "./assets/poi-photos/poi-ninh-binh-attractions-bai-dinh-pagoda.jpg",
  "./assets/poi-photos/poi-ninh-binh-attractions-hoa-lu-ancient-capital.jpg",
  "./assets/poi-photos/poi-ninh-binh-must-see-mua-cave-viewpoint-hang-mua.jpg",
  "./assets/poi-photos/poi-ninh-binh-must-see-trang-an-scenic-landscape-c.jpg",
  "./assets/poi-photos/poi-phong-nha-attractions-hang-en-cave-trek.jpg",
  "./assets/poi-photos/poi-phong-nha-attractions-son-doong-cave-expeditio.jpg",
  "./assets/poi-photos/poi-phong-nha-must-see-phong-nha-cave-boat-trip.jpg",
  "./assets/poi-photos/poi-phu-quoc-must-see-hon-thom-cable-car.jpg",
  "./assets/poi-photos/poi-saigon-attractions-war-remnants-museum.jpg",
  "./assets/poi-photos/poi-saigon-must-see-notre-dame-cathedral-basilica.jpg",
  "./assets/poi-photos/poi-saigon-must-see-reunification-palace.jpg",
  "./assets/poi-photos/poi-sapa-must-see-cat-cat-village.jpg",
  "./assets/poi-photos/poi-sapa-must-see-fansipan-cable-car-and-muong-hoa.jpg",
  "./assets/poi-photos/poi-sapa-must-see-sapa-stone-church-and-sun-plaza.jpg",
  "./assets/vendor/leaflet/images/layers.png",
  "./assets/vendor/leaflet/images/layers-2x.png",
  "./assets/vendor/leaflet/images/marker-icon.png",
  "./assets/vendor/leaflet/images/marker-icon-2x.png",
  "./assets/vendor/leaflet/images/marker-shadow.png",
  "./assets/vendor/leaflet/leaflet.css",
  "./assets/vendor/leaflet/leaflet.js",
  "./assets/tile-art/buon-ma-thuot.webp",
  "./assets/tile-art/da-lat.webp",
  "./assets/tile-art/ha-giang.webp",
  "./assets/tile-art/ha-long.webp",
  "./assets/tile-art/hanoi.webp",
  "./assets/tile-art/hoi-an.webp",
  "./assets/tile-art/hue.webp",
  "./assets/tile-art/lak-lake.webp",
  "./assets/tile-art/mekong.webp",
  "./assets/tile-art/ninh-binh.webp",
  "./assets/tile-art/phong-nha.webp",
  "./assets/tile-art/phu-quoc.webp",
  "./assets/tile-art/saigon.webp",
  "./assets/tile-art/sapa.webp",
  /* __PRECACHE_GEN_END__ */
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL)
      // פר-פריט, כדי שנכס אחד שנכשל לא יפיל את כל ההתקנה
      .then((cache) => Promise.allSettled(PRECACHE.map((u) => cache.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  const keep = new Set([SHELL, ASSETS]);
  event.waitUntil(
    caches
      .keys()
      .then((names) => Promise.all(names.filter((n) => !keep.has(n)).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

/* HTML: רשת קודם. קאש רק אם הרשת נכשלה. */
async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(SHELL);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await caches.match(request);
    return cached || caches.match("./index.html");
  }
}

/* נכסים: מגישים מהקאש מיד, ומרעננים ברקע לטעינה הבאה.
 * חגורה ושלייקס מול חתימת הגרסה: גם אם החתימה לא התחלפה משום מה,
 * נכס ששונה בשרת ייתפס בטעינה הבאה במקום להיתקע לנצח. */
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response && (response.ok || response.type === "opaque")) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);
  if (cached) return cached;
  /* 14-01: ה-precache נכתב ל-SHELL, והחיפוש כאן היה רק ב-ASSETS. נכס
     שנשמר מראש אבל לא נטען ברשת אף פעם — תצלום של תחנה שלא נפתחה,
     leaflet.js לפני הביקור הראשון במפה — לא נמצא בלי רשת, וה-precache
     לא היה שווה כלום. לכן גם כל הקאשים, ואז הרשת. */
  const anyCached = await caches.match(request);
  if (anyCached) return anyCached;
  /* null אינו Response; respondWith עליו נכשל בשגיאה לא ברורה.
     Response.error() הוא כשל רשת רגיל שה-onerror של הדף יודע לטפל בו. */
  return (await network) || Response.error();
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
    return;
  }
  // רק המקור שלנו. תחזית מזג האוויר ושערי המטבע חייבים להגיע חיים,
  // ולכן כל בקשה חוצת-מקור עוברת ישר לרשת בלי קאש.
  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(request, ASSETS));
  }
});

/* מאפשר לדף לבקש הפעלה מיידית של גרסה חדשה. */
self.addEventListener("message", (event) => {
  if (event.data === "skip-waiting") self.skipWaiting();
});
