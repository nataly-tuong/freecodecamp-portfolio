function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getHumanChoice() {
  const humanChoice = prompt("Enter 'rock', 'paper', or 'scissors'");
  return humanChoice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
      computerScore++;
      return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }

  if (humanScore > computerScore) {
    console.log(
      `You win the game! Final score: You ${humanScore} - Computer ${computerScore}`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `You lose the game! Final score: You ${humanScore} - Computer ${computerScore}`
    );
  } else {
    console.log(
      `The game is a tie! Final score: You ${humanScore} - Computer ${computerScore}`
    );
  }
  console.log(`Final Scores - You: ${humanScore}, Computer: ${computerScore}`);
}

playGame();
