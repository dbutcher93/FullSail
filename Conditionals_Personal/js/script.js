var halfTank= false; //this line is to see if the car has a half tank of gas or not
var Money= 60; //amount of money in account

if(halfTank){ // if halfTank is true then proceed to go to the store
	
	console.log("Go to store")
}else if (Money > 15) { //If you have money to put gas in, if car does not have half tank, get gas first
	
	console.log ("Get gas before going to the store")
}else { // if the car does not have half a tank and do not have enough money to get gas, don't go to the store
	
	console.log("Can't go to the store today")
}