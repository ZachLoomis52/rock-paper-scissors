// Create getComputerChoice function
    function getComputerChoice() {
        let number = Math.random();
// Call Math.random RETURN a number
         Math.random(number);
// IF number is .33 or less RETURN rock
      if(number <= .33){
        alert("Rock");
      }
// IF number is greater than .33 and less than .66 RETURN paper
      else if(number > .33 && number < .66){
        alert("Paper");
      }
// IF number is between .66 or greater RETURN scissors
      else{
        alert("Scissors");
      }
}
// Display getComputerChoice
console.log(getComputerChoice());

//Human choice SECTION
// Create getHumanChoice function
// Ask user to input rock, paper, or scissors 
// Use prompt method to recieve user input
// display user input

function getHumanChoice(){
    let choice = prompt("Choose rock, paper, or scissors");
        if(choice === "rock"){
            alert("rock")
        }
        else if(choice === "paper"){
            alert("paper");
        }
        else if(choice === "scissors"){
            alert("scissors");
        }
        else {
            alert("Cant compute choose 1 of the 3 options");
        }            
}

console.log(getHumanChoice());