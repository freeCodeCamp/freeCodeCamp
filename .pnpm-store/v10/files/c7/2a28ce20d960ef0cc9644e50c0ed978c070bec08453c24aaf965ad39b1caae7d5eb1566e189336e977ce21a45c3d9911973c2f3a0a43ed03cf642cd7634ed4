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
const RelayCompilerScope = require('../core/RelayCompilerScope');

const getIdentifierForArgumentValue = require('../core/getIdentifierForArgumentValue');
const murmurHash = require('../util/murmurHash');

const {
  createCompilerError,
  createNonRecoverableUserError,
} = require('../core/CompilerError');

import type CompilerContext from '../core/CompilerContext';
import type {
  Argument,
  ArgumentValue,
  Condition,
  Defer,
  Directive,
  Field,
  Fragment,
  FragmentSpread,
  IR,
  Node,
  Selection,
  Stream,
} from '../core/IR';
import type {Scope} from '../core/RelayCompilerScope';

const {getFragmentScope, getRootScope} = RelayCompilerScope;

type PendingFragment =
  | {|kind: 'pending'|}
  | {|kind: 'resolved', value: ?Fragment|};

/**
 * A transform that converts a set of documents containing fragments/fragment
 * spreads *with* arguments to one where all arguments have been inlined. This
 * is effectively static currying of functions. Nodes are changed as follows:
 * - Fragment spreads with arguments are replaced with references to an inlined
 *   version of the referenced fragment.
 * - Fragments with argument definitions are cloned once per unique set of
 *   arguments, with the name changed to original name + hash and all nested
 *   variable references changed to the value of that variable given its
 *   arguments.
 * - Field & directive argument variables are replaced with the value of those
 *   variables in context.
 * - All nodes are cloned with updated children.
 *
 * The transform also handles statically passing/failing Condition nodes:
 * - Literal Conditions with a passing value are elided and their selections
 *   inlined in their parent.
 * - Literal Conditions with a failing value are removed.
 * - Nodes that would become empty as a result of the above are removed.
 *
 * Note that unreferenced fragments are not added to the output.
 */
function applyFragmentArgumentTransform(
  context: CompilerContext,
): CompilerContext {
  const fragments: Map<string, PendingFragment> = new Map();
  let nextContext = IRTransformer.transform(context, {
    Root: node => {
      const scope = getRootScope(node.argumentDefinitions);
      return transformNode(context, fragments, scope, node, [node]);
    },
    SplitOperation: node => {
      return transformNode(context, fragments, {}, node, [node]);
    },
    // Fragments are included below where referenced.
    // Unreferenced fragments are not included.
    Fragment: () => null,
  });

  for (const pendingFragment of fragments.values()) {
    if (pendingFragment.kind === 'resolved' && pendingFragment.value) {
      nextContext = nextContext.add(pendingFragment.value);
    }
  }
  return nextContext;
}

function transformNode<T: Node>(
  context: CompilerContext,
  fragments: Map<string, PendingFragment>,
  scope: Scope,
  node: T,
  errorContext: $ReadOnlyArray<IR>,
): ?T {
  const selections = transformSelections(
    context,
    fragments,
    scope,
    node.selections,
    errorContext,
  );
  if (!selections) {
    return null;
  }
  if (node.hasOwnProperty('directives')) {
    const directives = transformDirectives(
      scope,
      (node: $FlowIssue).directives,
      errorContext,
    );
    return ({
      ...node,
      directives,
      selections,
    }: any);
  }
  return ({
    ...node,
    selections,
  }: $FlowIssue);
}

function transformDeferStreamNode<T: Defer | Stream>(
  context: CompilerContext,
  fragments: Map<string, PendingFragment>,
  scope: Scope,
  node: T,
  errorContext: $ReadOnlyArray<IR>,
): ?Selection {
  const nextNode = transformNode(context, fragments, scope, node, errorContext);
  if (!nextNode) {
    return null;
  }
  (nextNode: T);
  if (nextNode.if) {
    const ifVal = transformValue(scope, nextNode.if, errorContext);
    if (
      ifVal.kind === 'Literal' &&
      ifVal.value === false &&
      node.selections &&
      node.selections.length === 1
    ) {
      // Skip Defer/Stream wrapper with literal if: false
      return node.selections[0];
    }
    // $FlowFixMe[cannot-write] nextNode is uniquely owned
    nextNode.if = ifVal;
  }
  if (nextNode.useCustomizedBatch) {
    // $FlowFixMe[cannot-write] nextNode is uniquely owned
    nextNode.useCustomizedBatch = transformValue(
      scope,
      nextNode.useCustomizedBatch,
      errorContext,
    );
  }
  if (nextNode.initialCount) {
    // $FlowFixMe[cannot-write] nextNode is uniquely owned
    nextNode.initialCount = transformValue(
      scope,
      nextNode.initialCount,
      errorContext,
    );
  }
  return nextNode;
}

function transformFragmentSpread(
  context: CompilerContext,
  fragments: Map<string, PendingFragment>,
  scope: Scope,
  spread: FragmentSpread,
  errorContext: $ReadOnlyArray<IR>,
): ?FragmentSpread {
  const directives = transformDirectives(
    scope,
    spread.directives,
    errorContext,
  );
  const appliedFragment = transformFragment(
    context,
    fragments,
    scope,
    spread,
    spread.args,
    [...errorContext, spread],
  );
  if (!appliedFragment) {
    return null;
  }
  const transformed: FragmentSpread = {
    ...spread,
    kind: 'FragmentSpread',
    args: [],
    directives,
    name: appliedFragment.name,
  };
  return transformed;
}

function transformField<T: Field>(
  context: CompilerContext,
  fragments: Map<string, PendingFragment>,
  scope: Scope,
  field: T,
  errorContext: $ReadOnlyArray<IR>,
): ?T {
  const args = transformArguments(scope, field.args, errorContext);
  const directives = transformDirectives(scope, field.directives, errorContext);
  if (field.kind === 'LinkedField') {
    const selections = transformSelections(
      context,
      fragments,
      scope,
      field.selections,
      errorContext,
    );
    if (!selections) {
      return null;
    }
    return ({
      ...field,
      args,
      directives,
      selections,
    }: $FlowFixMe);
  } else {
    return {
      ...field,
      args,
      directives,
    };
  }
}

function transformCondition(
  context: CompilerContext,
  fragments: Map<string, PendingFragment>,
  scope: Scope,
  node: Condition,
  errorContext: $ReadOnlyArray<IR>,
): ?$ReadOnlyArray<Selection> {
  const condition = transformValue(scope, node.condition, errorContext);
  if (!(condition.kind === 'Literal' || condition.kind === 'Variable')) {
    // This transform does whole-program optimization, errors in
    // a single document could break invariants and/or cause
    // additional spurious errors.
    throw createNonRecoverableUserError(
      'A non-scalar value was applied to an @include or @skip directive, ' +
        'the `if` argument value must be a ' +
        'variable or a literal Boolean.',
      [condition.loc],
    );
  }
  if (condition.kind === 'Literal' && condition.value !== node.passingValue) {
    // Dead code, no need to traverse further.
    return null;
  }
  const selections = transformSelections(
    context,
    fragments,
    scope,
    node.selections,
    errorContext,
  );
  if (!selections) {
    return null;
  }
  if (condition.kind === 'Literal' && condition.value === node.passingValue) {
    // Always passes, return inlined selections
    return selections;
  }
  return [
    {
      ...node,
      condition,
      selections,
    },
  ];
}

function transformSelections(
  context: CompilerContext,
  fragments: Map<string, PendingFragment>,
  scope: Scope,
  selections: $ReadOnlyArray<Selection>,
  errorContext: $ReadOnlyArray<IR>,
): ?$ReadOnlyArray<Selection> {
  let nextSelections = null;
  selections.forEach(selection => {
    let nextSelection;
    if (
      selection.kind === 'ClientExtension' ||
      selection.kind === 'InlineDataFragmentSpread' ||
      selection.kind === 'InlineFragment' ||
      selection.kind === 'ModuleImport'
    ) {
      nextSelection = transformNode(
        context,
        fragments,
        scope,
        selection,
        errorContext,
      );
    } else if (selection.kind === 'Defer' || selection.kind === 'Stream') {
      nextSelection = transformDeferStreamNode(
        context,
        fragments,
        scope,
        selection,
        errorContext,
      );
    } else if (selection.kind === 'FragmentSpread') {
      nextSelection = transformFragmentSpread(
        context,
        fragments,
        scope,
        selection,
        errorContext,
      );
    } else if (selection.kind === 'Condition') {
      const conditionSelections = transformCondition(
        context,
        fragments,
        scope,
        selection,
        errorContext,
      );
      if (conditionSelections) {
        nextSelections = nextSelections || [];
        nextSelections.push(...conditionSelections);
      }
    } else if (
      selection.kind === 'LinkedField' ||
      selection.kind === 'ScalarField'
    ) {
      nextSelection = transformField(
        context,
        fragments,
        scope,
        selection,
        errorContext,
      );
    } else {
      (selection: empty);
      throw createCompilerError(
        `ApplyFragmentArgumentTransform: Unsupported kind '${selection.kind}'.`,
        [selection.loc],
      );
    }
    if (nextSelection) {
      nextSelections = nextSelections || [];
      nextSelections.push(nextSelection);
    }
  });
  return nextSelections;
}

function transformDirectives(
  scope: Scope,
  directives: $ReadOnlyArray<Directive>,
  errorContext: $ReadOnlyArray<IR>,
): $ReadOnlyArray<Directive> {
  return directives.map(directive => {
    const args = transformArguments(scope, directive.args, errorContext);
    return {
      ...directive,
      args,
    };
  });
}

function transformArguments(
  scope: Scope,
  args: $ReadOnlyArray<Argument>,
  errorContext: $ReadOnlyArray<IR>,
): $ReadOnlyArray<Argument> {
  return args.map(arg => {
    const value = transformValue(scope, arg.value, errorContext);
    return value === arg.value ? arg : {...arg, value};
  });
}

function transformValue(
  scope: Scope,
  value: ArgumentValue,
  errorContext: $ReadOnlyArray<IR>,
): ArgumentValue {
  if (value.kind === 'Variable') {
    const scopeValue = scope[value.variableName];
    if (scopeValue == null) {
      // This transform does whole-program optimization, errors in
      // a single document could break invariants and/or cause
      // additional spurious errors.
      throw createNonRecoverableUserError(
        `Variable '$${value.variableName}' is not in scope.`,
        [errorContext[0]?.loc, value.loc].filter(Boolean),
      );
    }
    return scopeValue;
  } else if (value.kind === 'ObjectValue') {
    return {
      ...value,
      fields: value.fields.map(field => ({
        ...field,
        value: transformValue(scope, field.value, errorContext),
      })),
    };
  } else if (value.kind === 'ListValue') {
    return {
      ...value,
      items: value.items.map(item => transformValue(scope, item, errorContext)),
    };
  }
  return value;
}

/**
 * Apply arguments to a fragment, creating a new fragment (with the given name)
 * with all values recursively applied.
 */
function transformFragment(
  context: CompilerContext,
  fragments: Map<string, PendingFragment>,
  parentScope: Scope,
  spread: FragmentSpread,
  args: $ReadOnlyArray<Argument>,
  errorContext: $ReadOnlyArray<IR>,
): ?Fragment {
  const schema = context.getSchema();
  const fragment = context.getFragment(spread.name, spread.loc);
  const argumentsHash = hashArguments(args, parentScope, errorContext);
  const fragmentName = argumentsHash
    ? `${fragment.name}_${argumentsHash}`
    : fragment.name;
  const appliedFragment = fragments.get(fragmentName);
  if (appliedFragment) {
    if (appliedFragment.kind === 'resolved') {
      return appliedFragment.value;
    } else {
      // This transform does whole-program optimization, errors in
      // a single document could break invariants and/or cause
      // additional spurious errors.
      throw createNonRecoverableUserError(
        `Found a circular reference from fragment '${fragment.name}'.`,
        errorContext.map(node => node.loc),
      );
    }
  }
  const fragmentScope = getFragmentScope(
    schema,
    fragment.argumentDefinitions,
    args,
    parentScope,
    spread,
  );
  // record that this fragment is pending to detect circular references
  fragments.set(fragmentName, {kind: 'pending'});
  let transformedFragment = null;
  const selections = transformSelections(
    context,
    fragments,
    fragmentScope,
    fragment.selections,
    errorContext,
  );
  if (selections) {
    transformedFragment = {
      ...fragment,
      selections,
      name: fragmentName,
      argumentDefinitions: [],
    };
  }
  fragments.set(fragmentName, {kind: 'resolved', value: transformedFragment});
  return transformedFragment;
}

function hashArguments(
  args: $ReadOnlyArray<Argument>,
  scope: Scope,
  errorContext: $ReadOnlyArray<IR>,
): ?string {
  if (!args.length) {
    return null;
  }
  const sortedArgs = [...args].sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  const printedArgs = JSON.stringify(
    sortedArgs.map(arg => {
      let value;
      if (arg.value.kind === 'Variable') {
        value = scope[arg.value.variableName];
        if (value == null) {
          // This transform does whole-program optimization, errors in
          // a single document could break invariants and/or cause
          // additional spurious errors.
          throw createNonRecoverableUserError(
            `Variable '$${arg.value.variableName}' is not in scope.`,
            [errorContext[0]?.loc, arg.value.loc].filter(Boolean),
          );
        }
      } else {
        value = arg.value;
      }
      return {
        name: arg.name,
        value: getIdentifierForArgumentValue(value),
      };
    }),
  );
  return murmurHash(printedArgs);
}

module.exports = {
  transform: applyFragmentArgumentTransform,
};
