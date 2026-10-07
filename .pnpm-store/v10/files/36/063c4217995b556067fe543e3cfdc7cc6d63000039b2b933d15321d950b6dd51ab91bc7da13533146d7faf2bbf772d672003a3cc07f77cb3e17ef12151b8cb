"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PackagedBundle = exports.NamedBundle = exports.Bundle = void 0;
exports.bundleToInternalBundle = bundleToInternalBundle;
exports.bundleToInternalBundleGraph = bundleToInternalBundleGraph;

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

function _utils() {
  const data = require("@parcel/utils");

  _utils = function () {
    return data;
  };

  return data;
}

var _Asset = require("./Asset");

function _graph() {
  const data = require("@parcel/graph");

  _graph = function () {
    return data;
  };

  return data;
}

var _Environment = _interopRequireDefault(require("./Environment"));

var _Dependency = _interopRequireWildcard(require("./Dependency"));

var _Target = _interopRequireDefault(require("./Target"));

var _types = require("../types");

var _projectPath = require("../projectPath");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const internalBundleToBundle = new (_utils().DefaultWeakMap)(() => new (_utils().DefaultWeakMap)(() => new WeakMap()));
const internalBundleToNamedBundle = new (_utils().DefaultWeakMap)(() => new (_utils().DefaultWeakMap)(() => new WeakMap()));
const internalBundleToPackagedBundle = new (_utils().DefaultWeakMap)(() => new (_utils().DefaultWeakMap)(() => new WeakMap())); // Friendly access for other modules within this package that need access
// to the internal bundle.

const _bundleToInternalBundle = new WeakMap();

function bundleToInternalBundle(bundle) {
  return (0, _nullthrows().default)(_bundleToInternalBundle.get(bundle));
}

const _bundleToInternalBundleGraph = new WeakMap();

function bundleToInternalBundleGraph(bundle) {
  return (0, _nullthrows().default)(_bundleToInternalBundleGraph.get(bundle));
} // Require this private object to be present when invoking these constructors,
// preventing others from using them. They should use the static `get` method.


let _private = {};

class Bundle {
  #bundle
  /*: InternalBundle */
  ;
  #bundleGraph
  /*: BundleGraph */
  ;
  #options
  /*: ParcelOptions */
  ;

  constructor(sentinel, bundle, bundleGraph, options) {
    if (sentinel !== _private) {
      throw new Error('Unexpected public usage');
    }

    this.#bundle = bundle;
    this.#bundleGraph = bundleGraph;
    this.#options = options;
  }

  static get(internalBundle, bundleGraph, options) {
    let existingMap = internalBundleToBundle.get(options).get(bundleGraph);
    let existing = existingMap.get(internalBundle);

    if (existing != null) {
      return existing;
    }

    let bundle = new Bundle(_private, internalBundle, bundleGraph, options);

    _bundleToInternalBundle.set(bundle, internalBundle);

    _bundleToInternalBundleGraph.set(bundle, bundleGraph);

    existingMap.set(internalBundle, bundle);
    return bundle;
  }

  get id() {
    return this.#bundle.id;
  }

  get hashReference() {
    return this.#bundle.hashReference;
  }

  get type() {
    return this.#bundle.type;
  }

  get env() {
    return new _Environment.default(this.#bundle.env, this.#options);
  }

  get needsStableName() {
    return this.#bundle.needsStableName;
  }

  get bundleBehavior() {
    let bundleBehavior = this.#bundle.bundleBehavior;
    return bundleBehavior != null ? _types.BundleBehaviorNames[bundleBehavior] : null;
  }

  get isSplittable() {
    return this.#bundle.isSplittable;
  }

  get target() {
    return new _Target.default(this.#bundle.target, this.#options);
  }

  hasAsset(asset) {
    return this.#bundleGraph.bundleHasAsset(this.#bundle, (0, _Asset.assetToAssetValue)(asset));
  }

  hasDependency(dep) {
    return this.#bundleGraph.bundleHasDependency(this.#bundle, (0, _Dependency.dependencyToInternalDependency)(dep));
  }

  getEntryAssets() {
    return this.#bundle.entryAssetIds.map(id => {
      let assetNode = this.#bundleGraph._graph.getNodeByContentKey(id);

      (0, _assert().default)(assetNode != null && assetNode.type === 'asset');
      return (0, _Asset.assetFromValue)(assetNode.value, this.#options);
    });
  }

  getMainEntry() {
    if (this.#bundle.mainEntryId != null) {
      let assetNode = this.#bundleGraph._graph.getNodeByContentKey(this.#bundle.mainEntryId);

      (0, _assert().default)(assetNode != null && assetNode.type === 'asset');
      return (0, _Asset.assetFromValue)(assetNode.value, this.#options);
    }
  }

  traverse(visit) {
    return this.#bundleGraph.traverseBundle(this.#bundle, (0, _graph().mapVisitor)(node => {
      if (node.type === 'asset') {
        return {
          type: 'asset',
          value: (0, _Asset.assetFromValue)(node.value, this.#options)
        };
      } else if (node.type === 'dependency') {
        return {
          type: 'dependency',
          value: new _Dependency.default(node.value, this.#options)
        };
      }
    }, visit));
  }

  traverseAssets(visit, startAsset) {
    return this.#bundleGraph.traverseAssets(this.#bundle, (0, _graph().mapVisitor)(asset => (0, _Asset.assetFromValue)(asset, this.#options), visit), startAsset ? (0, _Asset.assetToAssetValue)(startAsset) : undefined);
  }

}

exports.Bundle = Bundle;

class NamedBundle extends Bundle {
  #bundle
  /*: InternalBundle */
  ;
  #bundleGraph
  /*: BundleGraph */
  ;
  #options
  /*: ParcelOptions */
  ;

  constructor(sentinel, bundle, bundleGraph, options) {
    super(sentinel, bundle, bundleGraph, options);
    this.#bundle = bundle; // Repeating for flow

    this.#bundleGraph = bundleGraph; // Repeating for flow

    this.#options = options;
  }

  static get(internalBundle, bundleGraph, options) {
    let existingMap = internalBundleToNamedBundle.get(options).get(bundleGraph);
    let existing = existingMap.get(internalBundle);

    if (existing != null) {
      return existing;
    }

    let namedBundle = new NamedBundle(_private, internalBundle, bundleGraph, options);

    _bundleToInternalBundle.set(namedBundle, internalBundle);

    _bundleToInternalBundleGraph.set(namedBundle, bundleGraph);

    existingMap.set(internalBundle, namedBundle);
    return namedBundle;
  }

  get name() {
    return (0, _nullthrows().default)(this.#bundle.name);
  }

  get displayName() {
    return (0, _nullthrows().default)(this.#bundle.displayName);
  }

  get publicId() {
    return (0, _nullthrows().default)(this.#bundle.publicId);
  }

}

exports.NamedBundle = NamedBundle;

class PackagedBundle extends NamedBundle {
  #bundle
  /*: InternalBundle */
  ;
  #bundleGraph
  /*: BundleGraph */
  ;
  #options
  /*: ParcelOptions */
  ;
  #bundleInfo
  /*: ?PackagedBundleInfo */
  ;

  constructor(sentinel, bundle, bundleGraph, options) {
    super(sentinel, bundle, bundleGraph, options);
    this.#bundle = bundle; // Repeating for flow

    this.#bundleGraph = bundleGraph; // Repeating for flow

    this.#options = options; // Repeating for flow
  }

  static get(internalBundle, bundleGraph, options) {
    let existingMap = internalBundleToPackagedBundle.get(options).get(bundleGraph);
    let existing = existingMap.get(internalBundle);

    if (existing != null) {
      return existing;
    }

    let packagedBundle = new PackagedBundle(_private, internalBundle, bundleGraph, options);

    _bundleToInternalBundle.set(packagedBundle, internalBundle);

    _bundleToInternalBundleGraph.set(packagedBundle, bundleGraph);

    existingMap.set(internalBundle, packagedBundle);
    return packagedBundle;
  }

  static getWithInfo(internalBundle, bundleGraph, options, bundleInfo) {
    let packagedBundle = PackagedBundle.get(internalBundle, bundleGraph, options);
    packagedBundle.#bundleInfo = bundleInfo;
    return packagedBundle;
  }

  get filePath() {
    return (0, _projectPath.fromProjectPath)(this.#options.projectRoot, (0, _nullthrows().default)(this.#bundleInfo).filePath);
  }

  get type() {
    // The bundle type may be overridden in the packager.
    // However, inline bundles will not have a bundleInfo here since they are not written to the filesystem.
    return this.#bundleInfo ? this.#bundleInfo.type : this.#bundle.type;
  }

  get stats() {
    return (0, _nullthrows().default)(this.#bundleInfo).stats;
  }

}

exports.PackagedBundle = PackagedBundle;