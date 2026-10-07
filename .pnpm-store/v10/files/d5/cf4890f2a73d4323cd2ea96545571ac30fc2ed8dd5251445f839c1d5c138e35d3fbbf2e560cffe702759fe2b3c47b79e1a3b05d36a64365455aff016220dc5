"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.bundleGraphEdgeTypes = void 0;

var _AssetGraph = require("./AssetGraph");

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

function _hash() {
  const data = require("@parcel/hash");

  _hash = function () {
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

var _types = require("./types");

var _utils2 = require("./utils");

var _Environment = require("./public/Environment");

var _projectPath = require("./projectPath");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bundleGraphEdgeTypes = {
  // A lack of an edge type indicates to follow the edge while traversing
  // the bundle's contents, e.g. `bundle.traverse()` during packaging.
  null: 1,
  // Used for constant-time checks of presence of a dependency or asset in a bundle,
  // avoiding bundle traversal in cases like `isAssetInAncestors`
  contains: 2,
  // Connections between bundles and bundle groups, for quick traversal of the
  // bundle hierarchy.
  bundle: 3,
  // When dependency -> asset: Indicates that the asset a dependency references
  //                           is contained in another bundle.
  // When dependency -> bundle: Indicates the bundle is necessary for any bundles
  //                           with the dependency.
  // When bundle -> bundle:    Indicates the target bundle is necessary for the
  //                           source bundle.
  // This type prevents referenced assets from being traversed from dependencies
  // along the untyped edge, and enables traversal to referenced bundles that are
  // not directly connected to bundle group nodes.
  references: 4,
  // Signals that the dependency is internally resolvable via the bundle's ancestry,
  // and that the bundle connected to the dependency is not necessary for the source bundle.
  internal_async: 5
};
exports.bundleGraphEdgeTypes = bundleGraphEdgeTypes;

function makeReadOnlySet(set) {
  return new Proxy(set, {
    get(target, property) {
      if (property === 'delete' || property === 'add' || property === 'clear') {
        return undefined;
      } else {
        // $FlowFixMe[incompatible-type]
        let value = target[property];
        return typeof value === 'function' ? value.bind(target) : value;
      }
    }

  });
}
/**
 * Stores assets, dependencies, bundle groups, bundles, and the relationships between them.
 * The BundleGraph is passed to the bundler plugin wrapped in a MutableBundleGraph,
 * and is passed to packagers and optimizers wrapped in the public BundleGraph object, both
 * of which implement public api for this structure. This is the internal structure.
 */


class BundleGraph {
  /** A set of all existing concise asset ids present in the BundleGraph */

  /** Maps full asset ids (currently 32-character strings) to concise ids (minimum of 5 character strings) */

  /**
   * A cache of bundle hashes by bundle id.
   *
   * TODO: These hashes are being invalidated in mutative methods, but this._graph is not a private
   * property so it is possible to reach in and mutate the graph without invalidating these hashes.
   * It needs to be exposed in BundlerRunner for now based on how applying runtimes works and the
   * BundlerRunner takes care of invalidating hashes when runtimes are applied, but this is not ideal.
   */
  _targetEntryRoots = new Map();
  /** The internal core Graph structure */

  constructor({
    graph,
    publicIdByAssetId,
    assetPublicIds,
    bundleContentHashes,
    symbolPropagationRan
  }) {
    this._graph = graph;
    this._assetPublicIds = assetPublicIds;
    this._publicIdByAssetId = publicIdByAssetId;
    this._bundleContentHashes = bundleContentHashes;
    this._symbolPropagationRan = symbolPropagationRan;
  }
  /**
   * Produce a BundleGraph from an AssetGraph by removing asset groups and retargeting dependencies
   * based on the symbol data (resolving side-effect free reexports).
   */


  static fromAssetGraph(assetGraph, publicIdByAssetId = new Map(), assetPublicIds = new Set()) {
    let graph = new (_graph().ContentGraph)();
    let assetGroupIds = new Map();
    let dependencies = new Map();
    let assetGraphNodeIdToBundleGraphNodeId = new Map();
    let assetGraphRootNode = assetGraph.rootNodeId != null ? assetGraph.getNode(assetGraph.rootNodeId) : null;
    (0, _assert().default)(assetGraphRootNode != null && assetGraphRootNode.type === 'root');

    for (let [nodeId, node] of assetGraph.nodes) {
      if (node.type === 'asset') {
        let {
          id: assetId
        } = node.value; // Generate a new, short public id for this asset to use.
        // If one already exists, use it.

        let publicId = publicIdByAssetId.get(assetId);

        if (publicId == null) {
          publicId = (0, _utils2.getPublicId)(assetId, existing => assetPublicIds.has(existing));
          publicIdByAssetId.set(assetId, publicId);
          assetPublicIds.add(publicId);
        }
      } else if (node.type === 'asset_group') {
        assetGroupIds.set(nodeId, assetGraph.getNodeIdsConnectedFrom(nodeId));
      }
    }

    let walkVisited = new Set();

    function walk(nodeId) {
      if (walkVisited.has(nodeId)) return;
      walkVisited.add(nodeId);
      let node = (0, _nullthrows().default)(assetGraph.getNode(nodeId));

      if (node.type === 'dependency' && node.value.symbols != null && node.value.env.shouldScopeHoist) {
        // asset -> symbols that should be imported directly from that asset
        let targets = new (_utils().DefaultMap)(() => new Map());
        let externalSymbols = new Set();
        let hasAmbiguousSymbols = false;

        for (let [symbol, resolvedSymbol] of node.usedSymbolsUp) {
          if (resolvedSymbol) {
            var _resolvedSymbol$symbo;

            targets.get(resolvedSymbol.asset).set(symbol, (_resolvedSymbol$symbo = resolvedSymbol.symbol) !== null && _resolvedSymbol$symbo !== void 0 ? _resolvedSymbol$symbo : symbol);
          } else if (resolvedSymbol === null) {
            externalSymbols.add(symbol);
          } else if (resolvedSymbol === undefined) {
            hasAmbiguousSymbols = true;
            break;
          }
        }

        if ( // Only perform retargeting when there is an imported symbol
        // - If the target is side-effect-free, the symbols point to the actual target and removing
        //   the original dependency resolution is fine
        // - Otherwise, keep this dependency unchanged for its potential side effects
        node.usedSymbolsUp.size > 0 && // Only perform retargeting if the dependency only points to a single asset (e.g. CSS modules)
        !hasAmbiguousSymbols && // It doesn't make sense to retarget dependencies where `*` is used, because the
        // retargeting won't enable any benefits in that case (apart from potentially even more
        // code being generated).
        !node.usedSymbolsUp.has('*') && // TODO We currently can't rename imports in async imports, e.g. from
        //      (parcelRequire("...")).then(({ a }) => a);
        // to
        //      (parcelRequire("...")).then(({ a: b }) => a);
        // or
        //      (parcelRequire("...")).then((a)=>a);
        // if the reexporting asset did `export {a as b}` or `export * as a`
        node.value.priority === _types.Priority.sync && // For every asset, no symbol is imported multiple times (with a different local name).
        // Don't retarget because this cannot be resolved without also changing the asset symbols
        // (and the asset content itself).
        [...targets].every(([, t]) => new Set([...t.values()]).size === t.size)) {
          // TODO adjust sourceAssetIdNode.value.dependencies ?
          let deps = [// Keep the original dependency
          {
            asset: null,
            dep: graph.addNodeByContentKey(node.id, { ...node,
              value: { ...node.value,
                symbols: node.value.symbols ? new Map([...node.value.symbols].filter(([k]) => externalSymbols.has(k))) : undefined
              },
              usedSymbolsUp: new Map([...node.usedSymbolsUp].filter(([k]) => externalSymbols.has(k))),
              usedSymbolsDown: new Set(),
              excluded: externalSymbols.size === 0
            })
          }, ...[...targets].map(([asset, target]) => {
            let newNodeId = (0, _hash().hashString)(node.id + [...target.keys()].join(','));
            return {
              asset,
              dep: graph.addNodeByContentKey(newNodeId, { ...node,
                id: newNodeId,
                value: { ...node.value,
                  id: newNodeId,
                  symbols: node.value.symbols ? new Map([...node.value.symbols].filter(([k]) => target.has(k) || k === '*').map(([k, v]) => {
                    var _target$get;

                    return [(_target$get = target.get(k)) !== null && _target$get !== void 0 ? _target$get : k, v];
                  })) : undefined
                },
                usedSymbolsUp: new Map([...node.usedSymbolsUp].filter(([k]) => target.has(k) || k === '*').map(([k, v]) => {
                  var _target$get2;

                  return [(_target$get2 = target.get(k)) !== null && _target$get2 !== void 0 ? _target$get2 : k, v];
                })),
                usedSymbolsDown: new Set()
              })
            };
          })];
          dependencies.set(nodeId, deps); // Jump to the dependencies that are used in this dependency

          for (let id of targets.keys()) {
            walk(assetGraph.getNodeIdByContentKey(id));
          }

          return;
        } else {
          // No special handling
          let bundleGraphNodeId = graph.addNodeByContentKey(node.id, node);
          assetGraphNodeIdToBundleGraphNodeId.set(nodeId, bundleGraphNodeId);
        }
      } // Don't copy over asset groups into the bundle graph.
      else if (node.type !== 'asset_group') {
        let bundleGraphNodeId = graph.addNodeByContentKey(node.id, node);

        if (node.id === (assetGraphRootNode === null || assetGraphRootNode === void 0 ? void 0 : assetGraphRootNode.id)) {
          graph.setRootNodeId(bundleGraphNodeId);
        }

        assetGraphNodeIdToBundleGraphNodeId.set(nodeId, bundleGraphNodeId);
      }

      for (let id of assetGraph.getNodeIdsConnectedFrom(nodeId)) {
        walk(id);
      }
    }

    walk((0, _nullthrows().default)(assetGraph.rootNodeId));

    for (let edge of assetGraph.getAllEdges()) {
      var _ref, _dependencies$get$map, _dependencies$get, _assetGroupIds$get;

      if (assetGroupIds.has(edge.from)) {
        continue;
      }

      if (dependencies.has(edge.from)) {
        // Discard previous edge, insert outgoing edges for all split dependencies
        for (let {
          asset,
          dep
        } of (0, _nullthrows().default)(dependencies.get(edge.from))) {
          if (asset != null) {
            graph.addEdge(dep, (0, _nullthrows().default)(assetGraphNodeIdToBundleGraphNodeId.get(assetGraph.getNodeIdByContentKey(asset))));
          }
        }

        continue;
      }

      if (!assetGraphNodeIdToBundleGraphNodeId.has(edge.from)) {
        continue;
      }

      let to = (_ref = (_dependencies$get$map = (_dependencies$get = dependencies.get(edge.to)) === null || _dependencies$get === void 0 ? void 0 : _dependencies$get.map(v => v.dep)) !== null && _dependencies$get$map !== void 0 ? _dependencies$get$map : (_assetGroupIds$get = assetGroupIds.get(edge.to)) === null || _assetGroupIds$get === void 0 ? void 0 : _assetGroupIds$get.map(id => (0, _nullthrows().default)(assetGraphNodeIdToBundleGraphNodeId.get(id)))) !== null && _ref !== void 0 ? _ref : [(0, _nullthrows().default)(assetGraphNodeIdToBundleGraphNodeId.get(edge.to))];

      for (let t of to) {
        graph.addEdge((0, _nullthrows().default)(assetGraphNodeIdToBundleGraphNodeId.get(edge.from)), t);
      }
    }

    return new BundleGraph({
      graph,
      assetPublicIds,
      bundleContentHashes: new Map(),
      publicIdByAssetId,
      symbolPropagationRan: assetGraph.symbolPropagationRan
    });
  }

  serialize() {
    return {
      $$raw: true,
      graph: this._graph.serialize(),
      assetPublicIds: this._assetPublicIds,
      bundleContentHashes: this._bundleContentHashes,
      publicIdByAssetId: this._publicIdByAssetId,
      symbolPropagationRan: this._symbolPropagationRan
    };
  }

  static deserialize(serialized) {
    return new BundleGraph({
      graph: _graph().ContentGraph.deserialize(serialized.graph),
      assetPublicIds: serialized.assetPublicIds,
      bundleContentHashes: serialized.bundleContentHashes,
      publicIdByAssetId: serialized.publicIdByAssetId,
      symbolPropagationRan: serialized.symbolPropagationRan
    });
  }

  addAssetToBundle(asset, bundle) {
    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);

    this._graph.addEdge(bundleNodeId, this._graph.getNodeIdByContentKey(asset.id), bundleGraphEdgeTypes.contains);

    this._graph.addEdge(bundleNodeId, this._graph.getNodeIdByContentKey(asset.id));

    let dependencies = this.getDependencies(asset);

    for (let dependency of dependencies) {
      let dependencyNodeId = this._graph.getNodeIdByContentKey(dependency.id);

      this._graph.addEdge(bundleNodeId, dependencyNodeId, bundleGraphEdgeTypes.contains);

      for (let [bundleGroupNodeId, bundleGroupNode] of this._graph.getNodeIdsConnectedFrom(dependencyNodeId).map(id => [id, (0, _nullthrows().default)(this._graph.getNode(id))]).filter(([, node]) => node.type === 'bundle_group')) {
        (0, _assert().default)(bundleGroupNode.type === 'bundle_group');

        this._graph.addEdge(bundleNodeId, bundleGroupNodeId, bundleGraphEdgeTypes.bundle);
      } // If the dependency references a target bundle, add a reference edge from
      // the source bundle to the dependency for easy traversal.
      // TODO: Consider bundle being created from dependency


      if (this._graph.getNodeIdsConnectedFrom(dependencyNodeId, bundleGraphEdgeTypes.references).map(id => (0, _nullthrows().default)(this._graph.getNode(id))).some(node => node.type === 'bundle')) {
        this._graph.addEdge(bundleNodeId, dependencyNodeId, bundleGraphEdgeTypes.references);
      }
    }
  }

  addAssetGraphToBundle(asset, bundle, shouldSkipDependency = d => this.isDependencySkipped(d)) {
    let assetNodeId = this._graph.getNodeIdByContentKey(asset.id);

    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id); // The root asset should be reached directly from the bundle in traversal.
    // Its children will be traversed from there.


    this._graph.addEdge(bundleNodeId, assetNodeId);

    this._graph.traverse((nodeId, _, actions) => {
      let node = (0, _nullthrows().default)(this._graph.getNode(nodeId));

      if (node.type === 'bundle_group') {
        actions.skipChildren();
        return;
      }

      if (node.type === 'dependency' && shouldSkipDependency(node.value)) {
        actions.skipChildren();
        return;
      }

      if (node.type === 'asset' || node.type === 'dependency') {
        this._graph.addEdge(bundleNodeId, nodeId, bundleGraphEdgeTypes.contains);
      }

      if (node.type === 'dependency') {
        for (let [bundleGroupNodeId, bundleGroupNode] of this._graph.getNodeIdsConnectedFrom(nodeId).map(id => [id, (0, _nullthrows().default)(this._graph.getNode(id))]).filter(([, node]) => node.type === 'bundle_group')) {
          (0, _assert().default)(bundleGroupNode.type === 'bundle_group');

          this._graph.addEdge(bundleNodeId, bundleGroupNodeId, bundleGraphEdgeTypes.bundle);
        } // If the dependency references a target bundle, add a reference edge from
        // the source bundle to the dependency for easy traversal.


        if (this._graph.getNodeIdsConnectedFrom(nodeId, bundleGraphEdgeTypes.references).map(id => (0, _nullthrows().default)(this._graph.getNode(id))).some(node => node.type === 'bundle')) {
          this._graph.addEdge(bundleNodeId, nodeId, bundleGraphEdgeTypes.references);

          this.markDependencyReferenceable(node.value); //all bundles that have this dependency need to have an edge from bundle to that dependency
        }
      }
    }, assetNodeId);

    this._bundleContentHashes.delete(bundle.id);
  }

  markDependencyReferenceable(dependency) {
    for (let bundle of this.getBundlesWithDependency(dependency)) {
      this._graph.addEdge(this._graph.getNodeIdByContentKey(bundle.id), this._graph.getNodeIdByContentKey(dependency.id), bundleGraphEdgeTypes.references);
    }
  }

  addEntryToBundle(asset, bundle, shouldSkipDependency) {
    this.addAssetGraphToBundle(asset, bundle, shouldSkipDependency);

    if (!bundle.entryAssetIds.includes(asset.id)) {
      bundle.entryAssetIds.push(asset.id);
    }
  }

  internalizeAsyncDependency(bundle, dependency) {
    if (dependency.priority === _types.Priority.sync) {
      throw new Error('Expected an async dependency');
    } // It's possible for internalized async dependencies to not have
    // reference edges and still have untyped edges.
    // TODO: Maybe don't use internalized async edges at all?


    let dependencyNodeId = this._graph.getNodeIdByContentKey(dependency.id);

    let resolved = this.getResolvedAsset(dependency);

    if (resolved) {
      let resolvedNodeId = this._graph.getNodeIdByContentKey(resolved.id);

      if (!this._graph.hasEdge(dependencyNodeId, resolvedNodeId, bundleGraphEdgeTypes.references)) {
        this._graph.addEdge(dependencyNodeId, resolvedNodeId, bundleGraphEdgeTypes.references);

        this._graph.removeEdge(dependencyNodeId, resolvedNodeId);
      }
    }

    this._graph.addEdge(this._graph.getNodeIdByContentKey(bundle.id), this._graph.getNodeIdByContentKey(dependency.id), bundleGraphEdgeTypes.internal_async);

    this._removeExternalDependency(bundle, dependency);
  }

  isDependencySkipped(dependency) {
    let node = this._graph.getNodeByContentKey(dependency.id);

    (0, _assert().default)(node && node.type === 'dependency');
    return !!node.hasDeferred || node.excluded;
  }

  getParentBundlesOfBundleGroup(bundleGroup) {
    return this._graph.getNodeIdsConnectedTo(this._graph.getNodeIdByContentKey((0, _utils2.getBundleGroupId)(bundleGroup)), bundleGraphEdgeTypes.bundle).map(id => (0, _nullthrows().default)(this._graph.getNode(id))).filter(node => node.type === 'bundle').map(node => {
      (0, _assert().default)(node.type === 'bundle');
      return node.value;
    });
  }

  resolveAsyncDependency(dependency, bundle) {
    let depNodeId = this._graph.getNodeIdByContentKey(dependency.id);

    let bundleNodeId = bundle != null ? this._graph.getNodeIdByContentKey(bundle.id) : null;

    if (bundleNodeId != null && this._graph.hasEdge(bundleNodeId, depNodeId, bundleGraphEdgeTypes.internal_async)) {
      let referencedAssetNodeIds = this._graph.getNodeIdsConnectedFrom(depNodeId, bundleGraphEdgeTypes.references);

      let resolved;

      if (referencedAssetNodeIds.length === 0) {
        resolved = this.getResolvedAsset(dependency, bundle);
      } else if (referencedAssetNodeIds.length === 1) {
        let referencedAssetNode = this._graph.getNode(referencedAssetNodeIds[0]); // If a referenced asset already exists, resolve this dependency to it.


        (0, _assert().default)((referencedAssetNode === null || referencedAssetNode === void 0 ? void 0 : referencedAssetNode.type) === 'asset');
        resolved = referencedAssetNode.value;
      } else {
        throw new Error('Dependencies can only reference one asset');
      }

      if (resolved == null) {
        return;
      } else {
        return {
          type: 'asset',
          value: resolved
        };
      }
    }

    let node = this._graph.getNodeIdsConnectedFrom(this._graph.getNodeIdByContentKey(dependency.id)).map(id => (0, _nullthrows().default)(this._graph.getNode(id))).find(node => node.type === 'bundle_group');

    if (node == null) {
      return;
    }

    (0, _assert().default)(node.type === 'bundle_group');
    return {
      type: 'bundle_group',
      value: node.value
    };
  } // eslint-disable-next-line no-unused-vars


  getReferencedBundle(dependency) {
    let dependencyNodeId = this._graph.getNodeIdByContentKey(dependency.id); // If this dependency is async, there will be a bundle group attached to it.


    let node = this._graph.getNodeIdsConnectedFrom(dependencyNodeId).map(id => (0, _nullthrows().default)(this._graph.getNode(id))).find(node => node.type === 'bundle_group');

    if (node != null) {
      (0, _assert().default)(node.type === 'bundle_group');
      return this.getBundlesInBundleGroup(node.value, {
        includeInline: true
      }).find(b => {
        let mainEntryId = b.entryAssetIds[b.entryAssetIds.length - 1];
        return mainEntryId != null && node.value.entryAssetId === mainEntryId;
      });
    } // Otherwise, find an attached bundle via a reference edge (e.g. from createAssetReference).


    let bundleNode = this._graph.getNodeIdsConnectedFrom(dependencyNodeId, bundleGraphEdgeTypes.references).map(id => (0, _nullthrows().default)(this._graph.getNode(id))).find(node => node.type === 'bundle');

    if (bundleNode) {
      (0, _assert().default)(bundleNode.type === 'bundle');
      return bundleNode.value;
    }
  }

  removeAssetGraphFromBundle(asset, bundle) {
    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);

    let assetNodeId = this._graph.getNodeIdByContentKey(asset.id); // Remove all contains edges from the bundle to the nodes in the asset's
    // subgraph.


    this._graph.traverse((nodeId, context, actions) => {
      let node = (0, _nullthrows().default)(this._graph.getNode(nodeId));

      if (node.type === 'bundle_group') {
        actions.skipChildren();
        return;
      }

      if (node.type !== 'dependency' && node.type !== 'asset') {
        return;
      }

      if (this._graph.hasEdge(bundleNodeId, nodeId, bundleGraphEdgeTypes.contains)) {
        this._graph.removeEdge(bundleNodeId, nodeId, bundleGraphEdgeTypes.contains, // Removing this contains edge should not orphan the connected node. This
        // is disabled for performance reasons as these edges are removed as part
        // of a traversal, and checking for orphans becomes quite expensive in
        // aggregate.
        false
        /* removeOrphans */
        );
      } else {
        actions.skipChildren();
      }

      if (node.type === 'asset' && this._graph.hasEdge(bundleNodeId, nodeId)) {
        // Remove the untyped edge from the bundle to the node (it's an entry)
        this._graph.removeEdge(bundleNodeId, nodeId);

        let entryIndex = bundle.entryAssetIds.indexOf(node.value.id);

        if (entryIndex >= 0) {
          // Shared bundles have untyped edges to their asset graphs but don't
          // have entry assets. For those that have entry asset ids, remove them.
          bundle.entryAssetIds.splice(entryIndex, 1);
        }
      }

      if (node.type === 'dependency') {
        this._removeExternalDependency(bundle, node.value);

        if (this._graph.hasEdge(bundleNodeId, nodeId, bundleGraphEdgeTypes.references)) {
          this._graph.addEdge(bundleNodeId, nodeId, bundleGraphEdgeTypes.references);

          this.markDependencyReferenceable(node.value);
        }

        if (this._graph.hasEdge(bundleNodeId, nodeId, bundleGraphEdgeTypes.internal_async)) {
          this._graph.removeEdge(bundleNodeId, nodeId, bundleGraphEdgeTypes.internal_async);
        }
      }
    }, assetNodeId); // Remove bundle node if it no longer has any entry assets


    if (this._graph.getNodeIdsConnectedFrom(bundleNodeId).length === 0) {
      this.removeBundle(bundle);
    }

    this._bundleContentHashes.delete(bundle.id);
  }
  /**
   * Remove a bundle from the bundle graph. Remove its bundle group if it is
   * the only bundle in the group.
   */


  removeBundle(bundle) {
    // Remove bundle node if it no longer has any entry assets
    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);

    let bundleGroupNodeIds = this._graph.getNodeIdsConnectedTo(bundleNodeId, bundleGraphEdgeTypes.bundle);

    this._graph.removeNode(bundleNodeId);

    let removedBundleGroups = new Set(); // Remove bundle group node if it no longer has any bundles

    for (let bundleGroupNodeId of bundleGroupNodeIds) {
      let bundleGroupNode = (0, _nullthrows().default)(this._graph.getNode(bundleGroupNodeId));
      (0, _assert().default)(bundleGroupNode.type === 'bundle_group');
      let bundleGroup = bundleGroupNode.value;

      if ( // If the bundle group's entry asset belongs to this bundle, the group
      // was created because of this bundle. Remove the group.
      bundle.entryAssetIds.includes(bundleGroup.entryAssetId) || // If the bundle group is now empty, remove it.
      this.getBundlesInBundleGroup(bundleGroup, {
        includeInline: true
      }).length === 0) {
        removedBundleGroups.add(bundleGroup);
        this.removeBundleGroup(bundleGroup);
      }
    }

    this._bundleContentHashes.delete(bundle.id);

    return removedBundleGroups;
  }

  removeBundleGroup(bundleGroup) {
    let bundleGroupNode = (0, _nullthrows().default)(this._graph.getNodeByContentKey((0, _utils2.getBundleGroupId)(bundleGroup)));
    (0, _assert().default)(bundleGroupNode.type === 'bundle_group');
    let bundlesInGroup = this.getBundlesInBundleGroup(bundleGroupNode.value, {
      includeInline: true
    });

    for (let bundle of bundlesInGroup) {
      if (this.getBundleGroupsContainingBundle(bundle).length === 1) {
        let removedBundleGroups = this.removeBundle(bundle);

        if (removedBundleGroups.has(bundleGroup)) {
          // This function can be reentered through removeBundle above. In the case this
          // bundle group has already been removed, stop.
          return;
        }
      }
    } // This function can be reentered through removeBundle above. In this case,
    // the node may already been removed.


    if (this._graph.hasContentKey(bundleGroupNode.id)) {
      this._graph.removeNode(this._graph.getNodeIdByContentKey(bundleGroupNode.id));
    }

    (0, _assert().default)(bundlesInGroup.every(bundle => this.getBundleGroupsContainingBundle(bundle).length > 0));
  }

  _removeExternalDependency(bundle, dependency) {
    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);

    for (let bundleGroupNode of this._graph.getNodeIdsConnectedFrom(this._graph.getNodeIdByContentKey(dependency.id)).map(id => (0, _nullthrows().default)(this._graph.getNode(id))).filter(node => node.type === 'bundle_group')) {
      let bundleGroupNodeId = this._graph.getNodeIdByContentKey(bundleGroupNode.id);

      if (!this._graph.hasEdge(bundleNodeId, bundleGroupNodeId, bundleGraphEdgeTypes.bundle)) {
        continue;
      }

      let inboundDependencies = this._graph.getNodeIdsConnectedTo(bundleGroupNodeId).map(id => (0, _nullthrows().default)(this._graph.getNode(id))).filter(node => node.type === 'dependency').map(node => {
        (0, _assert().default)(node.type === 'dependency');
        return node.value;
      }); // If every inbound dependency to this bundle group does not belong to this bundle,
      // or the dependency is internal to the bundle, then the connection between
      // this bundle and the group is safe to remove.


      if (inboundDependencies.every(dependency => dependency.specifierType !== _types.SpecifierType.url && (!this.bundleHasDependency(bundle, dependency) || this._graph.hasEdge(bundleNodeId, this._graph.getNodeIdByContentKey(dependency.id), bundleGraphEdgeTypes.internal_async)))) {
        this._graph.removeEdge(bundleNodeId, bundleGroupNodeId, bundleGraphEdgeTypes.bundle);
      }
    }
  }

  createAssetReference(dependency, asset, bundle) {
    let dependencyId = this._graph.getNodeIdByContentKey(dependency.id);

    let assetId = this._graph.getNodeIdByContentKey(asset.id);

    let bundleId = this._graph.getNodeIdByContentKey(bundle.id);

    this._graph.addEdge(dependencyId, assetId, bundleGraphEdgeTypes.references);

    this._graph.addEdge(dependencyId, bundleId, bundleGraphEdgeTypes.references);

    this.markDependencyReferenceable(dependency);

    if (this._graph.hasEdge(dependencyId, assetId)) {
      this._graph.removeEdge(dependencyId, assetId);
    }
  }

  createBundleReference(from, to) {
    this._graph.addEdge(this._graph.getNodeIdByContentKey(from.id), this._graph.getNodeIdByContentKey(to.id), bundleGraphEdgeTypes.references);
  }

  getBundlesWithAsset(asset) {
    return this._graph.getNodeIdsConnectedTo(this._graph.getNodeIdByContentKey(asset.id), bundleGraphEdgeTypes.contains).map(id => (0, _nullthrows().default)(this._graph.getNode(id))).filter(node => node.type === 'bundle').map(node => {
      (0, _assert().default)(node.type === 'bundle');
      return node.value;
    });
  }

  getBundlesWithDependency(dependency) {
    return this._graph.getNodeIdsConnectedTo((0, _nullthrows().default)(this._graph.getNodeIdByContentKey(dependency.id)), bundleGraphEdgeTypes.contains).map(id => (0, _nullthrows().default)(this._graph.getNode(id))).filter(node => node.type === 'bundle').map(node => {
      (0, _assert().default)(node.type === 'bundle');
      return node.value;
    });
  }

  getDependencyAssets(dependency) {
    return this._graph.getNodeIdsConnectedFrom(this._graph.getNodeIdByContentKey(dependency.id)).map(id => (0, _nullthrows().default)(this._graph.getNode(id))).filter(node => node.type === 'asset').map(node => {
      (0, _assert().default)(node.type === 'asset');
      return node.value;
    });
  }

  getResolvedAsset(dep, bundle) {
    let assets = this.getDependencyAssets(dep);
    let firstAsset = assets[0];
    let resolved = // If no bundle is specified, use the first concrete asset.
    bundle == null ? firstAsset : // Otherwise, find the first asset that belongs to this bundle.
    assets.find(asset => this.bundleHasAsset(bundle, asset)) || firstAsset; // If a resolution still hasn't been found, return the first referenced asset.

    if (resolved == null) {
      this._graph.traverse((nodeId, _, traversal) => {
        let node = (0, _nullthrows().default)(this._graph.getNode(nodeId));

        if (node.type === 'asset') {
          resolved = node.value;
          traversal.stop();
        } else if (node.id !== dep.id) {
          traversal.skipChildren();
        }
      }, this._graph.getNodeIdByContentKey(dep.id), bundleGraphEdgeTypes.references);
    }

    return resolved;
  }

  getDependencies(asset) {
    let nodeId = this._graph.getNodeIdByContentKey(asset.id);

    return this._graph.getNodeIdsConnectedFrom(nodeId).map(id => {
      let node = (0, _nullthrows().default)(this._graph.getNode(id));
      (0, _assert().default)(node.type === 'dependency');
      return node.value;
    });
  }

  traverseAssets(bundle, visit, startAsset) {
    return this.traverseBundle(bundle, (0, _graph().mapVisitor)(node => node.type === 'asset' ? node.value : null, visit), startAsset);
  }

  isAssetReferenced(bundle, asset) {
    let assetNodeId = (0, _nullthrows().default)(this._graph.getNodeIdByContentKey(asset.id));

    if (this._graph.getNodeIdsConnectedTo(assetNodeId, bundleGraphEdgeTypes.references).map(id => this._graph.getNode(id)).some(node => (node === null || node === void 0 ? void 0 : node.type) === 'dependency' && node.value.priority === _types.Priority.lazy && node.value.specifierType !== _types.SpecifierType.url)) {
      // If this asset is referenced by any async dependency, it's referenced.
      return true;
    }

    let dependencies = this._graph.getNodeIdsConnectedTo(assetNodeId).map(id => (0, _nullthrows().default)(this._graph.getNode(id))).filter(node => node.type === 'dependency').map(node => {
      (0, _assert().default)(node.type === 'dependency');
      return node.value;
    });

    const bundleHasReference = bundle => {
      return !this.bundleHasAsset(bundle, asset) && dependencies.some(dependency => this.bundleHasDependency(bundle, dependency));
    };

    let visitedBundles = new Set();
    let siblingBundles = new Set(this.getBundleGroupsContainingBundle(bundle).flatMap(bundleGroup => this.getBundlesInBundleGroup(bundleGroup, {
      includeInline: true
    }))); // Check if any of this bundle's descendants, referencers, bundles referenced
    // by referencers, or descendants of its referencers use the asset without
    // an explicit reference edge. This can happen if e.g. the asset has been
    // deduplicated.

    return [...siblingBundles].some(referencer => {
      let isReferenced = false;
      this.traverseBundles((descendant, _, actions) => {
        if (descendant.id === bundle.id) {
          return;
        }

        if (visitedBundles.has(descendant)) {
          actions.skipChildren();
          return;
        }

        visitedBundles.add(descendant);

        if (descendant.type !== bundle.type || descendant.env.context !== bundle.env.context) {
          actions.skipChildren();
          return;
        }

        if (bundleHasReference(descendant)) {
          isReferenced = true;
          actions.stop();
        }
      }, referencer);
      return isReferenced;
    });
  }

  hasParentBundleOfType(bundle, type) {
    let parents = this.getParentBundles(bundle);
    return parents.length > 0 && parents.every(parent => parent.type === type);
  }

  getParentBundles(bundle) {
    let parentBundles = new Set();

    for (let bundleGroup of this.getBundleGroupsContainingBundle(bundle)) {
      for (let parentBundle of this.getParentBundlesOfBundleGroup(bundleGroup)) {
        parentBundles.add(parentBundle);
      }
    }

    return [...parentBundles];
  }

  isAssetReachableFromBundle(asset, bundle) {
    // If a bundle's environment is isolated, it can't access assets present
    // in any ancestor bundles. Don't consider any assets reachable.
    if (_Environment.ISOLATED_ENVS.has(bundle.env.context) || !bundle.isSplittable || bundle.bundleBehavior === _types.BundleBehavior.isolated || bundle.bundleBehavior === _types.BundleBehavior.inline) {
      return false;
    } // For an asset to be reachable from a bundle, it must either exist in a sibling bundle,
    // or in an ancestor bundle group reachable from all parent bundles.


    let bundleGroups = this.getBundleGroupsContainingBundle(bundle);
    return bundleGroups.every(bundleGroup => {
      // If the asset is in any sibling bundles of the original bundle, it is reachable.
      let bundles = this.getBundlesInBundleGroup(bundleGroup);

      if (bundles.some(b => b.id !== bundle.id && b.bundleBehavior !== _types.BundleBehavior.isolated && b.bundleBehavior !== _types.BundleBehavior.inline && this.bundleHasAsset(b, asset))) {
        return true;
      } // Get a list of parent bundle nodes pointing to the bundle group


      let parentBundleNodes = this._graph.getNodeIdsConnectedTo(this._graph.getNodeIdByContentKey((0, _utils2.getBundleGroupId)(bundleGroup)), bundleGraphEdgeTypes.bundle); // Check that every parent bundle has a bundle group in its ancestry that contains the asset.


      return parentBundleNodes.every(bundleNodeId => {
        let bundleNode = (0, _nullthrows().default)(this._graph.getNode(bundleNodeId));

        if (bundleNode.type !== 'bundle' || bundleNode.value.bundleBehavior === _types.BundleBehavior.isolated || bundleNode.value.bundleBehavior === _types.BundleBehavior.inline) {
          return false;
        }

        let isReachable = true;

        this._graph.traverseAncestors(bundleNodeId, (nodeId, ctx, actions) => {
          let node = (0, _nullthrows().default)(this._graph.getNode(nodeId)); // If we've reached the root or a context change without
          // finding this asset in the ancestry, it is not reachable.

          if (node.type === 'root' || node.type === 'bundle' && (node.value.id === bundle.id || node.value.env.context !== bundle.env.context)) {
            isReachable = false;
            actions.stop();
            return;
          }

          if (node.type === 'bundle_group') {
            let childBundles = this.getBundlesInBundleGroup(node.value);

            if (childBundles.some(b => b.id !== bundle.id && b.bundleBehavior !== _types.BundleBehavior.isolated && b.bundleBehavior !== _types.BundleBehavior.inline && this.bundleHasAsset(b, asset))) {
              actions.skipChildren();
            }
          }
        }, [bundleGraphEdgeTypes.references, bundleGraphEdgeTypes.bundle]);

        return isReachable;
      });
    });
  }

  traverseBundle(bundle, visit, startAsset) {
    let entries = !startAsset;

    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id); // A modified DFS traversal which traverses entry assets in the same order
    // as their ids appear in `bundle.entryAssetIds`.


    return this._graph.dfs({
      visit: (0, _graph().mapVisitor)((nodeId, actions) => {
        let node = (0, _nullthrows().default)(this._graph.getNode(nodeId));

        if (nodeId === bundleNodeId) {
          return;
        }

        if (node.type === 'dependency' || node.type === 'asset') {
          if (this._graph.hasEdge(bundleNodeId, nodeId, bundleGraphEdgeTypes.contains)) {
            return node;
          }
        }

        actions.skipChildren();
      }, visit),
      startNodeId: startAsset ? this._graph.getNodeIdByContentKey(startAsset.id) : bundleNodeId,
      getChildren: nodeId => {
        let children = this._graph.getNodeIdsConnectedFrom(nodeId).map(id => [id, (0, _nullthrows().default)(this._graph.getNode(id))]);

        let sorted = entries && bundle.entryAssetIds.length > 0 ? children.sort(([, a], [, b]) => {
          let aIndex = bundle.entryAssetIds.indexOf(a.id);
          let bIndex = bundle.entryAssetIds.indexOf(b.id);

          if (aIndex === bIndex) {
            // If both don't exist in the entry asset list, or
            // otherwise have the same index.
            return 0;
          } else if (aIndex === -1) {
            return 1;
          } else if (bIndex === -1) {
            return -1;
          }

          return aIndex - bIndex;
        }) : children;
        entries = false;
        return sorted.map(([id]) => id);
      }
    });
  }

  traverse(visit, start) {
    return this._graph.filteredTraverse(nodeId => {
      let node = (0, _nullthrows().default)(this._graph.getNode(nodeId));

      if (node.type === 'asset' || node.type === 'dependency') {
        return node;
      }
    }, visit, start ? this._graph.getNodeIdByContentKey(start.id) : undefined, // start with root
    _graph().ALL_EDGE_TYPES);
  }

  getChildBundles(bundle) {
    let siblings = new Set(this.getReferencedBundles(bundle));
    let bundles = [];
    this.traverseBundles((b, _, actions) => {
      if (bundle.id === b.id) {
        return;
      }

      if (!siblings.has(b)) {
        bundles.push(b);
      }

      actions.skipChildren();
    }, bundle);
    return bundles;
  }

  traverseBundles(visit, startBundle) {
    return this._graph.filteredTraverse(nodeId => {
      let node = (0, _nullthrows().default)(this._graph.getNode(nodeId));
      return node.type === 'bundle' ? node.value : null;
    }, visit, startBundle ? this._graph.getNodeIdByContentKey(startBundle.id) : null, [bundleGraphEdgeTypes.bundle, bundleGraphEdgeTypes.references]);
  }

  getBundles(opts) {
    let bundles = [];
    this.traverseBundles(bundle => {
      if (opts !== null && opts !== void 0 && opts.includeInline || bundle.bundleBehavior !== _types.BundleBehavior.inline) {
        bundles.push(bundle);
      }
    });
    return bundles;
  }

  getTotalSize(asset) {
    let size = 0;

    this._graph.traverse((nodeId, _, actions) => {
      let node = (0, _nullthrows().default)(this._graph.getNode(nodeId));

      if (node.type === 'bundle_group') {
        actions.skipChildren();
        return;
      }

      if (node.type === 'asset') {
        size += node.value.stats.size;
      }
    }, this._graph.getNodeIdByContentKey(asset.id));

    return size;
  }

  getReferencingBundles(bundle) {
    let referencingBundles = new Set();

    this._graph.traverseAncestors(this._graph.getNodeIdByContentKey(bundle.id), nodeId => {
      let node = (0, _nullthrows().default)(this._graph.getNode(nodeId));

      if (node.type === 'bundle' && node.value.id !== bundle.id) {
        referencingBundles.add(node.value);
      }
    }, bundleGraphEdgeTypes.references);

    return [...referencingBundles];
  }

  getBundleGroupsContainingBundle(bundle) {
    let bundleGroups = new Set();

    for (let currentBundle of [bundle, ...this.getReferencingBundles(bundle)]) {
      for (let bundleGroup of this.getDirectParentBundleGroups(currentBundle)) {
        bundleGroups.add(bundleGroup);
      }
    }

    return [...bundleGroups];
  }

  getDirectParentBundleGroups(bundle) {
    return this._graph.getNodeIdsConnectedTo((0, _nullthrows().default)(this._graph.getNodeIdByContentKey(bundle.id)), bundleGraphEdgeTypes.bundle).map(id => (0, _nullthrows().default)(this._graph.getNode(id))).filter(node => node.type === 'bundle_group').map(node => {
      (0, _assert().default)(node.type === 'bundle_group');
      return node.value;
    });
  }

  getBundlesInBundleGroup(bundleGroup, opts) {
    let bundles = new Set();

    for (let bundleNodeId of this._graph.getNodeIdsConnectedFrom(this._graph.getNodeIdByContentKey((0, _utils2.getBundleGroupId)(bundleGroup)), bundleGraphEdgeTypes.bundle)) {
      let bundleNode = (0, _nullthrows().default)(this._graph.getNode(bundleNodeId));
      (0, _assert().default)(bundleNode.type === 'bundle');
      let bundle = bundleNode.value;

      if (opts !== null && opts !== void 0 && opts.includeInline || bundle.bundleBehavior !== _types.BundleBehavior.inline) {
        bundles.add(bundle);
      }

      for (let referencedBundle of this.getReferencedBundles(bundle, {
        includeInline: true
      })) {
        bundles.add(referencedBundle);
      }
    }

    return [...bundles];
  }

  getReferencedBundles(bundle, opts) {
    var _opts$recursive, _opts$includeInline;

    let recursive = (_opts$recursive = opts === null || opts === void 0 ? void 0 : opts.recursive) !== null && _opts$recursive !== void 0 ? _opts$recursive : true;
    let includeInline = (_opts$includeInline = opts === null || opts === void 0 ? void 0 : opts.includeInline) !== null && _opts$includeInline !== void 0 ? _opts$includeInline : false;
    let referencedBundles = new Set();

    this._graph.dfs({
      visit: (nodeId, _, actions) => {
        let node = (0, _nullthrows().default)(this._graph.getNode(nodeId));

        if (node.type !== 'bundle') {
          return;
        }

        if (node.value.id === bundle.id) {
          return;
        }

        if (includeInline || node.value.bundleBehavior !== _types.BundleBehavior.inline) {
          referencedBundles.add(node.value);
        }

        if (!recursive) {
          actions.skipChildren();
        }
      },
      startNodeId: this._graph.getNodeIdByContentKey(bundle.id),
      getChildren: nodeId => // Shared bundles seem to depend on being used in the opposite order
      // they were added.
      // TODO: Should this be the case?
      this._graph.getNodeIdsConnectedFrom(nodeId, bundleGraphEdgeTypes.references)
    });

    return [...referencedBundles];
  }

  getIncomingDependencies(asset) {
    if (!this._graph.hasContentKey(asset.id)) {
      return [];
    } // Dependencies can be a a parent node via an untyped edge (like in the AssetGraph but without AssetGroups)
    // or they can be parent nodes via a 'references' edge


    return this._graph.getNodeIdsConnectedTo(this._graph.getNodeIdByContentKey(asset.id), _graph().ALL_EDGE_TYPES).map(id => (0, _nullthrows().default)(this._graph.getNode(id))).filter(n => n.type === 'dependency').map(n => {
      (0, _assert().default)(n.type === 'dependency');
      return n.value;
    });
  }

  getAssetWithDependency(dep) {
    if (!this._graph.hasContentKey(dep.id)) {
      return null;
    }

    let res = this._graph.getNodeIdsConnectedTo(this._graph.getNodeIdByContentKey(dep.id));

    (0, _assert().default)(res.length <= 1, 'Expected a single asset to be connected to a dependency');

    let resNode = this._graph.getNode(res[0]);

    if ((resNode === null || resNode === void 0 ? void 0 : resNode.type) === 'asset') {
      return resNode.value;
    }
  }

  bundleHasAsset(bundle, asset) {
    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);

    let assetNodeId = this._graph.getNodeIdByContentKey(asset.id);

    return this._graph.hasEdge(bundleNodeId, assetNodeId, bundleGraphEdgeTypes.contains);
  }

  bundleHasDependency(bundle, dependency) {
    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);

    let dependencyNodeId = this._graph.getNodeIdByContentKey(dependency.id);

    return this._graph.hasEdge(bundleNodeId, dependencyNodeId, bundleGraphEdgeTypes.contains);
  }

  filteredTraverse(bundleNodeId, filter, visit) {
    return this._graph.filteredTraverse(filter, visit, bundleNodeId);
  }

  getSymbolResolution(asset, symbol, boundary) {
    var _asset$symbols, _asset$symbols$get;

    let assetOutside = boundary && !this.bundleHasAsset(boundary, asset);
    let identifier = (_asset$symbols = asset.symbols) === null || _asset$symbols === void 0 ? void 0 : (_asset$symbols$get = _asset$symbols.get(symbol)) === null || _asset$symbols$get === void 0 ? void 0 : _asset$symbols$get.local;

    if (symbol === '*') {
      var _asset$symbols2, _asset$symbols2$get;

      return {
        asset,
        exportSymbol: '*',
        symbol: identifier !== null && identifier !== void 0 ? identifier : null,
        loc: (_asset$symbols2 = asset.symbols) === null || _asset$symbols2 === void 0 ? void 0 : (_asset$symbols2$get = _asset$symbols2.get(symbol)) === null || _asset$symbols2$get === void 0 ? void 0 : _asset$symbols2$get.loc
      };
    }

    let found = false;
    let nonStaticDependency = false;
    let skipped = false;
    let deps = this.getDependencies(asset).reverse();
    let potentialResults = [];

    for (let dep of deps) {
      var _depSymbols$get;

      let depSymbols = dep.symbols;

      if (!depSymbols) {
        nonStaticDependency = true;
        continue;
      } // If this is a re-export, find the original module.


      let symbolLookup = new Map([...depSymbols].map(([key, val]) => [val.local, key]));
      let depSymbol = symbolLookup.get(identifier);

      if (depSymbol != null) {
        let resolved = this.getResolvedAsset(dep);

        if (!resolved || resolved.id === asset.id) {
          var _asset$symbols3, _asset$symbols3$get;

          // External module or self-reference
          return {
            asset,
            exportSymbol: symbol,
            symbol: identifier,
            loc: (_asset$symbols3 = asset.symbols) === null || _asset$symbols3 === void 0 ? void 0 : (_asset$symbols3$get = _asset$symbols3.get(symbol)) === null || _asset$symbols3$get === void 0 ? void 0 : _asset$symbols3$get.loc
          };
        }

        if (assetOutside) {
          // We found the symbol, but `asset` is outside, return `asset` and the original symbol
          found = true;
          break;
        }

        if (this.isDependencySkipped(dep)) {
          // We found the symbol and `dep` was skipped
          skipped = true;
          break;
        }

        let {
          asset: resolvedAsset,
          symbol: resolvedSymbol,
          exportSymbol,
          loc
        } = this.getSymbolResolution(resolved, depSymbol, boundary);

        if (!loc) {
          var _asset$symbols4, _asset$symbols4$get;

          // Remember how we got there
          loc = (_asset$symbols4 = asset.symbols) === null || _asset$symbols4 === void 0 ? void 0 : (_asset$symbols4$get = _asset$symbols4.get(symbol)) === null || _asset$symbols4$get === void 0 ? void 0 : _asset$symbols4$get.loc;
        }

        return {
          asset: resolvedAsset,
          symbol: resolvedSymbol,
          exportSymbol,
          loc
        };
      } // If this module exports wildcards, resolve the original module.
      // Default exports are excluded from wildcard exports.
      // Wildcard reexports are never listed in the reexporting asset's symbols.


      if (identifier == null && ((_depSymbols$get = depSymbols.get('*')) === null || _depSymbols$get === void 0 ? void 0 : _depSymbols$get.local) === '*' && symbol !== 'default') {
        let resolved = this.getResolvedAsset(dep);

        if (!resolved) {
          continue;
        }

        let result = this.getSymbolResolution(resolved, symbol, boundary); // We found the symbol

        if (result.symbol != undefined) {
          var _resolved$symbols, _resolved$symbols$get;

          if (assetOutside) {
            // ..., but `asset` is outside, return `asset` and the original symbol
            found = true;
            break;
          }

          if (this.isDependencySkipped(dep)) {
            // We found the symbol and `dep` was skipped
            skipped = true;
            break;
          }

          return {
            asset: result.asset,
            symbol: result.symbol,
            exportSymbol: result.exportSymbol,
            loc: (_resolved$symbols = resolved.symbols) === null || _resolved$symbols === void 0 ? void 0 : (_resolved$symbols$get = _resolved$symbols.get(symbol)) === null || _resolved$symbols$get === void 0 ? void 0 : _resolved$symbols$get.loc
          };
        }

        if (result.symbol === null) {
          found = true;

          if (boundary && !this.bundleHasAsset(boundary, result.asset)) {
            // If the returned asset is outside (and it's the first asset that is outside), return it.
            if (!assetOutside) {
              var _resolved$symbols2, _resolved$symbols2$ge;

              return {
                asset: result.asset,
                symbol: result.symbol,
                exportSymbol: result.exportSymbol,
                loc: (_resolved$symbols2 = resolved.symbols) === null || _resolved$symbols2 === void 0 ? void 0 : (_resolved$symbols2$ge = _resolved$symbols2.get(symbol)) === null || _resolved$symbols2$ge === void 0 ? void 0 : _resolved$symbols2$ge.loc
              };
            } else {
              // Otherwise the original asset will be returned at the end.
              break;
            }
          } else {
            var _resolved$symbols3, _resolved$symbols3$ge;

            // We didn't find it in this dependency, but it might still be there: bailout.
            // Continue searching though, with the assumption that there are no conficting reexports
            // and there might be a another (re)export (where we might statically find the symbol).
            potentialResults.push({
              asset: result.asset,
              symbol: result.symbol,
              exportSymbol: result.exportSymbol,
              loc: (_resolved$symbols3 = resolved.symbols) === null || _resolved$symbols3 === void 0 ? void 0 : (_resolved$symbols3$ge = _resolved$symbols3.get(symbol)) === null || _resolved$symbols3$ge === void 0 ? void 0 : _resolved$symbols3$ge.loc
            });
          }
        }
      }
    } // We didn't find the exact symbol...


    if (potentialResults.length == 1) {
      // ..., but if it does exist, it has to be behind this one reexport.
      return potentialResults[0];
    } else {
      var _asset$symbols6, _asset$symbols6$get;

      let result = identifier;

      if (skipped) {
        // ... and it was excluded (by symbol propagation) or deferred.
        result = false;
      } else {
        // ... and there is no single reexport, but it might still be exported:
        if (found) {
          // Fallback to namespace access, because of a bundle boundary.
          result = null;
        } else if (result === undefined) {
          var _asset$symbols5;

          // If not exported explicitly by the asset (= would have to be in * or a reexport-all) ...
          if (nonStaticDependency || (_asset$symbols5 = asset.symbols) !== null && _asset$symbols5 !== void 0 && _asset$symbols5.has('*')) {
            // ... and if there are non-statically analyzable dependencies or it's a CJS asset,
            // fallback to namespace access.
            result = null;
          } // (It shouldn't be possible for the symbol to be in a reexport-all and to end up here).
          // Otherwise return undefined to report that the symbol wasn't found.

        }
      }

      return {
        asset,
        exportSymbol: symbol,
        symbol: result,
        loc: (_asset$symbols6 = asset.symbols) === null || _asset$symbols6 === void 0 ? void 0 : (_asset$symbols6$get = _asset$symbols6.get(symbol)) === null || _asset$symbols6$get === void 0 ? void 0 : _asset$symbols6$get.loc
      };
    }
  }

  getAssetById(contentKey) {
    let node = this._graph.getNodeByContentKey(contentKey);

    if (node == null) {
      throw new Error('Node not found');
    } else if (node.type !== 'asset') {
      throw new Error('Node was not an asset');
    }

    return node.value;
  }

  getAssetPublicId(asset) {
    let publicId = this._publicIdByAssetId.get(asset.id);

    if (publicId == null) {
      throw new Error("Asset or it's public id not found");
    }

    return publicId;
  }

  getExportedSymbols(asset, boundary) {
    if (!asset.symbols) {
      return [];
    }

    let symbols = [];

    for (let symbol of asset.symbols.keys()) {
      symbols.push({ ...this.getSymbolResolution(asset, symbol, boundary),
        exportAs: symbol
      });
    }

    let deps = this.getDependencies(asset);

    for (let dep of deps) {
      var _depSymbols$get2;

      let depSymbols = dep.symbols;
      if (!depSymbols) continue;

      if (((_depSymbols$get2 = depSymbols.get('*')) === null || _depSymbols$get2 === void 0 ? void 0 : _depSymbols$get2.local) === '*') {
        let resolved = this.getResolvedAsset(dep);
        if (!resolved) continue;
        let exported = this.getExportedSymbols(resolved, boundary).filter(s => s.exportSymbol !== 'default').map(s => s.exportSymbol !== '*' ? { ...s,
          exportAs: s.exportSymbol
        } : s);
        symbols.push(...exported);
      }
    }

    return symbols;
  }

  getContentHash(bundle) {
    let existingHash = this._bundleContentHashes.get(bundle.id);

    if (existingHash != null) {
      return existingHash;
    }

    let hash = new (_hash().Hash)(); // TODO: sort??

    this.traverseAssets(bundle, asset => {
      {
        hash.writeString([this.getAssetPublicId(asset), asset.outputHash, asset.filePath, asset.query, asset.type, asset.uniqueKey].join(':'));
      }
    });
    let hashHex = hash.finish();

    this._bundleContentHashes.set(bundle.id, hashHex);

    return hashHex;
  }

  getInlineBundles(bundle) {
    let bundles = [];
    let seen = new Set();

    let addReferencedBundles = bundle => {
      if (seen.has(bundle.id)) {
        return;
      }

      seen.add(bundle.id);
      let referencedBundles = this.getReferencedBundles(bundle, {
        includeInline: true
      });

      for (let referenced of referencedBundles) {
        if (referenced.bundleBehavior === _types.BundleBehavior.inline) {
          bundles.push(referenced);
          addReferencedBundles(referenced);
        }
      }
    };

    addReferencedBundles(bundle);
    this.traverseBundles((childBundle, _, traversal) => {
      if (childBundle.bundleBehavior === _types.BundleBehavior.inline) {
        bundles.push(childBundle);
      } else if (childBundle.id !== bundle.id) {
        traversal.skipChildren();
      }
    }, bundle);
    return bundles;
  }

  getHash(bundle) {
    let hash = new (_hash().Hash)();
    hash.writeString(bundle.id + bundle.target.publicUrl + this.getContentHash(bundle));
    let inlineBundles = this.getInlineBundles(bundle);

    for (let inlineBundle of inlineBundles) {
      hash.writeString(this.getContentHash(inlineBundle));
    }

    for (let referencedBundle of this.getReferencedBundles(bundle)) {
      hash.writeString(referencedBundle.id);
    }

    hash.writeString(JSON.stringify((0, _utils().objectSortedEntriesDeep)(bundle.env)));
    return hash.finish();
  }

  getBundleGraphHash() {
    let hashes = '';

    for (let bundle of this.getBundles()) {
      hashes += this.getHash(bundle);
    }

    return (0, _hash().hashString)(hashes);
  }

  addBundleToBundleGroup(bundle, bundleGroup) {
    let bundleGroupNodeId = this._graph.getNodeIdByContentKey((0, _utils2.getBundleGroupId)(bundleGroup));

    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);

    if (this._graph.hasEdge(bundleGroupNodeId, bundleNodeId, bundleGraphEdgeTypes.bundle)) {
      // Bundle group already has bundle
      return;
    }

    this._graph.addEdge(bundleGroupNodeId, bundleNodeId);

    this._graph.addEdge(bundleGroupNodeId, bundleNodeId, bundleGraphEdgeTypes.bundle);

    for (let entryAssetId of bundle.entryAssetIds) {
      let entryAssetNodeId = this._graph.getNodeIdByContentKey(entryAssetId);

      if (this._graph.hasEdge(bundleGroupNodeId, entryAssetNodeId)) {
        this._graph.removeEdge(bundleGroupNodeId, entryAssetNodeId);
      }
    }
  }

  getUsedSymbolsAsset(asset) {
    let node = this._graph.getNodeByContentKey(asset.id);

    (0, _assert().default)(node && node.type === 'asset');
    return this._symbolPropagationRan ? makeReadOnlySet(new Set(node.usedSymbols.keys())) : null;
  }

  getUsedSymbolsDependency(dep) {
    let node = this._graph.getNodeByContentKey(dep.id);

    (0, _assert().default)(node && node.type === 'dependency');
    let result = new Set(node.usedSymbolsUp.keys());
    return this._symbolPropagationRan ? makeReadOnlySet(result) : null;
  }

  merge(other) {
    let otherGraphIdToThisNodeId = new Map();

    for (let [otherNodeId, otherNode] of other._graph.nodes) {
      if (this._graph.hasContentKey(otherNode.id)) {
        let existingNodeId = this._graph.getNodeIdByContentKey(otherNode.id);

        otherGraphIdToThisNodeId.set(otherNodeId, existingNodeId);
        let existingNode = (0, _nullthrows().default)(this._graph.getNode(existingNodeId)); // Merge symbols, recompute dep.excluded based on that

        if (existingNode.type === 'asset') {
          (0, _assert().default)(otherNode.type === 'asset');
          existingNode.usedSymbols = new Set([...existingNode.usedSymbols, ...otherNode.usedSymbols]);
        } else if (existingNode.type === 'dependency') {
          (0, _assert().default)(otherNode.type === 'dependency');
          existingNode.usedSymbolsDown = new Set([...existingNode.usedSymbolsDown, ...otherNode.usedSymbolsDown]);
          existingNode.usedSymbolsUp = new Map([...existingNode.usedSymbolsUp, ...otherNode.usedSymbolsUp]);
          existingNode.excluded = (existingNode.excluded || Boolean(existingNode.hasDeferred)) && (otherNode.excluded || Boolean(otherNode.hasDeferred));
        }
      } else {
        let updateNodeId = this._graph.addNodeByContentKey(otherNode.id, otherNode);

        otherGraphIdToThisNodeId.set(otherNodeId, updateNodeId);
      }
    }

    for (let edge of other._graph.getAllEdges()) {
      this._graph.addEdge((0, _nullthrows().default)(otherGraphIdToThisNodeId.get(edge.from)), (0, _nullthrows().default)(otherGraphIdToThisNodeId.get(edge.to)), edge.type);
    }
  }

  isEntryBundleGroup(bundleGroup) {
    return this._graph.getNodeIdsConnectedTo((0, _nullthrows().default)(this._graph.getNodeIdByContentKey((0, _utils2.getBundleGroupId)(bundleGroup))), bundleGraphEdgeTypes.bundle).map(id => (0, _nullthrows().default)(this._graph.getNode(id))).some(n => n.type === 'root');
  }
  /**
   * Update the asset in a Bundle Graph and clear the associated Bundle hash.
   */


  updateAsset(asset) {
    this._graph.updateNode(this._graph.getNodeIdByContentKey(asset.id), (0, _AssetGraph.nodeFromAsset)(asset));

    let bundles = this.getBundlesWithAsset(asset);

    for (let bundle of bundles) {
      // the bundle content will change with a modified asset
      this._bundleContentHashes.delete(bundle.id);
    }
  }

  getEntryRoot(projectRoot, target) {
    let cached = this._targetEntryRoots.get(target.distDir);

    if (cached != null) {
      return cached;
    }

    let entryBundleGroupIds = this._graph.getNodeIdsConnectedFrom((0, _nullthrows().default)(this._graph.rootNodeId), bundleGraphEdgeTypes.bundle);

    let entries = [];

    for (let bundleGroupId of entryBundleGroupIds) {
      let bundleGroupNode = this._graph.getNode(bundleGroupId);

      (0, _assert().default)((bundleGroupNode === null || bundleGroupNode === void 0 ? void 0 : bundleGroupNode.type) === 'bundle_group');

      if (bundleGroupNode.value.target.distDir === target.distDir) {
        let entryAssetNode = this._graph.getNodeByContentKey(bundleGroupNode.value.entryAssetId);

        (0, _assert().default)((entryAssetNode === null || entryAssetNode === void 0 ? void 0 : entryAssetNode.type) === 'asset');
        entries.push((0, _projectPath.fromProjectPath)(projectRoot, entryAssetNode.value.filePath));
      }
    }

    let root = (0, _utils().getRootDir)(entries);

    this._targetEntryRoots.set(target.distDir, root);

    return root;
  }

}

exports.default = BundleGraph;