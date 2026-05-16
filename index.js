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