class Turn {
  constructor(userGuess, card) {
    this.guess = userGuess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  evaluateGuess() {
    return this.guess === this.card.correctAnswer
  }

  giveFeedback() {
    if (this.guess === this.card.correctAnswer) {
      // console.log('\n' + '✅ Your answer was 😅: correct ✅' + '\n')
      return 'correct!';
    } else {
      // console.log('🛑 Your answer was 😭: incorrect! 🛑' + '\n');
      return 'incorrect!'
    }
  }

  returnCard() {
    return this.card;
  }
}
module.exports = Turn;