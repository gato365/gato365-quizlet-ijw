// Create Questions that will be asked



var startQuizButton = document.getElementById("start-quiz");
startQuizButton.onclick = startQuiz;

var timeLeftEL = document.querySelector('.timer-count');

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

const Questions = [{
		questionId: 0,
		questionStem: 'Commonly used data types DO Not Include:',
		questionSolution: [{ text: 'string', isCorrect: false },
			{ text: 'booleans', isCorrect: false },
			{ text: 'alerts', isCorrect: true },
			{ text: 'numbers', isCorrect: false }
		]

	},
	{
		questionId: 1,
		questionStem: 'The condition in an if / else statement is enclosed with ______.',
		questionSolution: [{ text: 'square brackets', isCorrect: false },
			{ text: 'parenthesis', isCorrect: false },
			{ text: 'quotes', isCorrect: false },
			{ text: 'curly brackets', isCorrect: true }
		]

	},
	{
		questionId: 2,
		questionStem: 'Arrays in JavaScript can be used to store_______.',
		questionSolution: [{ text: 'booleans', isCorrect: false },
			{ text: 'other arrays', isCorrect: false },
			{ text: 'all of these options', isCorrect: true },
			{ text: 'numbers and strings', isCorrect: false }
		]

	},

	{
		questionId: 3,
		questionStem: 'String values must be enclosed within _____ when being assigned to variables',
		questionSolution: [{ text: 'commas', isCorrect: false },
			{ text: 'curly bracket', isCorrect: false },
			{ text: 'quotes', isCorrect: true },
			{ text: 'parenthesis', isCorrect: false }
		]

	},

	{
		questionId: 4,
		questionStem: 'A very useful tool used during development and debugging for printing content to the debugger is:',
		questionSolution: [{ text: 'JavaScript', isCorrect: false },
			{ text: 'for loops', isCorrect: false },
			{ text: 'console.log', isCorrect: true },
			{ text: 'terminal/bash', isCorrect: false }
		]

	}


]

// Set start
var start = true;

// Iterate
function iterate(id) {

	// Getting the result display section
	var result = document.getElementsByClassName("entire-question");
	result[0].innerText = "";

	// Getting the question
	const question = document.getElementById("stem-of-question");


	// Setting the question text
	question.innerText = Questions[questionId].questionStem;

	// Getting the options
	const choice1 = document.getElementById('choice1');
	const choice2 = document.getElementById('choice2');
	const choice3 = document.getElementById('choice3');
	const choice4 = document.getElementById('choice4');


	// Providing option text
	choice1.innerText = Questions[id].questionSolution[0].text;
	choice2.innerText = Questions[id].questionSolution[1].text;
	choice3.innerText = Questions[id].questionSolution[2].text;
	choice4.innerText = Questions[id].questionSolution[3].text;

	// Providing the true or false value to the options
	choice1.value = Questions[questionId].questionSolution[0].isCorrect;
	choice2.value = Questions[questionId].questionSolution[1].isCorrect;
	choice3.value = Questions[questionId].questionSolution[2].isCorrect;
	choice4.value = Questions[questionId].questionSolution[3].isCorrect;

	var selected = "";

	// Show selection for choice1
	choice1.addEventListener("click", () => {
		choice1.style.backgroundColor = "lightgoldenrodyellow";
		choice2.style.backgroundColor = "lightskyblue";
		choice3.style.backgroundColor = "lightskyblue";
		choice4.style.backgroundColor = "lightskyblue";
		selected = choice1.value;
	})

	// Show selection for choice2
	choice2.addEventListener("click", () => {
		choice1.style.backgroundColor = "lightskyblue";
		choice2.style.backgroundColor = "lightgoldenrodyellow";
		choice3.style.backgroundColor = "lightskyblue";
		choice4.style.backgroundColor = "lightskyblue";
		selected = choice2.value;
	})

	// Show selection for choice3
	choice3.addEventListener("click", () => {
		choice1.style.backgroundColor = "lightskyblue";
		choice2.style.backgroundColor = "lightskyblue";
		choice3.style.backgroundColor = "lightgoldenrodyellow";
		choice4.style.backgroundColor = "lightskyblue";
		selected = choice3.value;
	})

	// Show selection for choice4
	choice4.addEventListener("click", () => {
		choice1.style.backgroundColor = "lightskyblue";
		choice2.style.backgroundColor = "lightskyblue";
		choice3.style.backgroundColor = "lightskyblue";
		choice4.style.backgroundColor = "lightgoldenrodyellow";
		selected = choice4.value;
	})

	// Grabbing the evaluate button
	const evaluate = document.getElementsByClassName("evaluate");

	// Evaluate method
	evaluate[0].addEventListener("click", () => {
		if (selected == "true") {
			result[0].innerHTML = "True";
			result[0].style.color = "green";
		} else {
			result[0].innerHTML = "False";
			result[0].style.color = "red";
		}
	})
}

if (start) {
	iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var questionId = 0;

next.addEventListener("click", () => {
	start = false;
	if (questionId < 2) {
		questionId++;
		iterate(questionId);
		console.log(questionId);
	}

})
