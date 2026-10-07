// @flow strict-local

import type {
  Asset as IAsset,
  Bundle as IBundle,
  BundleGroup as IBundleGroup,
  CreateBundleOpts,
  Dependency as IDependency,
  MutableBundleGraph as IMutableBundleGraph,
  Target,
} from '@parcel/types';
import type {ParcelOptions, BundleGroup as InternalBundleGroup} from '../types';

import invariant from 'assert';
import nullthrows from 'nullthrows';
import {hashString} from '@parcel/hash';
import BundleGraph from './BundleGraph';
import InternalBundleGraph, {bundleGraphEdgeTypes} from '../BundleGraph';
import {Bundle, bundleToInternalBundle} from './Bundle';
import {assetFromValue, assetToAssetValue} from './Asset';
import {getBundleGroupId, getPublicId} from '../utils';
import Dependency, {dependencyToInternalDependency} from './Dependency';
import {environmentToInternalEnvironment} from './Environment';
import {targetToInternalTarget} from './Target';
import {HASH_REF_PREFIX} from '../constants';
import {fromProjectPathRelative} from '../projectPath';
import {BundleBehavior} from '../types';
import BundleGroup, {bundleGroupToInternalBundleGroup} from './BundleGroup';

export default class MutableBundleGraph
  extends BundleGraph<IBundle>
  implements IMutableBundleGraph
{
  #graph /*: InternalBundleGraph */;
  #options /*: ParcelOptions */;
  #bundlePublicIds /*: Set<string> */ = new Set<string>();

  constructor(graph: InternalBundleGraph, options: ParcelOptions) {
    super(graph, Bundle.get.bind(Bundle), options);
    this.#graph = graph;
    this.#options = options;
  }

  addAssetToBundle(asset: IAsset, bundle: IBundle) {
    this.#graph.addAssetToBundle(
      assetToAssetValue(asset),
      bundleToInternalBundle(bundle),
    );
  }

  addAssetGraphToBundle(
    asset: IAsset,
    bundle: IBundle,
    shouldSkipDependency?: IDependency => boolean,
  ) {
    this.#graph.addAssetGraphToBundle(
      assetToAssetValue(asset),
      bundleToInternalBundle(bundle),
      shouldSkipDependency
        ? d => shouldSkipDependency(new Dependency(d, this.#options))
        : undefined,
    );
  }

  addEntryToBundle(
    asset: IAsset,
    bundle: IBundle,
    shouldSkipDependency?: IDependency => boolean,
  ) {
    this.#graph.addEntryToBundle(
      assetToAssetValue(asset),
      bundleToInternalBundle(bundle),
      shouldSkipDependency
        ? d => shouldSkipDependency(new Dependency(d, this.#options))
        : undefined,
    );
  }

  createBundleGroup(dependency: IDependency, target: Target): IBundleGroup {
    let dependencyNode = this.#graph._graph.getNodeByContentKey(dependency.id);
    if (!dependencyNode) {
      throw new Error('Dependency not found');
    }

    invariant(dependencyNode.type === 'dependency');

    let resolved = this.#graph.getResolvedAsset(
      dependencyToInternalDependency(dependency),
    );
    if (!resolved) {
      throw new Error(
        'Dependency did not resolve to an asset ' + dependency.id,
      );
    }

    let bundleGroup: InternalBundleGroup = {
      target: targetToInternalTarget(target),
      entryAssetId: resolved.id,
    };

    let bundleGroupKey = getBundleGroupId(bundleGroup);
    let bundleGroupNodeId = this.#graph._graph.hasContentKey(bundleGroupKey)
      ? this.#graph._graph.getNodeIdByContentKey(bundleGroupKey)
      : this.#graph._graph.addNodeByContentKey(bundleGroupKey, {
          id: bundleGroupKey,
          type: 'bundle_group',
          value: bundleGroup,
        });

    let dependencyNodeId = this.#graph._graph.getNodeIdByContentKey(
      dependencyNode.id,
    );
    let resolvedNodeId = this.#graph._graph.getNodeIdByContentKey(resolved.id);
    let assetNodes =
      this.#graph._graph.getNodeIdsConnectedFrom(dependencyNodeId);
    this.#graph._graph.addEdge(dependencyNodeId, bundleGroupNodeId);
    this.#graph._graph.replaceNodeIdsConnectedTo(bundleGroupNodeId, assetNodes);
    this.#graph._graph.addEdge(
      dependencyNodeId,
      resolvedNodeId,
      bundleGraphEdgeTypes.references,
    );
    this.#graph._graph.removeEdge(dependencyNodeId, resolvedNodeId);

    if (dependency.isEntry) {
      this.#graph._graph.addEdge(
        nullthrows(this.#graph._graph.rootNodeId),
        bundleGroupNodeId,
        bundleGraphEdgeTypes.bundle,
      );
    } else {
      let inboundBundleNodeIds = this.#graph._graph.getNodeIdsConnectedTo(
        dependencyNodeId,
        bundleGraphEdgeTypes.contains,
      );
      for (let inboundBundleNodeId of inboundBundleNodeIds) {
        invariant(
          this.#graph._graph.getNode(inboundBundleNodeId)?.type === 'bundle',
        );
        this.#graph._graph.addEdge(
          inboundBundleNodeId,
          bundleGroupNodeId,
          bundleGraphEdgeTypes.bundle,
        );
      }
    }

    return new BundleGroup(bundleGroup, this.#options);
  }

  removeBundleGroup(bundleGroup: IBundleGroup): void {
    this.#graph.removeBundleGroup(
      bundleGroupToInternalBundleGroup(bundleGroup),
    );
  }

  internalizeAsyncDependency(bundle: IBundle, dependency: IDependency): void {
    this.#graph.internalizeAsyncDependency(
      bundleToInternalBundle(bundle),
      dependencyToInternalDependency(dependency),
    );
  }

  createBundle(opts: CreateBundleOpts): Bundle {
    let entryAsset = opts.entryAsset
      ? assetToAssetValue(opts.entryAsset)
      : null;

    let target = targetToInternalTarget(opts.target);
    let bundleId = hashString(
      'bundle:' +
        (opts.entryAsset ? opts.entryAsset.id : opts.uniqueKey) +
        fromProjectPathRelative(target.distDir) +
        (opts.bundleBehavior ?? ''),
    );

    let existing = this.#graph._graph.getNodeByContentKey(bundleId);
    if (existing != null) {
      invariant(existing.type === 'bundle');
      return Bundle.get(existing.value, this.#graph, this.#options);
    }

    let publicId = getPublicId(bundleId, existing =>
      this.#bundlePublicIds.has(existing),
    );
    this.#bundlePublicIds.add(publicId);

    let isPlaceholder = false;
    if (entryAsset) {
      let entryAssetNode = this.#graph._graph.getNodeByContentKey(
        entryAsset.id,
      );
      invariant(entryAssetNode?.type === 'asset', 'Entry asset does not exist');
      isPlaceholder = entryAssetNode.requested === false;
    }

    let bundleNode = {
      type: 'bundle',
      id: bundleId,
      value: {
        id: bundleId,
        hashReference: this.#options.shouldContentHash
          ? HASH_REF_PREFIX + bundleId
          : bundleId.slice(-8),
        type: opts.entryAsset ? opts.entryAsset.type : opts.type,
        env: opts.env
          ? environmentToInternalEnvironment(opts.env)
          : nullthrows(entryAsset).env,
        entryAssetIds: entryAsset ? [entryAsset.id] : [],
        mainEntryId: entryAsset?.id,
        pipeline: opts.entryAsset ? opts.entryAsset.pipeline : opts.pipeline,
        needsStableName: opts.needsStableName,
        bundleBehavior:
          opts.bundleBehavior != null
            ? BundleBehavior[opts.bundleBehavior]
            : null,
        isSplittable: opts.entryAsset
          ? opts.entryAsset.isBundleSplittable
          : opts.isSplittable,
        isPlaceholder,
        target,
        name: null,
        displayName: null,
        publicId,
      },
    };

    let bundleNodeId = this.#graph._graph.addNodeByContentKey(
      bundleId,
      bundleNode,
    );

    if (opts.entryAsset) {
      this.#graph._graph.addEdge(
        bundleNodeId,
        this.#graph._graph.getNodeIdByContentKey(opts.entryAsset.id),
      );
    }
    return Bundle.get(bundleNode.value, this.#graph, this.#options);
  }

  addBundleToBundleGroup(bundle: IBundle, bundleGroup: IBundleGroup) {
    this.#graph.addBundleToBundleGroup(
      bundleToInternalBundle(bundle),
      bundleGroupToInternalBundleGroup(bundleGroup),
    );
  }

  createAssetReference(
    dependency: IDependency,
    asset: IAsset,
    bundle: IBundle,
  ): void {
    return this.#graph.createAssetReference(
      dependencyToInternalDependency(dependency),
      assetToAssetValue(asset),
      bundleToInternalBundle(bundle),
    );
  }

  createBundleReference(from: IBundle, to: IBundle): void {
    return this.#graph.createBundleReference(
      bundleToInternalBundle(from),
      bundleToInternalBundle(to),
    );
  }

  getDependencyAssets(dependency: IDependency): Array<IAsset> {
    return this.#graph
      .getDependencyAssets(dependencyToInternalDependency(dependency))
      .map(asset => assetFromValue(asset, this.#options));
  }

  getBundleGroupsContainingBundle(bundle: IBundle): Array<IBundleGroup> {
    return this.#graph
      .getBundleGroupsContainingBundle(bundleToInternalBundle(bundle))
      .map(bundleGroup => new BundleGroup(bundleGroup, this.#options));
  }

  getParentBundlesOfBundleGroup(bundleGroup: IBundleGroup): Array<IBundle> {
    return this.#graph
      .getParentBundlesOfBundleGroup(
        bundleGroupToInternalBundleGroup(bundleGroup),
      )
      .map(bundle => Bundle.get(bundle, this.#graph, this.#options));
  }

  getTotalSize(asset: IAsset): number {
    return this.#graph.getTotalSize(assetToAssetValue(asset));
  }

  isAssetReachableFromBundle(asset: IAsset, bundle: IBundle): boolean {
    return this.#graph.isAssetReachableFromBundle(
      assetToAssetValue(asset),
      bundleToInternalBundle(bundle),
    );
  }

  removeAssetGraphFromBundle(asset: IAsset, bundle: IBundle) {
    this.#graph.removeAssetGraphFromBundle(
      assetToAssetValue(asset),
      bundleToInternalBundle(bundle),
    );
  }
}
