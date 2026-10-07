/**
 * @since 2.0.0
 */
import type * as Cause from "./Cause.js";
import type { Context } from "./Context.js";
import type { DefaultServices } from "./DefaultServices.js";
import type * as Effect from "./Effect.js";
import type * as Either from "./Either.js";
import type * as Exit from "./Exit.js";
import type * as FiberId from "./FiberId.js";
import type { FiberRef } from "./FiberRef.js";
import type * as FiberRefs from "./FiberRefs.js";
import type * as FiberStatus from "./FiberStatus.js";
import type * as HashSet from "./HashSet.js";
import type * as Option from "./Option.js";
import type * as order from "./Order.js";
import type * as RuntimeFlags from "./RuntimeFlags.js";
import type { Scheduler } from "./Scheduler.js";
import type * as Scope from "./Scope.js";
import type { Supervisor } from "./Supervisor.js";
import type { AnySpan, Tracer } from "./Tracer.js";
import type * as Types from "./Types.js";
import type * as Unify from "./Unify.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const FiberTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type FiberTypeId = typeof FiberTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const RuntimeFiberTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type RuntimeFiberTypeId = typeof RuntimeFiberTypeId;
/**
 * A fiber is a lightweight thread of execution that never consumes more than a
 * whole thread (but may consume much less, depending on contention and
 * asynchronicity). Fibers are spawned by forking effects, which run
 * concurrently with the parent effect.
 *
 * Fibers can be joined, yielding their result to other fibers, or interrupted,
 * which terminates the fiber, safely releasing all resources.
 *
 * @since 2.0.0
 * @category models
 */
export interface Fiber<out A, out E = never> extends Effect.Effect<A, E>, Fiber.Variance<A, E> {
    /**
     * The identity of the fiber.
     */
    id(): FiberId.FiberId;
    /**
     * Awaits the fiber, which suspends the awaiting fiber until the result of the
     * fiber has been determined.
     */
    readonly await: Effect.Effect<Exit.Exit<A, E>>;
    /**
     * Retrieves the immediate children of the fiber.
     */
    readonly children: Effect.Effect<Array<Fiber.Runtime<any, any>>>;
    /**
     * Inherits values from all `FiberRef` instances into current fiber. This
     * will resume immediately.
     */
    readonly inheritAll: Effect.Effect<void>;
    /**
     * Tentatively observes the fiber, but returns immediately if it is not
     * already done.
     */
    readonly poll: Effect.Effect<Option.Option<Exit.Exit<A, E>>>;
    /**
     * In the background, interrupts the fiber as if interrupted from the
     * specified fiber. If the fiber has already exited, the returned effect will
     * resume immediately. Otherwise, the effect will resume when the fiber exits.
     */
    interruptAsFork(fiberId: FiberId.FiberId): Effect.Effect<void>;
    readonly [Unify.typeSymbol]?: unknown;
    readonly [Unify.unifySymbol]?: FiberUnify<this>;
    readonly [Unify.ignoreSymbol]?: FiberUnifyIgnore;
}
/**
 * @category models
 * @since 3.8.0
 */
export interface FiberUnify<A extends {
    [Unify.typeSymbol]?: any;
}> extends Effect.EffectUnify<A> {
    Fiber?: () => A[Unify.typeSymbol] extends Fiber<infer A0, infer E0> | infer _ ? Fiber<A0, E0> : never;
}
/**
 * @category models
 * @since 3.8.0
 */
export interface FiberUnifyIgnore extends Effect.EffectUnifyIgnore {
    Effect?: true;
}
/**
 * A runtime fiber that is executing an effect. Runtime fibers have an
 * identity and a trace.
 *
 * @since 2.0.0
 * @category models
 */
export interface RuntimeFiber<out A, out E = never> extends Fiber<A, E>, Fiber.RuntimeVariance<A, E> {
    /**
     * Reads the current number of ops that have occurred since the last yield
     */
    get currentOpCount(): number;
    /**
     * Reads the current value of a fiber ref
     */
    getFiberRef<X>(fiberRef: FiberRef<X>): X;
    /**
     * The identity of the fiber.
     */
    id(): FiberId.Runtime;
    /**
     * The status of the fiber.
     */
    readonly status: Effect.Effect<FiberStatus.FiberStatus>;
    /**
     * Returns the current `RuntimeFlags` the fiber is running with.
     */
    readonly runtimeFlags: Effect.Effect<RuntimeFlags.RuntimeFlags>;
    /**
     * Adds an observer to the list of observers.
     */
    addObserver(observer: (exit: Exit.Exit<A, E>) => void): void;
    /**
     * Removes the specified observer from the list of observers that will be
     * notified when the fiber exits.
     */
    removeObserver(observer: (exit: Exit.Exit<A, E>) => void): void;
    /**
     * Retrieves all fiber refs of the fiber.
     */
    getFiberRefs(): FiberRefs.FiberRefs;
    /**
     * Unsafely observes the fiber, but returns immediately if it is not
     * already done.
     */
    unsafePoll(): Exit.Exit<A, E> | null;
    /**
     * In the background, interrupts the fiber as if interrupted from the
     * specified fiber. If the fiber has already exited, the returned effect will
     * resume immediately. Otherwise, the effect will resume when the fiber exits.
     */
    unsafeInterruptAsFork(fiberId: FiberId.FiberId): void;
    /**
     * Gets the current context
     */
    get currentContext(): Context<never>;
    /**
     * Gets the current context
     */
    get currentDefaultServices(): Context<DefaultServices>;
    /**
     * Gets the current scheduler
     */
    get currentScheduler(): Scheduler;
    /**
     * Gets the current tracer
     */
    get currentTracer(): Tracer;
    /**
     * Gets the current span
     */
    get currentSpan(): AnySpan | undefined;
    /**
     * Gets the current supervisor
     */
    get currentSupervisor(): Supervisor<unknown>;
    readonly [Unify.typeSymbol]?: unknown;
    readonly [Unify.unifySymbol]?: RuntimeFiberUnify<this>;
    readonly [Unify.ignoreSymbol]?: RuntimeFiberUnifyIgnore;
}
/**
 * @category models
 * @since 3.8.0
 */
export interface RuntimeFiberUnify<A extends {
    [Unify.typeSymbol]?: any;
}> extends FiberUnify<A> {
    RuntimeFiber?: () => A[Unify.typeSymbol] extends RuntimeFiber<infer A0, infer E0> | infer _ ? RuntimeFiber<A0, E0> : never;
}
/**
 * @category models
 * @since 3.8.0
 */
export interface RuntimeFiberUnifyIgnore extends FiberUnifyIgnore {
    Fiber?: true;
}
/**
 * @since 2.0.0
 */
export declare namespace Fiber {
    /**
     * @since 2.0.0
     * @category models
     */
    type Runtime<A, E = never> = RuntimeFiber<A, E>;
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<out A, out E> {
        readonly [FiberTypeId]: {
            readonly _A: Types.Covariant<A>;
            readonly _E: Types.Covariant<E>;
        };
    }
    /**
     * @since 2.0.0
     */
    interface RuntimeVariance<out A, out E> {
        readonly [RuntimeFiberTypeId]: {
            readonly _A: Types.Covariant<A>;
            readonly _E: Types.Covariant<E>;
        };
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface Dump {
        /**
         * The fiber's unique identifier.
         */
        readonly id: FiberId.Runtime;
        /**
         * The status of the fiber.
         */
        readonly status: FiberStatus.FiberStatus;
    }
    /**
     * A record containing information about a `Fiber`.
     *
     * @since 2.0.0
     * @category models
     */
    interface Descriptor {
        /**
         * The fiber's unique identifier.
         */
        readonly id: FiberId.FiberId;
        /**
         * The status of the fiber.
         */
        readonly status: FiberStatus.FiberStatus;
        /**
         * The set of fibers attempting to interrupt the fiber or its ancestors.
         */
        readonly interruptors: HashSet.HashSet<FiberId.FiberId>;
    }
}
/**
 * @since 2.0.0
 * @category instances
 */
export declare const Order: order.Order<RuntimeFiber<unknown, unknown>>;
/**
 * Returns `true` if the specified value is a `Fiber`, `false` otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isFiber: (u: unknown) => u is Fiber<unknown, unknown>;
/**
 * Returns `true` if the specified `Fiber` is a `RuntimeFiber`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export declare const isRuntimeFiber: <A, E>(self: Fiber<A, E>) => self is RuntimeFiber<A, E>;
/**
 * The identity of the fiber.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const id: <A, E>(self: Fiber<A, E>) => FiberId.FiberId;
declare const _await: <A, E>(self: Fiber<A, E>) => Effect.Effect<Exit.Exit<A, E>>;
export { 
/**
 * Awaits the fiber, which suspends the awaiting fiber until the result of the
 * fiber has been determined.
 *
 * @since 2.0.0
 * @category getters
 */
_await as await };
/**
 * Awaits on all fibers to be completed, successfully or not.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const awaitAll: <const T extends Iterable<Fiber<any, any>>>(fibers: T) => Effect.Effect<[
    T
] extends [ReadonlyArray<infer U>] ? number extends T["length"] ? Array<U extends Fiber<infer A, infer E> ? Exit.Exit<A, E> : never> : {
    -readonly [K in keyof T]: T[K] extends Fiber<infer A, infer E> ? Exit.Exit<A, E> : never;
} : Array<T extends Iterable<infer U> ? U extends Fiber<infer A, infer E> ? Exit.Exit<A, E> : never : never>>;
/**
 * Retrieves the immediate children of the fiber.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const children: <A, E>(self: Fiber<A, E>) => Effect.Effect<Array<RuntimeFiber<any, any>>>;
/**
 * Collects all fibers into a single fiber producing an in-order list of the
 * results.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const all: <A, E>(fibers: Iterable<Fiber<A, E>>) => Fiber<ReadonlyArray<A>, E>;
/**
 * A fiber that is done with the specified `Exit` value.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const done: <A, E>(exit: Exit.Exit<A, E>) => Fiber<A, E>;
/**
 * @since 2.0.0
 * @category destructors
 */
export declare const dump: <A, E>(self: RuntimeFiber<A, E>) => Effect.Effect<Fiber.Dump>;
/**
 * @since 2.0.0
 * @category destructors
 */
export declare const dumpAll: (fibers: Iterable<RuntimeFiber<unknown, unknown>>) => Effect.Effect<Array<Fiber.Dump>>;
/**
 * A fiber that has already failed with the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fail: <E>(error: E) => Fiber<never, E>;
/**
 * Creates a `Fiber` that has already failed with the specified cause.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const failCause: <E>(cause: Cause.Cause<E>) => Fiber<never, E>;
/**
 * Lifts an `Effect` into a `Fiber`.
 *
 * @since 2.0.0
 * @category conversions
 */
export declare const fromEffect: <A, E>(effect: Effect.Effect<A, E>) => Effect.Effect<Fiber<A, E>>;
/**
 * Gets the current fiber if one is running.
 *
 * @since 2.0.0
 * @category utilities
 */
export declare const getCurrentFiber: () => Option.Option<RuntimeFiber<any, any>>;
/**
 * Inherits values from all `FiberRef` instances into current fiber. This
 * will resume immediately.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const inheritAll: <A, E>(self: Fiber<A, E>) => Effect.Effect<void>;
/**
 * Interrupts the fiber from whichever fiber is calling this method. If the
 * fiber has already exited, the returned effect will resume immediately.
 * Otherwise, the effect will resume when the fiber exits.
 *
 * @since 2.0.0
 * @category interruption
 */
export declare const interrupt: <A, E>(self: Fiber<A, E>) => Effect.Effect<Exit.Exit<A, E>>;
/**
 * Constructrs a `Fiber` that is already interrupted.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const interrupted: (fiberId: FiberId.FiberId) => Fiber<never>;
/**
 * Interrupts the fiber as if interrupted from the specified fiber. If the
 * fiber has already exited, the returned effect will resume immediately.
 * Otherwise, the effect will resume when the fiber exits.
 *
 * @since 2.0.0
 * @category interruption
 */
export declare const interruptAs: {
    /**
     * Interrupts the fiber as if interrupted from the specified fiber. If the
     * fiber has already exited, the returned effect will resume immediately.
     * Otherwise, the effect will resume when the fiber exits.
     *
     * @since 2.0.0
     * @category interruption
     */
    (fiberId: FiberId.FiberId): <A, E>(self: Fiber<A, E>) => Effect.Effect<Exit.Exit<A, E>>;
    /**
     * Interrupts the fiber as if interrupted from the specified fiber. If the
     * fiber has already exited, the returned effect will resume immediately.
     * Otherwise, the effect will resume when the fiber exits.
     *
     * @since 2.0.0
     * @category interruption
     */
    <A, E>(self: Fiber<A, E>, fiberId: FiberId.FiberId): Effect.Effect<Exit.Exit<A, E>>;
};
/**
 * Interrupts the fiber as if interrupted from the specified fiber. If the
 * fiber has already exited, the returned effect will resume immediately.
 * Otherwise, the effect will resume when the fiber exits.
 *
 * @since 2.0.0
 * @category interruption
 */
export declare const interruptAsFork: {
    /**
     * Interrupts the fiber as if interrupted from the specified fiber. If the
     * fiber has already exited, the returned effect will resume immediately.
     * Otherwise, the effect will resume when the fiber exits.
     *
     * @since 2.0.0
     * @category interruption
     */
    (fiberId: FiberId.FiberId): <A, E>(self: Fiber<A, E>) => Effect.Effect<void>;
    /**
     * Interrupts the fiber as if interrupted from the specified fiber. If the
     * fiber has already exited, the returned effect will resume immediately.
     * Otherwise, the effect will resume when the fiber exits.
     *
     * @since 2.0.0
     * @category interruption
     */
    <A, E>(self: Fiber<A, E>, fiberId: FiberId.FiberId): Effect.Effect<void>;
};
/**
 * Interrupts all fibers, awaiting their interruption.
 *
 * @since 2.0.0
 * @category interruption
 */
export declare const interruptAll: (fibers: Iterable<Fiber<any, any>>) => Effect.Effect<void>;
/**
 * Interrupts all fibers as by the specified fiber, awaiting their
 * interruption.
 *
 * @since 2.0.0
 * @category interruption
 */
export declare const interruptAllAs: {
    /**
     * Interrupts all fibers as by the specified fiber, awaiting their
     * interruption.
     *
     * @since 2.0.0
     * @category interruption
     */
    (fiberId: FiberId.FiberId): (fibers: Iterable<Fiber<any, any>>) => Effect.Effect<void>;
    /**
     * Interrupts all fibers as by the specified fiber, awaiting their
     * interruption.
     *
     * @since 2.0.0
     * @category interruption
     */
    (fibers: Iterable<Fiber<any, any>>, fiberId: FiberId.FiberId): Effect.Effect<void>;
};
/**
 * Interrupts the fiber from whichever fiber is calling this method. The
 * interruption will happen in a separate daemon fiber, and the returned
 * effect will always resume immediately without waiting.
 *
 * @since 2.0.0
 * @category interruption
 */
export declare const interruptFork: <A, E>(self: Fiber<A, E>) => Effect.Effect<void>;
/**
 * Joins the fiber, which suspends the joining fiber until the result of the
 * fiber has been determined. Attempting to join a fiber that has erred will
 * result in a catchable error. Joining an interrupted fiber will result in an
 * "inner interruption" of this fiber, unlike interruption triggered by
 * another fiber, "inner interruption" can be caught and recovered.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const join: <A, E>(self: Fiber<A, E>) => Effect.Effect<A, E>;
/**
 * Joins all fibers, awaiting their _successful_ completion. Attempting to
 * join a fiber that has erred will result in a catchable error, _if_ that
 * error does not result from interruption.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const joinAll: <A, E>(fibers: Iterable<Fiber<A, E>>) => Effect.Effect<Array<A>, E>;
/**
 * Maps over the value the Fiber computes.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const map: {
    /**
     * Maps over the value the Fiber computes.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, B>(f: (a: A) => B): <E>(self: Fiber<A, E>) => Fiber<B, E>;
    /**
     * Maps over the value the Fiber computes.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, E, B>(self: Fiber<A, E>, f: (a: A) => B): Fiber<B, E>;
};
/**
 * Effectually maps over the value the fiber computes.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const mapEffect: {
    /**
     * Effectually maps over the value the fiber computes.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, A2, E2>(f: (a: A) => Effect.Effect<A2, E2>): <E>(self: Fiber<A, E>) => Fiber<A2, E2 | E>;
    /**
     * Effectually maps over the value the fiber computes.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, E, A2, E2>(self: Fiber<A, E>, f: (a: A) => Effect.Effect<A2, E2>): Fiber<A2, E | E2>;
};
/**
 * Passes the success of this fiber to the specified callback, and continues
 * with the fiber that it returns.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const mapFiber: {
    /**
     * Passes the success of this fiber to the specified callback, and continues
     * with the fiber that it returns.
     *
     * @since 2.0.0
     * @category mapping
     */
    <E, E2, A, B>(f: (a: A) => Fiber<B, E2>): (self: Fiber<A, E>) => Effect.Effect<Fiber<B, E | E2>>;
    /**
     * Passes the success of this fiber to the specified callback, and continues
     * with the fiber that it returns.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, E, E2, B>(self: Fiber<A, E>, f: (a: A) => Fiber<B, E2>): Effect.Effect<Fiber<B, E | E2>>;
};
/**
 * Folds over the `Fiber` or `RuntimeFiber`.
 *
 * @since 2.0.0
 * @category folding
 */
export declare const match: {
    /**
     * Folds over the `Fiber` or `RuntimeFiber`.
     *
     * @since 2.0.0
     * @category folding
     */
    <A, E, Z>(options: {
        readonly onFiber: (fiber: Fiber<A, E>) => Z;
        readonly onRuntimeFiber: (fiber: RuntimeFiber<A, E>) => Z;
    }): (self: Fiber<A, E>) => Z;
    /**
     * Folds over the `Fiber` or `RuntimeFiber`.
     *
     * @since 2.0.0
     * @category folding
     */
    <A, E, Z>(self: Fiber<A, E>, options: {
        readonly onFiber: (fiber: Fiber<A, E>) => Z;
        readonly onRuntimeFiber: (fiber: RuntimeFiber<A, E>) => Z;
    }): Z;
};
/**
 * A fiber that never fails or succeeds.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const never: Fiber<never>;
/**
 * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
 * when `this` one fails. Interrupting the returned fiber will interrupt both
 * fibers, sequentially, from left to right.
 *
 * @since 2.0.0
 * @category alternatives
 */
export declare const orElse: {
    /**
     * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
     * when `this` one fails. Interrupting the returned fiber will interrupt both
     * fibers, sequentially, from left to right.
     *
     * @since 2.0.0
     * @category alternatives
     */
    <A2, E2>(that: Fiber<A2, E2>): <A, E>(self: Fiber<A, E>) => Fiber<A2 | A, E2 | E>;
    /**
     * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
     * when `this` one fails. Interrupting the returned fiber will interrupt both
     * fibers, sequentially, from left to right.
     *
     * @since 2.0.0
     * @category alternatives
     */
    <A, E, A2, E2>(self: Fiber<A, E>, that: Fiber<A2, E2>): Fiber<A | A2, E | E2>;
};
/**
 * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
 * when `this` one fails. Interrupting the returned fiber will interrupt both
 * fibers, sequentially, from left to right.
 *
 * @since 2.0.0
 * @category alternatives
 */
export declare const orElseEither: {
    /**
     * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
     * when `this` one fails. Interrupting the returned fiber will interrupt both
     * fibers, sequentially, from left to right.
     *
     * @since 2.0.0
     * @category alternatives
     */
    <A2, E2>(that: Fiber<A2, E2>): <A, E>(self: Fiber<A, E>) => Fiber<Either.Either<A2, A>, E2 | E>;
    /**
     * Returns a fiber that prefers `this` fiber, but falls back to the `that` one
     * when `this` one fails. Interrupting the returned fiber will interrupt both
     * fibers, sequentially, from left to right.
     *
     * @since 2.0.0
     * @category alternatives
     */
    <A, E, A2, E2>(self: Fiber<A, E>, that: Fiber<A2, E2>): Fiber<Either.Either<A2, A>, E | E2>;
};
/**
 * Tentatively observes the fiber, but returns immediately if it is not
 * already done.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const poll: <A, E>(self: Fiber<A, E>) => Effect.Effect<Option.Option<Exit.Exit<A, E>>>;
/**
 * Pretty-prints a `RuntimeFiber`.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const pretty: <A, E>(self: RuntimeFiber<A, E>) => Effect.Effect<string>;
/**
 * Returns a chunk containing all root fibers.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const roots: Effect.Effect<Array<RuntimeFiber<any, any>>>;
/**
 * Returns a chunk containing all root fibers.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const unsafeRoots: (_: void) => Array<RuntimeFiber<any, any>>;
/**
 * Converts this fiber into a scoped effect. The fiber is interrupted when the
 * scope is closed.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const scoped: <A, E>(self: Fiber<A, E>) => Effect.Effect<Fiber<A, E>, never, Scope.Scope>;
/**
 * Returns the `FiberStatus` of a `RuntimeFiber`.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const status: <A, E>(self: RuntimeFiber<A, E>) => Effect.Effect<FiberStatus.FiberStatus>;
/**
 * Returns a fiber that has already succeeded with the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const succeed: <A>(value: A) => Fiber<A>;
declare const void_: Fiber<void>;
export { 
/**
 * A fiber that has already succeeded with unit.
 *
 * @since 2.0.0
 * @category constructors
 */
void_ as void };
/**
 * Zips this fiber and the specified fiber together, producing a tuple of
 * their output.
 *
 * @since 2.0.0
 * @category zipping
 */
export declare const zip: {
    /**
     * Zips this fiber and the specified fiber together, producing a tuple of
     * their output.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A2, E2>(that: Fiber<A2, E2>): <A, E>(self: Fiber<A, E>) => Fiber<[A, A2], E2 | E>;
    /**
     * Zips this fiber and the specified fiber together, producing a tuple of
     * their output.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A, E, A2, E2>(self: Fiber<A, E>, that: Fiber<A2, E2>): Fiber<[A, A2], E | E2>;
};
/**
 * Same as `zip` but discards the output of that `Fiber`.
 *
 * @since 2.0.0
 * @category zipping
 */
export declare const zipLeft: {
    /**
     * Same as `zip` but discards the output of that `Fiber`.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A2, E2>(that: Fiber<A2, E2>): <A, E>(self: Fiber<A, E>) => Fiber<A, E2 | E>;
    /**
     * Same as `zip` but discards the output of that `Fiber`.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A, E, A2, E2>(self: Fiber<A, E>, that: Fiber<A2, E2>): Fiber<A, E | E2>;
};
/**
 * Same as `zip` but discards the output of this `Fiber`.
 *
 * @since 2.0.0
 * @category zipping
 */
export declare const zipRight: {
    /**
     * Same as `zip` but discards the output of this `Fiber`.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A2, E2>(that: Fiber<A2, E2>): <A, E>(self: Fiber<A, E>) => Fiber<A2, E2 | E>;
    /**
     * Same as `zip` but discards the output of this `Fiber`.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A, E, A2, E2>(self: Fiber<A, E>, that: Fiber<A2, E2>): Fiber<A2, E | E2>;
};
/**
 * Zips this fiber with the specified fiber, combining their results using the
 * specified combiner function. Both joins and interruptions are performed in
 * sequential order from left to right.
 *
 * @since 2.0.0
 * @category zipping
 */
export declare const zipWith: {
    /**
     * Zips this fiber with the specified fiber, combining their results using the
     * specified combiner function. Both joins and interruptions are performed in
     * sequential order from left to right.
     *
     * @since 2.0.0
     * @category zipping
     */
    <B, E2, A, C>(that: Fiber<B, E2>, f: (a: A, b: B) => C): <E>(self: Fiber<A, E>) => Fiber<C, E2 | E>;
    /**
     * Zips this fiber with the specified fiber, combining their results using the
     * specified combiner function. Both joins and interruptions are performed in
     * sequential order from left to right.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A, E, B, E2, C>(self: Fiber<A, E>, that: Fiber<B, E2>, f: (a: A, b: B) => C): Fiber<C, E | E2>;
};
//# sourceMappingURL=Fiber.d.ts.map