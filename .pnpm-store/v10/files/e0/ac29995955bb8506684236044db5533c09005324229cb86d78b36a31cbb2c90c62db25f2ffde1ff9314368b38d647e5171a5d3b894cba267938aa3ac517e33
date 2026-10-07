import * as Duration from "../../Duration.js"
import * as Equal from "../../Equal.js"
import { pipe } from "../../Function.js"
import * as Hash from "../../Hash.js"
import type * as MetricBoundaries from "../../MetricBoundaries.js"
import type * as MetricKeyType from "../../MetricKeyType.js"
import { pipeArguments } from "../../Pipeable.js"
import { hasProperty } from "../../Predicate.js"

/** @internal */
const MetricKeyTypeSymbolKey = "effect/MetricKeyType"

/** @internal */
export const MetricKeyTypeTypeId: MetricKeyType.MetricKeyTypeTypeId = Symbol.for(
  MetricKeyTypeSymbolKey
) as MetricKeyType.MetricKeyTypeTypeId

/** @internal */
const CounterKeyTypeSymbolKey = "effect/MetricKeyType/Counter"

/** @internal */
export const CounterKeyTypeTypeId: MetricKeyType.CounterKeyTypeTypeId = Symbol.for(
  CounterKeyTypeSymbolKey
) as MetricKeyType.CounterKeyTypeTypeId

/** @internal */
const FrequencyKeyTypeSymbolKey = "effect/MetricKeyType/Frequency"

/** @internal */
export const FrequencyKeyTypeTypeId: MetricKeyType.FrequencyKeyTypeTypeId = Symbol.for(
  FrequencyKeyTypeSymbolKey
) as MetricKeyType.FrequencyKeyTypeTypeId

/** @internal */
const GaugeKeyTypeSymbolKey = "effect/MetricKeyType/Gauge"

/** @internal */
export const GaugeKeyTypeTypeId: MetricKeyType.GaugeKeyTypeTypeId = Symbol.for(
  GaugeKeyTypeSymbolKey
) as MetricKeyType.GaugeKeyTypeTypeId

/** @internal */
const HistogramKeyTypeSymbolKey = "effect/MetricKeyType/Histogram"

/** @internal */
export const HistogramKeyTypeTypeId: MetricKeyType.HistogramKeyTypeTypeId = Symbol.for(
  HistogramKeyTypeSymbolKey
) as MetricKeyType.HistogramKeyTypeTypeId

/** @internal */
const SummaryKeyTypeSymbolKey = "effect/MetricKeyType/Summary"

/** @internal */
export const SummaryKeyTypeTypeId: MetricKeyType.SummaryKeyTypeTypeId = Symbol.for(
  SummaryKeyTypeSymbolKey
) as MetricKeyType.SummaryKeyTypeTypeId

const metricKeyTypeVariance = {
  /* c8 ignore next */
  _In: (_: unknown) => _,
  /* c8 ignore next */
  _Out: (_: never) => _
}

/** @internal */
class CounterKeyType<A extends (number | bigint)> implements MetricKeyType.MetricKeyType.Counter<A> {
  readonly [MetricKeyTypeTypeId] = metricKeyTypeVariance
  readonly [CounterKeyTypeTypeId]: MetricKeyType.CounterKeyTypeTypeId = CounterKeyTypeTypeId
  constructor(readonly incremental: boolean, readonly bigint: boolean) {
    this._hash = Hash.string(CounterKeyTypeSymbolKey)
  }
  readonly _hash: number;
  [Hash.symbol](): number {
    return this._hash
  }
  [Equal.symbol](that: unknown): boolean {
    return isCounterKey(that)
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
}

const FrequencyKeyTypeHash = Hash.string(FrequencyKeyTypeSymbolKey)

/** @internal */
class FrequencyKeyType implements MetricKeyType.MetricKeyType.Frequency {
  readonly [MetricKeyTypeTypeId] = metricKeyTypeVariance
  readonly [FrequencyKeyTypeTypeId]: MetricKeyType.FrequencyKeyTypeTypeId = FrequencyKeyTypeTypeId
  constructor(readonly preregisteredWords: ReadonlyArray<string>) {}
  [Hash.symbol](): number {
    return FrequencyKeyTypeHash
  }
  [Equal.symbol](that: unknown): boolean {
    return isFrequencyKey(that)
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
}

const GaugeKeyTypeHash = Hash.string(GaugeKeyTypeSymbolKey)

/** @internal */
class GaugeKeyType<A extends (number | bigint)> implements MetricKeyType.MetricKeyType.Gauge<A> {
  readonly [MetricKeyTypeTypeId] = metricKeyTypeVariance
  readonly [GaugeKeyTypeTypeId]: MetricKeyType.GaugeKeyTypeTypeId = GaugeKeyTypeTypeId
  constructor(readonly bigint: boolean) {}
  [Hash.symbol](): number {
    return GaugeKeyTypeHash
  }
  [Equal.symbol](that: unknown): boolean {
    return isGaugeKey(that)
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export class HistogramKeyType implements MetricKeyType.MetricKeyType.Histogram {
  readonly [MetricKeyTypeTypeId] = metricKeyTypeVariance
  readonly [HistogramKeyTypeTypeId]: MetricKeyType.HistogramKeyTypeTypeId = HistogramKeyTypeTypeId
  constructor(readonly boundaries: MetricBoundaries.MetricBoundaries) {
    this._hash = pipe(
      Hash.string(HistogramKeyTypeSymbolKey),
      Hash.combine(Hash.hash(this.boundaries))
    )
  }
  readonly _hash: number;
  [Hash.symbol](): number {
    return this._hash
  }
  [Equal.symbol](that: unknown): boolean {
    return isHistogramKey(that) && Equal.equals(this.boundaries, that.boundaries)
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
class SummaryKeyType implements MetricKeyType.MetricKeyType.Summary {
  readonly [MetricKeyTypeTypeId] = metricKeyTypeVariance
  readonly [SummaryKeyTypeTypeId]: MetricKeyType.SummaryKeyTypeTypeId = SummaryKeyTypeTypeId
  constructor(
    readonly maxAge: Duration.Duration,
    readonly maxSize: number,
    readonly error: number,
    readonly quantiles: ReadonlyArray<number>
  ) {
    this._hash = pipe(
      Hash.string(SummaryKeyTypeSymbolKey),
      Hash.combine(Hash.hash(this.maxAge)),
      Hash.combine(Hash.hash(this.maxSize)),
      Hash.combine(Hash.hash(this.error)),
      Hash.combine(Hash.array(this.quantiles))
    )
  }
  readonly _hash: number;
  [Hash.symbol](): number {
    return this._hash
  }
  [Equal.symbol](that: unknown): boolean {
    return isSummaryKey(that) &&
      Equal.equals(this.maxAge, that.maxAge) &&
      this.maxSize === that.maxSize &&
      this.error === that.error &&
      Equal.equals(this.quantiles, that.quantiles)
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const counter: <A extends number | bigint>(options?: {
  readonly bigint: boolean
  readonly incremental: boolean
}) => CounterKeyType<A> = (options) =>
  new CounterKeyType(
    options?.incremental ?? false,
    options?.bigint ?? false
  )

/** @internal */
export const frequency = (options?: {
  readonly preregisteredWords?: ReadonlyArray<string> | undefined
}): MetricKeyType.MetricKeyType.Frequency => new FrequencyKeyType(options?.preregisteredWords ?? [])

/** @internal */
export const gauge: <A extends number | bigint>(options?: {
  readonly bigint: boolean
}) => GaugeKeyType<A> = (options) =>
  new GaugeKeyType(
    options?.bigint ?? false
  )

/** @internal */
export const histogram = (boundaries: MetricBoundaries.MetricBoundaries): MetricKeyType.MetricKeyType.Histogram => {
  return new HistogramKeyType(boundaries)
}

/** @internal */
export const summary = (
  options: {
    readonly maxAge: Duration.DurationInput
    readonly maxSize: number
    readonly error: number
    readonly quantiles: ReadonlyArray<number>
  }
): MetricKeyType.MetricKeyType.Summary => {
  return new SummaryKeyType(Duration.decode(options.maxAge), options.maxSize, options.error, options.quantiles)
}

/** @internal */
export const isMetricKeyType = (u: unknown): u is MetricKeyType.MetricKeyType<unknown, unknown> =>
  hasProperty(u, MetricKeyTypeTypeId)

/** @internal */
export const isCounterKey = (u: unknown): u is MetricKeyType.MetricKeyType.Counter<number | bigint> =>
  hasProperty(u, CounterKeyTypeTypeId)

/** @internal */
export const isFrequencyKey = (u: unknown): u is MetricKeyType.MetricKeyType.Frequency =>
  hasProperty(u, FrequencyKeyTypeTypeId)

/** @internal */
export const isGaugeKey = (u: unknown): u is MetricKeyType.MetricKeyType.Gauge<number | bigint> =>
  hasProperty(u, GaugeKeyTypeTypeId)

/** @internal */
export const isHistogramKey = (u: unknown): u is MetricKeyType.MetricKeyType.Histogram =>
  hasProperty(u, HistogramKeyTypeTypeId)

/** @internal */
export const isSummaryKey = (u: unknown): u is MetricKeyType.MetricKeyType.Summary =>
  hasProperty(u, SummaryKeyTypeTypeId)
