'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs;

function _load_fs() {
  return _fs = _interopRequireDefault(require('fs'));
}

var _jestHasteMap;

function _load_jestHasteMap() {
  return _jestHasteMap = require('jest-haste-map');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FAIL = 0;
// $FlowFixMe: Missing ESM export
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const SUCCESS = 1;

class TestSequencer {

  constructor() {
    this._cache = new Map();
  }

  _getCachePath(context) {
    const config = context.config;

    return (0, (_jestHasteMap || _load_jestHasteMap()).getCacheFilePath)(config.cacheDirectory, 'perf-cache-' + config.name);
  }

  _getCache(test) {
    const context = test.context;

    if (!this._cache.has(context) && context.config.cache) {
      const cachePath = this._getCachePath(context);
      if ((_fs || _load_fs()).default.existsSync(cachePath)) {
        try {
          this._cache.set(context, JSON.parse((_fs || _load_fs()).default.readFileSync(cachePath, 'utf8')));
        } catch (e) {}
      }
    }

    let cache = this._cache.get(context);
    if (!cache) {
      cache = {};
      this._cache.set(context, cache);
    }

    return cache;
  }

  // When running more tests than we have workers available, sort the tests
  // by size - big test files usually take longer to complete, so we run
  // them first in an effort to minimize worker idle time at the end of a
  // long test run.
  //
  // After a test run we store the time it took to run a test and on
  // subsequent runs we use that to run the slowest tests first, yielding the
  // fastest results.
  sort(tests) {
    const stats = {};
    const fileSize = test => stats[test.path] || (stats[test.path] = (_fs || _load_fs()).default.statSync(test.path).size);
    const hasFailed = (cache, test) => cache[test.path] && cache[test.path][0] === FAIL;
    const time = (cache, test) => cache[test.path] && cache[test.path][1];

    tests.forEach(test => test.duration = time(this._getCache(test), test));
    return tests.sort((testA, testB) => {
      const cacheA = this._getCache(testA);
      const cacheB = this._getCache(testB);
      const failedA = hasFailed(cacheA, testA);
      const failedB = hasFailed(cacheB, testB);
      const hasTimeA = testA.duration != null;
      if (failedA !== failedB) {
        return failedA ? -1 : 1;
      } else if (hasTimeA != (testB.duration != null)) {
        // Check if only one of two tests has timing information
        return hasTimeA != null ? 1 : -1;
      } else if (testA.duration != null && testB.duration != null) {
        return testA.duration < testB.duration ? 1 : -1;
      } else {
        return fileSize(testA) < fileSize(testB) ? 1 : -1;
      }
    });
  }

  cacheResults(tests, results) {
    const map = Object.create(null);
    tests.forEach(test => map[test.path] = test);
    results.testResults.forEach(testResult => {
      if (testResult && map[testResult.testFilePath] && !testResult.skipped) {
        const cache = this._getCache(map[testResult.testFilePath]);
        const perf = testResult.perfStats;
        cache[testResult.testFilePath] = [testResult.numFailingTests ? FAIL : SUCCESS, perf.end - perf.start || 0];
      }
    });

    this._cache.forEach((cache, context) => (_fs || _load_fs()).default.writeFileSync(this._getCachePath(context), JSON.stringify(cache)));
  }
}
exports.default = TestSequencer;