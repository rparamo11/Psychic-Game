var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessLeft = 10;
var userGuesses = [];

function resetGlobalVariables () {
    guessLeft = 10;
    userGuessess = [];
}

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    userGuesses.concat(userGuess);

    if (userGuess === computerGuess) {
        wins++;
        alert("You Win!!")
        resetGlobalVariables();
    } else if (userGuess !== computerGuess) {
       guessLeft--; 
        if (guessLeft === 0) {
            losses++;
            alert("You lose!")
            resetGlobalVariables();
        }
    }

    
    var html =
    
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses left: " + guessLeft + "</p>" +
    "<p>You chose: " + userGuess + "</p>" ;


  // Set the inner HTML contents of the #game div to our html string
  document.querySelector("#game").innerHTML = html;

}