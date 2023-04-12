// Создать переменную `flashLightsInterval`
// Создать 3 функции `changeColor`, `flashText`, `stopTextColor`
// `changeColor` должна реагировать на нажатие кнопки `#start`
// Также, должна создать интервал к flashLightsInterval и каждую секунду вызывать
// коллбэк `flashText`
// `flashText` должна менять классы класса ".police" cо ".stop" на ".go" и обратно,
// периодичностью в 1 секунду
// `stopTextColor` должна реагировать на нажатие кнопки `#start`
// также, должна очистить интервал и переписать глобальную переменную `window.plans.planD=true;`
let flashLightsInterval = null;

function changeColor() {
  if (!flashLightsInterval) {
    flashLightsInterval = setInterval(flashText, 1000);
  }
}

const policeID = document.getElementById("police");
function flashText() {
 
  if (policeID.className === "go") {
    policeID.className = "stop";
  } else {
    policeID.className = "go";
  }
}

function stopTextColor() {
  clearInterval(flashLightsInterval);
  flashLightsInterval = null;
  window.plans.planD = true;
}

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

startButton.addEventListener("click", changeColor);
stopButton.addEventListener("click", stopTextColor);
