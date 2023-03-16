/**
 * Calling DOM for different options.
 */
const gameArea = document.getElementsByClassName('game-area')
const whoWins = document.getElementsByClassName('who-wins')
const playArea = document.getElementsByClassName('play-area')
const player = document.getElementsByClassName('player')
const computer = document.getElementsByClassName('computer')
const playerImg = document.getElementById('player-img')
const compImg = document.getElementById('comp-img')
const playOptions = document.getElementsByClassName('play-options')
const choice = document.getElementsByClassName('choice')
const scoreArea = document.getElementsByClassName('score-area')
const introShow = document.getElementById('intro')
const startGameShow = document.getElementById('hidden')
const startGameShow2 = document.getElementById('hidden1')
const options = ['rock', 'paper', 'scissors']

/**
 * On start dont show options rPs
 */
window.onload = function introPage() {
    startGameShow.style.visibility = 'hidden';
    startGameShow2.style.visibility = 'hidden';
}

/**
 * When Start Game is clicked what to show and what to hide
 */
function startGame() {
    playerImg.style.visibility = 'hidden';
    compImg.style.visibility = 'hidden';
    introShow.style.visibility = 'hidden';
    
    startGameShow.style.visibility = 'visible';
    startGameShow2.style.visibility = 'visible';
}

/**
 * EventListener for options
 */
for (let button of choice) {
    button.addEventListener('click', function () {
        let userChoice = this.getAttribute('data-type');
        console.log(this);
    });
}


function gameOn(userChoice) {
    playerImg.src = `assets/images/${options[userChoice]}.png`
}

/*
function handleRockSelection(event) {
    
    console.log('rocks clicked')
// show rock picked
    playerImg.setAttribute('src' , 'imgrock') 
// computer choice
// match the choices
// anounce winner
// add score
}
*/

