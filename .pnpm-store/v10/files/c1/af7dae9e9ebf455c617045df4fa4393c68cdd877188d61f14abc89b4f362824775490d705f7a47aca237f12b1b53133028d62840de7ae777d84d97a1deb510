"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyRuntimes;

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

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

var _AssetGraph = require("./AssetGraph");

var _BundleGraph = _interopRequireDefault(require("./public/BundleGraph"));

var _BundleGraph2 = _interopRequireWildcard(require("./BundleGraph"));

var _Bundle = require("./public/Bundle");

function _logger() {
  const data = require("@parcel/logger");

  _logger = function () {
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

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

var _Dependency = require("./public/Dependency");

var _Environment = require("./Environment");

var _AssetGraphRequest = _interopRequireDefault(require("./requests/AssetGraphRequest"));

var _DevDepRequest = require("./requests/DevDepRequest");

var _projectPath = require("./projectPath");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function applyRuntimes({
  bundleGraph,
  config,
  options,
  pluginOptions,
  api,
  optionsRef,
  previousDevDeps,
  devDepRequests,
  configs
}) {
  let runtimes = await config.getRuntimes();
  let connections = [];

  for (let bundle of bundleGraph.getBundles({
    includeInline: true
  })) {
    for (let runtime of runtimes) {
      try {
        var _configs$get;

        let applied = await runtime.plugin.apply({
          bundle: _Bundle.NamedBundle.get(bundle, bundleGraph, options),
          bundleGraph: new _BundleGraph.default(bundleGraph, _Bundle.NamedBundle.get.bind(_Bundle.NamedBundle), options),
          config: (_configs$get = configs.get(runtime.name)) === null || _configs$get === void 0 ? void 0 : _configs$get.result,
          options: pluginOptions,
          logger: new (_logger().PluginLogger)({
            origin: runtime.name
          })
        });

        if (applied) {
          let runtimeAssets = Array.isArray(applied) ? applied : [applied];

          for (let {
            code,
            dependency,
            filePath,
            isEntry,
            env
          } of runtimeAssets) {
            let sourceName = _path().default.join(_path().default.dirname(filePath), `runtime-${(0, _hash().hashString)(code)}.${bundle.type}`);

            let assetGroup = {
              code,
              filePath: (0, _projectPath.toProjectPath)(options.projectRoot, sourceName),
              env: (0, _Environment.mergeEnvironments)(options.projectRoot, bundle.env, env),
              // Runtime assets should be considered source, as they should be
              // e.g. compiled to run in the target environment
              isSource: true
            };
            connections.push({
              bundle,
              assetGroup,
              dependency: dependency,
              isEntry
            });
          }
        }
      } catch (e) {
        throw new (_diagnostic().default)({
          diagnostic: (0, _diagnostic().errorToDiagnostic)(e, {
            origin: runtime.name
          })
        });
      }
    }
  } // Add dev deps for runtime plugins AFTER running them, to account for lazy require().


  for (let runtime of runtimes) {
    let devDepRequest = await (0, _DevDepRequest.createDevDependency)({
      specifier: runtime.name,
      resolveFrom: runtime.resolveFrom
    }, previousDevDeps, options);
    devDepRequests.set(`${devDepRequest.specifier}:${(0, _projectPath.fromProjectPathRelative)(devDepRequest.resolveFrom)}`, devDepRequest);
    await (0, _DevDepRequest.runDevDepRequest)(api, devDepRequest);
  }

  let {
    assetGraph: runtimesAssetGraph,
    changedAssets
  } = await reconcileNewRuntimes(api, connections, optionsRef);

  let runtimesGraph = _BundleGraph2.default.fromAssetGraph(runtimesAssetGraph, bundleGraph._publicIdByAssetId, bundleGraph._assetPublicIds); // Merge the runtimes graph into the main bundle graph.


  bundleGraph.merge(runtimesGraph);

  for (let [assetId, publicId] of runtimesGraph._publicIdByAssetId) {
    bundleGraph._publicIdByAssetId.set(assetId, publicId);

    bundleGraph._assetPublicIds.add(publicId);
  }

  for (let {
    bundle,
    assetGroup,
    dependency,
    isEntry
  } of connections) {
    let assetGroupNode = (0, _AssetGraph.nodeFromAssetGroup)(assetGroup);
    let assetGroupAssetNodeIds = runtimesAssetGraph.getNodeIdsConnectedFrom(runtimesAssetGraph.getNodeIdByContentKey(assetGroupNode.id));
    (0, _assert().default)(assetGroupAssetNodeIds.length === 1);
    let runtimeNodeId = assetGroupAssetNodeIds[0];
    let runtimeNode = (0, _nullthrows().default)(runtimesAssetGraph.getNode(runtimeNodeId));
    (0, _assert().default)(runtimeNode.type === 'asset');
    let resolution = dependency && bundleGraph.getResolvedAsset((0, _Dependency.dependencyToInternalDependency)(dependency), bundle);

    let runtimesGraphRuntimeNodeId = runtimesGraph._graph.getNodeIdByContentKey(runtimeNode.id);

    let duplicatedContentKeys = new Set();

    runtimesGraph._graph.traverse((nodeId, _, actions) => {
      let node = (0, _nullthrows().default)(runtimesGraph._graph.getNode(nodeId));

      if (node.type !== 'dependency') {
        return;
      }

      let assets = runtimesGraph._graph.getNodeIdsConnectedFrom(nodeId).map(assetNodeId => {
        let assetNode = (0, _nullthrows().default)(runtimesGraph._graph.getNode(assetNodeId));
        (0, _assert().default)(assetNode.type === 'asset');
        return assetNode.value;
      });

      for (let asset of assets) {
        if (bundleGraph.isAssetReachableFromBundle(asset, bundle) || (resolution === null || resolution === void 0 ? void 0 : resolution.id) === asset.id) {
          duplicatedContentKeys.add(asset.id);
          actions.skipChildren();
        }
      }
    }, runtimesGraphRuntimeNodeId);

    let bundleNodeId = bundleGraph._graph.getNodeIdByContentKey(bundle.id);

    let bundleGraphRuntimeNodeId = bundleGraph._graph.getNodeIdByContentKey(runtimeNode.id); // the node id is not constant between graphs


    runtimesGraph._graph.traverse((nodeId, _, actions) => {
      let node = (0, _nullthrows().default)(runtimesGraph._graph.getNode(nodeId));

      if (node.type === 'asset' || node.type === 'dependency') {
        if (duplicatedContentKeys.has(node.id)) {
          actions.skipChildren();
          return;
        }

        const bundleGraphNodeId = bundleGraph._graph.getNodeIdByContentKey(node.id); // the node id is not constant between graphs


        bundleGraph._graph.addEdge(bundleNodeId, bundleGraphNodeId, _BundleGraph2.bundleGraphEdgeTypes.contains);
      }
    }, runtimesGraphRuntimeNodeId);

    if (isEntry) {
      bundleGraph._graph.addEdge(bundleNodeId, bundleGraphRuntimeNodeId);

      bundle.entryAssetIds.unshift(runtimeNode.id);
    }

    if (dependency == null) {
      // Verify this asset won't become an island
      (0, _assert().default)(bundleGraph._graph.getNodeIdsConnectedTo(bundleGraphRuntimeNodeId).length > 0, 'Runtime must have an inbound dependency or be an entry');
    } else {
      let dependencyNodeId = bundleGraph._graph.getNodeIdByContentKey(dependency.id);

      bundleGraph._graph.addEdge(dependencyNodeId, bundleGraphRuntimeNodeId);
    }
  }

  return changedAssets;
}

function reconcileNewRuntimes(api, connections, optionsRef) {
  let assetGroups = connections.map(t => t.assetGroup);
  let request = (0, _AssetGraphRequest.default)({
    name: 'Runtimes',
    assetGroups,
    optionsRef
  }); // rebuild the graph

  return api.runRequest(request, {
    force: true
  });
}