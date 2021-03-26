
/* MULTIPLICATION QUIZ KATA */

/* PART 1 */

// 1. Print 2 Random Integers, X & Y, each between 3 and 9, as a soluble equation:  X * Y = ??
// 2. Receive manual input for solution, say "Correct!" if match, "Incorrect!" if not.
// 3. Embed equation in While loop that continues until entry matches solution, or = "stop".
// 4. Embed all code in a For loop and run it 10 times.

/*  initializations */
var x; // x value
var y; // y value
var solution ; // solution: calculated value
var userInput; // userInput: manual input value
var stop = false;  // stop: signal value
var wrongAnswers=0; // wrongAnswer: count wrong answers
var totalQuestions; // questions: set number of questions
var wrong; // wrong: within function, count number of bad tries

/* code */
totalQuestions = prompt("How many questions?");
for (question = 0; question < totalQuestions; question++) {
	wrongAnswers+=parseInt(multiPractice());
	console.log("wrong answers: "+wrongAnswers);
} 

if (wrongAnswers>0) {
	alert("You had "+wrongAnswers+" wrong answers out of "+totalQuestions+ " questions.");
	}
else alert ("Charlie, you've won!!");

// FUNCTIONS

function multiPractice(){
	console.trace("multiPractice: ",x," * ",y," with ",wrong," wrong.");
   	wrong=0; 
	x = Math.floor(Math.random()*7)+3;
   	y = Math.floor(Math.random()*7)+3;
	equation=("What is "+x+" * "+y+"?");
	solution=x*y; // set answer to product
   	while ((userInput != solution) && (stop==false)) {
		userInput = prompt(equation);
      	if (userInput == "stop" || userInput == "Stop") stop = true;
		else if (userInput == solution) alert("Correct!");
      	else if (userInput != solution) {
         alert("Incorrect solution. Try again.");
         wrong++;
      } // end Else
   } // end While
	if (wrong > 0) wrong = 1;
    return wrong; 
}