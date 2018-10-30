'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = queueRunner;

var _p_cancelable = require('./p_cancelable');

var _p_cancelable2 = _interopRequireDefault(_p_cancelable);

var _p_timeout = require('./p_timeout');

var _p_timeout2 = _interopRequireDefault(_p_timeout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

// Try getting the real promise object from the context, if available. Someone
const Promise = global[Symbol.for('jest-native-promise')] || global.Promise;

function queueRunner(options) {
  const token = new _p_cancelable2.default((onCancel, resolve) => {
    onCancel(resolve);
  });

  const mapper = (_ref) => {
    let fn = _ref.fn,
        timeout = _ref.timeout;

    let promise = new Promise(resolve => {
      const next = function (err) {
        if (err) {
          options.fail.apply(null, arguments);
        }
        resolve();
      };

      next.fail = function () {
        options.fail.apply(null, arguments);
        resolve();
      };
      try {
        fn.call(options.userContext, next);
      } catch (e) {
        options.onException(e);
        resolve();
      }
    });

    promise = Promise.race([promise, token]);

    if (!timeout) {
      return promise;
    }

    const timeoutMs = timeout();

    return (0, _p_timeout2.default)(promise, timeoutMs, options.clearTimeout, options.setTimeout, () => {
      const error = new Error('Timeout - Async callback was not invoked within the ' + timeoutMs + 'ms timeout specified by jest.setTimeout.');
      options.onException(error);
    });
  };

  const result = options.queueableFns.reduce((promise, fn) => promise.then(() => mapper(fn)), Promise.resolve());

  return {
    cancel: token.cancel.bind(token),
    catch: result.catch.bind(result),
    then: result.then.bind(result)
  };
}