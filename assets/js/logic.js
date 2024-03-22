import { quizQuestions } from './questions.js';

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector("#start");
    const startScreen = document.querySelector("#start-screen");
    const questionTitle = document.querySelector("#question-title");
    const choicesDiv = document.querySelector("#choices");
    const timer = document.querySelector("#time");
    let timeLeft = 30;
    let timerInterval;
    let currentQuestionIndex = 0;
    const endScreen = document.querySelector("#end-screen");

    startButton.addEventListener("click", startQuiz);

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

    let score = 0;

    function validateAnswer(answerIndex) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        if (answerIndex === currentQuestion.correctAnswer) {

            score += 10;
        } else {

            timeLeft -= 10;
            if (timeLeft <= 0) {
                endQuiz();
            }
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }

    function endQuiz() {
        clearInterval(timerInterval);
        const finalScoreDisplay = document.querySelector("#final-score");
        finalScoreDisplay.textContent = score;
        const questionsDiv = document.querySelector("#questions");
        questionsDiv.classList.add("hide");
        endScreen.classList.remove("hide");
    }
});

