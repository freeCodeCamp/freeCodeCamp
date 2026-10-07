import * as Deferred from "./Deferred.js";
import * as Effect from "./Effect.js";
import * as Fiber from "./Fiber.js";
import * as FiberId from "./FiberId.js";
import * as Inspectable from "./Inspectable.js";
import { type Pipeable } from "./Pipeable.js";
import * as Runtime from "./Runtime.js";
import type * as Scope from "./Scope.js";
/**
 * @since 2.0.0
 * @categories type ids
 */
export declare const TypeId: unique symbol;
/**
 * @since 2.0.0
 * @categories type ids
 */
export type TypeId = typeof TypeId;
/**
 * @since 2.0.0
 * @categories models
 */
export interface FiberSet<out A = unknown, out E = unknown> extends Pipeable, Inspectable.Inspectable, Iterable<Fiber.RuntimeFiber<A, E>> {
    readonly [TypeId]: TypeId;
    readonly deferred: Deferred.Deferred<void, unknown>;
}
/**
 * @since 2.0.0
 * @categories refinements
 */
export declare const isFiberSet: (u: unknown) => u is FiberSet<unknown, unknown>;
/**
 * A FiberSet can be used to store a collection of fibers.
 * When the associated Scope is closed, all fibers in the set will be interrupted.
 *
 * You can add fibers to the set using `FiberSet.add` or `FiberSet.run`, and the fibers will
 * be automatically removed from the FiberSet when they complete.
 *
 * @example
 * ```ts
 * import { Effect, FiberSet } from "effect"
 *
 * Effect.gen(function*() {
 *   const set = yield* FiberSet.make()
 *
 *   // run some effects and add the fibers to the set
 *   yield* FiberSet.run(set, Effect.never)
 *   yield* FiberSet.run(set, Effect.never)
 *
 *   yield* Effect.sleep(1000)
 * }).pipe(
 *   Effect.scoped // The fibers will be interrupted when the scope is closed
 * )
 * ```
 *
 * @since 2.0.0
 * @categories constructors
 */
export declare const make: <A = unknown, E = unknown>() => Effect.Effect<FiberSet<A, E>, never, Scope.Scope>;
/**
 * Create an Effect run function that is backed by a FiberSet.
 *
 * @since 2.0.0
 * @categories constructors
 */
export declare const makeRuntime: <R = never, A = unknown, E = unknown>() => Effect.Effect<(<XE extends E, XA extends A>(effect: Effect.Effect<XA, XE, R>, options?: Runtime.RunForkOptions | undefined) => Fiber.RuntimeFiber<XA, XE>), never, Scope.Scope | R>;
/**
 * Create an Effect run function that is backed by a FiberSet.
 *
 * @since 3.13.0
 * @categories constructors
 */
export declare const makeRuntimePromise: <R = never, A = unknown, E = unknown>() => Effect.Effect<(<XE extends E, XA extends A>(effect: Effect.Effect<XA, XE, R>, options?: Runtime.RunForkOptions | undefined) => Promise<XA>), never, Scope.Scope | R>;
/**
 * Add a fiber to the FiberSet. When the fiber completes, it will be removed.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const unsafeAdd: {
    /**
     * Add a fiber to the FiberSet. When the fiber completes, it will be removed.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <A, E, XE extends E, XA extends A>(fiber: Fiber.RuntimeFiber<XA, XE>, options?: {
        readonly interruptAs?: FiberId.FiberId | undefined;
        readonly propagateInterruption?: boolean | undefined;
    } | undefined): (self: FiberSet<A, E>) => void;
    /**
     * Add a fiber to the FiberSet. When the fiber completes, it will be removed.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <A, E, XE extends E, XA extends A>(self: FiberSet<A, E>, fiber: Fiber.RuntimeFiber<XA, XE>, options?: {
        readonly interruptAs?: FiberId.FiberId | undefined;
        readonly propagateInterruption?: boolean | undefined;
    } | undefined): void;
};
/**
 * Add a fiber to the FiberSet. When the fiber completes, it will be removed.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const add: {
    /**
     * Add a fiber to the FiberSet. When the fiber completes, it will be removed.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <A, E, XE extends E, XA extends A>(fiber: Fiber.RuntimeFiber<XA, XE>, options?: {
        readonly propagateInterruption?: boolean | undefined;
    } | undefined): (self: FiberSet<A, E>) => Effect.Effect<void>;
    /**
     * Add a fiber to the FiberSet. When the fiber completes, it will be removed.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <A, E, XE extends E, XA extends A>(self: FiberSet<A, E>, fiber: Fiber.RuntimeFiber<XA, XE>, options?: {
        readonly propagateInterruption?: boolean | undefined;
    } | undefined): Effect.Effect<void>;
};
/**
 * @since 2.0.0
 * @categories combinators
 */
export declare const clear: <A, E>(self: FiberSet<A, E>) => Effect.Effect<void>;
/**
 * Fork an Effect and add the forked fiber to the FiberSet.
 * When the fiber completes, it will be removed from the FiberSet.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const run: {
    /**
     * Fork an Effect and add the forked fiber to the FiberSet.
     * When the fiber completes, it will be removed from the FiberSet.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <A, E>(self: FiberSet<A, E>, options?: {
        readonly propagateInterruption?: boolean | undefined;
    } | undefined): <R, XE extends E, XA extends A>(effect: Effect.Effect<XA, XE, R>) => Effect.Effect<Fiber.RuntimeFiber<XA, XE>, never, R>;
    /**
     * Fork an Effect and add the forked fiber to the FiberSet.
     * When the fiber completes, it will be removed from the FiberSet.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <A, E, R, XE extends E, XA extends A>(self: FiberSet<A, E>, effect: Effect.Effect<XA, XE, R>, options?: {
        readonly propagateInterruption?: boolean | undefined;
    } | undefined): Effect.Effect<Fiber.RuntimeFiber<XA, XE>, never, R>;
};
/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberSet.
 *
 * @example
 * ```ts
 * import { Context, Effect, FiberSet } from "effect"
 *
 * interface Users {
 *   readonly _: unique symbol
 * }
 * const Users = Context.GenericTag<Users, {
 *    getAll: Effect.Effect<Array<unknown>>
 * }>("Users")
 *
 * Effect.gen(function*() {
 *   const set = yield* FiberSet.make()
 *   const run = yield* FiberSet.runtime(set)<Users>()
 *
 *   // run some effects and add the fibers to the set
 *   run(Effect.andThen(Users, _ => _.getAll))
 * }).pipe(
 *   Effect.scoped // The fibers will be interrupted when the scope is closed
 * )
 * ```
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const runtime: <A, E>(self: FiberSet<A, E>) => <R = never>() => Effect.Effect<(<XE extends E, XA extends A>(effect: Effect.Effect<XA, XE, R>, options?: Runtime.RunForkOptions & {
    readonly propagateInterruption?: boolean | undefined;
} | undefined) => Fiber.RuntimeFiber<XA, XE>), never, R>;
/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberSet.
 *
 * The returned run function will return Promise's.
 *
 * @since 3.13.0
 * @categories combinators
 */
export declare const runtimePromise: <A, E>(self: FiberSet<A, E>) => <R = never>() => Effect.Effect<(<XE extends E, XA extends A>(effect: Effect.Effect<XA, XE, R>, options?: (Runtime.RunForkOptions & {
    readonly propagateInterruption?: boolean | undefined;
}) | undefined) => Promise<XA>), never, R>;
/**
 * @since 2.0.0
 * @categories combinators
 */
export declare const size: <A, E>(self: FiberSet<A, E>) => Effect.Effect<number>;
/**
 * Join all fibers in the FiberSet. If any of the Fiber's in the set terminate with a failure,
 * the returned Effect will terminate with the first failure that occurred.
 *
 * @since 2.0.0
 * @categories combinators
 * @example
 * ```ts
 * import { Effect, FiberSet } from "effect";
 *
 * Effect.gen(function* (_) {
 *   const set = yield* _(FiberSet.make());
 *   yield* _(FiberSet.add(set, Effect.runFork(Effect.fail("error"))));
 *
 *   // parent fiber will fail with "error"
 *   yield* _(FiberSet.join(set));
 * });
 * ```
 */
export declare const join: <A, E>(self: FiberSet<A, E>) => Effect.Effect<void, E>;
/**
 * Wait until the fiber set is empty.
 *
 * @since 3.13.0
 * @categories combinators
 */
export declare const awaitEmpty: <A, E>(self: FiberSet<A, E>) => Effect.Effect<void>;
//# sourceMappingURL=FiberSet.d.ts.map