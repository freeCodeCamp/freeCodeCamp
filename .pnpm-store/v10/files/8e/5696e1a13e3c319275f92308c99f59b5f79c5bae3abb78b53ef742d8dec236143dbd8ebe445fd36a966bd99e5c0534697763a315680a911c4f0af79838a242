/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var _window, _window$performance;

var isPerformanceNowAvailable = typeof window !== 'undefined' && typeof ((_window = window) === null || _window === void 0 ? void 0 : (_window$performance = _window.performance) === null || _window$performance === void 0 ? void 0 : _window$performance.now) === 'function';

function currentTimestamp() {
  if (isPerformanceNowAvailable) {
    return window.performance.now();
  }

  return Date.now();
}

function withDuration(cb) {
  var startTime = currentTimestamp();
  var result = cb();
  return [currentTimestamp() - startTime, result];
}

module.exports = withDuration;