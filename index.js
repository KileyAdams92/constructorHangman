var Word = require("./word.js");
var inquirer = require("inquirer");
var myWords = ["complex", "keyboard", "kidneys"];

var newWord;
var getWord = function() {
  newWord = new Word(myWords[Math.floor(Math.random() * myWords.length)]);
  //   console.log(newWord);
};

var startPrompt = function() {
  console.log(newWord.getWord());
  inquirer.prompt([]);
};

var playGame = function() {
  console.log(`Hey, welcome to Hangman! I have selected a random word for you`);
  getWord();
  startPrompt();
};

playGame();
