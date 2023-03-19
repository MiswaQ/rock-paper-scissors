/**
 * Calling DOM for different options.
 */
const playerImg = document.getElementById('player-img')
const compImg = document.getElementById('comp-img')
const choice = document.getElementsByClassName('choice')
const introShow = document.getElementById('intro')
const startGameShow = document.getElementById('hidden') // revisit
const startGameShow2 = document.getElementById('hidden1') // revisit
const options = ['rock', 'paper', 'scissors']
const userScore = document.getElementById('play')
const compScore = document.getElementById('comp')



/**
 * When Start Game is clicked what to show and what to hide
 */
function startGame() {
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
    let compNumb = Math.floor(Math.random() * 3)
    let compChoice = options[compNumb];
    console.log(compChoice)
    
    /* Write out draw, win or lose */
    compareUserComp(userChoice, compChoice);

    /* Add player chosen img and computers chosen image */
    playerImg.src = `./assets/images/${userChoice}.png`;
    compImg.src = `./assets/images/${compChoice}.png`;
}


/**
 * Compare user and computer choice
 * With incrementing to add point to score board
 */
const compareUserComp = (userChoice, compChoice) => {
    let whoWins = document.getElementById('who-wins')
    if (userChoice === compChoice) {
        whoWins.textContent = 'It is a Draw!';
    }
    if (userChoice === 'rock' && compChoice === 'scissors') {
        whoWins.textContent = 'You Win!'
        userScore.innerHTML = parseInt(userScore.innerHTML)+1;
    }
    if (userChoice === 'rock' && compChoice === 'paper') {
        whoWins.textContent = 'You Lose!'
        compScore.innerHTML = parseInt(compScore.innerHTML)+1;
    }
    if (userChoice === 'paper' && compChoice === 'scissors') {
        whoWins.textContent = 'You Lose!'
        compScore.innerHTML = parseInt(compScore.innerHTML)+1;
    }
    if (userChoice === 'paper' && compChoice === 'rock') {
        whoWins.textContent = 'You Win!'
        userScore.innerHTML = parseInt(userScore.innerHTML)+1;
    }
    if (userChoice === 'scissors' && compChoice === 'rock') {
        whoWins.textContent = 'You Lose!'
        compScore.innerHTML = parseInt(compScore.innerHTML)+1;
    }
    if (userChoice === 'scissors' && compChoice === 'paper') {
        whoWins.textContent = 'You Win!'
        userScore.innerHTML = parseInt(userScore.innerHTML)+1;
    }
}

function scoreBoard() {
    document.getElementById('play').innerHTML = '0';
    document.getElementById('comp').innerHTML = '0';
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

