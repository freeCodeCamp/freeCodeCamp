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

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
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

var _BundleGraph = _interopRequireDefault(require("./BundleGraph"));

var _BundleGraph2 = _interopRequireWildcard(require("../BundleGraph"));

var _Bundle = require("./Bundle");

var _Asset = require("./Asset");

var _utils = require("../utils");

var _Dependency = _interopRequireWildcard(require("./Dependency"));

var _Environment = require("./Environment");

var _Target = require("./Target");

var _constants = require("../constants");

var _projectPath = require("../projectPath");

var _types = require("../types");

var _BundleGroup = _interopRequireWildcard(require("./BundleGroup"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MutableBundleGraph extends _BundleGraph.default {
  #graph
  /*: InternalBundleGraph */
  ;
  #options
  /*: ParcelOptions */
  ;
  #bundlePublicIds
  /*: Set<string> */
  = new Set();

  constructor(graph, options) {
    super(graph, _Bundle.Bundle.get.bind(_Bundle.Bundle), options);
    this.#graph = graph;
    this.#options = options;
  }

  addAssetToBundle(asset, bundle) {
    this.#graph.addAssetToBundle((0, _Asset.assetToAssetValue)(asset), (0, _Bundle.bundleToInternalBundle)(bundle));
  }

  addAssetGraphToBundle(asset, bundle, shouldSkipDependency) {
    this.#graph.addAssetGraphToBundle((0, _Asset.assetToAssetValue)(asset), (0, _Bundle.bundleToInternalBundle)(bundle), shouldSkipDependency ? d => shouldSkipDependency(new _Dependency.default(d, this.#options)) : undefined);
  }

  addEntryToBundle(asset, bundle, shouldSkipDependency) {
    this.#graph.addEntryToBundle((0, _Asset.assetToAssetValue)(asset), (0, _Bundle.bundleToInternalBundle)(bundle), shouldSkipDependency ? d => shouldSkipDependency(new _Dependency.default(d, this.#options)) : undefined);
  }

  createBundleGroup(dependency, target) {
    let dependencyNode = this.#graph._graph.getNodeByContentKey(dependency.id);

    if (!dependencyNode) {
      throw new Error('Dependency not found');
    }

    (0, _assert().default)(dependencyNode.type === 'dependency');
    let resolved = this.#graph.getResolvedAsset((0, _Dependency.dependencyToInternalDependency)(dependency));

    if (!resolved) {
      throw new Error('Dependency did not resolve to an asset ' + dependency.id);
    }

    let bundleGroup = {
      target: (0, _Target.targetToInternalTarget)(target),
      entryAssetId: resolved.id
    };
    let bundleGroupKey = (0, _utils.getBundleGroupId)(bundleGroup);
    let bundleGroupNodeId = this.#graph._graph.hasContentKey(bundleGroupKey) ? this.#graph._graph.getNodeIdByContentKey(bundleGroupKey) : this.#graph._graph.addNodeByContentKey(bundleGroupKey, {
      id: bundleGroupKey,
      type: 'bundle_group',
      value: bundleGroup
    });

    let dependencyNodeId = this.#graph._graph.getNodeIdByContentKey(dependencyNode.id);

    let resolvedNodeId = this.#graph._graph.getNodeIdByContentKey(resolved.id);

    let assetNodes = this.#graph._graph.getNodeIdsConnectedFrom(dependencyNodeId);

    this.#graph._graph.addEdge(dependencyNodeId, bundleGroupNodeId);

    this.#graph._graph.replaceNodeIdsConnectedTo(bundleGroupNodeId, assetNodes);

    this.#graph._graph.addEdge(dependencyNodeId, resolvedNodeId, _BundleGraph2.bundleGraphEdgeTypes.references);

    this.#graph._graph.removeEdge(dependencyNodeId, resolvedNodeId);

    if (dependency.isEntry) {
      this.#graph._graph.addEdge((0, _nullthrows().default)(this.#graph._graph.rootNodeId), bundleGroupNodeId, _BundleGraph2.bundleGraphEdgeTypes.bundle);
    } else {
      let inboundBundleNodeIds = this.#graph._graph.getNodeIdsConnectedTo(dependencyNodeId, _BundleGraph2.bundleGraphEdgeTypes.contains);

      for (let inboundBundleNodeId of inboundBundleNodeIds) {
        var _this$graph$_graph$ge;

        (0, _assert().default)(((_this$graph$_graph$ge = this.#graph._graph.getNode(inboundBundleNodeId)) === null || _this$graph$_graph$ge === void 0 ? void 0 : _this$graph$_graph$ge.type) === 'bundle');

        this.#graph._graph.addEdge(inboundBundleNodeId, bundleGroupNodeId, _BundleGraph2.bundleGraphEdgeTypes.bundle);
      }
    }

    return new _BundleGroup.default(bundleGroup, this.#options);
  }

  removeBundleGroup(bundleGroup) {
    this.#graph.removeBundleGroup((0, _BundleGroup.bundleGroupToInternalBundleGroup)(bundleGroup));
  }

  internalizeAsyncDependency(bundle, dependency) {
    this.#graph.internalizeAsyncDependency((0, _Bundle.bundleToInternalBundle)(bundle), (0, _Dependency.dependencyToInternalDependency)(dependency));
  }

  createBundle(opts) {
    var _opts$bundleBehavior;

    let entryAsset = opts.entryAsset ? (0, _Asset.assetToAssetValue)(opts.entryAsset) : null;
    let target = (0, _Target.targetToInternalTarget)(opts.target);
    let bundleId = (0, _hash().hashString)('bundle:' + (opts.entryAsset ? opts.entryAsset.id : opts.uniqueKey) + (0, _projectPath.fromProjectPathRelative)(target.distDir) + ((_opts$bundleBehavior = opts.bundleBehavior) !== null && _opts$bundleBehavior !== void 0 ? _opts$bundleBehavior : ''));

    let existing = this.#graph._graph.getNodeByContentKey(bundleId);

    if (existing != null) {
      (0, _assert().default)(existing.type === 'bundle');
      return _Bundle.Bundle.get(existing.value, this.#graph, this.#options);
    }

    let publicId = (0, _utils.getPublicId)(bundleId, existing => this.#bundlePublicIds.has(existing));
    this.#bundlePublicIds.add(publicId);
    let isPlaceholder = false;

    if (entryAsset) {
      let entryAssetNode = this.#graph._graph.getNodeByContentKey(entryAsset.id);

      (0, _assert().default)((entryAssetNode === null || entryAssetNode === void 0 ? void 0 : entryAssetNode.type) === 'asset', 'Entry asset does not exist');
      isPlaceholder = entryAssetNode.requested === false;
    }

    let bundleNode = {
      type: 'bundle',
      id: bundleId,
      value: {
        id: bundleId,
        hashReference: this.#options.shouldContentHash ? _constants.HASH_REF_PREFIX + bundleId : bundleId.slice(-8),
        type: opts.entryAsset ? opts.entryAsset.type : opts.type,
        env: opts.env ? (0, _Environment.environmentToInternalEnvironment)(opts.env) : (0, _nullthrows().default)(entryAsset).env,
        entryAssetIds: entryAsset ? [entryAsset.id] : [],
        mainEntryId: entryAsset === null || entryAsset === void 0 ? void 0 : entryAsset.id,
        pipeline: opts.entryAsset ? opts.entryAsset.pipeline : opts.pipeline,
        needsStableName: opts.needsStableName,
        bundleBehavior: opts.bundleBehavior != null ? _types.BundleBehavior[opts.bundleBehavior] : null,
        isSplittable: opts.entryAsset ? opts.entryAsset.isBundleSplittable : opts.isSplittable,
        isPlaceholder,
        target,
        name: null,
        displayName: null,
        publicId
      }
    };

    let bundleNodeId = this.#graph._graph.addNodeByContentKey(bundleId, bundleNode);

    if (opts.entryAsset) {
      this.#graph._graph.addEdge(bundleNodeId, this.#graph._graph.getNodeIdByContentKey(opts.entryAsset.id));
    }

    return _Bundle.Bundle.get(bundleNode.value, this.#graph, this.#options);
  }

  addBundleToBundleGroup(bundle, bundleGroup) {
    this.#graph.addBundleToBundleGroup((0, _Bundle.bundleToInternalBundle)(bundle), (0, _BundleGroup.bundleGroupToInternalBundleGroup)(bundleGroup));
  }

  createAssetReference(dependency, asset, bundle) {
    return this.#graph.createAssetReference((0, _Dependency.dependencyToInternalDependency)(dependency), (0, _Asset.assetToAssetValue)(asset), (0, _Bundle.bundleToInternalBundle)(bundle));
  }

  createBundleReference(from, to) {
    return this.#graph.createBundleReference((0, _Bundle.bundleToInternalBundle)(from), (0, _Bundle.bundleToInternalBundle)(to));
  }

  getDependencyAssets(dependency) {
    return this.#graph.getDependencyAssets((0, _Dependency.dependencyToInternalDependency)(dependency)).map(asset => (0, _Asset.assetFromValue)(asset, this.#options));
  }

  getBundleGroupsContainingBundle(bundle) {
    return this.#graph.getBundleGroupsContainingBundle((0, _Bundle.bundleToInternalBundle)(bundle)).map(bundleGroup => new _BundleGroup.default(bundleGroup, this.#options));
  }

  getParentBundlesOfBundleGroup(bundleGroup) {
    return this.#graph.getParentBundlesOfBundleGroup((0, _BundleGroup.bundleGroupToInternalBundleGroup)(bundleGroup)).map(bundle => _Bundle.Bundle.get(bundle, this.#graph, this.#options));
  }

  getTotalSize(asset) {
    return this.#graph.getTotalSize((0, _Asset.assetToAssetValue)(asset));
  }

  isAssetReachableFromBundle(asset, bundle) {
    return this.#graph.isAssetReachableFromBundle((0, _Asset.assetToAssetValue)(asset), (0, _Bundle.bundleToInternalBundle)(bundle));
  }

  removeAssetGraphFromBundle(asset, bundle) {
    this.#graph.removeAssetGraphFromBundle((0, _Asset.assetToAssetValue)(asset), (0, _Bundle.bundleToInternalBundle)(bundle));
  }

}

exports.default = MutableBundleGraph;