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
import type {
  ClientExtension,
  Defer,
  LinkedField,
  Selection,
  Stream,
} from '../core/IR';

type State = {rootClientSelection: ?Selection, ...};

const NODEKIND_DIRECTIVE_MAP = {
  Defer: 'defer',
  Stream: 'stream',
};

/*
 * Validate that server-only directives are not used inside client fields
 */
function validateServerOnlyDirectives(
  context: CompilerContext,
): CompilerContext {
  IRValidator.validate(
    context,
    {
      ClientExtension: visitClientExtension,
      Defer: visitTransformedDirective,
      Stream: visitTransformedDirective,
      LinkedField: visitLinkedField,
      ScalarField: stopVisit,
    },
    () => ({
      rootClientSelection: null,
    }),
  );
  return context;
}

// If an empty visitor is defined, we no longer automatically visit child nodes
// such as arguments.
function stopVisit() {}

// Only visits selections as an optimization to not look at arguments
function visitLinkedField(node: LinkedField, state: State): void {
  for (const selection of node.selections) {
    // $FlowFixMe[incompatible-use]
    this.visit(selection, state);
  }
}

function visitClientExtension(node: ClientExtension, state: State): void {
  for (const selection of node.selections) {
    // $FlowFixMe[incompatible-use]
    this.visit(selection, {
      rootClientSelection: selection,
    });
  }
}

function visitTransformedDirective(node: Defer | Stream, state: State): void {
  if (state.rootClientSelection) {
    throwError(
      `@${NODEKIND_DIRECTIVE_MAP[node.kind]}`,
      node.loc,
      state.rootClientSelection.loc,
    );
  }
  // directive used only on client fields
  if (node.selections.every(sel => sel.kind === 'ClientExtension')) {
    const clientExtension = node.selections[0];
    throwError(
      `@${NODEKIND_DIRECTIVE_MAP[node.kind]}`,
      node.loc,
      clientExtension && clientExtension.kind === 'ClientExtension'
        ? clientExtension.selections[0]?.loc
        : null,
    );
  }
  // $FlowFixMe[incompatible-use]
  this.traverse(node, state);
}

function throwError(directiveName, directiveLoc, clientExtensionLoc) {
  throw createUserError(
    `Unexpected directive: ${directiveName}. ` +
      'This directive can only be used on fields/fragments that are ' +
      'fetched from the server schema, but it is used ' +
      'inside a client-only selection.',
    clientExtensionLoc == null || directiveLoc === clientExtensionLoc
      ? [directiveLoc]
      : [directiveLoc, clientExtensionLoc],
  );
}

module.exports = {
  transform: validateServerOnlyDirectives,
};
