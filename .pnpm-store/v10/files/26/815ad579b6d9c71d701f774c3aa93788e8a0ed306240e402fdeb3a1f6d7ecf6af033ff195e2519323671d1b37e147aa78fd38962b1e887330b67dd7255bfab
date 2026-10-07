import * as Arr from "../../Array.js"
import type * as Duration from "../../Duration.js"
import * as Equal from "../../Equal.js"
import { dual, pipe } from "../../Function.js"
import * as Hash from "../../Hash.js"
import type * as MetricBoundaries from "../../MetricBoundaries.js"
import type * as MetricKey from "../../MetricKey.js"
import type * as MetricKeyType from "../../MetricKeyType.js"
import type * as MetricLabel from "../../MetricLabel.js"
import * as Option from "../../Option.js"
import { pipeArguments } from "../../Pipeable.js"
import { hasProperty } from "../../Predicate.js"
import * as metricKeyType from "./keyType.js"
import * as metricLabel from "./label.js"

/** @internal */
const MetricKeySymbolKey = "effect/MetricKey"

/** @internal */
export const MetricKeyTypeId: MetricKey.MetricKeyTypeId = Symbol.for(
  MetricKeySymbolKey
) as MetricKey.MetricKeyTypeId

const metricKeyVariance = {
  /* c8 ignore next */
  _Type: (_: never) => _
}

const arrayEquivilence = Arr.getEquivalence(Equal.equals)

/** @internal */
class MetricKeyImpl<out Type extends MetricKeyType.MetricKeyType<any, any>> implements MetricKey.MetricKey<Type> {
  readonly [MetricKeyTypeId] = metricKeyVariance
  constructor(
    readonly name: string,
    readonly keyType: Type,
    readonly description: Option.Option<string>,
    readonly tags: ReadonlyArray<MetricLabel.MetricLabel> = []
  ) {
    this._hash = pipe(
      Hash.string(this.name + this.description),
      Hash.combine(Hash.hash(this.keyType)),
      Hash.combine(Hash.array(this.tags))
    )
  }
  readonly _hash: number;
  [Hash.symbol](): number {
    return this._hash
  }
  [Equal.symbol](u: unknown): boolean {
    return isMetricKey(u) &&
      this.name === u.name &&
      Equal.equals(this.keyType, u.keyType) &&
      Equal.equals(this.description, u.description) &&
      arrayEquivilence(this.tags, u.tags)
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const isMetricKey = (u: unknown): u is MetricKey.MetricKey<MetricKeyType.MetricKeyType<unknown, unknown>> =>
  hasProperty(u, MetricKeyTypeId)

/** @internal */
export const counter: {
  (name: string, options?: {
    readonly description?: string | undefined
    readonly bigint?: false | undefined
    readonly incremental?: boolean | undefined
  }): MetricKey.MetricKey.Counter<number>
  (name: string, options: {
    readonly description?: string | undefined
    readonly bigint: true
    readonly incremental?: boolean | undefined
  }): MetricKey.MetricKey.Counter<bigint>
} = (name: string, options) =>
  new MetricKeyImpl(
    name,
    metricKeyType.counter(options as any),
    Option.fromNullable(options?.description)
  )

/** @internal */
export const frequency = (name: string, options?: {
  readonly description?: string | undefined
  readonly preregisteredWords?: ReadonlyArray<string> | undefined
}): MetricKey.MetricKey.Frequency =>
  new MetricKeyImpl(name, metricKeyType.frequency(options), Option.fromNullable(options?.description))

/** @internal */
export const gauge: {
  (name: string, options?: {
    readonly description?: string | undefined
    readonly bigint?: false | undefined
  }): MetricKey.MetricKey.Gauge<number>
  (name: string, options: {
    readonly description?: string | undefined
    readonly bigint: true
  }): MetricKey.MetricKey.Gauge<bigint>
} = (name, options) =>
  new MetricKeyImpl(
    name,
    metricKeyType.gauge(options as any),
    Option.fromNullable(options?.description)
  )

/** @internal */
export const histogram = (
  name: string,
  boundaries: MetricBoundaries.MetricBoundaries,
  description?: string
): MetricKey.MetricKey.Histogram =>
  new MetricKeyImpl(
    name,
    metricKeyType.histogram(boundaries),
    Option.fromNullable(description)
  )

/** @internal */
export const summary = (
  options: {
    readonly name: string
    readonly maxAge: Duration.DurationInput
    readonly maxSize: number
    readonly error: number
    readonly quantiles: ReadonlyArray<number>
    readonly description?: string | undefined
  }
): MetricKey.MetricKey.Summary =>
  new MetricKeyImpl(
    options.name,
    metricKeyType.summary(options),
    Option.fromNullable(options.description)
  )

/** @internal */
export const tagged = dual<
  (
    key: string,
    value: string
  ) => <Type extends MetricKeyType.MetricKeyType<any, any>>(
    self: MetricKey.MetricKey<Type>
  ) => MetricKey.MetricKey<Type>,
  <Type extends MetricKeyType.MetricKeyType<any, any>>(
    self: MetricKey.MetricKey<Type>,
    key: string,
    value: string
  ) => MetricKey.MetricKey<Type>
>(3, (self, key, value) => taggedWithLabels(self, [metricLabel.make(key, value)]))

/** @internal */
export const taggedWithLabels = dual<
  (
    extraTags: ReadonlyArray<MetricLabel.MetricLabel>
  ) => <Type extends MetricKeyType.MetricKeyType<any, any>>(
    self: MetricKey.MetricKey<Type>
  ) => MetricKey.MetricKey<Type>,
  <Type extends MetricKeyType.MetricKeyType<any, any>>(
    self: MetricKey.MetricKey<Type>,
    extraTags: ReadonlyArray<MetricLabel.MetricLabel>
  ) => MetricKey.MetricKey<Type>
>(2, (self, extraTags) =>
  extraTags.length === 0
    ? self
    : new MetricKeyImpl(self.name, self.keyType, self.description, Arr.union(self.tags, extraTags)))
