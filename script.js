"use strict";
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

//capitalise the first letter of words in a sentense
const firstUp = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

//initialize
let userScore = 0;
let comScore = 0;

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
