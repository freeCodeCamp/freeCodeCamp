"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssetGraphBuilder = void 0;
exports.default = createAssetGraphRequest;

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

function _hash() {
  const data = require("@parcel/hash");

  _hash = function () {
    return data;
  };

  return data;
}

function _logger() {
  const data = _interopRequireDefault(require("@parcel/logger"));

  _logger = function () {
    return data;
  };

  return data;
}

function _diagnostic() {
  const data = _interopRequireWildcard(require("@parcel/diagnostic"));

  _diagnostic = function () {
    return data;
  };

  return data;
}

var _types = require("../types");

var _AssetGraph = _interopRequireDefault(require("../AssetGraph"));

var _constants = require("../constants");

var _EntryRequest = _interopRequireDefault(require("./EntryRequest"));

var _TargetRequest = _interopRequireDefault(require("./TargetRequest"));

var _AssetRequest = _interopRequireDefault(require("./AssetRequest"));

var _PathRequest = _interopRequireDefault(require("./PathRequest"));

var _projectPath = require("../projectPath");

var _dumpGraphToGraphViz = _interopRequireDefault(require("../dumpGraphToGraphViz"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createAssetGraphRequest(input) {
  return {
    type: 'asset_graph_request',
    id: input.name,
    run: async input => {
      let prevResult = await input.api.getPreviousResult();
      let builder = new AssetGraphBuilder(input, prevResult);
      let assetGraphRequest = await await builder.build(); // early break for incremental bundling if production or flag is off;

      if (!input.options.shouldBundleIncrementally || input.options.mode === 'production') {
        assetGraphRequest.assetGraph.safeToIncrementallyBundle = false;
      }

      return assetGraphRequest;
    },
    input
  };
}

const typesWithRequests = new Set(['entry_specifier', 'entry_file', 'dependency', 'asset_group']);

class AssetGraphBuilder {
  assetRequests = [];
  changedAssets = new Map();

  constructor({
    input,
    api,
    options
  }, prevResult) {
    var _prevResult$assetGrap, _JSON$stringify;

    let {
      entries,
      assetGroups,
      optionsRef,
      name,
      requestedAssetIds,
      shouldBuildLazily
    } = input;
    let assetGraph = (_prevResult$assetGrap = prevResult === null || prevResult === void 0 ? void 0 : prevResult.assetGraph) !== null && _prevResult$assetGrap !== void 0 ? _prevResult$assetGrap : new _AssetGraph.default();
    assetGraph.safeToIncrementallyBundle = true;
    assetGraph.setRootConnections({
      entries,
      assetGroups
    });
    this.assetGraph = assetGraph;
    this.optionsRef = optionsRef;
    this.options = options;
    this.api = api;
    this.name = name;
    this.requestedAssetIds = requestedAssetIds !== null && requestedAssetIds !== void 0 ? requestedAssetIds : new Set();
    this.shouldBuildLazily = shouldBuildLazily !== null && shouldBuildLazily !== void 0 ? shouldBuildLazily : false;
    this.cacheKey = (0, _hash().hashString)(`${_constants.PARCEL_VERSION}${name}${(_JSON$stringify = JSON.stringify(entries)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : ''}${options.mode}`);
    this.isSingleChangeRebuild = api.getInvalidSubRequests().filter(req => req.type === 'asset_request').length === 1;
    this.queue = new (_utils().PromiseQueue)();
  }

  async build() {
    let errors = [];
    let rootNodeId = (0, _nullthrows().default)(this.assetGraph.rootNodeId, 'A root node is required to traverse');
    let visited = new Set([rootNodeId]);

    const visit = nodeId => {
      if (errors.length > 0) {
        return;
      }

      if (this.shouldSkipRequest(nodeId)) {
        visitChildren(nodeId);
      } else {
        // ? do we need to visit children inside of the promise that is queued?
        this.queueCorrespondingRequest(nodeId, errors).then(() => visitChildren(nodeId));
      }
    };

    const visitChildren = nodeId => {
      for (let childNodeId of this.assetGraph.getNodeIdsConnectedFrom(nodeId)) {
        let child = (0, _nullthrows().default)(this.assetGraph.getNode(childNodeId));

        if ((!visited.has(childNodeId) || child.hasDeferred) && this.shouldVisitChild(nodeId, childNodeId)) {
          visited.add(childNodeId);
          visit(childNodeId);
        }
      }
    };

    visit(rootNodeId);
    await this.queue.run();
    this.api.storeResult({
      assetGraph: this.assetGraph,
      changedAssets: new Map(),
      assetRequests: []
    }, this.cacheKey);

    if (errors.length) {
      throw errors[0]; // TODO: eventually support multiple errors since requests could reject in parallel
    } // Skip symbol propagation if no target is using scope hoisting
    // (mainly for faster development builds)


    let entryDependencies = this.assetGraph.getNodeIdsConnectedFrom(rootNodeId).flatMap(entrySpecifier => this.assetGraph.getNodeIdsConnectedFrom(entrySpecifier)).flatMap(entryFile => this.assetGraph.getNodeIdsConnectedFrom(entryFile).map(depNodeId => {
      let dep = (0, _nullthrows().default)(this.assetGraph.getNode(depNodeId));
      (0, _assert().default)(dep.type === 'dependency');
      return dep;
    }));
    this.assetGraph.symbolPropagationRan = entryDependencies.some(d => d.value.env.shouldScopeHoist);

    if (this.assetGraph.symbolPropagationRan) {
      await (0, _dumpGraphToGraphViz.default)(this.assetGraph, 'AssetGraph_' + this.name + '_before_prop');

      try {
        this.propagateSymbols();
      } catch (e) {
        await (0, _dumpGraphToGraphViz.default)(this.assetGraph, 'AssetGraph_' + this.name + '_failed');
        throw e;
      }
    }

    await (0, _dumpGraphToGraphViz.default)(this.assetGraph, 'AssetGraph_' + this.name);
    return {
      assetGraph: this.assetGraph,
      changedAssets: this.changedAssets,
      assetRequests: this.assetRequests
    };
  }

  shouldVisitChild(nodeId, childNodeId) {
    if (this.shouldBuildLazily) {
      let node = (0, _nullthrows().default)(this.assetGraph.getNode(nodeId));
      let childNode = (0, _nullthrows().default)(this.assetGraph.getNode(childNodeId));

      if (node.type === 'asset' && childNode.type === 'dependency') {
        if (this.requestedAssetIds.has(node.value.id)) {
          node.requested = true;
        } else if (!node.requested) {
          let isAsyncChild = this.assetGraph.getIncomingDependencies(node.value).every(dep => dep.isEntry || dep.priority !== _types.Priority.sync);

          if (isAsyncChild) {
            node.requested = false;
          } else {
            delete node.requested;
          }
        }

        let previouslyDeferred = childNode.deferred;
        childNode.deferred = node.requested === false;

        if (!previouslyDeferred && childNode.deferred) {
          this.assetGraph.markParentsWithHasDeferred(childNodeId);
        } else if (previouslyDeferred && !childNode.deferred) {
          this.assetGraph.unmarkParentsWithHasDeferred(childNodeId);
        }

        return !childNode.deferred;
      }
    }

    return this.assetGraph.shouldVisitChild(nodeId, childNodeId);
  }

  propagateSymbols() {
    // Keep track of dependencies that have changes to their used symbols,
    // so we can sort them after propagation.
    let changedDeps = new Set(); // Propagate the requested symbols down from the root to the leaves

    this.propagateSymbolsDown((assetNode, incomingDeps, outgoingDeps) => {
      if (!assetNode.value.symbols) return; // exportSymbol -> identifier

      let assetSymbols = assetNode.value.symbols; // identifier -> exportSymbol

      let assetSymbolsInverse = new Map();

      for (let [s, {
        local
      }] of assetSymbols) {
        let set = assetSymbolsInverse.get(local);

        if (!set) {
          set = new Set();
          assetSymbolsInverse.set(local, set);
        }

        set.add(s);
      }

      let hasNamespaceOutgoingDeps = outgoingDeps.some(d => {
        var _d$value$symbols, _d$value$symbols$get;

        return ((_d$value$symbols = d.value.symbols) === null || _d$value$symbols === void 0 ? void 0 : (_d$value$symbols$get = _d$value$symbols.get('*')) === null || _d$value$symbols$get === void 0 ? void 0 : _d$value$symbols$get.local) === '*';
      }); // 1) Determine what the incomingDeps requests from the asset
      // ----------------------------------------------------------

      let isEntry = false; // Used symbols that are exported or reexported (symbol will be removed again later) by asset.

      assetNode.usedSymbols = new Set(); // Symbols that have to be namespace reexported by outgoingDeps.

      let namespaceReexportedSymbols = new Set();

      if (incomingDeps.length === 0) {
        // Root in the runtimes Graph
        assetNode.usedSymbols.add('*');
        namespaceReexportedSymbols.add('*');
      } else {
        for (let incomingDep of incomingDeps) {
          if (incomingDep.value.symbols == null) {
            isEntry = true;
            continue;
          }

          for (let exportSymbol of incomingDep.usedSymbolsDown) {
            if (exportSymbol === '*') {
              assetNode.usedSymbols.add('*');
              namespaceReexportedSymbols.add('*');
            }

            if (!assetSymbols || assetSymbols.has(exportSymbol) || assetSymbols.has('*')) {
              // An own symbol or a non-namespace reexport
              assetNode.usedSymbols.add(exportSymbol);
            } // A namespace reexport
            // (but only if we actually have namespace-exporting outgoing dependencies,
            // This usually happens with a reexporting asset with many namespace exports which means that
            // we cannot match up the correct asset with the used symbol at this level.)
            else if (hasNamespaceOutgoingDeps && exportSymbol !== 'default') {
              namespaceReexportedSymbols.add(exportSymbol);
            }
          }
        }
      } // 2) Distribute the symbols to the outgoing dependencies
      // ----------------------------------------------------------


      for (let dep of outgoingDeps) {
        let depUsedSymbolsDownOld = dep.usedSymbolsDown;
        let depUsedSymbolsDown = new Set();
        dep.usedSymbolsDown = depUsedSymbolsDown;

        if (assetNode.value.sideEffects || // For entries, we still need to add dep.value.symbols of the entry (which are "used" but not according to the symbols data)
        isEntry || // If not a single asset is used, we can say the entire subgraph is not used.
        // This is e.g. needed when some symbol is imported and then used for a export which isn't used (= "semi-weak" reexport)
        //    index.js:     `import {bar} from "./lib"; ...`
        //    lib/index.js: `export * from "./foo.js"; export * from "./bar.js";`
        //    lib/foo.js:   `import { data } from "./bar.js"; export const foo = data + " esm2";`
        assetNode.usedSymbols.size > 0 || namespaceReexportedSymbols.size > 0) {
          var _depSymbols$get;

          let depSymbols = dep.value.symbols;
          if (!depSymbols) continue;

          if (((_depSymbols$get = depSymbols.get('*')) === null || _depSymbols$get === void 0 ? void 0 : _depSymbols$get.local) === '*') {
            for (let s of namespaceReexportedSymbols) {
              // We need to propagate the namespaceReexportedSymbols to all namespace dependencies (= even wrong ones because we don't know yet)
              depUsedSymbolsDown.add(s);
            }
          }

          for (let [symbol, {
            local
          }] of depSymbols) {
            var _depSymbols$get2;

            // Was already handled above
            if (local === '*') continue;

            if (!assetSymbolsInverse || !((_depSymbols$get2 = depSymbols.get(symbol)) !== null && _depSymbols$get2 !== void 0 && _depSymbols$get2.isWeak)) {
              // Bailout or non-weak symbol (= used in the asset itself = not a reexport)
              depUsedSymbolsDown.add(symbol);
            } else {
              let reexportedExportSymbols = assetSymbolsInverse.get(local);

              if (reexportedExportSymbols == null) {
                // not reexported = used in asset itself
                depUsedSymbolsDown.add(symbol);
              } else if (assetNode.usedSymbols.has('*')) {
                // we need everything
                depUsedSymbolsDown.add(symbol);
                [...reexportedExportSymbols].forEach(s => assetNode.usedSymbols.delete(s));
              } else {
                let usedReexportedExportSymbols = [...reexportedExportSymbols].filter(s => assetNode.usedSymbols.has(s));

                if (usedReexportedExportSymbols.length > 0) {
                  // The symbol is indeed a reexport, so it's not used from the asset itself
                  depUsedSymbolsDown.add(symbol);
                  usedReexportedExportSymbols.forEach(s => assetNode.usedSymbols.delete(s));
                }
              }
            }
          }
        } else {
          depUsedSymbolsDown.clear();
        }

        if (!equalSet(depUsedSymbolsDownOld, depUsedSymbolsDown)) {
          dep.usedSymbolsDownDirty = true;
          dep.usedSymbolsUpDirtyDown = true;
        }
      }
    });

    const logFallbackNamespaceInsertion = (assetNode, symbol, depNode1, depNode2) => {
      if (this.options.logLevel === 'verbose') {
        _logger().default.warn({
          message: `${(0, _projectPath.fromProjectPathRelative)(assetNode.value.filePath)} reexports "${symbol}", which could be resolved either to the dependency "${depNode1.value.specifier}" or "${depNode2.value.specifier}" at runtime. Adding a namespace object to fall back on.`,
          origin: '@parcel/core'
        });
      }
    }; // Because namespace reexports introduce ambiguity, go up the graph from the leaves to the
    // root and remove requested symbols that aren't actually exported


    this.propagateSymbolsUp((assetNode, incomingDeps, outgoingDeps) => {
      (0, _assert().default)(assetNode.type === 'asset');
      let assetSymbols = assetNode.value.symbols;
      let assetSymbolsInverse = null;

      if (assetSymbols) {
        assetSymbolsInverse = new Map();

        for (let [s, {
          local
        }] of assetSymbols) {
          let set = assetSymbolsInverse.get(local);

          if (!set) {
            set = new Set();
            assetSymbolsInverse.set(local, set);
          }

          set.add(s);
        }
      } // the symbols that are reexported (not used in `asset`) -> asset they resolved to


      let reexportedSymbols = new Map(); // the symbols that are reexported (not used in `asset`) -> the corresponding outgoingDep(s)
      // To generate the diagnostic when there are multiple dependencies with non-statically
      // analyzable exports

      let reexportedSymbolsSource = new Map();

      for (let outgoingDep of outgoingDeps) {
        var _outgoingDepSymbols$g;

        let outgoingDepSymbols = outgoingDep.value.symbols;
        if (!outgoingDepSymbols) continue;
        let isExcluded = this.assetGraph.getNodeIdsConnectedFrom(this.assetGraph.getNodeIdByContentKey(outgoingDep.id)).length === 0; // excluded, assume everything that is requested exists

        if (isExcluded) {
          outgoingDep.usedSymbolsDown.forEach((_, s) => outgoingDep.usedSymbolsUp.set(s, null));
        }

        if (((_outgoingDepSymbols$g = outgoingDepSymbols.get('*')) === null || _outgoingDepSymbols$g === void 0 ? void 0 : _outgoingDepSymbols$g.local) === '*') {
          outgoingDep.usedSymbolsUp.forEach((sResolved, s) => {
            if (s === 'default') {
              return;
            } // If the symbol could come from multiple assets at runtime, assetNode's
            // namespace will be needed at runtime to perform the lookup on.


            if (reexportedSymbols.has(s)) {
              if (!assetNode.usedSymbols.has('*')) {
                logFallbackNamespaceInsertion(assetNode, s, (0, _nullthrows().default)(reexportedSymbolsSource.get(s)), outgoingDep);
              }

              assetNode.usedSymbols.add('*');
              reexportedSymbols.set(s, {
                asset: assetNode.id,
                symbol: s
              });
            } else {
              reexportedSymbols.set(s, sResolved);
              reexportedSymbolsSource.set(s, outgoingDep);
            }
          });
        }

        for (let [s, sResolved] of outgoingDep.usedSymbolsUp) {
          var _outgoingDepSymbols$g2, _assetSymbolsInverse;

          if (!outgoingDep.usedSymbolsDown.has(s)) {
            // usedSymbolsDown is a superset of usedSymbolsUp
            continue;
          }

          let local = (_outgoingDepSymbols$g2 = outgoingDepSymbols.get(s)) === null || _outgoingDepSymbols$g2 === void 0 ? void 0 : _outgoingDepSymbols$g2.local;

          if (local == null) {
            // Caused by '*' => '*', already handled
            continue;
          }

          let reexported = (_assetSymbolsInverse = assetSymbolsInverse) === null || _assetSymbolsInverse === void 0 ? void 0 : _assetSymbolsInverse.get(local);

          if (reexported != null) {
            reexported.forEach(s => {
              // see same code above
              if (reexportedSymbols.has(s)) {
                if (!assetNode.usedSymbols.has('*')) {
                  logFallbackNamespaceInsertion(assetNode, s, (0, _nullthrows().default)(reexportedSymbolsSource.get(s)), outgoingDep);
                }

                assetNode.usedSymbols.add('*');
                reexportedSymbols.set(s, {
                  asset: assetNode.id,
                  symbol: s
                });
              } else {
                reexportedSymbols.set(s, sResolved);
                reexportedSymbolsSource.set(s, outgoingDep);
              }
            });
          }
        }
      }

      let errors = [];

      function usedSymbolsUpAmbiguous(old, current, s, value) {
        if (old.has(s)) {
          let valueOld = old.get(s);

          if (valueOld !== value && !((valueOld === null || valueOld === void 0 ? void 0 : valueOld.asset) === value.asset && (valueOld === null || valueOld === void 0 ? void 0 : valueOld.symbol) === value.symbol)) {
            // The dependency points to multiple assets (via an asset group).
            current.set(s, undefined);
            return;
          }
        }

        current.set(s, value);
      }

      for (let incomingDep of incomingDeps) {
        var _incomingDepSymbols$g;

        let incomingDepUsedSymbolsUpOld = incomingDep.usedSymbolsUp;
        incomingDep.usedSymbolsUp = new Map();
        let incomingDepSymbols = incomingDep.value.symbols;
        if (!incomingDepSymbols) continue;
        let hasNamespaceReexport = ((_incomingDepSymbols$g = incomingDepSymbols.get('*')) === null || _incomingDepSymbols$g === void 0 ? void 0 : _incomingDepSymbols$g.local) === '*';

        for (let s of incomingDep.usedSymbolsDown) {
          if (assetSymbols == null || // Assume everything could be provided if symbols are cleared
          assetNode.value.bundleBehavior === _types.BundleBehavior.isolated || assetNode.value.bundleBehavior === _types.BundleBehavior.inline || s === '*' || assetNode.usedSymbols.has(s)) {
            usedSymbolsUpAmbiguous(incomingDepUsedSymbolsUpOld, incomingDep.usedSymbolsUp, s, {
              asset: assetNode.id,
              symbol: s
            });
          } else if (reexportedSymbols.has(s)) {
            let reexport = reexportedSymbols.get(s);
            let v = // Forward a reexport only if the current asset is side-effect free and not external
            !assetNode.value.sideEffects && reexport != null ? reexport : {
              asset: assetNode.id,
              symbol: s
            };
            usedSymbolsUpAmbiguous(incomingDepUsedSymbolsUpOld, incomingDep.usedSymbolsUp, s, v);
          } else if (!hasNamespaceReexport) {
            var _incomingDep$value$sy, _incomingDep$value$sy2, _fromProjectPath, _incomingDep$value$so;

            let loc = (_incomingDep$value$sy = incomingDep.value.symbols) === null || _incomingDep$value$sy === void 0 ? void 0 : (_incomingDep$value$sy2 = _incomingDep$value$sy.get(s)) === null || _incomingDep$value$sy2 === void 0 ? void 0 : _incomingDep$value$sy2.loc;
            let [resolutionNodeId] = this.assetGraph.getNodeIdsConnectedFrom(this.assetGraph.getNodeIdByContentKey(incomingDep.id));
            let resolution = (0, _nullthrows().default)(this.assetGraph.getNode(resolutionNodeId));
            (0, _assert().default)(resolution && resolution.type === 'asset_group');
            errors.push({
              message: (0, _diagnostic().md)`${(0, _projectPath.fromProjectPathRelative)(resolution.value.filePath)} does not export '${s}'`,
              origin: '@parcel/core',
              codeFrames: loc ? [{
                filePath: (_fromProjectPath = (0, _projectPath.fromProjectPath)(this.options.projectRoot, loc === null || loc === void 0 ? void 0 : loc.filePath)) !== null && _fromProjectPath !== void 0 ? _fromProjectPath : undefined,
                language: (_incomingDep$value$so = incomingDep.value.sourceAssetType) !== null && _incomingDep$value$so !== void 0 ? _incomingDep$value$so : undefined,
                codeHighlights: [{
                  start: loc.start,
                  end: loc.end
                }]
              }] : undefined
            });
          }
        }

        if (!equalMap(incomingDepUsedSymbolsUpOld, incomingDep.usedSymbolsUp)) {
          changedDeps.add(incomingDep);
          incomingDep.usedSymbolsUpDirtyUp = true;
        }

        incomingDep.excluded = false;

        if (incomingDep.value.symbols != null && incomingDep.usedSymbolsUp.size === 0) {
          let assetGroups = this.assetGraph.getNodeIdsConnectedFrom(this.assetGraph.getNodeIdByContentKey(incomingDep.id));

          if (assetGroups.length === 1) {
            let [assetGroupId] = assetGroups;
            let assetGroup = (0, _nullthrows().default)(this.assetGraph.getNode(assetGroupId));

            if (assetGroup.type === 'asset_group' && assetGroup.value.sideEffects === false) {
              incomingDep.excluded = true;
            }
          } else {
            (0, _assert().default)(assetGroups.length === 0);
          }
        }
      }

      return errors;
    }); // Sort usedSymbolsUp so they are a consistent order across builds.
    // This ensures a consistent ordering of these symbols when packaging.
    // See https://github.com/parcel-bundler/parcel/pull/8212

    for (let dep of changedDeps) {
      dep.usedSymbolsUp = new Map([...dep.usedSymbolsUp].sort(([a], [b]) => a.localeCompare(b)));
    }
  }

  propagateSymbolsDown(visit) {
    let rootNodeId = (0, _nullthrows().default)(this.assetGraph.rootNodeId, 'A root node is required to traverse');
    let queue = new Set([rootNodeId]);
    let visited = new Set();

    while (queue.size > 0) {
      let queuedNodeId = (0, _nullthrows().default)(queue.values().next().value);
      queue.delete(queuedNodeId);
      let outgoing = this.assetGraph.getNodeIdsConnectedFrom(queuedNodeId);
      let node = (0, _nullthrows().default)(this.assetGraph.getNode(queuedNodeId));
      let wasNodeDirty = false;

      if (node.type === 'dependency' || node.type === 'asset_group') {
        wasNodeDirty = node.usedSymbolsDownDirty;
        node.usedSymbolsDownDirty = false;
      } else if (node.type === 'asset' && node.usedSymbolsDownDirty) {
        visit(node, this.assetGraph.getIncomingDependencies(node.value).map(d => {
          let dep = this.assetGraph.getNodeByContentKey(d.id);
          (0, _assert().default)(dep && dep.type === 'dependency');
          return dep;
        }), outgoing.map(dep => {
          let depNode = (0, _nullthrows().default)(this.assetGraph.getNode(dep));
          (0, _assert().default)(depNode.type === 'dependency');
          return depNode;
        }));
        node.usedSymbolsDownDirty = false;
      }

      visited.add(queuedNodeId);

      for (let child of outgoing) {
        let childNode = (0, _nullthrows().default)(this.assetGraph.getNode(child));
        let childDirty = false;

        if ((childNode.type === 'asset' || childNode.type === 'asset_group') && wasNodeDirty) {
          childNode.usedSymbolsDownDirty = true;
          childDirty = true;
        } else if (childNode.type === 'dependency') {
          childDirty = childNode.usedSymbolsDownDirty;
        }

        if (!visited.has(child) || childDirty) {
          queue.add(child);
        }
      }
    }
  }

  propagateSymbolsUp(visit) {
    let rootNodeId = (0, _nullthrows().default)(this.assetGraph.rootNodeId, 'A root node is required to traverse');
    let errors = new Map();
    let dirtyDeps = new Set();
    let visited = new Set([rootNodeId]); // post-order dfs

    const walk = nodeId => {
      let node = (0, _nullthrows().default)(this.assetGraph.getNode(nodeId));
      let outgoing = this.assetGraph.getNodeIdsConnectedFrom(nodeId);

      for (let childId of outgoing) {
        if (!visited.has(childId)) {
          visited.add(childId);
          walk(childId);
          let child = (0, _nullthrows().default)(this.assetGraph.getNode(childId));

          if (node.type === 'asset') {
            (0, _assert().default)(child.type === 'dependency');

            if (child.usedSymbolsUpDirtyUp) {
              node.usedSymbolsUpDirty = true;
              child.usedSymbolsUpDirtyUp = false;
            }
          }
        }
      }

      if (node.type === 'asset') {
        let incoming = this.assetGraph.getIncomingDependencies(node.value).map(d => {
          let n = this.assetGraph.getNodeByContentKey(d.id);
          (0, _assert().default)(n && n.type === 'dependency');
          return n;
        });

        for (let dep of incoming) {
          if (dep.usedSymbolsUpDirtyDown) {
            dep.usedSymbolsUpDirtyDown = false;
            node.usedSymbolsUpDirty = true;
          }
        }

        if (node.usedSymbolsUpDirty) {
          let e = visit(node, incoming, outgoing.map(depNodeId => {
            let depNode = (0, _nullthrows().default)(this.assetGraph.getNode(depNodeId));
            (0, _assert().default)(depNode.type === 'dependency');
            return depNode;
          }));

          if (e.length > 0) {
            node.usedSymbolsUpDirty = true;
            errors.set(nodeId, e);
          } else {
            node.usedSymbolsUpDirty = false;
            errors.delete(nodeId);
          }
        }
      } else if (node.type === 'dependency') {
        if (node.usedSymbolsUpDirtyUp) {
          dirtyDeps.add(nodeId);
        } else {
          dirtyDeps.delete(nodeId);
        }
      }
    };

    walk(rootNodeId); // traverse circular dependencies if necessary (ancestors of `dirtyDeps`)

    visited = new Set();
    let queue = new Set(dirtyDeps);

    while (queue.size > 0) {
      let queuedNodeId = (0, _nullthrows().default)(queue.values().next().value);
      queue.delete(queuedNodeId);
      visited.add(queuedNodeId);
      let node = (0, _nullthrows().default)(this.assetGraph.getNode(queuedNodeId));

      if (node.type === 'asset') {
        let incoming = this.assetGraph.getIncomingDependencies(node.value).map(dep => {
          let depNode = this.assetGraph.getNodeByContentKey(dep.id);
          (0, _assert().default)(depNode && depNode.type === 'dependency');
          return depNode;
        });
        let outgoing = this.assetGraph.getNodeIdsConnectedFrom(queuedNodeId).map(depNodeId => {
          let depNode = (0, _nullthrows().default)(this.assetGraph.getNode(depNodeId));
          (0, _assert().default)(depNode.type === 'dependency');
          return depNode;
        });

        for (let dep of outgoing) {
          if (dep.usedSymbolsUpDirtyUp) {
            node.usedSymbolsUpDirty = true;
            dep.usedSymbolsUpDirtyUp = false;
          }
        }

        if (node.usedSymbolsUpDirty) {
          let e = visit(node, incoming, outgoing);

          if (e.length > 0) {
            node.usedSymbolsUpDirty = true;
            errors.set(queuedNodeId, e);
          } else {
            node.usedSymbolsUpDirty = false;
            errors.delete(queuedNodeId);
          }
        }

        for (let i of incoming) {
          if (i.usedSymbolsUpDirtyUp) {
            queue.add(this.assetGraph.getNodeIdByContentKey(i.id));
          }
        }
      } else {
        let connectedNodes = this.assetGraph.getNodeIdsConnectedTo(queuedNodeId);

        if (connectedNodes.length > 0) {
          queue.add(...connectedNodes);
        }
      }
    } // Just throw the first error. Since errors can bubble (e.g. reexporting a reexported symbol also fails),
    // determining which failing export is the root cause is nontrivial (because of circular dependencies).


    if (errors.size > 0) {
      throw new (_diagnostic().default)({
        diagnostic: [...errors.values()][0]
      });
    }
  }

  shouldSkipRequest(nodeId) {
    let node = (0, _nullthrows().default)(this.assetGraph.getNode(nodeId));
    return node.complete === true || !typesWithRequests.has(node.type) || node.correspondingRequest != null && this.api.canSkipSubrequest(node.correspondingRequest);
  }

  queueCorrespondingRequest(nodeId, errors) {
    let promise;
    let node = (0, _nullthrows().default)(this.assetGraph.getNode(nodeId));

    switch (node.type) {
      case 'entry_specifier':
        promise = this.runEntryRequest(node.value);
        break;

      case 'entry_file':
        promise = this.runTargetRequest(node.value);
        break;

      case 'dependency':
        promise = this.runPathRequest(node.value);
        break;

      case 'asset_group':
        promise = this.runAssetRequest(node.value);
        break;

      default:
        throw new Error(`Can not queue corresponding request of node with type ${node.type}`);
    }

    return this.queue.add(() => promise.then(null, error => errors.push(error)));
  }

  async runEntryRequest(input) {
    let prevEntries = this.assetGraph.safeToIncrementallyBundle ? this.assetGraph.getEntryAssets().map(asset => asset.id).sort() : [];
    let request = (0, _EntryRequest.default)(input);
    let result = await this.api.runRequest(request, {
      force: true
    });
    this.assetGraph.resolveEntry(request.input, result.entries, request.id);

    if (this.assetGraph.safeToIncrementallyBundle) {
      let currentEntries = this.assetGraph.getEntryAssets().map(asset => asset.id).sort();
      let didEntriesChange = prevEntries.length !== currentEntries.length || prevEntries.every((entryId, index) => entryId === currentEntries[index]);

      if (didEntriesChange) {
        this.assetGraph.safeToIncrementallyBundle = false;
      }
    }
  }

  async runTargetRequest(input) {
    let request = (0, _TargetRequest.default)(input);
    let targets = await this.api.runRequest(request, {
      force: true
    });
    this.assetGraph.resolveTargets(request.input, targets, request.id);
  }

  async runPathRequest(input) {
    let request = (0, _PathRequest.default)({
      dependency: input,
      name: this.name
    });
    let result = await this.api.runRequest(request, {
      force: true
    });
    this.assetGraph.resolveDependency(input, result, request.id);
  }

  async runAssetRequest(input) {
    this.assetRequests.push(input);
    let request = (0, _AssetRequest.default)({ ...input,
      name: this.name,
      optionsRef: this.optionsRef,
      isSingleChangeRebuild: this.isSingleChangeRebuild
    });
    let assets = await this.api.runRequest(request, {
      force: true
    });

    if (assets != null) {
      for (let asset of assets) {
        if (this.assetGraph.safeToIncrementallyBundle) {
          let otherAsset = this.assetGraph.getNodeByContentKey(asset.id);

          if (otherAsset != null) {
            (0, _assert().default)(otherAsset.type === 'asset');

            if (!this._areDependenciesEqualForAssets(asset, otherAsset.value)) {
              this.assetGraph.safeToIncrementallyBundle = false;
            }
          } else {
            // adding a new entry or dependency
            this.assetGraph.safeToIncrementallyBundle = false;
          }
        }

        this.changedAssets.set(asset.id, asset);
      }

      this.assetGraph.resolveAssetGroup(input, assets, request.id);
    } else {
      this.assetGraph.safeToIncrementallyBundle = false;
    }

    this.isSingleChangeRebuild = false;
  }
  /**
   * Used for incremental bundling of modified assets
   */


  _areDependenciesEqualForAssets(asset, otherAsset) {
    let assetDependencies = Array.from(asset === null || asset === void 0 ? void 0 : asset.dependencies.keys()).sort();
    let otherAssetDependencies = Array.from(otherAsset === null || otherAsset === void 0 ? void 0 : otherAsset.dependencies.keys()).sort();

    if (assetDependencies.length !== otherAssetDependencies.length) {
      return false;
    }

    return assetDependencies.every((key, index) => {
      var _asset$dependencies$g, _asset$dependencies$g2, _otherAsset$dependenc, _otherAsset$dependenc2;

      if (key !== otherAssetDependencies[index]) {
        return false;
      }

      return equalSet(new Set(asset === null || asset === void 0 ? void 0 : (_asset$dependencies$g = asset.dependencies.get(key)) === null || _asset$dependencies$g === void 0 ? void 0 : (_asset$dependencies$g2 = _asset$dependencies$g.symbols) === null || _asset$dependencies$g2 === void 0 ? void 0 : _asset$dependencies$g2.keys()), new Set(otherAsset === null || otherAsset === void 0 ? void 0 : (_otherAsset$dependenc = otherAsset.dependencies.get(key)) === null || _otherAsset$dependenc === void 0 ? void 0 : (_otherAsset$dependenc2 = _otherAsset$dependenc.symbols) === null || _otherAsset$dependenc2 === void 0 ? void 0 : _otherAsset$dependenc2.keys()));
    });
  }

}

exports.AssetGraphBuilder = AssetGraphBuilder;

function equalMap(a, b) {
  if (a.size !== b.size) return false;

  for (let [k, v] of a) {
    if (!b.has(k)) return false;
    let vB = b.get(k);
    if ((vB === null || vB === void 0 ? void 0 : vB.asset) !== (v === null || v === void 0 ? void 0 : v.asset) || (vB === null || vB === void 0 ? void 0 : vB.symbol) !== (v === null || v === void 0 ? void 0 : v.symbol)) return false;
  }

  return true;
}

function equalSet(a, b) {
  return a.size === b.size && [...a].every(i => b.has(i));
}