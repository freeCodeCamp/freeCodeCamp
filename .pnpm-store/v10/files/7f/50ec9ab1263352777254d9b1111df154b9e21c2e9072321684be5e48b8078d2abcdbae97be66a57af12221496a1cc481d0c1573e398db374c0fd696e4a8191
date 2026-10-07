/**
 * @since 2.0.0
 */
import type * as Duration from "./Duration.js";
import type * as Effect from "./Effect.js";
import type { LazyArg } from "./Function.js";
import type * as MetricBoundaries from "./MetricBoundaries.js";
import type * as MetricKey from "./MetricKey.js";
import type * as MetricKeyType from "./MetricKeyType.js";
import type * as MetricLabel from "./MetricLabel.js";
import type * as MetricPair from "./MetricPair.js";
import type * as MetricRegistry from "./MetricRegistry.js";
import type * as MetricState from "./MetricState.js";
import type { Pipeable } from "./Pipeable.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const MetricTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type MetricTypeId = typeof MetricTypeId;
/**
 * A `Metric<Type, In, Out>` represents a concurrent metric which accepts
 * updates of type `In` and are aggregated to a stateful value of type `Out`.
 *
 * For example, a counter metric would have type `Metric<number, number>`,
 * representing the fact that the metric can be updated with numbers (the amount
 * to increment or decrement the counter by), and the state of the counter is a
 * number.
 *
 * There are five primitive metric types supported by Effect:
 *
 *   - Counters
 *   - Frequencies
 *   - Gauges
 *   - Histograms
 *   - Summaries
 *
 * @since 2.0.0
 * @category models
 */
export interface Metric<in out Type, in In, out Out> extends Metric.Variance<Type, In, Out>, Pipeable {
    /**
     * The type of the underlying primitive metric. For example, this could be
     * `MetricKeyType.Counter` or `MetricKeyType.Gauge`.
     */
    readonly keyType: Type;
    unsafeUpdate(input: In, extraTags: ReadonlyArray<MetricLabel.MetricLabel>): void;
    unsafeValue(extraTags: ReadonlyArray<MetricLabel.MetricLabel>): Out;
    unsafeModify(input: In, extraTags: ReadonlyArray<MetricLabel.MetricLabel>): void;
    register(): this;
    <A extends In, E, R>(effect: Effect.Effect<A, E, R>): Effect.Effect<A, E, R>;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface MetricApply {
    <Type, In, Out>(keyType: Type, unsafeUpdate: (input: In, extraTags: ReadonlyArray<MetricLabel.MetricLabel>) => void, unsafeValue: (extraTags: ReadonlyArray<MetricLabel.MetricLabel>) => Out, unsafeModify: (input: In, extraTags: ReadonlyArray<MetricLabel.MetricLabel>) => void): Metric<Type, In, Out>;
}
/**
 * @since 2.0.0
 */
export declare namespace Metric {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Counter<In extends number | bigint> extends Metric<MetricKeyType.MetricKeyType.Counter<In>, In, MetricState.MetricState.Counter<In>> {
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface Gauge<In extends number | bigint> extends Metric<MetricKeyType.MetricKeyType.Gauge<In>, In, MetricState.MetricState.Gauge<In>> {
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface Frequency<In> extends Metric<MetricKeyType.MetricKeyType.Frequency, In, MetricState.MetricState.Frequency> {
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface Histogram<In> extends Metric<MetricKeyType.MetricKeyType.Histogram, In, MetricState.MetricState.Histogram> {
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface Summary<In> extends Metric<MetricKeyType.MetricKeyType.Summary, In, MetricState.MetricState.Summary> {
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<in out Type, in In, out Out> {
        readonly [MetricTypeId]: {
            readonly _Type: Types.Invariant<Type>;
            readonly _In: Types.Contravariant<In>;
            readonly _Out: Types.Covariant<Out>;
        };
    }
}
/**
 * @since 2.0.0
 * @category globals
 */
export declare const globalMetricRegistry: MetricRegistry.MetricRegistry;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: MetricApply;
/**
 * Returns a new metric that is powered by this one, but which accepts updates
 * of the specified new type, which must be transformable to the input type of
 * this metric.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const mapInput: {
    /**
     * Returns a new metric that is powered by this one, but which accepts updates
     * of the specified new type, which must be transformable to the input type of
     * this metric.
     *
     * @since 2.0.0
     * @category mapping
     */
    <In, In2>(f: (input: In2) => In): <Type, Out>(self: Metric<Type, In, Out>) => Metric<Type, In2, Out>;
    /**
     * Returns a new metric that is powered by this one, but which accepts updates
     * of the specified new type, which must be transformable to the input type of
     * this metric.
     *
     * @since 2.0.0
     * @category mapping
     */
    <Type, In, Out, In2>(self: Metric<Type, In, Out>, f: (input: In2) => In): Metric<Type, In2, Out>;
};
/**
 * Represents a Counter metric that tracks cumulative numerical values over time.
 * Counters can be incremented and decremented and provide a running total of changes.
 *
 * **Options**
 *
 * - description - A description of the counter.
 * - bigint - Indicates if the counter uses 'bigint' data type.
 * - incremental - Set to 'true' for a counter that only increases. With this configuration, Effect ensures that non-incremental updates have no impact on the counter, making it exclusively suitable for counting upwards.
 *
 * @example
 * ```ts
 * import { Metric } from "effect"
 *
 * const numberCounter = Metric.counter("count", {
 *   description: "A number counter"
 * });
 *
 * const bigintCounter = Metric.counter("count", {
 *   description: "A bigint counter",
 *   bigint: true
 * });
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const counter: {
    /**
     * Represents a Counter metric that tracks cumulative numerical values over time.
     * Counters can be incremented and decremented and provide a running total of changes.
     *
     * **Options**
     *
     * - description - A description of the counter.
     * - bigint - Indicates if the counter uses 'bigint' data type.
     * - incremental - Set to 'true' for a counter that only increases. With this configuration, Effect ensures that non-incremental updates have no impact on the counter, making it exclusively suitable for counting upwards.
     *
     * @example
     * ```ts
     * import { Metric } from "effect"
     *
     * const numberCounter = Metric.counter("count", {
     *   description: "A number counter"
     * });
     *
     * const bigintCounter = Metric.counter("count", {
     *   description: "A bigint counter",
     *   bigint: true
     * });
     * ```
     *
     * @since 2.0.0
     * @category constructors
     */
    (name: string, options?: {
        readonly description?: string | undefined;
        readonly bigint?: false | undefined;
        readonly incremental?: boolean | undefined;
    }): Metric.Counter<number>;
    /**
     * Represents a Counter metric that tracks cumulative numerical values over time.
     * Counters can be incremented and decremented and provide a running total of changes.
     *
     * **Options**
     *
     * - description - A description of the counter.
     * - bigint - Indicates if the counter uses 'bigint' data type.
     * - incremental - Set to 'true' for a counter that only increases. With this configuration, Effect ensures that non-incremental updates have no impact on the counter, making it exclusively suitable for counting upwards.
     *
     * @example
     * ```ts
     * import { Metric } from "effect"
     *
     * const numberCounter = Metric.counter("count", {
     *   description: "A number counter"
     * });
     *
     * const bigintCounter = Metric.counter("count", {
     *   description: "A bigint counter",
     *   bigint: true
     * });
     * ```
     *
     * @since 2.0.0
     * @category constructors
     */
    (name: string, options: {
        readonly description?: string | undefined;
        readonly bigint: true;
        readonly incremental?: boolean | undefined;
    }): Metric.Counter<bigint>;
};
/**
 * Creates a Frequency metric to count occurrences of events.
 * Frequency metrics are used to count the number of times specific events or incidents occur.
 *
 * @example
 * ```ts
 * import { Metric } from "effect"
 *
 * const errorFrequency = Metric.frequency("error_frequency", {
 *    description: "Counts the occurrences of errors."
 * });
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const frequency: (name: string, options?: {
    readonly description?: string | undefined;
    readonly preregisteredWords?: ReadonlyArray<string> | undefined;
} | undefined) => Metric.Frequency<string>;
/**
 * Returns a new metric that is powered by this one, but which accepts updates
 * of any type, and translates them to updates with the specified constant
 * update value.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const withConstantInput: {
    /**
     * Returns a new metric that is powered by this one, but which accepts updates
     * of any type, and translates them to updates with the specified constant
     * update value.
     *
     * @since 2.0.0
     * @category constructors
     */
    <In>(input: In): <Type, Out>(self: Metric<Type, In, Out>) => Metric<Type, unknown, Out>;
    /**
     * Returns a new metric that is powered by this one, but which accepts updates
     * of any type, and translates them to updates with the specified constant
     * update value.
     *
     * @since 2.0.0
     * @category constructors
     */
    <Type, In, Out>(self: Metric<Type, In, Out>, input: In): Metric<Type, unknown, Out>;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const fromMetricKey: <Type extends MetricKeyType.MetricKeyType<any, any>>(key: MetricKey.MetricKey<Type>) => Metric<Type, MetricKeyType.MetricKeyType.InType<Type>, MetricKeyType.MetricKeyType.OutType<Type>>;
/**
 * Represents a Gauge metric that tracks and reports a single numerical value at a specific moment.
 * Gauges are suitable for metrics that represent instantaneous values, such as memory usage or CPU load.
 *
 * **Options**
 *
 * - description - A description of the gauge metric.
 * - bigint - Indicates if the counter uses 'bigint' data type.
 *
 * @example
 * ```ts
 * import { Metric } from "effect"
 *
 * const numberGauge = Metric.gauge("memory_usage", {
 *   description: "A gauge for memory usage"
 * });
 *
 * const bigintGauge = Metric.gauge("cpu_load", {
 *   description: "A gauge for CPU load",
 *   bigint: true
 * });
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const gauge: {
    /**
     * Represents a Gauge metric that tracks and reports a single numerical value at a specific moment.
     * Gauges are suitable for metrics that represent instantaneous values, such as memory usage or CPU load.
     *
     * **Options**
     *
     * - description - A description of the gauge metric.
     * - bigint - Indicates if the counter uses 'bigint' data type.
     *
     * @example
     * ```ts
     * import { Metric } from "effect"
     *
     * const numberGauge = Metric.gauge("memory_usage", {
     *   description: "A gauge for memory usage"
     * });
     *
     * const bigintGauge = Metric.gauge("cpu_load", {
     *   description: "A gauge for CPU load",
     *   bigint: true
     * });
     * ```
     *
     * @since 2.0.0
     * @category constructors
     */
    (name: string, options?: {
        readonly description?: string | undefined;
        readonly bigint?: false | undefined;
    }): Metric.Gauge<number>;
    /**
     * Represents a Gauge metric that tracks and reports a single numerical value at a specific moment.
     * Gauges are suitable for metrics that represent instantaneous values, such as memory usage or CPU load.
     *
     * **Options**
     *
     * - description - A description of the gauge metric.
     * - bigint - Indicates if the counter uses 'bigint' data type.
     *
     * @example
     * ```ts
     * import { Metric } from "effect"
     *
     * const numberGauge = Metric.gauge("memory_usage", {
     *   description: "A gauge for memory usage"
     * });
     *
     * const bigintGauge = Metric.gauge("cpu_load", {
     *   description: "A gauge for CPU load",
     *   bigint: true
     * });
     * ```
     *
     * @since 2.0.0
     * @category constructors
     */
    (name: string, options: {
        readonly description?: string | undefined;
        readonly bigint: true;
    }): Metric.Gauge<bigint>;
};
/**
 * Represents a Histogram metric that records observations in specified value boundaries.
 * Histogram metrics are useful for measuring the distribution of values within a range.
 *
 * @example
 * ```ts
 * import { Metric, MetricBoundaries } from "effect"
 *
 * const latencyHistogram = Metric.histogram("latency_histogram",
 *   MetricBoundaries.linear({ start: 0, width: 10, count: 11 }),
 *   "Measures the distribution of request latency."
 * );
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const histogram: (name: string, boundaries: MetricBoundaries.MetricBoundaries, description?: string) => Metric<MetricKeyType.MetricKeyType.Histogram, number, MetricState.MetricState.Histogram>;
/**
 * @since 2.0.0
 * @category combinators
 */
export declare const increment: (self: Metric.Counter<number> | Metric.Counter<bigint> | Metric.Gauge<number> | Metric.Gauge<bigint>) => Effect.Effect<void>;
/**
 * @since 2.0.0
 * @category combinators
 */
export declare const incrementBy: {
    /**
     * @since 2.0.0
     * @category combinators
     */
    (amount: number): (self: Metric.Counter<number> | Metric.Counter<number>) => Effect.Effect<void>;
    /**
     * @since 2.0.0
     * @category combinators
     */
    (amount: bigint): (self: Metric.Counter<bigint> | Metric.Gauge<bigint>) => Effect.Effect<void>;
    /**
     * @since 2.0.0
     * @category combinators
     */
    (self: Metric.Counter<number> | Metric.Gauge<number>, amount: number): Effect.Effect<void>;
    /**
     * @since 2.0.0
     * @category combinators
     */
    (self: Metric.Counter<bigint> | Metric.Gauge<bigint>, amount: bigint): Effect.Effect<void>;
};
/**
 * Returns a new metric that is powered by this one, but which outputs a new
 * state type, determined by transforming the state type of this metric by the
 * specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const map: {
    /**
     * Returns a new metric that is powered by this one, but which outputs a new
     * state type, determined by transforming the state type of this metric by the
     * specified function.
     *
     * @since 2.0.0
     * @category mapping
     */
    <Out, Out2>(f: (out: Out) => Out2): <Type, In>(self: Metric<Type, In, Out>) => Metric<Type, In, Out2>;
    /**
     * Returns a new metric that is powered by this one, but which outputs a new
     * state type, determined by transforming the state type of this metric by the
     * specified function.
     *
     * @since 2.0.0
     * @category mapping
     */
    <Type, In, Out, Out2>(self: Metric<Type, In, Out>, f: (out: Out) => Out2): Metric<Type, In, Out2>;
};
/**
 * @since 2.0.0
 * @category mapping
 */
export declare const mapType: {
    /**
     * @since 2.0.0
     * @category mapping
     */
    <Type, Type2>(f: (type: Type) => Type2): <In, Out>(self: Metric<Type, In, Out>) => Metric<Type2, In, Out>;
    /**
     * @since 2.0.0
     * @category mapping
     */
    <Type, In, Out, Type2>(self: Metric<Type, In, Out>, f: (type: Type) => Type2): Metric<Type2, In, Out>;
};
/**
 * Modifies the metric with the specified update message. For example, if the
 * metric were a gauge, the update would increment the method by the provided
 * amount.
 *
 * @since 3.6.5
 * @category utils
 */
export declare const modify: {
    /**
     * Modifies the metric with the specified update message. For example, if the
     * metric were a gauge, the update would increment the method by the provided
     * amount.
     *
     * @since 3.6.5
     * @category utils
     */
    <In>(input: In): <Type, Out>(self: Metric<Type, In, Out>) => Effect.Effect<void>;
    /**
     * Modifies the metric with the specified update message. For example, if the
     * metric were a gauge, the update would increment the method by the provided
     * amount.
     *
     * @since 3.6.5
     * @category utils
     */
    <Type, In, Out>(self: Metric<Type, In, Out>, input: In): Effect.Effect<void>;
};
/**
 * @since 2.0.0
 * @category aspects
 */
export declare const set: {
    /**
     * @since 2.0.0
     * @category aspects
     */
    (value: number): (self: Metric.Gauge<number>) => Effect.Effect<void>;
    /**
     * @since 2.0.0
     * @category aspects
     */
    (value: bigint): (self: Metric.Gauge<bigint>) => Effect.Effect<void>;
    /**
     * @since 2.0.0
     * @category aspects
     */
    (self: Metric.Gauge<number>, value: number): Effect.Effect<void>;
    /**
     * @since 2.0.0
     * @category aspects
     */
    (self: Metric.Gauge<bigint>, value: bigint): Effect.Effect<void>;
};
/**
 * Captures a snapshot of all metrics recorded by the application.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const snapshot: Effect.Effect<Array<MetricPair.MetricPair.Untyped>>;
/**
 * Creates a metric that ignores input and produces constant output.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const succeed: <Out>(out: Out) => Metric<void, unknown, Out>;
/**
 * Creates a metric that ignores input and produces constant output.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const sync: <Out>(evaluate: LazyArg<Out>) => Metric<void, unknown, Out>;
/**
 * Creates a Summary metric that records observations and calculates quantiles.
 * Summary metrics provide statistical information about a set of values, including quantiles.
 *
 * **Options**
 *
 * - name - The name of the Summary metric.
 * - maxAge - The maximum age of observations to retain.
 * - maxSize - The maximum number of observations to keep.
 * - error - The error percentage when calculating quantiles.
 * - quantiles - An `Chunk` of quantiles to calculate (e.g., [0.5, 0.9]).
 * - description - An optional description of the Summary metric.
 *
 * @example
 * ```ts
 * import { Metric, Chunk } from "effect"
 *
 * const responseTimesSummary = Metric.summary({
 *   name: "response_times_summary",
 *   maxAge: "60 seconds", // Retain observations for 60 seconds.
 *   maxSize: 1000, // Keep a maximum of 1000 observations.
 *   error: 0.01, // Allow a 1% error when calculating quantiles.
 *   quantiles: [0.5, 0.9, 0.99], // Calculate 50th, 90th, and 99th percentiles.
 *   description: "Measures the distribution of response times."
 * });
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const summary: (options: {
    readonly name: string;
    readonly maxAge: Duration.DurationInput;
    readonly maxSize: number;
    readonly error: number;
    readonly quantiles: ReadonlyArray<number>;
    readonly description?: string | undefined;
}) => Metric.Summary<number>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const summaryTimestamp: (options: {
    readonly name: string;
    readonly maxAge: Duration.DurationInput;
    readonly maxSize: number;
    readonly error: number;
    readonly quantiles: ReadonlyArray<number>;
    readonly description?: string | undefined;
}) => Metric.Summary<readonly [value: number, timestamp: number]>;
/**
 * Returns a new metric, which is identical in every way to this one, except
 * the specified tags have been added to the tags of this metric.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const tagged: {
    /**
     * Returns a new metric, which is identical in every way to this one, except
     * the specified tags have been added to the tags of this metric.
     *
     * @since 2.0.0
     * @category utils
     */
    <Type, In, Out>(key: string, value: string): (self: Metric<Type, In, Out>) => Metric<Type, In, Out>;
    /**
     * Returns a new metric, which is identical in every way to this one, except
     * the specified tags have been added to the tags of this metric.
     *
     * @since 2.0.0
     * @category utils
     */
    <Type, In, Out>(self: Metric<Type, In, Out>, key: string, value: string): Metric<Type, In, Out>;
};
/**
 * Returns a new metric, which is identical in every way to this one, except
 * dynamic tags are added based on the update values. Note that the metric
 * returned by this method does not return any useful information, due to the
 * dynamic nature of the added tags.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const taggedWithLabelsInput: {
    /**
     * Returns a new metric, which is identical in every way to this one, except
     * dynamic tags are added based on the update values. Note that the metric
     * returned by this method does not return any useful information, due to the
     * dynamic nature of the added tags.
     *
     * @since 2.0.0
     * @category utils
     */
    <In>(f: (input: In) => Iterable<MetricLabel.MetricLabel>): <Type, Out>(self: Metric<Type, In, Out>) => Metric<Type, In, void>;
    /**
     * Returns a new metric, which is identical in every way to this one, except
     * dynamic tags are added based on the update values. Note that the metric
     * returned by this method does not return any useful information, due to the
     * dynamic nature of the added tags.
     *
     * @since 2.0.0
     * @category utils
     */
    <Type, In, Out>(self: Metric<Type, In, Out>, f: (input: In) => Iterable<MetricLabel.MetricLabel>): Metric<Type, In, void>;
};
/**
 * Returns a new metric, which is identical in every way to this one, except
 * the specified tags have been added to the tags of this metric.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const taggedWithLabels: {
    /**
     * Returns a new metric, which is identical in every way to this one, except
     * the specified tags have been added to the tags of this metric.
     *
     * @since 2.0.0
     * @category utils
     */
    <Type, In, Out>(extraTags: Iterable<MetricLabel.MetricLabel>): (self: Metric<Type, In, Out>) => Metric<Type, In, Out>;
    /**
     * Returns a new metric, which is identical in every way to this one, except
     * the specified tags have been added to the tags of this metric.
     *
     * @since 2.0.0
     * @category utils
     */
    <Type, In, Out>(self: Metric<Type, In, Out>, extraTags: Iterable<MetricLabel.MetricLabel>): Metric<Type, In, Out>;
};
/**
 * Creates a timer metric, based on a histogram, which keeps track of
 * durations in milliseconds. The unit of time will automatically be added to
 * the metric as a tag (i.e. `"time_unit: milliseconds"`).
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const timer: (name: string, description?: string) => Metric<MetricKeyType.MetricKeyType.Histogram, Duration.Duration, MetricState.MetricState.Histogram>;
/**
 * Creates a timer metric, based on a histogram created from the provided
 * boundaries, which keeps track of durations in milliseconds. The unit of time
 * will automatically be added to the metric as a tag (i.e.
 * `"time_unit: milliseconds"`).
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const timerWithBoundaries: (name: string, boundaries: ReadonlyArray<number>, description?: string) => Metric<MetricKeyType.MetricKeyType.Histogram, Duration.Duration, MetricState.MetricState.Histogram>;
/**
 * Returns an aspect that will update this metric with the specified constant
 * value every time the aspect is applied to an effect, regardless of whether
 * that effect fails or succeeds.
 *
 * @since 2.0.0
 * @category aspects
 */
export declare const trackAll: {
    /**
     * Returns an aspect that will update this metric with the specified constant
     * value every time the aspect is applied to an effect, regardless of whether
     * that effect fails or succeeds.
     *
     * @since 2.0.0
     * @category aspects
     */
    <In>(input: In): <Type, Out>(self: Metric<Type, In, Out>) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    /**
     * Returns an aspect that will update this metric with the specified constant
     * value every time the aspect is applied to an effect, regardless of whether
     * that effect fails or succeeds.
     *
     * @since 2.0.0
     * @category aspects
     */
    <Type, In, Out>(self: Metric<Type, In, Out>, input: In): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
};
/**
 * Returns an aspect that will update this metric with the defects of the
 * effects that it is applied to.
 *
 * @since 2.0.0
 * @category aspects
 */
export declare const trackDefect: {
    /**
     * Returns an aspect that will update this metric with the defects of the
     * effects that it is applied to.
     *
     * @since 2.0.0
     * @category aspects
     */
    <Type, Out>(metric: Metric<Type, unknown, Out>): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    /**
     * Returns an aspect that will update this metric with the defects of the
     * effects that it is applied to.
     *
     * @since 2.0.0
     * @category aspects
     */
    <A, E, R, Type, Out>(self: Effect.Effect<A, E, R>, metric: Metric<Type, unknown, Out>): Effect.Effect<A, E, R>;
};
/**
 * Returns an aspect that will update this metric with the result of applying
 * the specified function to the defect throwables of the effects that the
 * aspect is applied to.
 *
 * @since 2.0.0
 * @category aspects
 */
export declare const trackDefectWith: {
    /**
     * Returns an aspect that will update this metric with the result of applying
     * the specified function to the defect throwables of the effects that the
     * aspect is applied to.
     *
     * @since 2.0.0
     * @category aspects
     */
    <Type, In, Out>(metric: Metric<Type, In, Out>, f: (defect: unknown) => In): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    /**
     * Returns an aspect that will update this metric with the result of applying
     * the specified function to the defect throwables of the effects that the
     * aspect is applied to.
     *
     * @since 2.0.0
     * @category aspects
     */
    <A, E, R, Type, In, Out>(self: Effect.Effect<A, E, R>, metric: Metric<Type, In, Out>, f: (defect: unknown) => In): Effect.Effect<A, E, R>;
};
/**
 * Returns an aspect that will update this metric with the duration that the
 * effect takes to execute. To call this method, the input type of the metric
 * must be `Duration`.
 *
 * @since 2.0.0
 * @category aspects
 */
export declare const trackDuration: {
    /**
     * Returns an aspect that will update this metric with the duration that the
     * effect takes to execute. To call this method, the input type of the metric
     * must be `Duration`.
     *
     * @since 2.0.0
     * @category aspects
     */
    <Type, Out>(metric: Metric<Type, Duration.Duration, Out>): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    /**
     * Returns an aspect that will update this metric with the duration that the
     * effect takes to execute. To call this method, the input type of the metric
     * must be `Duration`.
     *
     * @since 2.0.0
     * @category aspects
     */
    <A, E, R, Type, Out>(self: Effect.Effect<A, E, R>, metric: Metric<Type, Duration.Duration, Out>): Effect.Effect<A, E, R>;
};
/**
 * Returns an aspect that will update this metric with the duration that the
 * effect takes to execute. To call this method, you must supply a function
 * that can convert the `Duration` to the input type of this metric.
 *
 * @since 2.0.0
 * @category aspects
 */
export declare const trackDurationWith: {
    /**
     * Returns an aspect that will update this metric with the duration that the
     * effect takes to execute. To call this method, you must supply a function
     * that can convert the `Duration` to the input type of this metric.
     *
     * @since 2.0.0
     * @category aspects
     */
    <Type, In, Out>(metric: Metric<Type, In, Out>, f: (duration: Duration.Duration) => In): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    /**
     * Returns an aspect that will update this metric with the duration that the
     * effect takes to execute. To call this method, you must supply a function
     * that can convert the `Duration` to the input type of this metric.
     *
     * @since 2.0.0
     * @category aspects
     */
    <A, E, R, Type, In, Out>(self: Effect.Effect<A, E, R>, metric: Metric<Type, In, Out>, f: (duration: Duration.Duration) => In): Effect.Effect<A, E, R>;
};
/**
 * Returns an aspect that will update this metric with the failure value of
 * the effects that it is applied to.
 *
 * @since 2.0.0
 * @category aspects
 */
export declare const trackError: {
    /**
     * Returns an aspect that will update this metric with the failure value of
     * the effects that it is applied to.
     *
     * @since 2.0.0
     * @category aspects
     */
    <Type, In, Out>(metric: Metric<Type, In, Out>): <A, E extends In, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    /**
     * Returns an aspect that will update this metric with the failure value of
     * the effects that it is applied to.
     *
     * @since 2.0.0
     * @category aspects
     */
    <A, E extends In, R, Type, In, Out>(self: Effect.Effect<A, E, R>, metric: Metric<Type, In, Out>): Effect.Effect<A, E, R>;
};
/**
 * Returns an aspect that will update this metric with the result of applying
 * the specified function to the error value of the effects that the aspect is
 * applied to.
 *
 * @since 2.0.0
 * @category aspects
 */
export declare const trackErrorWith: {
    /**
     * Returns an aspect that will update this metric with the result of applying
     * the specified function to the error value of the effects that the aspect is
     * applied to.
     *
     * @since 2.0.0
     * @category aspects
     */
    <Type, In, Out, In2>(metric: Metric<Type, In, Out>, f: (error: In2) => In): <A, E extends In2, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    /**
     * Returns an aspect that will update this metric with the result of applying
     * the specified function to the error value of the effects that the aspect is
     * applied to.
     *
     * @since 2.0.0
     * @category aspects
     */
    <A, E extends In2, R, Type, In, Out, In2>(self: Effect.Effect<A, E, R>, metric: Metric<Type, In, Out>, f: (error: In2) => In): Effect.Effect<A, E, R>;
};
/**
 * Returns an aspect that will update this metric with the success value of
 * the effects that it is applied to.
 *
 * @since 2.0.0
 * @category aspects
 */
export declare const trackSuccess: {
    /**
     * Returns an aspect that will update this metric with the success value of
     * the effects that it is applied to.
     *
     * @since 2.0.0
     * @category aspects
     */
    <Type, In, Out>(metric: Metric<Type, In, Out>): <A extends In, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    /**
     * Returns an aspect that will update this metric with the success value of
     * the effects that it is applied to.
     *
     * @since 2.0.0
     * @category aspects
     */
    <A extends In, E, R, Type, In, Out>(self: Effect.Effect<A, E, R>, metric: Metric<Type, In, Out>): Effect.Effect<A, E, R>;
};
/**
 * Returns an aspect that will update this metric with the result of applying
 * the specified function to the success value of the effects that the aspect is
 * applied to.
 *
 * @since 2.0.0
 * @category aspects
 */
export declare const trackSuccessWith: {
    /**
     * Returns an aspect that will update this metric with the result of applying
     * the specified function to the success value of the effects that the aspect is
     * applied to.
     *
     * @since 2.0.0
     * @category aspects
     */
    <Type, In, Out, A>(metric: Metric<Type, In, Out>, f: (value: Types.NoInfer<A>) => In): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    /**
     * Returns an aspect that will update this metric with the result of applying
     * the specified function to the success value of the effects that the aspect is
     * applied to.
     *
     * @since 2.0.0
     * @category aspects
     */
    <A, E, R, Type, In, Out>(self: Effect.Effect<A, E, R>, metric: Metric<Type, In, Out>, f: (value: Types.NoInfer<A>) => In): Effect.Effect<A, E, R>;
};
/**
 * Updates the metric with the specified update message. For example, if the
 * metric were a counter, the update would increment the method by the
 * provided amount.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const update: {
    /**
     * Updates the metric with the specified update message. For example, if the
     * metric were a counter, the update would increment the method by the
     * provided amount.
     *
     * @since 2.0.0
     * @category utils
     */
    <In>(input: In): <Type, Out>(self: Metric<Type, In, Out>) => Effect.Effect<void>;
    /**
     * Updates the metric with the specified update message. For example, if the
     * metric were a counter, the update would increment the method by the
     * provided amount.
     *
     * @since 2.0.0
     * @category utils
     */
    <Type, In, Out>(self: Metric<Type, In, Out>, input: In): Effect.Effect<void>;
};
/**
 * Retrieves a snapshot of the value of the metric at this moment in time.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const value: <Type, In, Out>(self: Metric<Type, In, Out>) => Effect.Effect<Out>;
/**
 * @since 2.0.0
 * @category utils
 */
export declare const withNow: <Type, In, Out>(self: Metric<Type, readonly [In, number], Out>) => Metric<Type, In, Out>;
/**
 * @since 2.0.0
 * @category zipping
 */
export declare const zip: {
    /**
     * @since 2.0.0
     * @category zipping
     */
    <Type2, In2, Out2>(that: Metric<Type2, In2, Out2>): <Type, In, Out>(self: Metric<Type, In, Out>) => Metric<readonly [Type, Type2], // readonly because invariant
    readonly [In, In2], // readonly because contravariant
    [
        Out,
        Out2
    ]>;
    /**
     * @since 2.0.0
     * @category zipping
     */
    <Type, In, Out, Type2, In2, Out2>(self: Metric<Type, In, Out>, that: Metric<Type2, In2, Out2>): Metric<readonly [Type, Type2], // readonly because invariant
    readonly [In, In2], // readonly because contravariant
    [
        Out,
        Out2
    ]>;
};
/**
 * Unsafely captures a snapshot of all metrics recorded by the application.
 *
 * @since 2.0.0
 * @category unsafe
 */
export declare const unsafeSnapshot: (_: void) => ReadonlyArray<MetricPair.MetricPair.Untyped>;
/**
 * @since 2.0.0
 * @category metrics
 */
export declare const fiberStarted: Metric.Counter<number>;
/**
 * @since 2.0.0
 * @category metrics
 */
export declare const fiberSuccesses: Metric.Counter<number>;
/**
 * @since 2.0.0
 * @category metrics
 */
export declare const fiberFailures: Metric.Counter<number>;
/**
 * @since 2.0.0
 * @category metrics
 */
export declare const fiberLifetimes: Metric<MetricKeyType.MetricKeyType.Histogram, number, MetricState.MetricState.Histogram>;
/**
 * @since 2.0.0
 * @category metrics
 */
export declare const fiberActive: Metric.Counter<number>;
//# sourceMappingURL=Metric.d.ts.map