'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pTimeout;
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

// Try getting the real promise object from the context, if available. Someone
// could have overridden it in a test.
const Promise = global[Symbol.for('jest-native-promise')] || global.Promise;

// A specialized version of `p-timeout` that does not touch globals.
// It does not throw on timeout.
function pTimeout(promise, ms, clearTimeout, setTimeout, onTimeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => resolve(onTimeout()), ms);
    promise.then(val => {
      clearTimeout(timer);
      resolve(val);
    }, err => {
      clearTimeout(timer);
      reject(err);
    });
  });
}