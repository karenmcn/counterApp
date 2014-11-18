//write a function that counts up
//write a function that counts down, put a conditional that checks for less than 0
//write an on.click jquery method to run the count up function each time it is clicks
//write an on.click jquery method to run a count backwards function each time it cliks
//write code the writes the result of the function on the screen.


//this function is close to working- it changes the text on click but doesn't count
//maybe use counting loop tied to onclick?

var countingNumber = 0;

function countingUp(){
  if(countingNumber>0){
   document.getElementById("message").innerHTML="Push + (plus) to count up and - (minus) to count down.";
  }
  countingNumber=countingNumber +1;
  document.getElementById("count").innerHTML=countingNumber;


}

  var countUp=document.getElementById("countUp");
  countUp.onclick = countingUp;


function countingDown(){
  if(countingNumber === 0){
    document.getElementById("message").innerHTML="You can not count lower than zero with this counter. Sorry! Push + (plus) to count up.";
  }
  else
  countingNumber=countingNumber -1;
  document.getElementById("count").innerHTML=countingNumber;


}

  var countDown=document.getElementById("countDown");
  countDown.onclick = countingDown;


/*

function countingUp(){


  var countingNumber = parseInt(document.getElementById("count"));

  countingNumber.textContent=countingNumber + 1;

}

  var countUp=document.getElementById("countUp");
  countUp.onclick = countingUp;







var countingNumber=0
function countingUp(){
var countUp=
onclick(#countUp)

var countingNumber = document.getElementById("count");
countingNumber=countingNumber+1;
}
onclick(#countDown)
function countingDown{
    if(countingNumber<=0){
    var message=getElementById(#message)
    message="Oops, You can't count lower than zero!"
    }
    else{
    onclick(#countingDown)
    var countingNumber =document.getElementById("count"){
    countingNumber=countingNumber-1;
    }

}
*/
