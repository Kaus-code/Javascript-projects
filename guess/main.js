document.addEventListener('DOMContentLoaded', function () {
  const inputBox = document.querySelector('.input-box');
  const submitBtn = document.querySelector('.button-group button:first-child');
  const resetBtn = document.querySelector('.button-group button:last-child');
  const outputBox = document.querySelector('.output-box');

  let secretNumber;
  let gameActive = false;

  function initGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    gameActive = true;
    outputBox.textContent = 'Game started! Guess a number between 1 and 100.';
    console.log('Secret number:', secretNumber); // For debugging
  }

  submitBtn.addEventListener('click', function () {
    if (!gameActive) {
      outputBox.textContent = 'Please click Reset to start a new game!';
      return;
    }

    const guess = parseInt(inputBox.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      outputBox.textContent = 'Please enter a valid number between 1 and 100!';
      return;
    }

    if (guess === secretNumber) {
      outputBox.textContent = `🎉 Correct! The number was ${secretNumber}.`;
      gameActive = false;
    } else if (guess < secretNumber) {
      outputBox.textContent = 'Too low! Try a higher number.';
    } else {
      outputBox.textContent = 'Too high! Try a lower number.';
    }

    inputBox.value = '';
  });

  resetBtn.addEventListener('click', function () {
    inputBox.value = '';
    initGame();
  });

  initGame();
});
