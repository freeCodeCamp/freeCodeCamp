'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spec;

var _expectation_failed = require('../expectation_failed');

var _expectation_failed2 = _interopRequireDefault(_expectation_failed);

var _expectation_result_factory = require('../expectation_result_factory');

var _expectation_result_factory2 = _interopRequireDefault(_expectation_result_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
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

function Spec(attrs) {
  this.resultCallback = attrs.resultCallback || function () {};
  this.id = attrs.id;
  this.description = attrs.description || '';
  this.queueableFn = attrs.queueableFn;
  this.beforeAndAfterFns = attrs.beforeAndAfterFns || function () {
    return { befores: [], afters: [] };
  };
  this.userContext = attrs.userContext || function () {
    return {};
  };
  this.onStart = attrs.onStart || function () {};
  this.getSpecName = attrs.getSpecName || function () {
    return '';
  };
  this.queueRunnerFactory = attrs.queueRunnerFactory || function () {};
  this.throwOnExpectationFailure = !!attrs.throwOnExpectationFailure;

  this.result = {
    id: this.id,
    description: this.description,
    fullName: this.getFullName(),
    failedExpectations: [],
    passedExpectations: [],
    pendingReason: '',
    testPath: attrs.getTestPath()
  };
}

Spec.prototype.addExpectationResult = function (passed, data, isError) {
  const expectationResult = (0, _expectation_result_factory2.default)(data);
  if (passed) {
    this.result.passedExpectations.push(expectationResult);
  } else {
    this.result.failedExpectations.push(expectationResult);

    if (this.throwOnExpectationFailure && !isError) {
      throw new _expectation_failed2.default();
    }
  }
};

Spec.prototype.execute = function (onComplete, enabled) {
  const self = this;

  this.onStart(this);

  if (!this.isExecutable() || this.markedPending || enabled === false) {
    complete(enabled);
    return;
  }

  const fns = this.beforeAndAfterFns();
  const allFns = fns.befores.concat(this.queueableFn).concat(fns.afters);

  this.currentRun = this.queueRunnerFactory({
    queueableFns: allFns,
    onException() {
      self.onException.apply(self, arguments);
    },
    userContext: this.userContext()
  });

  this.currentRun.then(() => complete(true));

  function complete(enabledAgain) {
    self.result.status = self.status(enabledAgain);
    self.resultCallback(self.result);

    if (onComplete) {
      onComplete();
    }
  }
};

Spec.prototype.cancel = function cancel() {
  if (this.currentRun) {
    this.currentRun.cancel();
  }
};

Spec.prototype.onException = function onException(error) {
  if (Spec.isPendingSpecException(error)) {
    this.pend(extractCustomPendingMessage(error));
    return;
  }

  if (error instanceof _expectation_failed2.default) {
    return;
  }

  if (error instanceof require('assert').AssertionError) {
    const assertionErrorMessage = require('../assert_support').default;
    error = assertionErrorMessage(error, { expand: this.expand });
  }

  this.addExpectationResult(false, {
    matcherName: '',
    passed: false,
    expected: '',
    actual: '',
    error
  }, true);
};

Spec.prototype.disable = function () {
  this.disabled = true;
};

Spec.prototype.pend = function (message) {
  this.markedPending = true;
  if (message) {
    this.result.pendingReason = message;
  }
};

Spec.prototype.getResult = function () {
  this.result.status = this.status();
  return this.result;
};

Spec.prototype.status = function (enabled) {
  if (this.disabled || enabled === false) {
    return 'disabled';
  }

  if (this.markedPending) {
    return 'pending';
  }

  if (this.result.failedExpectations.length > 0) {
    return 'failed';
  } else {
    return 'passed';
  }
};

Spec.prototype.isExecutable = function () {
  return !this.disabled;
};

Spec.prototype.getFullName = function () {
  return this.getSpecName(this);
};

const extractCustomPendingMessage = function (e) {
  const fullMessage = e.toString();
  const boilerplateStart = fullMessage.indexOf(Spec.pendingSpecExceptionMessage);
  const boilerplateEnd = boilerplateStart + Spec.pendingSpecExceptionMessage.length;

  return fullMessage.substr(boilerplateEnd);
};

Spec.pendingSpecExceptionMessage = '=> marked Pending';

Spec.isPendingSpecException = function (e) {
  return !!(e && e.toString && e.toString().indexOf(Spec.pendingSpecExceptionMessage) !== -1);
};