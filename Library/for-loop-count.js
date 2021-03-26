var q=0, answer=0, x=0, y=0,m=0;
for(q = 1;q<6;q++){
  x = Math.floor(Math.random()*9)+1;
  y = Math.floor(Math.random()*9)+1;
  answer =prompt("What is "+x+" * "+y+"?");
  if (answer != x*y) {
    alert("Wrong!");
    m++;
  }
  else alert("Correct after "+ m + " mistakes!");
}
alert("Total mistakes: "+m);