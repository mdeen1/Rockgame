const userScore = 0;
const computerScore = 0;
const userScore_span =  document.getElementById("user-score");
const ComputerScore_span =  document.getElementById("computer-score");
const scoreBoard_div =  document.querySelector(".score-board");
const result_div =  document.querySelector(".result");
const rock_div =  document.getElementById("r");
const paper_div =  document.getElementById("p");
const scissors_div =  document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() 
* 3);
    return choices(randomNumber);
}
console.log(getComputerChoice());

function game(userChoice) {
    
}

rock_div.addEventListener('click', function() {
    console.log("hey you clicked on rock");
})

paper_div.addEventListener('click', function() {
    console.log("hey you clicked on paper");
})

scissors_div.addEventListener('click', function() {
    console.log("hey you clicked on scissors");
})

    