Notes from class lecture (stripped out of original class.js file)

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
-

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


Math.random() - gives you a random floating point number between 0 and 1.
Math.random() * wordList.length - multiplies by the number of array items.
Math.floor (Math.random() * wordList.length)) - rounds down number to nearest integer.

note that JS ln 36ff differ from Brit's code. He approaches this by going for the guesses array instead, and uses .includes() instead of .contains()

class.js ln 37 - event.target.classList.add("guessed"); - adds "guessed" to the class of the event.target 

class.js ln 38 - guesses.push(event.target.textContent); adds textContent to the guesses array (see class.js ln9)

ln 38 - the '!' negates the Boolean to the right.

//Brit's code and notes can be found here: https://github.com/tiy-atl-js-june-2016/hangman/commits/master

