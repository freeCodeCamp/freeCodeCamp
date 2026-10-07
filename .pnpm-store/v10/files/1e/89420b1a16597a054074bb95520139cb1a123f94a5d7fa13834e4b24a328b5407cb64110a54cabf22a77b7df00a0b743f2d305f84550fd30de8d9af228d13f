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

const invariant = require('invariant');

import type CompilerContext from '../core/CompilerContext';
import type {Condition, Fragment, Node, Selection} from '../core/IR';

type ConditionResult = 'fail' | 'pass' | 'variable';

const FAIL = 'fail';
const PASS = 'pass';
const VARIABLE = 'variable';

/**
 * A tranform that removes unreachable IR nodes from all documents in a corpus.
 * The following nodes are removed:
 * - Any node with `@include(if: false)`
 * - Any node with `@skip(if: true)`
 * - Any node with empty `selections`
 */
function skipUnreachableNodeTransform(
  context: CompilerContext,
): CompilerContext {
  const fragments: Map<string, ?Fragment> = new Map();
  const nextContext = IRTransformer.transform(context, {
    Root: node => transformNode(context, fragments, node),
    SplitOperation: node => transformNode(context, fragments, node),
    // Fragments are included below where referenced.
    // Unreferenced fragments are not included.
    Fragment: id => null,
  });
  return (Array.from(fragments.values()): Array<?Fragment>).reduce(
    (ctx: CompilerContext, fragment) => (fragment ? ctx.add(fragment) : ctx),
    nextContext,
  );
}

function transformNode<T: Node>(
  context: CompilerContext,
  fragments: Map<string, ?Fragment>,
  node: T,
): ?T {
  const queue: Array<Selection> = [...node.selections];
  let selections;
  while (queue.length) {
    const selection: Selection = queue.shift();
    let nextSelection;
    switch (selection.kind) {
      case 'Condition':
        const match = testCondition(selection);
        if (match === PASS) {
          queue.unshift(...selection.selections);
        } else if (match === VARIABLE) {
          nextSelection = transformNode(context, fragments, selection);
        }
        break;
      case 'FragmentSpread': {
        // Skip fragment spreads if the referenced fragment is empty
        if (!fragments.has(selection.name)) {
          const fragment = context.getFragment(selection.name);
          const nextFragment = transformNode(context, fragments, fragment);
          fragments.set(selection.name, nextFragment);
        }
        if (fragments.get(selection.name)) {
          nextSelection = selection;
        }
        break;
      }
      case 'ClientExtension':
        nextSelection = transformNode(context, fragments, selection);
        break;
      case 'ModuleImport':
        nextSelection = transformNode(context, fragments, selection);
        break;
      case 'LinkedField':
        nextSelection = transformNode(context, fragments, selection);
        break;
      case 'InlineFragment':
        // TODO combine with the LinkedField case when flow supports this
        nextSelection = transformNode(context, fragments, selection);
        break;
      case 'Defer':
        nextSelection = transformNode(context, fragments, selection);
        break;
      case 'Stream':
        nextSelection = transformNode(context, fragments, selection);
        break;
      case 'ScalarField':
        nextSelection = selection;
        break;
      case 'InlineDataFragmentSpread':
        invariant(
          false,
          'SkipUnreachableNodeTransform: Did not expect an ' +
            'InlineDataFragmentSpread here. Only expecting ' +
            'InlineDataFragmentSpread in reader ASTs and this transform to ' +
            'run only on normalization ASTs.',
        );
      // fallthrough
      default:
        (selection.kind: empty);
        invariant(
          false,
          'SkipUnreachableNodeTransform: Unexpected selection kind `%s`.',
          selection.kind,
        );
    }
    if (nextSelection) {
      selections = selections || [];
      selections.push(nextSelection);
    }
  }
  if (selections) {
    return ({
      ...node,
      selections,
    }: $FlowIssue);
  }
  return null;
}

/**
 * Determines whether a condition statically passes/fails or is unknown
 * (variable).
 */
function testCondition(condition: Condition): ConditionResult {
  if (condition.condition.kind === 'Variable') {
    return VARIABLE;
  }
  return condition.condition.value === condition.passingValue ? PASS : FAIL;
}

module.exports = {
  transform: skipUnreachableNodeTransform,
};
