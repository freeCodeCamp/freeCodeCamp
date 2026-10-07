'use strict';
/**
 * Base prompt implementation
 * Should be extended by prompt types.
 */
var _ = {
  assign: require('lodash/assign'),
  defaults: require('lodash/defaults'),
  clone: require('lodash/clone'),
};
var chalk = require('chalk');
var runAsync = require('run-async');
var { filter, flatMap, share, take, takeUntil } = require('rxjs/operators');
var Choices = require('../objects/choices');
var ScreenManager = require('../utils/screen-manager');

class Prompt {
  constructor(question, rl, answers) {
    // Setup instance defaults property
    _.assign(this, {
      answers: answers,
      status: 'pending',
    });

    // Set defaults prompt options
    this.opt = _.defaults(_.clone(question), {
      validate: () => true,
      filter: (val) => val,
      when: () => true,
      suffix: '',
      prefix: chalk.green('?'),
    });

    // Make sure name is present
    if (!this.opt.name) {
      this.throwParamError('name');
    }

    // Set default message if no message defined
    if (!this.opt.message) {
      this.opt.message = this.opt.name + ':';
    }

    // Normalize choices
    if (Array.isArray(this.opt.choices)) {
      this.opt.choices = new Choices(this.opt.choices, answers);
    }

    this.rl = rl;
    this.screen = new ScreenManager(this.rl);
  }

  /**
   * Start the Inquiry session and manage output value filtering
   * @return {Promise}
   */

  run() {
    return new Promise((resolve, reject) => {
      this._run(
        (value) => resolve(value),
        (error) => reject(error)
      );
    });
  }

  // Default noop (this one should be overwritten in prompts)
  _run(cb) {
    cb();
  }

  /**
   * Throw an error telling a required parameter is missing
   * @param  {String} name Name of the missing param
   * @return {Throw Error}
   */

  throwParamError(name) {
    throw new Error('You must provide a `' + name + '` parameter');
  }

  /**
   * Called when the UI closes. Override to do any specific cleanup necessary
   */
  close() {
    this.screen.releaseCursor();
  }

  /**
   * Run the provided validation method each time a submit event occur.
   * @param  {Rx.Observable} submit - submit event flow
   * @return {Object}        Object containing two observables: `success` and `error`
   */
  handleSubmitEvents(submit) {
    var self = this;
    var validate = runAsync(this.opt.validate);
    var asyncFilter = runAsync(this.opt.filter);
    var validation = submit.pipe(
      flatMap((value) =>
        asyncFilter(value, self.answers).then(
          (filteredValue) =>
            validate(filteredValue, self.answers).then(
              (isValid) => ({ isValid: isValid, value: filteredValue }),
              (err) => ({ isValid: err, value: filteredValue })
            ),
          (err) => ({ isValid: err })
        )
      ),
      share()
    );

    var success = validation.pipe(
      filter((state) => state.isValid === true),
      take(1)
    );
    var error = validation.pipe(
      filter((state) => state.isValid !== true),
      takeUntil(success)
    );

    return {
      success: success,
      error: error,
    };
  }

  /**
   * Generate the prompt question string
   * @return {String} prompt question string
   */

  getQuestion() {
    var message =
      this.opt.prefix +
      ' ' +
      chalk.bold(this.opt.message) +
      this.opt.suffix +
      chalk.reset(' ');

    // Append the default if available, and if question isn't answered
    if (this.opt.default != null && this.status !== 'answered') {
      // If default password is supplied, hide it
      if (this.opt.type === 'password') {
        message += chalk.italic.dim('[hidden] ');
      } else {
        message += chalk.dim('(' + this.opt.default + ') ');
      }
    }

    return message;
  }
}

module.exports = Prompt;
