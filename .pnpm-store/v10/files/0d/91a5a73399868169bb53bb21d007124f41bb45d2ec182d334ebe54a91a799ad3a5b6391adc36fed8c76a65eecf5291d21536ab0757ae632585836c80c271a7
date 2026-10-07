import type * as Cause from "../Cause.js"
import * as Chunk from "../Chunk.js"
import * as Clock from "../Clock.js"
import * as Context from "../Context.js"
import * as Cron from "../Cron.js"
import type * as DateTime from "../DateTime.js"
import * as Duration from "../Duration.js"
import type * as Effect from "../Effect.js"
import * as Either from "../Either.js"
import * as Equal from "../Equal.js"
import type * as Fiber from "../Fiber.js"
import type { LazyArg } from "../Function.js"
import { constVoid, dual, pipe } from "../Function.js"
import * as Option from "../Option.js"
import { pipeArguments } from "../Pipeable.js"
import { hasProperty, type Predicate } from "../Predicate.js"
import * as Random from "../Random.js"
import type * as Ref from "../Ref.js"
import type * as Schedule from "../Schedule.js"
import * as ScheduleDecision from "../ScheduleDecision.js"
import * as Interval from "../ScheduleInterval.js"
import * as Intervals from "../ScheduleIntervals.js"
import type { Scope } from "../Scope.js"
import type * as Types from "../Types.js"
import * as internalCause from "./cause.js"
import * as effect from "./core-effect.js"
import * as core from "./core.js"
import { forkScoped } from "./effect/circular.js"
import * as ref from "./ref.js"

/** @internal */
const ScheduleSymbolKey = "effect/Schedule"

/** @internal */
export const ScheduleTypeId: Schedule.ScheduleTypeId = Symbol.for(
  ScheduleSymbolKey
) as Schedule.ScheduleTypeId

/** @internal */
export const isSchedule = (u: unknown): u is Schedule.Schedule<unknown, never, unknown> =>
  hasProperty(u, ScheduleTypeId)

/** @internal */
const ScheduleDriverSymbolKey = "effect/ScheduleDriver"

/** @internal */
export const ScheduleDriverTypeId: Schedule.ScheduleDriverTypeId = Symbol.for(
  ScheduleDriverSymbolKey
) as Schedule.ScheduleDriverTypeId

/** @internal */
const defaultIterationMetadata: Schedule.IterationMetadata = {
  start: 0,
  now: 0,
  input: undefined,
  output: undefined,
  elapsed: Duration.zero,
  elapsedSincePrevious: Duration.zero,
  recurrence: 0
}

/** @internal */
export const CurrentIterationMetadata = Context.Reference<Schedule.CurrentIterationMetadata>()(
  "effect/Schedule/CurrentIterationMetadata",
  { defaultValue: () => defaultIterationMetadata }
)

const scheduleVariance = {
  /* c8 ignore next */
  _Out: (_: never) => _,
  /* c8 ignore next */
  _In: (_: unknown) => _,
  /* c8 ignore next */
  _R: (_: never) => _
}

const scheduleDriverVariance = {
  /* c8 ignore next */
  _Out: (_: never) => _,
  /* c8 ignore next */
  _In: (_: unknown) => _,
  /* c8 ignore next */
  _R: (_: never) => _
}

/** @internal */
class ScheduleImpl<S, Out, In, R> implements Schedule.Schedule<Out, In, R> {
  [ScheduleTypeId] = scheduleVariance
  constructor(
    readonly initial: S,
    readonly step: (
      now: number,
      input: In,
      state: S
    ) => Effect.Effect<readonly [S, Out, ScheduleDecision.ScheduleDecision], never, R>
  ) {
  }
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/** @internal */
const updateInfo = (
  iterationMetaRef: Ref.Ref<Schedule.IterationMetadata>,
  now: number,
  input: unknown,
  output: unknown
) =>
  ref.update(iterationMetaRef, (prev) =>
    (prev.recurrence === 0) ?
      {
        now,
        input,
        output,
        recurrence: prev.recurrence + 1,
        elapsed: Duration.zero,
        elapsedSincePrevious: Duration.zero,
        start: now
      } :
      {
        now,
        input,
        output,
        recurrence: prev.recurrence + 1,
        elapsed: Duration.millis(now - prev.start),
        elapsedSincePrevious: Duration.millis(now - prev.now),
        start: prev.start
      })

/** @internal */
class ScheduleDriverImpl<Out, In, R> implements Schedule.ScheduleDriver<Out, In, R> {
  [ScheduleDriverTypeId] = scheduleDriverVariance

  constructor(
    readonly schedule: Schedule.Schedule<Out, In, R>,
    readonly ref: Ref.Ref<readonly [Option.Option<Out>, any]>
  ) {}

  get state(): Effect.Effect<unknown> {
    return core.map(ref.get(this.ref), (tuple) => tuple[1])
  }

  get last(): Effect.Effect<Out, Cause.NoSuchElementException> {
    return core.flatMap(ref.get(this.ref), ([element, _]) => {
      switch (element._tag) {
        case "None": {
          return core.failSync(() => new core.NoSuchElementException())
        }
        case "Some": {
          return core.succeed(element.value)
        }
      }
    })
  }

  iterationMeta = ref.unsafeMake(defaultIterationMetadata)

  get reset(): Effect.Effect<void> {
    return ref.set(this.ref, [Option.none(), this.schedule.initial]).pipe(
      core.zipLeft(ref.set(this.iterationMeta, defaultIterationMetadata))
    )
  }

  next(input: In): Effect.Effect<Out, Option.Option<never>, R> {
    return pipe(
      core.map(ref.get(this.ref), (tuple) => tuple[1]),
      core.flatMap((state) =>
        pipe(
          Clock.currentTimeMillis,
          core.flatMap((now) =>
            pipe(
              core.suspend(() => this.schedule.step(now, input, state)),
              core.flatMap(([state, out, decision]) => {
                const setState = ref.set(this.ref, [Option.some(out), state] as const)
                if (ScheduleDecision.isDone(decision)) {
                  return setState.pipe(
                    core.zipRight(core.fail(Option.none()))
                  )
                }
                const millis = Intervals.start(decision.intervals) - now
                if (millis <= 0) {
                  return setState.pipe(
                    core.zipRight(updateInfo(this.iterationMeta, now, input, out)),
                    core.as(out)
                  )
                }
                const duration = Duration.millis(millis)
                return pipe(
                  setState,
                  core.zipRight(updateInfo(this.iterationMeta, now, input, out)),
                  core.zipRight(effect.sleep(duration)),
                  core.as(out)
                )
              })
            )
          )
        )
      )
    )
  }
}

/** @internal */
export const makeWithState = <S, In, Out, R = never>(
  initial: S,
  step: (
    now: number,
    input: In,
    state: S
  ) => Effect.Effect<readonly [S, Out, ScheduleDecision.ScheduleDecision], never, R>
): Schedule.Schedule<Out, In, R> => new ScheduleImpl(initial, step)

/** @internal */
export const addDelay = dual<
  <Out>(
    f: (out: Out) => Duration.DurationInput
  ) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R>,
  <Out, In, R>(
    self: Schedule.Schedule<Out, In, R>,
    f: (out: Out) => Duration.DurationInput
  ) => Schedule.Schedule<Out, In, R>
>(2, (self, f) => addDelayEffect(self, (out) => core.sync(() => f(out))))

/** @internal */
export const addDelayEffect = dual<
  <Out, R2>(
    f: (out: Out) => Effect.Effect<Duration.DurationInput, never, R2>
  ) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R | R2>,
  <Out, In, R, R2>(
    self: Schedule.Schedule<Out, In, R>,
    f: (out: Out) => Effect.Effect<Duration.DurationInput, never, R2>
  ) => Schedule.Schedule<Out, In, R | R2>
>(2, (self, f) =>
  modifyDelayEffect(self, (out, duration) =>
    core.map(
      f(out),
      (delay) => Duration.sum(duration, Duration.decode(delay))
    )))

/** @internal */
export const andThen = dual<
  <Out2, In2, R2>(
    that: Schedule.Schedule<Out2, In2, R2>
  ) => <Out, In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<
    Out | Out2,
    In & In2,
    R | R2
  >,
  <Out, In, R, Out2, In2, R2>(
    self: Schedule.Schedule<Out, In, R>,
    that: Schedule.Schedule<Out2, In2, R2>
  ) => Schedule.Schedule<
    Out | Out2,
    In & In2,
    R | R2
  >
>(2, (self, that) => map(andThenEither(self, that), Either.merge))

/** @internal */
export const andThenEither = dual<
  <Out2, In2, R2>(
    that: Schedule.Schedule<Out2, In2, R2>
  ) => <Out, In, R>(
    self: Schedule.Schedule<Out, In, R>
  ) => Schedule.Schedule<Either.Either<Out2, Out>, In & In2, R | R2>,
  <Out, In, R, Out2, In2, R2>(
    self: Schedule.Schedule<Out, In, R>,
    that: Schedule.Schedule<Out2, In2, R2>
  ) => Schedule.Schedule<Either.Either<Out2, Out>, In & In2, R | R2>
>(2, <Out, In, R, Out2, In2, R2>(
  self: Schedule.Schedule<Out, In, R>,
  that: Schedule.Schedule<Out2, In2, R2>
): Schedule.Schedule<Either.Either<Out2, Out>, In & In2, R | R2> =>
  makeWithState(
    [self.initial, that.initial, true as boolean] as const,
    (now, input, state) =>
      state[2] ?
        core.flatMap(self.step(now, input, state[0]), ([lState, out, decision]) => {
          if (ScheduleDecision.isDone(decision)) {
            return core.map(that.step(now, input, state[1]), ([rState, out, decision]) =>
              [
                [lState, rState, false as boolean] as const,
                Either.right(out) as Either.Either<Out2, Out>,
                decision as ScheduleDecision.ScheduleDecision
              ] as const)
          }
          return core.succeed(
            [
              [lState, state[1], true as boolean] as const,
              Either.left(out),
              decision
            ] as const
          )
        }) :
        core.map(that.step(now, input, state[1]), ([rState, out, decision]) =>
          [
            [state[0], rState, false as boolean] as const,
            Either.right(out) as Either.Either<Out2, Out>,
            decision
          ] as const)
  ))

/** @internal */
export const as = dual<
  <Out2>(out: Out2) => <Out, In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out2, In, R>,
  <Out, In, R, Out2>(self: Schedule.Schedule<Out, In, R>, out: Out2) => Schedule.Schedule<Out2, In, R>
>(2, (self, out) => map(self, () => out))

/** @internal */
export const asVoid = <Out, In, R>(
  self: Schedule.Schedule<Out, In, R>
): Schedule.Schedule<void, In, R> => map(self, constVoid)

/** @internal */
export const bothInOut = dual<
  <Out2, In2, R2>(
    that: Schedule.Schedule<Out2, In2, R2>
  ) => <Out, In, R>(
    self: Schedule.Schedule<Out, In, R>
  ) => Schedule.Schedule<[Out, Out2], readonly [In, In2], R | R2>,
  <Out, In, R, Out2, In2, R2>(
    self: Schedule.Schedule<Out, In, R>,
    that: Schedule.Schedule<Out2, In2, R2>
  ) => Schedule.Schedule<[Out, Out2], readonly [In, In2], R | R2>
>(2, (self, that) =>
  makeWithState([self.initial, that.initial], (now, [in1, in2], state) =>
    core.zipWith(
      self.step(now, in1, state[0]),
      that.step(now, in2, state[1]),
      ([lState, out, lDecision], [rState, out2, rDecision]) => {
        if (ScheduleDecision.isContinue(lDecision) && ScheduleDecision.isContinue(rDecision)) {
          const interval = pipe(lDecision.intervals, Intervals.union(rDecision.intervals))
          return [
            [lState, rState],
            [out, out2],
            ScheduleDecision.continue(interval)
          ]
        }
        return [[lState, rState], [out, out2], ScheduleDecision.done]
      }
    )))

/** @internal */
export const check = dual<
  <In, Out>(
    test: (input: In, output: Out) => boolean
  ) => <R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R>,
  <Out, In, R>(
    self: Schedule.Schedule<Out, In, R>,
    test: (input: In, output: Out) => boolean
  ) => Schedule.Schedule<Out, In, R>
>(2, (self, test) => checkEffect(self, (input, out) => core.sync(() => test(input, out))))

/** @internal */
export const checkEffect = dual<
  <In, Out, R2>(
    test: (input: In, output: Out) => Effect.Effect<boolean, never, R2>
  ) => <R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R | R2>,
  <Out, In, R, R2>(
    self: Schedule.Schedule<Out, In, R>,
    test: (input: In, output: Out) => Effect.Effect<boolean, never, R2>
  ) => Schedule.Schedule<Out, In, R | R2>
>(2, (self, test) =>
  makeWithState(
    self.initial,
    (now, input, state) =>
      core.flatMap(self.step(now, input, state), ([state, out, decision]) => {
        if (ScheduleDecision.isDone(decision)) {
          return core.succeed([state, out, ScheduleDecision.done] as const)
        }
        return core.map(test(input, out), (cont) =>
          cont ?
            [state, out, decision] as const :
            [state, out, ScheduleDecision.done] as const)
      })
  ))
/** @internal */
export const collectAllInputs = <A>(): Schedule.Schedule<Chunk.Chunk<A>, A> => collectAllOutputs(identity<A>())

/** @internal */
export const collectAllOutputs = <Out, In, R>(
  self: Schedule.Schedule<Out, In, R>
): Schedule.Schedule<Chunk.Chunk<Out>, In, R> =>
  reduce(self, Chunk.empty<Out>(), (outs, out) => pipe(outs, Chunk.append(out)))

/** @internal */
export const collectUntil = <A>(f: Predicate<A>): Schedule.Schedule<Chunk.Chunk<A>, A> =>
  collectAllOutputs(recurUntil(f))

/** @internal */
export const collectUntilEffect = <A, R>(
  f: (a: A) => Effect.Effect<boolean, never, R>
): Schedule.Schedule<Chunk.Chunk<A>, A, R> => collectAllOutputs(recurUntilEffect(f))

/** @internal */
export const collectWhile = <A>(f: Predicate<A>): Schedule.Schedule<Chunk.Chunk<A>, A> =>
  collectAllOutputs(recurWhile(f))

/** @internal */
export const collectWhileEffect = <A, R>(
  f: (a: A) => Effect.Effect<boolean, never, R>
): Schedule.Schedule<Chunk.Chunk<A>, A, R> => collectAllOutputs(recurWhileEffect(f))

/** @internal */
export const compose = dual<
  <Out2, Out, R2>(
    that: Schedule.Schedule<Out2, Out, R2>
  ) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out2, In, R | R2>,
  <Out, In, R, Out2, R2>(
    self: Schedule.Schedule<Out, In, R>,
    that: Schedule.Schedule<Out2, Out, R2>
  ) => Schedule.Schedule<Out2, In, R | R2>
>(2, (self, that) =>
  makeWithState(
    [self.initial, that.initial] as const,
    (now, input, state) =>
      core.flatMap(
        self.step(now, input, state[0]),
        ([lState, out, lDecision]) =>
          core.map(that.step(now, out, state[1]), ([rState, out2, rDecision]) =>
            ScheduleDecision.isDone(lDecision)
              ? [[lState, rState] as const, out2, ScheduleDecision.done] as const
              : ScheduleDecision.isDone(rDecision)
              ? [[lState, rState] as const, out2, ScheduleDecision.done] as const
              : [
                [lState, rState] as const,
                out2,
                ScheduleDecision.continue(pipe(lDecision.intervals, Intervals.max(rDecision.intervals)))
              ] as const)
      )
  ))

/** @internal */
export const mapInput = dual<
  <In, In2>(
    f: (in2: In2) => In
  ) => <Out, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In2, R>,
  <Out, In, R, In2>(
    self: Schedule.Schedule<Out, In, R>,
    f: (in2: In2) => In
  ) => Schedule.Schedule<Out, In2, R>
>(2, (self, f) => mapInputEffect(self, (input2) => core.sync(() => f(input2))))

/** @internal */
export const mapInputContext = dual<
  <R0, R>(
    f: (env0: Context.Context<R0>) => Context.Context<R>
  ) => <Out, In>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R0>,
  <Out, In, R, R0>(
    self: Schedule.Schedule<Out, In, R>,
    f: (env0: Context.Context<R0>) => Context.Context<R>
  ) => Schedule.Schedule<Out, In, R0>
>(2, (self, f) =>
  makeWithState(
    self.initial,
    (now, input, state) => core.mapInputContext(self.step(now, input, state), f)
  ))

/** @internal */
export const mapInputEffect = dual<
  <In2, In, R2>(
    f: (in2: In2) => Effect.Effect<In, never, R2>
  ) => <Out, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In2, R | R2>,
  <Out, In, R, In2, R2>(
    self: Schedule.Schedule<Out, In, R>,
    f: (in2: In2) => Effect.Effect<In, never, R2>
  ) => Schedule.Schedule<Out, In2, R | R2>
>(2, (self, f) =>
  makeWithState(self.initial, (now, input2, state) =>
    core.flatMap(
      f(input2),
      (input) => self.step(now, input, state)
    )))

/** @internal */
export const cron: {
  (expression: Cron.Cron): Schedule.Schedule<[number, number]>
  (expression: string, tz?: DateTime.TimeZone | string): Schedule.Schedule<[number, number]>
} = (expression: string | Cron.Cron, tz?: DateTime.TimeZone | string): Schedule.Schedule<[number, number]> => {
  const parsed = Cron.isCron(expression) ? Either.right(expression) : Cron.parse(expression, tz)
  return makeWithState<[boolean, [number, number, number]], unknown, [number, number]>(
    [true, [Number.MIN_SAFE_INTEGER, 0, 0]],
    (now, _, [initial, previous]) => {
      if (now < previous[0]) {
        return core.succeed([
          [false, previous],
          [previous[1], previous[2]],
          ScheduleDecision.continueWith(Interval.make(previous[1], previous[2]))
        ])
      }

      if (Either.isLeft(parsed)) {
        return core.die(parsed.left)
      }

      const cron = parsed.right
      const date = new Date(now)

      let next: number
      if (initial && Cron.match(cron, date)) {
        next = now
      }

      next = Cron.next(cron, date).getTime()
      const start = beginningOfSecond(next)
      const end = endOfSecond(next)
      return core.succeed([
        [false, [next, start, end]],
        [start, end],
        ScheduleDecision.continueWith(Interval.make(start, end))
      ])
    }
  )
}

/** @internal */
export const dayOfMonth = (day: number): Schedule.Schedule<number> => {
  return makeWithState<[number, number], unknown, number>(
    [Number.NEGATIVE_INFINITY, 0],
    (now, _, state) => {
      if (!Number.isInteger(day) || day < 1 || 31 < day) {
        return core.dieSync(() =>
          new core.IllegalArgumentException(
            `Invalid argument in: dayOfMonth(${day}). Must be in range 1...31`
          )
        )
      }
      const n = state[1]
      const initial = n === 0
      const day0 = nextDayOfMonth(now, day, initial)
      const start = beginningOfDay(day0)
      const end = endOfDay(day0)
      const interval = Interval.make(start, end)
      return core.succeed(
        [
          [end, n + 1],
          n,
          ScheduleDecision.continueWith(interval)
        ]
      )
    }
  )
}

/** @internal */
export const dayOfWeek = (day: number): Schedule.Schedule<number> => {
  return makeWithState<[number, number], unknown, number>(
    [Number.MIN_SAFE_INTEGER, 0],
    (now, _, state) => {
      if (!Number.isInteger(day) || day < 1 || 7 < day) {
        return core.dieSync(() =>
          new core.IllegalArgumentException(
            `Invalid argument in: dayOfWeek(${day}). Must be in range 1 (Monday)...7 (Sunday)`
          )
        )
      }
      const n = state[1]
      const initial = n === 0
      const day0 = nextDay(now, day, initial)
      const start = beginningOfDay(day0)
      const end = endOfDay(day0)
      const interval = Interval.make(start, end)
      return core.succeed(
        [
          [end, n + 1],
          n,
          ScheduleDecision.continueWith(interval)
        ]
      )
    }
  )
}

/** @internal */
export const delayed = dual<
  (
    f: (duration: Duration.Duration) => Duration.DurationInput
  ) => <Out, In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R>,
  <Out, In, R>(
    self: Schedule.Schedule<Out, In, R>,
    f: (duration: Duration.Duration) => Duration.DurationInput
  ) => Schedule.Schedule<Out, In, R>
>(2, (self, f) => delayedEffect(self, (duration) => core.sync(() => f(duration))))

/** @internal */
export const delayedEffect = dual<
  <R2>(
    f: (duration: Duration.Duration) => Effect.Effect<Duration.DurationInput, never, R2>
  ) => <Out, In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R | R2>,
  <Out, In, R, R2>(
    self: Schedule.Schedule<Out, In, R>,
    f: (duration: Duration.Duration) => Effect.Effect<Duration.DurationInput, never, R2>
  ) => Schedule.Schedule<Out, In, R | R2>
>(2, (self, f) => modifyDelayEffect(self, (_, delay) => f(delay)))

/** @internal */
export const delayedSchedule = <In, R>(
  schedule: Schedule.Schedule<Duration.Duration, In, R>
): Schedule.Schedule<Duration.Duration, In, R> => addDelay(schedule, (x) => x)

/** @internal */
export const delays = <Out, In, R>(
  self: Schedule.Schedule<Out, In, R>
): Schedule.Schedule<Duration.Duration, In, R> =>
  makeWithState(self.initial, (now, input, state) =>
    pipe(
      self.step(now, input, state),
      core.flatMap((
        [state, _, decision]
      ): Effect.Effect<[any, Duration.Duration, ScheduleDecision.ScheduleDecision]> => {
        if (ScheduleDecision.isDone(decision)) {
          return core.succeed([state, Duration.zero, decision])
        }
        return core.succeed(
          [
            state,
            Duration.millis(Intervals.start(decision.intervals) - now),
            decision
          ]
        )
      })
    ))

/** @internal */
export const mapBoth = dual<
  <In2, In, Out, Out2>(
    options: {
      readonly onInput: (in2: In2) => In
      readonly onOutput: (out: Out) => Out2
    }
  ) => <R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out2, In2, R>,
  <Out, In, R, In2, Out2>(
    self: Schedule.Schedule<Out, In, R>,
    options: {
      readonly onInput: (in2: In2) => In
      readonly onOutput: (out: Out) => Out2
    }
  ) => Schedule.Schedule<Out2, In2, R>
>(2, (self, { onInput, onOutput }) => map(mapInput(self, onInput), onOutput))

/** @internal */
export const mapBothEffect = dual<
  <In2, In, R2, Out, R3, Out2>(
    options: {
      readonly onInput: (input: In2) => Effect.Effect<In, never, R2>
      readonly onOutput: (out: Out) => Effect.Effect<Out2, never, R3>
    }
  ) => <R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out2, In2, R | R2 | R3>,
  <Out, In, R, In2, R2, Out2, R3>(
    self: Schedule.Schedule<Out, In, R>,
    options: {
      readonly onInput: (input: In2) => Effect.Effect<In, never, R2>
      readonly onOutput: (out: Out) => Effect.Effect<Out2, never, R3>
    }
  ) => Schedule.Schedule<Out2, In2, R | R2 | R3>
>(2, (self, { onInput, onOutput }) => mapEffect(mapInputEffect(self, onInput), onOutput))

/** @internal */
export const driver = <Out, In, R>(
  self: Schedule.Schedule<Out, In, R>
): Effect.Effect<Schedule.ScheduleDriver<Out, In, R>> =>
  pipe(
    ref.make<readonly [Option.Option<Out>, any]>([Option.none(), self.initial]),
    core.map((ref) => new ScheduleDriverImpl(self, ref))
  )

/** @internal */
export const duration = (
  durationInput: Duration.DurationInput
): Schedule.Schedule<Duration.Duration> => {
  const duration = Duration.decode(durationInput)
  const durationMillis = Duration.toMillis(duration)
  return makeWithState(true as boolean, (now, _, state) =>
    core.succeed(
      state
        ? [
          false,
          duration,
          ScheduleDecision.continueWith(Interval.after(now + durationMillis))
        ] as const
        : [false, Duration.zero, ScheduleDecision.done] as const
    ))
}

/** @internal */
export const either = dual<
  <Out2, In2, R2>(
    that: Schedule.Schedule<Out2, In2, R2>
  ) => <Out, In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<[Out, Out2], In & In2, R | R2>,
  <Out, In, R, Out2, In2, R2>(
    self: Schedule.Schedule<Out, In, R>,
    that: Schedule.Schedule<Out2, In2, R2>
  ) => Schedule.Schedule<[Out, Out2], In & In2, R | R2>
>(2, (self, that) => union(self, that))

/** @internal */
export const eitherWith = dual<
  <Out2, In2, R2>(
    that: Schedule.Schedule<Out2, In2, R2>,
    f: (x: Intervals.Intervals, y: Intervals.Intervals) => Intervals.Intervals
  ) => <Out, In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<[Out, Out2], In & In2, R | R2>,
  <Out, In, R, Out2, In2, R2>(
    self: Schedule.Schedule<Out, In, R>,
    that: Schedule.Schedule<Out2, In2, R2>,
    f: (x: Intervals.Intervals, y: Intervals.Intervals) => Intervals.Intervals
  ) => Schedule.Schedule<[Out, Out2], In & In2, R | R2>
>(3, (self, that, f) => unionWith(self, that, f))

/** @internal */
export const ensuring = dual<
  <X>(
    finalizer: Effect.Effect<X>
  ) => <Out, In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R>,
  <Out, In, R, X>(
    self: Schedule.Schedule<Out, In, R>,
    finalizer: Effect.Effect<X>
  ) => Schedule.Schedule<Out, In, R>
>(2, (self, finalizer) =>
  makeWithState(
    self.initial,
    (now, input, state) =>
      core.flatMap(self.step(now, input, state), ([state, out, decision]) =>
        ScheduleDecision.isDone(decision)
          ? core.as(finalizer, [state, out, decision as ScheduleDecision.ScheduleDecision] as const)
          : core.succeed([state, out, decision] as const))
  ))

/** @internal */
export const exponential = (
  baseInput: Duration.DurationInput,
  factor = 2.0
): Schedule.Schedule<Duration.Duration> => {
  const base = Duration.decode(baseInput)
  return delayedSchedule(
    map(forever, (i) => Duration.times(base, Math.pow(factor, i)))
  )
}

/** @internal */
export const fibonacci = (oneInput: Duration.DurationInput): Schedule.Schedule<Duration.Duration> => {
  const one = Duration.decode(oneInput)
  return delayedSchedule(
    pipe(
      unfold(
        [one, one] as const,
        ([a, b]) => [b, Duration.sum(a, b)] as const
      ),
      map((out) => out[0])
    )
  )
}

/** @internal */
export const fixed = (intervalInput: Duration.DurationInput): Schedule.Schedule<number> => {
  const interval = Duration.decode(intervalInput)
  const intervalMillis = Duration.toMillis(interval)
  return makeWithState<[Option.Option<[number, number]>, number], unknown, number>(
    [Option.none(), 0],
    (now, _, [option, n]) =>
      core.sync(() => {
        switch (option._tag) {
          case "None": {
            return [
              [Option.some([now, now + intervalMillis]), n + 1],
              n,
              ScheduleDecision.continueWith(Interval.after(now + intervalMillis))
            ]
          }
          case "Some": {
            const [startMillis, lastRun] = option.value
            const runningBehind = now > (lastRun + intervalMillis)
            const boundary = Equal.equals(interval, Duration.zero)
              ? interval
              : Duration.millis(intervalMillis - ((now - startMillis) % intervalMillis))
            const sleepTime = Equal.equals(boundary, Duration.zero) ? interval : boundary
            const nextRun = runningBehind ? now : now + Duration.toMillis(sleepTime)
            return [
              [Option.some([startMillis, nextRun]), n + 1],
              n,
              ScheduleDecision.continueWith(Interval.after(nextRun))
            ]
          }
        }
      })
  )
}

/** @internal */
export const fromDelay = (delay: Duration.DurationInput): Schedule.Schedule<Duration.Duration> => duration(delay)

/** @internal */
export const fromDelays = (
  delay: Duration.DurationInput,
  ...delays: Array<Duration.DurationInput>
): Schedule.Schedule<Duration.Duration> =>
  makeWithState(
    [[delay, ...delays].map((_) => Duration.decode(_)) as Array<Duration.Duration>, true as boolean] as const,
    (now, _, [durations, cont]) =>
      core.sync(() => {
        if (cont) {
          const x = durations[0]!
          const interval = Interval.after(now + Duration.toMillis(x))
          if (durations.length >= 2) {
            return [
              [durations.slice(1), true] as const,
              x,
              ScheduleDecision.continueWith(interval)
            ] as const
          }
          const y = durations.slice(1)
          return [
            [[x, ...y] as Array<Duration.Duration>, false] as const,
            x,
            ScheduleDecision.continueWith(interval)
          ] as const
        }
        return [[durations, false] as const, Duration.zero, ScheduleDecision.done] as const
      })
  )

/** @internal */
export const fromFunction = <A, B>(f: (a: A) => B): Schedule.Schedule<B, A> => map(identity<A>(), f)

/** @internal */
export const hourOfDay = (hour: number): Schedule.Schedule<number> =>
  makeWithState<[number, number], unknown, number>(
    [Number.NEGATIVE_INFINITY, 0],
    (now, _, state) => {
      if (!Number.isInteger(hour) || hour < 0 || 23 < hour) {
        return core.dieSync(() =>
          new core.IllegalArgumentException(
            `Invalid argument in: hourOfDay(${hour}). Must be in range 0...23`
          )
        )
      }
      const n = state[1]
      const initial = n === 0
      const hour0 = nextHour(now, hour, initial)
      const start = beginningOfHour(hour0)
      const end = endOfHour(hour0)
      const interval = Interval.make(start, end)
      return core.succeed(
        [
          [end, n + 1],
          n,
          ScheduleDecision.continueWith(interval)
        ]
      )
    }
  )

/** @internal */
export const identity = <A>(): Schedule.Schedule<A, A> =>
  makeWithState(void 0, (now, input, state) =>
    core.succeed(
      [
        state,
        input,
        ScheduleDecision.continueWith(Interval.after(now))
      ] as const
    ))

/** @internal */
export const intersect = dual<
  <Out2, In2, R2>(
    that: Schedule.Schedule<Out2, In2, R2>
  ) => <Out, In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<[Out, Out2], In & In2, R | R2>,
  <Out, In, R, Out2, In2, R2>(
    self: Schedule.Schedule<Out, In, R>,
    that: Schedule.Schedule<Out2, In2, R2>
  ) => Schedule.Schedule<[Out, Out2], In & In2, R | R2>
>(2, (self, that) => intersectWith(self, that, Intervals.intersect))

/** @internal */
export const intersectWith = dual<
  <Out2, In2, R2>(
    that: Schedule.Schedule<Out2, In2, R2>,
    f: (x: Intervals.Intervals, y: Intervals.Intervals) => Intervals.Intervals
  ) => <Out, In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<[Out, Out2], In & In2, R | R2>,
  <Out, In, R, Out2, In2, R2>(
    self: Schedule.Schedule<Out, In, R>,
    that: Schedule.Schedule<Out2, In2, R2>,
    f: (x: Intervals.Intervals, y: Intervals.Intervals) => Intervals.Intervals
  ) => Schedule.Schedule<[Out, Out2], In & In2, R | R2>
>(3, <Env, In, Out, Env2, In2, Out2>(
  self: Schedule.Schedule<Out, In, Env>,
  that: Schedule.Schedule<Out2, In2, Env2>,
  f: (x: Intervals.Intervals, y: Intervals.Intervals) => Intervals.Intervals
): Schedule.Schedule<[Out, Out2], In & In2, Env | Env2> =>
  makeWithState<[any, any], In & In2, [Out, Out2], Env | Env2>(
    [self.initial, that.initial],
    (now, input: In & In2, state) =>
      pipe(
        core.zipWith(
          self.step(now, input, state[0]),
          that.step(now, input, state[1]),
          (a, b) => [a, b] as const
        ),
        core.flatMap(([
          [lState, out, lDecision],
          [rState, out2, rDecision]
        ]) => {
          if (ScheduleDecision.isContinue(lDecision) && ScheduleDecision.isContinue(rDecision)) {
            return intersectWithLoop(
              self,
              that,
              input,
              lState,
              out,
              lDecision.intervals,
              rState,
              out2,
              rDecision.intervals,
              f
            )
          }
          return core.succeed(
            [
              [lState, rState],
              [out, out2],
              ScheduleDecision.done
            ]
          )
        })
      )
  ))

/** @internal */
const intersectWithLoop = <State, State1, Env, In, Out, Env1, In1, Out2>(
  self: Schedule.Schedule<Out, In, Env>,
  that: Schedule.Schedule<Out2, In1, Env1>,
  input: In & In1,
  lState: State,
  out: Out,
  lInterval: Intervals.Intervals,
  rState: State1,
  out2: Out2,
  rInterval: Intervals.Intervals,
  f: (x: Intervals.Intervals, y: Intervals.Intervals) => Intervals.Intervals
): Effect.Effect<
  [[State, State1], [Out, Out2], ScheduleDecision.ScheduleDecision],
  never,
  Env | Env1
> => {
  const combined = f(lInterval, rInterval)
  if (Intervals.isNonEmpty(combined)) {
    return core.succeed([
      [lState, rState],
      [out, out2],
      ScheduleDecision.continue(combined)
    ])
  }

  if (pipe(lInterval, Intervals.lessThan(rInterval))) {
    return core.flatMap(self.step(Intervals.end(lInterval), input, lState), ([lState, out, decision]) => {
      if (ScheduleDecision.isDone(decision)) {
        return core.succeed([
          [lState, rState],
          [out, out2],
          ScheduleDecision.done
        ])
      }
      return intersectWithLoop(
        self,
        that,
        input,
        lState,
        out,
        decision.intervals,
        rState,
        out2,
        rInterval,
        f
      )
    })
  }
  return core.flatMap(that.step(Intervals.end(rInterval), input, rState), ([rState, out2, decision]) => {
    if (ScheduleDecision.isDone(decision)) {
      return core.succeed([
        [lState, rState],
        [out, out2],
        ScheduleDecision.done
      ])
    }
    return intersectWithLoop(
      self,
      that,
      input,
      lState,
      out,
      lInterval,
      rState,
      out2,
      decision.intervals,
      f
    )
  })
}

/** @internal */
export const jittered = <Out, In, R>(self: Schedule.Schedule<Out, In, R>): Schedule.Schedule<Out, In, R> =>
  jitteredWith(self, { min: 0.8, max: 1.2 })

/** @internal */
export const jitteredWith = dual<
  (options: { min?: number | undefined; max?: number | undefined }) => <Out, In, R>(
    self: Schedule.Schedule<Out, In, R>
  ) => Schedule.Schedule<Out, In, R>,
  <Out, In, R>(
    self: Schedule.Schedule<Out, In, R>,
    options: { min?: number | undefined; max?: number | undefined }
  ) => Schedule.Schedule<Out, In, R>
>(2, (self, options) => {
  const { max, min } = Object.assign({ min: 0.8, max: 1.2 }, options)
  return delayedEffect(self, (duration) =>
    core.map(Random.next, (random) => {
      const d = Duration.toMillis(duration)
      const jittered = d * min * (1 - random) + d * max * random
      return Duration.millis(jittered)
    }))
})

/** @internal */
export const linear = (baseInput: Duration.DurationInput): Schedule.Schedule<Duration.Duration> => {
  const base = Duration.decode(baseInput)
  return delayedSchedule(map(forever, (i) => Duration.times(base, i + 1)))
}

/** @internal */
export const map = dual<
  <Out, Out2>(
    f: (out: Out) => Out2
  ) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out2, In, R>,
  <Out, In, R, Out2>(
    self: Schedule.Schedule<Out, In, R>,
    f: (out: Out) => Out2
  ) => Schedule.Schedule<Out2, In, R>
>(2, (self, f) => mapEffect(self, (out) => core.sync(() => f(out))))

/** @internal */
export const mapEffect = dual<
  <Out, Out2, R2>(
    f: (out: Out) => Effect.Effect<Out2, never, R2>
  ) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out2, In, R | R2>,
  <Out, In, R, Out2, R2>(
    self: Schedule.Schedule<Out, In, R>,
    f: (out: Out) => Effect.Effect<Out2, never, R2>
  ) => Schedule.Schedule<Out2, In, R | R2>
>(2, (self, f) =>
  makeWithState(
    self.initial,
    (now, input, state) =>
      core.flatMap(self.step(now, input, state), ([state, out, decision]) =>
        core.map(
          f(out),
          (out2) => [state, out2, decision] as const
        ))
  ))

/** @internal */
export const minuteOfHour = (minute: number): Schedule.Schedule<number> =>
  makeWithState<[number, number], unknown, number>(
    [Number.MIN_SAFE_INTEGER, 0],
    (now, _, state) => {
      if (!Number.isInteger(minute) || minute < 0 || 59 < minute) {
        return core.dieSync(() =>
          new core.IllegalArgumentException(
            `Invalid argument in: minuteOfHour(${minute}). Must be in range 0...59`
          )
        )
      }
      const n = state[1]
      const initial = n === 0
      const minute0 = nextMinute(now, minute, initial)
      const start = beginningOfMinute(minute0)
      const end = endOfMinute(minute0)
      const interval = Interval.make(start, end)
      return core.succeed(
        [
          [end, n + 1],
          n,
          ScheduleDecision.continueWith(interval)
        ]
      )
    }
  )

/** @internal */
export const modifyDelay = dual<
  <Out>(
    f: (out: Out, duration: Duration.Duration) => Duration.DurationInput
  ) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R>,
  <Out, In, R>(
    self: Schedule.Schedule<Out, In, R>,
    f: (out: Out, duration: Duration.Duration) => Duration.DurationInput
  ) => Schedule.Schedule<Out, In, R>
>(2, (self, f) => modifyDelayEffect(self, (out, duration) => core.sync(() => f(out, duration))))

/** @internal */
export const modifyDelayEffect = dual<
  <Out, R2>(
    f: (out: Out, duration: Duration.Duration) => Effect.Effect<Duration.DurationInput, never, R2>
  ) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R | R2>,
  <Out, In, R, R2>(
    self: Schedule.Schedule<Out, In, R>,
    f: (out: Out, duration: Duration.Duration) => Effect.Effect<Duration.DurationInput, never, R2>
  ) => Schedule.Schedule<Out, In, R | R2>
>(2, (self, f) =>
  makeWithState(
    self.initial,
    (now, input, state) =>
      core.flatMap(self.step(now, input, state), ([state, out, decision]) => {
        if (ScheduleDecision.isDone(decision)) {
          return core.succeed([state, out, decision] as const)
        }
        const intervals = decision.intervals
        const delay = Interval.size(Interval.make(now, Intervals.start(intervals)))
        return core.map(f(out, delay), (durationInput) => {
          const duration = Duration.decode(durationInput)
          const oldStart = Intervals.start(intervals)
          const newStart = now + Duration.toMillis(duration)
          const delta = newStart - oldStart
          const newEnd = Math.max(0, Intervals.end(intervals) + delta)
          const newInterval = Interval.make(newStart, newEnd)
          return [state, out, ScheduleDecision.continueWith(newInterval)] as const
        })
      })
  ))

/** @internal */
export const onDecision = dual<
  <Out, X, R2>(
    f: (out: Out, decision: ScheduleDecision.ScheduleDecision) => Effect.Effect<X, never, R2>
  ) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R | R2>,
  <Out, In, R, X, R2>(
    self: Schedule.Schedule<Out, In, R>,
    f: (out: Out, decision: ScheduleDecision.ScheduleDecision) => Effect.Effect<X, never, R2>
  ) => Schedule.Schedule<Out, In, R | R2>
>(2, (self, f) =>
  makeWithState(
    self.initial,
    (now, input, state) =>
      core.flatMap(
        self.step(now, input, state),
        ([state, out, decision]) => core.as(f(out, decision), [state, out, decision] as const)
      )
  ))

/** @internal */
export const passthrough = <Out, In, R>(
  self: Schedule.Schedule<Out, In, R>
): Schedule.Schedule<In, In, R> =>
  makeWithState(self.initial, (now, input, state) =>
    pipe(
      self.step(now, input, state),
      core.map(([state, _, decision]) => [state, input, decision] as const)
    ))

/** @internal */
export const provideContext = dual<
  <R>(
    context: Context.Context<R>
  ) => <Out, In>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In>,
  <Out, In, R>(
    self: Schedule.Schedule<Out, In, R>,
    context: Context.Context<R>
  ) => Schedule.Schedule<Out, In>
>(2, (self, context) =>
  makeWithState(self.initial, (now, input, state) =>
    core.provideContext(
      self.step(now, input, state),
      context
    )))

/** @internal */
export const provideService = dual<
  <I, S>(
    tag: Context.Tag<I, S>,
    service: Types.NoInfer<S>
  ) => <Out, In, R>(
    self: Schedule.Schedule<Out, In, R>
  ) => Schedule.Schedule<Out, In, Exclude<R, I>>,
  <Out, In, R, I, S>(
    self: Schedule.Schedule<Out, In, R>,
    tag: Context.Tag<I, S>,
    service: Types.NoInfer<S>
  ) => Schedule.Schedule<Out, In, Exclude<R, I>>
>(3, <Out, In, R, I, S>(
  self: Schedule.Schedule<Out, In, R>,
  tag: Context.Tag<I, S>,
  service: Types.NoInfer<S>
): Schedule.Schedule<Out, In, Exclude<R, I>> =>
  makeWithState(self.initial, (now, input, state) =>
    core.contextWithEffect((env) =>
      core.provideContext(
        // @ts-expect-error
        self.step(now, input, state),
        Context.add(env, tag, service)
      )
    )))

/** @internal */
export const recurUntil = <A>(f: Predicate<A>): Schedule.Schedule<A, A> => untilInput(identity<A>(), f)

/** @internal */
export const recurUntilEffect = <A, R>(
  f: (a: A) => Effect.Effect<boolean, never, R>
): Schedule.Schedule<A, A, R> => untilInputEffect(identity<A>(), f)

/** @internal */
export const recurUntilOption = <A, B>(pf: (a: A) => Option.Option<B>): Schedule.Schedule<Option.Option<B>, A> =>
  untilOutput(map(identity<A>(), pf), Option.isSome)

/** @internal */
export const recurUpTo = (
  durationInput: Duration.DurationInput
): Schedule.Schedule<Duration.Duration> => {
  const duration = Duration.decode(durationInput)
  return whileOutput(elapsed, (elapsed) => Duration.lessThan(elapsed, duration))
}

/** @internal */
export const recurWhile = <A>(f: Predicate<A>): Schedule.Schedule<A, A> => whileInput(identity<A>(), f)

/** @internal */
export const recurWhileEffect = <A, R>(
  f: (a: A) => Effect.Effect<boolean, never, R>
): Schedule.Schedule<A, A, R> => whileInputEffect(identity<A>(), f)

/** @internal */
export const recurs = (n: number): Schedule.Schedule<number> => whileOutput(forever, (out) => out < n)

/** @internal */
export const reduce = dual<
  <Out, Z>(
    zero: Z,
    f: (z: Z, out: Out) => Z
  ) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Z, In, R>,
  <Out, In, R, Z>(
    self: Schedule.Schedule<Out, In, R>,
    zero: Z,
    f: (z: Z, out: Out) => Z
  ) => Schedule.Schedule<Z, In, R>
>(3, (self, zero, f) => reduceEffect(self, zero, (z, out) => core.sync(() => f(z, out))))

/** @internal */
export const reduceEffect = dual<
  <Z, Out, R2>(
    zero: Z,
    f: (z: Z, out: Out) => Effect.Effect<Z, never, R2>
  ) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Z, In, R | R2>,
  <Out, In, R, Z, R2>(
    self: Schedule.Schedule<Out, In, R>,
    zero: Z,
    f: (z: Z, out: Out) => Effect.Effect<Z, never, R2>
  ) => Schedule.Schedule<Z, In, R | R2>
>(3, (self, zero, f) =>
  makeWithState(
    [self.initial, zero] as const,
    (now, input, [s, z]) =>
      core.flatMap(self.step(now, input, s), ([s, out, decision]) =>
        ScheduleDecision.isDone(decision)
          ? core.succeed([[s, z], z, decision as ScheduleDecision.ScheduleDecision] as const)
          : core.map(f(z, out), (z2) => [[s, z2], z, decision] as const))
  ))

/** @internal */
export const repeatForever = <Env, In, Out>(self: Schedule.Schedule<Out, In, Env>): Schedule.Schedule<Out, In, Env> =>
  makeWithState(self.initial, (now, input, state) => {
    const step = (
      now: number,
      input: In,
      state: any
    ): Effect.Effect<[any, Out, ScheduleDecision.ScheduleDecision], never, Env> =>
      core.flatMap(
        self.step(now, input, state),
        ([state, out, decision]) =>
          ScheduleDecision.isDone(decision)
            ? step(now, input, self.initial)
            : core.succeed([state, out, decision])
      )
    return step(now, input, state)
  })

/** @internal */
export const repetitions = <Out, In, R>(self: Schedule.Schedule<Out, In, R>): Schedule.Schedule<number, In, R> =>
  reduce(self, 0, (n, _) => n + 1)

/** @internal */
export const resetAfter = dual<
  (
    duration: Duration.DurationInput
  ) => <Out, In, R>(
    self: Schedule.Schedule<Out, In, R>
  ) => Schedule.Schedule<Out, In, R>,
  <Out, In, R>(
    self: Schedule.Schedule<Out, In, R>,
    duration: Duration.DurationInput
  ) => Schedule.Schedule<Out, In, R>
>(2, (self, durationInput) => {
  const duration = Duration.decode(durationInput)
  return pipe(
    self,
    intersect(elapsed),
    resetWhen(([, time]) => Duration.greaterThanOrEqualTo(time, duration)),
    map((out) => out[0])
  )
})

/** @internal */
export const resetWhen = dual<
  <Out>(f: Predicate<Out>) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R>,
  <Out, In, R>(self: Schedule.Schedule<Out, In, R>, f: Predicate<Out>) => Schedule.Schedule<Out, In, R>
>(2, (self, f) =>
  makeWithState(
    self.initial,
    (now, input, state) =>
      core.flatMap(self.step(now, input, state), ([state, out, decision]) =>
        f(out)
          ? self.step(now, input, self.initial)
          : core.succeed([state, out, decision] as const))
  ))

/** @internal */
export const run = dual<
  <In>(
    now: number,
    input: Iterable<In>
  ) => <Out, R>(self: Schedule.Schedule<Out, In, R>) => Effect.Effect<Chunk.Chunk<Out>, never, R>,
  <Out, In, R>(
    self: Schedule.Schedule<Out, In, R>,
    now: number,
    input: Iterable<In>
  ) => Effect.Effect<Chunk.Chunk<Out>, never, R>
>(3, (self, now, input) =>
  pipe(
    runLoop(self, now, Chunk.fromIterable(input), self.initial, Chunk.empty()),
    core.map((list) => Chunk.reverse(list))
  ))

/** @internal */
const runLoop = <Env, In, Out>(
  self: Schedule.Schedule<Out, In, Env>,
  now: number,
  inputs: Chunk.Chunk<In>,
  state: any,
  acc: Chunk.Chunk<Out>
): Effect.Effect<Chunk.Chunk<Out>, never, Env> => {
  if (!Chunk.isNonEmpty(inputs)) {
    return core.succeed(acc)
  }
  const input = Chunk.headNonEmpty(inputs)
  const nextInputs = Chunk.tailNonEmpty(inputs)
  return core.flatMap(self.step(now, input, state), ([state, out, decision]) => {
    if (ScheduleDecision.isDone(decision)) {
      return core.sync(() => pipe(acc, Chunk.prepend(out)))
    }
    return runLoop(
      self,
      Intervals.start(decision.intervals),
      nextInputs,
      state,
      Chunk.prepend(acc, out)
    )
  })
}

/** @internal */
export const secondOfMinute = (second: number): Schedule.Schedule<number> =>
  makeWithState<[number, number], unknown, number>(
    [Number.NEGATIVE_INFINITY, 0],
    (now, _, state) => {
      if (!Number.isInteger(second) || second < 0 || 59 < second) {
        return core.dieSync(() =>
          new core.IllegalArgumentException(
            `Invalid argument in: secondOfMinute(${second}). Must be in range 0...59`
          )
        )
      }
      const n = state[1]
      const initial = n === 0
      const second0 = nextSecond(now, second, initial)
      const start = beginningOfSecond(second0)
      const end = endOfSecond(second0)
      const interval = Interval.make(start, end)
      return core.succeed(
        [
          [end, n + 1],
          n,
          ScheduleDecision.continueWith(interval)
        ]
      )
    }
  )

/** @internal */
export const spaced = (duration: Duration.DurationInput): Schedule.Schedule<number> => addDelay(forever, () => duration)

/** @internal */
export const succeed = <A>(value: A): Schedule.Schedule<A> => map(forever, () => value)

/** @internal */
export const sync = <A>(evaluate: LazyArg<A>): Schedule.Schedule<A> => map(forever, evaluate)

/** @internal */
export const tapInput = dual<
  <In2, X, R2>(
    f: (input: In2) => Effect.Effect<X, never, R2>
  ) => <Out, In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In & In2, R | R2>,
  <Out, In, R, In2, X, R2>(
    self: Schedule.Schedule<Out, In, R>,
    f: (input: In2) => Effect.Effect<X, never, R2>
  ) => Schedule.Schedule<Out, In & In2, R | R2>
>(2, (self, f) =>
  makeWithState(self.initial, (now, input, state) =>
    core.zipRight(
      f(input),
      self.step(now, input, state)
    )))

/** @internal */
export const tapOutput = dual<
  <X, R2, Out>(
    f: (out: Types.NoInfer<Out>) => Effect.Effect<X, never, R2>
  ) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R2 | R>,
  <Out, In, R, X, R2>(
    self: Schedule.Schedule<Out, In, R>,
    f: (out: Out) => Effect.Effect<X, never, R2>
  ) => Schedule.Schedule<Out, In, R | R2>
>(
  2,
  <Out, In, R, X, R2>(
    self: Schedule.Schedule<Out, In, R>,
    f: (out: Out) => Effect.Effect<X, never, R2>
  ): Schedule.Schedule<Out, In, R | R2> =>
    makeWithState(self.initial, (now, input, state) =>
      core.tap(
        self.step(now, input, state),
        ([, out]) => f(out)
      ))
)

/** @internal */
export const unfold = <A>(initial: A, f: (a: A) => A): Schedule.Schedule<A> =>
  makeWithState(initial, (now, _, state) =>
    core.sync(() =>
      [
        f(state),
        state,
        ScheduleDecision.continueWith(Interval.after(now))
      ] as const
    ))

/** @internal */
export const union = dual<
  <Out2, In2, R2>(
    that: Schedule.Schedule<Out2, In2, R2>
  ) => <Out, In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<[Out, Out2], In & In2, R | R2>,
  <Out, In, R, Out2, In2, R2>(
    self: Schedule.Schedule<Out, In, R>,
    that: Schedule.Schedule<Out2, In2, R2>
  ) => Schedule.Schedule<[Out, Out2], In & In2, R | R2>
>(2, (self, that) => unionWith(self, that, Intervals.union))

/** @internal */
export const unionWith = dual<
  <Out2, In2, R2>(
    that: Schedule.Schedule<Out2, In2, R2>,
    f: (x: Intervals.Intervals, y: Intervals.Intervals) => Intervals.Intervals
  ) => <Out, In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<[Out, Out2], In & In2, R | R2>,
  <Out, In, R, Out2, In2, R2>(
    self: Schedule.Schedule<Out, In, R>,
    that: Schedule.Schedule<Out2, In2, R2>,
    f: (x: Intervals.Intervals, y: Intervals.Intervals) => Intervals.Intervals
  ) => Schedule.Schedule<[Out, Out2], In & In2, R | R2>
>(3, (self, that, f) =>
  makeWithState([self.initial, that.initial], (now, input, state) =>
    core.zipWith(
      self.step(now, input, state[0]),
      that.step(now, input, state[1]),
      ([lState, l, lDecision], [rState, r, rDecision]) => {
        if (ScheduleDecision.isDone(lDecision) && ScheduleDecision.isDone(rDecision)) {
          return [[lState, rState], [l, r], ScheduleDecision.done]
        }
        if (ScheduleDecision.isDone(lDecision) && ScheduleDecision.isContinue(rDecision)) {
          return [
            [lState, rState],
            [l, r],
            ScheduleDecision.continue(rDecision.intervals)
          ]
        }
        if (ScheduleDecision.isContinue(lDecision) && ScheduleDecision.isDone(rDecision)) {
          return [
            [lState, rState],
            [l, r],
            ScheduleDecision.continue(lDecision.intervals)
          ]
        }
        if (ScheduleDecision.isContinue(lDecision) && ScheduleDecision.isContinue(rDecision)) {
          const combined = f(lDecision.intervals, rDecision.intervals)
          return [
            [lState, rState],
            [l, r],
            ScheduleDecision.continue(combined)
          ]
        }
        throw new Error(
          "BUG: Schedule.unionWith - please report an issue at https://github.com/Effect-TS/effect/issues"
        )
      }
    )))

/** @internal */
export const untilInput = dual<
  <In>(f: Predicate<In>) => <Out, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R>,
  <Out, In, R>(self: Schedule.Schedule<Out, In, R>, f: Predicate<In>) => Schedule.Schedule<Out, In, R>
>(2, (self, f) => check(self, (input, _) => !f(input)))

/** @internal */
export const untilInputEffect = dual<
  <In, R2>(
    f: (input: In) => Effect.Effect<boolean, never, R2>
  ) => <Out, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R | R2>,
  <Out, In, R, R2>(
    self: Schedule.Schedule<Out, In, R>,
    f: (input: In) => Effect.Effect<boolean, never, R2>
  ) => Schedule.Schedule<Out, In, R | R2>
>(2, (self, f) => checkEffect(self, (input, _) => effect.negate(f(input))))

/** @internal */
export const untilOutput = dual<
  <Out>(f: Predicate<Out>) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R>,
  <Out, In, R>(self: Schedule.Schedule<Out, In, R>, f: Predicate<Out>) => Schedule.Schedule<Out, In, R>
>(2, (self, f) => check(self, (_, out) => !f(out)))

/** @internal */
export const untilOutputEffect = dual<
  <Out, R2>(
    f: (out: Out) => Effect.Effect<boolean, never, R2>
  ) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R | R2>,
  <Out, In, R, R2>(
    self: Schedule.Schedule<Out, In, R>,
    f: (out: Out) => Effect.Effect<boolean, never, R2>
  ) => Schedule.Schedule<Out, In, R | R2>
>(2, (self, f) => checkEffect(self, (_, out) => effect.negate(f(out))))

/** @internal */
export const upTo = dual<
  (duration: Duration.DurationInput) => <Out, In, R>(
    self: Schedule.Schedule<Out, In, R>
  ) => Schedule.Schedule<Out, In, R>,
  <Out, In, R>(
    self: Schedule.Schedule<Out, In, R>,
    duration: Duration.DurationInput
  ) => Schedule.Schedule<Out, In, R>
>(2, (self, duration) => zipLeft(self, recurUpTo(duration)))

/** @internal */
export const whileInput = dual<
  <In>(f: Predicate<In>) => <Out, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R>,
  <Out, In, R>(self: Schedule.Schedule<Out, In, R>, f: Predicate<In>) => Schedule.Schedule<Out, In, R>
>(2, (self, f) => check(self, (input, _) => f(input)))

/** @internal */
export const whileInputEffect = dual<
  <In, R2>(
    f: (input: In) => Effect.Effect<boolean, never, R2>
  ) => <Out, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R | R2>,
  <Out, In, R, R2>(
    self: Schedule.Schedule<Out, In, R>,
    f: (input: In) => Effect.Effect<boolean, never, R2>
  ) => Schedule.Schedule<Out, In, R | R2>
>(2, (self, f) => checkEffect(self, (input, _) => f(input)))

/** @internal */
export const whileOutput = dual<
  <Out>(f: Predicate<Out>) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R>,
  <Out, In, R>(self: Schedule.Schedule<Out, In, R>, f: Predicate<Out>) => Schedule.Schedule<Out, In, R>
>(2, (self, f) => check(self, (_, out) => f(out)))

/** @internal */
export const whileOutputEffect = dual<
  <Out, R2>(
    f: (out: Out) => Effect.Effect<boolean, never, R2>
  ) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In, R | R2>,
  <Out, In, R, R2>(
    self: Schedule.Schedule<Out, In, R>,
    f: (out: Out) => Effect.Effect<boolean, never, R2>
  ) => Schedule.Schedule<Out, In, R | R2>
>(2, (self, f) => checkEffect(self, (_, out) => f(out)))

/** @internal */
export const windowed = (intervalInput: Duration.DurationInput): Schedule.Schedule<number> => {
  const interval = Duration.decode(intervalInput)
  const millis = Duration.toMillis(interval)
  return makeWithState<[Option.Option<number>, number], unknown, number>(
    [Option.none(), 0],
    (now, _, [option, n]) => {
      switch (option._tag) {
        case "None": {
          return core.succeed(
            [
              [Option.some(now), n + 1],
              n,
              ScheduleDecision.continueWith(Interval.after(now + millis))
            ]
          )
        }
        case "Some": {
          return core.succeed(
            [
              [Option.some(option.value), n + 1],
              n,
              ScheduleDecision.continueWith(
                Interval.after(now + (millis - ((now - option.value) % millis)))
              )
            ]
          )
        }
      }
    }
  )
}

/** @internal */
export const zipLeft = dual<
  <Out2, In2, R2>(
    that: Schedule.Schedule<Out2, In2, R2>
  ) => <Out, In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out, In & In2, R | R2>,
  <Out, In, R, Out2, In2, R2>(
    self: Schedule.Schedule<Out, In, R>,
    that: Schedule.Schedule<Out2, In2, R2>
  ) => Schedule.Schedule<Out, In & In2, R | R2>
>(2, (self, that) => map(intersect(self, that), (out) => out[0]))

/** @internal */
export const zipRight = dual<
  <Out2, In2, R2>(
    that: Schedule.Schedule<Out2, In2, R2>
  ) => <Out, In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out2, In & In2, R | R2>,
  <Out, In, R, Out2, In2, R2>(
    self: Schedule.Schedule<Out, In, R>,
    that: Schedule.Schedule<Out2, In2, R2>
  ) => Schedule.Schedule<Out2, In & In2, R | R2>
>(2, (self, that) => map(intersect(self, that), (out) => out[1]))

/** @internal */
export const zipWith = dual<
  <Out2, In2, R2, Out, Out3>(
    that: Schedule.Schedule<Out2, In2, R2>,
    f: (out: Out, out2: Out2) => Out3
  ) => <In, R>(self: Schedule.Schedule<Out, In, R>) => Schedule.Schedule<Out3, In & In2, R | R2>,
  <Out, In, R, Out2, In2, R2, Out3>(
    self: Schedule.Schedule<Out, In, R>,
    that: Schedule.Schedule<Out2, In2, R2>,
    f: (out: Out, out2: Out2) => Out3
  ) => Schedule.Schedule<Out3, In & In2, R | R2>
>(3, (self, that, f) => map(intersect(self, that), ([out, out2]) => f(out, out2)))

// -----------------------------------------------------------------------------
// Seconds
// -----------------------------------------------------------------------------

/** @internal */
export const beginningOfSecond = (now: number): number => {
  const date = new Date(now)
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    0
  ).getTime()
}

/** @internal */
export const endOfSecond = (now: number): number => {
  const date = new Date(beginningOfSecond(now))
  return date.setSeconds(date.getSeconds() + 1)
}

/** @internal */
export const nextSecond = (now: number, second: number, initial: boolean): number => {
  const date = new Date(now)
  if (date.getSeconds() === second && initial) {
    return now
  }
  if (date.getSeconds() < second) {
    return date.setSeconds(second)
  }
  // Set seconds to the provided value and add one minute
  const newDate = new Date(date.setSeconds(second))
  return newDate.setTime(newDate.getTime() + 1000 * 60)
}

// -----------------------------------------------------------------------------
// Minutes
// -----------------------------------------------------------------------------

/** @internal */
export const beginningOfMinute = (now: number): number => {
  const date = new Date(now)
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    0,
    0
  ).getTime()
}

/** @internal */
export const endOfMinute = (now: number): number => {
  const date = new Date(beginningOfMinute(now))
  return date.setMinutes(date.getMinutes() + 1)
}

/** @internal */
export const nextMinute = (now: number, minute: number, initial: boolean): number => {
  const date = new Date(now)
  if (date.getMinutes() === minute && initial) {
    return now
  }
  if (date.getMinutes() < minute) {
    return date.setMinutes(minute)
  }
  // Set minutes to the provided value and add one hour
  const newDate = new Date(date.setMinutes(minute))
  return newDate.setTime(newDate.getTime() + 1000 * 60 * 60)
}

// -----------------------------------------------------------------------------
// Hours
// -----------------------------------------------------------------------------

/** @internal */
export const beginningOfHour = (now: number): number => {
  const date = new Date(now)
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    0,
    0,
    0
  ).getTime()
}

/** @internal */
export const endOfHour = (now: number): number => {
  const date = new Date(beginningOfHour(now))
  return date.setHours(date.getHours() + 1)
}

/** @internal */
export const nextHour = (now: number, hour: number, initial: boolean): number => {
  const date = new Date(now)
  if (date.getHours() === hour && initial) {
    return now
  }
  if (date.getHours() < hour) {
    return date.setHours(hour)
  }
  // Set hours to the provided value and add one day
  const newDate = new Date(date.setHours(hour))
  return newDate.setTime(newDate.getTime() + 1000 * 60 * 60 * 24)
}

// -----------------------------------------------------------------------------
// Days
// -----------------------------------------------------------------------------

/** @internal */
export const beginningOfDay = (now: number): number => {
  const date = new Date(now)
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    0,
    0,
    0,
    0
  ).getTime()
}

/** @internal */
export const endOfDay = (now: number): number => {
  const date = new Date(beginningOfDay(now))
  return date.setDate(date.getDate() + 1)
}

/** @internal */
export const nextDay = (now: number, dayOfWeek: number, initial: boolean): number => {
  const date = new Date(now)
  if (date.getDay() === dayOfWeek && initial) {
    return now
  }
  const nextDayOfWeek = (7 + dayOfWeek - date.getDay()) % 7
  return date.setDate(date.getDate() + (nextDayOfWeek === 0 ? 7 : nextDayOfWeek))
}

/** @internal */
export const nextDayOfMonth = (now: number, day: number, initial: boolean): number => {
  const date = new Date(now)
  if (date.getDate() === day && initial) {
    return now
  }
  if (date.getDate() < day) {
    return date.setDate(day)
  }
  return findNextMonth(now, day, 1)
}

/** @internal */
export const findNextMonth = (now: number, day: number, months: number): number => {
  const d = new Date(now)
  const tmp1 = new Date(d.setDate(day))
  const tmp2 = new Date(tmp1.setMonth(tmp1.getMonth() + months))
  if (tmp2.getDate() === day) {
    const d2 = new Date(now)
    const tmp3 = new Date(d2.setDate(day))
    return tmp3.setMonth(tmp3.getMonth() + months)
  }
  return findNextMonth(now, day, months + 1)
}

// circular with Effect

const ScheduleDefectTypeId = Symbol.for("effect/Schedule/ScheduleDefect")
class ScheduleDefect<E> {
  readonly [ScheduleDefectTypeId]: typeof ScheduleDefectTypeId
  constructor(readonly error: E) {
    this[ScheduleDefectTypeId] = ScheduleDefectTypeId
  }
}
const isScheduleDefect = <E = unknown>(u: unknown): u is ScheduleDefect<E> => hasProperty(u, ScheduleDefectTypeId)
const scheduleDefectWrap = <A, E, R>(self: Effect.Effect<A, E, R>) =>
  core.catchAll(self, (e) => core.die(new ScheduleDefect(e)))

/** @internal */
export const scheduleDefectRefailCause = <E>(cause: Cause.Cause<E>) =>
  Option.match(
    internalCause.find(
      cause,
      (_) => internalCause.isDieType(_) && isScheduleDefect<E>(_.defect) ? Option.some(_.defect) : Option.none()
    ),
    {
      onNone: () => cause,
      onSome: (error) => internalCause.fail(error.error)
    }
  )

/** @internal */
export const scheduleDefectRefail = <A, E, R>(effect: Effect.Effect<A, E, R>) =>
  core.catchAllCause(effect, (cause) => core.failCause(scheduleDefectRefailCause(cause)))

/** @internal */
export const repeat_Effect = dual<
  <R1, A, B>(
    schedule: Schedule.Schedule<B, A, R1>
  ) => <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E, R | R1>,
  <A, E, R, R1, B>(
    self: Effect.Effect<A, E, R>,
    schedule: Schedule.Schedule<B, A, R1>
  ) => Effect.Effect<B, E, R | R1>
>(2, (self, schedule) => repeatOrElse_Effect(self, schedule, (e, _) => core.fail(e)))

/** @internal */
export const repeat_combined = dual<{
  <O extends Types.NoExcessProperties<Effect.Repeat.Options<A>, O>, A>(
    options: O
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Repeat.Return<R, E, A, O>
  <B, A, R1>(
    schedule: Schedule.Schedule<B, A, R1>
  ): <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E, R | R1>
}, {
  <A, E, R, O extends Types.NoExcessProperties<Effect.Repeat.Options<A>, O>>(
    self: Effect.Effect<A, E, R>,
    options: O
  ): Effect.Repeat.Return<R, E, A, O>
  <A, E, R, B, R1>(
    self: Effect.Effect<A, E, R>,
    schedule: Schedule.Schedule<B, A, R1>
  ): Effect.Effect<B, E, R | R1>
}>(
  2,
  (self: Effect.Effect<any, any, any>, options: Effect.Repeat.Options<any> | Schedule.Schedule<any, any, any>) => {
    if (isSchedule(options)) {
      return repeat_Effect(self, options)
    }

    const base = options.schedule ?? passthrough(forever)
    const withWhile = options.while ?
      whileInputEffect(base, (a) => {
        const applied = options.while!(a)
        if (typeof applied === "boolean") {
          return core.succeed(applied)
        }
        return scheduleDefectWrap(applied)
      }) :
      base
    const withUntil = options.until ?
      untilInputEffect(withWhile, (a) => {
        const applied = options.until!(a)
        if (typeof applied === "boolean") {
          return core.succeed(applied)
        }
        return scheduleDefectWrap(applied)
      }) :
      withWhile
    const withTimes = options.times ?
      intersect(withUntil, recurs(options.times)).pipe(map((intersectionPair) => intersectionPair[0])) :
      withUntil
    return scheduleDefectRefail(repeat_Effect(self, withTimes))
  }
)

/** @internal */
export const repeatOrElse_Effect = dual<
  <R2, A, B, E, E2, R3>(
    schedule: Schedule.Schedule<B, A, R2>,
    orElse: (error: E, option: Option.Option<B>) => Effect.Effect<B, E2, R3>
  ) => <R>(self: Effect.Effect<A, E, R>) => Effect.Effect<B, E2, R | R2 | R3>,
  <A, E, R, R2, B, E2, R3>(
    self: Effect.Effect<A, E, R>,
    schedule: Schedule.Schedule<B, A, R2>,
    orElse: (error: E, option: Option.Option<B>) => Effect.Effect<B, E2, R3>
  ) => Effect.Effect<B, E2, R | R2 | R3>
>(3, (self, schedule, orElse) =>
  core.flatMap(driver(schedule), (driver) =>
    core.matchEffect(self, {
      onFailure: (error) => orElse(error, Option.none()),
      onSuccess: (value) =>
        repeatOrElseEffectLoop(
          effect.provideServiceEffect(
            self,
            CurrentIterationMetadata,
            ref.get(driver.iterationMeta)
          ),
          driver,
          (error, option) =>
            effect.provideServiceEffect(
              orElse(error, option),
              CurrentIterationMetadata,
              ref.get(driver.iterationMeta)
            ),
          value
        )
    })))

/** @internal */
const repeatOrElseEffectLoop = <A, E, R, R1, B, C, E2, R2>(
  self: Effect.Effect<A, E, R>,
  driver: Schedule.ScheduleDriver<B, A, R1>,
  orElse: (error: E, option: Option.Option<B>) => Effect.Effect<C, E2, R2>,
  value: A
): Effect.Effect<B | C, E2, R | R1 | R2> =>
  core.matchEffect(driver.next(value), {
    onFailure: () => core.orDie(driver.last),
    onSuccess: (b) =>
      core.matchEffect(self, {
        onFailure: (error) => orElse(error, Option.some(b)),
        onSuccess: (value) => repeatOrElseEffectLoop(self, driver, orElse, value)
      })
  })

/** @internal */
export const retry_Effect = dual<
  <B, E, R1>(
    policy: Schedule.Schedule<B, E, R1>
  ) => <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R | R1>,
  <A, E, R, B, R1>(
    self: Effect.Effect<A, E, R>,
    policy: Schedule.Schedule<B, E, R1>
  ) => Effect.Effect<A, E, R | R1>
>(2, (self, policy) => retryOrElse_Effect(self, policy, (e, _) => core.fail(e)))

/** @internal */
export const retry_combined: {
  <E, O extends Types.NoExcessProperties<Effect.Retry.Options<E>, O>>(
    options: O
  ): <A, R>(
    self: Effect.Effect<A, E, R>
  ) => Effect.Retry.Return<R, E, A, O>
  <B, E, R1>(
    policy: Schedule.Schedule<B, Types.NoInfer<E>, R1>
  ): <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R1 | R>
  <A, E, R, O extends Types.NoExcessProperties<Effect.Retry.Options<E>, O>>(
    self: Effect.Effect<A, E, R>,
    options: O
  ): Effect.Retry.Return<R, E, A, O>
  <A, E, R, B, R1>(
    self: Effect.Effect<A, E, R>,
    policy: Schedule.Schedule<B, Types.NoInfer<E>, R1>
  ): Effect.Effect<A, E, R1 | R>
} = dual(
  2,
  (
    self: Effect.Effect<any, any, any>,
    options: Effect.Retry.Options<any> | Schedule.Schedule<any, any, any>
  ) => {
    if (isSchedule(options)) {
      return retry_Effect(self, options)
    }
    return scheduleDefectRefail(retry_Effect(self, fromRetryOptions(options)))
  }
)

/** @internal */
export const fromRetryOptions = (options: Effect.Retry.Options<any>): Schedule.Schedule<any, any, any> => {
  const base = options.schedule ?? forever
  const withWhile = options.while ?
    whileInputEffect(base, (e) => {
      const applied = options.while!(e)
      if (typeof applied === "boolean") {
        return core.succeed(applied)
      }
      return scheduleDefectWrap(applied)
    }) :
    base
  const withUntil = options.until ?
    untilInputEffect(withWhile, (e) => {
      const applied = options.until!(e)
      if (typeof applied === "boolean") {
        return core.succeed(applied)
      }
      return scheduleDefectWrap(applied)
    }) :
    withWhile
  return options.times !== undefined ?
    intersect(withUntil, recurs(options.times)) :
    withUntil
}

/** @internal */
export const retryOrElse_Effect = dual<
  <A1, E, R1, A2, E2, R2>(
    policy: Schedule.Schedule<A1, Types.NoInfer<E>, R1>,
    orElse: (e: Types.NoInfer<E>, out: A1) => Effect.Effect<A2, E2, R2>
  ) => <A, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A | A2, E2, R | R1 | R2>,
  <A, E, R, A1, R1, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    policy: Schedule.Schedule<A1, Types.NoInfer<E>, R1>,
    orElse: (e: Types.NoInfer<E>, out: A1) => Effect.Effect<A2, E2, R2>
  ) => Effect.Effect<A | A2, E2, R | R1 | R2>
>(3, (self, policy, orElse) =>
  core.flatMap(
    driver(policy),
    (driver) =>
      retryOrElse_EffectLoop(
        effect.provideServiceEffect(
          self,
          CurrentIterationMetadata,
          ref.get(driver.iterationMeta)
        ),
        driver,
        (e, out) =>
          effect.provideServiceEffect(
            orElse(e, out),
            CurrentIterationMetadata,
            ref.get(driver.iterationMeta)
          )
      )
  ))

/** @internal */
const retryOrElse_EffectLoop = <A, E, R, R1, A1, A2, E2, R2>(
  self: Effect.Effect<A, E, R>,
  driver: Schedule.ScheduleDriver<A1, E, R1>,
  orElse: (e: E, out: A1) => Effect.Effect<A2, E2, R2>
): Effect.Effect<A | A2, E2, R | R1 | R2> => {
  return core.catchAll(
    self,
    (e) =>
      core.matchEffect(driver.next(e), {
        onFailure: () =>
          pipe(
            driver.last,
            core.orDie,
            core.flatMap((out) => orElse(e, out))
          ),
        onSuccess: () => retryOrElse_EffectLoop(self, driver, orElse)
      })
  )
}

/** @internal */
export const schedule_Effect = dual<
  <A, R2, Out>(
    schedule: Schedule.Schedule<Out, NoInfer<A> | undefined, R2>
  ) => <E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<Out, E, R | R2>,
  <A, E, R, R2, Out>(
    self: Effect.Effect<A, E, R>,
    schedule: Schedule.Schedule<Out, A | undefined, R2>
  ) => Effect.Effect<Out, E, R | R2>
>(2, <A, E, R, R2, Out>(
  self: Effect.Effect<A, E, R>,
  schedule: Schedule.Schedule<Out, A | undefined, R2>
) => scheduleFrom_Effect(self, void 0, schedule))

/** @internal */
export const scheduleFrom_Effect = dual<
  <R2, In, Out>(
    initial: In,
    schedule: Schedule.Schedule<Out, In, R2>
  ) => <E, R>(self: Effect.Effect<In, E, R>) => Effect.Effect<Out, E, R | R2>,
  <In, E, R, R2, Out>(
    self: Effect.Effect<In, E, R>,
    initial: In,
    schedule: Schedule.Schedule<Out, In, R2>
  ) => Effect.Effect<Out, E, R | R2>
>(3, (self, initial, schedule) =>
  core.flatMap(
    driver(schedule),
    (driver) =>
      scheduleFrom_EffectLoop(
        effect.provideServiceEffect(
          self,
          CurrentIterationMetadata,
          ref.get(driver.iterationMeta)
        ),
        initial,
        driver
      )
  ))

/** @internal */
const scheduleFrom_EffectLoop = <In, E, R, R2, Out>(
  self: Effect.Effect<In, E, R>,
  initial: In,
  driver: Schedule.ScheduleDriver<Out, In, R2>
): Effect.Effect<Out, E, R | R2> =>
  core.matchEffect(driver.next(initial), {
    onFailure: () => core.orDie(driver.last),
    onSuccess: () =>
      core.flatMap(
        self,
        (a) => scheduleFrom_EffectLoop(self, a, driver)
      )
  })

/** @internal */
export const count: Schedule.Schedule<number> = unfold(0, (n) => n + 1)

/** @internal */
export const elapsed: Schedule.Schedule<Duration.Duration> = makeWithState(
  Option.none() as Option.Option<number>,
  (now, _, state) => {
    switch (state._tag) {
      case "None": {
        return core.succeed(
          [
            Option.some(now),
            Duration.zero,
            ScheduleDecision.continueWith(Interval.after(now))
          ] as const
        )
      }
      case "Some": {
        return core.succeed(
          [
            Option.some(state.value),
            Duration.millis(now - state.value),
            ScheduleDecision.continueWith(Interval.after(now))
          ] as const
        )
      }
    }
  }
)

/** @internal */
export const forever: Schedule.Schedule<number> = unfold(0, (n) => n + 1)

/** @internal */
export const once: Schedule.Schedule<void> = asVoid(recurs(1))

/** @internal */
export const stop: Schedule.Schedule<void> = asVoid(recurs(0))

/** @internal */
export const scheduleForked = dual<
  <Out, R2>(
    schedule: Schedule.Schedule<Out, unknown, R2>
  ) => <A, E, R>(
    self: Effect.Effect<A, E, R>
  ) => Effect.Effect<Fiber.RuntimeFiber<Out, E>, never, R | R2 | Scope>,
  <A, E, R, Out, R2>(
    self: Effect.Effect<A, E, R>,
    schedule: Schedule.Schedule<Out, unknown, R2>
  ) => Effect.Effect<Fiber.RuntimeFiber<Out, E>, never, R | R2 | Scope>
>(2, (self, schedule) => forkScoped(schedule_Effect(self, schedule)))
