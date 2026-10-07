/**
 * @since 2.0.0
 */
import * as Chunk from "./Chunk.js"
import type * as Clock from "./Clock.js"
import * as Context from "./Context.js"
import * as DateTime from "./DateTime.js"
import type * as Deferred from "./Deferred.js"
import * as Duration from "./Duration.js"
import type * as Effect from "./Effect.js"
import * as Equal from "./Equal.js"
import type * as Fiber from "./Fiber.js"
import type * as FiberId from "./FiberId.js"
import * as FiberStatus from "./FiberStatus.js"
import { constVoid, dual, identity, pipe } from "./Function.js"
import * as HashMap from "./HashMap.js"
import * as clock from "./internal/clock.js"
import * as effect from "./internal/core-effect.js"
import * as core from "./internal/core.js"
import * as defaultServices from "./internal/defaultServices.js"
import * as circular from "./internal/effect/circular.js"
import * as fiberRuntime from "./internal/fiberRuntime.js"
import * as layer from "./internal/layer.js"
import * as ref from "./internal/ref.js"
import * as synchronized from "./internal/synchronizedRef.js"
import * as SuspendedWarningData from "./internal/testing/suspendedWarningData.js"
import * as WarningData from "./internal/testing/warningData.js"
import type * as Layer from "./Layer.js"
import * as number from "./Number.js"
import * as Option from "./Option.js"
import * as Order from "./Order.js"
import type * as Ref from "./Ref.js"
import type * as SortedSet from "./SortedSet.js"
import type * as Synchronized from "./SynchronizedRef.js"
import * as Annotations from "./TestAnnotations.js"
import * as Live from "./TestLive.js"

/**
 * A `TestClock` makes it easy to deterministically and efficiently test effects
 * involving the passage of time.
 *
 * Instead of waiting for actual time to pass, `sleep` and methods implemented
 * in terms of it schedule effects to take place at a given clock time. Users
 * can adjust the clock time using the `adjust` and `setTime` methods, and all
 * effects scheduled to take place on or before that time will automatically be
 * run in order.
 *
 * For example, here is how we can test `Effect.timeout` using `TestClock`:
 *
 * ```ts
 * import * as assert from "node:assert"
 * import { Duration, Effect, Fiber, TestClock, Option, pipe } from "effect"
 *
 * Effect.gen(function*() {
 *   const fiber = yield* pipe(
 *     Effect.sleep(Duration.minutes(5)),
 *     Effect.timeout(Duration.minutes(1)),
 *     Effect.fork
 *   )
 *   yield* TestClock.adjust(Duration.minutes(1))
 *   const result = yield* Fiber.join(fiber)
 *   assert.deepStrictEqual(result, Option.none())
 * })
 * ```
 *
 * Note how we forked the fiber that `sleep` was invoked on. Calls to `sleep`
 * and methods derived from it will semantically block until the time is set to
 * on or after the time they are scheduled to run. If we didn't fork the fiber
 * on which we called sleep we would never get to set the time on the line
 * below. Thus, a useful pattern when using `TestClock` is to fork the effect
 * being tested, then adjust the clock time, and finally verify that the
 * expected effects have been performed.
 *
 * @since 2.0.0
 */
export interface TestClock extends Clock.Clock {
  adjust(duration: Duration.DurationInput): Effect.Effect<void>
  adjustWith(duration: Duration.DurationInput): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
  readonly save: Effect.Effect<Effect.Effect<void>>
  setTime(time: number): Effect.Effect<void>
  readonly sleeps: Effect.Effect<Chunk.Chunk<number>>
}

/**
 * `Data` represents the state of the `TestClock`, including the clock time.
 *
 * @since 2.0.1
 */
export interface Data {
  readonly instant: number
  readonly sleeps: Chunk.Chunk<readonly [number, Deferred.Deferred<void>]>
}

/**
 * @since 2.0.0
 */
export const makeData = (
  instant: number,
  sleeps: Chunk.Chunk<readonly [number, Deferred.Deferred<void>]>
): Data => ({
  instant,
  sleeps
})

/**
 * @since 2.0.0
 */
export const TestClock: Context.Tag<TestClock, TestClock> = Context.GenericTag<TestClock>("effect/TestClock")

/**
 * The warning message that will be displayed if a test is using time but is
 * not advancing the `TestClock`.
 *
 * @internal
 */
const warning = "Warning: A test is using time, but is not advancing " +
  "the test clock, which may result in the test hanging. Use TestClock.adjust to " +
  "manually advance the time."

/**
 * The warning message that will be displayed if a test is advancing the clock
 * but a fiber is still running.
 *
 * @internal
 */
const suspendedWarning = "Warning: A test is advancing the test clock, " +
  "but a fiber is not suspending, which may result in the test hanging. Use " +
  "TestAspect.diagnose to identity the fiber that is not suspending."

/** @internal */
export class TestClockImpl implements TestClock {
  [clock.ClockTypeId]: Clock.ClockTypeId = clock.ClockTypeId
  constructor(
    readonly clockState: Ref.Ref<Data>,
    readonly live: Live.TestLive,
    readonly annotations: Annotations.TestAnnotations,
    readonly warningState: Synchronized.SynchronizedRef<WarningData.WarningData>,
    readonly suspendedWarningState: Synchronized.SynchronizedRef<SuspendedWarningData.SuspendedWarningData>
  ) {
    this.currentTimeMillis = core.map(
      ref.get(this.clockState),
      (data) => data.instant
    )
    this.currentTimeNanos = core.map(
      ref.get(this.clockState),
      (data) => BigInt(data.instant * 1000000)
    )
  }

  /**
   * Unsafely returns the current time in milliseconds.
   */
  unsafeCurrentTimeMillis(): number {
    return ref.unsafeGet(this.clockState).instant
  }

  /**
   * Unsafely returns the current time in nanoseconds.
   */
  unsafeCurrentTimeNanos(): bigint {
    return BigInt(ref.unsafeGet(this.clockState).instant * 1000000)
  }

  /**
   * Returns the current clock time in milliseconds.
   */
  currentTimeMillis: Effect.Effect<number>

  /**
   * Returns the current clock time in nanoseconds.
   */
  currentTimeNanos: Effect.Effect<bigint>

  /**
   * Saves the `TestClock`'s current state in an effect which, when run, will
   * restore the `TestClock` state to the saved state.
   */
  get save(): Effect.Effect<Effect.Effect<void>> {
    return core.map(ref.get(this.clockState), (data) => ref.set(this.clockState, data))
  }
  /**
   * Sets the current clock time to the specified instant. Any effects that
   * were scheduled to occur on or before the new time will be run in order.
   */
  setTime(instant: number): Effect.Effect<void> {
    return core.zipRight(this.warningDone(), this.run(() => instant))
  }
  /**
   * Semantically blocks the current fiber until the clock time is equal to or
   * greater than the specified duration. Once the clock time is adjusted to
   * on or after the duration, the fiber will automatically be resumed.
   */
  sleep(durationInput: Duration.DurationInput): Effect.Effect<void> {
    const duration = Duration.decode(durationInput)
    return core.flatMap(core.deferredMake<void>(), (deferred) =>
      pipe(
        ref.modify(this.clockState, (data) => {
          const end = data.instant + Duration.toMillis(duration)
          if (end > data.instant) {
            return [
              true,
              makeData(data.instant, pipe(data.sleeps, Chunk.prepend([end, deferred] as const)))
            ] as const
          }
          return [false, data] as const
        }),
        core.flatMap((shouldAwait) =>
          shouldAwait ?
            pipe(this.warningStart(), core.zipRight(core.deferredAwait(deferred))) :
            pipe(core.deferredSucceed(deferred, void 0), core.asVoid)
        )
      ))
  }
  /**
   * Returns a list of the times at which all queued effects are scheduled to
   * resume.
   */
  get sleeps(): Effect.Effect<Chunk.Chunk<number>> {
    return core.map(
      ref.get(this.clockState),
      (data) => Chunk.map(data.sleeps, (_) => _[0])
    )
  }
  /**
   * Increments the current clock time by the specified duration. Any effects
   * that were scheduled to occur on or before the new time will be run in
   * order.
   */
  adjust(durationInput: Duration.DurationInput): Effect.Effect<void> {
    const duration = Duration.decode(durationInput)
    return core.zipRight(this.warningDone(), this.run((n) => n + Duration.toMillis(duration)))
  }
  /**
   * Increments the current clock time by the specified duration. Any effects
   * that were scheduled to occur on or before the new time will be run in
   * order.
   */
  adjustWith(durationInput: Duration.DurationInput) {
    const duration = Duration.decode(durationInput)
    return <A, E, R>(effect: Effect.Effect<A, E, R>): Effect.Effect<A, E, R> =>
      fiberRuntime.zipLeftOptions(effect, this.adjust(duration), { concurrent: true })
  }
  /**
   * Returns a set of all fibers in this test.
   */
  supervisedFibers(): Effect.Effect<SortedSet.SortedSet<Fiber.RuntimeFiber<unknown, unknown>>> {
    return this.annotations.supervisedFibers
  }
  /**
   * Captures a "snapshot" of the identifier and status of all fibers in this
   * test other than the current fiber. Fails with the `void` value if any of
   * these fibers are not done or suspended. Note that because we cannot
   * synchronize on the status of multiple fibers at the same time this
   * snapshot may not be fully consistent.
   */
  freeze(): Effect.Effect<HashMap.HashMap<FiberId.FiberId, FiberStatus.FiberStatus>, void> {
    return core.flatMap(this.supervisedFibers(), (fibers) =>
      pipe(
        fibers,
        effect.reduce(HashMap.empty<FiberId.FiberId, FiberStatus.FiberStatus>(), (map, fiber) =>
          pipe(
            fiber.status,
            core.flatMap((status) => {
              if (FiberStatus.isDone(status)) {
                return core.succeed(HashMap.set(map, fiber.id() as FiberId.FiberId, status as FiberStatus.FiberStatus))
              }
              if (FiberStatus.isSuspended(status)) {
                return core.succeed(HashMap.set(map, fiber.id() as FiberId.FiberId, status as FiberStatus.FiberStatus))
              }
              return core.fail(void 0)
            })
          ))
      ))
  }
  /**
   * Forks a fiber that will display a warning message if a test is using time
   * but is not advancing the `TestClock`.
   */
  warningStart(): Effect.Effect<void> {
    return synchronized.updateSomeEffect(this.warningState, (data) =>
      WarningData.isStart(data) ?
        Option.some(
          pipe(
            this.live.provide(
              pipe(effect.logWarning(warning), effect.delay(Duration.seconds(5)))
            ),
            core.interruptible,
            fiberRuntime.fork,
            core.map((fiber) => WarningData.pending(fiber))
          )
        ) :
        Option.none())
  }
  /**
   * Cancels the warning message that is displayed if a test is using time but
   * is not advancing the `TestClock`.
   */
  warningDone(): Effect.Effect<void> {
    return synchronized.updateSomeEffect(this.warningState, (warningData) => {
      if (WarningData.isStart(warningData)) {
        return Option.some(core.succeed(WarningData.done))
      }
      if (WarningData.isPending(warningData)) {
        return Option.some(pipe(core.interruptFiber(warningData.fiber), core.as(WarningData.done)))
      }
      return Option.none()
    })
  }

  private yieldTimer = core.async<void>((resume) => {
    const timer = setTimeout(() => {
      resume(core.void)
    }, 0)
    return core.sync(() => clearTimeout(timer))
  })

  /**
   * Returns whether all descendants of this fiber are done or suspended.
   */
  suspended(): Effect.Effect<HashMap.HashMap<FiberId.FiberId, FiberStatus.FiberStatus>, void> {
    return pipe(
      this.freeze(),
      core.zip(pipe(this.yieldTimer, core.zipRight(this.freeze()))),
      core.flatMap(([first, last]) =>
        Equal.equals(first, last) ?
          core.succeed(first) :
          core.fail(void 0)
      )
    )
  }
  /**
   * Polls until all descendants of this fiber are done or suspended.
   */
  awaitSuspended(): Effect.Effect<void> {
    return pipe(
      this.suspendedWarningStart(),
      core.zipRight(
        pipe(
          this.suspended(),
          core.zipWith(
            pipe(this.yieldTimer, core.zipRight(this.suspended())),
            Equal.equals
          ),
          effect.filterOrFail(identity, constVoid),
          effect.eventually
        )
      ),
      core.zipRight(this.suspendedWarningDone())
    )
  }
  /**
   * Forks a fiber that will display a warning message if a test is advancing
   * the `TestClock` but a fiber is not suspending.
   */
  suspendedWarningStart(): Effect.Effect<void> {
    return synchronized.updateSomeEffect(this.suspendedWarningState, (suspendedWarningData) => {
      if (SuspendedWarningData.isStart(suspendedWarningData)) {
        return Option.some(
          pipe(
            this.live.provide(
              pipe(
                effect.logWarning(suspendedWarning),
                core.zipRight(ref.set(this.suspendedWarningState, SuspendedWarningData.done)),
                effect.delay(Duration.seconds(5))
              )
            ),
            core.interruptible,
            fiberRuntime.fork,
            core.map((fiber) => SuspendedWarningData.pending(fiber))
          )
        )
      }
      return Option.none()
    })
  }
  /**
   * Cancels the warning message that is displayed if a test is advancing the
   * `TestClock` but a fiber is not suspending.
   */
  suspendedWarningDone(): Effect.Effect<void> {
    return synchronized.updateSomeEffect(this.suspendedWarningState, (suspendedWarningData) => {
      if (SuspendedWarningData.isPending(suspendedWarningData)) {
        return Option.some(pipe(core.interruptFiber(suspendedWarningData.fiber), core.as(SuspendedWarningData.start)))
      }
      return Option.none()
    })
  }
  /**
   * Runs all effects scheduled to occur on or before the specified instant,
   * which may depend on the current time, in order.
   */
  run(f: (instant: number) => number): Effect.Effect<void> {
    return pipe(
      this.awaitSuspended(),
      core.zipRight(pipe(
        ref.modify(this.clockState, (data) => {
          const end = f(data.instant)
          const sorted = pipe(
            data.sleeps,
            Chunk.sort<readonly [number, Deferred.Deferred<void>]>(
              pipe(number.Order, Order.mapInput((_) => _[0]))
            )
          )
          if (Chunk.isNonEmpty(sorted)) {
            const [instant, deferred] = Chunk.headNonEmpty(sorted)
            if (instant <= end) {
              return [
                Option.some([end, deferred] as const),
                makeData(instant, Chunk.tailNonEmpty(sorted))
              ] as const
            }
          }
          return [Option.none(), makeData(end, data.sleeps)] as const
        }),
        core.flatMap((option) => {
          switch (option._tag) {
            case "None": {
              return core.void
            }
            case "Some": {
              const [end, deferred] = option.value
              return pipe(
                core.deferredSucceed(deferred, void 0),
                core.zipRight(core.yieldNow()),
                core.zipRight(this.run(() => end))
              )
            }
          }
        })
      ))
    )
  }
}

/**
 * @since 2.0.0
 */
export const live = (data: Data): Layer.Layer<TestClock, never, Annotations.TestAnnotations | Live.TestLive> =>
  layer.scoped(
    TestClock,
    core.gen(function*() {
      const live = yield* Live.TestLive
      const annotations = yield* Annotations.TestAnnotations
      const clockState = yield* core.sync(() => ref.unsafeMake(data))
      const warningState = yield* circular.makeSynchronized(WarningData.start)
      const suspendedWarningState = yield* circular.makeSynchronized(SuspendedWarningData.start)
      const testClock = new TestClockImpl(clockState, live, annotations, warningState, suspendedWarningState)
      yield* fiberRuntime.withClockScoped(testClock)
      yield* fiberRuntime.addFinalizer(
        () => core.zipRight(testClock.warningDone(), testClock.suspendedWarningDone())
      )
      return testClock
    })
  )

/**
 * @since 2.0.0
 */
export const defaultTestClock: Layer.Layer<TestClock, never, Annotations.TestAnnotations | Live.TestLive> = live(
  makeData(new Date(0).getTime(), Chunk.empty())
)

/**
 * Accesses a `TestClock` instance in the context and increments the time
 * by the specified duration, running any actions scheduled for on or before
 * the new time in order.
 *
 * @since 2.0.0
 */
export const adjust = (durationInput: Duration.DurationInput): Effect.Effect<void> => {
  const duration = Duration.decode(durationInput)
  return testClockWith((testClock) => testClock.adjust(duration))
}

/**
 * @since 2.0.0
 */
export const adjustWith = dual<
  /**
   * @since 2.0.0
   */
  (duration: Duration.DurationInput) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  /**
   * @since 2.0.0
   */
  <A, E, R>(effect: Effect.Effect<A, E, R>, duration: Duration.DurationInput) => Effect.Effect<A, E, R>
>(2, (effect, durationInput) => {
  const duration = Duration.decode(durationInput)
  return testClockWith((testClock) => testClock.adjustWith(duration)(effect))
})

/**
 * Accesses a `TestClock` instance in the context and saves the clock
 * state in an effect which, when run, will restore the `TestClock` to the
 * saved state.
 *
 * @since 2.0.0
 */
export const save = (): Effect.Effect<Effect.Effect<void>> => testClockWith((testClock) => testClock.save)

/**
 * Accesses a `TestClock` instance in the context and sets the clock time
 * to the specified `Instant` or `Date`, running any actions scheduled for on or before
 * the new time in order.
 *
 * @since 2.0.0
 */
export const setTime = (input: DateTime.DateTime.Input): Effect.Effect<void> =>
  testClockWith((testClock) =>
    testClock.setTime(
      typeof input === "number"
        ? input
        : DateTime.unsafeMake(input).epochMillis
    )
  )

/**
 * Semantically blocks the current fiber until the clock time is equal to or
 * greater than the specified duration. Once the clock time is adjusted to
 * on or after the duration, the fiber will automatically be resumed.
 *
 * @since 2.0.0
 */
export const sleep = (durationInput: Duration.DurationInput): Effect.Effect<void> => {
  const duration = Duration.decode(durationInput)
  return testClockWith((testClock) => testClock.sleep(duration))
}

/**
 * Accesses a `TestClock` instance in the context and returns a list of
 * times that effects are scheduled to run.
 *
 * @since 2.0.0
 */
export const sleeps = (): Effect.Effect<Chunk.Chunk<number>> => testClockWith((testClock) => testClock.sleeps)

/**
 * Retrieves the `TestClock` service for this test.
 *
 * @since 2.0.0
 */
export const testClock = (): Effect.Effect<TestClock> => testClockWith(core.succeed)

/**
 * Retrieves the `TestClock` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
export const testClockWith = <A, E, R>(f: (testClock: TestClock) => Effect.Effect<A, E, R>): Effect.Effect<A, E, R> =>
  core.fiberRefGetWith(
    defaultServices.currentServices,
    (services) => f(pipe(services, Context.get(clock.clockTag)) as TestClock)
  )

/**
 * Accesses the current time of a `TestClock` instance in the context in
 * milliseconds.
 *
 * @since 2.0.0
 */
export const currentTimeMillis: Effect.Effect<number> = testClockWith((testClock) => testClock.currentTimeMillis)
