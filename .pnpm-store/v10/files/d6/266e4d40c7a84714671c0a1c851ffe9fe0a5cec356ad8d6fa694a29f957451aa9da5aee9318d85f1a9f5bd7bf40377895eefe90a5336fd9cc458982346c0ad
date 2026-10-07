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
const {getFieldDefinitionStrict} = require('../core/getFieldDefinition');

import type CompilerContext from '../core/CompilerContext';
import type {
  Directive,
  Field,
  Fragment,
  Root,
  SplitOperation,
} from '../core/IR';
import type {Schema, TypeID, Argument} from '../core/Schema';

type State = {|
  +rootNode: Fragment | Root | SplitOperation,
  +parentType: TypeID,
|};

/*
 * Validate required arguments are provided after transforms filling in arguments
 */
function validateRequiredArguments(context: CompilerContext): CompilerContext {
  IRValidator.validate(
    context,
    {
      Directive: visitDirective,
      InlineFragment: visitInlineFragment,
      LinkedField: visitField,
      ScalarField: visitField,
      // FragmentSpread validation is done in ApplyFragmentArgumentTransform
    },
    node => ({rootNode: node, parentType: node.type}),
  );
  return context;
}

function visitDirective(node: Directive, {rootNode}: State): void {
  // $FlowFixMe[incompatible-use]
  const context: CompilerContext = this.getContext();
  const directiveDef = context.getSchema().getDirective(node.name);
  if (directiveDef == null) {
    return;
  }
  validateRequiredArgumentsOnNode(
    context.getSchema(),
    node,
    directiveDef.args,
    rootNode,
  );
}

function visitInlineFragment(fragment, {rootNode}: State): void {
  // $FlowFixMe[incompatible-use]
  this.traverse(fragment, {
    rootNode,
    parentType: fragment.typeCondition,
  });
}

function visitField(node: Field, {parentType, rootNode}: State): void {
  // $FlowFixMe[incompatible-use]
  const context: CompilerContext = this.getContext();
  const schema = context.getSchema();
  const definition = getFieldDefinitionStrict(schema, parentType, node.name);
  if (definition == null) {
    const isLegacyFatInterface = node.directives.some(
      directive => directive.name === 'fixme_fat_interface',
    );
    if (!isLegacyFatInterface) {
      throw createUserError(
        `Unknown field '${node.name}' on type ` +
          `'${schema.getTypeString(parentType)}'.`,
        [node.loc],
      );
    }
  } else {
    validateRequiredArgumentsOnNode(
      schema,
      node,
      schema.getFieldConfig(definition).args,
      rootNode,
    );
  }
  // $FlowFixMe[incompatible-use]
  this.traverse(node, {
    rootNode,
    parentType: node.type,
  });
}

function validateRequiredArgumentsOnNode(
  schema: Schema,
  node: Directive | Field,
  definitionArgs: $ReadOnlyArray<Argument>,
  rootNode: Fragment | Root | SplitOperation,
): void {
  const nodeArgsSet = new Set(node.args.map(arg => arg.name));
  for (const arg of definitionArgs) {
    if (
      arg.defaultValue == null &&
      schema.isNonNull(arg.type) &&
      !nodeArgsSet.has(arg.name)
    ) {
      throw createUserError(
        `Required argument '${arg.name}: ${schema.getTypeString(arg.type)}' ` +
          `is missing on '${node.name}' in '${rootNode.name}'.`,
        [node.loc, rootNode.loc],
      );
    }
  }
}

module.exports = {
  transform: validateRequiredArguments,
};
