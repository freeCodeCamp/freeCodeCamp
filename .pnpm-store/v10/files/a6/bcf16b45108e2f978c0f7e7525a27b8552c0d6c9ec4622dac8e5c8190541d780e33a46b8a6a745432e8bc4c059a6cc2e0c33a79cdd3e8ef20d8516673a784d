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

const ApplyFragmentArgumentTransform = require('../transforms/ApplyFragmentArgumentTransform');
const ClientExtensionsTransform = require('../transforms/ClientExtensionsTransform');
const ConnectionTransform = require('../transforms/ConnectionTransform');
const DeclarativeConnectionMutationTransform = require('../transforms/DeclarativeConnectionMutationTransform');
const DeferStreamTransform = require('../transforms/DeferStreamTransform');
const DisallowIdAsAlias = require('../transforms/DisallowIdAsAlias');
const DisallowTypenameOnRoot = require('../transforms/DisallowTypenameOnRoot');
const FieldHandleTransform = require('../transforms/FieldHandleTransform');
const FilterCompilerDirectivesTransform = require('../transforms/FilterCompilerDirectivesTransform');
const FilterDirectivesTransform = require('../transforms/FilterDirectivesTransform');
const FlattenTransform = require('../transforms/FlattenTransform');
const GenerateIDFieldTransform = require('../transforms/GenerateIDFieldTransform');
const GenerateTypeNameTransform = require('../transforms/GenerateTypeNameTransform');
const InlineDataFragmentTransform = require('../transforms/InlineDataFragmentTransform');
const InlineFragmentsTransform = require('../transforms/InlineFragmentsTransform');
const MaskTransform = require('../transforms/MaskTransform');
const MatchTransform = require('../transforms/MatchTransform');
const ReactFlightComponentTransform = require('../transforms/ReactFlightComponentTransform');
const RefetchableFragmentTransform = require('../transforms/RefetchableFragmentTransform');
const RelayDirectiveTransform = require('../transforms/RelayDirectiveTransform');
const RelayFlowGenerator = require('../language/javascript/RelayFlowGenerator');
const RequiredFieldTransform = require('../transforms/RequiredFieldTransform');
const SkipClientExtensionsTransform = require('../transforms/SkipClientExtensionsTransform');
const SkipHandleFieldTransform = require('../transforms/SkipHandleFieldTransform');
const SkipRedundantNodesTransform = require('../transforms/SkipRedundantNodesTransform');
const SkipSplitOperationTransform = require('../transforms/SkipSplitOperationTransform');
const SkipUnreachableNodeTransform = require('../transforms/SkipUnreachableNodeTransform');
const SkipUnusedVariablesTransform = require('../transforms/SkipUnusedVariablesTransform');
const SplitModuleImportTransform = require('../transforms/SplitModuleImportTransform');
const TestOperationTransform = require('../transforms/TestOperationTransform');
const ValidateGlobalVariablesTransform = require('../transforms/ValidateGlobalVariablesTransform');
const ValidateRequiredArgumentsTransform = require('../transforms/ValidateRequiredArgumentsTransform');
const ValidateUnusedVariablesTransform = require('../transforms/ValidateUnusedVariablesTransform');

import type {IRTransform} from './CompilerContext';

// Transforms applied to the code used to process a query response.
const relaySchemaExtensions: $ReadOnlyArray<string> = [
  ConnectionTransform.SCHEMA_EXTENSION,
  DeclarativeConnectionMutationTransform.SCHEMA_EXTENSION,
  InlineDataFragmentTransform.SCHEMA_EXTENSION,
  MatchTransform.SCHEMA_EXTENSION,
  RequiredFieldTransform.SCHEMA_EXTENSION,
  RefetchableFragmentTransform.SCHEMA_EXTENSION,
  RelayDirectiveTransform.SCHEMA_EXTENSION,
  RelayFlowGenerator.SCHEMA_EXTENSION,
  TestOperationTransform.SCHEMA_EXTENSION,
  ValidateUnusedVariablesTransform.SCHEMA_EXTENSION,
];

// Transforms applied to both operations and fragments for both reading and
// writing from the store.
const relayCommonTransforms: $ReadOnlyArray<IRTransform> = [
  DisallowIdAsAlias.transform,
  ConnectionTransform.transform,
  RelayDirectiveTransform.transform,
  MaskTransform.transform,
  MatchTransform.transform,
  RefetchableFragmentTransform.transform,
  DeferStreamTransform.transform,
  ReactFlightComponentTransform.transform,
];

// Transforms applied to fragments used for reading data from a store
const relayFragmentTransforms: $ReadOnlyArray<IRTransform> = [
  ClientExtensionsTransform.transform,
  FieldHandleTransform.transform,
  InlineDataFragmentTransform.transform,
  FlattenTransform.transformWithOptions({isForCodegen: true}),
  RequiredFieldTransform.transform,
  SkipRedundantNodesTransform.transform,
];

// Transforms applied to queries/mutations/subscriptions that are used for
// fetching data from the server and parsing those responses.
const relayQueryTransforms: $ReadOnlyArray<IRTransform> = [
  SplitModuleImportTransform.transform,
  DisallowTypenameOnRoot.transform,
  ValidateUnusedVariablesTransform.transform,
  ApplyFragmentArgumentTransform.transform,
  ValidateGlobalVariablesTransform.transform,
  GenerateIDFieldTransform.transform,
  DeclarativeConnectionMutationTransform.transform,
];

// Transforms applied to the code used to process a query response.
const relayCodegenTransforms: $ReadOnlyArray<IRTransform> = [
  FilterCompilerDirectivesTransform.transform,
  SkipUnreachableNodeTransform.transform,
  InlineFragmentsTransform.transform,
  // NOTE: For the codegen context, we make sure to run ClientExtensions
  // transform after we've inlined fragment spreads (i.e. InlineFragmentsTransform)
  // This will ensure that we don't generate nested ClientExtension nodes
  ClientExtensionsTransform.transform,
  GenerateTypeNameTransform.transform,
  FlattenTransform.transformWithOptions({isForCodegen: true}),
  SkipRedundantNodesTransform.transform,
  TestOperationTransform.transform,
];

// Transforms applied before printing the query sent to the server.
const relayPrintTransforms: $ReadOnlyArray<IRTransform> = [
  SkipSplitOperationTransform.transform,
  // NOTE: Skipping client extensions might leave empty selections, which we
  // skip by running SkipUnreachableNodeTransform immediately after.
  ClientExtensionsTransform.transform,
  SkipClientExtensionsTransform.transform,
  SkipUnreachableNodeTransform.transform,
  GenerateTypeNameTransform.transform,
  FlattenTransform.transformWithOptions({}),
  SkipHandleFieldTransform.transform,
  FilterDirectivesTransform.transform,
  SkipUnusedVariablesTransform.transform,
  ValidateRequiredArgumentsTransform.transform,
];

module.exports = {
  commonTransforms: relayCommonTransforms,
  codegenTransforms: relayCodegenTransforms,
  fragmentTransforms: relayFragmentTransforms,
  printTransforms: relayPrintTransforms,
  queryTransforms: relayQueryTransforms,
  schemaExtensions: relaySchemaExtensions,
};
