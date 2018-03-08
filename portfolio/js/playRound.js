let computerWin = 0;
let playerWin = 0;

function playRound() {
    if (computerSelection === playerSelection) {
        document.getElementById("output").insertAdjacentHTML('beforeend', "Computer chooses " + computerSelection + "!" + "<br>" + "Its a tie!" + "<br>" + "Score (Comp): " + computerWin + "<br>" + "Score (You): " + playerWin +"<br>"); }
    else if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') {
        computerWin++;
        document.getElementById("output").insertAdjacentHTML('beforeend', "Computer chooses ROCK!" + "<br>" + "Computer wins, ROCK beats SCISSORS" + "<br>" + "Score (Comp): " + computerWin + "<br>" + "Score (You): " + playerWin +"<br>"); }
    else if (computerSelection === 'ROCK' && playerSelection === 'PAPER') {
        playerWin++;
        document.getElementById("output").insertAdjacentHTML('beforeend', "Computer chooses ROCK!" + "<br>" + "Player wins, PAPER beats ROCK" + "<br>" + "Score (Comp): " + computerWin + "<br>" + "Score (You): " + playerWin +"<br>"); }        
    else if (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') {
        playerWin++;
        document.getElementById("output").insertAdjacentHTML('beforeend', "Computer chooses PAPER!" + "<br>" + "Player wins, SCISSORS beat PAPER" + "<br>" + "Score (Comp): " + computerWin + "<br>" + "Score (You): " + playerWin +"<br>"); }
    else if (computerSelection === 'PAPER' && playerSelection === 'ROCK') {
        computerWin++;
        document.getElementById("output").insertAdjacentHTML('beforeend', "Computer chooses PAPER!" + "<br>" + "Computer wins, PAPER beats ROCK" + "<br>" + "Score (Comp): " + computerWin + "<br>" + "Score (You): " + playerWin +"<br>"); }
    else if (computerSelection === 'SCISSORS' && playerSelection === 'ROCK') {
        playerWin++;
        document.getElementById("output").insertAdjacentHTML('beforeend', "Computer chooses SCISSORS!" + "<br>" + "Player wins, ROCK beats SCISSORS" + "<br>" + "Score (Comp): " + computerWin + "<br>" + "Score (You): " + playerWin +"<br>"); }
    else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') {
        computerWin++;
        document.getElementById("output").insertAdjacentHTML('beforeend', "Computer chooses SCISSORS!" + "<br>" + "Computer wins, SCISSORS beat PAPER" + "<br>" + "Score (Comp): " + computerWin + "<br>" + "Score (You): " + playerWin +"<br>"); }
};