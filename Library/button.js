/* Initialize Global Variables */
var x=0, y=0, q = 0, m = 0;

/* Main Control Structure */
function main(){
  for(q = 1;q < 6; q++){
    x = Math.floor(Math.random()*9)+1;
    y = Math.floor(Math.random()*9)+1;
    m += ask(x,y,0);
  }
  alert("Total mistakes in "+(q-1)+" equations: "+m);
}

/* User Interaction Function */
function ask(x,y,m){
  let answer = prompt("What is "+x+" * "+y+"?");
  if (answer != x*y) {
    alert("Wrong! Try again.");
    m++;
    ask(x,y,m);
  }
  else alert("Correct after "+ m + " mistakes!");
  return m;
}