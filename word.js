var Letter = require("./letter.js");

function Word(word) {
  this.word = word;
  this.wordArray = [];
  this.letters = function() {
    for (var i = 0; i < this.word.length; i++) {
      var letter = new Letter(this.word[i]);
      this.wordArray.push(letter);
    }
  };
  this.getWord = function() {
    var wordCurrently = [];
    for (var i = 0; i < this.wordArray.length; i++) {
      wordCurrently.push(this.wordArray[i].ifGuessed());
    }
    return wordCurrently.join(" ");
  };

  this.newFunction = function(char) {
    for (var i = 0; this.wordArray.length; i++) {
      if (char === this.wordArray[i]) {
        this.wordArray[i].guessedRight(char);
      }
    }
    return;
  };
}

module.exports = Word;
