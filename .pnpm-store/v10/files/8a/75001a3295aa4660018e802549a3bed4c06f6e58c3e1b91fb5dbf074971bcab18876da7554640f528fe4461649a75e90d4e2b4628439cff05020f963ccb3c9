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
import type {InlineFragment, Fragment, FragmentSpread} from '../core/IR';

type FragmentVisitorCache = Map<FragmentSpread, FragmentSpread>;
type FragmentVisitor = (fragmentSpread: FragmentSpread) => ?FragmentSpread;
/**
 * A transform that inlines all fragments and removes them.
 */
function inlineFragmentsTransform(context: CompilerContext): CompilerContext {
  const visitFragmentSpread = fragmentSpreadVisitor(new Map());
  return IRTransformer.transform(context, {
    Fragment: visitFragment,
    FragmentSpread: visitFragmentSpread,
  });
}

function visitFragment(fragment: Fragment): null {
  return null;
}

function fragmentSpreadVisitor(cache: FragmentVisitorCache): FragmentVisitor {
  return function visitFragmentSpread(fragmentSpread: FragmentSpread) {
    let traverseResult = cache.get(fragmentSpread);
    if (traverseResult != null) {
      return traverseResult;
    }
    invariant(
      fragmentSpread.args.length === 0,
      'InlineFragmentsTransform: Cannot flatten fragment spread `%s` with ' +
        'arguments. Use the `ApplyFragmentArgumentTransform` before flattening',
      fragmentSpread.name,
    );
    // $FlowFixMe[incompatible-use]
    const fragment: Fragment = this.getContext().getFragment(
      fragmentSpread.name,
      fragmentSpread.loc,
    );
    const result: InlineFragment = {
      kind: 'InlineFragment',
      directives: fragmentSpread.directives,
      loc: {kind: 'Derived', source: fragmentSpread.loc},
      metadata: fragmentSpread.metadata,
      selections: fragment.selections,
      typeCondition: fragment.type,
    };
    // $FlowFixMe[incompatible-use]
    traverseResult = this.traverse(result);
    cache.set(fragmentSpread, traverseResult);
    return traverseResult;
  };
}

module.exports = {
  transform: inlineFragmentsTransform,
};
