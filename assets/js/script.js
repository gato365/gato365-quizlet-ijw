// Define Question List
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
// Define Variables used in script
let totalQuesNum = questionsList.length;
var startQuizButton = document.querySelector("#start-quiz");
startQuizButton.onclick = startQuiz;
var submitQuizButton = document.querySelector("#submit-quiz");
// submitQuizButton.onclick = submitQuiz;
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
var highScorePage = document.querySelector(".high-score-containter");







// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 10/18/2022
// Date Modified: 10/18/2022
// Name: startQuiz
// Purpose: Runs the program
// Input: NA
// Output: NA
// Notes: NA
// -----------------Function Definitions--------------------


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


// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD
// Date Created: 10/22/2022
// Date Modified: 10/22/2022
// Name: timerFunction
// Purpose: Countdown Timer
// Input: NA
// Output: NA
// Notes: Output changes a global variable
// -----------------Function Definitions--------------------
// submitQuiz.addEventListener("click", function () {
//     console.log('Submit Quiz');
//       // When submit button is hit
//       displayFinalPage.setAttribute('class', 'hide-me');
//       highScorePage.removeAttribute('class','hide-me');
// });

// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD
// Date Created: 10/18/2022
// Date Modified: 10/18/2022
// Name: timerFunction
// Purpose: Countdown Timer
// Input: NA
// Output: NA
// Notes: Output changes a global variable
// -----------------Function Definitions--------------------


function timerFunction() {
    timeLeft--;
    if (timeLeft <= 0) {
        timeLeft = 0
    }
    timeLeftEL.innerHTML = 'Time Remaining: ' + timeLeft;
}


// -----------------Function Definitions--------------------
// Author: Immanuel Williams PhD 
// Date Created: 10/18/2022
// Date Modified: 10/22/2022
// Name: getNextQuestion
// Purpose: Proceed through the quiz
// Input: NA
// Output: NA
// Notes: Trying to make the function go to the last page
// -----------------Function Definitions--------------------


function getNextQuestion() {

    console.log(questionIndex);
    if (questionIndex < totalQuesNum & timeLeft > 0) {
        // Place Question in HTML code
        currentQuestion = questionsList[questionIndex];
        stemOfQuestionElement.innerHTML = currentQuestion.question;
        choice0Element.innerHTML = '1. ' + currentQuestion.choices[0];
        choice1Element.innerHTML = '2. ' + currentQuestion.choices[1];
        choice2Element.innerHTML = '3. ' + currentQuestion.choices[2];
        choice3Element.innerHTML = '4. ' + currentQuestion.choices[3];


        // Proceed to Next Question


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


        }
        // Quiz is Over
    } else  {

        entireQuestionElement.setAttribute('class', 'hide-me');
        console.log('DONE');
        evaluateChoice.removeAttribute('class', 'correct-eval');
        evaluateChoice.removeAttribute('class', 'incorrect-eval');
        displayFinalPage.setAttribute('class', 'enter-info');

        finalScore.innerHTML = 'You Score: ' + timeLeft;

        timeLeft = 0;
        timeLeftEL.innerHTML = 'Time Remaining: ' + timeLeft;
    }
}

// Choice 0 for Question
choice0Element.addEventListener("click", function () {
    selectedChoice = currentQuestion.choices[0];
    getNextQuestion();
});

// Choice 1 for Question
choice1Element.addEventListener("click", function () {
    selectedChoice = currentQuestion.choices[1];
    getNextQuestion();
});

// Choice 2 for Question
choice2Element.addEventListener("click", function () {
    selectedChoice = currentQuestion.choices[2];
    getNextQuestion();
});

// Choice 3 for Question
choice3Element.addEventListener("click", function () {
    selectedChoice = currentQuestion.choices[3];
    getNextQuestion();
});














