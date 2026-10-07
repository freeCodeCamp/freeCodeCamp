// @flow strict-local

import type {
  Blob,
  FilePath,
  BundleResult,
  Bundle as BundleType,
  BundleGraph as BundleGraphType,
  NamedBundle as NamedBundleType,
  Async,
} from '@parcel/types';
import type SourceMap from '@parcel/source-map';
import type {
  Bundle as InternalBundle,
  Config,
  DevDepRequest,
  ParcelOptions,
  ReportFn,
  RequestInvalidation,
} from './types';
import type ParcelConfig, {LoadedPlugin} from './ParcelConfig';
import type InternalBundleGraph from './BundleGraph';
import type {ConfigRequest} from './requests/ConfigRequest';
import type {DevDepSpecifier} from './requests/DevDepRequest';

import invariant from 'assert';
import {blobToStream, TapStream} from '@parcel/utils';
import {PluginLogger} from '@parcel/logger';
import ThrowableDiagnostic, {errorToDiagnostic} from '@parcel/diagnostic';
import {Readable} from 'stream';
import nullthrows from 'nullthrows';
import path from 'path';
import url from 'url';
import {hashString, hashBuffer, Hash} from '@parcel/hash';

import {NamedBundle, bundleToInternalBundle} from './public/Bundle';
import BundleGraph, {
  bundleGraphToInternalBundleGraph,
} from './public/BundleGraph';
import PluginOptions from './public/PluginOptions';
import PublicConfig from './public/Config';
import {PARCEL_VERSION, HASH_REF_PREFIX, HASH_REF_REGEX} from './constants';
import {
  fromProjectPath,
  toProjectPathUnsafe,
  fromProjectPathRelative,
  joinProjectPath,
} from './projectPath';
import {createConfig} from './InternalConfig';
import {
  loadPluginConfig,
  getConfigHash,
  getConfigRequests,
  type PluginWithBundleConfig,
} from './requests/ConfigRequest';
import {
  createDevDependency,
  getWorkerDevDepRequests,
} from './requests/DevDepRequest';
import {createBuildCache} from './buildCache';
import {getInvalidationId, getInvalidationHash} from './assetUtils';
import {optionsProxy} from './utils';
import {invalidateDevDeps} from './requests/DevDepRequest';

type Opts = {|
  config: ParcelConfig,
  options: ParcelOptions,
  report: ReportFn,
  previousDevDeps: Map<string, string>,
  previousInvalidations: Array<RequestInvalidation>,
|};

export type PackageRequestResult = {|
  bundleInfo: BundleInfo,
  configRequests: Array<ConfigRequest>,
  devDepRequests: Array<DevDepRequest>,
  invalidations: Array<RequestInvalidation>,
|};

export type BundleInfo = {|
  +type: string,
  +size: number,
  +hash: string,
  +hashReferences: Array<string>,
  +time?: number,
  +cacheKeys: CacheKeyMap,
  +isLargeBlob: boolean,
|};

type CacheKeyMap = {|
  content: string,
  map: string,
  info: string,
|};

const BOUNDARY_LENGTH = HASH_REF_PREFIX.length + 32 - 1;

// Packager/optimizer configs are not bundle-specific, so we only need to
// load them once per build.
const pluginConfigs = createBuildCache();

export default class PackagerRunner {
  config: ParcelConfig;
  options: ParcelOptions;
  pluginOptions: PluginOptions;
  distDir: FilePath;
  distExists: Set<FilePath>;
  report: ReportFn;
  previousDevDeps: Map<string, string>;
  devDepRequests: Map<string, DevDepRequest>;
  invalidations: Map<string, RequestInvalidation>;
  previousInvalidations: Array<RequestInvalidation>;

  constructor({
    config,
    options,
    report,
    previousDevDeps,
    previousInvalidations,
  }: Opts) {
    this.config = config;
    this.options = options;
    this.report = report;
    this.previousDevDeps = previousDevDeps;
    this.devDepRequests = new Map();
    this.previousInvalidations = previousInvalidations;
    this.invalidations = new Map();
    this.pluginOptions = new PluginOptions(
      optionsProxy(this.options, option => {
        let invalidation: RequestInvalidation = {
          type: 'option',
          key: option,
        };

        this.invalidations.set(getInvalidationId(invalidation), invalidation);
      }),
    );
  }

  async run(
    bundleGraph: InternalBundleGraph,
    bundle: InternalBundle,
    invalidDevDeps: Array<DevDepSpecifier>,
  ): Promise<PackageRequestResult> {
    invalidateDevDeps(invalidDevDeps, this.options, this.config);

    let {configs, bundleConfigs} = await this.loadConfigs(bundleGraph, bundle);
    let bundleInfo =
      (await this.getBundleInfoFromCache(
        bundleGraph,
        bundle,
        configs,
        bundleConfigs,
      )) ??
      (await this.getBundleInfo(bundle, bundleGraph, configs, bundleConfigs));

    let configRequests = getConfigRequests([
      ...configs.values(),
      ...bundleConfigs.values(),
    ]);
    let devDepRequests = getWorkerDevDepRequests([
      ...this.devDepRequests.values(),
    ]);

    return {
      bundleInfo,
      configRequests,
      devDepRequests,
      invalidations: [...this.invalidations.values()],
    };
  }

  async loadConfigs(
    bundleGraph: InternalBundleGraph,
    bundle: InternalBundle,
  ): Promise<{|
    configs: Map<string, Config>,
    bundleConfigs: Map<string, Config>,
  |}> {
    let configs = new Map();
    let bundleConfigs = new Map();

    await this.loadConfig(bundleGraph, bundle, configs, bundleConfigs);
    for (let inlineBundle of bundleGraph.getInlineBundles(bundle)) {
      await this.loadConfig(bundleGraph, inlineBundle, configs, bundleConfigs);
    }

    return {configs, bundleConfigs};
  }

  async loadConfig(
    bundleGraph: InternalBundleGraph,
    bundle: InternalBundle,
    configs: Map<string, Config>,
    bundleConfigs: Map<string, Config>,
  ): Promise<void> {
    let name = nullthrows(bundle.name);
    let plugin = await this.config.getPackager(name);
    await this.loadPluginConfig(
      bundleGraph,
      bundle,
      plugin,
      configs,
      bundleConfigs,
    );

    let optimizers = await this.config.getOptimizers(name, bundle.pipeline);
    for (let optimizer of optimizers) {
      await this.loadPluginConfig(
        bundleGraph,
        bundle,
        optimizer,
        configs,
        bundleConfigs,
      );
    }
  }

  async loadPluginConfig<T: PluginWithBundleConfig>(
    bundleGraph: InternalBundleGraph,
    bundle: InternalBundle,
    plugin: LoadedPlugin<T>,
    configs: Map<string, Config>,
    bundleConfigs: Map<string, Config>,
  ): Promise<void> {
    if (!configs.has(plugin.name)) {
      // Only load config for a plugin once per build.
      let existing = pluginConfigs.get(plugin.name);
      if (existing != null) {
        configs.set(plugin.name, existing);
      } else {
        if (plugin.plugin.loadConfig != null) {
          let config = createConfig({
            plugin: plugin.name,
            searchPath: toProjectPathUnsafe('index'),
          });

          await loadPluginConfig(plugin, config, this.options);

          for (let devDep of config.devDeps) {
            let devDepRequest = await createDevDependency(
              devDep,
              this.previousDevDeps,
              this.options,
            );
            let key = `${devDep.specifier}:${fromProjectPath(
              this.options.projectRoot,
              devDep.resolveFrom,
            )}`;
            this.devDepRequests.set(key, devDepRequest);
          }

          pluginConfigs.set(plugin.name, config);
          configs.set(plugin.name, config);
        }
      }
    }

    let loadBundleConfig = plugin.plugin.loadBundleConfig;
    if (!bundleConfigs.has(plugin.name) && loadBundleConfig != null) {
      let config = createConfig({
        plugin: plugin.name,
        searchPath: joinProjectPath(
          bundle.target.distDir,
          bundle.name ?? bundle.id,
        ),
      });
      config.result = await loadBundleConfig({
        bundle: NamedBundle.get(bundle, bundleGraph, this.options),
        bundleGraph: new BundleGraph<NamedBundleType>(
          bundleGraph,
          NamedBundle.get.bind(NamedBundle),
          this.options,
        ),
        config: new PublicConfig(config, this.options),
        options: new PluginOptions(this.options),
        logger: new PluginLogger({origin: plugin.name}),
      });
      bundleConfigs.set(plugin.name, config);
    }
  }

  async getBundleInfoFromCache(
    bundleGraph: InternalBundleGraph,
    bundle: InternalBundle,
    configs: Map<string, Config>,
    bundleConfigs: Map<string, Config>,
  ): Async<?BundleInfo> {
    if (this.options.shouldDisableCache) {
      return;
    }

    let cacheKey = await this.getCacheKey(
      bundle,
      bundleGraph,
      configs,
      bundleConfigs,
      this.previousInvalidations,
    );
    let infoKey = PackagerRunner.getInfoKey(cacheKey);
    return this.options.cache.get<BundleInfo>(infoKey);
  }

  async getBundleInfo(
    bundle: InternalBundle,
    bundleGraph: InternalBundleGraph,
    configs: Map<string, Config>,
    bundleConfigs: Map<string, Config>,
  ): Promise<BundleInfo> {
    let {type, contents, map} = await this.getBundleResult(
      bundle,
      bundleGraph,
      configs,
      bundleConfigs,
    );

    // Recompute cache keys as they may have changed due to dev dependencies.
    let cacheKey = await this.getCacheKey(
      bundle,
      bundleGraph,
      configs,
      bundleConfigs,
      [...this.invalidations.values()],
    );
    let cacheKeys = {
      content: PackagerRunner.getContentKey(cacheKey),
      map: PackagerRunner.getMapKey(cacheKey),
      info: PackagerRunner.getInfoKey(cacheKey),
    };

    return this.writeToCache(cacheKeys, type, contents, map);
  }

  async getBundleResult(
    bundle: InternalBundle,
    bundleGraph: InternalBundleGraph,
    configs: Map<string, Config>,
    bundleConfigs: Map<string, Config>,
  ): Promise<{|
    type: string,
    contents: Blob,
    map: ?string,
  |}> {
    let packaged = await this.package(
      bundle,
      bundleGraph,
      configs,
      bundleConfigs,
    );
    let type = packaged.type ?? bundle.type;
    let res = await this.optimize(
      bundle,
      bundleGraph,
      type,
      packaged.contents,
      packaged.map,
      configs,
      bundleConfigs,
    );

    let map =
      res.map != null ? await this.generateSourceMap(bundle, res.map) : null;
    return {
      type: res.type ?? type,
      contents: res.contents,
      map,
    };
  }

  getSourceMapReference(bundle: NamedBundle, map: ?SourceMap): Async<?string> {
    if (map && bundle.env.sourceMap && bundle.bundleBehavior !== 'inline') {
      if (bundle.env.sourceMap && bundle.env.sourceMap.inline) {
        return this.generateSourceMap(bundleToInternalBundle(bundle), map);
      } else {
        return path.basename(bundle.name) + '.map';
      }
    } else {
      return null;
    }
  }

  async package(
    internalBundle: InternalBundle,
    bundleGraph: InternalBundleGraph,
    configs: Map<string, Config>,
    bundleConfigs: Map<string, Config>,
  ): Promise<BundleResult> {
    let bundle = NamedBundle.get(internalBundle, bundleGraph, this.options);
    this.report({
      type: 'buildProgress',
      phase: 'packaging',
      bundle,
    });

    let packager = await this.config.getPackager(bundle.name);
    let {name, resolveFrom, plugin} = packager;
    try {
      return await plugin.package({
        config: configs.get(name)?.result,
        bundleConfig: bundleConfigs.get(name)?.result,
        bundle,
        bundleGraph: new BundleGraph<NamedBundleType>(
          bundleGraph,
          NamedBundle.get.bind(NamedBundle),
          this.options,
        ),
        getSourceMapReference: map => {
          return this.getSourceMapReference(bundle, map);
        },
        options: this.pluginOptions,
        logger: new PluginLogger({origin: name}),
        getInlineBundleContents: async (
          bundle: BundleType,
          bundleGraph: BundleGraphType<NamedBundleType>,
        ) => {
          if (bundle.bundleBehavior !== 'inline') {
            throw new Error(
              'Bundle is not inline and unable to retrieve contents',
            );
          }

          let res = await this.getBundleResult(
            bundleToInternalBundle(bundle),
            // $FlowFixMe
            bundleGraphToInternalBundleGraph(bundleGraph),
            configs,
            bundleConfigs,
          );

          return {contents: res.contents};
        },
      });
    } catch (e) {
      throw new ThrowableDiagnostic({
        diagnostic: errorToDiagnostic(e, {
          origin: name,
          filePath: path.join(bundle.target.distDir, bundle.name),
        }),
      });
    } finally {
      // Add dev dependency for the packager. This must be done AFTER running it due to
      // the potential for lazy require() that aren't executed until the request runs.
      let devDepRequest = await createDevDependency(
        {
          specifier: name,
          resolveFrom,
        },
        this.previousDevDeps,
        this.options,
      );
      this.devDepRequests.set(
        `${name}:${fromProjectPathRelative(resolveFrom)}`,
        devDepRequest,
      );
    }
  }

  async optimize(
    internalBundle: InternalBundle,
    internalBundleGraph: InternalBundleGraph,
    type: string,
    contents: Blob,
    map?: ?SourceMap,
    configs: Map<string, Config>,
    bundleConfigs: Map<string, Config>,
  ): Promise<BundleResult> {
    let bundle = NamedBundle.get(
      internalBundle,
      internalBundleGraph,
      this.options,
    );
    let bundleGraph = new BundleGraph<NamedBundleType>(
      internalBundleGraph,
      NamedBundle.get.bind(NamedBundle),
      this.options,
    );
    let optimizers = await this.config.getOptimizers(
      bundle.name,
      internalBundle.pipeline,
    );
    if (!optimizers.length) {
      return {type: bundle.type, contents, map};
    }

    this.report({
      type: 'buildProgress',
      phase: 'optimizing',
      bundle,
    });

    let optimized = {
      type,
      contents,
      map,
    };

    for (let optimizer of optimizers) {
      try {
        let next = await optimizer.plugin.optimize({
          config: configs.get(optimizer.name)?.result,
          bundleConfig: bundleConfigs.get(optimizer.name)?.result,
          bundle,
          bundleGraph,
          contents: optimized.contents,
          map: optimized.map,
          getSourceMapReference: map => {
            return this.getSourceMapReference(bundle, map);
          },
          options: this.pluginOptions,
          logger: new PluginLogger({origin: optimizer.name}),
        });

        optimized.type = next.type ?? optimized.type;
        optimized.contents = next.contents;
        optimized.map = next.map;
      } catch (e) {
        throw new ThrowableDiagnostic({
          diagnostic: errorToDiagnostic(e, {
            origin: optimizer.name,
            filePath: path.join(bundle.target.distDir, bundle.name),
          }),
        });
      } finally {
        // Add dev dependency for the optimizer. This must be done AFTER running it due to
        // the potential for lazy require() that aren't executed until the request runs.
        let devDepRequest = await createDevDependency(
          {
            specifier: optimizer.name,
            resolveFrom: optimizer.resolveFrom,
          },
          this.previousDevDeps,
          this.options,
        );
        this.devDepRequests.set(
          `${optimizer.name}:${fromProjectPathRelative(optimizer.resolveFrom)}`,
          devDepRequest,
        );
      }
    }

    return optimized;
  }

  async generateSourceMap(
    bundle: InternalBundle,
    map: SourceMap,
  ): Promise<string> {
    // sourceRoot should be a relative path between outDir and rootDir for node.js targets
    let filePath = joinProjectPath(
      bundle.target.distDir,
      nullthrows(bundle.name),
    );
    let fullPath = fromProjectPath(this.options.projectRoot, filePath);
    let sourceRoot: string = path.relative(
      path.dirname(fullPath),
      this.options.projectRoot,
    );
    let inlineSources = false;

    if (bundle.target) {
      if (
        bundle.env.sourceMap &&
        bundle.env.sourceMap.sourceRoot !== undefined
      ) {
        sourceRoot = bundle.env.sourceMap.sourceRoot;
      } else if (
        this.options.serveOptions &&
        bundle.target.env.context === 'browser'
      ) {
        sourceRoot = '/__parcel_source_root';
      }

      if (
        bundle.env.sourceMap &&
        bundle.env.sourceMap.inlineSources !== undefined
      ) {
        inlineSources = bundle.env.sourceMap.inlineSources;
      } else if (bundle.target.env.context !== 'node') {
        // inlining should only happen in production for browser targets by default
        inlineSources = this.options.mode === 'production';
      }
    }

    let mapFilename = fullPath + '.map';
    let isInlineMap = bundle.env.sourceMap && bundle.env.sourceMap.inline;

    let stringified = await map.stringify({
      file: path.basename(mapFilename),
      // $FlowFixMe
      fs: this.options.inputFS,
      rootDir: this.options.projectRoot,
      sourceRoot: !inlineSources
        ? url.format(url.parse(sourceRoot + '/'))
        : undefined,
      inlineSources,
      format: isInlineMap ? 'inline' : 'string',
    });

    invariant(typeof stringified === 'string');
    return stringified;
  }

  async getCacheKey(
    bundle: InternalBundle,
    bundleGraph: InternalBundleGraph,
    configs: Map<string, Config>,
    bundleConfigs: Map<string, Config>,
    invalidations: Array<RequestInvalidation>,
  ): Promise<string> {
    let configResults = {};
    for (let [pluginName, config] of configs) {
      if (config) {
        configResults[pluginName] = await getConfigHash(
          config,
          pluginName,
          this.options,
        );
      }
    }
    let globalInfoResults = {};
    for (let [pluginName, config] of bundleConfigs) {
      if (config) {
        globalInfoResults[pluginName] = await getConfigHash(
          config,
          pluginName,
          this.options,
        );
      }
    }

    let devDepHashes = await this.getDevDepHashes(bundle);
    for (let inlineBundle of bundleGraph.getInlineBundles(bundle)) {
      devDepHashes += await this.getDevDepHashes(inlineBundle);
    }

    let invalidationHash = await getInvalidationHash(
      invalidations,
      this.options,
    );

    return hashString(
      PARCEL_VERSION +
        devDepHashes +
        invalidationHash +
        bundle.target.publicUrl +
        bundleGraph.getHash(bundle) +
        JSON.stringify(configResults) +
        JSON.stringify(globalInfoResults) +
        this.options.mode,
    );
  }

  async getDevDepHashes(bundle: InternalBundle): Promise<string> {
    let name = nullthrows(bundle.name);
    let packager = await this.config.getPackager(name);
    let optimizers = await this.config.getOptimizers(name);

    let key = `${packager.name}:${fromProjectPathRelative(
      packager.resolveFrom,
    )}`;
    let devDepHashes =
      this.devDepRequests.get(key)?.hash ?? this.previousDevDeps.get(key) ?? '';
    for (let {name, resolveFrom} of optimizers) {
      let key = `${name}:${fromProjectPathRelative(resolveFrom)}`;
      devDepHashes +=
        this.devDepRequests.get(key)?.hash ??
        this.previousDevDeps.get(key) ??
        '';
    }

    return devDepHashes;
  }

  async readFromCache(cacheKey: string): Promise<?{|
    contents: Readable,
    map: ?Readable,
  |}> {
    let contentKey = PackagerRunner.getContentKey(cacheKey);
    let mapKey = PackagerRunner.getMapKey(cacheKey);

    let isLargeBlob = await this.options.cache.hasLargeBlob(contentKey);
    let contentExists =
      isLargeBlob || (await this.options.cache.has(contentKey));
    if (!contentExists) {
      return null;
    }

    let mapExists = await this.options.cache.has(mapKey);

    return {
      contents: isLargeBlob
        ? this.options.cache.getStream(contentKey)
        : blobToStream(await this.options.cache.getBlob(contentKey)),
      map: mapExists
        ? blobToStream(await this.options.cache.getBlob(mapKey))
        : null,
    };
  }

  async writeToCache(
    cacheKeys: CacheKeyMap,
    type: string,
    contents: Blob,
    map: ?string,
  ): Promise<BundleInfo> {
    let size = 0;
    let hash;
    let hashReferences = [];
    let isLargeBlob = false;

    // TODO: don't replace hash references in binary files??
    if (contents instanceof Readable) {
      isLargeBlob = true;
      let boundaryStr = '';
      let h = new Hash();
      await this.options.cache.setStream(
        cacheKeys.content,
        blobToStream(contents).pipe(
          new TapStream(buf => {
            let str = boundaryStr + buf.toString();
            hashReferences = hashReferences.concat(
              str.match(HASH_REF_REGEX) ?? [],
            );
            size += buf.length;
            h.writeBuffer(buf);
            boundaryStr = str.slice(str.length - BOUNDARY_LENGTH);
          }),
        ),
      );
      hash = h.finish();
    } else if (typeof contents === 'string') {
      let buffer = Buffer.from(contents);
      size = buffer.byteLength;
      hash = hashBuffer(buffer);
      hashReferences = contents.match(HASH_REF_REGEX) ?? [];
      await this.options.cache.setBlob(cacheKeys.content, buffer);
    } else {
      size = contents.length;
      hash = hashBuffer(contents);
      hashReferences = contents.toString().match(HASH_REF_REGEX) ?? [];
      await this.options.cache.setBlob(cacheKeys.content, contents);
    }

    if (map != null) {
      await this.options.cache.setBlob(cacheKeys.map, map);
    }
    let info = {
      type,
      size,
      hash,
      hashReferences,
      cacheKeys,
      isLargeBlob,
    };
    await this.options.cache.set(cacheKeys.info, info);
    return info;
  }

  static getContentKey(cacheKey: string): string {
    return hashString(`${cacheKey}:content`);
  }

  static getMapKey(cacheKey: string): string {
    return hashString(`${cacheKey}:map`);
  }

  static getInfoKey(cacheKey: string): string {
    return hashString(`${cacheKey}:info`);
  }
}
