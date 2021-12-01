class Round {
  constructor(deck) {
    this.deck = deck;
  }

  returnCurrentCard() {
    console.log(this.deck.cards.shift());
    // return this.deck.cards[0];
  }
}
module.exports = Round;