/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

function sortObjectByKey<T: ?{[key: string]: mixed}>(obj: T): T {
  if (obj == null) {
    return obj;
  }
  const result = {};
  for (const key of Object.keys(obj).sort()) {
    result[key] = obj[key];
  }
  // $FlowFixMe[incompatible-return]
  return result;
}

module.exports = sortObjectByKey;
