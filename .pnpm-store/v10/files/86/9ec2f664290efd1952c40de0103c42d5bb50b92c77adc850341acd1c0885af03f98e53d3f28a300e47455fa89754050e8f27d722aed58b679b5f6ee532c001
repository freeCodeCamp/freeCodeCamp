/**
 * @since 2.0.0
 */
import type * as Duration from "./Duration.js";
import type * as Equal from "./Equal.js";
import type * as MetricBoundaries from "./MetricBoundaries.js";
import type * as MetricState from "./MetricState.js";
import type { Pipeable } from "./Pipeable.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const MetricKeyTypeTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type MetricKeyTypeTypeId = typeof MetricKeyTypeTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const CounterKeyTypeTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type CounterKeyTypeTypeId = typeof CounterKeyTypeTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const FrequencyKeyTypeTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type FrequencyKeyTypeTypeId = typeof FrequencyKeyTypeTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const GaugeKeyTypeTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type GaugeKeyTypeTypeId = typeof GaugeKeyTypeTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const HistogramKeyTypeTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type HistogramKeyTypeTypeId = typeof HistogramKeyTypeTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const SummaryKeyTypeTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type SummaryKeyTypeTypeId = typeof SummaryKeyTypeTypeId;
/**
 * @since 2.0.0
 * @category modelz
 */
export interface MetricKeyType<in In, out Out> extends MetricKeyType.Variance<In, Out>, Equal.Equal, Pipeable {
}
/**
 * @since 2.0.0
 */
export declare namespace MetricKeyType {
    /**
     * @since 2.0.0
     * @category models
     */
    type Untyped = MetricKeyType<any, any>;
    /**
     * @since 2.0.0
     * @category models
     */
    type Counter<A extends (number | bigint)> = MetricKeyType<A, MetricState.MetricState.Counter<A>> & {
        readonly [CounterKeyTypeTypeId]: CounterKeyTypeTypeId;
        readonly incremental: boolean;
        readonly bigint: boolean;
    };
    /**
     * @since 2.0.0
     * @category models
     */
    type Frequency = MetricKeyType<string, MetricState.MetricState.Frequency> & {
        readonly [FrequencyKeyTypeTypeId]: FrequencyKeyTypeTypeId;
        readonly preregisteredWords: ReadonlyArray<string>;
    };
    /**
     * @since 2.0.0
     * @category models
     */
    type Gauge<A extends (number | bigint)> = MetricKeyType<A, MetricState.MetricState.Gauge<A>> & {
        readonly [GaugeKeyTypeTypeId]: GaugeKeyTypeTypeId;
        readonly bigint: boolean;
    };
    /**
     * @since 2.0.0
     * @category models
     */
    type Histogram = MetricKeyType<number, MetricState.MetricState.Histogram> & {
        readonly [HistogramKeyTypeTypeId]: HistogramKeyTypeTypeId;
        readonly boundaries: MetricBoundaries.MetricBoundaries;
    };
    /**
     * @since 2.0.0
     * @category models
     */
    type Summary = MetricKeyType<readonly [number, number], MetricState.MetricState.Summary> & {
        readonly [SummaryKeyTypeTypeId]: SummaryKeyTypeTypeId;
        readonly maxAge: Duration.Duration;
        readonly maxSize: number;
        readonly error: number;
        readonly quantiles: ReadonlyArray<number>;
    };
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<in In, out Out> {
        readonly [MetricKeyTypeTypeId]: {
            readonly _In: Types.Contravariant<In>;
            readonly _Out: Types.Covariant<Out>;
        };
    }
    /**
     * @since 2.0.0
     * @category models
     */
    type InType<Type extends MetricKeyType<any, any>> = [Type] extends [
        {
            readonly [MetricKeyTypeTypeId]: {
                readonly _In: (_: infer In) => void;
            };
        }
    ] ? In : never;
    /**
     * @since 2.0.0
     * @category models
     */
    type OutType<Type extends MetricKeyType<any, any>> = [Type] extends [
        {
            readonly [MetricKeyTypeTypeId]: {
                readonly _Out: (_: never) => infer Out;
            };
        }
    ] ? Out : never;
}
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const counter: <A extends number | bigint>() => MetricKeyType.Counter<A>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const frequency: (options?: {
    readonly preregisteredWords?: ReadonlyArray<string> | undefined;
} | undefined) => MetricKeyType.Frequency;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const gauge: <A extends number | bigint>() => MetricKeyType.Gauge<A>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const histogram: (boundaries: MetricBoundaries.MetricBoundaries) => MetricKeyType.Histogram;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const summary: (options: {
    readonly maxAge: Duration.DurationInput;
    readonly maxSize: number;
    readonly error: number;
    readonly quantiles: ReadonlyArray<number>;
}) => MetricKeyType.Summary;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isMetricKeyType: (u: unknown) => u is MetricKeyType<unknown, unknown>;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isCounterKey: (u: unknown) => u is MetricKeyType.Counter<number | bigint>;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isFrequencyKey: (u: unknown) => u is MetricKeyType.Frequency;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isGaugeKey: (u: unknown) => u is MetricKeyType.Gauge<number | bigint>;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isHistogramKey: (u: unknown) => u is MetricKeyType.Histogram;
/**
 * @since 2.0.0
 * @category refinements
 */
export declare const isSummaryKey: (u: unknown) => u is MetricKeyType.Summary;
//# sourceMappingURL=MetricKeyType.d.ts.map