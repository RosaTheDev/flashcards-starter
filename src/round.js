const Turn = require("./turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = {};
    this.turns = 0; 
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards.shift();

    return this.currentCard;
  }

  takeTurn(userGuess) {
    this.returnCurrentCard();
    const turn = new Turn(userGuess, this.currentCard);
    console.log(this.currentCard)
    turn.giveFeedback()
    this.turns++
  }
}
module.exports = Round;