
var computerChoice =Math.random();

    if(computerChoice<0.34)
	{
  		return "rock";
	}else if (computerChoice<0.66)

	{
  		return "paper";
	}else {
		return "scissors";
	}

var userChoice =Math.random();

    if(userChoice<0.34)
	{
  		return "rock";
	}else if (userChoice<0.66)

	{
  		return "paper";
	}else {
		return "scissors";
	}



var userChoice=Math.random();
var compare=function(choice1,choice2){
	if (choice1==choice2){
		return "computer:"+computerChoice+"\nYou"+userChoice+"\nThe result is tie."
	}
    if (choice1=="rock"){
    	if(choice2=="scissors"){
    		return "computer:"+computerChoice+"\nYou"+userChoice+"\nYou won!";
    	}
    	else{
    		return"computer:"+computerChoice+"\nYou"+userChoice+"\nYou lost.";
    	}
    }
    if(choice1=="paper") {
    	if(choice2=="rock"){
    		return "computer:"+computerChoice+"\nYou"+userChoice+"\nYou won!";
    	}else {
    		return "computer:"+computerChoice+"\nYou"+userChoice+"\nYou lost.";
    	}
    }
    if(choice1=="scissors"){
    	if(choice2=="paper"){
    		return "computer:"+computerChoice+"\nYou"+userChoice+"\nYou won!";
    	}else {
    		return "computer:"+computerChoice+"\nYou"+userChoice+"\nYou lost.";
    	    }
    }
}
console.log(computerChoice);
console.log(userChoice);
console.log(compare());
