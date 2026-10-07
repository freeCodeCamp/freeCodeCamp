/**
 * @since 2.0.0
 */
import type * as Duration from "./Duration.js"
import type * as Equal from "./Equal.js"
import * as internal from "./internal/metric/keyType.js"
import type * as MetricBoundaries from "./MetricBoundaries.js"
import type * as MetricState from "./MetricState.js"
import type { Pipeable } from "./Pipeable.js"
import type * as Types from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const MetricKeyTypeTypeId: unique symbol = internal.MetricKeyTypeTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type MetricKeyTypeTypeId = typeof MetricKeyTypeTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export const CounterKeyTypeTypeId: unique symbol = internal.CounterKeyTypeTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type CounterKeyTypeTypeId = typeof CounterKeyTypeTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export const FrequencyKeyTypeTypeId: unique symbol = internal.FrequencyKeyTypeTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type FrequencyKeyTypeTypeId = typeof FrequencyKeyTypeTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export const GaugeKeyTypeTypeId: unique symbol = internal.GaugeKeyTypeTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type GaugeKeyTypeTypeId = typeof GaugeKeyTypeTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export const HistogramKeyTypeTypeId: unique symbol = internal.HistogramKeyTypeTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type HistogramKeyTypeTypeId = typeof HistogramKeyTypeTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export const SummaryKeyTypeTypeId: unique symbol = internal.SummaryKeyTypeTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type SummaryKeyTypeTypeId = typeof SummaryKeyTypeTypeId

/**
 * @since 2.0.0
 * @category modelz
 */
export interface MetricKeyType<in In, out Out> extends MetricKeyType.Variance<In, Out>, Equal.Equal, Pipeable {}

/**
 * @since 2.0.0
 */
export declare namespace MetricKeyType {
  /**
   * @since 2.0.0
   * @category models
   */
  export type Untyped = MetricKeyType<any, any>

  /**
   * @since 2.0.0
   * @category models
   */
  export type Counter<A extends (number | bigint)> = MetricKeyType<A, MetricState.MetricState.Counter<A>> & {
    readonly [CounterKeyTypeTypeId]: CounterKeyTypeTypeId
    readonly incremental: boolean
    readonly bigint: boolean
  }

  /**
   * @since 2.0.0
   * @category models
   */
  export type Frequency = MetricKeyType<string, MetricState.MetricState.Frequency> & {
    readonly [FrequencyKeyTypeTypeId]: FrequencyKeyTypeTypeId
    readonly preregisteredWords: ReadonlyArray<string>
  }

  /**
   * @since 2.0.0
   * @category models
   */
  export type Gauge<A extends (number | bigint)> = MetricKeyType<A, MetricState.MetricState.Gauge<A>> & {
    readonly [GaugeKeyTypeTypeId]: GaugeKeyTypeTypeId
    readonly bigint: boolean
  }

  /**
   * @since 2.0.0
   * @category models
   */
  export type Histogram = MetricKeyType<number, MetricState.MetricState.Histogram> & {
    readonly [HistogramKeyTypeTypeId]: HistogramKeyTypeTypeId
    readonly boundaries: MetricBoundaries.MetricBoundaries
  }

  /**
   * @since 2.0.0
   * @category models
   */
  export type Summary = MetricKeyType<readonly [number, number], MetricState.MetricState.Summary> & {
    readonly [SummaryKeyTypeTypeId]: SummaryKeyTypeTypeId
    readonly maxAge: Duration.Duration
    readonly maxSize: number
    readonly error: number
    readonly quantiles: ReadonlyArray<number>
  }

  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<in In, out Out> {
    readonly [MetricKeyTypeTypeId]: {
      readonly _In: Types.Contravariant<In>
      readonly _Out: Types.Covariant<Out>
    }
  }

  /**
   * @since 2.0.0
   * @category models
   */
  export type InType<Type extends MetricKeyType<any, any>> = [Type] extends [
    {
      readonly [MetricKeyTypeTypeId]: {
        readonly _In: (_: infer In) => void
      }
    }
  ] ? In
    : never

  /**
   * @since 2.0.0
   * @category models
   */
  export type OutType<Type extends MetricKeyType<any, any>> = [Type] extends [
    {
      readonly [MetricKeyTypeTypeId]: {
        readonly _Out: (_: never) => infer Out
      }
    }
  ] ? Out
    : never
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const counter: <A extends number | bigint>() => MetricKeyType.Counter<A> = internal.counter

/**
 * @since 2.0.0
 * @category constructors
 */
export const frequency: (
  options?: {
    readonly preregisteredWords?: ReadonlyArray<string> | undefined
  } | undefined
) => MetricKeyType.Frequency = internal.frequency

/**
 * @since 2.0.0
 * @category constructors
 */
export const gauge: <A extends number | bigint>() => MetricKeyType.Gauge<A> = internal.gauge

/**
 * @since 2.0.0
 * @category constructors
 */
export const histogram: (boundaries: MetricBoundaries.MetricBoundaries) => MetricKeyType.Histogram = internal.histogram

/**
 * @since 2.0.0
 * @category constructors
 */
export const summary: (
  options: {
    readonly maxAge: Duration.DurationInput
    readonly maxSize: number
    readonly error: number
    readonly quantiles: ReadonlyArray<number>
  }
) => MetricKeyType.Summary = internal.summary

/**
 * @since 2.0.0
 * @category refinements
 */
export const isMetricKeyType: (u: unknown) => u is MetricKeyType<unknown, unknown> = internal.isMetricKeyType

/**
 * @since 2.0.0
 * @category refinements
 */
export const isCounterKey: (u: unknown) => u is MetricKeyType.Counter<number | bigint> = internal.isCounterKey

/**
 * @since 2.0.0
 * @category refinements
 */
export const isFrequencyKey: (u: unknown) => u is MetricKeyType.Frequency = internal.isFrequencyKey

/**
 * @since 2.0.0
 * @category refinements
 */
export const isGaugeKey: (u: unknown) => u is MetricKeyType.Gauge<number | bigint> = internal.isGaugeKey

/**
 * @since 2.0.0
 * @category refinements
 */
export const isHistogramKey: (u: unknown) => u is MetricKeyType.Histogram = internal.isHistogramKey

/**
 * @since 2.0.0
 * @category refinements
 */
export const isSummaryKey: (u: unknown) => u is MetricKeyType.Summary = internal.isSummaryKey
