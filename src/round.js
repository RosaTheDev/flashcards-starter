/* eslint-disable max-len */
const Turn = require("./turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = {};
    this.nextCard = {};
    this.incorrectGuesses = [];
    this.turns = 0; 
    this.correctGuessesCount = 0;
    this.turn;
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards.shift();
    this.nextCard = this.deck.cards[0];
    return this.currentCard;
  }

  takeTurn(userGuess) {
    this.turns++
    this.returnCurrentCard();
    this.turn = new Turn(userGuess, this.currentCard);
    this.turn.giveFeedback()
    
    // console.log(`👇 Here is your card if you'd like to study it!: 👇` + '\n');
    // console.log(`❓❓ Question: ${this.currentCard.question}` + '\n');
    // console.log(`📚📚 list of possible answers: ${this.currentCard.answers}` + '\n');
    // console.log(`🙋🙋🙋Your Guess was: ${userGuess}` + '\n');

    if (this.turn.giveFeedback() === 'incorrect!') {
      this.incorrectGuesses.push(this.currentCard.id)
      // console.log(this.incorrectGuesses);
    }
  }

  calculatePercentCorrect() {
    this.correctGuessesCount = ((this.turns - this.incorrectGuesses.length) / this.turns) * 100
    console.log(`${this.correctGuessesCount}% Correct! SMARTY`)
    return this.correctGuessesCount;
  }
}
module.exports = Round;