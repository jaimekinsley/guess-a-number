//GET
import compareNumbers from './compareNumbers.js';

const userGuess = document.getElementById('user-guess');
const submitButton = document.getElementById('submit-button');
const remainingTriesSpan = document.getElementById('remaining-tries');
const guessResult = document.getElementById('guess-result');
const gameResult = document.getElementById('game-result');
const highOrLow = document.getElementById('high-or-low');
const loseOrWin = document.getElementById('lose-or-win');

// INITIALIZE
let remainingTries = 4;
const correctNumber = Math.ceil(Math.random() * 10);

// SET
submitButton.addEventListener('click', () => {
    console.log(remainingTries);
    console.log(userGuess.value);
    console.log(correctNumber);

    if (compareNumbers(userGuess.value, correctNumber) === -1){
        remainingTries--;
        highOrLow.style.visibility = 'visible';
        guessResult.textContent = 'low, try again.';

    }

    if (compareNumbers(userGuess.value, correctNumber) === 1) {
        remainingTries--;        
        highOrLow.style.visibility = 'visible';
        guessResult.textContent = 'high, try again.';
    }

    if (compareNumbers(userGuess.value, correctNumber) === 0){
        loseOrWin.style.visibility = 'visible';
        guessResult.textContent = 'right!';
        gameResult.textContent = 'win!';
        submitButton.disabled = true;
    }

    if (remainingTries === 0){
        loseOrWin.style.visibility = 'visible';
        gameResult.textContent = 'lost!';
        submitButton.disabled = true;
        return;
    }

    remainingTriesSpan.textContent = remainingTries;

    userGuess.value = ''; 

});

