var car = document.getElementById("car");
var runBtn = document.getElementById("runBtn");
var stopBtn = document.getElementById("stopBtn");
var pos = document.getElementById("pos");
var lightsOnBtn = document.getElementById("lightsOnBtn");
var lightsOffBtn = document.getElementById("lightsOffBtn");
var car2 = document.getElementById("car2");
var horn = document.getElementById("horn");

var interval;
var position = 0;
var position2 = 0;

function runCar() {
  let intervalTime = 20;

  interval = setInterval(() => {
    position += 5;
    position2 += 5;

    if (window.matchMedia("(max-width:500px)").matches) {
      intervalTime = 100;
      position += 1;
      position2 += 1;
    }

    car.style.right = position + "px";
    car2.style.left = position2-200 + "px";
    // car2.style.visibility = "visible";

    if (position >= window.innerWidth) {
      position = 0;
    }
    if (position2 >= window.innerWidth) {
      position2 = 0;
      // car2.style.visibility = "hidden";
    } else {
      car2.style.visibility = "visible";
    }

    // pos.innerHTML = position+'px';
  }, intervalTime);

  runBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopCar() {
  clearInterval(interval);
  runBtn.disabled = false;
  stopBtn.disabled = true;
}

function lightsOn() {
  car.src = "./yellow-car-with-lights.png";
  car.style.width = "295px";
  car.style.height = "48px";
}
function lightsOff() {
  car.src = "./yellow-car-without-lights.png";
  car.style.width = "191px";
  car.style.height = "40px";
}

function PlayHorn() {
  horn.play();
}
