
let humanScore = 0;
let computerScore = 0;


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

function getHumanChoice() {
    choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`You Tied.`);
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") 
        || (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(`You Win. ${humanChoice} beats ${computerChoice}`);
            humanScore++
    } else {
        console.log(`You Lose. ${computerChoice} beats ${humanChoice}`);
        computerScore++
    }

}

function playGame() {

    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (computerScore > humanScore) {
        console.log(`You Lose. Final score: ${humanScore} to ${computerScore}`);
    } else if (computerScore < humanScore) {
        console.log(`You Win. Final score: ${humanScore} to ${computerScore}`);
    } else {
        console.log(`You Tied. Final score: ${humanScore} to ${computerScore}`);
    }

}


playGame()