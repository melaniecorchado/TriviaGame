$(document).ready(function(){
//global varaibles 
var correctAnswer = 0; 
var incorrectAnswer = 0; 
//var countDown = 20;
var audio = new Audio ("https://raw.githubusercontent.com/melaniecorchado/TriviaGame/master/song/pirates.mp3");

//below you will find the questions
var trivia = {
	questions: 
		{
			question1: "What is the name of the ship that Sparrow is trying to get back?",
			answer: "The Black Pearl",
			answer1: "The Kracken",
			answer2: "The Flying Dutchman", 
			answer3: "The Black Pearl",
			userGuess: "",			
		},
	questions2:
		{   question2: "Who's blood did Barbossa need to release the curse?",
			answer:  "Will Turner",
			answer21: "Elizabeth Swan", 
			answer22: "Will Turner", 
			answer23: "His Own",
			userGuess: "",			
		},
	questions3:
		{   question3: "Who is the villain in Dead Man's Chest?",
			answer: "Davy Jones",
			answer31: "James Norrington", 
			answer32: "Davy Jones",
			answer33: "Captian Barbossa", 
			userGuess: "",		
		},
	questions4: 
		{   question4: "Who is Jacks right hand?",
			answer: "Gibbs",
			answer41: "Gibbs",
			answer42: "Captian Hook",
			answer43: "Blackbeard",
			userGuess: "",
		},
	questions5:
		{   question5: "Jacks compass doesn't point in which direction?",
			answer: "North",
			answer51: "East",
			answer52: "North",
			answer53: "South",
			userGuess: "",
		},
}

$("#startButton").click(function(){
	start();
	audio.play();
});

//function to start the game
function start() {
	$("#Trivia").toggleClass("hide");
	$("#startButton").toggleClass("hide");
	setTimeout(end, 1000 * 20);
	getAnswers();
}
show();
//function to end the game 
function end(){
	//alert("Time's up mateys!");
	$("#Trivia").toggleClass("hide");
	$("#score").toggleClass("hide");
	console.log(correctAnswer);
	console.log(incorrectAnswer);
	check();
	if(correctAnswer > incorrectAnswer) {
		$("#gif").html("<img src='assets/images/hat.gif'>");
	}
	else{
		$("#gif").html("<img src='assets/images/scream.gif'>");
	}
}

//this is where the questions and choices willl be displayed
function show() {
	$("#questions").html(trivia.questions.question1);
	$("#answer1").html(trivia.questions.answer1);
	$("#answer2").html(trivia.questions.answer2);
	$("#answer3").html(trivia.questions.answer3);

	$("#questions2").html(trivia.questions2.question2);
	$("#answer21").html(trivia.questions2.answer21);
	$("#answer22").html(trivia.questions2.answer22);
	$("#answer23").html(trivia.questions2.answer23);

	$("#questions3").html(trivia.questions3.question3);
	$("#answer31").html(trivia.questions3.answer31);
	$("#answer32").html(trivia.questions3.answer32);
	$("#answer33").html(trivia.questions3.answer33);

	$("#questions4").html(trivia.questions4.question4);
	$("#answer41").html(trivia.questions4.answer41);
	$("#answer42").html(trivia.questions4.answer42);
	$("#answer43").html(trivia.questions4.answer43);

	$("#questions5").html(trivia.questions5.question5);
	$("#answer51").html(trivia.questions5.answer51);
	$("#answer52").html(trivia.questions5.answer52);
	$("#answer53").html(trivia.questions5.answer53);	
};

function getAnswers(){
  $("#a1").click(function(){	
  	trivia.questions.userGuess=trivia.questions.answer1; 
  });
   $("#a2").click(function(){	
  	trivia.questions.userGuess=trivia.questions.answer2;
  });
    $("#a3").click(function(){	
  	trivia.questions.userGuess=trivia.questions.answer3;
  });	 
    $("#a21").click(function(){	
  	trivia.questions2.userGuess=trivia.questions2.answer21; 
  }); 
     $("#a22").click(function(){	
  	trivia.questions2.userGuess=trivia.questions2.answer22;
  }); 
     $("#a23").click(function(){	
  	trivia.questions2.userGuess=trivia.questions2.answer23; 
  });   
     $("#a31").click(function(){	
  	trivia.questions3.userGuess=trivia.questions3.answer31;
  });
   $("#a32").click(function(){	
  	trivia.questions3.userGuess=trivia.questions3.answer32;
  });	 
    $("#a33").click(function(){	
  	trivia.questions3.userGuess=trivia.questions3.answer33;
  });	 
    $("#a41").click(function(){	
  	trivia.questions4.userGuess=trivia.questions4.answer41;
  });	
  $("#a42").click(function(){	
  	trivia.questions4.userGuess=trivia.questions4.answer42;
  }); 
  $("#a43").click(function(){	
  	trivia.questions4.userGuess=trivia.questions4.answer43;
  });
  $("#a51").click(function(){	
  	trivia.questions5.userGuess=trivia.questions5.answer51;
  });
  $("#a52").click(function(){	
  	trivia.questions5.userGuess=trivia.questions5.answer52;
  });
  $("#a53").click(function(){	
  	trivia.questions5.userGuess=trivia.questions5.answer53;
  });
}
//function to check for correct and incorrect answers
function check(){
  if(trivia.questions.userGuess==trivia.questions.answer){
  	correctAnswer++;
  }
  else if(trivia.questions.userGuess!=trivia.questions.answer){
  	incorrectAnswer++;
  }
  if(trivia.questions2.userGuess==trivia.questions2.answer){
  	correctAnswer++;
  }
  else if(trivia.questions2.userGuess!=trivia.questions2.answer){
  	incorrectAnswer++;
  }

 if(trivia.questions3.userGuess==trivia.questions3.answer){
  	correctAnswer++;
  }
 else if(trivia.questions3.userGuess!=trivia.questions3.answer){
 	incorrectAnswer++;
 }

 if(trivia.questions4.userGuess==trivia.questions4.answer){
  	correctAnswer++;
  }

  else if(trivia.questions4.userGuess!=trivia.questions4.answer){
  	incorrectAnswer++;
  }

 if(trivia.questions5.userGuess==trivia.questions5.answer){
  	correctAnswer++;
  }

  else if(trivia.questions5.userGuess!=trivia.questions5.answer){
  	incorrectAnswer++;
  }

Correct();
Incorrect();
}

function Correct(){
	//reset();
	document.getElementById("correct").innerHTML=correctAnswer;
}

function Incorrect(){
	//reset();
	document.getElementById("incorrect").innerHTML=incorrectAnswer;
}
//function reset(){
//	clearInterval(intervalId);
//}

});