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
var timeLeft = 120;
var currentQuestion;
var questionIndex = 0;
var selectedChoice = ' ';
var evaluateChoiceCorrect = document.querySelector(".correct-eval");
var evaluateChoiceIncorrect = document.querySelector(".incorrect-eval");
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
    timeLeftEL.innerHTML = 'time-left: ' + timeLeft;
}


function getNextQuestion() {

    currentQuestion = questionsList[questionIndex];
    stemOfQuestionElement.innerHTML = currentQuestion.question;
    choice0Element.innerHTML = currentQuestion.choices[0];
    choice1Element.innerHTML = currentQuestion.choices[1];
    choice2Element.innerHTML = currentQuestion.choices[2];
    choice3Element.innerHTML = currentQuestion.choices[3];
    // Issue: Have to make options random





    if (questionIndex < (totalQuesNum-1)) {
        if (selectedChoice == currentQuestion.rightAnswer) {
            evaluateChoiceCorrect.setAttribute('class', 'correct-eval');
            questionIndex++;
            selectedChoice = ' ';
            getNextQuestion();
            evaluateChoiceIncorrect.removeAttribute('class', 'correct-eval');
            console.log(questionIndex);
        } else if (selectedChoice != ' ') {
            evaluateChoiceIncorrect.setAttribute('class', 'incorrect-eval');

            questionIndex++;
            selectedChoice = ' ';

            getNextQuestion();
            evaluateChoiceIncorrect.removeAttribute('class', 'incorrect-eval');
            console.log(questionIndex);
        }
    } else {
        entireQuestionElement.setAttribute('class', 'hide-me');
        console.log('DONE');
        evaluateChoiceIncorrect.removeAttribute('class', 'correct-eval');
        evaluateChoiceIncorrect.removeAttribute('class', 'incorrect-eval');
        displayFinalPage.setAttribute('class', 'enter-info');
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











