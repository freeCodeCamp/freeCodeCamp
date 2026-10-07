'use strict';

/*!
 * mocha
 * Copyright(c) 2011 TJ Holowaychuk <tj@vision-media.ca>
 * MIT Licensed
 */

var escapeRe = require('escape-string-regexp');
var path = require('path');
var builtinReporters = require('./reporters');
var utils = require('./utils');
var mocharc = require('./mocharc.json');
var Suite = require('./suite');
var esmUtils = require('./nodejs/esm-utils');
var createStatsCollector = require('./stats-collector');
const {
  createInvalidReporterError,
  createInvalidInterfaceError,
  createMochaInstanceAlreadyDisposedError,
  createMochaInstanceAlreadyRunningError,
  createUnsupportedError
} = require('./errors');
const {EVENT_FILE_PRE_REQUIRE, EVENT_FILE_POST_REQUIRE, EVENT_FILE_REQUIRE} =
  Suite.constants;
var debug = require('debug')('mocha:mocha');

exports = module.exports = Mocha;

/**
 * A Mocha instance is a finite state machine.
 * These are the states it can be in.
 * @private
 */
var mochaStates = utils.defineConstants({
  /**
   * Initial state of the mocha instance
   * @private
   */
  INIT: 'init',
  /**
   * Mocha instance is running tests
   * @private
   */
  RUNNING: 'running',
  /**
   * Mocha instance is done running tests and references to test functions and hooks are cleaned.
   * You can reset this state by unloading the test files.
   * @private
   */
  REFERENCES_CLEANED: 'referencesCleaned',
  /**
   * Mocha instance is disposed and can no longer be used.
   * @private
   */
  DISPOSED: 'disposed'
});

/**
 * To require local UIs and reporters when running in node.
 */

if (!utils.isBrowser() && typeof module.paths !== 'undefined') {
  var cwd = utils.cwd();
  module.paths.push(cwd, path.join(cwd, 'node_modules'));
}

/**
 * Expose internals.
 * @private
 */

exports.utils = utils;
exports.interfaces = require('./interfaces');
/**
 * @public
 * @memberof Mocha
 */
exports.reporters = builtinReporters;
exports.Runnable = require('./runnable');
exports.Context = require('./context');
/**
 *
 * @memberof Mocha
 */
exports.Runner = require('./runner');
exports.Suite = Suite;
exports.Hook = require('./hook');
exports.Test = require('./test');

let currentContext;
exports.afterEach = function (...args) {
  return (currentContext.afterEach || currentContext.teardown).apply(
    this,
    args
  );
};
exports.after = function (...args) {
  return (currentContext.after || currentContext.suiteTeardown).apply(
    this,
    args
  );
};
exports.beforeEach = function (...args) {
  return (currentContext.beforeEach || currentContext.setup).apply(this, args);
};
exports.before = function (...args) {
  return (currentContext.before || currentContext.suiteSetup).apply(this, args);
};
exports.describe = function (...args) {
  return (currentContext.describe || currentContext.suite).apply(this, args);
};
exports.describe.only = function (...args) {
  return (currentContext.describe || currentContext.suite).only.apply(
    this,
    args
  );
};
exports.describe.skip = function (...args) {
  return (currentContext.describe || currentContext.suite).skip.apply(
    this,
    args
  );
};
exports.it = function (...args) {
  return (currentContext.it || currentContext.test).apply(this, args);
};
exports.it.only = function (...args) {
  return (currentContext.it || currentContext.test).only.apply(this, args);
};
exports.it.skip = function (...args) {
  return (currentContext.it || currentContext.test).skip.apply(this, args);
};
exports.xdescribe = exports.describe.skip;
exports.xit = exports.it.skip;
exports.setup = exports.beforeEach;
exports.suiteSetup = exports.before;
exports.suiteTeardown = exports.after;
exports.suite = exports.describe;
exports.teardown = exports.afterEach;
exports.test = exports.it;
exports.run = function (...args) {
  return currentContext.run.apply(this, args);
};

/**
 * Constructs a new Mocha instance with `options`.
 *
 * @public
 * @class Mocha
 * @param {Object} [options] - Settings object.
 * @param {boolean} [options.allowUncaught] - Propagate uncaught errors?
 * @param {boolean} [options.asyncOnly] - Force `done` callback or promise?
 * @param {boolean} [options.bail] - Bail after first test failure?
 * @param {boolean} [options.checkLeaks] - Check for global variable leaks?
 * @param {boolean} [options.color] - Color TTY output from reporter?
 * @param {boolean} [options.delay] - Delay root suite execution?
 * @param {boolean} [options.diff] - Show diff on failure?
 * @param {boolean} [options.dryRun] - Report tests without running them?
 * @param {boolean} [options.passOnFailingTestSuite] - Fail test run if tests were failed?
 * @param {boolean} [options.failZero] - Fail test run if zero tests?
 * @param {string} [options.fgrep] - Test filter given string.
 * @param {boolean} [options.forbidOnly] - Tests marked `only` fail the suite?
 * @param {boolean} [options.forbidPending] - Pending tests fail the suite?
 * @param {boolean} [options.fullTrace] - Full stacktrace upon failure?
 * @param {string[]} [options.global] - Variables expected in global scope.
 * @param {RegExp|string} [options.grep] - Test filter given regular expression.
 * @param {boolean} [options.inlineDiffs] - Display inline diffs?
 * @param {boolean} [options.invert] - Invert test filter matches?
 * @param {boolean} [options.noHighlighting] - Disable syntax highlighting?
 * @param {string|constructor} [options.reporter] - Reporter name or constructor.
 * @param {Object} [options.reporterOption] - Reporter settings object.
 * @param {number} [options.retries] - Number of times to retry failed tests.
 * @param {number} [options.slow] - Slow threshold value.
 * @param {number|string} [options.timeout] - Timeout threshold value.
 * @param {string} [options.ui] - Interface name.
 * @param {boolean} [options.parallel] - Run jobs in parallel.
 * @param {number} [options.jobs] - Max number of worker processes for parallel runs.
 * @param {MochaRootHookObject} [options.rootHooks] - Hooks to bootstrap the root suite with.
 * @param {string[]} [options.require] - Pathname of `rootHooks` plugin for parallel runs.
 * @param {boolean} [options.isWorker] - Should be `true` if `Mocha` process is running in a worker process.
 */
function Mocha(options = {}) {
  options = {...mocharc, ...options};
  this.files = [];
  this.options = options;
  // root suite
  this.suite = new exports.Suite('', new exports.Context(), true);
  this._cleanReferencesAfterRun = true;
  this._state = mochaStates.INIT;

  this.grep(options.grep)
    .fgrep(options.fgrep)
    .ui(options.ui)
    .reporter(
      options.reporter,
      options.reporterOption || options.reporterOptions // for backwards compatibility
    )
    .slow(options.slow)
    .global(options.global);

  // this guard exists because Suite#timeout does not consider `undefined` to be valid input
  if (typeof options.timeout !== 'undefined') {
    this.timeout(options.timeout === false ? 0 : options.timeout);
  }

  if ('retries' in options) {
    this.retries(options.retries);
  }

  [
    'allowUncaught',
    'asyncOnly',
    'bail',
    'checkLeaks',
    'color',
    'delay',
    'diff',
    'dryRun',
    'passOnFailingTestSuite',
    'failZero',
    'forbidOnly',
    'forbidPending',
    'fullTrace',
    'inlineDiffs',
    'invert'
  ].forEach(function (opt) {
    if (options[opt]) {
      this[opt]();
    }
  }, this);

  if (options.rootHooks) {
    this.rootHooks(options.rootHooks);
  }

  /**
   * The class which we'll instantiate in {@link Mocha#run}.  Defaults to
   * {@link Runner} in serial mode; changes in parallel mode.
   * @memberof Mocha
   * @private
   */
  this._runnerClass = exports.Runner;

  /**
   * Whether or not to call {@link Mocha#loadFiles} implicitly when calling
   * {@link Mocha#run}.  If this is `true`, then it's up to the consumer to call
   * {@link Mocha#loadFiles} _or_ {@link Mocha#loadFilesAsync}.
   * @private
   * @memberof Mocha
   */
  this._lazyLoadFiles = false;

  /**
   * It's useful for a Mocha instance to know if it's running in a worker process.
   * We could derive this via other means, but it's helpful to have a flag to refer to.
   * @memberof Mocha
   * @private
   */
  this.isWorker = Boolean(options.isWorker);

  this.globalSetup(options.globalSetup)
    .globalTeardown(options.globalTeardown)
    .enableGlobalSetup(options.enableGlobalSetup)
    .enableGlobalTeardown(options.enableGlobalTeardown);

  if (
    options.parallel &&
    (typeof options.jobs === 'undefined' || options.jobs > 1)
  ) {
    debug('attempting to enable parallel mode');
    this.parallelMode(true);
  }
}

/**
 * Enables or disables bailing on the first failure.
 *
 * @public
 * @see [CLI option](../#-bail-b)
 * @param {boolean} [bail=true] - Whether to bail on first error.
 * @returns {Mocha} this
 * @chainable
 */
Mocha.prototype.bail = function (bail) {
  this.suite.bail(bail !== false);
  return this;
};

/**
 * @summary
 * Adds `file` to be loaded for execution.
 *
 * @description
 * Useful for generic setup code that must be included within test suite.
 *
 * @public
 * @see [CLI option](../#-file-filedirectoryglob)
 * @param {string} file - Pathname of file to be loaded.
 * @returns {Mocha} this
 * @chainable
 */
Mocha.prototype.addFile = function (file) {
  this.files.push(file);
  return this;
};

/**
 * Sets reporter to `reporter`, defaults to "spec".
 *
 * @public
 * @see [CLI option](../#-reporter-name-r-name)
 * @see [Reporters](../#reporters)
 * @param {String|Function} reporterName - Reporter name or constructor.
 * @param {Object} [reporterOptions] - Options used to configure the reporter.
 * @returns {Mocha} this
 * @chainable
 * @throws {Error} if requested reporter cannot be loaded
 * @example
 *
 * // Use XUnit reporter and direct its output to file
 * mocha.reporter('xunit', { output: '/path/to/testspec.xunit.xml' });
 */
Mocha.prototype.reporter = function (reporterName, reporterOptions) {
  if (typeof reporterName === 'function') {
    this._reporter = reporterName;
  } else {
    reporterName = reporterName || 'spec';
    var reporter;
    // Try to load a built-in reporter.
    if (builtinReporters[reporterName]) {
      reporter = builtinReporters[reporterName];
    }
    // Try to load reporters from process.cwd() and node_modules
    if (!reporter) {
      let foundReporter;
      try {
        foundReporter = require.resolve(reporterName);
        reporter = require(foundReporter);
      } catch (err) {
        if (foundReporter) {
          throw createInvalidReporterError(err.message, foundReporter);
        }
        // Try to load reporters from a cwd-relative path
        try {
          reporter = require(path.resolve(reporterName));
        } catch (e) {
          throw createInvalidReporterError(e.message, reporterName);
        }
      }
    }
    this._reporter = reporter;
  }
  this.options.reporterOption = reporterOptions;
  // alias option name is used in built-in reporters xunit/tap/progress
  this.options.reporterOptions = reporterOptions;
  return this;
};

/**
 * Sets test UI `name`, defaults to "bdd".
 *
 * @public
 * @see [CLI option](../#-ui-name-u-name)
 * @see [Interface DSLs](../#interfaces)
 * @param {string|Function} [ui=bdd] - Interface name or class.
 * @returns {Mocha} this
 * @chainable
 * @throws {Error} if requested interface cannot be loaded
 */
Mocha.prototype.ui = function (ui) {
  var bindInterface;
  if (typeof ui === 'function') {
    bindInterface = ui;
  } else {
    ui = ui || 'bdd';
    bindInterface = exports.interfaces[ui];
    if (!bindInterface) {
      try {
        bindInterface = require(ui);
      } catch (err) {
        throw createInvalidInterfaceError(`invalid interface '${ui}'`, ui);
      }
    }
  }
  bindInterface(this.suite);

  this.suite.on(EVENT_FILE_PRE_REQUIRE, function (context) {
    currentContext = context;
  });

  return this;
};

/**
 * Loads `files` prior to execution. Does not support ES Modules.
 *
 * @description
 * The implementation relies on Node's `require` to execute
 * the test interface functions and will be subject to its cache.
 * Supports only CommonJS modules. To load ES modules, use Mocha#loadFilesAsync.
 *
 * @private
 * @see {@link Mocha#addFile}
 * @see {@link Mocha#run}
 * @see {@link Mocha#unloadFiles}
 * @see {@link Mocha#loadFilesAsync}
 * @param {Function} [fn] - Callback invoked upon completion.
 */
Mocha.prototype.loadFiles = function (fn) {
  var self = this;
  var suite = this.suite;
  this.files.forEach(function (file) {
    file = path.resolve(file);
    suite.emit(EVENT_FILE_PRE_REQUIRE, global, file, self);
    suite.emit(EVENT_FILE_REQUIRE, require(file), file, self);
    suite.emit(EVENT_FILE_POST_REQUIRE, global, file, self);
  });
  fn && fn();
};

/**
 * Loads `files` prior to execution. Supports Node ES Modules.
 *
 * @description
 * The implementation relies on Node's `require` and `import` to execute
 * the test interface functions and will be subject to its cache.
 * Supports both CJS and ESM modules.
 *
 * @public
 * @see {@link Mocha#addFile}
 * @see {@link Mocha#run}
 * @see {@link Mocha#unloadFiles}
 * @param {Object} [options] - Settings object.
 * @param {Function} [options.esmDecorator] - Function invoked on esm module name right before importing it. By default will passthrough as is.
 * @returns {Promise}
 * @example
 *
 * // loads ESM (and CJS) test files asynchronously, then runs root suite
 * mocha.loadFilesAsync()
 *   .then(() => mocha.run(failures => process.exitCode = failures ? 1 : 0))
 *   .catch(() => process.exitCode = 1);
 */
Mocha.prototype.loadFilesAsync = function ({esmDecorator} = {}) {
  var self = this;
  var suite = this.suite;
  this.lazyLoadFiles(true);

  return esmUtils.loadFilesAsync(
    this.files,
    function (file) {
      suite.emit(EVENT_FILE_PRE_REQUIRE, global, file, self);
    },
    function (file, resultModule) {
      suite.emit(EVENT_FILE_REQUIRE, resultModule, file, self);
      suite.emit(EVENT_FILE_POST_REQUIRE, global, file, self);
    },
    esmDecorator
  );
};

/**
 * Removes a previously loaded file from Node's `require` cache.
 *
 * @private
 * @static
 * @see {@link Mocha#unloadFiles}
 * @param {string} file - Pathname of file to be unloaded.
 */
Mocha.unloadFile = function (file) {
  if (utils.isBrowser()) {
    throw createUnsupportedError(
      'unloadFile() is only supported in a Node.js environment'
    );
  }
  return require('./nodejs/file-unloader').unloadFile(file);
};

/**
 * Unloads `files` from Node's `require` cache.
 *
 * @description
 * This allows required files to be "freshly" reloaded, providing the ability
 * to reuse a Mocha instance programmatically.
 * Note: does not clear ESM module files from the cache
 *
 * <strong>Intended for consumers &mdash; not used internally</strong>
 *
 * @public
 * @see {@link Mocha#run}
 * @returns {Mocha} this
 * @chainable
 */
Mocha.prototype.unloadFiles = function () {
  if (this._state === mochaStates.DISPOSED) {
    throw createMochaInstanceAlreadyDisposedError(
      'Mocha instance is already disposed, it cannot be used again.',
      this._cleanReferencesAfterRun,
      this
    );
  }

  this.files.forEach(function (file) {
    Mocha.unloadFile(file);
  });
  this._state = mochaStates.INIT;
  return this;
};

/**
 * Sets `grep` filter after escaping RegExp special characters.
 *
 * @public
 * @see {@link Mocha#grep}
 * @param {string} str - Value to be converted to a regexp.
 * @returns {Mocha} this
 * @chainable
 * @example
 *
 * // Select tests whose full title begins with `"foo"` followed by a period
 * mocha.fgrep('foo.');
 */
Mocha.prototype.fgrep = function (str) {
  if (!str) {
    return this;
  }
  return this.grep(new RegExp(escapeRe(str)));
};

/**
 * @summary
 * Sets `grep` filter used to select specific tests for execution.
 *
 * @description
 * If `re` is a regexp-like string, it will be converted to regexp.
 * The regexp is tested against the full title of each test (i.e., the
 * name of the test preceded by titles of each its ancestral suites).
 * As such, using an <em>exact-match</em> fixed pattern against the
 * test name itself will not yield any matches.
 * <br>
 * <strong>Previous filter value will be overwritten on each call!</strong>
 *
 * @public
 * @see [CLI option](../#-grep-regexp-g-regexp)
 * @see {@link Mocha#fgrep}
 * @see {@link Mocha#invert}
 * @param {RegExp|String} re - Regular expression used to select tests.
 * @return {Mocha} this
 * @chainable
 * @example
 *
 * // Select tests whose full title contains `"match"`, ignoring case
 * mocha.grep(/match/i);
 * @example
 *
 * // Same as above but with regexp-like string argument
 * mocha.grep('/match/i');
 * @example
 *
 * // ## Anti-example
 * // Given embedded test `it('only-this-test')`...
 * mocha.grep('/^only-this-test$/');    // NO! Use `.only()` to do this!
 */
Mocha.prototype.grep = function (re) {
  if (utils.isString(re)) {
    // extract args if it's regex-like, i.e: [string, pattern, flag]
    var arg = re.match(/^\/(.*)\/([gimy]{0,4})$|.*/);
    this.options.grep = new RegExp(arg[1] || arg[0], arg[2]);
  } else {
    this.options.grep = re;
  }
  return this;
};

/**
 * Inverts `grep` matches.
 *
 * @public
 * @see {@link Mocha#grep}
 * @return {Mocha} this
 * @chainable
 * @example
 *
 * // Select tests whose full title does *not* contain `"match"`, ignoring case
 * mocha.grep(/match/i).invert();
 */
Mocha.prototype.invert = function () {
  this.options.invert = true;
  return this;
};

/**
 * Enables or disables checking for global variables leaked while running tests.
 *
 * @public
 * @see [CLI option](../#-check-leaks)
 * @param {boolean} [checkLeaks=true] - Whether to check for global variable leaks.
 * @return {Mocha} this
 * @chainable
 */
Mocha.prototype.checkLeaks = function (checkLeaks) {
  this.options.checkLeaks = checkLeaks !== false;
  return this;
};

/**
 * Enables or disables whether or not to dispose after each test run.
 * Disable this to ensure you can run the test suite multiple times.
 * If disabled, be sure to dispose mocha when you're done to prevent memory leaks.
 * @public
 * @see {@link Mocha#dispose}
 * @param {boolean} cleanReferencesAfterRun
 * @return {Mocha} this
 * @chainable
 */
Mocha.prototype.cleanReferencesAfterRun = function (cleanReferencesAfterRun) {
  this._cleanReferencesAfterRun = cleanReferencesAfterRun !== false;
  return this;
};

/**
 * Manually dispose this mocha instance. Mark this instance as `disposed` and unable to run more tests.
 * It also removes function references to tests functions and hooks, so variables trapped in closures can be cleaned by the garbage collector.
 * @public
 */
Mocha.prototype.dispose = function () {
  if (this._state === mochaStates.RUNNING) {
    throw createMochaInstanceAlreadyRunningError(
      'Cannot dispose while the mocha instance is still running tests.'
    );
  }
  this.unloadFiles();
  this._previousRunner && this._previousRunner.dispose();
  this.suite.dispose();
  this._state = mochaStates.DISPOSED;
};

/**
 * Displays full stack trace upon test failure.
 *
 * @public
 * @see [CLI option](../#-full-trace)
 * @param {boolean} [fullTrace=true] - Whether to print full stacktrace upon failure.
 * @return {Mocha} this
 * @chainable
 */
Mocha.prototype.fullTrace = function (fullTrace) {
  this.options.fullTrace = fullTrace !== false;
  return this;
};

/**
 * Specifies whitelist of variable names to be expected in global scope.
 *
 * @public
 * @see [CLI option](../#-global-variable-name)
 * @see {@link Mocha#checkLeaks}
 * @param {String[]|String} global - Accepted global variable name(s).
 * @return {Mocha} this
 * @chainable
 * @example
 *
 * // Specify variables to be expected in global scope
 * mocha.global(['jQuery', 'MyLib']);
 */
Mocha.prototype.global = function (global) {
  this.options.global = (this.options.global || [])
    .concat(global)
    .filter(Boolean)
    .filter(function (elt, idx, arr) {
      return arr.indexOf(elt) === idx;
    });
  return this;
};
// for backwards compatibility, 'globals' is an alias of 'global'
Mocha.prototype.globals = Mocha.prototype.global;

/**
 * Enables or disables TTY color output by screen-oriented reporters.
 *
 * @public
 * @see [CLI option](../#-color-c-colors)
 * @param {boolean} [color=true] - Whether to enable color output.
 * @return {Mocha} this
 * @chainable
 */
Mocha.prototype.color = function (color) {
  this.options.color = color !== false;
  return this;
};

/**
 * Enables or disables reporter to use inline diffs (rather than +/-)
 * in test failure output.
 *
 * @public
 * @see [CLI option](../#-inline-diffs)
 * @param {boolean} [inlineDiffs=true] - Whether to use inline diffs.
 * @return {Mocha} this
 * @chainable
 */
Mocha.prototype.inlineDiffs = function (inlineDiffs) {
  this.options.inlineDiffs = inlineDiffs !== false;
  return this;
};

/**
 * Enables or disables reporter to include diff in test failure output.
 *
 * @public
 * @see [CLI option](../#-diff)
 * @param {boolean} [diff=true] - Whether to show diff on failure.
 * @return {Mocha} this
 * @chainable
 */
Mocha.prototype.diff = function (diff) {
  this.options.diff = diff !== false;
  return this;
};

/**
 * @summary
 * Sets timeout threshold value.
 *
 * @description
 * A string argument can use shorthand (such as "2s") and will be converted.
 * If the value is `0`, timeouts will be disabled.
 *
 * @public
 * @see [CLI option](../#-timeout-ms-t-ms)
 * @see [Timeouts](../#timeouts)
 * @param {number|string} msecs - Timeout threshold value.
 * @return {Mocha} this
 * @chainable
 * @example
 *
 * // Sets timeout to one second
 * mocha.timeout(1000);
 * @example
 *
 * // Same as above but using string argument
 * mocha.timeout('1s');
 */
Mocha.prototype.timeout = function (msecs) {
  this.suite.timeout(msecs);
  return this;
};

/**
 * Sets the number of times to retry failed tests.
 *
 * @public
 * @see [CLI option](../#-retries-n)
 * @see [Retry Tests](../#retry-tests)
 * @param {number} retry - Number of times to retry failed tests.
 * @return {Mocha} this
 * @chainable
 * @example
 *
 * // Allow any failed test to retry one more time
 * mocha.retries(1);
 */
Mocha.prototype.retries = function (retry) {
  this.suite.retries(retry);
  return this;
};

/**
 * Sets slowness threshold value.
 *
 * @public
 * @see [CLI option](../#-slow-ms-s-ms)
 * @param {number} msecs - Slowness threshold value.
 * @return {Mocha} this
 * @chainable
 * @example
 *
 * // Sets "slow" threshold to half a second
 * mocha.slow(500);
 * @example
 *
 * // Same as above but using string argument
 * mocha.slow('0.5s');
 */
Mocha.prototype.slow = function (msecs) {
  this.suite.slow(msecs);
  return this;
};

/**
 * Forces all tests to either accept a `done` callback or return a promise.
 *
 * @public
 * @see [CLI option](../#-async-only-a)
 * @param {boolean} [asyncOnly=true] - Whether to force `done` callback or promise.
 * @return {Mocha} this
 * @chainable
 */
Mocha.prototype.asyncOnly = function (asyncOnly) {
  this.options.asyncOnly = asyncOnly !== false;
  return this;
};

/**
 * Disables syntax highlighting (in browser).
 *
 * @public
 * @return {Mocha} this
 * @chainable
 */
Mocha.prototype.noHighlighting = function () {
  this.options.noHighlighting = true;
  return this;
};

/**
 * Enables or disables uncaught errors to propagate.
 *
 * @public
 * @see [CLI option](../#-allow-uncaught)
 * @param {boolean} [allowUncaught=true] - Whether to propagate uncaught errors.
 * @return {Mocha} this
 * @chainable
 */
Mocha.prototype.allowUncaught = function (allowUncaught) {
  this.options.allowUncaught = allowUncaught !== false;
  return this;
};

/**
 * @summary
 * Delays root suite execution.
 *
 * @description
 * Used to perform async operations before any suites are run.
 *
 * @public
 * @see [delayed root suite](../#delayed-root-suite)
 * @returns {Mocha} this
 * @chainable
 */
Mocha.prototype.delay = function delay() {
  this.options.delay = true;
  return this;
};

/**
 * Enables or disables running tests in dry-run mode.
 *
 * @public
 * @see [CLI option](../#-dry-run)
 * @param {boolean} [dryRun=true] - Whether to activate dry-run mode.
 * @return {Mocha} this
 * @chainable
 */
Mocha.prototype.dryRun = function (dryRun) {
  this.options.dryRun = dryRun !== false;
  return this;
};

/**
 * Fails test run if no tests encountered with exit-code 1.
 *
 * @public
 * @see [CLI option](../#-fail-zero)
 * @param {boolean} [failZero=true] - Whether to fail test run.
 * @return {Mocha} this
 * @chainable
 */
Mocha.prototype.failZero = function (failZero) {
  this.options.failZero = failZero !== false;
  return this;
};

/**
 * Fail test run if tests were failed.
 *
 * @public
 * @see [CLI option](../#-pass-on-failing-test-suite)
 * @param {boolean} [passOnFailingTestSuite=false] - Whether to fail test run.
 * @return {Mocha} this
 * @chainable
 */
Mocha.prototype.passOnFailingTestSuite = function(passOnFailingTestSuite) {
  this.options.passOnFailingTestSuite = passOnFailingTestSuite === true;
  return this;
};

/**
 * Causes tests marked `only` to fail the suite.
 *
 * @public
 * @see [CLI option](../#-forbid-only)
 * @param {boolean} [forbidOnly=true] - Whether tests marked `only` fail the suite.
 * @returns {Mocha} this
 * @chainable
 */
Mocha.prototype.forbidOnly = function (forbidOnly) {
  this.options.forbidOnly = forbidOnly !== false;
  return this;
};

/**
 * Causes pending tests and tests marked `skip` to fail the suite.
 *
 * @public
 * @see [CLI option](../#-forbid-pending)
 * @param {boolean} [forbidPending=true] - Whether pending tests fail the suite.
 * @returns {Mocha} this
 * @chainable
 */
Mocha.prototype.forbidPending = function (forbidPending) {
  this.options.forbidPending = forbidPending !== false;
  return this;
};

/**
 * Throws an error if mocha is in the wrong state to be able to transition to a "running" state.
 * @private
 */
Mocha.prototype._guardRunningStateTransition = function () {
  if (this._state === mochaStates.RUNNING) {
    throw createMochaInstanceAlreadyRunningError(
      'Mocha instance is currently running tests, cannot start a next test run until this one is done',
      this
    );
  }
  if (
    this._state === mochaStates.DISPOSED ||
    this._state === mochaStates.REFERENCES_CLEANED
  ) {
    throw createMochaInstanceAlreadyDisposedError(
      'Mocha instance is already disposed, cannot start a new test run. Please create a new mocha instance. Be sure to set disable `cleanReferencesAfterRun` when you want to reuse the same mocha instance for multiple test runs.',
      this._cleanReferencesAfterRun,
      this
    );
  }
};

/**
 * Mocha version as specified by "package.json".
 *
 * @name Mocha#version
 * @type string
 * @readonly
 */
Object.defineProperty(Mocha.prototype, 'version', {
  value: require('../package.json').version,
  configurable: false,
  enumerable: true,
  writable: false
});

/**
 * Callback to be invoked when test execution is complete.
 *
 * @private
 * @callback DoneCB
 * @param {number} failures - Number of failures that occurred.
 */

/**
 * Runs root suite and invokes `fn()` when complete.
 *
 * @description
 * To run tests multiple times (or to run tests in files that are
 * already in the `require` cache), make sure to clear them from
 * the cache first!
 *
 * @public
 * @see {@link Mocha#unloadFiles}
 * @see {@link Runner#run}
 * @param {DoneCB} [fn] - Callback invoked when test execution completed.
 * @returns {Runner} runner instance
 * @example
 *
 * // exit with non-zero status if there were test failures
 * mocha.run(failures => process.exitCode = failures ? 1 : 0);
 */
Mocha.prototype.run = function (fn) {
  this._guardRunningStateTransition();
  this._state = mochaStates.RUNNING;
  if (this._previousRunner) {
    this._previousRunner.dispose();
    this.suite.reset();
  }
  if (this.files.length && !this._lazyLoadFiles) {
    this.loadFiles();
  }
  var suite = this.suite;
  var options = this.options;
  options.files = this.files;
  const runner = new this._runnerClass(suite, {
    cleanReferencesAfterRun: this._cleanReferencesAfterRun,
    delay: options.delay,
    dryRun: options.dryRun,
    failZero: options.failZero
  });
  createStatsCollector(runner);
  var reporter = new this._reporter(runner, options);
  runner.checkLeaks = options.checkLeaks === true;
  runner.fullStackTrace = options.fullTrace;
  runner.asyncOnly = options.asyncOnly;
  runner.allowUncaught = options.allowUncaught;
  runner.forbidOnly = options.forbidOnly;
  runner.forbidPending = options.forbidPending;
  if (options.grep) {
    runner.grep(options.grep, options.invert);
  }
  if (options.global) {
    runner.globals(options.global);
  }
  if (options.color !== undefined) {
    exports.reporters.Base.useColors = options.color;
  }
  exports.reporters.Base.inlineDiffs = options.inlineDiffs;
  exports.reporters.Base.hideDiff = !options.diff;

  const done = failures => {
    this._previousRunner = runner;
    this._state = this._cleanReferencesAfterRun
      ? mochaStates.REFERENCES_CLEANED
      : mochaStates.INIT;
    fn = fn || utils.noop;
    if (typeof reporter.done === 'function') {
      reporter.done(failures, fn);
    } else {
      fn(failures);
    }
  };

  const runAsync = async runner => {
    const context =
      this.options.enableGlobalSetup && this.hasGlobalSetupFixtures()
        ? await this.runGlobalSetup(runner)
        : {};
    const failureCount = await runner.runAsync({
      files: this.files,
      options
    });
    if (this.options.enableGlobalTeardown && this.hasGlobalTeardownFixtures()) {
      await this.runGlobalTeardown(runner, {context});
    }
    return failureCount;
  };

  // no "catch" here is intentional. errors coming out of
  // Runner#run are considered uncaught/unhandled and caught
  // by the `process` event listeners.
  // also: returning anything other than `runner` would be a breaking
  // change
  runAsync(runner).then(done);

  return runner;
};

/**
 * Assigns hooks to the root suite
 * @param {MochaRootHookObject} [hooks] - Hooks to assign to root suite
 * @chainable
 */
Mocha.prototype.rootHooks = function rootHooks({
  beforeAll = [],
  beforeEach = [],
  afterAll = [],
  afterEach = []
} = {}) {
  beforeAll = utils.castArray(beforeAll);
  beforeEach = utils.castArray(beforeEach);
  afterAll = utils.castArray(afterAll);
  afterEach = utils.castArray(afterEach);
  beforeAll.forEach(hook => {
    this.suite.beforeAll(hook);
  });
  beforeEach.forEach(hook => {
    this.suite.beforeEach(hook);
  });
  afterAll.forEach(hook => {
    this.suite.afterAll(hook);
  });
  afterEach.forEach(hook => {
    this.suite.afterEach(hook);
  });
  return this;
};

/**
 * Toggles parallel mode.
 *
 * Must be run before calling {@link Mocha#run}. Changes the `Runner` class to
 * use; also enables lazy file loading if not already done so.
 *
 * Warning: when passed `false` and lazy loading has been enabled _via any means_ (including calling `parallelMode(true)`), this method will _not_ disable lazy loading. Lazy loading is a prerequisite for parallel
 * mode, but parallel mode is _not_ a prerequisite for lazy loading!
 * @param {boolean} [enable] - If `true`, enable; otherwise disable.
 * @throws If run in browser
 * @throws If Mocha not in `INIT` state
 * @returns {Mocha}
 * @chainable
 * @public
 */
Mocha.prototype.parallelMode = function parallelMode(enable = true) {
  if (utils.isBrowser()) {
    throw createUnsupportedError('parallel mode is only supported in Node.js');
  }
  const parallel = Boolean(enable);
  if (
    parallel === this.options.parallel &&
    this._lazyLoadFiles &&
    this._runnerClass !== exports.Runner
  ) {
    return this;
  }
  if (this._state !== mochaStates.INIT) {
    throw createUnsupportedError(
      'cannot change parallel mode after having called run()'
    );
  }
  this.options.parallel = parallel;

  // swap Runner class
  this._runnerClass = parallel
    ? require('./nodejs/parallel-buffered-runner')
    : exports.Runner;

  // lazyLoadFiles may have been set `true` otherwise (for ESM loading),
  // so keep `true` if so.
  return this.lazyLoadFiles(this._lazyLoadFiles || parallel);
};

/**
 * Disables implicit call to {@link Mocha#loadFiles} in {@link Mocha#run}. This
 * setting is used by watch mode, parallel mode, and for loading ESM files.
 * @todo This should throw if we've already loaded files; such behavior
 * necessitates adding a new state.
 * @param {boolean} [enable] - If `true`, disable eager loading of files in
 * {@link Mocha#run}
 * @chainable
 * @public
 */
Mocha.prototype.lazyLoadFiles = function lazyLoadFiles(enable) {
  this._lazyLoadFiles = enable === true;
  debug('set lazy load to %s', enable);
  return this;
};

/**
 * Configures one or more global setup fixtures.
 *
 * If given no parameters, _unsets_ any previously-set fixtures.
 * @chainable
 * @public
 * @param {MochaGlobalFixture|MochaGlobalFixture[]} [setupFns] - Global setup fixture(s)
 * @returns {Mocha}
 */
Mocha.prototype.globalSetup = function globalSetup(setupFns = []) {
  setupFns = utils.castArray(setupFns);
  this.options.globalSetup = setupFns;
  debug('configured %d global setup functions', setupFns.length);
  return this;
};

/**
 * Configures one or more global teardown fixtures.
 *
 * If given no parameters, _unsets_ any previously-set fixtures.
 * @chainable
 * @public
 * @param {MochaGlobalFixture|MochaGlobalFixture[]} [teardownFns] - Global teardown fixture(s)
 * @returns {Mocha}
 */
Mocha.prototype.globalTeardown = function globalTeardown(teardownFns = []) {
  teardownFns = utils.castArray(teardownFns);
  this.options.globalTeardown = teardownFns;
  debug('configured %d global teardown functions', teardownFns.length);
  return this;
};

/**
 * Run any global setup fixtures sequentially, if any.
 *
 * This is _automatically called_ by {@link Mocha#run} _unless_ the `runGlobalSetup` option is `false`; see {@link Mocha#enableGlobalSetup}.
 *
 * The context object this function resolves with should be consumed by {@link Mocha#runGlobalTeardown}.
 * @param {object} [context] - Context object if already have one
 * @public
 * @returns {Promise<object>} Context object
 */
Mocha.prototype.runGlobalSetup = async function runGlobalSetup(context = {}) {
  const {globalSetup} = this.options;
  if (globalSetup && globalSetup.length) {
    debug('run(): global setup starting');
    await this._runGlobalFixtures(globalSetup, context);
    debug('run(): global setup complete');
  }
  return context;
};

/**
 * Run any global teardown fixtures sequentially, if any.
 *
 * This is _automatically called_ by {@link Mocha#run} _unless_ the `runGlobalTeardown` option is `false`; see {@link Mocha#enableGlobalTeardown}.
 *
 * Should be called with context object returned by {@link Mocha#runGlobalSetup}, if applicable.
 * @param {object} [context] - Context object if already have one
 * @public
 * @returns {Promise<object>} Context object
 */
Mocha.prototype.runGlobalTeardown = async function runGlobalTeardown(
  context = {}
) {
  const {globalTeardown} = this.options;
  if (globalTeardown && globalTeardown.length) {
    debug('run(): global teardown starting');
    await this._runGlobalFixtures(globalTeardown, context);
  }
  debug('run(): global teardown complete');
  return context;
};

/**
 * Run global fixtures sequentially with context `context`
 * @private
 * @param {MochaGlobalFixture[]} [fixtureFns] - Fixtures to run
 * @param {object} [context] - context object
 * @returns {Promise<object>} context object
 */
Mocha.prototype._runGlobalFixtures = async function _runGlobalFixtures(
  fixtureFns = [],
  context = {}
) {
  for await (const fixtureFn of fixtureFns) {
    await fixtureFn.call(context);
  }
  return context;
};

/**
 * Toggle execution of any global setup fixture(s)
 *
 * @chainable
 * @public
 * @param {boolean } [enabled=true] - If `false`, do not run global setup fixture
 * @returns {Mocha}
 */
Mocha.prototype.enableGlobalSetup = function enableGlobalSetup(enabled = true) {
  this.options.enableGlobalSetup = Boolean(enabled);
  return this;
};

/**
 * Toggle execution of any global teardown fixture(s)
 *
 * @chainable
 * @public
 * @param {boolean } [enabled=true] - If `false`, do not run global teardown fixture
 * @returns {Mocha}
 */
Mocha.prototype.enableGlobalTeardown = function enableGlobalTeardown(
  enabled = true
) {
  this.options.enableGlobalTeardown = Boolean(enabled);
  return this;
};

/**
 * Returns `true` if one or more global setup fixtures have been supplied.
 * @public
 * @returns {boolean}
 */
Mocha.prototype.hasGlobalSetupFixtures = function hasGlobalSetupFixtures() {
  return Boolean(this.options.globalSetup.length);
};

/**
 * Returns `true` if one or more global teardown fixtures have been supplied.
 * @public
 * @returns {boolean}
 */
Mocha.prototype.hasGlobalTeardownFixtures =
  function hasGlobalTeardownFixtures() {
    return Boolean(this.options.globalTeardown.length);
  };

/**
 * An alternative way to define root hooks that works with parallel runs.
 * @typedef {Object} MochaRootHookObject
 * @property {Function|Function[]} [beforeAll] - "Before all" hook(s)
 * @property {Function|Function[]} [beforeEach] - "Before each" hook(s)
 * @property {Function|Function[]} [afterAll] - "After all" hook(s)
 * @property {Function|Function[]} [afterEach] - "After each" hook(s)
 */

/**
 * An function that returns a {@link MochaRootHookObject}, either sync or async.
   @callback MochaRootHookFunction
 * @returns {MochaRootHookObject|Promise<MochaRootHookObject>}
 */

/**
 * A function that's invoked _once_ which is either sync or async.
 * Can be a "teardown" or "setup".  These will all share the same context.
 * @callback MochaGlobalFixture
 * @returns {void|Promise<void>}
 */

/**
 * An object making up all necessary parts of a plugin loader and aggregator
 * @typedef {Object} PluginDefinition
 * @property {string} exportName - Named export to use
 * @property {string} [optionName] - Option name for Mocha constructor (use `exportName` if omitted)
 * @property {PluginValidator} [validate] - Validator function
 * @property {PluginFinalizer} [finalize] - Finalizer/aggregator function
 */

/**
 * A (sync) function to assert a user-supplied plugin implementation is valid.
 *
 * Defined in a {@link PluginDefinition}.

 * @callback PluginValidator
 * @param {*} value - Value to check
 * @this {PluginDefinition}
 * @returns {void}
 */

/**
 * A function to finalize plugins impls of a particular ilk
 * @callback PluginFinalizer
 * @param {Array<*>} impls - User-supplied implementations
 * @returns {Promise<*>|*}
 */
