/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 */
// flowlint ambiguous-object-type:error
'use strict';

function getName(node) {
  if (node.name == null) {
    throw new Error('All fragments and operations have to have names in Relay');
  }

  return node.name.value;
}

module.exports = {
  getName: getName
};