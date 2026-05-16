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