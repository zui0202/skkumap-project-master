const SHORTCUT_FLAG = document.querySelectorAll(".shortcut_detail");

// DOM
const shortcut_over = document.createElement("div");
shortcut_over.classList.add("shortcut_over");

const text_over = document.createElement("span");
text_over.textContent = "click";
shortcut_over.appendChild(text_over);

const flag = document.createElement("img");
flag.src = "../../static/img/flag.svg";
flag.alt = "flag.svg";
flag.id = "flag";
shortcut_over.appendChild(flag);

//이벤트 생성
SHORTCUT_FLAG.forEach( (shortcut_path) => {
  shortcut_path.addEventListener('mouseenter', showFlag)
});

SHORTCUT_FLAG.forEach( (shortcut_path) => {
  shortcut_path.addEventListener('mouseleave', hideFlag)
});

//콜백함수
function showFlag(e) {
  this.appendChild(shortcut_over);
}

function hideFlag(e){
  this.removeChild(shortcut_over);  
}
