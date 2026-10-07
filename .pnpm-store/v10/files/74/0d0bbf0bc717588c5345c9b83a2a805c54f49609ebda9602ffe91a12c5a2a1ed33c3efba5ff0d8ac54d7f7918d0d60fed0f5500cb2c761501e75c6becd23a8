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

import type {LinkedField} from '../core/IR';

function hasUnaliasedSelection(field: LinkedField, fieldName: string): boolean {
  return field.selections.some(
    selection =>
      selection.kind === 'ScalarField' &&
      selection.alias === fieldName &&
      selection.name === fieldName,
  );
}

module.exports = {hasUnaliasedSelection};
