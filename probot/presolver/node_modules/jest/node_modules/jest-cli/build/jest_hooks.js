'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

class JestHooks {

  constructor() {
    this._listeners = {
      shouldRunTestSuite: [],
      testRunComplete: []
    };
  }

  getSubscriber() {
    return {
      shouldRunTestSuite: fn => {
        this._listeners.shouldRunTestSuite.push(fn);
      },
      testRunComplete: fn => {
        this._listeners.testRunComplete.push(fn);
      }
    };
  }

  getEmitter() {
    var _this = this;

    return {
      shouldRunTestSuite: (() => {
        var _ref = _asyncToGenerator(function* (testPath) {
          return Promise.all(_this._listeners.shouldRunTestSuite.map(function (listener) {
            return listener(testPath);
          })).then(function (result) {
            return result.every(function (shouldRunTestSuite) {
              return shouldRunTestSuite;
            });
          });
        });

        return function shouldRunTestSuite(_x) {
          return _ref.apply(this, arguments);
        };
      })(),
      testRunComplete: results => this._listeners.testRunComplete.forEach(listener => listener(results))
    };
  }
} /**
   * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

exports.default = JestHooks;