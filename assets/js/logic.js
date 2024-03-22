var startScreen = document.querySelector("#start-screen")
var startButton = document.querySelector("#start");
var question = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var submit = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");
var timer = document.querySelector("#time");
var highScoresList = document.querySelector("#high-scores-list");
var questions = [
 // Add questions here in the format: 
 // {question: "Question text", 
 //answers: ["Answer 1", "Answer 2", ...], 
 //correctAnswer: "Correct Answer"}
];
var currentQuestionIndex = 0;
var timeLeft = 30;
var timerInterval;

function startQuiz() {
    startScreen.classList.add("hide");
    question.textContent = questions[currentQuestionIndex].question;
    choices.innerHTML = "";
    questions[currentQuestionIndex].answers.forEach(function(answer, index) {
      var button = document.createElement("button");
      button.textContent = answer;
      button.addEventListener("click", function() {
        if (answer === questions[currentQuestionIndex].correctAnswer) {
        } else {
        }
        nextQuestion();
      });
      choices.appendChild(button);
    });
    startTimer();


