import { Attributes, TypedAttributeValue } from '../attributes';
export type MetricType = 'counter' | 'gauge' | 'distribution';
export interface Metric {
    /**
     * The name of the metric.
     */
    name: string;
    /**
     * The value of the metric.
     */
    value: number;
    /**
     * The type of metric.
     */
    type: MetricType;
    /**
     * The unit of the metric value.
     */
    unit?: string;
    /**
     * Arbitrary structured data that stores information about the metric.
     */
    attributes?: Record<string, unknown>;
}
/**
 * @deprecated this was not intended for public consumption
 */
export type SerializedMetricAttributeValue = TypedAttributeValue;
export interface SerializedMetric {
    /**
     * Timestamp in seconds (epoch time) indicating when the metric was recorded.
     */
    timestamp: number;
    /**
     * The trace ID for this metric.
     */
    trace_id: string;
    /**
     * The span ID for this metric.
     */
    span_id?: string;
    /**
     * The name of the metric.
     */
    name: string;
    /**
     * The type of metric.
     */
    type: MetricType;
    /**
     * The unit of the metric value.
     */
    unit?: string;
    /**
     * The value of the metric.
     */
    value: number;
    /**
     * Arbitrary structured data that stores information about the metric.
     */
    attributes?: Attributes;
}
export type SerializedMetricContainer = {
    version?: number;
    ingest_settings?: {
        infer_ip?: 'auto' | 'never';
        infer_user_agent?: 'auto' | 'never';
    };
    items: Array<SerializedMetric>;
};
//# sourceMappingURL=metric.d.ts.map
