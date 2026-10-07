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

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _createForOfIteratorHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/createForOfIteratorHelper"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var ASTConvert = require('../core/ASTConvert');

var CodegenDirectory = require('./CodegenDirectory');

var CompilerContext = require('../core/CompilerContext');

var Profiler = require('../core/GraphQLCompilerProfiler');

var RelayParser = require('../core/RelayParser');

var compileRelayArtifacts = require('./compileRelayArtifacts');

var graphql = require('graphql');

var invariant = require('invariant');

var md5 = require('../util/md5');

var nullthrows = require('nullthrows');

var path = require('path');

var writeRelayGeneratedFile = require('./writeRelayGeneratedFile');

var _require = require('../core/GraphQLDerivedFromMetadata'),
    getReaderSourceDefinitionName = _require.getReaderSourceDefinitionName;

var _require2 = require('../core/SchemaUtils'),
    isExecutableDefinitionAST = _require2.isExecutableDefinitionAST;

var _require3 = require('immutable'),
    ImmutableMap = _require3.Map;

function compileAll(_ref) {
  var baseDir = _ref.baseDir,
      baseDocuments = _ref.baseDocuments,
      schema = _ref.schema,
      compilerTransforms = _ref.compilerTransforms,
      documents = _ref.documents,
      reporter = _ref.reporter,
      typeGenerator = _ref.typeGenerator;
  var definitions = ASTConvert.convertASTDocumentsWithBase(schema, baseDocuments, documents, RelayParser.transform);
  var compilerContext = new CompilerContext(schema).addAll(definitions);
  var transformedTypeContext = compilerContext.applyTransforms(typeGenerator.transforms, reporter);
  var transformedQueryContext = compilerContext.applyTransforms([].concat((0, _toConsumableArray2["default"])(compilerTransforms.commonTransforms), (0, _toConsumableArray2["default"])(compilerTransforms.queryTransforms)), reporter);
  var artifacts = compileRelayArtifacts(compilerContext, compilerTransforms, reporter);
  return {
    artifacts: artifacts,
    definitions: definitions,
    transformedQueryContext: transformedQueryContext,
    transformedTypeContext: transformedTypeContext
  };
}

function writeAll(_ref2) {
  var writerConfig = _ref2.config,
      onlyValidate = _ref2.onlyValidate,
      baseDocuments = _ref2.baseDocuments,
      documents = _ref2.documents,
      schema = _ref2.schema,
      reporter = _ref2.reporter,
      sourceControl = _ref2.sourceControl,
      languagePlugin = _ref2.languagePlugin;
  return Profiler.asyncContext('RelayFileWriter.writeAll', /*#__PURE__*/_asyncToGenerator(function* () {
    var _compileAll = compileAll({
      schema: schema,
      baseDir: writerConfig.baseDir,
      baseDocuments: baseDocuments.valueSeq().toArray(),
      compilerTransforms: writerConfig.compilerTransforms,
      documents: documents.valueSeq().toArray(),
      reporter: reporter,
      typeGenerator: writerConfig.typeGenerator
    }),
        artifactsWithBase = _compileAll.artifacts,
        transformedTypeContext = _compileAll.transformedTypeContext,
        transformedQueryContext = _compileAll.transformedQueryContext; // Build a context from all the documents


    var baseDefinitionNames = new Set();
    baseDocuments.forEach(function (doc) {
      doc.definitions.forEach(function (def) {
        if (isExecutableDefinitionAST(def) && def.name) {
          baseDefinitionNames.add(def.name.value);
        }
      });
    }); // remove nodes that are present in the base or that derive from nodes
    // in the base

    var artifacts = artifactsWithBase.filter(function (_ref3) {
      var _definition = _ref3[0],
          node = _ref3[1];
      var sourceName = getReaderSourceDefinitionName(node);
      return !baseDefinitionNames.has(sourceName);
    });
    var artifactMap = new Map(artifacts.map(function (_ref4) {
      var _definition = _ref4[0],
          node = _ref4[1];
      return [node.kind === 'Request' ? node.params.name : node.name, node];
    }));
    var definitionsMeta = new Map();

    var getDefinitionMeta = function getDefinitionMeta(definitionName) {
      var artifact = nullthrows(artifactMap.get(definitionName));
      var sourceName = getReaderSourceDefinitionName(artifact);
      var definitionMeta = definitionsMeta.get(sourceName);
      !definitionMeta ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayFileWriter: Could not determine source for definition: `%s`.', definitionName) : invariant(false) : void 0;
      return definitionMeta;
    };

    documents.forEach(function (doc, filePath) {
      doc.definitions.forEach(function (def) {
        if (def.name) {
          definitionsMeta.set(def.name.value, {
            dir: path.join(writerConfig.baseDir, path.dirname(filePath)),
            ast: def
          });
        }
      });
    });
    var allOutputDirectories = new Map();

    var addCodegenDir = function addCodegenDir(dirPath) {
      var codegenDir = new CodegenDirectory(dirPath, {
        onlyValidate: onlyValidate,
        filesystem: writerConfig.filesystem
      });
      allOutputDirectories.set(dirPath, codegenDir);
      return codegenDir;
    };

    var _iterator = (0, _createForOfIteratorHelper2["default"])(writerConfig.generatedDirectories || []),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var existingDirectory = _step.value;
        addCodegenDir(existingDirectory);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var configOutputDirectory;

    if (writerConfig.outputDir) {
      configOutputDirectory = addCodegenDir(writerConfig.outputDir);
    }

    var getGeneratedDirectory = function getGeneratedDirectory(definitionName) {
      if (configOutputDirectory) {
        return configOutputDirectory;
      }

      var generatedPath = path.join(getDefinitionMeta(definitionName).dir, '__generated__');
      var cachedDir = allOutputDirectories.get(generatedPath);

      if (!cachedDir) {
        cachedDir = addCodegenDir(generatedPath);
      }

      return cachedDir;
    };

    var formatModule = Profiler.instrument(writerConfig.formatModule, 'RelayFileWriter:formatModule');
    var persistQuery = writerConfig.persistQuery ? Profiler.instrumentWait(writerConfig.persistQuery, 'RelayFileWriter:persistQuery') : null;

    try {
      yield Promise.all(artifacts.map( /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator(function* (_ref5) {
          var _writerConfig$repersi, _writerConfig$writeQu;

          var definition = _ref5[0],
              node = _ref5[1];
          var nodeName = node.kind === 'Request' ? node.params.name : node.name;

          if (baseDefinitionNames.has(nodeName)) {
            // don't add definitions that were part of base context
            return;
          }

          var typeNode = transformedTypeContext.get(nodeName);
          var typeText = typeNode ? writerConfig.typeGenerator.generate(schema, typeNode, {
            customScalars: writerConfig.customScalars,
            enumsHasteModule: writerConfig.enumsHasteModule,
            optionalInputFields: writerConfig.optionalInputFieldsForFlow,
            useHaste: writerConfig.useHaste,
            useSingleArtifactDirectory: !!writerConfig.outputDir,
            noFutureProofEnums: writerConfig.noFutureProofEnums,
            normalizationIR: definition.kind === 'Request' ? definition.root : undefined
          }) : '';
          var sourceHash = Profiler.run('hashGraphQL', function () {
            return md5(graphql.print(getDefinitionMeta(nodeName).ast));
          });
          yield writeRelayGeneratedFile(schema, getGeneratedDirectory(nodeName), definition, node, formatModule, typeText, persistQuery, sourceHash, writerConfig.extension, writerConfig.printModuleDependency, (_writerConfig$repersi = writerConfig.repersist) !== null && _writerConfig$repersi !== void 0 ? _writerConfig$repersi : false, (_writerConfig$writeQu = writerConfig.writeQueryParameters) !== null && _writerConfig$writeQu !== void 0 ? _writerConfig$writeQu : function noop() {}, languagePlugin);
        });

        return function (_x) {
          return _ref7.apply(this, arguments);
        };
      }()));
      var generateExtraFiles = writerConfig.generateExtraFiles;

      if (generateExtraFiles) {
        Profiler.run('RelayFileWriter:generateExtraFiles', function () {
          var configDirectory = writerConfig.outputDir;
          generateExtraFiles(function (dir) {
            var outputDirectory = dir || configDirectory;
            !outputDirectory ? process.env.NODE_ENV !== "production" ? invariant(false, 'RelayFileWriter: cannot generate extra files without specifying ' + 'an outputDir in the config or passing it in.') : invariant(false) : void 0;
            var outputDir = allOutputDirectories.get(outputDirectory);

            if (!outputDir) {
              outputDir = addCodegenDir(outputDirectory);
            }

            return outputDir;
          }, transformedQueryContext, getGeneratedDirectory);
        });
      }

      allOutputDirectories.forEach(function (dir) {
        dir.deleteExtraFiles(languagePlugin === null || languagePlugin === void 0 ? void 0 : languagePlugin.keepExtraFile);
      });

      if (sourceControl && !onlyValidate) {
        yield CodegenDirectory.sourceControlAddRemove(sourceControl, Array.from(allOutputDirectories.values()));
      }
    } catch (error) {
      var details;

      try {
        details = JSON.parse(error.message);
      } catch (_) {} // eslint-disable-line lint/no-unused-catch-bindings


      if (details && details.name === 'GraphQL2Exception' && details.message) {
        throw new Error('GraphQL error writing modules:\n' + details.message);
      }

      throw new Error('Error writing modules:\n' + String(error.stack || error));
    }

    return allOutputDirectories;
  }));
}

module.exports = {
  writeAll: writeAll
};