/* eslint-disable max-len */
const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card  = require('../src/Card');
const Round = require('./round');
const Deck = require('./Deck');

class Game {
  constructor() {
    this.currentRound = null;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }


  start() {
    const cards = prototypeQuestions.map(card => {
      const newCard = new Card(card.id, card.question, card.answers, card.correctAnswer);
      return newCard;
    });
    const deck = new Deck(cards)
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;