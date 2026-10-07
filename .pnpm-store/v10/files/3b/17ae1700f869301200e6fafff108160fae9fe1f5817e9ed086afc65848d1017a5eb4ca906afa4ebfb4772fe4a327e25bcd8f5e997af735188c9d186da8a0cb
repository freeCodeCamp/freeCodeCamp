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

/**
 * Helpers to retieve the name of the document from which the input derives:
 * this is either the name of the input itself (if it is not a derived node)
 * or the metadata.derivedFrom property for derived nodes.
 */
// Version for generated nodes
function getReaderSourceDefinitionName(node) {
  var _node$params$metadata, _node$metadata;

  var _ref = node.kind === 'Request' ? [node.params.name, (_node$params$metadata = node.params.metadata) === null || _node$params$metadata === void 0 ? void 0 : _node$params$metadata.derivedFrom] : node.kind === 'SplitOperation' ? [node.name, (_node$metadata = node.metadata) === null || _node$metadata === void 0 ? void 0 : _node$metadata.derivedFrom] : [node.name, null],
      name = _ref[0],
      derivedFrom = _ref[1];

  return typeof derivedFrom === 'string' ? derivedFrom : name;
}

module.exports = {
  getReaderSourceDefinitionName: getReaderSourceDefinitionName
};