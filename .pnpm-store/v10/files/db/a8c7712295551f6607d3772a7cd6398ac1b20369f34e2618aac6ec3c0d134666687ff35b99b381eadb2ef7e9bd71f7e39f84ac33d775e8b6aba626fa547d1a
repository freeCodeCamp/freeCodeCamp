import { Scope } from '../scope';
import { Metric } from '../types/metric';
/**
 * Options for capturing a metric.
 */
export interface MetricOptions {
    /**
     * The unit of the metric value.
     */
    unit?: string;
    /**
     * Arbitrary structured data that stores information about the metric.
     */
    attributes?: Metric['attributes'];
    /**
     * The scope to capture the metric with.
     */
    scope?: Scope;
}
/**
 * @summary Increment a counter metric.
 *
 * @param name - The name of the counter metric.
 * @param value - The value to increment by (defaults to 1).
 * @param options - Options for capturing the metric.
 *
 * @example
 *
 * ```
 * Sentry.metrics.count('api.requests', 1, {
 *   attributes: {
 *     endpoint: '/api/users',
 *     method: 'GET',
 *     status: 200
 *   }
 * });
 * ```
 *
 * @example With custom value
 *
 * ```
 * Sentry.metrics.count('items.processed', 5, {
 *   attributes: {
 *     processor: 'batch-processor',
 *     queue: 'high-priority'
 *   }
 * });
 * ```
 */
export declare function count(name: string, value?: number, options?: MetricOptions): void;
/**
 * @summary Set a gauge metric to a specific value.
 *
 * @param name - The name of the gauge metric.
 * @param value - The current value of the gauge.
 * @param options - Options for capturing the metric.
 *
 * @example
 *
 * ```
 * Sentry.metrics.gauge('memory.usage', 1024, {
 *   unit: 'megabyte',
 *   attributes: {
 *     process: 'web-server',
 *     region: 'us-east-1'
 *   }
 * });
 * ```
 *
 * @example Without unit
 *
 * ```
 * Sentry.metrics.gauge('active.connections', 42, {
 *   attributes: {
 *     server: 'api-1',
 *     protocol: 'websocket'
 *   }
 * });
 * ```
 */
export declare function gauge(name: string, value: number, options?: MetricOptions): void;
/**
 * @summary Record a value in a distribution metric.
 *
 * @param name - The name of the distribution metric.
 * @param value - The value to record in the distribution.
 * @param options - Options for capturing the metric.
 *
 * @example
 *
 * ```
 * Sentry.metrics.distribution('task.duration', 500, {
 *   unit: 'millisecond',
 *   attributes: {
 *     task: 'data-processing',
 *     priority: 'high'
 *   }
 * });
 * ```
 *
 * @example Without unit
 *
 * ```
 * Sentry.metrics.distribution('batch.size', 100, {
 *   attributes: {
 *     processor: 'batch-1',
 *     type: 'async'
 *   }
 * });
 * ```
 */
export declare function distribution(name: string, value: number, options?: MetricOptions): void;
//# sourceMappingURL=public-api.d.ts.map
