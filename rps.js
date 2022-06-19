let userScore = 0, compScore = 0;
function computerPlay(){
    random = Math.floor(Math.random() * 3);
    if(random === 0){
        return "rock";
    }
    else if (random === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection, score){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return "Draw"
    }
    else if (playerSelection === "paper"){
        if(computerSelection === "rock"){
            userScore++;
            return "You Win! Paper beats Rock";
        }
        else if(computerSelection === "scissors"){
            compScore++;
            return "You Lose! Scissors beats Paper";
        }
    }
    else if (playerSelection === "scissors"){
        if(computerSelection === "paper"){
            userScore++;
            return "You Win! Scissors beats Paper";
        }
        else if(computerSelection === "rock"){
            compScore++;
            return "You Lose! Rock beat Scissors";
        }
    }
    else if (playerSelection === "rock"){
        if(computerSelection === "scissors"){
            userScore++;
            return "You Win! Rock beats Scissors";
        }
        else if(computerSelection === "paper"){
            compScore++;
            return "You Lose! Paper beats Rock";
        }
    }
    else{
        return "Spelling mistake"
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Select from Rock, Paper, Scissors: ");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Score: " + userScore + " vs " + compScore);
    }
}
game();