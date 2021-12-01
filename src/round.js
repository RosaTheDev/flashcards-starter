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

  takeTurn() {
    this.turns++
  }
}
module.exports = Round;