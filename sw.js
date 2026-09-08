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
const VERSION = "a75b49482b17";
const SHELL = `guide-shell-${VERSION}`;
const ASSETS = `guide-assets-${VERSION}`;

const PRECACHE = [
  "./",
  "./index.html",
  "./assets/app.js",
  "./assets/poi-data.js",
  "./assets/photos.js",
  "./assets/climate.js",
  "./manifest.webmanifest",
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
  return cached || (await network);
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
