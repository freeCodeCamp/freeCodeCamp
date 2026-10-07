import { loadSDKVersion } from "./util.mjs";
import { clearAutoRefresh, configureCache, refreshFeatures, startStreaming, unsubscribe } from "./feature-repository.mjs";
import { decryptPayload, evalFeature as _evalFeature, getAllStickyBucketAssignmentDocs, getApiHosts, runExperiment } from "./core.mjs";
const SDK_VERSION = loadSDKVersion();
export class GrowthBookClient {
  // Properties and methods that start with "_" are mangled by Terser (saves ~150 bytes)

  constructor(options) {
    options = options || {};
    // These properties are all initialized in the constructor instead of above
    // This saves ~80 bytes in the final output
    this.version = SDK_VERSION;
    this._options = options;
    this.debug = !!options.debug;
    this.ready = false;
    this._features = {};
    this._experiments = [];
    this.log = this.log.bind(this);
    if (options.plugins) {
      for (const plugin of options.plugins) {
        plugin(this);
      }
    }
  }
  async setPayload(payload) {
    this._payload = payload;
    const data = await decryptPayload(payload, this._options.decryptionKey);
    this._decryptedPayload = data;
    if (data.features) {
      this._features = data.features;
    }
    if (data.experiments) {
      this._experiments = data.experiments;
    }
    if (data.savedGroups) {
      this._options.savedGroups = data.savedGroups;
    }
    this.ready = true;
  }
  initSync(options) {
    const payload = options.payload;
    if (payload.encryptedExperiments || payload.encryptedFeatures) {
      throw new Error("initSync does not support encrypted payloads");
    }
    this._payload = payload;
    this._decryptedPayload = payload;
    if (payload.features) {
      this._features = payload.features;
    }
    if (payload.experiments) {
      this._experiments = payload.experiments;
    }
    this.ready = true;
    startStreaming(this, options);
    return this;
  }
  async init(options) {
    options = options || {};
    if (options.cacheSettings) {
      configureCache(options.cacheSettings);
    }
    if (options.payload) {
      await this.setPayload(options.payload);
      startStreaming(this, options);
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
      startStreaming(this, options);
      await this.setPayload(data || {});
      return res;
    }
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
    return getApiHosts(this._options);
  }
  getClientKey() {
    return this._options.clientKey || "";
  }
  getPayload() {
    return this._payload || {
      features: this.getFeatures(),
      experiments: this._experiments || []
    };
  }
  getDecryptedPayload() {
    return this._decryptedPayload || this.getPayload();
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
    return refreshFeatures({
      instance: this,
      timeout,
      skipCache: skipCache || this._options.disableCache,
      allowStale,
      backgroundSync: streaming ?? true
    });
  }
  getFeatures() {
    return this._features || {};
  }
  getGlobalAttributes() {
    return this._options.globalAttributes || {};
  }
  setGlobalAttributes(attributes) {
    this._options.globalAttributes = attributes;
  }
  destroy(options) {
    options = options || {};
    this._destroyed = true;
    unsubscribe(this);
    if (options.destroyAllStreams) {
      clearAutoRefresh();
    }

    // Release references to save memory
    this._features = {};
    this._experiments = [];
    this._decryptedPayload = undefined;
    this._payload = undefined;
    this._options = {};
  }
  isDestroyed() {
    return !!this._destroyed;
  }
  setEventLogger(logger) {
    this._options.eventLogger = logger;
  }
  logEvent(eventName, properties, userContext) {
    if (this._options.eventLogger) {
      const ctx = this._getEvalContext(userContext);
      this._options.eventLogger(eventName, properties, ctx.user);
    }
  }
  runInlineExperiment(experiment, userContext) {
    const {
      result
    } = runExperiment(experiment, null, this._getEvalContext(userContext));
    return result;
  }
  _getEvalContext(userContext) {
    if (this._options.globalAttributes) {
      userContext = {
        ...userContext,
        attributes: {
          ...this._options.globalAttributes,
          ...userContext.attributes
        }
      };
    }
    return {
      user: userContext,
      global: this._getGlobalContext(),
      stack: {
        evaluatedFeatures: new Set()
      }
    };
  }
  _getGlobalContext() {
    return {
      features: this._features,
      experiments: this._experiments,
      log: this.log,
      enabled: this._options.enabled,
      qaMode: this._options.qaMode,
      savedGroups: this._options.savedGroups,
      forcedFeatureValues: this._options.forcedFeatureValues,
      forcedVariations: this._options.forcedVariations,
      trackingCallback: this._options.trackingCallback,
      onFeatureUsage: this._options.onFeatureUsage
    };
  }
  isOn(key, userContext) {
    return this.evalFeature(key, userContext).on;
  }
  isOff(key, userContext) {
    return this.evalFeature(key, userContext).off;
  }
  getFeatureValue(key, defaultValue, userContext) {
    const value = this.evalFeature(key, userContext).value;
    return value === null ? defaultValue : value;
  }
  evalFeature(id, userContext) {
    return _evalFeature(id, this._getEvalContext(userContext));
  }
  log(msg, ctx) {
    if (!this.debug) return;
    if (this._options.log) this._options.log(msg, ctx);else console.log(msg, ctx);
  }
  setTrackingCallback(callback) {
    this._options.trackingCallback = callback;
  }
  setFeatureUsageCallback(callback) {
    this._options.onFeatureUsage = callback;
  }
  async applyStickyBuckets(partialContext, stickyBucketService) {
    const ctx = this._getEvalContext(partialContext);
    const stickyBucketAssignmentDocs = await getAllStickyBucketAssignmentDocs(ctx, stickyBucketService);
    return {
      ...partialContext,
      stickyBucketAssignmentDocs,
      saveStickyBucketAssignmentDoc: doc => stickyBucketService.saveAssignments(doc)
    };
  }
  createScopedInstance(userContext, userPlugins) {
    return new UserScopedGrowthBook(this, userContext, [...(this._options.plugins || []), ...(userPlugins || [])]);
  }
}
export class UserScopedGrowthBook {
  constructor(gb, userContext, plugins) {
    this._gb = gb;
    this._userContext = userContext;
    this.logs = [];
    this._userContext.trackedExperiments = this._userContext.trackedExperiments || new Set();
    this._userContext.trackedFeatureUsage = this._userContext.trackedFeatureUsage || {};
    this._userContext.devLogs = this.logs;
    if (plugins) {
      for (const plugin of plugins) {
        plugin(this);
      }
    }
  }
  runInlineExperiment(experiment) {
    return this._gb.runInlineExperiment(experiment, this._userContext);
  }
  isOn(key) {
    return this._gb.isOn(key, this._userContext);
  }
  isOff(key) {
    return this._gb.isOff(key, this._userContext);
  }
  getFeatureValue(key, defaultValue) {
    return this._gb.getFeatureValue(key, defaultValue, this._userContext);
  }
  evalFeature(id) {
    return this._gb.evalFeature(id, this._userContext);
  }
  logEvent(eventName, properties) {
    if (this._userContext.enableDevMode) {
      this.logs.push({
        eventName,
        properties,
        timestamp: Date.now().toString(),
        logType: "event"
      });
    }
    this._gb.logEvent(eventName, properties || {}, this._userContext);
  }
  setTrackingCallback(cb) {
    this._userContext.trackingCallback = cb;
  }
  getApiInfo() {
    return this._gb.getApiInfo();
  }
  getClientKey() {
    return this._gb.getClientKey();
  }
  setURL(url) {
    this._userContext.url = url;
  }
  updateAttributes(attributes) {
    this._userContext.attributes = {
      ...this._userContext.attributes,
      ...attributes
    };
  }
  setAttributeOverrides(overrides) {
    this._userContext.attributeOverrides = overrides;
  }
  async setForcedVariations(vars) {
    this._userContext.forcedVariations = vars || {};
  }
  // eslint-disable-next-line
  setForcedFeatures(map) {
    this._userContext.forcedFeatureValues = map;
  }
  getUserContext() {
    return this._userContext;
  }
  getVersion() {
    return SDK_VERSION;
  }
  getDecryptedPayload() {
    return this._gb.getDecryptedPayload();
  }
  inDevMode() {
    return !!this._userContext.enableDevMode;
  }
}
//# sourceMappingURL=GrowthBookClient.mjs.map