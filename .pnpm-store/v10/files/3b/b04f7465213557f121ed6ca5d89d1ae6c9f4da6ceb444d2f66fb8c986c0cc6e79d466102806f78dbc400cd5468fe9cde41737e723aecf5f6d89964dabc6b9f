/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const invariant = require('invariant');

const {eachWithCombinedError} = require('./CompilerError');

import type CompilerContext, {CompilerContextDocument} from './CompilerContext';
import type {
  Argument,
  ClientExtension,
  Condition,
  Defer,
  Directive,
  Fragment,
  FragmentSpread,
  IR,
  InlineDataFragmentSpread,
  InlineFragment,
  LinkedField,
  ListValue,
  Literal,
  LocalArgumentDefinition,
  ModuleImport,
  ObjectFieldValue,
  ObjectValue,
  Request,
  Root,
  RootArgumentDefinition,
  ScalarField,
  SplitOperation,
  Stream,
  Variable,
} from './IR';

type NodeVisitor<S> = {|
  Argument?: NodeVisitorFunction<Argument, S>,
  ClientExtension?: NodeVisitorFunction<ClientExtension, S>,
  Condition?: NodeVisitorFunction<Condition, S>,
  Defer?: NodeVisitorFunction<Defer, S>,
  Directive?: NodeVisitorFunction<Directive, S>,
  Fragment?: NodeVisitorFunction<Fragment, S>,
  FragmentSpread?: NodeVisitorFunction<FragmentSpread, S>,
  InlineFragment?: NodeVisitorFunction<InlineFragment, S>,
  LinkedField?: NodeVisitorFunction<LinkedField, S>,
  ListValue?: NodeVisitorFunction<ListValue, S>,
  Literal?: NodeVisitorFunction<Literal, S>,
  LocalArgumentDefinition?: NodeVisitorFunction<LocalArgumentDefinition, S>,
  ModuleImport?: NodeVisitorFunction<ModuleImport, S>,
  ObjectFieldValue?: NodeVisitorFunction<ObjectFieldValue, S>,
  ObjectValue?: NodeVisitorFunction<ObjectValue, S>,
  Request?: NodeVisitorFunction<Request, S>,
  Root?: NodeVisitorFunction<Root, S>,
  InlineDataFragmentSpread?: NodeVisitorFunction<InlineDataFragmentSpread, S>,
  RootArgumentDefinition?: NodeVisitorFunction<RootArgumentDefinition, S>,
  ScalarField?: NodeVisitorFunction<ScalarField, S>,
  SplitOperation?: NodeVisitorFunction<SplitOperation, S>,
  Stream?: NodeVisitorFunction<Stream, S>,
  Variable?: NodeVisitorFunction<Variable, S>,
|};
type NodeVisitorFunction<N: IR, S> = (node: N, state: S) => ?N;

/**
 * @public
 *
 * Helper for writing compiler transforms that apply "map" and/or "filter"-style
 * operations to compiler contexts. The `visitor` argument accepts a map of IR
 * kinds to user-defined functions that can map nodes of that kind to new values
 * (of the same kind).
 *
 * If a visitor function is defined for a kind, the visitor function is
 * responsible for traversing its children (by calling `this.traverse(node)`)
 * and returning either the input (to indicate no changes), a new node (to
 * indicate changes), or null/undefined (to indicate the removal of that node
 * from the output).
 *
 * If a visitor function is *not* defined for a kind, a default traversal is
 * used to evaluate its children.
 *
 * The `stateInitializer` argument accepts an optional function to construct the
 * state for each document (fragment or root) in the context. Any documents for
 * which the initializer returns null/undefined is deleted from the context
 * without being traversed.
 *
 * Example: Alias all scalar fields with the reverse of their name:
 *
 * ```
 * transform(context, {
 *   ScalarField: visitScalarField,
 * });
 *
 * function visitScalarField(field: ScalarField, state: State): ?ScalarField {
 *   // Traverse child nodes - for a scalar field these are the arguments &
 *   // directives.
 *   const nextField = this.traverse(field, state);
 *   // Return a new node with a different alias.
 *   return {
 *     ...nextField,
 *     alias: nextField.name.split('').reverse().join(''),
 *   };
 * }
 * ```
 */
function transform<S>(
  context: CompilerContext,
  visitor: NodeVisitor<S>,
  stateInitializer: void | (CompilerContextDocument => ?S),
): CompilerContext {
  const transformer = new Transformer(context, visitor);
  return context.withMutations(ctx => {
    let nextContext = ctx;
    eachWithCombinedError(context.documents(), prevNode => {
      let nextNode;
      if (stateInitializer === undefined) {
        nextNode = transformer.visit(prevNode, (undefined: $FlowFixMe));
      } else {
        const state = stateInitializer(prevNode);
        if (state != null) {
          nextNode = transformer.visit(prevNode, state);
        }
      }
      if (!nextNode) {
        nextContext = nextContext.remove(prevNode.name);
      } else if (nextNode !== prevNode) {
        nextContext = nextContext.replace(nextNode);
      }
    });
    return nextContext;
  });
}

/**
 * @internal
 */
class Transformer<S> {
  _context: CompilerContext;
  _states: Array<S>;
  _visitor: NodeVisitor<S>;

  constructor(context: CompilerContext, visitor: NodeVisitor<S>) {
    this._context = context;
    this._states = [];
    this._visitor = visitor;
  }

  /**
   * @public
   *
   * Returns the original compiler context that is being transformed. This can
   * be used to look up fragments by name, for example.
   */
  getContext(): CompilerContext {
    return this._context;
  }

  /**
   * @public
   *
   * Transforms the node, calling a user-defined visitor function if defined for
   * the node's kind. Uses the given state for this portion of the traversal.
   *
   * Note: This differs from `traverse` in that it calls a visitor function for
   * the node itself.
   */
  visit<N: IR>(node: N, state: S): ?N {
    this._states.push(state);
    const nextNode = this._visit(node);
    this._states.pop();
    return nextNode;
  }

  /**
   * @public
   *
   * Transforms the children of the given node, skipping the user-defined
   * visitor function for the node itself. Uses the given state for this portion
   * of the traversal.
   *
   * Note: This differs from `visit` in that it does not call a visitor function
   * for the node itself.
   */
  traverse<N: IR>(node: N, state: S): ?N {
    this._states.push(state);
    const nextNode = this._traverse(node);
    this._states.pop();
    return nextNode;
  }

  _visit<N: IR>(node: N): ?N {
    const nodeVisitor = this._visitor[node.kind];
    if (nodeVisitor) {
      // If a handler for the kind is defined, it is responsible for calling
      // `traverse` to transform children as necessary.
      const state = this._getState();
      const nextNode = nodeVisitor.call(this, (node: $FlowIssue), state);
      return (nextNode: $FlowIssue);
    }
    // Otherwise traverse is called automatically.
    return this._traverse(node);
  }

  _traverse<N: IR>(prevNode: N): ?N {
    let nextNode;
    switch (prevNode.kind) {
      case 'Argument':
        nextNode = this._traverseChildren(prevNode, null, ['value']);
        break;
      case 'Literal':
      case 'LocalArgumentDefinition':
      case 'RootArgumentDefinition':
      case 'Variable':
        nextNode = prevNode;
        break;
      case 'Defer':
        nextNode = this._traverseChildren(prevNode, ['selections'], ['if']);
        break;
      case 'Stream':
        nextNode = this._traverseChildren(
          prevNode,
          ['selections'],
          ['if', 'initialCount'],
        );
        break;
      case 'ClientExtension':
        nextNode = this._traverseChildren(prevNode, ['selections']);
        break;
      case 'Directive':
        nextNode = this._traverseChildren(prevNode, ['args']);
        break;
      case 'ModuleImport':
        nextNode = this._traverseChildren(prevNode, ['selections']);
        if (!nextNode.selections.length) {
          nextNode = null;
        }
        break;
      case 'FragmentSpread':
      case 'ScalarField':
        nextNode = this._traverseChildren(prevNode, ['args', 'directives']);
        break;
      case 'InlineDataFragmentSpread':
        nextNode = this._traverseChildren(prevNode, ['selections']);
        break;
      case 'LinkedField':
        nextNode = this._traverseChildren(prevNode, [
          'args',
          'directives',
          'selections',
        ]);
        if (!nextNode.selections.length) {
          nextNode = null;
        }
        break;
      case 'ListValue':
        nextNode = this._traverseChildren(prevNode, ['items']);
        break;
      case 'ObjectFieldValue':
        nextNode = this._traverseChildren(prevNode, null, ['value']);
        break;
      case 'ObjectValue':
        nextNode = this._traverseChildren(prevNode, ['fields']);
        break;
      case 'Condition':
        nextNode = this._traverseChildren(
          prevNode,
          ['directives', 'selections'],
          ['condition'],
        );
        if (!nextNode.selections.length) {
          nextNode = null;
        }
        break;
      case 'InlineFragment':
        nextNode = this._traverseChildren(prevNode, [
          'directives',
          'selections',
        ]);
        if (!nextNode.selections.length) {
          nextNode = null;
        }
        break;
      case 'Fragment':
      case 'Root':
        nextNode = this._traverseChildren(prevNode, [
          'argumentDefinitions',
          'directives',
          'selections',
        ]);
        break;
      case 'Request':
        nextNode = this._traverseChildren(prevNode, null, ['fragment', 'root']);
        break;
      case 'SplitOperation':
        nextNode = this._traverseChildren(prevNode, ['selections']);
        break;
      default:
        (prevNode: empty);
        invariant(false, 'IRTransformer: Unknown kind `%s`.', prevNode.kind);
    }
    return nextNode;
  }

  _traverseChildren<N: IR>(
    prevNode: N,
    pluralKeys: ?Array<string>,
    singularKeys?: Array<string>,
  ): N {
    let nextNode;
    pluralKeys &&
      pluralKeys.forEach(key => {
        const prevItems = prevNode[key];
        if (!prevItems) {
          return;
        }
        invariant(
          Array.isArray(prevItems),
          'IRTransformer: Expected data for `%s` to be an array, got `%s`.',
          key,
          prevItems,
        );
        const nextItems = this._map(prevItems);
        if (nextNode || nextItems !== prevItems) {
          nextNode = nextNode || {...prevNode};
          nextNode[key] = nextItems;
        }
      });
    singularKeys &&
      singularKeys.forEach(key => {
        const prevItem = prevNode[key];
        if (!prevItem) {
          return;
        }
        const nextItem = this._visit(prevItem);
        if (nextNode || nextItem !== prevItem) {
          nextNode = nextNode || {...prevNode};
          nextNode[key] = nextItem;
        }
      });
    return nextNode || prevNode;
  }

  _map<N: IR>(prevItems: Array<N>): Array<N> {
    let nextItems;
    prevItems.forEach((prevItem, index) => {
      const nextItem = this._visit(prevItem);
      if (nextItems || nextItem !== prevItem) {
        nextItems = nextItems || prevItems.slice(0, index);
        if (nextItem) {
          nextItems.push(nextItem);
        }
      }
    });
    return nextItems || prevItems;
  }

  _getState(): S {
    invariant(
      this._states.length,
      'IRTransformer: Expected a current state to be set but found none. ' +
        'This is usually the result of mismatched number of pushState()/popState() ' +
        'calls.',
    );
    return this._states[this._states.length - 1];
  }
}

module.exports = {transform};
