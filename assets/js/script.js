


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

    
    // 'The condition in an if / else statement is enclosed with ______.',
    // 'Arrays in JavaScript can be used to store_______.'
]

// var questionsChoices = [
// ,
// ['1. quotes','2. curly brackets','3. parenthesis','4. square brackets'],
// ['1. numbers and strings','2. other arrays','3. booleans','4. all of the above']
// ]

// 1. Address Button
var startQuizButton = document.getElementById("start-quiz");
// startQuizButton.addEventListner
startQuizButton.onclick = startQuiz;

var timeLeftEL = document.querySelector('.timer-count');
var startDescriptionElement = document.querySelector('.first-screen-descrip');
var entireQuestionElement = document.querySelector('.entire-question');
var stemOfQuestionElement = document.querySelector('#stem-of-question');


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
}












