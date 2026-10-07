"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GrowthBook = void 0;
exports.prefetchPayload = prefetchPayload;
var _domMutator = _interopRequireDefault(require("dom-mutator"));
var _util = require("./util");
var _featureRepository = require("./feature-repository");
var _core = require("./core");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
const SDK_VERSION = (0, _util.loadSDKVersion)();
class GrowthBook {
  // context is technically private, but some tools depend on it so we can't mangle the name

  // Properties and methods that start with "_" are mangled by Terser (saves ~150 bytes)

  constructor(options) {
    options = options || {};
    // These properties are all initialized in the constructor instead of above
    // This saves ~80 bytes in the final output
    this.version = SDK_VERSION;
    this._options = this.context = options;
    this._renderer = options.renderer || null;
    this._trackedExperiments = new Set();
    this._completedChangeIds = new Set();
    this._trackedFeatures = {};
    this.debug = !!options.debug;
    this._subscriptions = new Set();
    this.ready = false;
    this._assigned = new Map();
    this._activeAutoExperiments = new Map();
    this._triggeredExpKeys = new Set();
    this._initialized = false;
    this._redirectedUrl = "";
    this._deferredTrackingCalls = new Map();
    this._autoExperimentsAllowed = !options.disableExperimentsOnLoad;
    this._destroyCallbacks = [];
    this.logs = [];
    this.log = this.log.bind(this);
    this._saveDeferredTrack = this._saveDeferredTrack.bind(this);
    this._onExperimentEval = this._onExperimentEval.bind(this);
    this._fireSubscriptions = this._fireSubscriptions.bind(this);
    this._recordChangedId = this._recordChangedId.bind(this);
    if (options.remoteEval) {
      if (options.decryptionKey) {
        throw new Error("Encryption is not available for remoteEval");
      }
      if (!options.clientKey) {
        throw new Error("Missing clientKey");
      }
      let isGbHost = false;
      try {
        isGbHost = !!new URL(options.apiHost || "").hostname.match(/growthbook\.io$/i);
      } catch (e) {
        // ignore invalid URLs
      }
      if (isGbHost) {
        throw new Error("Cannot use remoteEval on GrowthBook Cloud");
      }
    } else {
      if (options.cacheKeyAttributes) {
        throw new Error("cacheKeyAttributes are only used for remoteEval");
      }
    }
    if (options.stickyBucketService) {
      const s = options.stickyBucketService;
      this._saveStickyBucketAssignmentDoc = doc => {
        return s.saveAssignments(doc);
      };
    }
    if (options.plugins) {
      for (const plugin of options.plugins) {
        plugin(this);
      }
    }
    if (options.features) {
      this.ready = true;
    }
    if (isBrowser && options.enableDevMode) {
      window._growthbook = this;
      document.dispatchEvent(new Event("gbloaded"));
    }
    if (options.experiments) {
      this.ready = true;
      this._updateAllAutoExperiments();
    }

    // Hydrate sticky bucket service
    if (this._options.stickyBucketService && this._options.stickyBucketAssignmentDocs) {
      for (const key in this._options.stickyBucketAssignmentDocs) {
        const doc = this._options.stickyBucketAssignmentDocs[key];
        if (doc) {
          this._options.stickyBucketService.saveAssignments(doc).catch(() => {
            // Ignore hydration errors
          });
        }
      }
    }

    // Legacy - passing in features/experiments into the constructor instead of using init
    if (this.ready) {
      this.refreshStickyBuckets(this.getPayload());
    }
  }
  async setPayload(payload) {
    this._payload = payload;
    const data = await (0, _core.decryptPayload)(payload, this._options.decryptionKey);
    this._decryptedPayload = data;
    await this.refreshStickyBuckets(data);
    if (data.features) {
      this._options.features = data.features;
    }
    if (data.savedGroups) {
      this._options.savedGroups = data.savedGroups;
    }
    if (data.experiments) {
      this._options.experiments = data.experiments;
      this._updateAllAutoExperiments();
    }
    this.ready = true;
    this._render();
  }
  initSync(options) {
    this._initialized = true;
    const payload = options.payload;
    if (payload.encryptedExperiments || payload.encryptedFeatures) {
      throw new Error("initSync does not support encrypted payloads");
    }
    if (this._options.stickyBucketService && !this._options.stickyBucketAssignmentDocs) {
      this._options.stickyBucketAssignmentDocs = this.generateStickyBucketAssignmentDocsSync(this._options.stickyBucketService, payload);
    }
    this._payload = payload;
    this._decryptedPayload = payload;
    if (payload.features) {
      this._options.features = payload.features;
    }
    if (payload.experiments) {
      this._options.experiments = payload.experiments;
      this._updateAllAutoExperiments();
    }
    this.ready = true;
    (0, _featureRepository.startStreaming)(this, options);
    return this;
  }
  async init(options) {
    this._initialized = true;
    options = options || {};
    if (options.cacheSettings) {
      (0, _featureRepository.configureCache)(options.cacheSettings);
    }
    if (options.payload) {
      await this.setPayload(options.payload);
      (0, _featureRepository.startStreaming)(this, options);
      return {
        success: true,
        source: "init"
      };
    } else {
      const {
        data,
        ...res
      } = await this._refresh({
        ...options,
        allowStale: true
      });
      (0, _featureRepository.startStreaming)(this, options);
      await this.setPayload(data || {});
      return res;
    }
  }

  /** @deprecated Use {@link init} */
  async loadFeatures(options) {
    options = options || {};
    await this.init({
      skipCache: options.skipCache,
      timeout: options.timeout,
      streaming: (this._options.backgroundSync ?? true) && (options.autoRefresh || this._options.subscribeToChanges)
    });
  }
  async refreshFeatures(options) {
    const res = await this._refresh({
      ...(options || {}),
      allowStale: false
    });
    if (res.data) {
      await this.setPayload(res.data);
    }
  }
  getApiInfo() {
    return [this.getApiHosts().apiHost, this.getClientKey()];
  }
  getApiHosts() {
    return (0, _core.getApiHosts)(this._options);
  }
  getClientKey() {
    return this._options.clientKey || "";
  }
  getPayload() {
    return this._payload || {
      features: this.getFeatures(),
      experiments: this.getExperiments()
    };
  }
  getDecryptedPayload() {
    return this._decryptedPayload || this.getPayload();
  }
  isRemoteEval() {
    return this._options.remoteEval || false;
  }
  getCacheKeyAttributes() {
    return this._options.cacheKeyAttributes;
  }
  async _refresh({
    timeout,
    skipCache,
    allowStale,
    streaming
  }) {
    if (!this._options.clientKey) {
      throw new Error("Missing clientKey");
    }
    // Trigger refresh in feature repository
    return (0, _featureRepository.refreshFeatures)({
      instance: this,
      timeout,
      skipCache: skipCache || this._options.disableCache,
      allowStale,
      backgroundSync: streaming ?? this._options.backgroundSync ?? true
    });
  }
  _render() {
    if (this._renderer) {
      try {
        this._renderer();
      } catch (e) {
        console.error("Failed to render", e);
      }
    }
  }

  /** @deprecated Use {@link setPayload} */
  setFeatures(features) {
    this._options.features = features;
    this.ready = true;
    this._render();
  }

  /** @deprecated Use {@link setPayload} */
  async setEncryptedFeatures(encryptedString, decryptionKey, subtle) {
    const featuresJSON = await (0, _util.decrypt)(encryptedString, decryptionKey || this._options.decryptionKey, subtle);
    this.setFeatures(JSON.parse(featuresJSON));
  }

  /** @deprecated Use {@link setPayload} */
  setExperiments(experiments) {
    this._options.experiments = experiments;
    this.ready = true;
    this._updateAllAutoExperiments();
  }

  /** @deprecated Use {@link setPayload} */
  async setEncryptedExperiments(encryptedString, decryptionKey, subtle) {
    const experimentsJSON = await (0, _util.decrypt)(encryptedString, decryptionKey || this._options.decryptionKey, subtle);
    this.setExperiments(JSON.parse(experimentsJSON));
  }
  async setAttributes(attributes) {
    this._options.attributes = attributes;
    if (this._options.stickyBucketService) {
      await this.refreshStickyBuckets();
    }
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render();
    this._updateAllAutoExperiments();
  }
  async updateAttributes(attributes) {
    return this.setAttributes({
      ...this._options.attributes,
      ...attributes
    });
  }
  async setAttributeOverrides(overrides) {
    this._options.attributeOverrides = overrides;
    if (this._options.stickyBucketService) {
      await this.refreshStickyBuckets();
    }
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render();
    this._updateAllAutoExperiments();
  }
  async setForcedVariations(vars) {
    this._options.forcedVariations = vars || {};
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render();
    this._updateAllAutoExperiments();
  }

  // eslint-disable-next-line
  setForcedFeatures(map) {
    this._options.forcedFeatureValues = map;
    this._render();
  }
  async setURL(url) {
    if (url === this._options.url) return;
    this._options.url = url;
    this._redirectedUrl = "";
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      this._updateAllAutoExperiments(true);
      return;
    }
    this._updateAllAutoExperiments(true);
  }
  getAttributes() {
    return {
      ...this._options.attributes,
      ...this._options.attributeOverrides
    };
  }
  getForcedVariations() {
    return this._options.forcedVariations || {};
  }
  getForcedFeatures() {
    // eslint-disable-next-line
    return this._options.forcedFeatureValues || new Map();
  }
  getStickyBucketAssignmentDocs() {
    return this._options.stickyBucketAssignmentDocs || {};
  }
  getUrl() {
    return this._options.url || "";
  }
  getFeatures() {
    return this._options.features || {};
  }
  getExperiments() {
    return this._options.experiments || [];
  }
  getCompletedChangeIds() {
    return Array.from(this._completedChangeIds);
  }
  subscribe(cb) {
    this._subscriptions.add(cb);
    return () => {
      this._subscriptions.delete(cb);
    };
  }
  async _refreshForRemoteEval() {
    if (!this._options.remoteEval) return;
    if (!this._initialized) return;
    const res = await this._refresh({
      allowStale: false
    });
    if (res.data) {
      await this.setPayload(res.data);
    }
  }
  getAllResults() {
    return new Map(this._assigned);
  }
  onDestroy(cb) {
    this._destroyCallbacks.push(cb);
  }
  isDestroyed() {
    return !!this._destroyed;
  }
  destroy(options) {
    options = options || {};
    this._destroyed = true;

    // Custom callbacks
    // Do this first in case it needs access to the below data that is cleared
    this._destroyCallbacks.forEach(cb => {
      try {
        cb();
      } catch (e) {
        console.error(e);
      }
    });

    // Release references to save memory
    this._subscriptions.clear();
    this._assigned.clear();
    this._trackedExperiments.clear();
    this._completedChangeIds.clear();
    this._deferredTrackingCalls.clear();
    this._trackedFeatures = {};
    this._destroyCallbacks = [];
    this._payload = undefined;
    this._saveStickyBucketAssignmentDoc = undefined;
    (0, _featureRepository.unsubscribe)(this);
    if (options.destroyAllStreams) {
      (0, _featureRepository.clearAutoRefresh)();
    }
    this.logs = [];
    if (isBrowser && window._growthbook === this) {
      delete window._growthbook;
    }

    // Undo any active auto experiments
    this._activeAutoExperiments.forEach(exp => {
      exp.undo();
    });
    this._activeAutoExperiments.clear();
    this._triggeredExpKeys.clear();
  }
  setRenderer(renderer) {
    this._renderer = renderer;
  }
  forceVariation(key, variation) {
    this._options.forcedVariations = this._options.forcedVariations || {};
    this._options.forcedVariations[key] = variation;
    if (this._options.remoteEval) {
      this._refreshForRemoteEval();
      return;
    }
    this._updateAllAutoExperiments();
    this._render();
  }
  run(experiment) {
    const {
      result
    } = (0, _core.runExperiment)(experiment, null, this._getEvalContext());
    this._onExperimentEval(experiment, result);
    return result;
  }
  triggerExperiment(key) {
    this._triggeredExpKeys.add(key);
    if (!this._options.experiments) return null;
    const experiments = this._options.experiments.filter(exp => exp.key === key);
    return experiments.map(exp => {
      return this._runAutoExperiment(exp);
    }).filter(res => res !== null);
  }
  triggerAutoExperiments() {
    this._autoExperimentsAllowed = true;
    this._updateAllAutoExperiments(true);
  }
  _getEvalContext() {
    return {
      user: this._getUserContext(),
      global: this._getGlobalContext(),
      stack: {
        evaluatedFeatures: new Set()
      }
    };
  }
  _getUserContext() {
    return {
      attributes: this._options.user ? {
        ...this._options.user,
        ...this._options.attributes
      } : this._options.attributes,
      enableDevMode: this._options.enableDevMode,
      blockedChangeIds: this._options.blockedChangeIds,
      stickyBucketAssignmentDocs: this._options.stickyBucketAssignmentDocs,
      url: this._getContextUrl(),
      forcedVariations: this._options.forcedVariations,
      forcedFeatureValues: this._options.forcedFeatureValues,
      attributeOverrides: this._options.attributeOverrides,
      saveStickyBucketAssignmentDoc: this._saveStickyBucketAssignmentDoc,
      trackingCallback: this._options.trackingCallback,
      onFeatureUsage: this._options.onFeatureUsage,
      devLogs: this.logs,
      trackedExperiments: this._trackedExperiments,
      trackedFeatureUsage: this._trackedFeatures
    };
  }
  _getGlobalContext() {
    return {
      features: this._options.features,
      experiments: this._options.experiments,
      log: this.log,
      enabled: this._options.enabled,
      qaMode: this._options.qaMode,
      savedGroups: this._options.savedGroups,
      groups: this._options.groups,
      overrides: this._options.overrides,
      onExperimentEval: this._onExperimentEval,
      recordChangeId: this._recordChangedId,
      saveDeferredTrack: this._saveDeferredTrack,
      eventLogger: this._options.eventLogger
    };
  }
  _runAutoExperiment(experiment, forceRerun) {
    const existing = this._activeAutoExperiments.get(experiment);

    // If this is a manual experiment and it's not already running, skip
    if (experiment.manual && !this._triggeredExpKeys.has(experiment.key) && !existing) return null;

    // Check if this particular experiment is blocked by options settings
    // For example, if all visualEditor experiments are disabled
    const isBlocked = this._isAutoExperimentBlockedByContext(experiment);
    if (isBlocked) {
      process.env.NODE_ENV !== "production" && this.log("Auto experiment blocked", {
        id: experiment.key
      });
    }
    let result;
    let trackingCall;
    // Run the experiment (if blocked exclude)
    if (isBlocked) {
      result = (0, _core.getExperimentResult)(this._getEvalContext(), experiment, -1, false, "");
    } else {
      ({
        result,
        trackingCall
      } = (0, _core.runExperiment)(experiment, null, this._getEvalContext()));
      this._onExperimentEval(experiment, result);
    }

    // A hash to quickly tell if the assigned value changed
    const valueHash = JSON.stringify(result.value);

    // If the changes are already active, no need to re-apply them
    if (!forceRerun && result.inExperiment && existing && existing.valueHash === valueHash) {
      return result;
    }

    // Undo any existing changes
    if (existing) this._undoActiveAutoExperiment(experiment);

    // Apply new changes
    if (result.inExperiment) {
      const changeType = (0, _util.getAutoExperimentChangeType)(experiment);
      if (changeType === "redirect" && result.value.urlRedirect && experiment.urlPatterns) {
        const url = experiment.persistQueryString ? (0, _util.mergeQueryStrings)(this._getContextUrl(), result.value.urlRedirect) : result.value.urlRedirect;
        if ((0, _util.isURLTargeted)(url, experiment.urlPatterns)) {
          this.log("Skipping redirect because original URL matches redirect URL", {
            id: experiment.key
          });
          return result;
        }
        this._redirectedUrl = url;
        const {
          navigate,
          delay
        } = this._getNavigateFunction();
        if (navigate) {
          if (isBrowser) {
            // Wait for the possibly-async tracking callback, bound by min and max delays
            Promise.all([...(trackingCall ? [(0, _util.promiseTimeout)(trackingCall, this._options.maxNavigateDelay ?? 1000)] : []), new Promise(resolve => window.setTimeout(resolve, this._options.navigateDelay ?? delay))]).then(() => {
              try {
                navigate(url);
              } catch (e) {
                console.error(e);
              }
            });
          } else {
            try {
              navigate(url);
            } catch (e) {
              console.error(e);
            }
          }
        }
      } else if (changeType === "visual") {
        const undo = this._options.applyDomChangesCallback ? this._options.applyDomChangesCallback(result.value) : this._applyDOMChanges(result.value);
        if (undo) {
          this._activeAutoExperiments.set(experiment, {
            undo,
            valueHash
          });
        }
      }
    }
    return result;
  }
  _undoActiveAutoExperiment(exp) {
    const data = this._activeAutoExperiments.get(exp);
    if (data) {
      data.undo();
      this._activeAutoExperiments.delete(exp);
    }
  }
  _updateAllAutoExperiments(forceRerun) {
    if (!this._autoExperimentsAllowed) return;
    const experiments = this._options.experiments || [];

    // Stop any experiments that are no longer defined
    const keys = new Set(experiments);
    this._activeAutoExperiments.forEach((v, k) => {
      if (!keys.has(k)) {
        v.undo();
        this._activeAutoExperiments.delete(k);
      }
    });

    // Re-run all new/updated experiments
    for (const exp of experiments) {
      const result = this._runAutoExperiment(exp, forceRerun);

      // Once you're in a redirect experiment, break out of the loop and don't run any further experiments
      if (result && result.inExperiment && (0, _util.getAutoExperimentChangeType)(exp) === "redirect") {
        break;
      }
    }
  }
  _onExperimentEval(experiment, result) {
    const prev = this._assigned.get(experiment.key);
    this._assigned.set(experiment.key, {
      experiment,
      result
    });
    if (this._subscriptions.size > 0) {
      this._fireSubscriptions(experiment, result, prev);
    }
  }
  _fireSubscriptions(experiment, result,
  // eslint-disable-next-line
  prev) {
    // If assigned variation has changed, fire subscriptions
    // TODO: what if the experiment definition has changed?
    if (!prev || prev.result.inExperiment !== result.inExperiment || prev.result.variationId !== result.variationId) {
      this._subscriptions.forEach(cb => {
        try {
          cb(experiment, result);
        } catch (e) {
          console.error(e);
        }
      });
    }
  }
  _recordChangedId(id) {
    this._completedChangeIds.add(id);
  }
  isOn(key) {
    return this.evalFeature(key).on;
  }
  isOff(key) {
    return this.evalFeature(key).off;
  }
  getFeatureValue(key, defaultValue) {
    const value = this.evalFeature(key).value;
    return value === null ? defaultValue : value;
  }

  /**
   * @deprecated Use {@link evalFeature}
   * @param id
   */

  feature(id) {
    return this.evalFeature(id);
  }
  evalFeature(id) {
    return (0, _core.evalFeature)(id, this._getEvalContext());
  }
  log(msg, ctx) {
    if (!this.debug) return;
    if (this._options.log) this._options.log(msg, ctx);else console.log(msg, ctx);
  }
  getDeferredTrackingCalls() {
    return Array.from(this._deferredTrackingCalls.values());
  }
  setDeferredTrackingCalls(calls) {
    this._deferredTrackingCalls = new Map(calls.filter(c => c && c.experiment && c.result).map(c => {
      return [(0, _core.getExperimentDedupeKey)(c.experiment, c.result), c];
    }));
  }
  async fireDeferredTrackingCalls() {
    if (!this._options.trackingCallback) return;
    const promises = [];
    this._deferredTrackingCalls.forEach(call => {
      if (!call || !call.experiment || !call.result) {
        console.error("Invalid deferred tracking call", {
          call: call
        });
      } else {
        promises.push(this._options.trackingCallback(call.experiment, call.result));
      }
    });
    this._deferredTrackingCalls.clear();
    await Promise.all(promises);
  }
  setTrackingCallback(callback) {
    this._options.trackingCallback = callback;
    this.fireDeferredTrackingCalls();
  }
  setFeatureUsageCallback(callback) {
    this._options.onFeatureUsage = callback;
  }
  setEventLogger(logger) {
    this._options.eventLogger = logger;
  }
  async logEvent(eventName, properties) {
    if (this._destroyed) {
      console.error("Cannot log event to destroyed GrowthBook instance");
      return;
    }
    if (this._options.enableDevMode) {
      this.logs.push({
        eventName,
        properties,
        timestamp: Date.now().toString(),
        logType: "event"
      });
    }
    if (this._options.eventLogger) {
      try {
        await this._options.eventLogger(eventName, properties || {}, this._getUserContext());
      } catch (e) {
        console.error(e);
      }
    } else {
      console.error("No event logger configured");
    }
  }
  _saveDeferredTrack(data) {
    this._deferredTrackingCalls.set((0, _core.getExperimentDedupeKey)(data.experiment, data.result), data);
  }
  _getContextUrl() {
    return this._options.url || (isBrowser ? window.location.href : "");
  }
  _isAutoExperimentBlockedByContext(experiment) {
    const changeType = (0, _util.getAutoExperimentChangeType)(experiment);
    if (changeType === "visual") {
      if (this._options.disableVisualExperiments) return true;
      if (this._options.disableJsInjection) {
        if (experiment.variations.some(v => v.js)) {
          return true;
        }
      }
    } else if (changeType === "redirect") {
      if (this._options.disableUrlRedirectExperiments) return true;

      // Validate URLs
      try {
        const current = new URL(this._getContextUrl());
        for (const v of experiment.variations) {
          if (!v || !v.urlRedirect) continue;
          const url = new URL(v.urlRedirect);

          // If we're blocking cross origin redirects, block if the protocol or host is different
          if (this._options.disableCrossOriginUrlRedirectExperiments) {
            if (url.protocol !== current.protocol) return true;
            if (url.host !== current.host) return true;
          }
        }
      } catch (e) {
        // Problem parsing one of the URLs
        this.log("Error parsing current or redirect URL", {
          id: experiment.key,
          error: e
        });
        return true;
      }
    } else {
      // Block any unknown changeTypes
      return true;
    }
    if (experiment.changeId && (this._options.blockedChangeIds || []).includes(experiment.changeId)) {
      return true;
    }
    return false;
  }
  getRedirectUrl() {
    return this._redirectedUrl;
  }
  _getNavigateFunction() {
    if (this._options.navigate) {
      return {
        navigate: this._options.navigate,
        delay: 0
      };
    } else if (isBrowser) {
      return {
        navigate: url => {
          window.location.replace(url);
        },
        delay: 100
      };
    }
    return {
      navigate: null,
      delay: 0
    };
  }
  _applyDOMChanges(changes) {
    if (!isBrowser) return;
    const undo = [];
    if (changes.css) {
      const s = document.createElement("style");
      s.innerHTML = changes.css;
      document.head.appendChild(s);
      undo.push(() => s.remove());
    }
    if (changes.js) {
      const script = document.createElement("script");
      script.innerHTML = changes.js;
      if (this._options.jsInjectionNonce) {
        script.nonce = this._options.jsInjectionNonce;
      }
      document.head.appendChild(script);
      undo.push(() => script.remove());
    }
    if (changes.domMutations) {
      changes.domMutations.forEach(mutation => {
        undo.push(_domMutator.default.declarative(mutation).revert);
      });
    }
    return () => {
      undo.forEach(fn => fn());
    };
  }
  async refreshStickyBuckets(data) {
    if (this._options.stickyBucketService) {
      const ctx = this._getEvalContext();
      const docs = await (0, _core.getAllStickyBucketAssignmentDocs)(ctx, this._options.stickyBucketService, data);
      this._options.stickyBucketAssignmentDocs = docs;
    }
  }
  generateStickyBucketAssignmentDocsSync(stickyBucketService, payload) {
    if (!("getAllAssignmentsSync" in stickyBucketService)) {
      console.error("generating StickyBucketAssignmentDocs docs requires StickyBucketServiceSync");
      return;
    }
    const ctx = this._getEvalContext();
    const attributes = (0, _core.getStickyBucketAttributes)(ctx, payload);
    return stickyBucketService.getAllAssignmentsSync(attributes);
  }
  inDevMode() {
    return !!this._options.enableDevMode;
  }
}
exports.GrowthBook = GrowthBook;
async function prefetchPayload(options) {
  // Create a temporary instance, just to fetch the payload
  const instance = new GrowthBook(options);
  await (0, _featureRepository.refreshFeatures)({
    instance,
    skipCache: options.skipCache,
    allowStale: false,
    backgroundSync: options.streaming
  });
  instance.destroy();
}
//# sourceMappingURL=GrowthBook.js.map