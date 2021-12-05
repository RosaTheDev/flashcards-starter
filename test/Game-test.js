/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/turn');
const Round = require('../src/round');
const Game = require('../src/Game');

describe('Game', function () {
  it('should be a function', function () {
    expect(Game).to.be.a('function');
  })

  it('should be an instance of Game', function () {
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should keep track of the currentRound', function () {
    const game = new Game(Deck);
    game.start();

    expect(game.currentRound).to.be.an.instanceOf(Round);
  });

  it('starting the game should create Cards', function () {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
    const card3 = new Card(20, "forEach() returns an array", ["true", "false"], "false");

    const deck = new Deck([card1, card2, card3]);

    const game = new Game();
    game.start(deck);

    expect(game.currentRound.deck.cards[0]).to.be.an.instanceOf(Card);
  });

  it.skip('should put cards in a deck ', function () {
    const game = new Game();
  }); 

  it.skip('should create a new round using the deck', function () {
    const game = new Game();
  }); 
});


