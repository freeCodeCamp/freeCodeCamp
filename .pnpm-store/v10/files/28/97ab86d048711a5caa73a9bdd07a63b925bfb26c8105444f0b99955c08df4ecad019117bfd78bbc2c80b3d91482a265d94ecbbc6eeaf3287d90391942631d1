"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
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

function _logger() {
  const data = require("@parcel/logger");

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

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

function _url() {
  const data = _interopRequireDefault(require("url"));

  _url = function () {
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

var _Bundle = require("./public/Bundle");

var _BundleGraph = _interopRequireWildcard(require("./public/BundleGraph"));

var _PluginOptions = _interopRequireDefault(require("./public/PluginOptions"));

var _Config = _interopRequireDefault(require("./public/Config"));

var _constants = require("./constants");

var _projectPath = require("./projectPath");

var _InternalConfig = require("./InternalConfig");

var _ConfigRequest = require("./requests/ConfigRequest");

var _DevDepRequest = require("./requests/DevDepRequest");

var _buildCache = require("./buildCache");

var _assetUtils = require("./assetUtils");

var _utils2 = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BOUNDARY_LENGTH = _constants.HASH_REF_PREFIX.length + 32 - 1; // Packager/optimizer configs are not bundle-specific, so we only need to
// load them once per build.

const pluginConfigs = (0, _buildCache.createBuildCache)();

class PackagerRunner {
  constructor({
    config,
    options,
    report,
    previousDevDeps,
    previousInvalidations
  }) {
    this.config = config;
    this.options = options;
    this.report = report;
    this.previousDevDeps = previousDevDeps;
    this.devDepRequests = new Map();
    this.previousInvalidations = previousInvalidations;
    this.invalidations = new Map();
    this.pluginOptions = new _PluginOptions.default((0, _utils2.optionsProxy)(this.options, option => {
      let invalidation = {
        type: 'option',
        key: option
      };
      this.invalidations.set((0, _assetUtils.getInvalidationId)(invalidation), invalidation);
    }));
  }

  async run(bundleGraph, bundle, invalidDevDeps) {
    var _await$this$getBundle;

    (0, _DevDepRequest.invalidateDevDeps)(invalidDevDeps, this.options, this.config);
    let {
      configs,
      bundleConfigs
    } = await this.loadConfigs(bundleGraph, bundle);
    let bundleInfo = (_await$this$getBundle = await this.getBundleInfoFromCache(bundleGraph, bundle, configs, bundleConfigs)) !== null && _await$this$getBundle !== void 0 ? _await$this$getBundle : await this.getBundleInfo(bundle, bundleGraph, configs, bundleConfigs);
    let configRequests = (0, _ConfigRequest.getConfigRequests)([...configs.values(), ...bundleConfigs.values()]);
    let devDepRequests = (0, _DevDepRequest.getWorkerDevDepRequests)([...this.devDepRequests.values()]);
    return {
      bundleInfo,
      configRequests,
      devDepRequests,
      invalidations: [...this.invalidations.values()]
    };
  }

  async loadConfigs(bundleGraph, bundle) {
    let configs = new Map();
    let bundleConfigs = new Map();
    await this.loadConfig(bundleGraph, bundle, configs, bundleConfigs);

    for (let inlineBundle of bundleGraph.getInlineBundles(bundle)) {
      await this.loadConfig(bundleGraph, inlineBundle, configs, bundleConfigs);
    }

    return {
      configs,
      bundleConfigs
    };
  }

  async loadConfig(bundleGraph, bundle, configs, bundleConfigs) {
    let name = (0, _nullthrows().default)(bundle.name);
    let plugin = await this.config.getPackager(name);
    await this.loadPluginConfig(bundleGraph, bundle, plugin, configs, bundleConfigs);
    let optimizers = await this.config.getOptimizers(name, bundle.pipeline);

    for (let optimizer of optimizers) {
      await this.loadPluginConfig(bundleGraph, bundle, optimizer, configs, bundleConfigs);
    }
  }

  async loadPluginConfig(bundleGraph, bundle, plugin, configs, bundleConfigs) {
    if (!configs.has(plugin.name)) {
      // Only load config for a plugin once per build.
      let existing = pluginConfigs.get(plugin.name);

      if (existing != null) {
        configs.set(plugin.name, existing);
      } else {
        if (plugin.plugin.loadConfig != null) {
          let config = (0, _InternalConfig.createConfig)({
            plugin: plugin.name,
            searchPath: (0, _projectPath.toProjectPathUnsafe)('index')
          });
          await (0, _ConfigRequest.loadPluginConfig)(plugin, config, this.options);

          for (let devDep of config.devDeps) {
            let devDepRequest = await (0, _DevDepRequest.createDevDependency)(devDep, this.previousDevDeps, this.options);
            let key = `${devDep.specifier}:${(0, _projectPath.fromProjectPath)(this.options.projectRoot, devDep.resolveFrom)}`;
            this.devDepRequests.set(key, devDepRequest);
          }

          pluginConfigs.set(plugin.name, config);
          configs.set(plugin.name, config);
        }
      }
    }

    let loadBundleConfig = plugin.plugin.loadBundleConfig;

    if (!bundleConfigs.has(plugin.name) && loadBundleConfig != null) {
      var _bundle$name;

      let config = (0, _InternalConfig.createConfig)({
        plugin: plugin.name,
        searchPath: (0, _projectPath.joinProjectPath)(bundle.target.distDir, (_bundle$name = bundle.name) !== null && _bundle$name !== void 0 ? _bundle$name : bundle.id)
      });
      config.result = await loadBundleConfig({
        bundle: _Bundle.NamedBundle.get(bundle, bundleGraph, this.options),
        bundleGraph: new _BundleGraph.default(bundleGraph, _Bundle.NamedBundle.get.bind(_Bundle.NamedBundle), this.options),
        config: new _Config.default(config, this.options),
        options: new _PluginOptions.default(this.options),
        logger: new (_logger().PluginLogger)({
          origin: plugin.name
        })
      });
      bundleConfigs.set(plugin.name, config);
    }
  }

  async getBundleInfoFromCache(bundleGraph, bundle, configs, bundleConfigs) {
    if (this.options.shouldDisableCache) {
      return;
    }

    let cacheKey = await this.getCacheKey(bundle, bundleGraph, configs, bundleConfigs, this.previousInvalidations);
    let infoKey = PackagerRunner.getInfoKey(cacheKey);
    return this.options.cache.get(infoKey);
  }

  async getBundleInfo(bundle, bundleGraph, configs, bundleConfigs) {
    let {
      type,
      contents,
      map
    } = await this.getBundleResult(bundle, bundleGraph, configs, bundleConfigs); // Recompute cache keys as they may have changed due to dev dependencies.

    let cacheKey = await this.getCacheKey(bundle, bundleGraph, configs, bundleConfigs, [...this.invalidations.values()]);
    let cacheKeys = {
      content: PackagerRunner.getContentKey(cacheKey),
      map: PackagerRunner.getMapKey(cacheKey),
      info: PackagerRunner.getInfoKey(cacheKey)
    };
    return this.writeToCache(cacheKeys, type, contents, map);
  }

  async getBundleResult(bundle, bundleGraph, configs, bundleConfigs) {
    var _packaged$type, _res$type;

    let packaged = await this.package(bundle, bundleGraph, configs, bundleConfigs);
    let type = (_packaged$type = packaged.type) !== null && _packaged$type !== void 0 ? _packaged$type : bundle.type;
    let res = await this.optimize(bundle, bundleGraph, type, packaged.contents, packaged.map, configs, bundleConfigs);
    let map = res.map != null ? await this.generateSourceMap(bundle, res.map) : null;
    return {
      type: (_res$type = res.type) !== null && _res$type !== void 0 ? _res$type : type,
      contents: res.contents,
      map
    };
  }

  getSourceMapReference(bundle, map) {
    if (map && bundle.env.sourceMap && bundle.bundleBehavior !== 'inline') {
      if (bundle.env.sourceMap && bundle.env.sourceMap.inline) {
        return this.generateSourceMap((0, _Bundle.bundleToInternalBundle)(bundle), map);
      } else {
        return _path().default.basename(bundle.name) + '.map';
      }
    } else {
      return null;
    }
  }

  async package(internalBundle, bundleGraph, configs, bundleConfigs) {
    let bundle = _Bundle.NamedBundle.get(internalBundle, bundleGraph, this.options);

    this.report({
      type: 'buildProgress',
      phase: 'packaging',
      bundle
    });
    let packager = await this.config.getPackager(bundle.name);
    let {
      name,
      resolveFrom,
      plugin
    } = packager;

    try {
      var _configs$get, _bundleConfigs$get;

      return await plugin.package({
        config: (_configs$get = configs.get(name)) === null || _configs$get === void 0 ? void 0 : _configs$get.result,
        bundleConfig: (_bundleConfigs$get = bundleConfigs.get(name)) === null || _bundleConfigs$get === void 0 ? void 0 : _bundleConfigs$get.result,
        bundle,
        bundleGraph: new _BundleGraph.default(bundleGraph, _Bundle.NamedBundle.get.bind(_Bundle.NamedBundle), this.options),
        getSourceMapReference: map => {
          return this.getSourceMapReference(bundle, map);
        },
        options: this.pluginOptions,
        logger: new (_logger().PluginLogger)({
          origin: name
        }),
        getInlineBundleContents: async (bundle, bundleGraph) => {
          if (bundle.bundleBehavior !== 'inline') {
            throw new Error('Bundle is not inline and unable to retrieve contents');
          }

          let res = await this.getBundleResult((0, _Bundle.bundleToInternalBundle)(bundle), // $FlowFixMe
          (0, _BundleGraph.bundleGraphToInternalBundleGraph)(bundleGraph), configs, bundleConfigs);
          return {
            contents: res.contents
          };
        }
      });
    } catch (e) {
      throw new (_diagnostic().default)({
        diagnostic: (0, _diagnostic().errorToDiagnostic)(e, {
          origin: name,
          filePath: _path().default.join(bundle.target.distDir, bundle.name)
        })
      });
    } finally {
      // Add dev dependency for the packager. This must be done AFTER running it due to
      // the potential for lazy require() that aren't executed until the request runs.
      let devDepRequest = await (0, _DevDepRequest.createDevDependency)({
        specifier: name,
        resolveFrom
      }, this.previousDevDeps, this.options);
      this.devDepRequests.set(`${name}:${(0, _projectPath.fromProjectPathRelative)(resolveFrom)}`, devDepRequest);
    }
  }

  async optimize(internalBundle, internalBundleGraph, type, contents, map, configs, bundleConfigs) {
    let bundle = _Bundle.NamedBundle.get(internalBundle, internalBundleGraph, this.options);

    let bundleGraph = new _BundleGraph.default(internalBundleGraph, _Bundle.NamedBundle.get.bind(_Bundle.NamedBundle), this.options);
    let optimizers = await this.config.getOptimizers(bundle.name, internalBundle.pipeline);

    if (!optimizers.length) {
      return {
        type: bundle.type,
        contents,
        map
      };
    }

    this.report({
      type: 'buildProgress',
      phase: 'optimizing',
      bundle
    });
    let optimized = {
      type,
      contents,
      map
    };

    for (let optimizer of optimizers) {
      try {
        var _configs$get2, _bundleConfigs$get2, _next$type;

        let next = await optimizer.plugin.optimize({
          config: (_configs$get2 = configs.get(optimizer.name)) === null || _configs$get2 === void 0 ? void 0 : _configs$get2.result,
          bundleConfig: (_bundleConfigs$get2 = bundleConfigs.get(optimizer.name)) === null || _bundleConfigs$get2 === void 0 ? void 0 : _bundleConfigs$get2.result,
          bundle,
          bundleGraph,
          contents: optimized.contents,
          map: optimized.map,
          getSourceMapReference: map => {
            return this.getSourceMapReference(bundle, map);
          },
          options: this.pluginOptions,
          logger: new (_logger().PluginLogger)({
            origin: optimizer.name
          })
        });
        optimized.type = (_next$type = next.type) !== null && _next$type !== void 0 ? _next$type : optimized.type;
        optimized.contents = next.contents;
        optimized.map = next.map;
      } catch (e) {
        throw new (_diagnostic().default)({
          diagnostic: (0, _diagnostic().errorToDiagnostic)(e, {
            origin: optimizer.name,
            filePath: _path().default.join(bundle.target.distDir, bundle.name)
          })
        });
      } finally {
        // Add dev dependency for the optimizer. This must be done AFTER running it due to
        // the potential for lazy require() that aren't executed until the request runs.
        let devDepRequest = await (0, _DevDepRequest.createDevDependency)({
          specifier: optimizer.name,
          resolveFrom: optimizer.resolveFrom
        }, this.previousDevDeps, this.options);
        this.devDepRequests.set(`${optimizer.name}:${(0, _projectPath.fromProjectPathRelative)(optimizer.resolveFrom)}`, devDepRequest);
      }
    }

    return optimized;
  }

  async generateSourceMap(bundle, map) {
    // sourceRoot should be a relative path between outDir and rootDir for node.js targets
    let filePath = (0, _projectPath.joinProjectPath)(bundle.target.distDir, (0, _nullthrows().default)(bundle.name));
    let fullPath = (0, _projectPath.fromProjectPath)(this.options.projectRoot, filePath);

    let sourceRoot = _path().default.relative(_path().default.dirname(fullPath), this.options.projectRoot);

    let inlineSources = false;

    if (bundle.target) {
      if (bundle.env.sourceMap && bundle.env.sourceMap.sourceRoot !== undefined) {
        sourceRoot = bundle.env.sourceMap.sourceRoot;
      } else if (this.options.serveOptions && bundle.target.env.context === 'browser') {
        sourceRoot = '/__parcel_source_root';
      }

      if (bundle.env.sourceMap && bundle.env.sourceMap.inlineSources !== undefined) {
        inlineSources = bundle.env.sourceMap.inlineSources;
      } else if (bundle.target.env.context !== 'node') {
        // inlining should only happen in production for browser targets by default
        inlineSources = this.options.mode === 'production';
      }
    }

    let isInlineMap = bundle.env.sourceMap && bundle.env.sourceMap.inline;
    let stringified = await map.stringify({
      file: _path().default.basename(fullPath + '.map'),
      // $FlowFixMe
      fs: this.options.inputFS,
      rootDir: this.options.projectRoot,
      sourceRoot: !inlineSources ? _url().default.format(_url().default.parse(sourceRoot + '/')) : undefined,
      inlineSources,
      format: isInlineMap ? 'inline' : 'string'
    });
    (0, _assert().default)(typeof stringified === 'string');
    return stringified;
  }

  async getCacheKey(bundle, bundleGraph, configs, bundleConfigs, invalidations) {
    let configResults = {};

    for (let [pluginName, config] of configs) {
      if (config) {
        configResults[pluginName] = await (0, _ConfigRequest.getConfigHash)(config, pluginName, this.options);
      }
    }

    let globalInfoResults = {};

    for (let [pluginName, config] of bundleConfigs) {
      if (config) {
        globalInfoResults[pluginName] = await (0, _ConfigRequest.getConfigHash)(config, pluginName, this.options);
      }
    }

    let devDepHashes = await this.getDevDepHashes(bundle);

    for (let inlineBundle of bundleGraph.getInlineBundles(bundle)) {
      devDepHashes += await this.getDevDepHashes(inlineBundle);
    }

    let invalidationHash = await (0, _assetUtils.getInvalidationHash)(invalidations, this.options);
    return (0, _hash().hashString)(_constants.PARCEL_VERSION + devDepHashes + invalidationHash + bundle.target.publicUrl + bundleGraph.getHash(bundle) + JSON.stringify(configResults) + JSON.stringify(globalInfoResults) + this.options.mode);
  }

  async getDevDepHashes(bundle) {
    var _ref, _this$devDepRequests$, _this$devDepRequests$2;

    let name = (0, _nullthrows().default)(bundle.name);
    let packager = await this.config.getPackager(name);
    let optimizers = await this.config.getOptimizers(name);
    let key = `${packager.name}:${(0, _projectPath.fromProjectPathRelative)(packager.resolveFrom)}`;
    let devDepHashes = (_ref = (_this$devDepRequests$ = (_this$devDepRequests$2 = this.devDepRequests.get(key)) === null || _this$devDepRequests$2 === void 0 ? void 0 : _this$devDepRequests$2.hash) !== null && _this$devDepRequests$ !== void 0 ? _this$devDepRequests$ : this.previousDevDeps.get(key)) !== null && _ref !== void 0 ? _ref : '';

    for (let {
      name,
      resolveFrom
    } of optimizers) {
      var _ref2, _this$devDepRequests$3, _this$devDepRequests$4;

      let key = `${name}:${(0, _projectPath.fromProjectPathRelative)(resolveFrom)}`;
      devDepHashes += (_ref2 = (_this$devDepRequests$3 = (_this$devDepRequests$4 = this.devDepRequests.get(key)) === null || _this$devDepRequests$4 === void 0 ? void 0 : _this$devDepRequests$4.hash) !== null && _this$devDepRequests$3 !== void 0 ? _this$devDepRequests$3 : this.previousDevDeps.get(key)) !== null && _ref2 !== void 0 ? _ref2 : '';
    }

    return devDepHashes;
  }

  async readFromCache(cacheKey) {
    let contentKey = PackagerRunner.getContentKey(cacheKey);
    let mapKey = PackagerRunner.getMapKey(cacheKey);
    let isLargeBlob = await this.options.cache.hasLargeBlob(contentKey);
    let contentExists = isLargeBlob || (await this.options.cache.has(contentKey));

    if (!contentExists) {
      return null;
    }

    let mapExists = await this.options.cache.has(mapKey);
    return {
      contents: isLargeBlob ? this.options.cache.getStream(contentKey) : (0, _utils().blobToStream)(await this.options.cache.getBlob(contentKey)),
      map: mapExists ? (0, _utils().blobToStream)(await this.options.cache.getBlob(mapKey)) : null
    };
  }

  async writeToCache(cacheKeys, type, contents, map) {
    let size = 0;
    let hash;
    let hashReferences = [];
    let isLargeBlob = false; // TODO: don't replace hash references in binary files??

    if (contents instanceof _stream().Readable) {
      isLargeBlob = true;
      let boundaryStr = '';
      let h = new (_hash().Hash)();
      await this.options.cache.setStream(cacheKeys.content, (0, _utils().blobToStream)(contents).pipe(new (_utils().TapStream)(buf => {
        var _str$match;

        let str = boundaryStr + buf.toString();
        hashReferences = hashReferences.concat((_str$match = str.match(_constants.HASH_REF_REGEX)) !== null && _str$match !== void 0 ? _str$match : []);
        size += buf.length;
        h.writeBuffer(buf);
        boundaryStr = str.slice(str.length - BOUNDARY_LENGTH);
      })));
      hash = h.finish();
    } else if (typeof contents === 'string') {
      var _contents$match;

      let buffer = Buffer.from(contents);
      size = buffer.byteLength;
      hash = (0, _hash().hashBuffer)(buffer);
      hashReferences = (_contents$match = contents.match(_constants.HASH_REF_REGEX)) !== null && _contents$match !== void 0 ? _contents$match : [];
      await this.options.cache.setBlob(cacheKeys.content, buffer);
    } else {
      var _contents$toString$ma;

      size = contents.length;
      hash = (0, _hash().hashBuffer)(contents);
      hashReferences = (_contents$toString$ma = contents.toString().match(_constants.HASH_REF_REGEX)) !== null && _contents$toString$ma !== void 0 ? _contents$toString$ma : [];
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
      isLargeBlob
    };
    await this.options.cache.set(cacheKeys.info, info);
    return info;
  }

  static getContentKey(cacheKey) {
    return (0, _hash().hashString)(`${cacheKey}:content`);
  }

  static getMapKey(cacheKey) {
    return (0, _hash().hashString)(`${cacheKey}:map`);
  }

  static getInfoKey(cacheKey) {
    return (0, _hash().hashString)(`${cacheKey}:info`);
  }

}

exports.default = PackagerRunner;