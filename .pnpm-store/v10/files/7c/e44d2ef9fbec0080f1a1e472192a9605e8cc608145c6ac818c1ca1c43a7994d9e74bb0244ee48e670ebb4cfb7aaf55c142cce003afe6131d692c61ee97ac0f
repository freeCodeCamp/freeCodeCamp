/**
 * @since 2.0.0
 */
import * as Context from "./Context.js"
import type * as DefaultServices from "./DefaultServices.js"
import type * as Effect from "./Effect.js"
import * as core from "./internal/core.js"
import * as defaultServices from "./internal/defaultServices.js"

/**
 * @since 2.0.0
 */
export const TestLiveTypeId: unique symbol = Symbol.for("effect/TestLive")

/**
 * @since 2.0.0
 */
export type TestLiveTypeId = typeof TestLiveTypeId

/**
 * The `Live` trait provides access to the "live" default Effect services from
 * within tests for workflows such as printing test results to the console or
 * timing out tests where it is necessary to access the real implementations of
 * these services.
 *
 * @since 2.0.0
 */
export interface TestLive {
  readonly [TestLiveTypeId]: TestLiveTypeId
  provide<A, E, R>(effect: Effect.Effect<A, E, R>): Effect.Effect<A, E, R>
}

/**
 * @since 2.0.0
 */
export const TestLive: Context.Tag<TestLive, TestLive> = Context.GenericTag<TestLive>("effect/TestLive")

/** @internal */
class LiveImpl implements TestLive {
  readonly [TestLiveTypeId]: TestLiveTypeId = TestLiveTypeId
  constructor(readonly services: Context.Context<DefaultServices.DefaultServices>) {}
  provide<A, E, R>(effect: Effect.Effect<A, E, R>): Effect.Effect<A, E, R> {
    return core.fiberRefLocallyWith(
      defaultServices.currentServices,
      Context.merge(this.services)
    )(effect)
  }
}

/**
 * @since 2.0.0
 */
export const make = (services: Context.Context<DefaultServices.DefaultServices>): TestLive => new LiveImpl(services)
