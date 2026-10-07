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
/**
 * Recursively "deep" freezes the supplied object.
 *
 * For convenience, and for consistency with the behavior of `Object.freeze`,
 * returns the now-frozen original object.
 */

function deepFreeze(object) {
  Object.freeze(object);
  Object.getOwnPropertyNames(object).forEach(function (name) {
    // $FlowFixMe[prop-missing]
    var property = object[name];

    if (property && typeof property === 'object' && !Object.isFrozen(property)) {
      deepFreeze(property);
    }
  });
  return object;
}

module.exports = deepFreeze;