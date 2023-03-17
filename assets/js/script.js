/**
 * Calling DOM for different options.
 */
const gameArea = document.getElementsByClassName('game-area')
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
    introShow.style.visibility = 'hidden';
    
    startGameShow.style.visibility = 'visible';
    startGameShow2.style.visibility = 'visible';
}

/**
 * EventListener for options
 */
for (let button of choice) {
    button.addEventListener('click', function() {
        let userChoice = this.getAttribute('data-type');
        gameOn(userChoice);
    });
}

/**
 * 
 * Generate computer response on userChoice
 */
function gameOn(userChoice) {
    let compNumb = Math.floor(Math.random() * 3)
    let compChoice = options[compNumb];
}

/**
 * Compare user and computer choice
 */
const compareUserComp = (userChoice, compChoice) => {
    
    const whoWins = document.querySelector('who-wins')

    if (userChoice === compChoice) {
        whoWins.textContent = 'It is a Draw!';
        console.log('userChoice')
    } // Continue on this next time!
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

