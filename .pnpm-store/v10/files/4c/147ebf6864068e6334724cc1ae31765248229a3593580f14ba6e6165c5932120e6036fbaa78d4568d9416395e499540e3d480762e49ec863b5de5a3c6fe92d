import { EvalContext, FeatureResult, Experiment, Result, StickyAttributeKey, StickyAssignmentsDocument, FeatureApiResponse, Options, ClientOptions } from "./types/growthbook";
import { StickyBucketService } from "./sticky-bucket-service";
export declare const EVENT_FEATURE_EVALUATED = "Feature Evaluated";
export declare const EVENT_EXPERIMENT_VIEWED = "Experiment Viewed";
export declare function evalFeature<V = unknown>(id: string, ctx: EvalContext): FeatureResult<V | null>;
export declare function runExperiment<T>(experiment: Experiment<T>, featureId: string | null, ctx: EvalContext): {
    result: Result<T>;
    trackingCall?: Promise<void>;
};
export declare function getExperimentResult<T>(ctx: EvalContext, experiment: Experiment<T>, variationIndex: number, hashUsed: boolean, featureId: string | null, bucket?: number, stickyBucketUsed?: boolean): Result<T>;
export declare function getHashAttribute(ctx: EvalContext, attr?: string, fallback?: string): {
    hashAttribute: string;
    hashValue: any;
};
export declare function getStickyBucketAttributeKey(attributeName: string, attributeValue: string): StickyAttributeKey;
export declare function getAllStickyBucketAssignmentDocs(ctx: EvalContext, stickyBucketService: StickyBucketService, data?: FeatureApiResponse): Promise<Record<string, StickyAssignmentsDocument>>;
export declare function getStickyBucketAttributes(ctx: EvalContext, data?: FeatureApiResponse): Record<string, string>;
export declare function decryptPayload(data: FeatureApiResponse, decryptionKey: string | undefined, subtle?: SubtleCrypto): Promise<FeatureApiResponse>;
export declare function getApiHosts(options: Options | ClientOptions): {
    apiHost: string;
    streamingHost: string;
    apiRequestHeaders?: Record<string, string>;
    streamingHostRequestHeaders?: Record<string, string>;
};
export declare function getExperimentDedupeKey(experiment: Experiment<unknown>, result: Result<unknown>): string;
//# sourceMappingURL=core.d.ts.map