var initialInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var msgDiv = document.querySelector("#msg");
var highScore = document.querySelector("#final-score");

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}


function renderHighscores() {
    var initial = localStorage.getItem("initials");

    if (!initial) {
    return;
    }

}
  