/**
 * Controls how key-value data (headers, cookies, query params) is collected and filtered.
 *
 * - `true`: Collect all data without filtering (empty denylist). Sensitive values like keys and tokens are always filtered out.
 * - `false`: Do not collect any data.
 * - `{ allow: string[] }`: Collect only the specified keys.
 * - `{ deny: string[] }`: Collect all keys except the specified ones.
 */
export type CollectBehavior = boolean | {
    allow: string[];
} | {
    deny: string[];
};
export type HttpBodyCollectionTarget = 'incomingRequest' | 'outgoingRequest' | 'incomingResponse' | 'outgoingResponse';
/**
 * Controls what data the SDK collects and sends to Sentry.
 *
 * All fields are optional. Omitted fields use the documented defaults.
 */
export interface DataCollection {
    /**
     * Automatically populate `user.*` fields from instrumentation sources.
     * @default false
     */
    userInfo?: boolean;
    /**
     * Controls cookie collection and sensitive value filtering.
     * @default true
     */
    cookies?: CollectBehavior;
    /**
     * Controls HTTP header collection for requests and responses.
     * @default { request: true, response: true }
     */
    httpHeaders?: {
        request?: CollectBehavior;
        response?: CollectBehavior;
    };
    /**
     * Which HTTP body types to collect. An empty array disables body collection.
     * @default []
     */
    httpBodies?: HttpBodyCollectionTarget[];
    /**
     * Controls query parameter collection and sensitive value filtering.
     * @default true
     */
    queryParams?: CollectBehavior;
    /**
     * Controls generative AI input/output recording.
     * @default { inputs: true, outputs: true }
     */
    genAI?: {
        inputs?: boolean;
        outputs?: boolean;
    };
    /**
     * Capture local variable values in stack frames.
     * @default true
     */
    stackFrameVariables?: boolean;
    /**
     * Number of source code context lines to capture around stack frames.
     * @default 5
     */
    frameContextLines?: number;
}
/**
 * Fully resolved `DataCollection` with all defaults applied.
 */
export type ResolvedDataCollection = Required<DataCollection> & {
    httpHeaders: Required<NonNullable<DataCollection['httpHeaders']>>;
    genAI: Required<NonNullable<DataCollection['genAI']>>;
};
//# sourceMappingURL=datacollection.d.ts.map
