class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = {};
    this.turns = 0; 
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards.shift();

    return this.currentCard;
  }
}
module.exports = Round;