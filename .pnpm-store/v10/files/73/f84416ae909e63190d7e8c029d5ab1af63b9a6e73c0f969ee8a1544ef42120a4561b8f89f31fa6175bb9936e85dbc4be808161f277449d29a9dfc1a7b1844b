/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 * @emails oncall+relay
 */

// flowlint ambiguous-object-type:error

'use strict';

const {isPromise} = require('relay-runtime');

import type {Reporter} from '../reporters/Reporter';

function reportTime<T>(reporter: Reporter, message: string, fn: () => T): T {
  return reportAndReturnTime(reporter, message, fn)[0];
}

function reportAndReturnTime<T>(
  reporter: Reporter,
  message: string,
  fn: () => T,
): [T, number] {
  const startTime = Date.now();
  const result = fn();
  if (isPromise(result)) {
    throw new Error(
      'reportAndReturnTime: fn(...) returned an unexpected promise.' +
        ' Please use `reportAndReturnAsyncTime` method instead.',
    );
  }
  const elapsedTime = Date.now() - startTime;
  reporter.reportTime(message, elapsedTime);
  return [result, elapsedTime];
}

async function reportAndReturnAsyncTime<T>(
  reporter: Reporter,
  message: string,
  fn: () => ?Promise<T>,
): Promise<[T, number]> {
  const startTime = Date.now();
  const promise = fn();
  if (!isPromise(promise)) {
    throw new Error('reportAsyncTime: fn(...) expected to return a promise.');
  }
  const result = await promise;
  const elapsedTime = Date.now() - startTime;
  reporter.reportTime(message, elapsedTime);
  return [result, elapsedTime];
}

async function reportAsyncTime<T>(
  reporter: Reporter,
  message: string,
  fn: () => ?Promise<T>,
): Promise<T> {
  const startTime = Date.now();
  const promise = fn();
  if (!isPromise(promise)) {
    throw new Error('reportAsyncTime: fn(...) expected to return a promise.');
  }
  const result = await promise;
  const elapsedTime = Date.now() - startTime;
  reporter.reportTime(message, elapsedTime);
  return result;
}

module.exports = {
  reportTime,
  reportAndReturnTime,
  reportAsyncTime,
  reportAndReturnAsyncTime,
};
