//I need to generate a random number between 19 and 120
	//Display this number in the DOM

//I need 4 crystals
//I need to generate a random value between 1 and 12 for each crystal
	//One crystal value must always equal 1
//I need to assign those values to the crystals

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

	var wins = 0;
	var losses = 0;
	var points = 0;
	reset();
	

	/*var randomNumber = Math.floor((Math.random() * 120) + 19);
		$("#displayNumber").html("Random Number: " + randomNumber);

	var green = Math.floor((Math.random() * 12) + 1);
	var yellow = Math.floor((Math.random() * 12) + 1);
	var blue = Math.floor((Math.random() * 12) + 1);
	var red = Math.floor((Math.random() * 12) + 1);

		//setting value attribute of each crystal to the random number generated
		$("#green").attr({
	        "value" : green,
	    });

	    $("#yellow").attr({
	        "value" : yellow,
	    });

	    $("#blue").attr({
	        "value" : blue,
	    });

	    $("#red").attr({
	        "value" : red,
	    }); */

	//trying to assign a value of 1 to a random crystal if no crystal equals 1
	/*var crystals = [green, yellow, blue, red];
		if (green !== 1 && yellow !== 1 && blue !== 1 && red !== 1) {
			var one = crystals[Math.floor(Math.random() * crystals.length)];
			console.log(one);
		}*/

	$(".crystal").on("click", function() {
		var goal = $("#displayNumber").attr('value');
		var goalNumber = parseInt(goal);
		console.log(goalNumber);
			//grabbing the value of the crystal clicked from HTML
		var value = $(this).attr('value');
			//converting that value from a string to an integer
		valueNumber = parseInt(value);
			//adding the integer to the points total
		points += valueNumber;
			//displaying the total in the dom
		$("#displayPoints").html("Your Total: " + (points));
			    console.log(points);


			if (points > goalNumber) {
				reset();
				alert("You Lose!");
				losses ++;
				$("#losses").html("Losses: " + losses);
				}

			if (points == goalNumber) {
				reset();
				alert("You Won!");
				wins ++;
				$("#wins").html("Wins: " + wins);	
			}
	});


	function reset() {

		points = 0;
		$("#displayPoints").html("Your Total: " + (points));

		var randomNumber = Math.floor((Math.random() * 120) + 19);
			$("#displayNumber").html("Random Number: " + randomNumber);

			$("#displayNumber").attr({
			"value" : randomNumber,
			})

		var green = Math.floor((Math.random() * 12) + 1);
		var yellow = Math.floor((Math.random() * 12) + 1);
		var blue = Math.floor((Math.random() * 12) + 1);
		var red = Math.floor((Math.random() * 12) + 1);

		$("#green").attr({
	        "value" : green,
	    });

	    $("#yellow").attr({
	        "value" : yellow,
	    });

	    $("#blue").attr({
	        "value" : blue,
	    });

	    $("#red").attr({
	        "value" : red,
	    });
	    console.log(randomNumber);
	}
	












}
