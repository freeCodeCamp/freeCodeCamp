"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _graph() {
  const data = require("@parcel/graph");

  _graph = function () {
    return data;
  };

  return data;
}

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
    return data;
  };

  return data;
}

function _plugin() {
  const data = require("@parcel/plugin");

  _plugin = function () {
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

function _nullthrows() {
  const data = _interopRequireDefault(require("nullthrows"));

  _nullthrows = function () {
    return data;
  };

  return data;
}

function _diagnostic() {
  const data = require("@parcel/diagnostic");

  _diagnostic = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Default options by http version.
const HTTP_OPTIONS = {
  '1': {
    minBundles: 1,
    minBundleSize: 30000,
    maxParallelRequests: 6
  },
  '2': {
    minBundles: 1,
    minBundleSize: 20000,
    maxParallelRequests: 25
  }
};
const dependencyPriorityEdges = {
  sync: 1,
  parallel: 2,
  lazy: 3
};

/**
 *
 * The Bundler works by creating an IdealGraph, which contains a BundleGraph that models bundles
 * connected to other bundles by what references them, and thus models BundleGroups.
 *
 * First, we enter `bundle({bundleGraph, config})`. Here, "bundleGraph" is actually just the
 * assetGraph turned into a type `MutableBundleGraph`, which will then be mutated in decorate,
 * and turned into what we expect the bundleGraph to be as per the old (default) bundler structure
 *  & what the rest of Parcel expects a BundleGraph to be.
 *
 * `bundle({bundleGraph, config})` First gets a Mapping of target to entries, In most cases there is
 *  only one target, and one or more entries. (Targets are pertinent in monorepos or projects where you
 *  will have two or more distDirs, or output folders.) Then calls create IdealGraph and Decorate per target.
 *
 */
var _default = new (_plugin().Bundler)({
  loadConfig({
    config,
    options
  }) {
    return loadBundlerConfig(config, options);
  },

  bundle({
    bundleGraph,
    config
  }) {
    let targetMap = getEntryByTarget(bundleGraph); // Organize entries by target output folder/ distDir

    let graphs = [];

    for (let entries of targetMap.values()) {
      // Create separate bundleGraphs per distDir
      graphs.push(createIdealGraph(bundleGraph, config, entries));
    }

    for (let g of graphs) {
      decorateLegacyGraph(g, bundleGraph); //mutate original graph
    }
  },

  optimize() {}

});

exports.default = _default;

function decorateLegacyGraph(idealGraph, bundleGraph) {
  let idealBundleToLegacyBundle = new Map();
  let {
    bundleGraph: idealBundleGraph,
    dependencyBundleGraph,
    bundleGroupBundleIds
  } = idealGraph;
  let entryBundleToBundleGroup = new Map(); // Step Create Bundles: Create bundle groups, bundles, and shared bundles and add assets to them

  for (let [bundleNodeId, idealBundle] of idealBundleGraph.nodes) {
    if (idealBundle === 'root') continue;
    let entryAsset = idealBundle.mainEntryAsset;
    let bundleGroup;
    let bundle;

    if (bundleGroupBundleIds.has(bundleNodeId)) {
      let dependencies = dependencyBundleGraph.getNodeIdsConnectedTo(dependencyBundleGraph.getNodeIdByContentKey(String(bundleNodeId)), _graph().ALL_EDGE_TYPES).map(nodeId => {
        let dependency = (0, _nullthrows().default)(dependencyBundleGraph.getNode(nodeId));
        (0, _assert().default)(dependency.type === 'dependency');
        return dependency.value;
      });

      for (let dependency of dependencies) {
        bundleGroup = bundleGraph.createBundleGroup(dependency, idealBundle.target);
      }

      (0, _assert().default)(bundleGroup);
      entryBundleToBundleGroup.set(bundleNodeId, bundleGroup);
      bundle = (0, _nullthrows().default)(bundleGraph.createBundle({
        entryAsset: (0, _nullthrows().default)(entryAsset),
        needsStableName: idealBundle.needsStableName,
        bundleBehavior: idealBundle.bundleBehavior,
        target: idealBundle.target
      }));
      bundleGraph.addBundleToBundleGroup(bundle, bundleGroup);
    } else if (idealBundle.sourceBundles.size > 0) {
      bundle = (0, _nullthrows().default)(bundleGraph.createBundle({
        uniqueKey: [...idealBundle.assets].map(asset => asset.id).join(',') + [...idealBundle.sourceBundles].join(','),
        needsStableName: idealBundle.needsStableName,
        bundleBehavior: idealBundle.bundleBehavior,
        type: idealBundle.type,
        target: idealBundle.target,
        env: idealBundle.env
      }));
    } else if (idealBundle.uniqueKey != null) {
      bundle = (0, _nullthrows().default)(bundleGraph.createBundle({
        uniqueKey: idealBundle.uniqueKey,
        needsStableName: idealBundle.needsStableName,
        bundleBehavior: idealBundle.bundleBehavior,
        type: idealBundle.type,
        target: idealBundle.target,
        env: idealBundle.env
      }));
    } else {
      (0, _assert().default)(entryAsset != null);
      bundle = (0, _nullthrows().default)(bundleGraph.createBundle({
        entryAsset,
        needsStableName: idealBundle.needsStableName,
        bundleBehavior: idealBundle.bundleBehavior,
        target: idealBundle.target
      }));
    }

    idealBundleToLegacyBundle.set(idealBundle, bundle);

    for (let asset of idealBundle.assets) {
      bundleGraph.addAssetToBundle(asset, bundle);
    }
  } // Step Internalization: Internalize dependencies for bundles


  for (let [, idealBundle] of idealBundleGraph.nodes) {
    if (idealBundle === 'root') continue;
    let bundle = (0, _nullthrows().default)(idealBundleToLegacyBundle.get(idealBundle));

    for (let internalized of idealBundle.internalizedAssetIds) {
      let incomingDeps = bundleGraph.getIncomingDependencies(bundleGraph.getAssetById(internalized));

      for (let incomingDep of incomingDeps) {
        if (incomingDep.priority === 'lazy' && incomingDep.specifierType !== 'url' && bundle.hasDependency(incomingDep)) {
          bundleGraph.internalizeAsyncDependency(bundle, incomingDep);
        }
      }
    }
  } // Step Add to BundleGroups: Add bundles to their bundle groups


  idealBundleGraph.traverse((nodeId, _, actions) => {
    let node = idealBundleGraph.getNode(nodeId);

    if (node === 'root') {
      return;
    }

    actions.skipChildren();
    let outboundNodeIds = idealBundleGraph.getNodeIdsConnectedFrom(nodeId);
    let entryBundle = (0, _nullthrows().default)(idealBundleGraph.getNode(nodeId));
    (0, _assert().default)(entryBundle !== 'root');
    let legacyEntryBundle = (0, _nullthrows().default)(idealBundleToLegacyBundle.get(entryBundle));

    for (let id of outboundNodeIds) {
      let siblingBundle = (0, _nullthrows().default)(idealBundleGraph.getNode(id));
      (0, _assert().default)(siblingBundle !== 'root');
      let legacySiblingBundle = (0, _nullthrows().default)(idealBundleToLegacyBundle.get(siblingBundle));
      bundleGraph.createBundleReference(legacyEntryBundle, legacySiblingBundle);
    }
  }); // Step References: Add references to all bundles

  for (let [asset, references] of idealGraph.assetReference) {
    for (let [dependency, bundle] of references) {
      let legacyBundle = (0, _nullthrows().default)(idealBundleToLegacyBundle.get(bundle));
      bundleGraph.createAssetReference(dependency, asset, legacyBundle);
    }
  }

  for (let {
    from,
    to
  } of idealBundleGraph.getAllEdges()) {
    let sourceBundle = (0, _nullthrows().default)(idealBundleGraph.getNode(from));

    if (sourceBundle === 'root') {
      continue;
    }

    (0, _assert().default)(sourceBundle !== 'root');
    let legacySourceBundle = (0, _nullthrows().default)(idealBundleToLegacyBundle.get(sourceBundle));
    let targetBundle = (0, _nullthrows().default)(idealBundleGraph.getNode(to));

    if (targetBundle === 'root') {
      continue;
    }

    (0, _assert().default)(targetBundle !== 'root');
    let legacyTargetBundle = (0, _nullthrows().default)(idealBundleToLegacyBundle.get(targetBundle));
    bundleGraph.createBundleReference(legacySourceBundle, legacyTargetBundle);
  }
}

function createIdealGraph(assetGraph, config, entries) {
  // Asset to the bundle and group it's an entry of
  let bundleRoots = new Map();
  let bundles = new Map();
  let dependencyBundleGraph = new (_graph().ContentGraph)();
  let assetReference = new (_utils().DefaultMap)(() => []); // A Graph of Bundles and a root node (dummy string), which models only Bundles, and connections to their
  // referencing Bundle. There are no actual BundleGroup nodes, just bundles that take on that role.

  let bundleGraph = new (_graph().Graph)();
  let stack = [];
  let bundleRootEdgeTypes = {
    parallel: 1,
    lazy: 2
  }; // ContentGraph that models bundleRoots, with parallel & async deps only to inform reachability

  let bundleRootGraph = new (_graph().ContentGraph)();
  let bundleGroupBundleIds = new Set(); // Models bundleRoots and the assets that require it synchronously

  let reachableRoots = new (_graph().ContentGraph)();
  let rootNodeId = (0, _nullthrows().default)(bundleRootGraph.addNode('root'));
  let bundleGraphRootNodeId = (0, _nullthrows().default)(bundleGraph.addNode('root'));
  bundleRootGraph.setRootNodeId(rootNodeId);
  bundleGraph.setRootNodeId(bundleGraphRootNodeId); // Step Create Entry Bundles

  for (let [asset, dependency] of entries) {
    let bundle = createBundle({
      asset,
      target: (0, _nullthrows().default)(dependency.target),
      needsStableName: dependency.isEntry
    });
    let nodeId = bundleGraph.addNode(bundle);
    bundles.set(asset.id, nodeId);
    bundleRoots.set(asset, [nodeId, nodeId]);
    bundleRootGraph.addEdge(rootNodeId, bundleRootGraph.addNodeByContentKey(asset.id, asset));
    bundleGraph.addEdge(bundleGraphRootNodeId, nodeId);
    dependencyBundleGraph.addEdge(dependencyBundleGraph.addNodeByContentKeyIfNeeded(dependency.id, {
      value: dependency,
      type: 'dependency'
    }), dependencyBundleGraph.addNodeByContentKeyIfNeeded(String(nodeId), {
      value: bundle,
      type: 'bundle'
    }), dependencyPriorityEdges[dependency.priority]);
    bundleGroupBundleIds.add(nodeId);
  }

  let assets = [];
  let typeChangeIds = new Set();
  /**
   * Step Create Bundles: Traverse the assetGraph (aka MutableBundleGraph) and create bundles
   * for asset type changes, parallel, inline, and async or lazy dependencies,
   * adding only that asset to each bundle, not its entire subgraph.
   */

  assetGraph.traverse({
    enter(node, context, actions) {
      if (node.type === 'asset') {
        if ((context === null || context === void 0 ? void 0 : context.type) === 'dependency' && context !== null && context !== void 0 && context.value.isEntry && !entries.has(node.value)) {
          // Skip whole subtrees of other targets by skipping those entries
          actions.skipChildren();
          return node;
        }

        assets.push(node.value);
        let bundleIdTuple = bundleRoots.get(node.value);

        if (bundleIdTuple && bundleIdTuple[0] === bundleIdTuple[1]) {
          // Push to the stack (only) when a new bundle is created
          stack.push([node.value, bundleIdTuple[0]]);
        } else if (bundleIdTuple) {
          // Otherwise, push on the last bundle that marks the start of a BundleGroup
          stack.push([node.value, stack[stack.length - 1][1]]);
        }
      } else if (node.type === 'dependency') {
        if (context == null) {
          return node;
        }

        let dependency = node.value;

        if (assetGraph.isDependencySkipped(dependency)) {
          actions.skipChildren();
          return node;
        }

        (0, _assert().default)((context === null || context === void 0 ? void 0 : context.type) === 'asset');
        let parentAsset = context.value;
        let assets = assetGraph.getDependencyAssets(dependency);

        if (assets.length === 0) {
          return node;
        }

        for (let childAsset of assets) {
          if (dependency.priority === 'lazy' || childAsset.bundleBehavior === 'isolated' // An isolated Dependency, or Bundle must contain all assets it needs to load.
          ) {
            let bundleId = bundles.get(childAsset.id);
            let bundle;

            if (bundleId == null) {
              var _dependency$bundleBeh;

              let firstBundleGroup = (0, _nullthrows().default)(bundleGraph.getNode(stack[0][1]));
              (0, _assert().default)(firstBundleGroup !== 'root');
              bundle = createBundle({
                asset: childAsset,
                target: firstBundleGroup.target,
                needsStableName: dependency.bundleBehavior === 'inline' || childAsset.bundleBehavior === 'inline' ? false : dependency.isEntry || dependency.needsStableName,
                bundleBehavior: (_dependency$bundleBeh = dependency.bundleBehavior) !== null && _dependency$bundleBeh !== void 0 ? _dependency$bundleBeh : childAsset.bundleBehavior
              });
              bundleId = bundleGraph.addNode(bundle);
              bundles.set(childAsset.id, bundleId);
              bundleRoots.set(childAsset, [bundleId, bundleId]);
              bundleGroupBundleIds.add(bundleId);
              bundleGraph.addEdge(bundleGraphRootNodeId, bundleId);
            } else {
              bundle = (0, _nullthrows().default)(bundleGraph.getNode(bundleId));
              (0, _assert().default)(bundle !== 'root');

              if ( // If this dependency requests isolated, but the bundle is not,
              // make the bundle isolated for all uses.
              dependency.bundleBehavior === 'isolated' && bundle.bundleBehavior == null) {
                bundle.bundleBehavior = dependency.bundleBehavior;
              }
            }

            dependencyBundleGraph.addEdge(dependencyBundleGraph.addNodeByContentKeyIfNeeded(dependency.id, {
              value: dependency,
              type: 'dependency'
            }), dependencyBundleGraph.addNodeByContentKeyIfNeeded(String(bundleId), {
              value: bundle,
              type: 'bundle'
            }), dependencyPriorityEdges[dependency.priority]);
            continue;
          }

          if (parentAsset.type !== childAsset.type || dependency.priority === 'parallel' || childAsset.bundleBehavior === 'inline') {
            // The referencing bundleRoot is the root of a Bundle that first brings in another bundle (essentially the FIRST parent of a bundle, this may or may not be a bundleGroup)
            let [referencingBundleRoot, bundleGroupNodeId] = (0, _nullthrows().default)(stack[stack.length - 1]);
            let bundleGroup = (0, _nullthrows().default)(bundleGraph.getNode(bundleGroupNodeId));
            (0, _assert().default)(bundleGroup !== 'root');
            let bundleId;
            let referencingBundleId = (0, _nullthrows().default)(bundleRoots.get(referencingBundleRoot))[0];
            let referencingBundle = (0, _nullthrows().default)(bundleGraph.getNode(referencingBundleId));
            (0, _assert().default)(referencingBundle !== 'root');
            let bundle;
            bundleId = bundles.get(childAsset.id);
            /**
             * If this is an entry bundlegroup, we only allow one bundle per type in those groups
             * So attempt to add the asset to the entry bundle if it's of the same type.
             * This asset will be created by other dependency if it's in another bundlegroup
             * and bundles of other types should be merged in the next step
             */

            let bundleGroupRootAsset = (0, _nullthrows().default)(bundleGroup.mainEntryAsset);

            if (entries.has(bundleGroupRootAsset) && canMerge(bundleGroupRootAsset, childAsset) && dependency.bundleBehavior == null) {
              bundleId = bundleGroupNodeId;
            }

            if (bundleId == null) {
              var _dependency$bundleBeh2;

              bundle = createBundle({
                // Bundles created from type changes shouldn't have an entry asset.
                asset: childAsset,
                type: childAsset.type,
                env: childAsset.env,
                bundleBehavior: (_dependency$bundleBeh2 = dependency.bundleBehavior) !== null && _dependency$bundleBeh2 !== void 0 ? _dependency$bundleBeh2 : childAsset.bundleBehavior,
                target: referencingBundle.target,
                needsStableName: childAsset.bundleBehavior === 'inline' || dependency.bundleBehavior === 'inline' || dependency.priority === 'parallel' && !dependency.needsStableName ? false : referencingBundle.needsStableName
              });
              bundleId = bundleGraph.addNode(bundle); // Store Type-Change bundles for later since we need to know ALL bundlegroups they are part of to reduce/combine them

              if (parentAsset.type !== childAsset.type) {
                typeChangeIds.add(bundleId);
              }
            } else {
              bundle = bundleGraph.getNode(bundleId);
              (0, _assert().default)(bundle != null && bundle !== 'root');

              if ( // If this dependency requests isolated, but the bundle is not,
              // make the bundle isolated for all uses.
              dependency.bundleBehavior === 'isolated' && bundle.bundleBehavior == null) {
                bundle.bundleBehavior = dependency.bundleBehavior;
              }
            }

            bundles.set(childAsset.id, bundleId); // A bundle can belong to multiple bundlegroups, all the bundle groups of it's
            // ancestors, and all async and entry bundles before it are "bundle groups"
            // TODO: We may need to track bundles to all bundleGroups it belongs to in the future.

            bundleRoots.set(childAsset, [bundleId, bundleGroupNodeId]);
            bundleGraph.addEdge(referencingBundleId, bundleId);

            if (bundleId != bundleGroupNodeId) {
              dependencyBundleGraph.addEdge(dependencyBundleGraph.addNodeByContentKeyIfNeeded(dependency.id, {
                value: dependency,
                type: 'dependency'
              }), dependencyBundleGraph.addNodeByContentKeyIfNeeded(String(bundleId), {
                value: bundle,
                type: 'bundle'
              }), dependencyPriorityEdges.parallel);
            }

            assetReference.get(childAsset).push([dependency, bundle]);
            continue;
          }
        }
      }

      return node;
    },

    exit(node) {
      var _stack;

      if (((_stack = stack[stack.length - 1]) === null || _stack === void 0 ? void 0 : _stack[0]) === node.value) {
        stack.pop();
      }
    }

  }); // Step Merge Type Change Bundles: Clean up type change bundles within the exact same bundlegroups

  for (let [nodeIdA, a] of bundleGraph.nodes) {
    //if bundle b bundlegroups ==== bundle a bundlegroups then combine type changes
    if (!typeChangeIds.has(nodeIdA) || a === 'root') continue;
    let bundleABundleGroups = getBundleGroupsForBundle(nodeIdA);

    for (let [nodeIdB, b] of bundleGraph.nodes) {
      if (a !== 'root' && b !== 'root' && a !== b && typeChangeIds.has(nodeIdB) && canMerge(a, b)) {
        let bundleBbundleGroups = getBundleGroupsForBundle(nodeIdB);

        if ((0, _utils().setEqual)(bundleBbundleGroups, bundleABundleGroups)) {
          let shouldMerge = true;

          for (let depId of dependencyBundleGraph.getNodeIdsConnectedTo(dependencyBundleGraph.getNodeIdByContentKey(String(nodeIdB)), _graph().ALL_EDGE_TYPES)) {
            let depNode = dependencyBundleGraph.getNode(depId); // Cannot merge Dependency URL specifier type

            if (depNode && depNode.type === 'dependency' && depNode.value.specifierType === 'url') {
              shouldMerge = false;
              continue;
            }
          }

          if (!shouldMerge) continue;
          mergeBundle(nodeIdA, nodeIdB);
        }
      }
    }
  }
  /**
   *  Step Determine Reachability: Determine reachability for every asset from each bundleRoot.
   * This is later used to determine which bundles to place each asset in. We build up two
   * structures, one traversal each. ReachableRoots to store sync relationships,
   * and bundleRootGraph to store the minimal availability through `parallel` and `async` relationships.
   * The two graphs, are used to build up ancestorAssets, a structure which holds all availability by
   * all means for each asset.
   */


  for (let [root] of bundleRoots) {
    if (!entries.has(root)) {
      bundleRootGraph.addNodeByContentKey(root.id, root); // Add in all bundleRoots to BundleRootGraph
    }
  } // ReachableRoots is a Graph of Asset Nodes which represents a BundleRoot, to all assets (non-bundleroot assets
  // available to it synchronously (directly) built by traversing the assetgraph once.


  for (let [root] of bundleRoots) {
    // Add sync relationships to ReachableRoots
    let rootNodeId = reachableRoots.addNodeByContentKeyIfNeeded(root.id, root);
    assetGraph.traverse((node, _, actions) => {
      if (node.value === root) {
        return;
      }

      if (node.type === 'dependency') {
        let dependency = node.value;

        if (dependencyBundleGraph.hasContentKey(dependency.id)) {
          if (dependency.priority !== 'sync') {
            let assets = assetGraph.getDependencyAssets(dependency);

            if (assets.length === 0) {
              return;
            }

            (0, _assert().default)(assets.length === 1);
            let bundleRoot = assets[0];
            let bundle = (0, _nullthrows().default)(bundleGraph.getNode((0, _nullthrows().default)(bundles.get(bundleRoot.id))));

            if (bundle !== 'root' && bundle.bundleBehavior == null && !bundle.env.isIsolated() && bundle.env.context === root.env.context) {
              bundleRootGraph.addEdge(bundleRootGraph.getNodeIdByContentKey(root.id), bundleRootGraph.getNodeIdByContentKey(bundleRoot.id), dependency.priority === 'parallel' ? bundleRootEdgeTypes.parallel : bundleRootEdgeTypes.lazy);
            }
          }
        }

        if (dependency.priority !== 'sync') {
          actions.skipChildren();
        }

        return;
      } //asset node type


      let asset = node.value;

      if (asset.bundleBehavior != null || root.type !== asset.type) {
        if (root.type !== asset.type && !bundleRoots.has(asset)) {
          // A type may not necessarily be a bundleRoot since we've merged at this point
          // So we must add that asset in as an island at the very least
          reachableRoots.addNodeByContentKeyIfNeeded(node.value.id, node.value);
        }

        actions.skipChildren();
        return;
      }

      let nodeId = reachableRoots.addNodeByContentKeyIfNeeded(node.value.id, node.value);
      reachableRoots.addEdge(rootNodeId, nodeId);
    }, root);
  } // Maps a given bundleRoot to the assets reachable from it,
  // and the bundleRoots reachable from each of these assets


  let ancestorAssets = new Map();

  for (let entry of entries.keys()) {
    // Initialize an empty set of ancestors available to entries
    ancestorAssets.set(entry, new Set());
  } // Step Determine Availability
  // Visit nodes in a topological order, visiting parent nodes before child nodes.
  // This allows us to construct an understanding of which assets will already be
  // loaded and available when a bundle runs, by pushing available assets downwards and
  // computing the intersection of assets available through all possible paths to a bundle.
  // We call this structure ancestorAssets, a Map that tracks a bundleRoot,
  // to all assets available to it (meaning they will exist guaranteed when the bundleRoot is loaded)
  //  The topological sort ensures all parents are visited before the node we want to process.


  for (let nodeId of bundleRootGraph.topoSort(_graph().ALL_EDGE_TYPES)) {
    const bundleRoot = bundleRootGraph.getNode(nodeId);
    if (bundleRoot === 'root') continue;
    (0, _assert().default)(bundleRoot != null);
    let bundleGroupId = (0, _nullthrows().default)(bundleRoots.get(bundleRoot))[1]; // At a BundleRoot, we access it's available assets (via ancestorAssets),
    // and add to that all assets within the bundles in that BundleGroup.
    // This set is available to all bundles in a particular bundleGroup because
    // bundleGroups are just bundles loaded at the same time. However it is
    // not true that a bundle's available assets = all assets of all the bundleGroups
    // it belongs to. It's the intersection of those sets.

    let available;

    if (bundleRoot.bundleBehavior === 'isolated') {
      available = new Set();
    } else {
      available = new Set(ancestorAssets.get(bundleRoot));

      for (let bundleIdInGroup of [bundleGroupId, ...bundleGraph.getNodeIdsConnectedFrom(bundleGroupId)]) {
        let bundleInGroup = (0, _nullthrows().default)(bundleGraph.getNode(bundleIdInGroup));
        (0, _assert().default)(bundleInGroup !== 'root');

        if (bundleInGroup.bundleBehavior != null) {
          continue;
        }

        for (let bundleRoot of bundleInGroup.assets) {
          // Assets directly connected to current bundleRoot
          let assetsFromBundleRoot = reachableRoots.getNodeIdsConnectedFrom(reachableRoots.getNodeIdByContentKey(bundleRoot.id)).map(id => (0, _nullthrows().default)(reachableRoots.getNode(id)));

          for (let asset of [bundleRoot, ...assetsFromBundleRoot]) {
            available.add(asset);
          }
        }
      }
    } //  Now that we have bundleGroup availability, we will propagate that down to all the children
    //  of this bundleGroup. For a child, we also must maintain parallel availability. If it has
    //  parallel siblings that come before it, those, too, are available to it. Add those parallel
    //  available assets to the set of available assets for this child as well.


    let children = bundleRootGraph.getNodeIdsConnectedFrom(nodeId, _graph().ALL_EDGE_TYPES);
    let parallelAvailability = new Set();

    for (let childId of children) {
      let child = bundleRootGraph.getNode(childId);
      (0, _assert().default)(child !== 'root' && child != null);
      let bundleBehavior = getBundleFromBundleRoot(child).bundleBehavior;

      if (bundleBehavior != null) {
        continue;
      }

      let isParallel = bundleRootGraph.hasEdge(nodeId, childId, bundleRootEdgeTypes.parallel); // Most of the time, a child will have many parent bundleGroups,
      // so the next time we peek at a child from another parent, we will
      // intersect the availability built there with the previously computed
      // availability. this ensures no matter which bundleGroup loads a particular bundle,
      // it will only assume availability of assets it has under any circumstance

      const childAvailableAssets = ancestorAssets.get(child);
      let currentChildAvailable = isParallel ? (0, _utils().setUnion)(parallelAvailability, available) : available;

      if (childAvailableAssets != null) {
        (0, _utils().setIntersect)(childAvailableAssets, currentChildAvailable);
      } else {
        ancestorAssets.set(child, new Set(currentChildAvailable));
      }

      if (isParallel) {
        let assetsFromBundleRoot = reachableRoots.getNodeIdsConnectedFrom(reachableRoots.getNodeIdByContentKey(child.id)).map(id => (0, _nullthrows().default)(reachableRoots.getNode(id)));
        parallelAvailability = (0, _utils().setUnion)(parallelAvailability, assetsFromBundleRoot);
        parallelAvailability.add(child); //The next sibling should have older sibling available via parallel
      }
    }
  } // Step Internalize async bundles - internalize Async bundles if and only if,
  // the bundle is synchronously available elsewhere.
  // We can query sync assets available via reachableRoots. If the parent has
  // the bundleRoot by reachableRoots AND ancestorAssets, internalize it.


  for (let [id, bundleRoot] of bundleRootGraph.nodes) {
    if (bundleRoot === 'root') continue;
    let parentRoots = bundleRootGraph.getNodeIdsConnectedTo(id, _graph().ALL_EDGE_TYPES).map(id => (0, _nullthrows().default)(bundleRootGraph.getNode(id)));
    let canDelete = getBundleFromBundleRoot(bundleRoot).bundleBehavior !== 'isolated';
    if (parentRoots.length === 0) continue;

    for (let parent of parentRoots) {
      var _ancestorAssets$get;

      if (parent === 'root') {
        canDelete = false;
        continue;
      }

      if (reachableRoots.hasEdge(reachableRoots.getNodeIdByContentKey(parent.id), reachableRoots.getNodeIdByContentKey(bundleRoot.id)) || (_ancestorAssets$get = ancestorAssets.get(parent)) !== null && _ancestorAssets$get !== void 0 && _ancestorAssets$get.has(bundleRoot)) {
        let parentBundle = bundleGraph.getNode((0, _nullthrows().default)(bundles.get(parent.id)));
        (0, _assert().default)(parentBundle != null && parentBundle !== 'root');
        parentBundle.internalizedAssetIds.push(bundleRoot.id);
      } else {
        canDelete = false;
      }
    }

    if (canDelete) {
      deleteBundle(bundleRoot);
    }
  } // Step Insert Or Share: Place all assets into bundles or create shared bundles. Each asset
  // is placed into a single bundle based on the bundle entries it is reachable from.
  // This creates a maximally code split bundle graph with no duplication.


  for (let asset of assets) {
    // Unreliable bundleRoot assets which need to pulled in by shared bundles or other means
    let reachable = getReachableBundleRoots(asset, reachableRoots).reverse();
    let reachableEntries = [];
    let reachableNonEntries = []; // Filter out entries, since they can't have shared bundles.
    // Neither can non-splittable, isolated, or needing of stable name bundles.
    // Reserve those filtered out bundles since we add the asset back into them.

    for (let a of reachable) {
      if (entries.has(a) || !a.isBundleSplittable || bundleRoots.get(a) && (getBundleFromBundleRoot(a).needsStableName || getBundleFromBundleRoot(a).bundleBehavior === 'isolated')) {
        reachableEntries.push(a);
      } else {
        reachableNonEntries.push(a);
      }
    }

    reachable = reachableNonEntries; // Filter out bundles from this asset's reachable array if
    // bundle does not contain the asset in its ancestry

    reachable = reachable.filter(b => {
      var _ancestorAssets$get2;

      return !((_ancestorAssets$get2 = ancestorAssets.get(b)) !== null && _ancestorAssets$get2 !== void 0 && _ancestorAssets$get2.has(asset));
    }); // Finally, filter out bundleRoots (bundles) from this assets
    // reachable if they are subgraphs, and reuse that subgraph bundle
    // by drawing an edge. Essentially, if two bundles within an asset's
    // reachable array, have an ancestor-subgraph relationship, draw that edge.
    // This allows for us to reuse a bundle instead of making a shared bundle if
    // a bundle represents the exact set of assets a set of bundles would share
    // if a bundle b is a subgraph of another bundle f, reuse it, drawing an edge between the two

    let canReuse = new Set();

    for (let candidateSourceBundleRoot of reachable) {
      let candidateSourceBundleId = (0, _nullthrows().default)(bundles.get(candidateSourceBundleRoot.id));

      if (candidateSourceBundleRoot.env.isIsolated()) {
        continue;
      }

      let reuseableBundleId = bundles.get(asset.id);

      if (reuseableBundleId != null) {
        canReuse.add(candidateSourceBundleRoot);
        bundleGraph.addEdge(candidateSourceBundleId, reuseableBundleId);
        let reusableBundle = bundleGraph.getNode(reuseableBundleId);
        (0, _assert().default)(reusableBundle !== 'root' && reusableBundle != null);
        reusableBundle.sourceBundles.add(candidateSourceBundleId);
      } else {
        // Asset is not a bundleRoot, but if its ancestor bundle (in the asset's reachable) can be
        // reused as a subgraph of another bundleRoot in its reachable, reuse it
        for (let otherReuseCandidate of reachable) {
          if (candidateSourceBundleRoot === otherReuseCandidate) continue;
          let reusableCandidateReachable = getReachableBundleRoots(otherReuseCandidate, reachableRoots).filter(b => {
            var _ancestorAssets$get3;

            return !((_ancestorAssets$get3 = ancestorAssets.get(b)) !== null && _ancestorAssets$get3 !== void 0 && _ancestorAssets$get3.has(otherReuseCandidate));
          });

          if (reusableCandidateReachable.includes(candidateSourceBundleRoot)) {
            let reusableBundleId = (0, _nullthrows().default)(bundles.get(otherReuseCandidate.id));
            canReuse.add(candidateSourceBundleRoot);
            bundleGraph.addEdge((0, _nullthrows().default)(bundles.get(candidateSourceBundleRoot.id)), reusableBundleId);
            let reusableBundle = bundleGraph.getNode(reusableBundleId);
            (0, _assert().default)(reusableBundle !== 'root' && reusableBundle != null);
            reusableBundle.sourceBundles.add(candidateSourceBundleId);
          }
        }
      }
    } //Bundles that are reused should not be considered for shared bundles, so filter them out


    reachable = reachable.filter(b => !canReuse.has(b)); // Add assets to non-splittable bundles.

    for (let entry of reachableEntries) {
      let entryBundleId = (0, _nullthrows().default)(bundles.get(entry.id));
      let entryBundle = (0, _nullthrows().default)(bundleGraph.getNode(entryBundleId));
      (0, _assert().default)(entryBundle !== 'root');
      entryBundle.assets.add(asset);
      entryBundle.size += asset.stats.size;
    } // Create shared bundles for splittable bundles.


    if (reachable.length > config.minBundles) {
      let sourceBundles = reachable.map(a => (0, _nullthrows().default)(bundles.get(a.id)));
      let key = reachable.map(a => a.id).join(',');
      let bundleId = bundles.get(key);
      let bundle;

      if (bundleId == null) {
        let firstSourceBundle = (0, _nullthrows().default)(bundleGraph.getNode(sourceBundles[0]));
        (0, _assert().default)(firstSourceBundle !== 'root');
        bundle = createBundle({
          target: firstSourceBundle.target,
          type: firstSourceBundle.type,
          env: firstSourceBundle.env
        });
        bundle.sourceBundles = new Set(sourceBundles);
        let sharedInternalizedAssets = new Set(firstSourceBundle.internalizedAssetIds);

        for (let p of sourceBundles) {
          let parentBundle = (0, _nullthrows().default)(bundleGraph.getNode(p));
          (0, _assert().default)(parentBundle !== 'root');
          if (parentBundle === firstSourceBundle) continue;
          (0, _utils().setIntersect)(sharedInternalizedAssets, new Set(parentBundle.internalizedAssetIds));
        }

        bundle.internalizedAssetIds = [...sharedInternalizedAssets];
        bundleId = bundleGraph.addNode(bundle);
        bundles.set(key, bundleId);
      } else {
        bundle = (0, _nullthrows().default)(bundleGraph.getNode(bundleId));
        (0, _assert().default)(bundle !== 'root');
      }

      bundle.assets.add(asset);
      bundle.size += asset.stats.size;

      for (let sourceBundleId of sourceBundles) {
        if (bundleId !== sourceBundleId) {
          bundleGraph.addEdge(sourceBundleId, bundleId);
        }
      }

      dependencyBundleGraph.addNodeByContentKeyIfNeeded(String(bundleId), {
        value: bundle,
        type: 'bundle'
      });
    } else if (reachable.length <= config.minBundles) {
      for (let root of reachable) {
        let bundle = (0, _nullthrows().default)(bundleGraph.getNode((0, _nullthrows().default)(bundles.get(root.id))));
        (0, _assert().default)(bundle !== 'root');
        bundle.assets.add(asset);
        bundle.size += asset.stats.size;
      }
    }
  } // Step Merge Share Bundles: Merge any shared bundles under the minimum bundle size back into
  // their source bundles, and remove the bundle.
  // We should include "bundle reuse" as shared bundles that may be removed but the bundle itself would have to be retained


  for (let [bundleNodeId, bundle] of bundleGraph.nodes) {
    if (bundle === 'root') continue;

    if (bundle.sourceBundles.size > 0 && bundle.mainEntryAsset == null && bundle.size < config.minBundleSize) {
      removeBundle(bundleGraph, bundleNodeId, assetReference);
    }
  } // Step Remove Shared Bundles: Remove shared bundles from bundle groups that hit the parallel request limit.


  for (let bundleGroupId of bundleGraph.getNodeIdsConnectedFrom(rootNodeId)) {
    // Find shared bundles in this bundle group.
    let bundleId = bundleGroupId; // We should include "bundle reuse" as shared bundles that may be removed but the bundle itself would have to be retained

    let bundleIdsInGroup = getBundlesForBundleGroup(bundleId); //get all bundlegrups this bundle is an ancestor of

    if (bundleIdsInGroup.length > config.maxParallelRequests) {
      let sharedBundleIdsInBundleGroup = bundleIdsInGroup.filter(b => {
        let bundle = (0, _nullthrows().default)(bundleGraph.getNode(b)); // shared bundles must have source bundles, we could have a bundle
        // connected to another bundle that isnt a shared bundle, so check

        return bundle !== 'root' && bundle.sourceBundles.size > 0 && bundleId != b;
      });
      let numBundlesInGroup = bundleIdsInGroup.length; // Sort the bundles so the smallest ones are removed first.

      let sharedBundlesInGroup = sharedBundleIdsInBundleGroup.map(id => ({
        id,
        bundle: (0, _nullthrows().default)(bundleGraph.getNode(id))
      })).map(({
        id,
        bundle
      }) => {
        // For Flow
        (0, _assert().default)(bundle !== 'root');
        return {
          id,
          bundle
        };
      }).sort((a, b) => b.bundle.size - a.bundle.size); // Remove bundles until the bundle group is within the parallel request limit.

      while (sharedBundlesInGroup.length > 0 && numBundlesInGroup > config.maxParallelRequests) {
        let bundleTuple = sharedBundlesInGroup.pop();
        let bundleToRemove = bundleTuple.bundle;
        let bundleIdToRemove = bundleTuple.id; //TODO add integration test where bundles in bunlde group > max parallel request limit & only remove a couple shared bundles
        // but total # bundles still exceeds limit due to non shared bundles
        // Add all assets in the shared bundle into the source bundles that are within this bundle group.

        let sourceBundles = [...bundleToRemove.sourceBundles].filter(b => bundleIdsInGroup.includes(b));

        for (let sourceBundleId of sourceBundles) {
          let sourceBundle = (0, _nullthrows().default)(bundleGraph.getNode(sourceBundleId));
          (0, _assert().default)(sourceBundle !== 'root');
          bundleToRemove.sourceBundles.delete(sourceBundleId);

          for (let asset of bundleToRemove.assets) {
            sourceBundle.assets.add(asset);
            sourceBundle.size += asset.stats.size;
          } //This case is specific to reused bundles, which can have shared bundles attached to it


          for (let childId of bundleGraph.getNodeIdsConnectedFrom(bundleIdToRemove)) {
            let child = bundleGraph.getNode(childId);
            (0, _assert().default)(child !== 'root' && child != null);
            child.sourceBundles.add(sourceBundleId);
            bundleGraph.addEdge(sourceBundleId, childId);
          } // needs to add test case where shared bundle is removed from ONE bundlegroup but not from the whole graph!
          // Remove the edge from this bundle group to the shared bundle.
          // If there is now only a single bundle group that contains this bundle,
          // merge it into the remaining source bundles. If it is orphaned entirely, remove it.


          let incomingNodeCount = bundleGraph.getNodeIdsConnectedTo(bundleIdToRemove).length;

          if (incomingNodeCount <= 2 && //Never fully remove reused bundles
          bundleToRemove.mainEntryAsset == null) {
            // If one bundle group removes a shared bundle, but the other *can* keep it, still remove because that shared bundle is pointless (only one source bundle)
            removeBundle(bundleGraph, bundleIdToRemove, assetReference); // Stop iterating through bundleToRemove's sourceBundles as the bundle has been removed.

            break;
          } else {
            bundleGraph.removeEdge(sourceBundleId, bundleIdToRemove);
          }
        }

        numBundlesInGroup--;
      }
    }
  }

  function deleteBundle(bundleRoot) {
    bundleGraph.removeNode((0, _nullthrows().default)(bundles.get(bundleRoot.id)));
    bundleRoots.delete(bundleRoot);
    bundles.delete(bundleRoot.id);

    if (bundleRootGraph.hasContentKey(bundleRoot.id)) {
      bundleRootGraph.removeNode(bundleRootGraph.getNodeIdByContentKey(bundleRoot.id));
    }
  }

  function getBundleGroupsForBundle(nodeId) {
    let bundleGroupBundleIds = new Set();
    bundleGraph.traverseAncestors(nodeId, ancestorId => {
      if (bundleGraph.getNodeIdsConnectedTo(ancestorId) //if node is root, then dont add, otherwise do add.
      .includes(bundleGraph.rootNodeId)) {
        bundleGroupBundleIds.add(ancestorId);
      }
    });
    return bundleGroupBundleIds;
  }

  function getBundlesForBundleGroup(bundleGroupId) {
    let bundlesInABundleGroup = [];
    bundleGraph.traverse(nodeId => {
      bundlesInABundleGroup.push(nodeId);
    }, bundleGroupId);
    return bundlesInABundleGroup;
  }

  function mergeBundle(mainNodeId, otherNodeId) {
    //merges assets of "otherRoot" into "mainBundleRoot"
    let a = (0, _nullthrows().default)(bundleGraph.getNode(mainNodeId));
    let b = (0, _nullthrows().default)(bundleGraph.getNode(otherNodeId));
    (0, _assert().default)(a !== 'root' && b !== 'root');
    let bundleRootB = (0, _nullthrows().default)(b.mainEntryAsset);
    let mainBundleRoot = (0, _nullthrows().default)(a.mainEntryAsset);
    let bundleGroupOfMain = (0, _nullthrows().default)(bundleRoots.get(mainBundleRoot))[1]; // If our merging bundle is already a combination of bundles, all previous root assets must be updated as well

    for (let movingAsset of b.assets) {
      if (movingAsset === bundleRootB) continue;

      if (bundleRoots.has(movingAsset)) {
        bundleRoots.set(movingAsset, [mainNodeId, bundleGroupOfMain]);
        bundles.set(movingAsset.id, mainNodeId);
      }

      replaceAssetReference(movingAsset, b, a);
    }

    for (let asset of b.assets) {
      a.assets.add(asset);
      a.size += asset.stats.size;
    }

    for (let depId of dependencyBundleGraph.getNodeIdsConnectedTo(dependencyBundleGraph.getNodeIdByContentKey(String(otherNodeId)), _graph().ALL_EDGE_TYPES)) {
      dependencyBundleGraph.replaceNodeIdsConnectedTo(depId, [dependencyBundleGraph.getNodeIdByContentKey(String(mainNodeId))]);
    } //clean up asset reference


    for (let dependencyTuple of assetReference.get(bundleRootB)) {
      dependencyTuple[1] = a;
    } //add in any lost edges


    for (let nodeId of bundleGraph.getNodeIdsConnectedTo(otherNodeId)) {
      bundleGraph.addEdge(nodeId, mainNodeId);
    }

    replaceAssetReference(bundleRootB, b, a);
    deleteBundle(bundleRootB);
    bundleRoots.set(bundleRootB, [mainNodeId, bundleGroupOfMain]);
    bundles.set(bundleRootB.id, mainNodeId);
    bundleRoots.delete(bundleRootB);
    bundles.delete(bundleRootB.id);
  }

  function getBundleFromBundleRoot(bundleRoot) {
    let bundle = bundleGraph.getNode((0, _nullthrows().default)(bundleRoots.get(bundleRoot))[0]);
    (0, _assert().default)(bundle !== 'root' && bundle != null);
    return bundle;
  }

  function replaceAssetReference(bundleRoot, toReplace, replaceWith) {
    let replaceAssetReference = assetReference.get(bundleRoot).map(entry => {
      let bundle = entry[1];

      if (bundle == toReplace) {
        return [entry[0], replaceWith];
      }

      return entry;
    });
    assetReference.set(bundleRoot, replaceAssetReference);
  }

  return {
    bundleGraph,
    dependencyBundleGraph,
    bundleGroupBundleIds,
    assetReference
  };
}

const CONFIG_SCHEMA = {
  type: 'object',
  properties: {
    http: {
      type: 'number',
      enum: Object.keys(HTTP_OPTIONS).map(k => Number(k))
    },
    minBundles: {
      type: 'number'
    },
    minBundleSize: {
      type: 'number'
    },
    maxParallelRequests: {
      type: 'number'
    }
  },
  additionalProperties: false
};

function createBundle(opts) {
  var _opts$type, _opts$env, _opts$bundleBehavior;

  if (opts.asset == null) {
    return {
      uniqueKey: opts.uniqueKey,
      assets: new Set(),
      internalizedAssetIds: [],
      mainEntryAsset: null,
      size: 0,
      sourceBundles: new Set(),
      target: opts.target,
      type: (0, _nullthrows().default)(opts.type),
      env: (0, _nullthrows().default)(opts.env),
      needsStableName: Boolean(opts.needsStableName),
      bundleBehavior: opts.bundleBehavior
    };
  }

  let asset = (0, _nullthrows().default)(opts.asset);
  return {
    uniqueKey: opts.uniqueKey,
    assets: new Set([asset]),
    internalizedAssetIds: [],
    mainEntryAsset: asset,
    size: asset.stats.size,
    sourceBundles: new Set(),
    target: opts.target,
    type: (_opts$type = opts.type) !== null && _opts$type !== void 0 ? _opts$type : asset.type,
    env: (_opts$env = opts.env) !== null && _opts$env !== void 0 ? _opts$env : asset.env,
    needsStableName: Boolean(opts.needsStableName),
    bundleBehavior: (_opts$bundleBehavior = opts.bundleBehavior) !== null && _opts$bundleBehavior !== void 0 ? _opts$bundleBehavior : asset.bundleBehavior
  };
}

function removeBundle(bundleGraph, bundleId, assetReference) {
  let bundle = (0, _nullthrows().default)(bundleGraph.getNode(bundleId));
  (0, _assert().default)(bundle !== 'root');

  for (let asset of bundle.assets) {
    assetReference.set(asset, assetReference.get(asset).filter(t => !t.includes(bundle)));

    for (let sourceBundleId of bundle.sourceBundles) {
      let sourceBundle = (0, _nullthrows().default)(bundleGraph.getNode(sourceBundleId));
      (0, _assert().default)(sourceBundle !== 'root');
      sourceBundle.assets.add(asset);
      sourceBundle.size += asset.stats.size;
    }
  }

  bundleGraph.removeNode(bundleId);
}

async function loadBundlerConfig(config, options) {
  var _conf$contents$http, _conf$contents$minBun, _conf$contents$minBun2, _conf$contents$maxPar;

  let conf = await config.getConfig([], {
    packageKey: '@parcel/bundler-default'
  });

  if (!conf) {
    return HTTP_OPTIONS['2'];
  }

  (0, _assert().default)((conf === null || conf === void 0 ? void 0 : conf.contents) != null);

  _utils().validateSchema.diagnostic(CONFIG_SCHEMA, {
    data: conf === null || conf === void 0 ? void 0 : conf.contents,
    source: await options.inputFS.readFile(conf.filePath, 'utf8'),
    filePath: conf.filePath,
    prependKey: `/${(0, _diagnostic().encodeJSONKeyComponent)('@parcel/bundler-default')}`
  }, '@parcel/bundler-default', 'Invalid config for @parcel/bundler-default');

  let http = (_conf$contents$http = conf.contents.http) !== null && _conf$contents$http !== void 0 ? _conf$contents$http : 2;
  let defaults = HTTP_OPTIONS[http];
  return {
    minBundles: (_conf$contents$minBun = conf.contents.minBundles) !== null && _conf$contents$minBun !== void 0 ? _conf$contents$minBun : defaults.minBundles,
    minBundleSize: (_conf$contents$minBun2 = conf.contents.minBundleSize) !== null && _conf$contents$minBun2 !== void 0 ? _conf$contents$minBun2 : defaults.minBundleSize,
    maxParallelRequests: (_conf$contents$maxPar = conf.contents.maxParallelRequests) !== null && _conf$contents$maxPar !== void 0 ? _conf$contents$maxPar : defaults.maxParallelRequests
  };
}

function getReachableBundleRoots(asset, graph) {
  return graph.getNodeIdsConnectedTo(graph.getNodeIdByContentKey(asset.id)).map(nodeId => (0, _nullthrows().default)(graph.getNode(nodeId)));
}

function getEntryByTarget(bundleGraph) {
  // Find entries from assetGraph per target
  let targets = new (_utils().DefaultMap)(() => new Map());
  bundleGraph.traverse({
    enter(node, context, actions) {
      if (node.type !== 'asset') {
        return node;
      }

      (0, _assert().default)(context != null && context.type === 'dependency' && context.value.isEntry && context.value.target != null);
      targets.get(context.value.target.distDir).set(node.value, context.value);
      actions.skipChildren();
      return node;
    }

  });
  return targets;
}

function canMerge(a, b) {
  // Bundles can be merged if they have the same type and environment,
  // unless they are explicitly marked as isolated or inline.
  return a.type === b.type && a.env.context === b.env.context && a.bundleBehavior == null && b.bundleBehavior == null;
}