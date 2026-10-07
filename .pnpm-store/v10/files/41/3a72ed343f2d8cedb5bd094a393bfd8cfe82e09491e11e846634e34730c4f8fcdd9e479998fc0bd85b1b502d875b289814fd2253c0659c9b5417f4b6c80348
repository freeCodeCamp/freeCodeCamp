'use strict';
/**
 * @module JSONStream
 */
/**
 * Module dependencies.
 */

var Base = require('./base');
var constants = require('../runner').constants;
var EVENT_TEST_PASS = constants.EVENT_TEST_PASS;
var EVENT_TEST_FAIL = constants.EVENT_TEST_FAIL;
var EVENT_RUN_BEGIN = constants.EVENT_RUN_BEGIN;
var EVENT_RUN_END = constants.EVENT_RUN_END;

/**
 * Expose `JSONStream`.
 */

exports = module.exports = JSONStream;

/**
 * Constructs a new `JSONStream` reporter instance.
 *
 * @public
 * @class
 * @memberof Mocha.reporters
 * @extends Mocha.reporters.Base
 * @param {Runner} runner - Instance triggers reporter actions.
 * @param {Object} [options] - runner options
 */
function JSONStream(runner, options) {
  Base.call(this, runner, options);

  var self = this;
  var total = runner.total;

  runner.once(EVENT_RUN_BEGIN, function () {
    writeEvent(['start', {total}]);
  });

  runner.on(EVENT_TEST_PASS, function (test) {
    writeEvent(['pass', clean(test)]);
  });

  runner.on(EVENT_TEST_FAIL, function (test, err) {
    test = clean(test);
    test.err = err.message;
    test.stack = err.stack || null;
    writeEvent(['fail', test]);
  });

  runner.once(EVENT_RUN_END, function () {
    writeEvent(['end', self.stats]);
  });
}

/**
 * Mocha event to be written to the output stream.
 * @typedef {Array} JSONStream~MochaEvent
 */

/**
 * Writes Mocha event to reporter output stream.
 *
 * @private
 * @param {JSONStream~MochaEvent} event - Mocha event to be output.
 */
function writeEvent(event) {
  process.stdout.write(JSON.stringify(event) + '\n');
}

/**
 * Returns an object literal representation of `test`
 * free of cyclic properties, etc.
 *
 * @private
 * @param {Test} test - Instance used as data source.
 * @return {Object} object containing pared-down test instance data
 */
function clean(test) {
  return {
    title: test.title,
    fullTitle: test.fullTitle(),
    file: test.file,
    duration: test.duration,
    currentRetry: test.currentRetry(),
    speed: test.speed
  };
}

JSONStream.description = 'newline delimited JSON events';
