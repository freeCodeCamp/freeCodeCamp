/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 */
// flowlint ambiguous-object-type:error
'use strict';

var JSModuleParser = require('../core/JSModuleParser');

var invariant = require('invariant');

var _require = require('graphql'),
    parse = _require.parse,
    print = _require.print;

function extractFromJS(baseDir, file) {
  if (!file.exists) {
    return null;
  }

  var f = {
    relPath: file.name,
    exists: true,
    hash: file['content.sha1hex']
  };
  var fileFilter = JSModuleParser.getFileFilter(baseDir);

  if (!fileFilter(f)) {
    return null;
  }

  var result = JSModuleParser.parseFileWithSources(baseDir, f);

  if (result == null || result.document.definitions.length === 0) {
    return null;
  }

  var doc = result.document,
      sources = result.sources;
  var nodes = doc.definitions.map(function (def) {
    if (def.kind === 'FragmentDefinition' || def.kind === 'OperationDefinition') {
      return toASTRecord(def);
    }

    throw new Error("Unexpected definition kind: ".concat(def.kind));
  });
  return {
    nodes: nodes,
    sources: sources
  };
}

function toASTRecord(node) {
  return {
    ast: node,
    text: print(node)
  };
}

function parseExecutableNode(text) {
  var nodes = parse(text).definitions;
  !(nodes.length === 1) ? process.env.NODE_ENV !== "production" ? invariant(false, 'expected exactly 1 definition') : invariant(false) : void 0;
  var node = nodes[0];
  !(node.kind === 'OperationDefinition' || node.kind === 'FragmentDefinition') ? process.env.NODE_ENV !== "production" ? invariant(false, 'expected an ExecutableDefinitionNode') : invariant(false) : void 0;
  return node;
}

module.exports = {
  parseExecutableNode: parseExecutableNode,
  toASTRecord: toASTRecord,
  extractFromJS: extractFromJS
};