
// Begin game logic
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper";
    }
    else if (randomNumber === 3) {
        return "scissors"
    }
  }
  
  let playerScore = 0;
  let computerScore = 0;
  let compSelection = "";
  
  function results(playerSelection) {
    compSelection = computerPlay();

    if ((playerSelection === "rock") && (compSelection === "scissors")) {
        playerScore++;
        return `You won! ${playerSelection} beats ${compSelection}`;
    }
    else if ((playerSelection === "paper") && (compSelection === "rock")) {
        playerScore++;
        return `You won! ${playerSelection} beats ${compSelection}`;
    }
    else if ((playerSelection === "scissors") && (compSelection === "paper")) {
        playerScore++;
        return `You won! ${playerSelection} beats ${compSelection}`;
    }
    else if (compSelection === playerSelection) {
        return `It's a tie!`;
    }
    else {
        computerScore++;
        return `You lost! ${compSelection} beats ${playerSelection}`;
    }
  }
  
  function game(selection) {
    if ((selection !== "rock") && (selection !== "paper") && (selection !== "scissors")) {
        alert("You entered an incorrect selection!\nYou need to select either rock, paper or scissors");
    }
    else {
        return results(selection);
    }
  }
  
  let i = 0;
  
  /*while (i < 1) {
      let result = prompt("Type rock, paper or scissors!");
      result = result.toLowerCase();
      console.log(game(result));
      console.log(`Player score : ${playerScore} & Computer score : ${computerScore}`);
      i++;
  }*/
  if (playerScore > computerScore) {
      console.log("YOU ARE THE WINNER! 😄");
  }
  else if(playerScore < computerScore){
      console.log("The computer won!");
  }
  else {
      console.log("It's a draw!");
  }


// Begin Front-end Scripting

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

const container = document.querySelector('#container');

const choices = document.createElement('div');
const choice1 = document.createElement('button');
const choice2 = document.createElement('button');
const choice3 = document.createElement('button');
const showResults = document.createElement('div');
const currentScore = document.createElement('div');

currentScore.classList.add('currentScore');
currentScore.textContent = "Your score is: " + playerScore;

choices.classList.add('choices');

choice1.classList.add('choice1');
choice1.textContent = "Rock";

choice2.classList.add('choice2');
choice2.textContent = "Paper";

choice3.classList.add('choice3');
choice3.textContent = "Scissors";

container.appendChild(currentScore);
choices.appendChild(choice1);
choices.appendChild(choice2);
choices.appendChild(choice3);

container.appendChild(choices);

showResults.classList.add('showResults');
showResults.setAttribute('styls', 'background-color: red;');
container.appendChild(showResults);


choice1.addEventListener('click', function () {
    showResults.textContent = results(rock);
    currentScore.textContent = "Your score is: " + playerScore;

    if (playerScore == 5) {
        showResults.textContent = "Congratulations! You won the game!";
        playerScore = 0;
        computerScore = 0;
    } 
    else if (computerScore == 5) {
        showResults.textContent = "Sorry, you lost! Try again!";
        playerScore = 0;
        computerScore = 0;
    }
});

choice2.addEventListener('click', function () {
    showResults.textContent = results(paper);
    currentScore.textContent = "Your score is: " + playerScore;

    if (playerScore == 5) {
        showResults.textContent = "Congratulations! You won the game!";
        playerScore = 0;
        computerScore = 0;
    } 
    else if (computerScore == 5) {
        showResults.textContent = "Sorry, you lost! Try again!";
        playerScore = 0;
        computerScore = 0;
    }
});

choice3.addEventListener('click', function () {
    showResults.textContent = results(scissors);
    currentScore.textContent = "Your score is: " + playerScore;

    if (playerScore == 5) {
        showResults.textContent = "Congratulations! You won the game!";
        playerScore = 0;
        computerScore = 0;
    } 
    else if (computerScore == 5) {
        showResults.textContent = "Sorry, you lost! Try again!";
        playerScore = 0;
        computerScore = 0;
    }
});

