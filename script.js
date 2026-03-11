
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button")


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

function updateGame() {
    document.querySelector("#hscore").textContent = humanScore;
    document.querySelector("#cscore").textContent = computerScore;

    if (computerScore >= 5 || humanScore >= 5) {
        const winner = document.createElement("h3");
        winner.id = "winner";
        winner.textContent = (computerScore > humanScore) ?  `Computer Wins.` : `Human Wins.`
        document.body.appendChild(winner);
    }
}




