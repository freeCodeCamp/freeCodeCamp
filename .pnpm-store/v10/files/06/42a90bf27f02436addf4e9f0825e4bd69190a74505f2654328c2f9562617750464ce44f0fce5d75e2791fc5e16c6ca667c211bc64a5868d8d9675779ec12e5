/**
 * @since 2.0.0
 */
import * as internal from "./internal/metric/registry.js"
import type * as MetricHook from "./MetricHook.js"
import type * as MetricKey from "./MetricKey.js"
import type * as MetricKeyType from "./MetricKeyType.js"
import type * as MetricPair from "./MetricPair.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const MetricRegistryTypeId: unique symbol = internal.MetricRegistryTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type MetricRegistryTypeId = typeof MetricRegistryTypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface MetricRegistry {
  readonly [MetricRegistryTypeId]: MetricRegistryTypeId
  snapshot(): Array<MetricPair.MetricPair.Untyped>
  get<Type extends MetricKeyType.MetricKeyType<any, any>>(
    key: MetricKey.MetricKey<Type>
  ): MetricHook.MetricHook<
    MetricKeyType.MetricKeyType.InType<typeof key["keyType"]>,
    MetricKeyType.MetricKeyType.OutType<typeof key["keyType"]>
  >
  getCounter<A extends (number | bigint)>(
    key: MetricKey.MetricKey.Counter<A>
  ): MetricHook.MetricHook.Counter<A>
  getFrequency(key: MetricKey.MetricKey.Frequency): MetricHook.MetricHook.Frequency
  getGauge<A extends (number | bigint)>(key: MetricKey.MetricKey.Gauge<A>): MetricHook.MetricHook.Gauge<A>
  getHistogram(key: MetricKey.MetricKey.Histogram): MetricHook.MetricHook.Histogram
  getSummary(key: MetricKey.MetricKey.Summary): MetricHook.MetricHook.Summary
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const make: (_: void) => MetricRegistry = internal.make
