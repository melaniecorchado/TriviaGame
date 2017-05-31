$(document).ready(function(){

var correctAnswer = 0; 
var incorrectAnswer = 0; 
var unanswered = 0;


//below you will find the questions

var trivia = {

	questions : 
		{
			question1 : "What is the name of the ship that Sparrow is trying to get back?",
			//answer : "The Black Pearl",
			answer1: "The Kracken",
			answer2: "The Flying Dutchman", 
			answer3: "The Black Pearl"
			
		},

	questions2:
		{   question2 : "Who's blood did Barbossa need to release the curse?",
			//answer : "Will Turner",
			answer1: "Elizabeth Swan", 
			answer2: "Will Turner", 
			answer3: "His Own"
			
		},

		/*{   question3 : "Who is the villain in Dead Man's Chest?",
			answer : "Davy Jones",
			multipleChoice :"James Norrington", "Bootstrap", "Captian Barbossa", "Davy Jones"
			
		},

		{   question4 : "",
			answer : "",
			multipleChoice : 
				"", "", "", ""

		},

		{   question5 : "",
			answer : "",
			multipleChoice :
				"", "", "", ""
		},

		{   "question6" : "",
			"answer" : "",
			"multipleChoice" : [
				"", "", "", ""
			]
		},

		{   "question7" : "",
			"answer" : "",
			"multipleChoice" : [
				"", "", "", ""
			]
		},*/

}


//$("#startButton").click(function(){

//});

//function to start the game

function start() {

	//askQuestion(questionCount);

	//intervalId = setInterval(decrement, 1500);
}

//start();
show();
//function to display question 

function show() {

	$("#question").html(trivia.questions.question1);
	$("#answer1").html(trivia.questions.answer1);
	$("#answer2").html(trivia.questions.answer2);
	$("#answer3").html(trivia.questions.answer3);
		//countDown = 15;	
};



function reset(){

	clearInterval(intervalId);
}




});