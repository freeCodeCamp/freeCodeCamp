/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const IRTransformer = require('../core/IRTransformer');

import type CompilerContext from '../core/CompilerContext';
const IMap = require('immutable').Map;
const partitionArray = require('../util/partitionArray');
const getIdentifierForSelection = require('../core/getIdentifierForSelection');
const invariant = require('invariant');

import type {Schema} from '../core/Schema';

import type {Fragment, Node, Root, SplitOperation, Selection} from '../core/IR';

/**
 * A simplified representation of a document: keys in the map are unique
 * identifiers for the selections of a node, values are either null (for scalars)
 * or nested maps for items with subselections (linked fields, inline fragments,
 * etc).
 */
// $FlowFixMe[value-as-type]
type SelectionMap = IMap<string, ?SelectionMap>;

/**
 * A transform that removes redundant fields and fragment spreads. Redundancy is
 * defined in this context as any selection that is guaranteed to already be
 * fetched by an ancestor selection. This can occur in two cases:
 *
 * 1. Simple duplicates at the same level of the document can always be skipped:
 *
 * ```
 * fragment Foo on FooType {
 *   id
 *   id
 *   ...Bar
 *   ...Bar
 * }
 * ```
 *
 * Becomes
 *
 * ```
 * fragment Foo on FooType {
 *   id
 *   ...Bar
 * }
 * ```
 *
 * 2. Inline fragments and conditions introduce the possibility for duplication
 * at different levels of the tree. Whenever a selection is fetched in a parent,
 * it is redundant to also fetch it in a child:
 *
 * ```
 * fragment Foo on FooType {
 *   id
 *   ... on OtherType {
 *     id # 1
 *   }
 *   ... on FooType @include(if: $cond) {
 *     id # 2
 *   }
 * }
 * ```
 *
 * Becomes:
 *
 * ```
 * fragment Foo on FooType {
 *   id
 * }
 * ```
 *
 * In this example:
 * - 1 can be skipped because `id` is already fetched by the parent. Even
 *   though the type is different (FooType/OtherType), the inline fragment
 *   cannot match without the outer fragment matching so the outer `id` is
 *   guaranteed to already be fetched.
 * - 2 can be skipped for similar reasons: it doesn't matter if the condition
 *   holds, `id` is already fetched by the parent regardless.
 *
 * This transform also handles more complicated cases in which selections are
 * nested:
 *
 * ```
 * fragment Foo on FooType {
 *   a {
 *     bb
 *   }
 *   ... on OtherType {
 *     a {
 *       bb # 1
 *       cc
 *     }
 *   }
 *  }
 * ```
 *
 * Becomes
 *
 * ```
 * fragment Foo on FooType {
 *   a {
 *     bb
 *   }
 *   ... on OtherType {
 *     a {
 *       cc
 *     }
 *   }
 *  }
 * ```
 *
 * 1 can be skipped because it is already fetched at the outer level.
 */
function skipRedundantNodesTransform(
  context: CompilerContext,
): CompilerContext {
  return IRTransformer.transform(context, {
    Root: visitNode,
    SplitOperation: visitNode,
    Fragment: visitNode,
  });
}

let cache = new Map();
function visitNode<T: Fragment | Root | SplitOperation>(node: T): ?T {
  cache = new Map();
  // $FlowFixMe[incompatible-use]
  const context: CompilerContext = this.getContext();
  return transformNode(context.getSchema(), node, new IMap()).node;
}

/**
 * The most straightforward approach would be two passes: one to record the
 * structure of the document, one to prune duplicates. This implementation uses
 * a single pass. Selections are sorted with fields first, "conditionals"
 * (inline fragments & conditions) last. This means that all fields that are
 * guaranteed to be fetched are encountered prior to any duplicates that may be
 * fetched within a conditional.
 *
 * Because selections fetched within a conditional are not guaranteed to be
 * fetched in the parent, a fork of the selection map is created when entering a
 * conditional. The sort ensures that guaranteed fields have already been seen
 * prior to the clone.
 */
function transformNode<T: Node>(
  schema: Schema,
  node: T,
  selectionMap: SelectionMap,
): {
  selectionMap: SelectionMap,
  node: ?T,
  ...
} {
  // This will optimize a traversal of the same subselections.
  // If it's the same node, and selectionMap is empty
  // result of transformNode has to be the same.
  const isEmptySelectionMap = selectionMap.size === 0;
  let result;
  if (isEmptySelectionMap) {
    // $FlowFixMe[escaped-generic]
    result = cache.get(node);
    if (result != null) {
      return result;
    }
  }
  const selections = [];
  sortSelections(node.selections).forEach(selection => {
    const identifier = getIdentifierForSelection(schema, selection);
    switch (selection.kind) {
      case 'ScalarField':
      case 'FragmentSpread': {
        if (!selectionMap.has(identifier)) {
          selections.push(selection);
          selectionMap = selectionMap.set(identifier, null);
        }
        break;
      }
      case 'Defer':
      case 'Stream':
      case 'ModuleImport':
      case 'ClientExtension':
      case 'InlineDataFragmentSpread':
      case 'LinkedField': {
        const transformed = transformNode(
          schema,
          selection,
          selectionMap.get(identifier) || new IMap(),
        );
        if (transformed.node) {
          selections.push(transformed.node);
          selectionMap = selectionMap.set(identifier, transformed.selectionMap);
        }
        break;
      }
      case 'InlineFragment':
      case 'Condition': {
        // Fork the selection map to prevent conditional selections from
        // affecting the outer "guaranteed" selections.
        const transformed = transformNode(
          schema,
          selection,
          selectionMap.get(identifier) || selectionMap,
        );
        if (transformed.node) {
          selections.push(transformed.node);
          selectionMap = selectionMap.set(identifier, transformed.selectionMap);
        }
        break;
      }
      default:
        (selection: empty);
        invariant(
          false,
          'SkipRedundantNodesTransform: Unexpected node kind `%s`.',
          selection.kind,
        );
    }
  });
  const nextNode: any = selections.length ? {...node, selections} : null;
  result = {selectionMap, node: nextNode};
  if (isEmptySelectionMap) {
    // $FlowFixMe[escaped-generic]
    cache.set(node, result);
  }
  // $FlowFixMe[incompatible-return]
  return result;
}

/**
 * Sort inline fragments and conditions after other selections.
 */
function sortSelections(
  selections: $ReadOnlyArray<Selection>,
): $ReadOnlyArray<Selection> {
  const isScalarOrLinkedField = selection =>
    selection.kind === 'ScalarField' || selection.kind === 'LinkedField';
  const [scalarsAndLinkedFields, rest] = partitionArray(
    selections,
    isScalarOrLinkedField,
  );
  return [...scalarsAndLinkedFields, ...rest];
}

module.exports = {
  transform: skipRedundantNodesTransform,
};
