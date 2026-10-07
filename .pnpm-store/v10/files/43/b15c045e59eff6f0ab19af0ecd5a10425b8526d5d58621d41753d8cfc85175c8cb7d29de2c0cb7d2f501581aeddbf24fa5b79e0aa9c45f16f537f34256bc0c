'use strict';
/**
 * @module Min
 */
/**
 * Module dependencies.
 */

var Base = require('./base');
var inherits = require('../utils').inherits;
var constants = require('../runner').constants;
var EVENT_RUN_END = constants.EVENT_RUN_END;
var EVENT_RUN_BEGIN = constants.EVENT_RUN_BEGIN;

/**
 * Expose `Min`.
 */

exports = module.exports = Min;

/**
 * Constructs a new `Min` reporter instance.
 *
 * @description
 * This minimal test reporter is best used with '--watch'.
 *
 * @public
 * @class
 * @memberof Mocha.reporters
 * @extends Mocha.reporters.Base
 * @param {Runner} runner - Instance triggers reporter actions.
 * @param {Object} [options] - runner options
 */
function Min(runner, options) {
  Base.call(this, runner, options);

  runner.on(EVENT_RUN_BEGIN, function () {
    // clear screen
    process.stdout.write('\u001b[2J');
    // set cursor position
    process.stdout.write('\u001b[1;3H');
  });

  runner.once(EVENT_RUN_END, this.epilogue.bind(this));
}

/**
 * Inherit from `Base.prototype`.
 */
inherits(Min, Base);

Min.description = 'essentially just a summary';
