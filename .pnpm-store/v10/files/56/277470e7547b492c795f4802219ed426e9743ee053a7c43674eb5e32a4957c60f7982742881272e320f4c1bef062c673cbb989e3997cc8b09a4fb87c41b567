'use strict';

/**
 * Module dependencies.
 * @private
 */
const {EventEmitter} = require('events');
const Hook = require('./hook');
var {
  assignNewMochaID,
  clamp,
  constants: utilsConstants,
  defineConstants,
  getMochaID,
  inherits,
  isString
} = require('./utils');
const debug = require('debug')('mocha:suite');
const milliseconds = require('ms');
const errors = require('./errors');

const {MOCHA_ID_PROP_NAME} = utilsConstants;

/**
 * Expose `Suite`.
 */

exports = module.exports = Suite;

/**
 * Create a new `Suite` with the given `title` and parent `Suite`.
 *
 * @public
 * @param {Suite} parent - Parent suite (required!)
 * @param {string} title - Title
 * @return {Suite}
 */
Suite.create = function (parent, title) {
  var suite = new Suite(title, parent.ctx);
  suite.parent = parent;
  title = suite.fullTitle();
  parent.addSuite(suite);
  return suite;
};

/**
 * Constructs a new `Suite` instance with the given `title`, `ctx`, and `isRoot`.
 *
 * @public
 * @class
 * @extends EventEmitter
 * @see {@link https://nodejs.org/api/events.html#events_class_eventemitter|EventEmitter}
 * @param {string} title - Suite title.
 * @param {Context} parentContext - Parent context instance.
 * @param {boolean} [isRoot=false] - Whether this is the root suite.
 */
function Suite(title, parentContext, isRoot) {
  if (!isString(title)) {
    throw errors.createInvalidArgumentTypeError(
      'Suite argument "title" must be a string. Received type "' +
        typeof title +
        '"',
      'title',
      'string'
    );
  }
  this.title = title;
  function Context() {}
  Context.prototype = parentContext;
  this.ctx = new Context();
  this.suites = [];
  this.tests = [];
  this.root = isRoot === true;
  this.pending = false;
  this._retries = -1;
  this._beforeEach = [];
  this._beforeAll = [];
  this._afterEach = [];
  this._afterAll = [];
  this._timeout = 2000;
  this._slow = 75;
  this._bail = false;
  this._onlyTests = [];
  this._onlySuites = [];
  assignNewMochaID(this);

  Object.defineProperty(this, 'id', {
    get() {
      return getMochaID(this);
    }
  });

  this.reset();
}

/**
 * Inherit from `EventEmitter.prototype`.
 */
inherits(Suite, EventEmitter);

/**
 * Resets the state initially or for a next run.
 */
Suite.prototype.reset = function () {
  this.delayed = false;
  function doReset(thingToReset) {
    thingToReset.reset();
  }
  this.suites.forEach(doReset);
  this.tests.forEach(doReset);
  this._beforeEach.forEach(doReset);
  this._afterEach.forEach(doReset);
  this._beforeAll.forEach(doReset);
  this._afterAll.forEach(doReset);
};

/**
 * Return a clone of this `Suite`.
 *
 * @private
 * @return {Suite}
 */
Suite.prototype.clone = function () {
  var suite = new Suite(this.title);
  debug('clone');
  suite.ctx = this.ctx;
  suite.root = this.root;
  suite.timeout(this.timeout());
  suite.retries(this.retries());
  suite.slow(this.slow());
  suite.bail(this.bail());
  return suite;
};

/**
 * Set or get timeout `ms` or short-hand such as "2s".
 *
 * @private
 * @todo Do not attempt to set value if `ms` is undefined
 * @param {number|string} ms
 * @return {Suite|number} for chaining
 */
Suite.prototype.timeout = function (ms) {
  if (!arguments.length) {
    return this._timeout;
  }
  if (typeof ms === 'string') {
    ms = milliseconds(ms);
  }

  // Clamp to range
  var INT_MAX = Math.pow(2, 31) - 1;
  var range = [0, INT_MAX];
  ms = clamp(ms, range);

  debug('timeout %d', ms);
  this._timeout = parseInt(ms, 10);
  return this;
};

/**
 * Set or get number of times to retry a failed test.
 *
 * @private
 * @param {number|string} n
 * @return {Suite|number} for chaining
 */
Suite.prototype.retries = function (n) {
  if (!arguments.length) {
    return this._retries;
  }
  debug('retries %d', n);
  this._retries = parseInt(n, 10) || 0;
  return this;
};

/**
 * Set or get slow `ms` or short-hand such as "2s".
 *
 * @private
 * @param {number|string} ms
 * @return {Suite|number} for chaining
 */
Suite.prototype.slow = function (ms) {
  if (!arguments.length) {
    return this._slow;
  }
  if (typeof ms === 'string') {
    ms = milliseconds(ms);
  }
  debug('slow %d', ms);
  this._slow = ms;
  return this;
};

/**
 * Set or get whether to bail after first error.
 *
 * @private
 * @param {boolean} bail
 * @return {Suite|number} for chaining
 */
Suite.prototype.bail = function (bail) {
  if (!arguments.length) {
    return this._bail;
  }
  debug('bail %s', bail);
  this._bail = bail;
  return this;
};

/**
 * Check if this suite or its parent suite is marked as pending.
 *
 * @private
 */
Suite.prototype.isPending = function () {
  return this.pending || (this.parent && this.parent.isPending());
};

/**
 * Generic hook-creator.
 * @private
 * @param {string} title - Title of hook
 * @param {Function} fn - Hook callback
 * @returns {Hook} A new hook
 */
Suite.prototype._createHook = function (title, fn) {
  var hook = new Hook(title, fn);
  hook.parent = this;
  hook.timeout(this.timeout());
  hook.retries(this.retries());
  hook.slow(this.slow());
  hook.ctx = this.ctx;
  hook.file = this.file;
  return hook;
};

/**
 * Run `fn(test[, done])` before running tests.
 *
 * @private
 * @param {string} title
 * @param {Function} fn
 * @return {Suite} for chaining
 */
Suite.prototype.beforeAll = function (title, fn) {
  if (this.isPending()) {
    return this;
  }
  if (typeof title === 'function') {
    fn = title;
    title = fn.name;
  }
  title = '"before all" hook' + (title ? ': ' + title : '');

  var hook = this._createHook(title, fn);
  this._beforeAll.push(hook);
  this.emit(constants.EVENT_SUITE_ADD_HOOK_BEFORE_ALL, hook);
  return this;
};

/**
 * Run `fn(test[, done])` after running tests.
 *
 * @private
 * @param {string} title
 * @param {Function} fn
 * @return {Suite} for chaining
 */
Suite.prototype.afterAll = function (title, fn) {
  if (this.isPending()) {
    return this;
  }
  if (typeof title === 'function') {
    fn = title;
    title = fn.name;
  }
  title = '"after all" hook' + (title ? ': ' + title : '');

  var hook = this._createHook(title, fn);
  this._afterAll.push(hook);
  this.emit(constants.EVENT_SUITE_ADD_HOOK_AFTER_ALL, hook);
  return this;
};

/**
 * Run `fn(test[, done])` before each test case.
 *
 * @private
 * @param {string} title
 * @param {Function} fn
 * @return {Suite} for chaining
 */
Suite.prototype.beforeEach = function (title, fn) {
  if (this.isPending()) {
    return this;
  }
  if (typeof title === 'function') {
    fn = title;
    title = fn.name;
  }
  title = '"before each" hook' + (title ? ': ' + title : '');

  var hook = this._createHook(title, fn);
  this._beforeEach.push(hook);
  this.emit(constants.EVENT_SUITE_ADD_HOOK_BEFORE_EACH, hook);
  return this;
};

/**
 * Run `fn(test[, done])` after each test case.
 *
 * @private
 * @param {string} title
 * @param {Function} fn
 * @return {Suite} for chaining
 */
Suite.prototype.afterEach = function (title, fn) {
  if (this.isPending()) {
    return this;
  }
  if (typeof title === 'function') {
    fn = title;
    title = fn.name;
  }
  title = '"after each" hook' + (title ? ': ' + title : '');

  var hook = this._createHook(title, fn);
  this._afterEach.push(hook);
  this.emit(constants.EVENT_SUITE_ADD_HOOK_AFTER_EACH, hook);
  return this;
};

/**
 * Add a test `suite`.
 *
 * @private
 * @param {Suite} suite
 * @return {Suite} for chaining
 */
Suite.prototype.addSuite = function (suite) {
  suite.parent = this;
  suite.root = false;
  suite.timeout(this.timeout());
  suite.retries(this.retries());
  suite.slow(this.slow());
  suite.bail(this.bail());
  this.suites.push(suite);
  this.emit(constants.EVENT_SUITE_ADD_SUITE, suite);
  return this;
};

/**
 * Add a `test` to this suite.
 *
 * @private
 * @param {Test} test
 * @return {Suite} for chaining
 */
Suite.prototype.addTest = function (test) {
  test.parent = this;
  test.timeout(this.timeout());
  test.retries(this.retries());
  test.slow(this.slow());
  test.ctx = this.ctx;
  this.tests.push(test);
  this.emit(constants.EVENT_SUITE_ADD_TEST, test);
  return this;
};

/**
 * Return the full title generated by recursively concatenating the parent's
 * full title.
 *
 * @memberof Suite
 * @public
 * @return {string}
 */
Suite.prototype.fullTitle = function () {
  return this.titlePath().join(' ');
};

/**
 * Return the title path generated by recursively concatenating the parent's
 * title path.
 *
 * @memberof Suite
 * @public
 * @return {string[]}
 */
Suite.prototype.titlePath = function () {
  var result = [];
  if (this.parent) {
    result = result.concat(this.parent.titlePath());
  }
  if (!this.root) {
    result.push(this.title);
  }
  return result;
};

/**
 * Return the total number of tests.
 *
 * @memberof Suite
 * @public
 * @return {number}
 */
Suite.prototype.total = function () {
  return (
    this.suites.reduce(function (sum, suite) {
      return sum + suite.total();
    }, 0) + this.tests.length
  );
};

/**
 * Iterates through each suite recursively to find all tests. Applies a
 * function in the format `fn(test)`.
 *
 * @private
 * @param {Function} fn
 * @return {Suite}
 */
Suite.prototype.eachTest = function (fn) {
  this.tests.forEach(fn);
  this.suites.forEach(function (suite) {
    suite.eachTest(fn);
  });
  return this;
};

/**
 * This will run the root suite if we happen to be running in delayed mode.
 * @private
 */
Suite.prototype.run = function run() {
  if (this.root) {
    this.emit(constants.EVENT_ROOT_SUITE_RUN);
  }
};

/**
 * Determines whether a suite has an `only` test or suite as a descendant.
 *
 * @private
 * @returns {Boolean}
 */
Suite.prototype.hasOnly = function hasOnly() {
  return (
    this._onlyTests.length > 0 ||
    this._onlySuites.length > 0 ||
    this.suites.some(function (suite) {
      return suite.hasOnly();
    })
  );
};

/**
 * Filter suites based on `isOnly` logic.
 *
 * @private
 * @returns {Boolean}
 */
Suite.prototype.filterOnly = function filterOnly() {
  if (this._onlyTests.length) {
    // If the suite contains `only` tests, run those and ignore any nested suites.
    this.tests = this._onlyTests;
    this.suites = [];
  } else {
    // Otherwise, do not run any of the tests in this suite.
    this.tests = [];
    this._onlySuites.forEach(function (onlySuite) {
      // If there are other `only` tests/suites nested in the current `only` suite, then filter that `only` suite.
      // Otherwise, all of the tests on this `only` suite should be run, so don't filter it.
      if (onlySuite.hasOnly()) {
        onlySuite.filterOnly();
      }
    });
    // Run the `only` suites, as well as any other suites that have `only` tests/suites as descendants.
    var onlySuites = this._onlySuites;
    this.suites = this.suites.filter(function (childSuite) {
      return onlySuites.indexOf(childSuite) !== -1 || childSuite.filterOnly();
    });
  }
  // Keep the suite only if there is something to run
  return this.tests.length > 0 || this.suites.length > 0;
};

/**
 * Adds a suite to the list of subsuites marked `only`.
 *
 * @private
 * @param {Suite} suite
 */
Suite.prototype.appendOnlySuite = function (suite) {
  this._onlySuites.push(suite);
};

/**
 * Marks a suite to be `only`.
 *
 * @private
 */
Suite.prototype.markOnly = function () {
  this.parent && this.parent.appendOnlySuite(this);
};

/**
 * Adds a test to the list of tests marked `only`.
 *
 * @private
 * @param {Test} test
 */
Suite.prototype.appendOnlyTest = function (test) {
  this._onlyTests.push(test);
};

/**
 * Returns the array of hooks by hook name; see `HOOK_TYPE_*` constants.
 * @private
 */
Suite.prototype.getHooks = function getHooks(name) {
  return this['_' + name];
};

/**
 * cleans all references from this suite and all child suites.
 */
Suite.prototype.dispose = function () {
  this.suites.forEach(function (suite) {
    suite.dispose();
  });
  this.cleanReferences();
};

/**
 * Cleans up the references to all the deferred functions
 * (before/after/beforeEach/afterEach) and tests of a Suite.
 * These must be deleted otherwise a memory leak can happen,
 * as those functions may reference variables from closures,
 * thus those variables can never be garbage collected as long
 * as the deferred functions exist.
 *
 * @private
 */
Suite.prototype.cleanReferences = function cleanReferences() {
  function cleanArrReferences(arr) {
    for (var i = 0; i < arr.length; i++) {
      delete arr[i].fn;
    }
  }

  if (Array.isArray(this._beforeAll)) {
    cleanArrReferences(this._beforeAll);
  }

  if (Array.isArray(this._beforeEach)) {
    cleanArrReferences(this._beforeEach);
  }

  if (Array.isArray(this._afterAll)) {
    cleanArrReferences(this._afterAll);
  }

  if (Array.isArray(this._afterEach)) {
    cleanArrReferences(this._afterEach);
  }

  for (var i = 0; i < this.tests.length; i++) {
    delete this.tests[i].fn;
  }
};

/**
 * Returns an object suitable for IPC.
 * Functions are represented by keys beginning with `$$`.
 * @private
 * @returns {Object}
 */
Suite.prototype.serialize = function serialize() {
  return {
    _bail: this._bail,
    $$fullTitle: this.fullTitle(),
    $$isPending: Boolean(this.isPending()),
    root: this.root,
    title: this.title,
    [MOCHA_ID_PROP_NAME]: this.id,
    parent: this.parent ? {[MOCHA_ID_PROP_NAME]: this.parent.id} : null
  };
};

var constants = defineConstants(
  /**
   * {@link Suite}-related constants.
   * @public
   * @memberof Suite
   * @alias constants
   * @readonly
   * @static
   * @enum {string}
   */
  {
    /**
     * Event emitted after a test file has been loaded. Not emitted in browser.
     */
    EVENT_FILE_POST_REQUIRE: 'post-require',
    /**
     * Event emitted before a test file has been loaded. In browser, this is emitted once an interface has been selected.
     */
    EVENT_FILE_PRE_REQUIRE: 'pre-require',
    /**
     * Event emitted immediately after a test file has been loaded. Not emitted in browser.
     */
    EVENT_FILE_REQUIRE: 'require',
    /**
     * Event emitted when `global.run()` is called (use with `delay` option).
     */
    EVENT_ROOT_SUITE_RUN: 'run',

    /**
     * Namespace for collection of a `Suite`'s "after all" hooks.
     */
    HOOK_TYPE_AFTER_ALL: 'afterAll',
    /**
     * Namespace for collection of a `Suite`'s "after each" hooks.
     */
    HOOK_TYPE_AFTER_EACH: 'afterEach',
    /**
     * Namespace for collection of a `Suite`'s "before all" hooks.
     */
    HOOK_TYPE_BEFORE_ALL: 'beforeAll',
    /**
     * Namespace for collection of a `Suite`'s "before each" hooks.
     */
    HOOK_TYPE_BEFORE_EACH: 'beforeEach',

    /**
     * Emitted after a child `Suite` has been added to a `Suite`.
     */
    EVENT_SUITE_ADD_SUITE: 'suite',
    /**
     * Emitted after an "after all" `Hook` has been added to a `Suite`.
     */
    EVENT_SUITE_ADD_HOOK_AFTER_ALL: 'afterAll',
    /**
     * Emitted after an "after each" `Hook` has been added to a `Suite`.
     */
    EVENT_SUITE_ADD_HOOK_AFTER_EACH: 'afterEach',
    /**
     * Emitted after an "before all" `Hook` has been added to a `Suite`.
     */
    EVENT_SUITE_ADD_HOOK_BEFORE_ALL: 'beforeAll',
    /**
     * Emitted after an "before each" `Hook` has been added to a `Suite`.
     */
    EVENT_SUITE_ADD_HOOK_BEFORE_EACH: 'beforeEach',
    /**
     * Emitted after a `Test` has been added to a `Suite`.
     */
    EVENT_SUITE_ADD_TEST: 'test'
  }
);

Suite.constants = constants;
