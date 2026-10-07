/**
 * @since 2.0.0
 */
import type * as Duration from "./Duration.js"
import type * as Equal from "./Equal.js"
import * as internal from "./internal/metric/key.js"
import type * as MetricBoundaries from "./MetricBoundaries.js"
import type * as MetricKeyType from "./MetricKeyType.js"
import type * as MetricLabel from "./MetricLabel.js"
import type * as Option from "./Option.js"
import type { Pipeable } from "./Pipeable.js"
import type * as Types from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const MetricKeyTypeId: unique symbol = internal.MetricKeyTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type MetricKeyTypeId = typeof MetricKeyTypeId

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
export interface MetricKey<out Type extends MetricKeyType.MetricKeyType<any, any>>
  extends MetricKey.Variance<Type>, Equal.Equal, Pipeable
{
  readonly name: string
  readonly keyType: Type
  readonly description: Option.Option<string>
  readonly tags: ReadonlyArray<MetricLabel.MetricLabel>
}

/**
 * @since 2.0.0
 */
export declare namespace MetricKey {
  /**
   * @since 2.0.0
   * @category models
   */
  export type Untyped = MetricKey<any>

  /**
   * @since 2.0.0
   * @category models
   */
  export type Counter<A extends (number | bigint)> = MetricKey<MetricKeyType.MetricKeyType.Counter<A>>

  /**
   * @since 2.0.0
   * @category models
   */
  export type Gauge<A extends (number | bigint)> = MetricKey<MetricKeyType.MetricKeyType.Gauge<A>>

  /**
   * @since 2.0.0
   * @category models
   */
  export type Frequency = MetricKey<MetricKeyType.MetricKeyType.Frequency>

  /**
   * @since 2.0.0
   * @category models
   */
  export type Histogram = MetricKey<MetricKeyType.MetricKeyType.Histogram>

  /**
   * @since 2.0.0
   * @category models
   */
  export type Summary = MetricKey<MetricKeyType.MetricKeyType.Summary>

  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<out Type> {
    readonly [MetricKeyTypeId]: {
      _Type: Types.Covariant<Type>
    }
  }
}

/**
 * @since 2.0.0
 * @category refinements
 */
export const isMetricKey: (u: unknown) => u is MetricKey<MetricKeyType.MetricKeyType<unknown, unknown>> =
  internal.isMetricKey

/**
 * Creates a metric key for a counter, with the specified name.
 *
 * @since 2.0.0
 * @category constructors
 */
export const counter: {
  /**
   * Creates a metric key for a counter, with the specified name.
   *
   * @since 2.0.0
   * @category constructors
   */
  (
    name: string,
    options?: {
      readonly description?: string | undefined
      readonly bigint?: false | undefined
      readonly incremental?: boolean | undefined
    }
  ): MetricKey.Counter<number>
  /**
   * Creates a metric key for a counter, with the specified name.
   *
   * @since 2.0.0
   * @category constructors
   */
  (
    name: string,
    options: {
      readonly description?: string | undefined
      readonly bigint: true
      readonly incremental?: boolean | undefined
    }
  ): MetricKey.Counter<bigint>
} = internal.counter

/**
 * Creates a metric key for a categorical frequency table, with the specified
 * name.
 *
 * @since 2.0.0
 * @category constructors
 */
export const frequency: (
  name: string,
  options?:
    | {
      readonly description?: string | undefined
      readonly preregisteredWords?: ReadonlyArray<string> | undefined
    }
    | undefined
) => MetricKey.Frequency = internal.frequency

/**
 * Creates a metric key for a gauge, with the specified name.
 *
 * @since 2.0.0
 * @category constructors
 */
export const gauge: {
  /**
   * Creates a metric key for a gauge, with the specified name.
   *
   * @since 2.0.0
   * @category constructors
   */
  (
    name: string,
    options?: {
      readonly description?: string | undefined
      readonly bigint?: false | undefined
    }
  ): MetricKey.Gauge<number>
  /**
   * Creates a metric key for a gauge, with the specified name.
   *
   * @since 2.0.0
   * @category constructors
   */
  (
    name: string,
    options: {
      readonly description?: string | undefined
      readonly bigint: true
    }
  ): MetricKey.Gauge<bigint>
} = internal.gauge

/**
 * Creates a metric key for a histogram, with the specified name and boundaries.
 *
 * @since 2.0.0
 * @category constructors
 */
export const histogram: (
  name: string,
  boundaries: MetricBoundaries.MetricBoundaries,
  description?: string
) => MetricKey.Histogram = internal.histogram

/**
 * Creates a metric key for a summary, with the specified name, maxAge,
 * maxSize, error, and quantiles.
 *
 * @since 2.0.0
 * @category constructors
 */
export const summary: (
  options: {
    readonly name: string
    readonly maxAge: Duration.DurationInput
    readonly maxSize: number
    readonly error: number
    readonly quantiles: ReadonlyArray<number>
    readonly description?: string | undefined
  }
) => MetricKey.Summary = internal.summary

/**
 * Returns a new `MetricKey` with the specified tag appended.
 *
 * @since 2.0.0
 * @category constructors
 */
export const tagged: {
  /**
   * Returns a new `MetricKey` with the specified tag appended.
   *
   * @since 2.0.0
   * @category constructors
   */
  (key: string, value: string): <Type extends MetricKeyType.MetricKeyType<any, any>>(self: MetricKey<Type>) => MetricKey<Type>
  /**
   * Returns a new `MetricKey` with the specified tag appended.
   *
   * @since 2.0.0
   * @category constructors
   */
  <Type extends MetricKeyType.MetricKeyType<any, any>>(self: MetricKey<Type>, key: string, value: string): MetricKey<Type>
} = internal.tagged

/**
 * Returns a new `MetricKey` with the specified tags appended.
 *
 * @since 2.0.0
 * @category constructors
 */
export const taggedWithLabels: {
  /**
   * Returns a new `MetricKey` with the specified tags appended.
   *
   * @since 2.0.0
   * @category constructors
   */
  (extraTags: ReadonlyArray<MetricLabel.MetricLabel>): <Type extends MetricKeyType.MetricKeyType<any, any>>(self: MetricKey<Type>) => MetricKey<Type>
  /**
   * Returns a new `MetricKey` with the specified tags appended.
   *
   * @since 2.0.0
   * @category constructors
   */
  <Type extends MetricKeyType.MetricKeyType<any, any>>(self: MetricKey<Type>, extraTags: ReadonlyArray<MetricLabel.MetricLabel>): MetricKey<Type>
} = internal.taggedWithLabels
