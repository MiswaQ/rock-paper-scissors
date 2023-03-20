/**
 * Calling DOM for different options.
 */
const playerImg = document.getElementById('player-img');
const compImg = document.getElementById('comp-img');
const choice = document.getElementsByClassName('choice');
const introShow = document.getElementById('intro');
const startGameShow = document.getElementById('hide-choice');
const startGameShow2 = document.getElementById('statement');
const options = ['rock', 'paper', 'scissors'];
const userScore = document.getElementById('play');
const compScore = document.getElementById('comp');



/**
 * When Start Game is clicked what to show and what to hide
 */
function onStart() {
    introShow.style.display = 'none';
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
        console.log(userChoice);

        
    });
}

/**
 * 
 * Generate computer response on userChoice
 */
function gameOn(userChoice) {
    let compNumb = Math.floor(Math.random() * 3);
    let compChoice = options[compNumb];
    console.log(compChoice);
    
    /* Compare to see what img to show */
    compareUserComp(userChoice, compChoice);

    /* Add player chosen img and computers chosen image */
    playerImg.src = `./assets/images/${userChoice}.png`;
    compImg.src = `./assets/images/${compChoice}.png`;
}


/**
 * Compare user and computer choice.
 * Decide who wins or if draw and write it out.
 * With incrementing add point to winner.
 */
const compareUserComp = (userChoice, compChoice) => {
    let whoWins = document.getElementById('who-wins');
    if (userChoice === compChoice) {

        /* If draw no point to incerment */
        /* Writes out in #who-wins 'It is a Draw' */
        whoWins.textContent = 'It is a Draw!';
    }
    if (userChoice === 'rock' && compChoice === 'scissors') {

        /* Writes out in #who-wins 'You Win!' */
        whoWins.textContent = 'You Win!';

        /* Incrementing points to user +1 */
        userScore.innerHTML = parseInt(userScore.innerHTML)+1;
    }
    if (userChoice === 'rock' && compChoice === 'paper') {
        
        /* Writes out in #who-wins 'You Lose!' */
        whoWins.textContent = 'You Lose!';
        
        /* Incrementing points to comp +1 */
        compScore.innerHTML = parseInt(compScore.innerHTML)+1;
    }
    if (userChoice === 'paper' && compChoice === 'scissors') {
        
        /* Writes out in #who-wins 'You Lose!' */
        whoWins.textContent = 'You Lose!';
        
        /* Incrementing points to comp +1 */
        compScore.innerHTML = parseInt(compScore.innerHTML)+1;
    }
    if (userChoice === 'paper' && compChoice === 'rock') {
        
        /* Writes out in #who-wins 'You Win!' */
        whoWins.textContent = 'You Win!';
        
        /* Incrementing points to user +1 */
        userScore.innerHTML = parseInt(userScore.innerHTML)+1;
    }
    if (userChoice === 'scissors' && compChoice === 'rock') {
        
        /* Writes out in #who-wins 'You Lose!' */
        whoWins.textContent = 'You Lose!';
        
        /* Incrementing points to comp +1 */
        compScore.innerHTML = parseInt(compScore.innerHTML)+1;
    }
    if (userChoice === 'scissors' && compChoice === 'paper') {
        
        /* Writes out in #who-wins 'You Win!' */
        whoWins.textContent = 'You Win!';
        
        /* Incrementing points to user +1 */
        userScore.innerHTML = parseInt(userScore.innerHTML)+1;
    }
};
