console.log("-----Functions: Industry-----")

orders(25, 13, 60);

function orders (order1, order2, order3){
	var totalLines = order1 + order2 + order3;
	var linesCompleted = 72;
	var linesLeft = totalLines - linesCompleted;

if (totalLines == linesCompleted){
	console.log("You have completed all of the lines on the orders")
} else if (linesLeft < 10 ){
	console.log("You have less than 10 lines left")
} else {
	console.log("You have " + linesLeft + " orders left")
}

}


