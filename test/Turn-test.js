/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let turn;
  let card;
  let correctGuess;
  let wrongGuess;
  beforeEach(function() {
    turn = new Turn();
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    correctGuess = new Turn('object', card);
    wrongGuess = new Turn('This is Patrick', card);
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should take two arguments', function() {

    expect(wrongGuess.guess).to.equal('This is Patrick');
    expect(wrongGuess.card).to.equal(card);
  });

  it('should be able to return the users guess', function() {

    expect(wrongGuess.returnGuess()).to.equal('This is Patrick');
  })

  it('should return the Card class', function() {

    expect(wrongGuess.returnCard()).to.equal(card);
  });

  it('should return a boolean if the user guess is correct', function() {

    expect(correctGuess.evaluateGuess()).be.true
  });
  it('should return a boolean if the user guess is wrong', function() {

    expect(wrongGuess.evaluateGuess()).be.false
  });

  it('should give feedback if the guess was right or not', function() {


    expect(correctGuess.giveFeedback()).to.equal('correct!');
    expect(wrongGuess.giveFeedback()).to.equal('incorrect!');
  });
})