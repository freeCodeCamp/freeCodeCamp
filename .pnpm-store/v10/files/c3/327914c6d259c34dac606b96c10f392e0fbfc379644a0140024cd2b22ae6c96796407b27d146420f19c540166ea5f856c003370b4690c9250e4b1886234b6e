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

const IRValidator = require('../core/IRValidator');

const {createUserError} = require('../core/CompilerError');

import type CompilerContext from '../core/CompilerContext';
import type {Root} from '../core/IR';

function visitRoot(node: Root) {
  for (const selection of node.selections) {
    if (selection.kind === 'ScalarField' && selection.name === '__typename') {
      throw createUserError(
        'Relay does not allow `__typename` field on Query, Mutation or Subscription',
        [selection.loc],
      );
    }
  }
}

function stopVisit() {}

function disallowTypenameOnRoot(context: CompilerContext): CompilerContext {
  IRValidator.validate(context, {
    Root: visitRoot,
    Fragment: stopVisit,
  });
  return context;
}

module.exports = {
  transform: disallowTypenameOnRoot,
};
