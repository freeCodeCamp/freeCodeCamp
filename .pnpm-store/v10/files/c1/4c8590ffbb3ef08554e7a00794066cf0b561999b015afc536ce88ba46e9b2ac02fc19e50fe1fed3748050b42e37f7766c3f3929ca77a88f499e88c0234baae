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
  InlineDataFragmentSpread,
  InlineFragment,
  IR,
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
type NodeVisitorFunction<N: IR, S> = (node: N, state: S) => void;

/**
 * @public
 *
 * Helper for writing AST validators that shares the same logic with
 * the transfomer
 *
 */
function validate<S>(
  context: CompilerContext,
  visitor: NodeVisitor<S>,
  stateInitializer: void | (CompilerContextDocument => ?S),
): void {
  const validator = new Validator(context, visitor);
  eachWithCombinedError(context.documents(), prevNode => {
    if (stateInitializer === undefined) {
      validator.visit(prevNode, (undefined: $FlowFixMe));
    } else {
      const state = stateInitializer(prevNode);
      if (state != null) {
        validator.visit(prevNode, state);
      }
    }
  });
}

/**
 * @internal
 */
class Validator<S> {
  _context: CompilerContext;
  _states: Array<S>;
  _visitor: NodeVisitor<S>;

  constructor(context: CompilerContext, visitor: NodeVisitor<S>) {
    this._context = context;
    this._states = [];
    this._visitor = visitor;
  }

  getContext(): CompilerContext {
    return this._context;
  }

  visit<N: IR>(node: N, state: S): void {
    this._states.push(state);
    this._visit(node);
    this._states.pop();
  }

  traverse<N: IR>(node: N, state: S): void {
    this._states.push(state);
    this._traverse(node);
    this._states.pop();
  }

  _visit<N: IR>(node: N): void {
    const nodeVisitor = this._visitor[node.kind];
    if (nodeVisitor) {
      // If a handler for the kind is defined, it is responsible for calling
      // `traverse` to transform children as necessary.
      const state = this._getState();
      nodeVisitor.call(this, (node: $FlowIssue), state);
      return;
    }
    // Otherwise traverse is called automatically.
    this._traverse(node);
  }

  _traverse<N: IR>(prevNode: N): void {
    switch (prevNode.kind) {
      case 'Argument':
        this._traverseChildren(prevNode, null, ['value']);
        break;
      case 'Literal':
      case 'LocalArgumentDefinition':
      case 'RootArgumentDefinition':
      case 'Variable':
        break;
      case 'Defer':
        this._traverseChildren(prevNode, ['selections'], ['if']);
        break;
      case 'Stream':
        this._traverseChildren(
          prevNode,
          ['selections'],
          ['if', 'initialCount'],
        );
        break;
      case 'ClientExtension':
        this._traverseChildren(prevNode, ['selections']);
        break;
      case 'Directive':
        this._traverseChildren(prevNode, ['args']);
        break;
      case 'ModuleImport':
        this._traverseChildren(prevNode, ['selections']);
        break;
      case 'FragmentSpread':
      case 'ScalarField':
        this._traverseChildren(prevNode, ['args', 'directives']);
        break;
      case 'InlineDataFragmentSpread':
        this._traverseChildren(prevNode, ['selections']);
        break;
      case 'LinkedField':
        this._traverseChildren(prevNode, ['args', 'directives', 'selections']);
        break;
      case 'ListValue':
        this._traverseChildren(prevNode, ['items']);
        break;
      case 'ObjectFieldValue':
        this._traverseChildren(prevNode, null, ['value']);
        break;
      case 'ObjectValue':
        this._traverseChildren(prevNode, ['fields']);
        break;
      case 'Condition':
        this._traverseChildren(
          prevNode,
          ['directives', 'selections'],
          ['condition'],
        );
        break;
      case 'InlineFragment':
        this._traverseChildren(prevNode, ['directives', 'selections']);
        break;
      case 'Fragment':
      case 'Root':
        this._traverseChildren(prevNode, [
          'argumentDefinitions',
          'directives',
          'selections',
        ]);
        break;
      case 'Request':
        this._traverseChildren(prevNode, null, ['fragment', 'root']);
        break;
      case 'SplitOperation':
        this._traverseChildren(prevNode, ['selections']);
        break;
      default:
        (prevNode: empty);
        invariant(false, 'IRValidator: Unknown kind `%s`.', prevNode.kind);
    }
  }

  _traverseChildren<N: IR>(
    prevNode: N,
    pluralKeys: ?Array<string>,
    singularKeys?: Array<string>,
  ): void {
    pluralKeys &&
      pluralKeys.forEach(key => {
        const prevItems = prevNode[key];
        if (!prevItems) {
          return;
        }
        invariant(
          Array.isArray(prevItems),
          'IRValidator: Expected data for `%s` to be an array, got `%s`.',
          key,
          prevItems,
        );
        prevItems.forEach(prevItem => this._visit(prevItem));
      });
    singularKeys &&
      singularKeys.forEach(key => {
        const prevItem = prevNode[key];
        if (!prevItem) {
          return;
        }
        this._visit(prevItem);
      });
  }

  _getState(): S {
    invariant(
      this._states.length,
      'IRValidator: Expected a current state to be set but found none. ' +
        'This is usually the result of mismatched number of pushState()/popState() ' +
        'calls.',
    );
    return this._states[this._states.length - 1];
  }
}

module.exports = {validate};
