(function(){
"use strict";

/* ============ אייקוני קו ============ */
var ICONS={
  gear:'<circle cx="12" cy="12" r="3.1"/><path d="M19.4 14.5a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5v.2a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1h.2a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>',
  star:'<path d="M12 3.6l2.6 5.3 5.8.9-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.9z"/>',
  hike:'<path d="M2.5 19l6-9.5 4 6 2.5-3.5L21.5 19z"/><circle cx="17.5" cy="6" r="2"/>',
  bowl:'<path d="M3.5 11h17a8.5 8.5 0 0 1-17 0z"/><path d="M9 7.8c0-1.4 1.4-1.4 1.4-2.8"/><path d="M13 7.8c0-1.4 1.4-1.4 1.4-2.8"/>',
  basket:'<path d="M4 9.5h16l-1.4 10H5.4z"/><path d="M8.6 9.5L12 4l3.4 5.5"/>',
  bed:'<path d="M3 8v11"/><path d="M3 14.5h18V19"/><path d="M21 19v-6.5a2 2 0 0 0-2-2h-7.5v4"/><circle cx="7" cy="11.5" r="1.9"/>',
  van:'<path d="M2.5 16.5V8h11l4 4h4v4.5"/><circle cx="7.5" cy="17" r="1.9"/><circle cx="17" cy="17" r="1.9"/><path d="M9.4 17h5.7"/>',
  card:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="M6 16.2c.6-1.5 1.7-2.2 3-2.2s2.4.7 3 2.2"/><path d="M14.8 10h4.2M14.8 13.5h4.2"/>',
  search:'<circle cx="11" cy="11" r="6.5"/><path d="M15.8 15.8l4.7 4.7"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>',
  copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M15 5.5A1.5 1.5 0 0 0 13.5 4h-8A1.5 1.5 0 0 0 4 5.5v8A1.5 1.5 0 0 0 5.5 15"/>',
  heart:'<path d="M12 20.3l-1.3-1.2C6 14.9 3 12.2 3 8.9 3 6.2 5.1 4 7.8 4c1.5 0 3 .7 4.2 2 1.2-1.3 2.7-2 4.2-2C18.9 4 21 6.2 21 8.9c0 3.3-3 6-7.7 10.2z"/>',
  pin:'<path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>',
  car:'<path d="M4 16.5V13l2-4.5h12L20 13v3.5"/><path d="M4 16.5h16"/><circle cx="7.6" cy="17" r="1.7"/><circle cx="16.4" cy="17" r="1.7"/>',
  play:'<path d="M8.5 5.6l9.5 6.4-9.5 6.4z"/>',
  moon:'<path d="M20 14.6A8.5 8.5 0 0 1 9.4 4 8.5 8.5 0 1 0 20 14.6z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.6v2M12 19.4v2M2.6 12h2M19.4 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4"/>',
  globe:'<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17"/><path d="M12 3.5c2.2 2.5 3.4 5.4 3.4 8.5s-1.2 6-3.4 8.5c-2.2-2.5-3.4-5.4-3.4-8.5s1.2-6 3.4-8.5z"/>',
  compass:'<circle cx="12" cy="12" r="8.5"/><path d="M15.4 8.6l-2 4.8-4.8 2 2-4.8z"/>',
  passport:'<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="9.8" r="3"/><path d="M9.3 17h5.4"/>',
  doc:'<path d="M13.8 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.2z"/><path d="M13.8 3v5.2H19"/><path d="M8.6 13h6.8M8.6 16.4h4.8"/>',
  info:'<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.2"/><path d="M12 7.9v.1"/>',
  chat:'<path d="M20.5 11.6a8 8 0 0 1-11.7 7.1L4 20l1.4-4.6A8 8 0 1 1 20.5 11.6z"/>',
  chev:'<path d="M14.5 5.8L8.3 12l6.2 6.2"/>',
  grid:'<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>'
};
function icon(name,cls){
  var s=document.createElementNS("http://www.w3.org/2000/svg","svg");
  s.setAttribute("viewBox","0 0 24 24");
  s.setAttribute("class","ic"+(cls?" "+cls:""));
  s.setAttribute("aria-hidden","true");
  s.innerHTML=ICONS[name]||"";
  return s;
}

/* ============ מילון ============ */
var T={
  brand:{he:"ויאטנם",en:"Vietnam"},
  brandSub:{he:"נובמבר 2026",en:"November 2026"},
  skip:{he:"דלג לתוכן",en:"Skip to content"},
  searchLabel:{he:"חיפוש בכל המאגר",en:"Search everything"},
  searchPh:{he:"מה מחפשים? מסעדה, שוק, פעילות, מלון…",en:"Restaurant, market, activity, hotel…"},
  clear:{he:"נקה חיפוש",en:"Clear search"},
  navStations:{he:"תחנות",en:"Stations"},
  /* ---- מצב "לפי מרחק" ---- */
  byRoute:{he:"לפי מסלול",en:"By route"},
  byDist:{he:"לפי מרחק",en:"By distance"},
  sortMode:{he:"סדר התצוגה",en:"Sort order"},
  findNear:{he:"מצא מה קרוב אליי",en:"Find what's near me"},
  retryNear:{he:"נסה שוב",en:"Try again"},
  refreshLoc:{he:"רענן מיקום",en:"Refresh location"},
  /* לפני הלחיצה — 3.3.2. וגם נכון עובדתית: אין כאן שרת בכלל. */
  nearHint:{he:"הדפדפן יבקש את אישורך. המיקום נשאר במכשיר ולא נשלח לשום מקום.",
            en:"Your browser will ask permission. Your location stays on the device and is never sent anywhere."},
  locating:{he:"מאתר את המיקום שלך…",en:"Finding your location…"},
  /* המחוון הוא הטקסט הזה. ספינר היה מוקפא ע"י כלל ה-reduced-motion. */
  nearFound:{he:"נמצאו %n מקומות. הקרוב ביותר: %f.",en:"%n places found. Nearest: %f."},
  nearNone:{he:"לא נמצאו מקומות עם מיקום ידוע.",en:"No places with a known location."},
  /* שלושת קודי השגיאה — טקסט נפרד לכל אחד (3.3.1/3.3.3) */
  errDenied:{he:"הגישה למיקום נחסמה. הדפדפן לא יציג שוב את בקשת ההרשאה מתוך הדף הזה.",
             en:"Location access is blocked. The browser will not ask again from within this page."},
  errDeniedHow:{he:"להחזרה: בספארי — כפתור אA בשורת הכתובת, ואז הגדרות אתר, ואז מיקום. במכשיר — הגדרות, פרטיות ואבטחה, שירותי מיקום, אתרי Safari. אם המדריך הותקן למסך הבית — הגדרות, שם האפליקציה, מיקום.",
                en:"To restore: in Safari tap the aA button in the address bar, then Website Settings, then Location. On the device: Settings, Privacy & Security, Location Services, Safari Websites. If installed to the home screen: Settings, the app name, Location."},
  errTimeout:{he:"לא הצלחנו לאתר את המיקום בזמן. זה קורה במקומות סגורים ובלי קליטה.",
              en:"Locating timed out. This happens indoors and without signal."},
  errUnavail:{he:"המיקום אינו זמין במכשיר הזה כרגע.",en:"Location is unavailable on this device right now."},
  nearPick:{he:"אפשר לבחור תחנה ולראות מה קרוב אליה:",en:"You can pick a stop and see what's near it:"},
  nearPickLbl:{he:"בחירת תחנה",en:"Choose a stop"},
  /* far — מידע, לא שגיאה. עד היציאה זהו המצב הנפוץ ביותר. */
  farAway:{he:"אתה כרגע כ-%d מהתחנה הקרובה (%s).",en:"You're about %d from the nearest stop (%s)."},
  nearStation:{he:"מה קרוב ל%s",en:"Near %s"},
  distM:{he:"%n מ׳",en:"%n m"},
  distKm:{he:"%n ק״מ",en:"%n km"},
  /* בשם המחושב — מילים מלאות. VoiceOver עברית קורא ק״מ אות-אות. */
  distMSpoken:{he:"%n מטר",en:"%n meters"},
  distKmSpoken:{he:"%n קילומטר",en:"%n kilometers"},
  settings:{he:"הגדרות",en:"Settings"},
  closeSettings:{he:"סגירת ההגדרות",en:"Close settings"},
  navTopics:{he:"נושאים",en:"Browse"},
  navSaved:{he:"שמורים",en:"Saved"},
  navInfo:{he:"מידע",en:"Trip info"},
  dark:{he:"מצב כהה",en:"Dark mode"},
  places:{he:"מקומות",en:"places"},
  stations:{he:"תחנות",en:"stations"},
  back:{he:"חזרה לכל התחנות",en:"All stations"},
  backTopics:{he:"חזרה לנושאים",en:"Back to browse"},
  howAround:{he:"איך זזים כאן",en:"Getting around"},
  areaMap:{he:"המפה של האזור",en:"Area map"},
  ride:{he:"הזמנת נסיעה",en:"Directions"},
  videos:{he:"סרטונים",en:"Videos"},
  whyHere:{he:"למה זה נכנס למאגר",en:"Why it made the list"},
  whatsapp:{he:"וואטסאפ",en:"WhatsApp"},
  pickStation:{he:"בחרו תחנה מהרשימה",en:"Pick a station from the list"},
  pickHint:{he:"או חפשו מקום מסוים בשדה החיפוש למעלה.",en:"Or search for a specific place above."},
  allStations:{he:"כל התחנות",en:"All stations"},
  sheetGripName:{he:"גובה החלונית",en:"Panel height"},
  sheetGrip:{he:"גרירה לשינוי גובה החלונית. חצים מעלה ומטה, או Enter להחלפה.",
             en:"Drag to resize the panel. Arrow up and down, or Enter to toggle."},
  backToList:{he:"לרשימה",en:"Back to list"},
  openMap:{he:"פתח במפה",en:"Open in Maps"},
  video:{he:"וידאו",en:"Video"},
  sources:{he:"מקורות:",en:"Sources:"},
  newTab:{he:" (נפתח בכרטיסייה חדשה)",en:" (opens in a new tab)"},
  close:{he:"סגור",en:"Close"},
  copyName:{he:"העתק שם באנגלית",en:"Copy English name"},
  copied:{he:"הועתק",en:"Copied"},
  copyFailed:{he:"ההעתקה נכשלה",en:"Copy failed"},
  save:{he:"שמור",en:"Save"},
  unsave:{he:"הסר מהשמורים",en:"Remove from saved"},
  saved:{he:"נשמר",en:"Saved"},
  removed:{he:"הוסר",en:"Removed"},
  whatNow:{he:"מה מחפשים עכשיו?",en:"What are you after?"},
  inWholeTrip:{he:"בכל הטיול",en:"across the trip"},
  savedTitle:{he:"המקומות ששמרת",en:"Places you saved"},
  savedEmpty:{he:"עוד לא שמרת כלום. הקש על הלב בכל מקום כדי לאסוף אותו לכאן.",en:"Nothing saved yet. Tap the heart on any place to collect it here."},
  results:{he:"תוצאות",en:"results"},
  resultsFor:{he:"עבור",en:"for"},
  noResults:{he:"לא מצאנו. נסו שם של מאכל, עיר, או מילה מתוך התיאור.",en:"Nothing found. Try a dish, a city, or a word from the description."},
  thin:{he:"מעט מידע",en:"thin"},
  thinTitle:{he:"התחנה הזו עוד רזה",en:"This station is still thin"},
  thinBody:{he:"יש כאן %n מקומות בלבד. חלק מהמחקר שנעשה עליה נעצר בשלב איתור הקואורדינטות ולא הגיע לאתר.",
            en:"Only %n places here. Part of the research on it stopped at the geocoding stage and never reached the site."},
  selfRated:{he:"דירוג עצמי, לא רשמי",en:"self-declared rating"},
  perNight:{he:"ללילה",en:"per night"},
  checked:{he:"נבדק",en:"checked"},
  avoid:{he:"מומלץ להימנע",en:"Avoid"},
  approx:{he:"מיקום מקורב",en:"approximate location"},
  noCoords:{he:"אין מיקום מדויק — הקישור יחפש לפי שם",en:"No exact location — the link searches by name"},
  stars5:{he:"%n מתוך 5 כוכבים",en:"%n out of 5 stars"},
  evisa:{he:"הגשת בקשה ל-E-Visa",en:"Apply for E-Visa"},
  prearrival:{he:"כרטיס טרום-הגעה",en:"Pre-Arrival Card"},
  official:{he:"אתרים רשמיים של ממשלת ויאטנם",en:"Official Vietnamese government sites"},
  tripInfo:{he:"על הטיול",en:"About the trip"},
  departTLV:{he:"יציאה מ-TLV",en:"Depart TLV"},
  returnTLV:{he:"חזרה ל-TLV",en:"Return TLV"},
  hotelNights:{he:"לילות מלון",en:"Hotel nights"},
  nightsSub:{he:"בתוספת 2 רכבות לילה ושייט בהא לונג",en:"plus 2 night trains and the Ha Long cruise"},
  ownSpend:{he:"אומדן הוצאה עצמית",en:"Own spend estimate"},
  ownSpendSub:{he:"מעבר לחבילת הסוכן ולטיסות",en:"on top of the agent package and flights"},
  fxTitle:{he:"שער חליפין",en:"Exchange rate"},
  fxSub:{he:"נבדק 6/9/2026",en:"checked 6 Sep 2026"},
  poolSize:{he:"גודל המאגר",en:"Pool size"},
  poolSub:{he:"על פני %s תחנות בארבעה אזורים",en:"across %s stations in four regions"},
  domFlights:{he:"טיסות פנים",en:"Domestic flights"},
  domSub:{he:"Vietnam Airlines בלבד",en:"Vietnam Airlines only"},
  rateNote:{he:"על השערים",en:"About the rates"},
  rateNoteBody:{he:"נבדקו ב-6/9/2026 מול open.er-api.com ו-frankfurter.app. קבועים בקוד כי משיכת רשת חסומה כאן; באתר האמיתי הם נמשכים אונליין.",
                en:"Checked on 6 Sep 2026 against open.er-api.com and frankfurter.app. Hard-coded here because network calls are blocked; the real site fetches them live."},
  langLabel:{he:"בחירת שפה",en:"Choose language"},
  curLabel:{he:"מטבע לתצוגת מחירים",en:"Currency for prices"},
  docTitle:{he:"ויאטנם במבט אחד",en:"Vietnam at a glance"},
  navLabel:{he:"ניווט ראשי",en:"Main navigation"},
  langChanged:{he:"השפה הוחלפה לעברית",en:"Language switched to English"},
  pricesIn:{he:"המחירים מוצגים ב%s",en:"Prices shown in %s"},
  curName:{USD:{he:"דולר",en:"US dollars"},ILS:{he:"שקלים",en:"shekels"},VND:{he:"דונג",en:"Vietnamese dong"}},
  tbWindow:{he:"הטיול",en:"Trip"},
  tbNights:{he:"לילות",en:"nights"},
  tbToday:{he:"היום",en:"Today"},
  tbUntil:{he:"יום ליציאה",en:"days to departure"},
  tbToday0:{he:"יוצאים היום",en:"Departing today"},
  tbDayOf:{he:"יום בטיול",en:"day of the trip"},
  tbOver:{he:"הטיול הסתיים",en:"Trip complete"},
  wxTitle:{he:"התאמה למזג האוויר",en:"Weather outlook"},
  wxLive:{he:"תחזית חיה",en:"live forecast"},
  wxClimate:{he:"לפי 6 שנים",en:"6-year normal"},
  wxTemp:{he:"טמפרטורה",en:"temperature"},
  wxRainChance:{he:"סיכוי לגשם",en:"chance of rain"},
  wxRainTotal:{he:"משקעים בחלון",en:"rain in window"},
  wxFeasible:{he:"היתכנות",en:"feasible"},
  sensHigh:{he:"פעילות חוץ",en:"Outdoor"},
  sensHighEg:{he:"שיט, טרק, חוף, אופנוע",en:"boats, treks, beaches, motorbikes"},
  sensMed:{he:"חוץ מוגן",en:"Semi-sheltered"},
  sensMedEg:{he:"עיר עתיקה, שוק פתוח, אתר",en:"old town, open market, site"},
  sensLow:{he:"מקורה",en:"Indoors"},
  sensLowEg:{he:"מערה, מוזיאון, מסעדה, ספא",en:"caves, museums, restaurants, spa"},
  sens_high:{he:"פעילות חוץ",en:"outdoor"},
  sens_medium:{he:"חוץ מוגן",en:"semi-sheltered"},
  sens_low:{he:"מקורה",en:"indoors"},
  feasTip:{he:"היתכנות לפי מזג האוויר · %s",en:"Weather feasibility · %s"},
  feasAria:{he:"היתכנות %p אחוז, %s",en:"%p percent feasible, %s"},
  wxNoteLive:{he:"תחזית חיה, נמשכת בכל טעינה. כל שינוי בתחזית משנה את המספרים כאן מיד.",
              en:"Live forecast, fetched on every load. Any change in the forecast moves these numbers immediately."},
  wxNoteClimate:{he:"תחזית לא מגיעה מעבר ל-16 יום, אז עד אמצע אוקטובר מוצג ממוצע %d שנים. ברגע שתאריכי הטיול ייכנסו לטווח התחזית, המספרים כאן יתחלפו לבד.",
                 en:"Forecasts do not reach beyond 16 days, so until mid-October this shows a %d-year average. The moment the trip dates enter forecast range these numbers switch over on their own."},
  credits:{he:"קרדיט לתצלומים",en:"Photo credits"},
  creditsNote:{he:"כל תצלומי התחנות מ-Wikimedia Commons, ברישיון חופשי. שם הצלם והרישיון לצד כל תחנה.",
               en:"All station photos are from Wikimedia Commons under free licences. Photographer and licence are listed per station."}
};
var lang="he";
try{lang=localStorage.getItem("vn.lang")||"he";}catch(e){}
function t(k,vars){
  var s=(T[k]&&T[k][lang])||(T[k]&&T[k].he)||k;
  if(vars) Object.keys(vars).forEach(function(v){s=s.replace(v,vars[v]);});
  return s;
}
function isHe(){return lang==="he";}

/* ============ קטגוריות ואזורים ============ */
var CATS=[
  {id:"must_see",   he:"חובה לראות",  en:"Must see",     ic:"star"},
  {id:"attractions",he:"אטרקציות",    en:"Things to do", ic:"hike"},
  {id:"street_food",he:"אוכל רחוב",   en:"Street food",  ic:"bowl"},
  {id:"restaurants",he:"מסעדות",      en:"Restaurants",  ic:"bowl"},
  {id:"food",       he:"אוכל",        en:"Food",         ic:"bowl"},
  {id:"markets",    he:"שווקים",      en:"Markets",      ic:"basket"},
  {id:"nightlife",  he:"חיי לילה",    en:"Nightlife",    ic:"moon"},
  {id:"spa",        he:"ספא ומסאז'",  en:"Spa & massage",ic:"heart"},
  {id:"hotels",     he:"לינה",        en:"Stay",         ic:"bed"},
  {id:"logistics",  he:"לוגיסטיקה",   en:"Logistics",    ic:"van"},
  {id:"contacts",   he:"אנשי קשר",    en:"Contacts",     ic:"card"}
];
/* מישלין מגיע מהדאטה בשדה signal ולא מנוסח כאן */
var SIGNAL={
  michelin_star:{he:"מישלין ★",en:"MICHELIN ★",cls:"sig-star"},
  michelin_bib: {he:"ביב גורמן",en:"Bib Gourmand",cls:"sig-bib"}
};
var REGIONS=[
  {id:"north",he:"צפון",en:"North"},{id:"central",he:"מרכז",en:"Central"},
  {id:"highlands",he:"רמות המרכז",en:"Central Highlands"},{id:"south",he:"דרום",en:"South"}
];
var HE_NAME={
  "hanoi":"האנוי","ha-giang":"הא ז'יאנג","sapa":"סאפה","ha-long":"הא לונג וקאט בא",
  "ninh-binh":"נין בין","phong-nha":"פונג ניה","hue":"הואה","hoi-an":"הוי אן ודה נאנג",
  "buon-ma-thuot":"בואן מה תואוט","lak-lake":"אגם לאק","da-lat":"דה לאט",
  "saigon":"הו צ'י מין (סייגון)","mekong":"מקונג וקאן טו","phu-quoc":"פו קוטק"
};
var SCENE={
  "hanoi":"city","ha-giang":"peaks","sapa":"terraces","ha-long":"karst","ninh-binh":"karst",
  "phong-nha":"peaks","hue":"river","hoi-an":"lanterns","buon-ma-thuot":"hills",
  "lak-lake":"lake","da-lat":"pines","saigon":"city","mekong":"delta","phu-quoc":"beach"
};
function catName(c){return isHe()?c.he:c.en;}
function regName(r){return isHe()?r.he:r.en;}
function stName(st){return isHe()?(HE_NAME[st.id]||st.name):st.name;}
var CAT_BY={}; CATS.forEach(function(c){CAT_BY[c.id]=c;});

var STATIONS=Object.keys(POI_DATA).map(function(k){return POI_DATA[k];}).sort(function(a,b){return a.seq-b.seq;});
var INDEX=[];
STATIONS.forEach(function(st){
  CATS.forEach(function(c){
    (st.poi[c.id]||[]).forEach(function(rec){
      INDEX.push({rec:rec,cat:c.id,station:st,key:st.id+"|"+c.id+"|"+rec.name,
        hay:[rec.name,rec.area,rec.what,rec.why,st.name,HE_NAME[st.id]||"",c.he,c.en].join(" ").toLowerCase()});
    });
  });
});
/* ============ מרחק ומיקום ============
   חישוב מקומי בלבד. הנ"צ כבר בנתונים, ולכן המיון עובד **אופליין** —
   בניגוד למפה, שדורשת אריחים מהרשת. זה מה שהופך את המצב הזה לשימושי
   בדיוק במקום שבו המדריך נחוץ: בשטח, בלי קליטה. */
var R_EARTH=6371;
function haversine(lat1,lng1,lat2,lng2){
  var toRad=Math.PI/180;
  var dLat=(lat2-lat1)*toRad, dLng=(lng2-lng1)*toRad;
  var a=Math.sin(dLat/2)*Math.sin(dLat/2) +
        Math.cos(lat1*toRad)*Math.cos(lat2*toRad)*Math.sin(dLng/2)*Math.sin(dLng/2);
  return R_EARTH*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
}
/* שתי צורות לכל מרחק: מוצגת ומדוברת.
   "ק״מ" עם הגרשיים נקרא ב-VoiceOver עברית אות-אות, ולכן השם המחושב
   מקבל מילה מלאה. */
function fmtDist(km,spoken){
  if(km<1){
    var m=Math.round(km*1000/10)*10;
    return t(spoken?"distMSpoken":"distM",{"%n":String(m)});
  }
  /* מעל 1000 ק"מ מעגלים לעשרות — "6,800" אומר את אותו דבר כמו
     "6804" ונקרא הרבה יותר טוב, במיוחד בהקראה. */
  var n=km<10?Number(km.toFixed(1)):(km<1000?Math.round(km):Math.round(km/10)*10);
  var v=n.toLocaleString(isHe()?"he-IL":"en-GB");
  return t(spoken?"distKmSpoken":"distKm",{"%n":v});
}
/* מעל זה המשתמש אינו בוויאטנם. עד היציאה ב-26/10 זהו המצב הנפוץ
   ביותר של המסך, ולכן הוא מטופל כמידע ולא ככשל. */
var IN_VIETNAM_KM=200;

function nearestFrom(lat,lng,limit){
  var out=[];
  INDEX.forEach(function(it){
    var r=it.rec;
    if(r.lat==null||r.lng==null) return;
    out.push({rec:r,cat:it.cat,station:it.station,key:it.key,
      km:haversine(lat,lng,r.lat,r.lng)});
  });
  out.sort(function(a,b){return a.km-b.km;});
  return limit?out.slice(0,limit):out;
}
function nearestStation(lat,lng){
  var best=null;
  STATIONS.forEach(function(st){
    if(st.lat==null) return;
    var km=haversine(lat,lng,st.lat,st.lng);
    if(!best||km<best.km) best={st:st,km:km};
  });
  return best;
}
/* מצב יחיד לכל המסך. state הוא אחד מששת אלה, ואין מצב ביניים סמוי. */
var geo={state:"idle",lat:null,lng:null,at:0,errCode:0,manual:null};
function geoSupported(){
  /* בהקשר לא-מאובטח (file://) האובייקט פשוט לא קיים. במקרה הזה
     הכפתור לא מרונדר כלל — כפתור מת שלוחצים עליו ולא קורה כלום
     גרוע יותר מהיעדרו. */
  return typeof navigator!=="undefined" && !!navigator.geolocation;
}
function requestGeo(onChange){
  railAnnounce=true;
  if(!geoSupported()){ geo.state="unavailable"; onChange(); return; }
  geo.state="locating"; onChange();
  railAnnounce=true;
  navigator.geolocation.getCurrentPosition(function(pos){
    geo.lat=pos.coords.latitude; geo.lng=pos.coords.longitude; geo.at=Date.now();
    var ns=nearestStation(geo.lat,geo.lng);
    geo.state=(ns&&ns.km>IN_VIETNAM_KM)?"far":"ok";
    geo.far=ns;
    railAnnounce=true; onChange();
  },function(err){
    geo.errCode=err&&err.code;
    geo.state=(geo.errCode===1)?"denied":(geo.errCode===3?"timeout":"unavailable");
    railAnnounce=true; onChange();
  },{
    /* ברירת המחדל של timeout היא Infinity — במנהרה "מאתר…" היה נתקע
       לנצח בלי שום מצב סיום ובלי הכרזה נוספת. */
    enableHighAccuracy:false, timeout:10000, maximumAge:300000
  });
}

var query="", favs=loadFavs();

/* ============ מטבע ============
   שערים אמיתיים מ-open.er-api.com ומ-frankfurter.app, 6/9/2026.
   לא 2.92 (fallback ישן ב-index.html) ולא 3.7 (שער מיושן ב-_START-HERE.md).
   ה-CSP כאן חוסם משיכת רשת, אז אין רענון חי — באתר האמיתי הקוד החי כבר קיים. */
var RATES={USD:1,ILS:3.03,VND:26016};
var RATE_DATE="2026-09-06";
var SYM={USD:"$",ILS:"₪",VND:"₫"};
var cur="USD";
try{cur=localStorage.getItem("vn.cur")||"USD";}catch(e){}
if(!RATES[cur]) cur="USD";
function conv(usd){
  var v=usd*RATES[cur];
  if(cur==="VND"){
    if(v>=1e6) return SYM.VND+(v/1e6).toFixed(1).replace(/\.0$/,"")+"M";
    if(v>=1e3) return SYM.VND+Math.round(v/1e3)+"K";
    return SYM.VND+Math.round(v);
  }
  return SYM[cur]+Math.round(v).toLocaleString("en-US");
}
function priceText(r){
  if(r.priceLow==null) return null;
  return r.priceHigh? conv(r.priceLow)+"–"+conv(r.priceHigh).replace(SYM[cur],"") : conv(r.priceLow);
}
/* מחיר בלי יחידה הוא מספר שאי אפשר לפעול לפיו: 15 דולר זה זול ללילה,
   רגיל לצלילה, ומופרך לקערת פו. */
var UNIT={
  per_night: {he:"ללילה",     en:"per night"},
  per_person:{he:"לאדם",      en:"per person"},
  per_dish:  {he:"למנה",      en:"per dish"},
  entry:     {he:"כניסה",     en:"entry"},
  per_hour:  {he:"לשעה",      en:"per hour"},
  free:      {he:"ללא תשלום", en:"free"}
};
function unitText(r){
  var u=UNIT[r.priceUnit];
  return u?(isHe()?u.he:u.en):"";
}
function costText(r){
  if(r.priceUnit==="free") return unitText(r);
  var p=priceText(r);
  return p?p+" "+unitText(r):null;
}

/* ============ תוכן דו-לשוני ============
   לרשומה יש תאום עברי רק אם נכתב לה אחד. אחרת נופלים לאנגלית —
   ואז הכרטיס חייב להישאר LTR, אחרת הפיסוק קופץ לצד הלא נכון. */
function heField(r,key){ return isHe() ? (r[key+"He"]||null) : null; }
function recWhat(r){ return heField(r,"what") || r.what; }
function recWhy(r){  return heField(r,"why")  || r.why; }
function recArea(r){ return heField(r,"area") || r.area; }
function recName(r){ return heField(r,"name") || r.name; }
/* האם הכרטיס הזה נקרא עברית בפועל */
function cardIsHe(r){ return isHe() && !!r.whatHe; }

/* ============ מועדפים ============ */
function loadFavs(){try{return new Set(JSON.parse(localStorage.getItem("vn.favs")||"[]"));}catch(e){return new Set();}}
function saveFavs(){try{localStorage.setItem("vn.favs",JSON.stringify(Array.from(favs)));}catch(e){}}

/* ============ צבע תחנה קריא ============ */
function hexToRgb(h){h=h.replace("#","");return [parseInt(h.slice(0,2),16),parseInt(h.slice(2,4),16),parseInt(h.slice(4,6),16)];}
function ch(c){c/=255;return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4);}
function lum(r){return .2126*ch(r[0])+.7152*ch(r[1])+.0722*ch(r[2]);}
function ratio(a,b){var l1=lum(a),l2=lum(b);if(l1<l2){var t2=l1;l1=l2;l2=t2;}return (l1+.05)/(l2+.05);}
function shiftc(r,f){return r.map(function(v){return Math.max(0,Math.min(255,Math.round(f<1?v*f:v+(255-v)*(f-1))));});}
function hex(r){return "#"+r.map(function(v){return ("0"+v.toString(16)).slice(-2);}).join("");}
function desat(r,amt){var g=Math.round(.2126*r[0]+.7152*r[1]+.0722*r[2]);
  return r.map(function(v){return Math.round(v+(g-v)*amt);});}
var colorCache={};
function stColor(st){
  var isDark=currentDark(), key=st.id+"|"+isDark;
  if(colorCache[key]) return colorCache[key];
  var bg=hexToRgb(isDark?"#181c21":"#ffffff"), rgb=desat(hexToRgb(st.color),.22);
  for(var i=0;i<24&&ratio(rgb,bg)<3.2;i++) rgb=shiftc(rgb,isDark?1.12:0.87);
  return (colorCache[key]=hex(rgb));
}

/* ================= היתכנות לפי מזג אוויר =================
   אין אחוזים שמורים בשום מקום. ההיתכנות היא פונקציה טהורה שמחושבת
   ברגע התצוגה מתוך מזג האוויר העדכני ביותר שיש. לכן כל שינוי בתחזית
   משתקף מעצמו בטעינה הבאה — אין מה "לחשב מחדש" ואין מה לרענן ידנית.

   שני מקורות, בסדר עדיפות:
     1. תחזית חיה  — כשהתאריך בטווח ~16 יום. גוברת תמיד.
     2. נורמות אקלים — ממוצע 6 שנים. גיבוי בלבד, מסומן ככזה.
   התחזית לא מגיעה מעבר ל-16 יום, ולכן עד אמצע אוקטובר יוצג מצב 2. */

var WX_TTL_MS=30*60*1000;                 /* התחזית נשמרת חצי שעה ואז נמשכת מחדש */
var wxCache={};

/* כמה כל סוג פעילות נפגע מגשם. ברירת מחדל לפי קטגוריה,
   וניתן לדרוס פר-רשומה בשדה `weather`. */
var SENS_BY_CAT={
  must_see:"medium", attractions:"high", markets:"medium", street_food:"medium",
  food:"medium", restaurants:"low", hotels:"low", nightlife:"low",
  spa:"low", logistics:"medium", contacts:"low"
};
var SENS_FACTOR={high:1.0, medium:0.55, low:0.12};
function sensOf(rec,cat){
  return rec && rec.weather ? rec.weather : (SENS_BY_CAT[cat]||"medium");
}

/* מזג האוויר של תחנה: תחזית חיה אם אפשר, אחרת נורמה אקלימית. */
function weatherFor(st){
  var c=wxCache[st.id];
  if(c && (Date.now()-c.at)<WX_TTL_MS) return c.data;
  var norm=(typeof CLIMATE!=="undefined" && CLIMATE[st.id])||null;
  var fallback=norm?{rainProb:Math.min(1,norm.rd/30),tmax:norm.tmax,tmin:norm.tmin,
                     mm:norm.mm,source:"climate",days:30}:null;
  /* המשיכה אסינכרונית. הקריאה הראשונה מחזירה נורמה, וכשהתחזית נוחתת
     הדף מצייר מחדש עם המספר האמיתי. תחת CSP של Artifact זה פשוט נכשל בשקט. */
  if(!c){
    wxCache[st.id]={at:Date.now(),data:fallback};
    fetchForecast(st);
  }
  return (wxCache[st.id]&&wxCache[st.id].data)||fallback;
}
function fetchForecast(st){
  try{
    var u="https://api.open-meteo.com/v1/forecast?latitude="+st.lat+"&longitude="+st.lng+
          "&daily=precipitation_sum,precipitation_probability_max,temperature_2m_max,temperature_2m_min"+
          "&forecast_days=16&timezone=Asia%2FBangkok";
    fetch(u,{cache:"no-store"}).then(function(r){return r.ok?r.json():null;}).then(function(j){
      if(!j||!j.daily||!j.daily.time||!j.daily.time.length) return;
      var d=j.daily;
      var probs=(d.precipitation_probability_max||[]).filter(function(v){return v!=null;});
      var avgProb=probs.length?probs.reduce(function(a,b){return a+b;},0)/probs.length/100:null;
      if(avgProb==null) return;
      wxCache[st.id]={at:Date.now(),data:{
        rainProb:avgProb,
        tmax:Math.round(avg(d.temperature_2m_max)*10)/10,
        tmin:Math.round(avg(d.temperature_2m_min)*10)/10,
        mm:Math.round(sum(d.precipitation_sum)),
        source:"forecast", days:d.time.length, from:d.time[0], to:d.time[d.time.length-1]
      }};
      refreshWeatherStrip(st);
    }).catch(function(){});
  }catch(e){}
}
/* מחליף את רצועת מזג האוויר בלבד.
   קריאה ל-render() מכאן הייתה בונה מחדש את כל חלונית הפרטים כמה מאות
   מילישניות אחרי פתיחת תחנה: הפוקוס נזרק, והטאב שהמשתמש בחר חזר לראשון.
   ההערה הישנה טענה שזה נחסם ב-CSP — נכון ב-Artifact, לא נכון באתר החי. */
function refreshWeatherStrip(st){
  var box=document.querySelector(".wx");
  if(!box||!box.parentNode) return;
  if(currentStation() && currentStation().id!==st.id) return;   /* התחנה כבר הוחלפה */
  box.parentNode.replaceChild(weatherStrip(st),box);
}
function avg(a){a=(a||[]).filter(function(v){return v!=null;});return a.length?a.reduce(function(x,y){return x+y;},0)/a.length:0;}
function sum(a){a=(a||[]).filter(function(v){return v!=null;});return a.reduce(function(x,y){return x+y;},0);}

/* הפונקציה עצמה: רגישות הפריט × הסיכוי לגשם. */
function feasibility(rec,cat,st){
  var wx=weatherFor(st);
  if(!wx) return null;
  var f=SENS_FACTOR[sensOf(rec,cat)];
  var pct=Math.max(5,Math.min(99,Math.round(100-wx.rainProb*100*f)));
  return {pct:pct,sens:sensOf(rec,cat),source:wx.source,wx:wx};
}
function feasBand(p){ return p>=75?"good":(p>=50?"fair":"poor"); }

/* ============ תצלום התחנה ============
   תצלומים אמיתיים מ-Wikimedia Commons, מוטמעים כ-data URI כי ה-CSP
   של Artifact חוסם כל תמונה חיצונית. הנוף המצויר נשאר כגיבוי
   לכל תחנה שאין לה תצלום. */
var PHOTO_ALT={
  "hanoi":{he:"גשר ת'ה הוק האדום על אגם הואן קיים, מואר בלילה",en:"The red The Huc bridge on Hoan Kiem Lake, lit at night"},
  "ha-giang":{he:"הרים ירוקים במעלה מא פי לנג",en:"Green mountains at the Ma Pi Leng pass"},
  "sapa":{he:"טרסות אורז בעמק מואנג הואה",en:"Rice terraces in the Muong Hoa valley"},
  "ha-long":{he:"מגדלי אבן גיר עולים מהמים במפרץ הא לונג",en:"Limestone towers rising from the water in Ha Long Bay"},
  "ninh-binh":{he:"נהר בין צוקי קארסט בנין בין",en:"A river between karst cliffs in Ninh Binh"},
  "phong-nha":{he:"פנים מערת אבן גיר בפונג ניה",en:"Inside a limestone cave at Phong Nha"},
  "hue":{he:"פגודת תיין מו על גדת הנהר בהואה",en:"Thien Mu Pagoda on the riverbank in Hue"},
  "hoi-an":{he:"בתים צהובים ופנסים ברובע העתיק של הוי אן",en:"Yellow houses and lanterns in Hoi An's old town"},
  "buon-ma-thuot":{he:"מפל דריי נור הרחב",en:"The wide Dray Nur waterfall"},
  "lak-lake":{he:"אגם לאק מבעד לעצים",en:"Lak Lake seen through the trees"},
  "da-lat":{he:"אגם שואן הואונג במרכז דה לאט",en:"Xuan Huong Lake in central Da Lat"},
  "saigon":{he:"קו הרקיע של הו צ'י מין מנהר סייגון",en:"The Ho Chi Minh City skyline from the Saigon River"},
  "mekong":{he:"סירות עמוסות בשוק הצף בקאי ראנג",en:"Loaded boats at the Cai Rang floating market"},
  "phu-quoc":{he:"מים טורקיז וחוף לבן בפו קוטק",en:"Turquoise water and white sand in Phu Quoc"}
};
function photoAlt(st){
  var a=PHOTO_ALT[st.id];
  return a?(isHe()?a.he:a.en):"";
}
function hasPhoto(st){return typeof STATION_PHOTO!=="undefined" && !!STATION_PHOTO[st.id];}

var sceneCache={};
function scene(st,w,h){
  var key=st.id+"|"+w+"|"+h+"|"+currentDark();
  if(sceneCache[key]) return sceneCache[key];
  var dpr=Math.min(window.devicePixelRatio||1,2);
  var cv=document.createElement("canvas");
  cv.width=w*dpr; cv.height=h*dpr;
  var g=cv.getContext("2d"); g.scale(dpr,dpr);
  paint(g,w,h,st);
  return (sceneCache[key]=cv.toDataURL("image/png"));
}
function mix(a,b,tt){a=hexToRgb(a);b=hexToRgb(b);return hex([0,1,2].map(function(i){return Math.round(a[i]+(b[i]-a[i])*tt);}));}
function paint(g,w,h,st){
  var dark=currentDark();
  /* הגוון מרוסן: הצבע מוחלש לפני שהוא נוגע בנוף, אחרת מתקבל ממשק ממתקים. */
  var base=hex(desat(hexToRgb(st.color),.42));
  var SKY_T=dark?"#141a24":"#d5dee4", SKY_B=dark?"#1e2733":"#eae3d8";
  var LAND =dark?"#182b27":"#3c6154", WATER=dark?"#16262f":"#75989f";
  var sky1=mix(SKY_T,base,dark?.10:.13), sky2=mix(SKY_B,base,dark?.15:.18);
  var grad=g.createLinearGradient(0,0,0,h);
  grad.addColorStop(0,sky1); grad.addColorStop(1,sky2);
  g.fillStyle=grad; g.fillRect(0,0,w,h);

  g.fillStyle=dark?"rgba(228,224,208,.20)":"rgba(255,252,240,.62)";
  g.beginPath(); g.arc(w*0.79,h*0.26,h*0.088,0,Math.PI*2); g.fill();

  var kind=SCENE[st.id]||"hills";
  var tint=dark?.24:.28;
  var far =mix(mix(LAND,base,tint),dark?"#0a0f14":"#ffffff",dark?.28:.30);
  var mid =mix(mix(LAND,base,tint),dark?"#0a0f14":"#ffffff",dark?.12:.13);
  var near=mix(mix(LAND,base,tint),dark?"#0a0f14":"#0e1a16",dark?.02:.12);
  var wat =mix(WATER,base,dark?.14:.17);

  function ridge(color,baseY,amp,step,jag){
    g.fillStyle=color; g.beginPath(); g.moveTo(0,h); g.lineTo(0,baseY);
    var x=0,i=0;
    while(x<=w){
      var tv=Math.sin((i*jag)+st.seq)*0.5+Math.sin(i*jag*2.3+st.seq*2)*0.5;
      g.lineTo(x,baseY-amp*tv); x+=step; i++;
    }
    g.lineTo(w,h); g.closePath(); g.fill();
  }
  function spikes(color,baseY,minH,maxH,count,seed){
    g.fillStyle=color; g.beginPath(); g.moveTo(0,h); g.lineTo(0,baseY);
    for(var i=0;i<count;i++){
      var x0=(i/count)*w, x1=((i+1)/count)*w;
      var hh=minH+(maxH-minH)*(0.5+0.5*Math.sin(i*2.7+seed));
      g.lineTo(x0+(x1-x0)*0.18,baseY);
      g.lineTo(x0+(x1-x0)*0.5,baseY-hh);
      g.lineTo(x1-(x1-x0)*0.12,baseY);
    }
    g.lineTo(w,h); g.closePath(); g.fill();
  }
  function towers(color,baseY,minH,maxH,count,seed,wr){
    g.fillStyle=color;
    for(var i=0;i<count;i++){
      var cx=((i+0.5)/count)*w+w*0.02*Math.sin(i*3.1+seed);
      var hh=minH+(maxH-minH)*(0.5+0.5*Math.sin(i*2.4+seed));
      var hw=(w/count)*wr;
      g.beginPath(); g.moveTo(cx-hw,baseY);
      g.quadraticCurveTo(cx-hw*0.82,baseY-hh*0.72,cx,baseY-hh);
      g.quadraticCurveTo(cx+hw*0.82,baseY-hh*0.72,cx+hw,baseY);
      g.closePath(); g.fill();
    }
    g.fillRect(0,baseY,w,h-baseY);
  }
  function water(y,color){
    g.fillStyle=color; g.fillRect(0,y,w,h-y);
    g.strokeStyle="rgba(255,255,255,.20)"; g.lineWidth=1.2;
    for(var i=0;i<4;i++){
      var yy=y+9+i*((h-y)/5);
      g.beginPath(); g.moveTo(w*(0.07+0.10*i),yy); g.lineTo(w*(0.28+0.10*i),yy); g.stroke();
    }
  }
  function skyline(color,baseY){
    g.fillStyle=color; var x=0,i=0;
    while(x<w){
      var bw=w*(0.045+0.035*((i*7)%3)/2);
      var bh=h*(0.15+0.28*(0.5+0.5*Math.sin(i*1.9+st.seq)));
      g.fillRect(x,baseY-bh,bw-2,bh+(h-baseY));
      x+=bw+w*0.012; i++;
    }
  }

  if(kind==="karst"){
    /* צר וגבוה — אחרת המגדלים נקראים כגבעות ונין בין נראית כמו סאפה */
    towers(far,h*0.76,h*0.34,h*0.62,11,st.seq,0.24);
    towers(mid,h*0.82,h*0.24,h*0.46,8,st.seq+3,0.28);
    water(h*0.82,wat);
    towers(near,h*0.84,h*0.16,h*0.32,5,st.seq+9,0.32);
  }else if(kind==="terraces"){
    ridge(far,h*0.50,h*0.13,w/9,0.9);
    g.fillStyle=mid;
    for(var tr=0;tr<7;tr++){
      g.beginPath();
      var yy=h*0.57+tr*(h*0.062);
      g.moveTo(0,yy);
      for(var x2=0;x2<=w;x2+=w/10){ g.lineTo(x2,yy-h*0.024*Math.sin(x2/w*3.1+tr)); }
      g.lineTo(w,yy+h*0.045);
      for(var x3=w;x3>=0;x3-=w/10){ g.lineTo(x3,yy+h*0.045-h*0.024*Math.sin(x3/w*3.1+tr)); }
      g.closePath(); g.globalAlpha=0.52+0.06*tr; g.fill(); g.globalAlpha=1;
    }
  }else if(kind==="city"){
    ridge(far,h*0.60,h*0.06,w/7,0.8);
    water(h*0.86,wat);
    skyline(mid,h*0.74);
  }else if(kind==="beach"){
    g.fillStyle=far;
    g.beginPath(); g.moveTo(w*0.55,h*0.58);
    g.quadraticCurveTo(w*0.70,h*0.42,w*0.86,h*0.58); g.closePath(); g.fill();
    water(h*0.58,wat);
    g.fillStyle=dark?mix("#b8ab8c","#0a0f14",.55):mix("#e6dac0","#ffffff",.20);
    g.beginPath(); g.moveTo(0,h*0.79);
    for(var x4=0;x4<=w;x4+=w/10){ g.lineTo(x4,h*0.79-h*0.020*Math.sin(x4/w*3.4+st.seq)); }
    g.lineTo(w,h); g.lineTo(0,h); g.closePath(); g.fill();
    [[0.13,1.0],[0.26,0.72]].forEach(function(p){
      var bx=w*p[0], by=h*0.84, top=h*(0.84-0.36*p[1]), sway=w*0.035*p[1];
      g.strokeStyle=near; g.lineWidth=3.6*p[1]; g.lineCap="round";
      g.beginPath(); g.moveTo(bx,by); g.quadraticCurveTo(bx+sway*0.4,(by+top)/2,bx+sway,top); g.stroke();
      g.fillStyle=near;
      for(var f=0;f<6;f++){
        var ang=Math.PI*(0.08+f*0.17);
        var ex=bx+sway+Math.cos(ang)*w*0.072*p[1], ey=top+Math.sin(ang)*h*0.072*p[1]-h*0.012;
        g.beginPath(); g.moveTo(bx+sway,top);
        g.quadraticCurveTo((bx+sway+ex)/2,(top+ey)/2-h*0.042*p[1],ex,ey);
        g.quadraticCurveTo((bx+sway+ex)/2,(top+ey)/2+h*0.012,bx+sway,top);
        g.fill();
      }
    });
  }else if(kind==="lake"){
    ridge(far,h*0.55,h*0.10,w/8,0.75);
    ridge(mid,h*0.66,h*0.08,w/6,1.1);
    water(h*0.70,wat);
  }else if(kind==="delta"){
    ridge(far,h*0.52,h*0.05,w/9,0.6);
    water(h*0.58,wat);
    g.fillStyle=near;
    for(var b=0;b<3;b++){
      var bx2=w*(0.20+b*0.26), by2=h*(0.74+b*0.055);
      g.beginPath(); g.moveTo(bx2-w*0.05,by2);
      g.quadraticCurveTo(bx2,by2+h*0.05,bx2+w*0.05,by2); g.closePath(); g.fill();
    }
  }else if(kind==="lanterns"){
    ridge(far,h*0.64,h*0.05,w/8,0.7);
    water(h*0.84,wat);
    skyline(mid,h*0.78);
    var hues=["#c9922c","#b0553f","#a8567e","#cfc4ae"];
    var wireY=h*0.13;
    g.strokeStyle=dark?"rgba(228,224,208,.26)":"rgba(50,40,28,.26)";
    g.lineWidth=1.1; g.beginPath(); g.moveTo(0,wireY);
    g.quadraticCurveTo(w*0.5,wireY+h*0.055,w,wireY); g.stroke();
    for(var L=0;L<9;L++){
      var tx=(L+0.5)/9, lx=tx*w;
      var ly=wireY+h*0.055*(1-Math.pow(2*tx-1,2))+h*0.045;
      g.strokeStyle=dark?"rgba(228,224,208,.22)":"rgba(50,40,28,.22)";
      g.beginPath(); g.moveTo(lx,ly-h*0.045); g.lineTo(lx,ly); g.stroke();
      g.fillStyle=hues[L%4];
      g.beginPath(); g.ellipse(lx,ly+h*0.048,w*0.0115,h*0.05,0,0,Math.PI*2); g.fill();
    }
  }else if(kind==="pines"){
    ridge(far,h*0.57,h*0.10,w/8,0.8);
    ridge(mid,h*0.69,h*0.07,w/6,1.2);
    g.fillStyle=near;
    for(var p2=0;p2<11;p2++){
      var px=w*(0.03+p2*0.092), ph=h*(0.15+0.10*(0.5+0.5*Math.sin(p2*2.1+st.seq)));
      g.beginPath(); g.moveTo(px,h*0.86); g.lineTo(px+w*0.022,h*0.86-ph); g.lineTo(px+w*0.044,h*0.86);
      g.closePath(); g.fill();
    }
  }else if(kind==="river"){
    ridge(far,h*0.53,h*0.09,w/8,0.8);
    ridge(mid,h*0.65,h*0.06,w/6,1.0);
    water(h*0.72,wat);
    g.fillStyle=near;
    g.beginPath(); g.moveTo(w*0.30,h*0.66);
    g.quadraticCurveTo(w*0.44,h*0.55,w*0.58,h*0.66);
    g.lineTo(w*0.56,h*0.70); g.lineTo(w*0.32,h*0.70); g.closePath(); g.fill();
  }else if(kind==="peaks"){
    spikes(far,h*0.72,h*0.24,h*0.46,5,st.seq);
    spikes(mid,h*0.80,h*0.16,h*0.32,7,st.seq+4);
    ridge(near,h*0.88,h*0.05,w/7,1.4);
  }else{
    ridge(far,h*0.56,h*0.11,w/8,0.8);
    ridge(mid,h*0.68,h*0.09,w/6,1.1);
    ridge(near,h*0.80,h*0.06,w/5,1.5);
  }
}

/* ============ עזרים ============ */
function el(tag,cls,txt){var n=document.createElement(tag);if(cls)n.className=cls;if(txt!=null)n.textContent=txt;return n;}
function en2(n){n.lang="en";n.dir="ltr";n.classList.add("en");return n;}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c];});}
function hl(txt){
  if(!query) return esc(txt);
  var i=txt.toLowerCase().indexOf(query);
  if(i<0) return esc(txt);
  return esc(txt.slice(0,i))+"<mark>"+esc(txt.slice(i,i+query.length))+"</mark>"+esc(txt.slice(i+query.length));
}
function total(st){return CATS.reduce(function(s,c){return s+((st.poi[c.id]||[]).length);},0);}
function mapsUrl(r,st){
  return r.lat!=null?"https://www.google.com/maps/search/?api=1&query="+r.lat+","+r.lng
    :"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(r.name+", "+st.name+", Vietnam");
}
function rideUrl(r,st){
  return r.lat!=null?"https://www.google.com/maps/dir/?api=1&destination="+r.lat+","+r.lng+"&travelmode=driving"
    :"https://www.google.com/maps/dir/?api=1&destination="+encodeURIComponent(r.name+", "+st.name)+"&travelmode=driving";
}
function vidUrl(r,st){return r.video||"https://www.youtube.com/results?search_query="+encodeURIComponent(r.name+" "+st.name);}
/* wa.me רוצה ספרות בלבד, בלי פלוס, מקפים או רווחים */
function waUrl(num){return "https://wa.me/"+String(num).replace(/[^\d]/g,"");}
function brandOf(u){
  try{var p=new URL(u).hostname.split(".");if(p.length>1)p.pop();
      if(p.length>1&&(p[p.length-1]==="co"||p[p.length-1]==="com"))p.pop();
      return p[p.length-1];}catch(e){return u;}
}
/* איפוס לפני הצבה. הצבת אותה מחרוזת פעמיים ברצף אינה משנה את ה-DOM
   ולכן אינה מפיקה הכרזה שנייה — "נשמר" אחרי "נשמר" היה שקט מוחלט.
   אותו דפוס כמו sayHere בתוך הדיאלוג. */
/* מסלול הכרזה יחיד. שתי פונקציות שנבדלות רק בבדיקה אחת הזמינו טעות:
   שלושה קוראים שרצים מתוך render() דיברו אל #live בזמן ש-showModal
   הפך אותו ל-inert, וההכרזה נבלעה בשקט. הבחירה יורדת לכאן פנימה,
   ואי אפשר לפספס אותה.
   האיפוס לפני ההצבה הכרחי: הצבת אותה מחרוזת פעמיים ברצף אינה משנה
   את ה-DOM ולכן אינה מפיקה הכרזה שנייה. */
function say(m){
  var sd=document.getElementById("setDlg");
  var n=document.getElementById(sd&&sd.open?"setLive":"live");
  if(!n) return;
  n.textContent="";
  setTimeout(function(){n.textContent=m;},60);
}
/* כינוי לשם קריאוּת באתרי הקריאה שנוגעים לכרום. אותה פונקציה בדיוק. */
var announce=say;
function currentDark(){
  var s=document.documentElement.getAttribute("data-theme");
  return s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;
}

/* ============ כפתור שמירה ============ */
function favBtn(item){
  var b=el("button","fav"); b.type="button";
  function sync(){
    var on=favs.has(item.key);
    b.textContent="";
    b.appendChild(icon("heart"));
    b.setAttribute("aria-pressed",on?"true":"false");
    b.setAttribute("aria-label",(on?t("unsave"):t("save"))+": "+item.rec.name);
  }
  sync();
  b.addEventListener("click",function(e){
    e.preventDefault(); e.stopPropagation();
    if(favs.has(item.key)) favs.delete(item.key); else favs.add(item.key);
    saveFavs(); sync();
    say((favs.has(item.key)?t("saved"):t("removed"))+": "+item.rec.name);
    renderChrome();
    if(routeName()==="saved") render();
  });
  return b;
}

/* ============ חלון פרטים ============ */
var dlg=document.getElementById("dlg"), lastFocus=null;
function openDetail(item){
  var r=item.rec, st=item.station;
  lastFocus=document.activeElement;
  dlg.textContent="";
  var sh=el("div","sheet");

  var hd=el("div","sheet-hd"), box=el("div");

  /* שני שמות בכותרת. הלטיני אינו קישוט: הוא מה שמראים לנהג מונית,
     ולכן הוא חלק מזהות המקום ויושב בתוך ה-h2 שהוא גם השם הנגיש של
     הדיאלוג. לא משרשרים אותם — מפריד טקסטואלי בין עברית ללטינית
     הוא תו נייטרלי ויקפוץ צד. ההפרדה ויזואלית בלבד. */
  var ttl=el("h2","sheet-ttl"); ttl.id="dlgTitle";
  /* לא cardIsHe: היעדר whatHe אינו הופך שם עברי לאנגלי. recName
     נסמך על isHe() בלבד, וזה התנאי שחייב להתאים לו — אחרת טקסט
     עברי מסומן lang="en" ומוקרא בקול אנגלי. */
  var heName=(isHe()&&r.nameHe)?r.nameHe:null;
  if(heName){
    var nHe=el("span","ttl-he",heName); nHe.lang="he";
    ttl.appendChild(nHe);
    ttl.appendChild(en2(el("span","ttl-en",r.name)));
  }else{
    en2(ttl); ttl.textContent=r.name;
  }
  box.appendChild(ttl);

  var wh=el("div","sheet-where");
  var d=el("span","dotc"); d.style.setProperty("--stationcolor",stColor(st));
  wh.appendChild(d);
  wh.appendChild(document.createTextNode(stName(st)+" · "+catName(CAT_BY[item.cat])));
  box.appendChild(wh);
  hd.appendChild(box);

  /* #live יושב מחוץ ל-dialog, ו-showModal הופך אותו ל-inert, כך
     שהכרזות משם לא נשמעות כשהחלון פתוח. לכן live region משלו. */
  var dlgLive=el("div","sr");
  dlgLive.setAttribute("aria-live","polite");
  dlgLive.setAttribute("aria-atomic","true");
  function sayHere(m){ dlgLive.textContent=""; setTimeout(function(){dlgLive.textContent=m;},60); }

  var acts=el("div","sheet-acts");
  if(heName&&navigator.clipboard){
    var cpb=el("button","ttl-copy"); cpb.type="button";
    /* השם נכנס לתווית כדי שקורא מסך ידע מה הוא מעתיק. תג השפה אובד
       בחישוב השם הנגיש — מגבלת מפרט; ההגייה הנכונה קורית ב-h2. */
    cpb.setAttribute("aria-label",t("copyName")+": "+r.name);
    cpb.appendChild(icon("copy"));
    cpb.addEventListener("click",function(){
      navigator.clipboard.writeText(r.name).then(
        function(){ sayHere(t("copied")+": "+r.name); },
        function(){ sayHere(t("copyFailed")); }
      );
    });
    acts.appendChild(cpb);
  }
  var cb=el("button","closebtn"); cb.type="button";
  cb.setAttribute("aria-label",t("close")); cb.appendChild(icon("close"));
  cb.addEventListener("click",function(){dlg.close();});
  acts.appendChild(cb);
  hd.appendChild(acts);
  sh.appendChild(hd);
  sh.appendChild(dlgLive);

  var he=cardIsHe(r);
  var bd=el("div","sheet-bd");
  if(he){ bd.dir="rtl"; bd.lang="he"; }
  function txt(tag,cls,s){ var n=el(tag,cls,s); if(!he) en2(n); return n; }
  if(recArea(r)) bd.appendChild(txt("div","sheet-where",recArea(r)));
  bd.appendChild(txt("p","sheet-what",recWhat(r)));
  if(recWhy(r)){
    var wb=el("div","whybox");
    wb.appendChild(el("b",null,t("whyHere")));
    wb.appendChild(txt("div",null,recWhy(r)));
    bd.appendChild(wb);
  }
  var facts=el("div","factrow");
  var sg2=SIGNAL[r.signal];
  if(sg2) facts.appendChild(el("span","sig "+sg2.cls,isHe()?sg2.he:sg2.en));
  if(r.tier){
    var s=el("span","stars","★".repeat(r.tier)+"☆".repeat(5-r.tier));
    s.setAttribute("role","img");
    s.setAttribute("aria-label",t("stars5",{"%n":r.tier})+(r.tierOfficial===false?", "+t("selfRated"):""));
    facts.appendChild(s);
    if(r.tierOfficial===false) facts.appendChild(el("span",null,t("selfRated")));
  }
  var ct2=costText(r);
  if(ct2){
    facts.appendChild(el("span","money"+(r.priceUnit==="free"?" is-free":""),ct2));
    if(r.priceChecked) facts.appendChild(el("span",null,t("checked")+" "+r.priceChecked));
  }
  if(r.avoid) facts.appendChild(el("span","warn",t("avoid")));
  if(r.approx) facts.appendChild(el("span",null,t("approx")));
  if(r.lat==null) facts.appendChild(el("span",null,t("noCoords")));
  if(facts.childNodes.length) bd.appendChild(facts);

  var lr=el("div","linkrow");
  /* כחול=מפות, ירוק=נסיעה, אדום=יוטיוב, סגול=וואטסאפ */
  lr.appendChild(lbtn("act-map is-primary","pin",t("openMap"),mapsUrl(r,st),r.name));
  lr.appendChild(lbtn("act-ride","car",t("ride"),rideUrl(r,st),r.name));
  lr.appendChild(lbtn("act-video","play",t("video"),vidUrl(r,st),r.name));
  if(r.whatsapp) lr.appendChild(lbtn("act-chat","chat",t("whatsapp"),waUrl(r.whatsapp),r.name));
  bd.appendChild(lr);

  if((r.sources||[]).length){
    var sl=el("div","srcline");
    sl.appendChild(el("span",null,t("sources")));
    r.sources.forEach(function(u){
      var a=el("a",null,brandOf(u));
      a.href=u; a.target="_blank"; a.rel="noopener noreferrer";
      a.appendChild(el("span","sr",t("newTab")));
      sl.appendChild(a);
    });
    bd.appendChild(sl);
  }
  sh.appendChild(bd);
  dlg.appendChild(sh);
  dlg.showModal();
  cb.focus();
}
function lbtn(cls,ic,label,href,name){
  var a=el("a","lbtn "+cls);
  a.href=href; a.target="_blank"; a.rel="noopener noreferrer";
  a.appendChild(icon(ic));
  a.appendChild(document.createTextNode(label));
  a.appendChild(el("span","sr"," — "+name+t("newTab")));
  return a;
}
dlg.addEventListener("close",function(){ if(lastFocus&&lastFocus.focus) lastFocus.focus(); });
/* click מגרירה מקבל כ-target את האב המשותף של down ו-up. גרירת
   בחירת-טקסט שמתחילה בכותרת ומסתיימת מחוץ ל-sheet נתנה target===dlg
   וסגרה את החלון באמצע העתקת השם — בדיוק ה-flow שהכותרת משרתת. */
var downOnBackdrop=false;
dlg.addEventListener("mousedown",function(e){ downOnBackdrop=(e.target===dlg); });
dlg.addEventListener("click",function(e){
  if(e.target===dlg&&downOnBackdrop) dlg.close();
  downOnBackdrop=false;
});

/* ============ כרטיס מקום ============ */
function poiCard(item,cls){
  var r=item.rec, st=item.station;
  var card=el("div",cls||"pcard");
  card.style.setProperty("--stationcolor",stColor(st));

  if(cls==="rcard"){
    var wr=el("div","rcard-where");
    var dt=el("span","dotc"); dt.style.setProperty("--stationcolor",stColor(st));
    wr.appendChild(dt);
    wr.appendChild(document.createTextNode(stName(st)+" · "+catName(CAT_BY[item.cat])));
    card.appendChild(wr);
  }
  /* הכרטיס עוקב אחרי שפת התוכן שלו, לא אחרי שפת הממשק —
     טקסט אנגלי בכרטיס RTL שובר את הפיסוק. */
  var he=cardIsHe(r);
  if(he){ card.dir="rtl"; card.lang="he"; card.classList.add("is-he"); }

  /* h3 ולא h4: מתחת ל-h2 של התחנה, בלי לדלג על רמה. */
  var h=el("h3","pcard-h");
  var open=el("button","pcard-open"); open.type="button";
  open.setAttribute("aria-haspopup","dialog");
  var nm=el("span","pcard-name");
  if(!r.nameHe||!isHe()) en2(nm);          /* שם המקום נשאר לטיני אם אין תעתיק */
  nm.innerHTML=hl(recName(r));
  open.appendChild(nm);
  open.addEventListener("click",function(){openDetail(item);});
  h.appendChild(open); card.appendChild(h);

  var why=el("div","pcard-why");
  if(!he) en2(why);
  why.innerHTML=hl(recWhy(r)||recWhat(r));
  card.appendChild(why);

  var mt=el("div","pcard-meta");
  var sg=SIGNAL[r.signal];
  if(sg) mt.appendChild(el("span","sig "+sg.cls,isHe()?sg.he:sg.en));
  if(r.tier){
    var s=el("span","stars","★".repeat(r.tier));
    s.setAttribute("role","img"); s.setAttribute("aria-label",t("stars5",{"%n":r.tier}));
    mt.appendChild(s);
  }
  var ct=costText(r);
  if(ct) mt.appendChild(el("span","money"+(r.priceUnit==="free"?" is-free":""),ct));
  if(r.avoid) mt.appendChild(el("span","warn",t("avoid")));
  var fe=feasibility(r,item.cat,st);
  if(fe){
    var chip=el("span","feas "+feasBand(fe.pct),fe.pct+"%");
    chip.title=t("feasTip",{"%s":t("sens_"+fe.sens)});
    chip.setAttribute("role","img");
    chip.setAttribute("aria-label",t("feasAria",{"%p":fe.pct,"%s":t("sens_"+fe.sens)}));
    mt.appendChild(chip);
  }
  mt.appendChild(favBtn(item));
  card.appendChild(mt);
  return card;
}

/* ============ מסכים ============ */
var main=document.getElementById("main");

/* לכל מסך כותרת h1 אחת, שהיא גם יעד הפוקוס אחרי ניווט.
   בלעדיה ניווט-לפי-כותרות לא מוצא נקודת התחלה, ומסך החיפוש התחיל ב-h3. */
/* המזהה חייב להיות יחיד. הגיליון הנייד נבנה פעם אחת ומשאיר את כותרת
   "תחנות" ב-main, ואז מסך התחנה הוסיף כותרת שנייה עם אותו id — כפילות
   מזהה, ו-focus() תפס את הישנה. claimScreenHeading משחרר קודם. */
function claimScreenHeading(node){
  var prev=document.getElementById("screenHeading");
  if(prev&&prev!==node) prev.removeAttribute("id");
  node.id="screenHeading"; node.tabIndex=-1;
  return node;
}
function screenTitle(text,cls){
  var h=el("h1",cls||"sec-head",text);
  claimScreenHeading(h);
  return h;
}
function setDocTitle(screen){
  document.title=(screen?screen+" — ":"")+t("docTitle");
}

/* ================= מפה + גיליון נגרר =================
   נייד בלבד. הדסקטופ נשאר מפוצל, ולכן Leaflet נטען רק כשצריך אותו
   ולא נכפה על מי שגולש במחשב. */
var MOBILE_Q=window.matchMedia("(max-width:900px)");
var lmap=null, lmarkers={}, sheetY=null;
var SNAP=[0.08,0.55,0.86];   /* חלקי גובה החלון: מלא, חצי, ידית */

function isMobileMap(){return MOBILE_Q.matches;}
/* המפה והגיליון חיים רק במסך התחנות. כל מסך אחר מפרק אותם, אחרת
   הגיליון מרחף מעל תוכן שהוא לא שייך לו. */
function exitMapMode(){
  var sh=document.getElementById("mobSheet"); if(sh) sh.remove();
  var mp=document.getElementById("mapPane");
  if(mp){ mp.remove(); if(lmap){lmap.remove();} lmap=null; lmarkers={}; }
  document.body.classList.remove("mob-map");
}

function ensureLeaflet(cb){
  if(window.L) return cb();
  var s=document.createElement("script");
  s.src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
  /* onload מעביר Event כארגומנט ראשון. להעביר את cb ישירות פירושו
     שהקריאה נראית כמו cb(event), והקוד שבודק err חושב שנכשלנו. */
  s.onload=function(){cb();};
  s.onerror=function(){cb(new Error("leaflet failed"));};
  document.head.appendChild(s);
}

function buildMap(){
  var pane=document.getElementById("mapPane");
  if(!pane){
    pane=el("div",null); pane.id="mapPane";
    document.querySelector(".wrap").appendChild(pane);
  }
  /* הגיליון מתחיל מתחת לסרגל העליון, אז המפה חייבת לדעת את גובהו */
  var tb=document.querySelector(".topbar");
  document.documentElement.style.setProperty("--map-top",(tb?tb.offsetHeight:0)+"px");
  if(lmap){ lmap.invalidateSize(); return; }

  lmap=L.map(pane,{zoomControl:false,attributionControl:true})
        .setView([16.3,107.2],5);
  L.control.zoom({position:"topleft"}).addTo(lmap);
  /* אריחי OSM הרשמיים: חינמיים, בלי מפתח וללא חותמת.
     CartoDB עברו לדרוש API key וצובעים את האריחים ב-"API KEY REQUIRED",
     ולכן הם לא שמישים כאן. הייחוס חובה לפי תנאי השימוש. */
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{
    maxZoom:19,
    attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(lmap);

  STATIONS.forEach(function(st){
    var html='<span class="map-pin" style="background:'+stColor(st)+'">'+
             String(st.seq).padStart(2,"0")+'</span>';
    var m=L.marker([st.lat,st.lng],{
      icon:L.divIcon({html:html,className:"",iconSize:[26,26],iconAnchor:[13,13]}),
      keyboard:true,
      title:stName(st)+", "+total(st)+" "+t("places")
    }).addTo(lmap);
    m.on("click",function(){ location.hash="#s/"+st.id; });
    lmarkers[st.id]=m;
  });
}

function markMapPin(sel){
  Object.keys(lmarkers).forEach(function(id){
    var e=lmarkers[id].getElement();
    if(!e) return;
    var pin=e.querySelector(".map-pin");
    if(pin) pin.classList.toggle("is-on",!!sel && id===sel.id);
  });
  if(sel && lmap) lmap.flyTo([sel.lat,sel.lng],9,{duration:.6});
}

/* ---- הגיליון ---- */
function setSheet(frac,animate){
  var sh=document.getElementById("mobSheet");
  if(!sh) return;
  sheetY=frac;
  sh.classList.toggle("is-dragging",!animate);
  sh.style.setProperty("--sheet-y",(frac*100)+"vh");
  /* aria-expanded אינו מותר על role="region" ולכן פשוט לא נחשף.
     המצב שייך לפקד שמרחיב — הידית — שעד כה הכריזה "כפתור" בלי
     שום מצב. */
  sh.removeAttribute("aria-expanded");
  var gp=sh.querySelector(".sheet-grip");
  if(gp) gp.setAttribute("aria-expanded",frac<0.4?"true":"false");
  if(!animate) requestAnimationFrame(function(){sh.classList.remove("is-dragging");});
}
function nearestSnap(frac){
  return SNAP.reduce(function(a,b){return Math.abs(b-frac)<Math.abs(a-frac)?b:a;});
}
function wireSheetDrag(sh,grip){
  var startY=0,startFrac=0,dragging=false;
  function down(e){
    dragging=true; startY=(e.touches?e.touches[0].clientY:e.clientY);
    startFrac=sheetY==null?SNAP[1]:sheetY;
    sh.classList.add("is-dragging");
    window.addEventListener("pointermove",move);
    window.addEventListener("pointerup",up,{once:true});
  }
  function move(e){
    if(!dragging) return;
    var y=e.clientY, d=(y-startY)/window.innerHeight;
    var f=Math.min(SNAP[2],Math.max(SNAP[0],startFrac+d));
    sh.style.setProperty("--sheet-y",(f*100)+"vh");
    sheetY=f;
  }
  function up(){
    dragging=false;
    window.removeEventListener("pointermove",move);
    sh.classList.remove("is-dragging");
    setSheet(nearestSnap(sheetY),true);
  }
  grip.addEventListener("pointerdown",down);
  /* מקלדת: הגיליון חייב להיות נגיש גם בלי גרירה */
  grip.tabIndex=0;
  grip.setAttribute("role","button");
  grip.addEventListener("keydown",function(e){
    var i=SNAP.indexOf(nearestSnap(sheetY==null?SNAP[1]:sheetY));
    if(e.key==="ArrowUp"||e.key==="ArrowRight"){e.preventDefault();setSheet(SNAP[Math.max(0,i-1)],true);}
    if(e.key==="ArrowDown"||e.key==="ArrowLeft"){e.preventDefault();setSheet(SNAP[Math.min(2,i+1)],true);}
    if(e.key==="Enter"||e.key===" "){e.preventDefault();setSheet(SNAP[i===1?0:1],true);}
  });
}

/* ============ תצוגה מפוצלת ============
   מסך אחד: רשימה קבועה בצד, פרטים לצידה. מעבר בין תחנות מחליף
   את חלונית הפרטים בלבד — הרשימה לא נבנית מחדש ולא מאבדת גלילה. */
function screenSplit(sel){
  if(isMobileMap()) return screenMobileMap(sel);
  document.body.classList.remove("mob-map");
  var wrap=main.querySelector(".split");
  if(!wrap){
    main.textContent="";
    /* בלי כותרת סמויה כאן. היא נשאה screenHeading, ישבה ראשונה ב-DOM,
       ולכן getElementById החזיר אותה במקום שם התחנה — כל מעבר תחנה
       הכריז "תחנות" והפוקוס נעלם לתוך אלמנט בגודל פיקסל. */
    wrap=el("div","split");
    wrap.appendChild(buildRail());
    var d=el("div","detail"); d.id="detailPane";
    wrap.appendChild(d);
    main.appendChild(wrap);
  }
  wrap.classList.toggle("has-detail",!!sel);
  syncRail(sel);
  var pane=document.getElementById("detailPane");
  pane.textContent="";
  if(sel){ renderStationDetail(sel,pane); setDocTitle(stName(sel)); }
  else { pane.appendChild(detailEmpty()); setDocTitle(null); }
}

/* מפה מלאת-מסך עם גיליון נגרר מעליה. הגיליון מחזיק את אותו תוכן
   בדיוק של החלונית בדסקטופ — רשימה כשאין בחירה, פרטים כשיש. */
function screenMobileMap(sel){
  document.body.classList.add("mob-map");
  var sh=document.getElementById("mobSheet");
  if(!sh){
    main.textContent="";
    main.appendChild(screenTitle(t("navStations"),"sr"));
    sh=el("div","mob-sheet"); sh.id="mobSheet";
    sh.setAttribute("role","region");
    sh.setAttribute("aria-label",t("allStations"));
    var grip=el("div","sheet-grip");
    /* שם נגיש מתאר מה הפקד הוא, לא איך משתמשים בו. ההוראות עוברות
       ל-describedby, שם מקומן. */
    grip.setAttribute("aria-label",t("sheetGripName"));
    grip.setAttribute("aria-controls","sheetBody");
    var gh=el("p","sr",t("sheetGrip")); gh.id="sheetGripHelp";
    grip.setAttribute("aria-describedby","sheetGripHelp");
    sh.appendChild(grip);
    sh.appendChild(gh);
    var body=el("div","sheet-body"); body.id="sheetBody";
    sh.appendChild(body);
    document.querySelector(".wrap").appendChild(sh);
    wireSheetDrag(sh,grip);
    setSheet(SNAP[1],false);
    ensureLeaflet(function(err){ if(!err) buildMap(); });
  }
  var body=document.getElementById("sheetBody");
  body.textContent="";
  if(sel){
    renderStationDetail(sel,body);
    setDocTitle(stName(sel));
    setSheet(SNAP[0],true);          /* תחנה נבחרה — פותחים מלא */
  }else{
    body.appendChild(buildRail());
    setDocTitle(null);
    setSheet(SNAP[1],true);          /* חזרה לרשימה — חצי מסך, המפה נראית */
  }
  syncRail(sel);
  if(window.L && lmap) markMapPin(sel);
  else ensureLeaflet(function(err){ if(!err){ buildMap(); markMapPin(sel);} });
}

/* מעבר בין דסקטופ לנייד מחייב בנייה מחדש — שני המבנים לא חולקים DOM */
MOBILE_Q.addEventListener("change",function(){
  var sh=document.getElementById("mobSheet");
  if(sh) sh.remove();
  var mp=document.getElementById("mapPane");
  if(mp){ mp.remove(); lmap=null; lmarkers={}; }
  document.body.classList.remove("mob-map");
  main.textContent="";
  render();
});

function detailEmpty(){
  var d=el("div","detail-empty");
  d.appendChild(icon("compass","ic-lg"));
  d.appendChild(el("b",null,t("pickStation")));
  d.appendChild(el("span",null,t("pickHint")));
  return d;
}

/* ============ מצב "לפי מרחק" ============ */
/* מכוון לא נשמר בין טעינות. מצב "לפי מרחק" ששרד refresh היה נפתח
   ב-geo.state="idle", ו-idle לא מציג רשימה — כלומר מסך התחנות היה
   נפתח בלי אף תחנה. ההעדפה נשארת לאורך הסשן, שם היא מועילה. */
var sortMode="route";
/* ההכרזה שייכת להחלפה יזומה בלבד. בלי הדגל הזה כל רינדור של המסך
   היה מכריז "כל התחנות, 14" מחדש. */
var railAnnounce=false;
function setSortMode(m){ sortMode=m; railAnnounce=true; }
/* המתג. אותו דפוס .seg של הכרום — aria-pressed, לא role=tab:
   אלה אינם לשוניות של אותו תוכן אלא שני סידורים של אותה רשימה. */
function buildSortSeg(onSwitch){
  var seg=el("div","seg seg-sort");
  seg.setAttribute("role","group");
  seg.setAttribute("aria-label",t("sortMode"));
  [["route","byRoute"],["dist","byDist"]].forEach(function(pair){
    var b=el("button",null,t(pair[1]));
    b.type="button";
    b.setAttribute("aria-pressed",sortMode===pair[0]?"true":"false");
    b.addEventListener("click",function(){
      if(sortMode===pair[0]) return;
      setSortMode(pair[0]);
      onSwitch(pair[0]);
    });
    seg.appendChild(b);
  });
  return seg;
}
/* המרחק כשלושה צמתים נפרדים ולא כמחרוזת אחת: הספרות LTR, היחידה
   עברית, המפריד ניטרלי והשם לעיתים לטיני. מחרוזת אחת הייתה נפתרת
   ע"י אלגוריתם ה-bidi אחרת ב-iOS מאשר בדסקטופ. */
function nearRow(hit){
  /* כפתור ולא קישור. השורה מכריזה מקום ספציפי, ולכן היא חייבת לפתוח
     את המקום הזה — קישור ל-#s/<station> היה מכריז "בנה מי פואונג"
     ונוחת ברשימה של 42 מקומות. אותו דפוס בדיוק כמו .pcard-open. */
  var a=el("button","near-row"); a.type="button";
  a.setAttribute("aria-haspopup","dialog");
  a.addEventListener("click",function(){ openDetail(hit); });
  var d=document.createElement("bdi");
  d.className="near-dist"; d.textContent=fmtDist(hit.km,false);
  a.appendChild(d);
  var txt=el("div","near-txt");
  var nm=document.createElement("bdi");
  nm.className="near-name";
  nm.textContent=(isHe()&&hit.rec.nameHe)?hit.rec.nameHe:hit.rec.name;
  txt.appendChild(nm);
  var c=CAT_BY[hit.cat];
  txt.appendChild(el("div","near-sub",(c?(isHe()?c.he:c.en):"")+" · "+stName(hit.station)));
  a.appendChild(txt);
  /* בתצוגה המרחק ראשון; בשם המחושב השם ראשון. אחרת כל 40 הפריטים
     מתחילים בספרה, ניווט לפי אות ראשונה מת, והשם משתנה בכל רענון
     מיקום. אותו דפוס כמו railItem. */
  a.setAttribute("aria-label",nm.textContent+", "+fmtDist(hit.km,true)+", "+
    (c?(isHe()?c.he:c.en):"")+", "+stName(hit.station));
  return a;
}
function nearStationPicker(onPick){
  var box=el("div","near-pick");
  box.appendChild(el("p","near-pick-t",t("nearPick")));
  var lbl=el("label","sr",t("nearPickLbl")); lbl.setAttribute("for","nearSel");
  box.appendChild(lbl);
  var sel=document.createElement("select");
  sel.className="near-sel"; sel.id="nearSel";
  sel.setAttribute("data-refocus","pick");
  var ph=document.createElement("option");
  /* "—" מוקרא "מינוס" או מדולג. אופציית ברירת המחדל צריכה להיות מילים. */
  ph.value=""; ph.textContent=t("nearPickLbl"); sel.appendChild(ph);
  /* אותה הגנה כמו ב-nearestStation: תחנה בלי נ"צ הייתה מחזירה NaN,
     והמסך היה מציג ומכריז "NaN ק״מ". */
  STATIONS.filter(function(st){return st.lat!=null;}).forEach(function(st){
    var o=document.createElement("option");
    o.value=st.id; o.textContent=stName(st);
    sel.appendChild(o);
  });
  if(geo.manual) sel.value=geo.manual;
  sel.addEventListener("change",function(){ if(sel.value) onPick(sel.value); });
  box.appendChild(sel);
  return box;
}
function nearButton(label,onClick,refocus){
  var b=el("button","btn-near",label);
  b.type="button";
  /* refreshRail מחליף את כל העץ, כולל הפקד שנלחץ. המזהה היציב הזה
     הוא מה שמאפשר להחזיר אליו את הפוקוס אחרי הבנייה מחדש. */
  if(refocus) b.setAttribute("data-refocus",refocus);
  b.addEventListener("click",onClick);
  return b;
}
/* בונה את גוף המצב. מחזיר גם את הטקסט שיוכרז, כדי שיהיה מקור אמת
   אחד — אזור ה-live הוא אותו אלמנט גלוי, ולא #live הסמוי במקביל. */
function buildNearBody(rerender){
  var box=el("div","near-body"), spoken="";
  function fallback(){
    box.appendChild(nearStationPicker(function(id){
      geo.manual=id; geo.state="manual"; railAnnounce=true; rerender();
    }));
  }
  if(geo.state==="idle"){
    if(geoSupported()){
      box.appendChild(nearButton(t("findNear"),function(){ requestGeo(rerender); },"find"));
      box.appendChild(el("p","near-hint",t("nearHint")));
    }else{
      /* אין geolocation בהקשר הזה — בלי כפתור מת */
      box.appendChild(el("p","near-err",t("errUnavail")));
    }
    fallback();
    return {node:box,say:""};
  }
  if(geo.state==="locating"){
    box.appendChild(el("p","near-wait",t("locating")));
    return {node:box,say:t("locating")};
  }
  if(geo.state==="denied"||geo.state==="timeout"||geo.state==="unavailable"){
    var msg=geo.state==="denied"?t("errDenied"):(geo.state==="timeout"?t("errTimeout"):t("errUnavail"));
    box.appendChild(el("p","near-err",msg));
    if(geo.state==="denied") box.appendChild(el("p","near-how",t("errDeniedHow")));
    /* הכפתור אינו נמחק — הוא הופך ל"נסה שוב" באותו מקום. פקד שנעלם
       מה-DOM אחרי לחיצה גורר את הפוקוס ל-body. */
    if(geo.state!=="denied"&&geoSupported())
      box.appendChild(nearButton(t("retryNear"),function(){ requestGeo(rerender); },"retry"));
    fallback();
    return {node:box,say:msg};
  }
  var origin=null, head="";
  if(geo.state==="far"){
    /* מידע, לא שגיאה. עד היציאה זהו המצב הנפוץ ביותר. */
    var f=geo.far;
    box.appendChild(el("p","near-far",
      t("farAway",{"%d":fmtDist(f.km,false),"%s":stName(f.st)})));
    if(geoSupported())
      box.appendChild(nearButton(t("refreshLoc"),function(){ requestGeo(rerender); },"refresh"));
    fallback();
    return {node:box,say:t("farAway",{"%d":fmtDist(f.km,true),"%s":stName(f.st)})};
  }
  if(geo.state==="manual"){
    var st=POI_DATA[geo.manual];
    if(!st){ geo.state="idle"; return buildNearBody(rerender); }
    origin={lat:st.lat,lng:st.lng};
    head=t("nearStation",{"%s":stName(st)});
  }else{
    origin={lat:geo.lat,lng:geo.lng};
  }
  var hits=nearestFrom(origin.lat,origin.lng,40);
  if(!hits.length){
    box.appendChild(el("p","near-err",t("nearNone")));
    return {node:box,say:t("nearNone")};
  }
  /* היה <p> בקול התצוגה של כותרת — ניווט לפי כותרות דילג עליו. */
  if(head) box.appendChild(el("h2","near-head",head));
  var list=el("div","near-list");
  list.setAttribute("role","list");
  hits.forEach(function(h){
    var w=el("div",null); w.setAttribute("role","listitem");
    w.appendChild(nearRow(h));
    list.appendChild(w);
  });
  box.appendChild(list);
  /* גם במצב ידני — אחרת משתמש שנפל לבחירת תחנה לא יכול לחזור
     למיקום אמיתי בלי לרענן את הדף. נמצא בבדיקה, לא בתכנון. */
  if(geoSupported()){
    box.appendChild(nearButton(geo.state==="ok"?t("refreshLoc"):t("findNear"),
      function(){ requestGeo(rerender); },"refresh"));
  }
  /* M-4: במצב ידני הבורר נעלם ברגע שבחרו בו, והמשתמש שההרשאה שלו
     נחסמה — בדיוק מי שהבורר קיים בשבילו — ננעל על בחירה אחת עד
     לרענון הדף. */
  if(geo.state==="manual") fallback();
  var firstName=(isHe()&&hits[0].rec.nameHe)?hits[0].rec.nameHe:hits[0].rec.name;
  return {node:box,say:t("nearFound",{"%n":String(hits.length),
    "%f":firstName+", "+fmtDist(hits[0].km,true)})};
}

/* המתג והמצבים משנים את תוכן הרשימה בלבד, ולכן בונים מחדש רק אותה
   ולא את כל המסך — render() היה מאפס גם את המפה ואת הגיליון. */
function refreshRail(){
  var old=document.querySelector(".rail");
  if(!old) return;
  /* הכפתור שהמשתמש בדיוק לחץ נהרס בבנייה מחדש, והפוקוס נופל ל-body —
     משתמש מקלדת מאבד את מקומו וחוזר לראש המסמך. שומרים את המיקום
     בקבוצה ומחזירים אליו, אותו דפוס כמו rebuildSeg בכרום. */
  var act=document.activeElement;
  var seg=old.querySelector(".seg-sort");
  var idx=seg?Array.prototype.indexOf.call(seg.children,act):-1;
  /* לא רק המתג: הכפתורים והבורר ב-.near-body נהרסים באותה החלפה.
     "מצא מה קרוב אליי" ממתין עד 10 שניות, וללא זה הפוקוס נופל
     ל-body בדיוק כשהתוצאה מגיעה. */
  var tag=(idx<0&&act&&act.getAttribute)?act.getAttribute("data-refocus"):null;
  var fresh=buildRail();
  old.parentNode.replaceChild(fresh,old);
  if(idx>=0){
    var nseg=fresh.querySelector(".seg-sort");
    if(nseg&&nseg.children[idx]) nseg.children[idx].focus();
  }else if(tag){
    var back=fresh.querySelector('[data-refocus="'+tag+'"]');
    /* במצב locating אין כפתור להחזיר אליו — הכותרת של המצב היא
       היעד ההגיוני, ומשם הפוקוס ממשיך אל התוצאות. */
    /* הפקד שנלחץ לא תמיד קיים במצב הבא — "מצא מה קרוב אליי" נעלם
       כשההרשאה נדחית. שורת המצב היא היעד היציב, והיא נושאת את
       הטקסט שמסביר מה קרה. */
    if(!back) back=fresh.querySelector('[data-refocus="status"]');
    if(back) back.focus();
  }
  if(sortMode!=="dist") syncRail(currentSel());
}
function currentSel(){
  var hz=decodeURIComponent(location.hash.replace(/^#/,""));
  return hz.indexOf("s/")===0?(POI_DATA[hz.slice(2)]||null):null;
}
function buildRail(){
  /* בלי טאבים כאן. הסרגל העליון כבר מנווט בין המסכים, ושתי מערכות
     ניווט שעושות אותו דבר הן בלבול. הרשימה נשארת רשימה. */
  var rail=el("div","rail");
  var hd=el("div","rail-head");
  hd.appendChild(el("span",null,t("allStations")));
  hd.appendChild(el("span","rail-n",String(STATIONS.length)));
  rail.appendChild(hd);

  /* מתג הסידור. "לפי מסלול" הוא צפון→דרום — סדר הנסיעה בפועל,
     ולכן ברירת המחדל. "לפי מרחק" הוא מצב השטח. */
  rail.appendChild(buildSortSeg(function(){ refreshRail(); }));

  if(sortMode==="dist"){
    /* הטקסט כאן גלוי בלבד — **בלי** role="status". אזור live חייב
       להיות רשום אצל שכבת הנגישות לפני שתוכנו משתנה, ו-refreshRail
       מחליף את כל העץ בכל רינדור; אזור שנוצר ומתמלא באותה נשימה
       לרוב אינו מוכרז כלל. ההכרזה יוצאת דרך #live הסטטי. */
    var st=el("p","near-status"); st.id="nearStatus";
    /* גם הוא יעד פוקוס: בין locating לתוצאה יש שתי בניות מחדש, ובלי
       מזהה יציב הפוקוס שהונח כאן נהרס בבנייה הבאה ונופל ל-body. */
    st.setAttribute("data-refocus","status");
    st.tabIndex=-1;
    rail.appendChild(st);
    var built=buildNearBody(function(){ refreshRail(); });
    rail.appendChild(built.node);
    if(built.say){
      st.textContent=built.say;
      if(railAnnounce){ say(built.say); railAnnounce=false; }
    }
    return rail;
  }
  /* M-1: גם החזרה ל"לפי מסלול" מחליפה את כל הרשימה — 40 מקומות
     ממוינים הופכים ל-14 תחנות. בלי הכרזה זה קורה בשקט מוחלט. */
  if(railAnnounce){ say(t("allStations")+", "+STATIONS.length); railAnnounce=false; }

  /* display:flex מבטל את סמנטיקת הרשימה, ולכן מחזירים אותה ידנית —
     אבל role="list" בלי אף listitem גרוע מכלום: קורא מסך מכריז
     "רשימה, 0 פריטים" ואז קורא 14 קישורים תלושים. */
  var list=el("div","rail-list"); list.id="railList";
  REGIONS.forEach(function(reg){
    var inReg=STATIONS.filter(function(s){return s.region===reg.id;});
    if(!inReg.length) return;
    var g=el("div","rail-sect");
    g.setAttribute("role","group");
    g.setAttribute("aria-label",regName(reg));
    var gh=el("div","rail-group",regName(reg));
    gh.setAttribute("aria-hidden","true");   /* השם כבר על ה-group */
    g.appendChild(gh);
    var ul=el("div","rail-ul");
    ul.setAttribute("role","list");
    inReg.forEach(function(st){
      var li=el("div"); li.setAttribute("role","listitem");
      li.appendChild(railItem(st));
      ul.appendChild(li);
    });
    g.appendChild(ul);
    list.appendChild(g);
  });
  rail.appendChild(list);
  return rail;
}

function railItem(st){
  var a=el("a","rail-item");
  a.href="#s/"+st.id;
  a.setAttribute("data-station",st.id);
  a.style.setProperty("--stationcolor",stColor(st));
  if(hasPhoto(st)){
    var img=el("img","rail-thumb");
    img.src=STATION_PHOTO[st.id]; img.alt=""; img.loading="lazy";
    a.appendChild(img);
  }
  var txt=el("div","rail-txt");
  txt.appendChild(el("div","rail-name",stName(st)));
  txt.appendChild(el("div","rail-sub",String(st.seq).padStart(2,"0")+" · "+regName(
    REGIONS.filter(function(r){return r.id===st.region;})[0])));
  a.appendChild(txt);
  a.appendChild(el("span","rail-n",String(total(st))));
  /* בלי זה השם המחושב נגמר ב-"42" בלי מילה שמסבירה מה זה */
  a.setAttribute("aria-label",stName(st)+", "+String(st.seq).padStart(2,"0")+", "+
    regName(REGIONS.filter(function(r){return r.id===st.region;})[0])+", "+
    total(st)+" "+t("places"));
  return a;
}

function syncRail(sel){
  Array.prototype.forEach.call(document.querySelectorAll("[data-station]"),function(n){
    if(sel && n.getAttribute("data-station")===sel.id) n.setAttribute("aria-current","page");
    else n.removeAttribute("aria-current");
  });
}

/* screenHome, revealPlates, stationCard ו-screenStation הוסרו:
   הראוטר מנתב גם home וגם station ל-screenSplit, ולכן ארבעתן לא נקראו.
   הן גם הסתירו באגים — ה-aria-label הנכון לפריט תחנה ישב בפונקציה
   שלא רצה, וכלל .rail שלהן דלף לסרגל הצדדי החי. */
function weatherStrip(st){
  var wx=weatherFor(st);
  var box=el("section","wx");
  if(!wx){ return box; }
  var live=wx.source==="forecast";
  box.setAttribute("aria-label",t("wxTitle"));

  var hd=el("div","wx-hd");
  var tag=el("span","wx-tag"+(live?" is-live":""),live?t("wxLive"):t("wxClimate"));
  hd.appendChild(el("span","wx-t",t("wxTitle")));
  hd.appendChild(tag);
  box.appendChild(hd);

  var stats=el("div","wx-stats");
  stats.appendChild(wxStat(Math.round(wx.tmin)+"–"+Math.round(wx.tmax)+"°",t("wxTemp")));
  stats.appendChild(wxStat(Math.round(wx.rainProb*100)+"%",t("wxRainChance")));
  stats.appendChild(wxStat(wx.mm+" mm",t("wxRainTotal")));
  box.appendChild(stats);

  /* שלוש רמות הרגישות, מחושבות עכשיו מאותו מזג אוויר */
  var rows=el("div","wx-rows");
  [["high",t("sensHigh"),t("sensHighEg")],
   ["medium",t("sensMed"),t("sensMedEg")],
   ["low",t("sensLow"),t("sensLowEg")]].forEach(function(r){
    var p=Math.max(5,Math.min(99,Math.round(100-wx.rainProb*100*SENS_FACTOR[r[0]])));
    var row=el("div","wx-row");
    var lab=el("div","wx-lab");
    lab.appendChild(el("b",null,r[1]));
    lab.appendChild(el("span","wx-eg",r[2]));
    row.appendChild(lab);
    var bar=el("div","wx-bar");
    var fill=el("div","wx-fill "+feasBand(p));
    fill.style.width=p+"%";
    bar.appendChild(fill);
    row.appendChild(bar);
    row.appendChild(el("div","wx-pct "+feasBand(p),p+"%"));
    row.setAttribute("role","img");
    row.setAttribute("aria-label",r[1]+" ("+r[2]+"): "+p+"% "+t("wxFeasible"));
    rows.appendChild(row);
  });
  box.appendChild(rows);
  box.appendChild(el("p","wx-note",live?t("wxNoteLive"):t("wxNoteClimate",{"%d":wx.days})));
  return box;
}
function wxStat(v,l){
  var d=el("div","wx-stat");
  d.appendChild(el("b",null,v));
  d.appendChild(el("span",null,l));
  return d;
}
/* פרטי התחנה בתוך החלונית. הקטגוריות הן טאבים ולא מדפים —
   בחלונית צרה יותר, מדף אופקי לכל קטגוריה הופך לשבעה פסי גלילה. */
function renderStationDetail(st,pane){
  var back=el("a","backbtn"); back.href="#";
  back.appendChild(icon("chev"));
  back.appendChild(document.createTextNode(t("backToList")));
  pane.appendChild(back);

  var hero=el("div","hero");
  hero.style.setProperty("--stationcolor",stColor(st));
  var img=el("img","scene");
  img.src=hasPhoto(st)?STATION_PHOTO[st.id]:scene(st,1140,380);
  img.alt=hasPhoto(st)?photoAlt(st):"";
  img.style.height="clamp(180px,28vw,320px)";
  hero.appendChild(img);
  var ht=el("div","hero-txt");
  /* h2 ולא h1: "תחנות" היא כותרת הדף, ושם התחנה תת-כותרת בתוכה.
     המזהה נודד לכאן כי זה יעד הפוקוס אחרי הניווט. */
  var h1=el("h2","hero-name",stName(st));
  claimScreenHeading(h1);
  ht.appendChild(h1);
  ht.appendChild(en2(el("div","hero-sub",st.name+" · "+total(st)+" places")));
  hero.appendChild(ht);
  pane.appendChild(hero);

  pane.appendChild(weatherStrip(st));

  var qb=el("div","quickbar");
  qb.appendChild(qbtn("act-map is-primary","pin",t("areaMap"),"https://www.google.com/maps/search/?api=1&query="+st.lat+","+st.lng));
  qb.appendChild(qbtn("act-ride","car",t("ride"),"https://www.google.com/maps/dir/?api=1&destination="+st.lat+","+st.lng+"&travelmode=driving"));
  qb.appendChild(qbtn("act-video","play",t("videos"),"https://www.youtube.com/results?search_query="+encodeURIComponent(st.name+" Vietnam travel")));
  pane.appendChild(qb);

  var filled=CATS.filter(function(c){return (st.poi[c.id]||[]).length;});
  if(!filled.length){
    var e=el("div","empty");
    e.appendChild(icon("compass","ic-lg"));
    e.appendChild(document.createTextNode(t("thinTitle")));
    pane.appendChild(e);
    return;
  }

  var tabs=el("div","cat-tabs");
  tabs.setAttribute("role","tablist");
  tabs.setAttribute("aria-label",t("navTopics"));
  var panel=el("div","cat-panel");
  panel.id="catPanel";
  panel.setAttribute("role","tabpanel");

  function show(cat){
    panel.textContent="";
    (st.poi[cat]||[]).forEach(function(r){
      panel.appendChild(poiCard({rec:r,cat:cat,station:st,key:st.id+"|"+cat+"|"+r.name},"rcard"));
    });
    Array.prototype.forEach.call(tabs.children,function(b){
      b.setAttribute("aria-selected",b.getAttribute("data-cat")===cat?"true":"false");
      b.tabIndex=b.getAttribute("data-cat")===cat?0:-1;
    });
    panel.removeAttribute("aria-label");
    panel.setAttribute("aria-labelledby","catTab-"+cat);
  }

  filled.forEach(function(c){
    var b=el("button","cat-tab"); b.type="button";
    b.id="catTab-"+c.id;
    b.setAttribute("role","tab"); b.setAttribute("data-cat",c.id);
    b.setAttribute("aria-controls","catPanel");
    b.appendChild(icon(c.ic));
    b.appendChild(document.createTextNode(catName(c)));
    b.appendChild(el("span","n",String((st.poi[c.id]||[]).length)));
    b.addEventListener("click",function(){show(c.id);});
    /* חצים מזיזים בין טאבים, כמו שתבנית tablist מצפה */
    /* ב-RTL אינדקס 0 יושב מימין, ולכן ArrowRight חייב להקטין את
       האינדקס. בלי זה החץ מזיז לכיוון ההפוך ממה שהעין רואה. */
    b.addEventListener("keydown",function(e){
      var kids=Array.prototype.slice.call(tabs.children), i=kids.indexOf(b), nx;
      var rtl=getComputedStyle(tabs).direction==="rtl";
      var d=e.key==="ArrowRight"?(rtl?-1:1):e.key==="ArrowLeft"?(rtl?1:-1):0;
      if(e.key==="Home") nx=kids[0];
      else if(e.key==="End") nx=kids[kids.length-1];
      else if(d) nx=kids[(i+d+kids.length)%kids.length];
      else return;
      e.preventDefault(); nx.focus(); nx.click();
    });
    tabs.appendChild(b);
  });
  pane.appendChild(tabs);
  pane.appendChild(panel);
  show(filled[0].id);

  if(total(st)<=6){
    var g=el("div","notecard");
    g.appendChild(el("b",null,t("thinTitle")));
    g.appendChild(document.createTextNode(t("thinBody",{"%n":total(st)})));
    pane.appendChild(g);
  }
  say(stName(st)+", "+total(st)+" "+t("places"));
}

function qbtn(cls,ic,label,href){
  var a=el("a","qbtn "+cls);
  a.href=href; a.target="_blank"; a.rel="noopener noreferrer";
  a.appendChild(icon(ic));
  a.appendChild(document.createTextNode(label));
  a.appendChild(el("span","sr",t("newTab")));
  return a;
}

function screenTopics(){
  exitMapMode();
  main.textContent="";
  main.appendChild(screenTitle(t("whatNow")));
  setDocTitle(t("navTopics"));
  var grid=el("div","topics");
  CATS.forEach(function(c){
    var n=INDEX.filter(function(x){return x.cat===c.id;}).length;
    var b=el("button","topic"); b.type="button";
    b.appendChild(icon(c.ic,"ic-lg"));
    b.appendChild(el("span","topic-n",String(n)));
    b.appendChild(el("span","topic-l",catName(c)));
    b.disabled=!n;
    b.addEventListener("click",function(){location.hash="#c/"+c.id;});
    b.setAttribute("aria-label",catName(c)+", "+n+" "+t("places"));
    grid.appendChild(b);
  });
  main.appendChild(grid);
}

function screenCategory(cat){
  exitMapMode();
  main.textContent="";
  var back=el("a","backbtn"); back.href="#topics";
  back.appendChild(icon("chev"));
  back.appendChild(document.createTextNode(t("backTopics")));
  main.appendChild(back);
  var c=CAT_BY[cat]; if(!c){screenTopics();return;}
  var items=INDEX.filter(function(x){return x.cat===cat;});
  var h=el("h1","sec-head"); claimScreenHeading(h);
  h.appendChild(icon(c.ic,"ic-lg"));
  h.appendChild(document.createTextNode(catName(c)));
  h.appendChild(el("span","cnt",items.length+" "+t("inWholeTrip")));
  main.appendChild(h);
  main.appendChild(cardsByStation(items));
  say(catName(c)+", "+items.length);
}

function cardsByStation(items){
  var box=el("div"), byId={};
  items.forEach(function(x){(byId[x.station.id]=byId[x.station.id]||[]).push(x);});
  STATIONS.forEach(function(st){
    var g=byId[st.id]; if(!g) return;
    var h=el("h3","sec-head"); h.style.fontSize=".96rem";
    var d=el("span","dotc"); d.style.setProperty("--stationcolor",stColor(st));
    h.appendChild(d);
    h.appendChild(document.createTextNode(stName(st)));
    h.appendChild(el("span","cnt",String(g.length)));
    box.appendChild(h);
    var list=el("div","reslist");
    g.forEach(function(x){list.appendChild(poiCard(x,"rcard"));});
    box.appendChild(list);
  });
  return box;
}

function screenSaved(){
  exitMapMode();
  main.textContent="";
  main.appendChild(screenTitle(t("savedTitle")));
  setDocTitle(t("navSaved"));
  var items=INDEX.filter(function(x){return favs.has(x.key);});
  if(!items.length){
    var d=el("div","empty");
    d.appendChild(icon("heart","ic-lg"));
    d.appendChild(document.createTextNode(t("savedEmpty")));
    main.appendChild(d);
    return;
  }
  main.appendChild(cardsByStation(items));
}

function screenInfo(){
  exitMapMode();
  main.textContent="";
  main.appendChild(screenTitle(t("tripInfo")));
  setDocTitle(t("navInfo"));
  /* בנייד השורות האלה מוסתרות מהכרום, אז כאן הן חייבות להופיע */
  var of=el("div","info-official");
  of.appendChild(oflink("passport",t("evisa"),"https://evisa.gov.vn"));
  of.appendChild(oflink("doc",t("prearrival"),"https://prearrival.immigration.gov.vn"));
  main.appendChild(of);
  var grid=el("div","facts");
  grid.appendChild(fact(t("departTLV"),"26 Oct","Etihad EY600 · TLV–AUH–HAN",true));
  grid.appendChild(fact(t("returnTLV"),"24 Nov","Etihad EY431 · HAN 20:00 · AUH–TLV",true));
  grid.appendChild(fact(t("hotelNights"),"26",t("nightsSub")));
  grid.appendChild(fact(t("ownSpend"),conv(1550),t("ownSpendSub")));
  grid.appendChild(fact(t("poolSize"),String(INDEX.length)+" "+t("places"),t("poolSub",{"%s":STATIONS.length})));
  grid.appendChild(fact(t("domFlights"),"3",t("domSub")));

  var fx=el("div","fact");
  fx.appendChild(el("div","fact-l",t("fxTitle")));
  fx.appendChild(el("div","fxline","$1 = ₪"+RATES.ILS));
  fx.appendChild(el("div","fxline","₪1 = ₫"+Math.round(RATES.VND/RATES.ILS).toLocaleString("en-US")));
  fx.appendChild(el("div","fact-s",t("fxSub")));
  grid.appendChild(fx);
  main.appendChild(grid);

  var n=el("div","notecard");
  n.appendChild(el("b",null,t("rateNote")));
  n.appendChild(document.createTextNode(t("rateNoteBody")));
  main.appendChild(n);

  /* רישיונות CC BY / CC BY-SA מחייבים ייחוס — זה לא נחמדות */
  if(typeof PHOTO_CREDIT!=="undefined"){
    var c=el("div","notecard");
    c.appendChild(el("b",null,t("credits")));
    c.appendChild(document.createTextNode(t("creditsNote")));
    var ul=el("ul","creditlist");
    STATIONS.forEach(function(st){
      var cr=PHOTO_CREDIT[st.id]; if(!cr) return;
      var li=el("li");
      li.appendChild(el("span","cr-st",stName(st)));
      var a=el("a",null,cr.t);
      a.href=cr.u; a.target="_blank"; a.rel="noopener noreferrer";
      a.lang="en"; a.dir="ltr";
      a.appendChild(el("span","sr",t("newTab")));
      li.appendChild(a);
      li.appendChild(en2(el("span","cr-by",cr.a+" · "+cr.l)));
      ul.appendChild(li);
    });
    c.appendChild(ul);
    main.appendChild(c);
  }
}
/* ערך לטיני בתוך כרטיס עברי חייב dir מפורש — אחרת "26 Oct" מוצג "Oct 26". */
function fact(label,value,sub,latin){
  var d=el("div","fact");
  d.appendChild(el("div","fact-l",label));
  var v=el("div","fact-v",value);
  if(latin) en2(v);
  d.appendChild(v);
  if(sub){
    var s=el("div","fact-s",sub);
    if(!/[֐-׿]/.test(sub)) en2(s);
    d.appendChild(s);
  }
  return d;
}

function screenSearch(){
  exitMapMode();
  main.textContent="";
  var hits=INDEX.filter(function(x){return x.hay.indexOf(query)>=0;});
  var h=screenTitle("","results-head");
  h.appendChild(document.createTextNode(hits.length+" "+t("results")+" "+t("resultsFor")+" "));
  var b=document.createElement("bdi"); b.textContent="“"+query+"”";
  h.appendChild(b);
  main.appendChild(h);
  say(hits.length+" "+t("results"));
  if(!hits.length){
    var d=el("div","empty");
    d.appendChild(icon("search","ic-lg"));
    d.appendChild(document.createTextNode(t("noResults")));
    main.appendChild(d);
    return;
  }
  main.appendChild(cardsByStation(hits));
}

/* ============ ניתוב ============ */
function routeName(){
  var hz=decodeURIComponent(location.hash.replace(/^#/,""));
  if(query) return "search";
  if(hz.indexOf("s/")===0) return "station";
  if(hz.indexOf("c/")===0) return "category";
  if(hz==="topics") return "topics";
  if(hz==="saved") return "saved";
  if(hz==="info") return "info";
  return "home";
}
function render(){
  var hz=decodeURIComponent(location.hash.replace(/^#/,""));
  var r=routeName();
  /* בית ותחנה חולקים מסך אחד — רק חלונית הפרטים מתחלפת ביניהם */
  if(r==="search")        screenSearch();
  else if(r==="station")  screenSplit(POI_DATA[hz.slice(2)]||null);
  else if(r==="category") screenCategory(hz.slice(2));
  else if(r==="topics")   screenTopics();
  else if(r==="saved")    screenSaved();
  else if(r==="info")     screenInfo();
  else                    screenSplit(null);
  markNav(r);
}
var NAV=[
  {id:"home",  hash:"#",       ic:"grid",   key:"navStations"},
  {id:"topics",hash:"#topics", ic:"compass",key:"navTopics"},
  {id:"saved", hash:"#saved",  ic:"heart",  key:"navSaved"},
  {id:"info",  hash:"#info",   ic:"info",   key:"navInfo"}
];
function markNav(r){
  var wants = (r==="category")?"topics":(r==="station"?"home":r);
  if(r==="search") wants=null;
  Array.prototype.forEach.call(document.querySelectorAll("[data-nav]"),function(n){
    if(n.getAttribute("data-nav")===wants) n.setAttribute("aria-current","page");
    else n.removeAttribute("aria-current");
  });
}
window.addEventListener("hashchange",function(){
  /* הקלדה בחיפוש מנקה את ה-hash. בלי השמירה הזו הפוקוס נגנב מהתיבה
     אחרי כל 300ms והמשתמש לא יכול לחפש משום מסך פנימי. */
  var typing=document.activeElement===qEl;
  render();
  if(typing) return;
  var h=document.getElementById("screenHeading");
  if(h){h.focus();}else{document.getElementById("main").focus();}
  window.scrollTo(0,0);
});

/* ============ בניית הכרום (תלוי שפה) ============ */
function renderChrome(){
  document.documentElement.setAttribute("lang",lang);
  document.documentElement.setAttribute("dir",isHe()?"rtl":"ltr");
  document.getElementById("skipLink").textContent=t("skip");
  document.getElementById("brandName").textContent=t("brand");
  document.getElementById("brandSub").textContent=t("brandSub");
  document.getElementById("qLabel").textContent=t("searchLabel");
  var qi=document.getElementById("q");
  qi.placeholder=t("searchPh");
  var cbn=document.getElementById("clearBtn");
  cbn.textContent=""; cbn.appendChild(icon("close")); cbn.setAttribute("aria-label",t("clear"));

  /* renderChrome הורס את הכפתור שהמשתמש בדיוק הפעיל, אז הפוקוס נופל ל-body.
     שומרים את המיקום בקבוצה ומחזירים אליו. */
  function rebuildSeg(id,label,items,isOn,onPick){
    var box=document.getElementById(id);
    var idx=Array.prototype.indexOf.call(box.children,document.activeElement);
    box.textContent=""; box.setAttribute("aria-label",label);
    items.forEach(function(it,i){
      var b=el("button",null,it.label); b.type="button";
      if(it.lang) b.lang=it.lang;
      b.setAttribute("aria-pressed",isOn(it)?"true":"false");
      b.setAttribute("aria-label",it.label+", "+(i+1)+"/"+items.length);
      b.addEventListener("click",function(){ if(!isOn(it)) onPick(it); });
      box.appendChild(b);
    });
    if(idx>=0 && box.children[idx]) box.children[idx].focus();
  }

  rebuildSeg("langSeg",t("langLabel"),
    [{v:"he",label:"עברית",lang:"he"},{v:"en",label:"EN",lang:"en"}],
    function(it){return lang===it.v;},
    function(it){
      lang=it.v;
      try{localStorage.setItem("vn.lang",lang);}catch(e){}
      renderChrome(); render(); announce(t("langChanged"));
    });

  rebuildSeg("curSeg",t("curLabel"),
    ["USD","ILS","VND"].map(function(c){return {v:c,label:c+" "+SYM[c]};}),
    function(it){return cur===it.v;},
    function(it){
      cur=it.v; try{localStorage.setItem("vn.cur",cur);}catch(e){}
      renderChrome(); render();
      announce(t("pricesIn",{"%s":T.curName[cur][lang]}));
    });

  /* כפתור ההגדרות והדיאלוג — טקסטים בלבד; המבנה לא נבנה מחדש,
     כך שההפניה שהדיאלוג שומר לפוקוס נשארת תקפה. */
  var sb=document.getElementById("settingsBtn");
  if(sb){
    sb.textContent=""; sb.appendChild(icon("gear"));
    sb.setAttribute("aria-label",t("settings"));
  }
  var sdt=document.getElementById("setDlgTitle");
  if(sdt) sdt.textContent=t("settings");
  var sc=document.getElementById("setClose");
  if(sc){
    sc.textContent=""; sc.appendChild(icon("close"));
    sc.setAttribute("aria-label",t("closeSettings"));
  }

  /* ערכת נושא */
  var tb=document.getElementById("themeBtn");
  tb.textContent=""; tb.appendChild(icon(currentDark()?"sun":"moon"));
  tb.setAttribute("aria-pressed",currentDark()?"true":"false");
  tb.setAttribute("aria-label",t("dark"));

  renderTripbar();

  /* קישורים רשמיים */
  var of=document.getElementById("officialRow");
  of.textContent="";
  of.appendChild(oflink("passport",t("evisa"),"https://evisa.gov.vn"));
  of.appendChild(oflink("doc",t("prearrival"),"https://prearrival.immigration.gov.vn"));
  of.appendChild(el("span","of-note",t("official")));

  /* טאבים וניווט תחתון */
  var tabs=document.getElementById("tabs"), bot=document.getElementById("botnav");
  tabs.textContent=""; bot.textContent="";
  tabs.setAttribute("aria-label",t("navLabel"));
  bot.setAttribute("aria-label",t("navLabel"));
  NAV.forEach(function(n){
    var a=el("a","tab"); a.href=n.hash; a.setAttribute("data-nav",n.id);
    a.appendChild(icon(n.ic));
    a.appendChild(document.createTextNode(t(n.key)));
    if(n.id==="saved"&&favs.size) a.appendChild(el("span","cnt",String(favs.size)));
    tabs.appendChild(a);

    var b=el("a","bnav"); b.href=n.hash; b.setAttribute("data-nav",n.id);
    b.appendChild(icon(n.ic));
    b.appendChild(document.createTextNode(t(n.key)+(n.id==="saved"&&favs.size?" "+favs.size:"")));
    bot.appendChild(b);
  });
  markNav(routeName());
  /* גובה הסרגל משתנה עם השפה (עטיפת שורות), ו-scroll-padding-top
     נגזר ממנו. בלי זה עוגן שמוקפץ אליו נוחת מתחת לסרגל. */
  if(typeof syncStickyTop==="function") syncStickyTop();
}
/* התאריכים נגזרים מהשעון החי, לא קבועים בקוד —
   הספירה לאחור נכונה בכל טעינה, גם בעוד חודש. */
var TRIP={depart:new Date(2026,9,26), back:new Date(2026,10,24)};
function renderTripbar(){
  var box=document.getElementById("tripbar");
  if(!box) return;
  box.textContent="";
  var loc=isHe()?"he-IL":"en-GB";
  var today=new Date(); today.setHours(0,0,0,0);
  var dMY={day:"numeric",month:"short"}, dFull={weekday:"long",day:"numeric",month:"long"};
  var nights=Math.round((TRIP.back-TRIP.depart)/864e5);
  var left=Math.round((TRIP.depart-today)/864e5);

  box.appendChild(tbItem(t("tbWindow"),
    TRIP.depart.toLocaleDateString(loc,dMY)+" – "+TRIP.back.toLocaleDateString(loc,dMY)+" "+TRIP.back.getFullYear(),
    nights+" "+t("tbNights")));
  box.appendChild(el("span","tb-sep"));
  box.appendChild(tbItem(t("tbToday"),today.toLocaleDateString(loc,dFull),null));

  var c=el("div","tb-count");
  if(left>0){
    c.appendChild(el("b",null,String(left)));
    c.appendChild(el("span",null,t("tbUntil")));
  }else if(left===0){
    c.appendChild(el("b",null,t("tbToday0")));
  }else if(today<=TRIP.back){
    c.appendChild(el("b",null,String(1-left)));
    c.appendChild(el("span",null,t("tbDayOf")));
  }else{
    c.appendChild(el("b",null,t("tbOver")));
  }
  box.appendChild(c);
}
function tbItem(label,value,sub){
  var d=el("div","tb-item");
  d.appendChild(el("span","lbl",label));
  d.appendChild(el("b",null,value));
  if(sub) d.appendChild(el("span","lbl",sub));
  return d;
}
function oflink(ic,label,href){
  var a=el("a","oflink");
  a.href=href; a.target="_blank"; a.rel="noopener noreferrer";
  a.appendChild(icon(ic));
  a.appendChild(document.createTextNode(label));
  a.appendChild(el("span","sr",t("newTab")));
  return a;
}

/* ============ חיפוש ============ */
var qEl=document.getElementById("q"), xBtn=document.getElementById("clearBtn"), tm=null;
qEl.addEventListener("input",function(){
  clearTimeout(tm);
  tm=setTimeout(function(){
    query=qEl.value.trim().toLowerCase();
    xBtn.hidden=!query;
    if(query&&location.hash){location.hash="";}
    else render();
  },300);
});
xBtn.addEventListener("click",function(){qEl.value="";query="";xBtn.hidden=true;render();qEl.focus();});
qEl.addEventListener("keydown",function(e){
  if(e.key==="Escape"&&qEl.value){qEl.value="";query="";xBtn.hidden=true;render();}
});

/* ============ ערכת נושא ============ */
document.getElementById("themeBtn").addEventListener("click",function(){
  var next=currentDark()?"light":"dark";
  document.documentElement.setAttribute("data-theme",next);
  try{localStorage.setItem("vn.theme",next);}catch(e){}
  colorCache={}; sceneCache={};
  renderChrome(); render();
});

/* קישור הדילוג שינה את ה-hash ל-"main", הראוטר לא הכיר אותו והחזיר לדף הבית —
   כלומר הוא זרק את משתמש המקלדת מהעמוד שבו היה. */
document.getElementById("skipLink").addEventListener("click",function(e){
  e.preventDefault();
  main.focus();
  main.scrollIntoView({block:"start"});
});

/* החלפת ערכת נושא במערכת ההפעלה תוך כדי — הצבעים והתצלומים מחושבים מול הרקע */
var mq=window.matchMedia("(prefers-color-scheme: dark)");
if(mq.addEventListener){
  mq.addEventListener("change",function(){
    if(document.documentElement.hasAttribute("data-theme")) return;
    colorCache={}; sceneCache={}; renderChrome(); render();
  });
}

/* ============ דיאלוג ההגדרות ============
   הפקדים עצמם עוברים פיזית לדיאלוג ובחזרה. עותק שני היה יוצר מזהים
   כפולים, ו-rebuildSeg עובד לפי getElementById — כלומר הוא ימשיך
   לעבוד בדיוק אותו דבר בשני המקומות. */
(function(){
  var setDlg=document.getElementById("setDlg");
  var setBody=document.getElementById("setBody");
  var tools=document.getElementById("tbTools");
  var trigger=document.getElementById("settingsBtn");
  if(!setDlg||!setBody||!tools||!trigger) return;

  /* אידמפוטנטי, ונקרא משני המסלולים. התליית ההחזרה באירוע close בלבד
     נכשלה בפועל: סגירה דרך הכפתור השאירה את הפקדים בתוך דיאלוג סגור,
     כלומר בדסקטופ שפה, מטבע ונושא היו נעלמים מהמסך. */
  function restoreTools(){
    if(tools.parentNode===setBody){
      var r1=document.querySelector(".tb-row.r1");
      var btn=document.getElementById("settingsBtn");
      if(r1&&btn&&btn.parentNode===r1) r1.insertBefore(tools,btn);
      else if(r1) r1.appendChild(tools);
    }
  }
  /* .set-row-lbl הוגדר ב-CSS ולא היה בשימוש: התוויות תוכננו ולא
     חוברו. בדיאלוג יש מקום בשפע, ואייקון ירח בודד ברוחב מלא הוא
     עומס קוגניטיבי מיותר. */
  function labelRows(){
    if(setBody.querySelector(".set-row-lbl")) return;
    var lbl=function(target,key){
      var n=document.getElementById(target);
      if(!n||!n.parentNode) return;
      var p=el("p","set-row-lbl",t(key));
      n.parentNode.insertBefore(p,n);
    };
    lbl("langSeg","langLabel"); lbl("curSeg","curLabel"); lbl("themeBtn","dark");
  }
  function openSet(){
    setBody.appendChild(tools);
    labelRows();
    setDlg.showModal();
  }
  function closeSet(){ restoreTools(); setDlg.close(); }

  trigger.addEventListener("click",openSet);
  document.getElementById("setClose").addEventListener("click",closeSet);

  /* Esc מטופל במפורש: אירוע close נמצא לא-אמין כאן בבדיקה, ולכן
     ההחזרה לא נתלית בו לבדה. cancel נורה לפני הסגירה ותמיד. */
  setDlg.addEventListener("cancel",function(){ restoreTools(); });
  /* רשת ביטחון לכל מסלול סגירה אחר. */
  setDlg.addEventListener("close",function(){
    restoreTools();
    /* לאחזר מחדש ולא להסתמך על ההפניה: renderChrome עשוי היה לרוץ
       בזמן שהדיאלוג היה פתוח (החלפת שפה), ו-<dialog> מחזיר פוקוס
       לצומת ששמר — שאולי כבר אינו ב-DOM. */
    var b=document.getElementById("settingsBtn");
    /* offsetParent הוא null כשהכפתור display:none — קורה אם ה-viewport
       חצה את 880px בזמן שהדיאלוג היה פתוח. פוקוס על אלמנט מוסתר
       נופל ל-body. */
    if(b&&b.offsetParent) b.focus();
    else document.getElementById("main").focus();
  });

  /* לחיצה על הרקע סוגרת — אותו דפוס בדיוק כמו ב-#dlg, כולל השמירה
     שלא לסגור כשהגרירה התחילה בתוך החלון והסתיימה על הרקע. */
  var downOnBackdrop=false;
  setDlg.addEventListener("mousedown",function(e){ downOnBackdrop=(e.target===setDlg); });
  setDlg.addEventListener("click",function(e){
    if(e.target===setDlg&&downOnBackdrop) closeSet();
    downOnBackdrop=false;
  });
})();

var topbar=document.getElementById("topbar");
window.addEventListener("scroll",function(){
  topbar.classList.toggle("is-stuck",window.scrollY>4);
},{passive:true});

/* --sticky-top נצרך ע"י .rail אבל מעולם לא הוגדר, ולכן top:calc(...) היה
   לא-חוקי, נפל ל-auto, ו-position:sticky לא עשה כלום — הרשימה שאמורה
   להישאר בצד פשוט נגללה החוצה. נמדד ולא מנוחש, כי גובה הכרום משתנה
   עם עטיפת שורות וגם בין נייד לדסקטופ. */
function syncStickyTop(){
  var h=Math.round(topbar.getBoundingClientRect().height);
  var root=document.documentElement.style;
  root.setProperty("--sticky-top",h+"px");
  root.setProperty("scroll-padding-top",(h+16)+"px");
}
window.addEventListener("resize",syncStickyTop);
window.addEventListener("load",syncStickyTop);
syncStickyTop();

renderChrome();
render();
})();