var answer=0, x=0, y=0;
x = Math.floor(Math.random()*6)+3;
y = Math.floor(Math.random()*6)+3;
answer = prompt("What is "+x+" * "+y+"?");
if (answer != x*y) alert("Wrong! "+x+" * "+y+" = "+x*y);
else alert("Correct!");