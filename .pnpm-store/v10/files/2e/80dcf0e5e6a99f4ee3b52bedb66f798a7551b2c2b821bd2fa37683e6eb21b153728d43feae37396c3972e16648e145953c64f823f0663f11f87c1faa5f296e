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

const areEqual = require('areEqual');
const invariant = require('invariant');

const {SCALAR_FIELD} = require('../util/RelayConcreteNode');
const {getHandleStorageKey} = require('./RelayStoreUtils');

import type {
  NormalizationScalarField,
  NormalizationSelection,
} from '../util/NormalizationNode';
import type {NormalizationScalarHandle} from '../util/NormalizationNode';
import type {Variables} from '../util/RelayRuntimeTypes';

/**
 * @private
 *
 * Creates a clone of the supplied `handleField` by finding the original scalar
 * field (on which the handle was declared) among the sibling `selections`.
 */
function cloneRelayScalarHandleSourceField(
  handleField: NormalizationScalarHandle,
  selections: $ReadOnlyArray<NormalizationSelection>,
  variables: Variables,
): NormalizationScalarField {
  const sourceField = selections.find(
    source =>
      source.kind === SCALAR_FIELD &&
      source.name === handleField.name &&
      source.alias === handleField.alias &&
      areEqual(source.args, handleField.args),
  );
  invariant(
    sourceField && sourceField.kind === SCALAR_FIELD,
    'cloneRelayScalarHandleSourceField: Expected a corresponding source field for ' +
      'handle `%s`.',
    handleField.handle,
  );
  const handleKey = getHandleStorageKey(handleField, variables);
  return {
    kind: 'ScalarField',
    alias: sourceField.alias,
    name: handleKey,
    storageKey: handleKey,
    args: null,
  };
}

module.exports = cloneRelayScalarHandleSourceField;
