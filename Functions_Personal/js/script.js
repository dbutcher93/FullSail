console.log ("-----Functions: Personal-----") // this indicates that it is the personal assignment

carLease(20, 316); // these are the function argumemnts

function carLease(monthsLeft, Payment) { //these are the function parameters  and the fuction
	var amountleft = monthsLeft * Payment; //this it a variable defining the amount owed on the lease
	console.log("You still owe " + amountleft + " dollars on your lease") // this shows the answer to the console
}

carLease(); // this invokes the function, which it invokes twice and I can not figure out why