import type {
  ApiHost,
  Attributes,
  AutoExperiment,
  ClientKey,
  ClientOptions,
  DestroyOptions,
  EvalContext,
  EventLogger,
  EventProperties,
  Experiment,
  FeatureApiResponse,
  FeatureDefinitions,
  FeatureResult,
  FeatureUsageCallback,
  GlobalContext,
  InitOptions,
  InitResponse,
  InitSyncOptions,
  LogUnion,
  Plugin,
  RefreshFeaturesOptions,
  Result,
  TrackingCallback,
  TrackingCallbackWithUser,
  UserContext,
  WidenPrimitives,
} from "./types/growthbook";
import { loadSDKVersion } from "./util";
import {
  clearAutoRefresh,
  configureCache,
  refreshFeatures,
  startStreaming,
  unsubscribe,
} from "./feature-repository";
import {
  decryptPayload,
  evalFeature as _evalFeature,
  getAllStickyBucketAssignmentDocs,
  getApiHosts,
  runExperiment,
} from "./core";
import { StickyBucketService } from "./sticky-bucket-service";

const SDK_VERSION = loadSDKVersion();

export class GrowthBookClient<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AppFeatures extends Record<string, any> = Record<string, any>,
> {
  public debug: boolean;
  public ready: boolean;
  public version: string;

  // Properties and methods that start with "_" are mangled by Terser (saves ~150 bytes)
  private _options: ClientOptions;

  private _features: FeatureDefinitions;
  private _experiments: AutoExperiment[];
  private _payload: FeatureApiResponse | undefined;
  private _decryptedPayload: FeatureApiResponse | undefined;
  private _destroyed?: boolean;

  constructor(options?: ClientOptions) {
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

  public async setPayload(payload: FeatureApiResponse): Promise<void> {
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

  public initSync(options: InitSyncOptions): GrowthBookClient<AppFeatures> {
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

  public async init(options?: InitOptions): Promise<InitResponse> {
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
        experiments: this._experiments || [],
      }
    );
  }
  public getDecryptedPayload(): FeatureApiResponse {
    return this._decryptedPayload || this.getPayload();
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
      backgroundSync: streaming ?? true,
    });
  }

  public getFeatures() {
    return this._features || {};
  }

  public getGlobalAttributes(): Attributes {
    return this._options.globalAttributes || {};
  }
  public setGlobalAttributes(attributes: Attributes) {
    this._options.globalAttributes = attributes;
  }

  public destroy(options?: DestroyOptions) {
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

  public isDestroyed() {
    return !!this._destroyed;
  }

  public setEventLogger(logger: EventLogger) {
    this._options.eventLogger = logger;
  }

  public logEvent(
    eventName: string,
    properties: EventProperties,
    userContext: UserContext,
  ) {
    if (this._options.eventLogger) {
      const ctx = this._getEvalContext(userContext);
      this._options.eventLogger(eventName, properties, ctx.user);
    }
  }

  public runInlineExperiment<T>(
    experiment: Experiment<T>,
    userContext: UserContext,
  ): Result<T> {
    const { result } = runExperiment(
      experiment,
      null,
      this._getEvalContext(userContext),
    );
    return result;
  }

  private _getEvalContext(userContext: UserContext): EvalContext {
    if (this._options.globalAttributes) {
      userContext = {
        ...userContext,
        attributes: {
          ...this._options.globalAttributes,
          ...userContext.attributes,
        },
      };
    }

    return {
      user: userContext,
      global: this._getGlobalContext(),
      stack: {
        evaluatedFeatures: new Set(),
      },
    };
  }

  private _getGlobalContext(): GlobalContext {
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
      onFeatureUsage: this._options.onFeatureUsage,
    };
  }

  public isOn<K extends string & keyof AppFeatures = string>(
    key: K,
    userContext: UserContext,
  ): boolean {
    return this.evalFeature(key, userContext).on;
  }

  public isOff<K extends string & keyof AppFeatures = string>(
    key: K,
    userContext: UserContext,
  ): boolean {
    return this.evalFeature(key, userContext).off;
  }

  public getFeatureValue<
    V extends AppFeatures[K],
    K extends string & keyof AppFeatures = string,
  >(key: K, defaultValue: V, userContext: UserContext): WidenPrimitives<V> {
    const value = this.evalFeature<WidenPrimitives<V>, K>(
      key,
      userContext,
    ).value;
    return value === null ? (defaultValue as WidenPrimitives<V>) : value;
  }

  public evalFeature<
    V extends AppFeatures[K],
    K extends string & keyof AppFeatures = string,
  >(id: K, userContext: UserContext): FeatureResult<V | null> {
    return _evalFeature(id, this._getEvalContext(userContext));
  }

  log(msg: string, ctx: Record<string, unknown>) {
    if (!this.debug) return;
    if (this._options.log) this._options.log(msg, ctx);
    else console.log(msg, ctx);
  }

  public setTrackingCallback(callback: TrackingCallbackWithUser) {
    this._options.trackingCallback = callback;
  }

  public setFeatureUsageCallback(callback: FeatureUsageCallback) {
    this._options.onFeatureUsage = callback;
  }

  public async applyStickyBuckets(
    partialContext: Omit<
      UserContext,
      "stickyBucketService" | "stickyBucketAssignmentDocs"
    >,
    stickyBucketService: StickyBucketService,
  ): Promise<UserContext> {
    const ctx = this._getEvalContext(partialContext);

    const stickyBucketAssignmentDocs = await getAllStickyBucketAssignmentDocs(
      ctx,
      stickyBucketService,
    );

    return {
      ...partialContext,
      stickyBucketAssignmentDocs,
      saveStickyBucketAssignmentDoc: (doc) =>
        stickyBucketService.saveAssignments(doc),
    };
  }

  public createScopedInstance(
    userContext: UserContext,
    userPlugins?: Plugin[],
  ) {
    return new UserScopedGrowthBook(this, userContext, [
      ...(this._options.plugins || []),
      ...(userPlugins || []),
    ]);
  }
}

export class UserScopedGrowthBook<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AppFeatures extends Record<string, any> = Record<string, any>,
> {
  private _gb: GrowthBookClient;
  private _userContext: UserContext;
  public logs: Array<LogUnion>;

  constructor(
    gb: GrowthBookClient<AppFeatures>,
    userContext: UserContext,
    plugins?: Plugin[],
  ) {
    this._gb = gb;
    this._userContext = userContext;
    this.logs = [];

    this._userContext.trackedExperiments =
      this._userContext.trackedExperiments || new Set();
    this._userContext.trackedFeatureUsage =
      this._userContext.trackedFeatureUsage || {};
    this._userContext.devLogs = this.logs;

    if (plugins) {
      for (const plugin of plugins) {
        plugin(this);
      }
    }
  }

  public runInlineExperiment<T>(experiment: Experiment<T>): Result<T> {
    return this._gb.runInlineExperiment(experiment, this._userContext);
  }

  public isOn<K extends string & keyof AppFeatures = string>(key: K): boolean {
    return this._gb.isOn(key, this._userContext);
  }

  public isOff<K extends string & keyof AppFeatures = string>(key: K): boolean {
    return this._gb.isOff(key, this._userContext);
  }

  public getFeatureValue<
    V extends AppFeatures[K],
    K extends string & keyof AppFeatures = string,
  >(key: K, defaultValue: V): WidenPrimitives<V> {
    return this._gb.getFeatureValue(key, defaultValue, this._userContext);
  }

  public evalFeature<
    V extends AppFeatures[K],
    K extends string & keyof AppFeatures = string,
  >(id: K): FeatureResult<V | null> {
    return this._gb.evalFeature(id, this._userContext);
  }

  public logEvent(eventName: string, properties?: EventProperties) {
    if (this._userContext.enableDevMode) {
      this.logs.push({
        eventName,
        properties,
        timestamp: Date.now().toString(),
        logType: "event",
      });
    }
    this._gb.logEvent(eventName, properties || {}, this._userContext);
  }

  public setTrackingCallback(cb: TrackingCallback) {
    this._userContext.trackingCallback = cb;
  }
  public getApiInfo(): [ApiHost, ClientKey] {
    return this._gb.getApiInfo();
  }
  public getClientKey() {
    return this._gb.getClientKey();
  }
  public setURL(url: string) {
    this._userContext.url = url;
  }
  public updateAttributes(attributes: Attributes) {
    this._userContext.attributes = {
      ...this._userContext.attributes,
      ...attributes,
    };
  }
  public setAttributeOverrides(overrides: Attributes) {
    this._userContext.attributeOverrides = overrides;
  }
  public async setForcedVariations(vars: Record<string, number>) {
    this._userContext.forcedVariations = vars || {};
  }
  // eslint-disable-next-line
  public setForcedFeatures(map: Map<string, any>) {
    this._userContext.forcedFeatureValues = map;
  }
  public getUserContext() {
    return this._userContext;
  }
  public getVersion() {
    return SDK_VERSION;
  }
  public getDecryptedPayload() {
    return this._gb.getDecryptedPayload();
  }
  public inDevMode(): boolean {
    return !!this._userContext.enableDevMode;
  }
}
