import BUILDINGS from './buildings.js';

//DOM
const BUILDING_IMG = document.querySelector(".building_images");
const BUILDING_NUM = document.querySelector(".building_number");
const BUILDING_NAME = document.querySelector(".building_name");
const FACILITY_ICON = document.querySelector(".facility_icons");
const FACILITY_DETAIL = document.querySelector(".facility_details");
const FLOOR_INFO = document.querySelector(".floor_info");
const FLOOR_CLICK = document.querySelector(".floor_click");

//건물사진
const building_img = document.createElement("img");
building_img.src = BUILDINGS[0].img;
building_img.alt = BUILDINGS[0].name;
building_img.classList.add("building_image");
building_img.id = BUILDINGS.name;

BUILDING_IMG.appendChild(building_img);

//건물번호 & 이름

BUILDING_NUM.textContent = BUILDINGS[0].number;
BUILDING_NAME.textContent = BUILDINGS[0].name;

//편의시설 이모티콘

BUILDINGS[0].facility_icons.forEach((icon) => {
  const icon_img = document.createElement("img");
  icon_img.src = icon.src;
  icon_img.alt = icon.alt;
  icon_img.id = icon.id;

  FACILITY_ICON.appendChild(icon_img);
});

//편의시설 세부사항
BUILDINGS[0].facilities.forEach((faciltiy) => {
  const facility_detail = document.createElement("li");
  facility_detail.classList.add("facility_detail");
  facility_detail.textContent = faciltiy;

  FACILITY_DETAIL.appendChild(facility_detail);
});

//층별 세부사항
BUILDINGS[0].floors.forEach((floor, index) => {
  // <li class="floor">지상1층 <img src="../svg/chevron_down.svg" alt="chevron_down.svg" id="chevron_down"></li>
  const level = index + 1;
  const floor_info = document.createElement("li");
  const chevron_icon = document.createElement("img");

  chevron_icon.src = "../../static/img/chevron_down.svg";
  chevron_icon.alt = "chevron_down.svg";
  chevron_icon.id = "chevron_down";
  floor_info.classList.add(`floor`);
  floor_info.textContent = floor.level;
  floor_info.id = `floor${level}`;

  FLOOR_INFO.appendChild(floor_info);
  floor_info.appendChild(chevron_icon);
});


const floor_detail = document.createElement("div");
floor_detail.classList.add("floor_detail");

const floor_level = document.createElement("h2")
floor_level.classList.add("floor_level");
floor_level.textContent = BUILDINGS[0].floors[0].level;
floor_detail.appendChild(floor_level);

const floor_img = document.createElement("img");
floor_img.src = `../../static/img/${BUILDINGS[0].floors[0].info}.svg`;
floor_img.alt = `${BUILDINGS[0].floors[0].info}.svg`;
floor_img.id = `${BUILDINGS[0].floors[0].info}`;
floor_detail.appendChild(floor_img);

const close_img = document.createElement("img");
close_img.src = `../../static/img/close.svg`;
close_img.alt = `close.svg`;
close_img.id = `close`;
floor_detail.appendChild(close_img);

const FLOOR1 = document.querySelector("#floor1");

FLOOR1.addEventListener('click', openFloorInfo);
close_img.addEventListener('click', closeFloorInfo);

function openFloorInfo(e){
  FLOOR_CLICK.appendChild(floor_detail);  
}

function closeFloorInfo(e){
  FLOOR_CLICK.removeChild(floor_detail);
}