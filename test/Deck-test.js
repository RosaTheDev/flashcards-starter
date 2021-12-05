const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const data = require('./Small_data_test');

describe('Deck', function() {

  let deck;

  beforeEach(function () {
    deck = new Deck(data.testData);
  })

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should have card in the deck', function() {

    expect(deck.countCards()).to.equal(5);
  })
})