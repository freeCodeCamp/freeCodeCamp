/**
 * @since 2.0.0
 */
import * as Chunk from "./Chunk.js";
import type * as Clock from "./Clock.js";
import * as Context from "./Context.js";
import * as DateTime from "./DateTime.js";
import type * as Deferred from "./Deferred.js";
import * as Duration from "./Duration.js";
import type * as Effect from "./Effect.js";
import type * as Layer from "./Layer.js";
import * as Annotations from "./TestAnnotations.js";
import * as Live from "./TestLive.js";
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
    adjust(duration: Duration.DurationInput): Effect.Effect<void>;
    adjustWith(duration: Duration.DurationInput): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
    readonly save: Effect.Effect<Effect.Effect<void>>;
    setTime(time: number): Effect.Effect<void>;
    readonly sleeps: Effect.Effect<Chunk.Chunk<number>>;
}
/**
 * `Data` represents the state of the `TestClock`, including the clock time.
 *
 * @since 2.0.1
 */
export interface Data {
    readonly instant: number;
    readonly sleeps: Chunk.Chunk<readonly [number, Deferred.Deferred<void>]>;
}
/**
 * @since 2.0.0
 */
export declare const makeData: (instant: number, sleeps: Chunk.Chunk<readonly [number, Deferred.Deferred<void>]>) => Data;
/**
 * @since 2.0.0
 */
export declare const TestClock: Context.Tag<TestClock, TestClock>;
/**
 * @since 2.0.0
 */
export declare const live: (data: Data) => Layer.Layer<TestClock, never, Annotations.TestAnnotations | Live.TestLive>;
/**
 * @since 2.0.0
 */
export declare const defaultTestClock: Layer.Layer<TestClock, never, Annotations.TestAnnotations | Live.TestLive>;
/**
 * Accesses a `TestClock` instance in the context and increments the time
 * by the specified duration, running any actions scheduled for on or before
 * the new time in order.
 *
 * @since 2.0.0
 */
export declare const adjust: (durationInput: Duration.DurationInput) => Effect.Effect<void>;
/**
 * @since 2.0.0
 */
export declare const adjustWith: ((duration: Duration.DurationInput) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>) & (<A, E, R>(effect: Effect.Effect<A, E, R>, duration: Duration.DurationInput) => Effect.Effect<A, E, R>);
/**
 * Accesses a `TestClock` instance in the context and saves the clock
 * state in an effect which, when run, will restore the `TestClock` to the
 * saved state.
 *
 * @since 2.0.0
 */
export declare const save: () => Effect.Effect<Effect.Effect<void>>;
/**
 * Accesses a `TestClock` instance in the context and sets the clock time
 * to the specified `Instant` or `Date`, running any actions scheduled for on or before
 * the new time in order.
 *
 * @since 2.0.0
 */
export declare const setTime: (input: DateTime.DateTime.Input) => Effect.Effect<void>;
/**
 * Semantically blocks the current fiber until the clock time is equal to or
 * greater than the specified duration. Once the clock time is adjusted to
 * on or after the duration, the fiber will automatically be resumed.
 *
 * @since 2.0.0
 */
export declare const sleep: (durationInput: Duration.DurationInput) => Effect.Effect<void>;
/**
 * Accesses a `TestClock` instance in the context and returns a list of
 * times that effects are scheduled to run.
 *
 * @since 2.0.0
 */
export declare const sleeps: () => Effect.Effect<Chunk.Chunk<number>>;
/**
 * Retrieves the `TestClock` service for this test.
 *
 * @since 2.0.0
 */
export declare const testClock: () => Effect.Effect<TestClock>;
/**
 * Retrieves the `TestClock` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
export declare const testClockWith: <A, E, R>(f: (testClock: TestClock) => Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
/**
 * Accesses the current time of a `TestClock` instance in the context in
 * milliseconds.
 *
 * @since 2.0.0
 */
export declare const currentTimeMillis: Effect.Effect<number>;
//# sourceMappingURL=TestClock.d.ts.map