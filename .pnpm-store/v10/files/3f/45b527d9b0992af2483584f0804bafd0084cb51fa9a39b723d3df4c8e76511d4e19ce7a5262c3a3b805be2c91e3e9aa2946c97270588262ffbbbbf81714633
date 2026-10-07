// @flow strict-local

import type {GraphVisitor} from '@parcel/types';
import type {
  ContentGraphOpts,
  ContentKey,
  NodeId,
  SerializedContentGraph,
} from '@parcel/graph';
import type {
  Asset,
  AssetGraphNode,
  AssetGroup,
  AssetGroupNode,
  AssetNode,
  Dependency,
  DependencyNode,
  Entry,
  EntryFileNode,
  EntrySpecifierNode,
  Environment,
  Target,
} from './types';

import invariant from 'assert';
import {hashString, Hash} from '@parcel/hash';
import {hashObject} from '@parcel/utils';
import nullthrows from 'nullthrows';
import {ContentGraph} from '@parcel/graph';
import {createDependency} from './Dependency';
import {type ProjectPath, fromProjectPathRelative} from './projectPath';

type InitOpts = {|
  entries?: Array<ProjectPath>,
  targets?: Array<Target>,
  assetGroups?: Array<AssetGroup>,
|};

type AssetGraphOpts = {|
  ...ContentGraphOpts<AssetGraphNode>,
  symbolPropagationRan: boolean,
  hash?: ?string,
|};

type SerializedAssetGraph = {|
  ...SerializedContentGraph<AssetGraphNode>,
  hash?: ?string,
  symbolPropagationRan: boolean,
|};

export function nodeFromDep(dep: Dependency): DependencyNode {
  return {
    id: dep.id,
    type: 'dependency',
    value: dep,
    deferred: false,
    excluded: false,
    usedSymbolsDown: new Set(),
    usedSymbolsUp: new Map(),
    usedSymbolsDownDirty: true,
    usedSymbolsUpDirtyDown: true,
    usedSymbolsUpDirtyUp: true,
  };
}

export function nodeFromAssetGroup(assetGroup: AssetGroup): AssetGroupNode {
  return {
    id: hashString(
      fromProjectPathRelative(assetGroup.filePath) +
        assetGroup.env.id +
        String(assetGroup.isSource) +
        String(assetGroup.sideEffects) +
        (assetGroup.code ?? '') +
        ':' +
        (assetGroup.pipeline ?? '') +
        ':' +
        (assetGroup.query ?? ''),
    ),
    type: 'asset_group',
    value: assetGroup,
    usedSymbolsDownDirty: true,
  };
}

export function nodeFromAsset(asset: Asset): AssetNode {
  return {
    id: asset.id,
    type: 'asset',
    value: asset,
    usedSymbols: new Set(),
    usedSymbolsDownDirty: true,
    usedSymbolsUpDirty: true,
  };
}

export function nodeFromEntrySpecifier(entry: ProjectPath): EntrySpecifierNode {
  return {
    id: 'entry_specifier:' + fromProjectPathRelative(entry),
    type: 'entry_specifier',
    value: entry,
  };
}

export function nodeFromEntryFile(entry: Entry): EntryFileNode {
  return {
    id: 'entry_file:' + hashObject(entry),
    type: 'entry_file',
    value: entry,
  };
}

export default class AssetGraph extends ContentGraph<AssetGraphNode> {
  onNodeRemoved: ?(nodeId: NodeId) => mixed;
  hash: ?string;
  envCache: Map<string, Environment>;
  symbolPropagationRan: boolean;
  safeToIncrementallyBundle: boolean = true;

  constructor(opts: ?AssetGraphOpts) {
    if (opts) {
      let {hash, symbolPropagationRan, ...rest} = opts;
      super(rest);
      this.hash = hash;
      this.symbolPropagationRan = symbolPropagationRan;
    } else {
      super();
      this.setRootNodeId(
        this.addNode({
          id: '@@root',
          type: 'root',
          value: null,
        }),
      );
    }
    this.envCache = new Map();
    this.symbolPropagationRan = false;
  }

  // $FlowFixMe[prop-missing]
  static deserialize(opts: AssetGraphOpts): AssetGraph {
    return new AssetGraph(opts);
  }

  // $FlowFixMe[prop-missing]
  serialize(): SerializedAssetGraph {
    return {
      ...super.serialize(),
      hash: this.hash,
      symbolPropagationRan: this.symbolPropagationRan,
    };
  }

  // Deduplicates Environments by making them referentially equal
  normalizeEnvironment(input: Asset | Dependency | AssetGroup) {
    let {id, context} = input.env;
    let idAndContext = `${id}-${context}`;

    let env = this.envCache.get(idAndContext);
    if (env) {
      input.env = env;
    } else {
      this.envCache.set(idAndContext, input.env);
    }
  }

  setRootConnections({entries, assetGroups}: InitOpts) {
    let nodes = [];
    if (entries) {
      for (let entry of entries) {
        let node = nodeFromEntrySpecifier(entry);
        nodes.push(node);
      }
    } else if (assetGroups) {
      nodes.push(
        ...assetGroups.map(assetGroup => nodeFromAssetGroup(assetGroup)),
      );
    }
    this.replaceNodeIdsConnectedTo(
      nullthrows(this.rootNodeId),
      nodes.map(node => this.addNode(node)),
    );
  }

  addNode(node: AssetGraphNode): NodeId {
    this.hash = null;
    let existing = this.getNodeByContentKey(node.id);
    if (existing != null) {
      invariant(existing.type === node.type);
      // $FlowFixMe[incompatible-type] Checked above
      // $FlowFixMe[prop-missing]
      existing.value = node.value;
      let existingId = this.getNodeIdByContentKey(node.id);
      this.updateNode(existingId, existing);
      return existingId;
    }
    return super.addNodeByContentKey(node.id, node);
  }

  removeNode(nodeId: NodeId): void {
    this.hash = null;
    this.onNodeRemoved && this.onNodeRemoved(nodeId);
    // This needs to mark all connected nodes that doesn't become orphaned
    // due to replaceNodesConnectedTo to make sure that the symbols of
    // nodes from which at least one parent was removed are updated.
    let node = nullthrows(this.getNode(nodeId));
    if (this.isOrphanedNode(nodeId) && node.type === 'dependency') {
      let children = this.getNodeIdsConnectedFrom(nodeId).map(id =>
        nullthrows(this.getNode(id)),
      );
      for (let n of children) {
        invariant(n.type === 'asset_group' || n.type === 'asset');
        n.usedSymbolsDownDirty = true;
      }
    }
    return super.removeNode(nodeId);
  }

  resolveEntry(
    entry: ProjectPath,
    resolved: Array<Entry>,
    correspondingRequest: ContentKey,
  ) {
    let entrySpecifierNodeId = this.getNodeIdByContentKey(
      nodeFromEntrySpecifier(entry).id,
    );
    let entrySpecifierNode = nullthrows(this.getNode(entrySpecifierNodeId));
    invariant(entrySpecifierNode.type === 'entry_specifier');
    entrySpecifierNode.correspondingRequest = correspondingRequest;

    this.replaceNodeIdsConnectedTo(
      entrySpecifierNodeId,
      resolved.map(file => this.addNode(nodeFromEntryFile(file))),
    );
  }

  resolveTargets(
    entry: Entry,
    targets: Array<Target>,
    correspondingRequest: string,
  ) {
    let depNodes = targets.map(target => {
      let node = nodeFromDep(
        // The passed project path is ignored in this case, because there is no `loc`
        createDependency('', {
          specifier: fromProjectPathRelative(entry.filePath),
          specifierType: 'esm', // ???
          pipeline: target.pipeline,
          target: target,
          env: target.env,
          isEntry: true,
          needsStableName: true,
          symbols: target.env.isLibrary
            ? new Map([['*', {local: '*', isWeak: true, loc: null}]])
            : undefined,
        }),
      );

      if (node.value.env.isLibrary) {
        // in library mode, all of the entry's symbols are "used"
        node.usedSymbolsDown.add('*');
      }
      return node;
    });

    let entryNodeId = this.getNodeIdByContentKey(nodeFromEntryFile(entry).id);
    let entryNode = nullthrows(this.getNode(entryNodeId));
    invariant(entryNode.type === 'entry_file');
    entryNode.correspondingRequest = correspondingRequest;

    this.replaceNodeIdsConnectedTo(
      entryNodeId,
      depNodes.map(node => this.addNode(node)),
    );
  }

  resolveDependency(
    dependency: Dependency,
    assetGroup: ?AssetGroup,
    correspondingRequest: string,
  ) {
    let depNodeId = this.getNodeIdByContentKey(dependency.id);
    let depNode = nullthrows(this.getNode(depNodeId));
    invariant(depNode.type === 'dependency');
    depNode.correspondingRequest = correspondingRequest;

    if (!assetGroup) {
      return;
    }

    let assetGroupNode = nodeFromAssetGroup(assetGroup);
    let existing = this.getNodeByContentKey(assetGroupNode.id);
    if (existing != null) {
      invariant(existing.type === 'asset_group');
      assetGroupNode.value.canDefer =
        assetGroupNode.value.canDefer && existing.value.canDefer;
    }

    let assetGroupNodeId = this.addNode(assetGroupNode);
    this.replaceNodeIdsConnectedTo(this.getNodeIdByContentKey(dependency.id), [
      assetGroupNodeId,
    ]);

    this.replaceNodeIdsConnectedTo(depNodeId, [assetGroupNodeId]);
  }

  shouldVisitChild(nodeId: NodeId, childNodeId: NodeId): boolean {
    let node = nullthrows(this.getNode(nodeId));
    let childNode = nullthrows(this.getNode(childNodeId));
    if (
      node.type !== 'dependency' ||
      childNode.type !== 'asset_group' ||
      childNode.deferred === false
    ) {
      return true;
    }
    // Node types are proved above
    let dependencyNode = node;
    let assetGroupNode = childNode;

    let {sideEffects, canDefer = true} = assetGroupNode.value;
    let dependency = dependencyNode.value;
    let dependencyPreviouslyDeferred = dependencyNode.hasDeferred;
    let assetGroupPreviouslyDeferred = assetGroupNode.deferred;
    let defer = this.shouldDeferDependency(dependency, sideEffects, canDefer);
    dependencyNode.hasDeferred = defer;
    assetGroupNode.deferred = defer;

    if (!dependencyPreviouslyDeferred && defer) {
      this.markParentsWithHasDeferred(nodeId);
    } else if (assetGroupPreviouslyDeferred && !defer) {
      this.unmarkParentsWithHasDeferred(childNodeId);
    }

    return !defer;
  }

  // Dependency: mark parent Asset <- AssetGroup with hasDeferred true
  markParentsWithHasDeferred(nodeId: NodeId) {
    this.traverseAncestors(nodeId, (traversedNodeId, _, actions) => {
      let traversedNode = nullthrows(this.getNode(traversedNodeId));
      if (traversedNode.type === 'asset') {
        traversedNode.hasDeferred = true;
      } else if (traversedNode.type === 'asset_group') {
        traversedNode.hasDeferred = true;
        actions.skipChildren();
      } else if (nodeId !== traversedNodeId) {
        actions.skipChildren();
      }
    });
  }

  // AssetGroup: update hasDeferred of all parent Dependency <- Asset <- AssetGroup
  unmarkParentsWithHasDeferred(nodeId: NodeId) {
    this.traverseAncestors(nodeId, (traversedNodeId, ctx, actions) => {
      let traversedNode = nullthrows(this.getNode(traversedNodeId));
      if (traversedNode.type === 'asset') {
        let hasDeferred = this.getNodeIdsConnectedFrom(traversedNodeId).some(
          childNodeId => {
            let childNode = nullthrows(this.getNode(childNodeId));
            return childNode.hasDeferred == null
              ? false
              : childNode.hasDeferred;
          },
        );
        if (!hasDeferred) {
          delete traversedNode.hasDeferred;
        }
        return {hasDeferred};
      } else if (
        traversedNode.type === 'asset_group' &&
        nodeId !== traversedNodeId
      ) {
        if (!ctx?.hasDeferred) {
          delete traversedNode.hasDeferred;
        }
        actions.skipChildren();
      } else if (traversedNode.type === 'dependency') {
        traversedNode.hasDeferred = false;
      } else if (nodeId !== traversedNodeId) {
        actions.skipChildren();
      }
    });
  }

  // Defer transforming this dependency if it is marked as weak, there are no side effects,
  // no re-exported symbols are used by ancestor dependencies and the re-exporting asset isn't
  // using a wildcard and isn't an entry (in library mode).
  // This helps with performance building large libraries like `lodash-es`, which re-exports
  // a huge number of functions since we can avoid even transforming the files that aren't used.
  shouldDeferDependency(
    dependency: Dependency,
    sideEffects: ?boolean,
    canDefer: boolean,
  ): boolean {
    let defer = false;
    let dependencySymbols = dependency.symbols;
    if (
      dependencySymbols &&
      [...dependencySymbols].every(([, {isWeak}]) => isWeak) &&
      sideEffects === false &&
      canDefer &&
      !dependencySymbols.has('*')
    ) {
      let depNodeId = this.getNodeIdByContentKey(dependency.id);
      let depNode = this.getNode(depNodeId);
      invariant(depNode);

      let assets = this.getNodeIdsConnectedTo(depNodeId);
      let symbols = new Map(
        [...dependencySymbols].map(([key, val]) => [val.local, key]),
      );
      invariant(assets.length === 1);
      let firstAsset = nullthrows(this.getNode(assets[0]));
      invariant(firstAsset.type === 'asset');
      let resolvedAsset = firstAsset.value;
      let deps = this.getIncomingDependencies(resolvedAsset);
      defer = deps.every(
        d =>
          d.symbols &&
          !(d.env.isLibrary && d.isEntry) &&
          !d.symbols.has('*') &&
          ![...d.symbols.keys()].some(symbol => {
            if (!resolvedAsset.symbols) return true;
            let assetSymbol = resolvedAsset.symbols?.get(symbol)?.local;
            return assetSymbol != null && symbols.has(assetSymbol);
          }),
      );
    }
    return defer;
  }

  resolveAssetGroup(
    assetGroup: AssetGroup,
    assets: Array<Asset>,
    correspondingRequest: ContentKey,
  ) {
    this.normalizeEnvironment(assetGroup);
    let assetGroupNode = nodeFromAssetGroup(assetGroup);
    assetGroupNode = this.getNodeByContentKey(assetGroupNode.id);
    if (!assetGroupNode) {
      return;
    }
    invariant(assetGroupNode.type === 'asset_group');
    assetGroupNode.correspondingRequest = correspondingRequest;

    let assetsByKey = new Map();
    for (let asset of assets) {
      if (asset.uniqueKey != null) {
        assetsByKey.set(asset.uniqueKey, asset);
      }
    }

    let dependentAssetKeys = new Set();
    for (let asset of assets) {
      for (let dep of asset.dependencies.values()) {
        if (assetsByKey.has(dep.specifier)) {
          dependentAssetKeys.add(dep.specifier);
        }
      }
    }

    let assetObjects: Array<{|
      assetNodeId: NodeId,
      dependentAssets: Array<Asset>,
    |}> = [];
    let assetNodeIds = [];
    for (let asset of assets) {
      this.normalizeEnvironment(asset);
      let isDirect = !dependentAssetKeys.has(asset.uniqueKey);

      let dependentAssets = [];
      for (let dep of asset.dependencies.values()) {
        let dependentAsset = assetsByKey.get(dep.specifier);
        if (dependentAsset) {
          dependentAssets.push(dependentAsset);
        }
      }
      let id = this.addNode(nodeFromAsset(asset));
      assetObjects.push({
        assetNodeId: id,
        dependentAssets,
      });

      if (isDirect) {
        assetNodeIds.push(id);
      }
    }

    this.replaceNodeIdsConnectedTo(
      this.getNodeIdByContentKey(assetGroupNode.id),
      assetNodeIds,
    );
    for (let {assetNodeId, dependentAssets} of assetObjects) {
      // replaceNodesConnectedTo has merged the value into the existing node, retrieve
      // the actual current node.
      let assetNode = nullthrows(this.getNode(assetNodeId));
      invariant(assetNode.type === 'asset');
      this.resolveAsset(assetNode, dependentAssets);
    }
  }

  resolveAsset(assetNode: AssetNode, dependentAssets: Array<Asset>) {
    let depNodeIds: Array<NodeId> = [];
    let depNodesWithAssets = [];
    for (let dep of assetNode.value.dependencies.values()) {
      this.normalizeEnvironment(dep);
      let depNode = nodeFromDep(dep);
      let existing = this.getNodeByContentKey(depNode.id);
      if (
        existing?.type === 'dependency' &&
        existing.value.resolverMeta != null
      ) {
        depNode.value.meta = {
          ...depNode.value.meta,
          ...existing.value.resolverMeta,
        };
      }
      let dependentAsset = dependentAssets.find(
        a => a.uniqueKey === dep.specifier,
      );
      if (dependentAsset) {
        depNode.complete = true;
        depNodesWithAssets.push([depNode, nodeFromAsset(dependentAsset)]);
      }
      depNode.value.sourceAssetType = assetNode.value.type;
      depNodeIds.push(this.addNode(depNode));
    }

    assetNode.usedSymbolsDownDirty = true;
    this.replaceNodeIdsConnectedTo(
      this.getNodeIdByContentKey(assetNode.id),
      depNodeIds,
    );

    for (let [depNode, dependentAssetNode] of depNodesWithAssets) {
      let depAssetNodeId = this.addNode(dependentAssetNode);

      this.replaceNodeIdsConnectedTo(this.getNodeIdByContentKey(depNode.id), [
        depAssetNodeId,
      ]);
    }
  }

  getIncomingDependencies(asset: Asset): Array<Dependency> {
    let nodeId = this.getNodeIdByContentKey(asset.id);
    let assetGroupIds = this.getNodeIdsConnectedTo(nodeId);
    let dependencies = [];
    for (let i = 0; i < assetGroupIds.length; i++) {
      let assetGroupId = assetGroupIds[i];

      // Sometimes assets are connected directly to dependencies
      // rather than through an asset group. This happens due to
      // inline dependencies on assets via uniqueKey. See resolveAsset.
      let node = this.getNode(assetGroupId);
      if (node?.type === 'dependency') {
        dependencies.push(node.value);
        continue;
      }

      let assetIds = this.getNodeIdsConnectedTo(assetGroupId);
      for (let j = 0; j < assetIds.length; j++) {
        let node = this.getNode(assetIds[j]);
        if (!node || node.type !== 'dependency') {
          continue;
        }

        dependencies.push(node.value);
      }
    }

    return dependencies;
  }

  traverseAssets<TContext>(
    visit: GraphVisitor<Asset, TContext>,
    startNodeId: ?NodeId,
  ): ?TContext {
    return this.filteredTraverse(
      nodeId => {
        let node = nullthrows(this.getNode(nodeId));
        return node.type === 'asset' ? node.value : null;
      },
      visit,
      startNodeId,
    );
  }

  getEntryAssetGroupNodes(): Array<AssetGroupNode> {
    let entryNodes = [];
    this.traverse((nodeId, _, actions) => {
      let node = nullthrows(this.getNode(nodeId));
      if (node.type === 'asset_group') {
        entryNodes.push(node);
        actions.skipChildren();
      }
    });
    return entryNodes;
  }

  getEntryAssets(): Array<Asset> {
    let entries = [];
    this.traverseAssets((asset, ctx, traversal) => {
      entries.push(asset);
      traversal.skipChildren();
    });

    return entries;
  }

  getHash(): string {
    if (this.hash != null) {
      return this.hash;
    }

    let hash = new Hash();
    // TODO: sort??
    this.traverse(nodeId => {
      let node = nullthrows(this.getNode(nodeId));
      if (node.type === 'asset') {
        hash.writeString(nullthrows(node.value.outputHash));
      } else if (node.type === 'dependency' && node.value.target) {
        hash.writeString(JSON.stringify(node.value.target));
      }
    });

    this.hash = hash.finish();
    return this.hash;
  }
}
