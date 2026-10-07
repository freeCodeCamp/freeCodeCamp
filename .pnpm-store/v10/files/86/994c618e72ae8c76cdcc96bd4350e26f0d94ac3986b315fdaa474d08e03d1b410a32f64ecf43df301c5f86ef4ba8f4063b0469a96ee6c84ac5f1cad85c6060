import type * as Effect from "../../Effect.js"
import type * as Fiber from "../../Fiber.js"
import { dual, pipe } from "../../Function.js"
import type * as Metric from "../../Metric.js"
import type * as MetricPolling from "../../MetricPolling.js"
import { pipeArguments } from "../../Pipeable.js"
import type * as Schedule from "../../Schedule.js"
import type * as Scope from "../../Scope.js"
import * as core from "../core.js"
import * as metric from "../metric.js"
import * as schedule_ from "../schedule.js"

/** @internal */
const MetricPollingSymbolKey = "effect/MetricPolling"

/** @internal */
export const MetricPollingTypeId: MetricPolling.MetricPollingTypeId = Symbol.for(
  MetricPollingSymbolKey
) as MetricPolling.MetricPollingTypeId

/** @internal */
export const make = <Type, In, Out, R, E>(
  metric: Metric.Metric<Type, In, Out>,
  poll: Effect.Effect<In, E, R>
): MetricPolling.MetricPolling<Type, In, R, E, Out> => {
  return {
    [MetricPollingTypeId]: MetricPollingTypeId,
    pipe() {
      return pipeArguments(this, arguments)
    },
    metric,
    poll
  }
}

/** @internal */
export const collectAll = <R, E, Out>(
  iterable: Iterable<MetricPolling.MetricPolling<any, any, R, E, Out>>
): MetricPolling.MetricPolling<Array<any>, Array<any>, R, E, Array<Out>> => {
  const metrics = Array.from(iterable)
  return {
    [MetricPollingTypeId]: MetricPollingTypeId,
    pipe() {
      return pipeArguments(this, arguments)
    },
    metric: metric.make(
      Array.of<any>(void 0) as Array<any>,
      (inputs: Array<any>, extraTags) => {
        for (let i = 0; i < inputs.length; i++) {
          const pollingMetric = metrics[i]!
          const input = pipe(inputs, (x) => x[i])
          pollingMetric.metric.unsafeUpdate(input, extraTags)
        }
      },
      (extraTags) =>
        Array.from(
          metrics.map((pollingMetric) => pollingMetric.metric.unsafeValue(extraTags))
        ),
      (inputs: Array<any>, extraTags) => {
        for (let i = 0; i < inputs.length; i++) {
          const pollingMetric = metrics[i]!
          const input = pipe(inputs, (x) => x[i])
          pollingMetric.metric.unsafeModify(input, extraTags)
        }
      }
    ),
    poll: core.forEachSequential(metrics, (metric) => metric.poll)
  }
}

/** @internal */
export const launch = dual<
  <A2, R2>(
    schedule: Schedule.Schedule<A2, unknown, R2>
  ) => <Type, In, R, E, Out>(
    self: MetricPolling.MetricPolling<Type, In, R, E, Out>
  ) => Effect.Effect<Fiber.Fiber<A2, E>, never, R | R2 | Scope.Scope>,
  <Type, In, R, E, Out, A2, R2>(
    self: MetricPolling.MetricPolling<Type, In, R, E, Out>,
    schedule: Schedule.Schedule<A2, unknown, R2>
  ) => Effect.Effect<Fiber.Fiber<A2, E>, never, R | R2 | Scope.Scope>
>(2, (self, schedule) =>
  pipe(
    pollAndUpdate(self),
    core.zipRight(metric.value(self.metric)),
    schedule_.scheduleForked(schedule)
  ))

/** @internal */
export const poll = <Type, In, R, E, Out>(
  self: MetricPolling.MetricPolling<Type, In, R, E, Out>
): Effect.Effect<In, E, R> => self.poll

/** @internal */
export const pollAndUpdate = <Type, In, R, E, Out>(
  self: MetricPolling.MetricPolling<Type, In, R, E, Out>
): Effect.Effect<void, E, R> => core.flatMap(self.poll, (value) => metric.update(self.metric, value))

/** @internal */
export const retry = dual<
  <X, E, R2>(
    policy: Schedule.Schedule<X, E, R2>
  ) => <Type, In, R, Out>(
    self: MetricPolling.MetricPolling<Type, In, R, E, Out>
  ) => MetricPolling.MetricPolling<Type, In, R | R2, E, Out>,
  <Type, In, R, E, Out, X, R2>(
    self: MetricPolling.MetricPolling<Type, In, R, E, Out>,
    policy: Schedule.Schedule<X, E, R2>
  ) => MetricPolling.MetricPolling<Type, In, R | R2, E, Out>
>(2, (self, policy) => ({
  [MetricPollingTypeId]: MetricPollingTypeId,
  pipe() {
    return pipeArguments(this, arguments)
  },
  metric: self.metric,
  poll: schedule_.retry_Effect(self.poll, policy)
}))

/** @internal */
export const zip = dual<
  <Type2, In2, R2, E2, Out2>(
    that: MetricPolling.MetricPolling<Type2, In2, R2, E2, Out2>
  ) => <Type, In, R, E, Out>(
    self: MetricPolling.MetricPolling<Type, In, R, E, Out>
  ) => MetricPolling.MetricPolling<
    readonly [Type, Type2],
    readonly [In, In2],
    R | R2,
    E | E2,
    [Out, Out2]
  >,
  <Type, In, R, E, Out, Type2, In2, R2, E2, Out2>(
    self: MetricPolling.MetricPolling<Type, In, R, E, Out>,
    that: MetricPolling.MetricPolling<Type2, In2, R2, E2, Out2>
  ) => MetricPolling.MetricPolling<
    readonly [Type, Type2],
    readonly [In, In2],
    R | R2,
    E | E2,
    [Out, Out2]
  >
>(2, (self, that) => ({
  [MetricPollingTypeId]: MetricPollingTypeId,
  pipe() {
    return pipeArguments(this, arguments)
  },
  metric: pipe(self.metric, metric.zip(that.metric)),
  poll: core.zip(self.poll, that.poll)
}))
