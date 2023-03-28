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
  

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var initialInput = document.querySelector("#initials").value;
  
    if (initialInput === "") {
      displayMessage("error", "Initials cannot be blank");
    } else {
      displayMessage("success", "Registered successfully");
      
      var currentScore = JSON.parse(localStorage.getItem("initials"));
       
      if (!currentScore){
        currentScore = [];
      }

      currentScore.push(initialInput + ' ' + score);
     
      localStorage.setItem("initials", JSON.stringify(currentScore));

      renderHighscores();
    }
});
  