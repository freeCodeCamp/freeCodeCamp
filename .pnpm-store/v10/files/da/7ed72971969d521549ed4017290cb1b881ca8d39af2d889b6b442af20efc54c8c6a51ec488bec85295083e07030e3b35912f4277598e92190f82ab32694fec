/**
 * @since 2.0.0
 */
import type { NoSuchElementException } from "./Cause.js";
import * as Deferred from "./Deferred.js";
import * as Effect from "./Effect.js";
import * as Fiber from "./Fiber.js";
import * as FiberId from "./FiberId.js";
import * as Inspectable from "./Inspectable.js";
import * as Option from "./Option.js";
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
export interface FiberHandle<out A = unknown, out E = unknown> extends Pipeable, Inspectable.Inspectable {
    readonly [TypeId]: TypeId;
    readonly deferred: Deferred.Deferred<void, unknown>;
}
/**
 * @since 2.0.0
 * @categories refinements
 */
export declare const isFiberHandle: (u: unknown) => u is FiberHandle;
/**
 * A FiberHandle can be used to store a single fiber.
 * When the associated Scope is closed, the contained fiber will be interrupted.
 *
 * You can add a fiber to the handle using `FiberHandle.run`, and the fiber will
 * be automatically removed from the FiberHandle when it completes.
 *
 * @example
 * ```ts
 * import { Effect, FiberHandle } from "effect"
 *
 * Effect.gen(function*() {
 *   const handle = yield* FiberHandle.make()
 *
 *   // run some effects
 *   yield* FiberHandle.run(handle, Effect.never)
 *   // this will interrupt the previous fiber
 *   yield* FiberHandle.run(handle, Effect.never)
 *
 *   yield* Effect.sleep(1000)
 * }).pipe(
 *   Effect.scoped // The fiber will be interrupted when the scope is closed
 * )
 * ```
 *
 * @since 2.0.0
 * @categories constructors
 */
export declare const make: <A = unknown, E = unknown>() => Effect.Effect<FiberHandle<A, E>, never, Scope.Scope>;
/**
 * Create an Effect run function that is backed by a FiberHandle.
 *
 * @since 2.0.0
 * @categories constructors
 */
export declare const makeRuntime: <R, E = unknown, A = unknown>() => Effect.Effect<(<XE extends E, XA extends A>(effect: Effect.Effect<XA, XE, R>, options?: (Runtime.RunForkOptions & {
    readonly onlyIfMissing?: boolean | undefined;
}) | undefined) => Fiber.RuntimeFiber<XA, XE>), never, Scope.Scope | R>;
/**
 * Create an Effect run function that is backed by a FiberHandle.
 *
 * @since 3.13.0
 * @categories constructors
 */
export declare const makeRuntimePromise: <R = never, A = unknown, E = unknown>() => Effect.Effect<(<XE extends E, XA extends A>(effect: Effect.Effect<XA, XE, R>, options?: Runtime.RunForkOptions | undefined) => Promise<XA>), never, Scope.Scope | R>;
/**
 * Set the fiber in a FiberHandle. When the fiber completes, it will be removed from the FiberHandle.
 * If a fiber is already running, it will be interrupted unless `options.onlyIfMissing` is set.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const unsafeSet: {
    /**
     * Set the fiber in a FiberHandle. When the fiber completes, it will be removed from the FiberHandle.
     * If a fiber is already running, it will be interrupted unless `options.onlyIfMissing` is set.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <A, E, XE extends E, XA extends A>(fiber: Fiber.RuntimeFiber<XA, XE>, options?: {
        readonly interruptAs?: FiberId.FiberId | undefined;
        readonly onlyIfMissing?: boolean | undefined;
        readonly propagateInterruption?: boolean | undefined;
    }): (self: FiberHandle<A, E>) => void;
    /**
     * Set the fiber in a FiberHandle. When the fiber completes, it will be removed from the FiberHandle.
     * If a fiber is already running, it will be interrupted unless `options.onlyIfMissing` is set.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <A, E, XE extends E, XA extends A>(self: FiberHandle<A, E>, fiber: Fiber.RuntimeFiber<XA, XE>, options?: {
        readonly interruptAs?: FiberId.FiberId | undefined;
        readonly onlyIfMissing?: boolean | undefined;
        readonly propagateInterruption?: boolean | undefined;
    }): void;
};
/**
 * Set the fiber in the FiberHandle. When the fiber completes, it will be removed from the FiberHandle.
 * If a fiber already exists in the FiberHandle, it will be interrupted unless `options.onlyIfMissing` is set.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const set: {
    /**
     * Set the fiber in the FiberHandle. When the fiber completes, it will be removed from the FiberHandle.
     * If a fiber already exists in the FiberHandle, it will be interrupted unless `options.onlyIfMissing` is set.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <A, E, XE extends E, XA extends A>(fiber: Fiber.RuntimeFiber<XA, XE>, options?: {
        readonly onlyIfMissing?: boolean;
        readonly propagateInterruption?: boolean | undefined;
    }): (self: FiberHandle<A, E>) => Effect.Effect<void>;
    /**
     * Set the fiber in the FiberHandle. When the fiber completes, it will be removed from the FiberHandle.
     * If a fiber already exists in the FiberHandle, it will be interrupted unless `options.onlyIfMissing` is set.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <A, E, XE extends E, XA extends A>(self: FiberHandle<A, E>, fiber: Fiber.RuntimeFiber<XA, XE>, options?: {
        readonly onlyIfMissing?: boolean;
        readonly propagateInterruption?: boolean | undefined;
    }): Effect.Effect<void>;
};
/**
 * Retrieve the fiber from the FiberHandle.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const unsafeGet: <A, E>(self: FiberHandle<A, E>) => Option.Option<Fiber.RuntimeFiber<A, E>>;
/**
 * Retrieve the fiber from the FiberHandle.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const get: <A, E>(self: FiberHandle<A, E>) => Effect.Effect<Fiber.RuntimeFiber<A, E>, NoSuchElementException>;
/**
 * @since 2.0.0
 * @categories combinators
 */
export declare const clear: <A, E>(self: FiberHandle<A, E>) => Effect.Effect<void>;
/**
 * Run an Effect and add the forked fiber to the FiberHandle.
 * When the fiber completes, it will be removed from the FiberHandle.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const run: {
    /**
     * Run an Effect and add the forked fiber to the FiberHandle.
     * When the fiber completes, it will be removed from the FiberHandle.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <A, E>(self: FiberHandle<A, E>, options?: {
        readonly onlyIfMissing?: boolean;
        readonly propagateInterruption?: boolean | undefined;
    }): <R, XE extends E, XA extends A>(effect: Effect.Effect<XA, XE, R>) => Effect.Effect<Fiber.RuntimeFiber<XA, XE>, never, R>;
    /**
     * Run an Effect and add the forked fiber to the FiberHandle.
     * When the fiber completes, it will be removed from the FiberHandle.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <A, E, R, XE extends E, XA extends A>(self: FiberHandle<A, E>, effect: Effect.Effect<XA, XE, R>, options?: {
        readonly onlyIfMissing?: boolean;
        readonly propagateInterruption?: boolean | undefined;
    }): Effect.Effect<Fiber.RuntimeFiber<XA, XE>, never, R>;
};
/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberHandle.
 *
 * @example
 * ```ts
 * import { Context, Effect, FiberHandle } from "effect"
 *
 * interface Users {
 *   readonly _: unique symbol
 * }
 * const Users = Context.GenericTag<Users, {
 *    getAll: Effect.Effect<Array<unknown>>
 * }>("Users")
 *
 * Effect.gen(function*() {
 *   const handle = yield* FiberHandle.make()
 *   const run = yield* FiberHandle.runtime(handle)<Users>()
 *
 *   // run an effect and set the fiber in the handle
 *   run(Effect.andThen(Users, _ => _.getAll))
 *
 *   // this will interrupt the previous fiber
 *   run(Effect.andThen(Users, _ => _.getAll))
 * }).pipe(
 *   Effect.scoped // The fiber will be interrupted when the scope is closed
 * )
 * ```
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const runtime: <A, E>(self: FiberHandle<A, E>) => <R = never>() => Effect.Effect<(<XE extends E, XA extends A>(effect: Effect.Effect<XA, XE, R>, options?: Runtime.RunForkOptions & {
    readonly onlyIfMissing?: boolean | undefined;
    readonly propagateInterruption?: boolean | undefined;
} | undefined) => Fiber.RuntimeFiber<XA, XE>), never, R>;
/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberHandle.
 *
 * The returned run function will return Promise's that will resolve when the
 * fiber completes.
 *
 * @since 3.13.0
 * @categories combinators
 */
export declare const runtimePromise: <A, E>(self: FiberHandle<A, E>) => <R = never>() => Effect.Effect<(<XE extends E, XA extends A>(effect: Effect.Effect<XA, XE, R>, options?: (Runtime.RunForkOptions & {
    readonly propagateInterruption?: boolean | undefined;
}) | undefined) => Promise<XA>), never, R>;
/**
 * If any of the Fiber's in the handle terminate with a failure,
 * the returned Effect will terminate with the first failure that occurred.
 *
 * @since 2.0.0
 * @categories combinators
 * @example
 * ```ts
 * import { Effect, FiberHandle } from "effect";
 *
 * Effect.gen(function* (_) {
 *   const handle = yield* _(FiberHandle.make());
 *   yield* _(FiberHandle.set(handle, Effect.runFork(Effect.fail("error"))));
 *
 *   // parent fiber will fail with "error"
 *   yield* _(FiberHandle.join(handle));
 * });
 * ```
 */
export declare const join: <A, E>(self: FiberHandle<A, E>) => Effect.Effect<void, E>;
/**
 * Wait for the fiber in the FiberHandle to complete.
 *
 * @since 3.13.0
 * @categories combinators
 */
export declare const awaitEmpty: <A, E>(self: FiberHandle<A, E>) => Effect.Effect<void, E>;
//# sourceMappingURL=FiberHandle.d.ts.map