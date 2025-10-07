// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Get references to elements
const inputBox = document.querySelector('.input-box');
const submitBtn = document.querySelector('.button-group button:first-child');
const resetBtn = document.querySelector('.button-group button:last-child');
const outputBox = document.querySelector('.output-box');

// Handle Submit button click
submitBtn.addEventListener('click', function() {
  const userGuess = Number(inputBox.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    outputBox.textContent = "Please enter a number between 1 and 100.";
  } else if (userGuess === secretNumber) {
    outputBox.textContent = "🎉 Correct! You guessed the number!";
  } else if (userGuess < secretNumber) {
    outputBox.textContent = "Too low! Try again.";
  } else {
    outputBox.textContent = "Too high! Try again.";
  }
});

// Handle Reset button click
resetBtn.addEventListener('click', function() {
  inputBox.value = '';
  outputBox.textContent = 'Output will appear here...';
  secretNumber = Math.floor(Math.random() * 100) + 1; // Regenerate number
});
