/* התצלומים כקבצים ולא כ-data URI: נטענים במקביל, נשמרים בקאש,
   וה-HTML נשאר קטן. Wikimedia Commons, רישיון חופשי. */
const STATION_PHOTO={
  "buon-ma-thuot":"assets/photos/buon-ma-thuot.jpg",
  "da-lat":"assets/photos/da-lat.jpg",
  "ha-giang":"assets/photos/ha-giang.jpg",
  "ha-long":"assets/photos/ha-long.jpg",
  "hanoi":"assets/photos/hanoi.jpg",
  "hoi-an":"assets/photos/hoi-an.jpg",
  "hue":"assets/photos/hue.jpg",
  "lak-lake":"assets/photos/lak-lake.jpg",
  "mekong":"assets/photos/mekong.jpg",
  "ninh-binh":"assets/photos/ninh-binh.jpg",
  "phong-nha":"assets/photos/phong-nha.jpg",
  "phu-quoc":"assets/photos/phu-quoc.jpg",
  "saigon":"assets/photos/saigon.jpg",
  "sapa":"assets/photos/sapa.jpg"
};
const PHOTO_CREDIT={
  "buon-ma-thuot":{"t":"Buôn Ma Thuột banner Đray Nur waterfall.jpg","a":"[Tycho] talk , http://shansov.net","l":"CC BY 3.0","u":"https://commons.wikimedia.org/wiki/File:Bu%C3%B4n_Ma_Thu%E1%BB%99t_banner_%C4%90ray_Nur_waterfall.jpg"},
  "da-lat":{"t":"Da Lat - Xuan Huong Lake.jpg","a":"P. Hughes","l":"CC BY 4.0","u":"https://commons.wikimedia.org/wiki/File:Da_Lat_-_Xuan_Huong_Lake.jpg"},
  "ha-giang":{"t":"Ma Pi Leng Pass winding road Ha Giang Vietnam.jpg","a":"Khánh Hmoong","l":"CC BY 2.0","u":"https://commons.wikimedia.org/wiki/File:Ma_Pi_Leng_Pass_winding_road_Ha_Giang_Vietnam.jpg"},
  "ha-long":{"t":"Halong Bay in Vietnam.jpg","a":"Thomas Hirsch / User:Ravn","l":"CC BY-SA 3.0","u":"https://commons.wikimedia.org/wiki/File:Halong_Bay_in_Vietnam.jpg"},
  "hanoi":{"t":"Bridge Illuminated at Night - Hoan Kiem Lake - Old Quarter - Hanoi - Vietnam (48071367702).jpg","a":"Adam Jones from Kelowna, BC, Canada","l":"CC BY-SA 2.0","u":"https://commons.wikimedia.org/wiki/File:Bridge_Illuminated_at_Night_-_Hoan_Kiem_Lake_-_Old_Quarter_-_Hanoi_-_Vietnam_(48071367702).jpg"},
  "hoi-an":{"t":"Hội An, Ancient Town, 2020-01 CN-11.jpg","a":"Steffen Schmitz (more photos)","l":"CC BY-SA 4.0","u":"https://commons.wikimedia.org/wiki/File:H%E1%BB%99i_An,_Ancient_Town,_2020-01_CN-11.jpg"},
  "hue":{"t":"Hue Vietnam Thien-Mu-Temple-and-Pagoda-01.jpg","a":"CEphoto, Uwe Aranas","l":"CC BY-SA 3.0","u":"https://commons.wikimedia.org/wiki/File:Hue_Vietnam_Thien-Mu-Temple-and-Pagoda-01.jpg"},
  "lak-lake":{"t":"Hồ Lắk.JPG","a":"Daaé","l":"Public domain","u":"https://commons.wikimedia.org/wiki/File:H%E1%BB%93_L%E1%BA%AFk.JPG"},
  "mekong":{"t":"Cai Rang floating market, Can Tho (46061353692).jpg","a":"Isabell Schulz","l":"CC BY-SA 2.0","u":"https://commons.wikimedia.org/wiki/File:Cai_Rang_floating_market,_Can_Tho_(46061353692).jpg"},
  "ninh-binh":{"t":"Ninh Binh cave river boating.jpg","a":"Lishuilynn","l":"CC BY-SA 4.0","u":"https://commons.wikimedia.org/wiki/File:Ninh_Binh_cave_river_boating.jpg"},
  "phong-nha":{"t":"Phong Nha-Ke Bang cave3.jpg","a":"[Tycho] talk , http://shansov.net","l":"CC BY-SA 3.0","u":"https://commons.wikimedia.org/wiki/File:Phong_Nha-Ke_Bang_cave3.jpg"},
  "phu-quoc":{"t":"Kem Beach aerial view Phu Quoc Island Vietnam.jpg","a":"Vivu Vietnam","l":"CC BY-SA 4.0","u":"https://commons.wikimedia.org/wiki/File:Kem_Beach_aerial_view_Phu_Quoc_Island_Vietnam.jpg"},
  "saigon":{"t":"Río Saigón, Ciudad Ho Chi Minh, Vietnam, 2013-08-14, DD 29.JPG","a":"Diego Delso","l":"CC BY-SA 3.0","u":"https://commons.wikimedia.org/wiki/File:R%C3%ADo_Saig%C3%B3n,_Ciudad_Ho_Chi_Minh,_Vietnam,_2013-08-14,_DD_29.JPG"},
  "sapa":{"t":"Paddy fields in Lào Cai, Sa Pa, Vietnam, 20240125 1051 3423.jpg","a":"Jakub Hałun","l":"CC BY 4.0","u":"https://commons.wikimedia.org/wiki/File:Paddy_fields_in_L%C3%A0o_Cai,_Sa_Pa,_Vietnam,_20240125_1051_3423.jpg"}
};
