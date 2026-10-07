// @flow strict-local

import type {ContentKey} from '@parcel/graph';
import type {Dependency, NamedBundle as INamedBundle} from '@parcel/types';
import type {SharedReference} from '@parcel/workers';
import type {
  Asset,
  AssetGroup,
  Bundle as InternalBundle,
  Config,
  DevDepRequest,
  ParcelOptions,
} from './types';
import type ParcelConfig from './ParcelConfig';
import type PluginOptions from './public/PluginOptions';
import type {RunAPI} from './RequestTracker';

import path from 'path';
import assert from 'assert';
import invariant from 'assert';
import nullthrows from 'nullthrows';
import {nodeFromAssetGroup} from './AssetGraph';
import BundleGraph from './public/BundleGraph';
import InternalBundleGraph, {bundleGraphEdgeTypes} from './BundleGraph';
import {NamedBundle} from './public/Bundle';
import {PluginLogger} from '@parcel/logger';
import {hashString} from '@parcel/hash';
import ThrowableDiagnostic, {errorToDiagnostic} from '@parcel/diagnostic';
import {dependencyToInternalDependency} from './public/Dependency';
import {mergeEnvironments} from './Environment';
import createAssetGraphRequest from './requests/AssetGraphRequest';
import {createDevDependency, runDevDepRequest} from './requests/DevDepRequest';
import {toProjectPath, fromProjectPathRelative} from './projectPath';

type RuntimeConnection = {|
  bundle: InternalBundle,
  assetGroup: AssetGroup,
  dependency: ?Dependency,
  isEntry: ?boolean,
|};

export default async function applyRuntimes<TResult>({
  bundleGraph,
  config,
  options,
  pluginOptions,
  api,
  optionsRef,
  previousDevDeps,
  devDepRequests,
  configs,
}: {|
  bundleGraph: InternalBundleGraph,
  config: ParcelConfig,
  options: ParcelOptions,
  optionsRef: SharedReference,
  pluginOptions: PluginOptions,
  api: RunAPI<TResult>,
  previousDevDeps: Map<string, string>,
  devDepRequests: Map<string, DevDepRequest>,
  configs: Map<string, Config>,
|}): Promise<Map<string, Asset>> {
  let runtimes = await config.getRuntimes();
  let connections: Array<RuntimeConnection> = [];

  for (let bundle of bundleGraph.getBundles({includeInline: true})) {
    for (let runtime of runtimes) {
      try {
        let applied = await runtime.plugin.apply({
          bundle: NamedBundle.get(bundle, bundleGraph, options),
          bundleGraph: new BundleGraph<INamedBundle>(
            bundleGraph,
            NamedBundle.get.bind(NamedBundle),
            options,
          ),
          config: configs.get(runtime.name)?.result,
          options: pluginOptions,
          logger: new PluginLogger({origin: runtime.name}),
        });

        if (applied) {
          let runtimeAssets = Array.isArray(applied) ? applied : [applied];
          for (let {
            code,
            dependency,
            filePath,
            isEntry,
            env,
          } of runtimeAssets) {
            let sourceName = path.join(
              path.dirname(filePath),
              `runtime-${hashString(code)}.${bundle.type}`,
            );

            let assetGroup = {
              code,
              filePath: toProjectPath(options.projectRoot, sourceName),
              env: mergeEnvironments(options.projectRoot, bundle.env, env),
              // Runtime assets should be considered source, as they should be
              // e.g. compiled to run in the target environment
              isSource: true,
            };

            connections.push({
              bundle,
              assetGroup,
              dependency: dependency,
              isEntry,
            });
          }
        }
      } catch (e) {
        throw new ThrowableDiagnostic({
          diagnostic: errorToDiagnostic(e, {
            origin: runtime.name,
          }),
        });
      }
    }
  }

  // Add dev deps for runtime plugins AFTER running them, to account for lazy require().
  for (let runtime of runtimes) {
    let devDepRequest = await createDevDependency(
      {
        specifier: runtime.name,
        resolveFrom: runtime.resolveFrom,
      },
      previousDevDeps,
      options,
    );
    devDepRequests.set(
      `${devDepRequest.specifier}:${fromProjectPathRelative(
        devDepRequest.resolveFrom,
      )}`,
      devDepRequest,
    );
    await runDevDepRequest(api, devDepRequest);
  }

  let {assetGraph: runtimesAssetGraph, changedAssets} =
    await reconcileNewRuntimes(api, connections, optionsRef);

  let runtimesGraph = InternalBundleGraph.fromAssetGraph(
    runtimesAssetGraph,
    bundleGraph._publicIdByAssetId,
    bundleGraph._assetPublicIds,
  );

  // Merge the runtimes graph into the main bundle graph.
  bundleGraph.merge(runtimesGraph);
  for (let [assetId, publicId] of runtimesGraph._publicIdByAssetId) {
    bundleGraph._publicIdByAssetId.set(assetId, publicId);
    bundleGraph._assetPublicIds.add(publicId);
  }

  for (let {bundle, assetGroup, dependency, isEntry} of connections) {
    let assetGroupNode = nodeFromAssetGroup(assetGroup);
    let assetGroupAssetNodeIds = runtimesAssetGraph.getNodeIdsConnectedFrom(
      runtimesAssetGraph.getNodeIdByContentKey(assetGroupNode.id),
    );
    invariant(assetGroupAssetNodeIds.length === 1);
    let runtimeNodeId = assetGroupAssetNodeIds[0];
    let runtimeNode = nullthrows(runtimesAssetGraph.getNode(runtimeNodeId));
    invariant(runtimeNode.type === 'asset');

    let resolution =
      dependency &&
      bundleGraph.getResolvedAsset(
        dependencyToInternalDependency(dependency),
        bundle,
      );

    let runtimesGraphRuntimeNodeId = runtimesGraph._graph.getNodeIdByContentKey(
      runtimeNode.id,
    );
    let duplicatedContentKeys: Set<ContentKey> = new Set();
    runtimesGraph._graph.traverse((nodeId, _, actions) => {
      let node = nullthrows(runtimesGraph._graph.getNode(nodeId));
      if (node.type !== 'dependency') {
        return;
      }

      let assets = runtimesGraph._graph
        .getNodeIdsConnectedFrom(nodeId)
        .map(assetNodeId => {
          let assetNode = nullthrows(runtimesGraph._graph.getNode(assetNodeId));
          invariant(assetNode.type === 'asset');
          return assetNode.value;
        });

      for (let asset of assets) {
        if (
          bundleGraph.isAssetReachableFromBundle(asset, bundle) ||
          resolution?.id === asset.id
        ) {
          duplicatedContentKeys.add(asset.id);
          actions.skipChildren();
        }
      }
    }, runtimesGraphRuntimeNodeId);

    let bundleNodeId = bundleGraph._graph.getNodeIdByContentKey(bundle.id);
    let bundleGraphRuntimeNodeId = bundleGraph._graph.getNodeIdByContentKey(
      runtimeNode.id,
    ); // the node id is not constant between graphs

    runtimesGraph._graph.traverse((nodeId, _, actions) => {
      let node = nullthrows(runtimesGraph._graph.getNode(nodeId));
      if (node.type === 'asset' || node.type === 'dependency') {
        if (duplicatedContentKeys.has(node.id)) {
          actions.skipChildren();
          return;
        }

        const bundleGraphNodeId = bundleGraph._graph.getNodeIdByContentKey(
          node.id,
        ); // the node id is not constant between graphs
        bundleGraph._graph.addEdge(
          bundleNodeId,
          bundleGraphNodeId,
          bundleGraphEdgeTypes.contains,
        );
      }
    }, runtimesGraphRuntimeNodeId);

    if (isEntry) {
      bundleGraph._graph.addEdge(bundleNodeId, bundleGraphRuntimeNodeId);
      bundle.entryAssetIds.unshift(runtimeNode.id);
    }

    if (dependency == null) {
      // Verify this asset won't become an island
      assert(
        bundleGraph._graph.getNodeIdsConnectedTo(bundleGraphRuntimeNodeId)
          .length > 0,
        'Runtime must have an inbound dependency or be an entry',
      );
    } else {
      let dependencyNodeId = bundleGraph._graph.getNodeIdByContentKey(
        dependency.id,
      );
      bundleGraph._graph.addEdge(dependencyNodeId, bundleGraphRuntimeNodeId);
    }
  }

  return changedAssets;
}

function reconcileNewRuntimes<TResult>(
  api: RunAPI<TResult>,
  connections: Array<RuntimeConnection>,
  optionsRef: SharedReference,
) {
  let assetGroups = connections.map(t => t.assetGroup);
  let request = createAssetGraphRequest({
    name: 'Runtimes',
    assetGroups,
    optionsRef,
  });

  // rebuild the graph
  return api.runRequest(request, {force: true});
}
