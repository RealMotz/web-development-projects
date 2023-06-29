let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, targetGuess) {
    let humanDifference = getAbsoluteDistance(targetGuess, humanGuess);
    let computerDifference = getAbsoluteDistance(targetGuess, computerGuess);
    return humanDifference <= computerDifference;
}

function getAbsoluteDistance(a, b) {
    return Math.abs(a - b);
}

function updateScore(winner) {
    if(winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}

// let humanWinner;
// for (let index = 0; index <= 10; index++) {
//     let target = generateTarget();
//     humanWinner = compareGuesses(index, 10-index, target);
//     console.log(humanWinner);
//     console.log(`human guess: ${index}`);
//     console.log(`computer guess: ${10-index}`);
//     console.log(`target: ${target}`);
// }


