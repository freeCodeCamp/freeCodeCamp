import type { Attributes, AttributeValue } from '../common/Attributes';
import type { Context } from '../context/types';
/**
 * Advisory options influencing aggregation configuration parameters.
 *
 * @since 1.7.0
 * @experimental
 */
export interface MetricAdvice {
    /**
     * Hint the explicit bucket boundaries for SDK if the metric is been
     * aggregated with a HistogramAggregator.
     */
    explicitBucketBoundaries?: number[];
}
/**
 * Options needed for metric creation
 *
 * @since 1.3.0
 */
export interface MetricOptions {
    /**
     * The description of the Metric.
     * @default ''
     */
    description?: string;
    /**
     * The unit of the Metric values.
     * @default ''
     */
    unit?: string;
    /**
     * Indicates the type of the recorded value.
     * @default {@link ValueType.DOUBLE}
     */
    valueType?: ValueType;
    /**
     * The advice influencing aggregation configuration parameters.
     * @experimental
     * @since 1.7.0
     */
    advice?: MetricAdvice;
}
/**
 * The Type of value. It describes how the data is reported.
 *
 * @since 1.3.0
 */
export declare enum ValueType {
    INT = 0,
    DOUBLE = 1
}
/**
 * Counter is the most common synchronous instrument. This instrument supports
 * an `Add(increment)` function for reporting a sum, and is restricted to
 * non-negative increments. The default aggregation is Sum, as for any additive
 * instrument.
 *
 * Example uses for Counter:
 * <ol>
 *   <li> count the number of bytes received. </li>
 *   <li> count the number of requests completed. </li>
 *   <li> count the number of accounts created. </li>
 *   <li> count the number of checkpoints run. </li>
 *   <li> count the number of 5xx errors. </li>
 * <ol>
 *
 * @since 1.3.0
 */
export interface Counter<AttributesTypes extends MetricAttributes = MetricAttributes> {
    /**
     * Increment value of counter by the input. Inputs must not be negative.
     */
    add(value: number, attributes?: AttributesTypes, context?: Context): void;
}
/**
 * @since 1.3.0
 */
export interface UpDownCounter<AttributesTypes extends MetricAttributes = MetricAttributes> {
    /**
     * Increment value of counter by the input. Inputs may be negative.
     */
    add(value: number, attributes?: AttributesTypes, context?: Context): void;
}
/**
 * @since 1.9.0
 */
export interface Gauge<AttributesTypes extends MetricAttributes = MetricAttributes> {
    /**
     * Records a measurement.
     */
    record(value: number, attributes?: AttributesTypes, context?: Context): void;
}
/**
 * @since 1.3.0
 */
export interface Histogram<AttributesTypes extends MetricAttributes = MetricAttributes> {
    /**
     * Records a measurement. Value of the measurement must not be negative.
     */
    record(value: number, attributes?: AttributesTypes, context?: Context): void;
}
/**
 * @deprecated please use {@link Attributes}
 * @since 1.3.0
 */
export type MetricAttributes = Attributes;
/**
 * @deprecated please use {@link AttributeValue}
 * @since 1.3.0
 */
export type MetricAttributeValue = AttributeValue;
/**
 * Interface that is being used in callback function for Observable Metric.
 *
 * @since 1.3.0
 */
export interface ObservableResult<AttributesTypes extends MetricAttributes = MetricAttributes> {
    /**
     * Observe a measurement of the value associated with the given attributes.
     *
     * @param value The value to be observed.
     * @param attributes The attributes associated with the value. If more than
     * one value is associated with the same attributes values, SDK may pick the
     * last one or simply drop the entire observable result.
     */
    observe(this: ObservableResult<AttributesTypes>, value: number, attributes?: AttributesTypes): void;
}
/**
 * Interface that is being used in batch observable callback function.
 */
export interface BatchObservableResult<AttributesTypes extends MetricAttributes = MetricAttributes> {
    /**
     * Observe a measurement of the value associated with the given attributes.
     *
     * @param metric The observable metric to be observed.
     * @param value The value to be observed.
     * @param attributes The attributes associated with the value. If more than
     * one value is associated with the same attributes values, SDK may pick the
     * last one or simply drop the entire observable result.
     */
    observe(this: BatchObservableResult<AttributesTypes>, metric: Observable<AttributesTypes>, value: number, attributes?: AttributesTypes): void;
}
/**
 * The observable callback for Observable instruments.
 *
 * @since 1.3.0
 */
export type ObservableCallback<AttributesTypes extends MetricAttributes = MetricAttributes> = (observableResult: ObservableResult<AttributesTypes>) => void | Promise<void>;
/**
 * The observable callback for a batch of Observable instruments.
 *
 * @since 1.3.0
 */
export type BatchObservableCallback<AttributesTypes extends MetricAttributes = MetricAttributes> = (observableResult: BatchObservableResult<AttributesTypes>) => void | Promise<void>;
/**
 * @since 1.3.0
 */
export interface Observable<AttributesTypes extends MetricAttributes = MetricAttributes> {
    /**
     * Sets up a function that will be called whenever a metric collection is initiated.
     *
     * If the function is already in the list of callbacks for this Observable, the function is not added a second time.
     */
    addCallback(callback: ObservableCallback<AttributesTypes>): void;
    /**
     * Removes a callback previously registered with {@link Observable.addCallback}.
     */
    removeCallback(callback: ObservableCallback<AttributesTypes>): void;
}
/**
 * @since 1.3.0
 */
export type ObservableCounter<AttributesTypes extends MetricAttributes = MetricAttributes> = Observable<AttributesTypes>;
/**
 * @since 1.3.0
 */
export type ObservableUpDownCounter<AttributesTypes extends MetricAttributes = MetricAttributes> = Observable<AttributesTypes>;
/**
 * @since 1.3.0
 */
export type ObservableGauge<AttributesTypes extends MetricAttributes = MetricAttributes> = Observable<AttributesTypes>;
//# sourceMappingURL=Metric.d.ts.map