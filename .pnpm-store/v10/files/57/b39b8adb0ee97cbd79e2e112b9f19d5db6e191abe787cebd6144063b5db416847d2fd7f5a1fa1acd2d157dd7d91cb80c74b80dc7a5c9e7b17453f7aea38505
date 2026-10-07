import type { DsnComponents } from '../types/dsn';
import type { MetricContainerItem, MetricEnvelope } from '../types/envelope';
import type { SerializedMetric } from '../types/metric';
import type { SdkMetadata } from '../types/sdkmetadata';
/**
 * Creates a metric container envelope item for a list of metrics.
 *
 * @param items - The metrics to include in the envelope.
 * @param inferUserData - If true, tells Relay to infer the end-user IP and User-Agent from the incoming request.
 *                        Only emitted as `ingest_settings` in browser environments.
 * @returns The created metric container envelope item.
 */
export declare function createMetricContainerEnvelopeItem(items: Array<SerializedMetric>, inferUserData?: boolean): MetricContainerItem;
/**
 * Creates an envelope for a list of metrics.
 *
 * Metrics from multiple traces can be included in the same envelope.
 *
 * @param metrics - The metrics to include in the envelope.
 * @param metadata - The metadata to include in the envelope.
 * @param tunnel - The tunnel to include in the envelope.
 * @param dsn - The DSN to include in the envelope.
 * @param inferUserData - If true, tells Relay to infer the end-user IP and User-Agent from the incoming request.
 * @returns The created envelope.
 */
export declare function createMetricEnvelope(metrics: Array<SerializedMetric>, metadata?: SdkMetadata, tunnel?: string, dsn?: DsnComponents, inferUserData?: boolean): MetricEnvelope;
//# sourceMappingURL=envelope.d.ts.map