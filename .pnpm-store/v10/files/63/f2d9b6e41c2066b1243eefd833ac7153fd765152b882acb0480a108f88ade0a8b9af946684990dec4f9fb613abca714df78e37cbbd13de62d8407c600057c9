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

const CodegenRunner = require('../codegen/CodegenRunner');
const ConsoleReporter = require('../reporters/ConsoleReporter');
const DotGraphQLParser = require('../core/DotGraphQLParser');
const RelayFileWriter = require('../codegen/RelayFileWriter');
const RelayIRTransforms = require('../core/RelayIRTransforms');
const RelayLanguagePluginJavaScript = require('../language/javascript/RelayLanguagePluginJavaScript');
const RelaySourceModuleParser = require('../core/RelaySourceModuleParser');
const WatchmanClient = require('../core/GraphQLWatchmanClient');

const crypto = require('crypto');
const fs = require('fs');
const glob = require('glob');
const invariant = require('invariant');
const path = require('path');

const {buildClientSchema, Source, printSchema} = require('graphql');

const {
  commonTransforms,
  codegenTransforms,
  fragmentTransforms,
  printTransforms,
  queryTransforms,
  schemaExtensions: relaySchemaExtensions,
} = RelayIRTransforms;

import type {ScalarTypeMapping} from '../language/javascript/RelayFlowTypeTransformers';
import type {WriteFilesOptions} from '../codegen/CodegenRunner';
import type {
  PluginInitializer,
  PluginInterface,
} from '../language/RelayLanguagePluginInterface';

export type Config = {|
  schema: string,
  src: string,
  extensions: Array<string>,
  include: Array<string>,
  exclude: Array<string>,
  verbose: boolean,
  watchman: boolean,
  watch?: ?boolean,
  validate: boolean,
  quiet: boolean,
  persistOutput?: ?string,
  noFutureProofEnums: boolean,
  eagerESModules?: boolean,
  language: string | PluginInitializer,
  persistFunction?: ?string | ?((text: string) => Promise<string>),
  repersist: boolean,
  artifactDirectory?: ?string,
  customScalars?: ScalarTypeMapping,
|};

function buildWatchExpression(config: {
  extensions: Array<string>,
  include: Array<string>,
  exclude: Array<string>,
  ...
}) {
  return [
    'allof',
    ['type', 'f'],
    ['anyof', ...config.extensions.map(ext => ['suffix', ext])],
    [
      'anyof',
      ...config.include.map(include => ['match', include, 'wholename']),
    ],
    ...config.exclude.map(exclude => ['not', ['match', exclude, 'wholename']]),
  ];
}

function getFilepathsFromGlob(
  baseDir,
  config: {
    extensions: Array<string>,
    include: Array<string>,
    exclude: Array<string>,
    ...
  },
): Array<string> {
  const {extensions, include, exclude} = config;

  const files = new Set();
  include.forEach(inc =>
    glob
      .sync(`${inc}/*.+(${extensions.join('|')})`, {
        cwd: baseDir,
        ignore: exclude,
      })
      .forEach(file => files.add(file)),
  );
  return Array.from(files);
}

type LanguagePlugin = PluginInitializer | {default: PluginInitializer, ...};

/**
 * Unless the requested plugin is the builtin `javascript` one, import a
 * language plugin as either a CommonJS or ES2015 module.
 *
 * When importing, first check if it’s a path to an existing file, otherwise
 * assume it’s a package and prepend the plugin namespace prefix.
 *
 * Make sure to always use Node's `require` function, which otherwise would get
 * replaced with `__webpack_require__` when bundled using webpack, by using
 * `eval` to get it at runtime.
 */
function getLanguagePlugin(
  language: string | PluginInitializer,
  options?: {|
    eagerESModules: boolean,
  |},
): PluginInterface {
  if (language === 'javascript') {
    return RelayLanguagePluginJavaScript({
      eagerESModules: Boolean(options && options.eagerESModules),
    });
  } else {
    let languagePlugin: LanguagePlugin;
    if (typeof language === 'string') {
      const pluginPath = path.resolve(process.cwd(), language);
      const requirePath = fs.existsSync(pluginPath)
        ? pluginPath
        : `relay-compiler-language-${language}`;
      try {
        // eslint-disable-next-line no-eval
        languagePlugin = eval('require')(requirePath);
        if (languagePlugin.default) {
          languagePlugin = languagePlugin.default;
        }
      } catch (err) {
        const e = new Error(
          `Unable to load language plugin ${requirePath}: ${err.message}`,
        );
        e.stack = err.stack;
        throw e;
      }
    } else {
      languagePlugin = language;
    }
    if (languagePlugin.default != null) {
      /* $FlowFixMe[incompatible-type] - Flow no longer considers statics of
       * functions as any */
      languagePlugin = languagePlugin.default;
    }
    if (typeof languagePlugin === 'function') {
      // $FlowFixMe[incompatible-use]
      return languagePlugin();
    } else {
      throw new Error('Expected plugin to be a initializer function.');
    }
  }
}

function getPersistQueryFunction(
  config: Config,
): ?(text: string) => Promise<string> {
  const configValue = config.persistFunction;
  if (configValue == null) {
    return null;
  } else if (typeof configValue === 'string') {
    try {
      // eslint-disable-next-line no-eval
      const persistFunction = eval('require')(
        path.resolve(process.cwd(), configValue),
      );
      if (persistFunction.default) {
        return persistFunction.default;
      }
      return persistFunction;
    } catch (err) {
      const e = new Error(
        `Unable to load persistFunction ${configValue}: ${err.message}`,
      );
      e.stack = err.stack;
      throw e;
    }
  } else if (typeof configValue === 'function') {
    return configValue;
  } else {
    throw new Error(
      'Expected persistFunction to be a path string or a function.',
    );
  }
}

async function main(defaultConfig: Config) {
  if (defaultConfig.verbose && defaultConfig.quiet) {
    throw new Error("I can't be quiet and verbose at the same time");
  }

  let config = getPathBasedConfig(defaultConfig);
  config = await getWatchConfig(config);

  // Use function from module.exports to be able to mock it for tests
  const codegenRunner = module.exports.getCodegenRunner(config);

  const result = config.watch
    ? await codegenRunner.watchAll()
    : await codegenRunner.compileAll();

  if (result === 'ERROR') {
    process.exit(100);
  }
  if (config.validate && result !== 'NO_CHANGES') {
    process.exit(101);
  }
}

function getPathBasedConfig(config: Config) {
  const schema = path.resolve(process.cwd(), config.schema);
  if (!fs.existsSync(schema)) {
    throw new Error(`--schema path does not exist: ${schema}`);
  }

  const src = path.resolve(process.cwd(), config.src);
  if (!fs.existsSync(src)) {
    throw new Error(`--src path does not exist: ${src}`);
  }

  let persistOutput = config.persistOutput;
  if (typeof persistOutput === 'string') {
    persistOutput = path.resolve(process.cwd(), persistOutput);
    const persistOutputDir = path.dirname(persistOutput);
    if (!fs.existsSync(persistOutputDir)) {
      throw new Error(`--persistOutput path does not exist: ${persistOutput}`);
    }
  }

  return {...config, schema, src, persistOutput};
}

async function getWatchConfig(config: Config): Promise<Config> {
  const watchman = config.watchman && (await WatchmanClient.isAvailable());

  if (config.watch) {
    if (!watchman) {
      console.error(
        'Watchman is required to watch for changes. Running with watch mode disabled.',
      );
      return {...config, watch: false, watchman: false};
    }
    if (!module.exports.hasWatchmanRootFile(config.src)) {
      throw new Error(
        `
--watch requires that the src directory have a valid watchman "root" file.

Root files can include:
- A .git/ Git folder
- A .hg/ Mercurial folder
- A .watchmanconfig file

Ensure that one such file exists in ${config.src} or its parents.
      `.trim(),
      );
    }
  } else if (watchman && !config.validate) {
    // eslint-disable-next-line no-console
    console.log('HINT: pass --watch to keep watching for changes.');
  }

  return {...config, watchman};
}

function getCodegenRunner(config: Config): CodegenRunner {
  const reporter = new ConsoleReporter({
    verbose: config.verbose,
    quiet: config.quiet,
  });
  const schema = getSchemaSource(config.schema);
  const languagePlugin = getLanguagePlugin(config.language, {
    eagerESModules: config.eagerESModules === true,
  });
  const persistQueryFunction = getPersistQueryFunction(config);
  const inputExtensions = config.extensions || languagePlugin.inputExtensions;
  const outputExtension = languagePlugin.outputExtension;
  const sourceParserName = inputExtensions.join('/');
  const sourceWriterName = outputExtension;
  const sourceModuleParser = RelaySourceModuleParser(
    languagePlugin.findGraphQLTags,
    languagePlugin.getFileFilter,
  );
  const providedArtifactDirectory = config.artifactDirectory;
  const artifactDirectory =
    providedArtifactDirectory != null
      ? path.resolve(process.cwd(), providedArtifactDirectory)
      : null;
  const generatedDirectoryName = artifactDirectory ?? '__generated__';
  const sourceSearchOptions = {
    extensions: inputExtensions,
    include: config.include,
    exclude: ['**/*.graphql.*', ...config.exclude],
  };
  const graphqlSearchOptions = {
    extensions: ['graphql'],
    include: config.include,
    exclude: [path.relative(config.src, config.schema)].concat(config.exclude),
  };
  const defaultIsGeneratedFile = (filePath: string) =>
    filePath.endsWith('.graphql.' + outputExtension) &&
    filePath.includes(generatedDirectoryName);
  const schemaExtensions = languagePlugin.schemaExtensions
    ? [...languagePlugin.schemaExtensions, ...relaySchemaExtensions]
    : relaySchemaExtensions;
  const parserConfigs = {
    [sourceParserName]: {
      baseDir: config.src,
      getFileFilter: sourceModuleParser.getFileFilter,
      getParser: sourceModuleParser.getParser,
      getSchemaSource: () => schema,
      schemaExtensions,
      watchmanExpression: config.watchman
        ? buildWatchExpression(sourceSearchOptions)
        : null,
      filepaths: config.watchman
        ? null
        : getFilepathsFromGlob(config.src, sourceSearchOptions),
    },
    graphql: {
      baseDir: config.src,
      getParser: DotGraphQLParser.getParser,
      getSchemaSource: () => schema,
      schemaExtensions,
      watchmanExpression: config.watchman
        ? buildWatchExpression(graphqlSearchOptions)
        : null,
      filepaths: config.watchman
        ? null
        : getFilepathsFromGlob(config.src, graphqlSearchOptions),
    },
  };
  const writerConfigs = {
    [sourceWriterName]: {
      writeFiles: getRelayFileWriter(
        config.src,
        languagePlugin,
        config.noFutureProofEnums,
        artifactDirectory,
        config.persistOutput,
        config.customScalars,
        persistQueryFunction,
        config.repersist,
      ),
      isGeneratedFile: languagePlugin.isGeneratedFile
        ? languagePlugin.isGeneratedFile
        : defaultIsGeneratedFile,
      parser: sourceParserName,
      baseParsers: ['graphql'],
    },
  };
  const codegenRunner = new CodegenRunner({
    reporter,
    parserConfigs,
    writerConfigs,
    onlyValidate: config.validate,
    // TODO: allow passing in a flag or detect?
    sourceControl: null,
  });
  return codegenRunner;
}

function defaultPersistFunction(text: string): Promise<string> {
  const hasher = crypto.createHash('md5');
  hasher.update(text);
  const id = hasher.digest('hex');
  return Promise.resolve(id);
}

function getRelayFileWriter(
  baseDir: string,
  languagePlugin: PluginInterface,
  noFutureProofEnums: boolean,
  outputDir?: ?string,
  persistedQueryPath?: ?string,
  customScalars?: ScalarTypeMapping,
  persistFunction?: ?(text: string) => Promise<string>,
  repersist?: boolean,
) {
  return async ({
    onlyValidate,
    schema,
    documents,
    baseDocuments,
    sourceControl,
    reporter,
  }: WriteFilesOptions) => {
    let persistQuery;
    let queryMap;
    if (persistFunction != null || persistedQueryPath != null) {
      queryMap = new Map();
      const persistImplmentation = persistFunction || defaultPersistFunction;
      persistQuery = async (text: string) => {
        const id = await persistImplmentation(text);
        invariant(
          typeof id === 'string',
          'Expected persist function to return a string, got `%s`.',
          id,
        );
        queryMap.set(id, text);
        return id;
      };
    }
    const schemaExtensions = languagePlugin.schemaExtensions
      ? [...languagePlugin.schemaExtensions, ...relaySchemaExtensions]
      : relaySchemaExtensions;
    const results = await RelayFileWriter.writeAll({
      config: {
        baseDir,
        compilerTransforms: {
          commonTransforms,
          codegenTransforms,
          fragmentTransforms,
          printTransforms,
          queryTransforms,
        },
        customScalars: customScalars || {},
        formatModule: languagePlugin.formatModule,
        optionalInputFieldsForFlow: [],
        schemaExtensions,
        useHaste: false,
        noFutureProofEnums,
        extension: languagePlugin.outputExtension,
        typeGenerator: languagePlugin.typeGenerator,
        outputDir,
        persistQuery,
        repersist,
      },
      onlyValidate,
      schema,
      baseDocuments,
      documents,
      reporter,
      sourceControl,
      languagePlugin,
    });
    if (queryMap != null && persistedQueryPath != null) {
      let object = {};
      if (fs.existsSync(persistedQueryPath)) {
        try {
          const prevText = fs.readFileSync(persistedQueryPath, 'utf8');
          const prevData = JSON.parse(prevText);
          if (prevData != null && typeof prevData === 'object') {
            object = prevData;
          } else {
            console.error(
              `Invalid data in persisted query file '${persistedQueryPath}', expected an object.`,
            );
          }
        } catch (error) {
          console.error(error);
        }
      }
      for (const [id, text] of queryMap.entries()) {
        object[id] = text;
      }
      const data = JSON.stringify(object, null, 2);
      fs.writeFileSync(persistedQueryPath, data, 'utf8');
    }
    return results;
  };
}

function getSchemaSource(schemaPath: string): Source {
  let source = fs.readFileSync(schemaPath, 'utf8');
  if (path.extname(schemaPath) === '.json') {
    source = printSchema(buildClientSchema(JSON.parse(source).data));
  }
  source = `
  directive @include(if: Boolean) on FRAGMENT_SPREAD | FIELD | INLINE_FRAGMENT
  directive @skip(if: Boolean) on FRAGMENT_SPREAD | FIELD | INLINE_FRAGMENT

  ${source}
  `;
  return new Source(source, schemaPath);
}

// Ensure that a watchman "root" file exists in the given directory
// or a parent so that it can be watched
const WATCHMAN_ROOT_FILES = ['.git', '.hg', '.watchmanconfig'];
function hasWatchmanRootFile(testPath: string): boolean {
  while (path.dirname(testPath) !== testPath) {
    if (
      WATCHMAN_ROOT_FILES.some(file => {
        return fs.existsSync(path.join(testPath, file));
      })
    ) {
      return true;
    }
    testPath = path.dirname(testPath);
  }
  return false;
}

module.exports = {
  getCodegenRunner,
  getLanguagePlugin,
  getWatchConfig,
  hasWatchmanRootFile,
  main,
};
