document.addEventListener('DOMContentLoaded', function () {
    const highscoresList = document.querySelector("#highscores");
    const clearButton = document.querySelector("#clear");

    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    function displayHighScores() {
        highscoresList.innerHTML = ""; 
        highScores.forEach(function(score) {
            const listItem = document.createElement("li");
            listItem.textContent = score.initials + ": " + score.score;
            highscoresList.appendChild(listItem);
        });
    }

    displayHighScores(); 

    clearButton.addEventListener("click", function() {
        localStorage.removeItem('highScores');
        highScores = []; 
        displayHighScores(); 
    });
});
