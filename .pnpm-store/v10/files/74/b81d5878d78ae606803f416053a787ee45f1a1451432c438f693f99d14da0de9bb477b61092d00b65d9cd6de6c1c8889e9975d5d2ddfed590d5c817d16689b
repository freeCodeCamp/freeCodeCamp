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

var ASTConvert = require('../core/ASTConvert');

var CompilerContext = require('../core/CompilerContext');

var RelayParser = require('../core/RelayParser');

var compileRelayArtifacts = require('../codegen/compileRelayArtifacts');

function compileArtifacts(_ref) {
  var schema = _ref.schema,
      compilerTransforms = _ref.compilerTransforms,
      inputDefinitions = _ref.definitions,
      reporter = _ref.reporter,
      typeGenerator = _ref.typeGenerator;
  var definitions = ASTConvert.convertASTDocuments(schema, [{
    kind: 'Document',
    definitions: inputDefinitions
  }], RelayParser.transform);
  var compilerContext = new CompilerContext(schema).addAll(definitions);
  var transformedTypeContext = compilerContext.applyTransforms(typeGenerator.transforms, reporter);
  return {
    transformedTypeContext: transformedTypeContext,
    artifacts: compileRelayArtifacts(compilerContext, compilerTransforms, reporter)
  };
}

module.exports = compileArtifacts;