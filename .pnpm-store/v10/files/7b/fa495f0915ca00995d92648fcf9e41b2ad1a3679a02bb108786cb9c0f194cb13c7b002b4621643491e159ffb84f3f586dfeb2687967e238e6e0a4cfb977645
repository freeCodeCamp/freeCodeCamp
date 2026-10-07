import { dual } from "./Function.js";
import * as internalCause from "./internal/cause.js";
import * as console_ from "./internal/console.js";
import { TagProto } from "./internal/context.js";
import * as effect from "./internal/core-effect.js";
import * as core from "./internal/core.js";
import * as defaultServices from "./internal/defaultServices.js";
import * as circular from "./internal/effect/circular.js";
import * as internalExecutionPlan from "./internal/executionPlan.js";
import * as fiberRuntime from "./internal/fiberRuntime.js";
import * as layer from "./internal/layer.js";
import * as option_ from "./internal/option.js";
import * as query from "./internal/query.js";
import * as runtime_ from "./internal/runtime.js";
import * as schedule_ from "./internal/schedule.js";
import * as internalTracer from "./internal/tracer.js";
import * as Random from "./Random.js";
import * as Request from "./Request.js";
import * as Scheduler from "./Scheduler.js";
import { isGeneratorFunction } from "./Utils.js";
/**
 * @since 2.0.0
 * @category Symbols
 */
export const EffectTypeId = core.EffectTypeId;
/**
 * Checks if a given value is an `Effect` value.
 *
 * **When to Use**
 *
 * This function can be useful for checking the type of a value before
 * attempting to operate on it as an `Effect` value. For example, you could use
 * `Effect.isEffect` to check the type of a value before using it as an argument
 * to a function that expects an `Effect` value.
 *
 * @since 2.0.0
 * @category Guards
 */
export const isEffect = core.isEffect;
/**
 * Returns an effect that caches its result for a specified `Duration`,
 * known as "timeToLive" (TTL).
 *
 * **Details**
 *
 * This function is used to cache the result of an effect for a specified amount
 * of time. This means that the first time the effect is evaluated, its result
 * is computed and stored.
 *
 * If the effect is evaluated again within the specified `timeToLive`, the
 * cached result will be used, avoiding recomputation.
 *
 * After the specified duration has passed, the cache expires, and the effect
 * will be recomputed upon the next evaluation.
 *
 * **When to Use**
 *
 * Use this function when you have an effect that involves costly operations or
 * computations, and you want to avoid repeating them within a short time frame.
 *
 * It's ideal for scenarios where the result of an effect doesn't change
 * frequently and can be reused for a specified duration.
 *
 * By caching the result, you can improve efficiency and reduce unnecessary
 * computations, especially in performance-critical applications.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * let i = 1
 * const expensiveTask = Effect.promise<string>(() => {
 *   console.log("expensive task...")
 *   return new Promise((resolve) => {
 *     setTimeout(() => {
 *       resolve(`result ${i++}`)
 *     }, 100)
 *   })
 * })
 *
 * const program = Effect.gen(function* () {
 *   const cached = yield* Effect.cachedWithTTL(expensiveTask, "150 millis")
 *   yield* cached.pipe(Effect.andThen(Console.log))
 *   yield* cached.pipe(Effect.andThen(Console.log))
 *   yield* Effect.sleep("100 millis")
 *   yield* cached.pipe(Effect.andThen(Console.log))
 * })
 *
 * Effect.runFork(program)
 * // Output:
 * // expensive task...
 * // result 1
 * // result 1
 * // expensive task...
 * // result 2
 * ```
 *
 * @see {@link cached} for a similar function that caches the result
 * indefinitely.
 * @see {@link cachedInvalidateWithTTL} for a similar function that includes an
 * additional effect for manually invalidating the cached value.
 *
 * @since 2.0.0
 * @category Caching
 */
export const cachedWithTTL = circular.cached;
/**
 * Caches an effect's result for a specified duration and allows manual
 * invalidation before expiration.
 *
 * **Details**
 *
 * This function behaves similarly to {@link cachedWithTTL} by caching the
 * result of an effect for a specified period of time. However, it introduces an
 * additional feature: it provides an effect that allows you to manually
 * invalidate the cached result before it naturally expires.
 *
 * This gives you more control over the cache, allowing you to refresh the
 * result when needed, even if the original cache has not yet expired.
 *
 * Once the cache is invalidated, the next time the effect is evaluated, the
 * result will be recomputed, and the cache will be refreshed.
 *
 * **When to Use**
 *
 * Use this function when you have an effect whose result needs to be cached for
 * a certain period, but you also want the option to refresh the cache manually
 * before the expiration time.
 *
 * This is useful when you need to ensure that the cached data remains valid for
 * a certain period but still want to invalidate it if the underlying data
 * changes or if you want to force a recomputation.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * let i = 1
 * const expensiveTask = Effect.promise<string>(() => {
 *   console.log("expensive task...")
 *   return new Promise((resolve) => {
 *     setTimeout(() => {
 *       resolve(`result ${i++}`)
 *     }, 100)
 *   })
 * })
 *
 * const program = Effect.gen(function* () {
 *   const [cached, invalidate] = yield* Effect.cachedInvalidateWithTTL(
 *     expensiveTask,
 *     "1 hour"
 *   )
 *   yield* cached.pipe(Effect.andThen(Console.log))
 *   yield* cached.pipe(Effect.andThen(Console.log))
 *   yield* invalidate
 *   yield* cached.pipe(Effect.andThen(Console.log))
 * })
 *
 * Effect.runFork(program)
 * // Output:
 * // expensive task...
 * // result 1
 * // result 1
 * // expensive task...
 * // result 2
 * ```
 *
 * @see {@link cached} for a similar function that caches the result
 * indefinitely.
 * @see {@link cachedWithTTL} for a similar function that caches the result for
 * a specified duration but does not include an effect for manual invalidation.
 *
 * @since 2.0.0
 * @category Caching
 */
export const cachedInvalidateWithTTL = circular.cachedInvalidateWithTTL;
/**
 * Returns an effect that lazily computes a result and caches it for subsequent
 * evaluations.
 *
 * **Details**
 *
 * This function wraps an effect and ensures that its result is computed only
 * once. Once the result is computed, it is cached, meaning that subsequent
 * evaluations of the same effect will return the cached result without
 * re-executing the logic.
 *
 * **When to Use**
 *
 * Use this function when you have an expensive or time-consuming operation that
 * you want to avoid repeating. The first evaluation will compute the result,
 * and all following evaluations will immediately return the cached value,
 * improving performance and reducing unnecessary work.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * let i = 1
 * const expensiveTask = Effect.promise<string>(() => {
 *   console.log("expensive task...")
 *   return new Promise((resolve) => {
 *     setTimeout(() => {
 *       resolve(`result ${i++}`)
 *     }, 100)
 *   })
 * })
 *
 * const program = Effect.gen(function* () {
 *   console.log("non-cached version:")
 *   yield* expensiveTask.pipe(Effect.andThen(Console.log))
 *   yield* expensiveTask.pipe(Effect.andThen(Console.log))
 *   console.log("cached version:")
 *   const cached = yield* Effect.cached(expensiveTask)
 *   yield* cached.pipe(Effect.andThen(Console.log))
 *   yield* cached.pipe(Effect.andThen(Console.log))
 * })
 *
 * Effect.runFork(program)
 * // Output:
 * // non-cached version:
 * // expensive task...
 * // result 1
 * // expensive task...
 * // result 2
 * // cached version:
 * // expensive task...
 * // result 3
 * // result 3
 * ```
 *
 * @see {@link cachedWithTTL} for a similar function that includes a
 * time-to-live duration for the cached value.
 * @see {@link cachedInvalidateWithTTL} for a similar function that includes an
 * additional effect for manually invalidating the cached value.
 *
 * @since 2.0.0
 * @category Caching
 */
export const cached = effect.memoize;
/**
 * Returns a memoized version of a function with effects, reusing results for
 * the same inputs.
 *
 * **Details**
 *
 * This function creates a memoized version of a given function that performs an
 * effect. Memoization ensures that once a result is computed for a specific
 * input, it is stored and reused for subsequent calls with the same input,
 * reducing the need to recompute the result.
 *
 * The function can optionally take an `Equivalence` parameter to
 * determine how inputs are compared for caching purposes.
 *
 * **When to Use**
 *
 * Use this function when you have a function that performs an effect and you
 * want to avoid recomputing the result for the same input multiple times.
 *
 * It's ideal for functions that produce deterministic results based on their
 * inputs, and you want to improve performance by caching the output.
 *
 * This is particularly useful in scenarios where the function involves
 * expensive calculations or operations that should be avoided after the first
 * execution with the same parameters.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Random } from "effect"
 *
 * const program = Effect.gen(function* () {
 *   const randomNumber = (n: number) => Random.nextIntBetween(1, n)
 *   console.log("non-memoized version:")
 *   console.log(yield* randomNumber(10))
 *   console.log(yield* randomNumber(10))
 *
 *   console.log("memoized version:")
 *   const memoized = yield* Effect.cachedFunction(randomNumber)
 *   console.log(yield* memoized(10))
 *   console.log(yield* memoized(10))
 * })
 *
 * Effect.runFork(program)
 * // Example Output:
 * // non-memoized version:
 * // 2
 * // 8
 * // memoized version:
 * // 5
 * // 5
 * ```
 *
 * @since 2.0.0
 * @category Caching
 */
export const cachedFunction = circular.cachedFunction;
/**
 * Returns an effect that executes only once, regardless of how many times it's
 * called.
 *
 * **Details**
 *
 * This function ensures that a specific effect is executed only a single time,
 * no matter how many times it is invoked. The result of the effect will be
 * cached, and subsequent calls to the effect will immediately return the cached
 * result without re-executing the original logic.
 *
 * **When to Use**
 *
 * Use this function when you need to perform a task only once, regardless of
 * how many times the effect is triggered. It's particularly useful when you
 * have initialization tasks, logging, or other one-time actions that should not
 * be repeated. This can help optimize performance and avoid redundant actions.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const program = Effect.gen(function* () {
 *   const task1 = Console.log("task1")
 *   yield* Effect.repeatN(task1, 2)
 *   const task2 = yield* Effect.once(Console.log("task2"))
 *   yield* Effect.repeatN(task2, 2)
 * })
 *
 * Effect.runFork(program)
 * // Output:
 * // task1
 * // task1
 * // task1
 * // task2
 * ```
 *
 * @since 2.0.0
 * @category Caching
 */
export const once = effect.once;
/**
 * Combines multiple effects into one, returning results based on the input
 * structure.
 *
 * **Details**
 *
 * Use this function when you need to run multiple effects and combine their
 * results into a single output. It supports tuples, iterables, structs, and
 * records, making it flexible for different input types.
 *
 * For instance, if the input is a tuple:
 *
 * ```ts skip-type-checking
 * //         ┌─── a tuple of effects
 * //         ▼
 * Effect.all([effect1, effect2, ...])
 * ```
 *
 * the effects are executed sequentially, and the result is a new effect
 * containing the results as a tuple. The results in the tuple match the order
 * of the effects passed to `Effect.all`.
 *
 * **Concurrency**
 *
 * You can control the execution order (e.g., sequential vs. concurrent) using
 * the `concurrency` option.
 *
 * **Short-Circuiting Behavior**
 *
 * This function stops execution on the first error it encounters, this is
 * called "short-circuiting". If any effect in the collection fails, the
 * remaining effects will not run, and the error will be propagated. To change
 * this behavior, you can use the `mode` option, which allows all effects to run
 * and collect results as `Either` or `Option`.
 *
 * **The `mode` option**
 *
 * The `{ mode: "either" }` option changes the behavior of `Effect.all` to
 * ensure all effects run, even if some fail. Instead of stopping on the first
 * failure, this mode collects both successes and failures, returning an array
 * of `Either` instances where each result is either a `Right` (success) or a
 * `Left` (failure).
 *
 * Similarly, the `{ mode: "validate" }` option uses `Option` to indicate
 * success or failure. Each effect returns `None` for success and `Some` with
 * the error for failure.
 *
 * **Example** (Combining Effects in Tuples)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const tupleOfEffects = [
 *   Effect.succeed(42).pipe(Effect.tap(Console.log)),
 *   Effect.succeed("Hello").pipe(Effect.tap(Console.log))
 * ] as const
 *
 * //      ┌─── Effect<[number, string], never, never>
 * //      ▼
 * const resultsAsTuple = Effect.all(tupleOfEffects)
 *
 * Effect.runPromise(resultsAsTuple).then(console.log)
 * // Output:
 * // 42
 * // Hello
 * // [ 42, 'Hello' ]
 * ```
 *
 * **Example** (Combining Effects in Iterables)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const iterableOfEffects: Iterable<Effect.Effect<number>> = [1, 2, 3].map(
 *   (n) => Effect.succeed(n).pipe(Effect.tap(Console.log))
 * )
 *
 * //      ┌─── Effect<number[], never, never>
 * //      ▼
 * const resultsAsArray = Effect.all(iterableOfEffects)
 *
 * Effect.runPromise(resultsAsArray).then(console.log)
 * // Output:
 * // 1
 * // 2
 * // 3
 * // [ 1, 2, 3 ]
 * ```
 *
 * **Example** (Combining Effects in Structs)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const structOfEffects = {
 *   a: Effect.succeed(42).pipe(Effect.tap(Console.log)),
 *   b: Effect.succeed("Hello").pipe(Effect.tap(Console.log))
 * }
 *
 * //      ┌─── Effect<{ a: number; b: string; }, never, never>
 * //      ▼
 * const resultsAsStruct = Effect.all(structOfEffects)
 *
 * Effect.runPromise(resultsAsStruct).then(console.log)
 * // Output:
 * // 42
 * // Hello
 * // { a: 42, b: 'Hello' }
 * ```
 *
 * **Example** (Combining Effects in Records)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const recordOfEffects: Record<string, Effect.Effect<number>> = {
 *   key1: Effect.succeed(1).pipe(Effect.tap(Console.log)),
 *   key2: Effect.succeed(2).pipe(Effect.tap(Console.log))
 * }
 *
 * //      ┌─── Effect<{ [x: string]: number; }, never, never>
 * //      ▼
 * const resultsAsRecord = Effect.all(recordOfEffects)
 *
 * Effect.runPromise(resultsAsRecord).then(console.log)
 * // Output:
 * // 1
 * // 2
 * // { key1: 1, key2: 2 }
 * ```
 *
 * **Example** (Short-Circuiting Behavior)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const program = Effect.all([
 *   Effect.succeed("Task1").pipe(Effect.tap(Console.log)),
 *   Effect.fail("Task2: Oh no!").pipe(Effect.tap(Console.log)),
 *   // Won't execute due to earlier failure
 *   Effect.succeed("Task3").pipe(Effect.tap(Console.log))
 * ])
 *
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // Task1
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: { _id: 'Cause', _tag: 'Fail', failure: 'Task2: Oh no!' }
 * // }
 * ```
 *
 * **Example** (Collecting Results with `mode: "either"`)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const effects = [
 *   Effect.succeed("Task1").pipe(Effect.tap(Console.log)),
 *   Effect.fail("Task2: Oh no!").pipe(Effect.tap(Console.log)),
 *   Effect.succeed("Task3").pipe(Effect.tap(Console.log))
 * ]
 *
 * const program = Effect.all(effects, { mode: "either" })
 *
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // Task1
 * // Task3
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Success',
 * //   value: [
 * //     { _id: 'Either', _tag: 'Right', right: 'Task1' },
 * //     { _id: 'Either', _tag: 'Left', left: 'Task2: Oh no!' },
 * //     { _id: 'Either', _tag: 'Right', right: 'Task3' }
 * //   ]
 * // }
 * ```
 *
 * **Example** (Collecting Results with `mode: "validate"`)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const effects = [
 *   Effect.succeed("Task1").pipe(Effect.tap(Console.log)),
 *   Effect.fail("Task2: Oh no!").pipe(Effect.tap(Console.log)),
 *   Effect.succeed("Task3").pipe(Effect.tap(Console.log))
 * ]
 *
 * const program = Effect.all(effects, { mode: "validate" })
 *
 * Effect.runPromiseExit(program).then((result) => console.log("%o", result))
 * // Output:
 * // Task1
 * // Task3
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: {
 * //     _id: 'Cause',
 * //     _tag: 'Fail',
 * //     failure: [
 * //       { _id: 'Option', _tag: 'None' },
 * //       { _id: 'Option', _tag: 'Some', value: 'Task2: Oh no!' },
 * //       { _id: 'Option', _tag: 'None' }
 * //     ]
 * //   }
 * // }
 * ```
 *
 * @see {@link forEach} for iterating over elements and applying an effect.
 * @see {@link allWith} for a data-last version of this function.
 *
 * @since 2.0.0
 * @category Collecting
 */
export const all = fiberRuntime.all;
/**
 * A data-last version of {@link all}, designed for use in pipelines.
 *
 * **When to Use**
 *
 * This function enables you to combine multiple effects and customize execution
 * options such as concurrency levels. This version is useful in functional
 * pipelines where you first define your data and then apply operations to it.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, pipe } from "effect"
 *
 * const task1 = Effect.succeed(1).pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Effect.log("task1 done"))
 * )
 *
 * const task2 = Effect.succeed("hello").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Effect.log("task2 done"))
 * )
 *
 * const program = pipe(
 *   [task1, task2],
 *   // Run both effects concurrently using the concurrent option
 *   Effect.allWith({ concurrency: 2 })
 * )
 *
 * Effect.runPromise(program).then(console.log)
 * // Output:
 * // timestamp=... level=INFO fiber=#3 message="task2 done"
 * // timestamp=... level=INFO fiber=#2 message="task1 done"
 * // [ 1, 'hello' ]
 * ```
 *
 * @since 2.0.0
 * @category Collecting
 */
export const allWith = fiberRuntime.allWith;
/**
 * Evaluates and runs each effect in the iterable, collecting only the
 * successful results while discarding failures.
 *
 * **Details**
 *
 * This function function processes an iterable of effects and runs each one. If
 * an effect is successful, its result is collected; if it fails, the result is
 * discarded. This ensures that only successful outcomes are kept.
 *
 * **Options**
 *
 * The function also allows you to customize how the effects are handled by
 * specifying options such as concurrency, batching, and how finalizers behave.
 * These options provide flexibility in running the effects concurrently or
 * adjusting other execution details.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const tasks = [
 *   Effect.succeed(1),
 *   Effect.fail("Error 1"),
 *   Effect.succeed(2),
 *   Effect.fail("Error 2")
 * ]
 *
 * const program = Effect.gen(function*() {
 *   const successfulResults = yield* Effect.allSuccesses(tasks)
 *   console.log(successfulResults)
 * })
 *
 * Effect.runFork(program)
 * // Output: [1, 2]
 *
 * ```
 *
 * @since 2.0.0
 * @category Collecting
 */
export const allSuccesses = fiberRuntime.allSuccesses;
/**
 * Drops elements until the effectful predicate returns `true`.
 *
 * **Details**
 *
 * This function processes a collection of elements and uses an effectful
 * predicate to determine when to stop dropping elements. It drops elements from
 * the beginning of the collection until the predicate returns `true`.
 *
 * The predicate is a function that takes an element and its index in the
 * collection and returns an effect that evaluates to a boolean.
 *
 * Once the predicate returns `true`, the remaining elements of the collection
 * are returned.
 *
 * **Note**: The first element for which the predicate returns `true` is also
 * dropped.
 *
 * **When to Use**
 *
 * This function allows you to conditionally skip over a part of the collection
 * based on some criteria defined in the predicate.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const numbers = [1, 2, 3, 4, 5, 6]
 * const predicate = (n: number, i: number) => Effect.succeed(n > 3)
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Effect.dropUntil(numbers, predicate)
 *   console.log(result)
 * })
 *
 * Effect.runFork(program)
 * // Output: [5, 6]
 * ```
 *
 * @see {@link dropWhile} for a similar function that drops elements while the
 * predicate returns `true`.
 *
 * @since 2.0.0
 * @category Collecting
 */
export const dropUntil = effect.dropUntil;
/**
 * Drops elements as long as the predicate returns `true`.
 *
 * **Details**
 *
 * This function processes a collection of elements and uses a predicate to
 * decide whether to drop an element.
 *
 * The predicate is a function that takes an element and its index, and it
 * returns an effect that evaluates to a boolean.
 *
 * As long as the predicate returns `true`, elements will continue to be dropped
 * from the collection.
 *
 * Once the predicate returns `false`, the remaining elements are kept.
 *
 * **When to Use**
 *
 * This function allows you to discard elements from the start of a collection
 * based on a condition, and only keep the rest when the condition no longer
 * holds.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const numbers = [1, 2, 3, 4, 5, 6]
 * const predicate = (n: number, i: number) => Effect.succeed(n <= 3)
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Effect.dropWhile(numbers, predicate)
 *   console.log(result)
 * })
 *
 * Effect.runFork(program)
 * // Output: [4, 5, 6]
 * ```
 *
 * @see {@link dropUntil} for a similar function that drops elements until the
 * predicate returns `true`.
 *
 * @since 2.0.0
 * @category Collecting
 */
export const dropWhile = effect.dropWhile;
/**
 * Takes elements from a collection until the effectful predicate returns
 * `true`.
 *
 * **Details**
 *
 * This function processes a collection of elements and uses an effectful
 * predicate to decide when to stop taking elements. The elements are taken from
 * the beginning of the collection until the predicate returns `true`.
 *
 * The predicate is a function that takes an element and its index in the
 * collection, and returns an effect that resolves to a boolean.
 *
 * Once the predicate returns `true`, the remaining elements of the collection
 * are discarded, and the function stops taking more elements.
 *
 * **Note**: The first element for which the predicate returns `true` is also
 * included in the result.
 *
 * **When to Use**
 *
 * Use this function when you want to conditionally take elements from a
 * collection based on a dynamic condition. For example, you may want to collect
 * numbers from a list until a certain threshold is reached, or gather items
 * until a specific condition is met.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const numbers = [1, 2, 3, 4, 5, 6]
 * const predicate = (n: number, i: number) => Effect.succeed(n > 3)
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Effect.takeUntil(numbers, predicate)
 *   console.log(result)
 * })
 *
 * Effect.runFork(program)
 * // Output: [ 1, 2, 3, 4 ]
 * ```
 *
 * @see {@link takeWhile} for a similar function that takes elements while the
 * predicate returns `true`.
 *
 * @since 2.0.0
 * @category Collecting
 */
export const takeUntil = effect.takeUntil;
/**
 * Takes elements as long as the predicate returns `true`.
 *
 * **Details**
 *
 * This function processes a collection of elements and uses a predicate to
 * decide whether to take an element.
 *
 * The predicate is a function that takes an element and its index, and it
 * returns an effect that evaluates to a boolean.
 *
 * As long as the predicate returns `true`, elements will continue to be taken
 * from the collection.
 *
 * Once the predicate returns `false`, the remaining elements are discarded.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const numbers = [1, 2, 3, 4, 5, 6]
 * const predicate = (n: number, i: number) => Effect.succeed(n <= 3)
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Effect.takeWhile(numbers, predicate)
 *   console.log(result)
 * })
 *
 * Effect.runFork(program)
 * // Output: [1, 2, 3]
 * ```
 *
 * @see {@link takeUntil} for a similar function that takes elements until the predicate returns `true`.
 *
 * @since 2.0.0
 * @category Collecting
 */
export const takeWhile = effect.takeWhile;
/**
 * Determines whether all elements of the iterable satisfy the effectful
 * predicate.
 *
 * **Details**
 *
 * This function checks whether every element in a given collection (an
 * iterable) satisfies a condition defined by an effectful predicate.
 *
 * The predicate is a function that takes an element and its index, and it
 * returns an effect that evaluates to a boolean.
 *
 * The function will process each element and return `true` if all elements
 * satisfy the predicate; otherwise, it returns `false`.
 *
 * **When to Use**
 *
 * This function is useful when you need to verify that all items in a
 * collection meet certain criteria, even when the evaluation of each item
 * involves effects, such as asynchronous checks or complex computations.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const numbers = [2, 4, 6, 8]
 * const predicate = (n: number, i: number) => Effect.succeed(n % 2 === 0)
 *
 * const program = Effect.gen(function*() {
 *   const allEven = yield* Effect.every(numbers, predicate)
 *   console.log(allEven)
 * })
 *
 * Effect.runFork(program)
 * // Output: true
 * ```
 *
 * @see {@link exists} for a similar function that returns a boolean indicating
 * whether **any** element satisfies the predicate.
 *
 * @since 2.0.0
 * @category Condition Checking
 */
export const every = effect.every;
/**
 * Determines whether any element of the iterable satisfies the effectual
 * predicate.
 *
 * **Details**
 *
 * This function checks whether any element in a given collection (an iterable)
 * satisfies a condition defined by an effectful predicate.
 *
 * The predicate is a function that takes an element and its index, and it
 * returns an effect that evaluates to a boolean.
 *
 * The function will process each element, and if any element satisfies the
 * predicate (returns `true`), the function will immediately return `true`.
 *
 * If none of the elements satisfy the condition, it will return `false`.
 *
 * **When to Use**
 *
 * This function allows you to quickly check for a condition in a collection
 * without having to manually iterate over it.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const numbers = [1, 2, 3, 4]
 * const predicate = (n: number, i: number) => Effect.succeed(n > 2)
 *
 * const program = Effect.gen(function*() {
 *   const hasLargeNumber = yield* Effect.exists(numbers, predicate)
 *   console.log(hasLargeNumber)
 * })
 *
 * Effect.runFork(program)
 * // Output: true
 * ```
 *
 * @see {@link every} for a similar function that checks if **all** elements
 * satisfy the predicate.
 *
 * @since 2.0.0
 * @category Condition Checking
 */
export const exists = fiberRuntime.exists;
/**
 * Filters an iterable using the specified effectful predicate.
 *
 * **Details**
 *
 * This function filters a collection (an iterable) by applying an effectful
 * predicate.
 *
 * The predicate is a function that takes an element and its index, and it
 * returns an effect that evaluates to a boolean.
 *
 * The function processes each element in the collection and keeps only those
 * that satisfy the condition defined by the predicate.
 *
 * **Options**
 *
 * You can also adjust the behavior with options such as concurrency, batching,
 * or whether to negate the condition.
 *
 * **When to Use**
 *
 * This function allows you to selectively keep or remove elements based on a
 * condition that may involve asynchronous or side-effect-causing operations.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const numbers = [1, 2, 3, 4, 5]
 * const predicate = (n: number, i: number) => Effect.succeed(n % 2 === 0)
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Effect.filter(numbers, predicate)
 *   console.log(result)
 * })
 *
 * Effect.runFork(program)
 * // Output: [2, 4]
 * ```
 *
 * @since 2.0.0
 * @category Filtering
 */
export const filter = fiberRuntime.filter;
/**
 * Filters and maps elements sequentially in one operation.
 *
 * This function processes each element one by one. It applies a function that
 * returns an `Option` to each element. If the function returns `Some`, the
 * element is kept; if it returns `None`, the element is removed. The operation
 * is done sequentially for each element.
 *
 * **Example**
 *
 * ```ts
 * import { Console, Effect, Option } from "effect"
 *
 * const task = (n: number) =>
 *   Effect.succeed(n).pipe(
 *     Effect.delay(1000 - (n * 100)),
 *     Effect.tap(Console.log(`task${n} done`))
 *   )
 *
 * const program = Effect.filterMap(
 *   [task(1), task(2), task(3), task(4)],
 *   (n) => n % 2 === 0 ? Option.some(n) : Option.none()
 * )
 *
 * Effect.runPromise(program).then(console.log)
 * // Output:
 * // task1 done
 * // task2 done
 * // task3 done
 * // task4 done
 * // [ 2, 4 ]
 * ```
 *
 * @since 2.0.0
 * @category Filtering
 */
export const filterMap = effect.filterMap;
/**
 * Returns the first element that satisfies the effectful predicate.
 *
 * **Details**
 *
 * This function processes a collection of elements and applies an effectful
 * predicate to each element.
 *
 * The predicate is a function that takes an element and its index in the
 * collection, and it returns an effect that evaluates to a boolean.
 *
 * The function stops as soon as it finds the first element for which the
 * predicate returns `true` and returns that element wrapped in an `Option`.
 *
 * If no element satisfies the predicate, the result will be `None`.
 *
 * **When to Use**
 *
 * This function allows you to efficiently find an element that meets a specific
 * condition, even when the evaluation involves effects like asynchronous
 * operations or side effects.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const numbers = [1, 2, 3, 4, 5]
 * const predicate = (n: number, i: number) => Effect.succeed(n > 3)
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Effect.findFirst(numbers, predicate)
 *   console.log(result)
 * })
 *
 * Effect.runFork(program)
 * // Output: { _id: 'Option', _tag: 'Some', value: 4 }
 * ```
 *
 * @since 2.0.0
 * @category Collecting
 */
export const findFirst = effect.findFirst;
/**
 * Executes an effectful operation for each element in an `Iterable`.
 *
 * **Details**
 *
 * This function applies a provided operation to each element in the iterable,
 * producing a new effect that returns an array of results.
 *
 * If any effect fails, the iteration stops immediately (short-circuiting), and
 * the error is propagated.
 *
 * **Concurrency**
 *
 * The `concurrency` option controls how many operations are performed
 * concurrently. By default, the operations are performed sequentially.
 *
 * **Discarding Results**
 *
 * If the `discard` option is set to `true`, the intermediate results are not
 * collected, and the final result of the operation is `void`.
 *
 * **Example** (Applying Effects to Iterable Elements)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const result = Effect.forEach([1, 2, 3, 4, 5], (n, index) =>
 *   Console.log(`Currently at index ${index}`).pipe(Effect.as(n * 2))
 * )
 *
 * Effect.runPromise(result).then(console.log)
 * // Output:
 * // Currently at index 0
 * // Currently at index 1
 * // Currently at index 2
 * // Currently at index 3
 * // Currently at index 4
 * // [ 2, 4, 6, 8, 10 ]
 * ```
 *
 * **Example** (Discarding Results)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * // Apply effects but discard the results
 * const result = Effect.forEach(
 *   [1, 2, 3, 4, 5],
 *   (n, index) =>
 *     Console.log(`Currently at index ${index}`).pipe(Effect.as(n * 2)),
 *   { discard: true }
 * )
 *
 * Effect.runPromise(result).then(console.log)
 * // Output:
 * // Currently at index 0
 * // Currently at index 1
 * // Currently at index 2
 * // Currently at index 3
 * // Currently at index 4
 * // undefined
 * ```
 *
 * @see {@link all} for combining multiple effects into one.
 *
 * @since 2.0.0
 * @category Looping
 */
export const forEach = fiberRuntime.forEach;
/**
 * Returns the first element of the iterable if the collection is non-empty, or
 * fails with the error `NoSuchElementException` if the collection is empty.
 *
 * **When to Use**
 *
 * This function is useful when you need to retrieve the first item from a
 * collection and want to handle the case where the collection might be empty
 * without causing an unhandled exception.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * // Simulate an async operation
 * const fetchNumbers = Effect.succeed([1, 2, 3]).pipe(Effect.delay("100 millis"))
 *
 * const program = Effect.gen(function*() {
 *   const firstElement = yield* Effect.head(fetchNumbers)
 *   console.log(firstElement)
 * })
 *
 * Effect.runFork(program)
 * // Output: 1
 * ```
 *
 * @since 2.0.0
 * @category Collecting
 */
export const head = effect.head;
/**
 * Merges an `Iterable<Effect<A, E, R>>` to a single effect.
 *
 * **Details**
 *
 * This function takes an iterable of effects and combines them into a single
 * effect. It does this by iterating over each effect in the collection and
 * applying a function that accumulates results into a "zero" value, which
 * starts with an initial value and is updated with each effect's success.
 *
 * The provided function `f` is called for each element in the iterable,
 * allowing you to specify how to combine the results.
 *
 * **Options**
 *
 * The function also allows you to customize how the effects are handled by
 * specifying options such as concurrency, batching, and how finalizers behave.
 * These options provide flexibility in running the effects concurrently or
 * adjusting other execution details.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const numbers = [Effect.succeed(1), Effect.succeed(2), Effect.succeed(3)]
 * const add = (sum: number, value: number, i: number) => sum + value
 * const zero = 0
 *
 * const program = Effect.gen(function*() {
 *   const total = yield* Effect.mergeAll(numbers, zero, add)
 *   console.log(total)
 * })
 *
 * Effect.runFork(program)
 * // Output: 6
 * ```
 *
 * @since 2.0.0
 * @category Collecting
 */
export const mergeAll = fiberRuntime.mergeAll;
/**
 * Processes an iterable and applies an effectful function to each element,
 * categorizing the results into successes and failures.
 *
 * **Details**
 *
 * This function processes each element in the provided iterable by applying an
 * effectful function to it. The results are then categorized into two separate
 * lists: one for failures and another for successes. This separation allows you
 * to handle the two categories differently. Failures are collected in a list
 * without interrupting the processing of the remaining elements, so the
 * operation continues even if some elements fail. This is particularly useful
 * when you need to handle both successful and failed results separately,
 * without stopping the entire process on encountering a failure.
 *
 * **When to Use**
 *
 * Use this function when you want to process a collection of items and handle
 * errors or failures without interrupting the processing of other items. It's
 * useful when you need to distinguish between successful and failed results and
 * process them separately, for example, when logging errors while continuing to
 * work with valid data. The function ensures that failures are captured, while
 * successes are processed normally.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * //      ┌─── Effect<[string[], number[]], never, never>
 * //      ▼
 * const program = Effect.partition([0, 1, 2, 3, 4], (n) => {
 *   if (n % 2 === 0) {
 *     return Effect.succeed(n)
 *   } else {
 *     return Effect.fail(`${n} is not even`)
 *   }
 * })
 *
 * Effect.runPromise(program).then(console.log, console.error)
 * // Output:
 * // [ [ '1 is not even', '3 is not even' ], [ 0, 2, 4 ] ]
 * ```
 *
 * @see {@link validateAll} for a function that either collects all failures or all successes.
 * @see {@link validateFirst} for a function that stops at the first success.
 *
 * @since 2.0.0
 * @category Error Accumulation
 */
export const partition = fiberRuntime.partition;
/**
 * Reduces an `Iterable<A>` using an effectual function `f`, working
 * sequentially from left to right.
 *
 * **Details**
 *
 * This function takes an iterable and applies a function `f` to each element in
 * the iterable. The function works sequentially, starting with an initial value
 * `zero` and then combining it with each element in the collection. The
 * provided function `f` is called for each element in the iterable, allowing
 * you to accumulate a result based on the current value and the element being
 * processed.
 *
 * **When to Use**
 *
 * The function is often used for operations like summing a collection of
 * numbers or combining results from multiple tasks. It ensures that operations
 * are performed one after the other, maintaining the order of the elements.
 *
 * **Example**
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * const processOrder = (id: number) =>
 *   Effect.succeed({ id, price: 100 * id })
 *     .pipe(Effect.tap(() => Console.log(`Order ${id} processed`)), Effect.delay(500 - (id * 100)))
 *
 * const program = Effect.reduce(
 *   [1, 2, 3, 4],
 *   0,
 *   (acc, id, i) =>
 *     processOrder(id)
 *       .pipe(Effect.map((order) => acc + order.price))
 * )
 *
 * Effect.runPromise(program).then(console.log)
 * // Output:
 * // Order 1 processed
 * // Order 2 processed
 * // Order 3 processed
 * // Order 4 processed
 * // 1000
 * ```
 *
 * @see {@link reduceWhile} for a similar function that stops the process based on a predicate.
 * @see {@link reduceRight} for a similar function that works from right to left.
 *
 * @since 2.0.0
 * @category Collecting
 */
export const reduce = effect.reduce;
/**
 * Reduces an `Iterable<A>` using an effectual function `body`, working
 * sequentially from left to right, stopping the process early when the
 * predicate `while` is not satisfied.
 *
 * **Details**
 *
 * This function processes a collection of elements, applying a function `body`
 * to reduce them to a single value, starting from the first element. It checks
 * the value of the accumulator against a predicate (`while`). If at any point
 * the predicate returns `false`, the reduction stops, and the accumulated
 * result is returned.
 *
 * **When to Use**
 *
 * Use this function when you need to reduce a collection of elements, but only
 * continue the process as long as a certain condition holds true. For example,
 * if you want to sum values in a list but stop as soon as the sum exceeds a
 * certain threshold, you can use this function.
 *
 * **Example**
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * const processOrder = (id: number) =>
 *   Effect.succeed({ id, price: 100 * id })
 *     .pipe(Effect.tap(() => Console.log(`Order ${id} processed`)), Effect.delay(500 - (id * 100)))
 *
 * const program = Effect.reduceWhile(
 *   [1, 2, 3, 4],
 *   0,
 *   {
 *     body: (acc, id, i) =>
 *       processOrder(id)
 *         .pipe(Effect.map((order) => acc + order.price)),
 *     while: (acc) => acc < 500
 *   }
 * )
 *
 * Effect.runPromise(program).then(console.log)
 * // Output:
 * // Order 1 processed
 * // Order 2 processed
 * // Order 3 processed
 * // 600
 * ```
 *
 * @since 2.0.0
 * @category Collecting
 */
export const reduceWhile = effect.reduceWhile;
/**
 * Reduces an `Iterable<A>` using an effectual function `f`, working
 * sequentially from right to left.
 *
 * **Details**
 *
 * This function takes an iterable and applies a function `f` to each element in
 * the iterable. The function works sequentially, starting with an initial value
 * `zero` and then combining it with each element in the collection. The
 * provided function `f` is called for each element in the iterable, allowing
 * you to accumulate a result based on the current value and the element being
 * processed.
 *
 * **When to Use**
 *
 * The function is often used for operations like summing a collection of
 * numbers or combining results from multiple tasks. It ensures that operations
 * are performed one after the other, maintaining the order of the elements.
 *
 * **Example**
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * const processOrder = (id: number) =>
 *   Effect.succeed({ id, price: 100 * id })
 *     .pipe(Effect.tap(() => Console.log(`Order ${id} processed`)), Effect.delay(500 - (id * 100)))
 *
 * const program = Effect.reduceRight(
 *   [1, 2, 3, 4],
 *   0,
 *   (id, acc, i) =>
 *     processOrder(id)
 *       .pipe(Effect.map((order) => acc + order.price))
 * )
 *
 * Effect.runPromise(program).then(console.log)
 * // Output:
 * // Order 4 processed
 * // Order 3 processed
 * // Order 2 processed
 * // Order 1 processed
 * // 1000
 * ```
 *
 * @see {@link reduce} for a similar function that works from left to right.
 *
 * @since 2.0.0
 * @category Collecting
 */
export const reduceRight = effect.reduceRight;
/**
 * Reduces an `Iterable<Effect<A, E, R>>` to a single effect.
 *
 * **Details**
 *
 * This function processes a collection of effects and combines them into one
 * single effect. It starts with an initial effect (`zero`) and applies a
 * function `f` to each element in the collection.
 *
 * **Options**
 *
 * The function also allows you to customize how the effects are handled by
 * specifying options such as concurrency, batching, and how finalizers behave.
 * These options provide flexibility in running the effects concurrently or
 * adjusting other execution details.
 *
 * **Example**
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * const processOrder = (id: number) =>
 *   Effect.succeed({ id, price: 100 * id })
 *     .pipe(Effect.tap(() => Console.log(`Order ${id} processed`)), Effect.delay(500 - (id * 100)))
 *
 * const program = Effect.reduceEffect(
 *   [processOrder(1), processOrder(2), processOrder(3), processOrder(4)],
 *   Effect.succeed(0),
 *   (acc, order, i) => acc + order.price
 * )
 *
 * Effect.runPromise(program).then(console.log)
 * // Output:
 * // Order 1 processed
 * // Order 2 processed
 * // Order 3 processed
 * // Order 4 processed
 * // 1000
 * ```
 *
 * @since 2.0.0
 * @category Collecting
 */
export const reduceEffect = fiberRuntime.reduceEffect;
/**
 * Replicates the given effect `n` times.
 *
 * **Details**
 *
 * This function takes an effect and replicates it a specified number of times
 * (`n`). The result is an array of `n` effects, each of which is identical to
 * the original effect.
 *
 * **Example**
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * const task = Effect.succeed("Hello, World!").pipe(
 *   Effect.tap(Console.log)
 * )
 *
 * const program = Effect.gen(function*() {
 *   // Replicate the task 3 times
 *   const tasks = Effect.replicate(task, 3)
 *   for (const t of tasks) {
 *     // Run each task
 *     yield* t
 *   }
 * })
 *
 * Effect.runFork(program)
 * // Output:
 * // Hello, World!
 * // Hello, World!
 * // Hello, World!
 * ```
 *
 * @since 2.0.0
 */
export const replicate = fiberRuntime.replicate;
/**
 * Performs this effect the specified number of times and collects the results.
 *
 * **Details**
 *
 * This function repeats an effect multiple times and collects the results into
 * an array. You specify how many times to execute the effect, and it runs that
 * many times, either in sequence or concurrently depending on the provided
 * options.
 *
 * **Options**
 *
 * If the `discard` option is set to `true`, the intermediate results are not
 * collected, and the final result of the operation is `void`.
 *
 * The function also allows you to customize how the effects are handled by
 * specifying options such as concurrency, batching, and how finalizers behave.
 * These options provide flexibility in running the effects concurrently or
 * adjusting other execution details.
 *
 * **Example**
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * let counter = 0
 *
 * const task = Effect.sync(() => ++counter).pipe(
 *   Effect.tap(() => Console.log(`Task completed`))
 * )
 *
 * const program = Effect.gen(function*() {
 *   // Replicate the task 3 times and collect the results
 *   const results = yield* Effect.replicateEffect(task, 3)
 *   yield* Console.log(`Results: ${results.join(", ")}`)
 * })
 *
 * Effect.runFork(program)
 * // Output:
 * // Task completed
 * // Task completed
 * // Task completed
 * // Results: 1, 2, 3
 * ```
 *
 * @since 2.0.0
 * @category Collecting
 */
export const replicateEffect = fiberRuntime.replicateEffect;
/**
 * Applies an effectful operation to each element in a collection while
 * collecting both successes and failures.
 *
 * **Details**
 *
 * This function allows you to apply an effectful operation to every item in a
 * collection.
 *
 * Unlike {@link forEach}, which would stop at the first error, this function
 * continues processing all elements, accumulating both successes and failures.
 *
 * **When to Use**
 *
 * Use this function when you want to process every item in a collection, even
 * if some items fail. This is particularly useful when you need to perform
 * operations on all elements without halting due to an error.
 *
 * Keep in mind that if there are any failures, **all successes will be lost**,
 * so this function is not suitable when you need to keep the successful results
 * in case of errors.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * //      ┌─── Effect<number[], [string, ...string[]], never>
 * //      ▼
 * const program = Effect.validateAll([1, 2, 3, 4, 5], (n) => {
 *   if (n < 4) {
 *     return Console.log(`item ${n}`).pipe(Effect.as(n))
 *   } else {
 *     return Effect.fail(`${n} is not less that 4`)
 *   }
 * })
 *
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // item 1
 * // item 2
 * // item 3
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: {
 * //     _id: 'Cause',
 * //     _tag: 'Fail',
 * //     failure: [ '4 is not less that 4', '5 is not less that 4' ]
 * //   }
 * // }
 * ```
 *
 * @see {@link forEach} for a similar function that stops at the first error.
 * @see {@link partition} when you need to separate successes and failures
 * instead of losing successes with errors.
 *
 * @since 2.0.0
 * @category Error Accumulation
 */
export const validateAll = fiberRuntime.validateAll;
/**
 * This function is similar to {@link validateAll} but with a key difference: it
 * returns the first successful result or all errors if none of the operations
 * succeed.
 *
 * **Details**
 *
 * This function processes a collection of elements and applies an effectful
 * operation to each. Unlike {@link validateAll}, which accumulates both
 * successes and failures, `Effect.validateFirst` stops and returns the first
 * success it encounters. If no success occurs, it returns all accumulated
 * errors. This can be useful when you are interested in the first successful
 * result and want to avoid processing further once a valid result is found.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * //      ┌─── Effect<number, string[], never>
 * //      ▼
 * const program = Effect.validateFirst([1, 2, 3, 4, 5], (n) => {
 *   if (n < 4) {
 *     return Effect.fail(`${n} is not less that 4`)
 *   } else {
 *     return Console.log(`item ${n}`).pipe(Effect.as(n))
 *   }
 * })
 *
 * Effect.runPromise(program).then(console.log, console.error)
 * // Output:
 * // item 4
 * // 4
 * ```
 *
 * @see {@link validateAll} for a similar function that accumulates all results.
 * @see {@link firstSuccessOf} for a similar function that processes multiple
 * effects and returns the first successful one or the last error.
 *
 * @since 2.0.0
 * @category Error Accumulation
 */
export const validateFirst = fiberRuntime.validateFirst;
/**
 * Creates an `Effect` from a callback-based asynchronous function.
 *
 * **Details**
 *
 * The `resume` function:
 * - Must be called exactly once. Any additional calls will be ignored.
 * - Can return an optional `Effect` that will be run if the `Fiber` executing
 *   this `Effect` is interrupted. This can be useful in scenarios where you
 *   need to handle resource cleanup if the operation is interrupted.
 * - Can receive an `AbortSignal` to handle interruption if needed.
 *
 * The `FiberId` of the fiber that may complete the async callback may also be
 * specified using the `blockingOn` argument. This is called the "blocking
 * fiber" because it suspends the fiber executing the `async` effect (i.e.
 * semantically blocks the fiber from making progress). Specifying this fiber id
 * in cases where it is known will improve diagnostics, but not affect the
 * behavior of the returned effect.
 *
 * **When to Use**
 *
 * Use `Effect.async` when dealing with APIs that use callback-style instead of
 * `async/await` or `Promise`.
 *
 * **Example** (Wrapping a Callback API)
 *
 * ```ts
 * import { Effect } from "effect"
 * import * as NodeFS from "node:fs"
 *
 * const readFile = (filename: string) =>
 *   Effect.async<Buffer, Error>((resume) => {
 *     NodeFS.readFile(filename, (error, data) => {
 *       if (error) {
 *         // Resume with a failed Effect if an error occurs
 *         resume(Effect.fail(error))
 *       } else {
 *         // Resume with a succeeded Effect if successful
 *         resume(Effect.succeed(data))
 *       }
 *     })
 *   })
 *
 * //      ┌─── Effect<Buffer, Error, never>
 * //      ▼
 * const program = readFile("example.txt")
 * ```
 *
 * **Example** (Handling Interruption with Cleanup)
 *
 * ```ts
 * import { Effect, Fiber } from "effect"
 * import * as NodeFS from "node:fs"
 *
 * // Simulates a long-running operation to write to a file
 * const writeFileWithCleanup = (filename: string, data: string) =>
 *   Effect.async<void, Error>((resume) => {
 *     const writeStream = NodeFS.createWriteStream(filename)
 *
 *     // Start writing data to the file
 *     writeStream.write(data)
 *
 *     // When the stream is finished, resume with success
 *     writeStream.on("finish", () => resume(Effect.void))
 *
 *     // In case of an error during writing, resume with failure
 *     writeStream.on("error", (err) => resume(Effect.fail(err)))
 *
 *     // Handle interruption by returning a cleanup effect
 *     return Effect.sync(() => {
 *       console.log(`Cleaning up ${filename}`)
 *       NodeFS.unlinkSync(filename)
 *     })
 *   })
 *
 * const program = Effect.gen(function* () {
 *   const fiber = yield* Effect.fork(
 *     writeFileWithCleanup("example.txt", "Some long data...")
 *   )
 *   // Simulate interrupting the fiber after 1 second
 *   yield* Effect.sleep("1 second")
 *   yield* Fiber.interrupt(fiber) // This will trigger the cleanup
 * })
 *
 * // Run the program
 * Effect.runPromise(program)
 * // Output:
 * // Cleaning up example.txt
 * ```
 *
 * **Example** (Handling Interruption with AbortSignal)
 *
 * ```ts
 * import { Effect, Fiber } from "effect"
 *
 * // A task that supports interruption using AbortSignal
 * const interruptibleTask = Effect.async<void, Error>((resume, signal) => {
 *   // Handle interruption
 *   signal.addEventListener("abort", () => {
 *     console.log("Abort signal received")
 *     clearTimeout(timeoutId)
 *   })
 *
 *   // Simulate a long-running task
 *   const timeoutId = setTimeout(() => {
 *     console.log("Operation completed")
 *     resume(Effect.void)
 *   }, 2000)
 * })
 *
 * const program = Effect.gen(function* () {
 *   const fiber = yield* Effect.fork(interruptibleTask)
 *   // Simulate interrupting the fiber after 1 second
 *   yield* Effect.sleep("1 second")
 *   yield* Fiber.interrupt(fiber)
 * })
 *
 * // Run the program
 * Effect.runPromise(program)
 * // Output:
 * // Abort signal received
 * ```
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const async = core.async;
/**
 * A variant of {@link async} where the registration function may return an `Effect`.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const asyncEffect = runtime_.asyncEffect;
/**
 * Low level constructor that enables for custom stack tracing cutpoints.
 *
 * It is meant to be called with a bag of instructions that become available in
 * the "this" of the effect.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const throwingFunction = () => { throw new Error() }
 * const blowUp = Effect.custom(throwingFunction, function() {
 *   return Effect.succeed(this.effect_instruction_i0())
 * })
 * ```
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const custom = core.custom;
/**
 * @since 2.0.0
 * @category Creating Effects
 */
export const withFiberRuntime = core.withFiberRuntime;
/**
 * Creates an `Effect` that represents a recoverable error.
 *
 * **When to Use**
 *
 * Use this function to explicitly signal an error in an `Effect`. The error
 * will keep propagating unless it is handled. You can handle the error with
 * functions like {@link catchAll} or {@link catchTag}.
 *
 * **Example** (Creating a Failed Effect)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * //      ┌─── Effect<never, Error, never>
 * //      ▼
 * const failure = Effect.fail(
 *   new Error("Operation failed due to network error")
 * )
 * ```
 *
 * @see {@link succeed} to create an effect that represents a successful value.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const fail = core.fail;
/**
 * Creates an `Effect` that fails with the specified error, evaluated lazily.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const failSync = core.failSync;
/**
 * Creates an `Effect` that fails with the specified `Cause`.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const failCause = core.failCause;
/**
 * Creates an `Effect` that fails with the specified `Cause`, evaluated lazily.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const failCauseSync = core.failCauseSync;
/**
 * Creates an effect that terminates a fiber with a specified error.
 *
 * **Details**
 *
 * This function is used to signal a defect, which represents a critical and
 * unexpected error in the code. When invoked, it produces an effect that does
 * not handle the error and instead terminates the fiber.
 *
 * The error channel of the resulting effect is of type `never`, indicating that
 * it cannot recover from this failure.
 *
 * **When to Use**
 *
 * Use this function when encountering unexpected conditions in your code that
 * should not be handled as regular errors but instead represent unrecoverable
 * defects.
 *
 * **Example** (Terminating on Division by Zero with a Specified Error)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const divide = (a: number, b: number) =>
 *   b === 0
 *     ? Effect.die(new Error("Cannot divide by zero"))
 *     : Effect.succeed(a / b)
 *
 * //      ┌─── Effect<number, never, never>
 * //      ▼
 * const program = divide(1, 0)
 *
 * Effect.runPromise(program).catch(console.error)
 * // Output:
 * // (FiberFailure) Error: Cannot divide by zero
 * //   ...stack trace...
 * ```
 *
 * @see {@link dieSync} for a variant that throws a specified error, evaluated
 * lazily.
 * @see {@link dieMessage} for a variant that throws a `RuntimeException` with a
 * message.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const die = core.die;
/**
 * Creates an effect that terminates a fiber with a `RuntimeException`
 * containing the specified message.
 *
 * **Details**
 *
 * This function is used to signal a defect, representing a critical and
 * unexpected error in the code. When invoked, it produces an effect that
 * terminates the fiber with a `RuntimeException` carrying the given message.
 *
 * The resulting effect has an error channel of type `never`, indicating it does
 * not handle or recover from the error.
 *
 * **When to Use**
 *
 * Use this function when you want to terminate a fiber due to an unrecoverable
 * defect and include a clear explanation in the message.
 *
 * **Example** (Terminating on Division by Zero with a Specified Message)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const divide = (a: number, b: number) =>
 *   b === 0
 *     ? Effect.dieMessage("Cannot divide by zero")
 *     : Effect.succeed(a / b)
 *
 * //      ┌─── Effect<number, never, never>
 * //      ▼
 * const program = divide(1, 0)
 *
 * Effect.runPromise(program).catch(console.error)
 * // Output:
 * // (FiberFailure) RuntimeException: Cannot divide by zero
 * //   ...stack trace...
 * ```
 *
 * @see {@link die} for a variant that throws a specified error.
 * @see {@link dieSync} for a variant that throws a specified error, evaluated
 * lazily.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const dieMessage = core.dieMessage;
/**
 * Creates an effect that dies with the specified error, evaluated lazily.
 *
 * **Details**
 *
 * This function allows you to create an effect that will terminate with a fatal error.
 * The error is provided as a lazy argument, meaning it will only be evaluated when the effect runs.
 *
 * @see {@link die} if you don't need to evaluate the error lazily.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const dieSync = core.dieSync;
/**
 * Provides a way to write effectful code using generator functions, simplifying
 * control flow and error handling.
 *
 * **When to Use**
 *
 * `Effect.gen` allows you to write code that looks and behaves like synchronous
 * code, but it can handle asynchronous tasks, errors, and complex control flow
 * (like loops and conditions). It helps make asynchronous code more readable
 * and easier to manage.
 *
 * The generator functions work similarly to `async/await` but with more
 * explicit control over the execution of effects. You can `yield*` values from
 * effects and return the final result at the end.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const addServiceCharge = (amount: number) => amount + 1
 *
 * const applyDiscount = (
 *   total: number,
 *   discountRate: number
 * ): Effect.Effect<number, Error> =>
 *   discountRate === 0
 *     ? Effect.fail(new Error("Discount rate cannot be zero"))
 *     : Effect.succeed(total - (total * discountRate) / 100)
 *
 * const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))
 *
 * const fetchDiscountRate = Effect.promise(() => Promise.resolve(5))
 *
 * export const program = Effect.gen(function* () {
 *   const transactionAmount = yield* fetchTransactionAmount
 *   const discountRate = yield* fetchDiscountRate
 *   const discountedAmount = yield* applyDiscount(
 *     transactionAmount,
 *     discountRate
 *   )
 *   const finalAmount = addServiceCharge(discountedAmount)
 *   return `Final amount to charge: ${finalAmount}`
 * })
 * ```
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const gen = core.gen;
/**
 * An effect that that runs indefinitely and never produces any result. The
 * moral equivalent of `while(true) {}`, only without the wasted CPU cycles.
 *
 * **When to Use**
 *
 * It could be useful for long-running background tasks or to simulate waiting
 * behavior without actually consuming resources. This effect is ideal for cases
 * where you want to keep the program alive or in a certain state without
 * performing any active work.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const never = core.never;
/**
 * Ensures the `Option` is `None`, returning `void`. Otherwise, raises a
 * `NoSuchElementException`.
 *
 * **Details**
 *
 * This function checks if the provided `Option` is `None`. If it is, it returns
 * an effect that produces no result (i.e., `void`). If the `Option` is not
 * `None` (i.e., it contains a value), the function will raise a
 * `NoSuchElementException` error.
 *
 * **When to Use**
 *
 * This is useful when you want to ensure that a certain value is absent (i.e.,
 * `None`) before continuing execution, and to handle cases where the value is
 * unexpectedly present.
 *
 * @since 2.0.0
 */
export const none = effect.none;
/**
 * Creates an `Effect` that represents an asynchronous computation guaranteed to
 * succeed.
 *
 * **Details**
 *
 * The provided function (`thunk`) returns a `Promise` that should never reject; if it does, the error
 * will be treated as a "defect".
 *
 * This defect is not a standard error but indicates a flaw in the logic that
 * was expected to be error-free. You can think of it similar to an unexpected
 * crash in the program, which can be further managed or logged using tools like
 * {@link catchAllDefect}.
 *
 * **Interruptions**
 *
 * An optional `AbortSignal` can be provided to allow for interruption of the
 * wrapped `Promise` API.
 *
 * **When to Use**
 *
 * Use this function when you are sure the operation will not reject.
 *
 * **Example** (Delayed Message)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const delay = (message: string) =>
 *   Effect.promise<string>(
 *     () =>
 *       new Promise((resolve) => {
 *         setTimeout(() => {
 *           resolve(message)
 *         }, 2000)
 *       })
 *   )
 *
 * //      ┌─── Effect<string, never, never>
 * //      ▼
 * const program = delay("Async operation completed successfully!")
 * ```
 *
 * @see {@link tryPromise} for a version that can handle failures.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const promise = effect.promise;
/**
 * Creates an `Effect` that always succeeds with a given value.
 *
 * **When to Use**
 *
 * Use this function when you need an effect that completes successfully with a
 * specific value without any errors or external dependencies.
 *
 * **Example** (Creating a Successful Effect)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * // Creating an effect that represents a successful scenario
 * //
 * //      ┌─── Effect<number, never, never>
 * //      ▼
 * const success = Effect.succeed(42)
 * ```
 *
 * @see {@link fail} to create an effect that represents a failure.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const succeed = core.succeed;
/**
 * Returns an effect which succeeds with `None`.
 *
 * **When to Use**
 *
 * Use this function when you need to represent the absence of a value in your
 * code, especially when working with optional data. This can be helpful when
 * you want to indicate that no result is available without throwing an error or
 * performing additional logic.
 *
 * @see {@link succeedSome} to create an effect that succeeds with a `Some` value.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const succeedNone = effect.succeedNone;
/**
 * Returns an effect which succeeds with the value wrapped in a `Some`.
 *
 * @see {@link succeedNone} for a similar function that returns `None` when the value is absent.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const succeedSome = effect.succeedSome;
/**
 * Delays the creation of an `Effect` until it is actually needed.
 *
 * **Details**
 *
 * The `Effect.suspend` function takes a thunk that represents the effect and
 * wraps it in a suspended effect. This means the effect will not be created
 * until it is explicitly needed, which is helpful in various scenarios:
 * - **Lazy Evaluation**: Helps optimize performance by deferring computations,
 *   especially when the effect might not be needed, or when its computation is
 *   expensive. This also ensures that any side effects or scoped captures are
 *   re-executed on each invocation.
 * - **Handling Circular Dependencies**: Useful in managing circular
 *   dependencies, such as recursive functions that need to avoid eager
 *   evaluation to prevent stack overflow.
 * - **Unifying Return Types**: Can help TypeScript unify return types in
 *   situations where multiple branches of logic return different effects,
 *   simplifying type inference.
 *
 * **When to Use**
 *
 * Use this function when you need to defer the evaluation of an effect until it
 * is required. This is particularly useful for optimizing expensive
 * computations, managing circular dependencies, or resolving type inference
 * issues.
 *
 * **Example** (Lazy Evaluation with Side Effects)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * let i = 0
 *
 * const bad = Effect.succeed(i++)
 *
 * const good = Effect.suspend(() => Effect.succeed(i++))
 *
 * console.log(Effect.runSync(bad)) // Output: 0
 * console.log(Effect.runSync(bad)) // Output: 0
 *
 * console.log(Effect.runSync(good)) // Output: 1
 * console.log(Effect.runSync(good)) // Output: 2
 * ```
 *
 * **Example** (Recursive Fibonacci)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const blowsUp = (n: number): Effect.Effect<number> =>
 *   n < 2
 *     ? Effect.succeed(1)
 *     : Effect.zipWith(blowsUp(n - 1), blowsUp(n - 2), (a, b) => a + b)
 *
 * console.log(Effect.runSync(blowsUp(32)))
 * // crash: JavaScript heap out of memory
 *
 * const allGood = (n: number): Effect.Effect<number> =>
 *   n < 2
 *     ? Effect.succeed(1)
 *     : Effect.zipWith(
 *         Effect.suspend(() => allGood(n - 1)),
 *         Effect.suspend(() => allGood(n - 2)),
 *         (a, b) => a + b
 *       )
 *
 * console.log(Effect.runSync(allGood(32)))
 * // Output: 3524578
 * ```
 *
 * **Example** (Using Effect.suspend to Help TypeScript Infer Types)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * //   Without suspend, TypeScript may struggle with type inference.
 * //   Inferred type:
 * //     (a: number, b: number) =>
 * //       Effect<never, Error, never> | Effect<number, never, never>
 * const withoutSuspend = (a: number, b: number) =>
 *   b === 0
 *     ? Effect.fail(new Error("Cannot divide by zero"))
 *     : Effect.succeed(a / b)
 *
 * //   Using suspend to unify return types.
 * //   Inferred type:
 * //     (a: number, b: number) => Effect<number, Error, never>
 * const withSuspend = (a: number, b: number) =>
 *   Effect.suspend(() =>
 *     b === 0
 *       ? Effect.fail(new Error("Cannot divide by zero"))
 *       : Effect.succeed(a / b)
 *   )
 * ```
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const suspend = core.suspend;
/**
 * Creates an `Effect` that represents a synchronous side-effectful computation.
 *
 * **Details**
 *
 * The provided function (`thunk`) must not throw errors; if it does, the error
 * will be treated as a "defect".
 *
 * This defect is not a standard error but indicates a flaw in the logic that
 * was expected to be error-free. You can think of it similar to an unexpected
 * crash in the program, which can be further managed or logged using tools like
 * {@link catchAllDefect}.
 *
 * **When to Use**
 *
 * Use this function when you are sure the operation will not fail.
 *
 * **Example** (Logging a Message)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const log = (message: string) =>
 *   Effect.sync(() => {
 *     console.log(message) // side effect
 *   })
 *
 * //      ┌─── Effect<void, never, never>
 * //      ▼
 * const program = log("Hello, World!")
 * ```
 *
 * @see {@link try_ | try} for a version that can handle failures.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const sync = core.sync;
const _void = core.void;
export {
/**
 * Represents an effect that does nothing and produces no value.
 *
 * **When to Use**
 *
 * Use this effect when you need to represent an effect that does nothing.
 * This is useful in scenarios where you need to satisfy an effect-based
 * interface or control program flow without performing any operations. For
 * example, it can be used in situations where you want to return an effect
 * from a function but do not need to compute or return any result.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
_void as void };
/**
 * @since 2.0.0
 * @category Creating Effects
 */
export const yieldNow = core.yieldNow;
const _catch = effect._catch;
export {
/**
 * Recovers from a specified error by catching it and handling it with a provided function.
 *
 * **Details**
 *
 * This function allows you to recover from specific errors that occur during
 * the execution of an effect. It works by catching a specific type of error
 * (identified by a discriminator) and then handling it using a provided
 * handler function. The handler can return a new effect that helps recover
 * from the error, allowing the program to continue. If the error doesn't
 * match the specified type, the function allows the original effect to
 * continue as it was.
 *
 * **Example**
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * class NetworkError {
 *   readonly _tag = "NetworkError"
 * }
 * class ValidationError {
 *   readonly _tag = "ValidationError"
 * }
 *
 * // Simulate an effect that may fail
 * const task: Effect.Effect<never, NetworkError | ValidationError, never> = Effect.fail(new NetworkError())
 *
 * const program = Effect.gen(function*() {
 *   const result = yield* Effect.catch(task, "_tag", {
 *     failure: "NetworkError",
 *     onFailure: (error) => Effect.succeed(`recovered from error: ${error._tag}`)
 *   })
 *   console.log(`Result: ${result}`)
 * })
 *
 * Effect.runFork(program)
 * // Output: Result: recovered from error: NetworkError
 * ```
 *
 * @see {@link catchTag} for a version that can recover from errors based on a `_tag` discriminator.
 *
 * @since 2.0.0
 * @category Error handling
 */
_catch as catch };
/**
 * Handles all errors in an effect by providing a fallback effect.
 *
 * **Details**
 *
 * This function catches any errors that may occur during the execution of an
 * effect and allows you to handle them by specifying a fallback effect. This
 * ensures that the program continues without failing by recovering from errors
 * using the provided fallback logic.
 *
 * **Note**: This function only handles recoverable errors. It will not recover
 * from unrecoverable defects.
 *
 * **Example** (Providing Recovery Logic for Recoverable Errors)
 *
 * ```ts
 * import { Effect, Random } from "effect"
 *
 * class HttpError {
 *   readonly _tag = "HttpError"
 * }
 *
 * class ValidationError {
 *   readonly _tag = "ValidationError"
 * }
 *
 * //      ┌─── Effect<string, HttpError | ValidationError, never>
 * //      ▼
 * const program = Effect.gen(function* () {
 *   const n1 = yield* Random.next
 *   const n2 = yield* Random.next
 *   if (n1 < 0.5) {
 *     yield* Effect.fail(new HttpError())
 *   }
 *   if (n2 < 0.5) {
 *     yield* Effect.fail(new ValidationError())
 *   }
 *   return "some result"
 * })
 *
 * //      ┌─── Effect<string, never, never>
 * //      ▼
 * const recovered = program.pipe(
 *   Effect.catchAll((error) =>
 *     Effect.succeed(`Recovering from ${error._tag}`)
 *   )
 * )
 * ```
 *
 * @see {@link catchAllCause} for a version that can recover from both
 * recoverable and unrecoverable errors.
 *
 * @since 2.0.0
 * @category Error handling
 */
export const catchAll = core.catchAll;
/**
 * Handles both recoverable and unrecoverable errors by providing a recovery
 * effect.
 *
 * **When to Use**
 *
 * The `catchAllCause` function allows you to handle all errors, including
 * unrecoverable defects, by providing a recovery effect. The recovery logic is
 * based on the `Cause` of the error, which provides detailed information about
 * the failure.
 *
 * **When to Recover from Defects**
 *
 * Defects are unexpected errors that typically shouldn't be recovered from, as
 * they often indicate serious issues. However, in some cases, such as
 * dynamically loaded plugins, controlled recovery might be needed.
 *
 * **Example** (Recovering from All Errors)
 *
 * ```ts
 * import { Cause, Effect } from "effect"
 *
 * // Define an effect that may fail with a recoverable or unrecoverable error
 * const program = Effect.fail("Something went wrong!")
 *
 * // Recover from all errors by examining the cause
 * const recovered = program.pipe(
 *   Effect.catchAllCause((cause) =>
 *     Cause.isFailure(cause)
 *       ? Effect.succeed("Recovered from a regular error")
 *       : Effect.succeed("Recovered from a defect")
 *   )
 * )
 *
 * Effect.runPromise(recovered).then(console.log)
 * // Output: "Recovered from a regular error"
 * ```
 *
 * @since 2.0.0
 * @category Error handling
 */
export const catchAllCause = core.catchAllCause;
/**
 * Recovers from all defects using a provided recovery function.
 *
 * **When to Use**
 *
 * There is no sensible way to recover from defects. This method should be used
 * only at the boundary between Effect and an external system, to transmit
 * information on a defect for diagnostic or explanatory purposes.
 *
 * **Details**
 *
 * `catchAllDefect` allows you to handle defects, which are unexpected errors
 * that usually cause the program to terminate. This function lets you recover
 * from these defects by providing a function that handles the error. However,
 * it does not handle expected errors (like those from {@link fail}) or
 * execution interruptions (like those from {@link interrupt}).
 *
 * **When to Recover from Defects**
 *
 * Defects are unexpected errors that typically shouldn't be recovered from, as
 * they often indicate serious issues. However, in some cases, such as
 * dynamically loaded plugins, controlled recovery might be needed.
 *
 * **Example** (Handling All Defects)
 *
 * ```ts
 * import { Effect, Cause, Console } from "effect"
 *
 * // Simulating a runtime error
 * const task = Effect.dieMessage("Boom!")
 *
 * const program = Effect.catchAllDefect(task, (defect) => {
 *   if (Cause.isRuntimeException(defect)) {
 *     return Console.log(
 *       `RuntimeException defect caught: ${defect.message}`
 *     )
 *   }
 *   return Console.log("Unknown defect caught.")
 * })
 *
 * // We get an Exit.Success because we caught all defects
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // RuntimeException defect caught: Boom!
 * // {
 * //   _id: "Exit",
 * //   _tag: "Success",
 * //   value: undefined
 * // }
 * ```
 *
 * @since 2.0.0
 * @category Error handling
 */
export const catchAllDefect = effect.catchAllDefect;
/**
 * Recovers from specific errors based on a predicate.
 *
 * **When to Use**
 *
 * `catchIf` works similarly to {@link catchSome}, but it allows you to
 * recover from errors by providing a predicate function. If the predicate
 * matches the error, the recovery effect is applied. This function doesn't
 * alter the error type, so the resulting effect still carries the original
 * error type unless a user-defined type guard is used to narrow the type.
 *
 * **Example** (Catching Specific Errors with a Predicate)
 *
 * ```ts
 * import { Effect, Random } from "effect"
 *
 * class HttpError {
 *   readonly _tag = "HttpError"
 * }
 *
 * class ValidationError {
 *   readonly _tag = "ValidationError"
 * }
 *
 * //      ┌─── Effect<string, HttpError | ValidationError, never>
 * //      ▼
 * const program = Effect.gen(function* () {
 *   const n1 = yield* Random.next
 *   const n2 = yield* Random.next
 *   if (n1 < 0.5) {
 *     yield* Effect.fail(new HttpError())
 *   }
 *   if (n2 < 0.5) {
 *     yield* Effect.fail(new ValidationError())
 *   }
 *   return "some result"
 * })
 *
 * //      ┌─── Effect<string, ValidationError, never>
 * //      ▼
 * const recovered = program.pipe(
 *   Effect.catchIf(
 *     // Only handle HttpError errors
 *     (error) => error._tag === "HttpError",
 *     () => Effect.succeed("Recovering from HttpError")
 *   )
 * )
 * ```
 *
 * @since 2.0.0
 * @category Error handling
 */
export const catchIf = core.catchIf;
/**
 * Catches and recovers from specific types of errors, allowing you to attempt
 * recovery only for certain errors.
 *
 * **Details**
 *
 * `catchSome` lets you selectively catch and handle errors of certain
 * types by providing a recovery effect for specific errors. If the error
 * matches a condition, recovery is attempted; if not, it doesn't affect the
 * program. This function doesn't alter the error type, meaning the error type
 * remains the same as in the original effect.
 *
 * **Example** (Handling Specific Errors with Effect.catchSome)
 *
 * ```ts
 * import { Effect, Random, Option } from "effect"
 *
 * class HttpError {
 *   readonly _tag = "HttpError"
 * }
 *
 * class ValidationError {
 *   readonly _tag = "ValidationError"
 * }
 *
 * //      ┌─── Effect<string, HttpError | ValidationError, never>
 * //      ▼
 * const program = Effect.gen(function* () {
 *   const n1 = yield* Random.next
 *   const n2 = yield* Random.next
 *   if (n1 < 0.5) {
 *     yield* Effect.fail(new HttpError())
 *   }
 *   if (n2 < 0.5) {
 *     yield* Effect.fail(new ValidationError())
 *   }
 *   return "some result"
 * })
 *
 * //      ┌─── Effect<string, HttpError | ValidationError, never>
 * //      ▼
 * const recovered = program.pipe(
 *   Effect.catchSome((error) => {
 *     // Only handle HttpError errors
 *     if (error._tag === "HttpError") {
 *       return Option.some(Effect.succeed("Recovering from HttpError"))
 *     } else {
 *       return Option.none()
 *     }
 *   })
 * )
 * ```
 *
 * @see {@link catchIf} for a version that allows you to recover from errors based on a predicate.
 *
 * @since 2.0.0
 * @category Error handling
 */
export const catchSome = core.catchSome;
/**
 * Recovers from specific causes using a provided partial function.
 *
 * @see {@link catchSome} for a version that allows you to recover from errors.
 * @see {@link catchSomeDefect} for a version that allows you to recover from defects.
 *
 * @since 2.0.0
 * @category Error handling
 */
export const catchSomeCause = effect.catchSomeCause;
/**
 * Recovers from specific defects using a provided partial function.
 *
 * **Details**
 *
 * `catchSomeDefect` allows you to handle specific defects, which are
 * unexpected errors that can cause the program to stop. It uses a partial
 * function to catch only certain defects and ignores others. The function does
 * not handle expected errors (such as those caused by {@link fail}) or
 * interruptions in execution (like those caused by {@link interrupt}).
 *
 * This function provides a way to handle certain types of defects while
 * allowing others to propagate and cause failure in the program.
 *
 * **Note**: There is no sensible way to recover from defects. This method
 * should be used only at the boundary between Effect and an external system, to
 * transmit information on a defect for diagnostic or explanatory purposes.
 *
 * **How the Partial Function Works**
 *
 * The function provided to `catchSomeDefect` acts as a filter and a handler for defects:
 * - It receives the defect as an input.
 * - If the defect matches a specific condition (e.g., a certain error type), the function returns
 *   an `Option.some` containing the recovery logic.
 * - If the defect does not match, the function returns `Option.none`, allowing the defect to propagate.
 *
 * **Example** (Handling Specific Defects)
 *
 * ```ts
 * import { Effect, Cause, Option, Console } from "effect"
 *
 * // Simulating a runtime error
 * const task = Effect.dieMessage("Boom!")
 *
 * const program = Effect.catchSomeDefect(task, (defect) => {
 *   if (Cause.isIllegalArgumentException(defect)) {
 *     return Option.some(
 *       Console.log(
 *         `Caught an IllegalArgumentException defect: ${defect.message}`
 *       )
 *     )
 *   }
 *   return Option.none()
 * })
 *
 * // Since we are only catching IllegalArgumentException
 * // we will get an Exit.Failure because we simulated a runtime error.
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: {
 * //     _id: 'Cause',
 * //     _tag: 'Die',
 * //     defect: { _tag: 'RuntimeException' }
 * //   }
 * // }
 * ```
 *
 * @since 2.0.0
 * @category Error handling
 */
export const catchSomeDefect = effect.catchSomeDefect;
/**
 * Catches and handles specific errors by their `_tag` field, which is used as a
 * discriminator.
 *
 * **When to Use**
 *
 * `catchTag` is useful when your errors are tagged with a readonly `_tag` field
 * that identifies the error type. You can use this function to handle specific
 * error types by matching the `_tag` value. This allows for precise error
 * handling, ensuring that only specific errors are caught and handled.
 *
 * The error type must have a readonly `_tag` field to use `catchTag`. This
 * field is used to identify and match errors.
 *
 * **Example** (Handling Errors by Tag)
 *
 * ```ts
 * import { Effect, Random } from "effect"
 *
 * class HttpError {
 *   readonly _tag = "HttpError"
 * }
 *
 * class ValidationError {
 *   readonly _tag = "ValidationError"
 * }
 *
 * //      ┌─── Effect<string, HttpError | ValidationError, never>
 * //      ▼
 * const program = Effect.gen(function* () {
 *   const n1 = yield* Random.next
 *   const n2 = yield* Random.next
 *   if (n1 < 0.5) {
 *     yield* Effect.fail(new HttpError())
 *   }
 *   if (n2 < 0.5) {
 *     yield* Effect.fail(new ValidationError())
 *   }
 *   return "some result"
 * })
 *
 * //      ┌─── Effect<string, ValidationError, never>
 * //      ▼
 * const recovered = program.pipe(
 *   // Only handle HttpError errors
 *   Effect.catchTag("HttpError", (_HttpError) =>
 *     Effect.succeed("Recovering from HttpError")
 *   )
 * )
 * ```
 *
 * @see {@link catchTags} for a version that allows you to handle multiple error
 * types at once.
 *
 * @since 2.0.0
 * @category Error handling
 */
export const catchTag = effect.catchTag;
/**
 * Handles multiple errors in a single block of code using their `_tag` field.
 *
 * **When to Use**
 *
 * `catchTags` is a convenient way to handle multiple error types at
 * once. Instead of using {@link catchTag} multiple times, you can pass an
 * object where each key is an error type's `_tag`, and the value is the handler
 * for that specific error. This allows you to catch and recover from multiple
 * error types in a single call.
 *
 * The error type must have a readonly `_tag` field to use `catchTag`. This
 * field is used to identify and match errors.
 *
 * **Example** (Handling Multiple Tagged Error Types at Once)
 *
 * ```ts
 * import { Effect, Random } from "effect"
 *
 * class HttpError {
 *   readonly _tag = "HttpError"
 * }
 *
 * class ValidationError {
 *   readonly _tag = "ValidationError"
 * }
 *
 * //      ┌─── Effect<string, HttpError | ValidationError, never>
 * //      ▼
 * const program = Effect.gen(function* () {
 *   const n1 = yield* Random.next
 *   const n2 = yield* Random.next
 *   if (n1 < 0.5) {
 *     yield* Effect.fail(new HttpError())
 *   }
 *   if (n2 < 0.5) {
 *     yield* Effect.fail(new ValidationError())
 *   }
 *   return "some result"
 * })
 *
 * //      ┌─── Effect<string, never, never>
 * //      ▼
 * const recovered = program.pipe(
 *   Effect.catchTags({
 *     HttpError: (_HttpError) =>
 *       Effect.succeed(`Recovering from HttpError`),
 *     ValidationError: (_ValidationError) =>
 *       Effect.succeed(`Recovering from ValidationError`)
 *   })
 * )
 * ```
 *
 * @since 2.0.0
 * @category Error handling
 */
export const catchTags = effect.catchTags;
/**
 * Retrieves the cause of a failure in an effect.
 *
 * **Details**
 *
 * This function allows you to expose the detailed cause of an effect, which
 * includes a more precise representation of failures, such as error messages
 * and defects.
 *
 * **When to Use**
 *
 * This function is helpful when you need to inspect the cause of a failure in
 * an effect, giving you more information than just the error message. It can be
 * used to log, handle, or analyze failures in more detail, including
 * distinguishing between different types of defects (e.g., runtime exceptions,
 * interruptions, etc.).
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * //      ┌─── Effect<number, string, never>
 * //      ▼
 * const program = Effect.fail("Oh uh!").pipe(Effect.as(2))
 *
 * //      ┌─── Effect<void, never, never>
 * //      ▼
 * const recovered = Effect.gen(function* () {
 *   const cause = yield* Effect.cause(program)
 *   yield* Console.log(cause)
 * })
 * ```
 *
 * @since 2.0.0
 * @category Error handling
 */
export const cause = effect.cause;
/**
 * Runs an effect repeatedly until it succeeds, ignoring errors.
 *
 * **Details**
 *
 * This function takes an effect and runs it repeatedly until the effect
 * successfully completes. If the effect fails, it will ignore the error and
 * retry the operation. This is useful when you need to perform a task that may
 * fail occasionally, but you want to keep trying until it eventually succeeds.
 * It works by repeatedly executing the effect until it no longer throws an
 * error.
 *
 * **When to Use**
 *
 * Use this function when you want to retry an operation multiple times until it
 * succeeds. It is helpful in cases where the operation may fail temporarily
 * (e.g., a network request), and you want to keep trying without handling or
 * worrying about the errors.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * let counter = 0
 *
 * const effect = Effect.try(() => {
 *   counter++
 *   if (counter < 3) {
 *     console.log("running effect")
 *     throw new Error("error")
 *   } else {
 *     console.log("effect done")
 *     return "some result"
 *   }
 * })
 *
 * const program = Effect.eventually(effect)
 *
 * Effect.runPromise(program).then(console.log)
 * // Output:
 * // running effect
 * // running effect
 * // effect done
 * // some result
 * ```
 *
 * @since 2.0.0
 * @category Error handling
 */
export const eventually = effect.eventually;
/**
 * Discards both the success and failure values of an effect.
 *
 * **When to Use**
 *
 * `ignore` allows you to run an effect without caring about its result, whether
 * it succeeds or fails. This is useful when you only care about the side
 * effects of the effect and do not need to handle or process its outcome.
 *
 * **Example** (Using Effect.ignore to Discard Values)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * //      ┌─── Effect<number, string, never>
 * //      ▼
 * const task = Effect.fail("Uh oh!").pipe(Effect.as(5))
 *
 * //      ┌─── Effect<void, never, never>
 * //      ▼
 * const program = Effect.ignore(task)
 * ```
 *
 * @see {@link ignoreLogged} to log failures while ignoring them.
 *
 * @since 2.0.0
 * @category Error handling
 */
export const ignore = effect.ignore;
/**
 * Ignores the result of an effect but logs any failures.
 *
 * **Details**
 *
 * This function takes an effect and returns a new effect that ignores whether
 * the original effect succeeds or fails. However, if the effect fails, it will
 * log the failure at the Debug level, so you can keep track of any issues that
 * arise.
 *
 * **When to Use**
 *
 * This is useful in scenarios where you want to continue with your program
 * regardless of the result of the effect, but you still want to be aware of
 * potential failures that may need attention later.
 *
 * @since 2.0.0
 * @category Error handling
 */
export const ignoreLogged = effect.ignoreLogged;
/**
 * Combines all errors from concurrent operations into a single error.
 *
 * **Details**
 *
 * This function is used when you have multiple operations running at the same
 * time, and you want to capture all the errors that occur across those
 * operations. Instead of handling each error separately, it combines all the
 * errors into one unified error.
 *
 * **When to Use**
 *
 * When using this function, any errors that occur in the concurrently running
 * operations will be grouped together into a single error. This helps simplify
 * error handling in cases where you don't need to differentiate between each
 * failure, but simply want to know that multiple failures occurred.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const fail1 = Effect.fail("Oh uh!")
 * const fail2 = Effect.fail("Oh no!")
 * const die = Effect.dieMessage("Boom!")
 *
 * // Run all effects concurrently and capture all errors
 * const program = Effect.all([fail1, fail2, die], {
 *   concurrency: "unbounded"
 * }).pipe(Effect.asVoid, Effect.parallelErrors)
 *
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: { _id: 'Cause', _tag: 'Fail', failure: [ 'Oh uh!', 'Oh no!' ] }
 * // }
 * ```
 *
 * @since 2.0.0
 * @category Error handling
 */
export const parallelErrors = effect.parallelErrors;
/**
 * Transforms an effect to expose detailed error causes.
 *
 * **Details**
 *
 * This function enhances an effect by providing detailed information about any
 * error, defect, or interruption that may occur during its execution. It
 * modifies the error channel of the effect so that it includes a full cause of
 * the failure, wrapped in a `Cause<E>` type.
 *
 * After applying this function, you can use operators like {@link catchAll} and
 * {@link catchTags} to handle specific types of errors.
 *
 * If you no longer need the detailed cause information, you can revert the
 * changes using {@link unsandbox} to return to the original error-handling
 * behavior.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * //      ┌─── Effect<string, Error, never>
 * //      ▼
 * const task = Effect.fail(new Error("Oh uh!")).pipe(
 *   Effect.as("primary result")
 * )
 *
 * //      ┌─── Effect<string, Cause<Error>, never>
 * //      ▼
 * const sandboxed = Effect.sandbox(task)
 *
 * const program = Effect.catchTags(sandboxed, {
 *   Die: (cause) =>
 *     Console.log(`Caught a defect: ${cause.defect}`).pipe(
 *       Effect.as("fallback result on defect")
 *     ),
 *   Interrupt: (cause) =>
 *     Console.log(`Caught a defect: ${cause.fiberId}`).pipe(
 *       Effect.as("fallback result on fiber interruption")
 *     ),
 *   Fail: (cause) =>
 *     Console.log(`Caught a defect: ${cause.error}`).pipe(
 *       Effect.as("fallback result on failure")
 *     )
 * })
 *
 * // Restore the original error handling with unsandbox
 * const main = Effect.unsandbox(program)
 *
 * Effect.runPromise(main).then(console.log)
 * // Output:
 * // Caught a defect: Oh uh!
 * // fallback result on failure
 * ```
 *
 * @see {@link unsandbox} to restore the original error handling.
 *
 * @since 2.0.0
 * @category Error handling
 */
export const sandbox = effect.sandbox;
/**
 * Retries a failing effect based on a defined retry policy.
 *
 * **Details**
 *
 * The `Effect.retry` function takes an effect and a {@link Schedule} policy,
 * and will automatically retry the effect if it fails, following the rules of
 * the policy.
 *
 * If the effect ultimately succeeds, the result will be returned.
 *
 * If the maximum retries are exhausted and the effect still fails, the failure
 * is propagated.
 *
 * **When to Use**
 *
 * This can be useful when dealing with intermittent failures, such as network
 * issues or temporary resource unavailability. By defining a retry policy, you
 * can control the number of retries, the delay between them, and when to stop
 * retrying.
 *
 * **Example** (Retrying with a Fixed Delay)
 *
 * ```ts
 * import { Effect, Schedule } from "effect"
 *
 * let count = 0
 *
 * // Simulates an effect with possible failures
 * const task = Effect.async<string, Error>((resume) => {
 *   if (count <= 2) {
 *     count++
 *     console.log("failure")
 *     resume(Effect.fail(new Error()))
 *   } else {
 *     console.log("success")
 *     resume(Effect.succeed("yay!"))
 *   }
 * })
 *
 * // Define a repetition policy using a fixed delay between retries
 * const policy = Schedule.fixed("100 millis")
 *
 * const repeated = Effect.retry(task, policy)
 *
 * Effect.runPromise(repeated).then(console.log)
 * // Output:
 * // failure
 * // failure
 * // failure
 * // success
 * // yay!
 * ```
 *
 * **Example** (Retrying a Task up to 5 times)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * let count = 0
 *
 * // Simulates an effect with possible failures
 * const task = Effect.async<string, Error>((resume) => {
 *   if (count <= 2) {
 *     count++
 *     console.log("failure")
 *     resume(Effect.fail(new Error()))
 *   } else {
 *     console.log("success")
 *     resume(Effect.succeed("yay!"))
 *   }
 * })
 *
 * // Retry the task up to 5 times
 * Effect.runPromise(Effect.retry(task, { times: 5 })).then(console.log)
 * // Output:
 * // failure
 * // failure
 * // failure
 * // success
 * ```
 *
 * **Example** (Retrying Until a Specific Condition is Met)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * let count = 0
 *
 * // Define an effect that simulates varying error on each invocation
 * const action = Effect.failSync(() => {
 *   console.log(`Action called ${++count} time(s)`)
 *   return `Error ${count}`
 * })
 *
 * // Retry the action until a specific condition is met
 * const program = Effect.retry(action, {
 *   until: (err) => err === "Error 3"
 * })
 *
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // Action called 1 time(s)
 * // Action called 2 time(s)
 * // Action called 3 time(s)
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: { _id: 'Cause', _tag: 'Fail', failure: 'Error 3' }
 * // }
 * ```
 *
 * @see {@link retryOrElse} for a version that allows you to run a fallback.
 * @see {@link repeat} if your retry condition is based on successful outcomes rather than errors.
 *
 * @since 2.0.0
 * @category Error handling
 */
export const retry = schedule_.retry_combined;
/**
 * Apply an `ExecutionPlan` to the effect, which allows you to fallback to
 * different resources in case of failure.
 *
 * @since 3.16.0
 * @category Error handling
 * @experimental
 */
export const withExecutionPlan = internalExecutionPlan.withExecutionPlan;
/**
 * Retries a failing effect and runs a fallback effect if retries are exhausted.
 *
 * **Details**
 *
 * The `Effect.retryOrElse` function attempts to retry a failing effect multiple
 * times according to a defined {@link Schedule} policy.
 *
 * If the retries are exhausted and the effect still fails, it runs a fallback
 * effect instead.
 *
 * **When to Use**
 *
 * This function is useful when you want to handle failures gracefully by
 * specifying an alternative action after repeated failures.
 *
 * **Example** (Retrying with Fallback)
 *
 * ```ts
 * import { Effect, Schedule, Console } from "effect"
 *
 * let count = 0
 *
 * // Simulates an effect with possible failures
 * const task = Effect.async<string, Error>((resume) => {
 *   if (count <= 2) {
 *     count++
 *     console.log("failure")
 *     resume(Effect.fail(new Error()))
 *   } else {
 *     console.log("success")
 *     resume(Effect.succeed("yay!"))
 *   }
 * })
 *
 * // Retry the task with a delay between retries and a maximum of 2 retries
 * const policy = Schedule.addDelay(Schedule.recurs(2), () => "100 millis")
 *
 * // If all retries fail, run the fallback effect
 * const repeated = Effect.retryOrElse(
 *   task,
 *   policy,
 *   // fallback
 *   () => Console.log("orElse").pipe(Effect.as("default value"))
 * )
 *
 * Effect.runPromise(repeated).then(console.log)
 * // Output:
 * // failure
 * // failure
 * // failure
 * // orElse
 * // default value
 * ```
 *
 * @see {@link retry} for a version that does not run a fallback effect.
 *
 * @since 2.0.0
 * @category Error handling
 */
export const retryOrElse = schedule_.retryOrElse_Effect;
const try_ = effect.try_;
export {
/**
 * Creates an `Effect` that represents a synchronous computation that might
 * fail.
 *
 * **When to Use**
 *
 * In situations where you need to perform synchronous operations that might
 * fail, such as parsing JSON, you can use the `try` constructor. This
 * constructor is designed to handle operations that could throw exceptions by
 * capturing those exceptions and transforming them into manageable errors.
 *
 * **Error Handling**
 *
 * There are two ways to handle errors with `try`:
 *
 * 1. If you don't provide a `catch` function, the error is caught and the
 *    effect fails with an `UnknownException`.
 * 2. If you provide a `catch` function, the error is caught and the `catch`
 *    function maps it to an error of type `E`.
 *
 * **Example** (Safe JSON Parsing)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const parse = (input: string) =>
 *   // This might throw an error if input is not valid JSON
 *   Effect.try(() => JSON.parse(input))
 *
 * //      ┌─── Effect<any, UnknownException, never>
 * //      ▼
 * const program = parse("")
 *
 * ```
 *
 * **Example** (Custom Error Handling)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const parse = (input: string) =>
 *   Effect.try({
 *     // JSON.parse may throw for bad input
 *     try: () => JSON.parse(input),
 *     // remap the error
 *     catch: (unknown) => new Error(`something went wrong ${unknown}`)
 *   })
 *
 * //      ┌─── Effect<any, Error, never>
 * //      ▼
 * const program = parse("")
 * ```
 *
 * @see {@link sync} if the effectful computation is synchronous and does not
 * throw errors.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
try_ as try };
/**
 * Returns an effect that maps its success using the specified side-effecting
 * `try` function, converting any errors into typed failed effects using the
 * `catch` function.
 *
 * @see {@link tryPromise} for a version that works with asynchronous computations.
 *
 * @since 2.0.0
 * @category Error handling
 */
export const tryMap = effect.tryMap;
/**
 * Returns an effect that maps its success using the specified side-effecting
 * `try` function, converting any promise rejections into typed failed effects
 * using the `catch` function.
 *
 * An optional `AbortSignal` can be provided to allow for interruption of the
 * wrapped `Promise` API.
 *
 * @see {@link tryMap} for a version that works with synchronous computations.
 *
 * @since 2.0.0
 * @category Error handling
 */
export const tryMapPromise = effect.tryMapPromise;
/**
 * Creates an `Effect` that represents an asynchronous computation that might
 * fail.
 *
 * **When to Use**
 *
 * In situations where you need to perform asynchronous operations that might
 * fail, such as fetching data from an API, you can use the `tryPromise`
 * constructor. This constructor is designed to handle operations that could
 * throw exceptions by capturing those exceptions and transforming them into
 * manageable errors.
 *
 * **Error Handling**
 *
 * There are two ways to handle errors with `tryPromise`:
 *
 * 1. If you don't provide a `catch` function, the error is caught and the
 *    effect fails with an `UnknownException`.
 * 2. If you provide a `catch` function, the error is caught and the `catch`
 *    function maps it to an error of type `E`.
 *
 * **Interruptions**
 *
 * An optional `AbortSignal` can be provided to allow for interruption of the
 * wrapped `Promise` API.
 *
 * **Example** (Fetching a TODO Item)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const getTodo = (id: number) =>
 *   // Will catch any errors and propagate them as UnknownException
 *   Effect.tryPromise(() =>
 *     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
 *   )
 *
 * //      ┌─── Effect<Response, UnknownException, never>
 * //      ▼
 * const program = getTodo(1)
 * ```
 *
 * **Example** (Custom Error Handling)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const getTodo = (id: number) =>
 *   Effect.tryPromise({
 *     try: () => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`),
 *     // remap the error
 *     catch: (unknown) => new Error(`something went wrong ${unknown}`)
 *   })
 *
 * //      ┌─── Effect<Response, Error, never>
 * //      ▼
 * const program = getTodo(1)
 * ```
 *
 * @see {@link promise} if the effectful computation is asynchronous and does not throw errors.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const tryPromise = effect.tryPromise;
/**
 * The `unsandbox` function is used to revert an effect that has been
 * sandboxed by {@link sandbox}. When you apply `unsandbox`, the
 * effect's error channel is restored to its original state, without the
 * detailed `Cause<E>` information. This means that any underlying causes of
 * errors, defects, or fiber interruptions are no longer exposed in the error
 * channel.
 *
 * This function is useful when you want to remove the detailed error tracking
 * provided by `sandbox` and return to the standard error handling for
 * your effect. Once unsandboxed, the effect behaves as if `sandbox` was
 * never applied.
 *
 * @see {@link sandbox} to expose the full cause of failures, defects, or interruptions.
 *
 * @since 2.0.0
 * @category Error handling
 */
export const unsandbox = effect.unsandbox;
/**
 * Allows interruption of the current fiber, even in uninterruptible regions.
 *
 * **Details**
 *
 * This effect checks whether any other fibers are attempting to interrupt the
 * current fiber. If so, it allows the current fiber to perform a
 * self-interruption.
 *
 * **When to Use**
 *
 * This is useful in situations where you want to allow interruption to happen
 * even in regions of the code that are normally uninterruptible.
 *
 * @since 2.0.0
 * @category Interruption
 */
export const allowInterrupt = effect.allowInterrupt;
/**
 * Checks if interruption is allowed and executes a callback accordingly.
 *
 * **Details**
 *
 * This function checks the current interrupt status of the running fiber. It
 * then calls the provided callback, passing a boolean indicating whether
 * interruption is allowed.
 *
 * **When to Use**
 *
 * This is useful for handling specific logic based on whether the current
 * operation can be interrupted, such as when performing asynchronous operations
 * or handling cancellation.
 *
 * **Example**
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.checkInterruptible((isInterruptible) => {
 *     if (isInterruptible) {
 *       return Console.log("You can interrupt this operation.")
 *     } else {
 *       return Console.log("This operation cannot be interrupted.")
 *     }
 *   })
 * })
 *
 * Effect.runPromise(program)
 * // Output: You can interrupt this operation.
 *
 * Effect.runPromise(program.pipe(Effect.uninterruptible))
 * // Output: This operation cannot be interrupted.
 *
 * ```
 *
 *  @since 2.0.0
 * @category Interruption
 */
export const checkInterruptible = core.checkInterruptible;
/**
 * Provides a way to handle timeouts in uninterruptible effects, allowing them
 * to continue in the background while the main control flow proceeds with the
 * timeout error.
 *
 * **Details**
 *
 * The `disconnect` function allows an uninterruptible effect to continue
 * running in the background, while enabling the main control flow to
 * immediately recognize a timeout condition. This is useful when you want to
 * avoid blocking the program due to long-running tasks, especially when those
 * tasks do not need to affect the flow of the rest of the program.
 *
 * Without `disconnect`, an uninterruptible effect will ignore the
 * timeout and continue executing until it completes. The timeout error will
 * only be assessed after the effect finishes, which can cause delays in
 * recognizing a timeout.
 *
 * With `disconnect`, the uninterruptible effect proceeds in the
 * background while the main program flow can immediately handle the timeout
 * error or trigger alternative logic. This enables faster timeout handling
 * without waiting for the completion of the long-running task.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const longRunningTask = Effect.gen(function* () {
 *   console.log("Start heavy processing...")
 *   yield* Effect.sleep("5 seconds") // Simulate a long process
 *   console.log("Heavy processing done.")
 *   return "Data processed"
 * })
 *
 * const timedEffect = longRunningTask.pipe(
 *   Effect.uninterruptible,
 *   // Allows the task to finish in the background if it times out
 *   Effect.disconnect,
 *   Effect.timeout("1 second")
 * )
 *
 * Effect.runPromiseExit(timedEffect).then(console.log)
 * // Output:
 * // Start heavy processing...
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: {
 * //     _id: 'Cause',
 * //     _tag: 'Fail',
 * //     failure: { _tag: 'TimeoutException' }
 * //   }
 * // }
 * // Heavy processing done.
 * ```
 *
 * @see {@link timeout} for a version that interrupts the effect.
 * @see {@link uninterruptible} for creating an uninterruptible effect.
 *
 * @since 2.0.0
 * @category Interruption
 */
export const disconnect = fiberRuntime.disconnect;
/**
 * Represents an effect that interrupts the current fiber.
 *
 * **Details**
 *
 * This effect models the explicit interruption of the fiber in which it runs.
 * When executed, it causes the fiber to stop its operation immediately,
 * capturing the interruption details such as the fiber's ID and its start time.
 * The resulting interruption can be observed in the `Exit` type if the effect
 * is run with functions like {@link runPromiseExit}.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const program = Effect.gen(function* () {
 *   console.log("start")
 *   yield* Effect.sleep("2 seconds")
 *   yield* Effect.interrupt
 *   console.log("done")
 *   return "some result"
 * })
 *
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // start
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: {
 * //     _id: 'Cause',
 * //     _tag: 'Interrupt',
 * //     fiberId: {
 * //       _id: 'FiberId',
 * //       _tag: 'Runtime',
 * //       id: 0,
 * //       startTimeMillis: ...
 * //     }
 * //   }
 * // }
 * ```
 *
 * @since 2.0.0
 * @category Interruption
 */
export const interrupt = core.interrupt;
/**
 * @since 2.0.0
 * @category Interruption
 */
export const interruptWith = core.interruptWith;
/**
 * Marks an effect as interruptible.
 *
 * @since 2.0.0
 * @category Interruption
 */
export const interruptible = core.interruptible;
/**
 * This function behaves like {@link interruptible}, but it also provides a
 * `restore` function. This function can be used to restore the interruptibility
 * of any specific region of code.
 *
 * @since 2.0.0
 * @category Interruption
 */
export const interruptibleMask = core.interruptibleMask;
/**
 * Registers a cleanup effect to run when an effect is interrupted.
 *
 * **Details**
 *
 * This function allows you to specify an effect to run when the fiber is
 * interrupted. This effect will be executed when the fiber is interrupted,
 * allowing you to perform cleanup or other actions.
 *
 * **Example** (Running a Cleanup Action on Interruption)
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * // This handler is executed when the fiber is interrupted
 * const handler = Effect.onInterrupt((_fibers) => Console.log("Cleanup completed"))
 *
 * const success = Console.log("Task completed").pipe(Effect.as("some result"), handler)
 *
 * Effect.runFork(success)
 * // Output:
 * // Task completed
 *
 * const failure = Console.log("Task failed").pipe(Effect.andThen(Effect.fail("some error")), handler)
 *
 * Effect.runFork(failure)
 * // Output:
 * // Task failed
 *
 * const interruption = Console.log("Task interrupted").pipe(Effect.andThen(Effect.interrupt), handler)
 *
 * Effect.runFork(interruption)
 * // Output:
 * // Task interrupted
 * // Cleanup completed
 * ```
 *
 * @since 2.0.0
 * @category Interruption
 */
export const onInterrupt = core.onInterrupt;
/**
 * Marks an effect as uninterruptible.
 *
 * @since 2.0.0
 * @category Interruption
 */
export const uninterruptible = core.uninterruptible;
/**
 * This function behaves like {@link uninterruptible}, but it also provides a
 * `restore` function. This function can be used to restore the interruptibility
 * of any specific region of code.
 *
 * @since 2.0.0
 * @category Interruption
 */
export const uninterruptibleMask = core.uninterruptibleMask;
/**
 * Transforms a `Predicate` function into an `Effect` returning the input value if the predicate returns `true`
 * or failing with specified error if the predicate fails
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const isPositive = (n: number): boolean => n > 0
 *
 * // succeeds with `1`
 * Effect.liftPredicate(1, isPositive, n => `${n} is not positive`)
 *
 * // fails with `"0 is not positive"`
 * Effect.liftPredicate(0, isPositive, n => `${n} is not positive`)
 * ```
 *
 * @category Condition Checking
 * @since 3.4.0
 */
export const liftPredicate = effect.liftPredicate;
/**
 * Replaces the value inside an effect with a constant value.
 *
 * **Details**
 *
 * This function allows you to ignore the original value inside an effect and
 * replace it with a constant value.
 *
 * **When to Use**
 *
 * It is useful when you no longer need the value produced by an effect but want
 * to ensure that the effect completes successfully with a specific constant
 * result instead. For instance, you can replace the value produced by a
 * computation with a predefined value, ignoring what was calculated before.
 *
 * **Example** (Replacing a Value)
 *
 * ```ts
 * import { pipe, Effect } from "effect"
 *
 * // Replaces the value 5 with the constant "new value"
 * const program = pipe(Effect.succeed(5), Effect.as("new value"))
 *
 * Effect.runPromise(program).then(console.log)
 * // Output: "new value"
 * ```
 *
 * @since 2.0.0
 * @category Mapping
 */
export const as = core.as;
/**
 * This function maps the success value of an `Effect` value to a `Some` value
 * in an `Option` value. If the original `Effect` value fails, the returned
 * `Effect` value will also fail.
 *
 * @category Mapping
 * @since 2.0.0
 */
export const asSome = effect.asSome;
/**
 * This function maps the error value of an `Effect` value to a `Some` value
 * in an `Option` value. If the original `Effect` value succeeds, the returned
 * `Effect` value will also succeed.
 *
 * @category Mapping
 * @since 2.0.0
 */
export const asSomeError = effect.asSomeError;
/**
 * This function maps the success value of an `Effect` value to `void`. If the
 * original `Effect` value succeeds, the returned `Effect` value will also
 * succeed. If the original `Effect` value fails, the returned `Effect` value
 * will fail with the same error.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const asVoid = core.asVoid;
/**
 * Swaps the success and error channels of an effect.
 *
 * **Details**
 *
 * This function reverses the flow of an effect by swapping its success and
 * error channels. The success value becomes an error, and the error value
 * becomes a success.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * //      ┌─── Effect<number, string, never>
 * //      ▼
 * const program = Effect.fail("Oh uh!").pipe(Effect.as(2))
 *
 * //      ┌─── Effect<string, number, never>
 * //      ▼
 * const flipped = Effect.flip(program)
 * ```
 *
 * @since 2.0.0
 * @category Mapping
 */
export const flip = core.flip;
/**
 * Swaps the error/value parameters, applies the function `f` and flips the
 * parameters back
 *
 * @since 2.0.0
 * @category Mapping
 */
export const flipWith = effect.flipWith;
/**
 * Transforms the value inside an effect by applying a function to it.
 *
 * **Syntax**
 *
 * ```ts skip-type-checking
 * const mappedEffect = pipe(myEffect, Effect.map(transformation))
 * // or
 * const mappedEffect = Effect.map(myEffect, transformation)
 * // or
 * const mappedEffect = myEffect.pipe(Effect.map(transformation))
 * ```
 *
 * **Details**
 *
 * `map` takes a function and applies it to the value contained within an
 * effect, creating a new effect with the transformed value.
 *
 * It's important to note that effects are immutable, meaning that the original
 * effect is not modified. Instead, a new effect is returned with the updated
 * value.
 *
 * **Example** (Adding a Service Charge)
 *
 * ```ts
 * import { pipe, Effect } from "effect"
 *
 * const addServiceCharge = (amount: number) => amount + 1
 *
 * const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))
 *
 * const finalAmount = pipe(
 *   fetchTransactionAmount,
 *   Effect.map(addServiceCharge)
 * )
 *
 * Effect.runPromise(finalAmount).then(console.log)
 * // Output: 101
 * ```
 *
 * @see {@link mapError} for a version that operates on the error channel.
 * @see {@link mapBoth} for a version that operates on both channels.
 * @see {@link flatMap} or {@link andThen} for a version that can return a new effect.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const map = core.map;
/**
 * Applies a stateful transformation to each element of a collection, producing
 * new elements along with an updated state.
 *
 * **When to Use**
 *
 * Use `mapAccum` when you need to process each element of a collection while
 * keeping track of some state across iterations.
 *
 * **Details**
 *
 * `mapAccum` takes an initial state (`initial`) and a function (`f`) that is
 * applied to each element. This function returns a new state and a transformed
 * element. The final effect produces both the accumulated state and the
 * transformed collection.
 *
 * If the input collection is a non-empty array, the return type will match the
 * input collection type.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * // Define an initial state and a transformation function
 * const initialState = 0
 *
 * const transformation = (state: number, element: string) =>
 *   Effect.succeed<[number, string]>([state + element.length, element.toUpperCase()])
 *
 * // Apply mapAccum to transform an array of strings
 * const program = Effect.mapAccum(["a", "bb", "ccc"], initialState, transformation)
 *
 * Effect.runPromise(program).then(([finalState, transformedCollection]) => {
 *   console.log(finalState)
 *   console.log(transformedCollection)
 * })
 * // Output:
 * // 6
 * // [ 'A', 'BB', 'CCC' ]
 * ```
 *
 * @since 2.0.0
 * @category Mapping
 */
export const mapAccum = effect.mapAccum;
/**
 * Applies transformations to both the success and error channels of an effect.
 *
 * **Details**
 *
 * This function takes two map functions as arguments: one for the error channel
 * and one for the success channel. You can use it when you want to modify both
 * the error and the success values without altering the overall success or
 * failure status of the effect.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * //      ┌─── Effect<number, string, never>
 * //      ▼
 * const simulatedTask = Effect.fail("Oh no!").pipe(Effect.as(1))
 *
 * //      ┌─── Effect<boolean, Error, never>
 * //      ▼
 * const modified = Effect.mapBoth(simulatedTask, {
 *   onFailure: (message) => new Error(message),
 *   onSuccess: (n) => n > 0
 * })
 * ```
 *
 * @see {@link map} for a version that operates on the success channel.
 * @see {@link mapError} for a version that operates on the error channel.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const mapBoth = core.mapBoth;
/**
 * Transforms or modifies the error produced by an effect without affecting its
 * success value.
 *
 * **When to Use**
 *
 * This function is helpful when you want to enhance the error with additional
 * information, change the error type, or apply custom error handling while
 * keeping the original behavior of the effect's success values intact. It only
 * operates on the error channel and leaves the success channel unchanged.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * //      ┌─── Effect<number, string, never>
 * //      ▼
 * const simulatedTask = Effect.fail("Oh no!").pipe(Effect.as(1))
 *
 * //      ┌─── Effect<number, Error, never>
 * //      ▼
 * const mapped = Effect.mapError(
 *   simulatedTask,
 *   (message) => new Error(message)
 * )
 * ```
 *
 * @see {@link map} for a version that operates on the success channel.
 * @see {@link mapBoth} for a version that operates on both channels.
 * @see {@link orElseFail} if you want to replace the error with a new one.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const mapError = core.mapError;
/**
 * Maps the cause of failure of an effect using a specified function.
 *
 * @see {@link sandbox} for a version that exposes the full cause of failures, defects, or interruptions.
 * @see {@link catchAllCause} for a version that can recover from all types of defects.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const mapErrorCause = effect.mapErrorCause;
/**
 * Combines both success and error channels of an effect into a single outcome.
 *
 * **Details**
 *
 * This function transforms an effect that may fail into one that always returns
 * a value, where both success and failure outcomes are handled as values in the
 * success channel.
 *
 * **When to Use**
 *
 * This can be useful when you want to continue execution regardless of the
 * error type and still capture both successful results and errors as part of
 * the outcome.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * //      ┌─── Effect<number, string, never>
 * //      ▼
 * const program = Effect.fail("Oh uh!").pipe(Effect.as(2))
 *
 * //      ┌─── Effect<number | string, never, never>
 * //      ▼
 * const recovered = Effect.merge(program)
 * ```
 *
 * @since 2.0.0
 * @category Mapping
 */
export const merge = effect.merge;
/**
 * Returns a new effect with the boolean value of this effect negated.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const negate = effect.negate;
/**
 * Creates a scoped resource using an `acquire` and `release` effect.
 *
 * **Details**
 *
 * This function helps manage resources by combining two `Effect` values: one
 * for acquiring the resource and one for releasing it.
 *
 * `acquireRelease` does the following:
 *
 *   1. Ensures that the effect that acquires the resource will not be
 *      interrupted. Note that acquisition may still fail due to internal
 *      reasons (such as an uncaught exception).
 *   2. Ensures that the `release` effect will not be interrupted, and will be
 *      executed as long as the acquisition effect successfully acquires the
 *      resource.
 *
 * If the `acquire` function succeeds, the `release` function is added to the
 * list of finalizers for the scope. This ensures that the release will happen
 * automatically when the scope is closed.
 *
 * Both `acquire` and `release` run uninterruptibly, meaning they cannot be
 * interrupted while they are executing.
 *
 * Additionally, the `release` function can be influenced by the exit value when
 * the scope closes, allowing for custom handling of how the resource is
 * released based on the execution outcome.
 *
 * **When to Use**
 *
 * This function is used to ensure that an effect that represents the
 * acquisition of a resource (for example, opening a file, launching a thread,
 * etc.) will not be interrupted, and that the resource will always be released
 * when the `Effect` completes execution.
 *
 * **Example** (Defining a Simple Resource)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * // Define an interface for a resource
 * interface MyResource {
 *   readonly contents: string
 *   readonly close: () => Promise<void>
 * }
 *
 * // Simulate resource acquisition
 * const getMyResource = (): Promise<MyResource> =>
 *   Promise.resolve({
 *     contents: "lorem ipsum",
 *     close: () =>
 *       new Promise((resolve) => {
 *         console.log("Resource released")
 *         resolve()
 *       })
 *   })
 *
 * // Define how the resource is acquired
 * const acquire = Effect.tryPromise({
 *   try: () =>
 *     getMyResource().then((res) => {
 *       console.log("Resource acquired")
 *       return res
 *     }),
 *   catch: () => new Error("getMyResourceError")
 * })
 *
 * // Define how the resource is released
 * const release = (res: MyResource) => Effect.promise(() => res.close())
 *
 * // Create the resource management workflow
 * //
 * //      ┌─── Effect<MyResource, Error, Scope>
 * //      ▼
 * const resource = Effect.acquireRelease(acquire, release)
 * ```
 *
 * @see {@link acquireUseRelease} for a version that automatically handles the scoping of resources.
 *
 * @since 2.0.0
 * @category Scoping, Resources & Finalization
 */
export const acquireRelease = fiberRuntime.acquireRelease;
/**
 * Creates a scoped resource with an interruptible acquire action.
 *
 * **Details**
 *
 * This function is similar to {@link acquireRelease}, but it allows the
 * acquisition of the resource to be interrupted. The `acquire` effect, which
 * represents the process of obtaining the resource, can be interrupted if
 * necessary.
 *
 * @since 2.0.0
 * @category Scoping, Resources & Finalization
 */
export const acquireReleaseInterruptible = fiberRuntime.acquireReleaseInterruptible;
/**
 * Many real-world operations involve working with resources that must be released when no longer needed, such as:
 *
 * - Database connections
 * - File handles
 * - Network requests
 *
 * This function ensures that a resource is:
 *
 * 1. **Acquired** properly.
 * 2. **Used** for its intended purpose.
 * 3. **Released** even if an error occurs.
 *
 * **Example** (Automatically Managing Resource Lifetime)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * // Define an interface for a resource
 * interface MyResource {
 *   readonly contents: string
 *   readonly close: () => Promise<void>
 * }
 *
 * // Simulate resource acquisition
 * const getMyResource = (): Promise<MyResource> =>
 *   Promise.resolve({
 *     contents: "lorem ipsum",
 *     close: () =>
 *       new Promise((resolve) => {
 *         console.log("Resource released")
 *         resolve()
 *       })
 *   })
 *
 * // Define how the resource is acquired
 * const acquire = Effect.tryPromise({
 *   try: () =>
 *     getMyResource().then((res) => {
 *       console.log("Resource acquired")
 *       return res
 *     }),
 *   catch: () => new Error("getMyResourceError")
 * })
 *
 * // Define how the resource is released
 * const release = (res: MyResource) => Effect.promise(() => res.close())
 *
 * const use = (res: MyResource) => Console.log(`content is ${res.contents}`)
 *
 * //      ┌─── Effect<void, Error, never>
 * //      ▼
 * const program = Effect.acquireUseRelease(acquire, use, release)
 *
 * Effect.runPromise(program)
 * // Output:
 * // Resource acquired
 * // content is lorem ipsum
 * // Resource released
 * ```
 *
 * @since 2.0.0
 * @category Scoping, Resources & Finalization
 */
export const acquireUseRelease = core.acquireUseRelease;
/**
 * Ensures a finalizer is added to the scope of the calling effect, guaranteeing
 * it runs when the scope is closed.
 *
 * **Details**
 *
 * This function adds a finalizer that will execute whenever the scope of the
 * effect is closed, regardless of whether the effect succeeds, fails, or is
 * interrupted. The finalizer receives the `Exit` value of the effect's scope,
 * allowing it to react differently depending on how the effect concludes.
 *
 * Finalizers are a reliable way to manage resource cleanup, ensuring that
 * resources such as file handles, network connections, or database transactions
 * are properly closed even in the event of an unexpected interruption or error.
 *
 * Finalizers operate in conjunction with Effect's scoped resources. If an
 * effect with a finalizer is wrapped in a scope, the finalizer will execute
 * automatically when the scope ends.
 *
 * **Example** (Adding a Finalizer on Success)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * //      ┌─── Effect<string, never, Scope>
 * //      ▼
 * const program = Effect.gen(function* () {
 *   yield* Effect.addFinalizer((exit) =>
 *     Console.log(`Finalizer executed. Exit status: ${exit._tag}`)
 *   )
 *   return "some result"
 * })
 *
 * // Wrapping the effect in a scope
 * //
 * //      ┌─── Effect<string, never, never>
 * //      ▼
 * const runnable = Effect.scoped(program)
 *
 * Effect.runPromiseExit(runnable).then(console.log)
 * // Output:
 * // Finalizer executed. Exit status: Success
 * // { _id: 'Exit', _tag: 'Success', value: 'some result' }
 * ```
 *
 * **Example** (Adding a Finalizer on Failure)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * //      ┌─── Effect<never, string, Scope>
 * //      ▼
 * const program = Effect.gen(function* () {
 *   yield* Effect.addFinalizer((exit) =>
 *     Console.log(`Finalizer executed. Exit status: ${exit._tag}`)
 *   )
 *   return yield* Effect.fail("Uh oh!")
 * })
 *
 * // Wrapping the effect in a scope
 * //
 * //      ┌─── Effect<never, string, never>
 * //      ▼
 * const runnable = Effect.scoped(program)
 *
 * Effect.runPromiseExit(runnable).then(console.log)
 * // Output:
 * // Finalizer executed. Exit status: Failure
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: { _id: 'Cause', _tag: 'Fail', failure: 'Uh oh!' }
 * // }
 * ```
 *
 * **Example** (Adding a Finalizer on Interruption)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * //      ┌─── Effect<never, never, Scope>
 * //      ▼
 * const program = Effect.gen(function* () {
 *   yield* Effect.addFinalizer((exit) =>
 *     Console.log(`Finalizer executed. Exit status: ${exit._tag}`)
 *   )
 *   return yield* Effect.interrupt
 * })
 *
 * // Wrapping the effect in a scope
 * //
 * //      ┌─── Effect<never, never, never>
 * //      ▼
 * const runnable = Effect.scoped(program)
 *
 * Effect.runPromiseExit(runnable).then(console.log)
 * // Output:
 * // Finalizer executed. Exit status: Failure
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: {
 * //     _id: 'Cause',
 * //     _tag: 'Interrupt',
 * //     fiberId: {
 * //       _id: 'FiberId',
 * //       _tag: 'Runtime',
 * //       id: 0,
 * //       startTimeMillis: ...
 * //     }
 * //   }
 * // }
 * ```
 *
 * @see {@link onExit} for attaching a finalizer directly to an effect.
 *
 * @since 2.0.0
 * @category Scoping, Resources & Finalization
 */
export const addFinalizer = fiberRuntime.addFinalizer;
/**
 * Guarantees the execution of a finalizer when an effect starts execution.
 *
 * **Details**
 *
 * This function allows you to specify a `finalizer` effect that will always be
 * run once the effect starts execution, regardless of whether the effect
 * succeeds, fails, or is interrupted.
 *
 * **When to Use**
 *
 * This is useful when you need to ensure that certain cleanup or final steps
 * are executed in all cases, such as releasing resources or performing
 * necessary logging.
 *
 * While this function provides strong guarantees about executing the finalizer,
 * it is considered a low-level tool, which may not be ideal for more complex
 * resource management. For higher-level resource management with automatic
 * acquisition and release, see the {@link acquireRelease} family of functions.
 * For use cases where you need access to the result of an effect, consider
 * using {@link onExit}.
 *
 * **Example** (Running a Finalizer in All Outcomes)
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * // Define a cleanup effect
 * const handler = Effect.ensuring(Console.log("Cleanup completed"))
 *
 * // Define a successful effect
 * const success = Console.log("Task completed").pipe(
 *   Effect.as("some result"),
 *   handler
 * )
 *
 * Effect.runFork(success)
 * // Output:
 * // Task completed
 * // Cleanup completed
 *
 * // Define a failing effect
 * const failure = Console.log("Task failed").pipe(
 *   Effect.andThen(Effect.fail("some error")),
 *   handler
 * )
 *
 * Effect.runFork(failure)
 * // Output:
 * // Task failed
 * // Cleanup completed
 *
 * // Define an interrupted effect
 * const interruption = Console.log("Task interrupted").pipe(
 *   Effect.andThen(Effect.interrupt),
 *   handler
 * )
 *
 * Effect.runFork(interruption)
 * // Output:
 * // Task interrupted
 * // Cleanup completed
 * ```
 *
 * @see {@link onExit} for a version that provides access to the result of an
 * effect.
 *
 * @since 2.0.0
 * @category Scoping, Resources & Finalization
 */
export const ensuring = fiberRuntime.ensuring;
/**
 * Ensures a cleanup effect runs whenever the calling effect fails, providing
 * the failure cause to the cleanup effect.
 *
 * **Details**
 *
 * This function allows you to attach a cleanup effect that runs whenever the
 * calling effect fails. The cleanup effect receives the cause of the failure,
 * allowing you to perform actions such as logging, releasing resources, or
 * executing additional recovery logic based on the error. The cleanup effect
 * will execute even if the failure is due to interruption.
 *
 * Importantly, the cleanup effect itself is uninterruptible, ensuring that it
 * completes regardless of external interruptions.
 *
 * **Example** (Running Cleanup Only on Failure)
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * // This handler logs the failure cause when the effect fails
 * const handler = Effect.onError((cause) =>
 *   Console.log(`Cleanup completed: ${cause}`)
 * )
 *
 * // Define a successful effect
 * const success = Console.log("Task completed").pipe(
 *   Effect.as("some result"),
 *   handler
 * )
 *
 * Effect.runFork(success)
 * // Output:
 * // Task completed
 *
 * // Define a failing effect
 * const failure = Console.log("Task failed").pipe(
 *   Effect.andThen(Effect.fail("some error")),
 *   handler
 * )
 *
 * Effect.runFork(failure)
 * // Output:
 * // Task failed
 * // Cleanup completed: Error: some error
 *
 * // Define a failing effect
 * const defect = Console.log("Task failed with defect").pipe(
 *   Effect.andThen(Effect.die("Boom!")),
 *   handler
 * )
 *
 * Effect.runFork(defect)
 * // Output:
 * // Task failed with defect
 * // Cleanup completed: Error: Boom!
 *
 * // Define an interrupted effect
 * const interruption = Console.log("Task interrupted").pipe(
 *   Effect.andThen(Effect.interrupt),
 *   handler
 * )
 *
 * Effect.runFork(interruption)
 * // Output:
 * // Task interrupted
 * // Cleanup completed: All fibers interrupted without errors.
 * ```
 *
 * @see {@link ensuring} for attaching a cleanup effect that runs on both success and failure.
 * @see {@link onExit} for attaching a cleanup effect that runs on all possible exits.
 *
 * @since 2.0.0
 * @category Scoping, Resources & Finalization
 */
export const onError = core.onError;
/**
 * Guarantees that a cleanup function runs regardless of whether the effect
 * succeeds, fails, or is interrupted.
 *
 * **Details**
 *
 * This function ensures that a provided cleanup function is executed after the
 * effect completes, regardless of the outcome. The cleanup function is given
 * the `Exit` value of the effect, which provides detailed information about the
 * result:
 * - If the effect succeeds, the `Exit` contains the success value.
 * - If the effect fails, the `Exit` contains the error or failure cause.
 * - If the effect is interrupted, the `Exit` reflects the interruption.
 *
 * The cleanup function is guaranteed to run uninterruptibly, ensuring reliable
 * resource management even in complex or high-concurrency scenarios.
 *
 * **Example** (Running a Cleanup Function with the Effect’s Result)
 *
 * ```ts
 * import { Console, Effect, Exit } from "effect"
 *
 * // Define a cleanup effect that logs the result
 * const handler = Effect.onExit((exit) =>
 *   Console.log(`Cleanup completed: ${Exit.getOrElse(exit, String)}`)
 * )
 *
 * // Define a successful effect
 * const success = Console.log("Task completed").pipe(
 *   Effect.as("some result"),
 *   handler
 * )
 *
 * Effect.runFork(success)
 * // Output:
 * // Task completed
 * // Cleanup completed: some result
 *
 * // Define a failing effect
 * const failure = Console.log("Task failed").pipe(
 *   Effect.andThen(Effect.fail("some error")),
 *   handler
 * )
 *
 * Effect.runFork(failure)
 * // Output:
 * // Task failed
 * // Cleanup completed: Error: some error
 *
 * // Define an interrupted effect
 * const interruption = Console.log("Task interrupted").pipe(
 *   Effect.andThen(Effect.interrupt),
 *   handler
 * )
 *
 * Effect.runFork(interruption)
 * // Output:
 * // Task interrupted
 * // Cleanup completed: All fibers interrupted without errors.
 * ```
 *
 * @since 2.0.0
 * @category Scoping, Resources & Finalization
 */
export const onExit = core.onExit;
/**
 * Ensures that finalizers are run concurrently when the scope of an effect is
 * closed.
 *
 * **Details**
 *
 * This function modifies the behavior of finalizers within a scoped workflow to
 * allow them to run concurrently when the scope is closed.
 *
 * By default, finalizers are executed sequentially in reverse order of their
 * addition, but this function changes that behavior to execute all finalizers
 * concurrently.
 *
 * **When to Use**
 *
 * Running finalizers concurrently can improve performance when multiple
 * independent cleanup tasks need to be performed. However, it requires that
 * these tasks do not depend on the order of execution or introduce race
 * conditions.
 *
 * **Example**
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * // Define a program that adds multiple finalizers
 * const program = Effect.gen(function*() {
 *   yield* Effect.addFinalizer(() => Console.log("Finalizer 1 executed").pipe(Effect.delay("300 millis")))
 *   yield* Effect.addFinalizer(() => Console.log("Finalizer 2 executed").pipe(Effect.delay("100 millis")))
 *   yield* Effect.addFinalizer(() => Console.log("Finalizer 3 executed").pipe(Effect.delay("200 millis")))
 *   return "some result"
 * })
 *
 * // Modify the program to ensure finalizers run in parallel
 * const modified = program.pipe(Effect.parallelFinalizers)
 *
 * const runnable = Effect.scoped(modified)
 *
 * Effect.runFork(runnable)
 * // Output:
 * // Finalizer 2 executed
 * // Finalizer 3 executed
 * // Finalizer 1 executed
 * ```
 *
 * @see {@link sequentialFinalizers} for a version that ensures finalizers are run sequentially.
 *
 * @since 2.0.0
 * @category Scoping, Resources & Finalization
 */
export const parallelFinalizers = fiberRuntime.parallelFinalizers;
/**
 * Ensures that finalizers are run sequentially in reverse order of their
 * addition.
 *
 * **Details**
 *
 * This function modifies the behavior of finalizers within a scoped workflow to
 * ensure they are run sequentially in reverse order when the scope is closed.
 *
 * By default, finalizers are executed sequentially, so this only changes the
 * behavior if the scope is configured to run finalizers concurrently.
 *
 * @see {@link parallelFinalizers} for a version that ensures finalizers are run concurrently.
 *
 * @since 2.0.0
 * @category Scoping, Resources & Finalization
 */
export const sequentialFinalizers = fiberRuntime.sequentialFinalizers;
/**
 * Applies a custom execution strategy to finalizers within a scoped workflow.
 *
 * **Details**
 *
 * This function allows you to control how finalizers are executed in a scope by
 * applying a specified `ExecutionStrategy`. The `strategy` can dictate whether
 * finalizers run (e.g., sequentially or in parallel).
 *
 * Additionally, the function provides a `restore` operation, which ensures that
 * the effect passed to it is executed under the default execution strategy.
 *
 * @since 2.0.0
 * @category Scoping, Resources & Finalization
 */
export const finalizersMask = fiberRuntime.finalizersMask;
/**
 * Provides access to the current scope in a scoped workflow.
 *
 * @since 2.0.0
 * @category Scoping, Resources & Finalization
 */
export const scope = fiberRuntime.scope;
/**
 * Accesses the current scope and uses it to perform the specified effect.
 *
 * @since 2.0.0
 * @category Scoping, Resources & Finalization
 */
export const scopeWith = fiberRuntime.scopeWith;
/**
 * Creates a `Scope`, passes it to the specified effectful function, and closes
 * the scope when the effect completes (whether through success, failure, or
 * interruption).
 *
 * @since 3.11.0
 * @category Scoping, Resources & Finalization
 */
export const scopedWith = fiberRuntime.scopedWith;
/**
 * Scopes all resources used in an effect to the lifetime of the effect.
 *
 * **Details**
 *
 * This function ensures that all resources used within an effect are tied to
 * its lifetime. Finalizers for these resources are executed automatically when
 * the effect completes, whether through success, failure, or interruption. This
 * guarantees proper resource cleanup without requiring explicit management.
 *
 * @since 2.0.0
 * @category Scoping, Resources & Finalization
 */
export const scoped = fiberRuntime.scopedEffect;
/**
 * Scopes all resources acquired by one effect to the lifetime of another
 * effect.
 *
 * **Details**
 *
 * This function allows you to scope the resources acquired by one effect
 * (`self`) to the lifetime of another effect (`use`). This ensures that the
 * resources are cleaned up as soon as the `use` effect completes, regardless of
 * how the `use` effect ends (success, failure, or interruption).
 *
 * **Example**
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * const acquire = Console.log("Acquiring resource").pipe(
 *   Effect.as(1),
 *   Effect.tap(Effect.addFinalizer(() => Console.log("Releasing resource")))
 * )
 * const use = (resource: number) => Console.log(`Using resource: ${resource}`)
 *
 * const program = acquire.pipe(Effect.using(use))
 *
 * Effect.runFork(program)
 * // Output:
 * // Acquiring resource
 * // Using resource: 1
 * // Releasing resource
 * ```
 *
 * @see {@link scopedWith} Manage scoped operations with a temporary scope.
 *
 * @since 2.0.0
 * @category Scoping, Resources & Finalization
 */
export const using = fiberRuntime.using;
/**
 * Returns the result of the effect and a finalizer to close its scope.
 *
 * **Details**
 *
 * This function allows you to retrieve both the result of an effect and a
 * finalizer that can be used to manually close its scope. This is useful for
 * workflows where you need early access to the result while retaining control
 * over the resource cleanup process.
 *
 * **Example**
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * const acquire = Console.log("Acquiring resource").pipe(
 *   Effect.as(1),
 *   Effect.tap(Effect.addFinalizer(() => Console.log("Releasing resource")))
 * )
 * const program = Effect.gen(function*() {
 *   const [finalizer, resource] = yield* Effect.withEarlyRelease(acquire)
 *   console.log(`Using resource: ${resource}`)
 *   yield* Effect.sleep("1 second")
 *   yield* finalizer
 * })
 *
 * Effect.runFork(program.pipe(Effect.scoped))
 * // Output:
 * // Acquiring resource
 * // Using resource: 1
 * // Releasing resource
 * ```
 *
 * @since 2.0.0
 * @category Scoping, Resources & Finalization
 */
export const withEarlyRelease = fiberRuntime.withEarlyRelease;
/**
 * Returns a new effect that will not succeed with its value before first
 * waiting for the end of all child fibers forked by the effect.
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const awaitAllChildren = circular.awaitAllChildren;
/**
 * Returns a new workflow that will not supervise any fibers forked by this
 * workflow.
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const daemonChildren = fiberRuntime.daemonChildren;
/**
 * Constructs an effect with information about the current `Fiber`.
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const descriptor = effect.descriptor;
/**
 * Constructs an effect based on information about the current `Fiber`.
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const descriptorWith = effect.descriptorWith;
/**
 * Returns a new workflow that executes this one and captures the changes in
 * `FiberRef` values.
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const diffFiberRefs = effect.diffFiberRefs;
/**
 * Acts on the children of this fiber (collected into a single fiber),
 * guaranteeing the specified callback will be invoked, whether or not this
 * effect succeeds.
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const ensuringChild = circular.ensuringChild;
/**
 * Acts on the children of this fiber, guaranteeing the specified callback
 * will be invoked, whether or not this effect succeeds.
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const ensuringChildren = circular.ensuringChildren;
/**
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const fiberId = core.fiberId;
/**
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const fiberIdWith = core.fiberIdWith;
/**
 * Creates a new fiber to run an effect concurrently.
 *
 * **Details**
 *
 * This function takes an effect and forks it into a separate fiber, allowing it
 * to run concurrently without blocking the original effect. The new fiber
 * starts execution immediately after being created, and the fiber object is
 * returned immediately without waiting for the effect to begin. This is useful
 * when you want to run tasks concurrently while continuing other tasks in the
 * parent fiber.
 *
 * The forked fiber is attached to the parent fiber's scope. This means that
 * when the parent fiber terminates, the child fiber will also be terminated
 * automatically. This feature, known as "auto supervision," ensures that no
 * fibers are left running unintentionally. If you prefer not to have this auto
 * supervision behavior, you can use {@link forkDaemon} or {@link forkIn}.
 *
 * **When to Use**
 *
 * Use this function when you need to run an effect concurrently without
 * blocking the current execution flow. For example, you might use it to launch
 * background tasks or concurrent computations. However, working with fibers can
 * be complex, so before using this function directly, you might want to explore
 * higher-level functions like {@link raceWith}, {@link zip}, or others that can
 * manage concurrency for you.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const fib = (n: number): Effect.Effect<number> =>
 *   n < 2
 *     ? Effect.succeed(n)
 *     : Effect.zipWith(fib(n - 1), fib(n - 2), (a, b) => a + b)
 *
 * //      ┌─── Effect<RuntimeFiber<number, never>, never, never>
 * //      ▼
 * const fib10Fiber = Effect.fork(fib(10))
 * ```
 *
 * @see {@link forkWithErrorHandler} for a version that allows you to handle errors.
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const fork = fiberRuntime.fork;
/**
 * Creates a long-running background fiber that is independent of its parent.
 *
 * **Details**
 *
 * This function creates a "daemon" fiber that runs in the background and is not
 * tied to the lifecycle of its parent fiber. Unlike normal fibers that stop
 * when the parent fiber terminates, a daemon fiber will continue running until
 * the global scope closes or the fiber completes naturally. This makes it
 * useful for tasks that need to run in the background independently, such as
 * periodic logging, monitoring, or background data processing.
 *
 * **Example** (Creating a Daemon Fiber)
 *
 * ```ts
 * import { Effect, Console, Schedule } from "effect"
 *
 * // Daemon fiber that logs a message repeatedly every second
 * const daemon = Effect.repeat(
 *   Console.log("daemon: still running!"),
 *   Schedule.fixed("1 second")
 * )
 *
 * const parent = Effect.gen(function* () {
 *   console.log("parent: started!")
 *   // Daemon fiber running independently
 *   yield* Effect.forkDaemon(daemon)
 *   yield* Effect.sleep("3 seconds")
 *   console.log("parent: finished!")
 * })
 *
 * Effect.runFork(parent)
 * // Output:
 * // parent: started!
 * // daemon: still running!
 * // daemon: still running!
 * // daemon: still running!
 * // parent: finished!
 * // daemon: still running!
 * // daemon: still running!
 * // daemon: still running!
 * // daemon: still running!
 * // daemon: still running!
 * // ...etc...
 * ```
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const forkDaemon = fiberRuntime.forkDaemon;
/**
 * Returns an effect that forks all of the specified values, and returns a
 * composite fiber that produces a list of their results, in order.
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const forkAll = circular.forkAll;
/**
 * Forks an effect in a specific scope, allowing finer control over its
 * execution.
 *
 * **Details**
 *
 * There are some cases where we need more fine-grained control, so we want to
 * fork a fiber in a specific scope. We can use the `Effect.forkIn` operator
 * which takes the target scope as an argument.
 *
 * The fiber will be interrupted when the scope is closed.
 *
 * **Example** (Forking a Fiber in a Specific Scope)
 *
 * In this example, the child fiber is forked into the outerScope,
 * allowing it to outlive the inner scope but still be terminated
 * when the outerScope is closed.
 *
 * ```ts
 * import { Console, Effect, Schedule } from "effect"
 *
 * // Child fiber that logs a message repeatedly every second
 * const child = Effect.repeat(
 *   Console.log("child: still running!"),
 *   Schedule.fixed("1 second")
 * )
 *
 * const program = Effect.scoped(
 *   Effect.gen(function* () {
 *     yield* Effect.addFinalizer(() =>
 *       Console.log("The outer scope is about to be closed!")
 *     )
 *
 *     // Capture the outer scope
 *     const outerScope = yield* Effect.scope
 *
 *     // Create an inner scope
 *     yield* Effect.scoped(
 *       Effect.gen(function* () {
 *         yield* Effect.addFinalizer(() =>
 *           Console.log("The inner scope is about to be closed!")
 *         )
 *         // Fork the child fiber in the outer scope
 *         yield* Effect.forkIn(child, outerScope)
 *         yield* Effect.sleep("3 seconds")
 *       })
 *     )
 *
 *     yield* Effect.sleep("5 seconds")
 *   })
 * )
 *
 * Effect.runFork(program)
 * // Output:
 * // child: still running!
 * // child: still running!
 * // child: still running!
 * // The inner scope is about to be closed!
 * // child: still running!
 * // child: still running!
 * // child: still running!
 * // child: still running!
 * // child: still running!
 * // child: still running!
 * // The outer scope is about to be closed!
 * ```
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const forkIn = circular.forkIn;
/**
 * Forks a fiber in a local scope, ensuring it outlives its parent.
 *
 * **Details**
 *
 * This function is used to create fibers that are tied to a local scope,
 * meaning they are not dependent on their parent fiber's lifecycle. Instead,
 * they will continue running until the scope they were created in is closed.
 * This is particularly useful when you need a fiber to run independently of the
 * parent fiber, but still want it to be terminated when the scope ends.
 *
 * Fibers created with this function are isolated from the parent fiber’s
 * termination, so they can run for a longer period. This behavior is different
 * from fibers created with {@link fork}, which are terminated when the parent fiber
 * terminates. With `forkScoped`, the child fiber will keep running until the
 * local scope ends, regardless of the state of the parent fiber.
 *
 * **Example** (Forking a Fiber in a Local Scope)
 *
 * In this example, the child fiber continues to run beyond the lifetime of the parent fiber.
 * The child fiber is tied to the local scope and will be terminated only when the scope ends.
 *
 * ```ts
 * import { Effect, Console, Schedule } from "effect"
 *
 * // Child fiber that logs a message repeatedly every second
 * const child = Effect.repeat(
 *   Console.log("child: still running!"),
 *   Schedule.fixed("1 second")
 * )
 *
 * //      ┌─── Effect<void, never, Scope>
 * //      ▼
 * const parent = Effect.gen(function* () {
 *   console.log("parent: started!")
 *   // Child fiber attached to local scope
 *   yield* Effect.forkScoped(child)
 *   yield* Effect.sleep("3 seconds")
 *   console.log("parent: finished!")
 * })
 *
 * // Program runs within a local scope
 * const program = Effect.scoped(
 *   Effect.gen(function* () {
 *     console.log("Local scope started!")
 *     yield* Effect.fork(parent)
 *     // Scope lasts for 5 seconds
 *     yield* Effect.sleep("5 seconds")
 *     console.log("Leaving the local scope!")
 *   })
 * )
 *
 * Effect.runFork(program)
 * // Output:
 * // Local scope started!
 * // parent: started!
 * // child: still running!
 * // child: still running!
 * // child: still running!
 * // parent: finished!
 * // child: still running!
 * // child: still running!
 * // Leaving the local scope!
 * ```
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const forkScoped = circular.forkScoped;
/**
 * Like {@link fork} but handles an error with the provided handler.
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const forkWithErrorHandler = fiberRuntime.forkWithErrorHandler;
/**
 * Creates an `Effect` value that represents the exit value of the specified
 * fiber.
 *
 * @see {@link fromFiberEffect} for creating an effect from a fiber obtained from an effect.
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const fromFiber = circular.fromFiber;
/**
 * Creates an `Effect` value that represents the exit value of a fiber obtained
 * from an effect.
 *
 * @see {@link fromFiber} for creating an effect from a fiber.
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const fromFiberEffect = circular.fromFiberEffect;
/**
 * Supervises child fibers by reporting them to a specified supervisor.
 *
 * **Details**
 *
 * This function takes a supervisor as an argument and returns an effect where
 * all child fibers forked within it are supervised by the provided supervisor.
 * This enables you to capture detailed information about these child fibers,
 * such as their status, through the supervisor.
 *
 * **Example** (Monitoring Fiber Count)
 *
 * ```ts
 * import { Effect, Supervisor, Schedule, Fiber, FiberStatus } from "effect"
 *
 * // Main program that monitors fibers while calculating a Fibonacci number
 * const program = Effect.gen(function* () {
 *   // Create a supervisor to track child fibers
 *   const supervisor = yield* Supervisor.track
 *
 *   // Start a Fibonacci calculation, supervised by the supervisor
 *   const fibFiber = yield* fib(20).pipe(
 *     Effect.supervised(supervisor),
 *     // Fork the Fibonacci effect into a fiber
 *     Effect.fork
 *   )
 *
 *   // Define a schedule to periodically monitor the fiber count every 500ms
 *   const policy = Schedule.spaced("500 millis").pipe(
 *     Schedule.whileInputEffect((_) =>
 *       Fiber.status(fibFiber).pipe(
 *         // Continue while the Fibonacci fiber is not done
 *         Effect.andThen((status) => status !== FiberStatus.done)
 *       )
 *     )
 *   )
 *
 *   // Start monitoring the fibers, using the supervisor to track the count
 *   const monitorFiber = yield* monitorFibers(supervisor).pipe(
 *     // Repeat the monitoring according to the schedule
 *     Effect.repeat(policy),
 *     // Fork the monitoring into its own fiber
 *     Effect.fork
 *   )
 *
 *   // Join the monitor and Fibonacci fibers to ensure they complete
 *   yield* Fiber.join(monitorFiber)
 *   const result = yield* Fiber.join(fibFiber)
 *
 *   console.log(`fibonacci result: ${result}`)
 * })
 *
 * // Function to monitor and log the number of active fibers
 * const monitorFibers = (
 *   supervisor: Supervisor.Supervisor<Array<Fiber.RuntimeFiber<any, any>>>
 * ): Effect.Effect<void> =>
 *   Effect.gen(function* () {
 *     const fibers = yield* supervisor.value // Get the current set of fibers
 *     console.log(`number of fibers: ${fibers.length}`)
 *   })
 *
 * // Recursive Fibonacci calculation, spawning fibers for each recursive step
 * const fib = (n: number): Effect.Effect<number> =>
 *   Effect.gen(function* () {
 *     if (n <= 1) {
 *       return 1
 *     }
 *     yield* Effect.sleep("500 millis") // Simulate work by delaying
 *
 *     // Fork two fibers for the recursive Fibonacci calls
 *     const fiber1 = yield* Effect.fork(fib(n - 2))
 *     const fiber2 = yield* Effect.fork(fib(n - 1))
 *
 *     // Join the fibers to retrieve their results
 *     const v1 = yield* Fiber.join(fiber1)
 *     const v2 = yield* Fiber.join(fiber2)
 *
 *     return v1 + v2 // Combine the results
 *   })
 *
 * Effect.runPromise(program)
 * // Output:
 * // number of fibers: 0
 * // number of fibers: 2
 * // number of fibers: 6
 * // number of fibers: 14
 * // number of fibers: 30
 * // number of fibers: 62
 * // number of fibers: 126
 * // number of fibers: 254
 * // number of fibers: 510
 * // number of fibers: 1022
 * // number of fibers: 2034
 * // number of fibers: 3795
 * // number of fibers: 5810
 * // number of fibers: 6474
 * // number of fibers: 4942
 * // number of fibers: 2515
 * // number of fibers: 832
 * // number of fibers: 170
 * // number of fibers: 18
 * // number of fibers: 0
 * // fibonacci result: 10946
 * ```
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const supervised = circular.supervised;
/**
 * Transplants specified effects so that when those effects fork other
 * effects, the forked effects will be governed by the scope of the fiber that
 * executes this effect.
 *
 * This can be used to "graft" deep grandchildren onto a higher-level scope,
 * effectively extending their lifespans into the parent scope.
 *
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const transplant = core.transplant;
/**
 * @since 2.0.0
 * @category Supervision & Fibers
 */
export const withConcurrency = core.withConcurrency;
/**
 * Sets the provided scheduler for usage in the wrapped effect
 *
 * @since 2.0.0
 * @category Scheduler
 */
export const withScheduler = Scheduler.withScheduler;
/**
 * Sets the scheduling priority used when yielding
 *
 * @since 2.0.0
 * @category Scheduler
 */
export const withSchedulingPriority = core.withSchedulingPriority;
/**
 * Sets the maximum number of operations before yield by the default schedulers
 *
 * @since 2.0.0
 * @category Scheduler
 */
export const withMaxOpsBeforeYield = core.withMaxOpsBeforeYield;
/**
 * Retrieves the `Clock` service from the context.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const clock = yield* Effect.clock
 *   const currentTime = yield* clock.currentTimeMillis
 *   console.log(`Current time in milliseconds: ${currentTime}`)
 * })
 *
 * Effect.runFork(program)
 * // Example Output:
 * // Current time in milliseconds: 1735484796134
 * ```
 *
 * @since 2.0.0
 * @category Clock
 */
export const clock = effect.clock;
/**
 * Retrieves the `Clock` service from the context and provides it to the
 * specified effectful function.
 *
 * **Example**
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * const program = Effect.clockWith((clock) =>
 *   clock.currentTimeMillis.pipe(
 *     Effect.map((currentTime) => `Current time is: ${currentTime}`),
 *     Effect.tap(Console.log)
 *   )
 * )
 *
 * Effect.runFork(program)
 * // Example Output:
 * // Current time is: 1735484929744
 * ```
 *
 * @since 2.0.0
 * @category Clock
 */
export const clockWith = effect.clockWith;
/**
 * Sets the implementation of the `Clock` service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 * @category Clock
 */
export const withClockScoped = fiberRuntime.withClockScoped;
/**
 * Executes the specified workflow with the specified implementation of the
 * `Clock` service.
 *
 * @since 2.0.0
 * @category Clock
 */
export const withClock = defaultServices.withClock;
/**
 * Retreives the `Console` service from the context
 *
 * @since 2.0.0
 * @category Console
 */
export const console = console_.console;
/**
 * Retreives the `Console` service from the context and provides it to the
 * specified effectful function.
 *
 * @since 2.0.0
 * @category Console
 */
export const consoleWith = console_.consoleWith;
/**
 * Sets the implementation of the console service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 * @category Creating Effects
 */
export const withConsoleScoped = console_.withConsoleScoped;
/**
 * Executes the specified workflow with the specified implementation of the
 * console service.
 *
 * @since 2.0.0
 * @category Console
 */
export const withConsole = console_.withConsole;
/**
 * Delays the execution of an effect by a specified `Duration`.
 *
 * **Details
 *
 * This function postpones the execution of the provided effect by the specified
 * duration. The duration can be provided in various formats supported by the
 * `Duration` module.
 *
 * Internally, this function does not block the thread; instead, it uses an
 * efficient, non-blocking mechanism to introduce the delay.
 *
 * **Example**
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * const task = Console.log("Task executed")
 *
 * const program = Console.log("start").pipe(
 *   Effect.andThen(
 *     // Delays the log message by 2 seconds
 *     task.pipe(Effect.delay("2 seconds"))
 *   )
 * )
 *
 * Effect.runFork(program)
 * // Output:
 * // start
 * // Task executed
 * ```
 *
 * @since 2.0.0
 * @category Delays & Timeouts
 */
export const delay = effect.delay;
/**
 * Suspends the execution of an effect for a specified `Duration`.
 *
 * **Details**
 *
 * This function pauses the execution of an effect for a given duration. It is
 * asynchronous, meaning that it does not block the fiber executing the effect.
 * Instead, the fiber is suspended during the delay period and can resume once
 * the specified time has passed.
 *
 * The duration can be specified using various formats supported by the
 * `Duration` module, such as a string (`"2 seconds"`) or numeric value
 * representing milliseconds.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   console.log("Starting task...")
 *   yield* Effect.sleep("3 seconds") // Waits for 3 seconds
 *   console.log("Task completed!")
 * })
 *
 * Effect.runFork(program)
 * // Output:
 * // Starting task...
 * // Task completed!
 * ```
 *
 * @since 2.0.0
 * @category Delays & Timeouts
 */
export const sleep = effect.sleep;
/**
 * Executes an effect and measures the time it takes to complete.
 *
 * **Details**
 *
 * This function wraps the provided effect and returns a new effect that, when
 * executed, performs the original effect and calculates its execution duration.
 *
 * The result of the new effect includes both the execution time (as a
 * `Duration`) and the original effect's result. This is useful for monitoring
 * performance or gaining insights into the time taken by specific operations.
 *
 * The original effect's behavior (success, failure, or interruption) remains
 * unchanged, and the timing information is provided alongside the result in a
 * tuple.
 *
 * **Example**
 *
 * ```ts
 * import { Duration, Effect } from "effect"
 *
 * const task = Effect.gen(function*() {
 *   yield* Effect.sleep("2 seconds") // Simulates some work
 *   return "some result"
 * })
 *
 * const timedTask = task.pipe(Effect.timed)
 *
 * const program = Effect.gen(function*() {
 *   const [duration, result] = yield* timedTask
 *   console.log(`Task completed in ${Duration.toMillis(duration)} ms with result: ${result}`)
 * })
 *
 * Effect.runFork(program)
 * // Output: Task completed in 2003.749125 ms with result: some result
 * ```
 *
 * @since 2.0.0
 * @category Delays & Timeouts
 */
export const timed = effect.timed;
/**
 * Executes an effect and measures its execution time using a custom clock.
 *
 * **Details**
 *
 * This function extends the functionality of {@link timed} by allowing you to
 * specify a custom clock for measuring the execution duration. The provided
 * effect (`nanoseconds`) represents the clock and should return the current
 * time in nanoseconds. The timing information is computed using this custom
 * clock instead of the default system clock.
 *
 * @since 2.0.0
 * @category Delays & Timeouts
 */
export const timedWith = effect.timedWith;
/**
 * Adds a time limit to an effect, triggering a timeout if the effect exceeds
 * the duration.
 *
 * **Details**
 *
 * This function allows you to enforce a time limit on the execution of an
 * effect. If the effect does not complete within the given duration, it fails
 * with a `TimeoutException`. This is useful for preventing tasks from hanging
 * indefinitely, especially in scenarios where responsiveness or resource limits
 * are critical.
 *
 * The returned effect will either:
 * - Succeed with the original effect's result if it completes within the
 *   specified duration.
 * - Fail with a `TimeoutException` if the time limit is exceeded.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const task = Effect.gen(function* () {
 *   console.log("Start processing...")
 *   yield* Effect.sleep("2 seconds") // Simulates a delay in processing
 *   console.log("Processing complete.")
 *   return "Result"
 * })
 *
 * // Output will show a TimeoutException as the task takes longer
 * // than the specified timeout duration
 * const timedEffect = task.pipe(Effect.timeout("1 second"))
 *
 * Effect.runPromiseExit(timedEffect).then(console.log)
 * // Output:
 * // Start processing...
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: {
 * //     _id: 'Cause',
 * //     _tag: 'Fail',
 * //     failure: { _tag: 'TimeoutException' }
 * //   }
 * // }
 * ```
 *
 * @see {@link timeoutFail} for a version that raises a custom error.
 * @see {@link timeoutFailCause} for a version that raises a custom defect.
 * @see {@link timeoutTo} for a version that allows specifying both success and
 * timeout handlers.
 *
 * @since 2.0.0
 * @category Delays & Timeouts
 */
export const timeout = circular.timeout;
/**
 * Gracefully handles timeouts by returning an `Option` that represents either
 * the result or a timeout.
 *
 * **Details**
 *
 * This function wraps the outcome of an effect in an `Option` type. If the
 * effect completes within the specified duration, it returns a `Some`
 * containing the result. If the effect times out, it returns a `None`. Unlike
 * other timeout methods, this approach does not raise errors or exceptions;
 * instead, it allows you to treat timeouts as a regular outcome, simplifying
 * the logic for handling delays.
 *
 * **When to Use**
 *
 * This is useful when you want to handle timeouts without causing the program
 * to fail, making it easier to manage situations where you expect tasks might
 * take too long but want to continue executing other tasks.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const task = Effect.gen(function* () {
 *   console.log("Start processing...")
 *   yield* Effect.sleep("2 seconds") // Simulates a delay in processing
 *   console.log("Processing complete.")
 *   return "Result"
 * })
 *
 * const timedOutEffect = Effect.all([
 *   task.pipe(Effect.timeoutOption("3 seconds")),
 *   task.pipe(Effect.timeoutOption("1 second"))
 * ])
 *
 * Effect.runPromise(timedOutEffect).then(console.log)
 * // Output:
 * // Start processing...
 * // Processing complete.
 * // Start processing...
 * // [
 * //   { _id: 'Option', _tag: 'Some', value: 'Result' },
 * //   { _id: 'Option', _tag: 'None' }
 * // ]
 * ```
 *
 * @see {@link timeout} for a version that raises a `TimeoutException`.
 * @see {@link timeoutFail} for a version that raises a custom error.
 * @see {@link timeoutFailCause} for a version that raises a custom defect.
 * @see {@link timeoutTo} for a version that allows specifying both success and
 * timeout handlers.
 *
 * @since 3.1.0
 * @category Delays & Timeouts
 */
export const timeoutOption = circular.timeoutOption;
/**
 * Specifies a custom error to be produced when a timeout occurs.
 *
 * **Details**
 *
 * This function allows you to handle timeouts in a customized way by defining a
 * specific error to be raised when an effect exceeds the given duration. Unlike
 * default timeout behaviors that use generic exceptions, this function gives
 * you the flexibility to specify a meaningful error type that aligns with your
 * application's needs.
 *
 * When you apply this function, you provide:
 * - A `duration`: The time limit for the effect.
 * - An `onTimeout` function: A lazy evaluation function that generates the
 *   custom error if the timeout occurs.
 *
 * If the effect completes within the time limit, its result is returned
 * normally. Otherwise, the `onTimeout` function is triggered, and its output is
 * used as the error for the effect.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const task = Effect.gen(function* () {
 *   console.log("Start processing...")
 *   yield* Effect.sleep("2 seconds") // Simulates a delay in processing
 *   console.log("Processing complete.")
 *   return "Result"
 * })
 *
 * class MyTimeoutError {
 *   readonly _tag = "MyTimeoutError"
 * }
 *
 * const program = task.pipe(
 *   Effect.timeoutFail({
 *     duration: "1 second",
 *     onTimeout: () => new MyTimeoutError() // Custom timeout error
 *   })
 * )
 *
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // Start processing...
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: {
 * //     _id: 'Cause',
 * //     _tag: 'Fail',
 * //     failure: MyTimeoutError { _tag: 'MyTimeoutError' }
 * //   }
 * // }
 * ```
 *
 * @see {@link timeout} for a version that raises a `TimeoutException`.
 * @see {@link timeoutFailCause} for a version that raises a custom defect.
 * @see {@link timeoutTo} for a version that allows specifying both success and
 * timeout handlers.
 *
 * @since 2.0.0
 * @category Delays & Timeouts
 */
export const timeoutFail = circular.timeoutFail;
/**
 * Specifies a custom defect to be thrown when a timeout occurs.
 *
 * **Details**
 *
 * This function allows you to handle timeouts as exceptional cases by
 * generating a custom defect when an effect exceeds the specified duration. You
 * provide:
 * - A `duration`: The time limit for the effect.
 * - An `onTimeout` function: A lazy evaluation function that generates the
 *   custom defect (typically created using `Cause.die`).
 *
 * If the effect completes within the time limit, its result is returned
 * normally. Otherwise, the custom defect is triggered, and the effect fails
 * with that defect.
 *
 * **When to Use**
 *
 * This is especially useful when you need to treat timeouts as critical
 * failures in your application and wish to include meaningful information in
 * the defect.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Cause } from "effect"
 *
 * const task = Effect.gen(function* () {
 *   console.log("Start processing...")
 *   yield* Effect.sleep("2 seconds") // Simulates a delay in processing
 *   console.log("Processing complete.")
 *   return "Result"
 * })
 *
 * const program = task.pipe(
 *   Effect.timeoutFailCause({
 *     duration: "1 second",
 *     onTimeout: () => Cause.die("Timed out!") // Custom defect for timeout
 *   })
 * )
 *
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // Start processing...
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: { _id: 'Cause', _tag: 'Die', defect: 'Timed out!' }
 * // }
 * ```
 *
 * @see {@link timeout} for a version that raises a `TimeoutException`.
 * @see {@link timeoutFail} for a version that raises a custom error.
 * @see {@link timeoutTo} for a version that allows specifying both success and
 * timeout handlers.
 *
 * @since 2.0.0
 * @category Delays & Timeouts
 */
export const timeoutFailCause = circular.timeoutFailCause;
/**
 * Provides custom behavior for successful and timed-out operations.
 *
 * **Details**
 *
 * This function allows you to define distinct outcomes for an effect depending
 * on whether it completes within a specified time frame or exceeds the timeout
 * duration. You can provide:
 * - `onSuccess`: A handler for processing the result of the effect if it
 *   completes successfully within the time limit.
 * - `onTimeout`: A handler for generating a result when the effect times out.
 * - `duration`: The maximum allowed time for the effect to complete.
 *
 * **When to Use**
 *
 * Unlike {@link timeout}, which raises an exception for timeouts, this function
 * gives you full control over the behavior for both success and timeout
 * scenarios. It is particularly useful when you want to encapsulate timeouts
 * and successes into a specific data structure, like an `Either` type, to
 * represent these outcomes in a meaningful way.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Either } from "effect"
 *
 * const task = Effect.gen(function* () {
 *   console.log("Start processing...")
 *   yield* Effect.sleep("2 seconds") // Simulates a delay in processing
 *   console.log("Processing complete.")
 *   return "Result"
 * })
 *
 * const program = task.pipe(
 *   Effect.timeoutTo({
 *     duration: "1 second",
 *     onSuccess: (result): Either.Either<string, string> =>
 *       Either.right(result),
 *     onTimeout: (): Either.Either<string, string> =>
 *       Either.left("Timed out!")
 *   })
 * )
 *
 * Effect.runPromise(program).then(console.log)
 * // Output:
 * // Start processing...
 * // {
 * //   _id: "Either",
 * //   _tag: "Left",
 * //   left: "Timed out!"
 * // }
 * ```
 *
 * @see {@link timeout} for a version that raises a `TimeoutException`.
 * @see {@link timeoutFail} for a version that raises a custom error.
 * @see {@link timeoutFailCause} for a version that raises a custom defect.
 *
 * @since 2.0.0
 * @category Delays & Timeouts
 */
export const timeoutTo = circular.timeoutTo;
/**
 * Allows working with the default configuration provider.
 *
 * **Details**
 *
 * This function retrieves the default configuration provider and passes it to
 * the provided function, which can use it to perform computations or retrieve
 * configuration values. The function can return an effect that leverages the
 * configuration provider for its operations.
 *
 * @since 2.0.0
 * @category Config
 */
export const configProviderWith = defaultServices.configProviderWith;
/**
 * Executes an effect using a specific configuration provider.
 *
 * **Details**
 *
 * This function lets you run an effect with a specified configuration provider.
 * The custom provider will override the default configuration provider for the
 * duration of the effect's execution.
 *
 * **When to Use**
 *
 * This is particularly useful when you need to use a different set of
 * configuration values or sources for specific parts of your application.
 *
 * **Example**
 *
 * ```ts
 * import { Config, ConfigProvider, Effect } from "effect"
 *
 * const customProvider: ConfigProvider.ConfigProvider = ConfigProvider.fromMap(
 *   new Map([["custom-key", "custom-value"]])
 * )
 *
 * const program = Effect.withConfigProvider(customProvider)(
 *   Effect.gen(function*() {
 *     const value = yield* Config.string("custom-key")
 *     console.log(`Config value: ${value}`)
 *   })
 * )
 *
 * Effect.runPromise(program)
 * // Output:
 * // Config value: custom-value
 * ```
 *
 * @since 2.0.0
 * @category Config
 */
export const withConfigProvider = defaultServices.withConfigProvider;
/**
 * Sets a configuration provider within a scope.
 *
 * **Details**
 *
 * This function sets the configuration provider to a specified value and
 * ensures that it is restored to its original value when the scope is closed.
 *
 * @since 2.0.0
 * @category Config
 */
export const withConfigProviderScoped = fiberRuntime.withConfigProviderScoped;
/**
 * Accesses the full context of the effect.
 *
 * **Details**
 *
 * This function provides the ability to access the entire context required by
 * an effect. The context is a container that holds dependencies or environment
 * values needed by an effect to run. By using this function, you can retrieve
 * and work with the context directly within an effect.
 *
 * @since 2.0.0
 * @category Context
 */
export const context = core.context;
/**
 * Accesses the context and applies a transformation function.
 *
 * **Details**
 *
 * This function retrieves the context of the effect and applies a pure
 * transformation function to it. The result of the transformation is then
 * returned within the effect.
 *
 * @see {@link contextWithEffect} for a version that allows effectful transformations.
 *
 * @since 2.0.0
 * @category Context
 */
export const contextWith = effect.contextWith;
/**
 * Accesses the context and performs an effectful transformation.
 *
 * **Details**
 *
 * This function retrieves the context and allows you to transform it
 * effectually using another effect. It is useful when the transformation
 * involves asynchronous or effectful operations.
 *
 * @see {@link contextWith} for a version that allows pure transformations.
 *
 * @since 2.0.0
 * @category Context
 */
export const contextWithEffect = core.contextWithEffect;
/**
 * Provides part of the required context while leaving the rest unchanged.
 *
 * **Details**
 *
 * This function allows you to transform the context required by an effect,
 * providing part of the context and leaving the rest to be fulfilled later.
 *
 * **Example**
 *
 * ```ts
 * import { Context, Effect } from "effect"
 *
 * class Service1 extends Context.Tag("Service1")<Service1, { readonly port: number }>() {}
 * class Service2 extends Context.Tag("Service2")<Service2, { readonly connection: string }>() {}
 *
 * const program = Effect.gen(function*() {
 *   const service1 = yield* Service1
 *   console.log(service1.port)
 *   const service2 = yield* Service2
 *   console.log(service2.connection)
 *   return "some result"
 * })
 *
 * //      ┌─── Effect<string, never, Service2>
 * //      ▼
 * const programWithService1 = Effect.mapInputContext(
 *   program,
 *   (ctx: Context.Context<Service2>) => Context.add(ctx, Service1, { port: 3000 })
 * )
 *
 * const runnable = programWithService1.pipe(
 *   Effect.provideService(Service2, { connection: "localhost" }),
 *   Effect.provideService(Service1, { port: 3001 })
 * )
 *
 * Effect.runPromise(runnable)
 * // Output:
 * // 3000
 * // localhost
 * ```
 *
 * @since 2.0.0
 * @category Context
 */
export const mapInputContext = core.mapInputContext;
/**
 * Provides necessary dependencies to an effect, removing its environmental
 * requirements.
 *
 * **Details**
 *
 * This function allows you to supply the required environment for an effect.
 * The environment can be provided in the form of one or more `Layer`s, a
 * `Context`, a `Runtime`, or a `ManagedRuntime`. Once the environment is
 * provided, the effect can run without requiring external dependencies.
 *
 * You can compose layers to create a modular and reusable way of setting up the
 * environment for effects. For example, layers can be used to configure
 * databases, logging services, or any other required dependencies.
 *
 * **Example**
 *
 * ```ts
 * import { Context, Effect, Layer } from "effect"
 *
 * class Database extends Context.Tag("Database")<
 *   Database,
 *   { readonly query: (sql: string) => Effect.Effect<Array<unknown>> }
 * >() {}
 *
 * const DatabaseLive = Layer.succeed(
 *   Database,
 *   {
 *     // Simulate a database query
 *     query: (sql: string) => Effect.log(`Executing query: ${sql}`).pipe(Effect.as([]))
 *   }
 * )
 *
 * //      ┌─── Effect<unknown[], never, Database>
 * //      ▼
 * const program = Effect.gen(function*() {
 *   const database = yield* Database
 *   const result = yield* database.query("SELECT * FROM users")
 *   return result
 * })
 *
 * //      ┌─── Effect<unknown[], never, never>
 * //      ▼
 * const runnable = Effect.provide(program, DatabaseLive)
 *
 * Effect.runPromise(runnable).then(console.log)
 * // Output:
 * // timestamp=... level=INFO fiber=#0 message="Executing query: SELECT * FROM users"
 * // []
 * ```
 *
 * @see {@link provideService} for providing a service to an effect.
 *
 * @since 2.0.0
 * @category Context
 */
export const provide = layer.effect_provide;
/**
 * Provides an implementation for a service in the context of an effect.
 *
 * **Details**
 *
 * This function allows you to supply a specific implementation for a service
 * required by an effect. Services are typically defined using `Context.Tag`,
 * which acts as a unique identifier for the service. By using this function,
 * you link the service to its concrete implementation, enabling the effect to
 * execute successfully without additional requirements.
 *
 * For example, you can use this function to provide a random number generator,
 * a logger, or any other service your effect depends on. Once the service is
 * provided, all parts of the effect that rely on the service will automatically
 * use the implementation you supplied.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Context } from "effect"
 *
 * // Declaring a tag for a service that generates random numbers
 * class Random extends Context.Tag("MyRandomService")<
 *   Random,
 *   { readonly next: Effect.Effect<number> }
 * >() {}
 *
 * // Using the service
 * const program = Effect.gen(function* () {
 *   const random = yield* Random
 *   const randomNumber = yield* random.next
 *   console.log(`random number: ${randomNumber}`)
 * })
 *
 * // Providing the implementation
 * //
 * //      ┌─── Effect<void, never, never>
 * //      ▼
 * const runnable = Effect.provideService(program, Random, {
 *   next: Effect.sync(() => Math.random())
 * })
 *
 * // Run successfully
 * Effect.runPromise(runnable)
 * // Example Output:
 * // random number: 0.8241872233134417
 * ```
 *
 * @see {@link provide} for providing multiple layers to an effect.
 *
 * @since 2.0.0
 * @category Context
 */
export const provideService = effect.provideService;
/**
 * Dynamically provides an implementation for a service using an effect.
 *
 * **Details**
 *
 * This function allows you to provide an implementation for a service
 * dynamically by using another effect. The provided effect is executed to
 * produce the service implementation, which is then made available to the
 * consuming effect. This is particularly useful when the service implementation
 * itself requires asynchronous or resource-intensive initialization.
 *
 * For example, you can use this function to lazily initialize a database
 * connection or fetch configuration values from an external source before
 * making the service available to your effect.
 *
 * @since 2.0.0
 * @category Context
 */
export const provideServiceEffect = effect.provideServiceEffect;
/**
 * Creates a function that uses a service from the context to produce a value.
 *
 * @see {@link serviceFunctionEffect} for a version that returns an effect.
 *
 * @since 2.0.0
 * @category Context
 */
export const serviceFunction = effect.serviceFunction;
/**
 * Creates a function that uses a service from the context to produce an effect.
 *
 * @see {@link serviceFunction} for a version that returns a value.
 *
 * @since 2.0.0
 * @category Context
 */
export const serviceFunctionEffect = effect.serviceFunctionEffect;
/**
 * @since 2.0.0
 * @category Context
 */
export const serviceFunctions = effect.serviceFunctions;
/**
 * @since 2.0.0
 * @category Context
 */
export const serviceConstants = effect.serviceConstants;
/**
 * @since 2.0.0
 * @category Context
 */
export const serviceMembers = effect.serviceMembers;
/**
 * Retrieves an optional service from the context as an `Option`.
 *
 * **Details**
 *
 * This function retrieves a service from the context and wraps it in an
 * `Option`. If the service is available, it returns a `Some` containing the
 * service. If the service is not found, it returns a `None`. This approach is
 * useful when you want to handle the absence of a service gracefully without
 * causing an error.
 *
 * **When to Use**
 *
 * Use this function when:
 * - You need to access a service that may or may not be present in the context.
 * - You want to handle the absence of a service using the `Option` type instead
 *   of throwing an error.
 *
 * @see {@link serviceOptional} for a version that throws an error if the service is missing.
 *
 * @since 2.0.0
 * @category Context
 */
export const serviceOption = effect.serviceOption;
/**
 * Retrieves a service from the context, throwing an error if it is missing.
 *
 * **Details**
 *
 * This function retrieves a required service from the context. If the service
 * is available, it returns the service. If the service is missing, it throws a
 * `NoSuchElementException`, which can be handled using Effect's error-handling
 * mechanisms. This is useful for services that are critical to the execution of
 * your effect.
 *
 * @see {@link serviceOption} for a version that returns an `Option` instead of throwing an error.
 *
 * @since 2.0.0
 * @category Context
 */
export const serviceOptional = effect.serviceOptional;
/**
 * Updates a service in the context with a new implementation.
 *
 * **Details**
 *
 * This function modifies the existing implementation of a service in the
 * context. It retrieves the current service, applies the provided
 * transformation function `f`, and replaces the old service with the
 * transformed one.
 *
 * **When to Use**
 *
 * This is useful for adapting or extending a service's behavior during the
 * execution of an effect.
 *
 * @since 2.0.0
 * @category Context
 */
export const updateService = effect.updateService;
/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Effect` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 *
 * **Example**
 *
 * ```ts
 * import * as assert from "node:assert"
 * import { Effect, pipe } from "effect"
 *
 * const result = pipe(
 *   Effect.Do,
 *   Effect.bind("x", () => Effect.succeed(2)),
 *   Effect.bind("y", () => Effect.succeed(3)),
 *   Effect.let("sum", ({ x, y }) => x + y)
 * )
 * assert.deepStrictEqual(Effect.runSync(result), { x: 2, y: 3, sum: 5 })
 * ```
 *
 * @see {@link bind}
 * @see {@link bindTo}
 * @see {@link let_ let}
 *
 * @category Do notation
 * @since 2.0.0
 */
export const Do = effect.Do;
/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Effect` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 *
 * **Example**
 *
 * ```ts
 * import * as assert from "node:assert"
 * import { Effect, pipe } from "effect"
 *
 * const result = pipe(
 *   Effect.Do,
 *   Effect.bind("x", () => Effect.succeed(2)),
 *   Effect.bind("y", () => Effect.succeed(3)),
 *   Effect.let("sum", ({ x, y }) => x + y)
 * )
 * assert.deepStrictEqual(Effect.runSync(result), { x: 2, y: 3, sum: 5 })
 * ```
 *
 * @see {@link Do}
 * @see {@link bindTo}
 * @see {@link let_ let}
 *
 * @category Do notation
 * @since 2.0.0
 */
export const bind = effect.bind;
/**
 * `bindAll` combines `all` with `bind`. It is useful
 * when you want to concurrently run multiple effects and then combine their
 * results in a Do notation pipeline.
 *
 * **Example**
 *
 * ```ts
 * import * as assert from "node:assert"
 * import { Effect, Either, pipe } from "effect"
 *
 * const result = pipe(
 *   Effect.Do,
 *   Effect.bind("x", () => Effect.succeed(2)),
 *   Effect.bindAll(({ x }) => ({
 *     a: Effect.succeed(x),
 *     b: Effect.fail("oops"),
 *   }), { concurrency: 2, mode: "either" })
 * )
 * assert.deepStrictEqual(Effect.runSync(result), { x: 2, a: Either.right(2), b: Either.left("oops") })
 * ```
 *
 * @category Do notation
 * @since 3.7.0
 */
export const bindAll = circular.bindAll;
/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Effect` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 *
 * **Example**
 *
 * ```ts
 * import * as assert from "node:assert"
 * import { Effect, pipe } from "effect"
 *
 * const result = pipe(
 *   Effect.Do,
 *   Effect.bind("x", () => Effect.succeed(2)),
 *   Effect.bind("y", () => Effect.succeed(3)),
 *   Effect.let("sum", ({ x, y }) => x + y)
 * )
 * assert.deepStrictEqual(Effect.runSync(result), { x: 2, y: 3, sum: 5 })
 * ```
 *
 * @see {@link Do}
 * @see {@link bind}
 * @see {@link let_ let}
 *
 * @category Do notation
 * @since 2.0.0
 */
export const bindTo = effect.bindTo;
const let_ = effect.let_;
export {
/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Effect` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 *
 * **Example**
 *
 * ```ts
 * import * as assert from "node:assert"
 * import { Effect, pipe } from "effect"
 *
 * const result = pipe(
 *   Effect.Do,
 *   Effect.bind("x", () => Effect.succeed(2)),
 *   Effect.bind("y", () => Effect.succeed(3)),
 *   Effect.let("sum", ({ x, y }) => x + y)
 * )
 * assert.deepStrictEqual(Effect.runSync(result), { x: 2, y: 3, sum: 5 })
 *
 * ```
 *
 * @see {@link Do}
 * @see {@link bind}
 * @see {@link bindTo}
 *
 * @category Do notation
 * @since 2.0.0
 */
let_ as let };
/**
 * Encapsulates the result of an effect in an `Option`.
 *
 * **Details**
 *
 * This function wraps the outcome of an effect in an `Option` type. If the
 * original effect succeeds, the success value is wrapped in `Option.some`. If
 * the effect fails, the failure is converted to `Option.none`.
 *
 * This is particularly useful for scenarios where you want to represent the
 * absence of a value explicitly, without causing the resulting effect to fail.
 * The resulting effect has an error type of `never`, meaning it cannot fail
 * directly. However, unrecoverable errors, also referred to as defects, are
 * not captured and will still result in failure.
 *
 * **Example** (Using Effect.option to Handle Errors)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const maybe1 = Effect.option(Effect.succeed(1))
 *
 * Effect.runPromiseExit(maybe1).then(console.log)
 * // Output:
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Success',
 * //   value: { _id: 'Option', _tag: 'Some', value: 1 }
 * // }
 *
 * const maybe2 = Effect.option(Effect.fail("Uh oh!"))
 *
 * Effect.runPromiseExit(maybe2).then(console.log)
 * // Output:
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Success',
 * //   value: { _id: 'Option', _tag: 'None' }
 * // }
 *
 * const maybe3 = Effect.option(Effect.die("Boom!"))
 *
 * Effect.runPromiseExit(maybe3).then(console.log)
 * // Output:
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: { _id: 'Cause', _tag: 'Die', defect: 'Boom!' }
 * // }
 * ```
 *
 * @see {@link either} for a version that uses `Either` instead.
 * @see {@link exit} for a version that encapsulates both recoverable errors and defects in an `Exit`.
 *
 * @since 2.0.0
 * @category Outcome Encapsulation
 */
export const option = effect.option;
/**
 * Encapsulates both success and failure of an `Effect` into an `Either` type.
 *
 * **Details**
 *
 * This function converts an effect that may fail into an effect that always
 * succeeds, wrapping the outcome in an `Either` type. The result will be
 * `Either.Left` if the effect fails, containing the recoverable error, or
 * `Either.Right` if it succeeds, containing the result.
 *
 * Using this function, you can handle recoverable errors explicitly without
 * causing the effect to fail. This is particularly useful in scenarios where
 * you want to chain effects and manage both success and failure in the same
 * logical flow.
 *
 * It's important to note that unrecoverable errors, often referred to as
 * "defects," are still thrown and not captured within the `Either` type. Only
 * failures that are explicitly represented as recoverable errors in the effect
 * are encapsulated.
 *
 * The resulting effect cannot fail directly because all recoverable failures
 * are represented inside the `Either` type.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Either, Random } from "effect"
 *
 * class HttpError {
 *   readonly _tag = "HttpError"
 * }
 *
 * class ValidationError {
 *   readonly _tag = "ValidationError"
 * }
 *
 * //      ┌─── Effect<string, HttpError | ValidationError, never>
 * //      ▼
 * const program = Effect.gen(function* () {
 *   const n1 = yield* Random.next
 *   const n2 = yield* Random.next
 *   if (n1 < 0.5) {
 *     yield* Effect.fail(new HttpError())
 *   }
 *   if (n2 < 0.5) {
 *     yield* Effect.fail(new ValidationError())
 *   }
 *   return "some result"
 * })
 *
 * //      ┌─── Effect<string, never, never>
 * //      ▼
 * const recovered = Effect.gen(function* () {
 *   //      ┌─── Either<string, HttpError | ValidationError>
 *   //      ▼
 *   const failureOrSuccess = yield* Effect.either(program)
 *   return Either.match(failureOrSuccess, {
 *     onLeft: (error) => `Recovering from ${error._tag}`,
 *     onRight: (value) => value // Do nothing in case of success
 *   })
 * })
 * ```
 *
 * @see {@link option} for a version that uses `Option` instead.
 * @see {@link exit} for a version that encapsulates both recoverable errors and defects in an `Exit`.
 *
 * @since 2.0.0
 * @category Outcome Encapsulation
 */
export const either = core.either;
/**
 * Encapsulates both success and failure of an `Effect` using the `Exit` type.
 *
 * **Details**
 *
 * This function converts an effect into one that always succeeds, wrapping its
 * outcome in the `Exit` type. The `Exit` type provides explicit handling of
 * both success (`Exit.Success`) and failure (`Exit.Failure`) cases, including
 * defects (unrecoverable errors).
 *
 * Unlike {@link either} or {@link option}, this function also encapsulates
 * defects, which are typically unrecoverable and would otherwise terminate the
 * effect. With the `Exit` type, defects are represented in `Exit.Failure`,
 * allowing for detailed introspection and structured error handling.
 *
 * This makes the resulting effect robust and incapable of direct failure (its
 * error type is `never`). It is particularly useful for workflows where all
 * outcomes, including unexpected defects, must be managed and analyzed.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Cause, Console, Exit } from "effect"
 *
 * // Simulating a runtime error
 * const task = Effect.dieMessage("Boom!")
 *
 * const program = Effect.gen(function* () {
 *   const exit = yield* Effect.exit(task)
 *   if (Exit.isFailure(exit)) {
 *     const cause = exit.cause
 *     if (
 *       Cause.isDieType(cause) &&
 *       Cause.isRuntimeException(cause.defect)
 *     ) {
 *       yield* Console.log(
 *         `RuntimeException defect caught: ${cause.defect.message}`
 *       )
 *     } else {
 *       yield* Console.log("Unknown failure caught.")
 *     }
 *   }
 * })
 *
 * // We get an Exit.Success because we caught all failures
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // RuntimeException defect caught: Boom!
 * // {
 * //   _id: "Exit",
 * //   _tag: "Success",
 * //   value: undefined
 * // }
 * ```
 *
 * @see {@link option} for a version that uses `Option` instead.
 * @see {@link either} for a version that uses `Either` instead.
 *
 * @since 2.0.0
 * @category Outcome Encapsulation
 */
export const exit = core.exit;
/**
 * Converts an `Effect` into an operation that completes a `Deferred` with its result.
 *
 * **Details**
 *
 * The `intoDeferred` function takes an effect and a `Deferred` and ensures that the `Deferred`
 * is completed based on the outcome of the effect. If the effect succeeds, the `Deferred` is
 * completed with the success value. If the effect fails, the `Deferred` is completed with the
 * failure. Additionally, if the effect is interrupted, the `Deferred` will also be interrupted.
 *
 * **Example**
 *
 * ```ts
 * import { Deferred, Effect } from "effect"
 *
 * // Define an effect that succeeds
 * const successEffect = Effect.succeed(42)
 *
 * const program = Effect.gen(function*() {
 *   // Create a deferred
 *   const deferred = yield* Deferred.make<number, string>()
 *
 *   // Complete the deferred using the successEffect
 *   const isCompleted = yield* Effect.intoDeferred(successEffect, deferred)
 *
 *   // Access the value of the deferred
 *   const value = yield* Deferred.await(deferred)
 *   console.log(value)
 *
 *   return isCompleted
 * })
 *
 * Effect.runPromise(program).then(console.log)
 * // Output:
 * // 42
 * // true
 * ```
 *
 * @since 2.0.0
 * @category Synchronization Utilities
 */
export const intoDeferred = core.intoDeferred;
const if_ = core.if_;
export {
/**
 * Executes one of two effects based on a condition evaluated by an effectful predicate.
 *
 * Use `if` to run one of two effects depending on whether the predicate effect
 * evaluates to `true` or `false`. If the predicate is `true`, the `onTrue` effect
 * is executed. If it is `false`, the `onFalse` effect is executed instead.
 *
 * **Example** (Simulating a Coin Flip)
 *
 * ```ts
 * import { Effect, Random, Console } from "effect"
 *
 * const flipTheCoin = Effect.if(Random.nextBoolean, {
 *   onTrue: () => Console.log("Head"), // Runs if the predicate is true
 *   onFalse: () => Console.log("Tail") // Runs if the predicate is false
 * })
 *
 * Effect.runFork(flipTheCoin)
 * ```
 *
 * @since 2.0.0
 * @category Conditional Operators
 */
if_ as if };
/**
 * Filters an effect, dying with a custom defect if the predicate fails.
 *
 * **Details**
 *
 * This function applies a predicate to the result of an effect. If the
 * predicate evaluates to `false`, the effect dies with a custom defect
 * generated by the `orDieWith` function.
 *
 * **When to Use**
 *
 * This is useful for enforcing constraints on values and treating violations as
 * fatal program errors.
 *
 * @since 2.0.0
 * @category Filtering
 */
export const filterOrDie = effect.filterOrDie;
/**
 * Filters an effect, dying with a custom message if the predicate fails.
 *
 * **Details**
 *
 * This function works like {@link filterOrDie} but allows you to specify a
 * custom error message to describe the reason for the failure. The message is
 * included in the defect when the predicate evaluates to `false`.
 *
 * @since 2.0.0
 * @category Filtering
 */
export const filterOrDieMessage = effect.filterOrDieMessage;
/**
 * Filters an effect, providing an alternative effect if the predicate fails.
 *
 * **Details**
 *
 * This function applies a predicate to the result of an effect. If the
 * predicate evaluates to `false`, it executes the `orElse` effect instead. The
 * `orElse` effect can produce an alternative value or perform additional
 * computations.
 *
 * @since 2.0.0
 * @category Filtering
 */
export const filterOrElse = effect.filterOrElse;
/**
 * Filters an effect, failing with a custom error if the predicate fails.
 *
 * **Details**
 *
 * This function applies a predicate to the result of an effect. If the
 * predicate evaluates to `false`, the effect fails with a custom error
 * generated by the `orFailWith` function.
 *
 * **When to Use**
 *
 * This is useful for enforcing constraints and treating violations as
 * recoverable errors.
 *
 * **Providing a Guard**
 *
 * In addition to the filtering capabilities discussed earlier, you have the
 * option to further refine and narrow down the type of the success channel by
 * providing a [user-defined type
 * guard](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates).
 * Let's explore this concept through an example:
 *
 * **Example**
 *
 * ```ts
 * import { Effect, pipe } from "effect"
 *
 * // Define a user interface
 * interface User {
 *   readonly name: string
 * }
 *
 * // Simulate an asynchronous authentication function
 * declare const auth: () => Promise<User | null>
 *
 * const program = pipe(
 *   Effect.promise(() => auth()),
 *   // Use filterOrFail with a custom type guard to ensure user is not null
 *   Effect.filterOrFail(
 *     (user): user is User => user !== null, // Type guard
 *     () => new Error("Unauthorized")
 *   ),
 *   // 'user' now has the type `User` (not `User | null`)
 *   Effect.andThen((user) => user.name)
 * )
 * ```
 *
 * @since 2.0.0
 * @category Filtering
 */
export const filterOrFail = effect.filterOrFail;
/**
 * Filters an effect with an effectful predicate, falling back to an alternative
 * effect if the predicate fails.
 *
 * **Details**
 *
 * This function applies a predicate to the result of an effect. If the
 * predicate evaluates to `false`, the effect falls back to the `orElse`
 * effect. The `orElse` effect can produce an alternative value or perform
 * additional computations.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, pipe } from "effect"
 *
 * // Define a user interface
 * interface User {
 *   readonly name: string
 * }
 *
 * // Simulate an asynchronous authentication function
 * declare const auth: () => Promise<User | null>
 *
 * const program = pipe(
 *   Effect.promise(() => auth()),
 *   // Use filterEffectOrElse with an effectful predicate
 *   Effect.filterEffectOrElse({
 *     predicate: (user) => Effect.succeed(user !== null),
 *     orElse: (user) => Effect.fail(new Error(`Unauthorized user: ${user}`))
 *   }),
 * )
 * ```
 *
 * @since 3.13.0
 * @category Filtering
 */
export const filterEffectOrElse = core.filterEffectOrElse;
/**
 * Filters an effect with an effectful predicate, failing with a custom error if the predicate fails.
 *
 * **Details**
 *
 * This function applies a predicate to the result of an effect. If the
 * predicate evaluates to `false`, the effect fails with a custom error
 * generated by the `orFailWith` function.
 *
 * **When to Use**
 *
 * This is useful for enforcing constraints and treating violations as
 * recoverable errors.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, pipe } from "effect"
 *
 * // Define a user interface
 * interface User {
 *   readonly name: string
 * }
 *
 * // Simulate an asynchronous authentication function
 * declare const auth: () => Promise<User | null>
 *
 * const program = pipe(
 *   Effect.promise(() => auth()),
 *   // Use filterEffectOrFail with an effectful predicate
 *   Effect.filterEffectOrFail({
 *     predicate: (user) => Effect.succeed(user !== null),
 *     orFailWith: () => new Error("Unauthorized")
 *   }),
 * )
 * ```
 *
 * @since 3.13.0
 * @category Filtering
 */
export const filterEffectOrFail = core.filterEffectOrFail;
/**
 * Executes an effect only if the condition is `false`.
 *
 * @see {@link unlessEffect} for a version that allows the condition to be an effect.
 * @see {@link when} for a version that executes the effect when the condition is `true`.
 *
 * @since 2.0.0
 * @category Conditional Operators
 */
export const unless = effect.unless;
/**
 * Conditionally execute an effect based on the result of another effect.
 *
 * @see {@link unless} for a version that allows the condition to be a boolean.
 * @see {@link whenEffect} for a version that executes the effect when the condition is `true`.
 *
 * @since 2.0.0
 * @category Conditional Operators
 */
export const unlessEffect = effect.unlessEffect;
/**
 * Conditionally executes an effect based on a boolean condition.
 *
 * **Details**
 *
 * This function allows you to run an effect only if a given condition evaluates
 * to `true`. If the condition is `true`, the effect is executed, and its result
 * is wrapped in an `Option.some`. If the condition is `false`, the effect is
 * skipped, and the result is `Option.none`.
 *
 * **When to Use**
 *
 * This function is useful for scenarios where you need to dynamically decide
 * whether to execute an effect based on runtime logic, while also representing
 * the skipped case explicitly.
 *
 * **Example** (Conditional Effect Execution)
 *
 * ```ts
 * import { Effect, Option } from "effect"
 *
 * const validateWeightOption = (
 *   weight: number
 * ): Effect.Effect<Option.Option<number>> =>
 *   // Conditionally execute the effect if the weight is non-negative
 *   Effect.succeed(weight).pipe(Effect.when(() => weight >= 0))
 *
 * // Run with a valid weight
 * Effect.runPromise(validateWeightOption(100)).then(console.log)
 * // Output:
 * // {
 * //   _id: "Option",
 * //   _tag: "Some",
 * //   value: 100
 * // }
 *
 * // Run with an invalid weight
 * Effect.runPromise(validateWeightOption(-5)).then(console.log)
 * // Output:
 * // {
 * //   _id: "Option",
 * //   _tag: "None"
 * // }
 * ```
 *
 * @see {@link whenEffect} for a version that allows the condition to be an effect.
 * @see {@link unless} for a version that executes the effect when the condition is `false`.
 *
 * @since 2.0.0
 * @category Conditional Operators
 */
export const when = effect.when;
/**
 * Conditionally executes an effect based on the result of another effect.
 *
 * **Details**
 *
 * This function allows you to run an effect only if a conditional effect
 * evaluating to a boolean resolves to `true`. If the conditional effect
 * evaluates to `true`, the specified effect is executed, and its result is
 * wrapped in `Option.some`. If the conditional effect evaluates to `false`, the
 * effect is skipped, and the result is `Option.none`.
 *
 * **When to Use**
 *
 * This function is particularly useful when the decision to execute an effect
 * depends on the result of another effect, such as a random value, a
 * user-provided input, or a network request result.
 *
 * **Example** (Using an Effect as a Condition)
 *
 * ```ts
 * import { Effect, Random } from "effect"
 *
 * const randomIntOption = Random.nextInt.pipe(
 *   Effect.whenEffect(Random.nextBoolean)
 * )
 *
 * console.log(Effect.runSync(randomIntOption))
 * // Example Output:
 * // { _id: 'Option', _tag: 'Some', value: 8609104974198840 }
 * ```
 *
 * @see {@link when} for a version that allows the condition to be a boolean.
 * @see {@link unlessEffect} for a version that executes the effect when the condition is `false`.
 *
 * @since 2.0.0
 * @category Conditional Operators
 */
export const whenEffect = core.whenEffect;
/**
 * Executes an effect conditionally based on the value of a `FiberRef` that
 * satisfies a predicate.
 *
 * **Details**
 *
 * This function enables you to execute an effect only when the value of a
 * specified `FiberRef` meets a certain condition defined by a predicate. If the
 * value satisfies the predicate, the effect is executed, and the result is
 * wrapped in an `Option.some`. If the predicate is not satisfied, the effect is
 * skipped, and the result is `Option.none`. In both cases, the current value of
 * the `FiberRef` is included in the result.
 *
 * @since 2.0.0
 * @category Conditional Operators
 */
export const whenFiberRef = effect.whenFiberRef;
/**
 * Executes an effect conditionally based on the value of a `Ref` that satisfies
 * a predicate.
 *
 * **Details**
 *
 * This function allows you to execute an effect only when the value of a
 * specified `Ref` meets a condition defined by a predicate. If the value
 * satisfies the predicate, the effect is executed, and the result is wrapped in
 * an `Option.some`. If the predicate is not satisfied, the effect is skipped,
 * and the result is `Option.none`. In both cases, the current value of the
 * `Ref` is included in the result.
 *
 * @since 2.0.0
 * @category Conditional Operators
 */
export const whenRef = effect.whenRef;
/**
 * Chains effects to produce new `Effect` instances, useful for combining
 * operations that depend on previous results.
 *
 * **Syntax**
 *
 * ```ts skip-type-checking
 * const flatMappedEffect = pipe(myEffect, Effect.flatMap(transformation))
 * // or
 * const flatMappedEffect = Effect.flatMap(myEffect, transformation)
 * // or
 * const flatMappedEffect = myEffect.pipe(Effect.flatMap(transformation))
 * ```
 *
 * **Details**
 *
 * `flatMap` lets you sequence effects so that the result of one effect can be
 * used in the next step. It is similar to `flatMap` used with arrays but works
 * specifically with `Effect` instances, allowing you to avoid deeply nested
 * effect structures.
 *
 * Since effects are immutable, `flatMap` always returns a new effect instead of
 * changing the original one.
 *
 * **When to Use**
 *
 * Use `flatMap` when you need to chain multiple effects, ensuring that each
 * step produces a new `Effect` while flattening any nested effects that may
 * occur.
 *
 * **Example**
 *
 * ```ts
 * import { pipe, Effect } from "effect"
 *
 * // Function to apply a discount safely to a transaction amount
 * const applyDiscount = (
 *   total: number,
 *   discountRate: number
 * ): Effect.Effect<number, Error> =>
 *   discountRate === 0
 *     ? Effect.fail(new Error("Discount rate cannot be zero"))
 *     : Effect.succeed(total - (total * discountRate) / 100)
 *
 * // Simulated asynchronous task to fetch a transaction amount from database
 * const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))
 *
 * // Chaining the fetch and discount application using `flatMap`
 * const finalAmount = pipe(
 *   fetchTransactionAmount,
 *   Effect.flatMap((amount) => applyDiscount(amount, 5))
 * )
 *
 * Effect.runPromise(finalAmount).then(console.log)
 * // Output: 95
 * ```
 *
 * @see {@link tap} for a version that ignores the result of the effect.
 *
 * @since 2.0.0
 * @category Sequencing
 */
export const flatMap = core.flatMap;
/**
 * Chains two actions, where the second action can depend on the result of the
 * first.
 *
 * **Syntax**
 *
 * ```ts skip-type-checking
 * const transformedEffect = pipe(myEffect, Effect.andThen(anotherEffect))
 * // or
 * const transformedEffect = Effect.andThen(myEffect, anotherEffect)
 * // or
 * const transformedEffect = myEffect.pipe(Effect.andThen(anotherEffect))
 * ```
 *
 * **When to Use**
 *
 * Use `andThen` when you need to run multiple actions in sequence, with the
 * second action depending on the result of the first. This is useful for
 * combining effects or handling computations that must happen in order.
 *
 * **Details**
 *
 * The second action can be:
 *
 * - A constant value (similar to {@link as})
 * - A function returning a value (similar to {@link map})
 * - A `Promise`
 * - A function returning a `Promise`
 * - An `Effect`
 * - A function returning an `Effect` (similar to {@link flatMap})
 *
 * **Note:** `andThen` works well with both `Option` and `Either` types,
 * treating them as effects.
 *
 * **Example** (Applying a Discount Based on Fetched Amount)
 *
 * ```ts
 * import { pipe, Effect } from "effect"
 *
 * // Function to apply a discount safely to a transaction amount
 * const applyDiscount = (
 *   total: number,
 *   discountRate: number
 * ): Effect.Effect<number, Error> =>
 *   discountRate === 0
 *     ? Effect.fail(new Error("Discount rate cannot be zero"))
 *     : Effect.succeed(total - (total * discountRate) / 100)
 *
 * // Simulated asynchronous task to fetch a transaction amount from database
 * const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))
 *
 * // Using Effect.map and Effect.flatMap
 * const result1 = pipe(
 *   fetchTransactionAmount,
 *   Effect.map((amount) => amount * 2),
 *   Effect.flatMap((amount) => applyDiscount(amount, 5))
 * )
 *
 * Effect.runPromise(result1).then(console.log)
 * // Output: 190
 *
 * // Using Effect.andThen
 * const result2 = pipe(
 *   fetchTransactionAmount,
 *   Effect.andThen((amount) => amount * 2),
 *   Effect.andThen((amount) => applyDiscount(amount, 5))
 * )
 *
 * Effect.runPromise(result2).then(console.log)
 * // Output: 190
 * ```
 *
 * @since 2.0.0
 * @category Sequencing
 */
export const andThen = core.andThen;
/**
 * @since 2.0.0
 * @category Sequencing
 */
export const flatten = core.flatten;
/**
 * Races two effects and returns the result of the first successful one.
 *
 * **Details**
 *
 * This function takes two effects and runs them concurrently. The first effect
 * that successfully completes will determine the result of the race, and the
 * other effect will be interrupted.
 *
 * If neither effect succeeds, the function will fail with a `Cause`
 * containing all the errors.
 *
 * **When to Use**
 *
 * This is useful when you want to run two effects concurrently, but only care
 * about the first one to succeed. It is commonly used in cases like timeouts,
 * retries, or when you want to optimize for the faster response without
 * worrying about the other effect.
 *
 * **Handling Success or Failure with Either**
 *
 * If you want to handle the result of whichever task completes first, whether
 * it succeeds or fails, you can use the `Effect.either` function. This function
 * wraps the result in an `Either` type, allowing you to see if the result
 * was a success (`Right`) or a failure (`Left`).
 *
 * **Example** (Both Tasks Succeed)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const task1 = Effect.succeed("task1").pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Console.log("task1 done")),
 *   Effect.onInterrupt(() => Console.log("task1 interrupted"))
 * )
 * const task2 = Effect.succeed("task2").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Console.log("task2 done")),
 *   Effect.onInterrupt(() => Console.log("task2 interrupted"))
 * )
 *
 * const program = Effect.race(task1, task2)
 *
 * Effect.runFork(program)
 * // Output:
 * // task1 done
 * // task2 interrupted
 * ```
 *
 * **Example** (One Task Fails, One Succeeds)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const task1 = Effect.fail("task1").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Console.log("task1 done")),
 *   Effect.onInterrupt(() => Console.log("task1 interrupted"))
 * )
 * const task2 = Effect.succeed("task2").pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Console.log("task2 done")),
 *   Effect.onInterrupt(() => Console.log("task2 interrupted"))
 * )
 *
 * const program = Effect.race(task1, task2)
 *
 * Effect.runFork(program)
 * // Output:
 * // task2 done
 * ```
 *
 * **Example** (Both Tasks Fail)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const task1 = Effect.fail("task1").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Console.log("task1 done")),
 *   Effect.onInterrupt(() => Console.log("task1 interrupted"))
 * )
 * const task2 = Effect.fail("task2").pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Console.log("task2 done")),
 *   Effect.onInterrupt(() => Console.log("task2 interrupted"))
 * )
 *
 * const program = Effect.race(task1, task2)
 *
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: {
 * //     _id: 'Cause',
 * //     _tag: 'Parallel',
 * //     left: { _id: 'Cause', _tag: 'Fail', failure: 'task1' },
 * //     right: { _id: 'Cause', _tag: 'Fail', failure: 'task2' }
 * //   }
 * // }
 * ```
 *
 * **Example** (Handling Success or Failure with Either)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const task1 = Effect.fail("task1").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Console.log("task1 done")),
 *   Effect.onInterrupt(() => Console.log("task1 interrupted"))
 * )
 * const task2 = Effect.succeed("task2").pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Console.log("task2 done")),
 *   Effect.onInterrupt(() => Console.log("task2 interrupted"))
 * )
 *
 * // Run both tasks concurrently, wrapping the result
 * // in Either to capture success or failure
 * const program = Effect.race(Effect.either(task1), Effect.either(task2))
 *
 * Effect.runPromise(program).then(console.log)
 * // Output:
 * // task2 interrupted
 * // { _id: 'Either', _tag: 'Left', left: 'task1' }
 * ```
 *
 * @see {@link raceAll} for a version that handles multiple effects.
 * @see {@link raceFirst} for a version that returns the result of the first effect to complete.
 *
 * @since 2.0.0
 * @category Racing
 */
export const race = fiberRuntime.race;
/**
 * Races multiple effects and returns the first successful result.
 *
 * **Details**
 *
 * This function runs multiple effects concurrently and returns the result of
 * the first one to succeed. If one effect succeeds, the others will be
 * interrupted.
 *
 * If none of the effects succeed, the function will fail with the last error
 * encountered.
 *
 * **When to Use**
 *
 * This is useful when you want to race multiple effects, but only care about
 * the first one to succeed. It is commonly used in cases like timeouts,
 * retries, or when you want to optimize for the faster response without
 * worrying about the other effects.
 *
 * **Example** (All Tasks Succeed)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const task1 = Effect.succeed("task1").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Console.log("task1 done")),
 *   Effect.onInterrupt(() => Console.log("task1 interrupted"))
 * )
 * const task2 = Effect.succeed("task2").pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Console.log("task2 done")),
 *   Effect.onInterrupt(() => Console.log("task2 interrupted"))
 * )
 *
 * const task3 = Effect.succeed("task3").pipe(
 *   Effect.delay("150 millis"),
 *   Effect.tap(Console.log("task3 done")),
 *   Effect.onInterrupt(() => Console.log("task3 interrupted"))
 * )
 *
 * const program = Effect.raceAll([task1, task2, task3])
 *
 * Effect.runFork(program)
 * // Output:
 * // task1 done
 * // task2 interrupted
 * // task3 interrupted
 * ```
 *
 * **Example** (One Task Fails, Two Tasks Succeed)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const task1 = Effect.fail("task1").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Console.log("task1 done")),
 *   Effect.onInterrupt(() => Console.log("task1 interrupted"))
 * )
 * const task2 = Effect.succeed("task2").pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Console.log("task2 done")),
 *   Effect.onInterrupt(() => Console.log("task2 interrupted"))
 * )
 *
 * const task3 = Effect.succeed("task3").pipe(
 *   Effect.delay("150 millis"),
 *   Effect.tap(Console.log("task3 done")),
 *   Effect.onInterrupt(() => Console.log("task3 interrupted"))
 * )
 *
 * const program = Effect.raceAll([task1, task2, task3])
 *
 * Effect.runFork(program)
 * // Output:
 * // task3 done
 * // task2 interrupted
 * ```
 *
 * **Example** (All Tasks Fail)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const task1 = Effect.fail("task1").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Console.log("task1 done")),
 *   Effect.onInterrupt(() => Console.log("task1 interrupted"))
 * )
 * const task2 = Effect.fail("task2").pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Console.log("task2 done")),
 *   Effect.onInterrupt(() => Console.log("task2 interrupted"))
 * )
 *
 * const task3 = Effect.fail("task3").pipe(
 *   Effect.delay("150 millis"),
 *   Effect.tap(Console.log("task3 done")),
 *   Effect.onInterrupt(() => Console.log("task3 interrupted"))
 * )
 *
 * const program = Effect.raceAll([task1, task2, task3])
 *
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: { _id: 'Cause', _tag: 'Fail', failure: 'task2' }
 * // }
 * ```
 *
 * @see {@link race} for a version that handles only two effects.
 *
 * @since 2.0.0
 * @category Racing
 */
export const raceAll = fiberRuntime.raceAll;
/**
 * Races two effects and returns the result of the first one to complete.
 *
 * **Details**
 *
 * This function takes two effects and runs them concurrently, returning the
 * result of the first one that completes, regardless of whether it succeeds or
 * fails.
 *
 * **When to Use**
 *
 * This function is useful when you want to race two operations, and you want to
 * proceed with whichever one finishes first, regardless of whether it succeeds
 * or fails.
 *
 * **Disconnecting Effects**
 *
 * The `Effect.raceFirst` function safely interrupts the “loser” effect once the other completes, but it will not resume until the loser is cleanly terminated.
 *
 * If you want a quicker return, you can disconnect the interrupt signal for both effects. Instead of calling:
 *
 * ```ts skip-type-checking
 * Effect.raceFirst(task1, task2)
 * ```
 *
 * You can use:
 *
 * ```ts skip-type-checking
 * Effect.raceFirst(Effect.disconnect(task1), Effect.disconnect(task2))
 * ```
 *
 * This allows both effects to complete independently while still terminating the losing effect in the background.
 *
 * **Example** (Both Tasks Succeed)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const task1 = Effect.succeed("task1").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Console.log("task1 done")),
 *   Effect.onInterrupt(() =>
 *     Console.log("task1 interrupted").pipe(Effect.delay("100 millis"))
 *   )
 * )
 * const task2 = Effect.succeed("task2").pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Console.log("task2 done")),
 *   Effect.onInterrupt(() =>
 *     Console.log("task2 interrupted").pipe(Effect.delay("100 millis"))
 *   )
 * )
 *
 * const program = Effect.raceFirst(task1, task2).pipe(
 *   Effect.tap(Console.log("more work..."))
 * )
 *
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // task1 done
 * // task2 interrupted
 * // more work...
 * // { _id: 'Exit', _tag: 'Success', value: 'task1' }
 * ```
 *
 * **Example** (One Task Fails, One Succeeds)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const task1 = Effect.fail("task1").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Console.log("task1 done")),
 *   Effect.onInterrupt(() =>
 *     Console.log("task1 interrupted").pipe(Effect.delay("100 millis"))
 *   )
 * )
 * const task2 = Effect.succeed("task2").pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Console.log("task2 done")),
 *   Effect.onInterrupt(() =>
 *     Console.log("task2 interrupted").pipe(Effect.delay("100 millis"))
 *   )
 * )
 *
 * const program = Effect.raceFirst(task1, task2).pipe(
 *   Effect.tap(Console.log("more work..."))
 * )
 *
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // task2 interrupted
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: { _id: 'Cause', _tag: 'Fail', failure: 'task1' }
 * // }
 * ```
 *
 * **Example** (Using Effect.disconnect for Quicker Return)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const task1 = Effect.succeed("task1").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Console.log("task1 done")),
 *   Effect.onInterrupt(() =>
 *     Console.log("task1 interrupted").pipe(Effect.delay("100 millis"))
 *   )
 * )
 * const task2 = Effect.succeed("task2").pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Console.log("task2 done")),
 *   Effect.onInterrupt(() =>
 *     Console.log("task2 interrupted").pipe(Effect.delay("100 millis"))
 *   )
 * )
 *
 * // Race the two tasks with disconnect to allow quicker return
 * const program = Effect.raceFirst(
 *   Effect.disconnect(task1),
 *   Effect.disconnect(task2)
 * ).pipe(Effect.tap(Console.log("more work...")))
 *
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // task1 done
 * // more work...
 * // { _id: 'Exit', _tag: 'Success', value: 'task1' }
 * // task2 interrupted
 * ```
 *
 * @since 2.0.0
 * @category Racing
 */
export const raceFirst = circular.raceFirst;
/**
 * Races two effects and calls a finisher when the first one completes.
 *
 * **Details**
 *
 * This function runs two effects concurrently and calls a specified “finisher”
 * function once one of the effects completes, regardless of whether it succeeds
 * or fails.
 *
 * The finisher functions for each effect allow you to handle the results of
 * each effect as soon as they complete.
 *
 * The function takes two finisher callbacks, one for each effect, and allows
 * you to specify how to handle the result of the race.
 *
 * **When to Use**
 *
 * This function is useful when you need to react to the completion of either
 * effect without waiting for both to finish. It can be used whenever you want
 * to take action based on the first available result.
 *
 * **Example** (Handling Results of Concurrent Tasks)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const task1 = Effect.succeed("task1").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Console.log("task1 done")),
 *   Effect.onInterrupt(() =>
 *     Console.log("task1 interrupted").pipe(Effect.delay("100 millis"))
 *   )
 * )
 * const task2 = Effect.succeed("task2").pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Console.log("task2 done")),
 *   Effect.onInterrupt(() =>
 *     Console.log("task2 interrupted").pipe(Effect.delay("100 millis"))
 *   )
 * )
 *
 * const program = Effect.raceWith(task1, task2, {
 *   onSelfDone: (exit) => Console.log(`task1 exited with ${exit}`),
 *   onOtherDone: (exit) => Console.log(`task2 exited with ${exit}`)
 * })
 *
 * Effect.runFork(program)
 * // Output:
 * // task1 done
 * // task1 exited with {
 * //   "_id": "Exit",
 * //   "_tag": "Success",
 * //   "value": "task1"
 * // }
 * // task2 interrupted
 * ```
 *
 * @since 2.0.0
 * @category Racing
 */
export const raceWith = fiberRuntime.raceWith;
/**
 * Summarizes a effect by computing some value before and after execution, and
 * then combining the values to produce a summary, together with the result of
 * execution.
 *
 * @since 2.0.0
 * @category Sequencing
 */
export const summarized = effect.summarized;
/**
 * Runs a side effect with the result of an effect without changing the original
 * value.
 *
 * **Details**
 *
 * This function works similarly to `flatMap`, but it ignores the result of the
 * function passed to it. The value from the previous effect remains available
 * for the next part of the chain. Note that if the side effect fails, the
 * entire chain will fail too.
 *
 * **When to Use**
 *
 * Use this function when you want to perform a side effect, like logging or
 * tracking, without modifying the main value. This is useful when you need to
 * observe or record an action but want the original value to be passed to the
 * next step.
 *
 * **Example** (Logging a step in a pipeline)
 *
 * ```ts
 * import { Console, Effect, pipe } from "effect"
 *
 * // Function to apply a discount safely to a transaction amount
 * const applyDiscount = (
 *   total: number,
 *   discountRate: number
 * ): Effect.Effect<number, Error> =>
 *   discountRate === 0
 *     ? Effect.fail(new Error("Discount rate cannot be zero"))
 *     : Effect.succeed(total - (total * discountRate) / 100)
 *
 * // Simulated asynchronous task to fetch a transaction amount from database
 * const fetchTransactionAmount = Effect.promise(() => Promise.resolve(100))
 *
 * const finalAmount = pipe(
 *   fetchTransactionAmount,
 *   // Log the fetched transaction amount
 *   Effect.tap((amount) => Console.log(`Apply a discount to: ${amount}`)),
 *   // `amount` is still available!
 *   Effect.flatMap((amount) => applyDiscount(amount, 5))
 * )
 *
 * Effect.runPromise(finalAmount).then(console.log)
 * // Output:
 * // Apply a discount to: 100
 * // 95
 * ```
 *
 * @see {@link flatMap} for a version that allows you to change the value.
 *
 * @since 2.0.0
 * @category Sequencing
 */
export const tap = core.tap;
/**
 * Allows you to inspect both success and failure outcomes of an effect and
 * perform side effects for each.
 *
 * **Details**
 *
 * This function enables you to handle both success and failure cases
 * separately, without modifying the main effect's result. It is particularly
 * useful for scenarios where you need to log, monitor, or perform additional
 * actions depending on whether the effect succeeded or failed.
 *
 * When the effect succeeds, the `onSuccess` handler is executed with the
 * success value. When the effect fails, the `onFailure` handler is executed
 * with the failure value. Both handlers can include side effects such as
 * logging or analytics, and neither modifies the original effect's output.
 *
 * If either the success or failure handler fails, the overall effect will also
 * fail.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Random, Console } from "effect"
 *
 * // Simulate a task that might fail
 * const task = Effect.filterOrFail(
 *   Random.nextRange(-1, 1),
 *   (n) => n >= 0,
 *   () => "random number is negative"
 * )
 *
 * // Use tapBoth to log both success and failure outcomes
 * const tapping = Effect.tapBoth(task, {
 *   onFailure: (error) => Console.log(`failure: ${error}`),
 *   onSuccess: (randomNumber) =>
 *     Console.log(`random number: ${randomNumber}`)
 * })
 *
 * Effect.runFork(tapping)
 * // Example Output:
 * // failure: random number is negative
 * ```
 *
 * @since 2.0.0
 * @category Sequencing
 */
export const tapBoth = effect.tapBoth;
/**
 * Inspect severe errors or defects (non-recoverable failures) in an effect.
 *
 * **Details**
 *
 * This function is specifically designed to handle and inspect defects, which
 * are critical failures in your program, such as unexpected runtime exceptions
 * or system-level errors. Unlike normal recoverable errors, defects typically
 * indicate serious issues that cannot be addressed through standard error
 * handling.
 *
 * When a defect occurs in an effect, the function you provide to this function
 * will be executed, allowing you to log, monitor, or handle the defect in some
 * way. Importantly, this does not alter the main result of the effect. If no
 * defect occurs, the effect behaves as if this function was not used.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * // Simulate a task that fails with a recoverable error
 * const task1: Effect.Effect<number, string> = Effect.fail("NetworkError")
 *
 * // tapDefect won't log anything because NetworkError is not a defect
 * const tapping1 = Effect.tapDefect(task1, (cause) =>
 *   Console.log(`defect: ${cause}`)
 * )
 *
 * Effect.runFork(tapping1)
 * // No Output
 *
 * // Simulate a severe failure in the system
 * const task2: Effect.Effect<number, string> = Effect.dieMessage(
 *   "Something went wrong"
 * )
 *
 * // Log the defect using tapDefect
 * const tapping2 = Effect.tapDefect(task2, (cause) =>
 *   Console.log(`defect: ${cause}`)
 * )
 *
 * Effect.runFork(tapping2)
 * // Output:
 * // defect: RuntimeException: Something went wrong
 * //   ... stack trace ...
 * ```
 *
 * @since 2.0.0
 * @category Sequencing
 */
export const tapDefect = effect.tapDefect;
/**
 * Execute a side effect on failure without modifying the original effect.
 *
 * **Details**
 *
 * This function allows you to inspect and react to the failure of an effect by
 * executing an additional effect. The failure value is passed to the provided
 * function, enabling you to log it, track it, or perform any other operation.
 * Importantly, the original failure remains intact and is re-propagated, so the
 * effect's behavior is unchanged.
 *
 * The side effect you provide is only executed when the effect fails. If the
 * effect succeeds, the function is ignored, and the success value is propagated
 * as usual.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * // Simulate a task that fails with an error
 * const task: Effect.Effect<number, string> = Effect.fail("NetworkError")
 *
 * // Use tapError to log the error message when the task fails
 * const tapping = Effect.tapError(task, (error) =>
 *   Console.log(`expected error: ${error}`)
 * )
 *
 * Effect.runFork(tapping)
 * // Output:
 * // expected error: NetworkError
 * ```
 *
 * @since 2.0.0
 * @category Sequencing
 */
export const tapError = effect.tapError;
/**
 * Inspect errors matching a specific tag without altering the original effect.
 *
 * **Details**
 *
 * This function allows you to inspect and handle specific error types based on
 * their `_tag` property. It is particularly useful in applications where errors
 * are modeled with tagged types (e.g., union types with discriminating tags).
 * By targeting errors with a specific `_tag`, you can log or perform actions on
 * them while leaving the error channel and overall effect unchanged.
 *
 * If the error doesn't match the specified tag, this function does nothing, and
 * the effect proceeds as usual.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * class NetworkError {
 *   readonly _tag = "NetworkError"
 *   constructor(readonly statusCode: number) {}
 * }
 *
 * class ValidationError {
 *   readonly _tag = "ValidationError"
 *   constructor(readonly field: string) {}
 * }
 *
 * // Create a task that fails with a NetworkError
 * const task: Effect.Effect<number, NetworkError | ValidationError> =
 *   Effect.fail(new NetworkError(504))
 *
 * // Use tapErrorTag to inspect only NetworkError types and log the status code
 * const tapping = Effect.tapErrorTag(task, "NetworkError", (error) =>
 *   Console.log(`expected error: ${error.statusCode}`)
 * )
 *
 * Effect.runFork(tapping)
 * // Output:
 * // expected error: 504
 * ```
 *
 * @since 2.0.0
 * @category Sequencing
 */
export const tapErrorTag = effect.tapErrorTag;
/**
 * Inspect the complete cause of an error, including failures and defects.
 *
 * **Details**
 *
 * This function provides access to the full cause of an error, including both
 * recoverable failures and irrecoverable defects. It allows you to handle, log,
 * or monitor specific error causes without modifying the result of the effect.
 * The full `Cause` object encapsulates the error and its contextual
 * information, making it useful for debugging and understanding failure
 * scenarios in complex workflows.
 *
 * The effect itself is not modified, and any errors or defects remain in the
 * error channel of the original effect.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * // Create a task that fails with a NetworkError
 * const task1: Effect.Effect<number, string> = Effect.fail("NetworkError")
 *
 * const tapping1 = Effect.tapErrorCause(task1, (cause) =>
 *   Console.log(`error cause: ${cause}`)
 * )
 *
 * Effect.runFork(tapping1)
 * // Output:
 * // error cause: Error: NetworkError
 *
 * // Simulate a severe failure in the system
 * const task2: Effect.Effect<number, string> = Effect.dieMessage(
 *   "Something went wrong"
 * )
 *
 * const tapping2 = Effect.tapErrorCause(task2, (cause) =>
 *   Console.log(`error cause: ${cause}`)
 * )
 *
 * Effect.runFork(tapping2)
 * // Output:
 * // error cause: RuntimeException: Something went wrong
 * //   ... stack trace ...
 * ```
 *
 * @since 2.0.0
 * @category Sequencing
 */
export const tapErrorCause = effect.tapErrorCause;
/**
 * Repeats an effect indefinitely until an error occurs.
 *
 * **Details**
 *
 * This function executes an effect repeatedly in an infinite loop. Each
 * iteration is executed sequentially, and the loop continues until the first
 * error occurs. If the effect succeeds, it starts over from the beginning. If
 * the effect fails, the error is propagated, and the loop stops.
 *
 * Be cautious when using this function, as it will run indefinitely unless an
 * error interrupts it. This makes it suitable for long-running processes or
 * continuous polling tasks, but you should ensure proper error handling or
 * combine it with other operators like `timeout` or `schedule` to prevent
 * unintentional infinite loops.
 *
 * @since 2.0.0
 * @category Repetition / Recursion
 */
export const forever = effect.forever;
/**
 * Repeatedly updates a state through an effectful operation until a condition
 * is no longer met.
 *
 * **Details**
 *
 * This function provides a way to implement effectful loops, similar to a
 * `while` loop in JavaScript.
 *
 * ```ts skip-type-checking
 * let result = initial
 *
 * while (options.while(result)) {
 *   result = options.body(result)
 * }
 *
 * return result
 * ```
 *
 * It starts with an initial state, checks a
 * condition (`while`), and executes a body operation to update the state if the
 * condition evaluates to `true`. The process repeats until the condition
 * returns `false`.
 *
 * The state is passed between iterations, allowing the body operation to modify
 * it dynamically. The final state after the loop ends is returned as the result
 * of the effect.
 *
 * **When to Use**
 *
 * This is particularly useful for scenarios where looping logic involves
 * asynchronous or side-effectful operations, such as polling or iterative
 * computations that depend on external factors.
 *
 * **Example** (Effectful Iteration)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const result = Effect.iterate(
 *   // Initial result
 *   1,
 *   {
 *     // Condition to continue iterating
 *     while: (result) => result <= 5,
 *     // Operation to change the result
 *     body: (result) => Effect.succeed(result + 1)
 *   }
 * )
 *
 * Effect.runPromise(result).then(console.log)
 * // Output: 6
 * ```
 *
 * @since 2.0.0
 * @category Looping
 */
export const iterate = effect.iterate;
/**
 * Repeatedly executes a loop with a state, collecting results or discarding
 * them based on configuration.
 *
 * **Details**
 *
 * This function performs an effectful loop, starting with an initial state and
 * iterating as long as the `while` condition evaluates to `true`, similar to a
 * `while` loop in JavaScript.
 *
 * ```ts skip-type-checking
 * let state = initial
 * const result = []
 *
 * while (options.while(state)) {
 *   result.push(options.body(state)) // Perform the effectful operation
 *   state = options.step(state) // Update the state
 * }
 *
 * return result
 * ```
 *
 * During each iteration, the `step` function updates the state, and the `body`
 * effect is executed.
 *
 * The results of the body effect can be collected in an array or discarded
 * based on the `discard` option.
 *
 * **Discarding Intermediate Results**
 *
 * - If `discard` is `false` or not provided, the intermediate results are
 *   collected into an array and returned as the final result.
 * - If `discard` is `true`, the intermediate results are ignored, and the
 *   effect returns `void`.
 *
 * **When to Use**
 *
 * This is useful for implementing loops where you need to perform effectful
 * computations repeatedly, such as processing items in a list, generating
 * values, or performing iterative updates.
 *
 * **Example** (Looping with Collected Results)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * // A loop that runs 5 times, collecting each iteration's result
 * const result = Effect.loop(
 *   // Initial state
 *   1,
 *   {
 *     // Condition to continue looping
 *     while: (state) => state <= 5,
 *     // State update function
 *     step: (state) => state + 1,
 *     // Effect to be performed on each iteration
 *     body: (state) => Effect.succeed(state)
 *   }
 * )
 *
 * Effect.runPromise(result).then(console.log)
 * // Output: [1, 2, 3, 4, 5]
 * ```
 *
 * **Example** (Loop with Discarded Results)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const result = Effect.loop(
 *   // Initial state
 *   1,
 *   {
 *     // Condition to continue looping
 *     while: (state) => state <= 5,
 *     // State update function
 *     step: (state) => state + 1,
 *     // Effect to be performed on each iteration
 *     body: (state) => Console.log(`Currently at state ${state}`),
 *     // Discard intermediate results
 *     discard: true
 *   }
 * )
 *
 * Effect.runPromise(result).then(console.log)
 * // Output:
 * // Currently at state 1
 * // Currently at state 2
 * // Currently at state 3
 * // Currently at state 4
 * // Currently at state 5
 * // undefined
 * ```
 *
 * @since 2.0.0
 * @category Looping
 */
export const loop = effect.loop;
/**
 * Repeats an effect based on a specified schedule or until the first failure.
 *
 * **Details**
 *
 * This function executes an effect repeatedly according to the given schedule.
 * Each repetition occurs after the initial execution of the effect, meaning
 * that the schedule determines the number of additional repetitions. For
 * example, using `Schedule.once` will result in the effect being executed twice
 * (once initially and once as part of the repetition).
 *
 * If the effect succeeds, it is repeated according to the schedule. If it
 * fails, the repetition stops immediately, and the failure is returned.
 *
 * The schedule can also specify delays between repetitions, making it useful
 * for tasks like retrying operations with backoff, periodic execution, or
 * performing a series of dependent actions.
 *
 * You can combine schedules for more advanced repetition logic, such as adding
 * delays, limiting recursions, or dynamically adjusting based on the outcome of
 * each execution.
 *
 * **Example** (Success Example)
 *
 * ```ts
 * import { Effect, Schedule, Console } from "effect"
 *
 * const action = Console.log("success")
 * const policy = Schedule.addDelay(Schedule.recurs(2), () => "100 millis")
 * const program = Effect.repeat(action, policy)
 *
 * Effect.runPromise(program).then((n) => console.log(`repetitions: ${n}`))
 * ```
 *
 * **Example** (Failure Example)
 *
 * ```ts
 * import { Effect, Schedule } from "effect"
 *
 * let count = 0
 *
 * // Define an async effect that simulates an action with possible failures
 * const action = Effect.async<string, string>((resume) => {
 *   if (count > 1) {
 *     console.log("failure")
 *     resume(Effect.fail("Uh oh!"))
 *   } else {
 *     count++
 *     console.log("success")
 *     resume(Effect.succeed("yay!"))
 *   }
 * })
 *
 * const policy = Schedule.addDelay(Schedule.recurs(2), () => "100 millis")
 * const program = Effect.repeat(action, policy)
 *
 * Effect.runPromiseExit(program).then(console.log)
 * ```
 *
 * @since 2.0.0
 * @category Repetition / Recursion
 */
export const repeat = schedule_.repeat_combined;
/**
 * Repeats an effect a specified number of times or until the first failure.
 *
 * **Details**
 *
 * This function executes an effect initially and then repeats it the specified
 * number of times, as long as it succeeds. For example, calling
 * `repeatN(action, 2)` will execute `action` once initially and then repeat it
 * two additional times if there are no failures.
 *
 * If the effect fails during any repetition, the failure is returned, and no
 * further repetitions are attempted.
 *
 * **When to Use**
 *
 * This function is useful for tasks that need to be retried a fixed number of
 * times or for performing repeated actions without requiring a schedule.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const action = Console.log("success")
 * const program = Effect.repeatN(action, 2)
 *
 * Effect.runPromise(program)
 * ```
 *
 * @since 2.0.0
 * @category Repetition / Recursion
 */
export const repeatN = effect.repeatN;
/**
 * Repeats an effect with a schedule, handling failures using a custom handler.
 *
 * **Details**
 *
 * This function allows you to execute an effect repeatedly based on a specified
 * schedule. If the effect fails at any point, a custom failure handler is
 * invoked. The handler is provided with both the failure value and the output
 * of the schedule at the time of failure. This enables advanced error recovery
 * or alternative fallback logic while maintaining flexibility in how
 * repetitions are handled.
 *
 * For example, using a schedule with `recurs(2)` will allow for two additional
 * repetitions after the initial execution, provided the effect succeeds. If a
 * failure occurs during any iteration, the failure handler is invoked to handle
 * the situation.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Schedule } from "effect"
 *
 * let count = 0
 *
 * // Define an async effect that simulates an action with possible failures
 * const action = Effect.async<string, string>((resume) => {
 *   if (count > 1) {
 *     console.log("failure")
 *     resume(Effect.fail("Uh oh!"))
 *   } else {
 *     count++
 *     console.log("success")
 *     resume(Effect.succeed("yay!"))
 *   }
 * })
 *
 * const policy = Schedule.addDelay(
 *   Schedule.recurs(2), // Repeat for a maximum of 2 times
 *   () => "100 millis" // Add a delay of 100 milliseconds between repetitions
 * )
 *
 * const program = Effect.repeatOrElse(action, policy, () =>
 *   Effect.sync(() => {
 *     console.log("orElse")
 *     return count - 1
 *   })
 * )
 *
 * Effect.runPromise(program).then((n) => console.log(`repetitions: ${n}`))
 * ```
 *
 * @since 2.0.0
 * @category Repetition / Recursion
 */
export const repeatOrElse = schedule_.repeatOrElse_Effect;
/**
 * Repeats an effect based on a specified schedule.
 *
 * **Details**
 *
 * This function allows you to execute an effect repeatedly according to a given
 * schedule. The schedule determines the timing and number of repetitions. Each
 * repetition can also depend on the decision of the schedule, providing
 * flexibility for complex workflows. This function does not modify the effect's
 * success or failure; it only controls its repetition.
 *
 * For example, you can use a schedule that recurs a specific number of times,
 * adds delays between repetitions, or customizes repetition behavior based on
 * external inputs. The effect runs initially and is repeated according to the
 * schedule.
 *
 * @see {@link scheduleFrom} for a variant that allows the schedule's decision
 * to depend on the result of this effect.
 *
 * @since 2.0.0
 * @category Repetition / Recursion
 */
export const schedule = schedule_.schedule_Effect;
/**
 * Runs an effect repeatedly on a new fiber according to a given schedule.
 *
 * **Details**
 *
 * This function starts the provided effect on a new fiber and runs it
 * repeatedly based on the specified schedule. The repetitions are managed by
 * the schedule's rules, which define the timing and number of iterations. The
 * fiber is attached to the current scope, meaning it is automatically managed
 * and cleaned up when the scope is closed.
 *
 * The function returns a `RuntimeFiber` that allows you to monitor or interact
 * with the running fiber.
 *
 * **When to Use**
 *
 * This is particularly useful for concurrent execution of scheduled tasks or
 * when you want to continue processing without waiting for the repetitions to
 * complete.
 *
 * @since 2.0.0
 * @category Repetition / Recursion
 */
export const scheduleForked = schedule_.scheduleForked;
/**
 * Runs an effect repeatedly according to a schedule, starting from a specified
 * input value.
 *
 * **Details**
 *
 * This function allows you to repeatedly execute an effect based on a schedule.
 * The schedule starts with the given `initial` input value, which is passed to
 * the first execution. Subsequent executions of the effect are controlled by
 * the schedule's rules, using the output of the previous iteration as the input
 * for the next one.
 *
 * The returned effect will complete when the schedule ends or the effect fails,
 * propagating the error.
 *
 * @since 2.0.0
 * @category Repetition / Recursion
 */
export const scheduleFrom = schedule_.scheduleFrom_Effect;
/**
 * @since 2.0.0
 * @category Repetition / Recursion
 */
export const whileLoop = core.whileLoop;
/**
 * Returns a collection of all `FiberRef` values for the fiber running this
 * effect.
 *
 * @since 2.0.0
 * @category Fiber Refs
 */
export const getFiberRefs = effect.fiberRefs;
/**
 * Inherits values from all `FiberRef` instances into current fiber.
 *
 * @since 2.0.0
 * @category Fiber Refs
 */
export const inheritFiberRefs = effect.inheritFiberRefs;
/**
 * @since 2.0.0
 * @category Fiber Refs
 */
export const locally = core.fiberRefLocally;
/**
 * @since 2.0.0
 * @category Fiber Refs
 */
export const locallyWith = core.fiberRefLocallyWith;
/**
 * @since 2.0.0
 * @category Fiber Refs
 */
export const locallyScoped = fiberRuntime.fiberRefLocallyScoped;
/**
 * @since 2.0.0
 * @category Fiber Refs
 */
export const locallyScopedWith = fiberRuntime.fiberRefLocallyScopedWith;
/**
 * Applies the specified changes to the `FiberRef` values for the fiber
 * running this workflow.
 *
 * @since 2.0.0
 * @category Fiber Refs
 */
export const patchFiberRefs = effect.patchFiberRefs;
/**
 * Sets the `FiberRef` values for the fiber running this effect to the values
 * in the specified collection of `FiberRef` values.
 *
 * @since 2.0.0
 * @category Fiber Refs
 */
export const setFiberRefs = effect.setFiberRefs;
/**
 * Updates the `FiberRef` values for the fiber running this effect using the
 * specified function.
 *
 * @since 2.0.0
 * @category Fiber Refs
 */
export const updateFiberRefs = effect.updateFiberRefs;
/**
 * Checks if an effect has failed.
 *
 * **Details**
 *
 * This function evaluates whether an effect has resulted in a failure. It
 * returns a boolean value wrapped in an effect, with `true` indicating the
 * effect failed and `false` otherwise.
 *
 * The resulting effect cannot fail (`never` in the error channel) but retains
 * the context of the original effect.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const failure = Effect.fail("Uh oh!")
 *
 * console.log(Effect.runSync(Effect.isFailure(failure)))
 * // Output: true
 *
 * const defect = Effect.dieMessage("BOOM!")
 *
 * Effect.runSync(Effect.isFailure(defect))
 * // throws: BOOM!
 * ```
 *
 * @since 2.0.0
 * @category Condition Checking
 */
export const isFailure = effect.isFailure;
/**
 * Checks if an effect has succeeded.
 *
 * **Details**
 *
 * This function evaluates whether an effect has resulted in a success. It
 * returns a boolean value wrapped in an effect, with `true` indicating the
 * effect succeeded and `false` otherwise.
 *
 * The resulting effect cannot fail (`never` in the error channel) but retains
 * the context of the original effect.
 *
 * @since 2.0.0
 * @category Condition Checking
 */
export const isSuccess = effect.isSuccess;
/**
 * Handles both success and failure cases of an effect without performing side
 * effects.
 *
 * **Details**
 *
 * `match` lets you define custom handlers for both success and failure
 * scenarios. You provide separate functions to handle each case, allowing you
 * to process the result if the effect succeeds, or handle the error if the
 * effect fails.
 *
 * **When to Use**
 *
 * This is useful for structuring your code to respond differently to success or
 * failure without triggering side effects.
 *
 * **Example** (Handling Both Success and Failure Cases)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const success: Effect.Effect<number, Error> = Effect.succeed(42)
 *
 * const program1 = Effect.match(success, {
 *   onFailure: (error) => `failure: ${error.message}`,
 *   onSuccess: (value) => `success: ${value}`
 * })
 *
 * // Run and log the result of the successful effect
 * Effect.runPromise(program1).then(console.log)
 * // Output: "success: 42"
 *
 * const failure: Effect.Effect<number, Error> = Effect.fail(
 *   new Error("Uh oh!")
 * )
 *
 * const program2 = Effect.match(failure, {
 *   onFailure: (error) => `failure: ${error.message}`,
 *   onSuccess: (value) => `success: ${value}`
 * })
 *
 * // Run and log the result of the failed effect
 * Effect.runPromise(program2).then(console.log)
 * // Output: "failure: Uh oh!"
 * ```
 *
 * @see {@link matchEffect} if you need to perform side effects in the handlers.
 *
 * @since 2.0.0
 * @category Matching
 */
export const match = effect.match;
/**
 * Handles failures by matching the cause of failure.
 *
 * **Details**
 *
 * The `matchCause` function allows you to handle failures with access to the
 * full cause of the failure within a fiber.
 *
 * **When to Use**
 *
 * This is useful for differentiating between different types of errors, such as
 * regular failures, defects, or interruptions. You can provide specific
 * handling logic for each failure type based on the cause.
 *
 * **Example** (Handling Different Failure Causes)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const task: Effect.Effect<number, Error> = Effect.die("Uh oh!")
 *
 * const program = Effect.matchCause(task, {
 *   onFailure: (cause) => {
 *     switch (cause._tag) {
 *       case "Fail":
 *         // Handle standard failure
 *         return `Fail: ${cause.error.message}`
 *       case "Die":
 *         // Handle defects (unexpected errors)
 *         return `Die: ${cause.defect}`
 *       case "Interrupt":
 *         // Handle interruption
 *         return `${cause.fiberId} interrupted!`
 *     }
 *     // Fallback for other causes
 *     return "failed due to other causes"
 *   },
 *   onSuccess: (value) =>
 *     // task completes successfully
 *     `succeeded with ${value} value`
 * })
 *
 * Effect.runPromise(program).then(console.log)
 * // Output: "Die: Uh oh!"
 * ```
 *
 * @see {@link matchCauseEffect} if you need to perform side effects in the
 * handlers.
 * @see {@link match} if you don't need to handle the cause of the failure.
 *
 * @since 2.0.0
 * @category Matching
 */
export const matchCause = core.matchCause;
/**
 * Handles failures with access to the cause and allows performing side effects.
 *
 * **Details**
 *
 * The `matchCauseEffect` function works similarly to {@link matchCause}, but it
 * also allows you to perform additional side effects based on the failure
 * cause. This function provides access to the complete cause of the failure,
 * making it possible to differentiate between various failure types, and allows
 * you to respond accordingly while performing side effects (like logging or
 * other operations).
 *
 * **Example** (Handling Different Failure Causes with Side Effects)
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const task: Effect.Effect<number, Error> = Effect.die("Uh oh!")
 *
 * const program = Effect.matchCauseEffect(task, {
 *   onFailure: (cause) => {
 *     switch (cause._tag) {
 *       case "Fail":
 *         // Handle standard failure with a logged message
 *         return Console.log(`Fail: ${cause.error.message}`)
 *       case "Die":
 *         // Handle defects (unexpected errors) by logging the defect
 *         return Console.log(`Die: ${cause.defect}`)
 *       case "Interrupt":
 *         // Handle interruption and log the fiberId that was interrupted
 *         return Console.log(`${cause.fiberId} interrupted!`)
 *     }
 *     // Fallback for other causes
 *     return Console.log("failed due to other causes")
 *   },
 *   onSuccess: (value) =>
 *     // Log success if the task completes successfully
 *     Console.log(`succeeded with ${value} value`)
 * })
 *
 * Effect.runPromise(program)
 * // Output: "Die: Uh oh!"
 * ```
 *
 * @see {@link matchCause} if you don't need side effects and only want to handle the result or failure.
 * @see {@link matchEffect} if you don't need to handle the cause of the failure.
 *
 * @since 2.0.0
 * @category Matching
 */
export const matchCauseEffect = core.matchCauseEffect;
/**
 * Handles both success and failure cases of an effect, allowing for additional
 * side effects.
 *
 * **Details**
 *
 * The `matchEffect` function is similar to {@link match}, but it enables you to
 * perform side effects in the handlers for both success and failure outcomes.
 *
 * **When to Use**
 *
 * This is useful when you need to execute additional actions, like logging or
 * notifying users, based on whether an effect succeeds or fails.
 *
 * **Example** (Handling Both Success and Failure Cases with Side Effects)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const success: Effect.Effect<number, Error> = Effect.succeed(42)
 * const failure: Effect.Effect<number, Error> = Effect.fail(
 *   new Error("Uh oh!")
 * )
 *
 * const program1 = Effect.matchEffect(success, {
 *   onFailure: (error) =>
 *     Effect.succeed(`failure: ${error.message}`).pipe(
 *       Effect.tap(Effect.log)
 *     ),
 *   onSuccess: (value) =>
 *     Effect.succeed(`success: ${value}`).pipe(Effect.tap(Effect.log))
 * })
 *
 * console.log(Effect.runSync(program1))
 * // Output:
 * // timestamp=... level=INFO fiber=#0 message="success: 42"
 * // success: 42
 *
 * const program2 = Effect.matchEffect(failure, {
 *   onFailure: (error) =>
 *     Effect.succeed(`failure: ${error.message}`).pipe(
 *       Effect.tap(Effect.log)
 *     ),
 *   onSuccess: (value) =>
 *     Effect.succeed(`success: ${value}`).pipe(Effect.tap(Effect.log))
 * })
 *
 * console.log(Effect.runSync(program2))
 * // Output:
 * // timestamp=... level=INFO fiber=#1 message="failure: Uh oh!"
 * // failure: Uh oh!
 * ```
 *
 * @see {@link match} if you don't need side effects and only want to handle the
 * result or failure.
 *
 * @since 2.0.0
 * @category Matching
 */
export const matchEffect = core.matchEffect;
/**
 * Logs one or more messages or error causes at the current log level.
 *
 * **Details**
 *
 * This function provides a simple way to log messages or error causes during
 * the execution of your effects. By default, logs are recorded at the `INFO`
 * level, but this can be adjusted using other logging utilities
 * (`Logger.withMinimumLogLevel`). Multiple items, including `Cause` instances,
 * can be logged in a single call. When logging `Cause` instances, detailed
 * error information is included in the log output.
 *
 * The log output includes useful metadata like the current timestamp, log
 * level, and fiber ID, making it suitable for debugging and tracking purposes.
 * This function does not interrupt or alter the effect's execution flow.
 *
 * **Example**
 *
 * ```ts
 * import { Cause, Effect } from "effect"
 *
 * const program = Effect.log(
 *   "message1",
 *   "message2",
 *   Cause.die("Oh no!"),
 *   Cause.die("Oh uh!")
 * )
 *
 * Effect.runFork(program)
 * // Output:
 * // timestamp=... level=INFO fiber=#0 message=message1 message=message2 cause="Error: Oh no!
 * // Error: Oh uh!"
 * ```
 *
 * @since 2.0.0
 * @category Logging
 */
export const log = effect.log;
/**
 * Logs messages or error causes at a specified log level.
 *
 * **Details**
 *
 * This function allows you to log one or more messages or error causes while
 * specifying the desired log level (e.g., DEBUG, INFO, ERROR). It provides
 * flexibility in categorizing logs based on their importance or severity,
 * making it easier to filter logs during debugging or production monitoring.
 *
 * **Example**
 *
 * ```ts
 * import { Cause, Effect, LogLevel } from "effect"
 *
 * const program = Effect.logWithLevel(
 *   LogLevel.Error,
 *   "Critical error encountered",
 *   Cause.die("System failure!")
 * )
 *
 * Effect.runFork(program)
 * // Output:
 * // timestamp=... level=ERROR fiber=#0 message=Critical error encountered cause="Error: System failure!"
 * ```
 *
 * @since 2.0.0
 * @category Logging
 */
export const logWithLevel = (level, ...message) => effect.logWithLevel(level)(...message);
/**
 * Logs messages at the TRACE log level.
 *
 * **Details**
 *
 * This function logs the specified messages at the TRACE level. TRACE logs are
 * typically used for very detailed diagnostic information. These messages are
 * not displayed by default. To view them, you must adjust the logging
 * configuration by setting the minimum log level to `LogLevel.Trace` using
 * `Logger.withMinimumLogLevel`.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Logger, LogLevel } from "effect"
 *
 * const program = Effect.logTrace("message1").pipe(Logger.withMinimumLogLevel(LogLevel.Trace))
 *
 * Effect.runFork(program)
 * // timestamp=... level=TRACE fiber=#0 message=message1
 * ```
 *
 * @since 2.0.0
 * @category Logging
 */
export const logTrace = effect.logTrace;
/**
 * Logs messages at the DEBUG log level.
 *
 * **Details**
 *
 * This function logs messages at the DEBUG level, which is typically used for
 * diagnosing application behavior during development. DEBUG messages provide
 * less detailed information than TRACE logs but are still not shown by default.
 * To view these logs, adjust the log level using `Logger.withMinimumLogLevel`.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Logger, LogLevel } from "effect"
 *
 * const program = Effect.logDebug("message1").pipe(Logger.withMinimumLogLevel(LogLevel.Debug))
 *
 * Effect.runFork(program)
 * // timestamp=... level=DEBUG fiber=#0 message=message1
 * ```
 *
 * @since 2.0.0
 * @category Logging
 */
export const logDebug = effect.logDebug;
/**
 * Logs messages at the INFO log level.
 *
 * **Details**
 *
 * This function logs messages at the INFO level, suitable for general
 * application events or operational messages. INFO logs are shown by default
 * and are commonly used for highlighting normal, non-error operations.
 *
 * @since 2.0.0
 * @category Logging
 */
export const logInfo = effect.logInfo;
/**
 * Logs messages at the WARNING log level.
 *
 * **Details**
 *
 * This function logs messages at the WARNING level, suitable for highlighting
 * potential issues that are not errors but may require attention. These
 * messages indicate that something unexpected occurred or might lead to errors
 * in the future.
 *
 * @since 2.0.0
 * @category Logging
 */
export const logWarning = effect.logWarning;
/**
 * Logs messages at the ERROR log level.
 *
 * **Details**
 *
 * This function logs messages at the ERROR level, suitable for reporting
 * application errors or failures. These logs are typically used for unexpected
 * issues that need immediate attention.
 *
 * @since 2.0.0
 * @category Logging
 */
export const logError = effect.logError;
/**
 * Logs messages at the FATAL log level.
 *
 * **Details**
 *
 * This function logs messages at the FATAL level, suitable for reporting
 * critical errors that cause the application to terminate or stop functioning.
 * These logs are typically used for unrecoverable errors that require immediate
 * attention.
 *
 * @since 2.0.0
 * @category Logging
 */
export const logFatal = effect.logFatal;
/**
 * Adds a log span to an effect for tracking and logging its execution duration.
 *
 * **Details**
 *
 * This function wraps an effect with a log span, providing performance
 * monitoring and debugging capabilities. The log span tracks the duration of
 * the wrapped effect and logs it with the specified label. This is particularly
 * useful when analyzing time-sensitive operations or understanding the
 * execution time of specific tasks in your application.
 *
 * The logged output will include the label and the total time taken for the
 * operation. The span information is included in the log metadata, making it
 * easy to trace performance metrics in logs.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.sleep("1 second")
 *   yield* Effect.log("The job is finished!")
 * }).pipe(Effect.withLogSpan("myspan"))
 *
 * Effect.runFork(program)
 * // timestamp=... level=INFO fiber=#0 message="The job is finished!" myspan=1011ms
 * ```
 *
 * @since 2.0.0
 * @category Logging
 */
export const withLogSpan = effect.withLogSpan;
/**
 * Adds custom annotations to log entries generated within an effect.
 *
 * **Details**
 *
 * This function allows you to enhance log messages by appending additional
 * context in the form of key-value pairs. These annotations are included in
 * every log message created during the execution of the effect, making the logs
 * more informative and easier to trace.
 *
 * The annotations can be specified as a single key-value pair or as a record of
 * multiple key-value pairs. This is particularly useful for tracking
 * operations, debugging, or associating specific metadata with logs for better
 * observability.
 *
 * The annotated key-value pairs will appear alongside the log message in the
 * output.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.log("message1")
 *   yield* Effect.log("message2")
 * }).pipe(Effect.annotateLogs("taskId", "1234")) // Annotation as key/value pair
 *
 * Effect.runFork(program)
 * // timestamp=... level=INFO fiber=#0 message=message1 taskId=1234
 * // timestamp=... level=INFO fiber=#0 message=message2 taskId=1234
 * ```
 *
 * @see {@link annotateLogsScoped} to add log annotations with a limited scope.
 *
 * @since 2.0.0
 * @category Logging
 */
export const annotateLogs = effect.annotateLogs;
/**
 * Adds log annotations with a limited scope to enhance contextual logging.
 *
 * **Details**
 *
 * This function allows you to apply key-value annotations to log entries
 * generated within a specific scope of your effect computations. The
 * annotations are restricted to the defined `Scope`, ensuring that they are
 * only applied to logs produced during that scope. Once the scope ends, the
 * annotations are automatically removed, making it easier to manage
 * context-specific logging without affecting other parts of your application.
 *
 * The annotations can be provided as a single key-value pair or as a record of
 * multiple key-value pairs. This flexibility enables fine-grained control over
 * the additional metadata included in logs for specific tasks or operations.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   yield* Effect.log("no annotations")
 *   yield* Effect.annotateLogsScoped({ key: "value" })
 *   yield* Effect.log("message1") // Annotation is applied to this log
 *   yield* Effect.log("message2") // Annotation is applied to this log
 * }).pipe(Effect.scoped, Effect.andThen(Effect.log("no annotations again")))
 *
 * Effect.runFork(program)
 * // timestamp=... level=INFO fiber=#0 message="no annotations"
 * // timestamp=... level=INFO fiber=#0 message=message1 key=value
 * // timestamp=... level=INFO fiber=#0 message=message2 key=value
 * // timestamp=... level=INFO fiber=#0 message="no annotations again"
 * ```
 *
 * @see {@link annotateLogs} to add custom annotations to log entries generated within an effect.
 *
 * @since 3.1.0
 * @category Logging
 */
export const annotateLogsScoped = fiberRuntime.annotateLogsScoped;
/**
 * Retrieves the current log annotations for the current scope.
 *
 * **Details**
 *
 * This function provides access to the log annotations associated with the
 * current scope. Log annotations are key-value pairs that provide additional
 * context to log entries. They are often used to add metadata such as tags,
 * identifiers, or extra debugging information to logs.
 *
 * By using this function, you can inspect or utilize the annotations applied to
 * the current scope, making it easier to trace and debug specific sections of
 * your application.
 *
 * @see {@link annotateLogs} to add custom annotations to log entries generated within an effect.
 * @see {@link annotateLogsScoped} to add log annotations with a limited scope.
 *
 * @since 2.0.0
 * @category Logging
 */
export const logAnnotations = effect.logAnnotations;
/**
 * Configures whether child fibers will log unhandled errors and at what log
 * level.
 *
 * **Details**
 *
 * This function allows you to control whether unhandled errors from child
 * fibers are logged and to specify the log level for these errors. By default,
 * unhandled errors are reported via the logger. However, using this function,
 * you can choose to suppress these logs by passing `Option.none` or adjust the
 * log level to a specific severity, such as `Error`, `Warning`, or `Info`.
 *
 * This configuration is scoped to the effect it is applied to, meaning the
 * changes only apply to the child fibers created within that effect's context.
 * It is especially useful when you want to reduce noise in logs or prioritize
 * certain types of errors.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Fiber, LogLevel, Option } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   const fiber = yield* Effect.fork(Effect.fail("Unhandled error!"))
 *   yield* Fiber.join(fiber)
 * })
 *
 * Effect.runFork(program.pipe(Effect.withUnhandledErrorLogLevel(Option.some(LogLevel.Error))))
 * // Output:
 * // timestamp=... level=ERROR fiber=#1 message="Fiber terminated with an unhandled error" cause="Error: Unhandled error!"
 * ```
 *
 * @since 2.0.0
 * @category Logging
 */
export const withUnhandledErrorLogLevel = core.withUnhandledErrorLogLevel;
/**
 * Conditionally executes an effect based on the specified log level and currently enabled log level.
 *
 * **Details**
 *
 * This function runs the provided effect only if the specified log level is
 * enabled. If the log level is enabled, the effect is executed and its result
 * is wrapped in `Some`. If the log level is not enabled, the effect is not
 * executed and `None` is returned.
 *
 * This function is useful for conditionally executing logging-related effects
 * or other operations that depend on the current log level configuration.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Logger, LogLevel } from "effect"
 *
 * const program = Effect.gen(function* () {
 *   yield* Effect.whenLogLevel(Effect.logTrace("message1"), LogLevel.Trace); // returns `None`
 *   yield* Effect.whenLogLevel(Effect.logDebug("message2"), LogLevel.Debug); // returns `Some`
 * }).pipe(Logger.withMinimumLogLevel(LogLevel.Debug));
 *
 * Effect.runFork(program)
 * // timestamp=... level=DEBUG fiber=#0 message=message2
 * ```
 *
 * @see {@link FiberRef.currentMinimumLogLevel} to retrieve the current minimum log level.
 *
 * @since 3.13.0
 * @category Logging
 */
export const whenLogLevel = fiberRuntime.whenLogLevel;
/**
 * Converts an effect's failure into a fiber termination, removing the error
 * from the effect's type.
 *
 * **Details**
 *
 * The `orDie` function is used when you encounter errors that you do not want
 * to handle or recover from. It removes the error type from the effect and
 * ensures that any failure will terminate the fiber. This is useful for
 * propagating failures as defects, signaling that they should not be handled
 * within the effect.
 *
 * **When to Use*
 *
 * Use `orDie` when failures should be treated as unrecoverable defects and no
 * error handling is required.
 *
 * **Example** (Propagating an Error as a Defect)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const divide = (a: number, b: number) =>
 *   b === 0
 *     ? Effect.fail(new Error("Cannot divide by zero"))
 *     : Effect.succeed(a / b)
 *
 * //      ┌─── Effect<number, never, never>
 * //      ▼
 * const program = Effect.orDie(divide(1, 0))
 *
 * Effect.runPromise(program).catch(console.error)
 * // Output:
 * // (FiberFailure) Error: Cannot divide by zero
 * //   ...stack trace...
 * ```
 *
 * @see {@link orDieWith} if you need to customize the error.
 *
 * @since 2.0.0
 * @category Converting Failures to Defects
 */
export const orDie = core.orDie;
/**
 * Converts an effect's failure into a fiber termination with a custom error.
 *
 * **Details**
 *
 * The `orDieWith` function behaves like {@link orDie}, but it allows you to provide a mapping
 * function to transform the error before terminating the fiber. This is useful for cases where
 * you want to include a more detailed or user-friendly error when the failure is propagated
 * as a defect.
 *
 * **When to Use**
 *
 * Use `orDieWith` when failures should terminate the fiber as defects, and you want to customize
 * the error for clarity or debugging purposes.
 *
 * **Example** (Customizing Defect)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const divide = (a: number, b: number) =>
 *   b === 0
 *     ? Effect.fail(new Error("Cannot divide by zero"))
 *     : Effect.succeed(a / b)
 *
 * //      ┌─── Effect<number, never, never>
 * //      ▼
 * const program = Effect.orDieWith(
 *   divide(1, 0),
 *   (error) => new Error(`defect: ${error.message}`)
 * )
 *
 * Effect.runPromise(program).catch(console.error)
 * // Output:
 * // (FiberFailure) Error: defect: Cannot divide by zero
 * //   ...stack trace...
 * ```
 *
 * @see {@link orDie} if you don't need to customize the error.
 *
 * @since 2.0.0
 * @category Converting Failures to Defects
 */
export const orDieWith = core.orDieWith;
/**
 * Attempts one effect, and if it fails, falls back to another effect.
 *
 * **Details**
 *
 * This function allows you to try executing an effect, and if it fails
 * (produces an error), a fallback effect is executed instead. The fallback
 * effect is defined as a lazy argument, meaning it will only be evaluated if
 * the first effect fails. This provides a way to recover from errors by
 * specifying an alternative path of execution.
 *
 * The error type of the resulting effect will be that of the fallback effect,
 * as the first effect's error is replaced when the fallback is executed.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const success = Effect.succeed("success")
 * const failure = Effect.fail("failure")
 * const fallback = Effect.succeed("fallback")
 *
 * // Try the success effect first, fallback is not used
 * const program1 = Effect.orElse(success, () => fallback)
 * console.log(Effect.runSync(program1))
 * // Output: "success"
 *
 * // Try the failure effect first, fallback is used
 * const program2 = Effect.orElse(failure, () => fallback)
 * console.log(Effect.runSync(program2))
 * // Output: "fallback"
 * ```
 *
 * @see {@link catchAll} if you need to access the error in the fallback effect.
 *
 * @since 2.0.0
 * @category Fallback
 */
export const orElse = core.orElse;
/**
 * Replaces the failure of an effect with a custom failure value.
 *
 * **Details**
 *
 * This function allows you to handle the failure of an effect by replacing it
 * with a predefined failure value. If the effect fails, the new failure value
 * provided by the `evaluate` function will be returned instead of the original
 * failure. If the effect succeeds, the original success value is returned
 * unchanged.
 *
 * **When to Use**
 *
 * This is particularly useful when you want to standardize error handling or
 * provide a consistent failure value for specific operations. It simplifies
 * error management by ensuring that all failures are replaced with a controlled
 * alternative.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const validate = (age: number): Effect.Effect<number, string> => {
 *   if (age < 0) {
 *     return Effect.fail("NegativeAgeError")
 *   } else if (age < 18) {
 *     return Effect.fail("IllegalAgeError")
 *   } else {
 *     return Effect.succeed(age)
 *   }
 * }
 *
 * const program = Effect.orElseFail(validate(-1), () => "invalid age")
 *
 * console.log(Effect.runSyncExit(program))
 * // Output:
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: { _id: 'Cause', _tag: 'Fail', failure: 'invalid age' }
 * // }
 * ```
 *
 * @see {@link mapError} if you need to access the error to transform it.
 *
 * @since 2.0.0
 * @category Fallback
 */
export const orElseFail = effect.orElseFail;
/**
 * Ensures the effect always succeeds by replacing failures with a default
 * success value.
 *
 * **Details**
 *
 * This function transforms an effect that may fail into one that cannot fail by
 * replacing any failure with a provided success value. If the original effect
 * fails, the failure is "swallowed," and the specified success value is
 * returned instead. If the original effect succeeds, its value remains
 * unchanged.
 *
 * **When to Use**
 *
 * This is especially useful for providing default values in case of failure,
 * ensuring that an effect always completes successfully. By using this
 * function, you can avoid the need for complex error handling and guarantee a
 * fallback result.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const validate = (age: number): Effect.Effect<number, string> => {
 *   if (age < 0) {
 *     return Effect.fail("NegativeAgeError")
 *   } else if (age < 18) {
 *     return Effect.fail("IllegalAgeError")
 *   } else {
 *     return Effect.succeed(age)
 *   }
 * }
 *
 * const program = Effect.orElseSucceed(validate(-1), () => 18)
 *
 * console.log(Effect.runSyncExit(program))
 * // Output:
 * // { _id: 'Exit', _tag: 'Success', value: 18 }
 * ```
 *
 * @since 2.0.0
 * @category Fallback
 */
export const orElseSucceed = effect.orElseSucceed;
/**
 * Runs a sequence of effects and returns the result of the first successful
 * one.
 *
 * **Details**
 *
 * This function allows you to execute a collection of effects in sequence,
 * stopping at the first success. If an effect succeeds, its result is
 * immediately returned, and no further effects in the sequence are executed.
 * However, if all the effects fail, the function will return the error of the
 * last effect.
 *
 * The execution is sequential, meaning that effects are evaluated one at a time
 * in the order they are provided. This ensures predictable behavior and avoids
 * unnecessary computations.
 *
 * If the collection of effects is empty, an `IllegalArgumentException` is
 * thrown, indicating that the operation is invalid without any effects to try.
 *
 * **When to Use**
 *
 * This is particularly useful when you have multiple fallback strategies or
 * alternative sources to obtain a result, such as attempting multiple APIs,
 * retrieving configurations, or accessing resources in a prioritized manner.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * interface Config {
 *   host: string
 *   port: number
 *   apiKey: string
 * }
 *
 * // Create a configuration object with sample values
 * const makeConfig = (name: string): Config => ({
 *   host: `${name}.example.com`,
 *   port: 8080,
 *   apiKey: "12345-abcde"
 * })
 *
 * // Simulate retrieving configuration from a remote node
 * const remoteConfig = (name: string): Effect.Effect<Config, Error> =>
 *   Effect.gen(function* () {
 *     // Simulate node3 being the only one with available config
 *     if (name === "node3") {
 *       yield* Console.log(`Config for ${name} found`)
 *       return makeConfig(name)
 *     } else {
 *       yield* Console.log(`Unavailable config for ${name}`)
 *       return yield* Effect.fail(new Error(`Config not found for ${name}`))
 *     }
 *   })
 *
 * // Define the master configuration and potential fallback nodes
 * const masterConfig = remoteConfig("master")
 * const nodeConfigs = ["node1", "node2", "node3", "node4"].map(remoteConfig)
 *
 * // Attempt to find a working configuration,
 * // starting with the master and then falling back to other nodes
 * const config = Effect.firstSuccessOf([masterConfig, ...nodeConfigs])
 *
 * // Run the effect to retrieve the configuration
 * const result = Effect.runSync(config)
 *
 * console.log(result)
 * // Output:
 * // Unavailable config for master
 * // Unavailable config for node1
 * // Unavailable config for node2
 * // Config for node3 found
 * // { host: 'node3.example.com', port: 8080, apiKey: '12345-abcde' }
 * ```
 *
 * @since 2.0.0
 * @category Fallback
 */
export const firstSuccessOf = effect.firstSuccessOf;
/**
 * Retrieves the `Random` service from the context.
 *
 * @since 2.0.0
 * @category Random
 */
export const random = effect.random;
/**
 * Retrieves the `Random` service from the context and uses it to run the
 * specified effect.
 *
 * @since 2.0.0
 * @category Random
 */
export const randomWith = defaultServices.randomWith;
/**
 * Executes the specified effect with the specified implementation of the
 * `Random` service.
 *
 * @since 2.0.0
 * @category Random
 */
export const withRandom = defaultServices.withRandom;
/**
 * Executes the specified effect with a `Random` service that cycles through
 * a provided array of values.
 *
 * @example
 * ```ts
 * import { Effect, Random } from "effect"
 *
 * Effect.gen(function*() {
 *   console.log(yield* Random.next) // 0.2
 *   console.log(yield* Random.next) // 0.5
 *   console.log(yield* Random.next) // 0.8
 * }).pipe(Effect.withRandomFixed([0.2, 0.5, 0.8]))
 * ```
 *
 * @since 3.11.0
 * @category Random
 */
export const withRandomFixed = /*#__PURE__*/dual(2, (effect, values) => withRandom(effect, Random.fixed(values)));
/**
 * Sets the implementation of the `Random` service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 * @category Random
 */
export const withRandomScoped = fiberRuntime.withRandomScoped;
/**
 * Returns an effect that accesses the runtime, which can be used to (unsafely)
 * execute tasks.
 *
 * **When to Use**
 *
 * This is useful for integration with legacy code that must call back into
 * Effect code.
 *
 * @since 2.0.0
 * @category Runtime
 */
export const runtime = runtime_.runtime;
/**
 * Retrieves an effect that succeeds with the current runtime flags, which
 * govern behavior and features of the runtime system.
 *
 * @since 2.0.0
 * @category Runtime
 */
export const getRuntimeFlags = core.runtimeFlags;
/**
 * @since 2.0.0
 * @category Runtime
 */
export const patchRuntimeFlags = core.updateRuntimeFlags;
/**
 * @since 2.0.0
 * @category Runtime
 */
export const withRuntimeFlagsPatch = core.withRuntimeFlags;
/**
 * @since 2.0.0
 * @category Runtime
 */
export const withRuntimeFlagsPatchScoped = fiberRuntime.withRuntimeFlagsScoped;
/**
 * Tags each metric in an effect with specific key-value pairs.
 *
 * **Details**
 *
 * This function allows you to tag all metrics in an effect with a set of
 * key-value pairs or a single key-value pair. Tags help you add metadata to
 * metrics, making it easier to filter and categorize them in monitoring
 * systems. The provided tags will apply to all metrics generated within the
 * effect's scope.
 *
 * @since 2.0.0
 * @category Metrics
 */
export const tagMetrics = effect.tagMetrics;
/**
 * Adds labels to metrics within an effect using `MetricLabel` objects.
 *
 * **Details**
 *
 * This function allows you to label metrics using `MetricLabel` objects. Labels
 * help add structured metadata to metrics for categorization and filtering in
 * monitoring systems. The provided labels will apply to all metrics within the
 * effect's execution.
 *
 * @since 2.0.0
 * @category Metrics
 */
export const labelMetrics = effect.labelMetrics;
/**
 * Tags metrics within a scope with a specific key-value pair.
 *
 * **Details**
 *
 * This function tags all metrics within a scope with the provided key-value
 * pair. Once the scope is closed, the tag is automatically removed. This is
 * useful for applying temporary context-specific tags to metrics during scoped
 * operations.
 *
 * @since 2.0.0
 * @category Metrics
 */
export const tagMetricsScoped = fiberRuntime.tagMetricsScoped;
/**
 * Adds labels to metrics within a scope using `MetricLabel` objects.
 *
 * **Details**
 *
 * This function allows you to apply labels to all metrics generated within a
 * specific scope using an array of `MetricLabel` objects. These labels provide
 * additional metadata to metrics, which can be used for categorization,
 * filtering, or monitoring purposes. The labels are scoped and will be removed
 * automatically once the scope is closed, ensuring they are only applied
 * temporarily within the defined context.
 *
 * @since 2.0.0
 * @category Metrics
 */
export const labelMetricsScoped = fiberRuntime.labelMetricsScoped;
/**
 * Retrieves the metric labels associated with the current scope.
 *
 * @since 2.0.0
 * @category Metrics
 */
export const metricLabels = core.metricLabels;
/**
 * Associates a metric with the current effect, updating it as the effect progresses.
 *
 * @since 2.0.0
 * @category Metrics
 */
export const withMetric = effect.withMetric;
/**
 * Unsafely creates a new Semaphore.
 *
 * @since 2.0.0
 * @category Semaphore
 */
export const unsafeMakeSemaphore = circular.unsafeMakeSemaphore;
/**
 * Creates a new semaphore with the specified number of permits.
 *
 * **Details**
 *
 * This function initializes a semaphore that controls concurrent access to a
 * shared resource. The number of permits determines how many tasks can access
 * the resource concurrently.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * // Create a semaphore with 3 permits
 * const mutex = Effect.makeSemaphore(3)
 * ```
 *
 * @since 2.0.0
 * @category Semaphore
 */
export const makeSemaphore = circular.makeSemaphore;
/**
 * @category Latch
 * @since 3.8.0
 */
export const unsafeMakeLatch = circular.unsafeMakeLatch;
/**
 * Creates a new `Latch`, starting in the specified state.
 *
 * **Details**
 *
 * This function initializes a `Latch` safely, ensuring proper runtime
 * guarantees. By default, the latch starts in the closed state.
 *
 * **Example**
 *
 * ```ts
 * import { Console, Effect } from "effect"
 *
 * const program = Effect.gen(function*() {
 *   // Create a latch, starting in the closed state
 *   const latch = yield* Effect.makeLatch(false)
 *
 *   // Fork a fiber that logs "open sesame" when the latch is opened
 *   const fiber = yield* Console.log("open sesame").pipe(
 *     latch.whenOpen,
 *     Effect.fork
 *   )
 *
 *   yield* Effect.sleep("1 second")
 *
 *   // Open the latch
 *   yield* latch.open
 *   yield* fiber.await
 * })
 *
 * Effect.runFork(program)
 * // Output: open sesame (after 1 second)
 * ```
 *
 * @category Latch
 * @since 3.8.0
 */
export const makeLatch = circular.makeLatch;
/**
 * Runs an effect in the background, returning a fiber that can be observed or
 * interrupted.
 *
 * Unless you specifically need a `Promise` or synchronous operation, `runFork`
 * is a good default choice.
 *
 * **Details**
 *
 * This function is the foundational way to execute an effect in the background.
 * It creates a "fiber," a lightweight, cooperative thread of execution that can
 * be observed (to access its result), interrupted, or joined. Fibers are useful
 * for concurrent programming and allow effects to run independently of the main
 * program flow.
 *
 * Once the effect is running in a fiber, you can monitor its progress, cancel
 * it if necessary, or retrieve its result when it completes. If the effect
 * fails, the fiber will propagate the failure, which you can observe and
 * handle.
 *
 * **When to Use**
 *
 * Use this function when you need to run an effect in the background,
 * especially if the effect is long-running or performs periodic tasks. It's
 * suitable for tasks that need to run independently but might still need
 * observation or management, like logging, monitoring, or scheduled tasks.
 *
 * This function is ideal if you don't need the result immediately or if the
 * effect is part of a larger concurrent workflow.
 *
 * **Example** (Running an Effect in the Background)
 *
 * ```ts
 * import { Effect, Console, Schedule, Fiber } from "effect"
 *
 * //      ┌─── Effect<number, never, never>
 * //      ▼
 * const program = Effect.repeat(
 *   Console.log("running..."),
 *   Schedule.spaced("200 millis")
 * )
 *
 * //      ┌─── RuntimeFiber<number, never>
 * //      ▼
 * const fiber = Effect.runFork(program)
 *
 * setTimeout(() => {
 *   Effect.runFork(Fiber.interrupt(fiber))
 * }, 500)
 * ```
 *
 * @since 2.0.0
 * @category Running Effects
 */
export const runFork = runtime_.unsafeForkEffect;
/**
 * Executes an effect asynchronously and handles the result using a callback.
 *
 * **Details**
 *
 * This function runs an effect asynchronously and passes the result (`Exit`) to
 * a specified callback. The callback is invoked with the outcome of the effect:
 * - On success, the callback receives the successful result.
 * - On failure, the callback receives the failure information.
 *
 * **When to Use**
 *
 * This function is effectful and should only be invoked at the edges of your
 * program.
 *
 * @since 2.0.0
 * @category Running Effects
 */
export const runCallback = runtime_.unsafeRunEffect;
/**
 * Executes an effect and returns the result as a `Promise`.
 *
 * **Details**
 *
 * This function runs an effect and converts its result into a `Promise`. If the
 * effect succeeds, the `Promise` will resolve with the successful result. If
 * the effect fails, the `Promise` will reject with an error, which includes the
 * failure details of the effect.
 *
 * The optional `options` parameter allows you to pass an `AbortSignal` for
 * cancellation, enabling more fine-grained control over asynchronous tasks.
 *
 * **When to Use**
 *
 * Use this function when you need to execute an effect and work with its result
 * in a promise-based system, such as when integrating with third-party
 * libraries that expect `Promise` results.
 *
 * **Example** (Running a Successful Effect as a Promise)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * Effect.runPromise(Effect.succeed(1)).then(console.log)
 * // Output: 1
 * ```
 *
 * **Example** (Handling a Failing Effect as a Rejected Promise)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * Effect.runPromise(Effect.fail("my error")).catch(console.error)
 * // Output:
 * // (FiberFailure) Error: my error
 * ```
 *
 * @see {@link runPromiseExit} for a version that returns an `Exit` type instead
 * of rejecting.
 *
 * @since 2.0.0
 * @category Running Effects
 */
export const runPromise = runtime_.unsafeRunPromiseEffect;
/**
 * Runs an effect and returns a `Promise` that resolves to an `Exit`,
 * representing the outcome.
 *
 * **Details**
 *
 * This function executes an effect and resolves to an `Exit` object. The `Exit`
 * type provides detailed information about the result of the effect:
 * - If the effect succeeds, the `Exit` will be of type `Success` and include
 *   the value produced by the effect.
 * - If the effect fails, the `Exit` will be of type `Failure` and contain a
 *   `Cause` object, detailing the failure.
 *
 * Using this function allows you to examine both successful results and failure
 * cases in a unified way, while still leveraging `Promise` for handling the
 * asynchronous behavior of the effect.
 *
 * **When to Use**
 *
 * Use this function when you need to understand the outcome of an effect,
 * whether it succeeded or failed, and want to work with this result using
 * `Promise` syntax. This is particularly useful when integrating with systems
 * that rely on promises but need more detailed error handling than a simple
 * rejection.
 *
 * **Example** (Handling Results as Exit)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * // Execute a successful effect and get the Exit result as a Promise
 * Effect.runPromiseExit(Effect.succeed(1)).then(console.log)
 * // Output:
 * // {
 * //   _id: "Exit",
 * //   _tag: "Success",
 * //   value: 1
 * // }
 *
 * // Execute a failing effect and get the Exit result as a Promise
 * Effect.runPromiseExit(Effect.fail("my error")).then(console.log)
 * // Output:
 * // {
 * //   _id: "Exit",
 * //   _tag: "Failure",
 * //   cause: {
 * //     _id: "Cause",
 * //     _tag: "Fail",
 * //     failure: "my error"
 * //   }
 * // }
 * ```
 *
 * @since 2.0.0
 * @category Running Effects
 */
export const runPromiseExit = runtime_.unsafeRunPromiseExitEffect;
/**
 * Executes an effect synchronously, running it immediately and returning the
 * result.
 *
 * **Details**
 *
 * This function evaluates the provided effect synchronously, returning its
 * result directly. It is ideal for effects that do not fail or include
 * asynchronous operations. If the effect does fail or involves async tasks, it
 * will throw an error. Execution stops at the point of failure or asynchronous
 * operation, making it unsuitable for effects that require asynchronous
 * handling.
 *
 * **Important**: Attempting to run effects that involve asynchronous operations
 * or failures will result in exceptions being thrown, so use this function with
 * care for purely synchronous and error-free effects.
 *
 * **When to Use**
 *
 * Use this function when:
 * - You are sure that the effect will not fail or involve asynchronous
 *   operations.
 * - You need a direct, synchronous result from the effect.
 * - You are working within a context where asynchronous effects are not
 *   allowed.
 *
 * Avoid using this function for effects that can fail or require asynchronous
 * handling. For such cases, consider using {@link runPromise} or
 * {@link runSyncExit}.
 *
 * **Example** (Synchronous Logging)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const program = Effect.sync(() => {
 *   console.log("Hello, World!")
 *   return 1
 * })
 *
 * const result = Effect.runSync(program)
 * // Output: Hello, World!
 *
 * console.log(result)
 * // Output: 1
 * ```
 *
 * **Example** (Incorrect Usage with Failing or Async Effects)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * try {
 *   // Attempt to run an effect that fails
 *   Effect.runSync(Effect.fail("my error"))
 * } catch (e) {
 *   console.error(e)
 * }
 * // Output:
 * // (FiberFailure) Error: my error
 *
 * try {
 *   // Attempt to run an effect that involves async work
 *   Effect.runSync(Effect.promise(() => Promise.resolve(1)))
 * } catch (e) {
 *   console.error(e)
 * }
 * // Output:
 * // (FiberFailure) AsyncFiberException: Fiber #0 cannot be resolved synchronously. This is caused by using runSync on an effect that performs async work
 * ```
 *
 * @see {@link runSyncExit} for a version that returns an `Exit` type instead of
 * throwing an error.
 *
 * @since 2.0.0
 * @category Running Effects
 */
export const runSync = runtime_.unsafeRunSyncEffect;
/**
 * Runs an effect synchronously and returns the result as an `Exit` type.
 *
 * **Details**
 *
 * This function executes the provided effect synchronously and returns an `Exit`
 * type that encapsulates the outcome of the effect:
 * - If the effect succeeds, the result is wrapped in a `Success`.
 * - If the effect fails, it returns a `Failure` containing a `Cause` that explains
 *   the failure.
 *
 * If the effect involves asynchronous operations, this function will return a `Failure`
 * with a `Die` cause, indicating that it cannot resolve the effect synchronously.
 * This makes the function suitable for use only with effects that are synchronous
 * in nature.
 *
 * **When to Use**
 *
 * Use this function when:
 * - You want to handle both success and failure outcomes in a structured way using the `Exit` type.
 * - You are working with effects that are purely synchronous and do not involve asynchronous operations.
 * - You need to debug or inspect failures, including their causes, in a detailed manner.
 *
 * Avoid using this function for effects that involve asynchronous operations, as it will fail with a `Die` cause.
 *
 * **Example** (Handling Results as Exit)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * console.log(Effect.runSyncExit(Effect.succeed(1)))
 * // Output:
 * // {
 * //   _id: "Exit",
 * //   _tag: "Success",
 * //   value: 1
 * // }
 *
 * console.log(Effect.runSyncExit(Effect.fail("my error")))
 * // Output:
 * // {
 * //   _id: "Exit",
 * //   _tag: "Failure",
 * //   cause: {
 * //     _id: "Cause",
 * //     _tag: "Fail",
 * //     failure: "my error"
 * //   }
 * // }
 * ```
 *
 * **Example** (Asynchronous Operation Resulting in Die)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * console.log(Effect.runSyncExit(Effect.promise(() => Promise.resolve(1))))
 * // Output:
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: {
 * //     _id: 'Cause',
 * //     _tag: 'Die',
 * //     defect: [Fiber #0 cannot be resolved synchronously. This is caused by using runSync on an effect that performs async work] {
 * //       fiber: [FiberRuntime],
 * //       _tag: 'AsyncFiberException',
 * //       name: 'AsyncFiberException'
 * //     }
 * //   }
 * // }
 * ```
 *
 * @since 2.0.0
 * @category Running Effects
 */
export const runSyncExit = runtime_.unsafeRunSyncExitEffect;
/**
 * Combines multiple effects and accumulates both successes and failures.
 *
 * **Details**
 *
 * This function allows you to combine multiple effects, continuing through all
 * effects even if some of them fail. Unlike other functions that stop execution
 * upon encountering an error, this function collects all errors into a `Cause`.
 * The final result includes all successes and the accumulated failures.
 *
 * By default, effects are executed sequentially, but you can control
 * concurrency and batching behavior using the `options` parameter. This
 * provides flexibility in scenarios where you want to maximize performance or
 * ensure specific ordering.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Console } from "effect"
 *
 * const task1 = Console.log("task1").pipe(Effect.as(1))
 * const task2 = Effect.fail("Oh uh!").pipe(Effect.as(2))
 * const task3 = Console.log("task2").pipe(Effect.as(3))
 * const task4 = Effect.fail("Oh no!").pipe(Effect.as(4))
 *
 * const program = task1.pipe(
 *   Effect.validate(task2),
 *   Effect.validate(task3),
 *   Effect.validate(task4)
 * )
 *
 * Effect.runPromiseExit(program).then(console.log)
 * // Output:
 * // task1
 * // task2
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: {
 * //     _id: 'Cause',
 * //     _tag: 'Sequential',
 * //     left: { _id: 'Cause', _tag: 'Fail', failure: 'Oh uh!' },
 * //     right: { _id: 'Cause', _tag: 'Fail', failure: 'Oh no!' }
 * //   }
 * // }
 * ```
 *
 * @see {@link zip} for a version that stops at the first error.
 *
 * @since 2.0.0
 * @category Error Accumulation
 */
export const validate = fiberRuntime.validate;
/**
 * Sequentially combines two effects using a specified combiner function while
 * accumulating errors.
 *
 * **Details**
 *
 * This function combines two effects, `self` and `that`, into a single effect
 * by applying the provided combiner function to their results. If both effects
 * succeed, the combiner function is applied to their results to produce the
 * final value. If either effect fails, the failures are accumulated into a
 * combined `Cause`.
 *
 * By default, effects are executed sequentially. However, the execution mode
 * can be controlled using the `options` parameter to enable concurrency,
 * batching, or customized finalizer behavior.
 *
 * @since 2.0.0
 * @category Error Accumulation
 */
export const validateWith = fiberRuntime.validateWith;
/**
 * Combines two effects into a single effect, producing a tuple of their
 * results.
 *
 * **Details**
 *
 * This function combines two effects, `self` and `that`, into one. It executes
 * the first effect (`self`) and then the second effect (`that`), collecting
 * their results into a tuple. Both effects must succeed for the resulting
 * effect to succeed. If either effect fails, the entire operation fails.
 *
 * By default, the effects are executed sequentially. If the `concurrent` option
 * is set to `true`, the effects will run concurrently, potentially improving
 * performance for independent operations.
 *
 * **Example** (Combining Two Effects Sequentially)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const task1 = Effect.succeed(1).pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Effect.log("task1 done"))
 * )
 * const task2 = Effect.succeed("hello").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Effect.log("task2 done"))
 * )
 *
 * // Combine the two effects together
 * //
 * //      ┌─── Effect<[number, string], never, never>
 * //      ▼
 * const program = Effect.zip(task1, task2)
 *
 * Effect.runPromise(program).then(console.log)
 * // Output:
 * // timestamp=... level=INFO fiber=#0 message="task1 done"
 * // timestamp=... level=INFO fiber=#0 message="task2 done"
 * // [ 1, 'hello' ]
 * ```
 *
 * **Example** (Combining Two Effects Concurrently)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const task1 = Effect.succeed(1).pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Effect.log("task1 done"))
 * )
 * const task2 = Effect.succeed("hello").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Effect.log("task2 done"))
 * )
 *
 * // Run both effects concurrently using the concurrent option
 * const program = Effect.zip(task1, task2, { concurrent: true })
 *
 * Effect.runPromise(program).then(console.log)
 * // Output:
 * // timestamp=... level=INFO fiber=#0 message="task2 done"
 * // timestamp=... level=INFO fiber=#0 message="task1 done"
 * // [ 1, 'hello' ]
 * ```
 *
 * @see {@link zipWith} for a version that combines the results with a custom
 * function.
 * @see {@link validate} for a version that accumulates errors.
 *
 * @since 2.0.0
 * @category Zipping
 */
export const zip = fiberRuntime.zipOptions;
/**
 * Executes two effects sequentially, returning the result of the first effect
 * and ignoring the result of the second.
 *
 * **Details**
 *
 * This function allows you to run two effects in sequence, where the result of
 * the first effect is preserved, and the result of the second effect is
 * discarded. By default, the two effects are executed sequentially. If you need
 * them to run concurrently, you can pass the `{ concurrent: true }` option.
 *
 * The second effect will always be executed, even though its result is ignored.
 * This makes it useful for cases where you want to execute an effect for its
 * side effects while keeping the result of another effect.
 *
 * **When to Use**
 *
 * Use this function when you are only interested in the result of the first
 * effect but still need to run the second effect for its side effects, such as
 * logging or performing a cleanup action.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const task1 = Effect.succeed(1).pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Effect.log("task1 done"))
 * )
 * const task2 = Effect.succeed("hello").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Effect.log("task2 done"))
 * )
 *
 * const program = Effect.zipLeft(task1, task2)
 *
 * Effect.runPromise(program).then(console.log)
 * // Output:
 * // timestamp=... level=INFO fiber=#0 message="task1 done"
 * // timestamp=... level=INFO fiber=#0 message="task2 done"
 * // 1
 * ```
 *
 * @see {@link zipRight} for a version that returns the result of the second
 * effect.
 *
 * @since 2.0.0
 * @category Zipping
 */
export const zipLeft = fiberRuntime.zipLeftOptions;
/**
 * Executes two effects sequentially, returning the result of the second effect
 * while ignoring the result of the first.
 *
 * **Details**
 *
 * This function allows you to run two effects in sequence, keeping the result
 * of the second effect and discarding the result of the first. By default, the
 * two effects are executed sequentially. If you need them to run concurrently,
 * you can pass the `{ concurrent: true }` option.
 *
 * The first effect will always be executed, even though its result is ignored.
 * This makes it useful for scenarios where the first effect is needed for its
 * side effects, but only the result of the second effect is important.
 *
 * **When to Use**
 *
 * Use this function when you are only interested in the result of the second
 * effect but still need to run the first effect for its side effects, such as
 * initialization or setup tasks.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const task1 = Effect.succeed(1).pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Effect.log("task1 done"))
 * )
 * const task2 = Effect.succeed("hello").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Effect.log("task2 done"))
 * )
 *
 * const program = Effect.zipRight(task1, task2)
 *
 * Effect.runPromise(program).then(console.log)
 * // Output:
 * // timestamp=... level=INFO fiber=#0 message="task1 done"
 * // timestamp=... level=INFO fiber=#0 message="task2 done"
 * // hello
 * ```
 *
 * @see {@link zipLeft} for a version that returns the result of the first
 * effect.
 *
 * @since 2.0.0
 * @category Zipping
 */
export const zipRight = fiberRuntime.zipRightOptions;
/**
 * Combines two effects sequentially and applies a function to their results to
 * produce a single value.
 *
 * **Details**
 *
 * This function runs two effects in sequence (or concurrently, if the `{
 * concurrent: true }` option is provided) and combines their results using a
 * provided function. Unlike {@link zip}, which returns a tuple of the results,
 * this function processes the results with a custom function to produce a
 * single output.
 *
 * **Example** (Combining Effects with a Custom Function)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const task1 = Effect.succeed(1).pipe(
 *   Effect.delay("200 millis"),
 *   Effect.tap(Effect.log("task1 done"))
 * )
 * const task2 = Effect.succeed("hello").pipe(
 *   Effect.delay("100 millis"),
 *   Effect.tap(Effect.log("task2 done"))
 * )
 *
 * const task3 = Effect.zipWith(
 *   task1,
 *   task2,
 *   // Combines results into a single value
 *   (number, string) => number + string.length
 * )
 *
 * Effect.runPromise(task3).then(console.log)
 * // Output:
 * // timestamp=... level=INFO fiber=#3 message="task1 done"
 * // timestamp=... level=INFO fiber=#2 message="task2 done"
 * // 6
 * ```
 *
 * @since 2.0.0
 * @category Zipping
 */
export const zipWith = fiberRuntime.zipWithOptions;
/**
 * Applies the function produced by one effect to the value produced by another effect.
 *
 * **Details**
 *
 * This function combines two effects:
 * - The first effect produces a function of type `(a: A) => B`.
 * - The second effect produces a value of type `A`.
 *
 * Once both effects complete successfully, the function is applied to the value, resulting in an effect that produces a value of type `B`.
 *
 * @since 2.0.0
 */
export const ap = /*#__PURE__*/dual(2, (self, that) => zipWith(self, that, (f, a) => f(a)));
/**
 * @category Requests & Batching
 * @since 2.0.0
 */
export const blocked = core.blocked;
/**
 * @category Requests & Batching
 * @since 2.0.0
 */
export const runRequestBlock = core.runRequestBlock;
/**
 * @category Requests & Batching
 * @since 2.0.0
 */
export const step = core.step;
/**
 * @since 2.0.0
 * @category Requests & Batching
 */
export const request = /*#__PURE__*/dual(args => Request.isRequest(args[0]), query.fromRequest);
/**
 * @since 2.0.0
 * @category Requests & Batching
 */
export const cacheRequestResult = query.cacheRequest;
/**
 * @since 2.0.0
 * @category Requests & Batching
 */
export const withRequestBatching = core.withRequestBatching;
/**
 * @since 2.0.0
 * @category Requests & Batching
 */
export const withRequestCaching = query.withRequestCaching;
/**
 * @since 2.0.0
 * @category Requests & Batching
 */
export const withRequestCache = query.withRequestCache;
/**
 * @since 2.0.0
 * @category Tracing
 */
export const tracer = effect.tracer;
/**
 * @since 2.0.0
 * @category Tracing
 */
export const tracerWith = defaultServices.tracerWith;
/**
 * @since 2.0.0
 * @category Tracing
 */
export const withTracer = defaultServices.withTracer;
/**
 * @since 2.0.0
 * @category Tracing
 */
export const withTracerScoped = fiberRuntime.withTracerScoped;
/**
 * Disable the tracer for the given Effect.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * Effect.succeed(42).pipe(
 *   Effect.withSpan("my-span"),
 *   // the span will not be registered with the tracer
 *   Effect.withTracerEnabled(false)
 * )
 * ```
 *
 * @since 2.0.0
 * @category Tracing
 */
export const withTracerEnabled = core.withTracerEnabled;
/**
 * @since 2.0.0
 * @category Tracing
 */
export const withTracerTiming = core.withTracerTiming;
/**
 * Adds annotations to each span in the effect for enhanced traceability.
 *
 * **Details**
 *
 * This function lets you attach key-value annotations to all spans generated
 * during the execution of an effect. Annotations provide additional context,
 * such as metadata or labels, which can help you understand and debug
 * asynchronous workflows more effectively.
 *
 * You can either pass a single key-value pair or a record of key-value pairs to
 * annotate the spans. These annotations can then be visualized in tracing tools
 * that support span annotations.
 *
 * @since 2.0.0
 * @category Tracing
 */
export const annotateSpans = effect.annotateSpans;
/**
 * Adds annotations to the currently active span for traceability.
 *
 * **Details**
 *
 * This function adds key-value annotations to the currently active span in the
 * effect's trace. These annotations help provide more context about the
 * operation being executed at a specific point in time. Unlike
 * {@link annotateSpans}, which applies to all spans in an effect, this function
 * focuses solely on the active span.
 *
 * You can either pass a single key-value pair or a record of key-value pairs to
 * annotate the span. These annotations are useful for adding metadata to
 * operations, especially in systems with detailed observability requirements.
 *
 * @since 2.0.0
 * @category Tracing
 */
export const annotateCurrentSpan = effect.annotateCurrentSpan;
/**
 * @since 2.0.0
 * @category Tracing
 */
export const currentSpan = effect.currentSpan;
/**
 * @since 3.20.0
 * @category Tracing
 */
export const currentPropagatedSpan = effect.currentPropagatedSpan;
/**
 * @since 2.0.0
 * @category Tracing
 */
export const currentParentSpan = effect.currentParentSpan;
/**
 * @since 2.0.0
 * @category Tracing
 */
export const spanAnnotations = effect.spanAnnotations;
/**
 * @since 2.0.0
 * @category Tracing
 */
export const spanLinks = effect.spanLinks;
/**
 * For all spans in this effect, add a link with the provided span.
 *
 * @since 2.0.0
 * @category Tracing
 */
export const linkSpans = effect.linkSpans;
/**
 * Add span links to the current span.
 *
 * @since 3.14.0
 * @category Tracing
 */
export const linkSpanCurrent = effect.linkSpanCurrent;
/**
 * Create a new span for tracing.
 *
 * @since 2.0.0
 * @category Tracing
 */
export const makeSpan = effect.makeSpan;
/**
 * Create a new span for tracing, and automatically close it when the Scope
 * finalizes.
 *
 * The span is not added to the current span stack, so no child spans will be
 * created for it.
 *
 * @since 2.0.0
 * @category Tracing
 */
export const makeSpanScoped = fiberRuntime.makeSpanScoped;
/**
 * Create a new span for tracing, and automatically close it when the effect
 * completes.
 *
 * The span is not added to the current span stack, so no child spans will be
 * created for it.
 *
 * @since 2.0.0
 * @category Tracing
 */
export const useSpan = effect.useSpan;
/**
 * Wraps the effect with a new span for tracing.
 *
 * @since 2.0.0
 * @category Tracing
 */
export const withSpan = effect.withSpan;
/**
 * Wraps a function that returns an effect with a new span for tracing.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const getTodo = Effect.functionWithSpan({
 *   body: (id: number) => Effect.succeed(`Got todo ${id}!`),
 *   options: (id) => ({
 *     name: `getTodo-${id}`,
 *     attributes: { id }
 *   })
 * })
 * ```
 *
 * @since 3.2.0
 * @category Tracing
 */
export const functionWithSpan = effect.functionWithSpan;
/**
 * Wraps the effect with a new span for tracing.
 *
 * The span is ended when the Scope is finalized.
 *
 * @since 2.0.0
 * @category Tracing
 */
export const withSpanScoped = fiberRuntime.withSpanScoped;
/**
 * Adds the provided span to the current span stack.
 *
 * @since 2.0.0
 * @category Tracing
 */
export const withParentSpan = effect.withParentSpan;
/**
 * Safely handles nullable values by creating an effect that fails for `null` or
 * `undefined`.
 *
 * **Details**
 *
 * This function ensures that an input value is non-null and non-undefined
 * before processing it. If the value is valid, the effect succeeds with the
 * value. If the value is `null` or `undefined`, the effect fails with a
 * `NoSuchElementException`. This is particularly useful for avoiding
 * null-related errors by clearly separating valid values from invalid ones in
 * effectful computations.
 *
 * The failure with `NoSuchElementException` allows you to explicitly handle
 * cases where a value is expected but not provided, leading to safer and more
 * predictable code.
 *
 * **When to Use**
 *
 * Use this function when working with values that may be `null` or `undefined`
 * and you want to ensure that only non-null values are processed. It helps
 * enforce null-safety and makes error handling more explicit.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * //      ┌─── Effect<number, NoSuchElementException, never>
 * //      ▼
 * const maybe1 = Effect.fromNullable(1)
 *
 * Effect.runPromiseExit(maybe1).then(console.log)
 * // Output:
 * // { _id: 'Exit', _tag: 'Success', value: 1 }
 *
 * //      ┌─── Effect<number, NoSuchElementException, never>
 * //      ▼
 * const maybe2 = Effect.fromNullable(null as number | null)
 *
 * Effect.runPromiseExit(maybe2).then(console.log)
 * // Output:
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: {
 * //     _id: 'Cause',
 * //     _tag: 'Fail',
 * //     failure: { _tag: 'NoSuchElementException' }
 * //   }
 * // }
 * ```
 *
 * @since 2.0.0
 * @category Optional Wrapping & Unwrapping
 */
export const fromNullable = effect.fromNullable;
/**
 * Converts an effect that may fail with a `NoSuchElementException` into an
 * effect that succeeds with an `Option`.
 *
 * **Details**
 *
 * This function transforms an effect that might fail with
 * `Cause.NoSuchElementException` into an effect that succeeds with an `Option`
 * type. If the original effect succeeds, its value is wrapped in `Option.some`.
 * If it fails specifically due to a `NoSuchElementException`, the failure is
 * mapped to `Option.none`. Other types of failures remain unchanged and are
 * passed through as they are.
 *
 * This is useful when working with effects where you want to gracefully handle
 * the absence of a value while preserving other potential failures.
 *
 * **When to Use**
 *
 * Use this function when you need to handle missing values as `Option.none`
 * rather than throwing or propagating errors like `NoSuchElementException`.
 * It’s ideal for scenarios where you want to explicitly represent optionality
 * in a type-safe way while retaining other failure information.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * //      ┌─── Effect<number, NoSuchElementException, never>
 * //      ▼
 * const maybe1 = Effect.fromNullable(1)
 *
 * //      ┌─── Effect<Option<number>, never, never>
 * //      ▼
 * const option1 = Effect.optionFromOptional(maybe1)
 *
 * Effect.runPromise(option1).then(console.log)
 * // Output: { _id: 'Option', _tag: 'Some', value: 1 }
 *
 * //      ┌─── Effect<number, NoSuchElementException, never>
 * //      ▼
 * const maybe2 = Effect.fromNullable(null as number | null)
 *
 * //      ┌─── Effect<Option<number>, never, never>
 * //      ▼
 * const option2 = Effect.optionFromOptional(maybe2)
 *
 * Effect.runPromise(option2).then(console.log)
 * // Output: { _tag: 'None' }
 * ```
 *
 * @since 2.0.0
 * @category Optional Wrapping & Unwrapping
 */
export const optionFromOptional = effect.optionFromOptional;
/**
 * Converts an `Option` of an `Effect` into an `Effect` of an `Option`.
 *
 * **Details**
 *
 * This function transforms an `Option<Effect<A, E, R>>` into an
 * `Effect<Option<A>, E, R>`. If the `Option` is `None`, the resulting `Effect`
 * will immediately succeed with a `None` value. If the `Option` is `Some`, the
 * inner `Effect` will be executed, and its result wrapped in a `Some`.
 *
 * **Example**
 *
 * ```ts
 * import { Effect, Option } from "effect"
 *
 * //      ┌─── Option<Effect<number, never, never>>
 * //      ▼
 * const maybe = Option.some(Effect.succeed(42))
 *
 * //      ┌─── Effect<Option<number>, never, never>
 * //      ▼
 * const result = Effect.transposeOption(maybe)
 *
 * console.log(Effect.runSync(result))
 * // Output: { _id: 'Option', _tag: 'Some', value: 42 }
 * ```
 *
 * @since 3.13.0
 * @category Optional Wrapping & Unwrapping
 */
export const transposeOption = self => {
  return option_.isNone(self) ? succeedNone : map(self.value, option_.some);
};
/**
 * Applies an `Effect` on an `Option` and transposes the result.
 *
 * **Details**
 *
 * If the `Option` is `None`, the resulting `Effect` will immediately succeed with a `None` value.
 * If the `Option` is `Some`, the effectful operation will be executed on the inner value, and its result wrapped in a `Some`.
 *
 * @example
 * ```ts
 * import { Effect, Option, pipe } from "effect"
 *
 * //          ┌─── Effect<Option<number>, never, never>>
 * //          ▼
 * const noneResult = pipe(
 *   Option.none(),
 *   Effect.transposeMapOption(() => Effect.succeed(42)) // will not be executed
 * )
 * console.log(Effect.runSync(noneResult))
 * // Output: { _id: 'Option', _tag: 'None' }
 *
 * //          ┌─── Effect<Option<number>, never, never>>
 * //          ▼
 * const someSuccessResult = pipe(
 *   Option.some(42),
 *   Effect.transposeMapOption((value) => Effect.succeed(value * 2))
 * )
 * console.log(Effect.runSync(someSuccessResult))
 * // Output: { _id: 'Option', _tag: 'Some', value: 84 }
 * ```
 *
 * @since 3.14.0
 * @category Optional Wrapping & Unwrapping
 */
export const transposeMapOption = /*#__PURE__*/dual(2, (self, f) => option_.isNone(self) ? succeedNone : map(f(self.value), option_.some));
const makeTagProxy = TagClass => {
  const cache = new Map();
  return new Proxy(TagClass, {
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver);
      }
      if (cache.has(prop)) {
        return cache.get(prop);
      }
      const fn = (...args) => core.andThen(target, s => {
        if (typeof s[prop] === "function") {
          cache.set(prop, (...args) => core.andThen(target, s => s[prop](...args)));
          return s[prop](...args);
        }
        cache.set(prop, core.andThen(target, s => s[prop]));
        return s[prop];
      });
      const cn = core.andThen(target, s => s[prop]);
      // @effect-diagnostics-next-line floatingEffect:off
      Object.assign(fn, cn);
      const apply = fn.apply;
      const bind = fn.bind;
      const call = fn.call;
      const proto = Object.setPrototypeOf({}, Object.getPrototypeOf(cn));
      proto.apply = apply;
      proto.bind = bind;
      proto.call = call;
      Object.setPrototypeOf(fn, proto);
      cache.set(prop, fn);
      return fn;
    }
  });
};
/**
 * Creates a unique tag for a dependency, embedding the service's methods as
 * static properties.
 *
 * **Details**
 *
 * This function allows you to define a `Tag` for a service or dependency in
 * your application. The `Tag` not only acts as an identifier but also provides
 * direct access to the service's methods via static properties. This makes it
 * easier to access and use the service in your code without manually managing
 * contexts.
 *
 * In the example below, the fields of the service (in this case, the `notify`
 * method) are turned into static properties of the Notifications class, making
 * it easier to access them.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * class Notifications extends Effect.Tag("Notifications")<
 *   Notifications,
 *   { readonly notify: (message: string) => Effect.Effect<void> }
 * >() {}
 *
 * // Create an effect that depends on the Notifications service
 * const action = Notifications.notify("Hello, world!")
 * ```
 *
 * @since 2.0.0
 * @category Context
 */
export const Tag = id => () => {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const creationError = new Error();
  Error.stackTraceLimit = limit;
  function TagClass() {}
  Object.setPrototypeOf(TagClass, TagProto);
  TagClass.key = id;
  Object.defineProperty(TagClass, "use", {
    get() {
      return body => core.andThen(this, body);
    }
  });
  Object.defineProperty(TagClass, "stack", {
    get() {
      return creationError.stack;
    }
  });
  return makeTagProxy(TagClass);
};
/**
 * Simplifies the creation and management of services in Effect by defining both
 * a `Tag` and a `Layer`.
 *
 * **Details**
 *
 * This function allows you to streamline the creation of services by combining
 * the definition of a `Context.Tag` and a `Layer` in a single step. It supports
 * various ways of providing the service implementation:
 * - Using an `effect` to define the service dynamically.
 * - Using `sync` or `succeed` to define the service statically.
 * - Using `scoped` to create services with lifecycle management.
 *
 * It also allows you to specify dependencies for the service, which will be
 * provided automatically when the service is used. Accessors can be optionally
 * generated for the service, making it more convenient to use.
 *
 * **Example**
 *
 * ```ts
 * import { Effect } from 'effect';
 *
 * class Prefix extends Effect.Service<Prefix>()("Prefix", {
 *  sync: () => ({ prefix: "PRE" })
 * }) {}
 *
 * class Logger extends Effect.Service<Logger>()("Logger", {
 *  accessors: true,
 *  effect: Effect.gen(function* () {
 *    const { prefix } = yield* Prefix
 *    return {
 *      info: (message: string) =>
 *        Effect.sync(() => {
 *          console.log(`[${prefix}][${message}]`)
 *        })
 *    }
 *  }),
 *  dependencies: [Prefix.Default]
 * }) {}
 * ```
 *
 * @since 3.9.0
 * @category Context
 * @experimental might be up for breaking changes
 */
export const Service = function () {
  return function () {
    const [id, maker] = arguments;
    const proxy = "accessors" in maker ? maker["accessors"] : false;
    const limit = Error.stackTraceLimit;
    Error.stackTraceLimit = 2;
    const creationError = new Error();
    Error.stackTraceLimit = limit;
    let patchState = "unchecked";
    const TagClass = function (service) {
      if (patchState === "unchecked") {
        const proto = Object.getPrototypeOf(service);
        if (proto === Object.prototype || proto === null) {
          patchState = "plain";
        } else {
          const selfProto = Object.getPrototypeOf(this);
          Object.setPrototypeOf(selfProto, proto);
          patchState = "patched";
        }
      }
      if (patchState === "plain") {
        Object.assign(this, service);
      } else if (patchState === "patched") {
        Object.setPrototypeOf(service, Object.getPrototypeOf(this));
        return service;
      }
    };
    TagClass.prototype._tag = id;
    Object.defineProperty(TagClass, "make", {
      get() {
        return service => new this(service);
      }
    });
    Object.defineProperty(TagClass, "use", {
      get() {
        return body => core.andThen(this, body);
      }
    });
    TagClass.key = id;
    Object.assign(TagClass, TagProto);
    Object.defineProperty(TagClass, "stack", {
      get() {
        return creationError.stack;
      }
    });
    const hasDeps = "dependencies" in maker && maker.dependencies.length > 0;
    const layerName = hasDeps ? "DefaultWithoutDependencies" : "Default";
    let layerCache;
    let isFunction = false;
    if ("effect" in maker) {
      isFunction = typeof maker.effect === "function";
      Object.defineProperty(TagClass, layerName, {
        get() {
          if (isFunction) {
            return function () {
              return layer.fromEffect(TagClass, map(maker.effect.apply(null, arguments), _ => new this(_)));
            }.bind(this);
          }
          return layerCache ??= layer.fromEffect(TagClass, map(maker.effect, _ => new this(_)));
        }
      });
    } else if ("scoped" in maker) {
      isFunction = typeof maker.scoped === "function";
      Object.defineProperty(TagClass, layerName, {
        get() {
          if (isFunction) {
            return function () {
              return layer.scoped(TagClass, map(maker.scoped.apply(null, arguments), _ => new this(_)));
            }.bind(this);
          }
          return layerCache ??= layer.scoped(TagClass, map(maker.scoped, _ => new this(_)));
        }
      });
    } else if ("sync" in maker) {
      Object.defineProperty(TagClass, layerName, {
        get() {
          return layerCache ??= layer.sync(TagClass, () => new this(maker.sync()));
        }
      });
    } else {
      Object.defineProperty(TagClass, layerName, {
        get() {
          return layerCache ??= layer.succeed(TagClass, new this(maker.succeed));
        }
      });
    }
    if (hasDeps) {
      let layerWithDepsCache;
      Object.defineProperty(TagClass, "Default", {
        get() {
          if (isFunction) {
            return function () {
              return layer.provide(this.DefaultWithoutDependencies.apply(null, arguments), maker.dependencies);
            };
          }
          return layerWithDepsCache ??= layer.provide(this.DefaultWithoutDependencies, maker.dependencies);
        }
      });
    }
    return proxy === true ? makeTagProxy(TagClass) : TagClass;
  };
};
/**
 * The `Effect.fn` function allows you to create traced functions that return an
 * effect. It provides two key features:
 *
 * - **Stack traces with location details** if an error occurs.
 * - **Automatic span creation** for tracing when a span name is provided.
 *
 * If a span name is passed as the first argument, the function's execution is
 * tracked using that name. If no name is provided, stack tracing still works,
 * but spans are not created.
 *
 * A function can be defined using either:
 *
 * - A generator function, allowing the use of `yield*` for effect composition.
 * - A regular function that returns an `Effect`.
 *
 * **Example** (Creating a Traced Function with a Span Name)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const myfunc = Effect.fn("myspan")(function* <N extends number>(n: N) {
 *   yield* Effect.annotateCurrentSpan("n", n) // Attach metadata to the span
 *   console.log(`got: ${n}`)
 *   yield* Effect.fail(new Error("Boom!")) // Simulate failure
 * })
 *
 * Effect.runFork(myfunc(100).pipe(Effect.catchAllCause(Effect.logError)))
 * // Output:
 * // got: 100
 * // timestamp=... level=ERROR fiber=#0 cause="Error: Boom!
 * //     at <anonymous> (/.../index.ts:6:22) <= Raise location
 * //     at myspan (/.../index.ts:3:23)  <= Definition location
 * //     at myspan (/.../index.ts:9:16)" <= Call location
 * ```
 *
 * `Effect.fn` automatically creates spans. The spans capture information about
 * the function execution, including metadata and error details.
 *
 * **Example** (Exporting Spans to the Console)
 *
 * ```ts skip-type-checking
 * import { Effect } from "effect"
 * import { NodeSdk } from "@effect/opentelemetry"
 * import {
 *   ConsoleSpanExporter,
 *   BatchSpanProcessor
 * } from "@opentelemetry/sdk-trace-base"
 *
 * const myfunc = Effect.fn("myspan")(function* <N extends number>(n: N) {
 *   yield* Effect.annotateCurrentSpan("n", n)
 *   console.log(`got: ${n}`)
 *   yield* Effect.fail(new Error("Boom!"))
 * })
 *
 * const program = myfunc(100)
 *
 * const NodeSdkLive = NodeSdk.layer(() => ({
 *   resource: { serviceName: "example" },
 *   // Export span data to the console
 *   spanProcessor: new BatchSpanProcessor(new ConsoleSpanExporter())
 * }))
 *
 * Effect.runFork(program.pipe(Effect.provide(NodeSdkLive)))
 * // Output:
 * // got: 100
 * // {
 * //   resource: {
 * //     attributes: {
 * //       'service.name': 'example',
 * //       'telemetry.sdk.language': 'nodejs',
 * //       'telemetry.sdk.name': '@effect/opentelemetry',
 * //       'telemetry.sdk.version': '1.30.1'
 * //     }
 * //   },
 * //   instrumentationScope: { name: 'example', version: undefined, schemaUrl: undefined },
 * //   traceId: '22801570119e57a6e2aacda3dec9665b',
 * //   parentId: undefined,
 * //   traceState: undefined,
 * //   name: 'myspan',
 * //   id: '7af530c1e01bc0cb',
 * //   kind: 0,
 * //   timestamp: 1741182277518402.2,
 * //   duration: 4300.416,
 * //   attributes: {
 * //     n: 100,
 * //     'code.stacktrace': 'at <anonymous> (/.../index.ts:8:23)\n' +
 * //       'at <anonymous> (/.../index.ts:14:17)'
 * //   },
 * //   status: { code: 2, message: 'Boom!' },
 * //   events: [
 * //     {
 * //       name: 'exception',
 * //       attributes: {
 * //         'exception.type': 'Error',
 * //         'exception.message': 'Boom!',
 * //         'exception.stacktrace': 'Error: Boom!\n' +
 * //           '    at <anonymous> (/.../index.ts:11:22)\n' +
 * //           '    at myspan (/.../index.ts:8:23)\n' +
 * //           '    at myspan (/.../index.ts:14:17)'
 * //       },
 * //       time: [ 1741182277, 522702583 ],
 * //       droppedAttributesCount: 0
 * //     }
 * //   ],
 * //   links: []
 * // }
 * ```
 *
 * `Effect.fn` also acts as a pipe function, allowing you to create a pipeline
 * after the function definition using the effect returned by the generator
 * function as the starting value of the pipeline.
 *
 * **Example** (Creating a Traced Function with a Delay)
 *
 * ```ts
 * import { Effect } from "effect"
 *
 * const myfunc = Effect.fn(
 *   function* (n: number) {
 *     console.log(`got: ${n}`)
 *     yield* Effect.fail(new Error("Boom!"))
 *   },
 *   // You can access both the created effect and the original arguments
 *   (effect, n) => Effect.delay(effect, `${n / 100} seconds`)
 * )
 *
 * Effect.runFork(myfunc(100).pipe(Effect.catchAllCause(Effect.logError)))
 * // Output:
 * // got: 100
 * // timestamp=... level=ERROR fiber=#0 cause="Error: Boom! (<= after 1 second)
 * ```
 *
 * @see {@link fnUntraced} for a version of this function that doesn't add a span.
 *
 * @since 3.11.0
 * @category Tracing
 */
export const fn = function (nameOrBody, ...pipeables) {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = 2;
  const errorDef = new Error();
  Error.stackTraceLimit = limit;
  if (typeof nameOrBody !== "string") {
    return defineLength(nameOrBody.length, function (...args) {
      const limit = Error.stackTraceLimit;
      Error.stackTraceLimit = 2;
      const errorCall = new Error();
      Error.stackTraceLimit = limit;
      return fnApply({
        self: this,
        body: nameOrBody,
        args,
        pipeables,
        spanName: "<anonymous>",
        spanOptions: {
          context: internalTracer.DisablePropagation.context(true)
        },
        errorDef,
        errorCall
      });
    });
  }
  const name = nameOrBody;
  const options = pipeables[0];
  return (body, ...pipeables) => defineLength(body.length, {
    [name](...args) {
      const limit = Error.stackTraceLimit;
      Error.stackTraceLimit = 2;
      const errorCall = new Error();
      Error.stackTraceLimit = limit;
      return fnApply({
        self: this,
        body,
        args,
        pipeables,
        spanName: name,
        spanOptions: options,
        errorDef,
        errorCall
      });
    }
  }[name]);
};
function defineLength(length, fn) {
  return Object.defineProperty(fn, "length", {
    value: length,
    configurable: true
  });
}
function fnApply(options) {
  let effect;
  let fnError = undefined;
  if (isGeneratorFunction(options.body)) {
    effect = core.fromIterator(() => options.body.apply(options.self, options.args));
  } else {
    try {
      effect = options.body.apply(options.self, options.args);
    } catch (error) {
      fnError = error;
      effect = die(error);
    }
  }
  if (options.pipeables.length > 0) {
    try {
      for (const x of options.pipeables) {
        effect = x(effect, ...options.args);
      }
    } catch (error) {
      effect = fnError ? failCause(internalCause.sequential(internalCause.die(fnError), internalCause.die(error))) : die(error);
    }
  }
  let cache = false;
  const captureStackTrace = () => {
    if (cache !== false) {
      return cache;
    }
    if (options.errorCall.stack) {
      const stackDef = options.errorDef.stack.trim().split("\n");
      const stackCall = options.errorCall.stack.trim().split("\n");
      let endStackDef = stackDef.slice(2).join("\n").trim();
      if (!endStackDef.includes(`(`)) {
        endStackDef = endStackDef.replace(/at (.*)/, "at ($1)");
      }
      let endStackCall = stackCall.slice(2).join("\n").trim();
      if (!endStackCall.includes(`(`)) {
        endStackCall = endStackCall.replace(/at (.*)/, "at ($1)");
      }
      cache = `${endStackDef}\n${endStackCall}`;
      return cache;
    }
  };
  const opts = options.spanOptions && "captureStackTrace" in options.spanOptions ? options.spanOptions : {
    captureStackTrace,
    ...options.spanOptions
  };
  return withSpan(effect, options.spanName, opts);
}
/**
 * Same as {@link fn}, but allows you to create a function that is not traced, for when performance is critical.
 *
 * @see {@link fn} for a version that includes tracing.
 *
 * @since 3.12.0
 * @category Tracing
 */
export const fnUntraced = core.fnUntraced;
// -----------------------------------------------------------------------------
// Type constraints
// -----------------------------------------------------------------------------
/**
 * A no-op type constraint that enforces the success channel of an Effect conforms to
 * the specified success type `A`.
 *
 * @example
 * import { Effect } from "effect"
 *
 * // Ensure that the program does not expose any unhandled errors.
 * const program = Effect.succeed(42).pipe(Effect.ensureSuccessType<number>())
 *
 * @since 3.17.0
 * @category Type constraints
 */
export const ensureSuccessType = () => effect => effect;
/**
 * A no-op type constraint that enforces the error channel of an Effect conforms to
 * the specified error type `E`.
 *
 * @example
 * import { Effect } from "effect"
 *
 * // Ensure that the program does not expose any unhandled errors.
 * const program = Effect.succeed(42).pipe(Effect.ensureErrorType<never>())
 *
 * @since 3.17.0
 * @category Type constraints
 */
export const ensureErrorType = () => effect => effect;
/**
 * A no-op type constraint that enforces the requirements channel of an Effect conforms to
 * the specified requirements type `R`.
 *
 * @example
 * import { Effect } from "effect"
 *
 * // Ensure that the program does not have any requirements.
 * const program = Effect.succeed(42).pipe(Effect.ensureRequirementsType<never>())
 *
 * @since 3.17.0
 * @category Type constraints
 */
export const ensureRequirementsType = () => effect => effect;
//# sourceMappingURL=Effect.js.map