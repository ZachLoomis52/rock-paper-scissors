const container = document.querySelector('#container');

const playBtn = document.createElement('button');
playBtn.className = 'btn';
playBtn.textContent = 'PLAY';
playBtn.style.border = '2px solid black';
playBtn.style.padding = '15px';
playBtn.style.marginRight = '30px';

const btnR = document.createElement('button');
btnR.className = 'btn';
btnR.textContent = 'ROCK';
btnR.style.border = '2px solid black';
btnR.style.padding = '15px';
btnR.style.marginRight = '10px';

const btnP = document.createElement('button');
btnP.className = 'btn';
btnP.textContent = 'PAPER';
btnP.style.border = '2px solid black';
btnP.style.padding = '15px';
btnP.style.marginRight = '10px';

const btnS = document.createElement('button');
btnS.className = 'btn';
btnS.textContent= 'SCISSORS';
btnS.style.border = '2px solid black';
btnS.style.padding = '15px';

let result = document.createElement("div");
result.id = "result";
result.textContent = "Result: " ;
result.style.marginTop = "20px";
result.style.fontSize = "30px";
result.style.fontWeight = "bold";

let score = document.createElement("div");
score.id = "score";
score.textContent = "Score: " ;
score.style.marginTop = "20px";
score.style.fontSize = "30px";
score.style.fontWeight = "bold";

container.appendChild(btnR);
container.appendChild(btnP);
container.appendChild(btnS);
container.appendChild(result);
container.appendChild(score);



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

let choice = "";

btnR.addEventListener('click', () => {
    choice = "rock";
    playRound();
});
btnP.addEventListener('click', () =>{
    choice = "paper";
    playRound();
  });
  btnS.addEventListener('click', () =>{
    choice = "scissors";
    playRound();
});

// Create getHumanChoice function
function getHumanChoice(choice){
// Ask user to input rock, paper, or scissors 

       if(choice === "rock"){
            return "rock";
       }
       else if(choice === "paper"){
            return "paper"
       }
       else if(choice === "scissors"){
            return "scissors";
       }
       else{
        result.textContent = "cant compute try again";
       }   
}

// ROUND LOGIC
let humanScore = 0;
let computerScore = 0;

// Create playRound function
function playRound(humanChoice, computerChoice){


// Define parameters humanChoice and computerChoice 
    humanChoice = getHumanChoice(choice);
    computerChoice = getComputerChoice();
// IF humanChoice = rock & computerChoice = scissors display human wins and increment humanScore
    if(humanChoice === "rock" && computerChoice === "scissors"){
        result.textContent = "Result: Human wins!!! Rock beats Scissors.";
        humanScore++;
        score.textContent = "Score: Human Score: " + humanScore + "| Computer Score:  " + computerScore;
    }
// IF humanChoice = rock & computerChoice = paper display computer wins and increment computerScore
    else if(humanChoice === "rock" && computerChoice === "paper"){
        result.textContent = "Result: Computer wins!!! Paper beats Rock." 
        computerScore++;
        score.textContent = "Score: Human Score: " + humanScore + "| Computer Score:  " + computerScore;
    }
// IF humanChoice = paper & computerChoice = rock display human wins and increment humanScore
    else if(humanChoice === "paper" && computerChoice === "rock"){
        result.textContent = "Result: Human wins!!! Paper beats Rock.";
        humanScore++;
        score.textContent = "Score: Human Score: " + humanScore + "| Computer Score:  " + computerScore;
    }
// IF humanChoice = paper & computerChoice = scissors display computer wins and increment computerScore
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        result.textContent = "Result: Computer wins!!! Scissors beats Paper.";
        computerScore++;
        score.textContent = "Score: Human Score: " + humanScore + "| Computer Score:  " + computerScore;
    }
// IF humanChoice = scissors & computerChoice = paper display human wins and increment humanScore
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        result.textContent = "Result: Human wins!!! Scissors beats Paper.";
        humanScore++;
        score.textContent = "Score: Human Score: " + humanScore + "| Computer Score:  " + computerScore;
    }
// IF humanChoice = scissors & computerChoice = rock display computer wins and increment computerScore
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        result.textContent ="Result: Computer wins!!! Rock beats Scissors.";
        computerScore++;
        score.textContent = "Score: Human Score: " + humanScore + "| Computer Score:  " + computerScore;
    }
// IF humanChoice = computerChoice display Tie
    else {
        result.textContent = "Result: Tie " + humanChoice + " = " + computerChoice + ".";
        score.textContent = "Score: Human Score: " + humanScore + "| Computer Score:  " + computerScore;
    }

    if(humanScore > 4 || computerScore > 4){
        if(humanScore > computerScore){
            result.textContent = "Result: Human WINS!!! Click Rock, Paper, or Scissors to play again.";
        }
        else{
            result.textContent = "Result: Computer WINS!!! Click Rock, Paper, or Scissors to play again.";
        }

        humanScore = 0;
        computerScore = 0;
    }
}










