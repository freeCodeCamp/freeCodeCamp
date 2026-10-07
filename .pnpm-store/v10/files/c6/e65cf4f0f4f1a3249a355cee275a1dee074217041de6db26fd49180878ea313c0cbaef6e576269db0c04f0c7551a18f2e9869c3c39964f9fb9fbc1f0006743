// @flow strict-local

import type {
  GraphVisitor,
  FilePath,
  Symbol,
  TraversalActions,
} from '@parcel/types';
import type {
  ContentKey,
  ContentGraphOpts,
  NodeId,
  SerializedContentGraph,
} from '@parcel/graph';

import type {
  Asset,
  AssetNode,
  Bundle,
  BundleGraphNode,
  BundleGroup,
  Dependency,
  DependencyNode,
  InternalSourceLocation,
  Target,
} from './types';
import type AssetGraph from './AssetGraph';
import type {ProjectPath} from './projectPath';
import {nodeFromAsset} from './AssetGraph';

import assert from 'assert';
import invariant from 'assert';
import nullthrows from 'nullthrows';
import {ContentGraph, ALL_EDGE_TYPES, mapVisitor} from '@parcel/graph';
import {Hash, hashString} from '@parcel/hash';
import {DefaultMap, objectSortedEntriesDeep, getRootDir} from '@parcel/utils';

import {Priority, BundleBehavior, SpecifierType} from './types';
import {getBundleGroupId, getPublicId} from './utils';
import {ISOLATED_ENVS} from './public/Environment';
import {fromProjectPath} from './projectPath';

export const bundleGraphEdgeTypes = {
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
  internal_async: 5,
};

export type BundleGraphEdgeType = $Values<typeof bundleGraphEdgeTypes>;

type InternalSymbolResolution = {|
  asset: Asset,
  exportSymbol: string,
  symbol: ?Symbol | false,
  loc: ?InternalSourceLocation,
|};

type InternalExportSymbolResolution = {|
  ...InternalSymbolResolution,
  +exportAs: Symbol | string,
|};

type BundleGraphOpts = {|
  graph: ContentGraphOpts<BundleGraphNode, BundleGraphEdgeType>,
  bundleContentHashes: Map<string, string>,
  assetPublicIds: Set<string>,
  publicIdByAssetId: Map<string, string>,
  symbolPropagationRan: boolean,
|};

type SerializedBundleGraph = {|
  $$raw: true,
  graph: SerializedContentGraph<BundleGraphNode, BundleGraphEdgeType>,
  bundleContentHashes: Map<string, string>,
  assetPublicIds: Set<string>,
  publicIdByAssetId: Map<string, string>,
  symbolPropagationRan: boolean,
|};

function makeReadOnlySet<T>(set: Set<T>): $ReadOnlySet<T> {
  return new Proxy(set, {
    get(target, property) {
      if (property === 'delete' || property === 'add' || property === 'clear') {
        return undefined;
      } else {
        // $FlowFixMe[incompatible-type]
        let value = target[property];
        return typeof value === 'function' ? value.bind(target) : value;
      }
    },
  });
}

/**
 * Stores assets, dependencies, bundle groups, bundles, and the relationships between them.
 * The BundleGraph is passed to the bundler plugin wrapped in a MutableBundleGraph,
 * and is passed to packagers and optimizers wrapped in the public BundleGraph object, both
 * of which implement public api for this structure. This is the internal structure.
 */
export default class BundleGraph {
  /** A set of all existing concise asset ids present in the BundleGraph */
  _assetPublicIds: Set<string>;
  /** Maps full asset ids (currently 32-character strings) to concise ids (minimum of 5 character strings) */
  _publicIdByAssetId: Map<string, string>;
  /**
   * A cache of bundle hashes by bundle id.
   *
   * TODO: These hashes are being invalidated in mutative methods, but this._graph is not a private
   * property so it is possible to reach in and mutate the graph without invalidating these hashes.
   * It needs to be exposed in BundlerRunner for now based on how applying runtimes works and the
   * BundlerRunner takes care of invalidating hashes when runtimes are applied, but this is not ideal.
   */
  _bundleContentHashes: Map<string, string>;
  _targetEntryRoots: Map<ProjectPath, FilePath> = new Map();
  /** The internal core Graph structure */
  _graph: ContentGraph<BundleGraphNode, BundleGraphEdgeType>;
  _symbolPropagationRan /*: boolean*/;

  constructor({
    graph,
    publicIdByAssetId,
    assetPublicIds,
    bundleContentHashes,
    symbolPropagationRan,
  }: {|
    graph: ContentGraph<BundleGraphNode, BundleGraphEdgeType>,
    publicIdByAssetId: Map<string, string>,
    assetPublicIds: Set<string>,
    bundleContentHashes: Map<string, string>,
    symbolPropagationRan: boolean,
  |}) {
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
  static fromAssetGraph(
    assetGraph: AssetGraph,
    publicIdByAssetId: Map<string, string> = new Map(),
    assetPublicIds: Set<string> = new Set(),
  ): BundleGraph {
    let graph = new ContentGraph<BundleGraphNode, BundleGraphEdgeType>();
    let assetGroupIds = new Map();
    let dependencies = new Map();
    let assetGraphNodeIdToBundleGraphNodeId = new Map<NodeId, NodeId>();

    let assetGraphRootNode =
      assetGraph.rootNodeId != null
        ? assetGraph.getNode(assetGraph.rootNodeId)
        : null;
    invariant(assetGraphRootNode != null && assetGraphRootNode.type === 'root');

    for (let [nodeId, node] of assetGraph.nodes) {
      if (node.type === 'asset') {
        let {id: assetId} = node.value;
        // Generate a new, short public id for this asset to use.
        // If one already exists, use it.
        let publicId = publicIdByAssetId.get(assetId);
        if (publicId == null) {
          publicId = getPublicId(assetId, existing =>
            assetPublicIds.has(existing),
          );
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

      let node = nullthrows(assetGraph.getNode(nodeId));
      if (
        node.type === 'dependency' &&
        node.value.symbols != null &&
        node.value.env.shouldScopeHoist
      ) {
        // asset -> symbols that should be imported directly from that asset
        let targets = new DefaultMap<ContentKey, Map<Symbol, Symbol>>(
          () => new Map(),
        );
        let externalSymbols = new Set();
        let hasAmbiguousSymbols = false;

        for (let [symbol, resolvedSymbol] of node.usedSymbolsUp) {
          if (resolvedSymbol) {
            targets
              .get(resolvedSymbol.asset)
              .set(symbol, resolvedSymbol.symbol ?? symbol);
          } else if (resolvedSymbol === null) {
            externalSymbols.add(symbol);
          } else if (resolvedSymbol === undefined) {
            hasAmbiguousSymbols = true;
            break;
          }
        }

        if (
          // Only perform retargeting when there is an imported symbol
          // - If the target is side-effect-free, the symbols point to the actual target and removing
          //   the original dependency resolution is fine
          // - Otherwise, keep this dependency unchanged for its potential side effects
          node.usedSymbolsUp.size > 0 &&
          // Only perform retargeting if the dependency only points to a single asset (e.g. CSS modules)
          !hasAmbiguousSymbols &&
          // It doesn't make sense to retarget dependencies where `*` is used, because the
          // retargeting won't enable any benefits in that case (apart from potentially even more
          // code being generated).
          !node.usedSymbolsUp.has('*') &&
          // TODO We currently can't rename imports in async imports, e.g. from
          //      (parcelRequire("...")).then(({ a }) => a);
          // to
          //      (parcelRequire("...")).then(({ a: b }) => a);
          // or
          //      (parcelRequire("...")).then((a)=>a);
          // if the reexporting asset did `export {a as b}` or `export * as a`
          node.value.priority === Priority.sync &&
          // For every asset, no symbol is imported multiple times (with a different local name).
          // Don't retarget because this cannot be resolved without also changing the asset symbols
          // (and the asset content itself).
          [...targets].every(
            ([, t]) => new Set([...t.values()]).size === t.size,
          )
        ) {
          // TODO adjust sourceAssetIdNode.value.dependencies ?
          let deps = [
            // Keep the original dependency
            {
              asset: null,
              dep: graph.addNodeByContentKey(node.id, {
                ...node,
                value: {
                  ...node.value,
                  symbols: node.value.symbols
                    ? new Map(
                        [...node.value.symbols].filter(([k]) =>
                          externalSymbols.has(k),
                        ),
                      )
                    : undefined,
                },
                usedSymbolsUp: new Map(
                  [...node.usedSymbolsUp].filter(([k]) =>
                    externalSymbols.has(k),
                  ),
                ),
                usedSymbolsDown: new Set(),
                excluded: externalSymbols.size === 0,
              }),
            },
            ...[...targets].map(([asset, target]) => {
              let newNodeId = hashString(
                node.id + [...target.keys()].join(','),
              );
              return {
                asset,
                dep: graph.addNodeByContentKey(newNodeId, {
                  ...node,
                  id: newNodeId,
                  value: {
                    ...node.value,
                    id: newNodeId,
                    symbols: node.value.symbols
                      ? new Map(
                          [...node.value.symbols]
                            .filter(([k]) => target.has(k) || k === '*')
                            .map(([k, v]) => [target.get(k) ?? k, v]),
                        )
                      : undefined,
                  },
                  usedSymbolsUp: new Map(
                    [...node.usedSymbolsUp]
                      .filter(([k]) => target.has(k) || k === '*')
                      .map(([k, v]) => [target.get(k) ?? k, v]),
                  ),
                  usedSymbolsDown: new Set(),
                }),
              };
            }),
          ];
          dependencies.set(nodeId, deps);

          // Jump to the dependencies that are used in this dependency
          for (let id of targets.keys()) {
            walk(assetGraph.getNodeIdByContentKey(id));
          }
          return;
        } else {
          // No special handling
          let bundleGraphNodeId = graph.addNodeByContentKey(node.id, node);
          assetGraphNodeIdToBundleGraphNodeId.set(nodeId, bundleGraphNodeId);
        }
      }
      // Don't copy over asset groups into the bundle graph.
      else if (node.type !== 'asset_group') {
        let bundleGraphNodeId = graph.addNodeByContentKey(node.id, node);
        if (node.id === assetGraphRootNode?.id) {
          graph.setRootNodeId(bundleGraphNodeId);
        }
        assetGraphNodeIdToBundleGraphNodeId.set(nodeId, bundleGraphNodeId);
      }

      for (let id of assetGraph.getNodeIdsConnectedFrom(nodeId)) {
        walk(id);
      }
    }
    walk(nullthrows(assetGraph.rootNodeId));

    for (let edge of assetGraph.getAllEdges()) {
      if (assetGroupIds.has(edge.from)) {
        continue;
      }
      if (dependencies.has(edge.from)) {
        // Discard previous edge, insert outgoing edges for all split dependencies
        for (let {asset, dep} of nullthrows(dependencies.get(edge.from))) {
          if (asset != null) {
            graph.addEdge(
              dep,
              nullthrows(
                assetGraphNodeIdToBundleGraphNodeId.get(
                  assetGraph.getNodeIdByContentKey(asset),
                ),
              ),
            );
          }
        }
        continue;
      }
      if (!assetGraphNodeIdToBundleGraphNodeId.has(edge.from)) {
        continue;
      }

      let to: Array<NodeId> = dependencies.get(edge.to)?.map(v => v.dep) ??
        assetGroupIds
          .get(edge.to)
          ?.map(id =>
            nullthrows(assetGraphNodeIdToBundleGraphNodeId.get(id)),
          ) ?? [nullthrows(assetGraphNodeIdToBundleGraphNodeId.get(edge.to))];

      for (let t of to) {
        graph.addEdge(
          nullthrows(assetGraphNodeIdToBundleGraphNodeId.get(edge.from)),
          t,
        );
      }
    }

    return new BundleGraph({
      graph,
      assetPublicIds,
      bundleContentHashes: new Map(),
      publicIdByAssetId,
      symbolPropagationRan: assetGraph.symbolPropagationRan,
    });
  }

  serialize(): SerializedBundleGraph {
    return {
      $$raw: true,
      graph: this._graph.serialize(),
      assetPublicIds: this._assetPublicIds,
      bundleContentHashes: this._bundleContentHashes,
      publicIdByAssetId: this._publicIdByAssetId,
      symbolPropagationRan: this._symbolPropagationRan,
    };
  }

  static deserialize(serialized: BundleGraphOpts): BundleGraph {
    return new BundleGraph({
      graph: ContentGraph.deserialize(serialized.graph),
      assetPublicIds: serialized.assetPublicIds,
      bundleContentHashes: serialized.bundleContentHashes,
      publicIdByAssetId: serialized.publicIdByAssetId,
      symbolPropagationRan: serialized.symbolPropagationRan,
    });
  }

  addAssetToBundle(asset: Asset, bundle: Bundle) {
    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);
    this._graph.addEdge(
      bundleNodeId,
      this._graph.getNodeIdByContentKey(asset.id),
      bundleGraphEdgeTypes.contains,
    );
    this._graph.addEdge(
      bundleNodeId,
      this._graph.getNodeIdByContentKey(asset.id),
    );

    let dependencies = this.getDependencies(asset);
    for (let dependency of dependencies) {
      let dependencyNodeId = this._graph.getNodeIdByContentKey(dependency.id);
      this._graph.addEdge(
        bundleNodeId,
        dependencyNodeId,
        bundleGraphEdgeTypes.contains,
      );

      for (let [bundleGroupNodeId, bundleGroupNode] of this._graph
        .getNodeIdsConnectedFrom(dependencyNodeId)
        .map(id => [id, nullthrows(this._graph.getNode(id))])
        .filter(([, node]) => node.type === 'bundle_group')) {
        invariant(bundleGroupNode.type === 'bundle_group');
        this._graph.addEdge(
          bundleNodeId,
          bundleGroupNodeId,
          bundleGraphEdgeTypes.bundle,
        );
      }
      // If the dependency references a target bundle, add a reference edge from
      // the source bundle to the dependency for easy traversal.
      // TODO: Consider bundle being created from dependency
      if (
        this._graph
          .getNodeIdsConnectedFrom(
            dependencyNodeId,
            bundleGraphEdgeTypes.references,
          )
          .map(id => nullthrows(this._graph.getNode(id)))
          .some(node => node.type === 'bundle')
      ) {
        this._graph.addEdge(
          bundleNodeId,
          dependencyNodeId,
          bundleGraphEdgeTypes.references,
        );
      }
    }
  }

  addAssetGraphToBundle(
    asset: Asset,
    bundle: Bundle,
    shouldSkipDependency: Dependency => boolean = d =>
      this.isDependencySkipped(d),
  ) {
    let assetNodeId = this._graph.getNodeIdByContentKey(asset.id);
    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);

    // The root asset should be reached directly from the bundle in traversal.
    // Its children will be traversed from there.
    this._graph.addEdge(bundleNodeId, assetNodeId);
    this._graph.traverse((nodeId, _, actions) => {
      let node = nullthrows(this._graph.getNode(nodeId));
      if (node.type === 'bundle_group') {
        actions.skipChildren();
        return;
      }

      if (node.type === 'dependency' && shouldSkipDependency(node.value)) {
        actions.skipChildren();
        return;
      }

      if (node.type === 'asset' || node.type === 'dependency') {
        this._graph.addEdge(
          bundleNodeId,
          nodeId,
          bundleGraphEdgeTypes.contains,
        );
      }

      if (node.type === 'dependency') {
        for (let [bundleGroupNodeId, bundleGroupNode] of this._graph
          .getNodeIdsConnectedFrom(nodeId)
          .map(id => [id, nullthrows(this._graph.getNode(id))])
          .filter(([, node]) => node.type === 'bundle_group')) {
          invariant(bundleGroupNode.type === 'bundle_group');
          this._graph.addEdge(
            bundleNodeId,
            bundleGroupNodeId,
            bundleGraphEdgeTypes.bundle,
          );
        }

        // If the dependency references a target bundle, add a reference edge from
        // the source bundle to the dependency for easy traversal.
        if (
          this._graph
            .getNodeIdsConnectedFrom(nodeId, bundleGraphEdgeTypes.references)
            .map(id => nullthrows(this._graph.getNode(id)))
            .some(node => node.type === 'bundle')
        ) {
          this._graph.addEdge(
            bundleNodeId,
            nodeId,
            bundleGraphEdgeTypes.references,
          );
          this.markDependencyReferenceable(node.value);
          //all bundles that have this dependency need to have an edge from bundle to that dependency
        }
      }
    }, assetNodeId);
    this._bundleContentHashes.delete(bundle.id);
  }

  markDependencyReferenceable(dependency: Dependency) {
    for (let bundle of this.getBundlesWithDependency(dependency)) {
      this._graph.addEdge(
        this._graph.getNodeIdByContentKey(bundle.id),
        this._graph.getNodeIdByContentKey(dependency.id),
        bundleGraphEdgeTypes.references,
      );
    }
  }

  addEntryToBundle(
    asset: Asset,
    bundle: Bundle,
    shouldSkipDependency?: Dependency => boolean,
  ) {
    this.addAssetGraphToBundle(asset, bundle, shouldSkipDependency);
    if (!bundle.entryAssetIds.includes(asset.id)) {
      bundle.entryAssetIds.push(asset.id);
    }
  }

  internalizeAsyncDependency(bundle: Bundle, dependency: Dependency) {
    if (dependency.priority === Priority.sync) {
      throw new Error('Expected an async dependency');
    }

    // It's possible for internalized async dependencies to not have
    // reference edges and still have untyped edges.
    // TODO: Maybe don't use internalized async edges at all?
    let dependencyNodeId = this._graph.getNodeIdByContentKey(dependency.id);
    let resolved = this.getResolvedAsset(dependency);
    if (resolved) {
      let resolvedNodeId = this._graph.getNodeIdByContentKey(resolved.id);

      if (
        !this._graph.hasEdge(
          dependencyNodeId,
          resolvedNodeId,
          bundleGraphEdgeTypes.references,
        )
      ) {
        this._graph.addEdge(
          dependencyNodeId,
          resolvedNodeId,
          bundleGraphEdgeTypes.references,
        );
        this._graph.removeEdge(dependencyNodeId, resolvedNodeId);
      }
    }

    this._graph.addEdge(
      this._graph.getNodeIdByContentKey(bundle.id),
      this._graph.getNodeIdByContentKey(dependency.id),
      bundleGraphEdgeTypes.internal_async,
    );
    this._removeExternalDependency(bundle, dependency);
  }

  isDependencySkipped(dependency: Dependency): boolean {
    let node = this._graph.getNodeByContentKey(dependency.id);
    invariant(node && node.type === 'dependency');
    return !!node.hasDeferred || node.excluded;
  }

  getParentBundlesOfBundleGroup(bundleGroup: BundleGroup): Array<Bundle> {
    return this._graph
      .getNodeIdsConnectedTo(
        this._graph.getNodeIdByContentKey(getBundleGroupId(bundleGroup)),
        bundleGraphEdgeTypes.bundle,
      )
      .map(id => nullthrows(this._graph.getNode(id)))
      .filter(node => node.type === 'bundle')
      .map(node => {
        invariant(node.type === 'bundle');
        return node.value;
      });
  }

  resolveAsyncDependency(
    dependency: Dependency,
    bundle: ?Bundle,
  ): ?(
    | {|type: 'bundle_group', value: BundleGroup|}
    | {|type: 'asset', value: Asset|}
  ) {
    let depNodeId = this._graph.getNodeIdByContentKey(dependency.id);
    let bundleNodeId =
      bundle != null ? this._graph.getNodeIdByContentKey(bundle.id) : null;

    if (
      bundleNodeId != null &&
      this._graph.hasEdge(
        bundleNodeId,
        depNodeId,
        bundleGraphEdgeTypes.internal_async,
      )
    ) {
      let referencedAssetNodeIds = this._graph.getNodeIdsConnectedFrom(
        depNodeId,
        bundleGraphEdgeTypes.references,
      );

      let resolved;
      if (referencedAssetNodeIds.length === 0) {
        resolved = this.getResolvedAsset(dependency, bundle);
      } else if (referencedAssetNodeIds.length === 1) {
        let referencedAssetNode = this._graph.getNode(
          referencedAssetNodeIds[0],
        );
        // If a referenced asset already exists, resolve this dependency to it.
        invariant(referencedAssetNode?.type === 'asset');
        resolved = referencedAssetNode.value;
      } else {
        throw new Error('Dependencies can only reference one asset');
      }

      if (resolved == null) {
        return;
      } else {
        return {
          type: 'asset',
          value: resolved,
        };
      }
    }

    let node = this._graph
      .getNodeIdsConnectedFrom(this._graph.getNodeIdByContentKey(dependency.id))
      .map(id => nullthrows(this._graph.getNode(id)))
      .find(node => node.type === 'bundle_group');

    if (node == null) {
      return;
    }

    invariant(node.type === 'bundle_group');
    return {
      type: 'bundle_group',
      value: node.value,
    };
  }

  // eslint-disable-next-line no-unused-vars
  getReferencedBundle(dependency: Dependency, fromBundle: Bundle): ?Bundle {
    let dependencyNodeId = this._graph.getNodeIdByContentKey(dependency.id);

    // If this dependency is async, there will be a bundle group attached to it.
    let node = this._graph
      .getNodeIdsConnectedFrom(dependencyNodeId)
      .map(id => nullthrows(this._graph.getNode(id)))
      .find(node => node.type === 'bundle_group');

    if (node != null) {
      invariant(node.type === 'bundle_group');
      return this.getBundlesInBundleGroup(node.value, {
        includeInline: true,
      }).find(b => {
        let mainEntryId = b.entryAssetIds[b.entryAssetIds.length - 1];
        return mainEntryId != null && node.value.entryAssetId === mainEntryId;
      });
    }

    // Otherwise, find an attached bundle via a reference edge (e.g. from createAssetReference).
    let bundleNode = this._graph
      .getNodeIdsConnectedFrom(
        dependencyNodeId,
        bundleGraphEdgeTypes.references,
      )
      .map(id => nullthrows(this._graph.getNode(id)))
      .find(node => node.type === 'bundle');

    if (bundleNode) {
      invariant(bundleNode.type === 'bundle');
      return bundleNode.value;
    }
  }

  removeAssetGraphFromBundle(asset: Asset, bundle: Bundle) {
    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);
    let assetNodeId = this._graph.getNodeIdByContentKey(asset.id);

    // Remove all contains edges from the bundle to the nodes in the asset's
    // subgraph.
    this._graph.traverse((nodeId, context, actions) => {
      let node = nullthrows(this._graph.getNode(nodeId));

      if (node.type === 'bundle_group') {
        actions.skipChildren();
        return;
      }

      if (node.type !== 'dependency' && node.type !== 'asset') {
        return;
      }

      if (
        this._graph.hasEdge(bundleNodeId, nodeId, bundleGraphEdgeTypes.contains)
      ) {
        this._graph.removeEdge(
          bundleNodeId,
          nodeId,
          bundleGraphEdgeTypes.contains,
          // Removing this contains edge should not orphan the connected node. This
          // is disabled for performance reasons as these edges are removed as part
          // of a traversal, and checking for orphans becomes quite expensive in
          // aggregate.
          false /* removeOrphans */,
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
        if (
          this._graph.hasEdge(
            bundleNodeId,
            nodeId,
            bundleGraphEdgeTypes.references,
          )
        ) {
          this._graph.addEdge(
            bundleNodeId,
            nodeId,
            bundleGraphEdgeTypes.references,
          );
          this.markDependencyReferenceable(node.value);
        }
        if (
          this._graph.hasEdge(
            bundleNodeId,
            nodeId,
            bundleGraphEdgeTypes.internal_async,
          )
        ) {
          this._graph.removeEdge(
            bundleNodeId,
            nodeId,
            bundleGraphEdgeTypes.internal_async,
          );
        }
      }
    }, assetNodeId);

    // Remove bundle node if it no longer has any entry assets
    if (this._graph.getNodeIdsConnectedFrom(bundleNodeId).length === 0) {
      this.removeBundle(bundle);
    }

    this._bundleContentHashes.delete(bundle.id);
  }

  /**
   * Remove a bundle from the bundle graph. Remove its bundle group if it is
   * the only bundle in the group.
   */
  removeBundle(bundle: Bundle): Set<BundleGroup> {
    // Remove bundle node if it no longer has any entry assets
    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);

    let bundleGroupNodeIds = this._graph.getNodeIdsConnectedTo(
      bundleNodeId,
      bundleGraphEdgeTypes.bundle,
    );
    this._graph.removeNode(bundleNodeId);

    let removedBundleGroups: Set<BundleGroup> = new Set();
    // Remove bundle group node if it no longer has any bundles
    for (let bundleGroupNodeId of bundleGroupNodeIds) {
      let bundleGroupNode = nullthrows(this._graph.getNode(bundleGroupNodeId));
      invariant(bundleGroupNode.type === 'bundle_group');
      let bundleGroup = bundleGroupNode.value;

      if (
        // If the bundle group's entry asset belongs to this bundle, the group
        // was created because of this bundle. Remove the group.
        bundle.entryAssetIds.includes(bundleGroup.entryAssetId) ||
        // If the bundle group is now empty, remove it.
        this.getBundlesInBundleGroup(bundleGroup, {includeInline: true})
          .length === 0
      ) {
        removedBundleGroups.add(bundleGroup);
        this.removeBundleGroup(bundleGroup);
      }
    }

    this._bundleContentHashes.delete(bundle.id);
    return removedBundleGroups;
  }

  removeBundleGroup(bundleGroup: BundleGroup) {
    let bundleGroupNode = nullthrows(
      this._graph.getNodeByContentKey(getBundleGroupId(bundleGroup)),
    );
    invariant(bundleGroupNode.type === 'bundle_group');

    let bundlesInGroup = this.getBundlesInBundleGroup(bundleGroupNode.value, {
      includeInline: true,
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
    }

    // This function can be reentered through removeBundle above. In this case,
    // the node may already been removed.
    if (this._graph.hasContentKey(bundleGroupNode.id)) {
      this._graph.removeNode(
        this._graph.getNodeIdByContentKey(bundleGroupNode.id),
      );
    }

    assert(
      bundlesInGroup.every(
        bundle => this.getBundleGroupsContainingBundle(bundle).length > 0,
      ),
    );
  }

  _removeExternalDependency(bundle: Bundle, dependency: Dependency) {
    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);
    for (let bundleGroupNode of this._graph
      .getNodeIdsConnectedFrom(this._graph.getNodeIdByContentKey(dependency.id))
      .map(id => nullthrows(this._graph.getNode(id)))
      .filter(node => node.type === 'bundle_group')) {
      let bundleGroupNodeId = this._graph.getNodeIdByContentKey(
        bundleGroupNode.id,
      );

      if (
        !this._graph.hasEdge(
          bundleNodeId,
          bundleGroupNodeId,
          bundleGraphEdgeTypes.bundle,
        )
      ) {
        continue;
      }

      let inboundDependencies = this._graph
        .getNodeIdsConnectedTo(bundleGroupNodeId)
        .map(id => nullthrows(this._graph.getNode(id)))
        .filter(node => node.type === 'dependency')
        .map(node => {
          invariant(node.type === 'dependency');
          return node.value;
        });

      // If every inbound dependency to this bundle group does not belong to this bundle,
      // or the dependency is internal to the bundle, then the connection between
      // this bundle and the group is safe to remove.
      if (
        inboundDependencies.every(
          dependency =>
            dependency.specifierType !== SpecifierType.url &&
            (!this.bundleHasDependency(bundle, dependency) ||
              this._graph.hasEdge(
                bundleNodeId,
                this._graph.getNodeIdByContentKey(dependency.id),
                bundleGraphEdgeTypes.internal_async,
              )),
        )
      ) {
        this._graph.removeEdge(
          bundleNodeId,
          bundleGroupNodeId,
          bundleGraphEdgeTypes.bundle,
        );
      }
    }
  }

  createAssetReference(
    dependency: Dependency,
    asset: Asset,
    bundle: Bundle,
  ): void {
    let dependencyId = this._graph.getNodeIdByContentKey(dependency.id);
    let assetId = this._graph.getNodeIdByContentKey(asset.id);
    let bundleId = this._graph.getNodeIdByContentKey(bundle.id);
    this._graph.addEdge(dependencyId, assetId, bundleGraphEdgeTypes.references);

    this._graph.addEdge(
      dependencyId,
      bundleId,
      bundleGraphEdgeTypes.references,
    );
    this.markDependencyReferenceable(dependency);
    if (this._graph.hasEdge(dependencyId, assetId)) {
      this._graph.removeEdge(dependencyId, assetId);
    }
  }

  createBundleReference(from: Bundle, to: Bundle): void {
    this._graph.addEdge(
      this._graph.getNodeIdByContentKey(from.id),
      this._graph.getNodeIdByContentKey(to.id),
      bundleGraphEdgeTypes.references,
    );
  }

  getBundlesWithAsset(asset: Asset): Array<Bundle> {
    return this._graph
      .getNodeIdsConnectedTo(
        this._graph.getNodeIdByContentKey(asset.id),
        bundleGraphEdgeTypes.contains,
      )
      .map(id => nullthrows(this._graph.getNode(id)))
      .filter(node => node.type === 'bundle')
      .map(node => {
        invariant(node.type === 'bundle');
        return node.value;
      });
  }

  getBundlesWithDependency(dependency: Dependency): Array<Bundle> {
    return this._graph
      .getNodeIdsConnectedTo(
        nullthrows(this._graph.getNodeIdByContentKey(dependency.id)),
        bundleGraphEdgeTypes.contains,
      )
      .map(id => nullthrows(this._graph.getNode(id)))
      .filter(node => node.type === 'bundle')
      .map(node => {
        invariant(node.type === 'bundle');
        return node.value;
      });
  }

  getDependencyAssets(dependency: Dependency): Array<Asset> {
    return this._graph
      .getNodeIdsConnectedFrom(this._graph.getNodeIdByContentKey(dependency.id))
      .map(id => nullthrows(this._graph.getNode(id)))
      .filter(node => node.type === 'asset')
      .map(node => {
        invariant(node.type === 'asset');
        return node.value;
      });
  }

  getResolvedAsset(dep: Dependency, bundle: ?Bundle): ?Asset {
    let assets = this.getDependencyAssets(dep);
    let firstAsset = assets[0];
    let resolved =
      // If no bundle is specified, use the first concrete asset.
      bundle == null
        ? firstAsset
        : // Otherwise, find the first asset that belongs to this bundle.
          assets.find(asset => this.bundleHasAsset(bundle, asset)) ||
          firstAsset;

    // If a resolution still hasn't been found, return the first referenced asset.
    if (resolved == null) {
      this._graph.traverse(
        (nodeId, _, traversal) => {
          let node = nullthrows(this._graph.getNode(nodeId));
          if (node.type === 'asset') {
            resolved = node.value;
            traversal.stop();
          } else if (node.id !== dep.id) {
            traversal.skipChildren();
          }
        },
        this._graph.getNodeIdByContentKey(dep.id),
        bundleGraphEdgeTypes.references,
      );
    }

    return resolved;
  }

  getDependencies(asset: Asset): Array<Dependency> {
    let nodeId = this._graph.getNodeIdByContentKey(asset.id);
    return this._graph.getNodeIdsConnectedFrom(nodeId).map(id => {
      let node = nullthrows(this._graph.getNode(id));
      invariant(node.type === 'dependency');
      return node.value;
    });
  }

  traverseAssets<TContext>(
    bundle: Bundle,
    visit: GraphVisitor<Asset, TContext>,
    startAsset?: Asset,
  ): ?TContext {
    return this.traverseBundle(
      bundle,
      mapVisitor(node => (node.type === 'asset' ? node.value : null), visit),
      startAsset,
    );
  }

  isAssetReferenced(bundle: Bundle, asset: Asset): boolean {
    let assetNodeId = nullthrows(this._graph.getNodeIdByContentKey(asset.id));

    if (
      this._graph
        .getNodeIdsConnectedTo(assetNodeId, bundleGraphEdgeTypes.references)
        .map(id => this._graph.getNode(id))
        .some(
          node =>
            node?.type === 'dependency' &&
            node.value.priority === Priority.lazy &&
            node.value.specifierType !== SpecifierType.url,
        )
    ) {
      // If this asset is referenced by any async dependency, it's referenced.
      return true;
    }

    let dependencies = this._graph
      .getNodeIdsConnectedTo(assetNodeId)
      .map(id => nullthrows(this._graph.getNode(id)))
      .filter(node => node.type === 'dependency')
      .map(node => {
        invariant(node.type === 'dependency');
        return node.value;
      });

    const bundleHasReference = (bundle: Bundle) => {
      return (
        !this.bundleHasAsset(bundle, asset) &&
        dependencies.some(dependency =>
          this.bundleHasDependency(bundle, dependency),
        )
      );
    };

    let visitedBundles: Set<Bundle> = new Set();
    let siblingBundles = new Set(
      this.getBundleGroupsContainingBundle(bundle).flatMap(bundleGroup =>
        this.getBundlesInBundleGroup(bundleGroup, {includeInline: true}),
      ),
    );

    // Check if any of this bundle's descendants, referencers, bundles referenced
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

        if (
          descendant.type !== bundle.type ||
          descendant.env.context !== bundle.env.context
        ) {
          actions.skipChildren();
          return;
        }

        if (bundleHasReference(descendant)) {
          isReferenced = true;
          actions.stop();
          return;
        }
      }, referencer);

      return isReferenced;
    });
  }

  hasParentBundleOfType(bundle: Bundle, type: string): boolean {
    let parents = this.getParentBundles(bundle);
    return parents.length > 0 && parents.every(parent => parent.type === type);
  }

  getParentBundles(bundle: Bundle): Array<Bundle> {
    let parentBundles: Set<Bundle> = new Set();
    for (let bundleGroup of this.getBundleGroupsContainingBundle(bundle)) {
      for (let parentBundle of this.getParentBundlesOfBundleGroup(
        bundleGroup,
      )) {
        parentBundles.add(parentBundle);
      }
    }

    return [...parentBundles];
  }

  isAssetReachableFromBundle(asset: Asset, bundle: Bundle): boolean {
    // If a bundle's environment is isolated, it can't access assets present
    // in any ancestor bundles. Don't consider any assets reachable.
    if (
      ISOLATED_ENVS.has(bundle.env.context) ||
      !bundle.isSplittable ||
      bundle.bundleBehavior === BundleBehavior.isolated ||
      bundle.bundleBehavior === BundleBehavior.inline
    ) {
      return false;
    }

    // For an asset to be reachable from a bundle, it must either exist in a sibling bundle,
    // or in an ancestor bundle group reachable from all parent bundles.
    let bundleGroups = this.getBundleGroupsContainingBundle(bundle);
    return bundleGroups.every(bundleGroup => {
      // If the asset is in any sibling bundles of the original bundle, it is reachable.
      let bundles = this.getBundlesInBundleGroup(bundleGroup);
      if (
        bundles.some(
          b =>
            b.id !== bundle.id &&
            b.bundleBehavior !== BundleBehavior.isolated &&
            b.bundleBehavior !== BundleBehavior.inline &&
            this.bundleHasAsset(b, asset),
        )
      ) {
        return true;
      }

      // Get a list of parent bundle nodes pointing to the bundle group
      let parentBundleNodes = this._graph.getNodeIdsConnectedTo(
        this._graph.getNodeIdByContentKey(getBundleGroupId(bundleGroup)),
        bundleGraphEdgeTypes.bundle,
      );

      // Check that every parent bundle has a bundle group in its ancestry that contains the asset.
      return parentBundleNodes.every(bundleNodeId => {
        let bundleNode = nullthrows(this._graph.getNode(bundleNodeId));
        if (
          bundleNode.type !== 'bundle' ||
          bundleNode.value.bundleBehavior === BundleBehavior.isolated ||
          bundleNode.value.bundleBehavior === BundleBehavior.inline
        ) {
          return false;
        }

        let isReachable = true;
        this._graph.traverseAncestors(
          bundleNodeId,
          (nodeId, ctx, actions) => {
            let node = nullthrows(this._graph.getNode(nodeId));
            // If we've reached the root or a context change without
            // finding this asset in the ancestry, it is not reachable.
            if (
              node.type === 'root' ||
              (node.type === 'bundle' &&
                (node.value.id === bundle.id ||
                  node.value.env.context !== bundle.env.context))
            ) {
              isReachable = false;
              actions.stop();
              return;
            }

            if (node.type === 'bundle_group') {
              let childBundles = this.getBundlesInBundleGroup(node.value);
              if (
                childBundles.some(
                  b =>
                    b.id !== bundle.id &&
                    b.bundleBehavior !== BundleBehavior.isolated &&
                    b.bundleBehavior !== BundleBehavior.inline &&
                    this.bundleHasAsset(b, asset),
                )
              ) {
                actions.skipChildren();
                return;
              }
            }
          },
          [bundleGraphEdgeTypes.references, bundleGraphEdgeTypes.bundle],
        );

        return isReachable;
      });
    });
  }

  traverseBundle<TContext>(
    bundle: Bundle,
    visit: GraphVisitor<AssetNode | DependencyNode, TContext>,
    startAsset?: Asset,
  ): ?TContext {
    let entries = !startAsset;
    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);

    // A modified DFS traversal which traverses entry assets in the same order
    // as their ids appear in `bundle.entryAssetIds`.
    return this._graph.dfs({
      visit: mapVisitor((nodeId, actions) => {
        let node = nullthrows(this._graph.getNode(nodeId));

        if (nodeId === bundleNodeId) {
          return;
        }

        if (node.type === 'dependency' || node.type === 'asset') {
          if (
            this._graph.hasEdge(
              bundleNodeId,
              nodeId,
              bundleGraphEdgeTypes.contains,
            )
          ) {
            return node;
          }
        }

        actions.skipChildren();
      }, visit),
      startNodeId: startAsset
        ? this._graph.getNodeIdByContentKey(startAsset.id)
        : bundleNodeId,
      getChildren: nodeId => {
        let children = this._graph
          .getNodeIdsConnectedFrom(nodeId)
          .map(id => [id, nullthrows(this._graph.getNode(id))]);

        let sorted =
          entries && bundle.entryAssetIds.length > 0
            ? children.sort(([, a], [, b]) => {
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
              })
            : children;

        entries = false;
        return sorted.map(([id]) => id);
      },
    });
  }

  traverse<TContext>(
    visit: GraphVisitor<AssetNode | DependencyNode, TContext>,
    start?: Asset,
  ): ?TContext {
    return this._graph.filteredTraverse(
      nodeId => {
        let node = nullthrows(this._graph.getNode(nodeId));
        if (node.type === 'asset' || node.type === 'dependency') {
          return node;
        }
      },
      visit,
      start ? this._graph.getNodeIdByContentKey(start.id) : undefined, // start with root
      ALL_EDGE_TYPES,
    );
  }

  getChildBundles(bundle: Bundle): Array<Bundle> {
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

  traverseBundles<TContext>(
    visit: GraphVisitor<Bundle, TContext>,
    startBundle: ?Bundle,
  ): ?TContext {
    return this._graph.filteredTraverse(
      nodeId => {
        let node = nullthrows(this._graph.getNode(nodeId));
        return node.type === 'bundle' ? node.value : null;
      },
      visit,
      startBundle ? this._graph.getNodeIdByContentKey(startBundle.id) : null,
      [bundleGraphEdgeTypes.bundle, bundleGraphEdgeTypes.references],
    );
  }

  getBundles(opts?: {|includeInline: boolean|}): Array<Bundle> {
    let bundles = [];
    this.traverseBundles(bundle => {
      if (
        opts?.includeInline ||
        bundle.bundleBehavior !== BundleBehavior.inline
      ) {
        bundles.push(bundle);
      }
    });

    return bundles;
  }

  getTotalSize(asset: Asset): number {
    let size = 0;
    this._graph.traverse((nodeId, _, actions) => {
      let node = nullthrows(this._graph.getNode(nodeId));
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

  getReferencingBundles(bundle: Bundle): Array<Bundle> {
    let referencingBundles: Set<Bundle> = new Set();

    this._graph.traverseAncestors(
      this._graph.getNodeIdByContentKey(bundle.id),
      nodeId => {
        let node = nullthrows(this._graph.getNode(nodeId));
        if (node.type === 'bundle' && node.value.id !== bundle.id) {
          referencingBundles.add(node.value);
        }
      },
      bundleGraphEdgeTypes.references,
    );

    return [...referencingBundles];
  }

  getBundleGroupsContainingBundle(bundle: Bundle): Array<BundleGroup> {
    let bundleGroups: Set<BundleGroup> = new Set();

    for (let currentBundle of [bundle, ...this.getReferencingBundles(bundle)]) {
      for (let bundleGroup of this.getDirectParentBundleGroups(currentBundle)) {
        bundleGroups.add(bundleGroup);
      }
    }

    return [...bundleGroups];
  }

  getDirectParentBundleGroups(bundle: Bundle): Array<BundleGroup> {
    return this._graph
      .getNodeIdsConnectedTo(
        nullthrows(this._graph.getNodeIdByContentKey(bundle.id)),
        bundleGraphEdgeTypes.bundle,
      )
      .map(id => nullthrows(this._graph.getNode(id)))
      .filter(node => node.type === 'bundle_group')
      .map(node => {
        invariant(node.type === 'bundle_group');
        return node.value;
      });
  }

  getBundlesInBundleGroup(
    bundleGroup: BundleGroup,
    opts?: {|includeInline: boolean|},
  ): Array<Bundle> {
    let bundles: Set<Bundle> = new Set();
    for (let bundleNodeId of this._graph.getNodeIdsConnectedFrom(
      this._graph.getNodeIdByContentKey(getBundleGroupId(bundleGroup)),
      bundleGraphEdgeTypes.bundle,
    )) {
      let bundleNode = nullthrows(this._graph.getNode(bundleNodeId));
      invariant(bundleNode.type === 'bundle');
      let bundle = bundleNode.value;
      if (
        opts?.includeInline ||
        bundle.bundleBehavior !== BundleBehavior.inline
      ) {
        bundles.add(bundle);
      }

      for (let referencedBundle of this.getReferencedBundles(bundle, {
        includeInline: true,
      })) {
        bundles.add(referencedBundle);
      }
    }

    return [...bundles];
  }

  getReferencedBundles(
    bundle: Bundle,
    opts?: {|recursive?: boolean, includeInline?: boolean|},
  ): Array<Bundle> {
    let recursive = opts?.recursive ?? true;
    let includeInline = opts?.includeInline ?? false;
    let referencedBundles = new Set();
    this._graph.dfs({
      visit: (nodeId, _, actions) => {
        let node = nullthrows(this._graph.getNode(nodeId));
        if (node.type !== 'bundle') {
          return;
        }

        if (node.value.id === bundle.id) {
          return;
        }

        if (
          includeInline ||
          node.value.bundleBehavior !== BundleBehavior.inline
        ) {
          referencedBundles.add(node.value);
        }

        if (!recursive) {
          actions.skipChildren();
        }
      },
      startNodeId: this._graph.getNodeIdByContentKey(bundle.id),
      getChildren: nodeId =>
        // Shared bundles seem to depend on being used in the opposite order
        // they were added.
        // TODO: Should this be the case?
        this._graph.getNodeIdsConnectedFrom(
          nodeId,
          bundleGraphEdgeTypes.references,
        ),
    });

    return [...referencedBundles];
  }

  getIncomingDependencies(asset: Asset): Array<Dependency> {
    if (!this._graph.hasContentKey(asset.id)) {
      return [];
    }
    // Dependencies can be a a parent node via an untyped edge (like in the AssetGraph but without AssetGroups)
    // or they can be parent nodes via a 'references' edge
    return this._graph
      .getNodeIdsConnectedTo(
        this._graph.getNodeIdByContentKey(asset.id),
        ALL_EDGE_TYPES,
      )
      .map(id => nullthrows(this._graph.getNode(id)))
      .filter(n => n.type === 'dependency')
      .map(n => {
        invariant(n.type === 'dependency');
        return n.value;
      });
  }

  getAssetWithDependency(dep: Dependency): ?Asset {
    if (!this._graph.hasContentKey(dep.id)) {
      return null;
    }

    let res = this._graph.getNodeIdsConnectedTo(
      this._graph.getNodeIdByContentKey(dep.id),
    );
    invariant(
      res.length <= 1,
      'Expected a single asset to be connected to a dependency',
    );
    let resNode = this._graph.getNode(res[0]);
    if (resNode?.type === 'asset') {
      return resNode.value;
    }
  }

  bundleHasAsset(bundle: Bundle, asset: Asset): boolean {
    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);
    let assetNodeId = this._graph.getNodeIdByContentKey(asset.id);
    return this._graph.hasEdge(
      bundleNodeId,
      assetNodeId,
      bundleGraphEdgeTypes.contains,
    );
  }

  bundleHasDependency(bundle: Bundle, dependency: Dependency): boolean {
    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);
    let dependencyNodeId = this._graph.getNodeIdByContentKey(dependency.id);
    return this._graph.hasEdge(
      bundleNodeId,
      dependencyNodeId,
      bundleGraphEdgeTypes.contains,
    );
  }

  filteredTraverse<TValue, TContext>(
    bundleNodeId: NodeId,
    filter: (NodeId, TraversalActions) => ?TValue,
    visit: GraphVisitor<TValue, TContext>,
  ): ?TContext {
    return this._graph.filteredTraverse(filter, visit, bundleNodeId);
  }

  getSymbolResolution(
    asset: Asset,
    symbol: Symbol,
    boundary: ?Bundle,
  ): InternalSymbolResolution {
    let assetOutside = boundary && !this.bundleHasAsset(boundary, asset);

    let identifier = asset.symbols?.get(symbol)?.local;
    if (symbol === '*') {
      return {
        asset,
        exportSymbol: '*',
        symbol: identifier ?? null,
        loc: asset.symbols?.get(symbol)?.loc,
      };
    }

    let found = false;
    let nonStaticDependency = false;
    let skipped = false;
    let deps = this.getDependencies(asset).reverse();
    let potentialResults = [];
    for (let dep of deps) {
      let depSymbols = dep.symbols;
      if (!depSymbols) {
        nonStaticDependency = true;
        continue;
      }
      // If this is a re-export, find the original module.
      let symbolLookup = new Map(
        [...depSymbols].map(([key, val]) => [val.local, key]),
      );
      let depSymbol = symbolLookup.get(identifier);
      if (depSymbol != null) {
        let resolved = this.getResolvedAsset(dep);
        if (!resolved || resolved.id === asset.id) {
          // External module or self-reference
          return {
            asset,
            exportSymbol: symbol,
            symbol: identifier,
            loc: asset.symbols?.get(symbol)?.loc,
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
          loc,
        } = this.getSymbolResolution(resolved, depSymbol, boundary);

        if (!loc) {
          // Remember how we got there
          loc = asset.symbols?.get(symbol)?.loc;
        }

        return {
          asset: resolvedAsset,
          symbol: resolvedSymbol,
          exportSymbol,
          loc,
        };
      }
      // If this module exports wildcards, resolve the original module.
      // Default exports are excluded from wildcard exports.
      // Wildcard reexports are never listed in the reexporting asset's symbols.
      if (
        identifier == null &&
        depSymbols.get('*')?.local === '*' &&
        symbol !== 'default'
      ) {
        let resolved = this.getResolvedAsset(dep);
        if (!resolved) {
          continue;
        }
        let result = this.getSymbolResolution(resolved, symbol, boundary);

        // We found the symbol
        if (result.symbol != undefined) {
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
            loc: resolved.symbols?.get(symbol)?.loc,
          };
        }
        if (result.symbol === null) {
          found = true;
          if (boundary && !this.bundleHasAsset(boundary, result.asset)) {
            // If the returned asset is outside (and it's the first asset that is outside), return it.
            if (!assetOutside) {
              return {
                asset: result.asset,
                symbol: result.symbol,
                exportSymbol: result.exportSymbol,
                loc: resolved.symbols?.get(symbol)?.loc,
              };
            } else {
              // Otherwise the original asset will be returned at the end.
              break;
            }
          } else {
            // We didn't find it in this dependency, but it might still be there: bailout.
            // Continue searching though, with the assumption that there are no conficting reexports
            // and there might be a another (re)export (where we might statically find the symbol).
            potentialResults.push({
              asset: result.asset,
              symbol: result.symbol,
              exportSymbol: result.exportSymbol,
              loc: resolved.symbols?.get(symbol)?.loc,
            });
          }
        }
      }
    }
    // We didn't find the exact symbol...
    if (potentialResults.length == 1) {
      // ..., but if it does exist, it has to be behind this one reexport.
      return potentialResults[0];
    } else {
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
          // If not exported explicitly by the asset (= would have to be in * or a reexport-all) ...
          if (nonStaticDependency || asset.symbols?.has('*')) {
            // ... and if there are non-statically analyzable dependencies or it's a CJS asset,
            // fallback to namespace access.
            result = null;
          }
          // (It shouldn't be possible for the symbol to be in a reexport-all and to end up here).
          // Otherwise return undefined to report that the symbol wasn't found.
        }
      }

      return {
        asset,
        exportSymbol: symbol,
        symbol: result,
        loc: asset.symbols?.get(symbol)?.loc,
      };
    }
  }
  getAssetById(contentKey: string): Asset {
    let node = this._graph.getNodeByContentKey(contentKey);
    if (node == null) {
      throw new Error('Node not found');
    } else if (node.type !== 'asset') {
      throw new Error('Node was not an asset');
    }

    return node.value;
  }

  getAssetPublicId(asset: Asset): string {
    let publicId = this._publicIdByAssetId.get(asset.id);
    if (publicId == null) {
      throw new Error("Asset or it's public id not found");
    }

    return publicId;
  }

  getExportedSymbols(
    asset: Asset,
    boundary: ?Bundle,
  ): Array<InternalExportSymbolResolution> {
    if (!asset.symbols) {
      return [];
    }

    let symbols = [];

    for (let symbol of asset.symbols.keys()) {
      symbols.push({
        ...this.getSymbolResolution(asset, symbol, boundary),
        exportAs: symbol,
      });
    }

    let deps = this.getDependencies(asset);
    for (let dep of deps) {
      let depSymbols = dep.symbols;
      if (!depSymbols) continue;

      if (depSymbols.get('*')?.local === '*') {
        let resolved = this.getResolvedAsset(dep);
        if (!resolved) continue;
        let exported = this.getExportedSymbols(resolved, boundary)
          .filter(s => s.exportSymbol !== 'default')
          .map(s =>
            s.exportSymbol !== '*' ? {...s, exportAs: s.exportSymbol} : s,
          );
        symbols.push(...exported);
      }
    }

    return symbols;
  }

  getContentHash(bundle: Bundle): string {
    let existingHash = this._bundleContentHashes.get(bundle.id);
    if (existingHash != null) {
      return existingHash;
    }

    let hash = new Hash();
    // TODO: sort??
    this.traverseAssets(bundle, asset => {
      {
        hash.writeString(
          [
            this.getAssetPublicId(asset),
            asset.outputHash,
            asset.filePath,
            asset.query,
            asset.type,
            asset.uniqueKey,
          ].join(':'),
        );
      }
    });

    let hashHex = hash.finish();
    this._bundleContentHashes.set(bundle.id, hashHex);
    return hashHex;
  }

  getInlineBundles(bundle: Bundle): Array<Bundle> {
    let bundles = [];
    let seen = new Set();
    let addReferencedBundles = bundle => {
      if (seen.has(bundle.id)) {
        return;
      }

      seen.add(bundle.id);

      let referencedBundles = this.getReferencedBundles(bundle, {
        includeInline: true,
      });
      for (let referenced of referencedBundles) {
        if (referenced.bundleBehavior === BundleBehavior.inline) {
          bundles.push(referenced);
          addReferencedBundles(referenced);
        }
      }
    };

    addReferencedBundles(bundle);

    this.traverseBundles((childBundle, _, traversal) => {
      if (childBundle.bundleBehavior === BundleBehavior.inline) {
        bundles.push(childBundle);
      } else if (childBundle.id !== bundle.id) {
        traversal.skipChildren();
      }
    }, bundle);

    return bundles;
  }

  getHash(bundle: Bundle): string {
    let hash = new Hash();
    hash.writeString(
      bundle.id + bundle.target.publicUrl + this.getContentHash(bundle),
    );

    let inlineBundles = this.getInlineBundles(bundle);
    for (let inlineBundle of inlineBundles) {
      hash.writeString(this.getContentHash(inlineBundle));
    }

    for (let referencedBundle of this.getReferencedBundles(bundle)) {
      hash.writeString(referencedBundle.id);
    }

    hash.writeString(JSON.stringify(objectSortedEntriesDeep(bundle.env)));
    return hash.finish();
  }

  getBundleGraphHash(): string {
    let hashes = '';
    for (let bundle of this.getBundles()) {
      hashes += this.getHash(bundle);
    }

    return hashString(hashes);
  }

  addBundleToBundleGroup(bundle: Bundle, bundleGroup: BundleGroup) {
    let bundleGroupNodeId = this._graph.getNodeIdByContentKey(
      getBundleGroupId(bundleGroup),
    );
    let bundleNodeId = this._graph.getNodeIdByContentKey(bundle.id);
    if (
      this._graph.hasEdge(
        bundleGroupNodeId,
        bundleNodeId,
        bundleGraphEdgeTypes.bundle,
      )
    ) {
      // Bundle group already has bundle
      return;
    }

    this._graph.addEdge(bundleGroupNodeId, bundleNodeId);
    this._graph.addEdge(
      bundleGroupNodeId,
      bundleNodeId,
      bundleGraphEdgeTypes.bundle,
    );

    for (let entryAssetId of bundle.entryAssetIds) {
      let entryAssetNodeId = this._graph.getNodeIdByContentKey(entryAssetId);
      if (this._graph.hasEdge(bundleGroupNodeId, entryAssetNodeId)) {
        this._graph.removeEdge(bundleGroupNodeId, entryAssetNodeId);
      }
    }
  }

  getUsedSymbolsAsset(asset: Asset): ?$ReadOnlySet<Symbol> {
    let node = this._graph.getNodeByContentKey(asset.id);
    invariant(node && node.type === 'asset');
    return this._symbolPropagationRan
      ? makeReadOnlySet(new Set(node.usedSymbols.keys()))
      : null;
  }

  getUsedSymbolsDependency(dep: Dependency): ?$ReadOnlySet<Symbol> {
    let node = this._graph.getNodeByContentKey(dep.id);
    invariant(node && node.type === 'dependency');
    let result = new Set(node.usedSymbolsUp.keys());
    return this._symbolPropagationRan ? makeReadOnlySet(result) : null;
  }

  merge(other: BundleGraph) {
    let otherGraphIdToThisNodeId = new Map<NodeId, NodeId>();
    for (let [otherNodeId, otherNode] of other._graph.nodes) {
      if (this._graph.hasContentKey(otherNode.id)) {
        let existingNodeId = this._graph.getNodeIdByContentKey(otherNode.id);
        otherGraphIdToThisNodeId.set(otherNodeId, existingNodeId);

        let existingNode = nullthrows(this._graph.getNode(existingNodeId));
        // Merge symbols, recompute dep.excluded based on that
        if (existingNode.type === 'asset') {
          invariant(otherNode.type === 'asset');
          existingNode.usedSymbols = new Set([
            ...existingNode.usedSymbols,
            ...otherNode.usedSymbols,
          ]);
        } else if (existingNode.type === 'dependency') {
          invariant(otherNode.type === 'dependency');
          existingNode.usedSymbolsDown = new Set([
            ...existingNode.usedSymbolsDown,
            ...otherNode.usedSymbolsDown,
          ]);
          existingNode.usedSymbolsUp = new Map([
            ...existingNode.usedSymbolsUp,
            ...otherNode.usedSymbolsUp,
          ]);

          existingNode.excluded =
            (existingNode.excluded || Boolean(existingNode.hasDeferred)) &&
            (otherNode.excluded || Boolean(otherNode.hasDeferred));
        }
      } else {
        let updateNodeId = this._graph.addNodeByContentKey(
          otherNode.id,
          otherNode,
        );
        otherGraphIdToThisNodeId.set(otherNodeId, updateNodeId);
      }
    }

    for (let edge of other._graph.getAllEdges()) {
      this._graph.addEdge(
        nullthrows(otherGraphIdToThisNodeId.get(edge.from)),
        nullthrows(otherGraphIdToThisNodeId.get(edge.to)),
        edge.type,
      );
    }
  }

  isEntryBundleGroup(bundleGroup: BundleGroup): boolean {
    return this._graph
      .getNodeIdsConnectedTo(
        nullthrows(
          this._graph.getNodeIdByContentKey(getBundleGroupId(bundleGroup)),
        ),
        bundleGraphEdgeTypes.bundle,
      )
      .map(id => nullthrows(this._graph.getNode(id)))
      .some(n => n.type === 'root');
  }

  /**
   * Update the asset in a Bundle Graph and clear the associated Bundle hash.
   */
  updateAsset(asset: Asset) {
    this._graph.updateNode(
      this._graph.getNodeIdByContentKey(asset.id),
      nodeFromAsset(asset),
    );
    let bundles = this.getBundlesWithAsset(asset);
    for (let bundle of bundles) {
      // the bundle content will change with a modified asset
      this._bundleContentHashes.delete(bundle.id);
    }
  }

  getEntryRoot(projectRoot: FilePath, target: Target): FilePath {
    let cached = this._targetEntryRoots.get(target.distDir);
    if (cached != null) {
      return cached;
    }

    let entryBundleGroupIds = this._graph.getNodeIdsConnectedFrom(
      nullthrows(this._graph.rootNodeId),
      bundleGraphEdgeTypes.bundle,
    );

    let entries = [];
    for (let bundleGroupId of entryBundleGroupIds) {
      let bundleGroupNode = this._graph.getNode(bundleGroupId);
      invariant(bundleGroupNode?.type === 'bundle_group');

      if (bundleGroupNode.value.target.distDir === target.distDir) {
        let entryAssetNode = this._graph.getNodeByContentKey(
          bundleGroupNode.value.entryAssetId,
        );
        invariant(entryAssetNode?.type === 'asset');
        entries.push(
          fromProjectPath(projectRoot, entryAssetNode.value.filePath),
        );
      }
    }

    let root = getRootDir(entries);
    this._targetEntryRoots.set(target.distDir, root);
    return root;
  }
}
