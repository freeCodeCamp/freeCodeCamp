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

function nullthrows(x) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Got unexpected null or undefined';

  if (x == null) {
    throw new Error(message);
  }

  return x;
}

module.exports = nullthrows;