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

/**
 * Recursively "deep" freezes the supplied object.
 *
 * For convenience, and for consistency with the behavior of `Object.freeze`,
 * returns the now-frozen original object.
 */
function deepFreeze<T: interface {}>(object: T): T {
  Object.freeze(object);
  Object.getOwnPropertyNames(object).forEach(name => {
    // $FlowFixMe[prop-missing]
    const property = object[name];
    if (
      property &&
      typeof property === 'object' &&
      !Object.isFrozen(property)
    ) {
      deepFreeze(property);
    }
  });
  return object;
}

module.exports = deepFreeze;
