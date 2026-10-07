import mutate, { DeclarativeMutation } from "dom-mutator";
import type {
  ApiHost,
  Attributes,
  AutoExperiment,
  AutoExperimentVariation,
  ClientKey,
  Options,
  Experiment,
  FeatureApiResponse,
  FeatureDefinition,
  FeatureResult,
  FeatureUsageCallback,
  LoadFeaturesOptions,
  RefreshFeaturesOptions,
  RenderFunction,
  Result,
  SubscriptionFunction,
  TrackingCallback,
  TrackingData,
  WidenPrimitives,
  EvalContext,
  InitOptions,
  InitResponse,
  InitSyncOptions,
  PrefetchOptions,
  GlobalContext,
  UserContext,
  StickyAssignmentsDocument,
  EventLogger,
  LogUnion,
  DestroyOptions,
} from "./types/growthbook";
import {
  decrypt,
  getAutoExperimentChangeType,
  isURLTargeted,
  loadSDKVersion,
  mergeQueryStrings,
  promiseTimeout,
} from "./util";
import {
  clearAutoRefresh,
  configureCache,
  refreshFeatures,
  startStreaming,
  unsubscribe,
} from "./feature-repository";
import {
  runExperiment,
  evalFeature as _evalFeature,
  getExperimentResult,
  getAllStickyBucketAssignmentDocs,
  decryptPayload,
  getApiHosts,
  getExperimentDedupeKey,
  getStickyBucketAttributes,
} from "./core";
import { StickyBucketServiceSync } from "./sticky-bucket-service";

const isBrowser =
  typeof window !== "undefined" && typeof document !== "undefined";

const SDK_VERSION = loadSDKVersion();

export class GrowthBook<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AppFeatures extends Record<string, any> = Record<string, any>,
> {
  // context is technically private, but some tools depend on it so we can't mangle the name
  private context: Options;
  public debug: boolean;
  public ready: boolean;
  public version: string;
  public logs: Array<LogUnion>;

  // Properties and methods that start with "_" are mangled by Terser (saves ~150 bytes)
  private _options: Options;
  private _renderer: null | RenderFunction;
  private _redirectedUrl: string;
  private _trackedExperiments: Set<string>;
  private _completedChangeIds: Set<string>;
  private _trackedFeatures: Record<string, string>;
  private _subscriptions: Set<SubscriptionFunction>;
  private _assigned: Map<
    string,
    {
      // eslint-disable-next-line
      experiment: Experiment<any>;
      // eslint-disable-next-line
      result: Result<any>;
    }
  >;
  private _activeAutoExperiments: Map<
    AutoExperiment,
    { valueHash: string; undo: () => void }
  >;
  private _triggeredExpKeys: Set<string>;
  private _initialized: boolean;
  private _deferredTrackingCalls: Map<string, TrackingData>;
  private _saveStickyBucketAssignmentDoc:
    | undefined
    | ((doc: StickyAssignmentsDocument) => Promise<unknown>);

  private _payload: FeatureApiResponse | undefined;
  private _decryptedPayload: FeatureApiResponse | undefined;
  private _destroyCallbacks: (() => void)[];

  private _autoExperimentsAllowed: boolean;
  private _destroyed?: boolean;

  constructor(options?: Options) {
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
        isGbHost = !!new URL(options.apiHost || "").hostname.match(
          /growthbook\.io$/i,
        );
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
      this._saveStickyBucketAssignmentDoc = (doc) => {
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
    if (
      this._options.stickyBucketService &&
      this._options.stickyBucketAssignmentDocs
    ) {
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

  public async setPayload(payload: FeatureApiResponse): Promise<void> {
    this._payload = payload;
    const data = await decryptPayload(payload, this._options.decryptionKey);
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

  public initSync(options: InitSyncOptions): GrowthBook {
    this._initialized = true;

    const payload = options.payload;

    if (payload.encryptedExperiments || payload.encryptedFeatures) {
      throw new Error("initSync does not support encrypted payloads");
    }

    if (
      this._options.stickyBucketService &&
      !this._options.stickyBucketAssignmentDocs
    ) {
      this._options.stickyBucketAssignmentDocs =
        this.generateStickyBucketAssignmentDocsSync(
          this._options.stickyBucketService as StickyBucketServiceSync,
          payload,
        );
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

    startStreaming(this, options);

    return this;
  }

  public async init(options?: InitOptions): Promise<InitResponse> {
    this._initialized = true;
    options = options || {};

    if (options.cacheSettings) {
      configureCache(options.cacheSettings);
    }

    if (options.payload) {
      await this.setPayload(options.payload);
      startStreaming(this, options);
      return {
        success: true,
        source: "init",
      };
    } else {
      const { data, ...res } = await this._refresh({
        ...options,
        allowStale: true,
      });
      startStreaming(this, options);
      await this.setPayload(data || {});
      return res;
    }
  }

  /** @deprecated Use {@link init} */
  public async loadFeatures(options?: LoadFeaturesOptions): Promise<void> {
    options = options || {};
    await this.init({
      skipCache: options.skipCache,
      timeout: options.timeout,
      streaming:
        (this._options.backgroundSync ?? true) &&
        (options.autoRefresh || this._options.subscribeToChanges),
    });
  }

  public async refreshFeatures(
    options?: RefreshFeaturesOptions,
  ): Promise<void> {
    const res = await this._refresh({
      ...(options || {}),
      allowStale: false,
    });
    if (res.data) {
      await this.setPayload(res.data);
    }
  }

  public getApiInfo(): [ApiHost, ClientKey] {
    return [this.getApiHosts().apiHost, this.getClientKey()];
  }
  public getApiHosts() {
    return getApiHosts(this._options);
  }
  public getClientKey(): string {
    return this._options.clientKey || "";
  }
  public getPayload(): FeatureApiResponse {
    return (
      this._payload || {
        features: this.getFeatures(),
        experiments: this.getExperiments(),
      }
    );
  }
  public getDecryptedPayload(): FeatureApiResponse {
    return this._decryptedPayload || this.getPayload();
  }

  public isRemoteEval(): boolean {
    return this._options.remoteEval || false;
  }

  public getCacheKeyAttributes(): (keyof Attributes)[] | undefined {
    return this._options.cacheKeyAttributes;
  }

  private async _refresh({
    timeout,
    skipCache,
    allowStale,
    streaming,
  }: RefreshFeaturesOptions & {
    allowStale?: boolean;
    streaming?: boolean;
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
      backgroundSync: streaming ?? this._options.backgroundSync ?? true,
    });
  }

  private _render() {
    if (this._renderer) {
      try {
        this._renderer();
      } catch (e) {
        console.error("Failed to render", e);
      }
    }
  }

  /** @deprecated Use {@link setPayload} */
  public setFeatures(features: Record<string, FeatureDefinition>) {
    this._options.features = features;
    this.ready = true;
    this._render();
  }

  /** @deprecated Use {@link setPayload} */
  public async setEncryptedFeatures(
    encryptedString: string,
    decryptionKey?: string,
    subtle?: SubtleCrypto,
  ): Promise<void> {
    const featuresJSON = await decrypt(
      encryptedString,
      decryptionKey || this._options.decryptionKey,
      subtle,
    );
    this.setFeatures(
      JSON.parse(featuresJSON) as Record<string, FeatureDefinition>,
    );
  }

  /** @deprecated Use {@link setPayload} */
  public setExperiments(experiments: AutoExperiment[]): void {
    this._options.experiments = experiments;
    this.ready = true;
    this._updateAllAutoExperiments();
  }

  /** @deprecated Use {@link setPayload} */
  public async setEncryptedExperiments(
    encryptedString: string,
    decryptionKey?: string,
    subtle?: SubtleCrypto,
  ): Promise<void> {
    const experimentsJSON = await decrypt(
      encryptedString,
      decryptionKey || this._options.decryptionKey,
      subtle,
    );
    this.setExperiments(JSON.parse(experimentsJSON) as AutoExperiment[]);
  }

  public async setAttributes(attributes: Attributes) {
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

  public async updateAttributes(attributes: Attributes) {
    return this.setAttributes({ ...this._options.attributes, ...attributes });
  }

  public async setAttributeOverrides(overrides: Attributes) {
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

  public async setForcedVariations(vars: Record<string, number>) {
    this._options.forcedVariations = vars || {};
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render();
    this._updateAllAutoExperiments();
  }

  // eslint-disable-next-line
  public setForcedFeatures(map: Map<string, any>) {
    this._options.forcedFeatureValues = map;
    this._render();
  }

  public async setURL(url: string) {
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

  public getAttributes() {
    return { ...this._options.attributes, ...this._options.attributeOverrides };
  }

  public getForcedVariations() {
    return this._options.forcedVariations || {};
  }

  public getForcedFeatures() {
    // eslint-disable-next-line
    return this._options.forcedFeatureValues || new Map<string, any>();
  }

  public getStickyBucketAssignmentDocs() {
    return this._options.stickyBucketAssignmentDocs || {};
  }

  public getUrl() {
    return this._options.url || "";
  }

  public getFeatures() {
    return this._options.features || {};
  }

  public getExperiments() {
    return this._options.experiments || [];
  }

  public getCompletedChangeIds(): string[] {
    return Array.from(this._completedChangeIds);
  }

  public subscribe(cb: SubscriptionFunction): () => void {
    this._subscriptions.add(cb);
    return () => {
      this._subscriptions.delete(cb);
    };
  }

  private async _refreshForRemoteEval() {
    if (!this._options.remoteEval) return;
    if (!this._initialized) return;
    const res = await this._refresh({
      allowStale: false,
    });
    if (res.data) {
      await this.setPayload(res.data);
    }
  }

  public getAllResults() {
    return new Map(this._assigned);
  }

  public onDestroy(cb: () => void) {
    this._destroyCallbacks.push(cb);
  }

  public isDestroyed() {
    return !!this._destroyed;
  }

  public destroy(options?: DestroyOptions) {
    options = options || {};
    this._destroyed = true;

    // Custom callbacks
    // Do this first in case it needs access to the below data that is cleared
    this._destroyCallbacks.forEach((cb) => {
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
    unsubscribe(this);
    if (options.destroyAllStreams) {
      clearAutoRefresh();
    }
    this.logs = [];

    if (isBrowser && window._growthbook === this) {
      delete window._growthbook;
    }

    // Undo any active auto experiments
    this._activeAutoExperiments.forEach((exp) => {
      exp.undo();
    });
    this._activeAutoExperiments.clear();
    this._triggeredExpKeys.clear();
  }

  public setRenderer(renderer: null | RenderFunction) {
    this._renderer = renderer;
  }

  public forceVariation(key: string, variation: number) {
    this._options.forcedVariations = this._options.forcedVariations || {};
    this._options.forcedVariations[key] = variation;
    if (this._options.remoteEval) {
      this._refreshForRemoteEval();
      return;
    }
    this._updateAllAutoExperiments();
    this._render();
  }

  public run<T>(experiment: Experiment<T>): Result<T> {
    const { result } = runExperiment(experiment, null, this._getEvalContext());
    this._onExperimentEval(experiment, result);
    return result;
  }

  public triggerExperiment(key: string) {
    this._triggeredExpKeys.add(key);
    if (!this._options.experiments) return null;
    const experiments = this._options.experiments.filter(
      (exp) => exp.key === key,
    );
    return experiments
      .map((exp) => {
        return this._runAutoExperiment(exp);
      })
      .filter((res) => res !== null);
  }

  public triggerAutoExperiments() {
    this._autoExperimentsAllowed = true;
    this._updateAllAutoExperiments(true);
  }

  private _getEvalContext(): EvalContext {
    return {
      user: this._getUserContext(),
      global: this._getGlobalContext(),
      stack: {
        evaluatedFeatures: new Set(),
      },
    };
  }

  private _getUserContext(): UserContext {
    return {
      attributes: this._options.user
        ? {
            ...this._options.user,
            ...this._options.attributes,
          }
        : this._options.attributes,
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
      trackedFeatureUsage: this._trackedFeatures,
    };
  }
  private _getGlobalContext(): GlobalContext {
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
      eventLogger: this._options.eventLogger,
    };
  }

  private _runAutoExperiment(experiment: AutoExperiment, forceRerun?: boolean) {
    const existing = this._activeAutoExperiments.get(experiment);

    // If this is a manual experiment and it's not already running, skip
    if (
      experiment.manual &&
      !this._triggeredExpKeys.has(experiment.key) &&
      !existing
    )
      return null;

    // Check if this particular experiment is blocked by options settings
    // For example, if all visualEditor experiments are disabled
    const isBlocked = this._isAutoExperimentBlockedByContext(experiment);
    if (isBlocked) {
      process.env.NODE_ENV !== "production" &&
        this.log("Auto experiment blocked", { id: experiment.key });
    }

    let result: Result<AutoExperimentVariation> | undefined;
    let trackingCall: Promise<void> | undefined;
    // Run the experiment (if blocked exclude)
    if (isBlocked) {
      result = getExperimentResult(
        this._getEvalContext(),
        experiment,
        -1,
        false,
        "",
      );
    } else {
      ({ result, trackingCall } = runExperiment(
        experiment,
        null,
        this._getEvalContext(),
      ));
      this._onExperimentEval(experiment, result);
    }

    // A hash to quickly tell if the assigned value changed
    const valueHash = JSON.stringify(result.value);

    // If the changes are already active, no need to re-apply them
    if (
      !forceRerun &&
      result.inExperiment &&
      existing &&
      existing.valueHash === valueHash
    ) {
      return result;
    }

    // Undo any existing changes
    if (existing) this._undoActiveAutoExperiment(experiment);

    // Apply new changes
    if (result.inExperiment) {
      const changeType = getAutoExperimentChangeType(experiment);

      if (
        changeType === "redirect" &&
        result.value.urlRedirect &&
        experiment.urlPatterns
      ) {
        const url = experiment.persistQueryString
          ? mergeQueryStrings(this._getContextUrl(), result.value.urlRedirect)
          : result.value.urlRedirect;

        if (isURLTargeted(url, experiment.urlPatterns)) {
          this.log(
            "Skipping redirect because original URL matches redirect URL",
            {
              id: experiment.key,
            },
          );
          return result;
        }
        this._redirectedUrl = url;
        const { navigate, delay } = this._getNavigateFunction();
        if (navigate) {
          if (isBrowser) {
            // Wait for the possibly-async tracking callback, bound by min and max delays
            Promise.all([
              ...(trackingCall
                ? [
                    promiseTimeout(
                      trackingCall,
                      this._options.maxNavigateDelay ?? 1000,
                    ),
                  ]
                : []),
              new Promise((resolve) =>
                window.setTimeout(
                  resolve,
                  this._options.navigateDelay ?? delay,
                ),
              ),
            ]).then(() => {
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
        const undo = this._options.applyDomChangesCallback
          ? this._options.applyDomChangesCallback(result.value)
          : this._applyDOMChanges(result.value);
        if (undo) {
          this._activeAutoExperiments.set(experiment, {
            undo,
            valueHash,
          });
        }
      }
    }

    return result;
  }

  private _undoActiveAutoExperiment(exp: AutoExperiment) {
    const data = this._activeAutoExperiments.get(exp);
    if (data) {
      data.undo();
      this._activeAutoExperiments.delete(exp);
    }
  }

  private _updateAllAutoExperiments(forceRerun?: boolean) {
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
      if (
        result &&
        result.inExperiment &&
        getAutoExperimentChangeType(exp) === "redirect"
      ) {
        break;
      }
    }
  }

  private _onExperimentEval<T>(experiment: Experiment<T>, result: Result<T>) {
    const prev = this._assigned.get(experiment.key);
    this._assigned.set(experiment.key, { experiment, result });
    if (this._subscriptions.size > 0) {
      this._fireSubscriptions<T>(experiment, result, prev);
    }
  }

  private _fireSubscriptions<T>(
    experiment: Experiment<T>,
    result: Result<T>,
    // eslint-disable-next-line
    prev?: { experiment: Experiment<any>; result: Result<any> },
  ) {
    // If assigned variation has changed, fire subscriptions
    // TODO: what if the experiment definition has changed?
    if (
      !prev ||
      prev.result.inExperiment !== result.inExperiment ||
      prev.result.variationId !== result.variationId
    ) {
      this._subscriptions.forEach((cb) => {
        try {
          cb(experiment, result);
        } catch (e) {
          console.error(e);
        }
      });
    }
  }

  private _recordChangedId(id: string) {
    this._completedChangeIds.add(id);
  }

  public isOn<K extends string & keyof AppFeatures = string>(key: K): boolean {
    return this.evalFeature(key).on;
  }

  public isOff<K extends string & keyof AppFeatures = string>(key: K): boolean {
    return this.evalFeature(key).off;
  }

  public getFeatureValue<
    V extends AppFeatures[K],
    K extends string & keyof AppFeatures = string,
  >(key: K, defaultValue: V): WidenPrimitives<V> {
    const value = this.evalFeature<WidenPrimitives<V>, K>(key).value;
    return value === null ? (defaultValue as WidenPrimitives<V>) : value;
  }

  /**
   * @deprecated Use {@link evalFeature}
   * @param id
   */

  public feature<
    V extends AppFeatures[K],
    K extends string & keyof AppFeatures = string,
  >(id: K): FeatureResult<V | null> {
    return this.evalFeature(id);
  }

  public evalFeature<
    V extends AppFeatures[K],
    K extends string & keyof AppFeatures = string,
  >(id: K): FeatureResult<V | null> {
    return _evalFeature(id, this._getEvalContext());
  }

  log(msg: string, ctx: Record<string, unknown>) {
    if (!this.debug) return;
    if (this._options.log) this._options.log(msg, ctx);
    else console.log(msg, ctx);
  }

  public getDeferredTrackingCalls(): TrackingData[] {
    return Array.from(this._deferredTrackingCalls.values());
  }

  public setDeferredTrackingCalls(calls: TrackingData[]) {
    this._deferredTrackingCalls = new Map(
      calls
        .filter((c) => c && c.experiment && c.result)
        .map((c) => {
          return [getExperimentDedupeKey(c.experiment, c.result), c];
        }),
    );
  }

  public async fireDeferredTrackingCalls() {
    if (!this._options.trackingCallback) return;

    const promises: ReturnType<TrackingCallback>[] = [];
    this._deferredTrackingCalls.forEach((call: TrackingData) => {
      if (!call || !call.experiment || !call.result) {
        console.error("Invalid deferred tracking call", { call: call });
      } else {
        promises.push(
          (this._options.trackingCallback as TrackingCallback)(
            call.experiment,
            call.result,
          ),
        );
      }
    });
    this._deferredTrackingCalls.clear();
    await Promise.all(promises);
  }

  public setTrackingCallback(callback: TrackingCallback) {
    this._options.trackingCallback = callback;
    this.fireDeferredTrackingCalls();
  }

  public setFeatureUsageCallback(callback: FeatureUsageCallback) {
    this._options.onFeatureUsage = callback;
  }

  public setEventLogger(logger: EventLogger) {
    this._options.eventLogger = logger;
  }

  public async logEvent(
    eventName: string,
    properties?: Record<string, unknown>,
  ) {
    if (this._destroyed) {
      console.error("Cannot log event to destroyed GrowthBook instance");
      return;
    }
    if (this._options.enableDevMode) {
      this.logs.push({
        eventName,
        properties,
        timestamp: Date.now().toString(),
        logType: "event",
      });
    }
    if (this._options.eventLogger) {
      try {
        await this._options.eventLogger(
          eventName,
          properties || {},
          this._getUserContext(),
        );
      } catch (e) {
        console.error(e);
      }
    } else {
      console.error("No event logger configured");
    }
  }

  private _saveDeferredTrack(data: TrackingData) {
    this._deferredTrackingCalls.set(
      getExperimentDedupeKey(data.experiment, data.result),
      data,
    );
  }

  private _getContextUrl() {
    return this._options.url || (isBrowser ? window.location.href : "");
  }

  private _isAutoExperimentBlockedByContext(
    experiment: AutoExperiment,
  ): boolean {
    const changeType = getAutoExperimentChangeType(experiment);
    if (changeType === "visual") {
      if (this._options.disableVisualExperiments) return true;

      if (this._options.disableJsInjection) {
        if (experiment.variations.some((v) => v.js)) {
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
          error: e,
        });
        return true;
      }
    } else {
      // Block any unknown changeTypes
      return true;
    }

    if (
      experiment.changeId &&
      (this._options.blockedChangeIds || []).includes(experiment.changeId)
    ) {
      return true;
    }

    return false;
  }

  public getRedirectUrl(): string {
    return this._redirectedUrl;
  }

  private _getNavigateFunction(): {
    navigate: null | ((url: string) => void | Promise<void>);
    delay: number;
  } {
    if (this._options.navigate) {
      return {
        navigate: this._options.navigate,
        delay: 0,
      };
    } else if (isBrowser) {
      return {
        navigate: (url: string) => {
          window.location.replace(url);
        },
        delay: 100,
      };
    }
    return {
      navigate: null,
      delay: 0,
    };
  }

  private _applyDOMChanges(changes: AutoExperimentVariation) {
    if (!isBrowser) return;
    const undo: (() => void)[] = [];
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
      changes.domMutations.forEach((mutation) => {
        undo.push(mutate.declarative(mutation as DeclarativeMutation).revert);
      });
    }
    return () => {
      undo.forEach((fn) => fn());
    };
  }

  public async refreshStickyBuckets(data?: FeatureApiResponse) {
    if (this._options.stickyBucketService) {
      const ctx = this._getEvalContext();
      const docs = await getAllStickyBucketAssignmentDocs(
        ctx,
        this._options.stickyBucketService,
        data,
      );
      this._options.stickyBucketAssignmentDocs = docs;
    }
  }

  public generateStickyBucketAssignmentDocsSync(
    stickyBucketService: StickyBucketServiceSync,
    payload: FeatureApiResponse,
  ) {
    if (!("getAllAssignmentsSync" in stickyBucketService)) {
      console.error(
        "generating StickyBucketAssignmentDocs docs requires StickyBucketServiceSync",
      );
      return;
    }
    const ctx = this._getEvalContext();
    const attributes = getStickyBucketAttributes(ctx, payload);
    return stickyBucketService.getAllAssignmentsSync(attributes);
  }

  public inDevMode(): boolean {
    return !!this._options.enableDevMode;
  }
}

export async function prefetchPayload(options: PrefetchOptions) {
  // Create a temporary instance, just to fetch the payload
  const instance = new GrowthBook(options);

  await refreshFeatures({
    instance,
    skipCache: options.skipCache,
    allowStale: false,
    backgroundSync: options.streaming,
  });

  instance.destroy();
}
