import refs from './refs';

refs.spaseBtn.addEventListener('click', onJump);
refs.startBtn.addEventListener('click', onStartGame);

let gameOver = false;
let currentValue = (refs.value.textContent = null);
let LOCALSTORAGE_KEY = 'currentScore';

function onStartGame() {
  refs.cactus.classList.add('cactusMov');
  refs.spaseBtn.disabled = false;

  onStartTimer();
}

function onStartTimer() {
  const setId = setInterval(() => {
    if (currentValue > 15) {
      refs.cactus.classList.remove('cactusMov');
      refs.cactus.classList.add('cactusSpeed');
    }
    if (currentValue > 35) {
      refs.cactus.classList.remove('cactusSpeed');
      refs.cactus.classList.add('cactusSpeedTwo');
    }
    if (gameOver) {
      clearInterval(setId);
    }
  }, 1000);
}

function onJump() {
  if (refs.dino.classList != 'jump') {
    refs.dino.classList.add('jump');
  }
  setTimeout(() => {
    refs.dino.classList.remove('jump');
  }, 300);
}

let GameOver = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue('left')
  );

  if (cactusLeft <= 1) {
    totalValue();
  }

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    gameOver = true;

    refs.cactus.classList.remove('cactusMov');
    refs.cactus.classList.remove('cactusSpeed');
    refs.cactus.classList.remove('cactusSpeedTwo');
    refs.spaseBtn.disabled = true;

    refs.value.textContent = null;

    alert('Game Over');
    bestScore();
  }
}, 10);

function totalValue() {
  currentValue = refs.value.textContent++;
  localStorage.setItem(LOCALSTORAGE_KEY, currentValue);
}

function bestScore() {
  let currentScore = localStorage.getItem(LOCALSTORAGE_KEY);
  refs.bestValue.textContent = currentScore;
}
