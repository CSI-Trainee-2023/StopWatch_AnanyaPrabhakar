
// taken variables for BUTTONS

let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');

// taken variables for UNITS

let counter = document.getElementById("count");
let second = document.getElementById('second');
let minutes = document.getElementById('minutes');
let hours = document.getElementById('hour');

// initializing variables

let[hour,min,sec,count,timer] = [0,0,0,0,false];
 


function start(){
     timer = true;
     stopWatch();
}
function reset(){
  timer = false;

  hour = 0;
  min = 0;
  sec = 0;
  count = 0;


  counter.innerHTML = "00";
  second.innerHTML = "00:";
  minutes.innerHTML = "00:";
  hours.innerHTML = "00:";
}


startButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);

let changeButton = document.querySelector("#start");

function change(){
  changeButton.textContent = "STOP";
}
changeButton.addEventListener("click",change);



function stopWatch(){
    if(timer == true){
      count++;
      if(count == 100){
        count=0;
        sec++;
        if(sec == 60){
          sec=0;
          min++;
          if(min == 60){
            min=0;
            hour++;
          }
        }
      }

      let [hr,secnd,mint,cont] = [hour,sec,min,count];
      

      if(hour<10){
        hr = '0' + hr +':';
      }
      if(sec<10){
        secnd = '0' + secnd +':';
      }
      if(min<10){
        mint = '0' + mint +':';
      }
      if(count<10){
        cont = '0' + cont;
      }
      
      
      counter.innerHTML = cont;
      second.innerHTML = secnd;
      hours.innerHTML = hr;
      minutes.innerHTML = mint;
      setTimeout(stopWatch,10);
    }
}