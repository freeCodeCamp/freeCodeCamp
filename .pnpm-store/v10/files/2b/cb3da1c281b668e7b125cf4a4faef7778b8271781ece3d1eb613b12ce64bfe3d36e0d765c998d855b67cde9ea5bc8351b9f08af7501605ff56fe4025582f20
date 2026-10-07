/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

/**
 * Creates a copy of the provided value, ensuring any nested objects have their
 * keys sorted such that equivalent values would have identical JSON.stringify
 * results.
 */
function stableCopy<T: mixed>(value: T): T {
  if (!value || typeof value !== 'object') {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(stableCopy);
  }
  const keys = Object.keys(value).sort();
  const stable = {};
  for (let i = 0; i < keys.length; i++) {
    stable[keys[i]] = stableCopy(value[keys[i]]);
  }
  return (stable: any);
}

module.exports = stableCopy;
