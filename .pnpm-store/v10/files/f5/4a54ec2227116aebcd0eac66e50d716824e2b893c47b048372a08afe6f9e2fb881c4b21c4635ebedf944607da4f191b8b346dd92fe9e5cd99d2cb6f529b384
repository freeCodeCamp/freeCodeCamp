"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INTERNAL_TRANSFORM = exports.INTERNAL_RESOLVE = exports.BuildError = void 0;
exports.createWorkerFarm = createWorkerFarm;
exports.default = void 0;

function _assert() {
  const data = _interopRequireDefault(require("assert"));

  _assert = function () {
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

var _Asset = require("./public/Asset");

var _Bundle = require("./public/Bundle");

var _BundleGraph = _interopRequireDefault(require("./public/BundleGraph"));

function _workers() {
  const data = _interopRequireDefault(require("@parcel/workers"));

  _workers = function () {
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

var _utils = require("./utils");

var _ParcelConfigRequest = require("./requests/ParcelConfigRequest");

var _ReporterRunner = _interopRequireDefault(require("./ReporterRunner"));

var _dumpGraphToGraphViz = _interopRequireDefault(require("./dumpGraphToGraphViz"));

var _resolveOptions = _interopRequireDefault(require("./resolveOptions"));

function _events() {
  const data = require("@parcel/events");

  _events = function () {
    return data;
  };

  return data;
}

function _cjsPonyfill() {
  const data = require("abortcontroller-polyfill/dist/cjs-ponyfill");

  _cjsPonyfill = function () {
    return data;
  };

  return data;
}

function _utils2() {
  const data = require("@parcel/utils");

  _utils2 = function () {
    return data;
  };

  return data;
}

var _ParcelConfig = _interopRequireDefault(require("./ParcelConfig"));

function _logger() {
  const data = _interopRequireDefault(require("@parcel/logger"));

  _logger = function () {
    return data;
  };

  return data;
}

var _RequestTracker = _interopRequireWildcard(require("./RequestTracker"));

var _ValidationRequest = _interopRequireDefault(require("./requests/ValidationRequest"));

var _ParcelBuildRequest = _interopRequireDefault(require("./requests/ParcelBuildRequest"));

function _sourceMap() {
  const data = require("@parcel/source-map");

  _sourceMap = function () {
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

var _projectPath = require("./projectPath");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-unused-vars
(0, _utils.registerCoreWithSerializer)();
const INTERNAL_TRANSFORM = Symbol('internal_transform');
exports.INTERNAL_TRANSFORM = INTERNAL_TRANSFORM;
const INTERNAL_RESOLVE = Symbol('internal_resolve');
exports.INTERNAL_RESOLVE = INTERNAL_RESOLVE;

class Parcel {
  #requestTracker
  /*: RequestTracker*/
  ;
  #config
  /*: ParcelConfig*/
  ;
  #farm
  /*: WorkerFarm*/
  ;
  #initialized
  /*: boolean*/
  = false;
  #disposable
  /*: Disposable */
  ;
  #initialOptions
  /*: InitialParcelOptions*/
  ;
  #reporterRunner
  /*: ReporterRunner*/
  ;
  #resolvedOptions
  /*: ?ParcelOptions*/
  = null;
  #optionsRef
  /*: SharedReference */
  ;
  #watchAbortController
  /*: AbortController*/
  ;
  #watchQueue
  /*: PromiseQueue<?BuildEvent>*/
  = new (_utils2().PromiseQueue)({
    maxConcurrent: 1
  });
  #watchEvents
  /*: ValueEmitter<
  | {|
  +error: Error,
  +buildEvent?: void,
  |}
  | {|
  +buildEvent: BuildEvent,
  +error?: void,
  |},
  > */
  ;
  #watcherSubscription
  /*: ?AsyncSubscription*/
  ;
  #watcherCount
  /*: number*/
  = 0;
  #requestedAssetIds
  /*: Set<string>*/
  = new Set();

  constructor(options) {
    this.#initialOptions = options;
  }

  async _init() {
    if (this.#initialized) {
      return;
    }

    await _sourceMap().init;
    await _hash().init;
    let resolvedOptions = await (0, _resolveOptions.default)(this.#initialOptions);
    this.#resolvedOptions = resolvedOptions;
    let {
      config
    } = await (0, _ParcelConfigRequest.loadParcelConfig)(resolvedOptions);
    this.#config = new _ParcelConfig.default(config, resolvedOptions);

    if (this.#initialOptions.workerFarm) {
      if (this.#initialOptions.workerFarm.ending) {
        throw new Error('Supplied WorkerFarm is ending');
      }

      this.#farm = this.#initialOptions.workerFarm;
    } else {
      this.#farm = createWorkerFarm({
        shouldPatchConsole: resolvedOptions.shouldPatchConsole
      });
    }

    await resolvedOptions.cache.ensure();
    let {
      dispose: disposeOptions,
      ref: optionsRef
    } = await this.#farm.createSharedReference(resolvedOptions, false);
    this.#optionsRef = optionsRef;
    this.#disposable = new (_events().Disposable)();

    if (this.#initialOptions.workerFarm) {
      // If we don't own the farm, dispose of only these references when
      // Parcel ends.
      this.#disposable.add(disposeOptions);
    } else {
      // Otherwise, when shutting down, end the entire farm we created.
      this.#disposable.add(() => this.#farm.end());
    }

    this.#watchEvents = new (_events().ValueEmitter)();
    this.#disposable.add(() => this.#watchEvents.dispose());
    this.#requestTracker = await _RequestTracker.default.init({
      farm: this.#farm,
      options: resolvedOptions
    });
    this.#reporterRunner = new _ReporterRunner.default({
      config: this.#config,
      options: resolvedOptions,
      workerFarm: this.#farm
    });
    this.#disposable.add(this.#reporterRunner);
    this.#initialized = true;
  }

  async run() {
    let startTime = Date.now();

    if (!this.#initialized) {
      await this._init();
    }

    let result = await this._build({
      startTime
    });
    await this._end();

    if (result.type === 'buildFailure') {
      throw new BuildError(result.diagnostics);
    }

    return result;
  }

  async _end() {
    this.#initialized = false;
    await Promise.all([this.#disposable.dispose(), await this.#requestTracker.writeToCache()]);
  }

  async _startNextBuild() {
    this.#watchAbortController = new (_cjsPonyfill().AbortController)();
    await this.#farm.callAllWorkers('clearConfigCache', []);

    try {
      let buildEvent = await this._build({
        signal: this.#watchAbortController.signal
      });
      this.#watchEvents.emit({
        buildEvent
      });
      return buildEvent;
    } catch (err) {
      // Ignore BuildAbortErrors and only emit critical errors.
      if (!(err instanceof _utils.BuildAbortError)) {
        throw err;
      }
    }
  }

  async watch(cb) {
    if (!this.#initialized) {
      await this._init();
    }

    let watchEventsDisposable;

    if (cb) {
      watchEventsDisposable = this.#watchEvents.addListener(({
        error,
        buildEvent
      }) => cb(error, buildEvent));
    }

    if (this.#watcherCount === 0) {
      this.#watcherSubscription = await this._getWatcherSubscription();
      await this.#reporterRunner.report({
        type: 'watchStart'
      }); // Kick off a first build, but don't await its results. Its results will
      // be provided to the callback.

      this.#watchQueue.add(() => this._startNextBuild());
      this.#watchQueue.run();
    }

    this.#watcherCount++;
    let unsubscribePromise;

    const unsubscribe = async () => {
      if (watchEventsDisposable) {
        watchEventsDisposable.dispose();
      }

      this.#watcherCount--;

      if (this.#watcherCount === 0) {
        await (0, _nullthrows().default)(this.#watcherSubscription).unsubscribe();
        this.#watcherSubscription = null;
        await this.#reporterRunner.report({
          type: 'watchEnd'
        });
        this.#watchAbortController.abort();
        await this.#watchQueue.run();
        await this._end();
      }
    };

    return {
      unsubscribe() {
        if (unsubscribePromise == null) {
          unsubscribePromise = unsubscribe();
        }

        return unsubscribePromise;
      }

    };
  }

  async _build({
    signal,
    startTime = Date.now()
  } = {
    /*::...null*/
  }) {
    this.#requestTracker.setSignal(signal);
    let options = (0, _nullthrows().default)(this.#resolvedOptions);

    try {
      if (options.shouldProfile) {
        await this.startProfiling();
      }

      this.#reporterRunner.report({
        type: 'buildStart'
      });
      this.#requestTracker.graph.invalidateOnBuildNodes();
      let request = (0, _ParcelBuildRequest.default)({
        optionsRef: this.#optionsRef,
        requestedAssetIds: this.#requestedAssetIds,
        signal
      });
      let {
        bundleGraph,
        bundleInfo,
        changedAssets,
        assetRequests
      } = await this.#requestTracker.runRequest(request, {
        force: true
      });
      this.#requestedAssetIds.clear();
      (0, _dumpGraphToGraphViz.default)( // $FlowFixMe
      this.#requestTracker.graph, 'RequestGraph', _RequestTracker.requestGraphEdgeTypes);
      let event = {
        type: 'buildSuccess',
        changedAssets: new Map(Array.from(changedAssets).map(([id, asset]) => [id, (0, _Asset.assetFromValue)(asset, options)])),
        bundleGraph: new _BundleGraph.default(bundleGraph, (bundle, bundleGraph, options) => _Bundle.PackagedBundle.getWithInfo(bundle, bundleGraph, options, bundleInfo.get(bundle.id)), options),
        buildTime: Date.now() - startTime,
        requestBundle: async bundle => {
          let bundleNode = bundleGraph._graph.getNodeByContentKey(bundle.id);

          (0, _assert().default)((bundleNode === null || bundleNode === void 0 ? void 0 : bundleNode.type) === 'bundle', 'Bundle does not exist');

          if (!bundleNode.value.isPlaceholder) {
            // Nothing to do.
            return {
              type: 'buildSuccess',
              changedAssets: new Map(),
              bundleGraph: event.bundleGraph,
              buildTime: 0,
              requestBundle: event.requestBundle
            };
          }

          for (let assetId of bundleNode.value.entryAssetIds) {
            this.#requestedAssetIds.add(assetId);
          }

          if (this.#watchQueue.getNumWaiting() === 0) {
            if (this.#watchAbortController) {
              this.#watchAbortController.abort();
            }

            this.#watchQueue.add(() => this._startNextBuild());
          }

          let results = await this.#watchQueue.run();
          let result = results.filter(Boolean).pop();

          if (result.type === 'buildFailure') {
            throw new BuildError(result.diagnostics);
          }

          return result;
        }
      };
      await this.#reporterRunner.report(event);
      await this.#requestTracker.runRequest((0, _ValidationRequest.default)({
        optionsRef: this.#optionsRef,
        assetRequests
      }), {
        force: assetRequests.length > 0
      });
      return event;
    } catch (e) {
      if (e instanceof _utils.BuildAbortError) {
        throw e;
      }

      let diagnostic = (0, _diagnostic().anyToDiagnostic)(e);
      let event = {
        type: 'buildFailure',
        diagnostics: Array.isArray(diagnostic) ? diagnostic : [diagnostic]
      };
      await this.#reporterRunner.report(event);
      return event;
    } finally {
      if (this.isProfiling) {
        await this.stopProfiling();
      }

      await this.#farm.callAllWorkers('clearConfigCache', []);
    }
  }

  async _getWatcherSubscription() {
    (0, _assert().default)(this.#watcherSubscription == null);
    let resolvedOptions = (0, _nullthrows().default)(this.#resolvedOptions);
    let opts = (0, _RequestTracker.getWatcherOptions)(resolvedOptions);
    let sub = await resolvedOptions.inputFS.watch(resolvedOptions.projectRoot, (err, events) => {
      if (err) {
        this.#watchEvents.emit({
          error: err
        });
        return;
      }

      let isInvalid = this.#requestTracker.respondToFSEvents(events.map(e => ({
        type: e.type,
        path: (0, _projectPath.toProjectPath)(resolvedOptions.projectRoot, e.path)
      })));

      if (isInvalid && this.#watchQueue.getNumWaiting() === 0) {
        if (this.#watchAbortController) {
          this.#watchAbortController.abort();
        }

        this.#watchQueue.add(() => this._startNextBuild());
        this.#watchQueue.run();
      }
    }, opts);
    return {
      unsubscribe: () => sub.unsubscribe()
    };
  } // This is mainly for integration tests and it not public api!


  _getResolvedParcelOptions() {
    return (0, _nullthrows().default)(this.#resolvedOptions, 'Resolved options is null, please let parcel initialize before accessing this.');
  }

  async startProfiling() {
    if (this.isProfiling) {
      throw new Error('Parcel is already profiling');
    }

    _logger().default.info({
      origin: '@parcel/core',
      message: 'Starting profiling...'
    });

    this.isProfiling = true;
    await this.#farm.startProfile();
  }

  stopProfiling() {
    if (!this.isProfiling) {
      throw new Error('Parcel is not profiling');
    }

    _logger().default.info({
      origin: '@parcel/core',
      message: 'Stopping profiling...'
    });

    this.isProfiling = false;
    return this.#farm.endProfile();
  }

  takeHeapSnapshot() {
    _logger().default.info({
      origin: '@parcel/core',
      message: 'Taking heap snapshot...'
    });

    return this.#farm.takeHeapSnapshot();
  }

}

exports.default = Parcel;

class BuildError extends _diagnostic().default {
  constructor(diagnostic) {
    super({
      diagnostic
    });
    this.name = 'BuildError';
  }

}

exports.BuildError = BuildError;

function createWorkerFarm(options = {}) {
  return new (_workers().default)({ ...options,
    workerPath: require.resolve('./worker')
  });
}