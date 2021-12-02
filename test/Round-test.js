/* eslint-disable max-len */
const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/turn');
const Round = require('../src/round');

describe('Round', function() {
  it('should be a function', function() {
    expect(Round).to.be.a('function');
  })

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should contain a deck inside the round', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
    const card3 = new Card(20, "forEach() returns an array", ["true", "false"], "false");

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);
    expect(round.deck).to.equal(deck);
  });

  it('should set the current card', function () {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
    const card3 = new Card(20, "forEach() returns an array", ["true", "false"], "false");

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should have the turns set to 0 by default', function () {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
    const card3 = new Card(20, "forEach() returns an array", ["true", "false"], "false");

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
  });

  it('should have incorrectGuesses set to an empty array', function () {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
    const card3 = new Card(20, "forEach() returns an array", ["true", "false"], "false");

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.incorrectGuesses).to.eql([]);
  });


  it('should update the turns count when takeTurn method is invoked', function () {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
    const card3 = new Card(20, "forEach() returns an array", ["true", "false"], "false");

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('otter');
    expect(round.turns).to.equal(1);
  });

  it('should make a new instance of Turn when a guess is made ', function () {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
    const card3 = new Card(20, "forEach() returns an array", ["true", "false"], "false");

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('lil Wayne');
    round.takeTurn('DJ Snake')
    expect(round.turn).to.be.an.instanceOf(Turn);
  })

  it('should get a new card after you call the currentCard', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
    const card3 = new Card(20, "forEach() returns an array", ["true", "false"], "false");

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('lil Wayne');
    round.takeTurn('DJ Snake');
    expect(round.nextCard).to.equal(card3);
  }); 

  it('should calculate the pertentage of the users correct answers ', function () {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
    const card3 = new Card(20, "forEach() returns an array", ["true", "false"], "false");

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('object');
    round.takeTurn('lil wayne');
    expect(round.calculatePercentCorrect()).to.eql(50);
  });

  it('should calculate the pertentage of the users correct answers ', function () {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(6, "What is an example of a mutator method?", ["sort()", "map()", "join()"], "sort()");
    const card3 = new Card(20, "forEach() returns an array", ["true", "false"], "false");

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('object');
    round.takeTurn('lil wayne');
    round.takeTurn('false')
    round.calculatePercentCorrect();
    expect(round.endRound()).to.equal('** Round over! ** You answered 66% of the questions correctly!');
  })

});

  
  