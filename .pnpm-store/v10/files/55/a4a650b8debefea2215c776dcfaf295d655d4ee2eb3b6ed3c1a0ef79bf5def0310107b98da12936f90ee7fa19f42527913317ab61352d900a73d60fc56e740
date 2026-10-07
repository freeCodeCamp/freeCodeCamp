/**
 * @since 2.0.0
 */
import type * as Cause from "./Cause.js"
import type * as Effect from "./Effect.js"
import type * as Either from "./Either.js"
import type * as Exit from "./Exit.js"
import * as internal from "./internal/channel/singleProducerAsyncInput.js"

/**
 * An MVar-like abstraction for sending data to channels asynchronously which is
 * designed for one producer and multiple consumers.
 *
 * Features the following semantics:
 *   - Buffer of size 1.
 *   - When emitting, the producer waits for a consumer to pick up the value to
 *     prevent "reading ahead" too much.
 *   - Once an emitted element is read by a consumer, it is cleared from the
 *     buffer, so that at most one consumer sees every emitted element.
 *   - When sending a done or error signal, the producer does not wait for a
 *     consumer to pick up the signal. The signal stays in the buffer after
 *     being read by a consumer, so it can be propagated to multiple consumers.
 *   - Trying to publish another emit/error/done after an error/done have
 *     already been published results in an interruption.
 *
 * @since 2.0.0
 * @category models
 */
export interface SingleProducerAsyncInput<in out Err, in out Elem, in out Done>
  extends AsyncInputProducer<Err, Elem, Done>, AsyncInputConsumer<Err, Elem, Done>
{
  readonly close: Effect.Effect<unknown>
  readonly take: Effect.Effect<Exit.Exit<Elem, Either.Either<Done, Err>>>
}

/**
 * Producer-side view of `SingleProducerAsyncInput` for variance purposes.
 *
 * @since 2.0.0
 * @category models
 */
export interface AsyncInputProducer<in Err, in Elem, in Done> {
  awaitRead(): Effect.Effect<unknown>
  done(value: Done): Effect.Effect<unknown>
  emit(element: Elem): Effect.Effect<unknown>
  error(cause: Cause.Cause<Err>): Effect.Effect<unknown>
}

/**
 * Consumer-side view of `SingleProducerAsyncInput` for variance purposes.
 *
 * @since 2.0.0
 * @category models
 */
export interface AsyncInputConsumer<out Err, out Elem, out Done> {
  takeWith<A>(
    onError: (cause: Cause.Cause<Err>) => A,
    onElement: (element: Elem) => A,
    onDone: (value: Done) => A
  ): Effect.Effect<A>
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const make: <Err, Elem, Done>() => Effect.Effect<SingleProducerAsyncInput<Err, Elem, Done>> = internal.make
