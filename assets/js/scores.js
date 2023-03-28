var initial = JSON.parse(localStorage.getItem("initials"));
var list = document.getElementById("highscores");
var clearHighscoresButton = document.querySelector("#clear");

if (initial){
    for(var i = 0; i < initial.length; i++){
        var li = document.createElement("li");
        li.innerText = initial[i];
        list.appendChild(li);
    }
}

clearHighscoresButton.addEventListener("click", function(event) {
    event.preventDefault();

    localStorage.removeItem("initials");
    list.style.display = 'none';
})