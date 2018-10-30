'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk;

function _load_chalk() {
  return _chalk = _interopRequireDefault(require('chalk'));
}

var _path;

function _load_path() {
  return _path = _interopRequireDefault(require('path'));
}

var _jestUtil;

function _load_jestUtil() {
  return _jestUtil = require('jest-util');
}

var _exit;

function _load_exit() {
  return _exit = _interopRequireDefault(require('exit'));
}

var _gracefulFs;

function _load_gracefulFs() {
  return _gracefulFs = _interopRequireDefault(require('graceful-fs'));
}

var _get_no_test_found_message;

function _load_get_no_test_found_message() {
  return _get_no_test_found_message = _interopRequireDefault(require('./get_no_test_found_message'));
}

var _search_source;

function _load_search_source() {
  return _search_source = _interopRequireDefault(require('./search_source'));
}

var _test_scheduler;

function _load_test_scheduler() {
  return _test_scheduler = _interopRequireDefault(require('./test_scheduler'));
}

var _test_sequencer;

function _load_test_sequencer() {
  return _test_sequencer = _interopRequireDefault(require('./test_sequencer'));
}

var _test_result_helpers;

function _load_test_result_helpers() {
  return _test_result_helpers = require('./test_result_helpers');
}

var _failed_tests_cache;

function _load_failed_tests_cache() {
  return _failed_tests_cache = _interopRequireDefault(require('./failed_tests_cache'));
}

var _jest_hooks;

function _load_jest_hooks() {
  return _jest_hooks = _interopRequireDefault(require('./jest_hooks'));
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

const setConfig = (contexts, newConfig) => contexts.forEach(context => context.config = Object.freeze(Object.assign({}, context.config, newConfig)));

const getTestPaths = (() => {
  var _ref = _asyncToGenerator(function* (globalConfig, context, outputStream, changedFilesPromise, jestHooks) {
    const source = new (_search_source || _load_search_source()).default(context);
    const data = yield source.getTestPaths(globalConfig, changedFilesPromise);

    if (!data.tests.length && globalConfig.onlyChanged && data.noSCM) {
      new (_jestUtil || _load_jestUtil()).Console(outputStream, outputStream).log('Jest can only find uncommitted changed files in a git or hg ' + 'repository. If you make your project a git or hg ' + 'repository (`git init` or `hg init`), Jest will be able ' + 'to only run tests related to files changed since the last ' + 'commit.');
    }

    const shouldTestArray = yield Promise.all(data.tests.map(function (test) {
      return jestHooks.shouldRunTestSuite(test.path);
    }));

    const filteredTests = data.tests.filter(function (test, i) {
      return shouldTestArray[i];
    });

    return Object.assign({}, data, {
      allTests: filteredTests.length,
      tests: filteredTests
    });
  });

  return function getTestPaths(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
})();

const processResults = (runResults, options) => {
  const outputFile = options.outputFile;

  if (options.testResultsProcessor) {
    /* $FlowFixMe */
    runResults = require(options.testResultsProcessor)(runResults);
  }
  if (options.isJSON) {
    if (outputFile) {
      const filePath = (_path || _load_path()).default.resolve(process.cwd(), outputFile);

      (_gracefulFs || _load_gracefulFs()).default.writeFileSync(filePath, JSON.stringify((0, (_jestUtil || _load_jestUtil()).formatTestResults)(runResults)));
      process.stdout.write(`Test results written to: ` + `${(_path || _load_path()).default.relative(process.cwd(), filePath)}\n`);
    } else {
      process.stdout.write(JSON.stringify((0, (_jestUtil || _load_jestUtil()).formatTestResults)(runResults)));
    }
  }
  return options.onComplete && options.onComplete(runResults);
};

const testSchedulerContext = {
  firstRun: true,
  previousSuccess: true
};

exports.default = (() => {
  var _ref3 = _asyncToGenerator(function* (_ref2) {
    let contexts = _ref2.contexts,
        globalConfig = _ref2.globalConfig,
        outputStream = _ref2.outputStream,
        testWatcher = _ref2.testWatcher;
    var _ref2$jestHooks = _ref2.jestHooks;
    let jestHooks = _ref2$jestHooks === undefined ? new (_jest_hooks || _load_jest_hooks()).default().getEmitter() : _ref2$jestHooks,
        startRun = _ref2.startRun,
        changedFilesPromise = _ref2.changedFilesPromise,
        onComplete = _ref2.onComplete,
        failedTestsCache = _ref2.failedTestsCache;

    const sequencer = new (_test_sequencer || _load_test_sequencer()).default();
    let allTests = [];

    if (changedFilesPromise && globalConfig.watch) {
      var _ref4 = yield changedFilesPromise;

      const repos = _ref4.repos;

      const noSCM = Object.keys(repos).every(function (scm) {
        return repos[scm].size === 0;
      });
      if (noSCM) {
        process.stderr.write('\n' + (_chalk || _load_chalk()).default.bold('--watch') + ' is not supported without git/hg, please use --watchAll ' + '\n');
        (0, (_exit || _load_exit()).default)(1);
      }
    }

    const testRunData = yield Promise.all(contexts.map((() => {
      var _ref5 = _asyncToGenerator(function* (context) {
        const matches = yield getTestPaths(globalConfig, context, outputStream, changedFilesPromise, jestHooks);
        allTests = allTests.concat(matches.tests);
        return { context, matches };
      });

      return function (_x7) {
        return _ref5.apply(this, arguments);
      };
    })()));

    allTests = sequencer.sort(allTests);

    if (globalConfig.listTests) {
      const testsPaths = Array.from(new Set(allTests.map(function (test) {
        return test.path;
      })));
      if (globalConfig.json) {
        console.log(JSON.stringify(testsPaths));
      } else {
        console.log(testsPaths.join('\n'));
      }

      onComplete && onComplete((0, (_test_result_helpers || _load_test_result_helpers()).makeEmptyAggregatedTestResult)());
      return null;
    }

    if (globalConfig.onlyFailures && failedTestsCache) {
      allTests = failedTestsCache.filterTests(allTests);
      globalConfig = failedTestsCache.updateConfig(globalConfig);
    }

    if (!allTests.length) {
      const noTestsFoundMessage = (0, (_get_no_test_found_message || _load_get_no_test_found_message()).default)(testRunData, globalConfig);

      if (globalConfig.passWithNoTests || globalConfig.findRelatedTests || globalConfig.lastCommit || globalConfig.onlyChanged) {
        new (_jestUtil || _load_jestUtil()).Console(outputStream, outputStream).log(noTestsFoundMessage);
      } else {
        new (_jestUtil || _load_jestUtil()).Console(outputStream, outputStream).error(noTestsFoundMessage);

        (0, (_exit || _load_exit()).default)(1);
      }
    } else if (allTests.length === 1 && globalConfig.silent !== true && globalConfig.verbose !== false) {
      globalConfig = Object.freeze(Object.assign({}, globalConfig, { verbose: true }));
    }

    // When using more than one context, make all printed paths relative to the
    // current cwd. Do not modify rootDir, since will be used by custom resolvers.
    // If --runInBand is true, the resolver saved a copy during initialization,
    // however, if it is running on spawned processes, the initiation of the
    // custom resolvers is done within each spawned process and it needs the
    // original value of rootDir. Instead, use the {cwd: Path} property to resolve
    // paths when printing.
    setConfig(contexts, { cwd: process.cwd() });
    if (globalConfig.globalSetup) {
      // $FlowFixMe
      yield require(globalConfig.globalSetup)();
    }
    const results = yield new (_test_scheduler || _load_test_scheduler()).default(globalConfig, {
      startRun
    }, testSchedulerContext).scheduleTests(allTests, testWatcher);

    sequencer.cacheResults(allTests, results);

    if (globalConfig.globalTeardown) {
      // $FlowFixMe
      yield require(globalConfig.globalTeardown)();
    }
    return processResults(results, {
      isJSON: globalConfig.json,
      onComplete,
      outputFile: globalConfig.outputFile,
      testResultsProcessor: globalConfig.testResultsProcessor
    });
  });

  function runJest(_x6) {
    return _ref3.apply(this, arguments);
  }

  return runJest;
})();