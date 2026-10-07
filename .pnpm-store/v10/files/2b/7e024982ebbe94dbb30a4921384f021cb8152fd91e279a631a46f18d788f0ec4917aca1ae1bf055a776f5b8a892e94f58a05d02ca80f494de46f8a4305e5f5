/**
 * @since 2.0.0
 */
import type { LazyArg } from "./Function.js"
import * as internal from "./internal/metric/hook.js"
import type * as MetricKey from "./MetricKey.js"
import type * as MetricState from "./MetricState.js"
import type { Pipeable } from "./Pipeable.js"
import type * as Types from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const MetricHookTypeId: unique symbol = internal.MetricHookTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type MetricHookTypeId = typeof MetricHookTypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface MetricHook<in In, out Out> extends MetricHook.Variance<In, Out>, Pipeable {
  get(): Out
  update(input: In): void
  modify(input: In): void
}

/**
 * @since 2.0.0
 */
export declare namespace MetricHook {
  /**
   * @since 2.0.0
   * @category models
   */
  export type Root = MetricHook<any, MetricState.MetricState.Untyped>

  /**
   * @since 2.0.0
   * @category models
   */
  export type Untyped = MetricHook<any, any>

  /**
   * @since 2.0.0
   * @category models
   */
  export type Counter<A extends (number | bigint)> = MetricHook<A, MetricState.MetricState.Counter<A>>

  /**
   * @since 2.0.0
   * @category models
   */
  export type Gauge<A extends (number | bigint)> = MetricHook<A, MetricState.MetricState.Gauge<A>>

  /**
   * @since 2.0.0
   * @category models
   */
  export type Frequency = MetricHook<string, MetricState.MetricState.Frequency>

  /**
   * @since 2.0.0
   * @category models
   */
  export type Histogram = MetricHook<number, MetricState.MetricState.Histogram>

  /**
   * @since 2.0.0
   * @category models
   */
  export type Summary = MetricHook<readonly [number, number], MetricState.MetricState.Summary>

  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<in In, out Out> {
    readonly [MetricHookTypeId]: {
      readonly _In: Types.Contravariant<In>
      readonly _Out: Types.Covariant<Out>
    }
  }
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const make: <In, Out>(options: {
  readonly get: LazyArg<Out>
  readonly update: (input: In) => void
  readonly modify: (input: In) => void
}) => MetricHook<In, Out> = internal.make

/**
 * @since 2.0.0
 * @category constructors
 */
export const counter: <A extends (number | bigint)>(key: MetricKey.MetricKey.Counter<A>) => MetricHook.Counter<A> =
  internal.counter

/**
 * @since 2.0.0
 * @category constructors
 */
export const frequency: (_key: MetricKey.MetricKey.Frequency) => MetricHook.Frequency = internal.frequency

/**
 * @since 2.0.0
 * @category constructors
 */
export const gauge: {
  /**
   * @since 2.0.0
   * @category constructors
   */
  (key: MetricKey.MetricKey.Gauge<number>, startAt: number): MetricHook.Gauge<number>
  /**
   * @since 2.0.0
   * @category constructors
   */
  (key: MetricKey.MetricKey.Gauge<bigint>, startAt: bigint): MetricHook.Gauge<bigint>
} = internal.gauge

/**
 * @since 2.0.0
 * @category constructors
 */
export const histogram: (key: MetricKey.MetricKey.Histogram) => MetricHook.Histogram = internal.histogram

/**
 * @since 2.0.0
 * @category constructors
 */
export const summary: (key: MetricKey.MetricKey.Summary) => MetricHook.Summary = internal.summary

/**
 * @since 2.0.0
 * @category utils
 */
export const onUpdate: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <In, Out>(f: (input: In) => void): (self: MetricHook<In, Out>) => MetricHook<In, Out>
  /**
   * @since 2.0.0
   * @category utils
   */
  <In, Out>(self: MetricHook<In, Out>, f: (input: In) => void): MetricHook<In, Out>
} = internal.onUpdate

/**
 * @since 3.6.5
 * @category utils
 */
export const onModify: {
  /**
   * @since 3.6.5
   * @category utils
   */
  <In, Out>(f: (input: In) => void): (self: MetricHook<In, Out>) => MetricHook<In, Out>
  /**
   * @since 3.6.5
   * @category utils
   */
  <In, Out>(self: MetricHook<In, Out>, f: (input: In) => void): MetricHook<In, Out>
} = internal.onModify
