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

import type {GeneratedNode} from 'relay-runtime';

/**
 * Helpers to retieve the name of the document from which the input derives:
 * this is either the name of the input itself (if it is not a derived node)
 * or the metadata.derivedFrom property for derived nodes.
 */

// Version for generated nodes
function getReaderSourceDefinitionName(node: GeneratedNode): string {
  const [name, derivedFrom] =
    node.kind === 'Request'
      ? [node.params.name, node.params.metadata?.derivedFrom]
      : node.kind === 'SplitOperation'
      ? [node.name, node.metadata?.derivedFrom]
      : [node.name, null];
  return typeof derivedFrom === 'string' ? derivedFrom : name;
}

module.exports = {
  getReaderSourceDefinitionName,
};
