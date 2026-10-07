// @flow strict-local

import type {
  Bundle as InternalBundle,
  ParcelOptions,
  PackagedBundleInfo,
} from '../types';
import type {
  Asset as IAsset,
  Bundle as IBundle,
  BundleTraversable,
  Dependency as IDependency,
  Environment as IEnvironment,
  GraphVisitor,
  NamedBundle as INamedBundle,
  PackagedBundle as IPackagedBundle,
  Stats,
  Target as ITarget,
  BundleBehavior,
} from '@parcel/types';
import type BundleGraph from '../BundleGraph';

import invariant from 'assert';
import nullthrows from 'nullthrows';
import {DefaultWeakMap} from '@parcel/utils';

import {assetToAssetValue, assetFromValue} from './Asset';
import {mapVisitor} from '@parcel/graph';
import Environment from './Environment';
import Dependency, {dependencyToInternalDependency} from './Dependency';
import Target from './Target';
import {BundleBehaviorNames} from '../types';
import {fromProjectPath} from '../projectPath';

const internalBundleToBundle: DefaultWeakMap<
  ParcelOptions,
  DefaultWeakMap<BundleGraph, WeakMap<InternalBundle, Bundle>>,
> = new DefaultWeakMap(() => new DefaultWeakMap(() => new WeakMap()));
const internalBundleToNamedBundle: DefaultWeakMap<
  ParcelOptions,
  DefaultWeakMap<BundleGraph, WeakMap<InternalBundle, NamedBundle>>,
> = new DefaultWeakMap(() => new DefaultWeakMap(() => new WeakMap()));
const internalBundleToPackagedBundle: DefaultWeakMap<
  ParcelOptions,
  DefaultWeakMap<BundleGraph, WeakMap<InternalBundle, PackagedBundle>>,
> = new DefaultWeakMap(() => new DefaultWeakMap(() => new WeakMap()));

// Friendly access for other modules within this package that need access
// to the internal bundle.
const _bundleToInternalBundle: WeakMap<IBundle, InternalBundle> = new WeakMap();
export function bundleToInternalBundle(bundle: IBundle): InternalBundle {
  return nullthrows(_bundleToInternalBundle.get(bundle));
}
const _bundleToInternalBundleGraph: WeakMap<IBundle, BundleGraph> =
  new WeakMap();
export function bundleToInternalBundleGraph(bundle: IBundle): BundleGraph {
  return nullthrows(_bundleToInternalBundleGraph.get(bundle));
}

// Require this private object to be present when invoking these constructors,
// preventing others from using them. They should use the static `get` method.
let _private = {};

export class Bundle implements IBundle {
  #bundle /*: InternalBundle */;
  #bundleGraph /*: BundleGraph */;
  #options /*: ParcelOptions */;

  constructor(
    sentinel: mixed,
    bundle: InternalBundle,
    bundleGraph: BundleGraph,
    options: ParcelOptions,
  ) {
    if (sentinel !== _private) {
      throw new Error('Unexpected public usage');
    }

    this.#bundle = bundle;
    this.#bundleGraph = bundleGraph;
    this.#options = options;
  }

  static get(
    internalBundle: InternalBundle,
    bundleGraph: BundleGraph,
    options: ParcelOptions,
  ): Bundle {
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

  get id(): string {
    return this.#bundle.id;
  }

  get hashReference(): string {
    return this.#bundle.hashReference;
  }

  get type(): string {
    return this.#bundle.type;
  }

  get env(): IEnvironment {
    return new Environment(this.#bundle.env, this.#options);
  }

  get needsStableName(): ?boolean {
    return this.#bundle.needsStableName;
  }

  get bundleBehavior(): ?BundleBehavior {
    let bundleBehavior = this.#bundle.bundleBehavior;
    return bundleBehavior != null ? BundleBehaviorNames[bundleBehavior] : null;
  }

  get isSplittable(): ?boolean {
    return this.#bundle.isSplittable;
  }

  get target(): ITarget {
    return new Target(this.#bundle.target, this.#options);
  }

  hasAsset(asset: IAsset): boolean {
    return this.#bundleGraph.bundleHasAsset(
      this.#bundle,
      assetToAssetValue(asset),
    );
  }

  hasDependency(dep: IDependency): boolean {
    return this.#bundleGraph.bundleHasDependency(
      this.#bundle,
      dependencyToInternalDependency(dep),
    );
  }

  getEntryAssets(): Array<IAsset> {
    return this.#bundle.entryAssetIds.map(id => {
      let assetNode = this.#bundleGraph._graph.getNodeByContentKey(id);
      invariant(assetNode != null && assetNode.type === 'asset');
      return assetFromValue(assetNode.value, this.#options);
    });
  }

  getMainEntry(): ?IAsset {
    if (this.#bundle.mainEntryId != null) {
      let assetNode = this.#bundleGraph._graph.getNodeByContentKey(
        this.#bundle.mainEntryId,
      );
      invariant(assetNode != null && assetNode.type === 'asset');
      return assetFromValue(assetNode.value, this.#options);
    }
  }

  traverse<TContext>(
    visit: GraphVisitor<BundleTraversable, TContext>,
  ): ?TContext {
    return this.#bundleGraph.traverseBundle(
      this.#bundle,
      mapVisitor(node => {
        if (node.type === 'asset') {
          return {
            type: 'asset',
            value: assetFromValue(node.value, this.#options),
          };
        } else if (node.type === 'dependency') {
          return {
            type: 'dependency',
            value: new Dependency(node.value, this.#options),
          };
        }
      }, visit),
    );
  }

  traverseAssets<TContext>(
    visit: GraphVisitor<IAsset, TContext>,
    startAsset?: IAsset,
  ): ?TContext {
    return this.#bundleGraph.traverseAssets(
      this.#bundle,
      mapVisitor(asset => assetFromValue(asset, this.#options), visit),
      startAsset ? assetToAssetValue(startAsset) : undefined,
    );
  }
}

export class NamedBundle extends Bundle implements INamedBundle {
  #bundle /*: InternalBundle */;
  #bundleGraph /*: BundleGraph */;
  #options /*: ParcelOptions */;

  constructor(
    sentinel: mixed,
    bundle: InternalBundle,
    bundleGraph: BundleGraph,
    options: ParcelOptions,
  ) {
    super(sentinel, bundle, bundleGraph, options);
    this.#bundle = bundle; // Repeating for flow
    this.#bundleGraph = bundleGraph; // Repeating for flow
    this.#options = options;
  }

  static get(
    internalBundle: InternalBundle,
    bundleGraph: BundleGraph,
    options: ParcelOptions,
  ): NamedBundle {
    let existingMap = internalBundleToNamedBundle.get(options).get(bundleGraph);
    let existing = existingMap.get(internalBundle);
    if (existing != null) {
      return existing;
    }

    let namedBundle = new NamedBundle(
      _private,
      internalBundle,
      bundleGraph,
      options,
    );
    _bundleToInternalBundle.set(namedBundle, internalBundle);
    _bundleToInternalBundleGraph.set(namedBundle, bundleGraph);
    existingMap.set(internalBundle, namedBundle);

    return namedBundle;
  }

  get name(): string {
    return nullthrows(this.#bundle.name);
  }

  get displayName(): string {
    return nullthrows(this.#bundle.displayName);
  }

  get publicId(): string {
    return nullthrows(this.#bundle.publicId);
  }
}

export class PackagedBundle extends NamedBundle implements IPackagedBundle {
  #bundle /*: InternalBundle */;
  #bundleGraph /*: BundleGraph */;
  #options /*: ParcelOptions */;
  #bundleInfo /*: ?PackagedBundleInfo */;

  constructor(
    sentinel: mixed,
    bundle: InternalBundle,
    bundleGraph: BundleGraph,
    options: ParcelOptions,
  ) {
    super(sentinel, bundle, bundleGraph, options);
    this.#bundle = bundle; // Repeating for flow
    this.#bundleGraph = bundleGraph; // Repeating for flow
    this.#options = options; // Repeating for flow
  }

  static get(
    internalBundle: InternalBundle,
    bundleGraph: BundleGraph,
    options: ParcelOptions,
  ): PackagedBundle {
    let existingMap = internalBundleToPackagedBundle
      .get(options)
      .get(bundleGraph);
    let existing = existingMap.get(internalBundle);
    if (existing != null) {
      return existing;
    }

    let packagedBundle = new PackagedBundle(
      _private,
      internalBundle,
      bundleGraph,
      options,
    );
    _bundleToInternalBundle.set(packagedBundle, internalBundle);
    _bundleToInternalBundleGraph.set(packagedBundle, bundleGraph);
    existingMap.set(internalBundle, packagedBundle);

    return packagedBundle;
  }

  static getWithInfo(
    internalBundle: InternalBundle,
    bundleGraph: BundleGraph,
    options: ParcelOptions,
    bundleInfo: ?PackagedBundleInfo,
  ): PackagedBundle {
    let packagedBundle = PackagedBundle.get(
      internalBundle,
      bundleGraph,
      options,
    );
    packagedBundle.#bundleInfo = bundleInfo;
    return packagedBundle;
  }

  get filePath(): string {
    return fromProjectPath(
      this.#options.projectRoot,
      nullthrows(this.#bundleInfo).filePath,
    );
  }

  get type(): string {
    // The bundle type may be overridden in the packager.
    // However, inline bundles will not have a bundleInfo here since they are not written to the filesystem.
    return this.#bundleInfo ? this.#bundleInfo.type : this.#bundle.type;
  }

  get stats(): Stats {
    return nullthrows(this.#bundleInfo).stats;
  }
}
