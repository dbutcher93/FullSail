var time= 200; // The time of the day, 300 would be 3 o'clock. 3 o'clock is order cut off time
var ordersOut= 25; // number of orders out

if (time >= 300 && ordersOut < 20)  { // if it is after 3 and there are less than 20 orders there would be about an hour of work left

	console.log("There is about hour left of work") 
} else if (time >= 300 && ordersOut > 20)  { // after 3 and more than 20 orders, there is more than 2 hours left of work
	
	console.log("There is more than 2 hours left of work")
} else { // if its not after 3 wait until 3 and make an estimate then
	
	console.log("Wait until after 3 get an estimate")
}