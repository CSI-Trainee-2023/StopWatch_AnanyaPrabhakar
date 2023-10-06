// taken variables for BUTTONS

let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");

// taken variables for UNITS

let counter = document.getElementById("count");
let second = document.getElementById("second");
let minutes = document.getElementById("minutes");
let hours = document.getElementById("hour");

// initializing variables

let [hour, min, sec, count, timer, startbtn, stopbtn] = [0, 0, 0, 0, false, true, false];


// Calling Functions of button


startButton.addEventListener("click", function () {
  if (startbtn == true) {
    start();
  } 
  else if (stopbtn == true) {
    stop();
  }
});

resetButton.addEventListener("click", reset);

//  Start Function

function start() {
  startbtn = false;
  startButton.innerHTML = "STOP";
  resetButton.innerHTML = "LAP";
  timer = true;
  stopbtn = true;

  stopWatch();
}

// Stop Function

function stop() {
  timer = false;
  startbtn = true;
  stopbtn = false;
  startButton.innerHTML = "RESUME";
  resetButton.innerHTML = "RESET";
}

// Reset Function

function reset() {
  timer = false;
  startbtn = true;
  startButton.innerHTML = "START";
  [hour, min, sec, count] = [0, 0, 0, 0];
  counter.innerHTML = "00";
  second.innerHTML = "00:";
  minutes.innerHTML = "00:";
  hours.innerHTML = "00:";
}


document.addEventListener("keydown",)

// StopWatch Function

function stopWatch() {
  if (timer) {
    count++;
    if (count == 100) {
      count = 0;
      sec++;
    }
    if (sec == 60) {
      sec = 0;
      min++;
    }
    if (min == 60) {
      min = 0;
      hour++;
    }

    let [hr, secnd, mint, cont] = [hour, sec, min, count];

    if (hour < 10) {
      hr = "0" + hr + ":";
    }
    if (sec < 10) {
      secnd = "0" + secnd + ":";
    }
    if (min < 10) {
      mint = "0" + mint + ":";
    }
    if (count < 10) {
      cont = "0" + cont;
    }

    if (hour >= 10) {
      hr = hr + ":";
    }
    if (sec >= 10) {
      secnd = secnd + ":";
    }
    if (min >= 10) {
      mint = mint + ":";
    }
    counter.innerHTML = cont;
    second.innerHTML = secnd;
    hours.innerHTML = hr;
    minutes.innerHTML = mint;

    setTimeout("stopWatch()", 10);
  }
}
