class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = {};
    round 
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards.shift();

    return this.currentCard;
  }
}
module.exports = Round;