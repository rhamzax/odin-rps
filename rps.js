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
function updateScore(winner){
    const userScore = document.querySelector('.user-score');
    const compScore = document.querySelector('.comp-score');
    if(winner === "user"){
        userScore.textContent = parseInt(userScore.textContent) + 1;
    }
    else if(winner === "comp"){
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
            updateScore("user");
            event.textContent = "You Win! Paper beats Rock";
        }
        else if(computerSelection === "scissors"){
            updateScore("comp");
            event.textContent = "You Lose! Scissors beats Paper";
        }
    }
    else if (playerSelection === "scissors"){
        if(computerSelection === "paper"){
            updateScore("user");
            event.textContent = "You Win! Scissors beats Paper";
        }
        else if(computerSelection === "rock"){
            updateScore("comp");
            event.textContent = "You Lose! Rock beat Scissors";
        }
    }
    else if (playerSelection === "rock"){
        if(computerSelection === "scissors"){
            updateScore("user");
            event.textContent = "You Win! Rock beats Scissors";
        }
        else if(computerSelection === "paper"){
            updateScore("comp");
            event.textContent = "You Lose! Paper beats Rock";
        }
    }
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