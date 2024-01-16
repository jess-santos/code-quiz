var startScreen = document.querySelector("#start-screen")
var startButton = document.querySelector("#start");
var question = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var submit = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");

function hideIntro() {
    startScreen.classList.add("hide");
}

startButton.addEventListener("click", hideIntro);
