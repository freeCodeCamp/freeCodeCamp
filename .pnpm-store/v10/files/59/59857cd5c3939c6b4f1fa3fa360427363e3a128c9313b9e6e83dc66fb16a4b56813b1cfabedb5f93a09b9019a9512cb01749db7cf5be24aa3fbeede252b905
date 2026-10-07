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

const getNormalizationOperationName = require('../core/getNormalizationOperationName');

import type CompilerContext from '../core/CompilerContext';
import type {
  LinkedField,
  InlineFragment,
  ModuleImport,
  SplitOperation,
} from '../core/IR';
import type {CompositeTypeID} from '../core/Schema';

type State = {|
  parentType: CompositeTypeID,
  splitOperations: Map<string, SplitOperation>,
|};

/**
 * This transform creates a SplitOperation root for every ModuleImport.
 */
function splitMatchTransform(context: CompilerContext): CompilerContext {
  const splitOperations = new Map();
  const transformedContext = IRTransformer.transform(
    context,
    {
      LinkedField: visitLinkedField,
      InlineFragment: visitInlineFragment,
      ModuleImport: visitModuleImport,
    },
    node => ({
      parentType: node.type,
      splitOperations,
    }),
  );
  return transformedContext.addAll(Array.from(splitOperations.values()));
}

function visitLinkedField(field: LinkedField, state: State): LinkedField {
  // $FlowFixMe[incompatible-use]
  return this.traverse(field, {
    parentType: field.type,
    splitOperations: state.splitOperations,
  });
}

function visitInlineFragment(
  fragment: InlineFragment,
  state: State,
): InlineFragment {
  // $FlowFixMe[incompatible-use]
  return this.traverse(fragment, {
    parentType: fragment.typeCondition,
    splitOperations: state.splitOperations,
  });
}

function visitModuleImport(node: ModuleImport, state: State): ModuleImport {
  // It's possible for the same fragment to be selected in multiple usages
  // of @module: skip processing a node if its SplitOperation has already
  // been generated
  const normalizationName = getNormalizationOperationName(node.name);
  const createdSplitOperation = state.splitOperations.get(normalizationName);
  if (createdSplitOperation) {
    createdSplitOperation.parentSources.add(node.sourceDocument);
    return node;
  }
  // $FlowFixMe[incompatible-use]
  const transformedNode = this.traverse(node, state);
  const splitOperation: SplitOperation = {
    kind: 'SplitOperation',
    name: normalizationName,
    selections: transformedNode.selections,
    loc: {kind: 'Derived', source: node.loc},
    parentSources: new Set([node.sourceDocument]),
    metadata: {
      derivedFrom: transformedNode.name,
    },
    type: state.parentType,
  };
  state.splitOperations.set(normalizationName, splitOperation);
  return transformedNode;
}

module.exports = {
  transform: splitMatchTransform,
};
