/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+relay
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const invariant = require('invariant');

function getValueAtPath(
  data: mixed,
  path: $ReadOnlyArray<string | number>,
): mixed {
  let result = data;
  for (const key of path) {
    if (result == null) {
      return null;
    }
    if (typeof key === 'number') {
      invariant(
        Array.isArray(result),
        'Relay: Expected an array when extracting value at path. ' +
          "If you're seeing this, this is likely a bug in Relay.",
      );
      result = result[key];
    } else {
      invariant(
        typeof result === 'object' && !Array.isArray(result),
        'Relay: Expected an object when extracting value at path. ' +
          "If you're seeing this, this is likely a bug in Relay.",
      );
      result = result[key];
    }
  }
  return result;
}

module.exports = getValueAtPath;
