/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/turn');
const Round = require('../src/round');
const data = require('./Small_data_test');

describe('Round', function() {  
  let card1;
  let card2;
  let card3;
  let deck;
  let round; 
  
  beforeEach(function() {
    card1 = new Card(data.testData[0]);
    card2 = new Card(data.testData[1]);
    card3 = new Card(data.testData[2]);

    deck = new Deck([card1, card2, card3]);

    round = new Round(deck);
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  })

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should contain a deck inside the round', function() {
    expect(round.deck).to.equal(deck);
  });

  it('should set the current card', function () {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should have the turns set to 0 by default', function () {

    expect(round.turns).to.equal(0);
  });

  it('should have incorrectGuesses set to an empty array', function () {
    expect(round.incorrectGuesses).to.eql([]);
  });


  it('should update the turns count when takeTurn method is invoked', function () {

    round.takeTurn('otter');
    expect(round.turns).to.equal(1);
  });

  it('should make a new instance of Turn when a guess is made ', function () {

    round.takeTurn('lil Wayne');
    round.takeTurn('DJ Snake')
    expect(round.turn).to.be.an.instanceOf(Turn);
  })

  it('should get a new card after you call the currentCard', function() 
    round.takeTurn('lil Wayne');
    round.takeTurn('DJ Snake');
    expect(round.nextCard).to.equal(card3);
  }); 

  it('should calculate the pertentage of the users correct answers ', function () {
    round.takeTurn('object');
    round.takeTurn('lil wayne');
    expect(round.calculatePercentCorrect()).to.eql(50);
  });

  it('should calculate the pertentage of the users correct answers ', function () {
    round.takeTurn('object');
    round.takeTurn('lil wayne');
    round.takeTurn('false')
    round.calculatePercentCorrect();
    expect(round.endRound()).to.equal('** Round over! ** You answered 66% of the questions correctly!');
  })

});

  
  