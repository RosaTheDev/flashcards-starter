/* eslint-disable max-len */
const Turn = require("./turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.incorrectGuesses = [];
    this.turns = 0; 
    this.correctGuessesCount = 0;
    this.turn;
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[0];
    return this.currentCard;
  }

  takeTurn(userGuess) {
    this.turns++
    this.returnCurrentCard();
    this.turn = new Turn(userGuess, this.currentCard);
    if (this.turn.giveFeedback() === 'incorrect!') {
      this.incorrectGuesses.push(this.currentCard.id)
    } 
    this.deck.cards.shift();
    return this.turn.giveFeedback();
  }

  calculatePercentCorrect() {
    this.correctGuessesCount = Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100)
    console.log(`${this.correctGuessesCount}% Correct! SMARTY`)
    return this.correctGuessesCount;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}
module.exports = Round;