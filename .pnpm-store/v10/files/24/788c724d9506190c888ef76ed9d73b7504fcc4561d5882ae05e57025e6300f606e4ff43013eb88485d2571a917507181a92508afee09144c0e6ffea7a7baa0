/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const {createCompilerError} = require('../core/CompilerError');

import type {Schema, TypeID} from '../core/Schema';

function generateAbstractTypeRefinementKey(
  schema: Schema,
  type: TypeID,
): string {
  if (!schema.isAbstractType(type)) {
    throw createCompilerError('Expected an abstract type');
  }
  return `__is${schema.getTypeString(type)}`;
}

module.exports = generateAbstractTypeRefinementKey;
