var sayHi = function(name) {
	console.log("Hello there, " + name);
};

/*sayHi("Will");

console.log("Hangman is just a game.");

Data:
-Words/dictionary
-guesses
-turn count
-answer

Actions:
-track guesses
-add a guess when user clicks a letter
-if guess is wrong, lose a turn
-if guess is right, fill in letter on game board


*/

var turnsLeft=function() {
	var element = document.getElementById("turn-count").textContent;
	return element.textContent;
};

/*
Notes on array access:
[1,2,3,4,5]
[1, 2, 3, 4, 5]
var numbers = [1,2,3,4,5];
undefined
numbers[0]  - accesses the 0th element of the array.
1
numbers [4]
5
numbers = [21,13,14,15,16,22]
numbers[0]
21
numbers[0] = 12
12
numbers
[12, 13, 14, 15, 16, 22]
numbers.pop()
22
numbers
[12, 13, 14, 15, 16]
*/

var guesses = [];
var wordList = [
	"cookies", "elephant", "doughnut", "doge",
	"transport", "recursion", "agriculture", "antidisestablishmentarianism",
	"espresso", "computer", "transmogrify", "lightsaber"
	];
/*
Math.random() - gives you a random floating point number between 0 and 1.
Math.random() * wordList.length - multiplies by the number of array items.
Math.floor (Math.random() * wordList.length)) - rounds down number to nearest integer.
*/

var randomItem = function(items) {
	var index = Math.floor(Math.random() * items.length);
	return items[index];
};