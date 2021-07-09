
let totalSeconds = 0;


let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let startBtn = document.querySelector(".start");
let resetBtn = document.querySelector(".reset");
let time = document.querySelector(".timer")


startBtn.addEventListener('click', ()=>{

  setInterval(setTime, 10);

  function setTime() {
    ++totalSeconds;
    seconds.innerHTML = ":" + timer(totalSeconds % 60);
    minutes.innerHTML = ":" + timer(parseInt(totalSeconds % 3600 / 60));
    hours.innerHTML =  timer(parseInt(totalSeconds / 3600))
  }
  
  function timer(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }


     
  })


  resetBtn.addEventListener("click", ()=>{
    window.clearInterval(time);
   
    time.hours.innerHTML = "00:";
    time.minutes.innerHTML = "00:";
    time.seconds.innerHTML = "00";
    time =0
  })