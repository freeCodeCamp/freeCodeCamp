/**
 * Normalizes a `collectionIntervalMs` value, enforcing a minimum of 1000ms.
 * - Non-finite values (NaN, Infinity): warns and falls back to `defaultInterval`.
 * - Values below the minimum: warns and clamps to 1000ms.
 * @internal
 */
export declare function _INTERNAL_normalizeCollectionInterval(rawInterval: number, integrationName: string, defaultInterval: number): number;
export interface NodeRuntimeMetricsOptions {
    /**
     * Which metrics to collect.
     *
     * Default on (8 metrics):
     * - `cpuUtilization` — CPU utilization ratio
     * - `memRss` — Resident Set Size (actual memory footprint)
     * - `memHeapUsed` — V8 heap currently in use
     * - `memHeapTotal` — total V8 heap allocated (headroom paired with `memHeapUsed`)
     * - `eventLoopDelayP50` — median event loop delay (baseline latency)
     * - `eventLoopDelayP99` — 99th percentile event loop delay (tail latency / spikes)
     * - `eventLoopUtilization` — fraction of time the event loop was active
     * - `uptime` — process uptime (detect restarts/crashes)
     *
     * Default off (opt-in):
     * - `cpuTime` — raw user/system CPU time in seconds
     * - `memExternal` — external/ArrayBuffer memory (relevant for native addons)
     * - `eventLoopDelayMin` / `eventLoopDelayMax` / `eventLoopDelayMean` / `eventLoopDelayP90`
     */
    collect?: {
        cpuUtilization?: boolean;
        memHeapUsed?: boolean;
        memRss?: boolean;
        eventLoopDelayP99?: boolean;
        eventLoopUtilization?: boolean;
        uptime?: boolean;
        cpuTime?: boolean;
        memHeapTotal?: boolean;
        memExternal?: boolean;
        eventLoopDelayMin?: boolean;
        eventLoopDelayMax?: boolean;
        eventLoopDelayMean?: boolean;
        eventLoopDelayP50?: boolean;
        eventLoopDelayP90?: boolean;
    };
    /**
     * How often to collect metrics, in milliseconds.
     * Minimum allowed value is 1000ms.
     * @default 30000
     * @minimum 1000
     */
    collectionIntervalMs?: number;
}
/**
 * Automatically collects Node.js runtime metrics and emits them to Sentry.
 *
 * @example
 * ```ts
 * Sentry.init({
 *   integrations: [
 *     Sentry.nodeRuntimeMetricsIntegration(),
 *   ],
 * });
 * ```
 */
export declare const nodeRuntimeMetricsIntegration: (options?: NodeRuntimeMetricsOptions | undefined) => import("@sentry/core").Integration;
//# sourceMappingURL=nodeRuntimeMetrics.d.ts.map
