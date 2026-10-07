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

const {createUserError} = require('../core/CompilerError');

import type CompilerContext from '../core/CompilerContext';
import type {ScalarField, LinkedField} from '../core/IR';

function visitField<T: ScalarField | LinkedField>(field: T): T {
  if (field.alias === 'id' && field.name !== 'id') {
    throw createUserError(
      'Relay does not allow aliasing fields to `id`. ' +
        'This name is reserved for the globally unique `id` field on ' +
        '`Node`.',
      [field.loc],
    );
  }
  // $FlowFixMe[incompatible-use]
  return this.traverse(field);
}

/**
 * This is not an actual transform (but more a validation)
 * Relay does not allow aliasing fields to `id`.
 */
function disallowIdAsAlias(context: CompilerContext): CompilerContext {
  return IRTransformer.transform(context, {
    ScalarField: visitField,
    LinkedField: visitField,
  });
}

module.exports = {
  transform: disallowIdAsAlias,
};
