'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

// Keeping the core of "runTest" as a separate function (as "runTestInternal")
// is key to be able to detect memory leaks. Since all variables are local to
// the function, when "runTestInternal" finishes its execution, they can all be
// freed, UNLESS something else is leaking them (and that's why we can detect
// the leak!).
//
// If we had all the code in a single function, we should manually nullify all
// references to verify if there is a leak, which is not maintainable and error
// prone. That's why "runTestInternal" CANNOT be inlined inside "runTest".
let runTestInternal = (() => {
  var _ref = _asyncToGenerator(function* (path, globalConfig, config, resolver) {
    const testSource = (_fs || _load_fs()).default.readFileSync(path, 'utf8');
    const parsedDocblock = (_jestDocblock || _load_jestDocblock()).parse((_jestDocblock || _load_jestDocblock()).extract(testSource));
    const customEnvironment = parsedDocblock['jest-environment'];

    let testEnvironment = config.testEnvironment;

    if (customEnvironment) {
      testEnvironment = (0, (_jestConfig || _load_jestConfig()).getTestEnvironment)(Object.assign({}, config, {
        testEnvironment: customEnvironment
      }));
    }

    /* $FlowFixMe */
    const TestEnvironment = require(testEnvironment);
    /* $FlowFixMe */
    const testFramework = require(config.testRunner);
    /* $FlowFixMe */
    const Runtime = require(config.moduleLoader || 'jest-runtime');

    let runtime = undefined;

    const consoleOut = globalConfig.useStderr ? process.stderr : process.stdout;
    const consoleFormatter = function (type, message) {
      return (0, (_jestUtil || _load_jestUtil()).getConsoleOutput)(config.cwd, !!globalConfig.verbose,
      // 4 = the console call is buried 4 stack frames deep
      (_jestUtil || _load_jestUtil()).BufferedConsole.write([], type, message, 4, runtime && runtime.getSourceMaps()));
    };

    let testConsole;

    if (globalConfig.silent) {
      testConsole = new (_jestUtil || _load_jestUtil()).NullConsole(consoleOut, process.stderr, consoleFormatter);
    } else if (globalConfig.verbose) {
      testConsole = new (_jestUtil || _load_jestUtil()).Console(consoleOut, process.stderr, consoleFormatter);
    } else {
      testConsole = new (_jestUtil || _load_jestUtil()).BufferedConsole(function () {
        return runtime && runtime.getSourceMaps();
      });
    }

    const environment = new TestEnvironment(config, { console: testConsole });
    const leakDetector = config.detectLeaks ? new (_jestLeakDetector || _load_jestLeakDetector()).default(environment) : null;

    const cacheFS = { [path]: testSource };
    (0, (_jestUtil || _load_jestUtil()).setGlobal)(environment.global, 'console', testConsole);

    runtime = new Runtime(config, environment, resolver, cacheFS, {
      collectCoverage: globalConfig.collectCoverage,
      collectCoverageFrom: globalConfig.collectCoverageFrom,
      collectCoverageOnlyFrom: globalConfig.collectCoverageOnlyFrom
    });

    const start = Date.now();
    yield environment.setup();
    try {
      const result = yield testFramework(globalConfig, config, environment, runtime, path);
      const testCount = result.numPassingTests + result.numFailingTests + result.numPendingTests;

      result.perfStats = { end: Date.now(), start };
      result.testFilePath = path;
      result.coverage = runtime.getAllCoverageInfoCopy();
      result.sourceMaps = runtime.getSourceMapInfo(new Set(Object.keys(result.coverage || {})));
      result.console = testConsole.getBuffer();
      result.skipped = testCount === result.numPendingTests;
      result.displayName = config.displayName;

      if (globalConfig.logHeapUsage) {
        if (global.gc) {
          global.gc();
        }
        result.memoryUsage = process.memoryUsage().heapUsed;
      }

      // Delay the resolution to allow log messages to be output.
      return new Promise(function (resolve) {
        setImmediate(function () {
          return resolve({ leakDetector, result });
        });
      });
    } finally {
      yield environment.teardown();
    }
  });

  return function runTestInternal(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
})();

var _fs;

function _load_fs() {
  return _fs = _interopRequireDefault(require('fs'));
}

var _jestUtil;

function _load_jestUtil() {
  return _jestUtil = require('jest-util');
}

var _jestJasmine;

function _load_jestJasmine() {
  return _jestJasmine = _interopRequireDefault(require('jest-jasmine2'));
}

var _jestLeakDetector;

function _load_jestLeakDetector() {
  return _jestLeakDetector = _interopRequireDefault(require('jest-leak-detector'));
}

var _jestConfig;

function _load_jestConfig() {
  return _jestConfig = require('jest-config');
}

var _jestDocblock;

function _load_jestDocblock() {
  return _jestDocblock = _interopRequireWildcard(require('jest-docblock'));
}

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

// The default jest-runner is required because it is the default test runner
// and required implicitly through the `testRunner` ProjectConfig option.
(_jestJasmine || _load_jestJasmine()).default;
exports.default = (() => {
  var _ref2 = _asyncToGenerator(function* (path, globalConfig, config, resolver) {
    var _ref3 = yield runTestInternal(path, globalConfig, config, resolver);

    const leakDetector = _ref3.leakDetector,
          result = _ref3.result;

    // Resolve leak detector, outside the "runTestInternal" closure.

    result.leaks = leakDetector ? leakDetector.isLeaking() : false;

    return result;
  });

  function runTest(_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  }

  return runTest;
})();