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

const {createUserError} = require('../core/CompilerError');

import type CompilerContext from '../core/CompilerContext';
import type {
  Fragment,
  FragmentSpread,
  InlineDataFragmentSpread,
} from '../core/IR';

const SCHEMA_EXTENSION = `
directive @inline on FRAGMENT_DEFINITION
`;

/**
 * A transform that converts fragment spreads where the referenced fragment
 * is annotated with @inline to a InlineDataFragmentSpread.
 * InlineDataFragmentSpreads have the selections of the referenced fragment inlined.
 */
function inlineDataFragmentTransform(
  context: CompilerContext,
): CompilerContext {
  return IRTransformer.transform(context, {
    // $FlowFixMe[prop-missing] - this visitor intentionally changes node types
    // $FlowFixMe[incompatible-call] - this visitor intentionally changes node types
    FragmentSpread: visitFragmentSpread,
    Fragment: visitFragment,
  });
}

function visitFragment(fragment: Fragment): Fragment {
  // $FlowFixMe[incompatible-use]
  const transformedFragment = this.traverse(fragment);

  const inlineDirective = transformedFragment.directives.find(
    directive => directive.name === 'inline',
  );
  if (inlineDirective == null) {
    return transformedFragment;
  }
  return {
    ...transformedFragment,
    directives: transformedFragment.directives.filter(
      directive => directive !== inlineDirective,
    ),
    metadata: {
      ...(transformedFragment.metadata || {}),
      inlineData: true,
    },
  };
}

function visitFragmentSpread(
  fragmentSpread: FragmentSpread,
): FragmentSpread | InlineDataFragmentSpread {
  // $FlowFixMe[incompatible-use]
  const transformedFragmentSpread: FragmentSpread = this.traverse(
    fragmentSpread,
  );

  // $FlowFixMe[incompatible-use]
  const context: CompilerContext = this.getContext();
  const fragment = context.get(transformedFragmentSpread.name);
  if (
    !fragment ||
    fragment.kind !== 'Fragment' ||
    !fragment.directives.some(directive => directive.name === 'inline')
  ) {
    return transformedFragmentSpread;
  }

  if (
    fragment.argumentDefinitions.length > 0 ||
    transformedFragmentSpread.args.length > 0
  ) {
    throw createUserError(
      'Variables are not yet supported inside @inline fragments.',
      [fragment.argumentDefinitions[0].loc],
    );
  }

  if (transformedFragmentSpread.directives.length > 0) {
    throw createUserError(
      'Directives on fragment spreads for @inline fragments are not yet ' +
        'supported',
      [transformedFragmentSpread.loc],
    );
  }

  // $FlowFixMe[incompatible-use]
  const transformedFragment = (this.visit(fragment): Fragment);

  return ({
    kind: 'InlineDataFragmentSpread',
    loc: transformedFragmentSpread.loc,
    metadata: transformedFragmentSpread.metadata,
    name: transformedFragmentSpread.name,
    selections: [
      {
        directives: [],
        kind: 'InlineFragment',
        loc: {kind: 'Derived', source: transformedFragmentSpread.loc},
        metadata: null,
        selections: transformedFragment.selections,
        typeCondition: transformedFragment.type,
      },
    ],
  }: InlineDataFragmentSpread);
}

module.exports = {
  SCHEMA_EXTENSION,
  transform: inlineDataFragmentTransform,
};
