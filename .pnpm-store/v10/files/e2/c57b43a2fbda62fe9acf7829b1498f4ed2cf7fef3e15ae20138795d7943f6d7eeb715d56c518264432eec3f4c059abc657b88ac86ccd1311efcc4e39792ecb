import { Integration } from '@sentry/core';
import { AnrIntegrationOptions } from './common';
export declare const base64WorkerScript = "###AnrWorkerScript###";
type AnrInternal = {
    startWorker: () => void;
    stopWorker: () => void;
};
type AnrReturn = (options?: Partial<AnrIntegrationOptions>) => Integration & AnrInternal;
/**
 * Application Not Responding (ANR) integration for Node.js applications.
 *
 * @deprecated The ANR integration has been deprecated. Use `eventLoopBlockIntegration` from `@sentry/node-native` instead.
 *
 * Detects when the Node.js main thread event loop is blocked for more than the configured
 * threshold (5 seconds by default) and reports these as Sentry events.
 *
 * ANR detection uses a worker thread to monitor the event loop in the main app thread.
 * The main app thread sends a heartbeat message to the ANR worker thread every 50ms by default.
 * If the ANR worker does not receive a heartbeat message for the configured threshold duration,
 * it triggers an ANR event.
 *
 * - Node.js 16.17.0 or higher
 * - Only supported in the Node.js runtime (not browsers)
 * - Not supported for Node.js clusters
 *
 * Overhead should be minimal:
 * - Main thread: Only polling the ANR worker over IPC every 50ms
 * - Worker thread: Consumes around 10-20 MB of RAM
 * - When ANR detected: Brief pause in debugger to capture stack trace (negligible compared to the blocking)
 *
 * @example
 * ```javascript
 * Sentry.init({
 *   dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
 *   integrations: [
 *     Sentry.anrIntegration({
 *       anrThreshold: 5000,
 *       captureStackTrace: true,
 *       pollInterval: 50,
 *     }),
 *   ],
 * });
 * ```
 */
export declare const anrIntegration: AnrReturn;
/**
 * @see {@link disableBlockDetectionForCallback}
 *
 * @deprecated The ANR integration has been deprecated. Use `eventLoopBlockIntegration` from `@sentry/node-native` instead.
 */
export declare function disableAnrDetectionForCallback<T>(callback: () => T): T;
/**
 * @see {@link disableBlockDetectionForCallback}
 *
 * @deprecated The ANR integration has been deprecated. Use `eventLoopBlockIntegration` from `@sentry/node-native` instead.
 */
export declare function disableAnrDetectionForCallback<T>(callback: () => Promise<T>): Promise<T>;
export {};
//# sourceMappingURL=index.d.ts.map
