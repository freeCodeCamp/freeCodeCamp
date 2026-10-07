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

var invariant = require('invariant');

/**
 * A transform that inlines all fragments and removes them.
 */
function inlineFragmentsTransform(context) {
  var visitFragmentSpread = fragmentSpreadVisitor(new Map());
  return IRTransformer.transform(context, {
    Fragment: visitFragment,
    FragmentSpread: visitFragmentSpread
  });
}

function visitFragment(fragment) {
  return null;
}

function fragmentSpreadVisitor(cache) {
  return function visitFragmentSpread(fragmentSpread) {
    var traverseResult = cache.get(fragmentSpread);

    if (traverseResult != null) {
      return traverseResult;
    }

    !(fragmentSpread.args.length === 0) ? process.env.NODE_ENV !== "production" ? invariant(false, 'InlineFragmentsTransform: Cannot flatten fragment spread `%s` with ' + 'arguments. Use the `ApplyFragmentArgumentTransform` before flattening', fragmentSpread.name) : invariant(false) : void 0; // $FlowFixMe[incompatible-use]

    var fragment = this.getContext().getFragment(fragmentSpread.name, fragmentSpread.loc);
    var result = {
      kind: 'InlineFragment',
      directives: fragmentSpread.directives,
      loc: {
        kind: 'Derived',
        source: fragmentSpread.loc
      },
      metadata: fragmentSpread.metadata,
      selections: fragment.selections,
      typeCondition: fragment.type
    }; // $FlowFixMe[incompatible-use]

    traverseResult = this.traverse(result);
    cache.set(fragmentSpread, traverseResult);
    return traverseResult;
  };
}

module.exports = {
  transform: inlineFragmentsTransform
};