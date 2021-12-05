/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/turn');
const Round = require('../src/round');
const Game = require('../src/Game');
const data = require('./Small_data_test');

describe('Game', function () {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  let game;

  beforeEach(function () {
    card1 = new Card(data.testData[0]);
    card2 = new Card(data.testData[1]);
    card3 = new Card(data.testData[2]);
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
    game = new Game(Deck);
  });

  it('should be a function', function () {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function () {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should keep track of the currentRound', function () {
    game.start(deck);
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });

  it('starting the game should create Cards', function () {
    game.start(deck);
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceOf(Card);
  });
});


