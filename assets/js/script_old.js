


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
startQuizButton.onclick = startQuiz;

var timeLeftEL = document.querySelector('.timer-count');
var startDescriptionElement = document.querySelector('.first-screen-descrip');
var entireQuestionElement = document.querySelector('.entire-question');
var stemOfQuestionElement = document.querySelector('#stem-of-question');
var choice1Element = document.querySelector('#choice1');
var choice2Element = document.querySelector('#choice2');
var choice3Element = document.querySelector('#choice3');
var choice4Element = document.querySelector('#choice4');


// Get Click by Usert
// SHould be a function
var choice1Button = document.getElementById('choice1');
choice1Button.onclick = choice1selected;

var choice2Button = document.getElementById('choice2');
choice2Button.onclick = choice2selected;

var choice3Button = document.getElementById('choice3');
choice3Button.onclick = choice3selected;

var choice4Button = document.getElementById('choice4');
choice4Button.onclick = choice4selected;




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
    // Issue: Have to make options random

    // Tasks:
    // What did the user select? () --> use console.log to print it first
    // Check the user's choice with correct solution. --> Use if statement
    // If wrong, say wrong and add time to clock
    // If right, say correct and proceed to next question
    // Create While loop based on the following conditions - all questions are done or time runs out
    // Hide Page and show enter Last page
    // Top score list** 


    
    

}

function choice1selected(){
    console.log('Choice - 1');
}

function choice2selected(){
    console.log('Choice - 2');
}

function choice3selected(){
    console.log('Choice - 3');
}

function choice4selected(){
    console.log('Choice - 4');
}



// // Check Answer
// function checkSelection(){
//     console.log('Check answer Answer');
// }

// // Wrong Answe Function
// function wrongAnswer(){
//     console.log('Wrong Answer');
// }


// // Corrrect Answer function
// function correctAnswer(){
//     console.log('Correct Answer');
// }



// Author: 
// Date Created:
// Date Modified: 
// Name: 
// Purpose:
// Input:
// Output:
// Notes:





//  (will not use)Random Set of Numbers not in order
let array = [1, 2, 3, 4, 5, 6];
const randomValue = array[Math.floor(Math.random() * array.length)];
console.log(randomValue)






