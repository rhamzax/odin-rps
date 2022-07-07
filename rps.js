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
function updateScore(winner){
    const userScore = document.querySelector('.user-score');
    const compScore = document.querySelector('.comp-score');
    if(userScore.textContent == 5 || compScore.textContent == 5){
        reset(userScore, compScore, winner);
    }
    if(winner === "User"){
        userScore.textContent = parseInt(userScore.textContent) + 1;
    }
    else if(winner === "Computer"){
        compScore.textContent = parseInt(compScore.textContent) + 1;
    }
}
function playRound(e){
    let computerSelection = computerPlay();
    let playerSelection = e.target.value;
    const event = document.querySelector('.event');

    if (playerSelection === computerSelection){
        event.textContent = "Draw"
    }
    else if (playerSelection === "paper"){
        if(computerSelection === "rock"){
            updateScore("User");
            event.textContent = "You Win! Paper beats Rock";
        }
        else if(computerSelection === "scissors"){
            updateScore("Computer");
            event.textContent = "You Lose! Scissors beats Paper";
        }
    }
    else if (playerSelection === "scissors"){
        if(computerSelection === "paper"){
            updateScore("User");
            event.textContent = "You Win! Scissors beats Paper";
        }
        else if(computerSelection === "rock"){
            updateScore("Computer");
            event.textContent = "You Lose! Rock beat Scissors";
        }
    }
    else if (playerSelection === "rock"){
        if(computerSelection === "scissors"){
            updateScore("User");
            event.textContent = "You Win! Rock beats Scissors";
        }
        else if(computerSelection === "paper"){
            updateScore("Computer");
            event.textContent = "You Lose! Paper beats Rock";
        }
    }
}
function reset(userScore, compScore, winner){
    userScore.textContent = "0";
    compScore.textContent = "0";
    alert(`${winner} has won the game`);
}
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound));
// function game(){
//     for (let i = 0; i < 5; i++){
//         let playerSelection = prompt("Select from Rock, Paper, Scissors: ");
//         let computerSelection = computerPlay();
//         console.log(playRound(playerSelection, computerSelection));
//         console.log("Score: " + userScore + " vs " + compScore);
//     }
// }
// game();