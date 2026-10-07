import type { Client } from '../client';
import type { Scope } from '../scope';
import type { Metric, SerializedMetric } from '../types/metric';
/**
 * Captures a serialized metric event and adds it to the metric buffer for the given client.
 *
 * @param client - A client. Uses the current client if not provided.
 * @param serializedMetric - The serialized metric event to capture.
 *
 * @experimental This method will experience breaking changes. This is not yet part of
 * the stable Sentry SDK API and can be changed or removed without warning.
 */
export declare function _INTERNAL_captureSerializedMetric(client: Client, serializedMetric: SerializedMetric): void;
/**
 * Options for capturing a metric internally.
 */
export interface InternalCaptureMetricOptions {
    /**
     * The scope to capture the metric with.
     */
    scope?: Scope;
    /**
     * A function to capture the serialized metric.
     */
    captureSerializedMetric?: (client: Client, metric: SerializedMetric) => void;
}
/**
 * Captures a metric event and sends it to Sentry.
 *
 * @param metric - The metric event to capture.
 * @param options - Options for capturing the metric.
 *
 * @experimental This method will experience breaking changes. This is not yet part of
 * the stable Sentry SDK API and can be changed or removed without warning.
 */
export declare function _INTERNAL_captureMetric(beforeMetric: Metric, options?: InternalCaptureMetricOptions): void;
/**
 * Flushes the metrics buffer to Sentry.
 *
 * @param client - A client.
 * @param maybeMetricBuffer - A metric buffer. Uses the metric buffer for the given client if not provided.
 *
 * @experimental This method will experience breaking changes. This is not yet part of
 * the stable Sentry SDK API and can be changed or removed without warning.
 */
export declare function _INTERNAL_flushMetricsBuffer(client: Client, maybeMetricBuffer?: Array<SerializedMetric>): void;
/**
 * Returns the metric buffer for a given client.
 *
 * Exported for testing purposes.
 *
 * @param client - The client to get the metric buffer for.
 * @returns The metric buffer for the given client.
 */
export declare function _INTERNAL_getMetricBuffer(client: Client): Array<SerializedMetric> | undefined;
//# sourceMappingURL=internal.d.ts.map