/**
 * @since 2.0.0
 */
import * as Context from "./Context.js"
import type * as Effect from "./Effect.js"
import type * as FiberRef from "./FiberRef.js"
import * as core from "./internal/core.js"

/**
 * @since 2.0.0
 */
export const TestSizedTypeId: unique symbol = Symbol.for("effect/TestSized")

/**
 * @since 2.0.0
 */
export type TestSizedTypeId = typeof TestSizedTypeId

/**
 * @since 2.0.0
 */
export interface TestSized {
  readonly [TestSizedTypeId]: TestSizedTypeId
  readonly fiberRef: FiberRef.FiberRef<number>
  readonly size: Effect.Effect<number>
  withSize(size: number): <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
}

/**
 * @since 2.0.0
 */
export const TestSized: Context.Tag<TestSized, TestSized> = Context.GenericTag("effect/TestSized")

/** @internal */
class SizedImpl implements TestSized {
  readonly [TestSizedTypeId]: TestSizedTypeId = TestSizedTypeId
  constructor(readonly fiberRef: FiberRef.FiberRef<number>) {}
  get size(): Effect.Effect<number> {
    return core.fiberRefGet(this.fiberRef)
  }
  withSize(size: number) {
    return <A, E, R>(effect: Effect.Effect<A, E, R>): Effect.Effect<A, E, R> =>
      core.fiberRefLocally(this.fiberRef, size)(effect)
  }
}

/**
 * @since 2.0.0
 */
export const make = (size: number): TestSized => new SizedImpl(core.fiberRefUnsafeMake(size))

/**
 * @since 2.0.0
 */
export const fromFiberRef = (fiberRef: FiberRef.FiberRef<number>): TestSized => new SizedImpl(fiberRef)
