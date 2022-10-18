


// Use 
// Use Activity 10, 12 from Web APIs to make timers
// Use Activity 18 from Web APIs to go through questions
// USe Activity 20 from Web APIs to click on multiple choice questions
// Use Activity 22 from Web APIs to make high score list
// Use Mini Project from Web APIs to do the following
//      a) Start button
//      b) Reduce time
//      c) Keep all information on one page [CP,Q,HS,LP]
//      d) ...
var questionsList = [ 
    {
        'question': 'Commonly used data types DO Not Include:',
        'choices':['string','booleans','alerts','numbers'],
        'rightAnswer':  'alerts'
    },

   {
    'question': 'The condition in an if / else statement is enclosed with ______.',
    'choices':  ['quotes','curly brackets','parenthesis','square brackets'],
    'rightAnswer': 'curly brackets'  
   },
   {
    'question': 'Arrays in JavaScript can be used to store_______.',
    'choices':  ['numbers and strings','other arrays','booleans','all of the above'],
    'rightAnswer': 'all of the above'  
   },
   {
    'question': 'String values must be enclosed within _____ when being assigned to variables',
    'choices':  ['commas','curly bracket','quotes','parenthesis'],
    'rightAnswer': 'quotes'  
   },
   {
    'question': 'A very useful tool used during development and debugging for printing content to the debugger is:',
    'choices':  ['JavaScript','terminal/bash','for loops','console.log'],
    'rightAnswer': 'console.log'  
   },

 
]



// 1. Address Button
var startQuizButton = document.getElementById("start-quiz");
// startQuizButton.addEventListner
startQuizButton.onclick = startQuiz;

var timeLeftEL = document.querySelector('.timer-count');
var startDescriptionElement = document.querySelector('.first-screen-descrip');
var entireQuestionElement = document.querySelector('.entire-question');
var stemOfQuestionElement = document.querySelector('#stem-of-question');
var choice1Element = document.querySelector('#choice1');
var choice2Element = document.querySelector('#choice2');
var choice3Element = document.querySelector('#choice3');
var choice4Element = document.querySelector('#choice4');


var timerId; 
var timeLeft = 120;
var currentQuestion;
var questionIndex = 0;

function startQuiz(){
    console.log('Start Quiz');
    startDescriptionElement.setAttribute('class','hide-me');
    entireQuestionElement.removeAttribute('class','hide-me');
    // Start Timer
    timerId = setInterval(timerFunction,1000);
    timeLeftEL.innerHTML = 'time-left: ' + timeLeft;
    // Populate Next Question
    getNextQuestion();
}


function timerFunction(){
    timeLeft--;
    timeLeftEL.innerHTML = 'time-left: ' + timeLeft;
}


function getNextQuestion(){
    console.log('Get Next Question');
    currentQuestion = questionsList[questionIndex];
    stemOfQuestionElement.innerHTML = currentQuestion.question;
    choice1Element.innerHTML = currentQuestion.choices[0];
    choice2Element.innerHTML = currentQuestion.choices[1];
    choice3Element.innerHTML = currentQuestion.choices[2];
    choice4Element.innerHTML = currentQuestion.choices[3];
    // Have to make options random
}


// Wrong Answe Function
// Corrrect Answer function











