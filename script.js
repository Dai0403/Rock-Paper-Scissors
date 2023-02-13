"use strict";

//capitalise the first letter of words in a sentense
const firstUp = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

//initialize
let userScore = 0;
let comScore = 0;

const choice = [`rock`, `paper`, `scissors`];

let PlayerChoice;
let buttons = document.querySelectorAll(".btn");

function getComputerChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}

buttons.forEach((button) => {
  button.addEventListener(`click`, () => {
    PlayerChoice = button.value;
    playRound(PlayerChoice, getComputerChoice());
    updateChoice(PlayerChoice, getComputerChoice());
    if (userScore >= 5 || comScore >= 5) {
      modalActivate();
      showWinner();
    }
  });
});

// playround
const playRound = function (playerSelection, computerSelection) {
  if (
    (playerSelection === `rock` && computerSelection === `scissors`) ||
    (playerSelection === `paper` && computerSelection === `rock`) ||
    (playerSelection === `scissors` && computerSelection === `paper`)
  ) {
    ++userScore;
    userScoreDisplay.textContent = `Your Score: ${userScore}`;
    roundResult.textContent = `You won`;
    roundMessage.textContent = `${firstUp(
      playerSelection
    )} beats ${computerSelection}.`;
  } else if (playerSelection === computerSelection) {
    roundResult.textContent = `It's tie`;
    roundMessage.textContent = `${firstUp(
      playerSelection
    )} ties with ${computerSelection}.`;
  } else {
    ++comScore;
    comScoreDisplay.textContent = `Computer's Score: ${comScore}`;
    roundResult.textContent = `You lost`;
    roundMessage.textContent = `${firstUp(
      computerSelection
    )} beats ${playerSelection}.`;
  }
};

let finalScore = `The final score is you:${userScore}, computer:${comScore}`;

const userChoice = document.getElementById("user-choice");
const comChoice = document.getElementById("com-choice");
const userScoreDisplay = document.getElementById("user-score");
const comScoreDisplay = document.getElementById("com-score");
const roundMessage = document.getElementById("round-message");
const roundResult = document.getElementById("round-result");
const restartBtn = document.getElementById("btn-restart");

const overlay = document.getElementById("overlay");
const endgameMsg = document.getElementById("endgameMsg");

function updateChoice(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      userChoice.textContent = ` Your Choice: ✊🏻`;
      break;
    case "scissors":
      userChoice.textContent = ` Your Choice: ✌🏻`;
      break;

    case "paper":
      userChoice.textContent = ` Your Choice: 🖐🏻`;
      break;
  }
  switch (computerSelection) {
    case "rock":
      comChoice.textContent = ` Computer's Choice: ✊🏻`;
      break;

    case "scissors":
      comChoice.textContent = ` Computer's Choice: ✌🏻`;
      break;

    case "paper":
      comChoice.textContent = ` Computer's Choice: 🖐🏻`;
      break;
  }
}

restartBtn.addEventListener("click", restartGame);
overlay.addEventListener("click", modalDeactivate);

function restartGame() {
  userScore = 0;
  comScore = 0;
  userScoreDisplay.textContent = `Your Score: ${userScore}`;
  comScoreDisplay.textContent = `Computer's Score: ${comScore}`;
  userChoice.textContent = `Your Choice: ❓`;
  comChoice.textContent = `Computer's Choice: ❓`;
  roundMessage.textContent = `choose`;
  roundResult.textContent = `score 5 points first!`;
  overlay.classList.remove("active");
  endgameModal.classList.remove("active");
}

function modalActivate() {
  overlay.classList.add("active");
  endgameModal.classList.add("active");
}
function modalDeactivate() {
  overlay.classList.remove("active");
  endgameModal.classList.remove("active");
}

function showWinner() {
  if (userScore > comScore) {
    endgameMsg.textContent = `Congratulation`;
  } else {
    endgameMsg.textContent = `ahaha... beaten by computer`;
  }
}
