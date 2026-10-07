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

const md5 = require('./md5');

const {print} = require('graphql');

import type {ExecutableDefinitionNode} from 'graphql';

function getDefinitionNodeHash(node: ExecutableDefinitionNode): string {
  return md5(print(node));
}

module.exports = getDefinitionNodeHash;
