"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createBundleGraphRequest;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
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

var _AssetGraph = _interopRequireDefault(require("../AssetGraph"));

var _BundleGraph = _interopRequireDefault(require("../public/BundleGraph"));

var _BundleGraph2 = _interopRequireWildcard(require("../BundleGraph"));

var _MutableBundleGraph = _interopRequireDefault(require("../public/MutableBundleGraph"));

var _Bundle = require("../public/Bundle");

var _ReporterRunner = require("../ReporterRunner");

var _dumpGraphToGraphViz = _interopRequireDefault(require("../dumpGraphToGraphViz"));

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

var _PluginOptions = _interopRequireDefault(require("../public/PluginOptions"));

var _applyRuntimes = _interopRequireDefault(require("../applyRuntimes"));

var _constants = require("../constants");

var _utils2 = require("../utils");

var _ParcelConfigRequest = _interopRequireWildcard(require("./ParcelConfigRequest"));

var _DevDepRequest = require("./DevDepRequest");

var _InternalConfig = require("../InternalConfig");

var _ConfigRequest = require("./ConfigRequest");

var _projectPath = require("../projectPath");

var _AssetGraphRequest = _interopRequireDefault(require("./AssetGraphRequest"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createBundleGraphRequest(input) {
  return {
    type: 'bundle_graph_request',
    id: 'BundleGraph',
    run: async input => {
      let {
        options,
        api,
        invalidateReason
      } = input;
      let {
        optionsRef,
        requestedAssetIds,
        signal
      } = input.input;
      let request = (0, _AssetGraphRequest.default)({
        name: 'Main',
        entries: options.entries,
        optionsRef,
        shouldBuildLazily: options.shouldBuildLazily,
        requestedAssetIds
      });
      let {
        assetGraph,
        changedAssets,
        assetRequests
      } = await api.runRequest(request, {
        force: options.shouldBuildLazily && requestedAssetIds.size > 0
      });
      (0, _utils2.assertSignalNotAborted)(signal); // If any subrequests are invalid (e.g. dev dep requests or config requests),
      // bail on incremental bundling. We also need to invalidate for option changes,
      // which are hoisted to direct invalidations on the bundle graph request.

      let subRequestsInvalid = Boolean(invalidateReason & _constants.OPTION_CHANGE) || input.api.getSubRequests().some(req => !input.api.canSkipSubrequest(req.id));

      if (subRequestsInvalid) {
        assetGraph.safeToIncrementallyBundle = false;
      }

      let configResult = (0, _nullthrows().default)(await input.api.runRequest((0, _ParcelConfigRequest.default)()));
      (0, _utils2.assertSignalNotAborted)(signal);
      let parcelConfig = (0, _ParcelConfigRequest.getCachedParcelConfig)(configResult, input.options);
      let {
        devDeps,
        invalidDevDeps
      } = await (0, _DevDepRequest.getDevDepRequests)(input.api);
      (0, _DevDepRequest.invalidateDevDeps)(invalidDevDeps, input.options, parcelConfig);
      let builder = new BundlerRunner(input, parcelConfig, devDeps);
      let res = await builder.bundle({
        graph: assetGraph,
        changedAssets: changedAssets,
        assetRequests
      });

      for (let [id, asset] of changedAssets) {
        res.changedAssets.set(id, asset);
      }

      (0, _dumpGraphToGraphViz.default)( // $FlowFixMe Added in Flow 0.121.0 upgrade in #4381 (Windows only)
      res.bundleGraph._graph, 'BundleGraph', _BundleGraph2.bundleGraphEdgeTypes);
      return res;
    },
    input
  };
}

class BundlerRunner {
  constructor({
    input,
    api,
    options
  }, config, previousDevDeps) {
    var _JSON$stringify;

    this.options = options;
    this.api = api;
    this.optionsRef = input.optionsRef;
    this.config = config;
    this.previousDevDeps = previousDevDeps;
    this.devDepRequests = new Map();
    this.configs = new Map();
    this.pluginOptions = new _PluginOptions.default((0, _utils2.optionsProxy)(this.options, api.invalidateOnOptionChange));
    this.cacheKey = (0, _hash().hashString)(`${_constants.PARCEL_VERSION}:BundleGraph:${(_JSON$stringify = JSON.stringify(options.entries)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : ''}${options.mode}`);
  }

  async loadConfigs() {
    // Load all configs up front so we can use them in the cache key
    let bundler = await this.config.getBundler();
    await this.loadConfig(bundler);
    let namers = await this.config.getNamers();

    for (let namer of namers) {
      await this.loadConfig(namer);
    }

    let runtimes = await this.config.getRuntimes();

    for (let runtime of runtimes) {
      await this.loadConfig(runtime);
    }
  }

  async loadConfig(plugin) {
    let config = (0, _InternalConfig.createConfig)({
      plugin: plugin.name,
      searchPath: (0, _projectPath.toProjectPathUnsafe)('index')
    });
    await (0, _ConfigRequest.loadPluginConfig)(plugin, config, this.options);
    await (0, _ConfigRequest.runConfigRequest)(this.api, config);

    for (let devDep of config.devDeps) {
      let devDepRequest = await (0, _DevDepRequest.createDevDependency)(devDep, this.previousDevDeps, this.options);
      await this.runDevDepRequest(devDepRequest);
    }

    this.configs.set(plugin.name, config);
  }

  async runDevDepRequest(devDepRequest) {
    let {
      specifier,
      resolveFrom
    } = devDepRequest;
    let key = `${specifier}:${(0, _projectPath.fromProjectPathRelative)(resolveFrom)}`;
    this.devDepRequests.set(key, devDepRequest);
    await (0, _DevDepRequest.runDevDepRequest)(this.api, devDepRequest);
  }

  async bundle({
    graph,
    changedAssets,
    assetRequests
  }) {
    (0, _ReporterRunner.report)({
      type: 'buildProgress',
      phase: 'bundling'
    });
    await this.loadConfigs();
    let plugin = await this.config.getBundler();
    let {
      plugin: bundler,
      name,
      resolveFrom
    } = plugin; // if a previous asset graph hash is passed in, check if the bundle graph is also available

    let previousBundleGraphResult;

    if (graph.safeToIncrementallyBundle) {
      try {
        previousBundleGraphResult = await this.api.getPreviousResult();
      } catch {// if the bundle graph had an error or was removed, don't fail the build
      }
    }

    if (previousBundleGraphResult == null) {
      graph.safeToIncrementallyBundle = false;
    }

    let internalBundleGraph;
    let logger = new (_logger().PluginLogger)({
      origin: name
    });

    try {
      if (previousBundleGraphResult) {
        internalBundleGraph = previousBundleGraphResult.bundleGraph;

        for (let changedAsset of changedAssets.values()) {
          internalBundleGraph.updateAsset(changedAsset);
        }
      } else {
        var _this$configs$get;

        internalBundleGraph = _BundleGraph2.default.fromAssetGraph(graph);
        (0, _assert().default)(internalBundleGraph != null); // ensures the graph was created

        await (0, _dumpGraphToGraphViz.default)( // $FlowFixMe
        internalBundleGraph._graph, 'before_bundle', _BundleGraph2.bundleGraphEdgeTypes);
        let mutableBundleGraph = new _MutableBundleGraph.default(internalBundleGraph, this.options); // this the normal bundle workflow (bundle, optimizing, run-times, naming)

        await bundler.bundle({
          bundleGraph: mutableBundleGraph,
          config: (_this$configs$get = this.configs.get(plugin.name)) === null || _this$configs$get === void 0 ? void 0 : _this$configs$get.result,
          options: this.pluginOptions,
          logger
        });

        if (this.pluginOptions.mode === 'production') {
          try {
            var _this$configs$get2;

            await bundler.optimize({
              bundleGraph: mutableBundleGraph,
              config: (_this$configs$get2 = this.configs.get(plugin.name)) === null || _this$configs$get2 === void 0 ? void 0 : _this$configs$get2.result,
              options: this.pluginOptions,
              logger
            });
          } catch (e) {
            throw new (_diagnostic().default)({
              diagnostic: (0, _diagnostic().errorToDiagnostic)(e, {
                origin: plugin.name
              })
            });
          } finally {
            await (0, _dumpGraphToGraphViz.default)( // $FlowFixMe[incompatible-call]
            internalBundleGraph._graph, 'after_optimize');
          }
        } // Add dev dependency for the bundler. This must be done AFTER running it due to
        // the potential for lazy require() that aren't executed until the request runs.


        let devDepRequest = await (0, _DevDepRequest.createDevDependency)({
          specifier: name,
          resolveFrom
        }, this.previousDevDeps, this.options);
        await this.runDevDepRequest(devDepRequest);
      }
    } catch (e) {
      throw new (_diagnostic().default)({
        diagnostic: (0, _diagnostic().errorToDiagnostic)(e, {
          origin: name
        })
      });
    } finally {
      (0, _assert().default)(internalBundleGraph != null); // ensures the graph was created

      await (0, _dumpGraphToGraphViz.default)( // $FlowFixMe[incompatible-call]
      internalBundleGraph._graph, 'after_bundle', _BundleGraph2.bundleGraphEdgeTypes);
    }

    let changedRuntimes = new Map();

    if (!previousBundleGraphResult) {
      await this.nameBundles(internalBundleGraph);
      changedRuntimes = await (0, _applyRuntimes.default)({
        bundleGraph: internalBundleGraph,
        api: this.api,
        config: this.config,
        options: this.options,
        optionsRef: this.optionsRef,
        pluginOptions: this.pluginOptions,
        previousDevDeps: this.previousDevDeps,
        devDepRequests: this.devDepRequests,
        configs: this.configs
      }); // Pre-compute the hashes for each bundle so they are only computed once and shared between workers.

      internalBundleGraph.getBundleGraphHash();
    }

    await (0, _dumpGraphToGraphViz.default)( // $FlowFixMe
    internalBundleGraph._graph, 'after_runtimes', _BundleGraph2.bundleGraphEdgeTypes);
    this.api.storeResult({
      bundleGraph: internalBundleGraph,
      changedAssets: new Map(),
      assetRequests: []
    }, this.cacheKey);
    return {
      bundleGraph: internalBundleGraph,
      changedAssets: changedRuntimes,
      assetRequests
    };
  }

  async nameBundles(bundleGraph) {
    let namers = await this.config.getNamers(); // inline bundles must still be named so the PackagerRunner
    // can match them to the correct packager/optimizer plugins.

    let bundles = bundleGraph.getBundles({
      includeInline: true
    });
    await Promise.all(bundles.map(bundle => this.nameBundle(namers, bundle, bundleGraph))); // Add dev deps for namers, AFTER running them to account for lazy require().

    for (let namer of namers) {
      let devDepRequest = await (0, _DevDepRequest.createDevDependency)({
        specifier: namer.name,
        resolveFrom: namer.resolveFrom
      }, this.previousDevDeps, this.options);
      await this.runDevDepRequest(devDepRequest);
    }

    let bundleNames = bundles.map(b => (0, _projectPath.joinProjectPath)(b.target.distDir, (0, _nullthrows().default)(b.name)));

    _assert().default.deepEqual(bundleNames, (0, _utils().unique)(bundleNames), 'Bundles must have unique names');
  }

  async nameBundle(namers, internalBundle, internalBundleGraph) {
    let bundle = _Bundle.Bundle.get(internalBundle, internalBundleGraph, this.options);

    let bundleGraph = new _BundleGraph.default(internalBundleGraph, _Bundle.NamedBundle.get.bind(_Bundle.NamedBundle), this.options);

    for (let namer of namers) {
      try {
        var _this$configs$get3;

        let name = await namer.plugin.name({
          bundle,
          bundleGraph,
          config: (_this$configs$get3 = this.configs.get(namer.name)) === null || _this$configs$get3 === void 0 ? void 0 : _this$configs$get3.result,
          options: this.pluginOptions,
          logger: new (_logger().PluginLogger)({
            origin: namer.name
          })
        });

        if (name != null) {
          internalBundle.name = name;
          let {
            hashReference
          } = internalBundle;
          internalBundle.displayName = name.includes(hashReference) ? name.replace(hashReference, '[hash]') : name;
          return;
        }
      } catch (e) {
        throw new (_diagnostic().default)({
          diagnostic: (0, _diagnostic().errorToDiagnostic)(e, {
            origin: namer.name
          })
        });
      }
    }

    throw new Error('Unable to name bundle');
  }

}