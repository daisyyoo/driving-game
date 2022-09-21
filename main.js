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
  if (event.keyCode === 32) {
    if (carMoving === false) {
      for (var x = $car.offsetLeft; x < 1500; x++) {
        $car.style.left = x + 'px';
        carMoving = true;
        stopCarID = setInterval(startCar, 1000);
      }
    } else if (carMoving === true) {
      clearInterval(stopCarID);
      $car.offsetLeft = x + 'px';
      carMoving = false;
    }
  }
}

function startCar(event) {
  moveCarRight(event);
}
