'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _expect = require('expect');

var _jestSnapshot = require('jest-snapshot');

// Get suppressed errors form  jest-matchers that weren't throw during
// test execution and add them to the test result, potentially failing
// a passing test.
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

const addSuppressedErrors = result => {
  var _getState = (0, _expect.getState)();

  const suppressedErrors = _getState.suppressedErrors;

  (0, _expect.setState)({ suppressedErrors: [] });
  if (suppressedErrors.length) {
    result.status = 'failed';

    result.failedExpectations = suppressedErrors.map(error => ({
      actual: '',
      // passing error for custom test reporters
      error,
      expected: '',
      message: error.message,
      passed: false,
      stack: error.stack
    }));
  }
};

const addAssertionErrors = result => {
  const assertionErrors = (0, _expect.extractExpectedAssertionsErrors)();
  if (assertionErrors.length) {
    const jasmineErrors = assertionErrors.map((_ref) => {
      let actual = _ref.actual,
          error = _ref.error,
          expected = _ref.expected;

      return {
        actual,
        expected,
        message: error.stack,
        passed: false
      };
    });
    result.status = 'failed';
    result.failedExpectations = result.failedExpectations.concat(jasmineErrors);
  }
};

const patchJasmine = () => {
  global.jasmine.Spec = (realSpec => {
    const Spec = function Spec(attr) {
      const resultCallback = attr.resultCallback;
      attr.resultCallback = function (result) {
        addSuppressedErrors(result);
        addAssertionErrors(result);
        resultCallback.call(attr, result);
      };
      const onStart = attr.onStart;
      attr.onStart = context => {
        (0, _expect.setState)({ currentTestName: context.getFullName() });
        onStart && onStart.call(attr, context);
      };
      realSpec.call(this, attr);
    };

    Spec.prototype = realSpec.prototype;
    for (const statics in realSpec) {
      if (Object.prototype.hasOwnProperty.call(realSpec, statics)) {
        Spec[statics] = realSpec[statics];
      }
    }
    return Spec;
  })(global.jasmine.Spec);
};

exports.default = (_ref2) => {
  let config = _ref2.config,
      globalConfig = _ref2.globalConfig,
      localRequire = _ref2.localRequire,
      testPath = _ref2.testPath;

  // Jest tests snapshotSerializers in order preceding built-in serializers.
  // Therefore, add in reverse because the last added is the first tested.
  config.snapshotSerializers.concat().reverse().forEach(path => {
    (0, _jestSnapshot.addSerializer)(localRequire(path));
  });
  patchJasmine();
  const expand = globalConfig.expand,
        updateSnapshot = globalConfig.updateSnapshot;

  const snapshotState = new _jestSnapshot.SnapshotState(testPath, { expand, updateSnapshot });
  (0, _expect.setState)({ snapshotState, testPath });
  // Return it back to the outer scope (test runner outside the VM).
  return snapshotState;
};