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

var _require = require('../core/CompilerError'),
    createCompilerError = _require.createCompilerError;

function generateAbstractTypeRefinementKey(schema, type) {
  if (!schema.isAbstractType(type)) {
    throw createCompilerError('Expected an abstract type');
  }

  return "__is".concat(schema.getTypeString(type));
}

module.exports = generateAbstractTypeRefinementKey;