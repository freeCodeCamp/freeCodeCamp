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

var invariant = require('invariant');

var _require = require('../query/GraphQLTag'),
    getFragment = _require.getFragment;

var _require2 = require('./RelayModernSelector'),
    getSelector = _require2.getSelector;

var contextStack = [];

function withResolverContext(context, cb) {
  contextStack.push(context);

  try {
    return cb();
  } finally {
    contextStack.pop();
  }
} // NOTE: these declarations are copied from 'useFragment'; it would be good
// to figure out how to share the same type signature between the two functions.
// The declarations ensure that the type of the returned data is:
//   - non-nullable if the provided ref type is non-nullable
//   - nullable if the provided ref type is nullable
//   - array of non-nullable if the privoided ref type is an array of
//     non-nullable refs
//   - array of nullable if the privoided ref type is an array of nullable refs


function readFragment(fragmentInput, fragmentRef) {
  if (!contextStack.length) {
    throw new Error('readFragment should be called only from within a Relay Resolver function.');
  }

  var context = contextStack[contextStack.length - 1];
  var fragmentNode = getFragment(fragmentInput);
  var fragmentSelector = getSelector(fragmentNode, fragmentRef);
  !(fragmentSelector != null) ? process.env.NODE_ENV !== "production" ? invariant(false, "Expected a selector for the fragment of the resolver ".concat(fragmentNode.name, ", but got null.")) : invariant(false) : void 0;
  !(fragmentSelector.kind === 'SingularReaderSelector') ? process.env.NODE_ENV !== "production" ? invariant(false, "Expected a singular reader selector for the fragment of the resolver ".concat(fragmentNode.name, ", but it was plural.")) : invariant(false) : void 0;
  return context.getDataForResolverFragment(fragmentSelector, fragmentRef);
}

module.exports = {
  readFragment: readFragment,
  withResolverContext: withResolverContext
};