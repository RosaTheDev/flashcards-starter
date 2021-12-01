/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
    
  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should take two arguments', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    const turn = new Turn('pug', card);

    expect(turn.guess).to.equal('pug');
    expect(turn.card).to.equal(card);
  });

  it('should be able to return the users guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Apple', card);

    expect(turn.returnGuess()).to.equal('Apple');
  })

  it('should return the Card class', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('Pens', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should return a boolean if the user guess is correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const correctGuess = new Turn('object', card);

    expect(correctGuess.evaluateGuess()).be.true
  });
  it('should return a boolean if the user guess is wrong', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const correctGuess = new Turn('Krabby Patties?', card);

    expect(correctGuess.evaluateGuess()).be.false
  });

  it('should give feedback if the guess was right or not', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const correct = new Turn('object', card);
    const wrong = new Turn('This is Patrick', card);


    expect(correct.giveFeedback()).to.equal('correct!');
    expect(wrong.giveFeedback()).to.equal('incorrect!');
  });
})