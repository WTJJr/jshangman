
document.getElementById("turn-count")

var turnsLeft=function() {
	var element = document.getElementById("turn-count").textContent;
	return element.textContent;
};

var guesses = [];
var wordList = [
	"cookies", "elephant", "doughnut", "doge",
	"transport", "recursion", "agriculture", "antidisestablishmentarianism",
	"espresso", "computer", "transmogrify", "lightsaber"
	];

var randomItem = function(items) {
	var index = Math.floor(Math.random() * items.length);
	return items[index];
};

var answer = randomItem(wordList);
console.log("The magic word is " + answer);

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
letters.addEventListener('click', function(event){
		event.target.classList.add("guessed");
		guesses.push(event.target.textContent);
});

//Brit's code and notes can be found here: https://github.com/tiy-atl-js-june-2016/hangman/commits/master
