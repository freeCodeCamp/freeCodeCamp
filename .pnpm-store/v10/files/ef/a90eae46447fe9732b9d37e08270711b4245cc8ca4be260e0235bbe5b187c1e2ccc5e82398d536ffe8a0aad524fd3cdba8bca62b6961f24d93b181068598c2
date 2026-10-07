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

function hasUnaliasedSelection(field, fieldName) {
  return field.selections.some(function (selection) {
    return selection.kind === 'ScalarField' && selection.alias === fieldName && selection.name === fieldName;
  });
}

module.exports = {
  hasUnaliasedSelection: hasUnaliasedSelection
};