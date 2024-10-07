// Create getComputerChoice function
// Call Math.random RETURN a number
// IF number is .33 or less RETURN rock
// IF number is greater than .33 and less than .66 RETURN paper
// IF number is between .66 or greater RETURN scissors
// Display number
    function getComputerChoice() {
        let number = Math.random();
         Math.random(number);
      if(number <= .33){
        alert("Rock");
      }
      else if(number > .33 && number < .66){
        alert("Paper");
      }
      else{
        alert("Scissors");
      }
}

console.log(getComputerChoice());