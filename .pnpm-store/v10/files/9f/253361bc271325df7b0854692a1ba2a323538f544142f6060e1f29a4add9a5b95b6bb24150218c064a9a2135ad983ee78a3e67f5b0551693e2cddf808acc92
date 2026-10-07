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

const IRTransformer = require('../core/IRTransformer');
const SchemaUtils = require('../core/SchemaUtils');

const invariant = require('invariant');
const nullthrows = require('nullthrows');

const {getRelayHandleKey} = require('relay-runtime');

import type CompilerContext from '../core/CompilerContext';
import type {LinkedField, ScalarField} from '../core/IR';

function fieldHandleTransform(context: CompilerContext): CompilerContext {
  return IRTransformer.transform(context, {
    LinkedField: visitField,
    ScalarField: visitField,
  });
}

/**
 * @internal
 */
function visitField<F: LinkedField | ScalarField>(field: F): F {
  // $FlowFixMe[incompatible-use]
  const nextField = field.kind === 'LinkedField' ? this.traverse(field) : field;
  const handles = nextField.handles;
  if (!handles || !handles.length) {
    return nextField;
  }
  // ensure exactly one handle
  invariant(
    handles.length === 1,
    'FieldHandleTransform: Expected fields to have at most one ' +
      '"handle" property, got `%s`.',
    handles.join(', '),
  );
  // $FlowFixMe[incompatible-use]
  const context: CompilerContext = this.getContext();
  const schema = context.getSchema();
  const alias = nextField.alias;
  const handle = handles[0];
  const name = getRelayHandleKey(handle.name, handle.key, nextField.name);
  const filters = handle.filters;
  const args = filters
    ? nextField.args.filter(arg => filters.indexOf(arg.name) !== -1)
    : [];
  if (handle.dynamicKey != null) {
    args.push({
      kind: 'Argument',
      loc: handle.dynamicKey.loc,
      name: '__dynamicKey',
      type: SchemaUtils.getNullableStringInput(schema),
      value: nullthrows(handle.dynamicKey),
    });
  }

  return ({
    ...nextField,
    args,
    alias,
    name,
    handles: null,
  }: $FlowIssue);
}

module.exports = {
  transform: fieldHandleTransform,
};
