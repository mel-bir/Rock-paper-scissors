let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()*choices.length)]
}

function getHumanChoice(){
    let choice = prompt("Choose rock, paper or scissors: ").toLowerCase();
    return choice
}

function playRound(humanChoice, computerChoice){
    if(humanChoice==="rock" && computerChoice==="paper"){
        console.log("You lose! Paper beats Rock")
        computerScore++
    }
    else if(humanChoice==="scissors" && computerChoice==="rock"){
        console.log("You lose! Rock beats scissors")
        computerScore++
    }
    else if(humanChoice==="paper" && computerChoice==="scissors"){
        console.log("you lose! scissors beats paper")
        computerScore++
    }
    else if (humanChoice===computerChoice){
        console.log("It's a tie!")
    }
    else {
        console.log(`You win ${humanChoice} beats ${computerChoice}`)
        humanScore++
    }
    console.log(`Human Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)
}

function playGame(){
    for (let i=1; i<=5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        console.log("")
    }
    if(humanScore>computerScore){
        console.log("----------- HUMAN WINS -----------")
        console.log(`Final score: Human [${humanScore}] and computer [${computerScore}]`)
    }
    else if(computerScore>humanScore){
        console.log("----------- COMPUTER WINS -----------")
        console.log(`Final score: Computer [${computerScore}] human [${humanScore}]`)
    }
    else {
        console.log("It is a tie!")
        console.log(`Final score: Human [${humanScore}] computer [${computerScore}]`)
    }
}
const btn = document.querySelector("button");
btn.addEventListener("click", playGame)