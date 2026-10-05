/* נורמות אקלים לחלון 26/10-24/11, Open-Meteo Archive.
   גשם וטמפרטורה: ממוצע 6 שנים. רוח וגל: ממוצע 7 שנים (2019-2025).
   wind הוא ממוצע wind_speed_10m_max בקמ"ש; wave הוא ממוצע wave_height_max
   במטרים מה-Marine API, ונמדד בנקודה שבים ולא במרכז העיר — אן תוי ולא
   דואונג דונג, צ'אם ולא הוי אן — כי שם מתקיימת הפעילות שהוא מגביל.
   wave קיים רק לשלוש התחנות שיש בהן פעילות ימית.
   משמשות כגיבוי בלבד: כשיש תחזית חיה בתוך חלון הטיול היא גוברת.
   נוצר ע"י tools/build-climate.py — לא לערוך ביד. */
const CLIMATE={
"hanoi":{"tmax":26.6,"tmin":19.7,"mm":95,"rd":9,"worst":99,"wind":14.1},
"ha-giang":{"tmax":25.9,"tmin":18.5,"mm":107,"rd":13,"worst":86,"wind":6.6},
"sapa":{"tmax":18.1,"tmin":12.7,"mm":106,"rd":17,"worst":43,"wind":7.2},
"ha-long":{"tmax":26.2,"tmin":20.7,"mm":54,"rd":8,"worst":30,"wind":17.4,"wave":0.39},
"ninh-binh":{"tmax":26.5,"tmin":19.8,"mm":133,"rd":10,"worst":163,"wind":15.9},
"phong-nha":{"tmax":25.9,"tmin":21,"mm":527,"rd":25,"worst":170,"wind":16.0},
"hue":{"tmax":26.9,"tmin":22.2,"mm":522,"rd":25,"worst":270,"wind":17.8},
"hoi-an":{"tmax":27.1,"tmin":23.1,"mm":511,"rd":25,"worst":140,"wind":20.3,"wave":1.53},
"buon-ma-thuot":{"tmax":27.8,"tmin":21.2,"mm":190,"rd":12,"worst":126,"wind":19.4},
"lak-lake":{"tmax":27.7,"tmin":20.8,"mm":214,"rd":16,"worst":129,"wind":14.8},
"da-lat":{"tmax":22.4,"tmin":15.7,"mm":193,"rd":18,"worst":76,"wind":19.0},
"saigon":{"tmax":30.6,"tmin":24.1,"mm":182,"rd":20,"worst":44,"wind":12.8},
"mekong":{"tmax":30.3,"tmin":24,"mm":225,"rd":22,"worst":40,"wind":14.0},
"phu-quoc":{"tmax":29.5,"tmin":23.7,"mm":227,"rd":22,"worst":52,"wind":14.1,"wave":0.57}
};
