'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class ReporterDispatcher {

  constructor() {
    this._reporters = [];
  }

  register(reporter) {
    this._reporters.push(reporter);
  }

  unregister(ReporterClass) {
    this._reporters = this._reporters.filter(reporter => !(reporter instanceof ReporterClass));
  }

  onTestResult(test, testResult, results) {
    var _this = this;

    return _asyncToGenerator(function* () {
      for (const reporter of _this._reporters) {
        reporter.onTestResult && (yield reporter.onTestResult(test, testResult, results));
      }
    })();
  }

  onTestStart(test) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      for (const reporter of _this2._reporters) {
        reporter.onTestStart && (yield reporter.onTestStart(test));
      }
    })();
  }

  onRunStart(results, options) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      for (const reporter of _this3._reporters) {
        reporter.onRunStart && (yield reporter.onRunStart(results, options));
      }
    })();
  }

  onRunComplete(contexts, results) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      for (const reporter of _this4._reporters) {
        reporter.onRunComplete && (yield reporter.onRunComplete(contexts, results));
      }
    })();
  }

  // Return a list of last errors for every reporter
  getErrors() {
    return this._reporters.reduce((list, reporter) => {
      const error = reporter.getLastError && reporter.getLastError();
      return error ? list.concat(error) : list;
    }, []);
  }

  hasErrors() {
    return this.getErrors().length !== 0;
  }
}
exports.default = ReporterDispatcher; /**
                                       * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
                                       *
                                       * This source code is licensed under the MIT license found in the
                                       * LICENSE file in the root directory of this source tree.
                                       *
                                       * 
                                       */