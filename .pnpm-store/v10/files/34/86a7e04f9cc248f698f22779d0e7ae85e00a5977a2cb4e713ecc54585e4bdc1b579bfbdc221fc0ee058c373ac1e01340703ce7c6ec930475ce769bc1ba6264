/**
 * @since 2.0.0
 */
import type { Effect } from "./Effect.js"
import { dual } from "./Function.js"
import * as core from "./internal/core.js"
import { type Pipeable, pipeArguments } from "./Pipeable.js"
import { hasProperty } from "./Predicate.js"
import type { NoInfer } from "./Types.js"

/**
 * @since 2.0.0
 * @category type ids
 */
export const TypeId: unique symbol = Symbol.for("effect/Readable")

/**
 * @since 2.0.0
 * @category type ids
 */
export type TypeId = typeof TypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface Readable<A, E = never, R = never> extends Pipeable {
  readonly [TypeId]: TypeId
  readonly get: Effect<A, E, R>
}

/**
 * @since 2.0.0
 * @category refinements
 */
export const isReadable = (u: unknown): u is Readable<unknown, unknown, unknown> => hasProperty(u, TypeId)

const Proto: Omit<Readable<any>, "get"> = {
  [TypeId]: TypeId,
  pipe() {
    return pipeArguments(this, arguments)
  }
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const make = <A, E, R>(get: Effect<A, E, R>): Readable<A, E, R> => {
  const self = Object.create(Proto)
  self.get = get
  return self
}

/**
 * @since 2.0.0
 * @category combinators
 */
export const map: {
  /**
   * @since 2.0.0
   * @category combinators
   */
  <A, B>(f: (a: NoInfer<A>) => B): <E, R>(fa: Readable<A, E, R>) => Readable<B, E, R>
  /**
   * @since 2.0.0
   * @category combinators
   */
  <A, E, R, B>(self: Readable<A, E, R>, f: (a: NoInfer<A>) => B): Readable<B, E, R>
} = dual(
  2,
  <A, E, R, B>(self: Readable<A, E, R>, f: (a: NoInfer<A>) => B): Readable<B, E, R> => make(core.map(self.get, f))
)

/**
 * @since 2.0.0
 * @category combinators
 */
export const mapEffect: {
  /**
   * @since 2.0.0
   * @category combinators
   */
  <A, B, E2, R2>(f: (a: NoInfer<A>) => Effect<B, E2, R2>): <E, R>(fa: Readable<A, E, R>) => Readable<B, E | E2, R | R2>
  /**
   * @since 2.0.0
   * @category combinators
   */
  <A, E, R, B, E2, R2>(self: Readable<A, E, R>, f: (a: NoInfer<A>) => Effect<B, E2, R2>): Readable<B, E | E2, R | R2>
} = dual(2, <A, E, R, B, E2, R2>(
  self: Readable<A, E, R>,
  f: (a: NoInfer<A>) => Effect<B, E2, R2>
): Readable<B, E | E2, R | R2> => make(core.flatMap(self.get, f)))

/**
 * @since 2.0.0
 * @category constructors
 */
export const unwrap = <A, E, R, E1, R1>(
  effect: Effect<Readable<A, E, R>, E1, R1>
): Readable<A, E | E1, R | R1> =>
  make(
    core.flatMap(effect, (s) => s.get)
  )
