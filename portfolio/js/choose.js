let round = 0;
let numOfRound;
let playerSelection;
let computerSelection;

// Currently first input displays for all rounds.
function choose(choice) {
    event.preventDefault();
    resetScores();   
    playerSelection = choice;
    rounds();
}

function rounds(num) {
    numOfRound = document.getElementById("rounds").value;
    for(i = 0; i < numOfRound; i++) {
        var opt = Math.round(Math.random() * (3-1+1) + 1);
        var result;
        if (opt == 1) {
            result = "Rock";
        } else if (opt == 2) {
            result = "Paper";
        } else {
            result = "Scissors";
        }
        computerSelection = result.toUpperCase();
        playerSelection = playerSelection.toUpperCase();
        playRound();
    }
}

function resetScores() {
    document.getElementById("output").innerHTML = "";
    round = 0;
    playerWin = 0;
    computerWin = 0;
}