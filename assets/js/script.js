var questionsList = [
    {
        'question': 'Commonly used data types DO Not Include:',
        'choices': ['string', 'booleans', 'alerts', 'numbers'],
        'rightAnswer': 'alerts'
    },

    {
        'question': 'The condition in an if / else statement is enclosed with ______.',
        'choices': ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        'rightAnswer': 'curly brackets'
    },
    {
        'question': 'Arrays in JavaScript can be used to store_______.',
        'choices': ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        'rightAnswer': 'all of the above'
    },
    {
        'question': 'String values must be enclosed within _____ when being assigned to variables',
        'choices': ['commas', 'curly bracket', 'quotes', 'parenthesis'],
        'rightAnswer': 'quotes'
    },
    {
        'question': 'A very useful tool used during development and debugging for printing content to the debugger is:',
        'choices': ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        'rightAnswer': 'console.log'
    },


]

let totalQuesNum = questionsList.length;

// 1. Address Button
var startQuizButton = document.getElementById("start-quiz");
startQuizButton.onclick = startQuiz;

var timeLeftEL = document.querySelector('#timer-count');
var startDescriptionElement = document.querySelector('.first-screen-descrip');
var entireQuestionElement = document.querySelector('.entire-question');
var stemOfQuestionElement = document.querySelector('#stem-of-question');
var evalUserChoice = document.querySelector('.hide-eval');
var displayFinalPage = document.querySelector('.enter-info');




var choice0Element = document.querySelector('#choice1');
var choice1Element = document.querySelector('#choice2');
var choice2Element = document.querySelector('#choice3');
var choice3Element = document.querySelector('#choice4');






var timerId;
var timeLeft = 60;
var currentQuestion;
var questionIndex = 0;
var selectedChoice = ' ';
var evaluateChoice = document.querySelector(".evaluationOfResponse");
var finalScore = document.querySelector("#final-score");

function startQuiz() {
    console.log('Start Quiz');
    startDescriptionElement.setAttribute('class', 'hide-me');
    entireQuestionElement.removeAttribute('class', 'hide-me');
    // Start Timer
    timerId = setInterval(timerFunction, 1000);
    timeLeftEL.innerHTML = 'Time Remaining: ' + timeLeft;
    // Populate Next Question
    getNextQuestion();
}


function timerFunction() {
    timeLeft--;
    if (timeLeft <= 0) {
        timeLeft = 0
    }
    timeLeftEL.innerHTML = 'Time Remaining: ' + timeLeft;
}


function getNextQuestion() {

    currentQuestion = questionsList[questionIndex];
    stemOfQuestionElement.innerHTML = currentQuestion.question;
    choice0Element.innerHTML = '1. ' + currentQuestion.choices[0];
    choice1Element.innerHTML = '2. ' + currentQuestion.choices[1];
    choice2Element.innerHTML = '3. ' + currentQuestion.choices[2];
    choice3Element.innerHTML = '4. ' + currentQuestion.choices[3];
    // Issue: Have to make options random





    if (questionIndex < totalQuesNum  & timeLeft > 0) {

        // Correct Answer
        if (selectedChoice == currentQuestion.rightAnswer) {



            evaluateChoice.setAttribute('class', 'evaluationOfResponse');
            evaluateChoice.innerHTML = 'Correct';
            questionIndex++;
            selectedChoice = ' ';
            getNextQuestion();







            // Incorrect Answer
        } else if (selectedChoice != ' ' & selectedChoice != currentQuestion.rightAnswer) {

            evaluateChoice.setAttribute('class', 'evaluationOfResponse');
            evaluateChoice.innerHTML = 'Incorrect';
            timeLeft = timeLeft - 10;
            questionIndex++;
            selectedChoice = ' ';
            getNextQuestion();

            console.log(questionIndex);
        }
    } else {
       
        entireQuestionElement.setAttribute('class', 'hide-me');
        console.log('DONE');
        evaluateChoice.removeAttribute('class', 'correct-eval');
        evaluateChoice.removeAttribute('class', 'incorrect-eval');
        displayFinalPage.setAttribute('class', 'enter-info');

        finalScore.innerHTML = 'You Score: ' + timeLeft;

        timeLeft = 0;
        timeLeftEL.innerHTML = 'Time Remaining: ' + timeLeft;
    }

    // Tasks:
    // What did the user select? () --> use console.log to print it first
    // Check the user's choice with correct solution. --> Use if statement
    // If wrong, say wrong and add time to clock
    // If right, say correct and proceed to next question
    // Create While loop based on the following conditions - all questions are done or time runs out
    // Hide Page and show enter Last page
    // Top score list** 





}


choice0Element.addEventListener("click", function () {
    selectedChoice = currentQuestion.choices[0];
    getNextQuestion();
});

choice1Element.addEventListener("click", function () {
    selectedChoice = currentQuestion.choices[1];
    getNextQuestion();
});


choice2Element.addEventListener("click", function () {
    selectedChoice = currentQuestion.choices[2];
    getNextQuestion();
});

choice3Element.addEventListener("click", function () {
    selectedChoice = currentQuestion.choices[3];
    getNextQuestion();
});




// -----------------Function Definitions--------------------
// Author:
// Date Created:
// Date Modified:
// Name:
// Purpose:
// Input:
// Output:
// Notes:
// -----------------Function Definitions--------------------











