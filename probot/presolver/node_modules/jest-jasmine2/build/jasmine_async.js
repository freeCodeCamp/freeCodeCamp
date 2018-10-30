'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;

var _isGeneratorFn = require('is-generator-fn');

var _isGeneratorFn2 = _interopRequireDefault(_isGeneratorFn);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPromise(obj) {
  return obj && typeof obj.then === 'function';
} /**
   * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/**
 * This module adds ability to test async promise code with jasmine by
 * returning a promise from `it/test` and `before/afterEach/All` blocks.
 */

function promisifyLifeCycleFunction(originalFn, env) {
  return function (fn, timeout) {
    if (!fn) {
      return originalFn.call(env);
    }

    const hasDoneCallback = fn.length > 0;

    if (hasDoneCallback) {
      // Jasmine will handle it
      return originalFn.call(env, fn, timeout);
    }

    // We make *all* functions async and run `done` right away if they
    // didn't return a promise.
    const asyncFn = function (done) {
      const wrappedFn = (0, _isGeneratorFn2.default)(fn) ? _co2.default.wrap(fn) : fn;
      const returnValue = wrappedFn.call({});

      if (isPromise(returnValue)) {
        returnValue.then(done.bind(null, null), done.fail);
      } else {
        done();
      }
    };

    return originalFn.call(env, asyncFn, timeout);
  };
}

// Similar to promisifyLifeCycleFunction but throws an error
// when the return value is neither a Promise nor `undefined`
function promisifyIt(originalFn, env) {
  return function (specName, fn, timeout) {
    if (!fn) {
      const spec = originalFn.call(env, specName);
      spec.pend('not implemented');
      return spec;
    }

    const hasDoneCallback = fn.length > 0;

    if (hasDoneCallback) {
      return originalFn.call(env, specName, fn, timeout);
    }

    const asyncFn = function (done) {
      const wrappedFn = (0, _isGeneratorFn2.default)(fn) ? _co2.default.wrap(fn) : fn;
      const returnValue = wrappedFn.call({});

      if (isPromise(returnValue)) {
        returnValue.then(done.bind(null, null), done.fail);
      } else if (returnValue === undefined) {
        done();
      } else {
        done.fail(new Error('Jest: `it` and `test` must return either a Promise or undefined.'));
      }
    };

    return originalFn.call(env, specName, asyncFn, timeout);
  };
}

function makeConcurrent(originalFn, env) {
  return function (specName, fn, timeout) {
    if (env != null && !env.specFilter({ getFullName: () => specName || '' })) {
      return originalFn.call(env, specName, () => Promise.resolve(), timeout);
    }

    let promise;

    try {
      promise = fn();
      if (!isPromise(promise)) {
        throw new Error(`Jest: concurrent test "${specName}" must return a Promise.`);
      }
    } catch (error) {
      return originalFn.call(env, specName, () => Promise.reject(error));
    }

    return originalFn.call(env, specName, () => promise, timeout);
  };
}

function install(global) {
  const jasmine = global.jasmine;

  const env = jasmine.getEnv();
  env.it = promisifyIt(env.it, env);
  env.fit = promisifyIt(env.fit, env);
  global.it.concurrent = makeConcurrent(env.it, env);
  global.it.concurrent.only = makeConcurrent(env.fit, env);
  global.it.concurrent.skip = makeConcurrent(env.xit, env);
  global.fit.concurrent = makeConcurrent(env.fit);
  env.afterAll = promisifyLifeCycleFunction(env.afterAll, env);
  env.afterEach = promisifyLifeCycleFunction(env.afterEach, env);
  env.beforeAll = promisifyLifeCycleFunction(env.beforeAll, env);
  env.beforeEach = promisifyLifeCycleFunction(env.beforeEach, env);
}