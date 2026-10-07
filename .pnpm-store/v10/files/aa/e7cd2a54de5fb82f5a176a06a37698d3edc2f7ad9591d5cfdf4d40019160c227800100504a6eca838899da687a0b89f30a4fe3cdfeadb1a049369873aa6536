'use strict';
/**
 * `confirm` type prompt
 */

var _ = {
  extend: require('lodash/extend'),
  isBoolean: require('lodash/isBoolean'),
};
var chalk = require('chalk');
var { take, takeUntil } = require('rxjs/operators');
var Base = require('./base');
var observe = require('../utils/events');

class ConfirmPrompt extends Base {
  constructor(questions, rl, answers) {
    super(questions, rl, answers);

    var rawDefault = true;

    _.extend(this.opt, {
      filter: function (input) {
        var value = rawDefault;
        if (input != null && input !== '') {
          value = /^y(es)?/i.test(input);
        }

        return value;
      },
    });

    if (_.isBoolean(this.opt.default)) {
      rawDefault = this.opt.default;
    }

    this.opt.default = rawDefault ? 'Y/n' : 'y/N';
  }

  /**
   * Start the Inquiry session
   * @param  {Function} cb   Callback when prompt is done
   * @return {this}
   */

  _run(cb) {
    this.done = cb;

    // Once user confirm (enter key)
    var events = observe(this.rl);
    events.keypress.pipe(takeUntil(events.line)).forEach(this.onKeypress.bind(this));

    events.line.pipe(take(1)).forEach(this.onEnd.bind(this));

    // Init
    this.render();

    return this;
  }

  /**
   * Render the prompt to screen
   * @return {ConfirmPrompt} self
   */

  render(answer) {
    var message = this.getQuestion();

    if (typeof answer === 'boolean') {
      message += chalk.cyan(answer ? 'Yes' : 'No');
    } else {
      message += this.rl.line;
    }

    this.screen.render(message);

    return this;
  }

  /**
   * When user press `enter` key
   */

  onEnd(input) {
    this.status = 'answered';

    var output = this.opt.filter(input);
    this.render(output);

    this.screen.done();
    this.done(output);
  }

  /**
   * When user press a key
   */

  onKeypress() {
    this.render();
  }
}

module.exports = ConfirmPrompt;
