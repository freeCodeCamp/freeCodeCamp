'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _jestMessageUtil;

function _load_jestMessageUtil() {
  return _jestMessageUtil = require('jest-message-util');
}

var _test_result_helpers;

function _load_test_result_helpers() {
  return _test_result_helpers = require('./test_result_helpers');
}

var _coverage_reporter;

function _load_coverage_reporter() {
  return _coverage_reporter = _interopRequireDefault(require('./reporters/coverage_reporter'));
}

var _default_reporter;

function _load_default_reporter() {
  return _default_reporter = _interopRequireDefault(require('./reporters/default_reporter'));
}

var _exit;

function _load_exit() {
  return _exit = _interopRequireDefault(require('exit'));
}

var _notify_reporter;

function _load_notify_reporter() {
  return _notify_reporter = _interopRequireDefault(require('./reporters/notify_reporter'));
}

var _reporter_dispatcher;

function _load_reporter_dispatcher() {
  return _reporter_dispatcher = _interopRequireDefault(require('./reporter_dispatcher'));
}

var _jestSnapshot;

function _load_jestSnapshot() {
  return _jestSnapshot = _interopRequireDefault(require('jest-snapshot'));
}

var _summary_reporter;

function _load_summary_reporter() {
  return _summary_reporter = _interopRequireDefault(require('./reporters/summary_reporter'));
}

var _jestRunner;

function _load_jestRunner() {
  return _jestRunner = _interopRequireDefault(require('jest-runner'));
}

var _test_watcher;

function _load_test_watcher() {
  return _test_watcher = _interopRequireDefault(require('./test_watcher'));
}

var _verbose_reporter;

function _load_verbose_reporter() {
  return _verbose_reporter = _interopRequireDefault(require('./reporters/verbose_reporter'));
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

const SLOW_TEST_TIME = 3000;

// The default jest-runner is required because it is the default test runner
// and required implicitly through the `runner` ProjectConfig option.
(_jestRunner || _load_jestRunner()).default;

class TestScheduler {

  constructor(globalConfig, options, context) {
    this._dispatcher = new (_reporter_dispatcher || _load_reporter_dispatcher()).default();
    this._globalConfig = globalConfig;
    this._options = options;
    this._context = context;
    this._setupReporters();
  }

  addReporter(reporter) {
    this._dispatcher.register(reporter);
  }

  removeReporter(ReporterClass) {
    this._dispatcher.unregister(ReporterClass);
  }

  scheduleTests(tests, watcher) {
    var _this = this;

    return _asyncToGenerator(function* () {
      const onStart = _this._dispatcher.onTestStart.bind(_this._dispatcher);
      const timings = [];
      const contexts = new Set();
      tests.forEach(function (test) {
        contexts.add(test.context);
        if (test.duration) {
          timings.push(test.duration);
        }
      });

      const aggregatedResults = createAggregatedResults(tests.length);
      const estimatedTime = Math.ceil(getEstimatedTime(timings, _this._globalConfig.maxWorkers) / 1000);

      // Run in band if we only have one test or one worker available.
      // If we are confident from previous runs that the tests will finish quickly
      // we also run in band to reduce the overhead of spawning workers.
      const runInBand = _this._globalConfig.maxWorkers <= 1 || tests.length <= 1 || tests.length <= 20 && timings.length > 0 && timings.every(function (timing) {
        return timing < SLOW_TEST_TIME;
      });

      const onResult = (() => {
        var _ref = _asyncToGenerator(function* (test, testResult) {
          if (watcher.isInterrupted()) {
            return Promise.resolve();
          }

          if (testResult.testResults.length === 0) {
            const message = 'Your test suite must contain at least one test.';

            return onFailure(test, {
              message,
              stack: new Error(message).stack
            });
          }

          // Throws when the context is leaked after executinga test.
          if (testResult.leaks) {
            const message = (_chalk || _load_chalk()).default.red.bold('EXPERIMENTAL FEATURE!\n') + 'Your test suite is leaking memory. Please ensure all references are cleaned.\n' + '\n' + 'There is a number of things that can leak memory:\n' + '  - Async operations that have not finished (e.g. fs.readFile).\n' + '  - Timers not properly mocked (e.g. setInterval, setTimeout).\n' + '  - Keeping references to the global scope.';

            return onFailure(test, {
              message,
              stack: new Error(message).stack
            });
          }

          (0, (_test_result_helpers || _load_test_result_helpers()).addResult)(aggregatedResults, testResult);
          yield _this._dispatcher.onTestResult(test, testResult, aggregatedResults);
          return _this._bailIfNeeded(contexts, aggregatedResults, watcher);
        });

        return function onResult(_x, _x2) {
          return _ref.apply(this, arguments);
        };
      })();

      const onFailure = (() => {
        var _ref2 = _asyncToGenerator(function* (test, error) {
          if (watcher.isInterrupted()) {
            return;
          }
          const testResult = (0, (_test_result_helpers || _load_test_result_helpers()).buildFailureTestResult)(test.path, error);
          testResult.failureMessage = (0, (_jestMessageUtil || _load_jestMessageUtil()).formatExecError)(testResult, test.context.config, _this._globalConfig, test.path);
          (0, (_test_result_helpers || _load_test_result_helpers()).addResult)(aggregatedResults, testResult);
          yield _this._dispatcher.onTestResult(test, testResult, aggregatedResults);
        });

        return function onFailure(_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      })();

      const updateSnapshotState = function () {
        contexts.forEach(function (context) {
          const status = (_jestSnapshot || _load_jestSnapshot()).default.cleanup(context.hasteFS, _this._globalConfig.updateSnapshot);

          aggregatedResults.snapshot.filesRemoved += status.filesRemoved;
        });
        const updateAll = _this._globalConfig.updateSnapshot === 'all';
        aggregatedResults.snapshot.didUpdate = updateAll;
        aggregatedResults.snapshot.failure = !!(!updateAll && (aggregatedResults.snapshot.unchecked || aggregatedResults.snapshot.unmatched || aggregatedResults.snapshot.filesRemoved));
      };

      yield _this._dispatcher.onRunStart(aggregatedResults, {
        estimatedTime,
        showStatus: !runInBand
      });

      const testRunners = Object.create(null);
      contexts.forEach(function (_ref3) {
        let config = _ref3.config;

        if (!testRunners[config.runner]) {
          // $FlowFixMe
          testRunners[config.runner] = new (require(config.runner))(_this._globalConfig);
        }
      });

      const testsByRunner = _this._partitionTests(testRunners, tests);

      if (testsByRunner) {
        try {
          for (const runner of Object.keys(testRunners)) {
            yield testRunners[runner].runTests(testsByRunner[runner], watcher, onStart, onResult, onFailure, {
              serial: runInBand
            });
          }
        } catch (error) {
          if (!watcher.isInterrupted()) {
            throw error;
          }
        }
      }

      updateSnapshotState();
      aggregatedResults.wasInterrupted = watcher.isInterrupted();
      yield _this._dispatcher.onRunComplete(contexts, aggregatedResults);

      const anyTestFailures = !(aggregatedResults.numFailedTests === 0 && aggregatedResults.numRuntimeErrorTestSuites === 0);
      const anyReporterErrors = _this._dispatcher.hasErrors();

      aggregatedResults.success = !(anyTestFailures || aggregatedResults.snapshot.failure || anyReporterErrors);

      return aggregatedResults;
    })();
  }

  _partitionTests(testRunners, tests) {
    if (Object.keys(testRunners).length > 1) {
      return tests.reduce((testRuns, test) => {
        const runner = test.context.config.runner;
        if (!testRuns[runner]) {
          testRuns[runner] = [];
        }
        testRuns[runner].push(test);
        return testRuns;
      }, Object.create(null));
    } else if (tests.length > 0 && tests[0] != null) {
      // If there is only one runner, don't partition the tests.
      return Object.assign(Object.create(null), {
        [tests[0].context.config.runner]: tests
      });
    } else {
      return null;
    }
  }

  _shouldAddDefaultReporters(reporters) {
    return !reporters || !!reporters.find(reporterConfig => reporterConfig[0] === 'default');
  }

  _setupReporters() {
    var _globalConfig = this._globalConfig;
    const collectCoverage = _globalConfig.collectCoverage,
          notify = _globalConfig.notify,
          reporters = _globalConfig.reporters;

    const isDefault = this._shouldAddDefaultReporters(reporters);

    if (isDefault) {
      this._setupDefaultReporters(collectCoverage);
    }

    if (!isDefault && collectCoverage) {
      this.addReporter(new (_coverage_reporter || _load_coverage_reporter()).default(this._globalConfig));
    }

    if (notify) {
      this.addReporter(new (_notify_reporter || _load_notify_reporter()).default(this._globalConfig, this._options.startRun, this._context));
    }

    if (reporters && Array.isArray(reporters)) {
      this._addCustomReporters(reporters);
    }
  }

  _setupDefaultReporters(collectCoverage) {
    this.addReporter(this._globalConfig.verbose ? new (_verbose_reporter || _load_verbose_reporter()).default(this._globalConfig) : new (_default_reporter || _load_default_reporter()).default(this._globalConfig));

    if (collectCoverage) {
      this.addReporter(new (_coverage_reporter || _load_coverage_reporter()).default(this._globalConfig));
    }

    this.addReporter(new (_summary_reporter || _load_summary_reporter()).default(this._globalConfig));
  }

  _addCustomReporters(reporters) {
    const customReporters = reporters.filter(reporterConfig => reporterConfig[0] !== 'default');

    customReporters.forEach((reporter, index) => {
      var _getReporterProps = this._getReporterProps(reporter);

      const options = _getReporterProps.options,
            path = _getReporterProps.path;


      try {
        // $FlowFixMe
        const Reporter = require(path);
        this.addReporter(new Reporter(this._globalConfig, options));
      } catch (error) {
        throw new Error('An error occurred while adding the reporter at path "' + path + '".' + error.message);
      }
    });
  }

  /**
   * Get properties of a reporter in an object
   * to make dealing with them less painful.
   */
  _getReporterProps(reporter) {
    if (typeof reporter === 'string') {
      return { options: this._options, path: reporter };
    } else if (Array.isArray(reporter)) {
      var _reporter = _slicedToArray(reporter, 2);

      const path = _reporter[0],
            options = _reporter[1];

      return { options, path };
    }

    throw new Error('Reporter should be either a string or an array');
  }

  _bailIfNeeded(contexts, aggregatedResults, watcher) {
    if (this._globalConfig.bail && aggregatedResults.numFailedTests !== 0) {
      if (watcher.isWatchMode()) {
        watcher.setState({ interrupted: true });
      } else {
        const failureExit = () => (0, (_exit || _load_exit()).default)(1);

        return this._dispatcher.onRunComplete(contexts, aggregatedResults).then(failureExit).catch(failureExit);
      }
    }
    return Promise.resolve();
  }
}

exports.default = TestScheduler;
const createAggregatedResults = numTotalTestSuites => {
  const result = (0, (_test_result_helpers || _load_test_result_helpers()).makeEmptyAggregatedTestResult)();
  result.numTotalTestSuites = numTotalTestSuites;
  result.startTime = Date.now();
  result.success = false;
  return result;
};

const getEstimatedTime = (timings, workers) => {
  if (!timings.length) {
    return 0;
  }

  const max = Math.max.apply(null, timings);
  return timings.length <= workers ? max : Math.max(timings.reduce((sum, time) => sum + time) / workers, max);
};