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

// var stopCarID = null;
// var stopCarID =

$page.addEventListener('keydown', moveCarRight);

function moveCarRight(event) {
  if (event.keyCode === 32) {
    // var y = $car.offsetTop;
    for (var x = $car.offsetLeft; x < 900; x++) {
      if (x > 0) {
        $car.style.left = [x] + 'px';
        // $car.style.top = y;
      }
    }
  }
}

function startCar(event) {
  moveCarRight(event);
}
setInterval(startCar, 16);
