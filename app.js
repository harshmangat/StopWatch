let totalSeconds = 0;

let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let startBtn = document.querySelector(".start");
let resetBtn = document.querySelector(".reset");
let time = document.querySelector(".timer");
/* Added the counter and if statement*/
var counter = 0;

let interval;

function setTime() {
  ++totalSeconds;
  seconds.innerHTML = ":" + timer(totalSeconds % 60);
  minutes.innerHTML = ":" + timer(parseInt((totalSeconds % 3600) / 60));
  hours.innerHTML = timer(parseInt(totalSeconds / 3600));
}

function timer(val) {
  var valueStr = val + "";
  if (valueStr.length < 2) {
    return "0" + valueStr;
  } else {
    return valueStr;
  }
}

startBtn.addEventListener("click", () => {
  counter++;

  if (counter % 2 == 0) {
    clearInterval(interval);
    startBtn.innerText = "Start";
    return;
  }
  interval = setInterval(setTime, 10);
  startBtn.innerText = "Pause";
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  hours.innerHTML = "00:";
  minutes.innerHTML = "00:";
  seconds.innerHTML = "00";
  totalSeconds = 0;
  counter = 0;
  startBtn.innerText = "Start";
});