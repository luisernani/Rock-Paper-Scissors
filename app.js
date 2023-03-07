

function getComputerChoice(){
    switch (Math.floor(Math.random() * 3)){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    if (player === computer){
        return `Tie! ${player} equals ${computer}`;
    }
    if (computer === 'ROCK' && player === 'SCISSORS' || computer === 'PAPER' && player === 'ROCK' || computer === 'SCISSORS' && player === 'PAPER'){
        return `You Lose! ${computer} beats ${player}`;
    }else{
        return `You Win! ${player} beats ${computer}`;
    }
}

// console.log(playRound(playerSelection, computerSelection));

function game(){
    for(i=0; i < 5; i++){
        console.log(playRound(playerSelection, computerSelection) + i)    
    }
}

console.log(game());