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

const {createCompilerError, createUserError} = require('../core/CompilerError');

import type CompilerContext from '../core/CompilerContext';
import type {Definition, Node, Selection} from '../core/IR';
import type {TypeID} from '../core/Schema';

let cachesByNode = new Map();
function clientExtensionTransform(context: CompilerContext): CompilerContext {
  cachesByNode = new Map();
  return IRTransformer.transform(context, {
    Fragment: traverseDefinition,
    Root: traverseDefinition,
    SplitOperation: traverseDefinition,
  });
}

function traverseDefinition<T: Definition>(node: T): T {
  // $FlowFixMe[incompatible-use]
  const compilerContext: CompilerContext = this.getContext();

  const schema = compilerContext.getSchema();

  let rootType;
  switch (node.kind) {
    case 'Root':
      switch (node.operation) {
        case 'query':
          rootType = schema.getQueryType();
          break;
        case 'mutation':
          rootType = schema.getMutationType();
          break;
        case 'subscription':
          rootType = schema.getSubscriptionType();
          break;
        default:
          (node.operation: empty);
      }
      break;
    case 'SplitOperation':
      if (!schema.isServerType(node.type)) {
        throw createUserError(
          'ClientExtensionTransform: SplitOperation (@module) can be created ' +
            'only for fragments that defined on a server type',
          [node.loc],
        );
      }
      rootType = node.type;
      break;
    case 'Fragment':
      rootType = node.type;
      break;
    default:
      (node: empty);
  }
  if (rootType == null) {
    throw createUserError(
      `ClientExtensionTransform: Expected the type of \`${node.name}\` to have been defined in the schema. Make sure both server and ` +
        'client schema are up to date.',
      [node.loc],
    );
  }
  return traverseSelections(node, compilerContext, rootType);
}

function traverseSelections<T: Node>(
  node: T,
  compilerContext: CompilerContext,
  parentType: TypeID,
): T {
  // $FlowFixMe[escaped-generic]
  let nodeCache = cachesByNode.get(node);
  if (nodeCache == null) {
    nodeCache = new Map();
    // $FlowFixMe[escaped-generic]
    cachesByNode.set(node, nodeCache);
  }
  let result = nodeCache.get(parentType);
  if (result != null) {
    /* $FlowFixMe[incompatible-return] - TODO: type IRTransformer to allow
     * changing result type */
    return result;
  }
  const schema = compilerContext.getSchema();

  const clientSelections = [];
  const serverSelections = cowMap(node.selections, selection => {
    switch (selection.kind) {
      case 'ClientExtension':
        throw createCompilerError(
          'Unexpected ClientExtension node before ClientExtensionTransform',
          [selection.loc],
        );
      case 'Condition':
      case 'Defer':
      case 'InlineDataFragmentSpread':
      case 'ModuleImport':
      case 'Stream':
        return traverseSelections(selection, compilerContext, parentType);
      case 'ScalarField':
        if (
          schema.isClientDefinedField(
            schema.assertCompositeType(schema.getRawType(parentType)),
            selection,
          )
        ) {
          clientSelections.push(selection);
          return null;
        } else {
          return selection;
        }
      case 'LinkedField': {
        if (
          schema.isClientDefinedField(
            schema.assertCompositeType(schema.getRawType(parentType)),
            selection,
          )
        ) {
          clientSelections.push(selection);
          return null;
        }
        return traverseSelections(selection, compilerContext, selection.type);
      }
      case 'InlineFragment': {
        const isClientType = !schema.isServerType(selection.typeCondition);

        if (isClientType) {
          clientSelections.push(selection);
          return null;
        }
        return traverseSelections(
          selection,
          compilerContext,
          selection.typeCondition,
        );
      }
      case 'FragmentSpread': {
        return selection;
      }
      default:
        (selection: empty);
        throw createCompilerError(
          `ClientExtensionTransform: Unexpected selection of kind \`${selection.kind}\`.`,
          [selection.loc],
        );
    }
  });
  if (clientSelections.length === 0) {
    if (serverSelections === node.selections) {
      result = node;
    } else {
      result = {
        ...node,
        selections: serverSelections,
      };
    }
  } else {
    result = {
      ...node,
      selections: [
        ...serverSelections,
        // Group client fields under a single ClientExtension node
        {
          kind: 'ClientExtension',
          loc: node.loc,
          metadata: null,
          selections: clientSelections,
        },
      ],
    };
  }
  // $FlowFixMe[escaped-generic]
  nodeCache.set(parentType, result);
  /* $FlowFixMe[incompatible-return] - TODO: type IRTransformer to allow
   * changing result type */
  return result;
}

/**
 * Maps an array with copy-on-write semantics.
 * `null` return values from the map function are removals.
 */
function cowMap(
  selections: $ReadOnlyArray<Selection>,
  f: Selection => Selection | null,
) {
  for (let i = 0; i < selections.length; i++) {
    const prevSelection = selections[i];
    const nextSelection = f(prevSelection);
    if (prevSelection !== nextSelection) {
      const result = selections.slice(0, i);
      if (nextSelection != null) {
        result.push(nextSelection);
      }
      for (let j = i + 1; j < selections.length; j++) {
        const innerNextSelection = f(selections[j]);
        if (innerNextSelection != null) {
          result.push(innerNextSelection);
        }
      }
      return result;
    }
  }
  // nothing changed, return original
  return selections;
}

module.exports = {
  transform: clientExtensionTransform,
};
