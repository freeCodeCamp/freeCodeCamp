import type { ApiHost, Attributes, AutoExperiment, AutoExperimentVariation, ClientKey, Options, Experiment, FeatureApiResponse, FeatureDefinition, FeatureResult, FeatureUsageCallback, LoadFeaturesOptions, RefreshFeaturesOptions, RenderFunction, Result, SubscriptionFunction, TrackingCallback, TrackingData, WidenPrimitives, InitOptions, InitResponse, InitSyncOptions, PrefetchOptions, StickyAssignmentsDocument, EventLogger, LogUnion, DestroyOptions } from "./types/growthbook";
import { StickyBucketServiceSync } from "./sticky-bucket-service";
export declare class GrowthBook<AppFeatures extends Record<string, any> = Record<string, any>> {
    private context;
    debug: boolean;
    ready: boolean;
    version: string;
    logs: Array<LogUnion>;
    private _options;
    private _renderer;
    private _redirectedUrl;
    private _trackedExperiments;
    private _completedChangeIds;
    private _trackedFeatures;
    private _subscriptions;
    private _assigned;
    private _activeAutoExperiments;
    private _triggeredExpKeys;
    private _initialized;
    private _deferredTrackingCalls;
    private _saveStickyBucketAssignmentDoc;
    private _payload;
    private _decryptedPayload;
    private _destroyCallbacks;
    private _autoExperimentsAllowed;
    private _destroyed?;
    constructor(options?: Options);
    setPayload(payload: FeatureApiResponse): Promise<void>;
    initSync(options: InitSyncOptions): GrowthBook;
    init(options?: InitOptions): Promise<InitResponse>;
    /** @deprecated Use {@link init} */
    loadFeatures(options?: LoadFeaturesOptions): Promise<void>;
    refreshFeatures(options?: RefreshFeaturesOptions): Promise<void>;
    getApiInfo(): [ApiHost, ClientKey];
    getApiHosts(): {
        apiHost: string;
        streamingHost: string;
        apiRequestHeaders?: Record<string, string>;
        streamingHostRequestHeaders?: Record<string, string>;
    };
    getClientKey(): string;
    getPayload(): FeatureApiResponse;
    getDecryptedPayload(): FeatureApiResponse;
    isRemoteEval(): boolean;
    getCacheKeyAttributes(): (keyof Attributes)[] | undefined;
    private _refresh;
    private _render;
    /** @deprecated Use {@link setPayload} */
    setFeatures(features: Record<string, FeatureDefinition>): void;
    /** @deprecated Use {@link setPayload} */
    setEncryptedFeatures(encryptedString: string, decryptionKey?: string, subtle?: SubtleCrypto): Promise<void>;
    /** @deprecated Use {@link setPayload} */
    setExperiments(experiments: AutoExperiment[]): void;
    /** @deprecated Use {@link setPayload} */
    setEncryptedExperiments(encryptedString: string, decryptionKey?: string, subtle?: SubtleCrypto): Promise<void>;
    setAttributes(attributes: Attributes): Promise<void>;
    updateAttributes(attributes: Attributes): Promise<void>;
    setAttributeOverrides(overrides: Attributes): Promise<void>;
    setForcedVariations(vars: Record<string, number>): Promise<void>;
    setForcedFeatures(map: Map<string, any>): void;
    setURL(url: string): Promise<void>;
    getAttributes(): {
        [x: string]: any;
    };
    getForcedVariations(): Record<string, number>;
    getForcedFeatures(): Map<string, any>;
    getStickyBucketAssignmentDocs(): Record<string, StickyAssignmentsDocument>;
    getUrl(): string;
    getFeatures(): Record<string, FeatureDefinition<any>>;
    getExperiments(): AutoExperiment<AutoExperimentVariation>[];
    getCompletedChangeIds(): string[];
    subscribe(cb: SubscriptionFunction): () => void;
    private _refreshForRemoteEval;
    getAllResults(): Map<string, {
        experiment: Experiment<any>;
        result: Result<any>;
    }>;
    onDestroy(cb: () => void): void;
    isDestroyed(): boolean;
    destroy(options?: DestroyOptions): void;
    setRenderer(renderer: null | RenderFunction): void;
    forceVariation(key: string, variation: number): void;
    run<T>(experiment: Experiment<T>): Result<T>;
    triggerExperiment(key: string): Result<AutoExperimentVariation>[] | null;
    triggerAutoExperiments(): void;
    private _getEvalContext;
    private _getUserContext;
    private _getGlobalContext;
    private _runAutoExperiment;
    private _undoActiveAutoExperiment;
    private _updateAllAutoExperiments;
    private _onExperimentEval;
    private _fireSubscriptions;
    private _recordChangedId;
    isOn<K extends string & keyof AppFeatures = string>(key: K): boolean;
    isOff<K extends string & keyof AppFeatures = string>(key: K): boolean;
    getFeatureValue<V extends AppFeatures[K], K extends string & keyof AppFeatures = string>(key: K, defaultValue: V): WidenPrimitives<V>;
    /**
     * @deprecated Use {@link evalFeature}
     * @param id
     */
    feature<V extends AppFeatures[K], K extends string & keyof AppFeatures = string>(id: K): FeatureResult<V | null>;
    evalFeature<V extends AppFeatures[K], K extends string & keyof AppFeatures = string>(id: K): FeatureResult<V | null>;
    log(msg: string, ctx: Record<string, unknown>): void;
    getDeferredTrackingCalls(): TrackingData[];
    setDeferredTrackingCalls(calls: TrackingData[]): void;
    fireDeferredTrackingCalls(): Promise<void>;
    setTrackingCallback(callback: TrackingCallback): void;
    setFeatureUsageCallback(callback: FeatureUsageCallback): void;
    setEventLogger(logger: EventLogger): void;
    logEvent(eventName: string, properties?: Record<string, unknown>): Promise<void>;
    private _saveDeferredTrack;
    private _getContextUrl;
    private _isAutoExperimentBlockedByContext;
    getRedirectUrl(): string;
    private _getNavigateFunction;
    private _applyDOMChanges;
    refreshStickyBuckets(data?: FeatureApiResponse): Promise<void>;
    generateStickyBucketAssignmentDocsSync(stickyBucketService: StickyBucketServiceSync, payload: FeatureApiResponse): Record<string, StickyAssignmentsDocument> | undefined;
    inDevMode(): boolean;
}
export declare function prefetchPayload(options: PrefetchOptions): Promise<void>;
//# sourceMappingURL=GrowthBook.d.ts.map