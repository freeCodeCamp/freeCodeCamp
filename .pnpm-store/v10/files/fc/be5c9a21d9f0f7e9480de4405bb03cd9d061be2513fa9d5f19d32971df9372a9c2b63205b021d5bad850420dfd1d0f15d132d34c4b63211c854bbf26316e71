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

var CompilerContext = require('./CompilerContext');

var _require = require('./IRVisitor'),
    visit = _require.visit;

/**
 * Returns a CompilerContext containing only the documents referenced
 * by and including the provided node.
 */
function filterContextForNode(node, context) {
  var queue = [node];
  var filteredContext = new CompilerContext(context.getSchema()).add(node);

  var visitFragmentSpread = function visitFragmentSpread(fragmentSpread) {
    var name = fragmentSpread.name;

    if (!filteredContext.get(name)) {
      var fragment = context.getFragment(name);
      filteredContext = filteredContext.add(fragment);
      queue.push(fragment);
    }
  };

  var visitorConfig = {
    FragmentSpread: function FragmentSpread(fragmentSpread) {
      visitFragmentSpread(fragmentSpread);
    }
  };

  while (queue.length) {
    visit(queue.pop(), visitorConfig);
  }

  return filteredContext;
}

module.exports = filterContextForNode;