const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Round = require('../src/round');

describe('Round', function() {
  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  })

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round);
  })
});