/**
 * @since 2.0.0
 */
import * as Effect from "./Effect.js"
import { dual } from "./Function.js"
import { pipeArguments } from "./Pipeable.js"
import { hasProperty } from "./Predicate.js"
import * as Readable from "./Readable.js"
import * as Stream from "./Stream.js"
import type { NoInfer } from "./Types.js"

/**
 * @since 2.0.0
 * @category type ids
 */
export const TypeId: unique symbol = Symbol.for("effect/Subscribable")

/**
 * @since 2.0.0
 * @category type ids
 */
export type TypeId = typeof TypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface Subscribable<A, E = never, R = never> extends Readable.Readable<A, E, R> {
  readonly [TypeId]: TypeId
  readonly changes: Stream.Stream<A, E, R>
}

/**
 * @since 2.0.0
 * @category refinements
 */
export const isSubscribable = (u: unknown): u is Subscribable<unknown, unknown, unknown> => hasProperty(u, TypeId)

const Proto: Omit<Subscribable<any>, "get" | "changes"> = {
  [Readable.TypeId]: Readable.TypeId,
  [TypeId]: TypeId,
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const make = <A, E, R>(options: {
  readonly get: Effect.Effect<A, E, R>
  readonly changes: Stream.Stream<A, E, R>
}): Subscribable<A, E, R> => Object.assign(Object.create(Proto), options)

/**
 * @since 2.0.0
 * @category combinators
 */
export const map: {
  /**
   * @since 2.0.0
   * @category combinators
   */
  <A, B>(f: (a: NoInfer<A>) => B): <E, R>(fa: Subscribable<A, E, R>) => Subscribable<B, E, R>
  /**
   * @since 2.0.0
   * @category combinators
   */
  <A, E, R, B>(self: Subscribable<A, E, R>, f: (a: NoInfer<A>) => B): Subscribable<B, E, R>
} = dual(2, <A, E, R, B>(self: Subscribable<A, E, R>, f: (a: NoInfer<A>) => B): Subscribable<B, E, R> =>
  make({
    get: Effect.map(self.get, f),
    changes: Stream.map(self.changes, f)
  }))

/**
 * @since 2.0.0
 * @category combinators
 */
export const mapEffect: {
  /**
   * @since 2.0.0
   * @category combinators
   */
  <A, B, E2, R2>(f: (a: NoInfer<A>) => Effect.Effect<B, E2, R2>): <E, R>(fa: Subscribable<A, E, R>) => Subscribable<B, E | E2, R | R2>
  /**
   * @since 2.0.0
   * @category combinators
   */
  <A, E, R, B, E2, R2>(
    self: Subscribable<A, E, R>,
    f: (a: NoInfer<A>) => Effect.Effect<B, E2, R2>
  ): Subscribable<B, E | E2, R | R2>
} = dual(2, <A, E, R, B, E2, R2>(
  self: Subscribable<A, E, R>,
  f: (a: NoInfer<A>) => Effect.Effect<B, E2, R2>
): Subscribable<B, E | E2, R | R2> =>
  make({
    get: Effect.flatMap(self.get, f),
    changes: Stream.mapEffect(self.changes, f)
  }))

/**
 * @since 2.0.0
 * @category constructors
 */
export const unwrap = <A, E, R, E1, R1>(
  effect: Effect.Effect<Subscribable<A, E, R>, E1, R1>
): Subscribable<A, E | E1, R | R1> =>
  make({
    get: Effect.flatMap(effect, (s) => s.get),
    changes: Stream.unwrap(Effect.map(effect, (s) => s.changes))
  })
