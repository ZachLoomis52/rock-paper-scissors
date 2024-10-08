//COMPUTER CHOICE LOGIC

// Create getComputerChoice function
    function getComputerChoice() {
// Call Math.random RETURN a number
       choice = Math.random();
// IF number is .33 or less RETURN rock
      if(choice <= .33){
        return "rock";
      }
// IF number is greater than .33 and less than .66 RETURN paper
      else if(choice > .33 && choice < .66){
        return "paper";
      }
// IF number is between .66 or greater RETURN scissors
      else{
        return "scissors";
      }
}

//HUMAN CHOICE LOGIC

// Create getHumanChoice function
function getHumanChoice(){
// Ask user to input rock, paper, or scissors 
        let choice = prompt("Choose rock, paper, or scissors").trim().toLowerCase();
        if(choice === "rock"){
           return "rock";
        }
        else if(choice === "paper"){
            return "paper";
        }
        else if(choice === "scissors"){
            return "scissors";
        }
        else {
            alert("Cant compute!!! Type rock, paper, or scissors");
        }        
    
}

// ROUND LOGIC
let humanScore = 0;
let computerScore = 0;

// Create playRound function
function playRound(humanChoice, computerChoice){
// Define parameters humanChoice and computerChoice 
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
// IF humanChoice = rock & computerChoice = scissors display human wins and increment humanScore
    if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Human wins!!! Rock beats Scissors.");
        humanScore++;
    }
// IF humanChoice = rock & computerChoice = paper display computer wins and increment computerScore
    else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("Computer wins!!! Paper beats Rock.");
        computerScore++;
    }
// IF humanChoice = paper & computerChoice = rock display human wins and increment humanScore
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("Human wins!!! Paper beats Rock.");
        humanScore++;
    }
// IF humanChoice = paper & computerChoice = scissors display computer wins and increment computerScore
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("Computer wins!!! Scissors beats Paper.");
        computerScore++;
    }
// IF humanChoice = scissors & computerChoice = paper display human wins and increment humanScore
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Human wins!!! Scissors beats Paper.");
        humanScore++;
    }
// IF humanChoice = scissors & computerChoice = rock display computer wins and increment computerScore
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("Computer wins!!! Rock beats Scissors.");
        computerScore++;
    }
// IF humanChoice = computerChoice display Tie
    else {
        console.log("Tie " + humanChoice + " = " + computerChoice + ".");
    }

}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

// PLAY GAME logic

// Create playGame function
// repeat playRound 5 times
// keep track of score for all 5 rounds
// display winner at the end

function playGame(){
    
    for(let i = 0; i < 5; i++){
        playRound(humanSelection, computerSelection); 
        console.log("Human Score: " + humanScore + "| Computer Score:  " + computerScore);
    }

    if(humanScore > computerScore){
        console.log("Human Wins!!!");
    }
    else{
        console.log("Computer Wins!!!");
    }
}

playGame();
