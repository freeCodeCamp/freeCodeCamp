import * as Arr from "../../Array.js"
import * as Chunk from "../../Chunk.js"
import * as Equal from "../../Equal.js"
import { pipe } from "../../Function.js"
import * as Hash from "../../Hash.js"
import type * as MetricBoundaries from "../../MetricBoundaries.js"
import { pipeArguments } from "../../Pipeable.js"
import { hasProperty } from "../../Predicate.js"

/** @internal */
const MetricBoundariesSymbolKey = "effect/MetricBoundaries"

/** @internal */
export const MetricBoundariesTypeId: MetricBoundaries.MetricBoundariesTypeId = Symbol.for(
  MetricBoundariesSymbolKey
) as MetricBoundaries.MetricBoundariesTypeId

/** @internal */
class MetricBoundariesImpl implements MetricBoundaries.MetricBoundaries {
  readonly [MetricBoundariesTypeId]: MetricBoundaries.MetricBoundariesTypeId = MetricBoundariesTypeId
  constructor(readonly values: ReadonlyArray<number>) {
    this._hash = pipe(
      Hash.string(MetricBoundariesSymbolKey),
      Hash.combine(Hash.array(this.values))
    )
  }
  readonly _hash: number;
  [Hash.symbol](): number {
    return this._hash
  }
  [Equal.symbol](u: unknown): boolean {
    return isMetricBoundaries(u) && Equal.equals(this.values, u.values)
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
export const isMetricBoundaries = (u: unknown): u is MetricBoundaries.MetricBoundaries =>
  hasProperty(u, MetricBoundariesTypeId)

/** @internal */
export const fromIterable = (iterable: Iterable<number>): MetricBoundaries.MetricBoundaries => {
  const values = pipe(
    iterable,
    Arr.appendAll(Chunk.of(Number.POSITIVE_INFINITY)),
    Arr.dedupe
  )
  return new MetricBoundariesImpl(values)
}

/** @internal */
export const linear = (options: {
  readonly start: number
  readonly width: number
  readonly count: number
}): MetricBoundaries.MetricBoundaries =>
  pipe(
    Arr.makeBy(options.count - 1, (i) => options.start + i * options.width),
    Chunk.unsafeFromArray,
    fromIterable
  )

/** @internal */
export const exponential = (options: {
  readonly start: number
  readonly factor: number
  readonly count: number
}): MetricBoundaries.MetricBoundaries =>
  pipe(
    Arr.makeBy(options.count - 1, (i) => options.start * Math.pow(options.factor, i)),
    Chunk.unsafeFromArray,
    fromIterable
  )
