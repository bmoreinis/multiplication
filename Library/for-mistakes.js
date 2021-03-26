var q=0, answer=0, x=0, y=0, m = 0;
/* control loop */
for(q = 1;q < 6; q++){
  x = Math.floor(Math.random()*6)+3;
  y = Math.floor(Math.random()*6)+3;
  /* input feedback */
  answer = prompt("What is "+x+" * "+y+"?");
  if (answer != x*y) {
    alert("Wrong!");
    m++;
  }
  alert("Correct! "+(5-q)+" left.");
}
alert("You had "+ m + " mistakes.");