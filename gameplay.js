let scorePlayer = 0;
let scorePc = 0;
function getComputerChoice(){
    let options = ['scissors', 'rock', 'paper'];
    return options[Math.floor(Math.random() * 3)];
}
function playRound(playerSelection, ComputerSelection){
    let output = "";
    switch(true){
        case playerSelection.toLowerCase() == ComputerSelection.toLowerCase():
            output = 'Draw! You have to do better to beat me!';
            break;
        case playerSelection.toLowerCase() == 'rock' && ComputerSelection.toLowerCase() == 'paper':
            output = 'You lose! Paper beats Rock!';
            scorePc++;
            break;
        case playerSelection.toLowerCase() == 'paper' && ComputerSelection.toLowerCase() == 'scissors':
            output = 'You lose! Scissors beats Paper!';
            scorePc++;
            break;
        case playerSelection.toLowerCase() == 'scissors' && ComputerSelection.toLowerCase() == 'rock':
            output = 'You lose! Rock beats Scissors!';
            scorePc++;
            break;
        case playerSelection.toLowerCase() == 'paper' && ComputerSelection.toLowerCase() == 'rock':
            output = 'You win! Paper beats Rock!';
            scorePlayer++;
            break;
        case playerSelection.toLowerCase() == 'scissors' && ComputerSelection.toLowerCase() == 'paper':
            output = 'You win! Scissors beats Paper!';
            scorePlayer++;
            break;
        case playerSelection.toLowerCase() == 'rock' && ComputerSelection.toLowerCase() == 'scissors':
            output = 'You win! Rock beats scissors!';
            scorePlayer++;
            break;
        default: 
            output = "Ups.. there has been a mistake!"
            break;
    }
    return output;
}

function game(){
    while(scorePc < 5 && scorePlayer < 5){
        playerSelection = prompt();
        ComputerSelection = getComputerChoice();
        console.log(playRound(playerSelection, ComputerSelection));
        console.log('Your score: ' + scorePlayer);
        console.log('Computer score: ' + scorePc);
        console.log();
    }
    if(scorePc === 5){
        console.log('HAH! I knew you had no chance!');
    }
    else{
        console.log('WHATT?? I mean... there\'s always a first time. AGAIN!');
    }
    scorePc = 0;
    scorePlayer = 0;
}

game();