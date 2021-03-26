/* initialize global variables */
var answer = 0, x = 0, y = 0, correct = 0;
/* control loop */
while (correct < 5) {
  x = Math.floor(Math.random()*6)+3;
  y = Math.floor(Math.random()*6)+3;
  // input and feedback
  answer = prompt("What is "+x+" * "+y+"?");
  if (answer != x*y) alert("Wrong! "+x+" * "+y+" = "+x*y);
  else {
    correct++;
    alert("Correct! "+(5-correct)+" left.");
  }
}