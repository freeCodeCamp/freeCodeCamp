/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict
 */

// flowlint ambiguous-object-type:error

'use strict';

import type {ExecutableDefinitionNode} from 'graphql';

function getName(node: ExecutableDefinitionNode): string {
  if (node.name == null) {
    throw new Error('All fragments and operations have to have names in Relay');
  }
  return node.name.value;
}

module.exports = {
  getName,
};
