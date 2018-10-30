'use strict';

let jasmine2 = (() => {
  var _ref = _asyncToGenerator(function* (globalConfig, config, environment, runtime, testPath) {
    const reporter = new _reporter2.default(globalConfig, config, environment, testPath);
    const jasmineFactory = runtime.requireInternalModule(JASMINE);
    const jasmine = jasmineFactory.create({
      process,
      testPath
    });

    const env = jasmine.getEnv();
    const jasmineInterface = jasmineFactory.interface(jasmine, env);
    Object.assign(environment.global, jasmineInterface);
    env.addReporter(jasmineInterface.jsApiReporter);

    // TODO: Remove config option if V8 exposes some way of getting location of caller
    // in a future version
    if (config.testLocationInResults === true) {
      const originalIt = environment.global.it;
      environment.global.it = function () {
        const stack = (0, _jestUtil.getCallsite)(1, runtime.getSourceMaps());
        const it = originalIt.apply(undefined, arguments);

        it.result.__callsite = stack;

        return it;
      };
    }

    (0, _jasmine_async.install)(environment.global);

    environment.global.test = environment.global.it;
    environment.global.it.only = environment.global.fit;
    environment.global.it.skip = environment.global.xit;
    environment.global.xtest = environment.global.xit;
    environment.global.describe.skip = environment.global.xdescribe;
    environment.global.describe.only = environment.global.fdescribe;

    if (config.timers === 'fake') {
      environment.fakeTimers.useFakeTimers();
    }

    env.beforeEach(function () {
      if (config.resetModules) {
        runtime.resetModules();
      }

      if (config.clearMocks) {
        runtime.clearAllMocks();
      }

      if (config.resetMocks) {
        runtime.resetAllMocks();

        if (config.timers === 'fake') {
          environment.fakeTimers.useFakeTimers();
        }
      }

      if (config.restoreMocks) {
        runtime.restoreAllMocks();
      }
    });

    env.addReporter(reporter);

    runtime.requireInternalModule(_path2.default.resolve(__dirname, './jest_expect.js')).default({
      expand: globalConfig.expand
    });

    const snapshotState = runtime.requireInternalModule(_path2.default.resolve(__dirname, './setup_jest_globals.js')).default({
      config,
      globalConfig,
      localRequire: runtime.requireModule.bind(runtime),
      testPath
    });

    if (config.setupTestFrameworkScriptFile) {
      runtime.requireModule(config.setupTestFrameworkScriptFile);
    }

    runtime.requireInternalModule(require.resolve('source-map-support'), 'source-map-support').install({
      environment: 'node',
      handleUncaughtExceptions: false,
      retrieveSourceMap: function (source) {
        const sourceMaps = runtime.getSourceMaps();
        const sourceMapSource = sourceMaps && sourceMaps[source];

        if (sourceMapSource) {
          try {
            return {
              map: JSON.parse(_gracefulFs2.default.readFileSync(sourceMapSource)),
              url: source
            };
          } catch (e) {}
        }
        return null;
      }
    });

    if (globalConfig.enabledTestsMap) {
      env.specFilter = function (spec) {
        const suiteMap = globalConfig.enabledTestsMap && globalConfig.enabledTestsMap[spec.result.testPath];
        return suiteMap && suiteMap[spec.result.fullName];
      };
    } else if (globalConfig.testNamePattern) {
      const testNameRegex = new RegExp(globalConfig.testNamePattern, 'i');
      env.specFilter = function (spec) {
        return testNameRegex.test(spec.getFullName());
      };
    }

    runtime.requireModule(testPath);
    yield env.execute();
    return reporter.getResults().then(function (results) {
      return addSnapshotData(results, snapshotState);
    });
  });

  return function jasmine2(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
})();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gracefulFs = require('graceful-fs');

var _gracefulFs2 = _interopRequireDefault(_gracefulFs);

var _jestUtil = require('jest-util');

var _reporter = require('./reporter');

var _reporter2 = _interopRequireDefault(_reporter);

var _jasmine_async = require('./jasmine_async');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
// eslint-disable-next-line import/no-extraneous-dependencies
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const JASMINE = require.resolve('./jasmine/jasmine_light.js');

const addSnapshotData = (results, snapshotState) => {
  results.testResults.forEach((_ref2) => {
    let fullName = _ref2.fullName,
        status = _ref2.status;

    if (status === 'pending' || status === 'failed') {
      // if test is skipped or failed, we don't want to mark
      // its snapshots as obsolete.
      snapshotState.markSnapshotsAsCheckedForTest(fullName);
    }
  });

  const uncheckedCount = snapshotState.getUncheckedCount();
  const uncheckedKeys = snapshotState.getUncheckedKeys();

  if (uncheckedCount) {
    snapshotState.removeUncheckedKeys();
  }

  const status = snapshotState.save();
  results.snapshot.fileDeleted = status.deleted;
  results.snapshot.added = snapshotState.added;
  results.snapshot.matched = snapshotState.matched;
  results.snapshot.unmatched = snapshotState.unmatched;
  results.snapshot.updated = snapshotState.updated;
  results.snapshot.unchecked = !status.deleted ? uncheckedCount : 0;
  // Copy the array to prevent memory leaks
  results.snapshot.uncheckedKeys = Array.from(uncheckedKeys);

  return results;
};

module.exports = jasmine2;