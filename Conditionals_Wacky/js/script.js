var Tacos = false; // if true there is tacos, if false there isn't tacos
var leftoverIngredients = false; // if true there is more ingredients for tacos, if false there is not
var Time = 1020; // the time of day
var closingTime = 1030; // the time the taco shop closes

if (Tacos && closingTime > Time) { // if there is tacos and the shop is open you can have tacos
	
	console.log("There is more Tacos left and time left to get more")
} else if (leftoverIngredients && closingTime > Time) { // if there is left over ingredients and the shop is open you can have tacos
	
	console.log("There is no tacos left, but there is more ingredients leftover to have some made")
} else { // if no tacos , ingredients, or the show is closed, you can not have tacos

	console.log("Sorry for the inconvience, no tacos")
}