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

const {LINKED_FIELD} = require('../util/RelayConcreteNode');
const {getHandleStorageKey} = require('./RelayStoreUtils');

import type {
  NormalizationLinkedField,
  NormalizationSelection,
} from '../util/NormalizationNode';
import type {NormalizationLinkedHandle} from '../util/NormalizationNode';
import type {Variables} from '../util/RelayRuntimeTypes';

/**
 * @private
 *
 * Creates a clone of the supplied `handleField` by finding the original linked
 * field (on which the handle was declared) among the sibling `selections`, and
 * copying its selections into the clone.
 */
function cloneRelayHandleSourceField(
  handleField: NormalizationLinkedHandle,
  selections: $ReadOnlyArray<NormalizationSelection>,
  variables: Variables,
): NormalizationLinkedField {
  const sourceField = selections.find(
    source =>
      source.kind === LINKED_FIELD &&
      source.name === handleField.name &&
      source.alias === handleField.alias &&
      areEqual(source.args, handleField.args),
  );
  invariant(
    sourceField && sourceField.kind === LINKED_FIELD,
    'cloneRelayHandleSourceField: Expected a corresponding source field for ' +
      'handle `%s`.',
    handleField.handle,
  );
  const handleKey = getHandleStorageKey(handleField, variables);
  return {
    kind: 'LinkedField',
    alias: sourceField.alias,
    name: handleKey,
    storageKey: handleKey,
    args: null,
    concreteType: sourceField.concreteType,
    plural: sourceField.plural,
    selections: sourceField.selections,
  };
}

module.exports = cloneRelayHandleSourceField;
