console.log("-----Functions: Wacky-----") // this shows that it is the Wacky subproject

var skateboardBails = function(){ //this is the anonymous function
	var skaters = 5; //this is how many skaters are in the skatepark
	var bailsperHour = 10; // this is how many times they bail per hour
	var hours = 3; //this is how many total hours at the skatepark

	var totalBails = skaters * bailsperHour * 3; //this is how many total bails

	console.log(totalBails) //this tells the answer
}

skateboardBails(); //this invokes the function