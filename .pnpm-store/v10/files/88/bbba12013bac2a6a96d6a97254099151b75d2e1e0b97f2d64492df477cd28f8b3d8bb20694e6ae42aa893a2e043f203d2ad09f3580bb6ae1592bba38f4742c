import type * as Cause from "../../Cause.js"
import * as Chunk from "../../Chunk.js"
import * as Effect from "../../Effect.js"
import * as Option from "../../Option.js"
import * as Queue from "../../Queue.js"
import type * as Take from "../../Take.js"
import * as take from "../take.js"

/** @internal */
export interface Pull<out R, out E, out A> extends Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R> {}

/** @internal */
export const emit = <A>(value: A): Effect.Effect<Chunk.Chunk<A>> => Effect.succeed(Chunk.of(value))

/** @internal */
export const emitChunk = <A>(chunk: Chunk.Chunk<A>): Effect.Effect<Chunk.Chunk<A>> => Effect.succeed(chunk)

/** @internal */
export const empty = <A>(): Effect.Effect<Chunk.Chunk<A>> => Effect.succeed(Chunk.empty<A>())

/** @internal */
export const end = (): Effect.Effect<never, Option.Option<never>> => Effect.fail(Option.none())

/** @internal */
export const fail = <E>(error: E): Effect.Effect<never, Option.Option<E>> => Effect.fail(Option.some(error))

/** @internal */
export const failCause = <E>(cause: Cause.Cause<E>): Effect.Effect<never, Option.Option<E>> =>
  Effect.mapError(Effect.failCause(cause), Option.some)

/** @internal */
export const fromDequeue = <A, E>(
  dequeue: Queue.Dequeue<Take.Take<A, E>>
): Effect.Effect<Chunk.Chunk<A>, Option.Option<E>> => Effect.flatMap(Queue.take(dequeue), take.done)
