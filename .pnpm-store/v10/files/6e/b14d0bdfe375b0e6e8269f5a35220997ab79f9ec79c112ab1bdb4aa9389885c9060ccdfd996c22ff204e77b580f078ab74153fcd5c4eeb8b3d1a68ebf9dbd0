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

var md5 = require('./md5');

var _require = require('graphql'),
    print = _require.print;

function getDefinitionNodeHash(node) {
  return md5(print(node));
}

module.exports = getDefinitionNodeHash;