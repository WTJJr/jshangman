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

var turnCount = document.getElementById('turn-count');

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


var makeGuess = function (event) {
  var pageNode = event.target;
  var letter = pageNode.textContent;
  if (!guesses.includes(letter)) {
    pageNode.classList.add("guessed");
    guesses.push(letter);
    if (!answer.includes(letter)) {
      turnCount.textContent = Number(turnCount.textContent) - 1;
    }
  }
};


var letters = document.querySelector(".alphabet");
letters.addEventListener('click', makeGuess);
//Brit's code and notes can be found here: https://github.com/tiy-atl-js-june-2016/hangman/commits/master
