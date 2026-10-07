/**
 * @since 2.0.0
 */
import type * as Duration from "./Duration.js";
import type * as Equal from "./Equal.js";
import type * as MetricBoundaries from "./MetricBoundaries.js";
import type * as MetricKeyType from "./MetricKeyType.js";
import type * as MetricLabel from "./MetricLabel.js";
import type * as Option from "./Option.js";
import type { Pipeable } from "./Pipeable.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const MetricKeyTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type MetricKeyTypeId = typeof MetricKeyTypeId;
/**
 * A `MetricKey` is a unique key associated with each metric. The key is based
 * on a combination of the metric type, the name and tags associated with the
 * metric, an optional description of the key, and any other information to
 * describe a metric, such as the boundaries of a histogram. In this way, it is
 * impossible to ever create different metrics with conflicting keys.
 *
 * @since 2.0.0
 * @category models
 */
export interface MetricKey<out Type extends MetricKeyType.MetricKeyType<any, any>> extends MetricKey.Variance<Type>, Equal.Equal, Pipeable {
    readonly name: string;
    readonly keyType: Type;
    readonly description: Option.Option<string>;
    readonly tags: ReadonlyArray<MetricLabel.MetricLabel>;
}
/**
 * @since 2.0.0
 */
export declare namespace MetricKey {
    /**
     * @since 2.0.0
     * @category models
     */
    type Untyped = MetricKey<any>;
    /**
     * @since 2.0.0
     * @category models
     */
    type Counter<A extends (number | bigint)> = MetricKey<MetricKeyType.MetricKeyType.Counter<A>>;
    /**
     * @since 2.0.0
     * @category models
     */
    type Gauge<A extends (number | bigint)> = MetricKey<MetricKeyType.MetricKeyType.Gauge<A>>;
    /**
     * @since 2.0.0
     * @category models
     */
    type Frequency = MetricKey<MetricKeyType.MetricKeyType.Frequency>;
    /**
     * @since 2.0.0
     * @category models
     */
    type Histogram = MetricKey<MetricKeyType.MetricKeyType.Histogram>;
    /**
     * @since 2.0.0
     * @category models
     */
    type Summary = MetricKey<MetricKeyType.MetricKeyType.Summary>;
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<out Type> {
        readonly [MetricKeyTypeId]: {
            _Type: Types.Covariant<Type>;
        };
    }
}
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isMetricKey: (u: unknown) => u is MetricKey<MetricKeyType.MetricKeyType<unknown, unknown>>;
/**
 * Creates a metric key for a counter, with the specified name.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const counter: {
    /**
     * Creates a metric key for a counter, with the specified name.
     *
     * @since 2.0.0
     * @category constructors
     */
    (name: string, options?: {
        readonly description?: string | undefined;
        readonly bigint?: false | undefined;
        readonly incremental?: boolean | undefined;
    }): MetricKey.Counter<number>;
    /**
     * Creates a metric key for a counter, with the specified name.
     *
     * @since 2.0.0
     * @category constructors
     */
    (name: string, options: {
        readonly description?: string | undefined;
        readonly bigint: true;
        readonly incremental?: boolean | undefined;
    }): MetricKey.Counter<bigint>;
};
/**
 * Creates a metric key for a categorical frequency table, with the specified
 * name.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const frequency: (name: string, options?: {
    readonly description?: string | undefined;
    readonly preregisteredWords?: ReadonlyArray<string> | undefined;
} | undefined) => MetricKey.Frequency;
/**
 * Creates a metric key for a gauge, with the specified name.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const gauge: {
    /**
     * Creates a metric key for a gauge, with the specified name.
     *
     * @since 2.0.0
     * @category constructors
     */
    (name: string, options?: {
        readonly description?: string | undefined;
        readonly bigint?: false | undefined;
    }): MetricKey.Gauge<number>;
    /**
     * Creates a metric key for a gauge, with the specified name.
     *
     * @since 2.0.0
     * @category constructors
     */
    (name: string, options: {
        readonly description?: string | undefined;
        readonly bigint: true;
    }): MetricKey.Gauge<bigint>;
};
/**
 * Creates a metric key for a histogram, with the specified name and boundaries.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const histogram: (name: string, boundaries: MetricBoundaries.MetricBoundaries, description?: string) => MetricKey.Histogram;
/**
 * Creates a metric key for a summary, with the specified name, maxAge,
 * maxSize, error, and quantiles.
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
}) => MetricKey.Summary;
/**
 * Returns a new `MetricKey` with the specified tag appended.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const tagged: {
    /**
     * Returns a new `MetricKey` with the specified tag appended.
     *
     * @since 2.0.0
     * @category constructors
     */
    (key: string, value: string): <Type extends MetricKeyType.MetricKeyType<any, any>>(self: MetricKey<Type>) => MetricKey<Type>;
    /**
     * Returns a new `MetricKey` with the specified tag appended.
     *
     * @since 2.0.0
     * @category constructors
     */
    <Type extends MetricKeyType.MetricKeyType<any, any>>(self: MetricKey<Type>, key: string, value: string): MetricKey<Type>;
};
/**
 * Returns a new `MetricKey` with the specified tags appended.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const taggedWithLabels: {
    /**
     * Returns a new `MetricKey` with the specified tags appended.
     *
     * @since 2.0.0
     * @category constructors
     */
    (extraTags: ReadonlyArray<MetricLabel.MetricLabel>): <Type extends MetricKeyType.MetricKeyType<any, any>>(self: MetricKey<Type>) => MetricKey<Type>;
    /**
     * Returns a new `MetricKey` with the specified tags appended.
     *
     * @since 2.0.0
     * @category constructors
     */
    <Type extends MetricKeyType.MetricKeyType<any, any>>(self: MetricKey<Type>, extraTags: ReadonlyArray<MetricLabel.MetricLabel>): MetricKey<Type>;
};
//# sourceMappingURL=MetricKey.d.ts.map