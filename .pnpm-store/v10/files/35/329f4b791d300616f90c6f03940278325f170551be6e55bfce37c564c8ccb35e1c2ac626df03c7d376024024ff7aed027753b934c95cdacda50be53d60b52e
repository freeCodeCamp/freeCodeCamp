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

var ApplyFragmentArgumentTransform = require('../transforms/ApplyFragmentArgumentTransform');

var ClientExtensionsTransform = require('../transforms/ClientExtensionsTransform');

var ConnectionTransform = require('../transforms/ConnectionTransform');

var DeclarativeConnectionMutationTransform = require('../transforms/DeclarativeConnectionMutationTransform');

var DeferStreamTransform = require('../transforms/DeferStreamTransform');

var DisallowIdAsAlias = require('../transforms/DisallowIdAsAlias');

var DisallowTypenameOnRoot = require('../transforms/DisallowTypenameOnRoot');

var FieldHandleTransform = require('../transforms/FieldHandleTransform');

var FilterCompilerDirectivesTransform = require('../transforms/FilterCompilerDirectivesTransform');

var FilterDirectivesTransform = require('../transforms/FilterDirectivesTransform');

var FlattenTransform = require('../transforms/FlattenTransform');

var GenerateIDFieldTransform = require('../transforms/GenerateIDFieldTransform');

var GenerateTypeNameTransform = require('../transforms/GenerateTypeNameTransform');

var InlineDataFragmentTransform = require('../transforms/InlineDataFragmentTransform');

var InlineFragmentsTransform = require('../transforms/InlineFragmentsTransform');

var MaskTransform = require('../transforms/MaskTransform');

var MatchTransform = require('../transforms/MatchTransform');

var ReactFlightComponentTransform = require('../transforms/ReactFlightComponentTransform');

var RefetchableFragmentTransform = require('../transforms/RefetchableFragmentTransform');

var RelayDirectiveTransform = require('../transforms/RelayDirectiveTransform');

var RelayFlowGenerator = require('../language/javascript/RelayFlowGenerator');

var RequiredFieldTransform = require('../transforms/RequiredFieldTransform');

var SkipClientExtensionsTransform = require('../transforms/SkipClientExtensionsTransform');

var SkipHandleFieldTransform = require('../transforms/SkipHandleFieldTransform');

var SkipRedundantNodesTransform = require('../transforms/SkipRedundantNodesTransform');

var SkipSplitOperationTransform = require('../transforms/SkipSplitOperationTransform');

var SkipUnreachableNodeTransform = require('../transforms/SkipUnreachableNodeTransform');

var SkipUnusedVariablesTransform = require('../transforms/SkipUnusedVariablesTransform');

var SplitModuleImportTransform = require('../transforms/SplitModuleImportTransform');

var TestOperationTransform = require('../transforms/TestOperationTransform');

var ValidateGlobalVariablesTransform = require('../transforms/ValidateGlobalVariablesTransform');

var ValidateRequiredArgumentsTransform = require('../transforms/ValidateRequiredArgumentsTransform');

var ValidateUnusedVariablesTransform = require('../transforms/ValidateUnusedVariablesTransform');

// Transforms applied to the code used to process a query response.
var relaySchemaExtensions = [ConnectionTransform.SCHEMA_EXTENSION, DeclarativeConnectionMutationTransform.SCHEMA_EXTENSION, InlineDataFragmentTransform.SCHEMA_EXTENSION, MatchTransform.SCHEMA_EXTENSION, RequiredFieldTransform.SCHEMA_EXTENSION, RefetchableFragmentTransform.SCHEMA_EXTENSION, RelayDirectiveTransform.SCHEMA_EXTENSION, RelayFlowGenerator.SCHEMA_EXTENSION, TestOperationTransform.SCHEMA_EXTENSION, ValidateUnusedVariablesTransform.SCHEMA_EXTENSION]; // Transforms applied to both operations and fragments for both reading and
// writing from the store.

var relayCommonTransforms = [DisallowIdAsAlias.transform, ConnectionTransform.transform, RelayDirectiveTransform.transform, MaskTransform.transform, MatchTransform.transform, RefetchableFragmentTransform.transform, DeferStreamTransform.transform, ReactFlightComponentTransform.transform]; // Transforms applied to fragments used for reading data from a store

var relayFragmentTransforms = [ClientExtensionsTransform.transform, FieldHandleTransform.transform, InlineDataFragmentTransform.transform, FlattenTransform.transformWithOptions({
  isForCodegen: true
}), RequiredFieldTransform.transform, SkipRedundantNodesTransform.transform]; // Transforms applied to queries/mutations/subscriptions that are used for
// fetching data from the server and parsing those responses.

var relayQueryTransforms = [SplitModuleImportTransform.transform, DisallowTypenameOnRoot.transform, ValidateUnusedVariablesTransform.transform, ApplyFragmentArgumentTransform.transform, ValidateGlobalVariablesTransform.transform, GenerateIDFieldTransform.transform, DeclarativeConnectionMutationTransform.transform]; // Transforms applied to the code used to process a query response.

var relayCodegenTransforms = [FilterCompilerDirectivesTransform.transform, SkipUnreachableNodeTransform.transform, InlineFragmentsTransform.transform, // NOTE: For the codegen context, we make sure to run ClientExtensions
// transform after we've inlined fragment spreads (i.e. InlineFragmentsTransform)
// This will ensure that we don't generate nested ClientExtension nodes
ClientExtensionsTransform.transform, GenerateTypeNameTransform.transform, FlattenTransform.transformWithOptions({
  isForCodegen: true
}), SkipRedundantNodesTransform.transform, TestOperationTransform.transform]; // Transforms applied before printing the query sent to the server.

var relayPrintTransforms = [SkipSplitOperationTransform.transform, // NOTE: Skipping client extensions might leave empty selections, which we
// skip by running SkipUnreachableNodeTransform immediately after.
ClientExtensionsTransform.transform, SkipClientExtensionsTransform.transform, SkipUnreachableNodeTransform.transform, GenerateTypeNameTransform.transform, FlattenTransform.transformWithOptions({}), SkipHandleFieldTransform.transform, FilterDirectivesTransform.transform, SkipUnusedVariablesTransform.transform, ValidateRequiredArgumentsTransform.transform];
module.exports = {
  commonTransforms: relayCommonTransforms,
  codegenTransforms: relayCodegenTransforms,
  fragmentTransforms: relayFragmentTransforms,
  printTransforms: relayPrintTransforms,
  queryTransforms: relayQueryTransforms,
  schemaExtensions: relaySchemaExtensions
};