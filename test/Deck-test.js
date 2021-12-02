const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const data = require('../src/data');

describe('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should have card in the deck', function() {


    const deck = new Deck(data.prototypeData);

    expect(deck.countCards()).to.equal(30);
  })
})