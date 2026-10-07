import * as Arr from "../../Array.js"
import * as Duration from "../../Duration.js"
import type { LazyArg } from "../../Function.js"
import { dual, pipe } from "../../Function.js"
import type * as MetricHook from "../../MetricHook.js"
import type * as MetricKey from "../../MetricKey.js"
import type * as MetricState from "../../MetricState.js"
import * as number from "../../Number.js"
import * as Option from "../../Option.js"
import { pipeArguments } from "../../Pipeable.js"
import * as metricState from "./state.js"

/** @internal */
const MetricHookSymbolKey = "effect/MetricHook"

/** @internal */
export const MetricHookTypeId: MetricHook.MetricHookTypeId = Symbol.for(
  MetricHookSymbolKey
) as MetricHook.MetricHookTypeId

const metricHookVariance = {
  /* c8 ignore next */
  _In: (_: unknown) => _,
  /* c8 ignore next */
  _Out: (_: never) => _
}

/** @internal */
export const make = <In, Out>(
  options: {
    readonly get: LazyArg<Out>
    readonly update: (input: In) => void
    readonly modify: (input: In) => void
  }
): MetricHook.MetricHook<In, Out> => ({
  [MetricHookTypeId]: metricHookVariance,
  pipe() {
    return pipeArguments(this, arguments)
  },
  ...options
})

/** @internal */
export const onModify = dual<
  <In, Out>(f: (input: In) => void) => (self: MetricHook.MetricHook<In, Out>) => MetricHook.MetricHook<In, Out>,
  <In, Out>(self: MetricHook.MetricHook<In, Out>, f: (input: In) => void) => MetricHook.MetricHook<In, Out>
>(2, (self, f) => ({
  [MetricHookTypeId]: metricHookVariance,
  pipe() {
    return pipeArguments(this, arguments)
  },
  get: self.get,
  update: self.update,
  modify: (input) => {
    self.modify(input)
    return f(input)
  }
}))

/** @internal */
export const onUpdate = dual<
  <In, Out>(f: (input: In) => void) => (self: MetricHook.MetricHook<In, Out>) => MetricHook.MetricHook<In, Out>,
  <In, Out>(self: MetricHook.MetricHook<In, Out>, f: (input: In) => void) => MetricHook.MetricHook<In, Out>
>(2, (self, f) => ({
  [MetricHookTypeId]: metricHookVariance,
  pipe() {
    return pipeArguments(this, arguments)
  },
  get: self.get,
  update: (input) => {
    self.update(input)
    return f(input)
  },
  modify: self.modify
}))

const bigint0 = BigInt(0)

/** @internal */
export const counter = <A extends (number | bigint)>(
  key: MetricKey.MetricKey.Counter<A>
): MetricHook.MetricHook.Counter<A> => {
  let sum: A = key.keyType.bigint ? bigint0 as A : 0 as A
  const canUpdate = key.keyType.incremental
    ? key.keyType.bigint
      ? (value: A) => value >= bigint0
      : (value: A) => value >= 0
    : (_value: A) => true
  const update = (value: A) => {
    if (canUpdate(value)) {
      sum = (sum as any) + value
    }
  }
  return make({
    get: () => metricState.counter(sum as number) as unknown as MetricState.MetricState.Counter<A>,
    update,
    modify: update
  })
}

/** @internal */
export const frequency = (key: MetricKey.MetricKey.Frequency): MetricHook.MetricHook.Frequency => {
  const values = new Map<string, number>()
  for (const word of key.keyType.preregisteredWords) {
    values.set(word, 0)
  }
  const update = (word: string) => {
    const slotCount = values.get(word) ?? 0
    values.set(word, slotCount + 1)
  }
  return make({
    get: () => metricState.frequency(values),
    update,
    modify: update
  })
}

/** @internal */
export const gauge: {
  (key: MetricKey.MetricKey.Gauge<number>, startAt: number): MetricHook.MetricHook.Gauge<number>
  (key: MetricKey.MetricKey.Gauge<bigint>, startAt: bigint): MetricHook.MetricHook.Gauge<bigint>
} = <A extends (number | bigint)>(
  _key: MetricKey.MetricKey.Gauge<A>,
  startAt: A
): MetricHook.MetricHook.Gauge<A> => {
  let value = startAt
  return make({
    get: () => metricState.gauge(value as number) as unknown as MetricState.MetricState.Gauge<A>,
    update: (v) => {
      value = v
    },
    modify: (v) => {
      value = (value as any) + v
    }
  })
}

/** @internal */
export const histogram = (key: MetricKey.MetricKey.Histogram): MetricHook.MetricHook.Histogram => {
  const bounds = key.keyType.boundaries.values
  const size = bounds.length
  const values = new Uint32Array(size + 1)
  // NOTE: while 64-bit floating point precision shoule be enough for any
  // practical histogram boundary values, there is still a small chance that
  // precision will be lost with very large / very small numbers. If we find
  // that is the case, a more complex approach storing the histogram boundary
  // values as a tuple of `[original: string, numeric: number]` may be warranted
  const boundaries = new Float64Array(size)
  let count = 0
  let sum = 0
  let min = Number.MAX_VALUE
  let max = Number.MIN_VALUE

  pipe(
    bounds,
    Arr.sort(number.Order),
    Arr.map((n, i) => {
      boundaries[i] = n
    })
  )

  // Insert the value into the right bucket with a binary search
  const update = (value: number) => {
    let from = 0
    let to = size
    while (from !== to) {
      const mid = Math.floor(from + (to - from) / 2)
      const boundary = boundaries[mid]
      if (value <= boundary) {
        to = mid
      } else {
        from = mid
      }
      // The special case when to / from have a distance of one
      if (to === from + 1) {
        if (value <= boundaries[from]) {
          to = from
        } else {
          from = to
        }
      }
    }
    values[from] = values[from]! + 1
    count = count + 1
    sum = sum + value
    if (value < min) {
      min = value
    }
    if (value > max) {
      max = value
    }
  }

  const getBuckets = (): ReadonlyArray<readonly [number, number]> => {
    const builder: Array<readonly [number, number]> = Arr.allocate(size) as any
    let cumulated = 0
    for (let i = 0; i < size; i++) {
      const boundary = boundaries[i]
      const value = values[i]
      cumulated = cumulated + value
      builder[i] = [boundary, cumulated]
    }
    return builder
  }

  return make({
    get: () =>
      metricState.histogram({
        buckets: getBuckets(),
        count,
        min,
        max,
        sum
      }),
    update,
    modify: update
  })
}

/** @internal */
export const summary = (key: MetricKey.MetricKey.Summary): MetricHook.MetricHook.Summary => {
  const { error, maxAge, maxSize, quantiles } = key.keyType
  const sortedQuantiles = pipe(quantiles, Arr.sort(number.Order))
  const values = Arr.allocate<readonly [number, number]>(maxSize)

  let head = 0
  let count = 0
  let sum = 0
  let min = 0
  let max = 0

  // Just before the snapshot we filter out all values older than maxAge
  const snapshot = (now: number): ReadonlyArray<readonly [number, Option.Option<number>]> => {
    const builder: Array<number> = []
    // If the buffer is not full yet it contains valid items at the 0..last
    // indices and null values at the rest of the positions.
    //
    // If the buffer is already full then all elements contains a valid
    // measurement with timestamp.
    //
    // At any given point in time we can enumerate all the non-null elements in
    // the buffer and filter them by timestamp to get a valid view of a time
    // window.
    //
    // The order does not matter because it gets sorted before passing to
    // `calculateQuantiles`.
    let i = 0
    while (i !== maxSize - 1) {
      const item = values[i]
      if (item != null) {
        const [t, v] = item
        const age = Duration.millis(now - t)
        if (Duration.greaterThanOrEqualTo(age, Duration.zero) && Duration.lessThanOrEqualTo(age, maxAge)) {
          builder.push(v)
        }
      }
      i = i + 1
    }
    return calculateQuantiles(
      error,
      sortedQuantiles,
      Arr.sort(builder, number.Order)
    )
  }

  const observe = (value: number, timestamp: number) => {
    if (maxSize > 0) {
      head = head + 1
      const target = head % maxSize
      values[target] = [timestamp, value] as const
    }

    min = count === 0 ? value : Math.min(min, value)
    max = count === 0 ? value : Math.max(max, value)

    count = count + 1
    sum = sum + value
  }

  return make({
    get: () =>
      metricState.summary({
        error,
        quantiles: snapshot(Date.now()),
        count,
        min,
        max,
        sum
      }),
    update: ([value, timestamp]) => observe(value, timestamp),
    modify: ([value, timestamp]) => observe(value, timestamp)
  })
}

/** @internal */
interface ResolvedQuantile {
  /**
   * The quantile that shall be resolved.
   */
  readonly quantile: number
  /**
   * `Some<number>` if a value for the quantile could be found, otherwise
   * `None`.
   */
  readonly value: Option.Option<number>
  /**
   * How many samples have been consumed prior to this quantile.
   */
  readonly consumed: number
  /**
   * The rest of the samples after the quantile has been resolved.
   */
  readonly rest: ReadonlyArray<number>
}

/** @internal */
const calculateQuantiles = (
  error: number,
  sortedQuantiles: ReadonlyArray<number>,
  sortedSamples: ReadonlyArray<number>
): ReadonlyArray<readonly [number, Option.Option<number>]> => {
  // The number of samples examined
  const sampleCount = sortedSamples.length
  if (!Arr.isNonEmptyReadonlyArray(sortedQuantiles)) {
    return Arr.empty()
  }
  const head = sortedQuantiles[0]
  const tail = sortedQuantiles.slice(1)
  const resolvedHead = resolveQuantile(
    error,
    sampleCount,
    Option.none(),
    0,
    head,
    sortedSamples
  )
  const resolved = Arr.of(resolvedHead)
  tail.forEach((quantile) => {
    resolved.push(
      resolveQuantile(
        error,
        sampleCount,
        resolvedHead.value,
        resolvedHead.consumed,
        quantile,
        resolvedHead.rest
      )
    )
  })
  return Arr.map(resolved, (rq) => [rq.quantile, rq.value] as const)
}

/** @internal */
const resolveQuantile = (
  error: number,
  sampleCount: number,
  current: Option.Option<number>,
  consumed: number,
  quantile: number,
  rest: ReadonlyArray<number>
): ResolvedQuantile => {
  let error_1 = error
  let sampleCount_1 = sampleCount
  let current_1 = current
  let consumed_1 = consumed
  let quantile_1 = quantile
  let rest_1 = rest
  let error_2 = error
  let sampleCount_2 = sampleCount
  let current_2 = current
  let consumed_2 = consumed
  let quantile_2 = quantile
  let rest_2 = rest
  // eslint-disable-next-line no-constant-condition
  while (1) {
    // If the remaining list of samples is empty, there is nothing more to resolve
    if (!Arr.isNonEmptyReadonlyArray(rest_1)) {
      return {
        quantile: quantile_1,
        value: Option.none(),
        consumed: consumed_1,
        rest: []
      }
    }
    // If the quantile is the 100% quantile, we can take the maximum of all the
    // remaining values as the result
    if (quantile_1 === 1) {
      return {
        quantile: quantile_1,
        value: Option.some(Arr.lastNonEmpty(rest_1)),
        consumed: consumed_1 + rest_1.length,
        rest: []
      }
    }
    // Split into two chunks - the first chunk contains all elements of the same
    // value as the chunk head
    const headValue = Arr.headNonEmpty(rest_1) // Get head value since rest_1 is non-empty
    const sameHead = Arr.span(rest_1, (n) => n === headValue)
    // How many elements do we want to accept for this quantile
    const desired = quantile_1 * sampleCount_1
    // The error margin
    const allowedError = (error_1 / 2) * desired
    // Taking into account the elements consumed from the samples so far and the
    // number of same elements at the beginning of the chunk, calculate the number
    // of elements we would have if we selected the current head as result
    const candConsumed = consumed_1 + sameHead[0].length
    const candError = Math.abs(candConsumed - desired)
    // If we haven't got enough elements yet, recurse
    if (candConsumed < desired - allowedError) {
      error_2 = error_1
      sampleCount_2 = sampleCount_1
      current_2 = Arr.head(rest_1)
      consumed_2 = candConsumed
      quantile_2 = quantile_1
      rest_2 = sameHead[1]
      error_1 = error_2
      sampleCount_1 = sampleCount_2
      current_1 = current_2
      consumed_1 = consumed_2
      quantile_1 = quantile_2
      rest_1 = rest_2
      continue
    }
    // If consuming this chunk leads to too many elements (rank is too high)
    if (candConsumed > desired + allowedError) {
      const valueToReturn = Option.isNone(current_1)
        ? Option.some(headValue)
        : current_1
      return {
        quantile: quantile_1,
        value: valueToReturn,
        consumed: consumed_1,
        rest: rest_1
      }
    }
    // If we are in the target interval, select the current head and hand back the leftover after dropping all elements
    // from the sample chunk that are equal to the current head
    switch (current_1._tag) {
      case "None": {
        error_2 = error_1
        sampleCount_2 = sampleCount_1
        current_2 = Arr.head(rest_1)
        consumed_2 = candConsumed
        quantile_2 = quantile_1
        rest_2 = sameHead[1]
        error_1 = error_2
        sampleCount_1 = sampleCount_2
        current_1 = current_2
        consumed_1 = consumed_2
        quantile_1 = quantile_2
        rest_1 = rest_2
        continue
      }
      case "Some": {
        const prevError = Math.abs(desired - current_1.value)
        if (candError < prevError) {
          error_2 = error_1
          sampleCount_2 = sampleCount_1
          current_2 = Arr.head(rest_1)
          consumed_2 = candConsumed
          quantile_2 = quantile_1
          rest_2 = sameHead[1]
          error_1 = error_2
          sampleCount_1 = sampleCount_2
          current_1 = current_2
          consumed_1 = consumed_2
          quantile_1 = quantile_2
          rest_1 = rest_2
          continue
        }
        return {
          quantile: quantile_1,
          value: Option.some(current_1.value),
          consumed: consumed_1,
          rest: rest_1
        }
      }
    }
  }
  throw new Error(
    "BUG: MetricHook.resolveQuantiles - please report an issue at https://github.com/Effect-TS/effect/issues"
  )
}
