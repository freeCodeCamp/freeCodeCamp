'use strict';
/**
 * `input` type prompt
 */

var Input = require('./input');

/**
 * Extention of the Input prompt specifically for use with number inputs.
 */

class NumberPrompt extends Input {
  filterInput(input) {
    if (input && typeof input === 'string') {
      input = input.trim();
      // Match a number in the input
      let numberMatch = input.match(/(^-?\d+|^\d+\.\d*|^\d*\.\d+)(e\d+)?$/);
      // If a number is found, return that input.
      if (numberMatch) {
        return Number(numberMatch[0]);
      }
    }

    // If the input was invalid return the default value.
    return this.opt.default == null ? NaN : this.opt.default;
  }
}

module.exports = NumberPrompt;
