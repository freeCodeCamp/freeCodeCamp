/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const ASTConvert = require('../core/ASTConvert');
const CodegenDirectory = require('./CodegenDirectory');
const CompilerContext = require('../core/CompilerContext');
const Profiler = require('../core/GraphQLCompilerProfiler');
const RelayParser = require('../core/RelayParser');

const compileRelayArtifacts = require('./compileRelayArtifacts');
const graphql = require('graphql');
const invariant = require('invariant');
const md5 = require('../util/md5');
const nullthrows = require('nullthrows');
const path = require('path');
const writeRelayGeneratedFile = require('./writeRelayGeneratedFile');

const {
  getReaderSourceDefinitionName,
} = require('../core/GraphQLDerivedFromMetadata');
const {isExecutableDefinitionAST} = require('../core/SchemaUtils');
const {Map: ImmutableMap} = require('immutable');

import type {Schema} from '../core/Schema';
import type {
  FormatModule,
  PluginInterface,
  TypeGenerator,
} from '../language/RelayLanguagePluginInterface';
import type {ScalarTypeMapping} from '../language/javascript/RelayFlowTypeTransformers';
import type {Reporter} from '../reporters/Reporter';
import type {Filesystem} from './CodegenDirectory';
import type {SourceControl} from './SourceControl';
import type {RelayCompilerTransforms} from './compileRelayArtifacts';
import type {DocumentNode, ValidationContext} from 'graphql';
import type {RequestParameters} from 'relay-runtime';

export type GenerateExtraFiles = (
  getOutputDirectory: (path?: string) => CodegenDirectory,
  compilerContext: CompilerContext,
  getGeneratedDirectory: (definitionName: string) => CodegenDirectory,
) => void;

export type ValidationRule = (context: ValidationContext) => any;

export type WriterConfig = {
  baseDir: string,
  compilerTransforms: RelayCompilerTransforms,
  customScalars: ScalarTypeMapping,
  formatModule: FormatModule,
  generateExtraFiles?: GenerateExtraFiles,
  optionalInputFieldsForFlow: $ReadOnlyArray<string>,
  outputDir?: ?string,
  generatedDirectories?: $ReadOnlyArray<string>,
  persistQuery?: ?(text: string) => Promise<string>,
  schemaExtensions: $ReadOnlyArray<string>,
  noFutureProofEnums: boolean,
  useHaste: boolean,
  extension: string,
  typeGenerator: TypeGenerator,
  // Haste style module that exports flow types for GraphQL enums.
  // TODO(T22422153) support non-haste environments
  enumsHasteModule?: string,
  printModuleDependency?: string => string,
  filesystem?: Filesystem,
  repersist?: boolean,
  writeQueryParameters?: (
    outputDirectory: CodegenDirectory,
    filename: string,
    moduleName: string,
    requestParams: RequestParameters,
  ) => void,
  ...
};

function compileAll({
  baseDir,
  baseDocuments,
  schema,
  compilerTransforms,
  documents,
  reporter,
  typeGenerator,
}: {|
  baseDir: string,
  baseDocuments: $ReadOnlyArray<DocumentNode>,
  schema: Schema,
  compilerTransforms: RelayCompilerTransforms,
  documents: $ReadOnlyArray<DocumentNode>,
  reporter: Reporter,
  typeGenerator: TypeGenerator,
|}) {
  const definitions = ASTConvert.convertASTDocumentsWithBase(
    schema,
    baseDocuments,
    documents,
    RelayParser.transform,
  );
  const compilerContext = new CompilerContext(schema).addAll(definitions);

  const transformedTypeContext = compilerContext.applyTransforms(
    typeGenerator.transforms,
    reporter,
  );
  const transformedQueryContext = compilerContext.applyTransforms(
    [
      ...compilerTransforms.commonTransforms,
      ...compilerTransforms.queryTransforms,
    ],
    reporter,
  );
  const artifacts = compileRelayArtifacts(
    compilerContext,
    compilerTransforms,
    reporter,
  );

  return {
    artifacts,
    definitions,
    transformedQueryContext,
    transformedTypeContext,
  };
}

function writeAll({
  config: writerConfig,
  onlyValidate,
  baseDocuments,
  documents,
  schema,
  reporter,
  sourceControl,
  languagePlugin,
}: {|
  config: WriterConfig,
  onlyValidate: boolean,
  // $FlowFixMe[value-as-type]
  baseDocuments: ImmutableMap<string, DocumentNode>,
  // $FlowFixMe[value-as-type]
  documents: ImmutableMap<string, DocumentNode>,
  schema: Schema,
  reporter: Reporter,
  sourceControl: ?SourceControl,
  languagePlugin?: ?PluginInterface,
|}): Promise<Map<string, CodegenDirectory>> {
  return Profiler.asyncContext('RelayFileWriter.writeAll', async () => {
    const {
      artifacts: artifactsWithBase,
      transformedTypeContext,
      transformedQueryContext,
    } = compileAll({
      schema,
      baseDir: writerConfig.baseDir,
      baseDocuments: baseDocuments.valueSeq().toArray(),
      compilerTransforms: writerConfig.compilerTransforms,
      documents: documents.valueSeq().toArray(),
      reporter,
      typeGenerator: writerConfig.typeGenerator,
    });
    // Build a context from all the documents
    const baseDefinitionNames = new Set();
    baseDocuments.forEach(doc => {
      doc.definitions.forEach(def => {
        if (isExecutableDefinitionAST(def) && def.name) {
          baseDefinitionNames.add(def.name.value);
        }
      });
    });

    // remove nodes that are present in the base or that derive from nodes
    // in the base
    const artifacts = artifactsWithBase.filter(([_definition, node]) => {
      const sourceName = getReaderSourceDefinitionName(node);
      return !baseDefinitionNames.has(sourceName);
    });

    const artifactMap = new Map(
      artifacts.map(([_definition, node]) => [
        node.kind === 'Request' ? node.params.name : node.name,
        node,
      ]),
    );

    const definitionsMeta = new Map();
    const getDefinitionMeta = (definitionName: string) => {
      const artifact = nullthrows(artifactMap.get(definitionName));
      const sourceName = getReaderSourceDefinitionName(artifact);
      const definitionMeta = definitionsMeta.get(sourceName);
      invariant(
        definitionMeta,
        'RelayFileWriter: Could not determine source for definition: `%s`.',
        definitionName,
      );
      return definitionMeta;
    };
    documents.forEach((doc, filePath) => {
      doc.definitions.forEach(def => {
        if (def.name) {
          definitionsMeta.set(def.name.value, {
            dir: path.join(writerConfig.baseDir, path.dirname(filePath)),
            ast: def,
          });
        }
      });
    });

    const allOutputDirectories: Map<string, CodegenDirectory> = new Map();
    const addCodegenDir = dirPath => {
      const codegenDir = new CodegenDirectory(dirPath, {
        onlyValidate: onlyValidate,
        filesystem: writerConfig.filesystem,
      });
      allOutputDirectories.set(dirPath, codegenDir);
      return codegenDir;
    };

    for (const existingDirectory of writerConfig.generatedDirectories || []) {
      addCodegenDir(existingDirectory);
    }

    let configOutputDirectory;
    if (writerConfig.outputDir) {
      configOutputDirectory = addCodegenDir(writerConfig.outputDir);
    }

    const getGeneratedDirectory = definitionName => {
      if (configOutputDirectory) {
        return configOutputDirectory;
      }
      const generatedPath = path.join(
        getDefinitionMeta(definitionName).dir,
        '__generated__',
      );
      let cachedDir = allOutputDirectories.get(generatedPath);
      if (!cachedDir) {
        cachedDir = addCodegenDir(generatedPath);
      }
      return cachedDir;
    };

    const formatModule = Profiler.instrument(
      writerConfig.formatModule,
      'RelayFileWriter:formatModule',
    );

    const persistQuery = writerConfig.persistQuery
      ? Profiler.instrumentWait(
          writerConfig.persistQuery,
          'RelayFileWriter:persistQuery',
        )
      : null;

    try {
      await Promise.all(
        artifacts.map(async ([definition, node]) => {
          const nodeName =
            node.kind === 'Request' ? node.params.name : node.name;
          if (baseDefinitionNames.has(nodeName)) {
            // don't add definitions that were part of base context
            return;
          }

          const typeNode = transformedTypeContext.get(nodeName);
          const typeText = typeNode
            ? writerConfig.typeGenerator.generate(
                schema,
                (typeNode: $FlowFixMe),
                {
                  customScalars: writerConfig.customScalars,
                  enumsHasteModule: writerConfig.enumsHasteModule,
                  optionalInputFields: writerConfig.optionalInputFieldsForFlow,
                  useHaste: writerConfig.useHaste,
                  useSingleArtifactDirectory: !!writerConfig.outputDir,
                  noFutureProofEnums: writerConfig.noFutureProofEnums,
                  normalizationIR:
                    definition.kind === 'Request' ? definition.root : undefined,
                },
              )
            : '';

          const sourceHash = Profiler.run('hashGraphQL', () =>
            md5(graphql.print(getDefinitionMeta(nodeName).ast)),
          );

          await writeRelayGeneratedFile(
            schema,
            getGeneratedDirectory(nodeName),
            definition,
            node,
            formatModule,
            typeText,
            persistQuery,
            sourceHash,
            writerConfig.extension,
            writerConfig.printModuleDependency,
            writerConfig.repersist ?? false,
            writerConfig.writeQueryParameters ?? function noop() {},
            languagePlugin,
          );
        }),
      );

      const generateExtraFiles = writerConfig.generateExtraFiles;
      if (generateExtraFiles) {
        Profiler.run('RelayFileWriter:generateExtraFiles', () => {
          const configDirectory = writerConfig.outputDir;
          generateExtraFiles(
            dir => {
              const outputDirectory = dir || configDirectory;
              invariant(
                outputDirectory,
                'RelayFileWriter: cannot generate extra files without specifying ' +
                  'an outputDir in the config or passing it in.',
              );
              let outputDir = allOutputDirectories.get(outputDirectory);
              if (!outputDir) {
                outputDir = addCodegenDir(outputDirectory);
              }
              return outputDir;
            },
            transformedQueryContext,
            getGeneratedDirectory,
          );
        });
      }

      allOutputDirectories.forEach(dir => {
        dir.deleteExtraFiles(languagePlugin?.keepExtraFile);
      });
      if (sourceControl && !onlyValidate) {
        await CodegenDirectory.sourceControlAddRemove(
          sourceControl,
          Array.from(allOutputDirectories.values()),
        );
      }
    } catch (error) {
      let details;
      try {
        details = JSON.parse(error.message);
      } catch (_) {} // eslint-disable-line lint/no-unused-catch-bindings
      if (details && details.name === 'GraphQL2Exception' && details.message) {
        throw new Error('GraphQL error writing modules:\n' + details.message);
      }
      throw new Error(
        'Error writing modules:\n' + String(error.stack || error),
      );
    }

    return allOutputDirectories;
  });
}

module.exports = {
  writeAll,
};
