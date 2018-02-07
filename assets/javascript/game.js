
// <!-- Computer will pick a random letter- capture computer guess
// 	player will attempt to guess letter- capture player guess
// 	compare computer pick and player guess and determine a win, or loss
// 	display the result to the player
// 	if player guessed correctly, increase win tally
// 	if player guessed incorrectly, decrease guesses left, add letter to "guesses so far"
// 	repeat until player has zero guesses left, if so increase loss tally 1 point and alert "you are not  psychic"
// 	 -->
var options = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
	var wins = 0;
	var losses = 0;
	var guessesLeft, userGuessLetters, computerGuess

	resetGame();
	display();

	//USER GUESS- this function will capture the player's guess
	document.onkeyup = function(event) {
	 	var userGuess = event.key;
	 	console.log(userGuess);
	 	if (userGuess == computerGuess) {
	 		win();
	 	} else if (guessesLeft -1 == 0) {
	 		lose();
	 	} else {
	 		fail(userGuess);
	 	}

	 		display();
	 	}

	 	function display () {
	 		var winsP = document.getElementById("wins");
	 		var lossesP = document.getElementById("losses");
	 		var remainingGuesses = document.getElementById("remainingGuesses");
	 		var letteruserGuess = document.getElementById("userGuess");
	 		winsP.innerHTML = wins;
	 		lossesP.innerHTML = losses;
	 		remainingGuesses.innerHTML = guessesLeft;
	 		userGuess.innerHTML = userGuessLetters.join(',');
	 	}

	 	function win() {
	 		wins++;
	 		alert("You most definitely are psychic!");
	 		resetGame();
	 	}

	 	function lose() {
	 		losses++;
	 		alert("You are an impostor.");
	 		resetGame();
	 	}

	 	function fail(letter) {
	 		guessesLeft--;
	 		userGuessLetters.push(letter);
	 	}

	 	function resetGame() {
	 		guessesLeft = 10;
	 		userGuessLetters = [];
	 		computerGuess = computerGuess = options[Math.floor(Math.random()*options
			.length)];
			console.log(computerGuess);
	 	}

	