/**
 * @since 2.0.0
 */
import type * as Cause from "./Cause.js"
import type * as Channel from "./Channel.js"
import type * as Chunk from "./Chunk.js"
import type * as Context from "./Context.js"
import type * as Deferred from "./Deferred.js"
import type * as Duration from "./Duration.js"
import type * as Effect from "./Effect.js"
import type * as Either from "./Either.js"
import type { ExecutionPlan } from "./ExecutionPlan.js"
import type * as Exit from "./Exit.js"
import type { LazyArg } from "./Function.js"
import type * as GroupBy from "./GroupBy.js"
import type { TypeLambda } from "./HKT.js"
import * as groupBy_ from "./internal/groupBy.js"
import * as internal from "./internal/stream.js"
import type * as Layer from "./Layer.js"
import type * as Option from "./Option.js"
import type * as Order from "./Order.js"
import type { Pipeable } from "./Pipeable.js"
import type { Predicate, Refinement } from "./Predicate.js"
import type * as PubSub from "./PubSub.js"
import type * as Queue from "./Queue.js"
import type { Runtime } from "./Runtime.js"
import type * as Schedule from "./Schedule.js"
import type * as Scope from "./Scope.js"
import type * as Sink from "./Sink.js"
import type * as Emit from "./StreamEmit.js"
import type * as HaltStrategy from "./StreamHaltStrategy.js"
import type * as Take from "./Take.js"
import type { TPubSub } from "./TPubSub.js"
import type { TDequeue } from "./TQueue.js"
import type * as Tracer from "./Tracer.js"
import type { Covariant, NoInfer, TupleOf } from "./Types.js"
import type * as Unify from "./Unify.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const StreamTypeId: unique symbol = internal.StreamTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type StreamTypeId = typeof StreamTypeId

/**
 * A `Stream<A, E, R>` is a description of a program that, when evaluated, may
 * emit zero or more values of type `A`, may fail with errors of type `E`, and
 * uses an context of type `R`. One way to think of `Stream` is as a
 * `Effect` program that could emit multiple values.
 *
 * `Stream` is a purely functional *pull* based stream. Pull based streams offer
 * inherent laziness and backpressure, relieving users of the need to manage
 * buffers between operators. As an optimization, `Stream` does not emit
 * single values, but rather an array of values. This allows the cost of effect
 * evaluation to be amortized.
 *
 * `Stream` forms a monad on its `A` type parameter, and has error management
 * facilities for its `E` type parameter, modeled similarly to `Effect` (with
 * some adjustments for the multiple-valued nature of `Stream`). These aspects
 * allow for rich and expressive composition of streams.
 *
 * @since 2.0.0
 * @category models
 */
export interface Stream<out A, out E = never, out R = never> extends Stream.Variance<A, E, R>, Pipeable {
  [Unify.typeSymbol]?: unknown
  [Unify.unifySymbol]?: StreamUnify<this>
  [Unify.ignoreSymbol]?: StreamUnifyIgnore
}

/**
 * @since 2.0.0
 * @category models
 */
export interface StreamUnify<A extends { [Unify.typeSymbol]?: any }> extends Effect.EffectUnify<A> {
  Stream?: () => A[Unify.typeSymbol] extends Stream<infer A0, infer E0, infer R0> | infer _ ? Stream<A0, E0, R0> : never
}

/**
 * @category models
 * @since 2.0.0
 */
export interface StreamUnifyIgnore extends Effect.EffectUnifyIgnore {
  Effect?: true
}

/**
 * @since 2.0.0
 * @category models
 */
declare module "./Effect.js" {
  interface Effect<A, E, R> extends Stream<A, E, R> {}
}

/**
 * @category type lambdas
 * @since 2.0.0
 */
export interface StreamTypeLambda extends TypeLambda {
  readonly type: Stream<this["Target"], this["Out1"], this["Out2"]>
}

/**
 * @since 2.0.0
 */
export declare namespace Stream {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<out A, out E, out R> {
    readonly [StreamTypeId]: VarianceStruct<A, E, R>
  }

  /**
   * @since 3.4.0
   * @category models
   */
  export interface VarianceStruct<out A, out E, out R> {
    readonly _A: Covariant<A>
    readonly _E: Covariant<E>
    readonly _R: Covariant<R>
  }

  /**
   * @since 3.4.0
   * @category type-level
   */
  export type Success<T extends Stream<any, any, any>> = [T] extends [Stream<infer _A, infer _E, infer _R>] ? _A : never

  /**
   * @since 3.4.0
   * @category type-level
   */
  export type Error<T extends Stream<any, any, any>> = [T] extends [Stream<infer _A, infer _E, infer _R>] ? _E : never

  /**
   * @since 3.4.0
   * @category type-level
   */
  export type Context<T extends Stream<any, any, any>> = [T] extends [Stream<infer _A, infer _E, infer _R>] ? _R : never

  /**
   * @since 2.0.0
   * @category models
   * @deprecated use Types.TupleOf instead
   */
  export type DynamicTuple<T, N extends number> = N extends N ? number extends N ? Array<T> : DynamicTupleOf<T, N, []>
    : never

  /**
   * @since 2.0.0
   * @category models
   * @deprecated use Types.TupleOf instead
   */
  export type DynamicTupleOf<T, N extends number, R extends Array<unknown>> = R["length"] extends N ? R
    : DynamicTupleOf<T, N, [T, ...R]>
}

/**
 * The default chunk size used by the various combinators and constructors of
 * `Stream`.
 *
 * @since 2.0.0
 * @category constants
 */
export const DefaultChunkSize: number = internal.DefaultChunkSize

/**
 * Collects each underlying Chunk of the stream into a new chunk, and emits it
 * on each pull.
 *
 * @since 2.0.0
 * @category utils
 */
export const accumulate: <A, E, R>(self: Stream<A, E, R>) => Stream<Chunk.Chunk<A>, E, R> = internal.accumulate

/**
 * Re-chunks the elements of the stream by accumulating each underlying chunk.
 *
 * @since 2.0.0
 * @category utils
 */
export const accumulateChunks: <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R> = internal.accumulateChunks

/**
 * Creates a stream from a single value that will get cleaned up after the
 * stream is consumed.
 *
 * @example
 * ```ts
 * import { Console, Effect, Stream } from "effect"
 *
 * // Simulating File operations
 * const open = (filename: string) =>
 *   Effect.gen(function*() {
 *     yield* Console.log(`Opening ${filename}`)
 *     return {
 *       getLines: Effect.succeed(["Line 1", "Line 2", "Line 3"]),
 *       close: Console.log(`Closing ${filename}`)
 *     }
 *   })
 *
 * const stream = Stream.acquireRelease(
 *   open("file.txt"),
 *   (file) => file.close
 * ).pipe(Stream.flatMap((file) => file.getLines))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // Opening file.txt
 * // Closing file.txt
 * // { _id: 'Chunk', values: [ [ 'Line 1', 'Line 2', 'Line 3' ] ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const acquireRelease: <A, E, R, R2, X>(
  acquire: Effect.Effect<A, E, R>,
  release: (resource: A, exit: Exit.Exit<unknown, unknown>) => Effect.Effect<X, never, R2>
) => Stream<A, E, R | R2> = internal.acquireRelease

/**
 * Aggregates elements of this stream using the provided sink for as long as
 * the downstream operators on the stream are busy.
 *
 * This operator divides the stream into two asynchronous "islands". Operators
 * upstream of this operator run on one fiber, while downstream operators run
 * on another. Whenever the downstream fiber is busy processing elements, the
 * upstream fiber will feed elements into the sink until it signals
 * completion.
 *
 * Any sink can be used here, but see `Sink.foldWeightedEffect` and
 * `Sink.foldUntilEffect` for sinks that cover the common usecases.
 *
 * @since 2.0.0
 * @category utils
 */
export const aggregate: {
  /**
   * Aggregates elements of this stream using the provided sink for as long as
   * the downstream operators on the stream are busy.
   *
   * This operator divides the stream into two asynchronous "islands". Operators
   * upstream of this operator run on one fiber, while downstream operators run
   * on another. Whenever the downstream fiber is busy processing elements, the
   * upstream fiber will feed elements into the sink until it signals
   * completion.
   *
   * Any sink can be used here, but see `Sink.foldWeightedEffect` and
   * `Sink.foldUntilEffect` for sinks that cover the common usecases.
   *
   * @since 2.0.0
   * @category utils
   */
  <B, A, A2, E2, R2>(sink: Sink.Sink<B, A | A2, A2, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<B, E2 | E, R2 | R>
  /**
   * Aggregates elements of this stream using the provided sink for as long as
   * the downstream operators on the stream are busy.
   *
   * This operator divides the stream into two asynchronous "islands". Operators
   * upstream of this operator run on one fiber, while downstream operators run
   * on another. Whenever the downstream fiber is busy processing elements, the
   * upstream fiber will feed elements into the sink until it signals
   * completion.
   *
   * Any sink can be used here, but see `Sink.foldWeightedEffect` and
   * `Sink.foldUntilEffect` for sinks that cover the common usecases.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, B, A2, E2, R2>(self: Stream<A, E, R>, sink: Sink.Sink<B, A | A2, A2, E2, R2>): Stream<B, E | E2, R | R2>
} = internal.aggregate

/**
 * Like {@link aggregateWithinEither}, but only returns the `Right` results.
 *
 * @since 2.0.0
 * @category utils
 */
export const aggregateWithin: {
  /**
   * Like {@link aggregateWithinEither}, but only returns the `Right` results.
   *
   * @since 2.0.0
   * @category utils
   */
  <B, A, A2, E2, R2, C, R3>(
    sink: Sink.Sink<B, A | A2, A2, E2, R2>,
    schedule: Schedule.Schedule<C, Option.Option<B>, R3>
  ): <E, R>(self: Stream<A, E, R>) => Stream<B, E2 | E, R2 | R3 | R>
  /**
   * Like {@link aggregateWithinEither}, but only returns the `Right` results.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, B, A2, E2, R2, C, R3>(
    self: Stream<A, E, R>,
    sink: Sink.Sink<B, A | A2, A2, E2, R2>,
    schedule: Schedule.Schedule<C, Option.Option<B>, R3>
  ): Stream<B, E | E2, R | R2 | R3>
} = internal.aggregateWithin

/**
 * Aggregates elements using the provided sink until it completes, or until
 * the delay signalled by the schedule has passed.
 *
 * This operator divides the stream into two asynchronous islands. Operators
 * upstream of this operator run on one fiber, while downstream operators run
 * on another. Elements will be aggregated by the sink until the downstream
 * fiber pulls the aggregated value, or until the schedule's delay has passed.
 *
 * Aggregated elements will be fed into the schedule to determine the delays
 * between pulls.
 *
 * @since 2.0.0
 * @category utils
 */
export const aggregateWithinEither: {
  /**
   * Aggregates elements using the provided sink until it completes, or until
   * the delay signalled by the schedule has passed.
   *
   * This operator divides the stream into two asynchronous islands. Operators
   * upstream of this operator run on one fiber, while downstream operators run
   * on another. Elements will be aggregated by the sink until the downstream
   * fiber pulls the aggregated value, or until the schedule's delay has passed.
   *
   * Aggregated elements will be fed into the schedule to determine the delays
   * between pulls.
   *
   * @since 2.0.0
   * @category utils
   */
  <B, A, A2, E2, R2, C, R3>(
    sink: Sink.Sink<B, A | A2, A2, E2, R2>,
    schedule: Schedule.Schedule<C, Option.Option<B>, R3>
  ): <E, R>(self: Stream<A, E, R>) => Stream<Either.Either<B, C>, E2 | E, R2 | R3 | R>
  /**
   * Aggregates elements using the provided sink until it completes, or until
   * the delay signalled by the schedule has passed.
   *
   * This operator divides the stream into two asynchronous islands. Operators
   * upstream of this operator run on one fiber, while downstream operators run
   * on another. Elements will be aggregated by the sink until the downstream
   * fiber pulls the aggregated value, or until the schedule's delay has passed.
   *
   * Aggregated elements will be fed into the schedule to determine the delays
   * between pulls.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, B, A2, E2, R2, C, R3>(
    self: Stream<A, E, R>,
    sink: Sink.Sink<B, A | A2, A2, E2, R2>,
    schedule: Schedule.Schedule<C, Option.Option<B>, R3>
  ): Stream<Either.Either<B, C>, E | E2, R | R2 | R3>
} = internal.aggregateWithinEither

/**
 * Maps the success values of this stream to the specified constant value.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.range(1, 5).pipe(Stream.as(null))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ null, null, null, null, null ] }
 * ```
 *
 * @since 2.0.0
 * @category mapping
 */
export const as: {
  /**
   * Maps the success values of this stream to the specified constant value.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.range(1, 5).pipe(Stream.as(null))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ null, null, null, null, null ] }
   * ```
   *
   * @since 2.0.0
   * @category mapping
   */
  <B>(value: B): <A, E, R>(self: Stream<A, E, R>) => Stream<B, E, R>
  /**
   * Maps the success values of this stream to the specified constant value.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.range(1, 5).pipe(Stream.as(null))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ null, null, null, null, null ] }
   * ```
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, R, B>(self: Stream<A, E, R>, value: B): Stream<B, E, R>
} = internal.as

const _async: <A, E = never, R = never>(
  register: (emit: Emit.Emit<R, E, A, void>) => Effect.Effect<void, never, R> | void,
  bufferSize?: number | "unbounded" | {
    readonly bufferSize?: number | undefined
    readonly strategy?: "dropping" | "sliding" | "suspend" | undefined
  } | undefined
) => Stream<A, E, R> = internal._async

export {
  /**
   * Creates a stream from an asynchronous callback that can be called multiple
   * times. The optionality of the error type `E` in `Emit` can be used to
   * signal the end of the stream by setting it to `None`.
   *
   * The registration function can optionally return an `Effect`, which will be
   * executed if the `Fiber` executing this Effect is interrupted.
   *
   * @example
   * ```ts
   * import type { StreamEmit } from "effect"
   * import { Chunk, Effect, Option, Stream } from "effect"
   *
   * const events = [1, 2, 3, 4]
   *
   * const stream = Stream.async(
   *   (emit: StreamEmit.Emit<never, never, number, void>) => {
   *     events.forEach((n) => {
   *       setTimeout(() => {
   *         if (n === 3) {
   *           emit(Effect.fail(Option.none())) // Terminate the stream
   *         } else {
   *           emit(Effect.succeed(Chunk.of(n))) // Add the current item to the stream
   *         }
   *       }, 100 * n)
   *     })
   *   }
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 1, 2 ] }
   *
   * ```
   * @since 2.0.0
   * @category constructors
   */
  _async as async
}

/**
 * Creates a stream from an asynchronous callback that can be called multiple
 * times The registration of the callback itself returns an effect. The
 * optionality of the error type `E` can be used to signal the end of the
 * stream, by setting it to `None`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const asyncEffect: <A, E = never, R = never>(
  register: (emit: Emit.Emit<R, E, A, void>) => Effect.Effect<unknown, E, R>,
  bufferSize?: number | "unbounded" | {
    readonly bufferSize?: number | undefined
    readonly strategy?: "dropping" | "sliding" | "suspend" | undefined
  } | undefined
) => Stream<A, E, R> = internal.asyncEffect

/**
 * Creates a stream from an external push-based resource.
 *
 * You can use the `emit` helper to emit values to the stream. The `emit` helper
 * returns a boolean indicating whether the value was emitted or not.
 *
 * You can also use the `emit` helper to signal the end of the stream by
 * using apis such as `emit.end` or `emit.fail`.
 *
 * By default it uses an "unbounded" buffer size.
 * You can customize the buffer size and strategy by passing an object as the
 * second argument with the `bufferSize` and `strategy` fields.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * Stream.asyncPush<string>((emit) =>
 *   Effect.acquireRelease(
 *     Effect.gen(function*() {
 *       yield* Effect.log("subscribing")
 *       return setInterval(() => emit.single("tick"), 1000)
 *     }),
 *     (handle) =>
 *       Effect.gen(function*() {
 *         yield* Effect.log("unsubscribing")
 *         clearInterval(handle)
 *       })
 *   ), { bufferSize: 16, strategy: "dropping" })
 * ```
 *
 * @since 3.6.0
 * @category constructors
 */
export const asyncPush: <A, E = never, R = never>(
  register: (emit: Emit.EmitOpsPush<E, A>) => Effect.Effect<unknown, E, R | Scope.Scope>,
  options?: { readonly bufferSize: "unbounded" } | {
    readonly bufferSize?: number | undefined
    readonly strategy?: "dropping" | "sliding" | undefined
  } | undefined
) => Stream<A, E, Exclude<R, Scope.Scope>> = internal.asyncPush

/**
 * Creates a stream from an asynchronous callback that can be called multiple
 * times. The registration of the callback itself returns an a scoped
 * resource. The optionality of the error type `E` can be used to signal the
 * end of the stream, by setting it to `None`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const asyncScoped: <A, E = never, R = never>(
  register: (emit: Emit.Emit<R, E, A, void>) => Effect.Effect<unknown, E, R | Scope.Scope>,
  bufferSize?: number | "unbounded" | {
    readonly bufferSize?: number | undefined
    readonly strategy?: "dropping" | "sliding" | "suspend" | undefined
  } | undefined
) => Stream<A, E, Exclude<R, Scope.Scope>> = internal.asyncScoped

/**
 * Returns a `Stream` that first collects `n` elements from the input `Stream`,
 * and then creates a new `Stream` using the specified function, and sends all
 * the following elements through that.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const branchAfter: {
  /**
   * Returns a `Stream` that first collects `n` elements from the input `Stream`,
   * and then creates a new `Stream` using the specified function, and sends all
   * the following elements through that.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, A2, E2, R2>(n: number, f: (input: Chunk.Chunk<A>) => Stream<A2, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<A2, E2 | E, R2 | R>
  /**
   * Returns a `Stream` that first collects `n` elements from the input `Stream`,
   * and then creates a new `Stream` using the specified function, and sends all
   * the following elements through that.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, E, R, A2, E2, R2>(
    self: Stream<A, E, R>,
    n: number,
    f: (input: Chunk.Chunk<A>) => Stream<A2, E2, R2>
  ): Stream<A2, E | E2, R | R2>
} = internal.branchAfter

/**
 * Fan out the stream, producing a list of streams that have the same elements
 * as this stream. The driver stream will only ever advance the `maximumLag`
 * chunks before the slowest downstream stream.
 *
 * @example
 * ```ts
 * import { Console, Effect, Fiber, Schedule, Stream } from "effect"
 *
 * const numbers = Effect.scoped(
 *   Stream.range(1, 20).pipe(
 *     Stream.tap((n) => Console.log(`Emit ${n} element before broadcasting`)),
 *     Stream.broadcast(2, 5),
 *     Stream.flatMap(([first, second]) =>
 *       Effect.gen(function*() {
 *         const fiber1 = yield* Stream.runFold(first, 0, (acc, e) => Math.max(acc, e)).pipe(
 *           Effect.andThen((max) => Console.log(`Maximum: ${max}`)),
 *           Effect.fork
 *         )
 *         const fiber2 = yield* second.pipe(
 *           Stream.schedule(Schedule.spaced("1 second")),
 *           Stream.runForEach((n) => Console.log(`Logging to the Console: ${n}`)),
 *           Effect.fork
 *         )
 *         yield* Fiber.join(fiber1).pipe(
 *           Effect.zip(Fiber.join(fiber2), { concurrent: true })
 *         )
 *       })
 *     ),
 *     Stream.runCollect
 *   )
 * )
 *
 * Effect.runPromise(numbers).then(console.log)
 * // Emit 1 element before broadcasting
 * // Emit 2 element before broadcasting
 * // Emit 3 element before broadcasting
 * // Emit 4 element before broadcasting
 * // Emit 5 element before broadcasting
 * // Emit 6 element before broadcasting
 * // Emit 7 element before broadcasting
 * // Emit 8 element before broadcasting
 * // Emit 9 element before broadcasting
 * // Emit 10 element before broadcasting
 * // Emit 11 element before broadcasting
 * // Logging to the Console: 1
 * // Logging to the Console: 2
 * // Logging to the Console: 3
 * // Logging to the Console: 4
 * // Logging to the Console: 5
 * // Emit 12 element before broadcasting
 * // Emit 13 element before broadcasting
 * // Emit 14 element before broadcasting
 * // Emit 15 element before broadcasting
 * // Emit 16 element before broadcasting
 * // Logging to the Console: 6
 * // Logging to the Console: 7
 * // Logging to the Console: 8
 * // Logging to the Console: 9
 * // Logging to the Console: 10
 * // Emit 17 element before broadcasting
 * // Emit 18 element before broadcasting
 * // Emit 19 element before broadcasting
 * // Emit 20 element before broadcasting
 * // Logging to the Console: 11
 * // Logging to the Console: 12
 * // Logging to the Console: 13
 * // Logging to the Console: 14
 * // Logging to the Console: 15
 * // Maximum: 20
 * // Logging to the Console: 16
 * // Logging to the Console: 17
 * // Logging to the Console: 18
 * // Logging to the Console: 19
 * // Logging to the Console: 20
 * // { _id: 'Chunk', values: [ undefined ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const broadcast: {
  /**
   * Fan out the stream, producing a list of streams that have the same elements
   * as this stream. The driver stream will only ever advance the `maximumLag`
   * chunks before the slowest downstream stream.
   *
   * @example
   * ```ts
   * import { Console, Effect, Fiber, Schedule, Stream } from "effect"
   *
   * const numbers = Effect.scoped(
   *   Stream.range(1, 20).pipe(
   *     Stream.tap((n) => Console.log(`Emit ${n} element before broadcasting`)),
   *     Stream.broadcast(2, 5),
   *     Stream.flatMap(([first, second]) =>
   *       Effect.gen(function*() {
   *         const fiber1 = yield* Stream.runFold(first, 0, (acc, e) => Math.max(acc, e)).pipe(
   *           Effect.andThen((max) => Console.log(`Maximum: ${max}`)),
   *           Effect.fork
   *         )
   *         const fiber2 = yield* second.pipe(
   *           Stream.schedule(Schedule.spaced("1 second")),
   *           Stream.runForEach((n) => Console.log(`Logging to the Console: ${n}`)),
   *           Effect.fork
   *         )
   *         yield* Fiber.join(fiber1).pipe(
   *           Effect.zip(Fiber.join(fiber2), { concurrent: true })
   *         )
   *       })
   *     ),
   *     Stream.runCollect
   *   )
   * )
   *
   * Effect.runPromise(numbers).then(console.log)
   * // Emit 1 element before broadcasting
   * // Emit 2 element before broadcasting
   * // Emit 3 element before broadcasting
   * // Emit 4 element before broadcasting
   * // Emit 5 element before broadcasting
   * // Emit 6 element before broadcasting
   * // Emit 7 element before broadcasting
   * // Emit 8 element before broadcasting
   * // Emit 9 element before broadcasting
   * // Emit 10 element before broadcasting
   * // Emit 11 element before broadcasting
   * // Logging to the Console: 1
   * // Logging to the Console: 2
   * // Logging to the Console: 3
   * // Logging to the Console: 4
   * // Logging to the Console: 5
   * // Emit 12 element before broadcasting
   * // Emit 13 element before broadcasting
   * // Emit 14 element before broadcasting
   * // Emit 15 element before broadcasting
   * // Emit 16 element before broadcasting
   * // Logging to the Console: 6
   * // Logging to the Console: 7
   * // Logging to the Console: 8
   * // Logging to the Console: 9
   * // Logging to the Console: 10
   * // Emit 17 element before broadcasting
   * // Emit 18 element before broadcasting
   * // Emit 19 element before broadcasting
   * // Emit 20 element before broadcasting
   * // Logging to the Console: 11
   * // Logging to the Console: 12
   * // Logging to the Console: 13
   * // Logging to the Console: 14
   * // Logging to the Console: 15
   * // Maximum: 20
   * // Logging to the Console: 16
   * // Logging to the Console: 17
   * // Logging to the Console: 18
   * // Logging to the Console: 19
   * // Logging to the Console: 20
   * // { _id: 'Chunk', values: [ undefined ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <N extends number>(
    n: N,
    maximumLag: number | { readonly capacity: "unbounded"; readonly replay?: number | undefined } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ): <A, E, R>(self: Stream<A, E, R>) => Effect.Effect<TupleOf<N, Stream<A, E>>, never, Scope.Scope | R>
  /**
   * Fan out the stream, producing a list of streams that have the same elements
   * as this stream. The driver stream will only ever advance the `maximumLag`
   * chunks before the slowest downstream stream.
   *
   * @example
   * ```ts
   * import { Console, Effect, Fiber, Schedule, Stream } from "effect"
   *
   * const numbers = Effect.scoped(
   *   Stream.range(1, 20).pipe(
   *     Stream.tap((n) => Console.log(`Emit ${n} element before broadcasting`)),
   *     Stream.broadcast(2, 5),
   *     Stream.flatMap(([first, second]) =>
   *       Effect.gen(function*() {
   *         const fiber1 = yield* Stream.runFold(first, 0, (acc, e) => Math.max(acc, e)).pipe(
   *           Effect.andThen((max) => Console.log(`Maximum: ${max}`)),
   *           Effect.fork
   *         )
   *         const fiber2 = yield* second.pipe(
   *           Stream.schedule(Schedule.spaced("1 second")),
   *           Stream.runForEach((n) => Console.log(`Logging to the Console: ${n}`)),
   *           Effect.fork
   *         )
   *         yield* Fiber.join(fiber1).pipe(
   *           Effect.zip(Fiber.join(fiber2), { concurrent: true })
   *         )
   *       })
   *     ),
   *     Stream.runCollect
   *   )
   * )
   *
   * Effect.runPromise(numbers).then(console.log)
   * // Emit 1 element before broadcasting
   * // Emit 2 element before broadcasting
   * // Emit 3 element before broadcasting
   * // Emit 4 element before broadcasting
   * // Emit 5 element before broadcasting
   * // Emit 6 element before broadcasting
   * // Emit 7 element before broadcasting
   * // Emit 8 element before broadcasting
   * // Emit 9 element before broadcasting
   * // Emit 10 element before broadcasting
   * // Emit 11 element before broadcasting
   * // Logging to the Console: 1
   * // Logging to the Console: 2
   * // Logging to the Console: 3
   * // Logging to the Console: 4
   * // Logging to the Console: 5
   * // Emit 12 element before broadcasting
   * // Emit 13 element before broadcasting
   * // Emit 14 element before broadcasting
   * // Emit 15 element before broadcasting
   * // Emit 16 element before broadcasting
   * // Logging to the Console: 6
   * // Logging to the Console: 7
   * // Logging to the Console: 8
   * // Logging to the Console: 9
   * // Logging to the Console: 10
   * // Emit 17 element before broadcasting
   * // Emit 18 element before broadcasting
   * // Emit 19 element before broadcasting
   * // Emit 20 element before broadcasting
   * // Logging to the Console: 11
   * // Logging to the Console: 12
   * // Logging to the Console: 13
   * // Logging to the Console: 14
   * // Logging to the Console: 15
   * // Maximum: 20
   * // Logging to the Console: 16
   * // Logging to the Console: 17
   * // Logging to the Console: 18
   * // Logging to the Console: 19
   * // Logging to the Console: 20
   * // { _id: 'Chunk', values: [ undefined ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, N extends number>(
    self: Stream<A, E, R>,
    n: N,
    maximumLag: number | { readonly capacity: "unbounded"; readonly replay?: number | undefined } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ): Effect.Effect<TupleOf<N, Stream<A, E>>, never, Scope.Scope | R>
} = internal.broadcast

/**
 * Returns a new Stream that multicasts the original Stream, subscribing to it as soon as the first consumer subscribes.
 * As long as there is at least one consumer, the upstream will continue running and emitting data.
 * When all consumers have exited, the upstream will be finalized.
 *
 * @since 3.8.0
 * @category utils
 */
export const share: {
  /**
   * Returns a new Stream that multicasts the original Stream, subscribing to it as soon as the first consumer subscribes.
   * As long as there is at least one consumer, the upstream will continue running and emitting data.
   * When all consumers have exited, the upstream will be finalized.
   *
   * @since 3.8.0
   * @category utils
   */
  <A, E>(
    config: {
      readonly capacity: "unbounded"
      readonly replay?: number | undefined
      readonly idleTimeToLive?: Duration.DurationInput | undefined
    } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
      readonly idleTimeToLive?: Duration.DurationInput | undefined
    }
  ): <R>(self: Stream<A, E, R>) => Effect.Effect<Stream<A, E>, never, R | Scope.Scope>
  /**
   * Returns a new Stream that multicasts the original Stream, subscribing to it as soon as the first consumer subscribes.
   * As long as there is at least one consumer, the upstream will continue running and emitting data.
   * When all consumers have exited, the upstream will be finalized.
   *
   * @since 3.8.0
   * @category utils
   */
  <A, E, R>(
    self: Stream<A, E, R>,
    config: {
      readonly capacity: "unbounded"
      readonly replay?: number | undefined
      readonly idleTimeToLive?: Duration.DurationInput | undefined
    } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
      readonly idleTimeToLive?: Duration.DurationInput | undefined
    }
  ): Effect.Effect<Stream<A, E>, never, R | Scope.Scope>
} = internal.share

/**
 * Fan out the stream, producing a dynamic number of streams that have the
 * same elements as this stream. The driver stream will only ever advance the
 * `maximumLag` chunks before the slowest downstream stream.
 *
 * @since 2.0.0
 * @category utils
 */
export const broadcastDynamic: {
  /**
   * Fan out the stream, producing a dynamic number of streams that have the
   * same elements as this stream. The driver stream will only ever advance the
   * `maximumLag` chunks before the slowest downstream stream.
   *
   * @since 2.0.0
   * @category utils
   */
  (
    maximumLag: number | { readonly capacity: "unbounded"; readonly replay?: number | undefined } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ): <A, E, R>(self: Stream<A, E, R>) => Effect.Effect<Stream<A, E>, never, Scope.Scope | R>
  /**
   * Fan out the stream, producing a dynamic number of streams that have the
   * same elements as this stream. The driver stream will only ever advance the
   * `maximumLag` chunks before the slowest downstream stream.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(
    self: Stream<A, E, R>,
    maximumLag: number | { readonly capacity: "unbounded"; readonly replay?: number | undefined } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ): Effect.Effect<Stream<A, E>, never, Scope.Scope | R>
} = internal.broadcastDynamic

/**
 * Converts the stream to a scoped list of queues. Every value will be
 * replicated to every queue with the slowest queue being allowed to buffer
 * `maximumLag` chunks before the driver is back pressured.
 *
 * Queues can unsubscribe from upstream by shutting down.
 *
 * @since 2.0.0
 * @category utils
 */
export const broadcastedQueues: {
  /**
   * Converts the stream to a scoped list of queues. Every value will be
   * replicated to every queue with the slowest queue being allowed to buffer
   * `maximumLag` chunks before the driver is back pressured.
   *
   * Queues can unsubscribe from upstream by shutting down.
   *
   * @since 2.0.0
   * @category utils
   */
  <N extends number>(
    n: N,
    maximumLag: number | { readonly capacity: "unbounded"; readonly replay?: number | undefined } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ): <A, E, R>(
    self: Stream<A, E, R>
  ) => Effect.Effect<TupleOf<N, Queue.Dequeue<Take.Take<A, E>>>, never, Scope.Scope | R>
  /**
   * Converts the stream to a scoped list of queues. Every value will be
   * replicated to every queue with the slowest queue being allowed to buffer
   * `maximumLag` chunks before the driver is back pressured.
   *
   * Queues can unsubscribe from upstream by shutting down.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, N extends number>(
    self: Stream<A, E, R>,
    n: N,
    maximumLag: number | { readonly capacity: "unbounded"; readonly replay?: number | undefined } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ): Effect.Effect<TupleOf<N, Queue.Dequeue<Take.Take<A, E>>>, never, Scope.Scope | R>
} = internal.broadcastedQueues

/**
 * Converts the stream to a scoped dynamic amount of queues. Every chunk will
 * be replicated to every queue with the slowest queue being allowed to buffer
 * `maximumLag` chunks before the driver is back pressured.
 *
 * Queues can unsubscribe from upstream by shutting down.
 *
 * @since 2.0.0
 * @category utils
 */
export const broadcastedQueuesDynamic: {
  /**
   * Converts the stream to a scoped dynamic amount of queues. Every chunk will
   * be replicated to every queue with the slowest queue being allowed to buffer
   * `maximumLag` chunks before the driver is back pressured.
   *
   * Queues can unsubscribe from upstream by shutting down.
   *
   * @since 2.0.0
   * @category utils
   */
  (
    maximumLag: number | { readonly capacity: "unbounded"; readonly replay?: number | undefined } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ): <A, E, R>(
    self: Stream<A, E, R>
  ) => Effect.Effect<Effect.Effect<Queue.Dequeue<Take.Take<A, E>>, never, Scope.Scope>, never, Scope.Scope | R>
  /**
   * Converts the stream to a scoped dynamic amount of queues. Every chunk will
   * be replicated to every queue with the slowest queue being allowed to buffer
   * `maximumLag` chunks before the driver is back pressured.
   *
   * Queues can unsubscribe from upstream by shutting down.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(
    self: Stream<A, E, R>,
    maximumLag: number | { readonly capacity: "unbounded"; readonly replay?: number | undefined } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ): Effect.Effect<Effect.Effect<Queue.Dequeue<Take.Take<A, E>>, never, Scope.Scope>, never, Scope.Scope | R>
} = internal.broadcastedQueuesDynamic

/**
 * Allows a faster producer to progress independently of a slower consumer by
 * buffering up to `capacity` elements in a queue.
 *
 * Note: This combinator destroys the chunking structure. It's recommended to
 *       use rechunk afterwards. Additionally, prefer capacities that are powers
 *       of 2 for better performance.
 *
 * @example
 * ```ts
 * import { Console, Effect, Schedule, Stream } from "effect"
 *
 * const stream = Stream.range(1, 10).pipe(
 *   Stream.tap((n) => Console.log(`before buffering: ${n}`)),
 *   Stream.buffer({ capacity: 4 }),
 *   Stream.tap((n) => Console.log(`after buffering: ${n}`)),
 *   Stream.schedule(Schedule.spaced("5 seconds"))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // before buffering: 1
 * // before buffering: 2
 * // before buffering: 3
 * // before buffering: 4
 * // before buffering: 5
 * // before buffering: 6
 * // after buffering: 1
 * // after buffering: 2
 * // before buffering: 7
 * // after buffering: 3
 * // before buffering: 8
 * // after buffering: 4
 * // before buffering: 9
 * // after buffering: 5
 * // before buffering: 10
 * // ...
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const buffer: {
  /**
   * Allows a faster producer to progress independently of a slower consumer by
   * buffering up to `capacity` elements in a queue.
   *
   * Note: This combinator destroys the chunking structure. It's recommended to
   *       use rechunk afterwards. Additionally, prefer capacities that are powers
   *       of 2 for better performance.
   *
   * @example
   * ```ts
   * import { Console, Effect, Schedule, Stream } from "effect"
   *
   * const stream = Stream.range(1, 10).pipe(
   *   Stream.tap((n) => Console.log(`before buffering: ${n}`)),
   *   Stream.buffer({ capacity: 4 }),
   *   Stream.tap((n) => Console.log(`after buffering: ${n}`)),
   *   Stream.schedule(Schedule.spaced("5 seconds"))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // before buffering: 1
   * // before buffering: 2
   * // before buffering: 3
   * // before buffering: 4
   * // before buffering: 5
   * // before buffering: 6
   * // after buffering: 1
   * // after buffering: 2
   * // before buffering: 7
   * // after buffering: 3
   * // before buffering: 8
   * // after buffering: 4
   * // before buffering: 9
   * // after buffering: 5
   * // before buffering: 10
   * // ...
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  (
    options: { readonly capacity: "unbounded" } | {
      readonly capacity: number
      readonly strategy?: "dropping" | "sliding" | "suspend" | undefined
    }
  ): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Allows a faster producer to progress independently of a slower consumer by
   * buffering up to `capacity` elements in a queue.
   *
   * Note: This combinator destroys the chunking structure. It's recommended to
   *       use rechunk afterwards. Additionally, prefer capacities that are powers
   *       of 2 for better performance.
   *
   * @example
   * ```ts
   * import { Console, Effect, Schedule, Stream } from "effect"
   *
   * const stream = Stream.range(1, 10).pipe(
   *   Stream.tap((n) => Console.log(`before buffering: ${n}`)),
   *   Stream.buffer({ capacity: 4 }),
   *   Stream.tap((n) => Console.log(`after buffering: ${n}`)),
   *   Stream.schedule(Schedule.spaced("5 seconds"))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // before buffering: 1
   * // before buffering: 2
   * // before buffering: 3
   * // before buffering: 4
   * // before buffering: 5
   * // before buffering: 6
   * // after buffering: 1
   * // after buffering: 2
   * // before buffering: 7
   * // after buffering: 3
   * // before buffering: 8
   * // after buffering: 4
   * // before buffering: 9
   * // after buffering: 5
   * // before buffering: 10
   * // ...
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(
    self: Stream<A, E, R>,
    options: { readonly capacity: "unbounded" } | {
      readonly capacity: number
      readonly strategy?: "dropping" | "sliding" | "suspend" | undefined
    }
  ): Stream<A, E, R>
} = internal.buffer

/**
 * Allows a faster producer to progress independently of a slower consumer by
 * buffering up to `capacity` chunks in a queue.
 *
 * @note Prefer capacities that are powers of 2 for better performance.
 * @since 2.0.0
 * @category utils
 */
export const bufferChunks: {
  /**
   * Allows a faster producer to progress independently of a slower consumer by
   * buffering up to `capacity` chunks in a queue.
   *
   * @note Prefer capacities that are powers of 2 for better performance.
   * @since 2.0.0
   * @category utils
   */
  (
    options: { readonly capacity: number; readonly strategy?: "dropping" | "sliding" | "suspend" | undefined }
  ): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Allows a faster producer to progress independently of a slower consumer by
   * buffering up to `capacity` chunks in a queue.
   *
   * @note Prefer capacities that are powers of 2 for better performance.
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(
    self: Stream<A, E, R>,
    options: { readonly capacity: number; readonly strategy?: "dropping" | "sliding" | "suspend" | undefined }
  ): Stream<A, E, R>
} = internal.bufferChunks

/**
 * Switches over to the stream produced by the provided function in case this
 * one fails with a typed error.
 *
 * @since 2.0.0
 * @category error handling
 */
export const catchAll: {
  /**
   * Switches over to the stream produced by the provided function in case this
   * one fails with a typed error.
   *
   * @since 2.0.0
   * @category error handling
   */
  <E, A2, E2, R2>(f: (error: E) => Stream<A2, E2, R2>): <A, R>(self: Stream<A, E, R>) => Stream<A2 | A, E2, R2 | R>
  /**
   * Switches over to the stream produced by the provided function in case this
   * one fails with a typed error.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, f: (error: E) => Stream<A2, E2, R2>): Stream<A | A2, E2, R | R2>
} = internal.catchAll

/**
 * Switches over to the stream produced by the provided function in case this
 * one fails. Allows recovery from all causes of failure, including
 * interruption if the stream is uninterruptible.
 *
 * @since 2.0.0
 * @category error handling
 */
export const catchAllCause: {
  /**
   * Switches over to the stream produced by the provided function in case this
   * one fails. Allows recovery from all causes of failure, including
   * interruption if the stream is uninterruptible.
   *
   * @since 2.0.0
   * @category error handling
   */
  <E, A2, E2, R2>(f: (cause: Cause.Cause<E>) => Stream<A2, E2, R2>): <A, R>(self: Stream<A, E, R>) => Stream<A2 | A, E2, R2 | R>
  /**
   * Switches over to the stream produced by the provided function in case this
   * one fails. Allows recovery from all causes of failure, including
   * interruption if the stream is uninterruptible.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, f: (cause: Cause.Cause<E>) => Stream<A2, E2, R2>): Stream<A | A2, E2, R | R2>
} = internal.catchAllCause

/**
 * Switches over to the stream produced by the provided function in case this
 * one fails with some typed error.
 *
 * @since 2.0.0
 * @category error handling
 */
export const catchSome: {
  /**
   * Switches over to the stream produced by the provided function in case this
   * one fails with some typed error.
   *
   * @since 2.0.0
   * @category error handling
   */
  <E, A2, E2, R2>(pf: (error: E) => Option.Option<Stream<A2, E2, R2>>): <A, R>(self: Stream<A, E, R>) => Stream<A2 | A, E | E2, R2 | R>
  /**
   * Switches over to the stream produced by the provided function in case this
   * one fails with some typed error.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, pf: (error: E) => Option.Option<Stream<A2, E2, R2>>): Stream<A | A2, E | E2, R | R2>
} = internal.catchSome

/**
 * Switches over to the stream produced by the provided function in case this
 * one fails with an error matching the given `_tag`.
 *
 * @since 2.0.0
 * @category error handling
 */
export const catchTag: {
  /**
   * Switches over to the stream produced by the provided function in case this
   * one fails with an error matching the given `_tag`.
   *
   * @since 2.0.0
   * @category error handling
   */
  <K extends E["_tag"] & string, E extends { _tag: string }, A1, E1, R1>(k: K, f: (e: Extract<E, { _tag: K }>) => Stream<A1, E1, R1>): <A, R>(self: Stream<A, E, R>) => Stream<A1 | A, E1 | Exclude<E, { _tag: K }>, R1 | R>
  /**
   * Switches over to the stream produced by the provided function in case this
   * one fails with an error matching the given `_tag`.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A, E extends { _tag: string }, R, K extends E["_tag"] & string, A1, E1, R1>(
    self: Stream<A, E, R>,
    k: K,
    f: (e: Extract<E, { _tag: K }>) => Stream<A1, E1, R1>
  ): Stream<A | A1, E1 | Exclude<E, { _tag: K }>, R | R1>
} = internal.catchTag

/**
 * Switches over to the stream produced by one of the provided functions, in
 * case this one fails with an error matching one of the given `_tag`'s.
 *
 * @since 2.0.0
 * @category error handling
 */
export const catchTags: {
  /**
   * Switches over to the stream produced by one of the provided functions, in
   * case this one fails with an error matching one of the given `_tag`'s.
   *
   * @since 2.0.0
   * @category error handling
   */
  <
    E extends { _tag: string },
    Cases extends { [K in E["_tag"]]+?: (error: Extract<E, { _tag: K }>) => Stream<any, any, any> }
  >(cases: Cases): <A, R>(
    self: Stream<A, E, R>
  ) => Stream<
    | A
    | {
      [K in keyof Cases]: Cases[K] extends (...args: Array<any>) => Stream.Variance<infer A, infer _E, infer _R> ? A
        : never
    }[keyof Cases],
    | Exclude<E, { _tag: keyof Cases }>
    | {
      [K in keyof Cases]: Cases[K] extends (...args: Array<any>) => Stream.Variance<infer _A, infer E, infer _R> ? E
        : never
    }[keyof Cases],
    | R
    | {
      [K in keyof Cases]: Cases[K] extends (...args: Array<any>) => Stream.Variance<infer _A, infer _E, infer R> ? R
        : never
    }[keyof Cases]
  >
  /**
   * Switches over to the stream produced by one of the provided functions, in
   * case this one fails with an error matching one of the given `_tag`'s.
   *
   * @since 2.0.0
   * @category error handling
   */
  <
    A,
    E extends { _tag: string },
    R,
    Cases extends { [K in E["_tag"]]+?: (error: Extract<E, { _tag: K }>) => Stream<any, any, any> }
  >(self: Stream<A, E, R>, cases: Cases): Stream<
    | A
    | {
      [K in keyof Cases]: Cases[K] extends (...args: Array<any>) => Stream.Variance<infer _R, infer _E, infer A> ? A
        : never
    }[keyof Cases],
    | Exclude<E, { _tag: keyof Cases }>
    | {
      [K in keyof Cases]: Cases[K] extends (...args: Array<any>) => Stream.Variance<infer _R, infer E, infer _A> ? E
        : never
    }[keyof Cases],
    | R
    | {
      [K in keyof Cases]: Cases[K] extends (...args: Array<any>) => Stream.Variance<infer R, infer _E, infer _A> ? R
        : never
    }[keyof Cases]
  >
} = internal.catchTags

/**
 * Switches over to the stream produced by the provided function in case this
 * one fails with some errors. Allows recovery from all causes of failure,
 * including interruption if the stream is uninterruptible.
 *
 * @since 2.0.0
 * @category error handling
 */
export const catchSomeCause: {
  /**
   * Switches over to the stream produced by the provided function in case this
   * one fails with some errors. Allows recovery from all causes of failure,
   * including interruption if the stream is uninterruptible.
   *
   * @since 2.0.0
   * @category error handling
   */
  <E, A2, E2, R2>(pf: (cause: Cause.Cause<E>) => Option.Option<Stream<A2, E2, R2>>): <A, R>(self: Stream<A, E, R>) => Stream<A2 | A, E | E2, R2 | R>
  /**
   * Switches over to the stream produced by the provided function in case this
   * one fails with some errors. Allows recovery from all causes of failure,
   * including interruption if the stream is uninterruptible.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A, E, R, A2, E2, R2>(
    self: Stream<A, E, R>,
    pf: (cause: Cause.Cause<E>) => Option.Option<Stream<A2, E2, R2>>
  ): Stream<A | A2, E | E2, R | R2>
} = internal.catchSomeCause

/**
 * Returns a new stream that only emits elements that are not equal to the
 * previous element emitted, using natural equality to determine whether two
 * elements are equal.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 1, 1, 2, 2, 3, 4).pipe(Stream.changes)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3, 4 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const changes: <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R> = internal.changes

/**
 * Returns a new stream that only emits elements that are not equal to the
 * previous element emitted, using the specified function to determine whether
 * two elements are equal.
 *
 * @since 2.0.0
 * @category utils
 */
export const changesWith: {
  /**
   * Returns a new stream that only emits elements that are not equal to the
   * previous element emitted, using the specified function to determine whether
   * two elements are equal.
   *
   * @since 2.0.0
   * @category utils
   */
  <A>(f: (x: A, y: A) => boolean): <E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Returns a new stream that only emits elements that are not equal to the
   * previous element emitted, using the specified function to determine whether
   * two elements are equal.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, f: (x: A, y: A) => boolean): Stream<A, E, R>
} = internal.changesWith

/**
 * Returns a new stream that only emits elements that are not equal to the
 * previous element emitted, using the specified effectual function to
 * determine whether two elements are equal.
 *
 * @since 2.0.0
 * @category utils
 */
export const changesWithEffect: {
  /**
   * Returns a new stream that only emits elements that are not equal to the
   * previous element emitted, using the specified effectual function to
   * determine whether two elements are equal.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E2, R2>(f: (x: A, y: A) => Effect.Effect<boolean, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Returns a new stream that only emits elements that are not equal to the
   * previous element emitted, using the specified effectual function to
   * determine whether two elements are equal.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, E2, R2>(self: Stream<A, E, R>, f: (x: A, y: A) => Effect.Effect<boolean, E2, R2>): Stream<A, E | E2, R | R2>
} = internal.changesWithEffect

/**
 * Exposes the underlying chunks of the stream as a stream of chunks of
 * elements.
 *
 * @since 2.0.0
 * @category utils
 */
export const chunks: <A, E, R>(self: Stream<A, E, R>) => Stream<Chunk.Chunk<A>, E, R> = internal.chunks

/**
 * Performs the specified stream transformation with the chunk structure of
 * the stream exposed.
 *
 * @since 2.0.0
 * @category utils
 */
export const chunksWith: {
  /**
   * Performs the specified stream transformation with the chunk structure of
   * the stream exposed.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2>(
    f: (stream: Stream<Chunk.Chunk<A>, E, R>) => Stream<Chunk.Chunk<A2>, E2, R2>
  ): (self: Stream<A, E, R>) => Stream<A2, E | E2, R | R2>
  /**
   * Performs the specified stream transformation with the chunk structure of
   * the stream exposed.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2>(
    self: Stream<A, E, R>,
    f: (stream: Stream<Chunk.Chunk<A>, E, R>) => Stream<Chunk.Chunk<A2>, E2, R2>
  ): Stream<A2, E | E2, R | R2>
} = internal.chunksWith

/**
 * Combines the elements from this stream and the specified stream by
 * repeatedly applying the function `f` to extract an element using both sides
 * and conceptually "offer" it to the destination stream. `f` can maintain
 * some internal state to control the combining process, with the initial
 * state being specified by `s`.
 *
 * Where possible, prefer `Stream.combineChunks` for a more efficient
 * implementation.
 *
 * @since 2.0.0
 * @category utils
 */
export const combine: {
  /**
   * Combines the elements from this stream and the specified stream by
   * repeatedly applying the function `f` to extract an element using both sides
   * and conceptually "offer" it to the destination stream. `f` can maintain
   * some internal state to control the combining process, with the initial
   * state being specified by `s`.
   *
   * Where possible, prefer `Stream.combineChunks` for a more efficient
   * implementation.
   *
   * @since 2.0.0
   * @category utils
   */
  <A2, E2, R2, S, R3, E, A, R4, R5, A3>(
    that: Stream<A2, E2, R2>,
    s: S,
    f: (
      s: S,
      pullLeft: Effect.Effect<A, Option.Option<E>, R3>,
      pullRight: Effect.Effect<A2, Option.Option<E2>, R4>
    ) => Effect.Effect<Exit.Exit<readonly [A3, S], Option.Option<E2 | E>>, never, R5>
  ): <R>(self: Stream<A, E, R>) => Stream<A3, E2 | E, R2 | R3 | R4 | R5 | R>
  /**
   * Combines the elements from this stream and the specified stream by
   * repeatedly applying the function `f` to extract an element using both sides
   * and conceptually "offer" it to the destination stream. `f` can maintain
   * some internal state to control the combining process, with the initial
   * state being specified by `s`.
   *
   * Where possible, prefer `Stream.combineChunks` for a more efficient
   * implementation.
   *
   * @since 2.0.0
   * @category utils
   */
  <R, A2, E2, R2, S, R3, E, A, R4, R5, A3>(
    self: Stream<A, E, R>,
    that: Stream<A2, E2, R2>,
    s: S,
    f: (
      s: S,
      pullLeft: Effect.Effect<A, Option.Option<E>, R3>,
      pullRight: Effect.Effect<A2, Option.Option<E2>, R4>
    ) => Effect.Effect<Exit.Exit<readonly [A3, S], Option.Option<E2 | E>>, never, R5>
  ): Stream<A3, E2 | E, R | R2 | R3 | R4 | R5>
} = internal.combine

/**
 * Combines the chunks from this stream and the specified stream by repeatedly
 * applying the function `f` to extract a chunk using both sides and
 * conceptually "offer" it to the destination stream. `f` can maintain some
 * internal state to control the combining process, with the initial state
 * being specified by `s`.
 *
 * @since 2.0.0
 * @category utils
 */
export const combineChunks: {
  /**
   * Combines the chunks from this stream and the specified stream by repeatedly
   * applying the function `f` to extract a chunk using both sides and
   * conceptually "offer" it to the destination stream. `f` can maintain some
   * internal state to control the combining process, with the initial state
   * being specified by `s`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A2, E2, R2, S, R3, E, A, R4, R5, A3>(
    that: Stream<A2, E2, R2>,
    s: S,
    f: (
      s: S,
      pullLeft: Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R3>,
      pullRight: Effect.Effect<Chunk.Chunk<A2>, Option.Option<E2>, R4>
    ) => Effect.Effect<Exit.Exit<readonly [Chunk.Chunk<A3>, S], Option.Option<E2 | E>>, never, R5>
  ): <R>(self: Stream<A, E, R>) => Stream<A3, E2 | E, R2 | R3 | R4 | R5 | R>
  /**
   * Combines the chunks from this stream and the specified stream by repeatedly
   * applying the function `f` to extract a chunk using both sides and
   * conceptually "offer" it to the destination stream. `f` can maintain some
   * internal state to control the combining process, with the initial state
   * being specified by `s`.
   *
   * @since 2.0.0
   * @category utils
   */
  <R, A2, E2, R2, S, R3, E, A, R4, R5, A3>(
    self: Stream<A, E, R>,
    that: Stream<A2, E2, R2>,
    s: S,
    f: (
      s: S,
      pullLeft: Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R3>,
      pullRight: Effect.Effect<Chunk.Chunk<A2>, Option.Option<E2>, R4>
    ) => Effect.Effect<Exit.Exit<readonly [Chunk.Chunk<A3>, S], Option.Option<E2 | E>>, never, R5>
  ): Stream<A3, E2 | E, R | R2 | R3 | R4 | R5>
} = internal.combineChunks

/**
 * Concatenates the specified stream with this stream, resulting in a stream
 * that emits the elements from this stream and then the elements from the
 * specified stream.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const s1 = Stream.make(1, 2, 3)
 * const s2 = Stream.make(4, 5)
 *
 * const stream = Stream.concat(s1, s2)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const concat: {
  /**
   * Concatenates the specified stream with this stream, resulting in a stream
   * that emits the elements from this stream and then the elements from the
   * specified stream.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const s1 = Stream.make(1, 2, 3)
   * const s2 = Stream.make(4, 5)
   *
   * const stream = Stream.concat(s1, s2)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A2, E2, R2>(that: Stream<A2, E2, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A2 | A, E2 | E, R2 | R>
  /**
   * Concatenates the specified stream with this stream, resulting in a stream
   * that emits the elements from this stream and then the elements from the
   * specified stream.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const s1 = Stream.make(1, 2, 3)
   * const s2 = Stream.make(4, 5)
   *
   * const stream = Stream.concat(s1, s2)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, that: Stream<A2, E2, R2>): Stream<A | A2, E | E2, R | R2>
} = internal.concat

/**
 * Concatenates all of the streams in the chunk to one stream.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Stream } from "effect"
 *
 * const s1 = Stream.make(1, 2, 3)
 * const s2 = Stream.make(4, 5)
 * const s3 = Stream.make(6, 7, 8)
 *
 * const stream = Stream.concatAll(Chunk.make(s1, s2, s3))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // {
 * //   _id: 'Chunk',
 * //   values: [
 * //     1, 2, 3, 4,
 * //     5, 6, 7, 8
 * //   ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const concatAll: <A, E, R>(streams: Chunk.Chunk<Stream<A, E, R>>) => Stream<A, E, R> = internal.concatAll

/**
 * Composes this stream with the specified stream to create a cartesian
 * product of elements. The `right` stream would be run multiple times, for
 * every element in the `left` stream.
 *
 * See also `Stream.zip` for the more common point-wise variant.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const s1 = Stream.make(1, 2, 3)
 * const s2 = Stream.make("a", "b")
 *
 * const product = Stream.cross(s1, s2)
 *
 * Effect.runPromise(Stream.runCollect(product)).then(console.log)
 * // {
 * //   _id: "Chunk",
 * //   values: [
 * //     [ 1, "a" ], [ 1, "b" ], [ 2, "a" ], [ 2, "b" ], [ 3, "a" ], [ 3, "b" ]
 * //   ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const cross: {
  /**
   * Composes this stream with the specified stream to create a cartesian
   * product of elements. The `right` stream would be run multiple times, for
   * every element in the `left` stream.
   *
   * See also `Stream.zip` for the more common point-wise variant.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const s1 = Stream.make(1, 2, 3)
   * const s2 = Stream.make("a", "b")
   *
   * const product = Stream.cross(s1, s2)
   *
   * Effect.runPromise(Stream.runCollect(product)).then(console.log)
   * // {
   * //   _id: "Chunk",
   * //   values: [
   * //     [ 1, "a" ], [ 1, "b" ], [ 2, "a" ], [ 2, "b" ], [ 3, "a" ], [ 3, "b" ]
   * //   ]
   * // }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <AR, ER, RR>(right: Stream<AR, ER, RR>): <AL, EL, RL>(left: Stream<AL, EL, RL>) => Stream<[AL, AR], EL | ER, RL | RR>
  /**
   * Composes this stream with the specified stream to create a cartesian
   * product of elements. The `right` stream would be run multiple times, for
   * every element in the `left` stream.
   *
   * See also `Stream.zip` for the more common point-wise variant.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const s1 = Stream.make(1, 2, 3)
   * const s2 = Stream.make("a", "b")
   *
   * const product = Stream.cross(s1, s2)
   *
   * Effect.runPromise(Stream.runCollect(product)).then(console.log)
   * // {
   * //   _id: "Chunk",
   * //   values: [
   * //     [ 1, "a" ], [ 1, "b" ], [ 2, "a" ], [ 2, "b" ], [ 3, "a" ], [ 3, "b" ]
   * //   ]
   * // }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <AL, ER, RR, AR, EL, RL>(left: Stream<AL, ER, RR>, right: Stream<AR, EL, RL>): Stream<[AL, AR], EL | ER, RL | RR>
} = internal.cross

/**
 * Composes this stream with the specified stream to create a cartesian
 * product of elements, but keeps only elements from `left` stream. The `right`
 * stream would be run multiple times, for every element in the `left` stream.
 *
 * See also `Stream.zipLeft` for the more common point-wise variant.
 *
 * @since 2.0.0
 * @category utils
 */
export const crossLeft: {
  /**
   * Composes this stream with the specified stream to create a cartesian
   * product of elements, but keeps only elements from `left` stream. The `right`
   * stream would be run multiple times, for every element in the `left` stream.
   *
   * See also `Stream.zipLeft` for the more common point-wise variant.
   *
   * @since 2.0.0
   * @category utils
   */
  <AR, ER, RR>(right: Stream<AR, ER, RR>): <AL, EL, RL>(left: Stream<AL, EL, RL>) => Stream<AL, EL | ER, RL | RR>
  /**
   * Composes this stream with the specified stream to create a cartesian
   * product of elements, but keeps only elements from `left` stream. The `right`
   * stream would be run multiple times, for every element in the `left` stream.
   *
   * See also `Stream.zipLeft` for the more common point-wise variant.
   *
   * @since 2.0.0
   * @category utils
   */
  <AL, EL, RL, AR, ER, RR>(left: Stream<AL, EL, RL>, right: Stream<AR, ER, RR>): Stream<AL, EL | ER, RL | RR>
} = internal.crossLeft

/**
 * Composes this stream with the specified stream to create a cartesian
 * product of elements, but keeps only elements from the `right` stream. The
 * `left` stream would be run multiple times, for every element in the `right`
 * stream.
 *
 * See also `Stream.zipRight` for the more common point-wise variant.
 *
 * @since 2.0.0
 * @category utils
 */
export const crossRight: {
  /**
   * Composes this stream with the specified stream to create a cartesian
   * product of elements, but keeps only elements from the `right` stream. The
   * `left` stream would be run multiple times, for every element in the `right`
   * stream.
   *
   * See also `Stream.zipRight` for the more common point-wise variant.
   *
   * @since 2.0.0
   * @category utils
   */
  <AR, ER, RR>(right: Stream<AR, ER, RR>): <AL, EL, RL>(left: Stream<AL, EL, RL>) => Stream<AR, EL | ER, RL | RR>
  /**
   * Composes this stream with the specified stream to create a cartesian
   * product of elements, but keeps only elements from the `right` stream. The
   * `left` stream would be run multiple times, for every element in the `right`
   * stream.
   *
   * See also `Stream.zipRight` for the more common point-wise variant.
   *
   * @since 2.0.0
   * @category utils
   */
  <AL, EL, RL, AR, ER, RR>(left: Stream<AL, EL, RL>, right: Stream<AR, ER, RR>): Stream<AR, EL | ER, RL | RR>
} = internal.crossRight

/**
 * Composes this stream with the specified stream to create a cartesian
 * product of elements with a specified function. The `right` stream would be
 * run multiple times, for every element in the `left` stream.
 *
 * See also `Stream.zipWith` for the more common point-wise variant.
 *
 * @since 2.0.0
 * @category utils
 */
export const crossWith: {
  /**
   * Composes this stream with the specified stream to create a cartesian
   * product of elements with a specified function. The `right` stream would be
   * run multiple times, for every element in the `left` stream.
   *
   * See also `Stream.zipWith` for the more common point-wise variant.
   *
   * @since 2.0.0
   * @category utils
   */
  <AR, ER, RR, AL, A>(right: Stream<AR, ER, RR>, f: (left: AL, right: AR) => A): <EL, RL>(left: Stream<AL, EL, RL>) => Stream<A, EL | ER, RL | RR>
  /**
   * Composes this stream with the specified stream to create a cartesian
   * product of elements with a specified function. The `right` stream would be
   * run multiple times, for every element in the `left` stream.
   *
   * See also `Stream.zipWith` for the more common point-wise variant.
   *
   * @since 2.0.0
   * @category utils
   */
  <AL, EL, RL, AR, ER, RR, A>(
    left: Stream<AL, EL, RL>,
    right: Stream<AR, ER, RR>,
    f: (left: AL, right: AR) => A
  ): Stream<A, EL | ER, RL | RR>
} = internal.crossWith

/**
 * Delays the emission of values by holding new values for a set duration. If
 * no new values arrive during that time the value is emitted, however if a
 * new value is received during the holding period the previous value is
 * discarded and the process is repeated with the new value.
 *
 * This operator is useful if you have a stream of "bursty" events which
 * eventually settle down and you only need the final event of the burst. For
 * example, a search engine may only want to initiate a search after a user
 * has paused typing so as to not prematurely recommend results.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * let last = Date.now()
 * const log = (message: string) =>
 *   Effect.sync(() => {
 *     const end = Date.now()
 *     console.log(`${message} after ${end - last}ms`)
 *     last = end
 *   })
 *
 * const stream = Stream.make(1, 2, 3).pipe(
 *   Stream.concat(
 *     Stream.fromEffect(Effect.sleep("200 millis").pipe(Effect.as(4))) // Emit 4 after 200 ms
 *   ),
 *   Stream.concat(Stream.make(5, 6)), // Continue with more rapid values
 *   Stream.concat(
 *     Stream.fromEffect(Effect.sleep("150 millis").pipe(Effect.as(7))) // Emit 7 after 150 ms
 *   ),
 *   Stream.concat(Stream.make(8)),
 *   Stream.tap((n) => log(`Received ${n}`)),
 *   Stream.debounce("100 millis"), // Only emit values after a pause of at least 100 milliseconds,
 *   Stream.tap((n) => log(`> Emitted ${n}`))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // Received 1 after 5ms
 * // Received 2 after 2ms
 * // Received 3 after 0ms
 * // > Emitted 3 after 104ms
 * // Received 4 after 99ms
 * // Received 5 after 1ms
 * // Received 6 after 0ms
 * // > Emitted 6 after 101ms
 * // Received 7 after 50ms
 * // Received 8 after 1ms
 * // > Emitted 8 after 101ms
 * // { _id: 'Chunk', values: [ 3, 6, 8 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const debounce: {
  /**
   * Delays the emission of values by holding new values for a set duration. If
   * no new values arrive during that time the value is emitted, however if a
   * new value is received during the holding period the previous value is
   * discarded and the process is repeated with the new value.
   *
   * This operator is useful if you have a stream of "bursty" events which
   * eventually settle down and you only need the final event of the burst. For
   * example, a search engine may only want to initiate a search after a user
   * has paused typing so as to not prematurely recommend results.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * let last = Date.now()
   * const log = (message: string) =>
   *   Effect.sync(() => {
   *     const end = Date.now()
   *     console.log(`${message} after ${end - last}ms`)
   *     last = end
   *   })
   *
   * const stream = Stream.make(1, 2, 3).pipe(
   *   Stream.concat(
   *     Stream.fromEffect(Effect.sleep("200 millis").pipe(Effect.as(4))) // Emit 4 after 200 ms
   *   ),
   *   Stream.concat(Stream.make(5, 6)), // Continue with more rapid values
   *   Stream.concat(
   *     Stream.fromEffect(Effect.sleep("150 millis").pipe(Effect.as(7))) // Emit 7 after 150 ms
   *   ),
   *   Stream.concat(Stream.make(8)),
   *   Stream.tap((n) => log(`Received ${n}`)),
   *   Stream.debounce("100 millis"), // Only emit values after a pause of at least 100 milliseconds,
   *   Stream.tap((n) => log(`> Emitted ${n}`))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // Received 1 after 5ms
   * // Received 2 after 2ms
   * // Received 3 after 0ms
   * // > Emitted 3 after 104ms
   * // Received 4 after 99ms
   * // Received 5 after 1ms
   * // Received 6 after 0ms
   * // > Emitted 6 after 101ms
   * // Received 7 after 50ms
   * // Received 8 after 1ms
   * // > Emitted 8 after 101ms
   * // { _id: 'Chunk', values: [ 3, 6, 8 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  (duration: Duration.DurationInput): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Delays the emission of values by holding new values for a set duration. If
   * no new values arrive during that time the value is emitted, however if a
   * new value is received during the holding period the previous value is
   * discarded and the process is repeated with the new value.
   *
   * This operator is useful if you have a stream of "bursty" events which
   * eventually settle down and you only need the final event of the burst. For
   * example, a search engine may only want to initiate a search after a user
   * has paused typing so as to not prematurely recommend results.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * let last = Date.now()
   * const log = (message: string) =>
   *   Effect.sync(() => {
   *     const end = Date.now()
   *     console.log(`${message} after ${end - last}ms`)
   *     last = end
   *   })
   *
   * const stream = Stream.make(1, 2, 3).pipe(
   *   Stream.concat(
   *     Stream.fromEffect(Effect.sleep("200 millis").pipe(Effect.as(4))) // Emit 4 after 200 ms
   *   ),
   *   Stream.concat(Stream.make(5, 6)), // Continue with more rapid values
   *   Stream.concat(
   *     Stream.fromEffect(Effect.sleep("150 millis").pipe(Effect.as(7))) // Emit 7 after 150 ms
   *   ),
   *   Stream.concat(Stream.make(8)),
   *   Stream.tap((n) => log(`Received ${n}`)),
   *   Stream.debounce("100 millis"), // Only emit values after a pause of at least 100 milliseconds,
   *   Stream.tap((n) => log(`> Emitted ${n}`))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // Received 1 after 5ms
   * // Received 2 after 2ms
   * // Received 3 after 0ms
   * // > Emitted 3 after 104ms
   * // Received 4 after 99ms
   * // Received 5 after 1ms
   * // Received 6 after 0ms
   * // > Emitted 6 after 101ms
   * // Received 7 after 50ms
   * // Received 8 after 1ms
   * // > Emitted 8 after 101ms
   * // { _id: 'Chunk', values: [ 3, 6, 8 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, duration: Duration.DurationInput): Stream<A, E, R>
} = internal.debounce

/**
 * The stream that dies with the specified defect.
 *
 * @since 2.0.0
 * @category constructors
 */
export const die: (defect: unknown) => Stream<never> = internal.die

/**
 * The stream that dies with the specified lazily evaluated defect.
 *
 * @since 2.0.0
 * @category constructors
 */
export const dieSync: (evaluate: LazyArg<unknown>) => Stream<never> = internal.dieSync

/**
 * The stream that dies with an exception described by `message`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const dieMessage: (message: string) => Stream<never> = internal.dieMessage

/**
 * More powerful version of `Stream.broadcast`. Allows to provide a function
 * that determines what queues should receive which elements. The decide
 * function will receive the indices of the queues in the resulting list.
 *
 * @since 2.0.0
 * @category utils
 */
export const distributedWith: {
  /**
   * More powerful version of `Stream.broadcast`. Allows to provide a function
   * that determines what queues should receive which elements. The decide
   * function will receive the indices of the queues in the resulting list.
   *
   * @since 2.0.0
   * @category utils
   */
  <N extends number, A>(
    options: {
      readonly size: N
      readonly maximumLag: number
      readonly decide: (a: A) => Effect.Effect<Predicate<number>>
    }
  ): <E, R>(
    self: Stream<A, E, R>
  ) => Effect.Effect<TupleOf<N, Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>>, never, Scope.Scope | R>
  /**
   * More powerful version of `Stream.broadcast`. Allows to provide a function
   * that determines what queues should receive which elements. The decide
   * function will receive the indices of the queues in the resulting list.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, N extends number>(
    self: Stream<A, E, R>,
    options: {
      readonly size: N
      readonly maximumLag: number
      readonly decide: (a: A) => Effect.Effect<Predicate<number>>
    }
  ): Effect.Effect<TupleOf<N, Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>>, never, Scope.Scope | R>
} = internal.distributedWith

/**
 * More powerful version of `Stream.distributedWith`. This returns a function
 * that will produce new queues and corresponding indices. You can also
 * provide a function that will be executed after the final events are
 * enqueued in all queues. Shutdown of the queues is handled by the driver.
 * Downstream users can also shutdown queues manually. In this case the driver
 * will continue but no longer backpressure on them.
 *
 * @since 2.0.0
 * @category utils
 */
export const distributedWithDynamic: {
  /**
   * More powerful version of `Stream.distributedWith`. This returns a function
   * that will produce new queues and corresponding indices. You can also
   * provide a function that will be executed after the final events are
   * enqueued in all queues. Shutdown of the queues is handled by the driver.
   * Downstream users can also shutdown queues manually. In this case the driver
   * will continue but no longer backpressure on them.
   *
   * @since 2.0.0
   * @category utils
   */
  <A>(
    options: { readonly maximumLag: number; readonly decide: (a: A) => Effect.Effect<Predicate<number>, never, never> }
  ): <E, R>(
    self: Stream<A, E, R>
  ) => Effect.Effect<
    Effect.Effect<[number, Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>], never, never>,
    never,
    Scope.Scope | R
  >
  /**
   * More powerful version of `Stream.distributedWith`. This returns a function
   * that will produce new queues and corresponding indices. You can also
   * provide a function that will be executed after the final events are
   * enqueued in all queues. Shutdown of the queues is handled by the driver.
   * Downstream users can also shutdown queues manually. In this case the driver
   * will continue but no longer backpressure on them.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(
    self: Stream<A, E, R>,
    options: { readonly maximumLag: number; readonly decide: (a: A) => Effect.Effect<Predicate<number>, never, never> }
  ): Effect.Effect<
    Effect.Effect<[number, Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>], never, never>,
    never,
    Scope.Scope | R
  >
} = internal.distributedWithDynamic

/**
 * Converts this stream to a stream that executes its effects but emits no
 * elements. Useful for sequencing effects using streams:
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * // We create a stream and immediately drain it.
 * const stream = Stream.range(1, 6).pipe(Stream.drain)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const drain: <A, E, R>(self: Stream<A, E, R>) => Stream<never, E, R> = internal.drain

/**
 * Drains the provided stream in the background for as long as this stream is
 * running. If this stream ends before `other`, `other` will be interrupted.
 * If `other` fails, this stream will fail with that error.
 *
 * @since 2.0.0
 * @category utils
 */
export const drainFork: {
  /**
   * Drains the provided stream in the background for as long as this stream is
   * running. If this stream ends before `other`, `other` will be interrupted.
   * If `other` fails, this stream will fail with that error.
   *
   * @since 2.0.0
   * @category utils
   */
  <A2, E2, R2>(that: Stream<A2, E2, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Drains the provided stream in the background for as long as this stream is
   * running. If this stream ends before `other`, `other` will be interrupted.
   * If `other` fails, this stream will fail with that error.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, that: Stream<A2, E2, R2>): Stream<A, E | E2, R | R2>
} = internal.drainFork

/**
 * Drops the specified number of elements from this stream.
 *
 * @since 2.0.0
 * @category utils
 */
export const drop: {
  /**
   * Drops the specified number of elements from this stream.
   *
   * @since 2.0.0
   * @category utils
   */
  (n: number): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Drops the specified number of elements from this stream.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, n: number): Stream<A, E, R>
} = internal.drop

/**
 * Drops the last specified number of elements from this stream.
 *
 * @note This combinator keeps `n` elements in memory. Be careful with big
 *       numbers.
 * @since 2.0.0
 * @category utils
 */
export const dropRight: {
  /**
   * Drops the last specified number of elements from this stream.
   *
   * @note This combinator keeps `n` elements in memory. Be careful with big
   *       numbers.
   * @since 2.0.0
   * @category utils
   */
  (n: number): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Drops the last specified number of elements from this stream.
   *
   * @note This combinator keeps `n` elements in memory. Be careful with big
   *       numbers.
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, n: number): Stream<A, E, R>
} = internal.dropRight

/**
 * Drops all elements of the stream until the specified predicate evaluates to
 * `true`.
 *
 * @since 2.0.0
 * @category utils
 */
export const dropUntil: {
  /**
   * Drops all elements of the stream until the specified predicate evaluates to
   * `true`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A>(predicate: Predicate<NoInfer<A>>): <E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Drops all elements of the stream until the specified predicate evaluates to
   * `true`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, predicate: Predicate<A>): Stream<A, E, R>
} = internal.dropUntil

/**
 * Drops all elements of the stream until the specified effectful predicate
 * evaluates to `true`.
 *
 * @since 2.0.0
 * @category utils
 */
export const dropUntilEffect: {
  /**
   * Drops all elements of the stream until the specified effectful predicate
   * evaluates to `true`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E2, R2>(predicate: (a: NoInfer<A>) => Effect.Effect<boolean, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Drops all elements of the stream until the specified effectful predicate
   * evaluates to `true`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, E2, R2>(
    self: Stream<A, E, R>,
    predicate: (a: NoInfer<A>) => Effect.Effect<boolean, E2, R2>
  ): Stream<A, E | E2, R | R2>
} = internal.dropUntilEffect

/**
 * Drops all elements of the stream for as long as the specified predicate
 * evaluates to `true`.
 *
 * @since 2.0.0
 * @category utils
 */
export const dropWhile: {
  /**
   * Drops all elements of the stream for as long as the specified predicate
   * evaluates to `true`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A>(predicate: Predicate<NoInfer<A>>): <E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Drops all elements of the stream for as long as the specified predicate
   * evaluates to `true`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, predicate: Predicate<A>): Stream<A, E, R>
} = internal.dropWhile

/**
 * Drops all elements of the stream for as long as the specified predicate
 * produces an effect that evalutates to `true`
 *
 * @since 2.0.0
 * @category utils
 */
export const dropWhileEffect: {
  /**
   * Drops all elements of the stream for as long as the specified predicate
   * produces an effect that evalutates to `true`
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E2, R2>(predicate: (a: NoInfer<A>) => Effect.Effect<boolean, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Drops all elements of the stream for as long as the specified predicate
   * produces an effect that evalutates to `true`
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, E2, R2>(self: Stream<A, E, R>, predicate: (a: A) => Effect.Effect<boolean, E2, R2>): Stream<A, E | E2, R | R2>
} = internal.dropWhileEffect

/**
 * Returns a stream whose failures and successes have been lifted into an
 * `Either`. The resulting stream cannot fail, because the failures have been
 * exposed as part of the `Either` success case.
 *
 * @note The stream will end as soon as the first error occurs.
 *
 * @since 2.0.0
 * @category utils
 */
export const either: <A, E, R>(self: Stream<A, E, R>) => Stream<Either.Either<A, E>, never, R> = internal.either

/**
 * The empty stream.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.empty
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const empty: Stream<never> = internal.empty

/**
 * Executes the provided finalizer after this stream's finalizers run.
 *
 * @example
 * ```ts
 * import { Console, Effect, Stream } from "effect"
 *
 * const program = Stream.fromEffect(Console.log("Application Logic.")).pipe(
 *   Stream.concat(Stream.finalizer(Console.log("Finalizing the stream"))),
 *   Stream.ensuring(
 *     Console.log("Doing some other works after stream's finalization")
 *   )
 * )
 *
 * Effect.runPromise(Stream.runCollect(program)).then(console.log)
 * // Application Logic.
 * // Finalizing the stream
 * // Doing some other works after stream's finalization
 * // { _id: 'Chunk', values: [ undefined, undefined ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const ensuring: {
  /**
   * Executes the provided finalizer after this stream's finalizers run.
   *
   * @example
   * ```ts
   * import { Console, Effect, Stream } from "effect"
   *
   * const program = Stream.fromEffect(Console.log("Application Logic.")).pipe(
   *   Stream.concat(Stream.finalizer(Console.log("Finalizing the stream"))),
   *   Stream.ensuring(
   *     Console.log("Doing some other works after stream's finalization")
   *   )
   * )
   *
   * Effect.runPromise(Stream.runCollect(program)).then(console.log)
   * // Application Logic.
   * // Finalizing the stream
   * // Doing some other works after stream's finalization
   * // { _id: 'Chunk', values: [ undefined, undefined ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <X, R2>(finalizer: Effect.Effect<X, never, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R2 | R>
  /**
   * Executes the provided finalizer after this stream's finalizers run.
   *
   * @example
   * ```ts
   * import { Console, Effect, Stream } from "effect"
   *
   * const program = Stream.fromEffect(Console.log("Application Logic.")).pipe(
   *   Stream.concat(Stream.finalizer(Console.log("Finalizing the stream"))),
   *   Stream.ensuring(
   *     Console.log("Doing some other works after stream's finalization")
   *   )
   * )
   *
   * Effect.runPromise(Stream.runCollect(program)).then(console.log)
   * // Application Logic.
   * // Finalizing the stream
   * // Doing some other works after stream's finalization
   * // { _id: 'Chunk', values: [ undefined, undefined ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, X, R2>(self: Stream<A, E, R>, finalizer: Effect.Effect<X, never, R2>): Stream<A, E, R | R2>
} = internal.ensuring

/**
 * Executes the provided finalizer after this stream's finalizers run.
 *
 * @since 2.0.0
 * @category utils
 */
export const ensuringWith: {
  /**
   * Executes the provided finalizer after this stream's finalizers run.
   *
   * @since 2.0.0
   * @category utils
   */
  <E, R2>(
    finalizer: (exit: Exit.Exit<unknown, E>) => Effect.Effect<unknown, never, R2>
  ): <A, R>(self: Stream<A, E, R>) => Stream<A, E, R2 | R>
  /**
   * Executes the provided finalizer after this stream's finalizers run.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, R2>(
    self: Stream<A, E, R>,
    finalizer: (exit: Exit.Exit<unknown, E>) => Effect.Effect<unknown, never, R2>
  ): Stream<A, E, R | R2>
} = internal.ensuringWith

/**
 * Accesses the whole context of the stream.
 *
 * @since 2.0.0
 * @category context
 */
export const context: <R>() => Stream<Context.Context<R>, never, R> = internal.context

/**
 * Accesses the context of the stream.
 *
 * @since 2.0.0
 * @category context
 */
export const contextWith: <R, A>(f: (env: Context.Context<R>) => A) => Stream<A, never, R> = internal.contextWith

/**
 * Accesses the context of the stream in the context of an effect.
 *
 * @since 2.0.0
 * @category context
 */
export const contextWithEffect: <R0, A, E, R>(
  f: (env: Context.Context<R0>) => Effect.Effect<A, E, R>
) => Stream<A, E, R0 | R> = internal.contextWithEffect

/**
 * Accesses the context of the stream in the context of a stream.
 *
 * @since 2.0.0
 * @category context
 */
export const contextWithStream: <R0, A, E, R>(
  f: (env: Context.Context<R0>) => Stream<A, E, R>
) => Stream<A, E, R0 | R> = internal.contextWithStream

/**
 * Creates a stream that executes the specified effect but emits no elements.
 *
 * @since 2.0.0
 * @category constructors
 */
export const execute: <X, E, R>(effect: Effect.Effect<X, E, R>) => Stream<never, E, R> = internal.execute

/**
 * Terminates with the specified error.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.fail("Uh oh!")
 *
 * Effect.runPromiseExit(Stream.runCollect(stream)).then(console.log)
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: { _id: 'Cause', _tag: 'Fail', failure: 'Uh oh!' }
 * // }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const fail: <E>(error: E) => Stream<never, E> = internal.fail

/**
 * Terminates with the specified lazily evaluated error.
 *
 * @since 2.0.0
 * @category constructors
 */
export const failSync: <E>(evaluate: LazyArg<E>) => Stream<never, E> = internal.failSync

/**
 * The stream that always fails with the specified `Cause`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const failCause: <E>(cause: Cause.Cause<E>) => Stream<never, E> = internal.failCause

/**
 * The stream that always fails with the specified lazily evaluated `Cause`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const failCauseSync: <E>(evaluate: LazyArg<Cause.Cause<E>>) => Stream<never, E> = internal.failCauseSync

/**
 * Filters the elements emitted by this stream using the provided function.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.range(1, 11).pipe(Stream.filter((n) => n % 2 === 0))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 2, 4, 6, 8, 10 ] }
 * ```
 *
 * @since 2.0.0
 * @category filtering
 */
export const filter: {
  /**
   * Filters the elements emitted by this stream using the provided function.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.range(1, 11).pipe(Stream.filter((n) => n % 2 === 0))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 2, 4, 6, 8, 10 ] }
   * ```
   *
   * @since 2.0.0
   * @category filtering
   */
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): <E, R>(self: Stream<A, E, R>) => Stream<B, E, R>
  /**
   * Filters the elements emitted by this stream using the provided function.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.range(1, 11).pipe(Stream.filter((n) => n % 2 === 0))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 2, 4, 6, 8, 10 ] }
   * ```
   *
   * @since 2.0.0
   * @category filtering
   */
  <A, B extends A>(predicate: Predicate<B>): <E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Filters the elements emitted by this stream using the provided function.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.range(1, 11).pipe(Stream.filter((n) => n % 2 === 0))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 2, 4, 6, 8, 10 ] }
   * ```
   *
   * @since 2.0.0
   * @category filtering
   */
  <A, E, R, B extends A>(self: Stream<A, E, R>, refinement: Refinement<A, B>): Stream<B, E, R>
  /**
   * Filters the elements emitted by this stream using the provided function.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.range(1, 11).pipe(Stream.filter((n) => n % 2 === 0))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 2, 4, 6, 8, 10 ] }
   * ```
   *
   * @since 2.0.0
   * @category filtering
   */
  <A, E, R>(self: Stream<A, E, R>, predicate: Predicate<A>): Stream<A, E, R>
} = internal.filter

/**
 * Effectfully filters the elements emitted by this stream.
 *
 * @since 2.0.0
 * @category filtering
 */
export const filterEffect: {
  /**
   * Effectfully filters the elements emitted by this stream.
   *
   * @since 2.0.0
   * @category filtering
   */
  <A, E2, R2>(f: (a: NoInfer<A>) => Effect.Effect<boolean, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Effectfully filters the elements emitted by this stream.
   *
   * @since 2.0.0
   * @category filtering
   */
  <A, E, R, E2, R2>(self: Stream<A, E, R>, f: (a: A) => Effect.Effect<boolean, E2, R2>): Stream<A, E | E2, R | R2>
} = internal.filterEffect

/**
 * Performs a filter and map in a single step.
 *
 * @since 2.0.0
 * @category utils
 */
export const filterMap: {
  /**
   * Performs a filter and map in a single step.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, B>(pf: (a: A) => Option.Option<B>): <E, R>(self: Stream<A, E, R>) => Stream<B, E, R>
  /**
   * Performs a filter and map in a single step.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, B>(self: Stream<A, E, R>, pf: (a: A) => Option.Option<B>): Stream<B, E, R>
} = internal.filterMap

/**
 * Performs an effectful filter and map in a single step.
 *
 * @since 2.0.0
 * @category utils
 */
export const filterMapEffect: {
  /**
   * Performs an effectful filter and map in a single step.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, A2, E2, R2>(pf: (a: A) => Option.Option<Effect.Effect<A2, E2, R2>>): <E, R>(self: Stream<A, E, R>) => Stream<A2, E2 | E, R2 | R>
  /**
   * Performs an effectful filter and map in a single step.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2>(
    self: Stream<A, E, R>,
    pf: (a: A) => Option.Option<Effect.Effect<A2, E2, R2>>
  ): Stream<A2, E | E2, R | R2>
} = internal.filterMapEffect

/**
 * Transforms all elements of the stream for as long as the specified partial
 * function is defined.
 *
 * @since 2.0.0
 * @category utils
 */
export const filterMapWhile: {
  /**
   * Transforms all elements of the stream for as long as the specified partial
   * function is defined.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, A2>(pf: (a: A) => Option.Option<A2>): <E, R>(self: Stream<A, E, R>) => Stream<A2, E, R>
  /**
   * Transforms all elements of the stream for as long as the specified partial
   * function is defined.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2>(self: Stream<A, E, R>, pf: (a: A) => Option.Option<A2>): Stream<A2, E, R>
} = internal.filterMapWhile

/**
 * Effectfully transforms all elements of the stream for as long as the
 * specified partial function is defined.
 *
 * @since 2.0.0
 * @category utils
 */
export const filterMapWhileEffect: {
  /**
   * Effectfully transforms all elements of the stream for as long as the
   * specified partial function is defined.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, A2, E2, R2>(pf: (a: A) => Option.Option<Effect.Effect<A2, E2, R2>>): <E, R>(self: Stream<A, E, R>) => Stream<A2, E2 | E, R2 | R>
  /**
   * Effectfully transforms all elements of the stream for as long as the
   * specified partial function is defined.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2>(
    self: Stream<A, E, R>,
    pf: (a: A) => Option.Option<Effect.Effect<A2, E2, R2>>
  ): Stream<A2, E | E2, R | R2>
} = internal.filterMapWhileEffect

/**
 * Creates a one-element stream that never fails and executes the finalizer
 * when it ends.
 *
 * @example
 * ```ts
 * import { Console, Effect, Stream } from "effect"
 *
 * const application = Stream.fromEffect(Console.log("Application Logic."))
 *
 * const deleteDir = (dir: string) => Console.log(`Deleting dir: ${dir}`)
 *
 * const program = application.pipe(
 *   Stream.concat(
 *     Stream.finalizer(
 *       deleteDir("tmp").pipe(
 *         Effect.andThen(Console.log("Temporary directory was deleted."))
 *       )
 *     )
 *   )
 * )
 *
 * Effect.runPromise(Stream.runCollect(program)).then(console.log)
 * // Application Logic.
 * // Deleting dir: tmp
 * // Temporary directory was deleted.
 * // { _id: 'Chunk', values: [ undefined, undefined ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const finalizer: <R, X>(finalizer: Effect.Effect<X, never, R>) => Stream<void, never, R> = internal.finalizer

/**
 * Finds the first element emitted by this stream that satisfies the provided
 * predicate.
 *
 * @since 2.0.0
 * @category elements
 */
export const find: {
  /**
   * Finds the first element emitted by this stream that satisfies the provided
   * predicate.
   *
   * @since 2.0.0
   * @category elements
   */
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): <E, R>(self: Stream<A, E, R>) => Stream<B, E, R>
  /**
   * Finds the first element emitted by this stream that satisfies the provided
   * predicate.
   *
   * @since 2.0.0
   * @category elements
   */
  <A>(predicate: Predicate<NoInfer<A>>): <E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Finds the first element emitted by this stream that satisfies the provided
   * predicate.
   *
   * @since 2.0.0
   * @category elements
   */
  <A, E, R, B extends A>(self: Stream<A, E, R>, refinement: Refinement<A, B>): Stream<B, E, R>
  /**
   * Finds the first element emitted by this stream that satisfies the provided
   * predicate.
   *
   * @since 2.0.0
   * @category elements
   */
  <A, E, R>(self: Stream<A, E, R>, predicate: Predicate<A>): Stream<A, E, R>
} = internal.find

/**
 * Finds the first element emitted by this stream that satisfies the provided
 * effectful predicate.
 *
 * @since 2.0.0
 * @category elements
 */
export const findEffect: {
  /**
   * Finds the first element emitted by this stream that satisfies the provided
   * effectful predicate.
   *
   * @since 2.0.0
   * @category elements
   */
  <A, E2, R2>(predicate: (a: NoInfer<A>) => Effect.Effect<boolean, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Finds the first element emitted by this stream that satisfies the provided
   * effectful predicate.
   *
   * @since 2.0.0
   * @category elements
   */
  <A, E, R, E2, R2>(
    self: Stream<A, E, R>,
    predicate: (a: NoInfer<A>) => Effect.Effect<boolean, E2, R2>
  ): Stream<A, E | E2, R | R2>
} = internal.findEffect

/**
 * Returns a stream made of the concatenation in strict order of all the
 * streams produced by passing each element of this stream to `f0`
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flatMap: {
  /**
   * Returns a stream made of the concatenation in strict order of all the
   * streams produced by passing each element of this stream to `f0`
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, A2, E2, R2>(
    f: (a: A) => Stream<A2, E2, R2>,
    options?: {
      readonly concurrency?: number | "unbounded" | undefined
      readonly bufferSize?: number | undefined
      readonly switch?: boolean | undefined
    } | undefined
  ): <E, R>(self: Stream<A, E, R>) => Stream<A2, E2 | E, R2 | R>
  /**
   * Returns a stream made of the concatenation in strict order of all the
   * streams produced by passing each element of this stream to `f0`
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, E, R, A2, E2, R2>(
    self: Stream<A, E, R>,
    f: (a: A) => Stream<A2, E2, R2>,
    options?: {
      readonly concurrency?: number | "unbounded" | undefined
      readonly bufferSize?: number | undefined
      readonly switch?: boolean | undefined
    } | undefined
  ): Stream<A2, E | E2, R | R2>
} = internal.flatMap

/**
 * Flattens this stream-of-streams into a stream made of the concatenation in
 * strict order of all the streams.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flatten: {
  /**
   * Flattens this stream-of-streams into a stream made of the concatenation in
   * strict order of all the streams.
   *
   * @since 2.0.0
   * @category sequencing
   */
  (
    options?:
      | { readonly concurrency?: number | "unbounded" | undefined; readonly bufferSize?: number | undefined }
      | undefined
  ): <A, E2, R2, E, R>(self: Stream<Stream<A, E2, R2>, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Flattens this stream-of-streams into a stream made of the concatenation in
   * strict order of all the streams.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, E2, R2, E, R>(
    self: Stream<Stream<A, E2, R2>, E, R>,
    options?:
      | { readonly concurrency?: number | "unbounded" | undefined; readonly bufferSize?: number | undefined }
      | undefined
  ): Stream<A, E2 | E, R2 | R>
} = internal.flatten

/**
 * Submerges the chunks carried by this stream into the stream's structure,
 * while still preserving them.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flattenChunks: <A, E, R>(self: Stream<Chunk.Chunk<A>, E, R>) => Stream<A, E, R> = internal.flattenChunks

/**
 * Flattens `Effect` values into the stream's structure, preserving all
 * information about the effect.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flattenEffect: {
  /**
   * Flattens `Effect` values into the stream's structure, preserving all
   * information about the effect.
   *
   * @since 2.0.0
   * @category sequencing
   */
  (
    options?:
      | { readonly concurrency?: number | "unbounded" | undefined; readonly unordered?: boolean | undefined }
      | undefined
  ): <A, E2, R2, E, R>(self: Stream<Effect.Effect<A, E2, R2>, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Flattens `Effect` values into the stream's structure, preserving all
   * information about the effect.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, E2, R2, E, R>(
    self: Stream<Effect.Effect<A, E2, R2>, E, R>,
    options?:
      | { readonly concurrency?: number | "unbounded" | undefined; readonly unordered?: boolean | undefined }
      | undefined
  ): Stream<A, E2 | E, R2 | R>
} = internal.flattenEffect

/**
 * Unwraps `Exit` values that also signify end-of-stream by failing with `None`.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flattenExitOption: <A, E2, E, R>(
  self: Stream<Exit.Exit<A, Option.Option<E2>>, E, R>
) => Stream<A, E | E2, R> = internal.flattenExitOption

/**
 * Submerges the iterables carried by this stream into the stream's structure,
 * while still preserving them.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flattenIterables: <A, E, R>(self: Stream<Iterable<A>, E, R>) => Stream<A, E, R> = internal.flattenIterables

/**
 * Unwraps `Exit` values and flatten chunks that also signify end-of-stream
 * by failing with `None`.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flattenTake: <A, E2, E, R>(self: Stream<Take.Take<A, E2>, E, R>) => Stream<A, E | E2, R> =
  internal.flattenTake

/**
 * Repeats this stream forever.
 *
 * @since 2.0.0
 * @category utils
 */
export const forever: <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R> = internal.forever

/**
 * Creates a stream from an `AsyncIterable`.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const myAsyncIterable = async function*() {
 *   yield 1
 *   yield 2
 * }
 *
 * const stream = Stream.fromAsyncIterable(
 *   myAsyncIterable(),
 *   (e) => new Error(String(e)) // Error Handling
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromAsyncIterable: <A, E>(iterable: AsyncIterable<A>, onError: (e: unknown) => E) => Stream<A, E> =
  internal.fromAsyncIterable

/**
 * Creates a stream from a `Channel`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromChannel: <A, E, R>(
  channel: Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, unknown, unknown, R>
) => Stream<A, E, R> = internal.fromChannel

/**
 * Creates a channel from a `Stream`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const toChannel: <A, E, R>(
  stream: Stream<A, E, R>
) => Channel.Channel<Chunk.Chunk<A>, unknown, E, unknown, unknown, unknown, R> = internal.toChannel

/**
 * Creates a stream from a `Chunk` of values.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Stream } from "effect"
 *
 * // Creating a stream with values from a single Chunk
 * const stream = Stream.fromChunk(Chunk.make(1, 2, 3))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromChunk: <A>(chunk: Chunk.Chunk<A>) => Stream<A> = internal.fromChunk

/**
 * Creates a stream from a subscription to a `PubSub`.
 *
 * **Options**
 *
 * - `shutdown`: If `true`, the `PubSub` will be shutdown after the stream is evaluated (defaults to `false`)
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromChunkPubSub: {
  /**
   * Creates a stream from a subscription to a `PubSub`.
   *
   * **Options**
   *
   * - `shutdown`: If `true`, the `PubSub` will be shutdown after the stream is evaluated (defaults to `false`)
   *
   * @since 2.0.0
   * @category constructors
   */
  <A>(
    pubsub: PubSub.PubSub<Chunk.Chunk<A>>,
    options: { readonly scoped: true; readonly shutdown?: boolean | undefined }
  ): Effect.Effect<Stream<A>, never, Scope.Scope>
  /**
   * Creates a stream from a subscription to a `PubSub`.
   *
   * **Options**
   *
   * - `shutdown`: If `true`, the `PubSub` will be shutdown after the stream is evaluated (defaults to `false`)
   *
   * @since 2.0.0
   * @category constructors
   */
  <A>(
    pubsub: PubSub.PubSub<Chunk.Chunk<A>>,
    options?: { readonly scoped?: false | undefined; readonly shutdown?: boolean | undefined } | undefined
  ): Stream<A>
} = internal.fromChunkPubSub

/**
 * Creates a stream from a `Queue` of values.
 *
 * **Options**
 *
 * - `shutdown`: If `true`, the queue will be shutdown after the stream is evaluated (defaults to `false`)
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromChunkQueue: <A>(
  queue: Queue.Dequeue<Chunk.Chunk<A>>,
  options?: {
    readonly shutdown?: boolean | undefined
  }
) => Stream<A> = internal.fromChunkQueue

/**
 * Creates a stream from an arbitrary number of chunks.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Stream } from "effect"
 *
 * // Creating a stream with values from multiple Chunks
 * const stream = Stream.fromChunks(Chunk.make(1, 2, 3), Chunk.make(4, 5, 6))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5, 6 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromChunks: <A>(...chunks: Array<Chunk.Chunk<A>>) => Stream<A> = internal.fromChunks

/**
 * Either emits the success value of this effect or terminates the stream
 * with the failure value of this effect.
 *
 * @example
 * ```ts
 * import { Effect, Random, Stream } from "effect"
 *
 * const stream = Stream.fromEffect(Random.nextInt)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // Example Output: { _id: 'Chunk', values: [ 922694024 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromEffect: <A, E, R>(effect: Effect.Effect<A, E, R>) => Stream<A, E, R> = internal.fromEffect

/**
 * Creates a stream from an effect producing a value of type `A` or an empty
 * `Stream`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromEffectOption: <A, E, R>(effect: Effect.Effect<A, Option.Option<E>, R>) => Stream<A, E, R> =
  internal.fromEffectOption

/**
 * Creates a stream from a subscription to a `PubSub`.
 *
 * **Options**
 *
 * - `shutdown`: If `true`, the `PubSub` will be shutdown after the stream is evaluated (defaults to `false`)
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromPubSub: {
  /**
   * Creates a stream from a subscription to a `PubSub`.
   *
   * **Options**
   *
   * - `shutdown`: If `true`, the `PubSub` will be shutdown after the stream is evaluated (defaults to `false`)
   *
   * @since 2.0.0
   * @category constructors
   */
  <A>(
    pubsub: PubSub.PubSub<A>,
    options: {
      readonly scoped: true
      readonly maxChunkSize?: number | undefined
      readonly shutdown?: boolean | undefined
    }
  ): Effect.Effect<Stream<A>, never, Scope.Scope>
  /**
   * Creates a stream from a subscription to a `PubSub`.
   *
   * **Options**
   *
   * - `shutdown`: If `true`, the `PubSub` will be shutdown after the stream is evaluated (defaults to `false`)
   *
   * @since 2.0.0
   * @category constructors
   */
  <A>(
    pubsub: PubSub.PubSub<A>,
    options?: {
      readonly scoped?: false | undefined
      readonly maxChunkSize?: number | undefined
      readonly shutdown?: boolean | undefined
    } | undefined
  ): Stream<A>
} = internal.fromPubSub

/**
 * Creates a stream from a subscription to a `TPubSub`.
 *
 * @since 3.10.0
 * @category constructors
 */
export const fromTPubSub: <A>(pubsub: TPubSub<A>) => Stream<A> = internal.fromTPubSub

/**
 * Creates a new `Stream` from an iterable collection of values.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const numbers = [1, 2, 3]
 *
 * const stream = Stream.fromIterable(numbers)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromIterable: <A>(iterable: Iterable<A>) => Stream<A> = internal.fromIterable

/**
 * Creates a stream from an effect producing a value of type `Iterable<A>`.
 *
 * @example
 * ```ts
 * import { Context, Effect, Stream } from "effect"
 *
 * class Database extends Context.Tag("Database")<
 *   Database,
 *   { readonly getUsers: Effect.Effect<Array<string>> }
 * >() {}
 *
 * const getUsers = Database.pipe(Effect.andThen((_) => _.getUsers))
 *
 * const stream = Stream.fromIterableEffect(getUsers)
 *
 * Effect.runPromise(
 *   Stream.runCollect(stream.pipe(Stream.provideService(Database, { getUsers: Effect.succeed(["user1", "user2"]) })))
 * ).then(console.log)
 * // { _id: 'Chunk', values: [ 'user1', 'user2' ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromIterableEffect: <A, E, R>(effect: Effect.Effect<Iterable<A>, E, R>) => Stream<A, E, R> =
  internal.fromIterableEffect

/**
 * Creates a stream from an iterator
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromIteratorSucceed: <A>(iterator: IterableIterator<A>, maxChunkSize?: number) => Stream<A> =
  internal.fromIteratorSucceed

/**
 * Creates a stream from an effect that pulls elements from another stream.
 *
 * See `Stream.toPull` for reference.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromPull: <R, R2, E, A>(
  effect: Effect.Effect<Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R2>, never, Scope.Scope | R>
) => Stream<A, E, R2 | Exclude<R, Scope.Scope>> = internal.fromPull

/**
 * Creates a stream from a queue of values
 *
 * **Options**
 *
 * - `maxChunkSize`: The maximum number of queued elements to put in one chunk in the stream
 * - `shutdown`: If `true`, the queue will be shutdown after the stream is evaluated (defaults to `false`)
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromQueue: <A>(
  queue: Queue.Dequeue<A>,
  options?: {
    readonly maxChunkSize?: number | undefined
    readonly shutdown?: boolean | undefined
  }
) => Stream<A> = internal.fromQueue

/**
 * Creates a stream from a TQueue of values
 *
 * @since 3.10.0
 * @category constructors
 */
export const fromTQueue: <A>(queue: TDequeue<A>) => Stream<A> = internal.fromTQueue

/**
 * Creates a stream from a `ReadableStream`.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromReadableStream: {
  /**
   * Creates a stream from a `ReadableStream`.
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
   *
   * @since 2.0.0
   * @category constructors
   */
  <A, E>(
    options: {
      readonly evaluate: LazyArg<ReadableStream<A>>
      readonly onError: (error: unknown) => E
      readonly releaseLockOnEnd?: boolean | undefined
    }
  ): Stream<A, E>
  /**
   * Creates a stream from a `ReadableStream`.
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
   *
   * @since 2.0.0
   * @category constructors
   */
  <A, E>(evaluate: LazyArg<ReadableStream<A>>, onError: (error: unknown) => E): Stream<A, E>
} = internal.fromReadableStream

/**
 * Creates a stream from a `ReadableStreamBYOBReader`.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromReadableStreamByob: {
  /**
   * Creates a stream from a `ReadableStreamBYOBReader`.
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader.
   *
   * @since 2.0.0
   * @category constructors
   */
  <E>(
    options: {
      readonly evaluate: LazyArg<ReadableStream<Uint8Array>>
      readonly onError: (error: unknown) => E
      readonly bufferSize?: number | undefined
      readonly releaseLockOnEnd?: boolean | undefined
    }
  ): Stream<Uint8Array, E>
  /**
   * Creates a stream from a `ReadableStreamBYOBReader`.
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader.
   *
   * @since 2.0.0
   * @category constructors
   */
  <E>(
    evaluate: LazyArg<ReadableStream<Uint8Array>>,
    onError: (error: unknown) => E,
    /** Controls the size of the underlying `ArrayBuffer` (defaults to `4096`) */
    allocSize?: number
  ): Stream<Uint8Array, E>
} = internal.fromReadableStreamByob

/**
 * Creates a stream from a `Schedule` that does not require any further
 * input. The stream will emit an element for each value output from the
 * schedule, continuing for as long as the schedule continues.
 *
 * @example
 * ```ts
 * import { Effect, Schedule, Stream } from "effect"
 *
 * // Emits values every 1 second for a total of 5 emissions
 * const schedule = Schedule.spaced("1 second").pipe(
 *   Schedule.compose(Schedule.recurs(5))
 * )
 *
 * const stream = Stream.fromSchedule(schedule)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromSchedule: <A, R>(schedule: Schedule.Schedule<A, unknown, R>) => Stream<A, never, R> =
  internal.fromSchedule

/**
 * Creates a pipeline that groups on adjacent keys, calculated by the
 * specified function.
 *
 * @since 2.0.0
 * @category grouping
 */
export const groupAdjacentBy: {
  /**
   * Creates a pipeline that groups on adjacent keys, calculated by the
   * specified function.
   *
   * @since 2.0.0
   * @category grouping
   */
  <A, K>(f: (a: A) => K): <E, R>(self: Stream<A, E, R>) => Stream<[K, Chunk.NonEmptyChunk<A>], E, R>
  /**
   * Creates a pipeline that groups on adjacent keys, calculated by the
   * specified function.
   *
   * @since 2.0.0
   * @category grouping
   */
  <A, E, R, K>(self: Stream<A, E, R>, f: (a: A) => K): Stream<[K, Chunk.NonEmptyChunk<A>], E, R>
} = internal.groupAdjacentBy

/**
 * More powerful version of `Stream.groupByKey`.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, GroupBy, Stream } from "effect"
 *
 * const groupByKeyResult = Stream.fromIterable([
 *   "Mary",
 *   "James",
 *   "Robert",
 *   "Patricia",
 *   "John",
 *   "Jennifer",
 *   "Rebecca",
 *   "Peter"
 * ]).pipe(
 *   Stream.groupBy((name) => Effect.succeed([name.substring(0, 1), name]))
 * )
 *
 * const stream = GroupBy.evaluate(groupByKeyResult, (key, stream) =>
 *   Stream.fromEffect(
 *     Stream.runCollect(stream).pipe(
 *       Effect.andThen((chunk) => [key, Chunk.size(chunk)] as const)
 *     )
 *   ))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // {
 * //   _id: 'Chunk',
 * //   values: [ [ 'M', 1 ], [ 'J', 3 ], [ 'R', 2 ], [ 'P', 2 ] ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category grouping
 */
export const groupBy: {
  /**
   * More powerful version of `Stream.groupByKey`.
   *
   * @example
   * ```ts
   * import { Chunk, Effect, GroupBy, Stream } from "effect"
   *
   * const groupByKeyResult = Stream.fromIterable([
   *   "Mary",
   *   "James",
   *   "Robert",
   *   "Patricia",
   *   "John",
   *   "Jennifer",
   *   "Rebecca",
   *   "Peter"
   * ]).pipe(
   *   Stream.groupBy((name) => Effect.succeed([name.substring(0, 1), name]))
   * )
   *
   * const stream = GroupBy.evaluate(groupByKeyResult, (key, stream) =>
   *   Stream.fromEffect(
   *     Stream.runCollect(stream).pipe(
   *       Effect.andThen((chunk) => [key, Chunk.size(chunk)] as const)
   *     )
   *   ))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // {
   * //   _id: 'Chunk',
   * //   values: [ [ 'M', 1 ], [ 'J', 3 ], [ 'R', 2 ], [ 'P', 2 ] ]
   * // }
   * ```
   *
   * @since 2.0.0
   * @category grouping
   */
  <A, K, V, E2, R2>(
    f: (a: A) => Effect.Effect<readonly [K, V], E2, R2>,
    options?: { readonly bufferSize?: number | undefined } | undefined
  ): <E, R>(self: Stream<A, E, R>) => GroupBy.GroupBy<K, V, E2 | E, R2 | R>
  /**
   * More powerful version of `Stream.groupByKey`.
   *
   * @example
   * ```ts
   * import { Chunk, Effect, GroupBy, Stream } from "effect"
   *
   * const groupByKeyResult = Stream.fromIterable([
   *   "Mary",
   *   "James",
   *   "Robert",
   *   "Patricia",
   *   "John",
   *   "Jennifer",
   *   "Rebecca",
   *   "Peter"
   * ]).pipe(
   *   Stream.groupBy((name) => Effect.succeed([name.substring(0, 1), name]))
   * )
   *
   * const stream = GroupBy.evaluate(groupByKeyResult, (key, stream) =>
   *   Stream.fromEffect(
   *     Stream.runCollect(stream).pipe(
   *       Effect.andThen((chunk) => [key, Chunk.size(chunk)] as const)
   *     )
   *   ))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // {
   * //   _id: 'Chunk',
   * //   values: [ [ 'M', 1 ], [ 'J', 3 ], [ 'R', 2 ], [ 'P', 2 ] ]
   * // }
   * ```
   *
   * @since 2.0.0
   * @category grouping
   */
  <A, E, R, K, V, E2, R2>(
    self: Stream<A, E, R>,
    f: (a: A) => Effect.Effect<readonly [K, V], E2, R2>,
    options?: { readonly bufferSize?: number | undefined } | undefined
  ): GroupBy.GroupBy<K, V, E | E2, R | R2>
} = groupBy_.groupBy

/**
 * Partition a stream using a function and process each stream individually.
 * This returns a data structure that can be used to further filter down which
 * groups shall be processed.
 *
 * After calling apply on the GroupBy object, the remaining groups will be
 * processed in parallel and the resulting streams merged in a
 * nondeterministic fashion.
 *
 * Up to `buffer` elements may be buffered in any group stream before the
 * producer is backpressured. Take care to consume from all streams in order
 * to prevent deadlocks.
 *
 * For example, to collect the first 2 words for every starting letter from a
 * stream of words:
 *
 * ```ts
 * import { pipe, GroupBy, Stream } from "effect"
 *
 * pipe(
 *   Stream.fromIterable(["hello", "world", "hi", "holla"]),
 *   Stream.groupByKey((word) => word[0]),
 *   GroupBy.evaluate((key, stream) =>
 *     pipe(
 *       stream,
 *       Stream.take(2),
 *       Stream.map((words) => [key, words] as const)
 *     )
 *   )
 * )
 * ```
 *
 * @since 2.0.0
 * @category grouping
 */
export const groupByKey: {
  /**
   * Partition a stream using a function and process each stream individually.
   * This returns a data structure that can be used to further filter down which
   * groups shall be processed.
   *
   * After calling apply on the GroupBy object, the remaining groups will be
   * processed in parallel and the resulting streams merged in a
   * nondeterministic fashion.
   *
   * Up to `buffer` elements may be buffered in any group stream before the
   * producer is backpressured. Take care to consume from all streams in order
   * to prevent deadlocks.
   *
   * For example, to collect the first 2 words for every starting letter from a
   * stream of words:
   *
   * ```ts
   * import { pipe, GroupBy, Stream } from "effect"
   *
   * pipe(
   *   Stream.fromIterable(["hello", "world", "hi", "holla"]),
   *   Stream.groupByKey((word) => word[0]),
   *   GroupBy.evaluate((key, stream) =>
   *     pipe(
   *       stream,
   *       Stream.take(2),
   *       Stream.map((words) => [key, words] as const)
   *     )
   *   )
   * )
   * ```
   *
   * @since 2.0.0
   * @category grouping
   */
  <A, K>(
    f: (a: A) => K,
    options?: {
      readonly bufferSize?: number | undefined
    }
  ): <E, R>(self: Stream<A, E, R>) => GroupBy.GroupBy<K, A, E, R>
  /**
   * Partition a stream using a function and process each stream individually.
   * This returns a data structure that can be used to further filter down which
   * groups shall be processed.
   *
   * After calling apply on the GroupBy object, the remaining groups will be
   * processed in parallel and the resulting streams merged in a
   * nondeterministic fashion.
   *
   * Up to `buffer` elements may be buffered in any group stream before the
   * producer is backpressured. Take care to consume from all streams in order
   * to prevent deadlocks.
   *
   * For example, to collect the first 2 words for every starting letter from a
   * stream of words:
   *
   * ```ts
   * import { pipe, GroupBy, Stream } from "effect"
   *
   * pipe(
   *   Stream.fromIterable(["hello", "world", "hi", "holla"]),
   *   Stream.groupByKey((word) => word[0]),
   *   GroupBy.evaluate((key, stream) =>
   *     pipe(
   *       stream,
   *       Stream.take(2),
   *       Stream.map((words) => [key, words] as const)
   *     )
   *   )
   * )
   * ```
   *
   * @since 2.0.0
   * @category grouping
   */
  <A, E, R, K>(
    self: Stream<A, E, R>,
    f: (a: A) => K,
    options?: {
      readonly bufferSize?: number | undefined
    }
  ): GroupBy.GroupBy<K, A, E, R>
} = groupBy_.groupByKey

/**
 * Partitions the stream with specified `chunkSize`.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.range(0, 8).pipe(Stream.grouped(3))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then((chunks) => console.log("%o", chunks))
 * // {
 * //   _id: 'Chunk',
 * //   values: [
 * //     { _id: 'Chunk', values: [ 0, 1, 2, [length]: 3 ] },
 * //     { _id: 'Chunk', values: [ 3, 4, 5, [length]: 3 ] },
 * //     { _id: 'Chunk', values: [ 6, 7, 8, [length]: 3 ] },
 * //     [length]: 3
 * //   ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category grouping
 */
export const grouped: {
  /**
   * Partitions the stream with specified `chunkSize`.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.range(0, 8).pipe(Stream.grouped(3))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then((chunks) => console.log("%o", chunks))
   * // {
   * //   _id: 'Chunk',
   * //   values: [
   * //     { _id: 'Chunk', values: [ 0, 1, 2, [length]: 3 ] },
   * //     { _id: 'Chunk', values: [ 3, 4, 5, [length]: 3 ] },
   * //     { _id: 'Chunk', values: [ 6, 7, 8, [length]: 3 ] },
   * //     [length]: 3
   * //   ]
   * // }
   * ```
   *
   * @since 2.0.0
   * @category grouping
   */
  (chunkSize: number): <A, E, R>(self: Stream<A, E, R>) => Stream<Chunk.Chunk<A>, E, R>
  /**
   * Partitions the stream with specified `chunkSize`.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.range(0, 8).pipe(Stream.grouped(3))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then((chunks) => console.log("%o", chunks))
   * // {
   * //   _id: 'Chunk',
   * //   values: [
   * //     { _id: 'Chunk', values: [ 0, 1, 2, [length]: 3 ] },
   * //     { _id: 'Chunk', values: [ 3, 4, 5, [length]: 3 ] },
   * //     { _id: 'Chunk', values: [ 6, 7, 8, [length]: 3 ] },
   * //     [length]: 3
   * //   ]
   * // }
   * ```
   *
   * @since 2.0.0
   * @category grouping
   */
  <A, E, R>(self: Stream<A, E, R>, chunkSize: number): Stream<Chunk.Chunk<A>, E, R>
} = internal.grouped

/**
 * Partitions the stream with the specified `chunkSize` or until the specified
 * `duration` has passed, whichever is satisfied first.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Schedule, Stream } from "effect"
 *
 * const stream = Stream.range(0, 9).pipe(
 *   Stream.repeat(Schedule.spaced("1 second")),
 *   Stream.groupedWithin(18, "1.5 seconds"),
 *   Stream.take(3)
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then((chunks) => console.log(Chunk.toArray(chunks)))
 * // [
 * //   {
 * //     _id: 'Chunk',
 * //     values: [
 * //       0, 1, 2, 3, 4, 5, 6,
 * //       7, 8, 9, 0, 1, 2, 3,
 * //       4, 5, 6, 7
 * //     ]
 * //   },
 * //   {
 * //     _id: 'Chunk',
 * //     values: [
 * //       8, 9, 0, 1, 2,
 * //       3, 4, 5, 6, 7,
 * //       8, 9
 * //     ]
 * //   },
 * //   {
 * //     _id: 'Chunk',
 * //     values: [
 * //       0, 1, 2, 3, 4, 5, 6,
 * //       7, 8, 9, 0, 1, 2, 3,
 * //       4, 5, 6, 7
 * //     ]
 * //   }
 * // ]
 * ```
 *
 * @since 2.0.0
 * @category grouping
 */
export const groupedWithin: {
  /**
   * Partitions the stream with the specified `chunkSize` or until the specified
   * `duration` has passed, whichever is satisfied first.
   *
   * @example
   * ```ts
   * import { Chunk, Effect, Schedule, Stream } from "effect"
   *
   * const stream = Stream.range(0, 9).pipe(
   *   Stream.repeat(Schedule.spaced("1 second")),
   *   Stream.groupedWithin(18, "1.5 seconds"),
   *   Stream.take(3)
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then((chunks) => console.log(Chunk.toArray(chunks)))
   * // [
   * //   {
   * //     _id: 'Chunk',
   * //     values: [
   * //       0, 1, 2, 3, 4, 5, 6,
   * //       7, 8, 9, 0, 1, 2, 3,
   * //       4, 5, 6, 7
   * //     ]
   * //   },
   * //   {
   * //     _id: 'Chunk',
   * //     values: [
   * //       8, 9, 0, 1, 2,
   * //       3, 4, 5, 6, 7,
   * //       8, 9
   * //     ]
   * //   },
   * //   {
   * //     _id: 'Chunk',
   * //     values: [
   * //       0, 1, 2, 3, 4, 5, 6,
   * //       7, 8, 9, 0, 1, 2, 3,
   * //       4, 5, 6, 7
   * //     ]
   * //   }
   * // ]
   * ```
   *
   * @since 2.0.0
   * @category grouping
   */
  (chunkSize: number, duration: Duration.DurationInput): <A, E, R>(self: Stream<A, E, R>) => Stream<Chunk.Chunk<A>, E, R>
  /**
   * Partitions the stream with the specified `chunkSize` or until the specified
   * `duration` has passed, whichever is satisfied first.
   *
   * @example
   * ```ts
   * import { Chunk, Effect, Schedule, Stream } from "effect"
   *
   * const stream = Stream.range(0, 9).pipe(
   *   Stream.repeat(Schedule.spaced("1 second")),
   *   Stream.groupedWithin(18, "1.5 seconds"),
   *   Stream.take(3)
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then((chunks) => console.log(Chunk.toArray(chunks)))
   * // [
   * //   {
   * //     _id: 'Chunk',
   * //     values: [
   * //       0, 1, 2, 3, 4, 5, 6,
   * //       7, 8, 9, 0, 1, 2, 3,
   * //       4, 5, 6, 7
   * //     ]
   * //   },
   * //   {
   * //     _id: 'Chunk',
   * //     values: [
   * //       8, 9, 0, 1, 2,
   * //       3, 4, 5, 6, 7,
   * //       8, 9
   * //     ]
   * //   },
   * //   {
   * //     _id: 'Chunk',
   * //     values: [
   * //       0, 1, 2, 3, 4, 5, 6,
   * //       7, 8, 9, 0, 1, 2, 3,
   * //       4, 5, 6, 7
   * //     ]
   * //   }
   * // ]
   * ```
   *
   * @since 2.0.0
   * @category grouping
   */
  <A, E, R>(self: Stream<A, E, R>, chunkSize: number, duration: Duration.DurationInput): Stream<Chunk.Chunk<A>, E, R>
} = internal.groupedWithin

/**
 * Specialized version of haltWhen which halts the evaluation of this stream
 * after the given duration.
 *
 * An element in the process of being pulled will not be interrupted when the
 * given duration completes. See `interruptAfter` for this behavior.
 *
 * @since 2.0.0
 * @category utils
 */
export const haltAfter: {
  /**
   * Specialized version of haltWhen which halts the evaluation of this stream
   * after the given duration.
   *
   * An element in the process of being pulled will not be interrupted when the
   * given duration completes. See `interruptAfter` for this behavior.
   *
   * @since 2.0.0
   * @category utils
   */
  (duration: Duration.DurationInput): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Specialized version of haltWhen which halts the evaluation of this stream
   * after the given duration.
   *
   * An element in the process of being pulled will not be interrupted when the
   * given duration completes. See `interruptAfter` for this behavior.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, duration: Duration.DurationInput): Stream<A, E, R>
} = internal.haltAfter

/**
 * Halts the evaluation of this stream when the provided effect completes. The
 * given effect will be forked as part of the returned stream, and its success
 * will be discarded.
 *
 * An element in the process of being pulled will not be interrupted when the
 * effect completes. See `interruptWhen` for this behavior.
 *
 * If the effect completes with a failure, the stream will emit that failure.
 *
 * @since 2.0.0
 * @category utils
 */
export const haltWhen: {
  /**
   * Halts the evaluation of this stream when the provided effect completes. The
   * given effect will be forked as part of the returned stream, and its success
   * will be discarded.
   *
   * An element in the process of being pulled will not be interrupted when the
   * effect completes. See `interruptWhen` for this behavior.
   *
   * If the effect completes with a failure, the stream will emit that failure.
   *
   * @since 2.0.0
   * @category utils
   */
  <X, E2, R2>(effect: Effect.Effect<X, E2, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Halts the evaluation of this stream when the provided effect completes. The
   * given effect will be forked as part of the returned stream, and its success
   * will be discarded.
   *
   * An element in the process of being pulled will not be interrupted when the
   * effect completes. See `interruptWhen` for this behavior.
   *
   * If the effect completes with a failure, the stream will emit that failure.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, X, E2, R2>(self: Stream<A, E, R>, effect: Effect.Effect<X, E2, R2>): Stream<A, E | E2, R | R2>
} = internal.haltWhen

/**
 * Halts the evaluation of this stream when the provided promise resolves.
 *
 * If the promise completes with a failure, the stream will emit that failure.
 *
 * @since 2.0.0
 * @category utils
 */
export const haltWhenDeferred: {
  /**
   * Halts the evaluation of this stream when the provided promise resolves.
   *
   * If the promise completes with a failure, the stream will emit that failure.
   *
   * @since 2.0.0
   * @category utils
   */
  <X, E2>(deferred: Deferred.Deferred<X, E2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R>
  /**
   * Halts the evaluation of this stream when the provided promise resolves.
   *
   * If the promise completes with a failure, the stream will emit that failure.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, X, E2>(self: Stream<A, E, R>, deferred: Deferred.Deferred<X, E2>): Stream<A, E | E2, R>
} = internal.haltWhenDeferred

/**
 * The identity pipeline, which does not modify streams in any way.
 *
 * @since 2.0.0
 * @category utils
 */
export const identity: <A, E = never, R = never>() => Stream<A, E, R> = internal.identityStream

/**
 * Interleaves this stream and the specified stream deterministically by
 * alternating pulling values from this stream and the specified stream. When
 * one stream is exhausted all remaining values in the other stream will be
 * pulled.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const s1 = Stream.make(1, 2, 3)
 * const s2 = Stream.make(4, 5, 6)
 *
 * const stream = Stream.interleave(s1, s2)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 4, 2, 5, 3, 6 ] }
 * ```
 * @since 2.0.0
 * @category utils
 */
export const interleave: {
  /**
   * Interleaves this stream and the specified stream deterministically by
   * alternating pulling values from this stream and the specified stream. When
   * one stream is exhausted all remaining values in the other stream will be
   * pulled.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const s1 = Stream.make(1, 2, 3)
   * const s2 = Stream.make(4, 5, 6)
   *
   * const stream = Stream.interleave(s1, s2)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 1, 4, 2, 5, 3, 6 ] }
   * ```
   * @since 2.0.0
   * @category utils
   */
  <A2, E2, R2>(that: Stream<A2, E2, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A2 | A, E2 | E, R2 | R>
  /**
   * Interleaves this stream and the specified stream deterministically by
   * alternating pulling values from this stream and the specified stream. When
   * one stream is exhausted all remaining values in the other stream will be
   * pulled.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const s1 = Stream.make(1, 2, 3)
   * const s2 = Stream.make(4, 5, 6)
   *
   * const stream = Stream.interleave(s1, s2)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 1, 4, 2, 5, 3, 6 ] }
   * ```
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, that: Stream<A2, E2, R2>): Stream<A | A2, E | E2, R | R2>
} = internal.interleave

/**
 * Combines this stream and the specified stream deterministically using the
 * stream of boolean values `pull` to control which stream to pull from next.
 * A value of `true` indicates to pull from this stream and a value of `false`
 * indicates to pull from the specified stream. Only consumes as many elements
 * as requested by the `pull` stream. If either this stream or the specified
 * stream are exhausted further requests for values from that stream will be
 * ignored.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const s1 = Stream.make(1, 3, 5, 7, 9)
 * const s2 = Stream.make(2, 4, 6, 8, 10)
 *
 * const booleanStream = Stream.make(true, false, false).pipe(Stream.forever)
 *
 * const stream = Stream.interleaveWith(s1, s2, booleanStream)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // {
 * //   _id: 'Chunk',
 * //   values: [
 * //     1, 2,  4, 3, 6,
 * //     8, 5, 10, 7, 9
 * //   ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const interleaveWith: {
  /**
   * Combines this stream and the specified stream deterministically using the
   * stream of boolean values `pull` to control which stream to pull from next.
   * A value of `true` indicates to pull from this stream and a value of `false`
   * indicates to pull from the specified stream. Only consumes as many elements
   * as requested by the `pull` stream. If either this stream or the specified
   * stream are exhausted further requests for values from that stream will be
   * ignored.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const s1 = Stream.make(1, 3, 5, 7, 9)
   * const s2 = Stream.make(2, 4, 6, 8, 10)
   *
   * const booleanStream = Stream.make(true, false, false).pipe(Stream.forever)
   *
   * const stream = Stream.interleaveWith(s1, s2, booleanStream)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // {
   * //   _id: 'Chunk',
   * //   values: [
   * //     1, 2,  4, 3, 6,
   * //     8, 5, 10, 7, 9
   * //   ]
   * // }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A2, E2, R2, E3, R3>(that: Stream<A2, E2, R2>, decider: Stream<boolean, E3, R3>): <A, E, R>(self: Stream<A, E, R>) => Stream<A2 | A, E2 | E3 | E, R2 | R3 | R>
  /**
   * Combines this stream and the specified stream deterministically using the
   * stream of boolean values `pull` to control which stream to pull from next.
   * A value of `true` indicates to pull from this stream and a value of `false`
   * indicates to pull from the specified stream. Only consumes as many elements
   * as requested by the `pull` stream. If either this stream or the specified
   * stream are exhausted further requests for values from that stream will be
   * ignored.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const s1 = Stream.make(1, 3, 5, 7, 9)
   * const s2 = Stream.make(2, 4, 6, 8, 10)
   *
   * const booleanStream = Stream.make(true, false, false).pipe(Stream.forever)
   *
   * const stream = Stream.interleaveWith(s1, s2, booleanStream)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // {
   * //   _id: 'Chunk',
   * //   values: [
   * //     1, 2,  4, 3, 6,
   * //     8, 5, 10, 7, 9
   * //   ]
   * // }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2, E3, R3>(
    self: Stream<A, E, R>,
    that: Stream<A2, E2, R2>,
    decider: Stream<boolean, E3, R3>
  ): Stream<A | A2, E | E2 | E3, R | R2 | R3>
} = internal.interleaveWith

/**
 * Intersperse stream with provided `element`.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3, 4, 5).pipe(Stream.intersperse(0))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // {
 * //   _id: 'Chunk',
 * //   values: [
 * //     1, 0, 2, 0, 3,
 * //     0, 4, 0, 5
 * //   ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const intersperse: {
  /**
   * Intersperse stream with provided `element`.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.make(1, 2, 3, 4, 5).pipe(Stream.intersperse(0))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // {
   * //   _id: 'Chunk',
   * //   values: [
   * //     1, 0, 2, 0, 3,
   * //     0, 4, 0, 5
   * //   ]
   * // }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A2>(element: A2): <A, E, R>(self: Stream<A, E, R>) => Stream<A2 | A, E, R>
  /**
   * Intersperse stream with provided `element`.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.make(1, 2, 3, 4, 5).pipe(Stream.intersperse(0))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // {
   * //   _id: 'Chunk',
   * //   values: [
   * //     1, 0, 2, 0, 3,
   * //     0, 4, 0, 5
   * //   ]
   * // }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2>(self: Stream<A, E, R>, element: A2): Stream<A | A2, E, R>
} = internal.intersperse

/**
 * Intersperse the specified element, also adding a prefix and a suffix.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3, 4, 5).pipe(
 *   Stream.intersperseAffixes({
 *     start: "[",
 *     middle: "-",
 *     end: "]"
 *   })
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // {
 * //   _id: 'Chunk',
 * //   values: [
 * //     '[', 1,   '-', 2,   '-',
 * //     3,   '-', 4,   '-', 5,
 * //     ']'
 * //   ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const intersperseAffixes: {
  /**
   * Intersperse the specified element, also adding a prefix and a suffix.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.make(1, 2, 3, 4, 5).pipe(
   *   Stream.intersperseAffixes({
   *     start: "[",
   *     middle: "-",
   *     end: "]"
   *   })
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // {
   * //   _id: 'Chunk',
   * //   values: [
   * //     '[', 1,   '-', 2,   '-',
   * //     3,   '-', 4,   '-', 5,
   * //     ']'
   * //   ]
   * // }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A2, A3, A4>(options: { readonly start: A2; readonly middle: A3; readonly end: A4 }): <A, E, R>(self: Stream<A, E, R>) => Stream<A2 | A3 | A4 | A, E, R>
  /**
   * Intersperse the specified element, also adding a prefix and a suffix.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.make(1, 2, 3, 4, 5).pipe(
   *   Stream.intersperseAffixes({
   *     start: "[",
   *     middle: "-",
   *     end: "]"
   *   })
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // {
   * //   _id: 'Chunk',
   * //   values: [
   * //     '[', 1,   '-', 2,   '-',
   * //     3,   '-', 4,   '-', 5,
   * //     ']'
   * //   ]
   * // }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, A3, A4>(
    self: Stream<A, E, R>,
    options: { readonly start: A2; readonly middle: A3; readonly end: A4 }
  ): Stream<A | A2 | A3 | A4, E, R>
} = internal.intersperseAffixes

/**
 * Specialized version of `Stream.interruptWhen` which interrupts the
 * evaluation of this stream after the given `Duration`.
 *
 * @since 2.0.0
 * @category utils
 */
export const interruptAfter: {
  /**
   * Specialized version of `Stream.interruptWhen` which interrupts the
   * evaluation of this stream after the given `Duration`.
   *
   * @since 2.0.0
   * @category utils
   */
  (duration: Duration.DurationInput): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Specialized version of `Stream.interruptWhen` which interrupts the
   * evaluation of this stream after the given `Duration`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, duration: Duration.DurationInput): Stream<A, E, R>
} = internal.interruptAfter

/**
 * Interrupts the evaluation of this stream when the provided effect
 * completes. The given effect will be forked as part of this stream, and its
 * success will be discarded. This combinator will also interrupt any
 * in-progress element being pulled from upstream.
 *
 * If the effect completes with a failure before the stream completes, the
 * returned stream will emit that failure.
 *
 * @since 2.0.0
 * @category utils
 */
export const interruptWhen: {
  /**
   * Interrupts the evaluation of this stream when the provided effect
   * completes. The given effect will be forked as part of this stream, and its
   * success will be discarded. This combinator will also interrupt any
   * in-progress element being pulled from upstream.
   *
   * If the effect completes with a failure before the stream completes, the
   * returned stream will emit that failure.
   *
   * @since 2.0.0
   * @category utils
   */
  <X, E2, R2>(effect: Effect.Effect<X, E2, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Interrupts the evaluation of this stream when the provided effect
   * completes. The given effect will be forked as part of this stream, and its
   * success will be discarded. This combinator will also interrupt any
   * in-progress element being pulled from upstream.
   *
   * If the effect completes with a failure before the stream completes, the
   * returned stream will emit that failure.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, X, E2, R2>(self: Stream<A, E, R>, effect: Effect.Effect<X, E2, R2>): Stream<A, E | E2, R | R2>
} = internal.interruptWhen

/**
 * Interrupts the evaluation of this stream when the provided promise
 * resolves. This combinator will also interrupt any in-progress element being
 * pulled from upstream.
 *
 * If the promise completes with a failure, the stream will emit that failure.
 *
 * @since 2.0.0
 * @category utils
 */
export const interruptWhenDeferred: {
  /**
   * Interrupts the evaluation of this stream when the provided promise
   * resolves. This combinator will also interrupt any in-progress element being
   * pulled from upstream.
   *
   * If the promise completes with a failure, the stream will emit that failure.
   *
   * @since 2.0.0
   * @category utils
   */
  <X, E2>(deferred: Deferred.Deferred<X, E2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R>
  /**
   * Interrupts the evaluation of this stream when the provided promise
   * resolves. This combinator will also interrupt any in-progress element being
   * pulled from upstream.
   *
   * If the promise completes with a failure, the stream will emit that failure.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, X, E2>(self: Stream<A, E, R>, deferred: Deferred.Deferred<X, E2>): Stream<A, E | E2, R>
} = internal.interruptWhenDeferred

/**
 * The infinite stream of iterative function application: a, f(a), f(f(a)),
 * f(f(f(a))), ...
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * // An infinite Stream of numbers starting from 1 and incrementing
 * const stream = Stream.iterate(1, (n) => n + 1)
 *
 * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(10)))).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const iterate: <A>(value: A, next: (value: A) => A) => Stream<A> = internal.iterate

/**
 * Creates a stream from an sequence of values.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const make: <As extends Array<any>>(...as: As) => Stream<As[number]> = internal.make

/**
 * Transforms the elements of this stream using the supplied function.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3).pipe(Stream.map((n) => n + 1))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 2, 3, 4 ] }
 * ```
 *
 * @since 2.0.0
 * @category mapping
 */
export const map: {
  /**
   * Transforms the elements of this stream using the supplied function.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.make(1, 2, 3).pipe(Stream.map((n) => n + 1))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 2, 3, 4 ] }
   * ```
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, B>(f: (a: A) => B): <E, R>(self: Stream<A, E, R>) => Stream<B, E, R>
  /**
   * Transforms the elements of this stream using the supplied function.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.make(1, 2, 3).pipe(Stream.map((n) => n + 1))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 2, 3, 4 ] }
   * ```
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, R, B>(self: Stream<A, E, R>, f: (a: A) => B): Stream<B, E, R>
} = internal.map

/**
 * Statefully maps over the elements of this stream to produce new elements.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const runningTotal = (stream: Stream.Stream<number>): Stream.Stream<number> =>
 *   stream.pipe(Stream.mapAccum(0, (s, a) => [s + a, s + a]))
 *
 * // input:  0, 1, 2, 3, 4, 5, 6
 * Effect.runPromise(Stream.runCollect(runningTotal(Stream.range(0, 6)))).then(
 *   console.log
 * )
 * // { _id: "Chunk", values: [ 0, 1, 3, 6, 10, 15, 21 ] }
 * ```
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapAccum: {
  /**
   * Statefully maps over the elements of this stream to produce new elements.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const runningTotal = (stream: Stream.Stream<number>): Stream.Stream<number> =>
   *   stream.pipe(Stream.mapAccum(0, (s, a) => [s + a, s + a]))
   *
   * // input:  0, 1, 2, 3, 4, 5, 6
   * Effect.runPromise(Stream.runCollect(runningTotal(Stream.range(0, 6)))).then(
   *   console.log
   * )
   * // { _id: "Chunk", values: [ 0, 1, 3, 6, 10, 15, 21 ] }
   * ```
   *
   * @since 2.0.0
   * @category mapping
   */
  <S, A, A2>(s: S, f: (s: S, a: A) => readonly [S, A2]): <E, R>(self: Stream<A, E, R>) => Stream<A2, E, R>
  /**
   * Statefully maps over the elements of this stream to produce new elements.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const runningTotal = (stream: Stream.Stream<number>): Stream.Stream<number> =>
   *   stream.pipe(Stream.mapAccum(0, (s, a) => [s + a, s + a]))
   *
   * // input:  0, 1, 2, 3, 4, 5, 6
   * Effect.runPromise(Stream.runCollect(runningTotal(Stream.range(0, 6)))).then(
   *   console.log
   * )
   * // { _id: "Chunk", values: [ 0, 1, 3, 6, 10, 15, 21 ] }
   * ```
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, R, S, A2>(self: Stream<A, E, R>, s: S, f: (s: S, a: A) => readonly [S, A2]): Stream<A2, E, R>
} = internal.mapAccum

/**
 * Statefully and effectfully maps over the elements of this stream to produce
 * new elements.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapAccumEffect: {
  /**
   * Statefully and effectfully maps over the elements of this stream to produce
   * new elements.
   *
   * @since 2.0.0
   * @category mapping
   */
  <S, A, A2, E2, R2>(s: S, f: (s: S, a: A) => Effect.Effect<readonly [S, A2], E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<A2, E2 | E, R2 | R>
  /**
   * Statefully and effectfully maps over the elements of this stream to produce
   * new elements.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, R, S, A2, E2, R2>(
    self: Stream<A, E, R>,
    s: S,
    f: (s: S, a: A) => Effect.Effect<readonly [S, A2], E2, R2>
  ): Stream<A2, E | E2, R | R2>
} = internal.mapAccumEffect

/**
 * Returns a stream whose failure and success channels have been mapped by the
 * specified `onFailure` and `onSuccess` functions.
 *
 * @since 2.0.0
 * @category utils
 */
export const mapBoth: {
  /**
   * Returns a stream whose failure and success channels have been mapped by the
   * specified `onFailure` and `onSuccess` functions.
   *
   * @since 2.0.0
   * @category utils
   */
  <E, E2, A, A2>(
    options: { readonly onFailure: (e: E) => E2; readonly onSuccess: (a: A) => A2 }
  ): <R>(self: Stream<A, E, R>) => Stream<A2, E2, R>
  /**
   * Returns a stream whose failure and success channels have been mapped by the
   * specified `onFailure` and `onSuccess` functions.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, E2, A2>(
    self: Stream<A, E, R>,
    options: { readonly onFailure: (e: E) => E2; readonly onSuccess: (a: A) => A2 }
  ): Stream<A2, E2, R>
} = internal.mapBoth

/**
 * Transforms the chunks emitted by this stream.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapChunks: {
  /**
   * Transforms the chunks emitted by this stream.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, B>(f: (chunk: Chunk.Chunk<A>) => Chunk.Chunk<B>): <E, R>(self: Stream<A, E, R>) => Stream<B, E, R>
  /**
   * Transforms the chunks emitted by this stream.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, R, B>(self: Stream<A, E, R>, f: (chunk: Chunk.Chunk<A>) => Chunk.Chunk<B>): Stream<B, E, R>
} = internal.mapChunks

/**
 * Effectfully transforms the chunks emitted by this stream.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapChunksEffect: {
  /**
   * Effectfully transforms the chunks emitted by this stream.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, B, E2, R2>(f: (chunk: Chunk.Chunk<A>) => Effect.Effect<Chunk.Chunk<B>, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<B, E2 | E, R2 | R>
  /**
   * Effectfully transforms the chunks emitted by this stream.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, R, B, E2, R2>(
    self: Stream<A, E, R>,
    f: (chunk: Chunk.Chunk<A>) => Effect.Effect<Chunk.Chunk<B>, E2, R2>
  ): Stream<B, E | E2, R | R2>
} = internal.mapChunksEffect

/**
 * Maps each element to an iterable, and flattens the iterables into the
 * output of this stream.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const numbers = Stream.make("1-2-3", "4-5", "6").pipe(
 *   Stream.mapConcat((s) => s.split("-")),
 *   Stream.map((s) => parseInt(s))
 * )
 *
 * Effect.runPromise(Stream.runCollect(numbers)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5, 6 ] }
 * ```
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapConcat: {
  /**
   * Maps each element to an iterable, and flattens the iterables into the
   * output of this stream.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const numbers = Stream.make("1-2-3", "4-5", "6").pipe(
   *   Stream.mapConcat((s) => s.split("-")),
   *   Stream.map((s) => parseInt(s))
   * )
   *
   * Effect.runPromise(Stream.runCollect(numbers)).then(console.log)
   * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5, 6 ] }
   * ```
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, A2>(f: (a: A) => Iterable<A2>): <E, R>(self: Stream<A, E, R>) => Stream<A2, E, R>
  /**
   * Maps each element to an iterable, and flattens the iterables into the
   * output of this stream.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const numbers = Stream.make("1-2-3", "4-5", "6").pipe(
   *   Stream.mapConcat((s) => s.split("-")),
   *   Stream.map((s) => parseInt(s))
   * )
   *
   * Effect.runPromise(Stream.runCollect(numbers)).then(console.log)
   * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5, 6 ] }
   * ```
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, R, A2>(self: Stream<A, E, R>, f: (a: A) => Iterable<A2>): Stream<A2, E, R>
} = internal.mapConcat

/**
 * Maps each element to a chunk, and flattens the chunks into the output of
 * this stream.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapConcatChunk: {
  /**
   * Maps each element to a chunk, and flattens the chunks into the output of
   * this stream.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, A2>(f: (a: A) => Chunk.Chunk<A2>): <E, R>(self: Stream<A, E, R>) => Stream<A2, E, R>
  /**
   * Maps each element to a chunk, and flattens the chunks into the output of
   * this stream.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, R, A2>(self: Stream<A, E, R>, f: (a: A) => Chunk.Chunk<A2>): Stream<A2, E, R>
} = internal.mapConcatChunk

/**
 * Effectfully maps each element to a chunk, and flattens the chunks into the
 * output of this stream.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapConcatChunkEffect: {
  /**
   * Effectfully maps each element to a chunk, and flattens the chunks into the
   * output of this stream.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, A2, E2, R2>(f: (a: A) => Effect.Effect<Chunk.Chunk<A2>, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<A2, E2 | E, R2 | R>
  /**
   * Effectfully maps each element to a chunk, and flattens the chunks into the
   * output of this stream.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, f: (a: A) => Effect.Effect<Chunk.Chunk<A2>, E2, R2>): Stream<A2, E | E2, R | R2>
} = internal.mapConcatChunkEffect

/**
 * Effectfully maps each element to an iterable, and flattens the iterables
 * into the output of this stream.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapConcatEffect: {
  /**
   * Effectfully maps each element to an iterable, and flattens the iterables
   * into the output of this stream.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, A2, E2, R2>(f: (a: A) => Effect.Effect<Iterable<A2>, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<A2, E2 | E, R2 | R>
  /**
   * Effectfully maps each element to an iterable, and flattens the iterables
   * into the output of this stream.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, f: (a: A) => Effect.Effect<Iterable<A2>, E2, R2>): Stream<A2, E | E2, R | R2>
} = internal.mapConcatEffect

/**
 * Maps over elements of the stream with the specified effectful function.
 *
 * @example
 * ```ts
 * import { Effect, Random, Stream } from "effect"
 *
 * const stream = Stream.make(10, 20, 30).pipe(
 *   Stream.mapEffect((n) => Random.nextIntBetween(0, n))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // Example Output: { _id: 'Chunk', values: [ 7, 19, 8 ] }
 * ```
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapEffect: {
  /**
   * Maps over elements of the stream with the specified effectful function.
   *
   * @example
   * ```ts
   * import { Effect, Random, Stream } from "effect"
   *
   * const stream = Stream.make(10, 20, 30).pipe(
   *   Stream.mapEffect((n) => Random.nextIntBetween(0, n))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // Example Output: { _id: 'Chunk', values: [ 7, 19, 8 ] }
   * ```
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, A2, E2, R2>(
    f: (a: A) => Effect.Effect<A2, E2, R2>,
    options?:
      | { readonly concurrency?: number | "unbounded" | undefined; readonly unordered?: boolean | undefined }
      | undefined
  ): <E, R>(self: Stream<A, E, R>) => Stream<A2, E2 | E, R2 | R>
  /**
   * Maps over elements of the stream with the specified effectful function.
   *
   * @example
   * ```ts
   * import { Effect, Random, Stream } from "effect"
   *
   * const stream = Stream.make(10, 20, 30).pipe(
   *   Stream.mapEffect((n) => Random.nextIntBetween(0, n))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // Example Output: { _id: 'Chunk', values: [ 7, 19, 8 ] }
   * ```
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, A2, E2, R2, K>(
    f: (a: A) => Effect.Effect<A2, E2, R2>,
    options: { readonly key: (a: A) => K; readonly bufferSize?: number | undefined }
  ): <E, R>(self: Stream<A, E, R>) => Stream<A2, E2 | E, R2 | R>
  /**
   * Maps over elements of the stream with the specified effectful function.
   *
   * @example
   * ```ts
   * import { Effect, Random, Stream } from "effect"
   *
   * const stream = Stream.make(10, 20, 30).pipe(
   *   Stream.mapEffect((n) => Random.nextIntBetween(0, n))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // Example Output: { _id: 'Chunk', values: [ 7, 19, 8 ] }
   * ```
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, R, A2, E2, R2>(
    self: Stream<A, E, R>,
    f: (a: A) => Effect.Effect<A2, E2, R2>,
    options?:
      | { readonly concurrency?: number | "unbounded" | undefined; readonly unordered?: boolean | undefined }
      | undefined
  ): Stream<A2, E | E2, R | R2>
  /**
   * Maps over elements of the stream with the specified effectful function.
   *
   * @example
   * ```ts
   * import { Effect, Random, Stream } from "effect"
   *
   * const stream = Stream.make(10, 20, 30).pipe(
   *   Stream.mapEffect((n) => Random.nextIntBetween(0, n))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // Example Output: { _id: 'Chunk', values: [ 7, 19, 8 ] }
   * ```
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, R, A2, E2, R2, K>(
    self: Stream<A, E, R>,
    f: (a: A) => Effect.Effect<A2, E2, R2>,
    options: { readonly key: (a: A) => K; readonly bufferSize?: number | undefined }
  ): Stream<A2, E | E2, R | R2>
} = groupBy_.mapEffectOptions

/**
 * Transforms the errors emitted by this stream using `f`.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapError: {
  /**
   * Transforms the errors emitted by this stream using `f`.
   *
   * @since 2.0.0
   * @category mapping
   */
  <E, E2>(f: (error: E) => E2): <A, R>(self: Stream<A, E, R>) => Stream<A, E2, R>
  /**
   * Transforms the errors emitted by this stream using `f`.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, R, E2>(self: Stream<A, E, R>, f: (error: E) => E2): Stream<A, E2, R>
} = internal.mapError

/**
 * Transforms the full causes of failures emitted by this stream.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapErrorCause: {
  /**
   * Transforms the full causes of failures emitted by this stream.
   *
   * @since 2.0.0
   * @category mapping
   */
  <E, E2>(f: (cause: Cause.Cause<E>) => Cause.Cause<E2>): <A, R>(self: Stream<A, E, R>) => Stream<A, E2, R>
  /**
   * Transforms the full causes of failures emitted by this stream.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, R, E2>(self: Stream<A, E, R>, f: (cause: Cause.Cause<E>) => Cause.Cause<E2>): Stream<A, E2, R>
} = internal.mapErrorCause

/**
 * Merges this stream and the specified stream together.
 *
 * New produced stream will terminate when both specified stream terminate if
 * no termination strategy is specified.
 *
 * @example
 * ```ts
 * import { Effect, Schedule, Stream } from "effect"
 *
 * const s1 = Stream.make(1, 2, 3).pipe(
 *   Stream.schedule(Schedule.spaced("100 millis"))
 * )
 * const s2 = Stream.make(4, 5, 6).pipe(
 *   Stream.schedule(Schedule.spaced("200 millis"))
 * )
 *
 * const stream = Stream.merge(s1, s2)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 4, 2, 3, 5, 6 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const merge: {
  /**
   * Merges this stream and the specified stream together.
   *
   * New produced stream will terminate when both specified stream terminate if
   * no termination strategy is specified.
   *
   * @example
   * ```ts
   * import { Effect, Schedule, Stream } from "effect"
   *
   * const s1 = Stream.make(1, 2, 3).pipe(
   *   Stream.schedule(Schedule.spaced("100 millis"))
   * )
   * const s2 = Stream.make(4, 5, 6).pipe(
   *   Stream.schedule(Schedule.spaced("200 millis"))
   * )
   *
   * const stream = Stream.merge(s1, s2)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 1, 4, 2, 3, 5, 6 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A2, E2, R2>(
    that: Stream<A2, E2, R2>,
    options?: { readonly haltStrategy?: HaltStrategy.HaltStrategyInput | undefined } | undefined
  ): <A, E, R>(self: Stream<A, E, R>) => Stream<A2 | A, E2 | E, R2 | R>
  /**
   * Merges this stream and the specified stream together.
   *
   * New produced stream will terminate when both specified stream terminate if
   * no termination strategy is specified.
   *
   * @example
   * ```ts
   * import { Effect, Schedule, Stream } from "effect"
   *
   * const s1 = Stream.make(1, 2, 3).pipe(
   *   Stream.schedule(Schedule.spaced("100 millis"))
   * )
   * const s2 = Stream.make(4, 5, 6).pipe(
   *   Stream.schedule(Schedule.spaced("200 millis"))
   * )
   *
   * const stream = Stream.merge(s1, s2)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 1, 4, 2, 3, 5, 6 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2>(
    self: Stream<A, E, R>,
    that: Stream<A2, E2, R2>,
    options?: { readonly haltStrategy?: HaltStrategy.HaltStrategyInput | undefined } | undefined
  ): Stream<A | A2, E | E2, R | R2>
} = internal.merge

/**
 * Merges a variable list of streams in a non-deterministic fashion. Up to `n`
 * streams may be consumed in parallel and up to `outputBuffer` chunks may be
 * buffered by this operator.
 *
 * @since 2.0.0
 * @category utils
 */
export const mergeAll: {
  /**
   * Merges a variable list of streams in a non-deterministic fashion. Up to `n`
   * streams may be consumed in parallel and up to `outputBuffer` chunks may be
   * buffered by this operator.
   *
   * @since 2.0.0
   * @category utils
   */
  (
    options: {
      readonly concurrency: number | "unbounded"
      readonly bufferSize?: number | undefined
    }
  ): <A, E, R>(streams: Iterable<Stream<A, E, R>>) => Stream<A, E, R>
  /**
   * Merges a variable list of streams in a non-deterministic fashion. Up to `n`
   * streams may be consumed in parallel and up to `outputBuffer` chunks may be
   * buffered by this operator.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(
    streams: Iterable<Stream<A, E, R>>,
    options: {
      readonly concurrency: number | "unbounded"
      readonly bufferSize?: number | undefined
    }
  ): Stream<A, E, R>
} = internal.mergeAll

/**
 * Merges a struct of streams into a single stream of tagged values.
 * @category combinators
 * @since 3.8.5
 *
 * @example
 * ```ts
 * import { Stream } from "effect"
 * // Stream.Stream<{ _tag: "a"; value: number; } | { _tag: "b"; value: string; }>
 * const res = Stream.mergeWithTag({
 *    a: Stream.make(0),
 *    b: Stream.make("")
 * }, { concurrency: "unbounded" })
 * ```
 */
export const mergeWithTag: {
  /**
   * Merges a struct of streams into a single stream of tagged values.
   * @category combinators
   * @since 3.8.5
   *
   * @example
   * ```ts
   * import { Stream } from "effect"
   * // Stream.Stream<{ _tag: "a"; value: number; } | { _tag: "b"; value: string; }>
   * const res = Stream.mergeWithTag({
   *    a: Stream.make(0),
   *    b: Stream.make("")
   * }, { concurrency: "unbounded" })
   * ```
   */
  <S extends { [k in string]: Stream<any, any, any> }>(
    streams: S,
    options: {
      readonly concurrency: number | "unbounded"
      readonly bufferSize?: number | undefined
    }
  ): Stream<
    { [K in keyof S]: { _tag: K; value: Stream.Success<S[K]> } }[keyof S],
    Stream.Error<S[keyof S]>,
    Stream.Context<S[keyof S]>
  >
  /**
   * Merges a struct of streams into a single stream of tagged values.
   * @category combinators
   * @since 3.8.5
   *
   * @example
   * ```ts
   * import { Stream } from "effect"
   * // Stream.Stream<{ _tag: "a"; value: number; } | { _tag: "b"; value: string; }>
   * const res = Stream.mergeWithTag({
   *    a: Stream.make(0),
   *    b: Stream.make("")
   * }, { concurrency: "unbounded" })
   * ```
   */
  (
    options: {
      readonly concurrency: number | "unbounded"
      readonly bufferSize?: number | undefined
    }
  ): <S extends { [k in string]: Stream<any, any, any> }>(streams: S) => Stream<
    { [K in keyof S]: { _tag: K; value: Stream.Success<S[K]> } }[keyof S],
    Stream.Error<S[keyof S]>,
    Stream.Context<S[keyof S]>
  >
} = internal.mergeWithTag

/**
 * Merges this stream and the specified stream together to a common element
 * type with the specified mapping functions.
 *
 * New produced stream will terminate when both specified stream terminate if
 * no termination strategy is specified.
 *
 * @example
 * ```ts
 * import { Effect, Schedule, Stream } from "effect"
 *
 * const s1 = Stream.make("1", "2", "3").pipe(
 *   Stream.schedule(Schedule.spaced("100 millis"))
 * )
 * const s2 = Stream.make(4.1, 5.3, 6.2).pipe(
 *   Stream.schedule(Schedule.spaced("200 millis"))
 * )
 *
 * const stream = Stream.mergeWith(s1, s2, {
 *   onSelf: (s) => parseInt(s),
 *   onOther: (n) => Math.floor(n)
 * })
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 4, 2, 3, 5, 6 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const mergeWith: {
  /**
   * Merges this stream and the specified stream together to a common element
   * type with the specified mapping functions.
   *
   * New produced stream will terminate when both specified stream terminate if
   * no termination strategy is specified.
   *
   * @example
   * ```ts
   * import { Effect, Schedule, Stream } from "effect"
   *
   * const s1 = Stream.make("1", "2", "3").pipe(
   *   Stream.schedule(Schedule.spaced("100 millis"))
   * )
   * const s2 = Stream.make(4.1, 5.3, 6.2).pipe(
   *   Stream.schedule(Schedule.spaced("200 millis"))
   * )
   *
   * const stream = Stream.mergeWith(s1, s2, {
   *   onSelf: (s) => parseInt(s),
   *   onOther: (n) => Math.floor(n)
   * })
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 1, 4, 2, 3, 5, 6 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A2, E2, R2, A, A3, A4>(
    other: Stream<A2, E2, R2>,
    options: {
      readonly onSelf: (a: A) => A3
      readonly onOther: (a2: A2) => A4
      readonly haltStrategy?: HaltStrategy.HaltStrategyInput | undefined
    }
  ): <E, R>(self: Stream<A, E, R>) => Stream<A3 | A4, E2 | E, R2 | R>
  /**
   * Merges this stream and the specified stream together to a common element
   * type with the specified mapping functions.
   *
   * New produced stream will terminate when both specified stream terminate if
   * no termination strategy is specified.
   *
   * @example
   * ```ts
   * import { Effect, Schedule, Stream } from "effect"
   *
   * const s1 = Stream.make("1", "2", "3").pipe(
   *   Stream.schedule(Schedule.spaced("100 millis"))
   * )
   * const s2 = Stream.make(4.1, 5.3, 6.2).pipe(
   *   Stream.schedule(Schedule.spaced("200 millis"))
   * )
   *
   * const stream = Stream.mergeWith(s1, s2, {
   *   onSelf: (s) => parseInt(s),
   *   onOther: (n) => Math.floor(n)
   * })
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 1, 4, 2, 3, 5, 6 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2, A3, A4>(
    self: Stream<A, E, R>,
    other: Stream<A2, E2, R2>,
    options: {
      readonly onSelf: (a: A) => A3
      readonly onOther: (a2: A2) => A4
      readonly haltStrategy?: HaltStrategy.HaltStrategyInput | undefined
    }
  ): Stream<A3 | A4, E | E2, R | R2>
} = internal.mergeWith

/**
 * Merges this stream and the specified stream together to produce a stream of
 * eithers.
 *
 * @since 2.0.0
 * @category utils
 */
export const mergeEither: {
  /**
   * Merges this stream and the specified stream together to produce a stream of
   * eithers.
   *
   * @since 2.0.0
   * @category utils
   */
  <A2, E2, R2>(that: Stream<A2, E2, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<Either.Either<A2, A>, E2 | E, R2 | R>
  /**
   * Merges this stream and the specified stream together to produce a stream of
   * eithers.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, that: Stream<A2, E2, R2>): Stream<Either.Either<A2, A>, E | E2, R | R2>
} = internal.mergeEither

/**
 * Merges this stream and the specified stream together, discarding the values
 * from the right stream.
 *
 * @since 2.0.0
 * @category utils
 */
export const mergeLeft: {
  /**
   * Merges this stream and the specified stream together, discarding the values
   * from the right stream.
   *
   * @since 2.0.0
   * @category utils
   */
  <AR, ER, RR>(right: Stream<AR, ER, RR>): <AL, EL, RL>(left: Stream<AL, EL, RL>) => Stream<AL, ER | EL, RR | RL>
  /**
   * Merges this stream and the specified stream together, discarding the values
   * from the right stream.
   *
   * @since 2.0.0
   * @category utils
   */
  <AL, EL, RL, AR, ER, RR>(left: Stream<AL, EL, RL>, right: Stream<AR, ER, RR>): Stream<AL, EL | ER, RL | RR>
} = internal.mergeLeft

/**
 * Merges this stream and the specified stream together, discarding the values
 * from the left stream.
 *
 * @since 2.0.0
 * @category utils
 */
export const mergeRight: {
  /**
   * Merges this stream and the specified stream together, discarding the values
   * from the left stream.
   *
   * @since 2.0.0
   * @category utils
   */
  <AR, ER, RR>(right: Stream<AR, ER, RR>): <AL, EL, RL>(left: Stream<AL, EL, RL>) => Stream<AR, ER | EL, RR | RL>
  /**
   * Merges this stream and the specified stream together, discarding the values
   * from the left stream.
   *
   * @since 2.0.0
   * @category utils
   */
  <AL, EL, RL, AR, ER, RR>(left: Stream<AL, EL, RL>, right: Stream<AR, ER, RR>): Stream<AR, EL | ER, RL | RR>
} = internal.mergeRight

/**
 * Returns a combined string resulting from concatenating each of the values
 * from the stream.
 *
 * @since 2.0.0
 * @category utils
 */
export const mkString: <E, R>(self: Stream<string, E, R>) => Effect.Effect<string, E, R> = internal.mkString

/**
 * The stream that never produces any value or fails with any error.
 *
 * @since 2.0.0
 * @category constructors
 */
export const never: Stream<never> = internal.never

/**
 * Adds an effect to be executed at the end of the stream.
 *
 * @example
 * ```ts
 * import { Console, Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3).pipe(
 *   Stream.map((n) => n * 2),
 *   Stream.tap((n) => Console.log(`after mapping: ${n}`)),
 *   Stream.onEnd(Console.log("Stream ended"))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // after mapping: 2
 * // after mapping: 4
 * // after mapping: 6
 * // Stream ended
 * // { _id: 'Chunk', values: [ 2, 4, 6 ] }
 * ```
 *
 * @since 3.6.0
 * @category sequencing
 */
export const onEnd: {
  /**
   * Adds an effect to be executed at the end of the stream.
   *
   * @example
   * ```ts
   * import { Console, Effect, Stream } from "effect"
   *
   * const stream = Stream.make(1, 2, 3).pipe(
   *   Stream.map((n) => n * 2),
   *   Stream.tap((n) => Console.log(`after mapping: ${n}`)),
   *   Stream.onEnd(Console.log("Stream ended"))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // after mapping: 2
   * // after mapping: 4
   * // after mapping: 6
   * // Stream ended
   * // { _id: 'Chunk', values: [ 2, 4, 6 ] }
   * ```
   *
   * @since 3.6.0
   * @category sequencing
   */
  <_, E2, R2>(effect: Effect.Effect<_, E2, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Adds an effect to be executed at the end of the stream.
   *
   * @example
   * ```ts
   * import { Console, Effect, Stream } from "effect"
   *
   * const stream = Stream.make(1, 2, 3).pipe(
   *   Stream.map((n) => n * 2),
   *   Stream.tap((n) => Console.log(`after mapping: ${n}`)),
   *   Stream.onEnd(Console.log("Stream ended"))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // after mapping: 2
   * // after mapping: 4
   * // after mapping: 6
   * // Stream ended
   * // { _id: 'Chunk', values: [ 2, 4, 6 ] }
   * ```
   *
   * @since 3.6.0
   * @category sequencing
   */
  <A, E, R, _, E2, R2>(self: Stream<A, E, R>, effect: Effect.Effect<_, E2, R2>): Stream<A, E | E2, R | R2>
} = internal.onEnd

/**
 * Runs the specified effect if this stream fails, providing the error to the
 * effect if it exists.
 *
 * Note: Unlike `Effect.onError` there is no guarantee that the provided
 * effect will not be interrupted.
 *
 * @since 2.0.0
 * @category utils
 */
export const onError: {
  /**
   * Runs the specified effect if this stream fails, providing the error to the
   * effect if it exists.
   *
   * Note: Unlike `Effect.onError` there is no guarantee that the provided
   * effect will not be interrupted.
   *
   * @since 2.0.0
   * @category utils
   */
  <E, X, R2>(cleanup: (cause: Cause.Cause<E>) => Effect.Effect<X, never, R2>): <A, R>(self: Stream<A, E, R>) => Stream<A, E, R2 | R>
  /**
   * Runs the specified effect if this stream fails, providing the error to the
   * effect if it exists.
   *
   * Note: Unlike `Effect.onError` there is no guarantee that the provided
   * effect will not be interrupted.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, X, R2>(
    self: Stream<A, E, R>,
    cleanup: (cause: Cause.Cause<E>) => Effect.Effect<X, never, R2>
  ): Stream<A, E, R | R2>
} = internal.onError

/**
 * Runs the specified effect if this stream ends.
 *
 * @since 2.0.0
 * @category utils
 */
export const onDone: {
  /**
   * Runs the specified effect if this stream ends.
   *
   * @since 2.0.0
   * @category utils
   */
  <X, R2>(cleanup: () => Effect.Effect<X, never, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R2 | R>
  /**
   * Runs the specified effect if this stream ends.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, X, R2>(self: Stream<A, E, R>, cleanup: () => Effect.Effect<X, never, R2>): Stream<A, E, R | R2>
} = internal.onDone

/**
 * Adds an effect to be executed at the start of the stream.
 *
 * @example
 * ```ts
 * import { Console, Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3).pipe(
 *   Stream.onStart(Console.log("Stream started")),
 *   Stream.map((n) => n * 2),
 *   Stream.tap((n) => Console.log(`after mapping: ${n}`))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // Stream started
 * // after mapping: 2
 * // after mapping: 4
 * // after mapping: 6
 * // { _id: 'Chunk', values: [ 2, 4, 6 ] }
 * ```
 *
 * @since 3.6.0
 * @category sequencing
 */
export const onStart: {
  /**
   * Adds an effect to be executed at the start of the stream.
   *
   * @example
   * ```ts
   * import { Console, Effect, Stream } from "effect"
   *
   * const stream = Stream.make(1, 2, 3).pipe(
   *   Stream.onStart(Console.log("Stream started")),
   *   Stream.map((n) => n * 2),
   *   Stream.tap((n) => Console.log(`after mapping: ${n}`))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // Stream started
   * // after mapping: 2
   * // after mapping: 4
   * // after mapping: 6
   * // { _id: 'Chunk', values: [ 2, 4, 6 ] }
   * ```
   *
   * @since 3.6.0
   * @category sequencing
   */
  <_, E2, R2>(effect: Effect.Effect<_, E2, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Adds an effect to be executed at the start of the stream.
   *
   * @example
   * ```ts
   * import { Console, Effect, Stream } from "effect"
   *
   * const stream = Stream.make(1, 2, 3).pipe(
   *   Stream.onStart(Console.log("Stream started")),
   *   Stream.map((n) => n * 2),
   *   Stream.tap((n) => Console.log(`after mapping: ${n}`))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // Stream started
   * // after mapping: 2
   * // after mapping: 4
   * // after mapping: 6
   * // { _id: 'Chunk', values: [ 2, 4, 6 ] }
   * ```
   *
   * @since 3.6.0
   * @category sequencing
   */
  <A, E, R, _, E2, R2>(self: Stream<A, E, R>, effect: Effect.Effect<_, E2, R2>): Stream<A, E | E2, R | R2>
} = internal.onStart

/**
 * Translates any failure into a stream termination, making the stream
 * infallible and all failures unchecked.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orDie: <A, E, R>(self: Stream<A, E, R>) => Stream<A, never, R> = internal.orDie

/**
 * Keeps none of the errors, and terminates the stream with them, using the
 * specified function to convert the `E` into a defect.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orDieWith: {
  /**
   * Keeps none of the errors, and terminates the stream with them, using the
   * specified function to convert the `E` into a defect.
   *
   * @since 2.0.0
   * @category error handling
   */
  <E>(f: (e: E) => unknown): <A, R>(self: Stream<A, E, R>) => Stream<A, never, R>
  /**
   * Keeps none of the errors, and terminates the stream with them, using the
   * specified function to convert the `E` into a defect.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A, E, R>(self: Stream<A, E, R>, f: (e: E) => unknown): Stream<A, never, R>
} = internal.orDieWith

/**
 * Switches to the provided stream in case this one fails with a typed error.
 *
 * See also `Stream.catchAll`.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orElse: {
  /**
   * Switches to the provided stream in case this one fails with a typed error.
   *
   * See also `Stream.catchAll`.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A2, E2, R2>(that: LazyArg<Stream<A2, E2, R2>>): <A, E, R>(self: Stream<A, E, R>) => Stream<A2 | A, E2, R2 | R>
  /**
   * Switches to the provided stream in case this one fails with a typed error.
   *
   * See also `Stream.catchAll`.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, that: LazyArg<Stream<A2, E2, R2>>): Stream<A | A2, E2, R | R2>
} = internal.orElse

/**
 * Switches to the provided stream in case this one fails with a typed error.
 *
 * See also `Stream.catchAll`.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orElseEither: {
  /**
   * Switches to the provided stream in case this one fails with a typed error.
   *
   * See also `Stream.catchAll`.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A2, E2, R2>(that: LazyArg<Stream<A2, E2, R2>>): <A, E, R>(self: Stream<A, E, R>) => Stream<Either.Either<A2, A>, E2, R2 | R>
  /**
   * Switches to the provided stream in case this one fails with a typed error.
   *
   * See also `Stream.catchAll`.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, that: LazyArg<Stream<A2, E2, R2>>): Stream<Either.Either<A2, A>, E2, R | R2>
} = internal.orElseEither

/**
 * Fails with given error in case this one fails with a typed error.
 *
 * See also `Stream.catchAll`.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orElseFail: {
  /**
   * Fails with given error in case this one fails with a typed error.
   *
   * See also `Stream.catchAll`.
   *
   * @since 2.0.0
   * @category error handling
   */
  <E2>(error: LazyArg<E2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E2, R>
  /**
   * Fails with given error in case this one fails with a typed error.
   *
   * See also `Stream.catchAll`.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A, E, R, E2>(self: Stream<A, E, R>, error: LazyArg<E2>): Stream<A, E2, R>
} = internal.orElseFail

/**
 * Produces the specified element if this stream is empty.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orElseIfEmpty: {
  /**
   * Produces the specified element if this stream is empty.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A2>(element: LazyArg<A2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A2 | A, E, R>
  /**
   * Produces the specified element if this stream is empty.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A, E, R, A2>(self: Stream<A, E, R>, element: LazyArg<A2>): Stream<A | A2, E, R>
} = internal.orElseIfEmpty

/**
 * Produces the specified chunk if this stream is empty.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orElseIfEmptyChunk: {
  /**
   * Produces the specified chunk if this stream is empty.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A2>(chunk: LazyArg<Chunk.Chunk<A2>>): <A, E, R>(self: Stream<A, E, R>) => Stream<A2 | A, E, R>
  /**
   * Produces the specified chunk if this stream is empty.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A, E, R, A2>(self: Stream<A, E, R>, chunk: LazyArg<Chunk.Chunk<A2>>): Stream<A | A2, E, R>
} = internal.orElseIfEmptyChunk

/**
 * Switches to the provided stream in case this one is empty.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orElseIfEmptyStream: {
  /**
   * Switches to the provided stream in case this one is empty.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A2, E2, R2>(stream: LazyArg<Stream<A2, E2, R2>>): <A, E, R>(self: Stream<A, E, R>) => Stream<A2 | A, E2 | E, R2 | R>
  /**
   * Switches to the provided stream in case this one is empty.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, stream: LazyArg<Stream<A2, E2, R2>>): Stream<A | A2, E | E2, R | R2>
} = internal.orElseIfEmptyStream

/**
 * Succeeds with the specified value if this one fails with a typed error.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orElseSucceed: {
  /**
   * Succeeds with the specified value if this one fails with a typed error.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A2>(value: LazyArg<A2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A2 | A, never, R>
  /**
   * Succeeds with the specified value if this one fails with a typed error.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A, E, R, A2>(self: Stream<A, E, R>, value: LazyArg<A2>): Stream<A | A2, never, R>
} = internal.orElseSucceed

/**
 * Like `Stream.unfold`, but allows the emission of values to end one step further
 * than the unfolding of the state. This is useful for embedding paginated
 * APIs, hence the name.
 *
 * @example
 * ```ts
 * import { Effect, Option, Stream } from "effect"
 *
 * const stream = Stream.paginate(0, (n) => [
 *   n,
 *   n < 3 ? Option.some(n + 1) : Option.none()
 * ])
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 0, 1, 2, 3 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const paginate: <S, A>(s: S, f: (s: S) => readonly [A, Option.Option<S>]) => Stream<A> = internal.paginate

/**
 * Like `Stream.unfoldChunk`, but allows the emission of values to end one step
 * further than the unfolding of the state. This is useful for embedding
 * paginated APIs, hence the name.
 *
 * @since 2.0.0
 * @category constructors
 */
export const paginateChunk: <S, A>(
  s: S,
  f: (s: S) => readonly [Chunk.Chunk<A>, Option.Option<S>]
) => Stream<A> = internal.paginateChunk

/**
 * Like `Stream.unfoldChunkEffect`, but allows the emission of values to end one step
 * further than the unfolding of the state. This is useful for embedding
 * paginated APIs, hence the name.
 *
 * @since 2.0.0
 * @category constructors
 */
export const paginateChunkEffect: <S, A, E, R>(
  s: S,
  f: (s: S) => Effect.Effect<readonly [Chunk.Chunk<A>, Option.Option<S>], E, R>
) => Stream<A, E, R> = internal.paginateChunkEffect

/**
 * Like `Stream.unfoldEffect` but allows the emission of values to end one step
 * further than the unfolding of the state. This is useful for embedding
 * paginated APIs, hence the name.
 *
 * @since 2.0.0
 * @category constructors
 */
export const paginateEffect: <S, A, E, R>(
  s: S,
  f: (s: S) => Effect.Effect<readonly [A, Option.Option<S>], E, R>
) => Stream<A, E, R> = internal.paginateEffect

/**
 * Splits a stream into two substreams based on a predicate.
 *
 * **Details**
 *
 * The `Stream.partition` function splits a stream into two parts: one for
 * elements that satisfy the predicate (evaluated to `true`) and another for
 * those that do not (evaluated to `false`).
 *
 * The faster stream may advance up to `bufferSize` elements ahead of the slower
 * one.
 *
 * **Example** (Partitioning a Stream into Even and Odd Numbers)
 *
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const partition = Stream.range(1, 9).pipe(
 *   Stream.partition((n) => n % 2 === 0, { bufferSize: 5 })
 * )
 *
 * const program = Effect.scoped(
 *   Effect.gen(function*() {
 *     const [odds, evens] = yield* partition
 *     console.log(yield* Stream.runCollect(odds))
 *     console.log(yield* Stream.runCollect(evens))
 *   })
 * )
 *
 * Effect.runPromise(program)
 * // { _id: 'Chunk', values: [ 1, 3, 5, 7, 9 ] }
 * // { _id: 'Chunk', values: [ 2, 4, 6, 8 ] }
 * ```
 *
 * @see {@link partitionEither} for partitioning a stream based on effectful
 * conditions.
 *
 * @since 2.0.0
 * @category utils
 */
export const partition: {
  /**
   * Splits a stream into two substreams based on a predicate.
   *
   * **Details**
   *
   * The `Stream.partition` function splits a stream into two parts: one for
   * elements that satisfy the predicate (evaluated to `true`) and another for
   * those that do not (evaluated to `false`).
   *
   * The faster stream may advance up to `bufferSize` elements ahead of the slower
   * one.
   *
   * **Example** (Partitioning a Stream into Even and Odd Numbers)
   *
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const partition = Stream.range(1, 9).pipe(
   *   Stream.partition((n) => n % 2 === 0, { bufferSize: 5 })
   * )
   *
   * const program = Effect.scoped(
   *   Effect.gen(function*() {
   *     const [odds, evens] = yield* partition
   *     console.log(yield* Stream.runCollect(odds))
   *     console.log(yield* Stream.runCollect(evens))
   *   })
   * )
   *
   * Effect.runPromise(program)
   * // { _id: 'Chunk', values: [ 1, 3, 5, 7, 9 ] }
   * // { _id: 'Chunk', values: [ 2, 4, 6, 8 ] }
   * ```
   *
   * @see {@link partitionEither} for partitioning a stream based on effectful
   * conditions.
   *
   * @since 2.0.0
   * @category utils
   */
  <C extends A, B extends A, A = C>(
    refinement: Refinement<NoInfer<A>, B>,
    options?: { bufferSize?: number | undefined } | undefined
  ): <E, R>(
    self: Stream<C, E, R>
  ) => Effect.Effect<[excluded: Stream<Exclude<C, B>, E, never>, satisfying: Stream<B, E, never>], E, R | Scope.Scope>
  /**
   * Splits a stream into two substreams based on a predicate.
   *
   * **Details**
   *
   * The `Stream.partition` function splits a stream into two parts: one for
   * elements that satisfy the predicate (evaluated to `true`) and another for
   * those that do not (evaluated to `false`).
   *
   * The faster stream may advance up to `bufferSize` elements ahead of the slower
   * one.
   *
   * **Example** (Partitioning a Stream into Even and Odd Numbers)
   *
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const partition = Stream.range(1, 9).pipe(
   *   Stream.partition((n) => n % 2 === 0, { bufferSize: 5 })
   * )
   *
   * const program = Effect.scoped(
   *   Effect.gen(function*() {
   *     const [odds, evens] = yield* partition
   *     console.log(yield* Stream.runCollect(odds))
   *     console.log(yield* Stream.runCollect(evens))
   *   })
   * )
   *
   * Effect.runPromise(program)
   * // { _id: 'Chunk', values: [ 1, 3, 5, 7, 9 ] }
   * // { _id: 'Chunk', values: [ 2, 4, 6, 8 ] }
   * ```
   *
   * @see {@link partitionEither} for partitioning a stream based on effectful
   * conditions.
   *
   * @since 2.0.0
   * @category utils
   */
  <A>(
    predicate: Predicate<A>,
    options?: { bufferSize?: number | undefined } | undefined
  ): <E, R>(
    self: Stream<A, E, R>
  ) => Effect.Effect<[excluded: Stream<A, E, never>, satisfying: Stream<A, E, never>], E, Scope.Scope | R>
  /**
   * Splits a stream into two substreams based on a predicate.
   *
   * **Details**
   *
   * The `Stream.partition` function splits a stream into two parts: one for
   * elements that satisfy the predicate (evaluated to `true`) and another for
   * those that do not (evaluated to `false`).
   *
   * The faster stream may advance up to `bufferSize` elements ahead of the slower
   * one.
   *
   * **Example** (Partitioning a Stream into Even and Odd Numbers)
   *
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const partition = Stream.range(1, 9).pipe(
   *   Stream.partition((n) => n % 2 === 0, { bufferSize: 5 })
   * )
   *
   * const program = Effect.scoped(
   *   Effect.gen(function*() {
   *     const [odds, evens] = yield* partition
   *     console.log(yield* Stream.runCollect(odds))
   *     console.log(yield* Stream.runCollect(evens))
   *   })
   * )
   *
   * Effect.runPromise(program)
   * // { _id: 'Chunk', values: [ 1, 3, 5, 7, 9 ] }
   * // { _id: 'Chunk', values: [ 2, 4, 6, 8 ] }
   * ```
   *
   * @see {@link partitionEither} for partitioning a stream based on effectful
   * conditions.
   *
   * @since 2.0.0
   * @category utils
   */
  <C extends A, E, R, B extends A, A = C>(
    self: Stream<C, E, R>,
    refinement: Refinement<A, B>,
    options?: { bufferSize?: number | undefined } | undefined
  ): Effect.Effect<[excluded: Stream<Exclude<C, B>, E, never>, satisfying: Stream<B, E, never>], E, R | Scope.Scope>
  /**
   * Splits a stream into two substreams based on a predicate.
   *
   * **Details**
   *
   * The `Stream.partition` function splits a stream into two parts: one for
   * elements that satisfy the predicate (evaluated to `true`) and another for
   * those that do not (evaluated to `false`).
   *
   * The faster stream may advance up to `bufferSize` elements ahead of the slower
   * one.
   *
   * **Example** (Partitioning a Stream into Even and Odd Numbers)
   *
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const partition = Stream.range(1, 9).pipe(
   *   Stream.partition((n) => n % 2 === 0, { bufferSize: 5 })
   * )
   *
   * const program = Effect.scoped(
   *   Effect.gen(function*() {
   *     const [odds, evens] = yield* partition
   *     console.log(yield* Stream.runCollect(odds))
   *     console.log(yield* Stream.runCollect(evens))
   *   })
   * )
   *
   * Effect.runPromise(program)
   * // { _id: 'Chunk', values: [ 1, 3, 5, 7, 9 ] }
   * // { _id: 'Chunk', values: [ 2, 4, 6, 8 ] }
   * ```
   *
   * @see {@link partitionEither} for partitioning a stream based on effectful
   * conditions.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(
    self: Stream<A, E, R>,
    predicate: Predicate<A>,
    options?: { bufferSize?: number | undefined } | undefined
  ): Effect.Effect<[excluded: Stream<A, E, never>, satisfying: Stream<A, E, never>], E, R | Scope.Scope>
} = internal.partition

/**
 * Splits a stream into two substreams based on an effectful condition.
 *
 * **Details**
 *
 * The `Stream.partitionEither` function is used to divide a stream into two
 * parts: one for elements that satisfy a condition producing `Either.left`
 * values, and another for those that produce `Either.right` values. This
 * function applies an effectful predicate to each element in the stream to
 * determine which substream it belongs to.
 *
 * The faster stream may advance up to `bufferSize` elements ahead of the slower
 * one.
 *
 * **Example** (Partitioning a Stream with an Effectful Predicate)
 *
 * ```ts
 * import { Effect, Either, Stream } from "effect"
 *
 * const partition = Stream.range(1, 9).pipe(
 *   Stream.partitionEither(
 *     (n) => Effect.succeed(n % 2 === 0 ? Either.right(n) : Either.left(n)),
 *     { bufferSize: 5 }
 *   )
 * )
 *
 * const program = Effect.scoped(
 *   Effect.gen(function*() {
 *     const [evens, odds] = yield* partition
 *     console.log(yield* Stream.runCollect(evens))
 *     console.log(yield* Stream.runCollect(odds))
 *   })
 * )
 *
 * Effect.runPromise(program)
 * // { _id: 'Chunk', values: [ 1, 3, 5, 7, 9 ] }
 * // { _id: 'Chunk', values: [ 2, 4, 6, 8 ] }
 * ```
 *
 * @see {@link partition} for partitioning a stream based on simple conditions.
 *
 * @since 2.0.0
 * @category utils
 */
export const partitionEither: {
  /**
   * Splits a stream into two substreams based on an effectful condition.
   *
   * **Details**
   *
   * The `Stream.partitionEither` function is used to divide a stream into two
   * parts: one for elements that satisfy a condition producing `Either.left`
   * values, and another for those that produce `Either.right` values. This
   * function applies an effectful predicate to each element in the stream to
   * determine which substream it belongs to.
   *
   * The faster stream may advance up to `bufferSize` elements ahead of the slower
   * one.
   *
   * **Example** (Partitioning a Stream with an Effectful Predicate)
   *
   * ```ts
   * import { Effect, Either, Stream } from "effect"
   *
   * const partition = Stream.range(1, 9).pipe(
   *   Stream.partitionEither(
   *     (n) => Effect.succeed(n % 2 === 0 ? Either.right(n) : Either.left(n)),
   *     { bufferSize: 5 }
   *   )
   * )
   *
   * const program = Effect.scoped(
   *   Effect.gen(function*() {
   *     const [evens, odds] = yield* partition
   *     console.log(yield* Stream.runCollect(evens))
   *     console.log(yield* Stream.runCollect(odds))
   *   })
   * )
   *
   * Effect.runPromise(program)
   * // { _id: 'Chunk', values: [ 1, 3, 5, 7, 9 ] }
   * // { _id: 'Chunk', values: [ 2, 4, 6, 8 ] }
   * ```
   *
   * @see {@link partition} for partitioning a stream based on simple conditions.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, A3, A2, E2, R2>(
    predicate: (a: NoInfer<A>) => Effect.Effect<Either.Either<A3, A2>, E2, R2>,
    options?: { readonly bufferSize?: number | undefined } | undefined
  ): <E, R>(
    self: Stream<A, E, R>
  ) => Effect.Effect<[left: Stream<A2, E2 | E, never>, right: Stream<A3, E2 | E, never>], E2 | E, Scope.Scope | R2 | R>
  /**
   * Splits a stream into two substreams based on an effectful condition.
   *
   * **Details**
   *
   * The `Stream.partitionEither` function is used to divide a stream into two
   * parts: one for elements that satisfy a condition producing `Either.left`
   * values, and another for those that produce `Either.right` values. This
   * function applies an effectful predicate to each element in the stream to
   * determine which substream it belongs to.
   *
   * The faster stream may advance up to `bufferSize` elements ahead of the slower
   * one.
   *
   * **Example** (Partitioning a Stream with an Effectful Predicate)
   *
   * ```ts
   * import { Effect, Either, Stream } from "effect"
   *
   * const partition = Stream.range(1, 9).pipe(
   *   Stream.partitionEither(
   *     (n) => Effect.succeed(n % 2 === 0 ? Either.right(n) : Either.left(n)),
   *     { bufferSize: 5 }
   *   )
   * )
   *
   * const program = Effect.scoped(
   *   Effect.gen(function*() {
   *     const [evens, odds] = yield* partition
   *     console.log(yield* Stream.runCollect(evens))
   *     console.log(yield* Stream.runCollect(odds))
   *   })
   * )
   *
   * Effect.runPromise(program)
   * // { _id: 'Chunk', values: [ 1, 3, 5, 7, 9 ] }
   * // { _id: 'Chunk', values: [ 2, 4, 6, 8 ] }
   * ```
   *
   * @see {@link partition} for partitioning a stream based on simple conditions.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A3, A2, E2, R2>(
    self: Stream<A, E, R>,
    predicate: (a: A) => Effect.Effect<Either.Either<A3, A2>, E2, R2>,
    options?: { readonly bufferSize?: number | undefined } | undefined
  ): Effect.Effect<[left: Stream<A2, E | E2, never>, right: Stream<A3, E | E2, never>], E | E2, Scope.Scope | R | R2>
} = internal.partitionEither

/**
 * Peels off enough material from the stream to construct a `Z` using the
 * provided `Sink` and then returns both the `Z` and the rest of the
 * `Stream` in a scope. Like all scoped values, the provided stream is
 * valid only within the scope.
 *
 * @since 2.0.0
 * @category utils
 */
export const peel: {
  /**
   * Peels off enough material from the stream to construct a `Z` using the
   * provided `Sink` and then returns both the `Z` and the rest of the
   * `Stream` in a scope. Like all scoped values, the provided stream is
   * valid only within the scope.
   *
   * @since 2.0.0
   * @category utils
   */
  <A2, A, E2, R2>(sink: Sink.Sink<A2, A, A, E2, R2>): <E, R>(self: Stream<A, E, R>) => Effect.Effect<[A2, Stream<A, E, never>], E2 | E, Scope.Scope | R2 | R>
  /**
   * Peels off enough material from the stream to construct a `Z` using the
   * provided `Sink` and then returns both the `Z` and the rest of the
   * `Stream` in a scope. Like all scoped values, the provided stream is
   * valid only within the scope.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, sink: Sink.Sink<A2, A, A, E2, R2>): Effect.Effect<[A2, Stream<A, E, never>], E | E2, Scope.Scope | R | R2>
} = internal.peel

/**
 * Pipes all of the values from this stream through the provided sink.
 *
 * See also `Stream.transduce`.
 *
 * @since 2.0.0
 * @category utils
 */
export const pipeThrough: {
  /**
   * Pipes all of the values from this stream through the provided sink.
   *
   * See also `Stream.transduce`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A2, A, L, E2, R2>(sink: Sink.Sink<A2, A, L, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<L, E2 | E, R2 | R>
  /**
   * Pipes all of the values from this stream through the provided sink.
   *
   * See also `Stream.transduce`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, L, E2, R2>(self: Stream<A, E, R>, sink: Sink.Sink<A2, A, L, E2, R2>): Stream<L, E | E2, R | R2>
} = internal.pipeThrough

/**
 * Pipes all the values from this stream through the provided channel.
 *
 * @since 2.0.0
 * @category utils
 */
export const pipeThroughChannel: {
  /**
   * Pipes all the values from this stream through the provided channel.
   *
   * @since 2.0.0
   * @category utils
   */
  <R2, E, E2, A, A2>(
    channel: Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E2, E, unknown, unknown, R2>
  ): <R>(self: Stream<A, E, R>) => Stream<A2, E2, R2 | R>
  /**
   * Pipes all the values from this stream through the provided channel.
   *
   * @since 2.0.0
   * @category utils
   */
  <R, R2, E, E2, A, A2>(
    self: Stream<A, E, R>,
    channel: Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E2, E, unknown, unknown, R2>
  ): Stream<A2, E2, R | R2>
} = internal.pipeThroughChannel

/**
 * Pipes all values from this stream through the provided channel, passing
 * through any error emitted by this stream unchanged.
 *
 * @since 2.0.0
 * @category utils
 */
export const pipeThroughChannelOrFail: {
  /**
   * Pipes all values from this stream through the provided channel, passing
   * through any error emitted by this stream unchanged.
   *
   * @since 2.0.0
   * @category utils
   */
  <R2, E, E2, A, A2>(
    chan: Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E2, E, unknown, unknown, R2>
  ): <R>(self: Stream<A, E, R>) => Stream<A2, E | E2, R2 | R>
  /**
   * Pipes all values from this stream through the provided channel, passing
   * through any error emitted by this stream unchanged.
   *
   * @since 2.0.0
   * @category utils
   */
  <R, R2, E, E2, A, A2>(
    self: Stream<A, E, R>,
    chan: Channel.Channel<Chunk.Chunk<A2>, Chunk.Chunk<A>, E2, E, unknown, unknown, R2>
  ): Stream<A2, E | E2, R | R2>
} = internal.pipeThroughChannelOrFail

/**
 * Emits the provided chunk before emitting any other value.
 *
 * @since 2.0.0
 * @category utils
 */
export const prepend: {
  /**
   * Emits the provided chunk before emitting any other value.
   *
   * @since 2.0.0
   * @category utils
   */
  <B>(values: Chunk.Chunk<B>): <A, E, R>(self: Stream<A, E, R>) => Stream<B | A, E, R>
  /**
   * Emits the provided chunk before emitting any other value.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, B>(self: Stream<A, E, R>, values: Chunk.Chunk<B>): Stream<A | B, E, R>
} = internal.prepend

/**
 * Provides the stream with its required context, which eliminates its
 * dependency on `R`.
 *
 * @since 2.0.0
 * @category context
 */
export const provideContext: {
  /**
   * Provides the stream with its required context, which eliminates its
   * dependency on `R`.
   *
   * @since 2.0.0
   * @category context
   */
  <R>(context: Context.Context<R>): <A, E>(self: Stream<A, E, R>) => Stream<A, E>
  /**
   * Provides the stream with its required context, which eliminates its
   * dependency on `R`.
   *
   * @since 2.0.0
   * @category context
   */
  <A, E, R>(self: Stream<A, E, R>, context: Context.Context<R>): Stream<A, E>
} = internal.provideContext

/**
 * Provides the stream with some of its required context, which eliminates its
 * dependency on `R`.
 *
 * @since 3.16.9
 * @category context
 */
export const provideSomeContext: {
  /**
   * Provides the stream with some of its required context, which eliminates its
   * dependency on `R`.
   *
   * @since 3.16.9
   * @category context
   */
  <R2>(context: Context.Context<R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, Exclude<R, R2>>
  /**
   * Provides the stream with some of its required context, which eliminates its
   * dependency on `R`.
   *
   * @since 3.16.9
   * @category context
   */
  <A, E, R, R2>(self: Stream<A, E, R>, context: Context.Context<R2>): Stream<A, E, Exclude<R, R2>>
} = internal.provideSomeContext

/**
 * Provides a `Layer` to the stream, which translates it to another level.
 *
 * @since 2.0.0
 * @category context
 */
export const provideLayer: {
  /**
   * Provides a `Layer` to the stream, which translates it to another level.
   *
   * @since 2.0.0
   * @category context
   */
  <RIn, E2, ROut>(layer: Layer.Layer<ROut, E2, RIn>): <A, E>(self: Stream<A, E, ROut>) => Stream<A, E2 | E, RIn>
  /**
   * Provides a `Layer` to the stream, which translates it to another level.
   *
   * @since 2.0.0
   * @category context
   */
  <A, E, RIn, E2, ROut>(self: Stream<A, E, ROut>, layer: Layer.Layer<ROut, E2, RIn>): Stream<A, E | E2, RIn>
} = internal.provideLayer

/**
 * Provides the stream with the single service it requires. If the stream
 * requires more than one service use `Stream.provideContext` instead.
 *
 * @since 2.0.0
 * @category context
 */
export const provideService: {
  /**
   * Provides the stream with the single service it requires. If the stream
   * requires more than one service use `Stream.provideContext` instead.
   *
   * @since 2.0.0
   * @category context
   */
  <I, S>(tag: Context.Tag<I, S>, resource: NoInfer<S>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, Exclude<R, I>>
  /**
   * Provides the stream with the single service it requires. If the stream
   * requires more than one service use `Stream.provideContext` instead.
   *
   * @since 2.0.0
   * @category context
   */
  <A, E, R, I, S>(self: Stream<A, E, R>, tag: Context.Tag<I, S>, resource: NoInfer<S>): Stream<A, E, Exclude<R, I>>
} = internal.provideService

/**
 * Provides the stream with the single service it requires. If the stream
 * requires more than one service use `Stream.provideContext` instead.
 *
 * @since 2.0.0
 * @category context
 */
export const provideServiceEffect: {
  /**
   * Provides the stream with the single service it requires. If the stream
   * requires more than one service use `Stream.provideContext` instead.
   *
   * @since 2.0.0
   * @category context
   */
  <I, S, E2, R2>(tag: Context.Tag<I, S>, effect: Effect.Effect<NoInfer<S>, E2, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | Exclude<R, I>>
  /**
   * Provides the stream with the single service it requires. If the stream
   * requires more than one service use `Stream.provideContext` instead.
   *
   * @since 2.0.0
   * @category context
   */
  <A, E, R, I, S, E2, R2>(
    self: Stream<A, E, R>,
    tag: Context.Tag<I, S>,
    effect: Effect.Effect<NoInfer<S>, E2, R2>
  ): Stream<A, E2 | E, R2 | Exclude<R, I>>
} = internal.provideServiceEffect

/**
 * Provides the stream with the single service it requires. If the stream
 * requires more than one service use `Stream.provideContext` instead.
 *
 * @since 2.0.0
 * @category context
 */
export const provideServiceStream: {
  /**
   * Provides the stream with the single service it requires. If the stream
   * requires more than one service use `Stream.provideContext` instead.
   *
   * @since 2.0.0
   * @category context
   */
  <I, S, E2, R2>(tag: Context.Tag<I, S>, stream: Stream<NoInfer<S>, E2, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | Exclude<R, I>>
  /**
   * Provides the stream with the single service it requires. If the stream
   * requires more than one service use `Stream.provideContext` instead.
   *
   * @since 2.0.0
   * @category context
   */
  <A, E, R, I, S, E2, R2>(
    self: Stream<A, E, R>,
    tag: Context.Tag<I, S>,
    stream: Stream<NoInfer<S>, E2, R2>
  ): Stream<A, E2 | E, R2 | Exclude<R, I>>
} = internal.provideServiceStream

/**
 * Transforms the context being provided to the stream with the specified
 * function.
 *
 * @since 2.0.0
 * @category context
 */
export const mapInputContext: {
  /**
   * Transforms the context being provided to the stream with the specified
   * function.
   *
   * @since 2.0.0
   * @category context
   */
  <R0, R>(f: (env: Context.Context<R0>) => Context.Context<R>): <A, E>(self: Stream<A, E, R>) => Stream<A, E, R0>
  /**
   * Transforms the context being provided to the stream with the specified
   * function.
   *
   * @since 2.0.0
   * @category context
   */
  <A, E, R0, R>(self: Stream<A, E, R>, f: (env: Context.Context<R0>) => Context.Context<R>): Stream<A, E, R0>
} = internal.mapInputContext

/**
 * Splits the context into two parts, providing one part using the
 * specified layer and leaving the remainder `R0`.
 *
 * @since 2.0.0
 * @category context
 */
export const provideSomeLayer: {
  /**
   * Splits the context into two parts, providing one part using the
   * specified layer and leaving the remainder `R0`.
   *
   * @since 2.0.0
   * @category context
   */
  <RIn, E2, ROut>(layer: Layer.Layer<ROut, E2, RIn>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, RIn | Exclude<R, ROut>>
  /**
   * Splits the context into two parts, providing one part using the
   * specified layer and leaving the remainder `R0`.
   *
   * @since 2.0.0
   * @category context
   */
  <A, E, R, RIn, E2, ROut>(self: Stream<A, E, R>, layer: Layer.Layer<ROut, E2, RIn>): Stream<A, E | E2, RIn | Exclude<R, ROut>>
} = internal.provideSomeLayer

/**
 * Returns a stream that mirrors the first upstream to emit an item.
 * As soon as one of the upstream emits a first value, the other is interrupted.
 * The resulting stream will forward all items from the "winning" source stream.
 * Any upstream failures will cause the returned stream to fail.
 *
 * @example
 * ```ts
 * import { Stream, Schedule, Console, Effect } from "effect"
 *
 * const stream = Stream.fromSchedule(Schedule.spaced('2 millis')).pipe(
 *   Stream.race(Stream.fromSchedule(Schedule.spaced('1 millis'))),
 *   Stream.take(6),
 *   Stream.tap(Console.log)
 * )
 *
 * Effect.runPromise(Stream.runDrain(stream))
 * // Output each millisecond from the first stream, the rest streams are interrupted
 * // 0
 * // 1
 * // 2
 * // 3
 * // 4
 * // 5
 * ```
 * @since 3.7.0
 * @category racing
 */
export const race: {
  /**
   * Returns a stream that mirrors the first upstream to emit an item.
   * As soon as one of the upstream emits a first value, the other is interrupted.
   * The resulting stream will forward all items from the "winning" source stream.
   * Any upstream failures will cause the returned stream to fail.
   *
   * @example
   * ```ts
   * import { Stream, Schedule, Console, Effect } from "effect"
   *
   * const stream = Stream.fromSchedule(Schedule.spaced('2 millis')).pipe(
   *   Stream.race(Stream.fromSchedule(Schedule.spaced('1 millis'))),
   *   Stream.take(6),
   *   Stream.tap(Console.log)
   * )
   *
   * Effect.runPromise(Stream.runDrain(stream))
   * // Output each millisecond from the first stream, the rest streams are interrupted
   * // 0
   * // 1
   * // 2
   * // 3
   * // 4
   * // 5
   * ```
   * @since 3.7.0
   * @category racing
   */
  <AR, ER, RR>(right: Stream<AR, ER, RR>): <AL, EL, RL>(left: Stream<AL, EL, RL>) => Stream<AL | AR, EL | ER, RL | RR>
  /**
   * Returns a stream that mirrors the first upstream to emit an item.
   * As soon as one of the upstream emits a first value, the other is interrupted.
   * The resulting stream will forward all items from the "winning" source stream.
   * Any upstream failures will cause the returned stream to fail.
   *
   * @example
   * ```ts
   * import { Stream, Schedule, Console, Effect } from "effect"
   *
   * const stream = Stream.fromSchedule(Schedule.spaced('2 millis')).pipe(
   *   Stream.race(Stream.fromSchedule(Schedule.spaced('1 millis'))),
   *   Stream.take(6),
   *   Stream.tap(Console.log)
   * )
   *
   * Effect.runPromise(Stream.runDrain(stream))
   * // Output each millisecond from the first stream, the rest streams are interrupted
   * // 0
   * // 1
   * // 2
   * // 3
   * // 4
   * // 5
   * ```
   * @since 3.7.0
   * @category racing
   */
  <AL, EL, RL, AR, ER, RR>(left: Stream<AL, EL, RL>, right: Stream<AR, ER, RR>): Stream<AL | AR, EL | ER, RL | RR>
} = internal.race

/**
 * Returns a stream that mirrors the first upstream to emit an item.
 * As soon as one of the upstream emits a first value, all the others are interrupted.
 * The resulting stream will forward all items from the "winning" source stream.
 * Any upstream failures will cause the returned stream to fail.
 *
 * @example
 * ```ts
 * import { Stream, Schedule, Console, Effect } from "effect"
 *
 * const stream = Stream.raceAll(
 *   Stream.fromSchedule(Schedule.spaced('1 millis')),
 *   Stream.fromSchedule(Schedule.spaced('2 millis')),
 *   Stream.fromSchedule(Schedule.spaced('4 millis')),
 * ).pipe(Stream.take(6), Stream.tap(Console.log))
 *
 * Effect.runPromise(Stream.runDrain(stream))
 * // Output each millisecond from the first stream, the rest streams are interrupted
 * // 0
 * // 1
 * // 2
 * // 3
 * // 4
 * // 5
 * ```
 * @since 3.5.0
 * @category racing
 */
export const raceAll: <S extends ReadonlyArray<Stream<any, any, any>>>(
  ...streams: S
) => Stream<
  Stream.Success<S[number]>,
  Stream.Error<S[number]>,
  Stream.Context<S[number]>
> = internal.raceAll

/**
 * Constructs a stream from a range of integers, including both endpoints.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * // A Stream with a range of numbers from 1 to 5
 * const stream = Stream.range(1, 5)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const range: (min: number, max: number, chunkSize?: number) => Stream<number> = internal.range

/**
 * Re-chunks the elements of the stream into chunks of `n` elements each. The
 * last chunk might contain less than `n` elements.
 *
 * @since 2.0.0
 * @category utils
 */
export const rechunk: {
  /**
   * Re-chunks the elements of the stream into chunks of `n` elements each. The
   * last chunk might contain less than `n` elements.
   *
   * @since 2.0.0
   * @category utils
   */
  (n: number): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Re-chunks the elements of the stream into chunks of `n` elements each. The
   * last chunk might contain less than `n` elements.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, n: number): Stream<A, E, R>
} = internal.rechunk

/**
 * Keeps some of the errors, and terminates the fiber with the rest
 *
 * @since 2.0.0
 * @category error handling
 */
export const refineOrDie: {
  /**
   * Keeps some of the errors, and terminates the fiber with the rest
   *
   * @since 2.0.0
   * @category error handling
   */
  <E, E2>(pf: (error: E) => Option.Option<E2>): <A, R>(self: Stream<A, E, R>) => Stream<A, E2, R>
  /**
   * Keeps some of the errors, and terminates the fiber with the rest
   *
   * @since 2.0.0
   * @category error handling
   */
  <A, E, R, E2>(self: Stream<A, E, R>, pf: (error: E) => Option.Option<E2>): Stream<A, E2, R>
} = internal.refineOrDie

/**
 * Keeps some of the errors, and terminates the fiber with the rest, using the
 * specified function to convert the `E` into a defect.
 *
 * @since 2.0.0
 * @category error handling
 */
export const refineOrDieWith: {
  /**
   * Keeps some of the errors, and terminates the fiber with the rest, using the
   * specified function to convert the `E` into a defect.
   *
   * @since 2.0.0
   * @category error handling
   */
  <E, E2>(pf: (error: E) => Option.Option<E2>, f: (error: E) => unknown): <A, R>(self: Stream<A, E, R>) => Stream<A, E2, R>
  /**
   * Keeps some of the errors, and terminates the fiber with the rest, using the
   * specified function to convert the `E` into a defect.
   *
   * @since 2.0.0
   * @category error handling
   */
  <A, E, R, E2>(
    self: Stream<A, E, R>,
    pf: (error: E) => Option.Option<E2>,
    f: (error: E) => unknown
  ): Stream<A, E2, R>
} = internal.refineOrDieWith

/**
 * Repeats the entire stream using the specified schedule. The stream will
 * execute normally, and then repeat again according to the provided schedule.
 *
 * @example
 * ```ts
 * import { Effect, Schedule, Stream } from "effect"
 *
 * const stream = Stream.repeat(Stream.succeed(1), Schedule.forever)
 *
 * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(5)))).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 1, 1, 1, 1 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const repeat: {
  /**
   * Repeats the entire stream using the specified schedule. The stream will
   * execute normally, and then repeat again according to the provided schedule.
   *
   * @example
   * ```ts
   * import { Effect, Schedule, Stream } from "effect"
   *
   * const stream = Stream.repeat(Stream.succeed(1), Schedule.forever)
   *
   * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(5)))).then(console.log)
   * // { _id: 'Chunk', values: [ 1, 1, 1, 1, 1 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <B, R2>(schedule: Schedule.Schedule<B, unknown, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R2 | R>
  /**
   * Repeats the entire stream using the specified schedule. The stream will
   * execute normally, and then repeat again according to the provided schedule.
   *
   * @example
   * ```ts
   * import { Effect, Schedule, Stream } from "effect"
   *
   * const stream = Stream.repeat(Stream.succeed(1), Schedule.forever)
   *
   * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(5)))).then(console.log)
   * // { _id: 'Chunk', values: [ 1, 1, 1, 1, 1 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, B, R2>(self: Stream<A, E, R>, schedule: Schedule.Schedule<B, unknown, R2>): Stream<A, E, R | R2>
} = internal.repeat

/**
 * Creates a stream from an effect producing a value of type `A` which repeats
 * forever.
 *
 * @example
 * ```ts
 * import { Effect, Random, Stream } from "effect"
 *
 * const stream = Stream.repeatEffect(Random.nextInt)
 *
 * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(5)))).then(console.log)
 * // Example Output: { _id: 'Chunk', values: [ 3891571149, 4239494205, 2352981603, 2339111046, 1488052210 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const repeatEffect: <A, E, R>(effect: Effect.Effect<A, E, R>) => Stream<A, E, R> = internal.repeatEffect

/**
 * Creates a stream from an effect producing chunks of `A` values which
 * repeats forever.
 *
 * @since 2.0.0
 * @category constructors
 */
export const repeatEffectChunk: <A, E, R>(effect: Effect.Effect<Chunk.Chunk<A>, E, R>) => Stream<A, E, R> =
  internal.repeatEffectChunk

/**
 * Creates a stream from an effect producing chunks of `A` values until it
 * fails with `None`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const repeatEffectChunkOption: <A, E, R>(
  effect: Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R>
) => Stream<A, E, R> = internal.repeatEffectChunkOption

/**
 * Creates a stream from an effect producing values of type `A` until it fails
 * with `None`.
 *
 * @example
 * ```ts
 * // In this example, we're draining an Iterator to create a stream from it
 * import { Stream, Effect, Option } from "effect"
 *
 * const drainIterator = <A>(it: Iterator<A>): Stream.Stream<A> =>
 *   Stream.repeatEffectOption(
 *     Effect.sync(() => it.next()).pipe(
 *       Effect.andThen((res) => {
 *         if (res.done) {
 *           return Effect.fail(Option.none())
 *         }
 *         return Effect.succeed(res.value)
 *       })
 *     )
 *   )
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const repeatEffectOption: <A, E, R>(effect: Effect.Effect<A, Option.Option<E>, R>) => Stream<A, E, R> =
  internal.repeatEffectOption

/**
 * Creates a stream from an effect producing a value of type `A`, which is
 * repeated using the specified schedule.
 *
 * @since 2.0.0
 * @category constructors
 */
export const repeatEffectWithSchedule: <A, E, R, X, A0 extends A, R2>(
  effect: Effect.Effect<A, E, R>,
  schedule: Schedule.Schedule<X, A0, R2>
) => Stream<A, E, R | R2> = internal.repeatEffectWithSchedule

/**
 * Repeats the entire stream using the specified schedule. The stream will
 * execute normally, and then repeat again according to the provided schedule.
 * The schedule output will be emitted at the end of each repetition.
 *
 * @since 2.0.0
 * @category utils
 */
export const repeatEither: {
  /**
   * Repeats the entire stream using the specified schedule. The stream will
   * execute normally, and then repeat again according to the provided schedule.
   * The schedule output will be emitted at the end of each repetition.
   *
   * @since 2.0.0
   * @category utils
   */
  <B, R2>(schedule: Schedule.Schedule<B, unknown, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<Either.Either<A, B>, E, R2 | R>
  /**
   * Repeats the entire stream using the specified schedule. The stream will
   * execute normally, and then repeat again according to the provided schedule.
   * The schedule output will be emitted at the end of each repetition.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, B, R2>(self: Stream<A, E, R>, schedule: Schedule.Schedule<B, unknown, R2>): Stream<Either.Either<A, B>, E, R | R2>
} = internal.repeatEither

/**
 * Repeats each element of the stream using the provided schedule. Repetitions
 * are done in addition to the first execution, which means using
 * `Schedule.recurs(1)` actually results in the original effect, plus an
 * additional recurrence, for a total of two repetitions of each value in the
 * stream.
 *
 * @since 2.0.0
 * @category utils
 */
export const repeatElements: {
  /**
   * Repeats each element of the stream using the provided schedule. Repetitions
   * are done in addition to the first execution, which means using
   * `Schedule.recurs(1)` actually results in the original effect, plus an
   * additional recurrence, for a total of two repetitions of each value in the
   * stream.
   *
   * @since 2.0.0
   * @category utils
   */
  <B, R2>(schedule: Schedule.Schedule<B, unknown, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R2 | R>
  /**
   * Repeats each element of the stream using the provided schedule. Repetitions
   * are done in addition to the first execution, which means using
   * `Schedule.recurs(1)` actually results in the original effect, plus an
   * additional recurrence, for a total of two repetitions of each value in the
   * stream.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, B, R2>(self: Stream<A, E, R>, schedule: Schedule.Schedule<B, unknown, R2>): Stream<A, E, R | R2>
} = internal.repeatElements

/**
 * Repeats each element of the stream using the provided schedule. When the
 * schedule is finished, then the output of the schedule will be emitted into
 * the stream. Repetitions are done in addition to the first execution, which
 * means using `Schedule.recurs(1)` actually results in the original effect,
 * plus an additional recurrence, for a total of two repetitions of each value
 * in the stream.
 *
 * This function accepts two conversion functions, which allow the output of
 * this stream and the output of the provided schedule to be unified into a
 * single type. For example, `Either` or similar data type.
 *
 * @since 2.0.0
 * @category utils
 */
export const repeatElementsWith: {
  /**
   * Repeats each element of the stream using the provided schedule. When the
   * schedule is finished, then the output of the schedule will be emitted into
   * the stream. Repetitions are done in addition to the first execution, which
   * means using `Schedule.recurs(1)` actually results in the original effect,
   * plus an additional recurrence, for a total of two repetitions of each value
   * in the stream.
   *
   * This function accepts two conversion functions, which allow the output of
   * this stream and the output of the provided schedule to be unified into a
   * single type. For example, `Either` or similar data type.
   *
   * @since 2.0.0
   * @category utils
   */
  <B, R2, A, C>(
    schedule: Schedule.Schedule<B, unknown, R2>,
    options: { readonly onElement: (a: A) => C; readonly onSchedule: (b: B) => C }
  ): <E, R>(self: Stream<A, E, R>) => Stream<C, E, R2 | R>
  /**
   * Repeats each element of the stream using the provided schedule. When the
   * schedule is finished, then the output of the schedule will be emitted into
   * the stream. Repetitions are done in addition to the first execution, which
   * means using `Schedule.recurs(1)` actually results in the original effect,
   * plus an additional recurrence, for a total of two repetitions of each value
   * in the stream.
   *
   * This function accepts two conversion functions, which allow the output of
   * this stream and the output of the provided schedule to be unified into a
   * single type. For example, `Either` or similar data type.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, B, R2, C>(
    self: Stream<A, E, R>,
    schedule: Schedule.Schedule<B, unknown, R2>,
    options: { readonly onElement: (a: A) => C; readonly onSchedule: (b: B) => C }
  ): Stream<C, E, R | R2>
} = internal.repeatElementsWith

/**
 * Repeats the provided value infinitely.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.repeatValue(0)
 *
 * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(5)))).then(console.log)
 * // { _id: 'Chunk', values: [ 0, 0, 0, 0, 0 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const repeatValue: <A>(value: A) => Stream<A> = internal.repeatValue

/**
 * Repeats the entire stream using the specified schedule. The stream will
 * execute normally, and then repeat again according to the provided schedule.
 * The schedule output will be emitted at the end of each repetition and can
 * be unified with the stream elements using the provided functions.
 *
 * @since 2.0.0
 * @category utils
 */
export const repeatWith: {
  /**
   * Repeats the entire stream using the specified schedule. The stream will
   * execute normally, and then repeat again according to the provided schedule.
   * The schedule output will be emitted at the end of each repetition and can
   * be unified with the stream elements using the provided functions.
   *
   * @since 2.0.0
   * @category utils
   */
  <B, R2, A, C>(
    schedule: Schedule.Schedule<B, unknown, R2>,
    options: { readonly onElement: (a: A) => C; readonly onSchedule: (b: B) => C }
  ): <E, R>(self: Stream<A, E, R>) => Stream<C, E, R2 | R>
  /**
   * Repeats the entire stream using the specified schedule. The stream will
   * execute normally, and then repeat again according to the provided schedule.
   * The schedule output will be emitted at the end of each repetition and can
   * be unified with the stream elements using the provided functions.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, B, R2, C>(
    self: Stream<A, E, R>,
    schedule: Schedule.Schedule<B, unknown, R2>,
    options: { readonly onElement: (a: A) => C; readonly onSchedule: (b: B) => C }
  ): Stream<C, E, R | R2>
} = internal.repeatWith

/**
 * When the stream fails, retry it according to the given schedule
 *
 * This retries the entire stream, so will re-execute all of the stream's
 * acquire operations.
 *
 * The schedule is reset as soon as the first element passes through the
 * stream again.
 *
 * @since 2.0.0
 * @category utils
 */
export const retry: {
  /**
   * When the stream fails, retry it according to the given schedule
   *
   * This retries the entire stream, so will re-execute all of the stream's
   * acquire operations.
   *
   * The schedule is reset as soon as the first element passes through the
   * stream again.
   *
   * @since 2.0.0
   * @category utils
   */
  <E, R2, X>(policy: Schedule.Schedule<X, NoInfer<E>, R2>): <A, R>(self: Stream<A, E, R>) => Stream<A, E, R2 | R>
  /**
   * When the stream fails, retry it according to the given schedule
   *
   * This retries the entire stream, so will re-execute all of the stream's
   * acquire operations.
   *
   * The schedule is reset as soon as the first element passes through the
   * stream again.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, X, R2>(self: Stream<A, E, R>, policy: Schedule.Schedule<X, NoInfer<E>, R2>): Stream<A, E, R2 | R>
} = internal.retry

/**
 * Apply an `ExecutionPlan` to the stream, which allows you to fallback to
 * different resources in case of failure.
 *
 * If you have a stream that could fail with partial results, you can use
 * the `preventFallbackOnPartialStream` option to prevent contamination of
 * the final stream with partial results.
 *
 * @since 3.16.0
 * @category Error handling
 * @experimental
 */
export const withExecutionPlan: {
  /**
   * Apply an `ExecutionPlan` to the stream, which allows you to fallback to
   * different resources in case of failure.
   *
   * If you have a stream that could fail with partial results, you can use
   * the `preventFallbackOnPartialStream` option to prevent contamination of
   * the final stream with partial results.
   *
   * @since 3.16.0
   * @category Error handling
   * @experimental
   */
  <Input, R2, Provides, PolicyE>(
    policy: ExecutionPlan<{ provides: Provides; input: Input; error: PolicyE; requirements: R2 }>,
    options?: { readonly preventFallbackOnPartialStream?: boolean | undefined }
  ): <A, E extends Input, R>(self: Stream<A, E, R>) => Stream<A, E | PolicyE, R2 | Exclude<R, Provides>>
  /**
   * Apply an `ExecutionPlan` to the stream, which allows you to fallback to
   * different resources in case of failure.
   *
   * If you have a stream that could fail with partial results, you can use
   * the `preventFallbackOnPartialStream` option to prevent contamination of
   * the final stream with partial results.
   *
   * @since 3.16.0
   * @category Error handling
   * @experimental
   */
  <A, E extends Input, R, R2, Input, Provides, PolicyE>(
    self: Stream<A, E, R>,
    policy: ExecutionPlan<{ provides: Provides; input: Input; error: PolicyE; requirements: R2 }>,
    options?: { readonly preventFallbackOnPartialStream?: boolean | undefined }
  ): Stream<A, E | PolicyE, R2 | Exclude<R, Provides>>
} = internal.withExecutionPlan

/**
 * Runs the sink on the stream to produce either the sink's result or an error.
 *
 * @since 2.0.0
 * @category destructors
 */
export const run: {
  /**
   * Runs the sink on the stream to produce either the sink's result or an error.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A2, A, E2, R2>(sink: Sink.Sink<A2, A, unknown, E2, R2>): <E, R>(self: Stream<A, E, R>) => Effect.Effect<A2, E2 | E, Exclude<R | R2, Scope.Scope>>
  /**
   * Runs the sink on the stream to produce either the sink's result or an error.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, sink: Sink.Sink<A2, A, unknown, E2, R2>): Effect.Effect<A2, E | E2, Exclude<R | R2, Scope.Scope>>
} = internal.run

/**
 * Runs the stream and collects all of its elements to a chunk.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runCollect: <A, E, R>(self: Stream<A, E, R>) => Effect.Effect<Chunk.Chunk<A>, E, R> = internal.runCollect

/**
 * Runs the stream and emits the number of elements processed
 *
 * @since 2.0.0
 * @category destructors
 */
export const runCount: <A, E, R>(self: Stream<A, E, R>) => Effect.Effect<number, E, R> = internal.runCount

/**
 * Runs the stream only for its effects. The emitted elements are discarded.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runDrain: <A, E, R>(self: Stream<A, E, R>) => Effect.Effect<void, E, R> = internal.runDrain

/**
 * Executes a pure fold over the stream of values - reduces all elements in
 * the stream to a value of type `S`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runFold: {
  /**
   * Executes a pure fold over the stream of values - reduces all elements in
   * the stream to a value of type `S`.
   *
   * @since 2.0.0
   * @category destructors
   */
  <S, A>(s: S, f: (s: S, a: A) => S): <E, R>(self: Stream<A, E, R>) => Effect.Effect<S, E, R>
  /**
   * Executes a pure fold over the stream of values - reduces all elements in
   * the stream to a value of type `S`.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, S>(self: Stream<A, E, R>, s: S, f: (s: S, a: A) => S): Effect.Effect<S, E, R>
} = internal.runFold

/**
 * Executes an effectful fold over the stream of values.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runFoldEffect: {
  /**
   * Executes an effectful fold over the stream of values.
   *
   * @since 2.0.0
   * @category destructors
   */
  <S, A, E2, R2>(s: S, f: (s: S, a: A) => Effect.Effect<S, E2, R2>): <E, R>(self: Stream<A, E, R>) => Effect.Effect<S, E2 | E, Exclude<R | R2, Scope.Scope>>
  /**
   * Executes an effectful fold over the stream of values.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, S, E2, R2>(self: Stream<A, E, R>, s: S, f: (s: S, a: A) => Effect.Effect<S, E2, R2>): Effect.Effect<S, E | E2, Exclude<R | R2, Scope.Scope>>
} = internal.runFoldEffect

/**
 * Executes a pure fold over the stream of values. Returns a scoped value that
 * represents the scope of the stream.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runFoldScoped: {
  /**
   * Executes a pure fold over the stream of values. Returns a scoped value that
   * represents the scope of the stream.
   *
   * @since 2.0.0
   * @category destructors
   */
  <S, A>(s: S, f: (s: S, a: A) => S): <E, R>(self: Stream<A, E, R>) => Effect.Effect<S, E, Scope.Scope | R>
  /**
   * Executes a pure fold over the stream of values. Returns a scoped value that
   * represents the scope of the stream.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, S>(self: Stream<A, E, R>, s: S, f: (s: S, a: A) => S): Effect.Effect<S, E, Scope.Scope | R>
} = internal.runFoldScoped

/**
 * Executes an effectful fold over the stream of values. Returns a scoped
 * value that represents the scope of the stream.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runFoldScopedEffect: {
  /**
   * Executes an effectful fold over the stream of values. Returns a scoped
   * value that represents the scope of the stream.
   *
   * @since 2.0.0
   * @category destructors
   */
  <S, A, E2, R2>(s: S, f: (s: S, a: A) => Effect.Effect<S, E2, R2>): <E, R>(self: Stream<A, E, R>) => Effect.Effect<S, E2 | E, Scope.Scope | R2 | R>
  /**
   * Executes an effectful fold over the stream of values. Returns a scoped
   * value that represents the scope of the stream.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, S, E2, R2>(self: Stream<A, E, R>, s: S, f: (s: S, a: A) => Effect.Effect<S, E2, R2>): Effect.Effect<S, E | E2, Scope.Scope | R | R2>
} = internal.runFoldScopedEffect

/**
 * Reduces the elements in the stream to a value of type `S`. Stops the fold
 * early when the condition is not fulfilled. Example:
 *
 * @since 2.0.0
 * @category destructors
 */
export const runFoldWhile: {
  /**
   * Reduces the elements in the stream to a value of type `S`. Stops the fold
   * early when the condition is not fulfilled. Example:
   *
   * @since 2.0.0
   * @category destructors
   */
  <S, A>(s: S, cont: Predicate<S>, f: (s: S, a: A) => S): <E, R>(self: Stream<A, E, R>) => Effect.Effect<S, E, R>
  /**
   * Reduces the elements in the stream to a value of type `S`. Stops the fold
   * early when the condition is not fulfilled. Example:
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, S>(self: Stream<A, E, R>, s: S, cont: Predicate<S>, f: (s: S, a: A) => S): Effect.Effect<S, E, R>
} = internal.runFoldWhile

/**
 * Executes an effectful fold over the stream of values. Stops the fold early
 * when the condition is not fulfilled.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runFoldWhileEffect: {
  /**
   * Executes an effectful fold over the stream of values. Stops the fold early
   * when the condition is not fulfilled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <S, A, E2, R2>(s: S, cont: Predicate<S>, f: (s: S, a: A) => Effect.Effect<S, E2, R2>): <E, R>(self: Stream<A, E, R>) => Effect.Effect<S, E2 | E, Exclude<R | R2, Scope.Scope>>
  /**
   * Executes an effectful fold over the stream of values. Stops the fold early
   * when the condition is not fulfilled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, S, E2, R2>(
    self: Stream<A, E, R>,
    s: S,
    cont: Predicate<S>,
    f: (s: S, a: A) => Effect.Effect<S, E2, R2>
  ): Effect.Effect<S, E | E2, Exclude<R | R2, Scope.Scope>>
} = internal.runFoldWhileEffect

/**
 * Executes a pure fold over the stream of values. Returns a scoped value that
 * represents the scope of the stream. Stops the fold early when the condition
 * is not fulfilled.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runFoldWhileScoped: {
  /**
   * Executes a pure fold over the stream of values. Returns a scoped value that
   * represents the scope of the stream. Stops the fold early when the condition
   * is not fulfilled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <S, A>(s: S, cont: Predicate<S>, f: (s: S, a: A) => S): <E, R>(self: Stream<A, E, R>) => Effect.Effect<S, E, Scope.Scope | R>
  /**
   * Executes a pure fold over the stream of values. Returns a scoped value that
   * represents the scope of the stream. Stops the fold early when the condition
   * is not fulfilled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, S>(self: Stream<A, E, R>, s: S, cont: Predicate<S>, f: (s: S, a: A) => S): Effect.Effect<S, E, Scope.Scope | R>
} = internal.runFoldWhileScoped

/**
 * Executes an effectful fold over the stream of values. Returns a scoped
 * value that represents the scope of the stream. Stops the fold early when
 * the condition is not fulfilled.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runFoldWhileScopedEffect: {
  /**
   * Executes an effectful fold over the stream of values. Returns a scoped
   * value that represents the scope of the stream. Stops the fold early when
   * the condition is not fulfilled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <S, A, E2, R2>(s: S, cont: Predicate<S>, f: (s: S, a: A) => Effect.Effect<S, E2, R2>): <E, R>(self: Stream<A, E, R>) => Effect.Effect<S, E2 | E, R2 | R | Scope.Scope>
  /**
   * Executes an effectful fold over the stream of values. Returns a scoped
   * value that represents the scope of the stream. Stops the fold early when
   * the condition is not fulfilled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, S, E2, R2>(
    self: Stream<A, E, R>,
    s: S,
    cont: Predicate<S>,
    f: (s: S, a: A) => Effect.Effect<S, E2, R2>
  ): Effect.Effect<S, E | E2, Scope.Scope | R | R2>
} = internal.runFoldWhileScopedEffect

/**
 * Consumes all elements of the stream, passing them to the specified
 * callback.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runForEach: {
  /**
   * Consumes all elements of the stream, passing them to the specified
   * callback.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, X, E2, R2>(f: (a: A) => Effect.Effect<X, E2, R2>): <E, R>(self: Stream<A, E, R>) => Effect.Effect<void, E2 | E, R2 | R>
  /**
   * Consumes all elements of the stream, passing them to the specified
   * callback.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, X, E2, R2>(self: Stream<A, E, R>, f: (a: A) => Effect.Effect<X, E2, R2>): Effect.Effect<void, E | E2, R | R2>
} = internal.runForEach

/**
 * Consumes all elements of the stream, passing them to the specified
 * callback.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runForEachChunk: {
  /**
   * Consumes all elements of the stream, passing them to the specified
   * callback.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, X, E2, R2>(f: (a: Chunk.Chunk<A>) => Effect.Effect<X, E2, R2>): <E, R>(self: Stream<A, E, R>) => Effect.Effect<void, E2 | E, R2 | R>
  /**
   * Consumes all elements of the stream, passing them to the specified
   * callback.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, X, E2, R2>(self: Stream<A, E, R>, f: (a: Chunk.Chunk<A>) => Effect.Effect<X, E2, R2>): Effect.Effect<void, E | E2, R | R2>
} = internal.runForEachChunk

/**
 * Like `Stream.runForEachChunk`, but returns a scoped effect so the
 * finalization order can be controlled.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runForEachChunkScoped: {
  /**
   * Like `Stream.runForEachChunk`, but returns a scoped effect so the
   * finalization order can be controlled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, X, E2, R2>(f: (a: Chunk.Chunk<A>) => Effect.Effect<X, E2, R2>): <E, R>(self: Stream<A, E, R>) => Effect.Effect<void, E2 | E, Scope.Scope | R2 | R>
  /**
   * Like `Stream.runForEachChunk`, but returns a scoped effect so the
   * finalization order can be controlled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, X, E2, R2>(self: Stream<A, E, R>, f: (a: Chunk.Chunk<A>) => Effect.Effect<X, E2, R2>): Effect.Effect<void, E | E2, Scope.Scope | R | R2>
} = internal.runForEachChunkScoped

/**
 * Like `Stream.forEach`, but returns a scoped effect so the finalization
 * order can be controlled.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runForEachScoped: {
  /**
   * Like `Stream.forEach`, but returns a scoped effect so the finalization
   * order can be controlled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, X, E2, R2>(f: (a: A) => Effect.Effect<X, E2, R2>): <E, R>(self: Stream<A, E, R>) => Effect.Effect<void, E2 | E, Scope.Scope | R2 | R>
  /**
   * Like `Stream.forEach`, but returns a scoped effect so the finalization
   * order can be controlled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, X, E2, R2>(self: Stream<A, E, R>, f: (a: A) => Effect.Effect<X, E2, R2>): Effect.Effect<void, E | E2, Scope.Scope | R | R2>
} = internal.runForEachScoped

/**
 * Consumes elements of the stream, passing them to the specified callback,
 * and terminating consumption when the callback returns `false`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runForEachWhile: {
  /**
   * Consumes elements of the stream, passing them to the specified callback,
   * and terminating consumption when the callback returns `false`.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E2, R2>(f: (a: A) => Effect.Effect<boolean, E2, R2>): <E, R>(self: Stream<A, E, R>) => Effect.Effect<void, E2 | E, R2 | R>
  /**
   * Consumes elements of the stream, passing them to the specified callback,
   * and terminating consumption when the callback returns `false`.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, E2, R2>(self: Stream<A, E, R>, f: (a: A) => Effect.Effect<boolean, E2, R2>): Effect.Effect<void, E | E2, R | R2>
} = internal.runForEachWhile

/**
 * Like `Stream.runForEachWhile`, but returns a scoped effect so the
 * finalization order can be controlled.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runForEachWhileScoped: {
  /**
   * Like `Stream.runForEachWhile`, but returns a scoped effect so the
   * finalization order can be controlled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E2, R2>(f: (a: A) => Effect.Effect<boolean, E2, R2>): <E, R>(self: Stream<A, E, R>) => Effect.Effect<void, E2 | E, Scope.Scope | R2 | R>
  /**
   * Like `Stream.runForEachWhile`, but returns a scoped effect so the
   * finalization order can be controlled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, E2, R2>(self: Stream<A, E, R>, f: (a: A) => Effect.Effect<boolean, E2, R2>): Effect.Effect<void, E | E2, Scope.Scope | R | R2>
} = internal.runForEachWhileScoped

/**
 * Runs the stream to completion and yields the first value emitted by it,
 * discarding the rest of the elements.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runHead: <A, E, R>(self: Stream<A, E, R>) => Effect.Effect<Option.Option<A>, E, R> = internal.runHead

/**
 * Publishes elements of this stream to a `PubSub`. Stream failure and ending will
 * also be signalled.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runIntoPubSub: {
  /**
   * Publishes elements of this stream to a `PubSub`. Stream failure and ending will
   * also be signalled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E>(pubsub: PubSub.PubSub<Take.Take<A, E>>): <R>(self: Stream<A, E, R>) => Effect.Effect<void, never, R>
  /**
   * Publishes elements of this stream to a `PubSub`. Stream failure and ending will
   * also be signalled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R>(self: Stream<A, E, R>, pubsub: PubSub.PubSub<Take.Take<A, E>>): Effect.Effect<void, never, R>
} = internal.runIntoPubSub

/**
 * Like `Stream.runIntoPubSub`, but provides the result as a scoped effect to
 * allow for scope composition.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runIntoPubSubScoped: {
  /**
   * Like `Stream.runIntoPubSub`, but provides the result as a scoped effect to
   * allow for scope composition.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E>(pubsub: PubSub.PubSub<Take.Take<A, E>>): <R>(self: Stream<A, E, R>) => Effect.Effect<void, never, Scope.Scope | R>
  /**
   * Like `Stream.runIntoPubSub`, but provides the result as a scoped effect to
   * allow for scope composition.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R>(self: Stream<A, E, R>, pubsub: PubSub.PubSub<Take.Take<A, E>>): Effect.Effect<void, never, Scope.Scope | R>
} = internal.runIntoPubSubScoped

/**
 * Enqueues elements of this stream into a queue. Stream failure and ending
 * will also be signalled.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runIntoQueue: {
  /**
   * Enqueues elements of this stream into a queue. Stream failure and ending
   * will also be signalled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E>(queue: Queue.Enqueue<Take.Take<A, E>>): <R>(self: Stream<A, E, R>) => Effect.Effect<void, never, R>
  /**
   * Enqueues elements of this stream into a queue. Stream failure and ending
   * will also be signalled.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R>(self: Stream<A, E, R>, queue: Queue.Enqueue<Take.Take<A, E>>): Effect.Effect<void, never, R>
} = internal.runIntoQueue

/**
 * Like `Stream.runIntoQueue`, but provides the result as a scoped Effect
 * to allow for scope composition.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runIntoQueueElementsScoped: {
  /**
   * Like `Stream.runIntoQueue`, but provides the result as a scoped Effect
   * to allow for scope composition.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E>(queue: Queue.Enqueue<Exit.Exit<A, Option.Option<E>>>): <R>(self: Stream<A, E, R>) => Effect.Effect<void, never, Scope.Scope | R>
  /**
   * Like `Stream.runIntoQueue`, but provides the result as a scoped Effect
   * to allow for scope composition.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R>(
    self: Stream<A, E, R>,
    queue: Queue.Enqueue<Exit.Exit<A, Option.Option<E>>>
  ): Effect.Effect<void, never, Scope.Scope | R>
} = internal.runIntoQueueElementsScoped

/**
 * Like `Stream.runIntoQueue`, but provides the result as a scoped effect
 * to allow for scope composition.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runIntoQueueScoped: {
  /**
   * Like `Stream.runIntoQueue`, but provides the result as a scoped effect
   * to allow for scope composition.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E>(queue: Queue.Enqueue<Take.Take<A, E>>): <R>(self: Stream<A, E, R>) => Effect.Effect<void, never, Scope.Scope | R>
  /**
   * Like `Stream.runIntoQueue`, but provides the result as a scoped effect
   * to allow for scope composition.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R>(self: Stream<A, E, R>, queue: Queue.Enqueue<Take.Take<A, E>>): Effect.Effect<void, never, Scope.Scope | R>
} = internal.runIntoQueueScoped

/**
 * Runs the stream to completion and yields the last value emitted by it,
 * discarding the rest of the elements.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runLast: <A, E, R>(self: Stream<A, E, R>) => Effect.Effect<Option.Option<A>, E, R> = internal.runLast

/**
 * @since 2.0.0
 * @category destructors
 */
export const runScoped: {
  /**
   * @since 2.0.0
   * @category destructors
   */
  <A2, A, E2, R2>(sink: Sink.Sink<A2, A, unknown, E2, R2>): <E, R>(self: Stream<A, E, R>) => Effect.Effect<A2, E2 | E, Scope.Scope | R2 | R>
  /**
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, sink: Sink.Sink<A2, A, unknown, E2, R2>): Effect.Effect<A2, E | E2, Scope.Scope | R | R2>
} = internal.runScoped

/**
 * Runs the stream to a sink which sums elements, provided they are Numeric.
 *
 * @since 2.0.0
 * @category destructors
 */
export const runSum: <E, R>(self: Stream<number, E, R>) => Effect.Effect<number, E, R> = internal.runSum

/**
 * Statefully maps over the elements of this stream to produce all
 * intermediate results of type `S` given an initial S.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.range(1, 6).pipe(Stream.scan(0, (a, b) => a + b))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 0,  1,  3, 6, 10, 15, 21 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const scan: {
  /**
   * Statefully maps over the elements of this stream to produce all
   * intermediate results of type `S` given an initial S.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.range(1, 6).pipe(Stream.scan(0, (a, b) => a + b))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 0,  1,  3, 6, 10, 15, 21 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <S, A>(s: S, f: (s: S, a: A) => S): <E, R>(self: Stream<A, E, R>) => Stream<S, E, R>
  /**
   * Statefully maps over the elements of this stream to produce all
   * intermediate results of type `S` given an initial S.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.range(1, 6).pipe(Stream.scan(0, (a, b) => a + b))
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 0,  1,  3, 6, 10, 15, 21 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, S>(self: Stream<A, E, R>, s: S, f: (s: S, a: A) => S): Stream<S, E, R>
} = internal.scan

/**
 * Statefully and effectfully maps over the elements of this stream to produce
 * all intermediate results of type `S` given an initial S.
 *
 * @since 2.0.0
 * @category utils
 */
export const scanEffect: {
  /**
   * Statefully and effectfully maps over the elements of this stream to produce
   * all intermediate results of type `S` given an initial S.
   *
   * @since 2.0.0
   * @category utils
   */
  <S, A, E2, R2>(s: S, f: (s: S, a: A) => Effect.Effect<S, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<S, E2 | E, R2 | R>
  /**
   * Statefully and effectfully maps over the elements of this stream to produce
   * all intermediate results of type `S` given an initial S.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, S, E2, R2>(self: Stream<A, E, R>, s: S, f: (s: S, a: A) => Effect.Effect<S, E2, R2>): Stream<S, E | E2, R | R2>
} = internal.scanEffect

/**
 * Statefully maps over the elements of this stream to produce all
 * intermediate results.
 *
 * See also `Stream.scan`.
 *
 * @since 2.0.0
 * @category utils
 */
export const scanReduce: {
  /**
   * Statefully maps over the elements of this stream to produce all
   * intermediate results.
   *
   * See also `Stream.scan`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A2, A>(f: (a2: A2 | A, a: A) => A2): <E, R>(self: Stream<A, E, R>) => Stream<A2 | A, E, R>
  /**
   * Statefully maps over the elements of this stream to produce all
   * intermediate results.
   *
   * See also `Stream.scan`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2>(self: Stream<A, E, R>, f: (a2: A | A2, a: A) => A2): Stream<A | A2, E, R>
} = internal.scanReduce

/**
 * Statefully and effectfully maps over the elements of this stream to produce
 * all intermediate results.
 *
 * See also `Stream.scanEffect`.
 *
 * @since 2.0.0
 * @category utils
 */
export const scanReduceEffect: {
  /**
   * Statefully and effectfully maps over the elements of this stream to produce
   * all intermediate results.
   *
   * See also `Stream.scanEffect`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A2, A, E2, R2>(f: (a2: A2 | A, a: A) => Effect.Effect<A2 | A, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<A2 | A, E2 | E, R2 | R>
  /**
   * Statefully and effectfully maps over the elements of this stream to produce
   * all intermediate results.
   *
   * See also `Stream.scanEffect`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2>(
    self: Stream<A, E, R>,
    f: (a2: A | A2, a: A) => Effect.Effect<A | A2, E2, R2>
  ): Stream<A | A2, E | E2, R | R2>
} = internal.scanReduceEffect

/**
 * Schedules the output of the stream using the provided `schedule`.
 *
 * @since 2.0.0
 * @category utils
 */
export const schedule: {
  /**
   * Schedules the output of the stream using the provided `schedule`.
   *
   * @since 2.0.0
   * @category utils
   */
  <X, A0 extends A, R2, A>(schedule: Schedule.Schedule<X, A0, R2>): <E, R>(self: Stream<A, E, R>) => Stream<A, E, R2 | R>
  /**
   * Schedules the output of the stream using the provided `schedule`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, X, A0 extends A, R2>(self: Stream<A, E, R>, schedule: Schedule.Schedule<X, A0, R2>): Stream<A, E, R | R2>
} = internal.schedule

/**
 * Schedules the output of the stream using the provided `schedule` and emits
 * its output at the end (if `schedule` is finite). Uses the provided function
 * to align the stream and schedule outputs on the same type.
 *
 * @since 2.0.0
 * @category utils
 */
export const scheduleWith: {
  /**
   * Schedules the output of the stream using the provided `schedule` and emits
   * its output at the end (if `schedule` is finite). Uses the provided function
   * to align the stream and schedule outputs on the same type.
   *
   * @since 2.0.0
   * @category utils
   */
  <B, A0 extends A, R2, A, C>(
    schedule: Schedule.Schedule<B, A0, R2>,
    options: { readonly onElement: (a: A) => C; readonly onSchedule: (b: B) => C }
  ): <E, R>(self: Stream<A, E, R>) => Stream<C, E, R2 | R>
  /**
   * Schedules the output of the stream using the provided `schedule` and emits
   * its output at the end (if `schedule` is finite). Uses the provided function
   * to align the stream and schedule outputs on the same type.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, B, A0 extends A, R2, C>(
    self: Stream<A, E, R>,
    schedule: Schedule.Schedule<B, A0, R2>,
    options: { readonly onElement: (a: A) => C; readonly onSchedule: (b: B) => C }
  ): Stream<C, E, R | R2>
} = internal.scheduleWith

/**
 * Creates a single-valued stream from a scoped resource.
 *
 * @example
 * ```ts
 * import { Console, Effect, Stream } from "effect"
 *
 * // Creating a single-valued stream from a scoped resource
 * const stream = Stream.scoped(
 *  Effect.acquireRelease(
 *    Console.log("acquire"),
 *    () => Console.log("release")
 *  )
 * ).pipe(
 *  Stream.flatMap(() => Console.log("use"))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // acquire
 * // use
 * // release
 * // { _id: 'Chunk', values: [ undefined ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const scoped: <A, E, R>(effect: Effect.Effect<A, E, R>) => Stream<A, E, Exclude<R, Scope.Scope>> =
  internal.scoped

/**
 * Use a function that receives a scope and returns an effect to emit an output
 * element. The output element will be the result of the returned effect, if
 * successful.
 *
 * @since 3.11.0
 * @category constructors
 */
export const scopedWith: <A, E, R>(f: (scope: Scope.Scope) => Effect.Effect<A, E, R>) => Stream<A, E, R> =
  internal.scopedWith

/**
 * Emits a sliding window of `n` elements.
 *
 * ```ts
 * import { pipe, Stream } from "effect"
 *
 * pipe(
 *   Stream.make(1, 2, 3, 4),
 *   Stream.sliding(2),
 *   Stream.runCollect
 * )
 * // => Chunk(Chunk(1, 2), Chunk(2, 3), Chunk(3, 4))
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const sliding: {
  /**
   * Emits a sliding window of `n` elements.
   *
   * ```ts
   * import { pipe, Stream } from "effect"
   *
   * pipe(
   *   Stream.make(1, 2, 3, 4),
   *   Stream.sliding(2),
   *   Stream.runCollect
   * )
   * // => Chunk(Chunk(1, 2), Chunk(2, 3), Chunk(3, 4))
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  (chunkSize: number): <A, E, R>(self: Stream<A, E, R>) => Stream<Chunk.Chunk<A>, E, R>
  /**
   * Emits a sliding window of `n` elements.
   *
   * ```ts
   * import { pipe, Stream } from "effect"
   *
   * pipe(
   *   Stream.make(1, 2, 3, 4),
   *   Stream.sliding(2),
   *   Stream.runCollect
   * )
   * // => Chunk(Chunk(1, 2), Chunk(2, 3), Chunk(3, 4))
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, chunkSize: number): Stream<Chunk.Chunk<A>, E, R>
} = internal.sliding

/**
 * Like `sliding`, but with a configurable `stepSize` parameter.
 *
 * @since 2.0.0
 * @category utils
 */
export const slidingSize: {
  /**
   * Like `sliding`, but with a configurable `stepSize` parameter.
   *
   * @since 2.0.0
   * @category utils
   */
  (chunkSize: number, stepSize: number): <A, E, R>(self: Stream<A, E, R>) => Stream<Chunk.Chunk<A>, E, R>
  /**
   * Like `sliding`, but with a configurable `stepSize` parameter.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, chunkSize: number, stepSize: number): Stream<Chunk.Chunk<A>, E, R>
} = internal.slidingSize

/**
 * Converts an option on values into an option on errors.
 *
 * @since 2.0.0
 * @category utils
 */
export const some: <A, E, R>(self: Stream<Option.Option<A>, E, R>) => Stream<A, Option.Option<E>, R> = internal.some

/**
 * Extracts the optional value, or returns the given 'default'.
 *
 * @since 2.0.0
 * @category utils
 */
export const someOrElse: {
  /**
   * Extracts the optional value, or returns the given 'default'.
   *
   * @since 2.0.0
   * @category utils
   */
  <A2>(fallback: LazyArg<A2>): <A, E, R>(self: Stream<Option.Option<A>, E, R>) => Stream<A2 | A, E, R>
  /**
   * Extracts the optional value, or returns the given 'default'.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2>(self: Stream<Option.Option<A>, E, R>, fallback: LazyArg<A2>): Stream<A | A2, E, R>
} = internal.someOrElse

/**
 * Extracts the optional value, or fails with the given error 'e'.
 *
 * @since 2.0.0
 * @category utils
 */
export const someOrFail: {
  /**
   * Extracts the optional value, or fails with the given error 'e'.
   *
   * @since 2.0.0
   * @category utils
   */
  <E2>(error: LazyArg<E2>): <A, E, R>(self: Stream<Option.Option<A>, E, R>) => Stream<A, E2 | E, R>
  /**
   * Extracts the optional value, or fails with the given error 'e'.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, E2>(self: Stream<Option.Option<A>, E, R>, error: LazyArg<E2>): Stream<A, E | E2, R>
} = internal.someOrFail

/**
 * Splits elements based on a predicate or refinement.
 *
 * ```ts
 * import { pipe, Stream } from "effect"
 *
 * pipe(
 *   Stream.range(1, 10),
 *   Stream.split((n) => n % 4 === 0),
 *   Stream.runCollect
 * )
 * // => Chunk(Chunk(1, 2, 3), Chunk(5, 6, 7), Chunk(9))
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const split: {
  /**
   * Splits elements based on a predicate or refinement.
   *
   * ```ts
   * import { pipe, Stream } from "effect"
   *
   * pipe(
   *   Stream.range(1, 10),
   *   Stream.split((n) => n % 4 === 0),
   *   Stream.runCollect
   * )
   * // => Chunk(Chunk(1, 2, 3), Chunk(5, 6, 7), Chunk(9))
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): <E, R>(self: Stream<A, E, R>) => Stream<Chunk.Chunk<Exclude<A, B>>, E, R>
  /**
   * Splits elements based on a predicate or refinement.
   *
   * ```ts
   * import { pipe, Stream } from "effect"
   *
   * pipe(
   *   Stream.range(1, 10),
   *   Stream.split((n) => n % 4 === 0),
   *   Stream.runCollect
   * )
   * // => Chunk(Chunk(1, 2, 3), Chunk(5, 6, 7), Chunk(9))
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A>(predicate: Predicate<NoInfer<A>>): <E, R>(self: Stream<A, E, R>) => Stream<Chunk.Chunk<A>, E, R>
  /**
   * Splits elements based on a predicate or refinement.
   *
   * ```ts
   * import { pipe, Stream } from "effect"
   *
   * pipe(
   *   Stream.range(1, 10),
   *   Stream.split((n) => n % 4 === 0),
   *   Stream.runCollect
   * )
   * // => Chunk(Chunk(1, 2, 3), Chunk(5, 6, 7), Chunk(9))
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, B extends A>(self: Stream<A, E, R>, refinement: Refinement<A, B>): Stream<Chunk.Chunk<Exclude<A, B>>, E, R>
  /**
   * Splits elements based on a predicate or refinement.
   *
   * ```ts
   * import { pipe, Stream } from "effect"
   *
   * pipe(
   *   Stream.range(1, 10),
   *   Stream.split((n) => n % 4 === 0),
   *   Stream.runCollect
   * )
   * // => Chunk(Chunk(1, 2, 3), Chunk(5, 6, 7), Chunk(9))
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, predicate: Predicate<A>): Stream<Chunk.Chunk<A>, E, R>
} = internal.split

/**
 * Splits elements on a delimiter and transforms the splits into desired output.
 *
 * @since 2.0.0
 * @category utils
 */
export const splitOnChunk: {
  /**
   * Splits elements on a delimiter and transforms the splits into desired output.
   *
   * @since 2.0.0
   * @category utils
   */
  <A>(delimiter: Chunk.Chunk<A>): <E, R>(self: Stream<A, E, R>) => Stream<Chunk.Chunk<A>, E, R>
  /**
   * Splits elements on a delimiter and transforms the splits into desired output.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, delimiter: Chunk.Chunk<A>): Stream<Chunk.Chunk<A>, E, R>
} = internal.splitOnChunk

/**
 * Splits strings on newlines. Handles both Windows newlines (`\r\n`) and UNIX
 * newlines (`\n`).
 *
 * @since 2.0.0
 * @category combinators
 */
export const splitLines: <E, R>(self: Stream<string, E, R>) => Stream<string, E, R> = internal.splitLines

/**
 * Creates a single-valued pure stream.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * // A Stream with a single number
 * const stream = Stream.succeed(3)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 3 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const succeed: <A>(value: A) => Stream<A> = internal.succeed

/**
 * Creates a single-valued pure stream.
 *
 * @since 2.0.0
 * @category constructors
 */
export const sync: <A>(evaluate: LazyArg<A>) => Stream<A> = internal.sync

/**
 * Returns a lazily constructed stream.
 *
 * @since 2.0.0
 * @category constructors
 */
export const suspend: <A, E, R>(stream: LazyArg<Stream<A, E, R>>) => Stream<A, E, R> = internal.suspend

/**
 * Takes the specified number of elements from this stream.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.take(Stream.iterate(0, (n) => n + 1), 5)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const take: {
  /**
   * Takes the specified number of elements from this stream.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.take(Stream.iterate(0, (n) => n + 1), 5)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  (n: number): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Takes the specified number of elements from this stream.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.take(Stream.iterate(0, (n) => n + 1), 5)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, n: number): Stream<A, E, R>
} = internal.take

/**
 * Takes the last specified number of elements from this stream.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.takeRight(Stream.make(1, 2, 3, 4, 5, 6), 3)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 4, 5, 6 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const takeRight: {
  /**
   * Takes the last specified number of elements from this stream.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.takeRight(Stream.make(1, 2, 3, 4, 5, 6), 3)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 4, 5, 6 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  (n: number): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Takes the last specified number of elements from this stream.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.takeRight(Stream.make(1, 2, 3, 4, 5, 6), 3)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 4, 5, 6 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, n: number): Stream<A, E, R>
} = internal.takeRight

/**
 * Takes all elements of the stream until the specified predicate evaluates to
 * `true`.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.takeUntil(Stream.iterate(0, (n) => n + 1), (n) => n === 4)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const takeUntil: {
  /**
   * Takes all elements of the stream until the specified predicate evaluates to
   * `true`.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.takeUntil(Stream.iterate(0, (n) => n + 1), (n) => n === 4)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A>(predicate: Predicate<NoInfer<A>>): <E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Takes all elements of the stream until the specified predicate evaluates to
   * `true`.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.takeUntil(Stream.iterate(0, (n) => n + 1), (n) => n === 4)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, predicate: Predicate<A>): Stream<A, E, R>
} = internal.takeUntil

/**
 * Takes all elements of the stream until the specified effectual predicate
 * evaluates to `true`.
 *
 * @since 2.0.0
 * @category utils
 */
export const takeUntilEffect: {
  /**
   * Takes all elements of the stream until the specified effectual predicate
   * evaluates to `true`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E2, R2>(predicate: (a: NoInfer<A>) => Effect.Effect<boolean, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Takes all elements of the stream until the specified effectual predicate
   * evaluates to `true`.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, E2, R2>(self: Stream<A, E, R>, predicate: (a: A) => Effect.Effect<boolean, E2, R2>): Stream<A, E | E2, R | R2>
} = internal.takeUntilEffect

/**
 * Takes all elements of the stream for as long as the specified predicate
 * evaluates to `true`.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.takeWhile(Stream.iterate(0, (n) => n + 1), (n) => n < 5)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const takeWhile: {
  /**
   * Takes all elements of the stream for as long as the specified predicate
   * evaluates to `true`.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.takeWhile(Stream.iterate(0, (n) => n + 1), (n) => n < 5)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, B extends A>(refinement: Refinement<NoInfer<A>, B>): <E, R>(self: Stream<A, E, R>) => Stream<B, E, R>
  /**
   * Takes all elements of the stream for as long as the specified predicate
   * evaluates to `true`.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.takeWhile(Stream.iterate(0, (n) => n + 1), (n) => n < 5)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A>(predicate: Predicate<NoInfer<A>>): <E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Takes all elements of the stream for as long as the specified predicate
   * evaluates to `true`.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.takeWhile(Stream.iterate(0, (n) => n + 1), (n) => n < 5)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, B extends A>(self: Stream<A, E, R>, refinement: Refinement<A, B>): Stream<B, E, R>
  /**
   * Takes all elements of the stream for as long as the specified predicate
   * evaluates to `true`.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.takeWhile(Stream.iterate(0, (n) => n + 1), (n) => n < 5)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, predicate: Predicate<A>): Stream<A, E, R>
} = internal.takeWhile

/**
 * Adds an effect to consumption of every element of the stream.
 *
 * @example
 * ```ts
 * import { Console, Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3).pipe(
 *   Stream.tap((n) => Console.log(`before mapping: ${n}`)),
 *   Stream.map((n) => n * 2),
 *   Stream.tap((n) => Console.log(`after mapping: ${n}`))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // before mapping: 1
 * // after mapping: 2
 * // before mapping: 2
 * // after mapping: 4
 * // before mapping: 3
 * // after mapping: 6
 * // { _id: 'Chunk', values: [ 2, 4, 6 ] }
 * ```
 *
 * @since 2.0.0
 * @category sequencing
 */
export const tap: {
  /**
   * Adds an effect to consumption of every element of the stream.
   *
   * @example
   * ```ts
   * import { Console, Effect, Stream } from "effect"
   *
   * const stream = Stream.make(1, 2, 3).pipe(
   *   Stream.tap((n) => Console.log(`before mapping: ${n}`)),
   *   Stream.map((n) => n * 2),
   *   Stream.tap((n) => Console.log(`after mapping: ${n}`))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // before mapping: 1
   * // after mapping: 2
   * // before mapping: 2
   * // after mapping: 4
   * // before mapping: 3
   * // after mapping: 6
   * // { _id: 'Chunk', values: [ 2, 4, 6 ] }
   * ```
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, X, E2, R2>(f: (a: NoInfer<A>) => Effect.Effect<X, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Adds an effect to consumption of every element of the stream.
   *
   * @example
   * ```ts
   * import { Console, Effect, Stream } from "effect"
   *
   * const stream = Stream.make(1, 2, 3).pipe(
   *   Stream.tap((n) => Console.log(`before mapping: ${n}`)),
   *   Stream.map((n) => n * 2),
   *   Stream.tap((n) => Console.log(`after mapping: ${n}`))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // before mapping: 1
   * // after mapping: 2
   * // before mapping: 2
   * // after mapping: 4
   * // before mapping: 3
   * // after mapping: 6
   * // { _id: 'Chunk', values: [ 2, 4, 6 ] }
   * ```
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, E, R, X, E2, R2>(self: Stream<A, E, R>, f: (a: NoInfer<A>) => Effect.Effect<X, E2, R2>): Stream<A, E | E2, R | R2>
} = internal.tap

/**
 * Returns a stream that effectfully "peeks" at the failure or success of
 * the stream.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const tapBoth: {
  /**
   * Returns a stream that effectfully "peeks" at the failure or success of
   * the stream.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <E, X1, E2, R2, A, X2, E3, R3>(
    options: {
      readonly onFailure: (e: NoInfer<E>) => Effect.Effect<X1, E2, R2>
      readonly onSuccess: (a: NoInfer<A>) => Effect.Effect<X2, E3, R3>
    }
  ): <R>(self: Stream<A, E, R>) => Stream<A, E | E2 | E3, R2 | R3 | R>
  /**
   * Returns a stream that effectfully "peeks" at the failure or success of
   * the stream.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, E, R, X1, E2, R2, X2, E3, R3>(
    self: Stream<A, E, R>,
    options: {
      readonly onFailure: (e: NoInfer<E>) => Effect.Effect<X1, E2, R2>
      readonly onSuccess: (a: NoInfer<A>) => Effect.Effect<X2, E3, R3>
    }
  ): Stream<A, E | E2 | E3, R | R2 | R3>
} = internal.tapBoth

/**
 * Returns a stream that effectfully "peeks" at the failure of the stream.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const tapError: {
  /**
   * Returns a stream that effectfully "peeks" at the failure of the stream.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <E, X, E2, R2>(f: (error: NoInfer<E>) => Effect.Effect<X, E2, R2>): <A, R>(self: Stream<A, E, R>) => Stream<A, E | E2, R2 | R>
  /**
   * Returns a stream that effectfully "peeks" at the failure of the stream.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, E, R, X, E2, R2>(self: Stream<A, E, R>, f: (error: E) => Effect.Effect<X, E2, R2>): Stream<A, E | E2, R | R2>
} = internal.tapError

/**
 * Returns a stream that effectfully "peeks" at the cause of failure of the
 * stream.
 *
 * @since 2.0.0
 * @category utils
 */
export const tapErrorCause: {
  /**
   * Returns a stream that effectfully "peeks" at the cause of failure of the
   * stream.
   *
   * @since 2.0.0
   * @category utils
   */
  <E, X, E2, R2>(f: (cause: Cause.Cause<NoInfer<E>>) => Effect.Effect<X, E2, R2>): <A, R>(self: Stream<A, E, R>) => Stream<A, E | E2, R2 | R>
  /**
   * Returns a stream that effectfully "peeks" at the cause of failure of the
   * stream.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, X, E2, R2>(
    self: Stream<A, E, R>,
    f: (cause: Cause.Cause<E>) => Effect.Effect<X, E2, R2>
  ): Stream<A, E | E2, R | R2>
} = internal.tapErrorCause

/**
 * Sends all elements emitted by this stream to the specified sink in addition
 * to emitting them.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const tapSink: {
  /**
   * Sends all elements emitted by this stream to the specified sink in addition
   * to emitting them.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, E2, R2>(sink: Sink.Sink<unknown, A, unknown, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Sends all elements emitted by this stream to the specified sink in addition
   * to emitting them.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, E, R, E2, R2>(self: Stream<A, E, R>, sink: Sink.Sink<unknown, A, unknown, E2, R2>): Stream<A, E | E2, R | R2>
} = internal.tapSink

/**
 * Delays the chunks of this stream according to the given bandwidth
 * parameters using the token bucket algorithm. Allows for burst in the
 * processing of elements by allowing the token bucket to accumulate tokens up
 * to a `units + burst` threshold. The weight of each chunk is determined by
 * the `cost` function.
 *
 * If using the "enforce" strategy, chunks that do not meet the bandwidth
 * constraints are dropped. If using the "shape" strategy, chunks are delayed
 * until they can be emitted without exceeding the bandwidth constraints.
 *
 * Defaults to the "shape" strategy.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Schedule, Stream } from "effect"
 *
 * let last = Date.now()
 * const log = (message: string) =>
 *   Effect.sync(() => {
 *     const end = Date.now()
 *     console.log(`${message} after ${end - last}ms`)
 *     last = end
 *   })
 *
 * const stream = Stream.fromSchedule(Schedule.spaced("50 millis")).pipe(
 *   Stream.take(6),
 *   Stream.tap((n) => log(`Received ${n}`)),
 *   Stream.throttle({
 *     cost: Chunk.size,
 *     duration: "100 millis",
 *     units: 1
 *   }),
 *   Stream.tap((n) => log(`> Emitted ${n}`))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // Received 0 after 56ms
 * // > Emitted 0 after 0ms
 * // Received 1 after 52ms
 * // > Emitted 1 after 48ms
 * // Received 2 after 52ms
 * // > Emitted 2 after 49ms
 * // Received 3 after 52ms
 * // > Emitted 3 after 48ms
 * // Received 4 after 52ms
 * // > Emitted 4 after 47ms
 * // Received 5 after 52ms
 * // > Emitted 5 after 49ms
 * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4, 5 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
export const throttle: {
  /**
   * Delays the chunks of this stream according to the given bandwidth
   * parameters using the token bucket algorithm. Allows for burst in the
   * processing of elements by allowing the token bucket to accumulate tokens up
   * to a `units + burst` threshold. The weight of each chunk is determined by
   * the `cost` function.
   *
   * If using the "enforce" strategy, chunks that do not meet the bandwidth
   * constraints are dropped. If using the "shape" strategy, chunks are delayed
   * until they can be emitted without exceeding the bandwidth constraints.
   *
   * Defaults to the "shape" strategy.
   *
   * @example
   * ```ts
   * import { Chunk, Effect, Schedule, Stream } from "effect"
   *
   * let last = Date.now()
   * const log = (message: string) =>
   *   Effect.sync(() => {
   *     const end = Date.now()
   *     console.log(`${message} after ${end - last}ms`)
   *     last = end
   *   })
   *
   * const stream = Stream.fromSchedule(Schedule.spaced("50 millis")).pipe(
   *   Stream.take(6),
   *   Stream.tap((n) => log(`Received ${n}`)),
   *   Stream.throttle({
   *     cost: Chunk.size,
   *     duration: "100 millis",
   *     units: 1
   *   }),
   *   Stream.tap((n) => log(`> Emitted ${n}`))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // Received 0 after 56ms
   * // > Emitted 0 after 0ms
   * // Received 1 after 52ms
   * // > Emitted 1 after 48ms
   * // Received 2 after 52ms
   * // > Emitted 2 after 49ms
   * // Received 3 after 52ms
   * // > Emitted 3 after 48ms
   * // Received 4 after 52ms
   * // > Emitted 4 after 47ms
   * // Received 5 after 52ms
   * // > Emitted 5 after 49ms
   * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4, 5 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A>(
    options: {
      readonly cost: (chunk: Chunk.Chunk<A>) => number
      readonly units: number
      readonly duration: Duration.DurationInput
      readonly burst?: number | undefined
      readonly strategy?: "enforce" | "shape" | undefined
    }
  ): <E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Delays the chunks of this stream according to the given bandwidth
   * parameters using the token bucket algorithm. Allows for burst in the
   * processing of elements by allowing the token bucket to accumulate tokens up
   * to a `units + burst` threshold. The weight of each chunk is determined by
   * the `cost` function.
   *
   * If using the "enforce" strategy, chunks that do not meet the bandwidth
   * constraints are dropped. If using the "shape" strategy, chunks are delayed
   * until they can be emitted without exceeding the bandwidth constraints.
   *
   * Defaults to the "shape" strategy.
   *
   * @example
   * ```ts
   * import { Chunk, Effect, Schedule, Stream } from "effect"
   *
   * let last = Date.now()
   * const log = (message: string) =>
   *   Effect.sync(() => {
   *     const end = Date.now()
   *     console.log(`${message} after ${end - last}ms`)
   *     last = end
   *   })
   *
   * const stream = Stream.fromSchedule(Schedule.spaced("50 millis")).pipe(
   *   Stream.take(6),
   *   Stream.tap((n) => log(`Received ${n}`)),
   *   Stream.throttle({
   *     cost: Chunk.size,
   *     duration: "100 millis",
   *     units: 1
   *   }),
   *   Stream.tap((n) => log(`> Emitted ${n}`))
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // Received 0 after 56ms
   * // > Emitted 0 after 0ms
   * // Received 1 after 52ms
   * // > Emitted 1 after 48ms
   * // Received 2 after 52ms
   * // > Emitted 2 after 49ms
   * // Received 3 after 52ms
   * // > Emitted 3 after 48ms
   * // Received 4 after 52ms
   * // > Emitted 4 after 47ms
   * // Received 5 after 52ms
   * // > Emitted 5 after 49ms
   * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4, 5 ] }
   * ```
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(
    self: Stream<A, E, R>,
    options: {
      readonly cost: (chunk: Chunk.Chunk<A>) => number
      readonly units: number
      readonly duration: Duration.DurationInput
      readonly burst?: number | undefined
      readonly strategy?: "enforce" | "shape" | undefined
    }
  ): Stream<A, E, R>
} = internal.throttle

/**
 * Delays the chunks of this stream according to the given bandwidth
 * parameters using the token bucket algorithm. Allows for burst in the
 * processing of elements by allowing the token bucket to accumulate tokens up
 * to a `units + burst` threshold. The weight of each chunk is determined by
 * the effectful `costFn` function.
 *
 * If using the "enforce" strategy, chunks that do not meet the bandwidth
 * constraints are dropped. If using the "shape" strategy, chunks are delayed
 * until they can be emitted without exceeding the bandwidth constraints.
 *
 * Defaults to the "shape" strategy.
 *
 * @since 2.0.0
 * @category utils
 */
export const throttleEffect: {
  /**
   * Delays the chunks of this stream according to the given bandwidth
   * parameters using the token bucket algorithm. Allows for burst in the
   * processing of elements by allowing the token bucket to accumulate tokens up
   * to a `units + burst` threshold. The weight of each chunk is determined by
   * the effectful `costFn` function.
   *
   * If using the "enforce" strategy, chunks that do not meet the bandwidth
   * constraints are dropped. If using the "shape" strategy, chunks are delayed
   * until they can be emitted without exceeding the bandwidth constraints.
   *
   * Defaults to the "shape" strategy.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E2, R2>(
    options: {
      readonly cost: (chunk: Chunk.Chunk<A>) => Effect.Effect<number, E2, R2>
      readonly units: number
      readonly duration: Duration.DurationInput
      readonly burst?: number | undefined
      readonly strategy?: "enforce" | "shape" | undefined
    }
  ): <E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Delays the chunks of this stream according to the given bandwidth
   * parameters using the token bucket algorithm. Allows for burst in the
   * processing of elements by allowing the token bucket to accumulate tokens up
   * to a `units + burst` threshold. The weight of each chunk is determined by
   * the effectful `costFn` function.
   *
   * If using the "enforce" strategy, chunks that do not meet the bandwidth
   * constraints are dropped. If using the "shape" strategy, chunks are delayed
   * until they can be emitted without exceeding the bandwidth constraints.
   *
   * Defaults to the "shape" strategy.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, E2, R2>(
    self: Stream<A, E, R>,
    options: {
      readonly cost: (chunk: Chunk.Chunk<A>) => Effect.Effect<number, E2, R2>
      readonly units: number
      readonly duration: Duration.DurationInput
      readonly burst?: number | undefined
      readonly strategy?: "enforce" | "shape" | undefined
    }
  ): Stream<A, E | E2, R | R2>
} = internal.throttleEffect

/**
 * A stream that emits void values spaced by the specified duration.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * let last = Date.now()
 * const log = (message: string) =>
 *   Effect.sync(() => {
 *     const end = Date.now()
 *     console.log(`${message} after ${end - last}ms`)
 *     last = end
 *   })
 *
 * const stream = Stream.tick("1 seconds").pipe(Stream.tap(() => log("tick")))
 *
 * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(5)))).then(console.log)
 * // tick after 4ms
 * // tick after 1003ms
 * // tick after 1001ms
 * // tick after 1002ms
 * // tick after 1002ms
 * // { _id: 'Chunk', values: [ undefined, undefined, undefined, undefined, undefined ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const tick: (interval: Duration.DurationInput) => Stream<void> = internal.tick

/**
 * Ends the stream if it does not produce a value after the specified duration.
 *
 * @since 2.0.0
 * @category utils
 */
export const timeout: {
  /**
   * Ends the stream if it does not produce a value after the specified duration.
   *
   * @since 2.0.0
   * @category utils
   */
  (duration: Duration.DurationInput): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Ends the stream if it does not produce a value after the specified duration.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, duration: Duration.DurationInput): Stream<A, E, R>
} = internal.timeout

/**
 * Fails the stream with given error if it does not produce a value after d
 * duration.
 *
 * @since 2.0.0
 * @category utils
 */
export const timeoutFail: {
  /**
   * Fails the stream with given error if it does not produce a value after d
   * duration.
   *
   * @since 2.0.0
   * @category utils
   */
  <E2>(error: LazyArg<E2>, duration: Duration.DurationInput): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R>
  /**
   * Fails the stream with given error if it does not produce a value after d
   * duration.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, E2>(
    self: Stream<A, E, R>,
    error: LazyArg<E2>,
    duration: Duration.DurationInput
  ): Stream<A, E | E2, R>
} = internal.timeoutFail

/**
 * Fails the stream with given cause if it does not produce a value after d
 * duration.
 *
 * @since 2.0.0
 * @category utils
 */
export const timeoutFailCause: {
  /**
   * Fails the stream with given cause if it does not produce a value after d
   * duration.
   *
   * @since 2.0.0
   * @category utils
   */
  <E2>(cause: LazyArg<Cause.Cause<E2>>, duration: Duration.DurationInput): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R>
  /**
   * Fails the stream with given cause if it does not produce a value after d
   * duration.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, E2>(
    self: Stream<A, E, R>,
    cause: LazyArg<Cause.Cause<E2>>,
    duration: Duration.DurationInput
  ): Stream<A, E | E2, R>
} = internal.timeoutFailCause

/**
 * Switches the stream if it does not produce a value after the specified
 * duration.
 *
 * @since 2.0.0
 * @category utils
 */
export const timeoutTo: {
  /**
   * Switches the stream if it does not produce a value after the specified
   * duration.
   *
   * @since 2.0.0
   * @category utils
   */
  <A2, E2, R2>(duration: Duration.DurationInput, that: Stream<A2, E2, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A2 | A, E2 | E, R2 | R>
  /**
   * Switches the stream if it does not produce a value after the specified
   * duration.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2>(
    self: Stream<A, E, R>,
    duration: Duration.DurationInput,
    that: Stream<A2, E2, R2>
  ): Stream<A | A2, E | E2, R | R2>
} = internal.timeoutTo

/**
 * Converts the stream to a scoped `PubSub` of chunks. After the scope is closed,
 * the `PubSub` will never again produce values and should be discarded.
 *
 * @since 2.0.0
 * @category destructors
 */
export const toPubSub: {
  /**
   * Converts the stream to a scoped `PubSub` of chunks. After the scope is closed,
   * the `PubSub` will never again produce values and should be discarded.
   *
   * @since 2.0.0
   * @category destructors
   */
  (
    capacity: number | { readonly capacity: "unbounded"; readonly replay?: number | undefined } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ): <A, E, R>(self: Stream<A, E, R>) => Effect.Effect<PubSub.PubSub<Take.Take<A, E>>, never, Scope.Scope | R>
  /**
   * Converts the stream to a scoped `PubSub` of chunks. After the scope is closed,
   * the `PubSub` will never again produce values and should be discarded.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R>(
    self: Stream<A, E, R>,
    capacity: number | { readonly capacity: "unbounded"; readonly replay?: number | undefined } | {
      readonly capacity: number
      readonly strategy?: "sliding" | "dropping" | "suspend" | undefined
      readonly replay?: number | undefined
    }
  ): Effect.Effect<PubSub.PubSub<Take.Take<A, E>>, never, Scope.Scope | R>
} = internal.toPubSub

/**
 * Returns in a scope an Effect that can be used to repeatedly pull chunks
 * from the stream. The pull effect fails with None when the stream is
 * finished, or with Some error if it fails, otherwise it returns a chunk of
 * the stream's output.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * // Simulate a chunked stream
 * const stream = Stream.fromIterable([1, 2, 3, 4, 5]).pipe(Stream.rechunk(2))
 *
 * const program = Effect.gen(function*() {
 *   // Create an effect to get data chunks from the stream
 *   const getChunk = yield* Stream.toPull(stream)
 *
 *   // Continuously fetch and process chunks
 *   while (true) {
 *     const chunk = yield* getChunk
 *     console.log(chunk)
 *   }
 * })
 *
 * Effect.runPromise(Effect.scoped(program)).then(console.log, console.error)
 * // { _id: 'Chunk', values: [ 1, 2 ] }
 * // { _id: 'Chunk', values: [ 3, 4 ] }
 * // { _id: 'Chunk', values: [ 5 ] }
 * // (FiberFailure) Error: {
 * //   "_id": "Option",
 * //   "_tag": "None"
 * // }
 * ```
 *
 * @since 2.0.0
 * @category destructors
 */
export const toPull: <A, E, R>(
  self: Stream<A, E, R>
) => Effect.Effect<Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R>, never, Scope.Scope | R> = internal.toPull

/**
 * Converts the stream to a scoped queue of chunks. After the scope is closed,
 * the queue will never again produce values and should be discarded.
 *
 * Defaults to the "suspend" back pressure strategy with a capacity of 2.
 *
 * @since 2.0.0
 * @category destructors
 */
export const toQueue: {
  /**
   * Converts the stream to a scoped queue of chunks. After the scope is closed,
   * the queue will never again produce values and should be discarded.
   *
   * Defaults to the "suspend" back pressure strategy with a capacity of 2.
   *
   * @since 2.0.0
   * @category destructors
   */
  (
    options?:
      | { readonly strategy?: "dropping" | "sliding" | "suspend" | undefined; readonly capacity?: number | undefined }
      | { readonly strategy: "unbounded" }
      | undefined
  ): <A, E, R>(self: Stream<A, E, R>) => Effect.Effect<Queue.Dequeue<Take.Take<A, E>>, never, Scope.Scope | R>
  /**
   * Converts the stream to a scoped queue of chunks. After the scope is closed,
   * the queue will never again produce values and should be discarded.
   *
   * Defaults to the "suspend" back pressure strategy with a capacity of 2.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R>(
    self: Stream<A, E, R>,
    options?:
      | { readonly strategy?: "dropping" | "sliding" | "suspend" | undefined; readonly capacity?: number | undefined }
      | { readonly strategy: "unbounded" }
      | undefined
  ): Effect.Effect<Queue.Dequeue<Take.Take<A, E>>, never, Scope.Scope | R>
} = internal.toQueue

/**
 * Converts the stream to a scoped queue of elements. After the scope is
 * closed, the queue will never again produce values and should be discarded.
 *
 * Defaults to a capacity of 2.
 *
 * @since 2.0.0
 * @category destructors
 */
export const toQueueOfElements: {
  /**
   * Converts the stream to a scoped queue of elements. After the scope is
   * closed, the queue will never again produce values and should be discarded.
   *
   * Defaults to a capacity of 2.
   *
   * @since 2.0.0
   * @category destructors
   */
  (options?: { readonly capacity?: number | undefined } | undefined): <A, E, R>(
    self: Stream<A, E, R>
  ) => Effect.Effect<Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>, never, Scope.Scope | R>
  /**
   * Converts the stream to a scoped queue of elements. After the scope is
   * closed, the queue will never again produce values and should be discarded.
   *
   * Defaults to a capacity of 2.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R>(
    self: Stream<A, E, R>,
    options?: { readonly capacity?: number | undefined } | undefined
  ): Effect.Effect<Queue.Dequeue<Exit.Exit<A, Option.Option<E>>>, never, Scope.Scope | R>
} = internal.toQueueOfElements

/**
 * Converts the stream to a `ReadableStream`.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
 *
 * @since 2.0.0
 * @category destructors
 */
export const toReadableStream: {
  /**
   * Converts the stream to a `ReadableStream`.
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A>(options?: { readonly strategy?: QueuingStrategy<A> | undefined }): <E>(
    self: Stream<A, E>
  ) => ReadableStream<A>
  /**
   * Converts the stream to a `ReadableStream`.
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E>(
    self: Stream<A, E>,
    options?: { readonly strategy?: QueuingStrategy<A> | undefined }
  ): ReadableStream<A>
} = internal.toReadableStream

/**
 * Converts the stream to a `Effect<ReadableStream>`.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
 *
 * @since 2.0.0
 * @category destructors
 */
export const toReadableStreamEffect: {
  /**
   * Converts the stream to a `Effect<ReadableStream>`.
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A>(options?: { readonly strategy?: QueuingStrategy<A> | undefined }): <E, R>(
    self: Stream<A, E, R>
  ) => Effect.Effect<ReadableStream<A>, never, R>
  /**
   * Converts the stream to a `Effect<ReadableStream>`.
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, R>(
    self: Stream<A, E, R>,
    options?: { readonly strategy?: QueuingStrategy<A> | undefined }
  ): Effect.Effect<ReadableStream<A>, never, R>
} = internal.toReadableStreamEffect

/**
 * Converts the stream to a `ReadableStream` using the provided runtime.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
 *
 * @since 2.0.0
 * @category destructors
 */
export const toReadableStreamRuntime: {
  /**
   * Converts the stream to a `ReadableStream` using the provided runtime.
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, XR>(
    runtime: Runtime<XR>,
    options?: { readonly strategy?: QueuingStrategy<A> | undefined }
  ): <E, R extends XR>(self: Stream<A, E, R>) => ReadableStream<A>
  /**
   * Converts the stream to a `ReadableStream` using the provided runtime.
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, XR, R extends XR>(
    self: Stream<A, E, R>,
    runtime: Runtime<XR>,
    options?: { readonly strategy?: QueuingStrategy<A> | undefined }
  ): ReadableStream<A>
} = internal.toReadableStreamRuntime

/**
 * Converts the stream to a `AsyncIterable` using the provided runtime.
 *
 * @since 3.15.0
 * @category destructors
 */
export const toAsyncIterableRuntime: {
  /**
   * Converts the stream to a `AsyncIterable` using the provided runtime.
   *
   * @since 3.15.0
   * @category destructors
   */
  <A, XR>(runtime: Runtime<XR>): <E, R extends XR>(self: Stream<A, E, R>) => AsyncIterable<A>
  /**
   * Converts the stream to a `AsyncIterable` using the provided runtime.
   *
   * @since 3.15.0
   * @category destructors
   */
  <A, E, XR, R extends XR>(self: Stream<A, E, R>, runtime: Runtime<XR>): AsyncIterable<A>
} = internal.toAsyncIterableRuntime

/**
 * Converts the stream to a `AsyncIterable` capturing the required dependencies.
 *
 * @since 3.15.0
 * @category destructors
 */
export const toAsyncIterableEffect: <A, E, R>(self: Stream<A, E, R>) => Effect.Effect<AsyncIterable<A>, never, R> =
  internal.toAsyncIterableEffect

/**
 * Converts the stream to a `AsyncIterable`.
 *
 * @since 3.15.0
 * @category destructors
 */
export const toAsyncIterable: <A, E>(self: Stream<A, E>) => AsyncIterable<A> = internal.toAsyncIterable

/**
 * Applies the transducer to the stream and emits its outputs.
 *
 * @since 2.0.0
 * @category utils
 */
export const transduce: {
  /**
   * Applies the transducer to the stream and emits its outputs.
   *
   * @since 2.0.0
   * @category utils
   */
  <A2, A, E2, R2>(sink: Sink.Sink<A2, A, A, E2, R2>): <E, R>(self: Stream<A, E, R>) => Stream<A2, E2 | E, R2 | R>
  /**
   * Applies the transducer to the stream and emits its outputs.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, sink: Sink.Sink<A2, A, A, E2, R2>): Stream<A2, E | E2, R | R2>
} = internal.transduce

/**
 * Creates a stream by peeling off the "layers" of a value of type `S`.
 *
 * @example
 * ```ts
 * import { Effect, Option, Stream } from "effect"
 *
 * const stream = Stream.unfold(1, (n) => Option.some([n, n + 1]))
 *
 * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(5)))).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const unfold: <S, A>(s: S, f: (s: S) => Option.Option<readonly [A, S]>) => Stream<A> = internal.unfold

/**
 * Creates a stream by peeling off the "layers" of a value of type `S`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const unfoldChunk: <S, A>(
  s: S,
  f: (s: S) => Option.Option<readonly [Chunk.Chunk<A>, S]>
) => Stream<A> = internal.unfoldChunk

/**
 * Creates a stream by effectfully peeling off the "layers" of a value of type
 * `S`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const unfoldChunkEffect: <S, A, E, R>(
  s: S,
  f: (s: S) => Effect.Effect<Option.Option<readonly [Chunk.Chunk<A>, S]>, E, R>
) => Stream<A, E, R> = internal.unfoldChunkEffect

/**
 * Creates a stream by effectfully peeling off the "layers" of a value of type
 * `S`.
 *
 * @example
 * ```ts
 * import { Effect, Option, Random, Stream } from "effect"
 *
 * const stream = Stream.unfoldEffect(1, (n) =>
 *   Random.nextBoolean.pipe(
 *     Effect.map((b) => (b ? Option.some([n, -n]) : Option.some([n, n])))
 *   ))
 *
 * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(5)))).then(console.log)
 * // { _id: 'Chunk', values: [ 1, -1, -1, -1, -1 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
export const unfoldEffect: <S, A, E, R>(
  s: S,
  f: (s: S) => Effect.Effect<Option.Option<readonly [A, S]>, E, R>
) => Stream<A, E, R> = internal.unfoldEffect

const void_: Stream<void> = internal.void
export {
  /**
   * A stream that contains a single `void` value.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.void
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ undefined ] }
   *
   * ```
   * @since 2.0.0
   * @category constructors
   */
  void_ as void
}

/**
 * Creates a stream produced from an `Effect`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const unwrap: <A, E2, R2, E, R>(effect: Effect.Effect<Stream<A, E2, R2>, E, R>) => Stream<A, E | E2, R | R2> =
  internal.unwrap

/**
 * Creates a stream produced from a scoped `Effect`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const unwrapScoped: <A, E2, R2, E, R>(
  effect: Effect.Effect<Stream<A, E2, R2>, E, R>
) => Stream<A, E | E2, R2 | Exclude<R, Scope.Scope>> = internal.unwrapScoped

/**
 * Creates a stream produced from a function which receives a `Scope` and
 * returns an `Effect`. The resulting stream will emit a single element, which
 * will be the result of the returned effect, if successful.
 *
 * @since 3.11.0
 * @category constructors
 */
export const unwrapScopedWith: <A, E2, R2, E, R>(
  f: (scope: Scope.Scope) => Effect.Effect<Stream<A, E2, R2>, E, R>
) => Stream<A, E | E2, R | R2> = internal.unwrapScopedWith

/**
 * Updates the specified service within the context of the `Stream`.
 *
 * @since 2.0.0
 * @category context
 */
export const updateService: {
  /**
   * Updates the specified service within the context of the `Stream`.
   *
   * @since 2.0.0
   * @category context
   */
  <I, S>(tag: Context.Tag<I, S>, f: (service: NoInfer<S>) => NoInfer<S>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, I | R>
  /**
   * Updates the specified service within the context of the `Stream`.
   *
   * @since 2.0.0
   * @category context
   */
  <A, E, R, I, S>(
    self: Stream<A, E, R>,
    tag: Context.Tag<I, S>,
    f: (service: NoInfer<S>) => NoInfer<S>
  ): Stream<A, E, I | R>
} = internal.updateService

/**
 * Returns the specified stream if the given condition is satisfied, otherwise
 * returns an empty stream.
 *
 * @since 2.0.0
 * @category utils
 */
export const when: {
  /**
   * Returns the specified stream if the given condition is satisfied, otherwise
   * returns an empty stream.
   *
   * @since 2.0.0
   * @category utils
   */
  (test: LazyArg<boolean>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, R>
  /**
   * Returns the specified stream if the given condition is satisfied, otherwise
   * returns an empty stream.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R>(self: Stream<A, E, R>, test: LazyArg<boolean>): Stream<A, E, R>
} = internal.when

/**
 * Returns the resulting stream when the given `PartialFunction` is defined
 * for the given value, otherwise returns an empty stream.
 *
 * @since 2.0.0
 * @category constructors
 */
export const whenCase: <A, A2, E, R>(
  evaluate: LazyArg<A>,
  pf: (a: A) => Option.Option<Stream<A2, E, R>>
) => Stream<A2, E, R> = internal.whenCase

/**
 * Returns the stream when the given partial function is defined for the given
 * effectful value, otherwise returns an empty stream.
 *
 * @since 2.0.0
 * @category utils
 */
export const whenCaseEffect: {
  /**
   * Returns the stream when the given partial function is defined for the given
   * effectful value, otherwise returns an empty stream.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, A2, E2, R2>(pf: (a: A) => Option.Option<Stream<A2, E2, R2>>): <E, R>(self: Effect.Effect<A, E, R>) => Stream<A2, E2 | E, R2 | R>
  /**
   * Returns the stream when the given partial function is defined for the given
   * effectful value, otherwise returns an empty stream.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    pf: (a: A) => Option.Option<Stream<A2, E2, R2>>
  ): Stream<A2, E | E2, R | R2>
} = internal.whenCaseEffect

/**
 * Returns the stream if the given effectful condition is satisfied, otherwise
 * returns an empty stream.
 *
 * @since 2.0.0
 * @category utils
 */
export const whenEffect: {
  /**
   * Returns the stream if the given effectful condition is satisfied, otherwise
   * returns an empty stream.
   *
   * @since 2.0.0
   * @category utils
   */
  <E2, R2>(effect: Effect.Effect<boolean, E2, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Returns the stream if the given effectful condition is satisfied, otherwise
   * returns an empty stream.
   *
   * @since 2.0.0
   * @category utils
   */
  <A, E, R, E2, R2>(self: Stream<A, E, R>, effect: Effect.Effect<boolean, E2, R2>): Stream<A, E | E2, R | R2>
} = internal.whenEffect

/**
 * Wraps the stream with a new span for tracing.
 *
 * @since 2.0.0
 * @category tracing
 */
export const withSpan: {
  /**
   * Wraps the stream with a new span for tracing.
   *
   * @since 2.0.0
   * @category tracing
   */
  (name: string, options?: Tracer.SpanOptions | undefined): <A, E, R>(self: Stream<A, E, R>) => Stream<A, E, Exclude<R, Tracer.ParentSpan>>
  /**
   * Wraps the stream with a new span for tracing.
   *
   * @since 2.0.0
   * @category tracing
   */
  <A, E, R>(
    self: Stream<A, E, R>,
    name: string,
    options?: Tracer.SpanOptions | undefined
  ): Stream<A, E, Exclude<R, Tracer.ParentSpan>>
} = internal.withSpan

/**
 * Zips this stream with another point-wise and emits tuples of elements from
 * both streams.
 *
 * The new stream will end when one of the sides ends.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * // We create two streams and zip them together.
 * const stream = Stream.zip(
 *   Stream.make(1, 2, 3, 4, 5, 6),
 *   Stream.make("a", "b", "c")
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ] }
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
export const zip: {
  /**
   * Zips this stream with another point-wise and emits tuples of elements from
   * both streams.
   *
   * The new stream will end when one of the sides ends.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * // We create two streams and zip them together.
   * const stream = Stream.zip(
   *   Stream.make(1, 2, 3, 4, 5, 6),
   *   Stream.make("a", "b", "c")
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ] }
   * ```
   *
   * @since 2.0.0
   * @category zipping
   */
  <A2, E2, R2>(that: Stream<A2, E2, R2>): <A, E, R>(self: Stream<A, E, R>) => Stream<[A, A2], E2 | E, R2 | R>
  /**
   * Zips this stream with another point-wise and emits tuples of elements from
   * both streams.
   *
   * The new stream will end when one of the sides ends.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * // We create two streams and zip them together.
   * const stream = Stream.zip(
   *   Stream.make(1, 2, 3, 4, 5, 6),
   *   Stream.make("a", "b", "c")
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ] }
   * ```
   *
   * @since 2.0.0
   * @category zipping
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, that: Stream<A2, E2, R2>): Stream<[A, A2], E | E2, R | R2>
} = internal.zip

/**
 * Zips this stream with another point-wise and emits tuples of elements from
 * both streams.
 *
 * The new stream will end when one of the sides ends.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipFlatten: {
  /**
   * Zips this stream with another point-wise and emits tuples of elements from
   * both streams.
   *
   * The new stream will end when one of the sides ends.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A2, E2, R2>(that: Stream<A2, E2, R2>): <A extends ReadonlyArray<any>, E, R>(self: Stream<A, E, R>) => Stream<[...A, A2], E2 | E, R2 | R>
  /**
   * Zips this stream with another point-wise and emits tuples of elements from
   * both streams.
   *
   * The new stream will end when one of the sides ends.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A extends ReadonlyArray<any>, E, R, A2, E2, R2>(self: Stream<A, E, R>, that: Stream<A2, E2, R2>): Stream<[...A, A2], E | E2, R | R2>
} = internal.zipFlatten

/**
 * Zips this stream with another point-wise, creating a new stream of pairs of
 * elements from both sides.
 *
 * The defaults `defaultLeft` and `defaultRight` will be used if the streams
 * have different lengths and one of the streams has ended before the other.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.zipAll(Stream.make(1, 2, 3, 4, 5, 6), {
 *   other: Stream.make("a", "b", "c"),
 *   defaultSelf: 0,
 *   defaultOther: "x"
 * })
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: "Chunk", values: [ [ 1, "a" ], [ 2, "b" ], [ 3, "c" ], [ 4, "x" ], [ 5, "x" ], [ 6, "x" ] ] }
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipAll: {
  /**
   * Zips this stream with another point-wise, creating a new stream of pairs of
   * elements from both sides.
   *
   * The defaults `defaultLeft` and `defaultRight` will be used if the streams
   * have different lengths and one of the streams has ended before the other.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.zipAll(Stream.make(1, 2, 3, 4, 5, 6), {
   *   other: Stream.make("a", "b", "c"),
   *   defaultSelf: 0,
   *   defaultOther: "x"
   * })
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: "Chunk", values: [ [ 1, "a" ], [ 2, "b" ], [ 3, "c" ], [ 4, "x" ], [ 5, "x" ], [ 6, "x" ] ] }
   * ```
   *
   * @since 2.0.0
   * @category zipping
   */
  <A2, E2, R2, A>(
    options: { readonly other: Stream<A2, E2, R2>; readonly defaultSelf: A; readonly defaultOther: A2 }
  ): <E, R>(self: Stream<A, E, R>) => Stream<[A, A2], E2 | E, R2 | R>
  /**
   * Zips this stream with another point-wise, creating a new stream of pairs of
   * elements from both sides.
   *
   * The defaults `defaultLeft` and `defaultRight` will be used if the streams
   * have different lengths and one of the streams has ended before the other.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.zipAll(Stream.make(1, 2, 3, 4, 5, 6), {
   *   other: Stream.make("a", "b", "c"),
   *   defaultSelf: 0,
   *   defaultOther: "x"
   * })
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: "Chunk", values: [ [ 1, "a" ], [ 2, "b" ], [ 3, "c" ], [ 4, "x" ], [ 5, "x" ], [ 6, "x" ] ] }
   * ```
   *
   * @since 2.0.0
   * @category zipping
   */
  <A, E, R, A2, E2, R2>(
    self: Stream<A, E, R>,
    options: { readonly other: Stream<A2, E2, R2>; readonly defaultSelf: A; readonly defaultOther: A2 }
  ): Stream<[A, A2], E | E2, R | R2>
} = internal.zipAll

/**
 * Zips this stream with another point-wise, and keeps only elements from this
 * stream.
 *
 * The provided default value will be used if the other stream ends before
 * this one.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipAllLeft: {
  /**
   * Zips this stream with another point-wise, and keeps only elements from this
   * stream.
   *
   * The provided default value will be used if the other stream ends before
   * this one.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A2, E2, R2, A>(that: Stream<A2, E2, R2>, defaultLeft: A): <E, R>(self: Stream<A, E, R>) => Stream<A, E2 | E, R2 | R>
  /**
   * Zips this stream with another point-wise, and keeps only elements from this
   * stream.
   *
   * The provided default value will be used if the other stream ends before
   * this one.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, that: Stream<A2, E2, R2>, defaultLeft: A): Stream<A, E | E2, R | R2>
} = internal.zipAllLeft

/**
 * Zips this stream with another point-wise, and keeps only elements from the
 * other stream.
 *
 * The provided default value will be used if this stream ends before the
 * other one.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipAllRight: {
  /**
   * Zips this stream with another point-wise, and keeps only elements from the
   * other stream.
   *
   * The provided default value will be used if this stream ends before the
   * other one.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A2, E2, R2>(that: Stream<A2, E2, R2>, defaultRight: A2): <A, E, R>(self: Stream<A, E, R>) => Stream<A2, E2 | E, R2 | R>
  /**
   * Zips this stream with another point-wise, and keeps only elements from the
   * other stream.
   *
   * The provided default value will be used if this stream ends before the
   * other one.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A, E, R, A2, E2, R2>(self: Stream<A, E, R>, that: Stream<A2, E2, R2>, defaultRight: A2): Stream<A2, E | E2, R | R2>
} = internal.zipAllRight

/**
 * Zips this stream that is sorted by distinct keys and the specified stream
 * that is sorted by distinct keys to produce a new stream that is sorted by
 * distinct keys. Combines values associated with each key into a tuple,
 * using the specified values `defaultLeft` and `defaultRight` to fill in
 * missing values.
 *
 * This allows zipping potentially unbounded streams of data by key in
 * constant space but the caller is responsible for ensuring that the
 * streams are sorted by distinct keys.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipAllSortedByKey: {
  /**
   * Zips this stream that is sorted by distinct keys and the specified stream
   * that is sorted by distinct keys to produce a new stream that is sorted by
   * distinct keys. Combines values associated with each key into a tuple,
   * using the specified values `defaultLeft` and `defaultRight` to fill in
   * missing values.
   *
   * This allows zipping potentially unbounded streams of data by key in
   * constant space but the caller is responsible for ensuring that the
   * streams are sorted by distinct keys.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A2, E2, R2, A, K>(
    options: {
      readonly other: Stream<readonly [K, A2], E2, R2>
      readonly defaultSelf: A
      readonly defaultOther: A2
      readonly order: Order.Order<K>
    }
  ): <E, R>(self: Stream<readonly [K, A], E, R>) => Stream<[K, [A, A2]], E2 | E, R2 | R>
  /**
   * Zips this stream that is sorted by distinct keys and the specified stream
   * that is sorted by distinct keys to produce a new stream that is sorted by
   * distinct keys. Combines values associated with each key into a tuple,
   * using the specified values `defaultLeft` and `defaultRight` to fill in
   * missing values.
   *
   * This allows zipping potentially unbounded streams of data by key in
   * constant space but the caller is responsible for ensuring that the
   * streams are sorted by distinct keys.
   *
   * @since 2.0.0
   * @category zipping
   */
  <K, A, E, R, A2, E2, R2>(
    self: Stream<readonly [K, A], E, R>,
    options: {
      readonly other: Stream<readonly [K, A2], E2, R2>
      readonly defaultSelf: A
      readonly defaultOther: A2
      readonly order: Order.Order<K>
    }
  ): Stream<[K, [A, A2]], E | E2, R | R2>
} = internal.zipAllSortedByKey

/**
 * Zips this stream that is sorted by distinct keys and the specified stream
 * that is sorted by distinct keys to produce a new stream that is sorted by
 * distinct keys. Keeps only values from this stream, using the specified
 * value `default` to fill in missing values.
 *
 * This allows zipping potentially unbounded streams of data by key in
 * constant space but the caller is responsible for ensuring that the
 * streams are sorted by distinct keys.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipAllSortedByKeyLeft: {
  /**
   * Zips this stream that is sorted by distinct keys and the specified stream
   * that is sorted by distinct keys to produce a new stream that is sorted by
   * distinct keys. Keeps only values from this stream, using the specified
   * value `default` to fill in missing values.
   *
   * This allows zipping potentially unbounded streams of data by key in
   * constant space but the caller is responsible for ensuring that the
   * streams are sorted by distinct keys.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A2, E2, R2, A, K>(
    options: {
      readonly other: Stream<readonly [K, A2], E2, R2>
      readonly defaultSelf: A
      readonly order: Order.Order<K>
    }
  ): <E, R>(self: Stream<readonly [K, A], E, R>) => Stream<[K, A], E2 | E, R2 | R>
  /**
   * Zips this stream that is sorted by distinct keys and the specified stream
   * that is sorted by distinct keys to produce a new stream that is sorted by
   * distinct keys. Keeps only values from this stream, using the specified
   * value `default` to fill in missing values.
   *
   * This allows zipping potentially unbounded streams of data by key in
   * constant space but the caller is responsible for ensuring that the
   * streams are sorted by distinct keys.
   *
   * @since 2.0.0
   * @category zipping
   */
  <K, A, E, R, A2, E2, R2>(
    self: Stream<readonly [K, A], E, R>,
    options: {
      readonly other: Stream<readonly [K, A2], E2, R2>
      readonly defaultSelf: A
      readonly order: Order.Order<K>
    }
  ): Stream<[K, A], E | E2, R | R2>
} = internal.zipAllSortedByKeyLeft

/**
 * Zips this stream that is sorted by distinct keys and the specified stream
 * that is sorted by distinct keys to produce a new stream that is sorted by
 * distinct keys. Keeps only values from that stream, using the specified
 * value `default` to fill in missing values.
 *
 * This allows zipping potentially unbounded streams of data by key in
 * constant space but the caller is responsible for ensuring that the
 * streams are sorted by distinct keys.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipAllSortedByKeyRight: {
  /**
   * Zips this stream that is sorted by distinct keys and the specified stream
   * that is sorted by distinct keys to produce a new stream that is sorted by
   * distinct keys. Keeps only values from that stream, using the specified
   * value `default` to fill in missing values.
   *
   * This allows zipping potentially unbounded streams of data by key in
   * constant space but the caller is responsible for ensuring that the
   * streams are sorted by distinct keys.
   *
   * @since 2.0.0
   * @category zipping
   */
  <K, A2, E2, R2>(
    options: {
      readonly other: Stream<readonly [K, A2], E2, R2>
      readonly defaultOther: A2
      readonly order: Order.Order<K>
    }
  ): <A, E, R>(self: Stream<readonly [K, A], E, R>) => Stream<[K, A2], E2 | E, R2 | R>
  /**
   * Zips this stream that is sorted by distinct keys and the specified stream
   * that is sorted by distinct keys to produce a new stream that is sorted by
   * distinct keys. Keeps only values from that stream, using the specified
   * value `default` to fill in missing values.
   *
   * This allows zipping potentially unbounded streams of data by key in
   * constant space but the caller is responsible for ensuring that the
   * streams are sorted by distinct keys.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A, E, R, K, A2, E2, R2>(
    self: Stream<readonly [K, A], E, R>,
    options: {
      readonly other: Stream<readonly [K, A2], E2, R2>
      readonly defaultOther: A2
      readonly order: Order.Order<K>
    }
  ): Stream<[K, A2], E | E2, R | R2>
} = internal.zipAllSortedByKeyRight

/**
 * Zips this stream that is sorted by distinct keys and the specified stream
 * that is sorted by distinct keys to produce a new stream that is sorted by
 * distinct keys. Uses the functions `left`, `right`, and `both` to handle
 * the cases where a key and value exist in this stream, that stream, or
 * both streams.
 *
 * This allows zipping potentially unbounded streams of data by key in
 * constant space but the caller is responsible for ensuring that the
 * streams are sorted by distinct keys.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipAllSortedByKeyWith: {
  /**
   * Zips this stream that is sorted by distinct keys and the specified stream
   * that is sorted by distinct keys to produce a new stream that is sorted by
   * distinct keys. Uses the functions `left`, `right`, and `both` to handle
   * the cases where a key and value exist in this stream, that stream, or
   * both streams.
   *
   * This allows zipping potentially unbounded streams of data by key in
   * constant space but the caller is responsible for ensuring that the
   * streams are sorted by distinct keys.
   *
   * @since 2.0.0
   * @category zipping
   */
  <K, A2, E2, R2, A, A3>(
    options: {
      readonly other: Stream<readonly [K, A2], E2, R2>
      readonly onSelf: (a: A) => A3
      readonly onOther: (a2: A2) => A3
      readonly onBoth: (a: A, a2: A2) => A3
      readonly order: Order.Order<K>
    }
  ): <E, R>(self: Stream<readonly [K, A], E, R>) => Stream<[K, A3], E2 | E, R2 | R>
  /**
   * Zips this stream that is sorted by distinct keys and the specified stream
   * that is sorted by distinct keys to produce a new stream that is sorted by
   * distinct keys. Uses the functions `left`, `right`, and `both` to handle
   * the cases where a key and value exist in this stream, that stream, or
   * both streams.
   *
   * This allows zipping potentially unbounded streams of data by key in
   * constant space but the caller is responsible for ensuring that the
   * streams are sorted by distinct keys.
   *
   * @since 2.0.0
   * @category zipping
   */
  <K, A, E, R, A2, E2, R2, A3>(
    self: Stream<readonly [K, A], E, R>,
    options: {
      readonly other: Stream<readonly [K, A2], E2, R2>
      readonly onSelf: (a: A) => A3
      readonly onOther: (a2: A2) => A3
      readonly onBoth: (a: A, a2: A2) => A3
      readonly order: Order.Order<K>
    }
  ): Stream<[K, A3], E | E2, R | R2>
} = internal.zipAllSortedByKeyWith

/**
 * Zips this stream with another point-wise. The provided functions will be
 * used to create elements for the composed stream.
 *
 * The functions `left` and `right` will be used if the streams have different
 * lengths and one of the streams has ended before the other.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.zipAllWith(Stream.make(1, 2, 3, 4, 5, 6), {
 *   other: Stream.make("a", "b", "c"),
 *   onSelf: (n) => [n, "x"],
 *   onOther: (s) => [0, s],
 *   onBoth: (n, s) => [n - s.length, s]
 * })
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: "Chunk", values: [ [ 0, "a" ], [ 1, "b" ], [ 2, "c" ], [ 4, "x" ], [ 5, "x" ], [ 6, "x" ] ] }
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipAllWith: {
  /**
   * Zips this stream with another point-wise. The provided functions will be
   * used to create elements for the composed stream.
   *
   * The functions `left` and `right` will be used if the streams have different
   * lengths and one of the streams has ended before the other.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.zipAllWith(Stream.make(1, 2, 3, 4, 5, 6), {
   *   other: Stream.make("a", "b", "c"),
   *   onSelf: (n) => [n, "x"],
   *   onOther: (s) => [0, s],
   *   onBoth: (n, s) => [n - s.length, s]
   * })
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: "Chunk", values: [ [ 0, "a" ], [ 1, "b" ], [ 2, "c" ], [ 4, "x" ], [ 5, "x" ], [ 6, "x" ] ] }
   * ```
   *
   * @since 2.0.0
   * @category zipping
   */
  <A2, E2, R2, A, A3>(
    options: {
      readonly other: Stream<A2, E2, R2>
      readonly onSelf: (a: A) => A3
      readonly onOther: (a2: A2) => A3
      readonly onBoth: (a: A, a2: A2) => A3
    }
  ): <E, R>(self: Stream<A, E, R>) => Stream<A3, E2 | E, R2 | R>
  /**
   * Zips this stream with another point-wise. The provided functions will be
   * used to create elements for the composed stream.
   *
   * The functions `left` and `right` will be used if the streams have different
   * lengths and one of the streams has ended before the other.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * const stream = Stream.zipAllWith(Stream.make(1, 2, 3, 4, 5, 6), {
   *   other: Stream.make("a", "b", "c"),
   *   onSelf: (n) => [n, "x"],
   *   onOther: (s) => [0, s],
   *   onBoth: (n, s) => [n - s.length, s]
   * })
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: "Chunk", values: [ [ 0, "a" ], [ 1, "b" ], [ 2, "c" ], [ 4, "x" ], [ 5, "x" ], [ 6, "x" ] ] }
   * ```
   *
   * @since 2.0.0
   * @category zipping
   */
  <A, E, R, A2, E2, R2, A3>(
    self: Stream<A, E, R>,
    options: {
      readonly other: Stream<A2, E2, R2>
      readonly onSelf: (a: A) => A3
      readonly onOther: (a2: A2) => A3
      readonly onBoth: (a: A, a2: A2) => A3
    }
  ): Stream<A3, E | E2, R | R2>
} = internal.zipAllWith

/**
 * Zips the two streams so that when a value is emitted by either of the two
 * streams, it is combined with the latest value from the other stream to
 * produce a result.
 *
 * Note: tracking the latest value is done on a per-chunk basis. That means
 * that emitted elements that are not the last value in chunks will never be
 * used for zipping.
 *
 * @example
 * ```ts
 * import { Effect, Schedule, Stream } from "effect"
 *
 * const s1 = Stream.make(1, 2, 3).pipe(
 *   Stream.schedule(Schedule.spaced("1 second"))
 * )
 *
 * const s2 = Stream.make("a", "b", "c", "d").pipe(
 *   Stream.schedule(Schedule.spaced("500 millis"))
 * )
 *
 * const stream = Stream.zipLatest(s1, s2)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: "Chunk", values: [ [ 1, "a" ], [ 1, "b" ], [ 2, "b" ], [ 2, "c" ], [ 2, "d" ], [ 3, "d" ] ] }
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipLatest: {
  /**
   * Zips the two streams so that when a value is emitted by either of the two
   * streams, it is combined with the latest value from the other stream to
   * produce a result.
   *
   * Note: tracking the latest value is done on a per-chunk basis. That means
   * that emitted elements that are not the last value in chunks will never be
   * used for zipping.
   *
   * @example
   * ```ts
   * import { Effect, Schedule, Stream } from "effect"
   *
   * const s1 = Stream.make(1, 2, 3).pipe(
   *   Stream.schedule(Schedule.spaced("1 second"))
   * )
   *
   * const s2 = Stream.make("a", "b", "c", "d").pipe(
   *   Stream.schedule(Schedule.spaced("500 millis"))
   * )
   *
   * const stream = Stream.zipLatest(s1, s2)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: "Chunk", values: [ [ 1, "a" ], [ 1, "b" ], [ 2, "b" ], [ 2, "c" ], [ 2, "d" ], [ 3, "d" ] ] }
   * ```
   *
   * @since 2.0.0
   * @category zipping
   */
  <AR, ER, RR>(right: Stream<AR, ER, RR>): <AL, EL, RL>(left: Stream<AL, EL, RL>) => Stream<[AL, AR], EL | ER, RL | RR>
  /**
   * Zips the two streams so that when a value is emitted by either of the two
   * streams, it is combined with the latest value from the other stream to
   * produce a result.
   *
   * Note: tracking the latest value is done on a per-chunk basis. That means
   * that emitted elements that are not the last value in chunks will never be
   * used for zipping.
   *
   * @example
   * ```ts
   * import { Effect, Schedule, Stream } from "effect"
   *
   * const s1 = Stream.make(1, 2, 3).pipe(
   *   Stream.schedule(Schedule.spaced("1 second"))
   * )
   *
   * const s2 = Stream.make("a", "b", "c", "d").pipe(
   *   Stream.schedule(Schedule.spaced("500 millis"))
   * )
   *
   * const stream = Stream.zipLatest(s1, s2)
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: "Chunk", values: [ [ 1, "a" ], [ 1, "b" ], [ 2, "b" ], [ 2, "c" ], [ 2, "d" ], [ 3, "d" ] ] }
   * ```
   *
   * @since 2.0.0
   * @category zipping
   */
  <AL, EL, RL, AR, ER, RR>(left: Stream<AL, EL, RL>, right: Stream<AR, ER, RR>): Stream<[AL, AR], EL | ER, RL | RR>
} = internal.zipLatest

/**
 * Zips multiple streams so that when a value is emitted by any of the streams,
 * it is combined with the latest values from the other streams to produce a result.
 *
 * Note: tracking the latest value is done on a per-chunk basis. That means
 * that emitted elements that are not the last value in chunks will never be
 * used for zipping.
 *
 * @example
 * ```ts
 * import { Stream, Schedule, Console, Effect } from "effect"
 *
 * const stream = Stream.zipLatestAll(
 *     Stream.fromSchedule(Schedule.spaced('1 millis')),
 *     Stream.fromSchedule(Schedule.spaced('2 millis')),
 *     Stream.fromSchedule(Schedule.spaced('4 millis')),
 * ).pipe(Stream.take(6), Stream.tap(Console.log))
 *
 * Effect.runPromise(Stream.runDrain(stream))
 * // Output:
 * // [ 0, 0, 0 ]
 * // [ 1, 0, 0 ]
 * // [ 1, 1, 0 ]
 * // [ 2, 1, 0 ]
 * // [ 3, 1, 0 ]
 * // [ 3, 1, 1 ]
 * // .....
 * ```
 *
 * @since 3.3.0
 * @category zipping
 */
export const zipLatestAll: <T extends ReadonlyArray<Stream<any, any, any>>>(
  ...streams: T
) => Stream<
  [T[number]] extends [never] ? never
    : { [K in keyof T]: T[K] extends Stream<infer A, infer _E, infer _R> ? A : never },
  [T[number]] extends [never] ? never : T[number] extends Stream<infer _A, infer _E, infer _R> ? _E : never,
  [T[number]] extends [never] ? never : T[number] extends Stream<infer _A, infer _E, infer _R> ? _R : never
> = internal.zipLatestAll

/**
 * Zips the two streams so that when a value is emitted by either of the two
 * streams, it is combined with the latest value from the other stream to
 * produce a result.
 *
 * Note: tracking the latest value is done on a per-chunk basis. That means
 * that emitted elements that are not the last value in chunks will never be
 * used for zipping.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipLatestWith: {
  /**
   * Zips the two streams so that when a value is emitted by either of the two
   * streams, it is combined with the latest value from the other stream to
   * produce a result.
   *
   * Note: tracking the latest value is done on a per-chunk basis. That means
   * that emitted elements that are not the last value in chunks will never be
   * used for zipping.
   *
   * @since 2.0.0
   * @category zipping
   */
  <AR, ER, RR, AL, A>(right: Stream<AR, ER, RR>, f: (left: AL, right: AR) => A): <EL, RL>(left: Stream<AL, EL, RL>) => Stream<A, EL | ER, RL | RR>
  /**
   * Zips the two streams so that when a value is emitted by either of the two
   * streams, it is combined with the latest value from the other stream to
   * produce a result.
   *
   * Note: tracking the latest value is done on a per-chunk basis. That means
   * that emitted elements that are not the last value in chunks will never be
   * used for zipping.
   *
   * @since 2.0.0
   * @category zipping
   */
  <AL, EL, RL, AR, ER, RR, A>(
    left: Stream<AL, EL, RL>,
    right: Stream<AR, ER, RR>,
    f: (left: AL, right: AR) => A
  ): Stream<A, EL | ER, RL | RR>
} = internal.zipLatestWith

/**
 * Zips this stream with another point-wise, but keeps only the outputs of
 * `left` stream.
 *
 * The new stream will end when one of the sides ends.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipLeft: {
  /**
   * Zips this stream with another point-wise, but keeps only the outputs of
   * `left` stream.
   *
   * The new stream will end when one of the sides ends.
   *
   * @since 2.0.0
   * @category zipping
   */
  <AR, ER, RR>(right: Stream<AR, ER, RR>): <AL, EL, RL>(left: Stream<AL, EL, RL>) => Stream<AL, ER | EL, RR | RL>
  /**
   * Zips this stream with another point-wise, but keeps only the outputs of
   * `left` stream.
   *
   * The new stream will end when one of the sides ends.
   *
   * @since 2.0.0
   * @category zipping
   */
  <AL, EL, RL, AR, ER, RR>(left: Stream<AL, EL, RL>, right: Stream<AR, ER, RR>): Stream<AL, EL | ER, RL | RR>
} = internal.zipLeft

/**
 * Zips this stream with another point-wise, but keeps only the outputs of the
 * `right` stream.
 *
 * The new stream will end when one of the sides ends.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipRight: {
  /**
   * Zips this stream with another point-wise, but keeps only the outputs of the
   * `right` stream.
   *
   * The new stream will end when one of the sides ends.
   *
   * @since 2.0.0
   * @category zipping
   */
  <AR, ER, RR>(right: Stream<AR, ER, RR>): <AL, EL, RL>(left: Stream<AL, EL, RL>) => Stream<AR, ER | EL, RR | RL>
  /**
   * Zips this stream with another point-wise, but keeps only the outputs of the
   * `right` stream.
   *
   * The new stream will end when one of the sides ends.
   *
   * @since 2.0.0
   * @category zipping
   */
  <AL, EL, RL, AR, ER, RR>(left: Stream<AL, EL, RL>, right: Stream<AR, ER, RR>): Stream<AR, EL | ER, RL | RR>
} = internal.zipRight

/**
 * Zips this stream with another point-wise and applies the function to the
 * paired elements.
 *
 * The new stream will end when one of the sides ends.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * // We create two streams and zip them with custom logic.
 * const stream = Stream.zipWith(
 *   Stream.make(1, 2, 3, 4, 5, 6),
 *   Stream.make("a", "b", "c"),
 *   (n, s) => [n - s.length, s]
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ] }
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipWith: {
  /**
   * Zips this stream with another point-wise and applies the function to the
   * paired elements.
   *
   * The new stream will end when one of the sides ends.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * // We create two streams and zip them with custom logic.
   * const stream = Stream.zipWith(
   *   Stream.make(1, 2, 3, 4, 5, 6),
   *   Stream.make("a", "b", "c"),
   *   (n, s) => [n - s.length, s]
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ] }
   * ```
   *
   * @since 2.0.0
   * @category zipping
   */
  <AR, ER, RR, AL, A>(right: Stream<AR, ER, RR>, f: (left: AL, right: AR) => A): <EL, RL>(left: Stream<AL, EL, RL>) => Stream<A, EL | ER, RL | RR>
  /**
   * Zips this stream with another point-wise and applies the function to the
   * paired elements.
   *
   * The new stream will end when one of the sides ends.
   *
   * @example
   * ```ts
   * import { Effect, Stream } from "effect"
   *
   * // We create two streams and zip them with custom logic.
   * const stream = Stream.zipWith(
   *   Stream.make(1, 2, 3, 4, 5, 6),
   *   Stream.make("a", "b", "c"),
   *   (n, s) => [n - s.length, s]
   * )
   *
   * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
   * // { _id: 'Chunk', values: [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ] }
   * ```
   *
   * @since 2.0.0
   * @category zipping
   */
  <AL, EL, RL, AR, ER, RR, A>(
    left: Stream<AL, EL, RL>,
    right: Stream<AR, ER, RR>,
    f: (left: AL, right: AR) => A
  ): Stream<A, EL | ER, RL | RR>
} = internal.zipWith

/**
 * Zips this stream with another point-wise and applies the function to the
 * paired elements.
 *
 * The new stream will end when one of the sides ends.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipWithChunks: {
  /**
   * Zips this stream with another point-wise and applies the function to the
   * paired elements.
   *
   * The new stream will end when one of the sides ends.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A2, E2, R2, A, A3>(
    that: Stream<A2, E2, R2>,
    f: (
      left: Chunk.Chunk<A>,
      right: Chunk.Chunk<A2>
    ) => readonly [Chunk.Chunk<A3>, Either.Either<Chunk.Chunk<A2>, Chunk.Chunk<A>>]
  ): <E, R>(self: Stream<A, E, R>) => Stream<A3, E2 | E, R2 | R>
  /**
   * Zips this stream with another point-wise and applies the function to the
   * paired elements.
   *
   * The new stream will end when one of the sides ends.
   *
   * @since 2.0.0
   * @category zipping
   */
  <A, E, R, A2, E2, R2, A3>(
    self: Stream<A, E, R>,
    that: Stream<A2, E2, R2>,
    f: (
      left: Chunk.Chunk<A>,
      right: Chunk.Chunk<A2>
    ) => readonly [Chunk.Chunk<A3>, Either.Either<Chunk.Chunk<A2>, Chunk.Chunk<A>>]
  ): Stream<A3, E | E2, R | R2>
} = internal.zipWithChunks

/**
 * Zips each element with the next element if present.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Stream } from "effect"
 *
 * const stream = Stream.zipWithNext(Stream.make(1, 2, 3, 4))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then((chunk) => console.log(Chunk.toArray(chunk)))
 * // [
 * //   [ 1, { _id: 'Option', _tag: 'Some', value: 2 } ],
 * //   [ 2, { _id: 'Option', _tag: 'Some', value: 3 } ],
 * //   [ 3, { _id: 'Option', _tag: 'Some', value: 4 } ],
 * //   [ 4, { _id: 'Option', _tag: 'None' } ]
 * // ]
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipWithNext: <A, E, R>(self: Stream<A, E, R>) => Stream<[A, Option.Option<A>], E, R> = internal.zipWithNext

/**
 * Zips each element with the previous element. Initially accompanied by
 * `None`.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Stream } from "effect"
 *
 * const stream = Stream.zipWithPrevious(Stream.make(1, 2, 3, 4))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then((chunk) => console.log(Chunk.toArray(chunk)))
 * // [
 * //   [ { _id: 'Option', _tag: 'None' }, 1 ],
 * //   [ { _id: 'Option', _tag: 'Some', value: 1 }, 2 ],
 * //   [ { _id: 'Option', _tag: 'Some', value: 2 }, 3 ],
 * //   [ { _id: 'Option', _tag: 'Some', value: 3 }, 4 ]
 * // ]
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipWithPrevious: <A, E, R>(self: Stream<A, E, R>) => Stream<[Option.Option<A>, A], E, R> =
  internal.zipWithPrevious

/**
 * Zips each element with both the previous and next element.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Stream } from "effect"
 *
 * const stream = Stream.zipWithPreviousAndNext(Stream.make(1, 2, 3, 4))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then((chunk) => console.log(Chunk.toArray(chunk)))
 * // [
 * //   [
 * //     { _id: 'Option', _tag: 'None' },
 * //     1,
 * //     { _id: 'Option', _tag: 'Some', value: 2 }
 * //   ],
 * //   [
 * //     { _id: 'Option', _tag: 'Some', value: 1 },
 * //     2,
 * //     { _id: 'Option', _tag: 'Some', value: 3 }
 * //   ],
 * //   [
 * //     { _id: 'Option', _tag: 'Some', value: 2 },
 * //     3,
 * //     { _id: 'Option', _tag: 'Some', value: 4 }
 * //   ],
 * //   [
 * //     { _id: 'Option', _tag: 'Some', value: 3 },
 * //     4,
 * //     { _id: 'Option', _tag: 'None' }
 * //   ]
 * // ]
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipWithPreviousAndNext: <A, E, R>(
  self: Stream<A, E, R>
) => Stream<[Option.Option<A>, A, Option.Option<A>], E, R> = internal.zipWithPreviousAndNext

/**
 * Zips this stream together with the index of elements.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make("Mary", "James", "Robert", "Patricia")
 *
 * const indexedStream = Stream.zipWithIndex(stream)
 *
 * Effect.runPromise(Stream.runCollect(indexedStream)).then(console.log)
 * // {
 * //   _id: 'Chunk',
 * //   values: [ [ 'Mary', 0 ], [ 'James', 1 ], [ 'Robert', 2 ], [ 'Patricia', 3 ] ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipWithIndex: <A, E, R>(self: Stream<A, E, R>) => Stream<[A, number], E, R> = internal.zipWithIndex

// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Stream` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Chunk, Effect, pipe, Stream } from "effect"
 *
 * const result = pipe(
 *   Stream.Do,
 *   Stream.bind("x", () => Stream.succeed(2)),
 *   Stream.bind("y", () => Stream.succeed(3)),
 *   Stream.let("sum", ({ x, y }) => x + y)
 * )
 * assert.deepStrictEqual(Effect.runSync(Stream.runCollect(result)), Chunk.of({ x: 2, y: 3, sum: 5 }))
 * ```
 *
 * @see {@link bindTo}
 * @see {@link bind}
 * @see {@link bindEffect}
 * @see {@link let_ let}
 *
 * @category do notation
 * @since 2.0.0
 */
export const Do: Stream<{}> = internal.Do

/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Stream` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Chunk, Effect, pipe, Stream } from "effect"
 *
 * const result = pipe(
 *   Stream.Do,
 *   Stream.bind("x", () => Stream.succeed(2)),
 *   Stream.bind("y", () => Stream.succeed(3)),
 *   Stream.let("sum", ({ x, y }) => x + y)
 * )
 * assert.deepStrictEqual(Effect.runSync(Stream.runCollect(result)), Chunk.of({ x: 2, y: 3, sum: 5 }))
 * ```
 *
 * @see {@link Do}
 * @see {@link bindTo}
 * @see {@link bindEffect}
 * @see {@link let_ let}
 *
 * @category do notation
 * @since 2.0.0
 */
export const bind: {
  /**
   * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
   *
   * Here's how the do simulation works:
   *
   * 1. Start the do simulation using the `Do` value
   * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Stream` values
   * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
   * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Chunk, Effect, pipe, Stream } from "effect"
   *
   * const result = pipe(
   *   Stream.Do,
   *   Stream.bind("x", () => Stream.succeed(2)),
   *   Stream.bind("y", () => Stream.succeed(3)),
   *   Stream.let("sum", ({ x, y }) => x + y)
   * )
   * assert.deepStrictEqual(Effect.runSync(Stream.runCollect(result)), Chunk.of({ x: 2, y: 3, sum: 5 }))
   * ```
   *
   * @see {@link Do}
   * @see {@link bindTo}
   * @see {@link bindEffect}
   * @see {@link let_ let}
   *
   * @category do notation
   * @since 2.0.0
   */
  <N extends string, A, B, E2, R2>(
    tag: Exclude<N, keyof A>,
    f: (_: NoInfer<A>) => Stream<B, E2, R2>,
    options?:
      | { readonly concurrency?: number | "unbounded" | undefined; readonly bufferSize?: number | undefined }
      | undefined
  ): <E, R>(self: Stream<A, E, R>) => Stream<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E2 | E, R2 | R>
  /**
   * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
   *
   * Here's how the do simulation works:
   *
   * 1. Start the do simulation using the `Do` value
   * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Stream` values
   * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
   * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Chunk, Effect, pipe, Stream } from "effect"
   *
   * const result = pipe(
   *   Stream.Do,
   *   Stream.bind("x", () => Stream.succeed(2)),
   *   Stream.bind("y", () => Stream.succeed(3)),
   *   Stream.let("sum", ({ x, y }) => x + y)
   * )
   * assert.deepStrictEqual(Effect.runSync(Stream.runCollect(result)), Chunk.of({ x: 2, y: 3, sum: 5 }))
   * ```
   *
   * @see {@link Do}
   * @see {@link bindTo}
   * @see {@link bindEffect}
   * @see {@link let_ let}
   *
   * @category do notation
   * @since 2.0.0
   */
  <A, E, R, N extends string, B, E2, R2>(
    self: Stream<A, E, R>,
    tag: Exclude<N, keyof A>,
    f: (_: NoInfer<A>) => Stream<B, E2, R2>,
    options?:
      | { readonly concurrency?: number | "unbounded" | undefined; readonly bufferSize?: number | undefined }
      | undefined
  ): Stream<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E | E2, R | R2>
} = internal.bind

/**
 * Binds an effectful value in a `do` scope
 *
 * @see {@link Do}
 * @see {@link bindTo}
 * @see {@link bind}
 * @see {@link let_ let}
 *
 * @since 2.0.0
 * @category do notation
 */
export const bindEffect: {
  /**
   * Binds an effectful value in a `do` scope
   *
   * @see {@link Do}
   * @see {@link bindTo}
   * @see {@link bind}
   * @see {@link let_ let}
   *
   * @since 2.0.0
   * @category do notation
   */
  <N extends string, A, B, E2, R2>(
    tag: Exclude<N, keyof A>,
    f: (_: NoInfer<A>) => Effect.Effect<B, E2, R2>,
    options?: { readonly concurrency?: number | "unbounded" | undefined; readonly bufferSize?: number | undefined }
  ): <E, R>(self: Stream<A, E, R>) => Stream<{ [K in keyof A | N]: K extends keyof A ? A[K] : B }, E | E2, R | R2>
  /**
   * Binds an effectful value in a `do` scope
   *
   * @see {@link Do}
   * @see {@link bindTo}
   * @see {@link bind}
   * @see {@link let_ let}
   *
   * @since 2.0.0
   * @category do notation
   */
  <A, E, R, N extends string, B, E2, R2>(
    self: Stream<A, E, R>,
    tag: Exclude<N, keyof A>,
    f: (_: NoInfer<A>) => Effect.Effect<B, E2, R2>,
    options?: { readonly concurrency?: number | "unbounded" | undefined; readonly unordered?: boolean | undefined }
  ): Stream<{ [K in keyof A | N]: K extends keyof A ? A[K] : B }, E | E2, R | R2>
} = groupBy_.bindEffect

/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Stream` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Chunk, Effect, pipe, Stream } from "effect"
 *
 * const result = pipe(
 *   Stream.Do,
 *   Stream.bind("x", () => Stream.succeed(2)),
 *   Stream.bind("y", () => Stream.succeed(3)),
 *   Stream.let("sum", ({ x, y }) => x + y)
 * )
 * assert.deepStrictEqual(Effect.runSync(Stream.runCollect(result)), Chunk.of({ x: 2, y: 3, sum: 5 }))
 * ```
 *
 * @see {@link Do}
 * @see {@link bind}
 * @see {@link bindEffect}
 * @see {@link let_ let}
 *
 * @category do notation
 * @since 2.0.0
 */
export const bindTo: {
  /**
   * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
   *
   * Here's how the do simulation works:
   *
   * 1. Start the do simulation using the `Do` value
   * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Stream` values
   * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
   * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Chunk, Effect, pipe, Stream } from "effect"
   *
   * const result = pipe(
   *   Stream.Do,
   *   Stream.bind("x", () => Stream.succeed(2)),
   *   Stream.bind("y", () => Stream.succeed(3)),
   *   Stream.let("sum", ({ x, y }) => x + y)
   * )
   * assert.deepStrictEqual(Effect.runSync(Stream.runCollect(result)), Chunk.of({ x: 2, y: 3, sum: 5 }))
   * ```
   *
   * @see {@link Do}
   * @see {@link bind}
   * @see {@link bindEffect}
   * @see {@link let_ let}
   *
   * @category do notation
   * @since 2.0.0
   */
  <N extends string>(name: N): <A, E, R>(self: Stream<A, E, R>) => Stream<{ [K in N]: A }, E, R>
  /**
   * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
   *
   * Here's how the do simulation works:
   *
   * 1. Start the do simulation using the `Do` value
   * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Stream` values
   * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
   * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Chunk, Effect, pipe, Stream } from "effect"
   *
   * const result = pipe(
   *   Stream.Do,
   *   Stream.bind("x", () => Stream.succeed(2)),
   *   Stream.bind("y", () => Stream.succeed(3)),
   *   Stream.let("sum", ({ x, y }) => x + y)
   * )
   * assert.deepStrictEqual(Effect.runSync(Stream.runCollect(result)), Chunk.of({ x: 2, y: 3, sum: 5 }))
   * ```
   *
   * @see {@link Do}
   * @see {@link bind}
   * @see {@link bindEffect}
   * @see {@link let_ let}
   *
   * @category do notation
   * @since 2.0.0
   */
  <A, E, R, N extends string>(self: Stream<A, E, R>, name: N): Stream<{ [K in N]: A }, E, R>
} = internal.bindTo

const let_: {
  <N extends string, A extends object, B>(
    name: Exclude<N, keyof A>,
    f: (a: NoInfer<A>) => B
  ): <E, R>(self: Stream<A, E, R>) => Stream<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E, R>
  <A extends object, E, R, N extends string, B>(
    self: Stream<A, E, R>,
    name: Exclude<N, keyof A>,
    f: (a: NoInfer<A>) => B
  ): Stream<{ [K in N | keyof A]: K extends keyof A ? A[K] : B }, E, R>
} = internal.let_

export {
  /**
   * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
   *
   * Here's how the do simulation works:
   *
   * 1. Start the do simulation using the `Do` value
   * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Stream` values
   * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
   * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
   *
   * @example
   * ```ts
   * import * as assert from "node:assert"
   * import { Chunk, Effect, pipe, Stream } from "effect"
   *
   * const result = pipe(
   *   Stream.Do,
   *   Stream.bind("x", () => Stream.succeed(2)),
   *   Stream.bind("y", () => Stream.succeed(3)),
   *   Stream.let("sum", ({ x, y }) => x + y)
   * )
   * assert.deepStrictEqual(Effect.runSync(Stream.runCollect(result)), Chunk.of({ x: 2, y: 3, sum: 5 }))
   * ```
   *
   * @see {@link Do}
   * @see {@link bindTo}
   * @see {@link bind}
   * @see {@link bindEffect}
   *
   * @category do notation
   * @since 2.0.0
   */
  let_ as let
}

// -------------------------------------------------------------------------------------
// encoding
// -------------------------------------------------------------------------------------

/**
 * Decode Uint8Array chunks into a stream of strings using the specified encoding.
 *
 * @since 2.0.0
 * @category encoding
 */
export const decodeText: {
  // -------------------------------------------------------------------------------------
  // encoding
  // -------------------------------------------------------------------------------------

  /**
   * Decode Uint8Array chunks into a stream of strings using the specified encoding.
   *
   * @since 2.0.0
   * @category encoding
   */
  (encoding?: string | undefined): <E, R>(self: Stream<Uint8Array, E, R>) => Stream<string, E, R>
  // -------------------------------------------------------------------------------------
  // encoding
  // -------------------------------------------------------------------------------------

  /**
   * Decode Uint8Array chunks into a stream of strings using the specified encoding.
   *
   * @since 2.0.0
   * @category encoding
   */
  <E, R>(self: Stream<Uint8Array, E, R>, encoding?: string | undefined): Stream<string, E, R>
} = internal.decodeText

/**
 * Encode a stream of strings into a stream of Uint8Array chunks using the specified encoding.
 *
 * @since 2.0.0
 * @category encoding
 */
export const encodeText: <E, R>(self: Stream<string, E, R>) => Stream<Uint8Array, E, R> = internal.encodeText

/**
 * @since 3.4.0
 * @category models
 */
export interface EventListener<A> {
  addEventListener(
    event: string,
    f: (event: A) => void,
    options?: {
      readonly capture?: boolean
      readonly passive?: boolean
      readonly once?: boolean
      readonly signal?: AbortSignal
    } | boolean
  ): void
  removeEventListener(
    event: string,
    f: (event: A) => void,
    options?: {
      readonly capture?: boolean
    } | boolean
  ): void
}

/**
 * Creates a `Stream` using addEventListener.
 * @since 3.1.0
 */
export const fromEventListener: <A = unknown>(
  target: EventListener<A>,
  type: string,
  options?: boolean | {
    readonly capture?: boolean
    readonly passive?: boolean
    readonly once?: boolean
    readonly bufferSize?: number | "unbounded" | undefined
  } | undefined
) => Stream<A> = internal.fromEventListener
