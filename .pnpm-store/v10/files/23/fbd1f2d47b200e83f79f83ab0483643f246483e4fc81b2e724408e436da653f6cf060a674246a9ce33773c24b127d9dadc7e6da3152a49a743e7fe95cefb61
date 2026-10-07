/**
 * @since 2.0.0
 */
import * as Context from "./Context.js";
import type * as DefaultServices from "./DefaultServices.js";
import type * as Effect from "./Effect.js";
/**
 * @since 2.0.0
 */
export declare const TestLiveTypeId: unique symbol;
/**
 * @since 2.0.0
 */
export type TestLiveTypeId = typeof TestLiveTypeId;
/**
 * The `Live` trait provides access to the "live" default Effect services from
 * within tests for workflows such as printing test results to the console or
 * timing out tests where it is necessary to access the real implementations of
 * these services.
 *
 * @since 2.0.0
 */
export interface TestLive {
    readonly [TestLiveTypeId]: TestLiveTypeId;
    provide<A, E, R>(effect: Effect.Effect<A, E, R>): Effect.Effect<A, E, R>;
}
/**
 * @since 2.0.0
 */
export declare const TestLive: Context.Tag<TestLive, TestLive>;
/**
 * @since 2.0.0
 */
export declare const make: (services: Context.Context<DefaultServices.DefaultServices>) => TestLive;
//# sourceMappingURL=TestLive.d.ts.map