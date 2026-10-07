import { Contexts, DsnComponents, Primitive, SdkMetadata } from '@sentry/core';
/**
 * Configuration options for the ANR (Application Not Responding) integration.
 *
 * These options control how the ANR detection system monitors the Node.js event loop
 * and reports blocking events.
 *
 * @deprecated The ANR integration has been deprecated. Use `eventLoopBlockIntegration` from `@sentry/node-native` instead.
 */
export interface AnrIntegrationOptions {
    /**
     * Interval to send heartbeat messages to the ANR worker thread.
     *
     * The main thread sends heartbeat messages to the worker thread at this interval
     * to indicate that the event loop is still responsive. Lower values provide more
     * precise detection but may increase overhead.
     *
     * @default 50 (milliseconds)
     */
    pollInterval: number;
    /**
     * Threshold in milliseconds to trigger an ANR event.
     *
     * When the worker thread doesn't receive a heartbeat message for this duration,
     * it considers the main thread to be blocked and triggers an ANR event.
     *
     * @default 5000 (milliseconds)
     */
    anrThreshold: number;
    /**
     * Whether to capture a stack trace when the ANR event is triggered.
     *
     * When enabled, uses the Node.js inspector API to capture the stack trace
     * of the blocking code. This provides more detailed information about what
     * caused the ANR but requires the debugger to be enabled.
     *
     * **Note:** This opens the inspector API and required ports.
     *
     * @default false
     */
    captureStackTrace: boolean;
    /**
     * Maximum number of ANR events to send per application session.
     *
     * Once this limit is reached, the ANR worker thread will exit to prevent
     * sending duplicate events. This helps avoid spamming Sentry with repeated
     * ANR events from the same blocking issue.
     *
     * @default 1
     */
    maxAnrEvents: number;
    /**
     * Static tags to include with all ANR events.
     *
     * These tags will be attached to every ANR event sent by this integration,
     * useful for categorizing or filtering ANR events in Sentry.
     */
    staticTags: {
        [key: string]: Primitive;
    };
    /**
     * @ignore Internal use only.
     *
     * If this is supplied, stack frame filenames will be rewritten to be relative to this path.
     * This is used internally for better stack trace readability.
     */
    appRootPath: string | undefined;
}
export interface WorkerStartData extends AnrIntegrationOptions {
    debug: boolean;
    sdkMetadata: SdkMetadata;
    dsn: DsnComponents;
    tunnel: string | undefined;
    release: string | undefined;
    environment: string;
    dist: string | undefined;
    contexts: Contexts;
}
//# sourceMappingURL=common.d.ts.map
