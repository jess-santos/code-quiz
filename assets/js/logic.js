import { quizQuestions } from './questions.js';

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector("#start");
    const startScreen = document.querySelector("#start-screen");
    const questionTitle = document.querySelector("#question-title");
    const choicesDiv = document.querySelector("#choices");
    const timer = document.querySelector("#time");
    const endScreen = document.querySelector("#end-screen");
    const initialsInput = document.querySelector("#initials");
    const submitButton = document.querySelector("#submit");

    let timeLeft = 70;
    let timerInterval;
    let currentQuestionIndex = 0;
    let score = 0;

    startButton.addEventListener("click", startQuiz);
    submitButton.addEventListener("click", saveHighScore);

    function startQuiz() {
        startScreen.classList.add("hide");
        const questionsDiv = document.querySelector("#questions");
        questionsDiv.classList.remove("hide");

        startTimer();
        displayQuestion();
    }

    function startTimer() {
        timerInterval = setInterval(function () {
            timeLeft--;
            timer.textContent = timeLeft;
            if (timeLeft <= 0) {
                endQuiz();
            }
        }, 1000);
    }

    function displayQuestion() {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionTitle.textContent = currentQuestion.question;
        choicesDiv.innerHTML = "";
        currentQuestion.answers.forEach(function (answer, index) {
            const button = document.createElement("button");
            button.textContent = answer;
            button.addEventListener("click", function () {
                validateAnswer(index);
            });
            choicesDiv.appendChild(button);
        });
    }

    function validateAnswer(answerIndex) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        if (answerIndex === currentQuestion.correctAnswer) {
            score += 10;
        } else {
            timeLeft -= 10;
            if (timeLeft < 0) {
                timeLeft = 0;
            }
        }
    
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }

    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    function saveHighScore() {
        const initials = initialsInput.value.trim();
        if (initials !== "") {
            highScores.push({ initials, score });
            highScores.sort((a, b) => b.score - a.score);
            localStorage.setItem('highScores', JSON.stringify(highScores));
            console.log("High score saved:", initials, score);
        }
    }

    function endQuiz() {
        clearInterval(timerInterval);
        const finalScoreDisplay = document.querySelector("#final-score");
        finalScoreDisplay.textContent = score;
        endScreen.classList.remove("hide");
    }
});
