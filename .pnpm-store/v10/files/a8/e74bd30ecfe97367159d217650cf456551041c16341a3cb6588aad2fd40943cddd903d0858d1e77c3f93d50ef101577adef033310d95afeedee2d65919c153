'use strict';

const SelectPrompt = require('./select');

class Quiz extends SelectPrompt {
  constructor(options) {
    super(options);
    if (typeof this.options.correctChoice !== 'number' || this.options.correctChoice < 0) {
      throw new Error('Please specify the index of the correct answer from the list of choices');
    }
  }

  async toChoices(value, parent) {
    let choices = await super.toChoices(value, parent);
    if (choices.length < 2) {
      throw new Error('Please give at least two choices to the user');
    }
    if (this.options.correctChoice > choices.length) {
      throw new Error('Please specify the index of the correct answer from the list of choices');
    }
    return choices;
  }

  check(state) {
    return state.index === this.options.correctChoice;
  }

  async result(selected) {
    return {
      selectedAnswer: selected,
      correctAnswer: this.options.choices[this.options.correctChoice].value,
      correct: await this.check(this.state)
    };
  }
}

module.exports = Quiz;
