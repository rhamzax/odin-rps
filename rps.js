const buttons = document.querySelectorAll('input');
const event = document.querySelector('.event');
const userScore = document.querySelector('.user-score');
const compScore = document.querySelector('.comp-score');
const playAgain = document.querySelector('.playAgain');

buttons.forEach(button => button.addEventListener('click', playRound));
playAgain.addEventListener('click', restartGame);

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
function checkGameOver(winner){
    if(userScore.textContent == 5 || compScore.textContent == 5){
        reset(winner);
    }
}
function updateScore(winner){
    if(winner === "User"){
        userScore.textContent = parseInt(userScore.textContent) + 1;
        checkGameOver(winner);
    }
    else if(winner === "Computer"){
        compScore.textContent = parseInt(compScore.textContent) + 1;
        checkGameOver(winner);
    }
    
}
function playRound(e){
    let computerSelection = computerPlay();
    let playerSelection = e.target.value;
    

    if (playerSelection === computerSelection){
        event.textContent = "Draw"
        updateScore("Draw");
    }
    else if (playerSelection === "paper"){
        if(computerSelection === "rock"){
            event.textContent = "You Win! Paper beats Rock";
            updateScore("User");
        }
        else if(computerSelection === "scissors"){
            event.textContent = "You Lose! Scissors beats Paper";
            updateScore("Computer");
        }
    }
    else if (playerSelection === "scissors"){
        if(computerSelection === "paper"){
            event.textContent = "You Win! Scissors beats Paper";
            updateScore("User");
        }
        else if(computerSelection === "rock"){
            event.textContent = "You Lose! Rock beat Scissors";
            updateScore("Computer");
        }
    }
    else if (playerSelection === "rock"){
        if(computerSelection === "scissors"){
            event.textContent = "You Win! Rock beats Scissors";
            updateScore("User");
        }
        else if(computerSelection === "paper"){
            event.textContent = "You Lose! Paper beats Rock";
            updateScore("Computer");
        }
    }
}
function reset(winner){
    event.textContent = (`${winner} has won the game`);
    buttons.forEach(button => button.removeEventListener('click', playRound));
    playAgain.classList.remove("hide");
}

function restartGame(){
    buttons.forEach(button => button.addEventListener('click', playRound));
    userScore.textContent = "0";
    compScore.textContent = "0";
    event.textContent = "Game Begins"
    playAgain.classList.add("hide")
}

