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

var ASTCache = require('./core/ASTCache');

var ASTConvert = require('./core/ASTConvert');

var Artifacts = require('./runner/Artifacts');

var BufferedFilesystem = require('./runner/BufferedFilesystem');

var CodeMarker = require('./util/CodeMarker');

var CodegenDirectory = require('./codegen/CodegenDirectory');

var CodegenRunner = require('./codegen/CodegenRunner');

var CodegenWatcher = require('./codegen/CodegenWatcher');

var CompilerContext = require('./core/CompilerContext');

var CompilerError = require('./core/CompilerError');

var ConsoleReporter = require('./reporters/ConsoleReporter');

var DotGraphQLParser = require('./core/DotGraphQLParser');

var FindGraphQLTags = require('./language/javascript/FindGraphQLTags');

var GraphQLASTNodeGroup = require('./runner/GraphQLASTNodeGroup');

var GraphQLASTUtils = require('./runner/GraphQLASTUtils');

var GraphQLCompilerProfiler = require('./core/GraphQLCompilerProfiler');

var GraphQLNodeMap = require('./runner/GraphQLNodeMap');

var GraphQLWatchmanClient = require('./core/GraphQLWatchmanClient');

var IRPrinter = require('./core/IRPrinter');

var IRTransformer = require('./core/IRTransformer');

var IRVisitor = require('./core/IRVisitor');

var JSModuleParser = require('./core/JSModuleParser');

var MultiReporter = require('./reporters/MultiReporter');

var RelayCodeGenerator = require('./codegen/RelayCodeGenerator');

var RelayFileWriter = require('./codegen/RelayFileWriter');

var RelayFindGraphQLTags = require('./core/RelayFindGraphQLTags');

var RelayFlowGenerator = require('./language/javascript/RelayFlowGenerator');

var RelayIRTransforms = require('./core/RelayIRTransforms');

var RelayParser = require('./core/RelayParser');

var RelaySchema = require('./core/Schema');

var Rollout = require('./util/Rollout');

var SchemaUtils = require('./core/SchemaUtils');

var Sources = require('./runner/Sources');

var StrictMap = require('./runner/StrictMap');

var TimeReporter = require('./util/TimeReporter');

var compileArtifacts = require('./runner/compileArtifacts');

var compileRelayArtifacts = require('./codegen/compileRelayArtifacts');

var extractAST = require('./runner/extractAST');

var filterContextForNode = require('./core/filterContextForNode');

var getChangedNodeNames = require('./runner/getChangedNodeNames');

var getDefinitionNodeHash = require('./util/getDefinitionNodeHash');

var getIdentifierForArgumentValue = require('./core/getIdentifierForArgumentValue');

var getLiteralArgumentValues = require('./core/getLiteralArgumentValues');

var getNormalizationOperationName = require('./core/getNormalizationOperationName');

var getSchemaInstance = require('./runner/getSchemaInstance');

var md5 = require('./util/md5');

var writeRelayGeneratedFile = require('./codegen/writeRelayGeneratedFile');

var _require = require('./bin/RelayCompilerMain'),
    main = _require.main;

var _require2 = require('./codegen/SourceControl'),
    SourceControlMercurial = _require2.SourceControlMercurial;

var _require3 = require('./core/GraphQLDerivedFromMetadata'),
    getReaderSourceDefinitionName = _require3.getReaderSourceDefinitionName;

var _require4 = require('./language/javascript/formatGeneratedModule'),
    formatGeneratedModule = _require4.formatGeneratedCommonjsModule;

module.exports = {
  relayCompiler: main,
  ASTConvert: ASTConvert,
  CodegenDirectory: CodegenDirectory,
  CodegenRunner: CodegenRunner,
  CodegenWatcher: CodegenWatcher,
  CodeMarker: CodeMarker,
  CompilerContext: CompilerContext,
  CompilerError: CompilerError,
  ConsoleReporter: ConsoleReporter,
  DotGraphQLParser: DotGraphQLParser,
  ASTCache: ASTCache,
  IRTransformer: IRTransformer,
  IRVisitor: IRVisitor,
  Printer: IRPrinter,
  Profiler: GraphQLCompilerProfiler,
  Rollout: Rollout,
  SchemaUtils: SchemaUtils,
  SourceControlMercurial: SourceControlMercurial,
  WatchmanClient: GraphQLWatchmanClient,
  filterContextForNode: filterContextForNode,
  getIdentifierForArgumentValue: getIdentifierForArgumentValue,
  getNormalizationOperationName: getNormalizationOperationName,
  getLiteralArgumentValues: getLiteralArgumentValues,
  Parser: RelayParser,
  Schema: RelaySchema,
  CodeGenerator: RelayCodeGenerator,
  FlowGenerator: RelayFlowGenerator,
  FileWriter: RelayFileWriter,
  IRTransforms: RelayIRTransforms,
  JSModuleParser: JSModuleParser,
  MultiReporter: MultiReporter,
  Runner: CodegenRunner,
  TimeReporter: TimeReporter,
  compileRelayArtifacts: compileRelayArtifacts,
  formatGeneratedModule: formatGeneratedModule,
  convertASTDocuments: ASTConvert.convertASTDocuments,
  transformASTSchema: ASTConvert.transformASTSchema,
  getReaderSourceDefinitionName: getReaderSourceDefinitionName,
  writeRelayGeneratedFile: writeRelayGeneratedFile,
  Sources: Sources,
  __internal: {
    Artifacts: Artifacts,
    BufferedFilesystem: BufferedFilesystem,
    GraphQLASTNodeGroup: GraphQLASTNodeGroup,
    GraphQLASTUtils: GraphQLASTUtils,
    GraphQLNodeMap: GraphQLNodeMap,
    FindGraphQLTags: FindGraphQLTags,
    StrictMap: StrictMap,
    RelayFindGraphQLTags: RelayFindGraphQLTags,
    compileArtifacts: compileArtifacts,
    extractFromJS: extractAST.extractFromJS,
    getChangedNodeNames: getChangedNodeNames,
    getDefinitionNodeHash: getDefinitionNodeHash,
    getSchemaInstance: getSchemaInstance,
    md5: md5,
    parseExecutableNode: extractAST.parseExecutableNode,
    toASTRecord: extractAST.toASTRecord
  }
};