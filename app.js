let userScore = 0;
const computerScore = 0;
const userScore_span =  document.getElementById("user-score");
const ComputerScore_span =  document.getElementById("computer-score");
const scoreBoard_div =  document.querySelector(".score-board");
const result_p =  document.querySelector(".result > p");
const rock_div =  document.getElementById("r");
const paper_div =  document.getElementById("p");
const scissors_div =  document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() 
* 3);
    return choices(randomNumber);
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    userScore ++;
    userScore_span.innerHTML = userScore;
    ComputerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + "beats" + convertToWord(computerChoice) + ". You win!"
}


function game(userChoice) {
   const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
            case "rs";
            case "pr";
            case "sp";
                win(userChoice,  computerChoice);
            break;
            case "rp";
            case "ps";
            case "sr";
                lose(userChoice,  computerChoice);
            break;
            case "rr";
            case "pp";
            case "ss";
                draw(userChoice,  computerChoice);
            break;
    }
    }
    }
}

function main(){
   rock_div.addEventListener('click', function() {
    console.log("hey you clicked on rock");
})

paper_div.addEventListener('click', function() {
    console.log("hey you clicked on paper");
})

scissors_div.addEventListener('click', function() {
    console.log("hey you clicked on scissors");
}) 
}



    