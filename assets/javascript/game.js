var word = ['cubs','blackhawks','bears'];
var dashes = [];
var wins = 0;
var losses = 0;
var tries = 10;
var usedLetters = [];


$(document).ready(function(){

 		// function initializeGame() {
 		// 		tries = 0;
 		// };

 		var startButton = $("#start").on("click", function(){
		 	$('#tries-left').html('Tries left: '+ tries);
		 	$('#wins').html('Wins: ' + wins);
		 	$('#losses').html('Losses: ' + losses);

			var wordChoice = word[Math.floor(Math.random()*word.length)];
			console.log(wordChoice);
			for (var i = 0; i < wordChoice.length; i++) {
				dashes.push("_ ");
				console.log(dashes);
				$('#dashes').html(dashes);
			}


	// initializeGame();


			$(document).keyup(function() {

				var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
				console.log(userGuess);
				for (var i = 0; i < wordChoice.length; i++) {

					if(userGuess === wordChoice.charAt(i)) {
					dashes[i] = userGuess;
					
					}
				}

				$('#dashes').html(dashes);

				if(usedLetters.indexOf(userGuess) === -1 && wordChoice.indexOf(userGuess) === -1) {

					usedLetters.push(userGuess);
					tries--;
					console.log("Tries"); 
					console.log(tries);
					$('#tries-left').html('Tries left: '+ tries);
					$('#spent').html('<h3>Used letters: ' + usedLetters+'</h3>');
				}

				if(tries === 0) {
					$(document).keyup = null;

					$('#spent').html('<h1> GAME OVER </h1>');
					$('#start').html("Restart");
					$('#start').click(function (){
						initializeGame();
					})
				}

		 	});
		});

});