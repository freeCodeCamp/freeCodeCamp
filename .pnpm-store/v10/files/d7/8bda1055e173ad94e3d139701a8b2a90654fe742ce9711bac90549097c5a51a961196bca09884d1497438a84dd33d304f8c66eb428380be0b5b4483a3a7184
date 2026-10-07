/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @format
 */
// flowlint ambiguous-object-type:error
'use strict';

var IRTransformer = require('../core/IRTransformer');

var getNormalizationOperationName = require('../core/getNormalizationOperationName');

/**
 * This transform creates a SplitOperation root for every ModuleImport.
 */
function splitMatchTransform(context) {
  var splitOperations = new Map();
  var transformedContext = IRTransformer.transform(context, {
    LinkedField: visitLinkedField,
    InlineFragment: visitInlineFragment,
    ModuleImport: visitModuleImport
  }, function (node) {
    return {
      parentType: node.type,
      splitOperations: splitOperations
    };
  });
  return transformedContext.addAll(Array.from(splitOperations.values()));
}

function visitLinkedField(field, state) {
  // $FlowFixMe[incompatible-use]
  return this.traverse(field, {
    parentType: field.type,
    splitOperations: state.splitOperations
  });
}

function visitInlineFragment(fragment, state) {
  // $FlowFixMe[incompatible-use]
  return this.traverse(fragment, {
    parentType: fragment.typeCondition,
    splitOperations: state.splitOperations
  });
}

function visitModuleImport(node, state) {
  // It's possible for the same fragment to be selected in multiple usages
  // of @module: skip processing a node if its SplitOperation has already
  // been generated
  var normalizationName = getNormalizationOperationName(node.name);
  var createdSplitOperation = state.splitOperations.get(normalizationName);

  if (createdSplitOperation) {
    createdSplitOperation.parentSources.add(node.sourceDocument);
    return node;
  } // $FlowFixMe[incompatible-use]


  var transformedNode = this.traverse(node, state);
  var splitOperation = {
    kind: 'SplitOperation',
    name: normalizationName,
    selections: transformedNode.selections,
    loc: {
      kind: 'Derived',
      source: node.loc
    },
    parentSources: new Set([node.sourceDocument]),
    metadata: {
      derivedFrom: transformedNode.name
    },
    type: state.parentType
  };
  state.splitOperations.set(normalizationName, splitOperation);
  return transformedNode;
}

module.exports = {
  transform: splitMatchTransform
};