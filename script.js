const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("img")
const endResultDisplay = document.getElementById("end-result")
const yourScoreDisplay = document.getElementById("yourscore")
const computerScoreDisplay = document.getElementById("computerscore")
const results = document.querySelector("button")

let computerChoice;
let userChoice;
let result;
let playerScore = 0;
let computerScore = 0;



possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
   
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3) + 1;
    //console.log(randomNumber);
    if (randomNumber === 1) {
        computerChoice = "rock";
    }
    if (randomNumber === 2) {
        computerChoice = "scissors"
    } 
    if (randomNumber === 3) {
        computerChoice = "paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice;
    
    
    
}

// choice desplay




function getResult() {
    if (computerChoice === userChoice) {
        result = "It is a draw"
    }

    if (computerChoice === "rock" && userChoice === "paper") {
        result = "You won"
        playerScore += 1
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "You lost"
        computerScore += 1
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "You won"
        playerScore += 1
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "You lost"
        computerScore += 1
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "You lost"
        computerScore += 1
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "You won"
        playerScore += 1
    }
    
    resultDisplay.innerHTML = result;
    yourScoreDisplay.innerHTML = (playerScore)
    computerScoreDisplay.innerHTML = (computerScore)  

    

    if (playerScore >= 5){
        endResultDisplay = alert("Congratulations you won the game. Please refresh to start again")
            } 
    if (computerScore >= 5){
        endResultDisplay = alert("Unfortunately you lost the game. Please refresh to start again")
        
    } 
}




function buttonDisable() {
    possibleChoices.forEach(elem=> {
        elem.disabled = true
    })
}