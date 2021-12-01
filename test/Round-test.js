/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/round');
const data = require('../src/data');

describe('Round', function() {
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  })

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should contain a deck inside the round', function() {
    const deck = new Deck(data.prototypeData);

    const round = new Round(deck);
    expect(round.deck).to.equal(deck);
  });

  it('should return the current card', function() {
    const deck = new Deck(data.prototypeData);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  })

})

  