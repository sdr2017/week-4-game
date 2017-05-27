//I need to generate a random number between 19 and 120
	//Display this number in the DOM

//I need 4 crystals
//I need each crystal to generate a random value between 1 and 12
//One crystal value must always equal 1
//On click, I need the value of the crystal to be added to the total points
	//display the total points in the DOM

//If the total points is equal to the random number: 
	//the DOM says "You win!"
	//the wins couner is increased by 1
	//the game resets 
//If the total points is greater than the random number:
	//the DOM says "You lose!"
	//the loss counter is increased by 1
	//the game resets

window.onload = function() {

	var randomNumber = Math.floor((Math.random() * 120) + 19);

	var green = Math.floor((Math.random() * 12) + 1);
	var yellow = Math.floor((Math.random() * 12) + 1);
	var blue = Math.floor((Math.random() * 12) + 1);
	var red = Math.floor((Math.random() * 12) + 1);


	$("#green").click();
	$("#yellow").click();
	$("#blue").click();
	$("#red").click();

	console.log(randomNumber);
	console.log(green);
	console.log(yellow);
	console.log(blue);
	console.log(red);


var wins;
var losses;

var points;


//$("#crystals").on("click", function() {

//}





}
