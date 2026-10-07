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

import type CompilerContext from '../core/CompilerContext';
import type {ClientExtension, Fragment, FragmentSpread} from '../core/IR';

function skipClientExtensionTransform(
  context: CompilerContext,
): CompilerContext {
  return IRTransformer.transform(context, {
    Fragment: visitFragment,
    FragmentSpread: vistFragmentSpread,
    ClientExtension: visitClientExtension,
  });
}

function visitFragment(node: Fragment): ?Fragment {
  // $FlowFixMe[incompatible-use]
  const context: CompilerContext = this.getContext();
  if (context.getSchema().isServerType(node.type)) {
    // $FlowFixMe[incompatible-use]
    return this.traverse(node);
  }
  return null;
}

function vistFragmentSpread(node: FragmentSpread): ?FragmentSpread {
  // $FlowFixMe[incompatible-use]
  const context: CompilerContext = this.getContext();
  const fragment = context.getFragment(node.name, node.loc);
  const isServer = context.getSchema().isServerType(fragment.type);
  return isServer ? node : null;
}

function visitClientExtension(
  node: ClientExtension,
  state: void,
): ?ClientExtension {
  return null;
}

module.exports = {
  transform: skipClientExtensionTransform,
};
