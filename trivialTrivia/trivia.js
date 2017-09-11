$("#guess").hide(); //hide the input box until they click start. works here @ line 26

var trivia = [ // works here at line 28

	{
		question: "array 0",
		answer: "answer 0",
		correct: "Correct, cat is cat.",
		incorrect: "Incorrect, that is not a cat"
	},

	{
		question: "question 1",
		answer: "answer 1",
		correct: "Correct, Ben's name is Ben.",
		incorrect: "Incorrect, Ben's name is Ben."
	},

	{
		question: "2. what is Dan's name",
		answer: "2 D2an",
		correct: "Correct, Ben's name is Ben.",
		incorrect: "Incorrect, Ben's name is Ben."
	},

	{
		question: "3. what is adfffes name",
		answer: "four",
		correct: "Correct, Ben's name is Ben.",
		incorrect: "Incorrect, Ben's name is Ben."
	},

	{
		question: "4. what is larrys name",
		answer: "Dan",
		correct: "Correct, Ben's name is Ben.",
		incorrect: "Incorrect, Ben's name is Ben."
	},

	{
		question: "5. what is canss name",
		answer: "Dan",
		correct: "Correct, Ben's name is Ben.",
		incorrect: "Incorrect, Ben's name is Ben."
	},

	{
		question: 
		"6. what is shmanky name",
		answer: "Dan",
		correct: "Correct, Ben's name is Ben.",
		incorrect: "Incorrect, Ben's name is Ben."
	},

	{
		question: 
		"7. Fonts that contain small decorative lines at the end of a stroke are known as what?",
		answer: "Serif fonts",
		correct: "Correct, Ben's name is Ben.",
		incorrect: "Incorrect, Ben's name is Ben."
	},

	{
		question: 
		"8. CERN launched the world's very first website in what year?",
		answer: "1990",
		correct: "Correct, Ben's name is Ben.",
		incorrect: "Incorrect, Ben's name is Ben."
	},

	{
		question: 
		"9. CERN launched the world's very first website in what year?",
		answer: "1990",
		correct: "Correct, Ben's name is Ben.",
		incorrect: "Incorrect, Ben's name is Ben."
	},

	{
		question: "10. last question",
		answer: "1990",
		correct: "Correct, Ben's name is Ben.",
		incorrect: "Incorrect, Ben's name is Ben."

	},
	{
		question: " this will be where the score goes",
		answer: "answers will go here",
		correct: "Correct, Ben's name is Ben.",
		incorrect: "Incorrect, Ben's name is Ben."

	},
]; //end trivia object


var clickCounter = 0; // sets initial click count to zero.
var currentAnswer

$("#button").on("click", function () { 
	$("#button").html("Guess"); // works 
	$("#guess").show(); // works 
	$("#wordarea").html(trivia[clickCounter].question);// works 
	var answer = trivia[clickCounter].answer; // works 
	var guess = $("#guess").val();// - gets last guess from input box (persists)
	console.log("answer: " + answer + " , guess: " + guess);
	
	clickCounter ++;

}); //end on click 

//if array[0] then : 
if (clickCounter < 1){ 

	$("#button").on("click", function () { 
		$("#button").html("Guess"); // works 
		$("#guess").show(); // works
		$("#wordarea").html(trivia[clickCounter].question);// - works
		
		var answer = trivia[clickCounter].answer; // works - gets current answer from trivia
		var guess = $("#guess").val();//            - gets current guess from input box
		console.log("answer: " + answer + " , guess: " + guess);
	}); //end on click 
};

 