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

var OR_LIST_MAX_LENGTH = 5;

var _require = require('../core/CompilerError'),
    createCompilerError = _require.createCompilerError;

function orList(items) {
  if (items.length === 0) {
    throw createCompilerError('Expected an array of strings. Got empty array');
  }

  if (items.length === 1) {
    return items[0];
  }

  if (items.length > OR_LIST_MAX_LENGTH) {
    return items.slice(0, OR_LIST_MAX_LENGTH).join(', ') + ', ...';
  }

  var selected = items.slice();
  var lastItem = selected.pop();
  return selected.join(', ') + ' or ' + lastItem;
}

module.exports = orList;