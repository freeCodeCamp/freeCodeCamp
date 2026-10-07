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

const ASTConvert = require('../core/ASTConvert');
const CompilerContext = require('../core/CompilerContext');
const RelayParser = require('../core/RelayParser');

const compileRelayArtifacts = require('../codegen/compileRelayArtifacts');

import type {ExecutableDefinitionNode, ValidationContext} from 'graphql';
import type {
  GeneratedDefinition,
  RelayCompilerTransforms,
  Reporter,
  Schema,
  TypeGenerator,
} from 'relay-compiler';
import type {GeneratedNode} from 'relay-runtime';

export type ValidationRule = (context: ValidationContext) => $FlowFixMe;

function compileArtifacts({
  schema,
  compilerTransforms,
  definitions: inputDefinitions,
  reporter,
  typeGenerator,
}: {|
  schema: Schema,
  compilerTransforms: RelayCompilerTransforms,
  definitions: $ReadOnlyArray<ExecutableDefinitionNode>,
  reporter: Reporter,
  typeGenerator: TypeGenerator,
|}): {|
  artifacts: $ReadOnlyArray<[GeneratedDefinition, GeneratedNode]>,
  transformedTypeContext: CompilerContext,
|} {
  const definitions = ASTConvert.convertASTDocuments(
    schema,
    [
      {
        kind: 'Document',
        definitions: inputDefinitions,
      },
    ],
    RelayParser.transform,
  );

  const compilerContext = new CompilerContext(schema).addAll(definitions);
  const transformedTypeContext = compilerContext.applyTransforms(
    typeGenerator.transforms,
    reporter,
  );

  return {
    transformedTypeContext,
    artifacts: compileRelayArtifacts(
      compilerContext,
      compilerTransforms,
      reporter,
    ),
  };
}

module.exports = compileArtifacts;
