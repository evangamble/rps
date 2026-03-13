
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button")
const hscore = document.querySelector("#hscore")
const cscore = document.querySelector("#cscore")
const winner = document.createElement("h3");



function getComputerChoice() {
    choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}

function playRound(humanChoice) {
    computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        console.log(`You Tied.`);
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") 
        || (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(`You Win. ${humanChoice} beats ${computerChoice}`);
            humanScore++;
            updateGame();
    } else {
        console.log(`You Lose. ${computerChoice} beats ${humanChoice}`);
        computerScore++
        updateGame()
    }

}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playRound(e.target.id)
    });
});

function reset(){
    humanScore= 0;
    computerScore = 0;

}

function updateGame() {
    hscore.textContent = humanScore;
    cscore.textContent = computerScore;

    if (computerScore >= 5 || humanScore >= 5) {
        winner.textContent = (computerScore > humanScore) ?  `Computer Wins.` : `Human Wins.`
        document.body.appendChild(winner);
        reset();
    }
    
    
}




