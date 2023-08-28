let scorePlayer = 0;
let scorePc = 0;
let playerBeat = 0;
let buttonDisabled = false;
function getComputerChoice() {
    let options = ['scissors', 'rock', 'paper'];
    return options[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, ComputerSelection) {
    let output = "";
    switch (true) {
        case playerSelection.toLowerCase() == ComputerSelection.toLowerCase():
            output = 'Draw! You have to do better to beat me!';
            playerBeat = 0;
            break;
        case playerSelection.toLowerCase() == 'rock' && ComputerSelection.toLowerCase() == 'paper':
            output = 'You lose! Paper beats Rock!';
            scorePc++;
            playerBeat = -1;
            break;
        case playerSelection.toLowerCase() == 'paper' && ComputerSelection.toLowerCase() == 'scissors':
            output = 'You lose! Scissors beats Paper!';
            scorePc++;
            playerBeat = -1;
            break;
        case playerSelection.toLowerCase() == 'scissors' && ComputerSelection.toLowerCase() == 'rock':
            output = 'You lose! Rock beats Scissors!';
            scorePc++;
            playerBeat = -1;
            break;
        case playerSelection.toLowerCase() == 'paper' && ComputerSelection.toLowerCase() == 'rock':
            output = 'You win! Paper beats Rock!';
            scorePlayer++;
            playerBeat = 1;
            break;
        case playerSelection.toLowerCase() == 'scissors' && ComputerSelection.toLowerCase() == 'paper':
            output = 'You win! Scissors beats Paper!';
            scorePlayer++;
            playerBeat = 1;
            break;
        case playerSelection.toLowerCase() == 'rock' && ComputerSelection.toLowerCase() == 'scissors':
            output = 'You win! Rock beats scissors!';
            scorePlayer++;
            playerBeat = 1;
            break;
        default:
            output = "Ups.. there has been a mistake!"
            break;
    }
    return output;
}

originalContent = `
<header id="header">
        <div>Rock Paper Scissors</div>
        <img src="https://cdn.pixabay.com/photo/2019/07/06/16/44/game-4320781_1280.png", alt="picture of scorpion">
    </header>
    <div class="weapons">
        <div>Choose your Weapon!</div>
    </div>
    <div class="buttons">
        <button id="rock"></button>
        <button id="scissors"></button>
        <button id="paper"></button>
    </div>
    <div class="scores">
        <div id="pcScore">Scorpion: 0</div>
        <div id="playerScore">Du: 0</div>
    </div>
    <div class="bottom">
        <div id="copyright">&copy; The Odin Project 2023</div>
    </div>
`;

newContent = `
<header class="header">
<div id="resultHeader"></div>
</header>
<div class="imgPart">
<img class="scorpionimg" src="https://cdn.pixabay.com/photo/2019/07/06/16/44/game-4320781_1280.png" alt="scorpion's head">
</div>
<div class="resetPart">
<button class="resetBtn">RESET</button>
</div>
`


container = document.querySelector('.flex-container');

function displayLoss(){
    document.body.setAttribute('style', "opacity: 0; transition: opacity 3s ease-in-out;");
    setTimeout(() => {
        container.innerHTML = newContent;
        document.body.setAttribute('style', "opacity: 0.9; transition: opacity 2s ease-in-out;\
background-image: url('https://media.tenor.com/aNya2k4nU9AAAAAC/mortal-kombat.gif');");
    const result = document.getElementById('resultHeader');
    result.textContent = 'YOU LOSE! ...DARE TO TRY AGAIN?';
    result.setAttribute('style', 'color: red;');

    reset.addEventListener('click', () => {
        scorePlayer = 0;
        scorePc = 0;
        playerBeat = 0;
        container.innerHTML = originalContent;
        document.body.setAttribute('style', "background-image: url('https://media.tenor.com/Ql7S1U-bqPIAAAAC/mortal-kombat.gif');");

        setupButtonListeners();
        buttonDisabled = false;
    });
    }, 3000);
}

function displayWin(){
    document.body.setAttribute('style', "opacity: 0; transition: opacity 3s ease-in-out;")
    setTimeout(() => {
        container.innerHTML = newContent;
        document.body.setAttribute('style', "opacity: 0.9; transition: opacity 2s ease-in-out;\
background-image: url('https://media3.giphy.com/media/J0y8lFm1r7H8c/giphy.gif?cid=ecf05e476qgasnwmj9uqw6vqyoxhkt12kf3vornnojthou1n&ep=v1_gifs_related&rid=giphy.gif&ct=g');");
const result = document.getElementById('resultHeader')
result.setAttribute('style', 'color: green;');
result.textContent = 'YOU WIN! ...WANNA TRY AGAIN?';

reset.addEventListener('click', () => {
    scorePlayer = 0;
    scorePc = 0;
    playerBeat = 0;
    container.innerHTML = originalContent;
    document.body.setAttribute('style', "background-image: url('https://media.tenor.com/Ql7S1U-bqPIAAAAC/mortal-kombat.gif');");

    setupButtonListeners();
    buttonDisabled = false;
});
}, 3000);
}
const textResult = document.createElement('div');
textResult.classList.add('result');
function declareWinner(playerSelection) {
    container.appendChild(textResult);
    container.insertBefore(document.querySelector('.result'), document.querySelector('.scores'));
    container.insertBefore(document.querySelector('.result'), document.querySelector('.bottom'));
        textResult.textContent = playRound(playerSelection, getComputerChoice());
        if (playerBeat == -1) {
            textResult.setAttribute('style', 'color: red;')
        }
        else if (playerBeat == 0) {
            textResult.setAttribute('style', 'color: bisque;')
        }
        else {
            textResult.setAttribute('style', 'color: green;')
        }
        pcScore = document.querySelector('#pcScore');
        pcScore.textContent = 'Scorpion: ' + scorePc;
        playerScore = document.querySelector('#playerScore');
        playerScore.textContent = 'Du: ' + scorePlayer;
    if(scorePc == 5){
        buttonDisabled = true;
        displayLoss();
    }
    else if(scorePlayer == 5){
        buttonDisabled = true;
        displayWin();
    }
}
function setupButtonListeners() {
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {if(!buttonDisabled){declareWinner('rock');}});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {if(!buttonDisabled){declareWinner('paper');}});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {if(!buttonDisabled){declareWinner('scissors');}});
}

setupButtonListeners();

