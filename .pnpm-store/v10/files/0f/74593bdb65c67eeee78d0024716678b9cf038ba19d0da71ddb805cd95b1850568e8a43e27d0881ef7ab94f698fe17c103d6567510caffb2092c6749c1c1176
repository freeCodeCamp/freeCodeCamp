// @flow strict-local

import type {
  Asset as IAsset,
  Bundle as IBundle,
  BundleGraph as IBundleGraph,
  BundleGraphTraversable,
  BundleGroup as IBundleGroup,
  Dependency as IDependency,
  ExportSymbolResolution,
  FilePath,
  GraphVisitor,
  Symbol,
  SymbolResolution,
  Target,
} from '@parcel/types';
import type {Bundle as InternalBundle, ParcelOptions} from '../types';
import type InternalBundleGraph from '../BundleGraph';

import invariant from 'assert';
import nullthrows from 'nullthrows';

import {mapVisitor} from '@parcel/graph';
import {assetFromValue, assetToAssetValue, Asset} from './Asset';
import {bundleToInternalBundle} from './Bundle';
import Dependency, {dependencyToInternalDependency} from './Dependency';
import {targetToInternalTarget} from './Target';
import {fromInternalSourceLocation} from '../utils';
import BundleGroup, {bundleGroupToInternalBundleGroup} from './BundleGroup';

// Friendly access for other modules within this package that need access
// to the internal bundle.
const _bundleGraphToInternalBundleGraph: WeakMap<
  IBundleGraph<IBundle>,
  InternalBundleGraph,
> = new WeakMap();
export function bundleGraphToInternalBundleGraph(
  bundleGraph: IBundleGraph<IBundle>,
): InternalBundleGraph {
  return nullthrows(_bundleGraphToInternalBundleGraph.get(bundleGraph));
}

type BundleFactory<TBundle: IBundle> = (
  InternalBundle,
  InternalBundleGraph,
  ParcelOptions,
) => TBundle;

export default class BundleGraph<TBundle: IBundle>
  implements IBundleGraph<TBundle>
{
  #graph: InternalBundleGraph;
  #options: ParcelOptions;
  #createBundle: BundleFactory<TBundle>;

  constructor(
    graph: InternalBundleGraph,
    createBundle: BundleFactory<TBundle>,
    options: ParcelOptions,
  ) {
    this.#graph = graph;
    this.#options = options;
    this.#createBundle = createBundle;
    // $FlowFixMe
    _bundleGraphToInternalBundleGraph.set(this, graph);
  }

  getAssetById(id: string): Asset {
    return assetFromValue(this.#graph.getAssetById(id), this.#options);
  }

  getAssetPublicId(asset: IAsset): string {
    return this.#graph.getAssetPublicId(assetToAssetValue(asset));
  }

  isDependencySkipped(dep: IDependency): boolean {
    return this.#graph.isDependencySkipped(dependencyToInternalDependency(dep));
  }

  getResolvedAsset(dep: IDependency, bundle: ?IBundle): ?IAsset {
    let resolution = this.#graph.getResolvedAsset(
      dependencyToInternalDependency(dep),
      bundle && bundleToInternalBundle(bundle),
    );
    if (resolution) {
      return assetFromValue(resolution, this.#options);
    }
  }

  getIncomingDependencies(asset: IAsset): Array<IDependency> {
    return this.#graph
      .getIncomingDependencies(assetToAssetValue(asset))
      .map(dep => new Dependency(dep, this.#options));
  }

  getAssetWithDependency(dep: IDependency): ?IAsset {
    let asset = this.#graph.getAssetWithDependency(
      dependencyToInternalDependency(dep),
    );
    if (asset) {
      return assetFromValue(asset, this.#options);
    }
  }

  getBundleGroupsContainingBundle(bundle: IBundle): Array<IBundleGroup> {
    return this.#graph
      .getBundleGroupsContainingBundle(bundleToInternalBundle(bundle))
      .map(bundleGroup => new BundleGroup(bundleGroup, this.#options));
  }

  getReferencedBundles(
    bundle: IBundle,
    opts?: {|recursive?: boolean, includeInline?: boolean|},
  ): Array<TBundle> {
    return this.#graph
      .getReferencedBundles(bundleToInternalBundle(bundle), opts)
      .map(bundle => this.#createBundle(bundle, this.#graph, this.#options));
  }

  resolveAsyncDependency(
    dependency: IDependency,
    bundle: ?IBundle,
  ): ?(
    | {|type: 'bundle_group', value: IBundleGroup|}
    | {|type: 'asset', value: IAsset|}
  ) {
    let resolved = this.#graph.resolveAsyncDependency(
      dependencyToInternalDependency(dependency),
      bundle && bundleToInternalBundle(bundle),
    );

    if (resolved == null) {
      return;
    } else if (resolved.type === 'bundle_group') {
      return {
        type: 'bundle_group',
        value: new BundleGroup(resolved.value, this.#options),
      };
    }

    return {
      type: 'asset',
      value: assetFromValue(resolved.value, this.#options),
    };
  }

  getReferencedBundle(dependency: IDependency, bundle: IBundle): ?TBundle {
    let result = this.#graph.getReferencedBundle(
      dependencyToInternalDependency(dependency),
      bundleToInternalBundle(bundle),
    );

    if (result != null) {
      return this.#createBundle(result, this.#graph, this.#options);
    }
  }

  getDependencies(asset: IAsset): Array<IDependency> {
    return this.#graph
      .getDependencies(assetToAssetValue(asset))
      .map(dep => new Dependency(dep, this.#options));
  }

  isAssetReachableFromBundle(asset: IAsset, bundle: IBundle): boolean {
    return this.#graph.isAssetReachableFromBundle(
      assetToAssetValue(asset),
      bundleToInternalBundle(bundle),
    );
  }

  isAssetReferenced(bundle: IBundle, asset: IAsset): boolean {
    return this.#graph.isAssetReferenced(
      bundleToInternalBundle(bundle),
      assetToAssetValue(asset),
    );
  }

  hasParentBundleOfType(bundle: IBundle, type: string): boolean {
    return this.#graph.hasParentBundleOfType(
      bundleToInternalBundle(bundle),
      type,
    );
  }

  getBundlesInBundleGroup(
    bundleGroup: IBundleGroup,
    opts?: {|includeInline: boolean|},
  ): Array<TBundle> {
    return this.#graph
      .getBundlesInBundleGroup(
        bundleGroupToInternalBundleGroup(bundleGroup),
        opts,
      )
      .map(bundle => this.#createBundle(bundle, this.#graph, this.#options));
  }

  getBundles(opts?: {|includeInline: boolean|}): Array<TBundle> {
    return this.#graph
      .getBundles(opts)
      .map(bundle => this.#createBundle(bundle, this.#graph, this.#options));
  }

  isEntryBundleGroup(bundleGroup: IBundleGroup): boolean {
    return this.#graph.isEntryBundleGroup(
      bundleGroupToInternalBundleGroup(bundleGroup),
    );
  }

  getChildBundles(bundle: IBundle): Array<TBundle> {
    return this.#graph
      .getChildBundles(bundleToInternalBundle(bundle))
      .map(bundle => this.#createBundle(bundle, this.#graph, this.#options));
  }

  getParentBundles(bundle: IBundle): Array<TBundle> {
    return this.#graph
      .getParentBundles(bundleToInternalBundle(bundle))
      .map(bundle => this.#createBundle(bundle, this.#graph, this.#options));
  }

  getSymbolResolution(
    asset: IAsset,
    symbol: Symbol,
    boundary: ?IBundle,
  ): SymbolResolution {
    let res = this.#graph.getSymbolResolution(
      assetToAssetValue(asset),
      symbol,
      boundary ? bundleToInternalBundle(boundary) : null,
    );
    return {
      asset: assetFromValue(res.asset, this.#options),
      exportSymbol: res.exportSymbol,
      symbol: res.symbol,
      loc: fromInternalSourceLocation(this.#options.projectRoot, res.loc),
    };
  }

  getExportedSymbols(
    asset: IAsset,
    boundary: ?IBundle,
  ): Array<ExportSymbolResolution> {
    let res = this.#graph.getExportedSymbols(
      assetToAssetValue(asset),
      boundary ? bundleToInternalBundle(boundary) : null,
    );
    return res.map(e => ({
      asset: assetFromValue(e.asset, this.#options),
      exportSymbol: e.exportSymbol,
      symbol: e.symbol,
      loc: fromInternalSourceLocation(this.#options.projectRoot, e.loc),
      exportAs: e.exportAs,
    }));
  }

  traverse<TContext>(
    visit: GraphVisitor<BundleGraphTraversable, TContext>,
    start?: ?IAsset,
  ): ?TContext {
    return this.#graph.traverse(
      mapVisitor(
        node =>
          node.type === 'asset'
            ? {type: 'asset', value: assetFromValue(node.value, this.#options)}
            : {
                type: 'dependency',
                value: new Dependency(node.value, this.#options),
              },
        visit,
      ),
      start ? assetToAssetValue(start) : undefined,
    );
  }

  traverseBundles<TContext>(
    visit: GraphVisitor<TBundle, TContext>,
    startBundle: ?IBundle,
  ): ?TContext {
    return this.#graph.traverseBundles(
      mapVisitor(
        bundle => this.#createBundle(bundle, this.#graph, this.#options),
        visit,
      ),
      startBundle == null ? undefined : bundleToInternalBundle(startBundle),
    );
  }

  getBundlesWithAsset(asset: IAsset): Array<TBundle> {
    return this.#graph
      .getBundlesWithAsset(assetToAssetValue(asset))
      .map(bundle => this.#createBundle(bundle, this.#graph, this.#options));
  }

  getBundlesWithDependency(dependency: IDependency): Array<TBundle> {
    return this.#graph
      .getBundlesWithDependency(dependencyToInternalDependency(dependency))
      .map(bundle => this.#createBundle(bundle, this.#graph, this.#options));
  }

  getUsedSymbols(v: IAsset | IDependency): ?$ReadOnlySet<Symbol> {
    if (v instanceof Asset) {
      return this.#graph.getUsedSymbolsAsset(assetToAssetValue(v));
    } else {
      invariant(v instanceof Dependency);
      return this.#graph.getUsedSymbolsDependency(
        dependencyToInternalDependency(v),
      );
    }
  }

  getEntryRoot(target: Target): FilePath {
    return this.#graph.getEntryRoot(
      this.#options.projectRoot,
      targetToInternalTarget(target),
    );
  }
}
