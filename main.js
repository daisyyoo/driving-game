var $page = document.querySelector('body');
var $car = document.querySelector('input');
$page.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.key === 'ArrowDown') {
    $car.className = 'car car-turn-down';
  } else if (event.key === 'ArrowLeft') {
    $car.className = 'car car-turn-left';
  } else if (event.key === 'ArrowRight') {
    $car.className = 'car car-turn-right';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'car car-turn-up';
  }
}
// var y = $car.offsetTop;
// $car.style.top = y;

$page.addEventListener('keydown', moveCarRight);

var stopCarID = null;
var carMoving = false;

function moveCarRight(event) {
  if (event.key === ' ') {
    if (carMoving === false) {
      stopCarID = setInterval(startCar, 16);
      carMoving = true;
    } else {
      clearInterval(stopCarID);
      carMoving = false;
    }
  }
}

function startCar(event) {
  var x = $car.offsetLeft;
  x++;
  $car.style.left = x + 'px';
}
