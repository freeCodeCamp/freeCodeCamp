// @flow strict-local

import type {
  FilePath,
  GenerateOutput,
  Transformer,
  TransformerResult,
  PackageName,
  SemverRange,
} from '@parcel/types';
import type {WorkerApi} from '@parcel/workers';
import type {
  Asset as AssetValue,
  TransformationRequest,
  RequestInvalidation,
  Config,
  DevDepRequest,
  ParcelOptions,
  InternalFileCreateInvalidation,
  InternalDevDepOptions,
} from './types';
import type {LoadedPlugin} from './ParcelConfig';

import path from 'path';
import {Readable} from 'stream';
import nullthrows from 'nullthrows';
import logger, {PluginLogger} from '@parcel/logger';
import ThrowableDiagnostic, {
  anyToDiagnostic,
  errorToDiagnostic,
  escapeMarkdown,
  md,
  type Diagnostic,
} from '@parcel/diagnostic';
import {SOURCEMAP_EXTENSIONS} from '@parcel/utils';
import {hashString} from '@parcel/hash';

import {createDependency} from './Dependency';
import ParcelConfig from './ParcelConfig';
// TODO: eventually call path request as sub requests
import {ResolverRunner} from './requests/PathRequest';
import {
  Asset,
  MutableAsset,
  mutableAssetToUncommittedAsset,
} from './public/Asset';
import UncommittedAsset from './UncommittedAsset';
import {
  createAsset,
  getInvalidationId,
  getInvalidationHash,
} from './assetUtils';
import summarizeRequest from './summarizeRequest';
import PluginOptions from './public/PluginOptions';
import {PARCEL_VERSION, FILE_CREATE} from './constants';
import {optionsProxy} from './utils';
import {createConfig} from './InternalConfig';
import {
  getConfigHash,
  loadPluginConfig,
  getConfigRequests,
  type ConfigRequest,
} from './requests/ConfigRequest';
import {
  createDevDependency,
  invalidateDevDeps,
  getWorkerDevDepRequests,
} from './requests/DevDepRequest';
import {
  type ProjectPath,
  fromProjectPath,
  fromProjectPathRelative,
  toProjectPathUnsafe,
  toProjectPath,
} from './projectPath';
import {invalidateOnFileCreateToInternal} from './utils';
import invariant from 'assert';

type GenerateFunc = (input: UncommittedAsset) => Promise<GenerateOutput>;

type PostProcessFunc = (
  Array<UncommittedAsset>,
) => Promise<Array<UncommittedAsset> | null>;

export type TransformationOpts = {|
  options: ParcelOptions,
  config: ParcelConfig,
  request: TransformationRequest,
  workerApi: WorkerApi,
|};

export type TransformationResult = {|
  assets?: Array<AssetValue>,
  error?: Array<Diagnostic>,
  configRequests: Array<ConfigRequest>,
  invalidations: Array<RequestInvalidation>,
  invalidateOnFileCreate: Array<InternalFileCreateInvalidation>,
  devDepRequests: Array<DevDepRequest>,
|};

export default class Transformation {
  request: TransformationRequest;
  configs: Map<string, Config>;
  devDepRequests: Map<string, DevDepRequest>;
  pluginDevDeps: Array<InternalDevDepOptions>;
  options: ParcelOptions;
  pluginOptions: PluginOptions;
  workerApi: WorkerApi;
  parcelConfig: ParcelConfig;
  invalidations: Map<string, RequestInvalidation>;
  invalidateOnFileCreate: Array<InternalFileCreateInvalidation>;

  constructor({request, options, config, workerApi}: TransformationOpts) {
    this.configs = new Map();
    this.parcelConfig = config;
    this.options = options;
    this.request = request;
    this.workerApi = workerApi;
    this.invalidations = new Map();
    this.invalidateOnFileCreate = [];
    this.devDepRequests = new Map();
    this.pluginDevDeps = [];

    this.pluginOptions = new PluginOptions(
      optionsProxy(
        this.options,
        option => {
          let invalidation: RequestInvalidation = {
            type: 'option',
            key: option,
          };

          this.invalidations.set(getInvalidationId(invalidation), invalidation);
        },
        devDep => {
          this.pluginDevDeps.push(devDep);
        },
      ),
    );
  }

  async run(): Promise<TransformationResult> {
    let asset = await this.loadAsset();
    let existing;

    if (!asset.mapBuffer && SOURCEMAP_EXTENSIONS.has(asset.value.type)) {
      // Load existing sourcemaps, this automatically runs the source contents extraction
      try {
        existing = await asset.loadExistingSourcemap();
      } catch (err) {
        logger.verbose([
          {
            origin: '@parcel/core',
            message: md`Could not load existing source map for ${fromProjectPathRelative(
              asset.value.filePath,
            )}`,
          },
          {
            origin: '@parcel/core',
            message: escapeMarkdown(err.message),
          },
        ]);
      }
    }

    if (
      existing == null &&
      // Don't buffer an entire stream into memory since it may not need sourceContent,
      // e.g. large binary files
      !(asset.content instanceof Readable)
    ) {
      // If no existing sourcemap was found, initialize asset.sourceContent
      // with the original contents. This will be used when the transformer
      // calls setMap to ensure the source content is in the sourcemap.
      asset.sourceContent = await asset.getCode();
    }

    invalidateDevDeps(
      this.request.invalidDevDeps,
      this.options,
      this.parcelConfig,
    );

    let pipeline = await this.loadPipeline(
      this.request.filePath,
      asset.value.isSource,
      asset.value.pipeline,
    );
    let assets, error;
    try {
      let results = await this.runPipelines(pipeline, asset);
      assets = results.map(a => a.value);
    } catch (e) {
      error = e;
    }

    let configRequests = getConfigRequests([...this.configs.values()]);
    let devDepRequests = getWorkerDevDepRequests([
      ...this.devDepRequests.values(),
    ]);

    // $FlowFixMe because of $$raw
    return {
      $$raw: true,
      assets,
      configRequests,
      // When throwing an error, this (de)serialization is done automatically by the WorkerFarm
      error: error ? anyToDiagnostic(error) : undefined,
      invalidateOnFileCreate: this.invalidateOnFileCreate,
      invalidations: [...this.invalidations.values()],
      devDepRequests,
    };
  }

  async loadAsset(): Promise<UncommittedAsset> {
    let {
      filePath,
      env,
      code,
      pipeline,
      isSource: isSourceOverride,
      sideEffects,
      query,
    } = this.request;
    let {
      content,
      size,
      hash,
      isSource: summarizedIsSource,
    } = await summarizeRequest(this.options.inputFS, {
      filePath: fromProjectPath(this.options.projectRoot, filePath),
      code,
    });

    // Prefer `isSource` originating from the AssetRequest.
    let isSource = isSourceOverride ?? summarizedIsSource;

    // If the transformer request passed code, use a hash in addition
    // to the filename as the base for the id to ensure it is unique.
    let idBase = fromProjectPathRelative(filePath);
    if (code != null) {
      idBase += hash;
    }
    return new UncommittedAsset({
      idBase,
      value: createAsset(this.options.projectRoot, {
        idBase,
        filePath,
        isSource,
        type: path.extname(fromProjectPathRelative(filePath)).slice(1),
        hash,
        pipeline,
        env,
        query,
        stats: {
          time: 0,
          size,
        },
        sideEffects,
      }),
      options: this.options,
      content,
      invalidations: this.invalidations,
      fileCreateInvalidations: this.invalidateOnFileCreate,
    });
  }

  async runPipelines(
    pipeline: Pipeline,
    initialAsset: UncommittedAsset,
  ): Promise<Array<UncommittedAsset>> {
    let initialType = initialAsset.value.type;
    let initialPipelineHash = await this.getPipelineHash(pipeline);
    let initialAssetCacheKey = this.getCacheKey(
      [initialAsset],
      await getInvalidationHash(this.request.invalidations, this.options), // TODO: should be per-pipeline
      initialPipelineHash,
    );
    let initialCacheEntry = await this.readFromCache(initialAssetCacheKey);

    let assets: Array<UncommittedAsset> =
      initialCacheEntry || (await this.runPipeline(pipeline, initialAsset));

    // Add dev dep requests for each transformer
    for (let transformer of pipeline.transformers) {
      await this.addDevDependency({
        specifier: transformer.name,
        resolveFrom: transformer.resolveFrom,
        range: transformer.range,
      });
    }

    // Add dev dep requests for dependencies of transformer plugins
    // (via proxied packageManager.require calls).
    for (let devDep of this.pluginDevDeps) {
      await this.addDevDependency(devDep);
    }

    if (!initialCacheEntry) {
      let pipelineHash = await this.getPipelineHash(pipeline);
      let invalidationCacheKey = await getInvalidationHash(
        assets.flatMap(asset => asset.getInvalidations()),
        this.options,
      );
      let resultCacheKey = this.getCacheKey(
        [initialAsset],
        invalidationCacheKey,
        pipelineHash,
      );
      await this.writeToCache(
        resultCacheKey,
        assets,
        invalidationCacheKey,
        pipelineHash,
      );
    } else {
      // See above TODO, this should be per-pipeline
      for (let i of this.request.invalidations) {
        this.invalidations.set(getInvalidationId(i), i);
      }
    }

    let finalAssets: Array<UncommittedAsset> = [];
    for (let asset of assets) {
      let nextPipeline;
      if (asset.value.type !== initialType) {
        nextPipeline = await this.loadNextPipeline({
          filePath: initialAsset.value.filePath,
          isSource: asset.value.isSource,
          newType: asset.value.type,
          newPipeline: asset.value.pipeline,
          currentPipeline: pipeline,
        });
      }

      if (nextPipeline) {
        let nextPipelineAssets = await this.runPipelines(nextPipeline, asset);
        finalAssets = finalAssets.concat(nextPipelineAssets);
      } else {
        finalAssets.push(asset);
      }
    }

    if (!pipeline.postProcess) {
      return finalAssets;
    }

    let pipelineHash = await this.getPipelineHash(pipeline);
    let invalidationHash = await getInvalidationHash(
      finalAssets.flatMap(asset => asset.getInvalidations()),
      this.options,
    );
    let processedCacheEntry = await this.readFromCache(
      this.getCacheKey(finalAssets, invalidationHash, pipelineHash),
    );

    invariant(pipeline.postProcess != null);
    let processedFinalAssets: Array<UncommittedAsset> =
      processedCacheEntry ?? (await pipeline.postProcess(finalAssets)) ?? [];

    if (!processedCacheEntry) {
      await this.writeToCache(
        this.getCacheKey(processedFinalAssets, invalidationHash, pipelineHash),
        processedFinalAssets,

        invalidationHash,
        pipelineHash,
      );
    }

    return processedFinalAssets;
  }

  async getPipelineHash(pipeline: Pipeline): Promise<string> {
    let hashes = '';
    for (let transformer of pipeline.transformers) {
      let key = `${transformer.name}:${fromProjectPathRelative(
        transformer.resolveFrom,
      )}`;
      hashes +=
        this.request.devDeps.get(key) ??
        this.devDepRequests.get(key)?.hash ??
        ':';

      let config = this.configs.get(transformer.name);
      if (config) {
        hashes += await getConfigHash(config, transformer.name, this.options);

        for (let devDep of config.devDeps) {
          let key = `${devDep.specifier}:${fromProjectPathRelative(
            devDep.resolveFrom,
          )}`;
          hashes += nullthrows(this.devDepRequests.get(key)).hash;
        }
      }
    }

    return hashString(hashes);
  }

  async addDevDependency(opts: InternalDevDepOptions): Promise<void> {
    let {specifier, resolveFrom, range} = opts;
    let key = `${specifier}:${fromProjectPathRelative(resolveFrom)}`;
    if (this.devDepRequests.has(key)) {
      return;
    }

    // Ensure that the package manager has an entry for this resolution.
    await this.options.packageManager.resolve(
      specifier,
      fromProjectPath(this.options.projectRoot, opts.resolveFrom),
      {
        range,
      },
    );

    let devDepRequest = await createDevDependency(
      opts,
      this.request.devDeps,
      this.options,
    );
    this.devDepRequests.set(key, devDepRequest);
  }

  async runPipeline(
    pipeline: Pipeline,
    initialAsset: UncommittedAsset,
  ): Promise<Array<UncommittedAsset>> {
    if (pipeline.transformers.length === 0) {
      return [initialAsset];
    }

    let initialType = initialAsset.value.type;
    let inputAssets = [initialAsset];
    let resultingAssets = [];
    let finalAssets = [];
    for (let transformer of pipeline.transformers) {
      resultingAssets = [];
      for (let asset of inputAssets) {
        if (
          asset.value.type !== initialType &&
          (await this.loadNextPipeline({
            filePath: initialAsset.value.filePath,
            isSource: asset.value.isSource,
            newType: asset.value.type,
            newPipeline: asset.value.pipeline,
            currentPipeline: pipeline,
          }))
        ) {
          finalAssets.push(asset);
          continue;
        }

        try {
          let transformerResults = await this.runTransformer(
            pipeline,
            asset,
            transformer.plugin,
            transformer.name,
            transformer.config,
            transformer.configKeyPath,
            this.parcelConfig,
          );

          for (let result of transformerResults) {
            if (result instanceof UncommittedAsset) {
              resultingAssets.push(result);
              continue;
            }
            resultingAssets.push(
              asset.createChildAsset(
                result,
                transformer.name,
                this.parcelConfig.filePath,
                transformer.configKeyPath,
              ),
            );
          }
        } catch (e) {
          let diagnostic = errorToDiagnostic(e, {
            origin: transformer.name,
            filePath: fromProjectPath(
              this.options.projectRoot,
              asset.value.filePath,
            ),
          });

          // If this request is a virtual asset that might not exist on the filesystem,
          // add the `code` property to each code frame in the diagnostics that match the
          // request's filepath. This can't be done by the transformer because it might not
          // have access to the original code (e.g. an inline script tag in HTML).
          if (this.request.code != null) {
            for (let d of diagnostic) {
              if (d.codeFrames) {
                for (let codeFrame of d.codeFrames) {
                  if (
                    codeFrame.code == null &&
                    codeFrame.filePath === this.request.filePath
                  ) {
                    codeFrame.code = this.request.code;
                  }
                }
              }
            }
          }

          throw new ThrowableDiagnostic({
            diagnostic,
          });
        }
      }
      inputAssets = resultingAssets;
    }

    // Make assets with ASTs generate unless they are CSS modules. This parallelizes generation
    // and distributes work more evenly across workers than if one worker needed to
    // generate all assets in a large bundle during packaging.
    await Promise.all(
      resultingAssets
        .filter(
          asset =>
            asset.ast != null &&
            !(
              this.options.mode === 'production' &&
              asset.value.type === 'css' &&
              asset.value.symbols
            ),
        )
        .map(async asset => {
          if (asset.isASTDirty && asset.generate) {
            let output = await asset.generate();
            asset.content = output.content;
            asset.mapBuffer = output.map?.toBuffer();
          }

          asset.clearAST();
        }),
    );

    return finalAssets.concat(resultingAssets);
  }

  async readFromCache(cacheKey: string): Promise<?Array<UncommittedAsset>> {
    if (
      this.options.shouldDisableCache ||
      this.request.code != null ||
      this.request.invalidateReason & FILE_CREATE
    ) {
      return null;
    }

    let cached = await this.options.cache.get<{|assets: Array<AssetValue>|}>(
      cacheKey,
    );
    if (!cached) {
      return null;
    }

    let cachedAssets = cached.assets;

    return Promise.all(
      cachedAssets.map(async (value: AssetValue) => {
        let content =
          value.contentKey != null
            ? value.isLargeBlob
              ? this.options.cache.getStream(value.contentKey)
              : await this.options.cache.getBlob(value.contentKey)
            : null;
        let mapBuffer =
          value.astKey != null
            ? await this.options.cache.getBlob(value.astKey)
            : null;
        let ast =
          value.astKey != null
            ? // TODO: Capture with a test and likely use cache.get() as this returns a buffer.
              // $FlowFixMe[incompatible-call]
              await this.options.cache.getBlob(value.astKey)
            : null;

        return new UncommittedAsset({
          value,
          options: this.options,
          content,
          mapBuffer,
          ast,
        });
      }),
    );
  }

  async writeToCache(
    cacheKey: string,
    assets: Array<UncommittedAsset>,
    invalidationHash: string,
    pipelineHash: string,
  ): Promise<void> {
    await Promise.all(
      assets.map(asset => asset.commit(invalidationHash + pipelineHash)),
    );

    this.options.cache.set(cacheKey, {
      $$raw: true,
      assets: assets.map(a => a.value),
    });
  }

  getCacheKey(
    assets: Array<UncommittedAsset>,
    invalidationHash: string,
    pipelineHash: string,
  ): string {
    let assetsKeyInfo = assets
      .map(a => [
        a.value.filePath,
        a.value.pipeline,
        a.value.hash,
        a.value.uniqueKey,
        a.value.query ?? '',
      ])
      .join('');

    return hashString(
      PARCEL_VERSION +
        assetsKeyInfo +
        this.request.env.id +
        invalidationHash +
        pipelineHash,
    );
  }

  async loadPipeline(
    filePath: ProjectPath,
    isSource: boolean,
    pipeline: ?string,
  ): Promise<Pipeline> {
    let transformers = await this.parcelConfig.getTransformers(
      filePath,
      pipeline,
      this.request.isURL,
    );

    for (let transformer of transformers) {
      let config = await this.loadTransformerConfig(transformer, isSource);
      if (config) {
        this.configs.set(transformer.name, config);
      }
    }

    return {
      id: transformers.map(t => t.name).join(':'),
      transformers: transformers.map(transformer => ({
        name: transformer.name,
        resolveFrom: transformer.resolveFrom,
        config: this.configs.get(transformer.name)?.result,
        configKeyPath: transformer.keyPath,
        plugin: transformer.plugin,
      })),
      options: this.options,
      resolverRunner: new ResolverRunner({
        config: this.parcelConfig,
        options: this.options,
      }),

      pluginOptions: this.pluginOptions,
      workerApi: this.workerApi,
    };
  }

  async loadNextPipeline({
    filePath,
    isSource,
    newType,
    newPipeline,
    currentPipeline,
  }: {|
    filePath: ProjectPath,
    isSource: boolean,
    newType: string,
    newPipeline: ?string,
    currentPipeline: Pipeline,
  |}): Promise<?Pipeline> {
    let filePathRelative = fromProjectPathRelative(filePath);
    let nextFilePath = toProjectPathUnsafe(
      filePathRelative.slice(0, -path.extname(filePathRelative).length) +
        '.' +
        newType,
    );
    let nextPipeline = await this.loadPipeline(
      nextFilePath,
      isSource,
      newPipeline,
    );

    if (nextPipeline.id === currentPipeline.id) {
      return null;
    }

    return nextPipeline;
  }

  async loadTransformerConfig(
    transformer: LoadedPlugin<Transformer<mixed>>,
    isSource: boolean,
  ): Promise<?Config> {
    let loadConfig = transformer.plugin.loadConfig;
    if (!loadConfig) {
      return;
    }

    let config = createConfig({
      plugin: transformer.name,
      isSource,
      searchPath: this.request.filePath,
      env: this.request.env,
    });

    await loadPluginConfig(transformer, config, this.options);

    for (let devDep of config.devDeps) {
      await this.addDevDependency(devDep);
    }

    return config;
  }

  async runTransformer(
    pipeline: Pipeline,
    asset: UncommittedAsset,
    transformer: Transformer<mixed>,
    transformerName: string,
    preloadedConfig: ?Config,
    configKeyPath?: string,
    parcelConfig: ParcelConfig,
  ): Promise<$ReadOnlyArray<TransformerResult | UncommittedAsset>> {
    const logger = new PluginLogger({origin: transformerName});

    const resolve = async (from: FilePath, to: string): Promise<FilePath> => {
      let result = await pipeline.resolverRunner.resolve(
        createDependency(this.options.projectRoot, {
          env: asset.value.env,
          specifier: to,
          specifierType: 'esm', // ???
          sourcePath: from,
        }),
      );

      if (result.invalidateOnFileCreate) {
        this.invalidateOnFileCreate.push(
          ...result.invalidateOnFileCreate.map(i =>
            invalidateOnFileCreateToInternal(this.options.projectRoot, i),
          ),
        );
      }

      if (result.invalidateOnFileChange) {
        for (let filePath of result.invalidateOnFileChange) {
          let invalidation = {
            type: 'file',
            filePath: toProjectPath(this.options.projectRoot, filePath),
          };

          this.invalidations.set(getInvalidationId(invalidation), invalidation);
        }
      }

      if (result.diagnostics && result.diagnostics.length > 0) {
        throw new ThrowableDiagnostic({diagnostic: result.diagnostics});
      }

      return fromProjectPath(
        this.options.projectRoot,
        nullthrows(result.assetGroup).filePath,
      );
    };

    // If an ast exists on the asset, but we cannot reuse it,
    // use the previous transform to generate code that we can re-parse.
    if (
      asset.ast &&
      asset.isASTDirty &&
      (!transformer.canReuseAST ||
        !transformer.canReuseAST({
          ast: asset.ast,
          options: pipeline.pluginOptions,
          logger,
        })) &&
      asset.generate
    ) {
      let output = await asset.generate();
      asset.content = output.content;
      asset.mapBuffer = output.map?.toBuffer();
    }

    // Load config for the transformer.
    let config = preloadedConfig;

    // Parse if there is no AST available from a previous transform.
    let parse = transformer.parse?.bind(transformer);
    if (!asset.ast && parse) {
      let ast = await parse({
        asset: new Asset(asset),
        config,
        options: pipeline.pluginOptions,
        resolve,
        logger,
      });
      if (ast) {
        asset.setAST(ast);
        asset.isASTDirty = false;
      }
    }

    // Transform.
    let transfomerResult: Array<TransformerResult | MutableAsset> =
      // $FlowFixMe the returned IMutableAsset really is a MutableAsset
      await transformer.transform({
        asset: new MutableAsset(asset),
        config,
        options: pipeline.pluginOptions,
        resolve,
        logger,
      });
    let results = await normalizeAssets(this.options, transfomerResult);

    // Create generate and postProcess function that can be called later
    asset.generate = (): Promise<GenerateOutput> => {
      let publicAsset = new Asset(asset);
      if (transformer.generate && asset.ast) {
        let generated = transformer.generate({
          asset: publicAsset,
          ast: asset.ast,
          options: pipeline.pluginOptions,
          logger,
        });
        asset.clearAST();
        return Promise.resolve(generated);
      }

      throw new Error(
        'Asset has an AST but no generate method is available on the transform',
      );
    };

    let postProcess = transformer.postProcess;
    if (postProcess) {
      pipeline.postProcess = async (
        assets: Array<UncommittedAsset>,
      ): Promise<Array<UncommittedAsset> | null> => {
        let results = await postProcess.call(transformer, {
          assets: assets.map(asset => new MutableAsset(asset)),
          config,
          options: pipeline.pluginOptions,
          resolve,
          logger,
        });

        return Promise.all(
          results.map(result =>
            asset.createChildAsset(
              result,
              transformerName,
              parcelConfig.filePath,
              // configKeyPath,
            ),
          ),
        );
      };
    }

    return results;
  }
}

type Pipeline = {|
  id: string,
  transformers: Array<TransformerWithNameAndConfig>,
  options: ParcelOptions,
  pluginOptions: PluginOptions,
  resolverRunner: ResolverRunner,
  workerApi: WorkerApi,
  postProcess?: PostProcessFunc,
  generate?: GenerateFunc,
|};

type TransformerWithNameAndConfig = {|
  name: PackageName,
  plugin: Transformer<mixed>,
  config: ?Config,
  configKeyPath?: string,
  resolveFrom: ProjectPath,
  range?: ?SemverRange,
|};

function normalizeAssets(
  options,
  results: Array<TransformerResult | MutableAsset>,
): Array<TransformerResult | UncommittedAsset> {
  return results.map(result => {
    if (result instanceof MutableAsset) {
      return mutableAssetToUncommittedAsset(result);
    }

    return result;
  });
}
