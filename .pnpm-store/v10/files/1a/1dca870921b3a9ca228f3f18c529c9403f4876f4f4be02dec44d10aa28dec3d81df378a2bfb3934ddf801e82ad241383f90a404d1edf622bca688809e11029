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
export interface FiberMap<in out K, out A = unknown, out E = unknown> extends Pipeable, Inspectable.Inspectable, Iterable<[K, Fiber.RuntimeFiber<A, E>]> {
    readonly [TypeId]: TypeId;
    readonly deferred: Deferred.Deferred<void, unknown>;
}
/**
 * @since 2.0.0
 * @categories refinements
 */
export declare const isFiberMap: (u: unknown) => u is FiberMap<unknown>;
/**
 * A FiberMap can be used to store a collection of fibers, indexed by some key.
 * When the associated Scope is closed, all fibers in the map will be interrupted.
 *
 * You can add fibers to the map using `FiberMap.set` or `FiberMap.run`, and the fibers will
 * be automatically removed from the FiberMap when they complete.
 *
 * @example
 * ```ts
 * import { Effect, FiberMap } from "effect"
 *
 * Effect.gen(function*() {
 *   const map = yield* FiberMap.make<string>()
 *
 *   // run some effects and add the fibers to the map
 *   yield* FiberMap.run(map, "fiber a", Effect.never)
 *   yield* FiberMap.run(map, "fiber b", Effect.never)
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
export declare const make: <K, A = unknown, E = unknown>() => Effect.Effect<FiberMap<K, A, E>, never, Scope.Scope>;
/**
 * Create an Effect run function that is backed by a FiberMap.
 *
 * @since 2.0.0
 * @categories constructors
 */
export declare const makeRuntime: <R, K, E = unknown, A = unknown>() => Effect.Effect<(<XE extends E, XA extends A>(key: K, effect: Effect.Effect<XA, XE, R>, options?: (Runtime.RunForkOptions & {
    readonly onlyIfMissing?: boolean | undefined;
}) | undefined) => Fiber.RuntimeFiber<XA, XE>), never, Scope.Scope | R>;
/**
 * Create an Effect run function that is backed by a FiberMap.
 *
 * @since 3.13.0
 * @categories constructors
 */
export declare const makeRuntimePromise: <R, K, A = unknown, E = unknown>() => Effect.Effect<(<XE extends E, XA extends A>(key: K, effect: Effect.Effect<XA, XE, R>, options?: (Runtime.RunForkOptions & {
    readonly onlyIfMissing?: boolean | undefined;
}) | undefined) => Promise<XA>), never, Scope.Scope | R>;
/**
 * Add a fiber to the FiberMap. When the fiber completes, it will be removed from the FiberMap.
 * If the key already exists in the FiberMap, the previous fiber will be interrupted.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const unsafeSet: {
    /**
     * Add a fiber to the FiberMap. When the fiber completes, it will be removed from the FiberMap.
     * If the key already exists in the FiberMap, the previous fiber will be interrupted.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K, A, E, XE extends E, XA extends A>(key: K, fiber: Fiber.RuntimeFiber<XA, XE>, options?: {
        readonly interruptAs?: FiberId.FiberId | undefined;
        readonly onlyIfMissing?: boolean | undefined;
        readonly propagateInterruption?: boolean | undefined;
    } | undefined): (self: FiberMap<K, A, E>) => void;
    /**
     * Add a fiber to the FiberMap. When the fiber completes, it will be removed from the FiberMap.
     * If the key already exists in the FiberMap, the previous fiber will be interrupted.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K, A, E, XE extends E, XA extends A>(self: FiberMap<K, A, E>, key: K, fiber: Fiber.RuntimeFiber<XA, XE>, options?: {
        readonly interruptAs?: FiberId.FiberId | undefined;
        readonly onlyIfMissing?: boolean | undefined;
        readonly propagateInterruption?: boolean | undefined;
    } | undefined): void;
};
/**
 * Add a fiber to the FiberMap. When the fiber completes, it will be removed from the FiberMap.
 * If the key already exists in the FiberMap, the previous fiber will be interrupted.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const set: {
    /**
     * Add a fiber to the FiberMap. When the fiber completes, it will be removed from the FiberMap.
     * If the key already exists in the FiberMap, the previous fiber will be interrupted.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K, A, E, XE extends E, XA extends A>(key: K, fiber: Fiber.RuntimeFiber<XA, XE>, options?: {
        readonly onlyIfMissing?: boolean | undefined;
        readonly propagateInterruption?: boolean | undefined;
    } | undefined): (self: FiberMap<K, A, E>) => Effect.Effect<void>;
    /**
     * Add a fiber to the FiberMap. When the fiber completes, it will be removed from the FiberMap.
     * If the key already exists in the FiberMap, the previous fiber will be interrupted.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K, A, E, XE extends E, XA extends A>(self: FiberMap<K, A, E>, key: K, fiber: Fiber.RuntimeFiber<XA, XE>, options?: {
        readonly onlyIfMissing?: boolean | undefined;
        readonly propagateInterruption?: boolean | undefined;
    } | undefined): Effect.Effect<void>;
};
/**
 * Retrieve a fiber from the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const unsafeGet: {
    /**
     * Retrieve a fiber from the FiberMap.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K>(key: K): <A, E>(self: FiberMap<K, A, E>) => Option.Option<Fiber.RuntimeFiber<A, E>>;
    /**
     * Retrieve a fiber from the FiberMap.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K, A, E>(self: FiberMap<K, A, E>, key: K): Option.Option<Fiber.RuntimeFiber<A, E>>;
};
/**
 * Retrieve a fiber from the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const get: {
    /**
     * Retrieve a fiber from the FiberMap.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K>(key: K): <A, E>(self: FiberMap<K, A, E>) => Effect.Effect<Fiber.RuntimeFiber<A, E>, NoSuchElementException>;
    /**
     * Retrieve a fiber from the FiberMap.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K, A, E>(self: FiberMap<K, A, E>, key: K): Effect.Effect<Fiber.RuntimeFiber<A, E>, NoSuchElementException>;
};
/**
 * Check if a key exists in the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const unsafeHas: {
    /**
     * Check if a key exists in the FiberMap.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K>(key: K): <A, E>(self: FiberMap<K, A, E>) => boolean;
    /**
     * Check if a key exists in the FiberMap.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K, A, E>(self: FiberMap<K, A, E>, key: K): boolean;
};
/**
 * Check if a key exists in the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const has: {
    /**
     * Check if a key exists in the FiberMap.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K>(key: K): <A, E>(self: FiberMap<K, A, E>) => Effect.Effect<boolean>;
    /**
     * Check if a key exists in the FiberMap.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K, A, E>(self: FiberMap<K, A, E>, key: K): Effect.Effect<boolean>;
};
/**
 * Remove a fiber from the FiberMap, interrupting it if it exists.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const remove: {
    /**
     * Remove a fiber from the FiberMap, interrupting it if it exists.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K>(key: K): <A, E>(self: FiberMap<K, A, E>) => Effect.Effect<void>;
    /**
     * Remove a fiber from the FiberMap, interrupting it if it exists.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K, A, E>(self: FiberMap<K, A, E>, key: K): Effect.Effect<void>;
};
/**
 * @since 2.0.0
 * @categories combinators
 */
export declare const clear: <K, A, E>(self: FiberMap<K, A, E>) => Effect.Effect<void>;
/**
 * Run an Effect and add the forked fiber to the FiberMap.
 * When the fiber completes, it will be removed from the FiberMap.
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const run: {
    /**
     * Run an Effect and add the forked fiber to the FiberMap.
     * When the fiber completes, it will be removed from the FiberMap.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K, A, E>(self: FiberMap<K, A, E>, key: K, options?: {
        readonly onlyIfMissing?: boolean | undefined;
        readonly propagateInterruption?: boolean | undefined;
    } | undefined): <R, XE extends E, XA extends A>(effect: Effect.Effect<XA, XE, R>) => Effect.Effect<Fiber.RuntimeFiber<XA, XE>, never, R>;
    /**
     * Run an Effect and add the forked fiber to the FiberMap.
     * When the fiber completes, it will be removed from the FiberMap.
     *
     * @since 2.0.0
     * @categories combinators
     */
    <K, A, E, R, XE extends E, XA extends A>(self: FiberMap<K, A, E>, key: K, effect: Effect.Effect<XA, XE, R>, options?: {
        readonly onlyIfMissing?: boolean | undefined;
        readonly propagateInterruption?: boolean | undefined;
    } | undefined): Effect.Effect<Fiber.RuntimeFiber<XA, XE>, never, R>;
};
/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberMap.
 *
 * @example
 * ```ts
 * import { Context, Effect, FiberMap } from "effect"
 *
 * interface Users {
 *   readonly _: unique symbol
 * }
 * const Users = Context.GenericTag<Users, {
 *    getAll: Effect.Effect<Array<unknown>>
 * }>("Users")
 *
 * Effect.gen(function*() {
 *   const map = yield* FiberMap.make<string>()
 *   const run = yield* FiberMap.runtime(map)<Users>()
 *
 *   // run some effects and add the fibers to the map
 *   run("effect-a", Effect.andThen(Users, _ => _.getAll))
 *   run("effect-b", Effect.andThen(Users, _ => _.getAll))
 * }).pipe(
 *   Effect.scoped // The fibers will be interrupted when the scope is closed
 * )
 * ```
 *
 * @since 2.0.0
 * @categories combinators
 */
export declare const runtime: <K, A, E>(self: FiberMap<K, A, E>) => <R = never>() => Effect.Effect<(<XE extends E, XA extends A>(key: K, effect: Effect.Effect<XA, XE, R>, options?: Runtime.RunForkOptions & {
    readonly onlyIfMissing?: boolean | undefined;
    readonly propagateInterruption?: boolean | undefined;
} | undefined) => Fiber.RuntimeFiber<XA, XE>), never, R>;
/**
 * Capture a Runtime and use it to fork Effect's, adding the forked fibers to the FiberMap.
 *
 * @since 3.13.0
 * @categories combinators
 */
export declare const runtimePromise: <K, A, E>(self: FiberMap<K, A, E>) => <R = never>() => Effect.Effect<(<XE extends E, XA extends A>(key: K, effect: Effect.Effect<XA, XE, R>, options?: (Runtime.RunForkOptions & {
    readonly onlyIfMissing?: boolean | undefined;
    readonly propagateInterruption?: boolean | undefined;
}) | undefined) => Promise<XA>), never, R>;
/**
 * @since 2.0.0
 * @categories combinators
 */
export declare const size: <K, A, E>(self: FiberMap<K, A, E>) => Effect.Effect<number>;
/**
 * Join all fibers in the FiberMap. If any of the Fiber's in the map terminate with a failure,
 * the returned Effect will terminate with the first failure that occurred.
 *
 * @since 2.0.0
 * @categories combinators
 * @example
 * ```ts
 * import { Effect, FiberMap } from "effect";
 *
 * Effect.gen(function* (_) {
 *   const map = yield* _(FiberMap.make());
 *   yield* _(FiberMap.set(map, "a", Effect.runFork(Effect.fail("error"))));
 *
 *   // parent fiber will fail with "error"
 *   yield* _(FiberMap.join(map));
 * });
 * ```
 */
export declare const join: <K, A, E>(self: FiberMap<K, A, E>) => Effect.Effect<void, E>;
/**
 * Wait for the FiberMap to be empty.
 *
 * @since 3.13.0
 * @categories combinators
 */
export declare const awaitEmpty: <K, A, E>(self: FiberMap<K, A, E>) => Effect.Effect<void, E>;
//# sourceMappingURL=FiberMap.d.ts.map