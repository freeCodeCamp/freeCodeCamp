"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _stream() {
  const data = require("stream");

  _stream = function () {
    return data;
  };

  return data;
}

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _logger() {
  const data = _interopRequireWildcard(require("@parcel/logger"));

  _logger = function () {
    return data;
  };

  return data;
}

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

function _hash() {
  const data = require("@parcel/hash");

  _hash = function () {
    return data;
  };

  return data;
}

var _Dependency = require("./Dependency");

var _ParcelConfig = _interopRequireDefault(require("./ParcelConfig"));

var _PathRequest = require("./requests/PathRequest");

var _Asset = require("./public/Asset");

var _UncommittedAsset = _interopRequireDefault(require("./UncommittedAsset"));

var _assetUtils = require("./assetUtils");

var _summarizeRequest = _interopRequireDefault(require("./summarizeRequest"));

var _PluginOptions = _interopRequireDefault(require("./public/PluginOptions"));

var _constants = require("./constants");

var _utils2 = require("./utils");

var _InternalConfig = require("./InternalConfig");

var _ConfigRequest = require("./requests/ConfigRequest");

var _DevDepRequest = require("./requests/DevDepRequest");

var _projectPath = require("./projectPath");

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: eventually call path request as sub requests
class Transformation {
  constructor({
    request,
    options,
    config,
    workerApi
  }) {
    this.configs = new Map();
    this.parcelConfig = config;
    this.options = options;
    this.request = request;
    this.workerApi = workerApi;
    this.invalidations = new Map();
    this.invalidateOnFileCreate = [];
    this.devDepRequests = new Map();
    this.pluginDevDeps = [];
    this.pluginOptions = new _PluginOptions.default((0, _utils2.optionsProxy)(this.options, option => {
      let invalidation = {
        type: 'option',
        key: option
      };
      this.invalidations.set((0, _assetUtils.getInvalidationId)(invalidation), invalidation);
    }, devDep => {
      this.pluginDevDeps.push(devDep);
    }));
  }

  async run() {
    let asset = await this.loadAsset();
    let existing;

    if (!asset.mapBuffer && _utils().SOURCEMAP_EXTENSIONS.has(asset.value.type)) {
      // Load existing sourcemaps, this automatically runs the source contents extraction
      try {
        existing = await asset.loadExistingSourcemap();
      } catch (err) {
        _logger().default.verbose([{
          origin: '@parcel/core',
          message: (0, _diagnostic().md)`Could not load existing source map for ${(0, _projectPath.fromProjectPathRelative)(asset.value.filePath)}`
        }, {
          origin: '@parcel/core',
          message: (0, _diagnostic().escapeMarkdown)(err.message)
        }]);
      }
    }

    if (existing == null && // Don't buffer an entire stream into memory since it may not need sourceContent,
    // e.g. large binary files
    !(asset.content instanceof _stream().Readable)) {
      // If no existing sourcemap was found, initialize asset.sourceContent
      // with the original contents. This will be used when the transformer
      // calls setMap to ensure the source content is in the sourcemap.
      asset.sourceContent = await asset.getCode();
    }

    (0, _DevDepRequest.invalidateDevDeps)(this.request.invalidDevDeps, this.options, this.parcelConfig);
    let pipeline = await this.loadPipeline(this.request.filePath, asset.value.isSource, asset.value.pipeline);
    let assets, error;

    try {
      let results = await this.runPipelines(pipeline, asset);
      assets = results.map(a => a.value);
    } catch (e) {
      error = e;
    }

    let configRequests = (0, _ConfigRequest.getConfigRequests)([...this.configs.values()]);
    let devDepRequests = (0, _DevDepRequest.getWorkerDevDepRequests)([...this.devDepRequests.values()]); // $FlowFixMe because of $$raw

    return {
      $$raw: true,
      assets,
      configRequests,
      // When throwing an error, this (de)serialization is done automatically by the WorkerFarm
      error: error ? (0, _diagnostic().anyToDiagnostic)(error) : undefined,
      invalidateOnFileCreate: this.invalidateOnFileCreate,
      invalidations: [...this.invalidations.values()],
      devDepRequests
    };
  }

  async loadAsset() {
    let {
      filePath,
      env,
      code,
      pipeline,
      isSource: isSourceOverride,
      sideEffects,
      query
    } = this.request;
    let {
      content,
      size,
      hash,
      isSource: summarizedIsSource
    } = await (0, _summarizeRequest.default)(this.options.inputFS, {
      filePath: (0, _projectPath.fromProjectPath)(this.options.projectRoot, filePath),
      code
    }); // Prefer `isSource` originating from the AssetRequest.

    let isSource = isSourceOverride !== null && isSourceOverride !== void 0 ? isSourceOverride : summarizedIsSource; // If the transformer request passed code, use a hash in addition
    // to the filename as the base for the id to ensure it is unique.

    let idBase = (0, _projectPath.fromProjectPathRelative)(filePath);

    if (code != null) {
      idBase += hash;
    }

    return new _UncommittedAsset.default({
      idBase,
      value: (0, _assetUtils.createAsset)(this.options.projectRoot, {
        idBase,
        filePath,
        isSource,
        type: _path().default.extname((0, _projectPath.fromProjectPathRelative)(filePath)).slice(1),
        hash,
        pipeline,
        env,
        query,
        stats: {
          time: 0,
          size
        },
        sideEffects
      }),
      options: this.options,
      content,
      invalidations: this.invalidations,
      fileCreateInvalidations: this.invalidateOnFileCreate
    });
  }

  async runPipelines(pipeline, initialAsset) {
    var _ref;

    let initialType = initialAsset.value.type;
    let initialPipelineHash = await this.getPipelineHash(pipeline);
    let initialAssetCacheKey = this.getCacheKey([initialAsset], await (0, _assetUtils.getInvalidationHash)(this.request.invalidations, this.options), // TODO: should be per-pipeline
    initialPipelineHash);
    let initialCacheEntry = await this.readFromCache(initialAssetCacheKey);
    let assets = initialCacheEntry || (await this.runPipeline(pipeline, initialAsset)); // Add dev dep requests for each transformer

    for (let transformer of pipeline.transformers) {
      await this.addDevDependency({
        specifier: transformer.name,
        resolveFrom: transformer.resolveFrom,
        range: transformer.range
      });
    } // Add dev dep requests for dependencies of transformer plugins
    // (via proxied packageManager.require calls).


    for (let devDep of this.pluginDevDeps) {
      await this.addDevDependency(devDep);
    }

    if (!initialCacheEntry) {
      let pipelineHash = await this.getPipelineHash(pipeline);
      let invalidationCacheKey = await (0, _assetUtils.getInvalidationHash)(assets.flatMap(asset => asset.getInvalidations()), this.options);
      let resultCacheKey = this.getCacheKey([initialAsset], invalidationCacheKey, pipelineHash);
      await this.writeToCache(resultCacheKey, assets, invalidationCacheKey, pipelineHash);
    } else {
      // See above TODO, this should be per-pipeline
      for (let i of this.request.invalidations) {
        this.invalidations.set((0, _assetUtils.getInvalidationId)(i), i);
      }
    }

    let finalAssets = [];

    for (let asset of assets) {
      let nextPipeline;

      if (asset.value.type !== initialType) {
        nextPipeline = await this.loadNextPipeline({
          filePath: initialAsset.value.filePath,
          isSource: asset.value.isSource,
          newType: asset.value.type,
          newPipeline: asset.value.pipeline,
          currentPipeline: pipeline
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
    let invalidationHash = await (0, _assetUtils.getInvalidationHash)(finalAssets.flatMap(asset => asset.getInvalidations()), this.options);
    let processedCacheEntry = await this.readFromCache(this.getCacheKey(finalAssets, invalidationHash, pipelineHash));
    (0, _assert().default)(pipeline.postProcess != null);
    let processedFinalAssets = (_ref = processedCacheEntry !== null && processedCacheEntry !== void 0 ? processedCacheEntry : await pipeline.postProcess(finalAssets)) !== null && _ref !== void 0 ? _ref : [];

    if (!processedCacheEntry) {
      await this.writeToCache(this.getCacheKey(processedFinalAssets, invalidationHash, pipelineHash), processedFinalAssets, invalidationHash, pipelineHash);
    }

    return processedFinalAssets;
  }

  async getPipelineHash(pipeline) {
    let hashes = '';

    for (let transformer of pipeline.transformers) {
      var _ref2, _this$request$devDeps, _this$devDepRequests$;

      let key = `${transformer.name}:${(0, _projectPath.fromProjectPathRelative)(transformer.resolveFrom)}`;
      hashes += (_ref2 = (_this$request$devDeps = this.request.devDeps.get(key)) !== null && _this$request$devDeps !== void 0 ? _this$request$devDeps : (_this$devDepRequests$ = this.devDepRequests.get(key)) === null || _this$devDepRequests$ === void 0 ? void 0 : _this$devDepRequests$.hash) !== null && _ref2 !== void 0 ? _ref2 : ':';
      let config = this.configs.get(transformer.name);

      if (config) {
        hashes += await (0, _ConfigRequest.getConfigHash)(config, transformer.name, this.options);

        for (let devDep of config.devDeps) {
          let key = `${devDep.specifier}:${(0, _projectPath.fromProjectPathRelative)(devDep.resolveFrom)}`;
          hashes += (0, _nullthrows().default)(this.devDepRequests.get(key)).hash;
        }
      }
    }

    return (0, _hash().hashString)(hashes);
  }

  async addDevDependency(opts) {
    let {
      specifier,
      resolveFrom,
      range
    } = opts;
    let key = `${specifier}:${(0, _projectPath.fromProjectPathRelative)(resolveFrom)}`;

    if (this.devDepRequests.has(key)) {
      return;
    } // Ensure that the package manager has an entry for this resolution.


    await this.options.packageManager.resolve(specifier, (0, _projectPath.fromProjectPath)(this.options.projectRoot, opts.resolveFrom), {
      range
    });
    let devDepRequest = await (0, _DevDepRequest.createDevDependency)(opts, this.request.devDeps, this.options);
    this.devDepRequests.set(key, devDepRequest);
  }

  async runPipeline(pipeline, initialAsset) {
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
        if (asset.value.type !== initialType && (await this.loadNextPipeline({
          filePath: initialAsset.value.filePath,
          isSource: asset.value.isSource,
          newType: asset.value.type,
          newPipeline: asset.value.pipeline,
          currentPipeline: pipeline
        }))) {
          finalAssets.push(asset);
          continue;
        }

        try {
          let transformerResults = await this.runTransformer(pipeline, asset, transformer.plugin, transformer.name, transformer.config, transformer.configKeyPath, this.parcelConfig);

          for (let result of transformerResults) {
            if (result instanceof _UncommittedAsset.default) {
              resultingAssets.push(result);
              continue;
            }

            resultingAssets.push(asset.createChildAsset(result, transformer.name, this.parcelConfig.filePath, transformer.configKeyPath));
          }
        } catch (e) {
          let diagnostic = (0, _diagnostic().errorToDiagnostic)(e, {
            origin: transformer.name,
            filePath: (0, _projectPath.fromProjectPath)(this.options.projectRoot, asset.value.filePath)
          }); // If this request is a virtual asset that might not exist on the filesystem,
          // add the `code` property to each code frame in the diagnostics that match the
          // request's filepath. This can't be done by the transformer because it might not
          // have access to the original code (e.g. an inline script tag in HTML).

          if (this.request.code != null) {
            for (let d of diagnostic) {
              if (d.codeFrames) {
                for (let codeFrame of d.codeFrames) {
                  if (codeFrame.code == null && codeFrame.filePath === this.request.filePath) {
                    codeFrame.code = this.request.code;
                  }
                }
              }
            }
          }

          throw new (_diagnostic().default)({
            diagnostic
          });
        }
      }

      inputAssets = resultingAssets;
    } // Make assets with ASTs generate unless they are CSS modules. This parallelizes generation
    // and distributes work more evenly across workers than if one worker needed to
    // generate all assets in a large bundle during packaging.


    await Promise.all(resultingAssets.filter(asset => asset.ast != null && !(this.options.mode === 'production' && asset.value.type === 'css' && asset.value.symbols)).map(async asset => {
      if (asset.isASTDirty && asset.generate) {
        var _output$map;

        let output = await asset.generate();
        asset.content = output.content;
        asset.mapBuffer = (_output$map = output.map) === null || _output$map === void 0 ? void 0 : _output$map.toBuffer();
      }

      asset.clearAST();
    }));
    return finalAssets.concat(resultingAssets);
  }

  async readFromCache(cacheKey) {
    if (this.options.shouldDisableCache || this.request.code != null || this.request.invalidateReason & _constants.FILE_CREATE) {
      return null;
    }

    let cached = await this.options.cache.get(cacheKey);

    if (!cached) {
      return null;
    }

    let cachedAssets = cached.assets;
    return Promise.all(cachedAssets.map(async value => {
      let content = value.contentKey != null ? value.isLargeBlob ? this.options.cache.getStream(value.contentKey) : await this.options.cache.getBlob(value.contentKey) : null;
      let mapBuffer = value.astKey != null ? await this.options.cache.getBlob(value.astKey) : null;
      let ast = value.astKey != null ? // TODO: Capture with a test and likely use cache.get() as this returns a buffer.
      // $FlowFixMe[incompatible-call]
      await this.options.cache.getBlob(value.astKey) : null;
      return new _UncommittedAsset.default({
        value,
        options: this.options,
        content,
        mapBuffer,
        ast
      });
    }));
  }

  async writeToCache(cacheKey, assets, invalidationHash, pipelineHash) {
    await Promise.all(assets.map(asset => asset.commit(invalidationHash + pipelineHash)));
    this.options.cache.set(cacheKey, {
      $$raw: true,
      assets: assets.map(a => a.value)
    });
  }

  getCacheKey(assets, invalidationHash, pipelineHash) {
    let assetsKeyInfo = assets.map(a => {
      var _a$value$query;

      return [a.value.filePath, a.value.pipeline, a.value.hash, a.value.uniqueKey, (_a$value$query = a.value.query) !== null && _a$value$query !== void 0 ? _a$value$query : ''];
    }).join('');
    return (0, _hash().hashString)(_constants.PARCEL_VERSION + assetsKeyInfo + this.request.env.id + invalidationHash + pipelineHash);
  }

  async loadPipeline(filePath, isSource, pipeline) {
    let transformers = await this.parcelConfig.getTransformers(filePath, pipeline, this.request.isURL);

    for (let transformer of transformers) {
      let config = await this.loadTransformerConfig(transformer, isSource);

      if (config) {
        this.configs.set(transformer.name, config);
      }
    }

    return {
      id: transformers.map(t => t.name).join(':'),
      transformers: transformers.map(transformer => {
        var _this$configs$get;

        return {
          name: transformer.name,
          resolveFrom: transformer.resolveFrom,
          config: (_this$configs$get = this.configs.get(transformer.name)) === null || _this$configs$get === void 0 ? void 0 : _this$configs$get.result,
          configKeyPath: transformer.keyPath,
          plugin: transformer.plugin
        };
      }),
      options: this.options,
      resolverRunner: new _PathRequest.ResolverRunner({
        config: this.parcelConfig,
        options: this.options
      }),
      pluginOptions: this.pluginOptions,
      workerApi: this.workerApi
    };
  }

  async loadNextPipeline({
    filePath,
    isSource,
    newType,
    newPipeline,
    currentPipeline
  }) {
    let filePathRelative = (0, _projectPath.fromProjectPathRelative)(filePath);
    let nextFilePath = (0, _projectPath.toProjectPathUnsafe)(filePathRelative.slice(0, -_path().default.extname(filePathRelative).length) + '.' + newType);
    let nextPipeline = await this.loadPipeline(nextFilePath, isSource, newPipeline);

    if (nextPipeline.id === currentPipeline.id) {
      return null;
    }

    return nextPipeline;
  }

  async loadTransformerConfig(transformer, isSource) {
    let loadConfig = transformer.plugin.loadConfig;

    if (!loadConfig) {
      return;
    }

    let config = (0, _InternalConfig.createConfig)({
      plugin: transformer.name,
      isSource,
      searchPath: this.request.filePath,
      env: this.request.env
    });
    await (0, _ConfigRequest.loadPluginConfig)(transformer, config, this.options);

    for (let devDep of config.devDeps) {
      await this.addDevDependency(devDep);
    }

    return config;
  }

  async runTransformer(pipeline, asset, transformer, transformerName, preloadedConfig, configKeyPath, parcelConfig) {
    var _transformer$parse;

    const logger = new (_logger().PluginLogger)({
      origin: transformerName
    });

    const resolve = async (from, to) => {
      let result = await pipeline.resolverRunner.resolve((0, _Dependency.createDependency)(this.options.projectRoot, {
        env: asset.value.env,
        specifier: to,
        specifierType: 'esm',
        // ???
        sourcePath: from
      }));

      if (result.invalidateOnFileCreate) {
        this.invalidateOnFileCreate.push(...result.invalidateOnFileCreate.map(i => (0, _utils2.invalidateOnFileCreateToInternal)(this.options.projectRoot, i)));
      }

      if (result.invalidateOnFileChange) {
        for (let filePath of result.invalidateOnFileChange) {
          let invalidation = {
            type: 'file',
            filePath: (0, _projectPath.toProjectPath)(this.options.projectRoot, filePath)
          };
          this.invalidations.set((0, _assetUtils.getInvalidationId)(invalidation), invalidation);
        }
      }

      if (result.diagnostics && result.diagnostics.length > 0) {
        throw new (_diagnostic().default)({
          diagnostic: result.diagnostics
        });
      }

      return (0, _projectPath.fromProjectPath)(this.options.projectRoot, (0, _nullthrows().default)(result.assetGroup).filePath);
    }; // If an ast exists on the asset, but we cannot reuse it,
    // use the previous transform to generate code that we can re-parse.


    if (asset.ast && asset.isASTDirty && (!transformer.canReuseAST || !transformer.canReuseAST({
      ast: asset.ast,
      options: pipeline.pluginOptions,
      logger
    })) && asset.generate) {
      var _output$map2;

      let output = await asset.generate();
      asset.content = output.content;
      asset.mapBuffer = (_output$map2 = output.map) === null || _output$map2 === void 0 ? void 0 : _output$map2.toBuffer();
    } // Load config for the transformer.


    let config = preloadedConfig; // Parse if there is no AST available from a previous transform.

    let parse = (_transformer$parse = transformer.parse) === null || _transformer$parse === void 0 ? void 0 : _transformer$parse.bind(transformer);

    if (!asset.ast && parse) {
      let ast = await parse({
        asset: new _Asset.Asset(asset),
        config,
        options: pipeline.pluginOptions,
        resolve,
        logger
      });

      if (ast) {
        asset.setAST(ast);
        asset.isASTDirty = false;
      }
    } // Transform.


    let transfomerResult = // $FlowFixMe the returned IMutableAsset really is a MutableAsset
    await transformer.transform({
      asset: new _Asset.MutableAsset(asset),
      config,
      options: pipeline.pluginOptions,
      resolve,
      logger
    });
    let results = await normalizeAssets(this.options, transfomerResult); // Create generate and postProcess function that can be called later

    asset.generate = () => {
      let publicAsset = new _Asset.Asset(asset);

      if (transformer.generate && asset.ast) {
        let generated = transformer.generate({
          asset: publicAsset,
          ast: asset.ast,
          options: pipeline.pluginOptions,
          logger
        });
        asset.clearAST();
        return Promise.resolve(generated);
      }

      throw new Error('Asset has an AST but no generate method is available on the transform');
    };

    let postProcess = transformer.postProcess;

    if (postProcess) {
      pipeline.postProcess = async assets => {
        let results = await postProcess.call(transformer, {
          assets: assets.map(asset => new _Asset.MutableAsset(asset)),
          config,
          options: pipeline.pluginOptions,
          resolve,
          logger
        });
        return Promise.all(results.map(result => asset.createChildAsset(result, transformerName, parcelConfig.filePath // configKeyPath,
        )));
      };
    }

    return results;
  }

}

exports.default = Transformation;

function normalizeAssets(options, results) {
  return results.map(result => {
    if (result instanceof _Asset.MutableAsset) {
      return (0, _Asset.mutableAssetToUncommittedAsset)(result);
    }

    return result;
  });
}