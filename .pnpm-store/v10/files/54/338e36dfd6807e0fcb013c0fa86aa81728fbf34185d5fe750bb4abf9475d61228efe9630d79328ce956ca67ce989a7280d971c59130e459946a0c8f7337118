import * as Arr from "../Array.js"
import * as Clock from "../Clock.js"
import * as Duration from "../Duration.js"
import type * as Effect from "../Effect.js"
import type { LazyArg } from "../Function.js"
import { constVoid, dual, identity, pipe } from "../Function.js"
import { globalValue } from "../GlobalValue.js"
import type * as Metric from "../Metric.js"
import type * as MetricBoundaries from "../MetricBoundaries.js"
import type * as MetricHook from "../MetricHook.js"
import type * as MetricKey from "../MetricKey.js"
import type * as MetricKeyType from "../MetricKeyType.js"
import type * as MetricLabel from "../MetricLabel.js"
import type * as MetricPair from "../MetricPair.js"
import type * as MetricRegistry from "../MetricRegistry.js"
import type * as MetricState from "../MetricState.js"
import { pipeArguments } from "../Pipeable.js"
import * as Cause from "./cause.js"
import * as effect_ from "./core-effect.js"
import * as core from "./core.js"
import * as metricBoundaries from "./metric/boundaries.js"
import * as metricKey from "./metric/key.js"
import * as metricKeyType from "./metric/keyType.js"
import * as metricLabel from "./metric/label.js"
import * as metricRegistry from "./metric/registry.js"

/** @internal */
const MetricSymbolKey = "effect/Metric"

/** @internal */
export const MetricTypeId: Metric.MetricTypeId = Symbol.for(
  MetricSymbolKey
) as Metric.MetricTypeId

const metricVariance = {
  /* c8 ignore next */
  _Type: (_: any) => _,
  /* c8 ignore next */
  _In: (_: unknown) => _,
  /* c8 ignore next */
  _Out: (_: never) => _
}

/** @internal */
export const globalMetricRegistry: MetricRegistry.MetricRegistry = globalValue(
  Symbol.for("effect/Metric/globalMetricRegistry"),
  () => metricRegistry.make()
)

/** @internal */
export const make: Metric.MetricApply = function<Type, In, Out>(
  keyType: Type,
  unsafeUpdate: (input: In, extraTags: ReadonlyArray<MetricLabel.MetricLabel>) => void,
  unsafeValue: (extraTags: ReadonlyArray<MetricLabel.MetricLabel>) => Out,
  unsafeModify: (input: In, extraTags: ReadonlyArray<MetricLabel.MetricLabel>) => void
): Metric.Metric<Type, In, Out> {
  const metric: Metric.Metric<Type, In, Out> = Object.assign(
    <A extends In, E, R>(effect: Effect.Effect<A, E, R>): Effect.Effect<A, E, R> =>
      core.tap(effect, (a) => update(metric, a)),
    {
      [MetricTypeId]: metricVariance,
      keyType,
      unsafeUpdate,
      unsafeValue,
      unsafeModify,
      register() {
        this.unsafeValue([])
        return this as any
      },
      pipe() {
        return pipeArguments(this, arguments)
      }
    } as const
  )
  return metric
}

/** @internal */
export const mapInput = dual<
  <In, In2>(f: (input: In2) => In) => <Type, Out>(self: Metric.Metric<Type, In, Out>) => Metric.Metric<Type, In2, Out>,
  <Type, In, Out, In2>(self: Metric.Metric<Type, In, Out>, f: (input: In2) => In) => Metric.Metric<Type, In2, Out>
>(2, (self, f) =>
  make(
    self.keyType,
    (input, extraTags) => self.unsafeUpdate(f(input), extraTags),
    self.unsafeValue,
    (input, extraTags) => self.unsafeModify(f(input), extraTags)
  ))

/** @internal */
export const counter: {
  (name: string, options?: {
    readonly description?: string | undefined
    readonly bigint?: false | undefined
    readonly incremental?: boolean | undefined
  }): Metric.Metric.Counter<number>
  (name: string, options: {
    readonly description?: string | undefined
    readonly bigint: true
    readonly incremental?: boolean | undefined
  }): Metric.Metric.Counter<bigint>
} = (name, options) => fromMetricKey(metricKey.counter(name, options as any)) as any

/** @internal */
export const frequency = (name: string, options?: {
  readonly description?: string | undefined
  readonly preregisteredWords?: ReadonlyArray<string> | undefined
}): Metric.Metric.Frequency<string> => fromMetricKey(metricKey.frequency(name, options))

/** @internal */
export const withConstantInput = dual<
  <In>(input: In) => <Type, Out>(self: Metric.Metric<Type, In, Out>) => Metric.Metric<Type, unknown, Out>,
  <Type, In, Out>(self: Metric.Metric<Type, In, Out>, input: In) => Metric.Metric<Type, unknown, Out>
>(2, (self, input) => mapInput(self, () => input))

/** @internal */
export const fromMetricKey = <Type extends MetricKeyType.MetricKeyType<any, any>>(
  key: MetricKey.MetricKey<Type>
): Metric.Metric<
  Type,
  MetricKeyType.MetricKeyType.InType<Type>,
  MetricKeyType.MetricKeyType.OutType<Type>
> => {
  let untaggedHook:
    | MetricHook.MetricHook<
      MetricKeyType.MetricKeyType.InType<Type>,
      MetricKeyType.MetricKeyType.OutType<Type>
    >
    | undefined
  const hookCache = new WeakMap<ReadonlyArray<MetricLabel.MetricLabel>, MetricHook.MetricHook<any, any>>()

  const hook = (extraTags: ReadonlyArray<MetricLabel.MetricLabel>): MetricHook.MetricHook<
    MetricKeyType.MetricKeyType.InType<Type>,
    MetricKeyType.MetricKeyType.OutType<Type>
  > => {
    if (extraTags.length === 0) {
      if (untaggedHook !== undefined) {
        return untaggedHook
      }
      untaggedHook = globalMetricRegistry.get(key)
      return untaggedHook
    }

    let hook = hookCache.get(extraTags)
    if (hook !== undefined) {
      return hook
    }
    hook = globalMetricRegistry.get(metricKey.taggedWithLabels(key, extraTags))
    hookCache.set(extraTags, hook)
    return hook
  }

  return make(
    key.keyType,
    (input, extraTags) => hook(extraTags).update(input),
    (extraTags) => hook(extraTags).get(),
    (input, extraTags) => hook(extraTags).modify(input)
  )
}

/** @internal */
export const gauge: {
  (name: string, options?: {
    readonly description?: string | undefined
    readonly bigint?: false | undefined
  }): Metric.Metric.Gauge<number>
  (name: string, options: {
    readonly description?: string | undefined
    readonly bigint: true
  }): Metric.Metric.Gauge<bigint>
} = (name, options) => fromMetricKey(metricKey.gauge(name, options as any)) as any

/** @internal */
export const histogram = (name: string, boundaries: MetricBoundaries.MetricBoundaries, description?: string) =>
  fromMetricKey(metricKey.histogram(name, boundaries, description))

/* @internal */
export const increment = (
  self:
    | Metric.Metric.Counter<number>
    | Metric.Metric.Counter<bigint>
    | Metric.Metric.Gauge<number>
    | Metric.Metric.Gauge<bigint>
): Effect.Effect<void> =>
  metricKeyType.isCounterKey(self.keyType)
    ? update(self as Metric.Metric.Counter<number>, self.keyType.bigint ? BigInt(1) as any : 1)
    : modify(self as Metric.Metric.Gauge<number>, self.keyType.bigint ? BigInt(1) as any : 1)

/* @internal */
export const incrementBy = dual<
  {
    (amount: number): (self: Metric.Metric.Counter<number> | Metric.Metric.Counter<number>) => Effect.Effect<void>
    (amount: bigint): (self: Metric.Metric.Counter<bigint> | Metric.Metric.Gauge<bigint>) => Effect.Effect<void>
  },
  {
    (self: Metric.Metric.Counter<number> | Metric.Metric.Gauge<number>, amount: number): Effect.Effect<void>
    (self: Metric.Metric.Counter<bigint> | Metric.Metric.Gauge<bigint>, amount: bigint): Effect.Effect<void>
  }
>(2, (self, amount) =>
  metricKeyType.isCounterKey(self.keyType)
    ? update(self as any, amount)
    : modify(self as any, amount))

/** @internal */
export const map = dual<
  <Out, Out2>(f: (out: Out) => Out2) => <Type, In>(self: Metric.Metric<Type, In, Out>) => Metric.Metric<Type, In, Out2>,
  <Type, In, Out, Out2>(self: Metric.Metric<Type, In, Out>, f: (out: Out) => Out2) => Metric.Metric<Type, In, Out2>
>(2, (self, f) =>
  make(
    self.keyType,
    self.unsafeUpdate,
    (extraTags) => f(self.unsafeValue(extraTags)),
    self.unsafeModify
  ))

/** @internal */
export const mapType = dual<
  <Type, Type2>(
    f: (type: Type) => Type2
  ) => <In, Out>(
    self: Metric.Metric<Type, In, Out>
  ) => Metric.Metric<Type2, In, Out>,
  <Type, In, Out, Type2>(
    self: Metric.Metric<Type, In, Out>,
    f: (type: Type) => Type2
  ) => Metric.Metric<Type2, In, Out>
>(2, (self, f) =>
  make(
    f(self.keyType),
    self.unsafeUpdate,
    self.unsafeValue,
    self.unsafeModify
  ))

/** @internal */
export const modify = dual<
  <In>(input: In) => <Type, Out>(self: Metric.Metric<Type, In, Out>) => Effect.Effect<void>,
  <Type, In, Out>(self: Metric.Metric<Type, In, Out>, input: In) => Effect.Effect<void>
>(2, (self, input) =>
  core.fiberRefGetWith(
    core.currentMetricLabels,
    (tags) => core.sync(() => self.unsafeModify(input, tags))
  ))

/* @internal */
export const set = dual<
  {
    (value: number): (self: Metric.Metric.Gauge<number>) => Effect.Effect<void>
    (value: bigint): (self: Metric.Metric.Gauge<bigint>) => Effect.Effect<void>
  },
  {
    (self: Metric.Metric.Gauge<number>, value: number): Effect.Effect<void>
    (self: Metric.Metric.Gauge<bigint>, value: bigint): Effect.Effect<void>
  }
>(2, (self, value) => update(self as any, value))

/** @internal */
export const succeed = <Out>(out: Out): Metric.Metric<void, unknown, Out> =>
  make(void 0 as void, constVoid, () => out, constVoid)

/** @internal */
export const sync = <Out>(evaluate: LazyArg<Out>): Metric.Metric<void, unknown, Out> =>
  make(void 0 as void, constVoid, evaluate, constVoid)

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
): Metric.Metric.Summary<number> => withNow(summaryTimestamp(options))

/** @internal */
export const summaryTimestamp = (
  options: {
    readonly name: string
    readonly maxAge: Duration.DurationInput
    readonly maxSize: number
    readonly error: number
    readonly quantiles: ReadonlyArray<number>
    readonly description?: string | undefined
  }
): Metric.Metric.Summary<readonly [value: number, timestamp: number]> => fromMetricKey(metricKey.summary(options))

/** @internal */
export const tagged = dual<
  <Type, In, Out>(key: string, value: string) => (self: Metric.Metric<Type, In, Out>) => Metric.Metric<Type, In, Out>,
  <Type, In, Out>(self: Metric.Metric<Type, In, Out>, key: string, value: string) => Metric.Metric<Type, In, Out>
>(3, (self, key, value) => taggedWithLabels(self, [metricLabel.make(key, value)]))

/** @internal */
export const taggedWithLabelsInput = dual<
  <In>(
    f: (input: In) => Iterable<MetricLabel.MetricLabel>
  ) => <Type, Out>(self: Metric.Metric<Type, In, Out>) => Metric.Metric<Type, In, void>,
  <Type, In, Out>(
    self: Metric.Metric<Type, In, Out>,
    f: (input: In) => Iterable<MetricLabel.MetricLabel>
  ) => Metric.Metric<Type, In, void>
>(2, (self, f) =>
  map(
    make(
      self.keyType,
      (input, extraTags) =>
        self.unsafeUpdate(
          input,
          Arr.union(f(input), extraTags)
        ),
      self.unsafeValue,
      (input, extraTags) =>
        self.unsafeModify(
          input,
          Arr.union(f(input), extraTags)
        )
    ),
    constVoid
  ))

/** @internal */
export const taggedWithLabels = dual<
  <Type, In, Out>(
    extraTags: Iterable<MetricLabel.MetricLabel>
  ) => (self: Metric.Metric<Type, In, Out>) => Metric.Metric<Type, In, Out>,
  <Type, In, Out>(
    self: Metric.Metric<Type, In, Out>,
    extraTags: Iterable<MetricLabel.MetricLabel>
  ) => Metric.Metric<Type, In, Out>
>(2, (self, extraTags) => {
  return make(
    self.keyType,
    (input, extraTags1) => self.unsafeUpdate(input, Arr.union(extraTags, extraTags1)),
    (extraTags1) => self.unsafeValue(Arr.union(extraTags, extraTags1)),
    (input, extraTags1) => self.unsafeModify(input, Arr.union(extraTags, extraTags1))
  )
})

/** @internal */
export const timer = (name: string, description?: string): Metric.Metric<
  MetricKeyType.MetricKeyType.Histogram,
  Duration.Duration,
  MetricState.MetricState.Histogram
> => {
  const boundaries = metricBoundaries.exponential({
    start: 0.5,
    factor: 2,
    count: 35
  })
  const base = pipe(histogram(name, boundaries, description), tagged("time_unit", "milliseconds"))
  return mapInput(base, Duration.toMillis)
}

/** @internal */
export const timerWithBoundaries = (
  name: string,
  boundaries: ReadonlyArray<number>,
  description?: string
): Metric.Metric<
  MetricKeyType.MetricKeyType.Histogram,
  Duration.Duration,
  MetricState.MetricState.Histogram
> => {
  const base = pipe(
    histogram(name, metricBoundaries.fromIterable(boundaries), description),
    tagged("time_unit", "milliseconds")
  )
  return mapInput(base, Duration.toMillis)
}

/* @internal */
export const trackAll = dual<
  <In>(
    input: In
  ) => <Type, Out>(
    self: Metric.Metric<Type, In, Out>
  ) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <Type, In, Out>(
    self: Metric.Metric<Type, In, Out>,
    input: In
  ) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
>(2, (self, input) => (effect) =>
  core.matchCauseEffect(effect, {
    onFailure: (cause) => core.zipRight(update(self, input), core.failCause(cause)),
    onSuccess: (value) => core.zipRight(update(self, input), core.succeed(value))
  }))

/* @internal */
export const trackDefect = dual<
  <Type, Out>(
    metric: Metric.Metric<Type, unknown, Out>
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R, Type, Out>(
    self: Effect.Effect<A, E, R>,
    metric: Metric.Metric<Type, unknown, Out>
  ) => Effect.Effect<A, E, R>
>(2, (self, metric) => trackDefectWith(self, metric, identity))

/* @internal */
export const trackDefectWith = dual<
  <Type, In, Out>(
    metric: Metric.Metric<Type, In, Out>,
    f: (defect: unknown) => In
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R, Type, In, Out>(
    self: Effect.Effect<A, E, R>,
    metric: Metric.Metric<Type, In, Out>,
    f: (defect: unknown) => In
  ) => Effect.Effect<A, E, R>
>(3, (self, metric, f) => {
  const updater = (defect: unknown) => update(metric, f(defect))
  return effect_.tapDefect(self, (cause) => core.forEachSequentialDiscard(Cause.defects(cause), updater))
})

/* @internal */
export const trackDuration = dual<
  <Type, Out>(
    metric: Metric.Metric<Type, Duration.Duration, Out>
  ) => <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R, Type, Out>(
    self: Effect.Effect<A, E, R>,
    metric: Metric.Metric<Type, Duration.Duration, Out>
  ) => Effect.Effect<A, E, R>
>(2, (self, metric) => trackDurationWith(self, metric, identity))

/* @internal */
export const trackDurationWith = dual<
  <Type, In, Out>(
    metric: Metric.Metric<Type, In, Out>,
    f: (duration: Duration.Duration) => In
  ) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E, R, Type, In, Out>(
    self: Effect.Effect<A, E, R>,
    metric: Metric.Metric<Type, In, Out>,
    f: (duration: Duration.Duration) => In
  ) => Effect.Effect<A, E, R>
>(3, (self, metric, f) =>
  Clock.clockWith((clock) => {
    const startTime = clock.unsafeCurrentTimeNanos()
    return core.tap(self, (_) => {
      const endTime = clock.unsafeCurrentTimeNanos()
      const duration = Duration.nanos(endTime - startTime)
      return update(metric, f(duration))
    })
  }))

/* @internal */
export const trackError = dual<
  <Type, In, Out>(
    metric: Metric.Metric<Type, In, Out>
  ) => <A, E extends In, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E extends In, R, Type, In, Out>(
    self: Effect.Effect<A, E, R>,
    metric: Metric.Metric<Type, In, Out>
  ) => Effect.Effect<A, E, R>
>(2, <A, E extends In, R, Type, In, Out>(
  self: Effect.Effect<A, E, R>,
  metric: Metric.Metric<Type, In, Out>
) => trackErrorWith(self, metric, (a: In) => a))

/* @internal */
export const trackErrorWith = dual<
  <Type, In, Out, In2>(
    metric: Metric.Metric<Type, In, Out>,
    f: (error: In2) => In
  ) => <A, E extends In2, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A, E extends In2, R, Type, In, Out, In2>(
    self: Effect.Effect<A, E, R>,
    metric: Metric.Metric<Type, In, Out>,
    f: (error: In2) => In
  ) => Effect.Effect<A, E, R>
>(3, <A, E extends In2, R, Type, In, Out, In2>(
  self: Effect.Effect<A, E, R>,
  metric: Metric.Metric<Type, In, Out>,
  f: (error: In2) => In
) => {
  const updater = (error: E): Effect.Effect<void> => update(metric, f(error))
  return effect_.tapError(self, updater)
})

/* @internal */
export const trackSuccess = dual<
  <Type, In, Out>(
    metric: Metric.Metric<Type, In, Out>
  ) => <A extends In, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A extends In, E, R, Type, In, Out>(
    self: Effect.Effect<A, E, R>,
    metric: Metric.Metric<Type, In, Out>
  ) => Effect.Effect<A, E, R>
>(2, <A extends In, E, R, Type, In, Out>(
  self: Effect.Effect<A, E, R>,
  metric: Metric.Metric<Type, In, Out>
) => trackSuccessWith(self, metric, (a: In) => a))

/* @internal */
export const trackSuccessWith = dual<
  <Type, In, Out, In2>(
    metric: Metric.Metric<Type, In, Out>,
    f: (value: In2) => In
  ) => <A extends In2, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  <A extends In2, E, R, Type, In, Out, In2>(
    self: Effect.Effect<A, E, R>,
    metric: Metric.Metric<Type, In, Out>,
    f: (value: In2) => In
  ) => Effect.Effect<A, E, R>
>(3, <A extends In2, E, R, Type, In, Out, In2>(
  self: Effect.Effect<A, E, R>,
  metric: Metric.Metric<Type, In, Out>,
  f: (value: In2) => In
) => {
  const updater = (value: A): Effect.Effect<void> => update(metric, f(value))
  return core.tap(self, updater)
})

/* @internal */
export const update = dual<
  <In>(input: In) => <Type, Out>(self: Metric.Metric<Type, In, Out>) => Effect.Effect<void>,
  <Type, In, Out>(self: Metric.Metric<Type, In, Out>, input: In) => Effect.Effect<void>
>(2, (self, input) =>
  core.fiberRefGetWith(
    core.currentMetricLabels,
    (tags) => core.sync(() => self.unsafeUpdate(input, tags))
  ))

/* @internal */
export const value = <Type, In, Out>(
  self: Metric.Metric<Type, In, Out>
): Effect.Effect<Out> =>
  core.fiberRefGetWith(
    core.currentMetricLabels,
    (tags) => core.sync(() => self.unsafeValue(tags))
  )

/** @internal */
export const withNow = <Type, In, Out>(
  self: Metric.Metric<Type, readonly [In, number], Out>
): Metric.Metric<Type, In, Out> => mapInput(self, (input: In) => [input, Date.now()] as const)

/** @internal */
export const zip = dual<
  <Type2, In2, Out2>(
    that: Metric.Metric<Type2, In2, Out2>
  ) => <Type, In, Out>(
    self: Metric.Metric<Type, In, Out>
  ) => Metric.Metric<readonly [Type, Type2], readonly [In, In2], [Out, Out2]>,
  <Type, In, Out, Type2, In2, Out2>(
    self: Metric.Metric<Type, In, Out>,
    that: Metric.Metric<Type2, In2, Out2>
  ) => Metric.Metric<readonly [Type, Type2], readonly [In, In2], [Out, Out2]>
>(
  2,
  <Type, In, Out, Type2, In2, Out2>(self: Metric.Metric<Type, In, Out>, that: Metric.Metric<Type2, In2, Out2>) =>
    make(
      [self.keyType, that.keyType] as const,
      (input: readonly [In, In2], extraTags) => {
        const [l, r] = input
        self.unsafeUpdate(l, extraTags)
        that.unsafeUpdate(r, extraTags)
      },
      (extraTags) => [self.unsafeValue(extraTags), that.unsafeValue(extraTags)],
      (input: readonly [In, In2], extraTags) => {
        const [l, r] = input
        self.unsafeModify(l, extraTags)
        that.unsafeModify(r, extraTags)
      }
    )
)

/** @internal */
export const unsafeSnapshot = (): Array<MetricPair.MetricPair.Untyped> => globalMetricRegistry.snapshot()

/** @internal */
export const snapshot: Effect.Effect<Array<MetricPair.MetricPair.Untyped>> = core.sync(
  unsafeSnapshot
)
