/**
 * @since 2.0.0
 */
import type { Cause } from "./Cause.js";
import type * as Context from "./Context.js";
import type * as Effect from "./Effect.js";
import type * as Exit from "./Exit.js";
import type * as Fiber from "./Fiber.js";
import type * as FiberId from "./FiberId.js";
import type * as FiberRef from "./FiberRef.js";
import type * as FiberRefs from "./FiberRefs.js";
import type { Inspectable } from "./Inspectable.js";
import type { Pipeable } from "./Pipeable.js";
import type * as RuntimeFlags from "./RuntimeFlags.js";
import type { Scheduler } from "./Scheduler.js";
import type { Scope } from "./Scope.js";
/**
 * @since 2.0.0
 * @category models
 */
export interface AsyncFiberException<out A, out E = never> {
    readonly _tag: "AsyncFiberException";
    readonly fiber: Fiber.RuntimeFiber<A, E>;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Cancel<out A, out E = never> {
    (fiberId?: FiberId.FiberId, options?: RunCallbackOptions<A, E> | undefined): void;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface Runtime<in R> extends Pipeable {
    /**
     * The context used as initial for forks
     */
    readonly context: Context.Context<R>;
    /**
     * The runtime flags used as initial for forks
     */
    readonly runtimeFlags: RuntimeFlags.RuntimeFlags;
    /**
     * The fiber references used as initial for forks
     */
    readonly fiberRefs: FiberRefs.FiberRefs;
}
/**
 * @since 3.12.0
 */
export declare namespace Runtime {
    /**
     * @since 3.12.0
     * @category Type Extractors
     */
    type Context<T extends Runtime<never>> = [T] extends [Runtime<infer R>] ? R : never;
}
/**
 * @since 2.0.0
 * @category models
 */
export interface RunForkOptions {
    readonly scheduler?: Scheduler | undefined;
    readonly updateRefs?: ((refs: FiberRefs.FiberRefs, fiberId: FiberId.Runtime) => FiberRefs.FiberRefs) | undefined;
    readonly immediate?: boolean;
    readonly scope?: Scope;
}
/**
 * Executes the effect using the provided Scheduler or using the global
 * Scheduler if not provided
 *
 * @since 2.0.0
 * @category execution
 */
export declare const runFork: {
    /**
     * Executes the effect using the provided Scheduler or using the global
     * Scheduler if not provided
     *
     * @since 2.0.0
     * @category execution
     */
    <R>(runtime: Runtime<R>): <A, E>(effect: Effect.Effect<A, E, R>, options?: RunForkOptions | undefined) => Fiber.RuntimeFiber<A, E>;
    /**
     * Executes the effect using the provided Scheduler or using the global
     * Scheduler if not provided
     *
     * @since 2.0.0
     * @category execution
     */
    <R, A, E>(runtime: Runtime<R>, effect: Effect.Effect<A, E, R>, options?: RunForkOptions | undefined): Fiber.RuntimeFiber<A, E>;
};
/**
 * Executes the effect synchronously returning the exit.
 *
 * This method is effectful and should only be invoked at the edges of your
 * program.
 *
 * @since 2.0.0
 * @category execution
 */
export declare const runSyncExit: {
    /**
     * Executes the effect synchronously returning the exit.
     *
     * This method is effectful and should only be invoked at the edges of your
     * program.
     *
     * @since 2.0.0
     * @category execution
     */
    <A, E, R>(runtime: Runtime<R>, effect: Effect.Effect<A, E, R>): Exit.Exit<A, E>;
    /**
     * Executes the effect synchronously returning the exit.
     *
     * This method is effectful and should only be invoked at the edges of your
     * program.
     *
     * @since 2.0.0
     * @category execution
     */
    <R>(runtime: Runtime<R>): <A, E>(effect: Effect.Effect<A, E, R>) => Exit.Exit<A, E>;
};
/**
 * Executes the effect synchronously throwing in case of errors or async boundaries.
 *
 * This method is effectful and should only be invoked at the edges of your
 * program.
 *
 * @since 2.0.0
 * @category execution
 */
export declare const runSync: {
    /**
     * Executes the effect synchronously throwing in case of errors or async boundaries.
     *
     * This method is effectful and should only be invoked at the edges of your
     * program.
     *
     * @since 2.0.0
     * @category execution
     */
    <A, E, R>(runtime: Runtime<R>, effect: Effect.Effect<A, E, R>): A;
    /**
     * Executes the effect synchronously throwing in case of errors or async boundaries.
     *
     * This method is effectful and should only be invoked at the edges of your
     * program.
     *
     * @since 2.0.0
     * @category execution
     */
    <R>(runtime: Runtime<R>): <A, E>(effect: Effect.Effect<A, E, R>) => A;
};
/**
 * @since 2.0.0
 * @category models
 */
export interface RunCallbackOptions<in A, in E = never> extends RunForkOptions {
    readonly onExit?: ((exit: Exit.Exit<A, E>) => void) | undefined;
}
/**
 * Executes the effect asynchronously, eventually passing the exit value to
 * the specified callback.
 *
 * This method is effectful and should only be invoked at the edges of your
 * program.
 *
 * @since 2.0.0
 * @category execution
 */
export declare const runCallback: {
    /**
     * Executes the effect asynchronously, eventually passing the exit value to
     * the specified callback.
     *
     * This method is effectful and should only be invoked at the edges of your
     * program.
     *
     * @since 2.0.0
     * @category execution
     */
    <R>(runtime: Runtime<R>): <A, E>(effect: Effect.Effect<A, E, R>, options?: RunCallbackOptions<A, E> | undefined) => (fiberId?: FiberId.FiberId, options?: RunCallbackOptions<A, E> | undefined) => void;
    /**
     * Executes the effect asynchronously, eventually passing the exit value to
     * the specified callback.
     *
     * This method is effectful and should only be invoked at the edges of your
     * program.
     *
     * @since 2.0.0
     * @category execution
     */
    <R, A, E>(runtime: Runtime<R>, effect: Effect.Effect<A, E, R>, options?: RunCallbackOptions<A, E> | undefined): (fiberId?: FiberId.FiberId, options?: RunCallbackOptions<A, E> | undefined) => void;
};
/**
 * Runs the `Effect`, returning a JavaScript `Promise` that will be resolved
 * with the value of the effect once the effect has been executed, or will be
 * rejected with the first error or exception throw by the effect.
 *
 * This method is effectful and should only be used at the edges of your
 * program.
 *
 * @since 2.0.0
 * @category execution
 */
export declare const runPromise: {
    /**
     * Runs the `Effect`, returning a JavaScript `Promise` that will be resolved
     * with the value of the effect once the effect has been executed, or will be
     * rejected with the first error or exception throw by the effect.
     *
     * This method is effectful and should only be used at the edges of your
     * program.
     *
     * @since 2.0.0
     * @category execution
     */
    <R>(runtime: Runtime<R>): <A, E>(effect: Effect.Effect<A, E, R>, options?: {
        readonly signal?: AbortSignal;
    } | undefined) => Promise<A>;
    /**
     * Runs the `Effect`, returning a JavaScript `Promise` that will be resolved
     * with the value of the effect once the effect has been executed, or will be
     * rejected with the first error or exception throw by the effect.
     *
     * This method is effectful and should only be used at the edges of your
     * program.
     *
     * @since 2.0.0
     * @category execution
     */
    <R, A, E>(runtime: Runtime<R>, effect: Effect.Effect<A, E, R>, options?: {
        readonly signal?: AbortSignal;
    } | undefined): Promise<A>;
};
/**
 * Runs the `Effect`, returning a JavaScript `Promise` that will be resolved
 * with the `Exit` state of the effect once the effect has been executed.
 *
 * This method is effectful and should only be used at the edges of your
 * program.
 *
 * @since 2.0.0
 * @category execution
 */
export declare const runPromiseExit: {
    /**
     * Runs the `Effect`, returning a JavaScript `Promise` that will be resolved
     * with the `Exit` state of the effect once the effect has been executed.
     *
     * This method is effectful and should only be used at the edges of your
     * program.
     *
     * @since 2.0.0
     * @category execution
     */
    <R>(runtime: Runtime<R>): <A, E>(effect: Effect.Effect<A, E, R>, options?: {
        readonly signal?: AbortSignal;
    } | undefined) => Promise<Exit.Exit<A, E>>;
    /**
     * Runs the `Effect`, returning a JavaScript `Promise` that will be resolved
     * with the `Exit` state of the effect once the effect has been executed.
     *
     * This method is effectful and should only be used at the edges of your
     * program.
     *
     * @since 2.0.0
     * @category execution
     */
    <R, A, E>(runtime: Runtime<R>, effect: Effect.Effect<A, E, R>, options?: {
        readonly signal?: AbortSignal;
    } | undefined): Promise<Exit.Exit<A, E>>;
};
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const defaultRuntime: Runtime<never>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const defaultRuntimeFlags: RuntimeFlags.RuntimeFlags;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const make: <R>(options: {
    readonly context: Context.Context<R>;
    readonly runtimeFlags: RuntimeFlags.RuntimeFlags;
    readonly fiberRefs: FiberRefs.FiberRefs;
}) => Runtime<R>;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const FiberFailureId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type FiberFailureId = typeof FiberFailureId;
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const FiberFailureCauseId: unique symbol;
/**
 * @since 2.0.0
 * @category exports
 */
export type FiberFailureCauseId = typeof FiberFailureCauseId;
/**
 * @since 2.0.0
 * @category models
 */
export interface FiberFailure extends Error, Inspectable {
    readonly [FiberFailureId]: FiberFailureId;
    readonly [FiberFailureCauseId]: Cause<unknown>;
}
/**
 * @since 2.0.0
 * @category guards
 */
export declare const isAsyncFiberException: (u: unknown) => u is AsyncFiberException<unknown, unknown>;
/**
 * @since 2.0.0
 * @category guards
 */
export declare const isFiberFailure: (u: unknown) => u is FiberFailure;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const makeFiberFailure: <E>(cause: Cause<E>) => FiberFailure;
/**
 * @since 2.0.0
 * @category runtime flags
 */
export declare const updateRuntimeFlags: {
    /**
     * @since 2.0.0
     * @category runtime flags
     */
    (f: (flags: RuntimeFlags.RuntimeFlags) => RuntimeFlags.RuntimeFlags): <R>(self: Runtime<R>) => Runtime<R>;
    /**
     * @since 2.0.0
     * @category runtime flags
     */
    <R>(self: Runtime<R>, f: (flags: RuntimeFlags.RuntimeFlags) => RuntimeFlags.RuntimeFlags): Runtime<R>;
};
/**
 * @since 2.0.0
 * @category runtime flags
 */
export declare const enableRuntimeFlag: {
    /**
     * @since 2.0.0
     * @category runtime flags
     */
    (flag: RuntimeFlags.RuntimeFlag): <R>(self: Runtime<R>) => Runtime<R>;
    /**
     * @since 2.0.0
     * @category runtime flags
     */
    <R>(self: Runtime<R>, flag: RuntimeFlags.RuntimeFlag): Runtime<R>;
};
/**
 * @since 2.0.0
 * @category runtime flags
 */
export declare const disableRuntimeFlag: {
    /**
     * @since 2.0.0
     * @category runtime flags
     */
    (flag: RuntimeFlags.RuntimeFlag): <R>(self: Runtime<R>) => Runtime<R>;
    /**
     * @since 2.0.0
     * @category runtime flags
     */
    <R>(self: Runtime<R>, flag: RuntimeFlags.RuntimeFlag): Runtime<R>;
};
/**
 * @since 2.0.0
 * @category context
 */
export declare const updateContext: {
    /**
     * @since 2.0.0
     * @category context
     */
    <R, R2>(f: (context: Context.Context<R>) => Context.Context<R2>): (self: Runtime<R>) => Runtime<R2>;
    /**
     * @since 2.0.0
     * @category context
     */
    <R, R2>(self: Runtime<R>, f: (context: Context.Context<R>) => Context.Context<R2>): Runtime<R2>;
};
/**
 * @since 2.0.0
 * @category context
 * @example
 * ```ts
 * import { Context, Runtime } from "effect"
 *
 * class Name extends Context.Tag("Name")<Name, string>() {}
 *
 * const runtime: Runtime.Runtime<Name> = Runtime.defaultRuntime.pipe(
 *   Runtime.provideService(Name, "John")
 * )
 * ```
 */
export declare const provideService: {
    /**
     * @since 2.0.0
     * @category context
     * @example
     * ```ts
     * import { Context, Runtime } from "effect"
     *
     * class Name extends Context.Tag("Name")<Name, string>() {}
     *
     * const runtime: Runtime.Runtime<Name> = Runtime.defaultRuntime.pipe(
     *   Runtime.provideService(Name, "John")
     * )
     * ```
     */
    <I, S>(tag: Context.Tag<I, S>, service: S): <R>(self: Runtime<R>) => Runtime<I | R>;
    /**
     * @since 2.0.0
     * @category context
     * @example
     * ```ts
     * import { Context, Runtime } from "effect"
     *
     * class Name extends Context.Tag("Name")<Name, string>() {}
     *
     * const runtime: Runtime.Runtime<Name> = Runtime.defaultRuntime.pipe(
     *   Runtime.provideService(Name, "John")
     * )
     * ```
     */
    <R, I, S>(self: Runtime<R>, tag: Context.Tag<I, S>, service: S): Runtime<R | I>;
};
/**
 * @since 2.0.0
 * @category fiber refs
 */
export declare const updateFiberRefs: {
    /**
     * @since 2.0.0
     * @category fiber refs
     */
    (f: (fiberRefs: FiberRefs.FiberRefs) => FiberRefs.FiberRefs): <R>(self: Runtime<R>) => Runtime<R>;
    /**
     * @since 2.0.0
     * @category fiber refs
     */
    <R>(self: Runtime<R>, f: (fiberRefs: FiberRefs.FiberRefs) => FiberRefs.FiberRefs): Runtime<R>;
};
/**
 * @since 2.0.0
 * @category fiber refs
 * @example
 * ```ts
 * import { Effect, FiberRef, Runtime } from "effect"
 *
 * const ref = FiberRef.unsafeMake(0)
 *
 * const updatedRuntime = Runtime.defaultRuntime.pipe(
 *   Runtime.setFiberRef(ref, 1)
 * )
 *
 * // returns 1
 * const result = Runtime.runSync(updatedRuntime)(FiberRef.get(ref))
 * ```
 */
export declare const setFiberRef: {
    /**
     * @since 2.0.0
     * @category fiber refs
     * @example
     * ```ts
     * import { Effect, FiberRef, Runtime } from "effect"
     *
     * const ref = FiberRef.unsafeMake(0)
     *
     * const updatedRuntime = Runtime.defaultRuntime.pipe(
     *   Runtime.setFiberRef(ref, 1)
     * )
     *
     * // returns 1
     * const result = Runtime.runSync(updatedRuntime)(FiberRef.get(ref))
     * ```
     */
    <A>(fiberRef: FiberRef.FiberRef<A>, value: A): <R>(self: Runtime<R>) => Runtime<R>;
    /**
     * @since 2.0.0
     * @category fiber refs
     * @example
     * ```ts
     * import { Effect, FiberRef, Runtime } from "effect"
     *
     * const ref = FiberRef.unsafeMake(0)
     *
     * const updatedRuntime = Runtime.defaultRuntime.pipe(
     *   Runtime.setFiberRef(ref, 1)
     * )
     *
     * // returns 1
     * const result = Runtime.runSync(updatedRuntime)(FiberRef.get(ref))
     * ```
     */
    <R, A>(self: Runtime<R>, fiberRef: FiberRef.FiberRef<A>, value: A): Runtime<R>;
};
/**
 * @since 2.0.0
 * @category fiber refs
 * @example
 * ```ts
 * import { Effect, FiberRef, Runtime } from "effect"
 *
 * const ref = FiberRef.unsafeMake(0)
 *
 * const updatedRuntime = Runtime.defaultRuntime.pipe(
 *   Runtime.setFiberRef(ref, 1),
 *   Runtime.deleteFiberRef(ref)
 * )
 *
 * // returns 0
 * const result = Runtime.runSync(updatedRuntime)(FiberRef.get(ref))
 * ```
 */
export declare const deleteFiberRef: {
    /**
     * @since 2.0.0
     * @category fiber refs
     * @example
     * ```ts
     * import { Effect, FiberRef, Runtime } from "effect"
     *
     * const ref = FiberRef.unsafeMake(0)
     *
     * const updatedRuntime = Runtime.defaultRuntime.pipe(
     *   Runtime.setFiberRef(ref, 1),
     *   Runtime.deleteFiberRef(ref)
     * )
     *
     * // returns 0
     * const result = Runtime.runSync(updatedRuntime)(FiberRef.get(ref))
     * ```
     */
    <A>(fiberRef: FiberRef.FiberRef<A>): <R>(self: Runtime<R>) => Runtime<R>;
    /**
     * @since 2.0.0
     * @category fiber refs
     * @example
     * ```ts
     * import { Effect, FiberRef, Runtime } from "effect"
     *
     * const ref = FiberRef.unsafeMake(0)
     *
     * const updatedRuntime = Runtime.defaultRuntime.pipe(
     *   Runtime.setFiberRef(ref, 1),
     *   Runtime.deleteFiberRef(ref)
     * )
     *
     * // returns 0
     * const result = Runtime.runSync(updatedRuntime)(FiberRef.get(ref))
     * ```
     */
    <R, A>(self: Runtime<R>, fiberRef: FiberRef.FiberRef<A>): Runtime<R>;
};
//# sourceMappingURL=Runtime.d.ts.map