// @flow
import type {
  Glob,
  Transformer,
  Resolver,
  Bundler,
  Namer,
  Runtime,
  PackageName,
  Optimizer,
  Compressor,
  Packager,
  Reporter,
  Semver,
  SemverRange,
  Validator,
  FilePath,
} from '@parcel/types';
import type {
  ProcessedParcelConfig,
  ParcelPluginNode,
  PureParcelConfigPipeline,
  ExtendableParcelConfigPipeline,
  ParcelOptions,
} from './types';
import ThrowableDiagnostic, {
  md,
  generateJSONCodeHighlights,
} from '@parcel/diagnostic';
import json5 from 'json5';

import {globToRegex} from '@parcel/utils';
import {basename} from 'path';
import loadPlugin from './loadParcelPlugin';
import {
  type ProjectPath,
  fromProjectPath,
  fromProjectPathRelative,
  toProjectPathUnsafe,
} from './projectPath';

type GlobMap<T> = {[Glob]: T, ...};
type SerializedParcelConfig = {|
  $$raw: boolean,
  config: ProcessedParcelConfig,
  options: ParcelOptions,
|};

export type LoadedPlugin<T> = {|
  name: string,
  version: Semver,
  plugin: T,
  resolveFrom: ProjectPath,
  keyPath?: string,
  range?: ?SemverRange,
|};

export default class ParcelConfig {
  options: ParcelOptions;
  filePath: ProjectPath;
  resolvers: PureParcelConfigPipeline;
  transformers: GlobMap<ExtendableParcelConfigPipeline>;
  bundler: ?ParcelPluginNode;
  namers: PureParcelConfigPipeline;
  runtimes: PureParcelConfigPipeline;
  packagers: GlobMap<ParcelPluginNode>;
  validators: GlobMap<ExtendableParcelConfigPipeline>;
  optimizers: GlobMap<ExtendableParcelConfigPipeline>;
  compressors: GlobMap<ExtendableParcelConfigPipeline>;
  reporters: PureParcelConfigPipeline;
  pluginCache: Map<PackageName, any>;
  regexCache: Map<string, RegExp>;

  constructor(config: ProcessedParcelConfig, options: ParcelOptions) {
    this.options = options;
    this.filePath = config.filePath;
    this.resolvers = config.resolvers || [];
    this.transformers = config.transformers || {};
    this.runtimes = config.runtimes || [];
    this.bundler = config.bundler;
    this.namers = config.namers || [];
    this.packagers = config.packagers || {};
    this.optimizers = config.optimizers || {};
    this.compressors = config.compressors || {};
    this.reporters = config.reporters || [];
    this.validators = config.validators || {};
    this.pluginCache = new Map();
    this.regexCache = new Map();
  }

  static deserialize(serialized: SerializedParcelConfig): ParcelConfig {
    return new ParcelConfig(serialized.config, serialized.options);
  }

  getConfig(): ProcessedParcelConfig {
    return {
      filePath: this.filePath,
      resolvers: this.resolvers,
      transformers: this.transformers,
      validators: this.validators,
      runtimes: this.runtimes,
      bundler: this.bundler,
      namers: this.namers,
      packagers: this.packagers,
      optimizers: this.optimizers,
      compressors: this.compressors,
      reporters: this.reporters,
    };
  }

  serialize(): SerializedParcelConfig {
    return {
      $$raw: false,
      config: this.getConfig(),
      options: this.options,
    };
  }

  _loadPlugin<T>(node: ParcelPluginNode): Promise<{|
    plugin: T,
    version: Semver,
    resolveFrom: ProjectPath,
    range: ?SemverRange,
  |}> {
    let plugin = this.pluginCache.get(node.packageName);
    if (plugin) {
      return plugin;
    }

    plugin = loadPlugin<T>(
      node.packageName,
      fromProjectPath(this.options.projectRoot, node.resolveFrom),
      node.keyPath,
      this.options,
    );

    this.pluginCache.set(node.packageName, plugin);
    return plugin;
  }

  async loadPlugin<T>(node: ParcelPluginNode): Promise<LoadedPlugin<T>> {
    let plugin = await this._loadPlugin(node);
    return {
      ...plugin,
      name: node.packageName,
      keyPath: node.keyPath,
    };
  }

  invalidatePlugin(packageName: PackageName) {
    this.pluginCache.delete(packageName);
  }

  loadPlugins<T>(
    plugins: PureParcelConfigPipeline,
  ): Promise<Array<LoadedPlugin<T>>> {
    return Promise.all(plugins.map(p => this.loadPlugin<T>(p)));
  }

  async getResolvers(): Promise<Array<LoadedPlugin<Resolver>>> {
    if (this.resolvers.length === 0) {
      throw await this.missingPluginError(
        this.resolvers,
        'No resolver plugins specified in .parcelrc config',
        '/resolvers',
      );
    }

    return this.loadPlugins<Resolver>(this.resolvers);
  }

  _getValidatorNodes(filePath: ProjectPath): $ReadOnlyArray<ParcelPluginNode> {
    let validators: PureParcelConfigPipeline =
      this.matchGlobMapPipelines(filePath, this.validators) || [];

    return validators;
  }

  getValidatorNames(filePath: ProjectPath): Array<string> {
    let validators: PureParcelConfigPipeline =
      this._getValidatorNodes(filePath);
    return validators.map(v => v.packageName);
  }

  getValidators(
    filePath: ProjectPath,
  ): Promise<Array<LoadedPlugin<Validator>>> {
    let validators = this._getValidatorNodes(filePath);
    return this.loadPlugins<Validator>(validators);
  }

  getNamedPipelines(): $ReadOnlyArray<string> {
    return Object.keys(this.transformers)
      .filter(glob => glob.includes(':'))
      .map(glob => glob.split(':')[0]);
  }

  async getTransformers(
    filePath: ProjectPath,
    pipeline?: ?string,
    allowEmpty?: boolean,
  ): Promise<Array<LoadedPlugin<Transformer<mixed>>>> {
    let transformers: PureParcelConfigPipeline | null =
      this.matchGlobMapPipelines(filePath, this.transformers, pipeline);
    if (!transformers || transformers.length === 0) {
      if (allowEmpty) {
        return [];
      }

      throw await this.missingPluginError(
        this.transformers,
        md`No transformers found for __${fromProjectPathRelative(filePath)}__` +
          (pipeline != null ? ` with pipeline: '${pipeline}'` : '') +
          '.',
        '/transformers',
      );
    }

    return this.loadPlugins<Transformer<mixed>>(transformers);
  }

  async getBundler(): Promise<LoadedPlugin<Bundler<mixed>>> {
    if (!this.bundler) {
      throw await this.missingPluginError(
        [],
        'No bundler specified in .parcelrc config',
        '/bundler',
      );
    }

    return this.loadPlugin<Bundler<mixed>>(this.bundler);
  }

  async getNamers(): Promise<Array<LoadedPlugin<Namer<mixed>>>> {
    if (this.namers.length === 0) {
      throw await this.missingPluginError(
        this.namers,
        'No namer plugins specified in .parcelrc config',
        '/namers',
      );
    }

    return this.loadPlugins<Namer<mixed>>(this.namers);
  }

  getRuntimes(): Promise<Array<LoadedPlugin<Runtime<mixed>>>> {
    if (!this.runtimes) {
      return Promise.resolve([]);
    }

    return this.loadPlugins<Runtime<mixed>>(this.runtimes);
  }

  async getPackager(
    filePath: FilePath,
  ): Promise<LoadedPlugin<Packager<mixed, mixed>>> {
    let packager = this.matchGlobMap(
      toProjectPathUnsafe(filePath),
      this.packagers,
    );
    if (!packager) {
      throw await this.missingPluginError(
        this.packagers,
        md`No packager found for __${filePath}__.`,
        '/packagers',
      );
    }
    return this.loadPlugin<Packager<mixed, mixed>>(packager);
  }

  _getOptimizerNodes(
    filePath: FilePath,
    pipeline: ?string,
  ): PureParcelConfigPipeline {
    // If a pipeline is specified, but it doesn't exist in the optimizers config, ignore it.
    // Pipelines for bundles come from their entry assets, so the pipeline likely exists in transformers.
    if (pipeline) {
      let prefix = pipeline + ':';
      if (!Object.keys(this.optimizers).some(glob => glob.startsWith(prefix))) {
        pipeline = null;
      }
    }

    return (
      this.matchGlobMapPipelines(
        toProjectPathUnsafe(filePath),
        this.optimizers,
        pipeline,
      ) ?? []
    );
  }

  getOptimizerNames(filePath: FilePath, pipeline: ?string): Array<string> {
    let optimizers = this._getOptimizerNodes(filePath, pipeline);
    return optimizers.map(o => o.packageName);
  }

  getOptimizers(
    filePath: FilePath,
    pipeline: ?string,
  ): Promise<Array<LoadedPlugin<Optimizer<mixed, mixed>>>> {
    let optimizers = this._getOptimizerNodes(filePath, pipeline);
    if (optimizers.length === 0) {
      return Promise.resolve([]);
    }

    return this.loadPlugins<Optimizer<mixed, mixed>>(optimizers);
  }

  async getCompressors(
    filePath: FilePath,
  ): Promise<Array<LoadedPlugin<Compressor>>> {
    let compressors =
      this.matchGlobMapPipelines(
        toProjectPathUnsafe(filePath),
        this.compressors,
      ) ?? [];

    if (compressors.length === 0) {
      throw await this.missingPluginError(
        this.compressors,
        md`No compressors found for __${filePath}__.`,
        '/compressors',
      );
    }

    return this.loadPlugins<Compressor>(compressors);
  }

  getReporters(): Promise<Array<LoadedPlugin<Reporter>>> {
    return this.loadPlugins<Reporter>(this.reporters);
  }

  isGlobMatch(
    projectPath: ProjectPath,
    pattern: Glob,
    pipeline?: ?string,
  ): boolean {
    // glob's shouldn't be dependant on absolute paths anyway
    let filePath = fromProjectPathRelative(projectPath);

    let [patternPipeline, patternGlob] = pattern.split(':');
    if (!patternGlob) {
      patternGlob = patternPipeline;
      patternPipeline = null;
    }

    let re = this.regexCache.get(patternGlob);
    if (!re) {
      re = globToRegex(patternGlob, {dot: true, nocase: true});
      this.regexCache.set(patternGlob, re);
    }

    return (
      (pipeline === patternPipeline || (!pipeline && !patternPipeline)) &&
      (re.test(filePath) || re.test(basename(filePath)))
    );
  }

  matchGlobMap<T>(filePath: ProjectPath, globMap: {|[Glob]: T|}): ?T {
    for (let pattern in globMap) {
      if (this.isGlobMatch(filePath, pattern)) {
        return globMap[pattern];
      }
    }

    return null;
  }

  matchGlobMapPipelines(
    filePath: ProjectPath,
    globMap: {|[Glob]: ExtendableParcelConfigPipeline|},
    pipeline?: ?string,
  ): PureParcelConfigPipeline {
    let matches = [];
    if (pipeline) {
      // If a pipeline is requested, a the glob needs to match exactly
      let exactMatch;
      for (let pattern in globMap) {
        if (this.isGlobMatch(filePath, pattern, pipeline)) {
          exactMatch = globMap[pattern];
          break;
        }
      }
      if (!exactMatch) {
        return [];
      } else {
        matches.push(exactMatch);
      }
    }

    for (let pattern in globMap) {
      if (this.isGlobMatch(filePath, pattern)) {
        matches.push(globMap[pattern]);
      }
    }

    let flatten = () => {
      let pipeline = matches.shift() || [];
      let spreadIndex = pipeline.indexOf('...');
      if (spreadIndex >= 0) {
        pipeline = [
          ...pipeline.slice(0, spreadIndex),
          ...flatten(),
          ...pipeline.slice(spreadIndex + 1),
        ];
      }

      if (pipeline.includes('...')) {
        throw new Error(
          'Only one spread parameter can be included in a config pipeline',
        );
      }

      return pipeline;
    };

    let res = flatten();
    // $FlowFixMe afaik this should work
    return res;
  }

  async missingPluginError(
    plugins:
      | GlobMap<ExtendableParcelConfigPipeline>
      | GlobMap<ParcelPluginNode>
      | PureParcelConfigPipeline,
    message: string,
    key: string,
  ): Promise<ThrowableDiagnostic> {
    let configsWithPlugin;
    if (Array.isArray(plugins)) {
      configsWithPlugin = new Set(getConfigPaths(this.options, plugins));
    } else {
      configsWithPlugin = new Set(
        Object.keys(plugins).flatMap(k =>
          Array.isArray(plugins[k])
            ? getConfigPaths(this.options, plugins[k])
            : [getConfigPath(this.options, plugins[k])],
        ),
      );
    }

    if (configsWithPlugin.size === 0) {
      configsWithPlugin.add(
        fromProjectPath(this.options.projectRoot, this.filePath),
      );
    }

    let seenKey = false;
    let codeFrames = await Promise.all(
      [...configsWithPlugin].map(async filePath => {
        let configContents = await this.options.inputFS.readFile(
          filePath,
          'utf8',
        );
        if (!json5.parse(configContents)[key.slice(1)]) {
          key = '';
        } else {
          seenKey = true;
        }
        return {
          filePath,
          code: configContents,
          codeHighlights: generateJSONCodeHighlights(configContents, [{key}]),
        };
      }),
    );
    return new ThrowableDiagnostic({
      diagnostic: {
        message,
        origin: '@parcel/core',
        codeFrames,
        hints: !seenKey ? ['Try extending __@parcel/config-default__'] : [],
      },
    });
  }
}

function getConfigPaths(options, nodes) {
  return nodes
    .map(node => (node !== '...' ? getConfigPath(options, node) : null))
    .filter(Boolean);
}

function getConfigPath(options, node) {
  return fromProjectPath(options.projectRoot, node.resolveFrom);
}
