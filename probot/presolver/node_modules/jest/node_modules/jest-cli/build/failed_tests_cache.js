'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class FailedTestsCache {

  filterTests(tests) {
    if (!this._enabledTestsMap) {
      return tests;
    }
    // $FlowFixMe
    return tests.filter(testResult => this._enabledTestsMap[testResult.path]);
  }

  setTestResults(testResults) {
    this._enabledTestsMap = (testResults || []).filter(testResult => testResult.numFailingTests).reduce((suiteMap, testResult) => {
      suiteMap[testResult.testFilePath] = testResult.testResults.filter(test => test.status === 'failed').reduce((testMap, test) => {
        testMap[test.fullName] = true;
        return testMap;
      }, {});
      return suiteMap;
    }, {});
    this._enabledTestsMap = Object.freeze(this._enabledTestsMap);
  }

  updateConfig(globalConfig) {
    if (!this._enabledTestsMap) {
      return globalConfig;
    }
    // $FlowFixMe Object.assign
    const newConfig = Object.assign({}, globalConfig);
    newConfig.enabledTestsMap = this._enabledTestsMap;
    return Object.freeze(newConfig);
  }
}
exports.default = FailedTestsCache; /**
                                     * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                     *
                                     * This source code is licensed under the MIT license found in the
                                     * LICENSE file in the root directory of this source tree.
                                     *
                                     * 
                                     */