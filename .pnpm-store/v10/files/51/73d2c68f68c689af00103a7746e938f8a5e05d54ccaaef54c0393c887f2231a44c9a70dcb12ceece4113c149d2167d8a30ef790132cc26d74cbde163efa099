/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 * @emails oncall+relay
 */
// flowlint ambiguous-object-type:error
'use strict';

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _require = require('relay-runtime'),
    isPromise = _require.isPromise;

function reportTime(reporter, message, fn) {
  return reportAndReturnTime(reporter, message, fn)[0];
}

function reportAndReturnTime(reporter, message, fn) {
  var startTime = Date.now();
  var result = fn();

  if (isPromise(result)) {
    throw new Error('reportAndReturnTime: fn(...) returned an unexpected promise.' + ' Please use `reportAndReturnAsyncTime` method instead.');
  }

  var elapsedTime = Date.now() - startTime;
  reporter.reportTime(message, elapsedTime);
  return [result, elapsedTime];
}

function reportAndReturnAsyncTime(_x, _x2, _x3) {
  return _reportAndReturnAsyncTime.apply(this, arguments);
}

function _reportAndReturnAsyncTime() {
  _reportAndReturnAsyncTime = _asyncToGenerator(function* (reporter, message, fn) {
    var startTime = Date.now();
    var promise = fn();

    if (!isPromise(promise)) {
      throw new Error('reportAsyncTime: fn(...) expected to return a promise.');
    }

    var result = yield promise;
    var elapsedTime = Date.now() - startTime;
    reporter.reportTime(message, elapsedTime);
    return [result, elapsedTime];
  });
  return _reportAndReturnAsyncTime.apply(this, arguments);
}

function reportAsyncTime(_x4, _x5, _x6) {
  return _reportAsyncTime.apply(this, arguments);
}

function _reportAsyncTime() {
  _reportAsyncTime = _asyncToGenerator(function* (reporter, message, fn) {
    var startTime = Date.now();
    var promise = fn();

    if (!isPromise(promise)) {
      throw new Error('reportAsyncTime: fn(...) expected to return a promise.');
    }

    var result = yield promise;
    var elapsedTime = Date.now() - startTime;
    reporter.reportTime(message, elapsedTime);
    return result;
  });
  return _reportAsyncTime.apply(this, arguments);
}

module.exports = {
  reportTime: reportTime,
  reportAndReturnTime: reportAndReturnTime,
  reportAsyncTime: reportAsyncTime,
  reportAndReturnAsyncTime: reportAndReturnAsyncTime
};