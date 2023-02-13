"use strict";
<<<<<<< HEAD
=======
// //selecting elements
// const btnContinue = document.getElementById("continue");

// //choices
// const choice = [`rock`, `paper`, `scissors`];
// const getComputerChoice = function () {
//   return choice[Math.floor(Math.random() * choice.length)];
// };
// const cpuChoice = getComputerChoice();
// console.log(cpuChoice);

// function checkInput(input) {
//   return choice.includes(input);
// }

// function userChoice() {
//   let input = prompt("Choose betwee Rock, Paper and Scisscors").toLowerCase();

//   while (input === null) {
//     input = prompt("Please type, choose betwee Rock, Paper and Scisscors");
//   }

//   let check = checkInput(input);
//   while (check === false) {
//     console.log(`wrong input`);
//     input = prompt(
//       "Wrong input, choose betwee Rock, Paper and Scisscors"
//     ).toLowerCase();
//     while (input === null) {
//       input = prompt("Please type, choose betwee Rock, Paper and Scisscors");
//     }
//     check = checkInput(input);
//   }
//   return input;
// }

// const user = userChoice();
// // let userChoice = prompt(
// //   "Choose betwee Rock, Paper and Scisscors"
// // ).toLowerCase();
// // console.log(userChoice);
// let userScore = 0;
// let comScore = 0;

// //capitalise the first letter of words in a sentense
// const firstUp = function (str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// };

// const playRound = function (playerSlection, computerSelection) {
//   if (
//     (playerSlection === `rock` && computerSelection === `scissors`) ||
//     (playerSlection === `paper` && computerSelection === `rock`) ||
//     (playerSlection === `scissors` && computerSelection === `paper`)
//   ) {
//     userScore = userScore + 1;
//     return `You win. ${firstUp(playerSlection)} beats ${computerSelection}.`;
//   } else if (playerSlection === computerSelection) {
//     return "You are tie!";
//   } else {
//     comScore += 1;
//     return `You lose. ${firstUp(computerSelection)} beats ${playerSlection}.`;
//   }
// };
// const play = playRound(userChoice, cpuChoice);

// let times = 0;

// function game() {
//   for (let round = 5; round >= 1; round--) {
//     playRound(userChoice, cpuChoice);
//     btnContinue.addEventListener("click", function () {
//       if (round > 1) {
//         user;
//         playRound(userChoice, cpuChoice);
//       }
//     });
//     console.log(`${round} rounds left`);
//   }
// }

// game();

// console.log(userScore, comScore);
//---------------------------------------------------------------------
// computer play
// const choice = [`rock`, `paper`, `scissors`];
>>>>>>> d6186cfc690d3616a71c8ff3856b2fa8a3898890

//capitalise the first letter of words in a sentense
const firstUp = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

//initialize
let userScore = 0;
let comScore = 0;

<<<<<<< HEAD
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
=======
// play up to 5 rounds
for (let i = 1; i <= 5; i++) {
  const choice = [`rock`, `paper`, `scissors`];

  function checkInput(input) {
    return choice.includes(input);
  }
  function userChoice() {
    let input = prompt("Choose betwee Rock, Paper and Scisscors").toLowerCase();
    while (input === null) {
      input = prompt("Please type, choose betwee Rock, Paper and Scisscors");
    }

    let check = checkInput(input);
    while (check === false) {
      console.log(`wrong input`);
      input = prompt(
        "Wrong input, choose betwee Rock, Paper and Scisscors"
      ).toLowerCase();

      while (input === null) {
        input = prompt("Please type, choose betwee Rock, Paper and Scisscors");
      }
      check = checkInput(input);
    }
    return input;
  }
  let playerSelection = userChoice();
  const getComputerChoice = function () {
    return choice[Math.floor(Math.random() * choice.length)];
  };
  const computerSelection = getComputerChoice();
  let win = `You win. ${firstUp(playerSelection)} beats ${computerSelection}.`;
  let tie = `It's tie`;
  let lose = `You lose. ${firstUp(
    computerSelection
  )} beats ${playerSelection}.`;
  // playround
  const playRound = function (playerSelection, computerSelection) {
    if (
      (playerSelection === `rock` && computerSelection === `scissors`) ||
      (playerSelection === `paper` && computerSelection === `rock`) ||
      (playerSelection === `scissors` && computerSelection === `paper`)
    ) {
      userScore = userScore + 1;
      return win;
    } else if (playerSelection === computerSelection) {
      return tie;
    } else {
      comScore += 1;
      return lose;
    }
  };

  console.log(playRound(playerSelection, computerSelection));
  let left = 5 - i;
  console.log(userScore, comScore, `${left} rounds left`);
  // console.log(`${left} rounds left`);
}
let finalScore = `The final score is you:${userScore}, computer:${comScore}`;
if (userScore > comScore) {
  console.log(`Congratulation, ${finalScore} `);
} else if (userScore < comScore) {
  console.log(`ahaha... beaten by computer ${finalScore} `);
} else {
  console.log(`Tie! ${finalScore} `);
}
>>>>>>> d6186cfc690d3616a71c8ff3856b2fa8a3898890
