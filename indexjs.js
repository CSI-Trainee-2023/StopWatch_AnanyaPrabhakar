


var startBtn = true;
var stopbutton = false;
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

function stop(){
  timer = false;
  
}


startButton.addEventListener("click", start);

resetButton.addEventListener("click", reset);




let changeButton1 = document.querySelector("#start");
let changeButton2 = document.querySelector("#reset");

changeButton1.addEventListener("click",change);


function change(){
  if(timer == true){
    changeButton1.innerHTML = "STOP";
    changeButton2.innerHTML = "LAP";
    changeButton1.addEventListener("click",stop);
  }
  if(timer == false){
    changeButton1.innerHTML = "START";
    changeButton2.innerHTML = "RESET";
    changeButton1.addEventListener("click",start);
  }
  
}




  




function stopWatch(){
    if(timer){
      count++;
      if(count == 100){
        count=0;
        sec++;
      }
      if(sec == 60){
          sec=0;
          min++;
      }
      if(min == 60){
          min=0;
          hour++;
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

      if(hour>=10){
        hr = hr +':';
      }
      if(sec>=10){
        secnd = secnd +':';
      }
      if(min>=10){
        mint = mint +':';
      }
      

      
      
    
      
      
      counter.innerHTML = cont;
      second.innerHTML = secnd;
      hours.innerHTML = hr;
      minutes.innerHTML = mint;
      setTimeout(stopWatch,10);
    }
}