var answer = 0, x = 0, y = 0, tries = 0; correct = 0;
while (correct < 5) {
  x = Math.floor(Math.random()*6)+3;
  y = Math.floor(Math.random()*6)+3;
  answer = prompt("What is "+x+" * "+y+"?");
  if (answer != x*y) alert("Wrong! "+x+" * "+y+" = "+x*y);
  else {
    correct++;
    alert("Correct! "+(5-correct)+" left.");
  }
  tries++;
}
alert("It took you " + tries + " tries to get 5 right.");