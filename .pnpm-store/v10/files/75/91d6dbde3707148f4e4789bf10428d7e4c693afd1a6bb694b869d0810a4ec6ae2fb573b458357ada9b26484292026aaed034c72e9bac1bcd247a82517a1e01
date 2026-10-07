/**
 * @since 2.0.0
 */
import type * as Cause from "./Cause.js"
import type * as Chunk from "./Chunk.js"
import type * as Effect from "./Effect.js"
import type * as Exit from "./Exit.js"
import * as internal from "./internal/take.js"
import type * as Option from "./Option.js"
import type { Pipeable } from "./Pipeable.js"
import type * as Types from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const TakeTypeId: unique symbol = internal.TakeTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type TakeTypeId = typeof TakeTypeId

/**
 * A `Take<A, E>` represents a single `take` from a queue modeling a stream of
 * values. A `Take` may be a failure cause `Cause<E>`, a chunk value `Chunk<A>`,
 * or an end-of-stream marker.
 *
 * @since 2.0.0
 * @category models
 */
export interface Take<out A, out E = never> extends Take.Variance<A, E>, Pipeable {
  /** @internal */
  readonly exit: Exit.Exit<Chunk.Chunk<A>, Option.Option<E>>
}

/**
 * @since 2.0.0
 */
export declare namespace Take {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<out A, out E> {
    readonly [TakeTypeId]: {
      readonly _A: Types.Covariant<A>
      readonly _E: Types.Covariant<E>
    }
  }
}

/**
 * Creates a `Take` with the specified chunk.
 *
 * @since 2.0.0
 * @category constructors
 */
export const chunk: <A>(chunk: Chunk.Chunk<A>) => Take<A> = internal.chunk

/**
 * Creates a failing `Take` with the specified defect.
 *
 * @since 2.0.0
 * @category constructors
 */
export const die: (defect: unknown) => Take<never> = internal.die

/**
 * Creates a failing `Take` with the specified error message.
 *
 * @since 2.0.0
 * @category constructors
 */
export const dieMessage: (message: string) => Take<never> = internal.dieMessage

/**
 * Transforms a `Take<A, E>` to an `Effect<A, E>`.
 *
 * @since 2.0.0
 * @category destructors
 */
export const done: <A, E>(self: Take<A, E>) => Effect.Effect<Chunk.Chunk<A>, Option.Option<E>> = internal.done

/**
 * Represents the end-of-stream marker.
 *
 * @since 2.0.0
 * @category constructors
 */
export const end: Take<never> = internal.end

/**
 * Creates a failing `Take` with the specified error.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fail: <E>(error: E) => Take<never, E> = internal.fail

/**
 * Creates a failing `Take` with the specified cause.
 *
 * @since 2.0.0
 * @category constructors
 */
export const failCause: <E>(cause: Cause.Cause<E>) => Take<never, E> = internal.failCause

/**
 * Creates an effect from `Effect<A, E, R>` that does not fail, but succeeds with
 * the `Take<A, E>`. Error from stream when pulling is converted to
 * `Take.failCause`. Creates a single value chunk.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromEffect: <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<Take<A, E>, never, R> =
  internal.fromEffect

/**
 * Creates a `Take` from an `Exit`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromExit: <A, E>(exit: Exit.Exit<A, E>) => Take<A, E> = internal.fromExit

/**
 * Creates effect from `Effect<Chunk<A>, Option<E>, R>` that does not fail, but
 * succeeds with the `Take<A, E>`. Errors from stream when pulling are converted
 * to `Take.failCause`, and the end-of-stream is converted to `Take.end`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fromPull: <A, E, R>(
  pull: Effect.Effect<Chunk.Chunk<A>, Option.Option<E>, R>
) => Effect.Effect<Take<A, E>, never, R> = internal.fromPull

/**
 * Checks if this `take` is done (`Take.end`).
 *
 * @since 2.0.0
 * @category getters
 */
export const isDone: <A, E>(self: Take<A, E>) => boolean = internal.isDone

/**
 * Checks if this `take` is a failure.
 *
 * @since 2.0.0
 * @category getters
 */
export const isFailure: <A, E>(self: Take<A, E>) => boolean = internal.isFailure

/**
 * Checks if this `take` is a success.
 *
 * @since 2.0.0
 * @category getters
 */
export const isSuccess: <A, E>(self: Take<A, E>) => boolean = internal.isSuccess

/**
 * Constructs a `Take`.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make: <A, E>(exit: Exit.Exit<Chunk.Chunk<A>, Option.Option<E>>) => Take<A, E> = internal.make

/**
 * Transforms `Take<A, E>` to `Take<B, A>` by applying function `f`.
 *
 * @since 2.0.0
 * @category mapping
 */
export const map: {
  /**
   * Transforms `Take<A, E>` to `Take<B, A>` by applying function `f`.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, B>(f: (a: A) => B): <E>(self: Take<A, E>) => Take<B, E>
  /**
   * Transforms `Take<A, E>` to `Take<B, A>` by applying function `f`.
   *
   * @since 2.0.0
   * @category mapping
   */
  <A, E, B>(self: Take<A, E>, f: (a: A) => B): Take<B, E>
} = internal.map

/**
 * Folds over the failure cause, success value and end-of-stream marker to
 * yield a value.
 *
 * @since 2.0.0
 * @category destructors
 */
export const match: {
  /**
   * Folds over the failure cause, success value and end-of-stream marker to
   * yield a value.
   *
   * @since 2.0.0
   * @category destructors
   */
  <Z, E, Z2, A, Z3>(
   options: {
     readonly onEnd: () => Z
     readonly onFailure: (cause: Cause.Cause<E>) => Z2
     readonly onSuccess: (chunk: Chunk.Chunk<A>) => Z3
   }
  ): (self: Take<A, E>) => Z | Z2 | Z3
  /**
   * Folds over the failure cause, success value and end-of-stream marker to
   * yield a value.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, Z, Z2, Z3>(
   self: Take<A, E>,
   options: {
     readonly onEnd: () => Z
     readonly onFailure: (cause: Cause.Cause<E>) => Z2
     readonly onSuccess: (chunk: Chunk.Chunk<A>) => Z3
   }
  ): Z | Z2 | Z3
} = internal.match

/**
 * Effectful version of `Take.fold`.
 *
 * Folds over the failure cause, success value and end-of-stream marker to
 * yield an effect.
 *
 * @since 2.0.0
 * @category destructors
 */
export const matchEffect: {
  /**
   * Effectful version of `Take.fold`.
   *
   * Folds over the failure cause, success value and end-of-stream marker to
   * yield an effect.
   *
   * @since 2.0.0
   * @category destructors
   */
  <Z, E2, R, E, Z2, R2, A, Z3, E3, R3>(
   options: {
     readonly onEnd: Effect.Effect<Z, E2, R>
     readonly onFailure: (cause: Cause.Cause<E>) => Effect.Effect<Z2, E2, R2>
     readonly onSuccess: (chunk: Chunk.Chunk<A>) => Effect.Effect<Z3, E3, R3>
   }
  ): (self: Take<A, E>) => Effect.Effect<Z | Z2 | Z3, E2 | E | E3, R | R2 | R3>
  /**
   * Effectful version of `Take.fold`.
   *
   * Folds over the failure cause, success value and end-of-stream marker to
   * yield an effect.
   *
   * @since 2.0.0
   * @category destructors
   */
  <A, E, Z, E2, R, Z2, R2, Z3, E3, R3>(
   self: Take<A, E>,
   options: {
     readonly onEnd: Effect.Effect<Z, E2, R>
     readonly onFailure: (cause: Cause.Cause<E>) => Effect.Effect<Z2, E2, R2>
     readonly onSuccess: (chunk: Chunk.Chunk<A>) => Effect.Effect<Z3, E3, R3>
   }
  ): Effect.Effect<Z | Z2 | Z3, E | E2 | E3, R | R2 | R3>
} = internal.matchEffect

/**
 * Creates a `Take` with a single value chunk.
 *
 * @since 2.0.0
 * @category constructors
 */
export const of: <A>(value: A) => Take<A> = internal.of

/**
 * Returns an effect that effectfully "peeks" at the success of this take.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const tap: {
  /**
   * Returns an effect that effectfully "peeks" at the success of this take.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, X, E2, R>(f: (chunk: Chunk.Chunk<A>) => Effect.Effect<X, E2, R>): <E>(self: Take<A, E>) => Effect.Effect<void, E2 | E, R>
  /**
   * Returns an effect that effectfully "peeks" at the success of this take.
   *
   * @since 2.0.0
   * @category sequencing
   */
  <A, E, X, E2, R>(self: Take<A, E>, f: (chunk: Chunk.Chunk<A>) => Effect.Effect<X, E2, R>): Effect.Effect<void, E | E2, R>
} = internal.tap
