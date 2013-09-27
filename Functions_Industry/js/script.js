console.log("-----Functions: Industry-----") // this states that it is the Industry subproject

orders(25, 13, 60); //this states the number of liness per order

function orders (order1, order2, order3){ // this gives the numbers a place to go
	var totalLines = order1 + order2 + order3; // this is the sum of all orders
	var linesCompleted = 72; //this is the total number of lines completed
	var linesLeft = totalLines - linesCompleted; // this shows how many lines are left to be completed

if (totalLines == linesCompleted){ // if the total lines and lines completed are equal you are done
	console.log("You have completed all of the lines on the orders") //this states the you are done
} else if (linesLeft < 10 ){ //show if you have less than 10 lines
	console.log("You have less than 10 lines left") //telll you, you havel ess than 10 lines
} else { //the beginning of the else
	console.log("You have " + linesLeft + " orders left") //shows how many you have left
}

}


