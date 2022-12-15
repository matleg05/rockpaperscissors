// computer choice

function getComputerChoice() {
    let randomNumber = Math.ceil(Math.random() * 3)
        if (randomNumber === 1) {
            return "rock";
        } else if (randomNumber === 2) {
            return "paper";
        } else if (randomNumber === 3) {
            return "scissors";
        }
}

// check the result

function checkResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw"
    }
    else if (
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock")
    )
        {
            return "player"
    }
    else if (
        (computerSelection === "scissors" && playerSelection === "paper") ||
        (computerSelection === "rock" && playerSelection === "scissors") ||
        (computerSelection === "paper" && playerSelection === "rock")
    )
        {
            return "computer"
    }
    else {
        return "ii"
    }
}

// play one round

function playRound(playerSelection, computerSelection) {
    let result = checkResult(playerSelection, computerSelection)
    if (result === "draw") {
        return "It's a draw!";
    }
    else if (result === "player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (result === "computer") {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (result === "ii") {
        return "Invalid input"
    }
}

let currentPlayerScore = 0
let currentComputerScore = 0

// player choice

function rockClick() {
    let playerSelection = "rock";
    playerChoice.textContent = "You chose rock";
    getComputerChoice();
    let computerSelection = getComputerChoice();
    computerChoice.textContent = `Computer has ${computerSelection}`;
    checkResult(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    resultAnnouncement.textContent = `${playRound(playerSelection, computerSelection)}`
    if (checkResult(playerSelection, computerSelection) === "player") {
        currentPlayerScore++
    } else if (checkResult(playerSelection, computerSelection) === "computer") {
        currentComputerScore++
    }
}

function paperClick() {
    let playerSelection = "paper";
    playerChoice.textContent = "You chose paper";
    getComputerChoice();
    let computerSelection = getComputerChoice();
    computerChoice.textContent = `Computer has ${computerSelection}`;
    checkResult(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    resultAnnouncement.textContent = `${playRound(playerSelection, computerSelection)}`
    if (checkResult(playerSelection, computerSelection) === "player") {
        currentPlayerScore++
    } else if (checkResult(playerSelection, computerSelection) === "computer") {
        currentComputerScore++
    }
}

function scissorsClick() {
    let playerSelection = "scissors";
    playerChoice.textContent = "You chose scissors";
    getComputerChoice();
    let computerSelection = getComputerChoice();
    computerChoice.textContent = `Computer has ${computerSelection}`;
    checkResult(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    resultAnnouncement.textContent = `${playRound(playerSelection, computerSelection)}`
    if (checkResult(playerSelection, computerSelection) === "player") {
        currentPlayerScore++
    } else if (checkResult(playerSelection, computerSelection) === "computer") {
        currentComputerScore++
    }
}

// play one round by taking the users click into consideration

const rock = document.querySelector("#rockButton")
const paper = document.querySelector("#paperButton")
const scissors = document.querySelector("#scissorsButton")
const playerChoice = document.querySelector("#playerChoice")
const computerChoice = document.querySelector("#computerChoice")
const resultAnnouncement = document.querySelector("#resultAnnoucement")
const playerScore = document.querySelector("#playerScore")
const computerScore = document.querySelector("#computerScore")
const winnerAnnouncement = document.querySelector("#winnerAnnouncement")

rock.addEventListener("click", () => {
    if (currentPlayerScore === 5 || currentComputerScore === 5) {
        rockButton.disabled = true;
    } else {
        rockClick();
        playerScore.textContent = `Player : ${currentPlayerScore}`
        computerScore.textContent = `Computer: ${currentComputerScore}`
        if (currentPlayerScore === 5) {
            winnerAnnouncement.textContent = "The game is over! You win!"
        } else if (currentComputerScore === 5) {
            winnerAnnouncement.textContent = "The game is over! The computer wins!"
        }
    }
});

paper.addEventListener("click", () => {
    if (currentPlayerScore === 5 || currentComputerScore === 5) {
        paperButton.disabled = true;
    } else {
        paperClick();
        playerScore.textContent = `Player : ${currentPlayerScore}`
        computerScore.textContent = `Computer: ${currentComputerScore}`
        if (currentPlayerScore === 5) {
            winnerAnnouncement.textContent = "The game is over! You win!"
        } else if (currentComputerScore === 5) {
            winnerAnnouncement.textContent = "The game is over! The computer wins!"
        }
    }
});

scissors.addEventListener("click", () => {
    if (currentPlayerScore === 5 || currentComputerScore === 5) {
        scissorsButton.disabled = true;
    } else {
        scissorsClick();
        playerScore.textContent = `Player : ${currentPlayerScore}`
        computerScore.textContent = `Computer: ${currentComputerScore}`
        if (currentPlayerScore === 5) {
            winnerAnnouncement.textContent = "The game is over! You win!"
        } else if (currentComputerScore === 5) {
            winnerAnnouncement.textContent = "The game is over! The computer wins!"
        }
    }
});