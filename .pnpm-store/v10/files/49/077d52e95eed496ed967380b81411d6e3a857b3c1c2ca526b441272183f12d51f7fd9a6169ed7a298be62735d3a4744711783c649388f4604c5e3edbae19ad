"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bundleGraphToInternalBundleGraph = bundleGraphToInternalBundleGraph;
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

function _graph() {
  const data = require("@parcel/graph");

  _graph = function () {
    return data;
  };

  return data;
}

var _Asset = require("./Asset");

var _Bundle = require("./Bundle");

var _Dependency = _interopRequireWildcard(require("./Dependency"));

var _Target = require("./Target");

var _utils = require("../utils");

var _BundleGroup = _interopRequireWildcard(require("./BundleGroup"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Friendly access for other modules within this package that need access
// to the internal bundle.
const _bundleGraphToInternalBundleGraph = new WeakMap();

function bundleGraphToInternalBundleGraph(bundleGraph) {
  return (0, _nullthrows().default)(_bundleGraphToInternalBundleGraph.get(bundleGraph));
}

class BundleGraph {
  #graph;
  #options;
  #createBundle;

  constructor(graph, createBundle, options) {
    this.#graph = graph;
    this.#options = options;
    this.#createBundle = createBundle; // $FlowFixMe

    _bundleGraphToInternalBundleGraph.set(this, graph);
  }

  getAssetById(id) {
    return (0, _Asset.assetFromValue)(this.#graph.getAssetById(id), this.#options);
  }

  getAssetPublicId(asset) {
    return this.#graph.getAssetPublicId((0, _Asset.assetToAssetValue)(asset));
  }

  isDependencySkipped(dep) {
    return this.#graph.isDependencySkipped((0, _Dependency.dependencyToInternalDependency)(dep));
  }

  getResolvedAsset(dep, bundle) {
    let resolution = this.#graph.getResolvedAsset((0, _Dependency.dependencyToInternalDependency)(dep), bundle && (0, _Bundle.bundleToInternalBundle)(bundle));

    if (resolution) {
      return (0, _Asset.assetFromValue)(resolution, this.#options);
    }
  }

  getIncomingDependencies(asset) {
    return this.#graph.getIncomingDependencies((0, _Asset.assetToAssetValue)(asset)).map(dep => new _Dependency.default(dep, this.#options));
  }

  getAssetWithDependency(dep) {
    let asset = this.#graph.getAssetWithDependency((0, _Dependency.dependencyToInternalDependency)(dep));

    if (asset) {
      return (0, _Asset.assetFromValue)(asset, this.#options);
    }
  }

  getBundleGroupsContainingBundle(bundle) {
    return this.#graph.getBundleGroupsContainingBundle((0, _Bundle.bundleToInternalBundle)(bundle)).map(bundleGroup => new _BundleGroup.default(bundleGroup, this.#options));
  }

  getReferencedBundles(bundle, opts) {
    return this.#graph.getReferencedBundles((0, _Bundle.bundleToInternalBundle)(bundle), opts).map(bundle => this.#createBundle(bundle, this.#graph, this.#options));
  }

  resolveAsyncDependency(dependency, bundle) {
    let resolved = this.#graph.resolveAsyncDependency((0, _Dependency.dependencyToInternalDependency)(dependency), bundle && (0, _Bundle.bundleToInternalBundle)(bundle));

    if (resolved == null) {
      return;
    } else if (resolved.type === 'bundle_group') {
      return {
        type: 'bundle_group',
        value: new _BundleGroup.default(resolved.value, this.#options)
      };
    }

    return {
      type: 'asset',
      value: (0, _Asset.assetFromValue)(resolved.value, this.#options)
    };
  }

  getReferencedBundle(dependency, bundle) {
    let result = this.#graph.getReferencedBundle((0, _Dependency.dependencyToInternalDependency)(dependency), (0, _Bundle.bundleToInternalBundle)(bundle));

    if (result != null) {
      return this.#createBundle(result, this.#graph, this.#options);
    }
  }

  getDependencies(asset) {
    return this.#graph.getDependencies((0, _Asset.assetToAssetValue)(asset)).map(dep => new _Dependency.default(dep, this.#options));
  }

  isAssetReachableFromBundle(asset, bundle) {
    return this.#graph.isAssetReachableFromBundle((0, _Asset.assetToAssetValue)(asset), (0, _Bundle.bundleToInternalBundle)(bundle));
  }

  isAssetReferenced(bundle, asset) {
    return this.#graph.isAssetReferenced((0, _Bundle.bundleToInternalBundle)(bundle), (0, _Asset.assetToAssetValue)(asset));
  }

  hasParentBundleOfType(bundle, type) {
    return this.#graph.hasParentBundleOfType((0, _Bundle.bundleToInternalBundle)(bundle), type);
  }

  getBundlesInBundleGroup(bundleGroup, opts) {
    return this.#graph.getBundlesInBundleGroup((0, _BundleGroup.bundleGroupToInternalBundleGroup)(bundleGroup), opts).map(bundle => this.#createBundle(bundle, this.#graph, this.#options));
  }

  getBundles(opts) {
    return this.#graph.getBundles(opts).map(bundle => this.#createBundle(bundle, this.#graph, this.#options));
  }

  isEntryBundleGroup(bundleGroup) {
    return this.#graph.isEntryBundleGroup((0, _BundleGroup.bundleGroupToInternalBundleGroup)(bundleGroup));
  }

  getChildBundles(bundle) {
    return this.#graph.getChildBundles((0, _Bundle.bundleToInternalBundle)(bundle)).map(bundle => this.#createBundle(bundle, this.#graph, this.#options));
  }

  getParentBundles(bundle) {
    return this.#graph.getParentBundles((0, _Bundle.bundleToInternalBundle)(bundle)).map(bundle => this.#createBundle(bundle, this.#graph, this.#options));
  }

  getSymbolResolution(asset, symbol, boundary) {
    let res = this.#graph.getSymbolResolution((0, _Asset.assetToAssetValue)(asset), symbol, boundary ? (0, _Bundle.bundleToInternalBundle)(boundary) : null);
    return {
      asset: (0, _Asset.assetFromValue)(res.asset, this.#options),
      exportSymbol: res.exportSymbol,
      symbol: res.symbol,
      loc: (0, _utils.fromInternalSourceLocation)(this.#options.projectRoot, res.loc)
    };
  }

  getExportedSymbols(asset, boundary) {
    let res = this.#graph.getExportedSymbols((0, _Asset.assetToAssetValue)(asset), boundary ? (0, _Bundle.bundleToInternalBundle)(boundary) : null);
    return res.map(e => ({
      asset: (0, _Asset.assetFromValue)(e.asset, this.#options),
      exportSymbol: e.exportSymbol,
      symbol: e.symbol,
      loc: (0, _utils.fromInternalSourceLocation)(this.#options.projectRoot, e.loc),
      exportAs: e.exportAs
    }));
  }

  traverse(visit, start) {
    return this.#graph.traverse((0, _graph().mapVisitor)(node => node.type === 'asset' ? {
      type: 'asset',
      value: (0, _Asset.assetFromValue)(node.value, this.#options)
    } : {
      type: 'dependency',
      value: new _Dependency.default(node.value, this.#options)
    }, visit), start ? (0, _Asset.assetToAssetValue)(start) : undefined);
  }

  traverseBundles(visit, startBundle) {
    return this.#graph.traverseBundles((0, _graph().mapVisitor)(bundle => this.#createBundle(bundle, this.#graph, this.#options), visit), startBundle == null ? undefined : (0, _Bundle.bundleToInternalBundle)(startBundle));
  }

  getBundlesWithAsset(asset) {
    return this.#graph.getBundlesWithAsset((0, _Asset.assetToAssetValue)(asset)).map(bundle => this.#createBundle(bundle, this.#graph, this.#options));
  }

  getBundlesWithDependency(dependency) {
    return this.#graph.getBundlesWithDependency((0, _Dependency.dependencyToInternalDependency)(dependency)).map(bundle => this.#createBundle(bundle, this.#graph, this.#options));
  }

  getUsedSymbols(v) {
    if (v instanceof _Asset.Asset) {
      return this.#graph.getUsedSymbolsAsset((0, _Asset.assetToAssetValue)(v));
    } else {
      (0, _assert().default)(v instanceof _Dependency.default);
      return this.#graph.getUsedSymbolsDependency((0, _Dependency.dependencyToInternalDependency)(v));
    }
  }

  getEntryRoot(target) {
    return this.#graph.getEntryRoot(this.#options.projectRoot, (0, _Target.targetToInternalTarget)(target));
  }

}

exports.default = BundleGraph;