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

const CompilerContext = require('./CompilerContext');

const {visit} = require('./IRVisitor');

import type {Fragment, FragmentSpread, Root} from './IR';

/**
 * Returns a CompilerContext containing only the documents referenced
 * by and including the provided node.
 */
function filterContextForNode(
  node: Fragment | Root,
  context: CompilerContext,
): CompilerContext {
  const queue = [node];
  let filteredContext = new CompilerContext(context.getSchema()).add(node);
  const visitFragmentSpread = (fragmentSpread: FragmentSpread) => {
    const {name} = fragmentSpread;
    if (!filteredContext.get(name)) {
      const fragment = context.getFragment(name);
      filteredContext = filteredContext.add(fragment);
      queue.push(fragment);
    }
  };
  const visitorConfig = {
    FragmentSpread: (fragmentSpread: FragmentSpread) => {
      visitFragmentSpread(fragmentSpread);
    },
  };
  while (queue.length) {
    visit(queue.pop(), visitorConfig);
  }
  return filteredContext;
}

module.exports = filterContextForNode;
