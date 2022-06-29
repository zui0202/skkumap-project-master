//DOM
const SETTING_TOGGLE = document.querySelectorAll(".item_content.on_off");
const TEXT_ONOFF = document.querySelectorAll(".item_content.on_off p");
const ICON_ONOOF = document.querySelectorAll(".item_content.on_off img");

//이벤트 - 클릭시 설정변경
SETTING_TOGGLE.forEach( (setting, index) => {
  setting.addEventListener('click', function(e){
    if(TEXT_ONOFF[index].textContent === "on"){
      TEXT_ONOFF[index].textContent = "off";
      ICON_ONOOF[index].classList.toggle("toggle_off");
    } else{
      TEXT_ONOFF[index].textContent = "on";
      ICON_ONOOF[index].classList.toggle("toggle_off");
    };
  });
});

