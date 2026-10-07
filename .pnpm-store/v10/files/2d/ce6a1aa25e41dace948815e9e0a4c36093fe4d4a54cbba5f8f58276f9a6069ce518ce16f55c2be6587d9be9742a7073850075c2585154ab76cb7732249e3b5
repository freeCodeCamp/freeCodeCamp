/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

function nullthrows<T>(
  x: ?T,
  message?: string = 'Got unexpected null or undefined',
): T {
  if (x == null) {
    throw new Error(message);
  }
  return x;
}

module.exports = nullthrows;
