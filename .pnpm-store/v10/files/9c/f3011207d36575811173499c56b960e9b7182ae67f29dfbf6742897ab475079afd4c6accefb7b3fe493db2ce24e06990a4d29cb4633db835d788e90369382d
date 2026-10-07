// @flow strict-local
import type {
  Async,
  FilePath,
  PackageName,
  RawParcelConfig,
  ResolvedParcelConfigFile,
} from '@parcel/types';
import type {FileSystem} from '@parcel/fs';
import type {StaticRunOpts} from '../RequestTracker';
import type {
  ExtendableParcelConfigPipeline,
  PureParcelConfigPipeline,
  ParcelOptions,
  ProcessedParcelConfig,
} from '../types';

import {
  isDirectoryInside,
  hashObject,
  resolveConfig,
  validateSchema,
  findAlternativeNodeModules,
  findAlternativeFiles,
} from '@parcel/utils';
import ThrowableDiagnostic, {
  generateJSONCodeHighlights,
  escapeMarkdown,
  md,
} from '@parcel/diagnostic';
import {parse} from 'json5';
import path from 'path';
import invariant from 'assert';

import ParcelConfigSchema from '../ParcelConfig.schema';
import {optionsProxy} from '../utils';
import ParcelConfig from '../ParcelConfig';
import {createBuildCache} from '../buildCache';
import {toProjectPath} from '../projectPath';

type ConfigMap<K, V> = {[K]: V, ...};

export type ConfigAndCachePath = {|
  config: ProcessedParcelConfig,
  cachePath: string,
|};

type RunOpts<TResult> = {|
  input: null,
  ...StaticRunOpts<TResult>,
|};

export type ParcelConfigRequest = {|
  id: string,
  type: string,
  input: null,
  run: (RunOpts<ConfigAndCachePath>) => Async<ConfigAndCachePath>,
|};

type ParcelConfigChain = {|
  config: ProcessedParcelConfig,
  extendedFiles: Array<FilePath>,
|};

const type = 'parcel_config_request';

export default function createParcelConfigRequest(): ParcelConfigRequest {
  return {
    id: type,
    type,
    async run({api, options}) {
      let {
        config,
        extendedFiles,
        usedDefault,
      }: {|
        ...ParcelConfigChain,
        usedDefault: boolean,
      |} = await loadParcelConfig(
        optionsProxy(options, api.invalidateOnOptionChange),
      );

      api.invalidateOnFileUpdate(config.filePath);
      api.invalidateOnFileDelete(config.filePath);

      for (let filePath of extendedFiles) {
        let pp = toProjectPath(options.projectRoot, filePath);
        api.invalidateOnFileUpdate(pp);
        api.invalidateOnFileDelete(pp);
      }

      if (usedDefault) {
        let resolveFrom = getResolveFrom(options.inputFS, options.projectRoot);
        api.invalidateOnFileCreate({
          fileName: '.parcelrc',
          aboveFilePath: toProjectPath(options.projectRoot, resolveFrom),
        });
      }

      let cachePath = hashObject(config);
      await options.cache.set(cachePath, config);
      let result = {config, cachePath};
      // TODO: don't store config twice (once in the graph and once in a separate cache entry)
      api.storeResult(result);
      return result;
    },
    input: null,
  };
}

const parcelConfigCache = createBuildCache();
export function getCachedParcelConfig(
  result: ConfigAndCachePath,
  options: ParcelOptions,
): ParcelConfig {
  let {config: processedConfig, cachePath} = result;
  let config = parcelConfigCache.get(cachePath);
  if (config) {
    return config;
  }

  config = new ParcelConfig(processedConfig, options);

  parcelConfigCache.set(cachePath, config);
  return config;
}

export async function loadParcelConfig(
  options: ParcelOptions,
): Promise<{|...ParcelConfigChain, usedDefault: boolean|}> {
  let parcelConfig = await resolveParcelConfig(options);

  if (!parcelConfig) {
    throw new Error('Could not find a .parcelrc');
  }

  return parcelConfig;
}

export async function resolveParcelConfig(
  options: ParcelOptions,
): Promise<?{|...ParcelConfigChain, usedDefault: boolean|}> {
  let resolveFrom = getResolveFrom(options.inputFS, options.projectRoot);
  let configPath =
    options.config != null
      ? (await options.packageManager.resolve(options.config, resolveFrom))
          .resolved
      : await resolveConfig(
          options.inputFS,
          resolveFrom,
          ['.parcelrc'],
          options.projectRoot,
        );

  let usedDefault = false;
  if (configPath == null && options.defaultConfig != null) {
    usedDefault = true;
    configPath = (
      await options.packageManager.resolve(options.defaultConfig, resolveFrom)
    ).resolved;
  }

  if (configPath == null) {
    return null;
  }

  let contents;
  try {
    contents = await options.inputFS.readFile(configPath, 'utf8');
  } catch (e) {
    throw new ThrowableDiagnostic({
      diagnostic: {
        message: md`Could not find parcel config at ${path.relative(
          options.projectRoot,
          configPath,
        )}`,
        origin: '@parcel/core',
      },
    });
  }

  let {config, extendedFiles}: ParcelConfigChain = await parseAndProcessConfig(
    configPath,
    contents,
    options,
  );

  if (options.additionalReporters.length > 0) {
    config.reporters = [
      ...options.additionalReporters.map(({packageName, resolveFrom}) => ({
        packageName,
        resolveFrom,
      })),
      ...(config.reporters ?? []),
    ];
  }

  return {config, extendedFiles, usedDefault};
}

export function create(
  config: ResolvedParcelConfigFile,
  options: ParcelOptions,
): Promise<ParcelConfigChain> {
  return processConfigChain(config, config.filePath, options);
}

// eslint-disable-next-line require-await
export async function parseAndProcessConfig(
  configPath: FilePath,
  contents: string,
  options: ParcelOptions,
): Promise<ParcelConfigChain> {
  let config: RawParcelConfig;
  try {
    config = parse(contents);
  } catch (e) {
    let pos = {
      line: e.lineNumber,
      column: e.columnNumber,
    };
    throw new ThrowableDiagnostic({
      diagnostic: {
        message: `Failed to parse .parcelrc`,
        origin: '@parcel/core',

        codeFrames: [
          {
            filePath: configPath,
            language: 'json5',
            code: contents,
            codeHighlights: [
              {
                start: pos,
                end: pos,
                message: escapeMarkdown(e.message),
              },
            ],
          },
        ],
      },
    });
  }
  return processConfigChain(config, configPath, options);
}

function processPipeline(
  options: ParcelOptions,
  pipeline: ?Array<PackageName>,
  keyPath: string,
  filePath: FilePath,
) {
  if (pipeline) {
    return pipeline.map((pkg, i) => {
      // $FlowFixMe
      if (pkg === '...') return pkg;

      return {
        packageName: pkg,
        resolveFrom: toProjectPath(options.projectRoot, filePath),
        keyPath: `${keyPath}/${i}`,
      };
    });
  }
}

const RESERVED_PIPELINES = new Set([
  'node:',
  'npm:',
  'http:',
  'https:',
  'data:',
  'tel:',
  'mailto:',
]);

async function processMap(
  // $FlowFixMe
  map: ?ConfigMap<any, any>,
  keyPath: string,
  filePath: FilePath,
  options: ParcelOptions,
  // $FlowFixMe
): Promise<ConfigMap<any, any> | typeof undefined> {
  if (!map) return undefined;

  // $FlowFixMe
  let res: ConfigMap<any, any> = {};
  for (let k in map) {
    let i = k.indexOf(':');
    if (i > 0 && RESERVED_PIPELINES.has(k.slice(0, i + 1))) {
      let code = await options.inputFS.readFile(filePath, 'utf8');
      throw new ThrowableDiagnostic({
        diagnostic: {
          message: `Named pipeline '${k.slice(0, i + 1)}' is reserved.`,
          origin: '@parcel/core',
          codeFrames: [
            {
              filePath: filePath,
              language: 'json5',
              code,
              codeHighlights: generateJSONCodeHighlights(code, [
                {
                  key: `${keyPath}/${k}`,
                  type: 'key',
                },
              ]),
            },
          ],
          documentationURL:
            'https://parceljs.org/features/dependency-resolution/#url-schemes',
        },
      });
    }

    if (typeof map[k] === 'string') {
      res[k] = {
        packageName: map[k],
        resolveFrom: toProjectPath(options.projectRoot, filePath),
        keyPath: `${keyPath}/${k}`,
      };
    } else {
      res[k] = processPipeline(options, map[k], `${keyPath}/${k}`, filePath);
    }
  }

  return res;
}

export async function processConfig(
  configFile: ResolvedParcelConfigFile,
  options: ParcelOptions,
): Promise<ProcessedParcelConfig> {
  return {
    filePath: toProjectPath(options.projectRoot, configFile.filePath),
    ...(configFile.resolveFrom != null
      ? {
          resolveFrom: toProjectPath(
            options.projectRoot,
            configFile.resolveFrom,
          ),
        }
      : {
          /*::...null*/
        }),
    resolvers: processPipeline(
      options,
      configFile.resolvers,
      '/resolvers',
      configFile.filePath,
    ),
    transformers: await processMap(
      configFile.transformers,
      '/transformers',
      configFile.filePath,
      options,
    ),
    bundler:
      configFile.bundler != null
        ? {
            packageName: configFile.bundler,
            resolveFrom: toProjectPath(
              options.projectRoot,
              configFile.filePath,
            ),
            keyPath: '/bundler',
          }
        : undefined,
    namers: processPipeline(
      options,
      configFile.namers,
      '/namers',
      configFile.filePath,
    ),
    runtimes: processPipeline(
      options,
      configFile.runtimes,
      '/runtimes',
      configFile.filePath,
    ),
    packagers: await processMap(
      configFile.packagers,
      '/packagers',
      configFile.filePath,
      options,
    ),
    optimizers: await processMap(
      configFile.optimizers,
      '/optimizers',
      configFile.filePath,
      options,
    ),
    compressors: await processMap(
      configFile.compressors,
      '/compressors',
      configFile.filePath,
      options,
    ),
    reporters: processPipeline(
      options,
      configFile.reporters,
      '/reporters',
      configFile.filePath,
    ),
    validators: await processMap(
      configFile.validators,
      '/validators',
      configFile.filePath,
      options,
    ),
  };
}

export async function processConfigChain(
  configFile: RawParcelConfig | ResolvedParcelConfigFile,
  filePath: FilePath,
  options: ParcelOptions,
): Promise<ParcelConfigChain> {
  // Validate config...
  let relativePath = path.relative(options.inputFS.cwd(), filePath);
  validateConfigFile(configFile, relativePath);

  // Process config...
  let config: ProcessedParcelConfig = await processConfig(
    {
      filePath,
      ...configFile,
    },
    options,
  );

  let extendedFiles: Array<FilePath> = [];
  if (configFile.extends != null) {
    let exts = Array.isArray(configFile.extends)
      ? configFile.extends
      : [configFile.extends];
    let errors = [];
    if (exts.length !== 0) {
      let extStartConfig;
      let i = 0;
      for (let ext of exts) {
        try {
          let key = Array.isArray(configFile.extends)
            ? `/extends/${i}`
            : '/extends';
          let resolved = await resolveExtends(ext, filePath, key, options);
          extendedFiles.push(resolved);
          let {extendedFiles: moreExtendedFiles, config: nextConfig} =
            await processExtendedConfig(filePath, key, ext, resolved, options);
          extendedFiles = extendedFiles.concat(moreExtendedFiles);
          extStartConfig = extStartConfig
            ? mergeConfigs(extStartConfig, nextConfig)
            : nextConfig;
        } catch (err) {
          errors.push(err);
        }

        i++;
      }

      // Merge with the inline config last
      if (extStartConfig) {
        config = mergeConfigs(extStartConfig, config);
      }
    }

    if (errors.length > 0) {
      throw new ThrowableDiagnostic({
        diagnostic: errors.flatMap(e => e.diagnostics),
      });
    }
  }

  return {config, extendedFiles};
}

export async function resolveExtends(
  ext: string,
  configPath: FilePath,
  extendsKey: string,
  options: ParcelOptions,
): Promise<FilePath> {
  if (ext.startsWith('.')) {
    return path.resolve(path.dirname(configPath), ext);
  } else {
    try {
      let {resolved} = await options.packageManager.resolve(ext, configPath);
      return options.inputFS.realpath(resolved);
    } catch (err) {
      let parentContents = await options.inputFS.readFile(configPath, 'utf8');
      let alternatives = await findAlternativeNodeModules(
        options.inputFS,
        ext,
        path.dirname(configPath),
      );
      throw new ThrowableDiagnostic({
        diagnostic: {
          message: `Cannot find extended parcel config`,
          origin: '@parcel/core',
          codeFrames: [
            {
              filePath: configPath,
              language: 'json5',
              code: parentContents,
              codeHighlights: generateJSONCodeHighlights(parentContents, [
                {
                  key: extendsKey,
                  type: 'value',
                  message: md`Cannot find module "${ext}"${
                    alternatives[0]
                      ? `, did you mean "${alternatives[0]}"?`
                      : ''
                  }`,
                },
              ]),
            },
          ],
        },
      });
    }
  }
}

async function processExtendedConfig(
  configPath: FilePath,
  extendsKey: string,
  extendsSpecifier: string,
  resolvedExtendedConfigPath: FilePath,
  options: ParcelOptions,
): Promise<ParcelConfigChain> {
  let contents;
  try {
    contents = await options.inputFS.readFile(
      resolvedExtendedConfigPath,
      'utf8',
    );
  } catch (e) {
    let parentContents = await options.inputFS.readFile(configPath, 'utf8');
    let alternatives = await findAlternativeFiles(
      options.inputFS,
      extendsSpecifier,
      path.dirname(resolvedExtendedConfigPath),
      options.projectRoot,
    );
    throw new ThrowableDiagnostic({
      diagnostic: {
        message: 'Cannot find extended parcel config',
        origin: '@parcel/core',
        codeFrames: [
          {
            filePath: configPath,
            language: 'json5',
            code: parentContents,
            codeHighlights: generateJSONCodeHighlights(parentContents, [
              {
                key: extendsKey,
                type: 'value',
                message: md`"${extendsSpecifier}" does not exist${
                  alternatives[0] ? `, did you mean "${alternatives[0]}"?` : ''
                }`,
              },
            ]),
          },
        ],
      },
    });
  }

  return parseAndProcessConfig(resolvedExtendedConfigPath, contents, options);
}

export function validateConfigFile(
  config: RawParcelConfig | ResolvedParcelConfigFile,
  relativePath: FilePath,
) {
  validateNotEmpty(config, relativePath);

  validateSchema.diagnostic(
    ParcelConfigSchema,
    {data: config, filePath: relativePath},
    '@parcel/core',
    'Invalid Parcel Config',
  );
}

export function validateNotEmpty(
  config: RawParcelConfig | ResolvedParcelConfigFile,
  relativePath: FilePath,
) {
  invariant.notDeepStrictEqual(config, {}, `${relativePath} can't be empty`);
}

export function mergeConfigs(
  base: ProcessedParcelConfig,
  ext: ProcessedParcelConfig,
): ProcessedParcelConfig {
  return {
    filePath: ext.filePath,
    resolvers: assertPurePipeline(
      mergePipelines(base.resolvers, ext.resolvers),
    ),
    transformers: mergeMaps(
      base.transformers,
      ext.transformers,
      mergePipelines,
    ),
    validators: mergeMaps(base.validators, ext.validators, mergePipelines),
    bundler: ext.bundler || base.bundler,
    namers: assertPurePipeline(mergePipelines(base.namers, ext.namers)),
    runtimes: assertPurePipeline(mergePipelines(base.runtimes, ext.runtimes)),
    packagers: mergeMaps(base.packagers, ext.packagers),
    optimizers: mergeMaps(base.optimizers, ext.optimizers, mergePipelines),
    compressors: mergeMaps(base.compressors, ext.compressors, mergePipelines),
    reporters: assertPurePipeline(
      mergePipelines(base.reporters, ext.reporters),
    ),
  };
}

export function getResolveFrom(
  fs: FileSystem,
  projectRoot: FilePath,
): FilePath {
  let cwd = fs.cwd();
  let dir = isDirectoryInside(cwd, projectRoot) ? cwd : projectRoot;
  return path.join(dir, 'index');
}

function assertPurePipeline(
  pipeline: ExtendableParcelConfigPipeline,
): PureParcelConfigPipeline {
  return pipeline.map(s => {
    invariant(typeof s !== 'string');
    return s;
  });
}

export function mergePipelines(
  base: ?ExtendableParcelConfigPipeline,
  ext: ?ExtendableParcelConfigPipeline,
): ExtendableParcelConfigPipeline {
  if (ext == null) {
    return base ?? [];
  }

  if (ext.filter(v => v === '...').length > 1) {
    throw new Error(
      'Only one spread element can be included in a config pipeline',
    );
  }

  // Merge the base pipeline if a rest element is defined
  let spreadIndex = ext.indexOf('...');
  if (spreadIndex >= 0) {
    return [
      ...ext.slice(0, spreadIndex),
      ...(base ?? []),
      ...ext.slice(spreadIndex + 1),
    ];
  } else {
    return ext;
  }
}

export function mergeMaps<K: string, V>(
  base: ?ConfigMap<K, V>,
  ext: ?ConfigMap<K, V>,
  merger?: (a: V, b: V) => V,
): ConfigMap<K, V> {
  if (!ext || Object.keys(ext).length === 0) {
    return base || {};
  }

  if (!base) {
    return ext;
  }

  let res: ConfigMap<K, V> = {};
  // Add the extension options first so they have higher precedence in the output glob map
  for (let k in ext) {
    //$FlowFixMe Flow doesn't correctly infer the type. See https://github.com/facebook/flow/issues/1736.
    let key: K = (k: any);
    res[key] =
      merger && base[key] != null ? merger(base[key], ext[key]) : ext[key];
  }

  // Add base options that aren't defined in the extension
  for (let k in base) {
    // $FlowFixMe
    let key: K = (k: any);
    if (res[key] == null) {
      res[key] = base[key];
    }
  }

  return res;
}
