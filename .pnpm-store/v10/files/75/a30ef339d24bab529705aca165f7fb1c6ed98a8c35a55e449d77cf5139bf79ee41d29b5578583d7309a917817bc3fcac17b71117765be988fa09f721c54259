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

var NormalizationCodeGenerator = require('./NormalizationCodeGenerator');

var ReaderCodeGenerator = require('./ReaderCodeGenerator');

var sortObjectByKey = require('./sortObjectByKey');

var md5 = require('../util/md5');

var nullthrows = require('nullthrows');

var _require = require('../core/CompilerError'),
    createCompilerError = _require.createCompilerError;

function generate(schema, node) {
  var _node$metadata;

  switch (node.kind) {
    case 'Fragment':
      if (((_node$metadata = node.metadata) === null || _node$metadata === void 0 ? void 0 : _node$metadata.inlineData) === true) {
        return {
          kind: 'InlineDataFragment',
          name: node.name
        };
      }

      return ReaderCodeGenerator.generate(schema, node);

    case 'Request':
      return {
        fragment: ReaderCodeGenerator.generate(schema, node.fragment),
        kind: 'Request',
        operation: NormalizationCodeGenerator.generate(schema, node.root),
        params: node.id != null ? {
          id: node.id,
          metadata: sortObjectByKey(node.metadata),
          name: node.name,
          operationKind: node.root.operation
        } : {
          cacheID: md5(nullthrows(node.text)),
          metadata: sortObjectByKey(node.metadata),
          name: node.name,
          operationKind: node.root.operation,
          text: node.text
        }
      };

    case 'SplitOperation':
      return NormalizationCodeGenerator.generate(schema, node);
  }

  throw createCompilerError("RelayCodeGenerator: Unknown AST kind '".concat(node.kind, "'."), [node.loc]);
}

module.exports = {
  generate: generate
};