var sayHi = function(name) {
	console.log("Hello there, " + name);
};

/*sayHi("Will");

console.log("Hangman is just a game.");

document.getElementById("turn-count")
	<span id="turn-count">7</span>   - this is a DOM node.

Data:
x-Words/dictionary
x-guesses
x-turn count
x-answer

Actions:
-track guesses
-add a guess when user clicks a letter
-if guess is wrong, lose a turn
-if guess is right, fill in letter on game board
-Add DOM nodes for the word (i.e. underscores: "_ _ _ _")


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

var answer = randomItem(wordList);
console.log("The magic word is " + answer);

// addEventListener for js/page magic

var removeGuess = function(e) {
	console.log(e);
};

var bumpCount = function(event){
		var target = event.target;
		target.innerHTML = Number(target.innerHTML) +1;
};

var el = document.querySelector("#turn-count");
el.addEventListener('click', bumpCount);

var letters = document.querySelector(".alphabet");
letters.addEventListener('click', function (event) {
	var text = event.target.textContent;
	console.log(text);
});

//var target = null; 
//var el = document.querySelector("#turn-count");
// el.addEventListener('click', function(e){
// 		console.log(e);
// 		target = e.target;
// });

//When we click the update count button, I want the JS to update the HTML to whatever the user typed in.

// var butt = document.querySelector(".form-button");
// butt.addEventListener('click', function(event){
// 	event.preventDefault();   This prevents the page from refreshing when the form is submitted, which is the default setting for a form.
// 	var input = document.querySelector(".count-input");
// 	console.log(input.value); /*gives whatever value the user typed in*/
// 	var turns = document.querySelector("#turn-count");
// 	turns.textContent = input.value;
// });

//Brit's code and notes can be found here: https://github.com/tiy-atl-js-june-2016/hangman/commits/master
