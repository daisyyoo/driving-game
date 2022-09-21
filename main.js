var $page = document.querySelector('body');
var $carTurn = document.querySelector('input');
$page.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.key === 'ArrowDown') {
    $carTurn.className = 'car car-turn-down';
  } else if (event.key === 'ArrowLeft') {
    $carTurn.className = 'car car-turn-left';
  } else if (event.key === 'ArrowRight') {
    $carTurn.className = 'car car-turn-right';
  } else if (event.key === 'ArrowUp') {
    $carTurn.className = 'car car-turn-up';
  }
}
