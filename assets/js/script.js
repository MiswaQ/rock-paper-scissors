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

/**
 * on start dont show options rPs
 */
window.onload = function introPage() {
    startGameShow.style.visibility = 'hidden';
}

function startGame() {
    playerImg.style.visibility = 'hidden';
    compImg.style.visibility = 'hidden';
    introShow.style.visibility = 'hidden';
    
    startGameShow.style.visibility = 'visible';

}