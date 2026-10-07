'use strict';
var Runnable = require('./runnable');
var utils = require('./utils');
var errors = require('./errors');
var createInvalidArgumentTypeError = errors.createInvalidArgumentTypeError;
var isString = utils.isString;

const {MOCHA_ID_PROP_NAME} = utils.constants;

module.exports = Test;

/**
 * Initialize a new `Test` with the given `title` and callback `fn`.
 *
 * @public
 * @class
 * @extends Runnable
 * @param {String} title - Test title (required)
 * @param {Function} [fn] - Test callback.  If omitted, the Test is considered "pending"
 */
function Test(title, fn) {
  if (!isString(title)) {
    throw createInvalidArgumentTypeError(
      'Test argument "title" should be a string. Received type "' +
        typeof title +
        '"',
      'title',
      'string'
    );
  }
  this.type = 'test';
  Runnable.call(this, title, fn);
  this.reset();
}

/**
 * Inherit from `Runnable.prototype`.
 */
utils.inherits(Test, Runnable);

/**
 * Resets the state initially or for a next run.
 */
Test.prototype.reset = function () {
  Runnable.prototype.reset.call(this);
  this.pending = !this.fn;
  delete this.state;
};

/**
 * Set or get retried test
 *
 * @private
 */
Test.prototype.retriedTest = function (n) {
  if (!arguments.length) {
    return this._retriedTest;
  }
  this._retriedTest = n;
};

/**
 * Add test to the list of tests marked `only`.
 *
 * @private
 */
Test.prototype.markOnly = function () {
  this.parent.appendOnlyTest(this);
};

Test.prototype.clone = function () {
  var test = new Test(this.title, this.fn);
  test.timeout(this.timeout());
  test.slow(this.slow());
  test.retries(this.retries());
  test.currentRetry(this.currentRetry());
  test.retriedTest(this.retriedTest() || this);
  test.globals(this.globals());
  test.parent = this.parent;
  test.file = this.file;
  test.ctx = this.ctx;
  return test;
};

/**
 * Returns an minimal object suitable for transmission over IPC.
 * Functions are represented by keys beginning with `$$`.
 * @private
 * @returns {Object}
 */
Test.prototype.serialize = function serialize() {
  return {
    $$currentRetry: this._currentRetry,
    $$fullTitle: this.fullTitle(),
    $$isPending: Boolean(this.pending),
    $$retriedTest: this._retriedTest || null,
    $$slow: this._slow,
    $$titlePath: this.titlePath(),
    body: this.body,
    duration: this.duration,
    err: this.err,
    parent: {
      $$fullTitle: this.parent.fullTitle(),
      [MOCHA_ID_PROP_NAME]: this.parent.id
    },
    speed: this.speed,
    state: this.state,
    title: this.title,
    type: this.type,
    file: this.file,
    [MOCHA_ID_PROP_NAME]: this.id
  };
};
