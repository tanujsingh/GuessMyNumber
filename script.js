'use strict';

let secretNumber = Math.floor(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
       displayMessage('🚫 No Number!');
    } else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('👍🏼 You are correct!');
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else {
        if(score > 1){
            displayMessage(guess > secretNumber ? '📈 Too High!':'📉 Too Low!'); 
            document.querySelector('.score').textContent = --score;
        } else {
           displayMessage('💣 You lose!');
            document.querySelector('.score').textContent = 0; 
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.floor(Math.random()*20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});