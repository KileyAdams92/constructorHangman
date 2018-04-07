var Letter = function(char) {
  this.char = char;
  this.guessed = false;
  this.ifGuessed = function() {
    if (this.guessed) {
      return this.char;
    } else {
      return "_";
    }
  };

  this.guessedRight = function(guess) {
    if (guess === this.char) {
      this.guessed = true;
    } else {
      console.log("pick another letter");
    }
  };
};

// var letter = new Letter("m");

// console.log(letter.ifGuessed());
module.exports = Letter;
