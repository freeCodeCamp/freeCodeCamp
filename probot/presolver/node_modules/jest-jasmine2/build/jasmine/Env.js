'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (j$) {
  function Env(options) {
    options = options || {};

    const self = this;

    let totalSpecsDefined = 0;

    let catchExceptions = true;

    const realSetTimeout = global.setTimeout;
    const realClearTimeout = global.clearTimeout;

    const runnableResources = {};
    let currentSpec = null;
    const currentlyExecutingSuites = [];
    let currentDeclarationSuite = null;
    let throwOnExpectationFailure = false;
    let random = false;
    let seed = null;

    const currentSuite = function () {
      return currentlyExecutingSuites[currentlyExecutingSuites.length - 1];
    };

    const currentRunnable = function () {
      return currentSpec || currentSuite();
    };

    const reporter = new j$.ReportDispatcher(['jasmineStarted', 'jasmineDone', 'suiteStarted', 'suiteDone', 'specStarted', 'specDone']);

    this.specFilter = function () {
      return true;
    };

    let nextSpecId = 0;
    const getNextSpecId = function () {
      return 'spec' + nextSpecId++;
    };

    let nextSuiteId = 0;
    const getNextSuiteId = function () {
      return 'suite' + nextSuiteId++;
    };

    const defaultResourcesForRunnable = function (id, parentRunnableId) {
      const resources = { spies: [] };

      runnableResources[id] = resources;
    };

    const clearResourcesForRunnable = function (id) {
      spyRegistry.clearSpies();
      delete runnableResources[id];
    };

    const beforeAndAfterFns = function (suite) {
      return function () {
        let afters = [];
        let befores = [];

        while (suite) {
          befores = befores.concat(suite.beforeFns);
          afters = afters.concat(suite.afterFns);

          suite = suite.parentSuite;
        }

        return {
          befores: befores.reverse(),
          afters
        };
      };
    };

    const getSpecName = function (spec, suite) {
      const fullName = [spec.description];
      const suiteFullName = suite.getFullName();

      if (suiteFullName !== '') {
        fullName.unshift(suiteFullName);
      }

      return fullName.join(' ');
    };

    this.catchExceptions = function (value) {
      catchExceptions = !!value;
      return catchExceptions;
    };

    this.catchingExceptions = function () {
      return catchExceptions;
    };

    this.throwOnExpectationFailure = function (value) {
      throwOnExpectationFailure = !!value;
    };

    this.throwingExpectationFailures = function () {
      return throwOnExpectationFailure;
    };

    this.randomizeTests = function (value) {
      random = !!value;
    };

    this.randomTests = function () {
      return random;
    };

    this.seed = function (value) {
      if (value) {
        seed = value;
      }
      return seed;
    };

    function queueRunnerFactory(options) {
      options.clearTimeout = realClearTimeout;
      options.fail = self.fail;
      options.setTimeout = realSetTimeout;
      return (0, _queue_runner2.default)(options);
    }

    const topSuite = new j$.Suite({
      id: getNextSuiteId(),
      getTestPath() {
        return j$.testPath;
      }
    });
    defaultResourcesForRunnable(topSuite.id);
    currentDeclarationSuite = topSuite;

    this.topSuite = function () {
      return topSuite;
    };

    this.execute = (() => {
      var _ref = _asyncToGenerator(function* (runnablesToRun) {
        if (!runnablesToRun) {
          if (focusedRunnables.length) {
            runnablesToRun = focusedRunnables;
          } else {
            runnablesToRun = [topSuite.id];
          }
        }

        const uncaught = function (err) {
          if (currentSpec) {
            currentSpec.onException(err);
            currentSpec.cancel();
          } else {
            console.error('Unhandled error');
            console.error(err.stack);
          }
        };

        // Need to ensure we are the only ones handling these exceptions.
        const oldListenersException = process.listeners('uncaughtException').slice();
        const oldListenersRejection = process.listeners('unhandledRejection').slice();

        j$.process.removeAllListeners('uncaughtException');
        j$.process.removeAllListeners('unhandledRejection');

        j$.process.on('uncaughtException', uncaught);
        j$.process.on('unhandledRejection', uncaught);

        reporter.jasmineStarted({ totalSpecsDefined });

        currentlyExecutingSuites.push(topSuite);

        yield (0, _tree_processor2.default)({
          nodeComplete(suite) {
            if (!suite.disabled) {
              clearResourcesForRunnable(suite.id);
            }
            currentlyExecutingSuites.pop();
            reporter.suiteDone(suite.getResult());
          },
          nodeStart(suite) {
            currentlyExecutingSuites.push(suite);
            defaultResourcesForRunnable(suite.id, suite.parentSuite.id);
            reporter.suiteStarted(suite.result);
          },
          queueRunnerFactory,
          runnableIds: runnablesToRun,
          tree: topSuite
        });
        clearResourcesForRunnable(topSuite.id);
        currentlyExecutingSuites.pop();
        reporter.jasmineDone({
          failedExpectations: topSuite.result.failedExpectations
        });

        j$.process.removeListener('uncaughtException', uncaught);
        j$.process.removeListener('unhandledRejection', uncaught);

        // restore previous exception handlers
        oldListenersException.forEach(function (listener) {
          j$.process.on('uncaughtException', listener);
        });

        oldListenersRejection.forEach(function (listener) {
          j$.process.on('unhandledRejection', listener);
        });
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    })();

    this.addReporter = function (reporterToAdd) {
      reporter.addReporter(reporterToAdd);
    };

    this.provideFallbackReporter = function (reporterToAdd) {
      reporter.provideFallbackReporter(reporterToAdd);
    };

    this.clearReporters = function () {
      reporter.clearReporters();
    };

    const spyRegistry = new j$.SpyRegistry({
      currentSpies() {
        if (!currentRunnable()) {
          throw new Error('Spies must be created in a before function or a spec');
        }
        return runnableResources[currentRunnable().id].spies;
      }
    });

    this.allowRespy = function (allow) {
      spyRegistry.allowRespy(allow);
    };

    this.spyOn = function () {
      return spyRegistry.spyOn.apply(spyRegistry, arguments);
    };

    const suiteFactory = function (description) {
      const suite = new j$.Suite({
        id: getNextSuiteId(),
        description,
        parentSuite: currentDeclarationSuite,
        throwOnExpectationFailure,
        getTestPath() {
          return j$.testPath;
        }
      });

      return suite;
    };

    this.describe = function (description, specDefinitions) {
      const suite = suiteFactory(description);
      if (specDefinitions.length > 0) {
        throw new Error('describe does not expect any arguments');
      }
      if (currentDeclarationSuite.markedPending) {
        suite.pend();
      }
      addSpecsToSuite(suite, specDefinitions);
      return suite;
    };

    this.xdescribe = function (description, specDefinitions) {
      const suite = suiteFactory(description);
      suite.pend();
      addSpecsToSuite(suite, specDefinitions);
      return suite;
    };

    const focusedRunnables = [];

    this.fdescribe = function (description, specDefinitions) {
      const suite = suiteFactory(description);
      suite.isFocused = true;

      focusedRunnables.push(suite.id);
      unfocusAncestor();
      addSpecsToSuite(suite, specDefinitions);

      return suite;
    };

    function addSpecsToSuite(suite, specDefinitions) {
      const parentSuite = currentDeclarationSuite;
      parentSuite.addChild(suite);
      currentDeclarationSuite = suite;

      let declarationError = null;
      try {
        specDefinitions.call(suite);
      } catch (e) {
        declarationError = e;
      }

      if (declarationError) {
        self.it('encountered a declaration exception', () => {
          throw declarationError;
        });
      }

      currentDeclarationSuite = parentSuite;
    }

    function findFocusedAncestor(suite) {
      while (suite) {
        if (suite.isFocused) {
          return suite.id;
        }
        suite = suite.parentSuite;
      }

      return null;
    }

    function unfocusAncestor() {
      const focusedAncestor = findFocusedAncestor(currentDeclarationSuite);
      if (focusedAncestor) {
        for (let i = 0; i < focusedRunnables.length; i++) {
          if (focusedRunnables[i] === focusedAncestor) {
            focusedRunnables.splice(i, 1);
            break;
          }
        }
      }
    }

    const specFactory = function (description, fn, suite, timeout) {
      totalSpecsDefined++;
      const spec = new j$.Spec({
        id: getNextSpecId(),
        beforeAndAfterFns: beforeAndAfterFns(suite),
        resultCallback: specResultCallback,
        getSpecName(spec) {
          return getSpecName(spec, suite);
        },
        getTestPath() {
          return j$.testPath;
        },
        onStart: specStarted,
        description,
        queueRunnerFactory,
        userContext() {
          return suite.clonedSharedUserContext();
        },
        queueableFn: {
          fn,
          timeout() {
            return timeout || j$.DEFAULT_TIMEOUT_INTERVAL;
          }
        },
        throwOnExpectationFailure
      });

      if (!self.specFilter(spec)) {
        spec.disable();
      }

      return spec;

      function specResultCallback(result) {
        clearResourcesForRunnable(spec.id);
        currentSpec = null;
        reporter.specDone(result);
      }

      function specStarted(spec) {
        currentSpec = spec;
        defaultResourcesForRunnable(spec.id, suite.id);
        reporter.specStarted(spec.result);
      }
    };

    this.it = function (description, fn, timeout) {
      const spec = specFactory(description, fn, currentDeclarationSuite, timeout);
      if (currentDeclarationSuite.markedPending) {
        spec.pend();
      }

      // When a test is defined inside another, jasmine will not run it.
      // This check throws an error to warn the user about the edge-case.
      if (currentSpec !== null) {
        throw new Error('Tests cannot be nested. Test `' + spec.description + '` cannot run because it is nested within `' + currentSpec.description + '`.');
      }
      currentDeclarationSuite.addChild(spec);
      return spec;
    };

    this.xit = function () {
      const spec = this.it.apply(this, arguments);
      spec.pend('Temporarily disabled with xit');
      return spec;
    };

    this.fit = function (description, fn, timeout) {
      const spec = specFactory(description, fn, currentDeclarationSuite, timeout);
      currentDeclarationSuite.addChild(spec);
      focusedRunnables.push(spec.id);
      unfocusAncestor();
      return spec;
    };

    this.beforeEach = function (beforeEachFunction, timeout) {
      currentDeclarationSuite.beforeEach({
        fn: beforeEachFunction,
        timeout() {
          return timeout || j$.DEFAULT_TIMEOUT_INTERVAL;
        }
      });
    };

    this.beforeAll = function (beforeAllFunction, timeout) {
      currentDeclarationSuite.beforeAll({
        fn: beforeAllFunction,
        timeout() {
          return timeout || j$.DEFAULT_TIMEOUT_INTERVAL;
        }
      });
    };

    this.afterEach = function (afterEachFunction, timeout) {
      currentDeclarationSuite.afterEach({
        fn: afterEachFunction,
        timeout() {
          return timeout || j$.DEFAULT_TIMEOUT_INTERVAL;
        }
      });
    };

    this.afterAll = function (afterAllFunction, timeout) {
      currentDeclarationSuite.afterAll({
        fn: afterAllFunction,
        timeout() {
          return timeout || j$.DEFAULT_TIMEOUT_INTERVAL;
        }
      });
    };

    this.pending = function (message) {
      let fullMessage = j$.Spec.pendingSpecExceptionMessage;
      if (message) {
        fullMessage += message;
      }
      throw fullMessage;
    };

    this.fail = function (error) {
      let message = 'Failed';
      if (error) {
        message += ': ';
        message += error.message || error;
      }

      currentRunnable().addExpectationResult(false, {
        matcherName: '',
        passed: false,
        expected: '',
        actual: '',
        message,
        error: error && error.message ? error : null
      });
    };
  }

  return Env;
};

var _queue_runner = require('../queue_runner');

var _queue_runner2 = _interopRequireDefault(_queue_runner);

var _tree_processor = require('../tree_processor');

var _tree_processor2 = _interopRequireDefault(_tree_processor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */
// This file is a heavily modified fork of Jasmine. Original license:
/*
Copyright (c) 2008-2016 Pivotal Labs

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/* eslint-disable sort-keys */

// Try getting the real promise object from the context, if available. Someone
// could have overridden it in a test. Async functions return it implicitly.
// eslint-disable-next-line no-unused-vars
const Promise = global[Symbol.for('jest-native-promise')] || global.Promise;