'use strict';
/**
 * @module List
 */
/**
 * Module dependencies.
 */

var Base = require('./base');
var inherits = require('../utils').inherits;
var constants = require('../runner').constants;
var EVENT_RUN_BEGIN = constants.EVENT_RUN_BEGIN;
var EVENT_RUN_END = constants.EVENT_RUN_END;
var EVENT_TEST_BEGIN = constants.EVENT_TEST_BEGIN;
var EVENT_TEST_FAIL = constants.EVENT_TEST_FAIL;
var EVENT_TEST_PASS = constants.EVENT_TEST_PASS;
var EVENT_TEST_PENDING = constants.EVENT_TEST_PENDING;
var color = Base.color;
var cursor = Base.cursor;

/**
 * Expose `List`.
 */

exports = module.exports = List;

/**
 * Constructs a new `List` reporter instance.
 *
 * @public
 * @class
 * @memberof Mocha.reporters
 * @extends Mocha.reporters.Base
 * @param {Runner} runner - Instance triggers reporter actions.
 * @param {Object} [options] - runner options
 */
function List(runner, options) {
  Base.call(this, runner, options);

  var self = this;
  var n = 0;

  runner.on(EVENT_RUN_BEGIN, function () {
    Base.consoleLog();
  });

  runner.on(EVENT_TEST_BEGIN, function (test) {
    process.stdout.write(color('pass', '    ' + test.fullTitle() + ': '));
  });

  runner.on(EVENT_TEST_PENDING, function (test) {
    var fmt = color('checkmark', '  -') + color('pending', ' %s');
    Base.consoleLog(fmt, test.fullTitle());
  });

  runner.on(EVENT_TEST_PASS, function (test) {
    var fmt =
      color('checkmark', '  ' + Base.symbols.ok) +
      color('pass', ' %s: ') +
      color(test.speed, '%dms');
    cursor.CR();
    Base.consoleLog(fmt, test.fullTitle(), test.duration);
  });

  runner.on(EVENT_TEST_FAIL, function (test) {
    cursor.CR();
    Base.consoleLog(color('fail', '  %d) %s'), ++n, test.fullTitle());
  });

  runner.once(EVENT_RUN_END, self.epilogue.bind(self));
}

/**
 * Inherit from `Base.prototype`.
 */
inherits(List, Base);

List.description = 'like "spec" reporter but flat';
