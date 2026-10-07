import type { Channel } from "./Channel.js";
import * as Context from "./Context.js";
import type { Effect, EffectUnify, EffectUnifyIgnore } from "./Effect.js";
import * as Effectable from "./Effectable.js";
import * as Either from "./Either.js";
import type { LazyArg } from "./Function.js";
import type { TypeLambda } from "./HKT.js";
import type { Inspectable } from "./Inspectable.js";
import * as Option from "./Option.js";
import type { Pipeable } from "./Pipeable.js";
import type { Predicate, Refinement } from "./Predicate.js";
import type { Sink } from "./Sink.js";
import type { Stream } from "./Stream.js";
import type { Concurrency, Covariant, Equals, NoExcessProperties, NotFunction, Simplify } from "./Types.js";
import type * as Unify from "./Unify.js";
import { YieldWrap } from "./Utils.js";
/**
 * @since 3.4.0
 * @experimental
 * @category type ids
 */
export declare const TypeId: unique symbol;
/**
 * @since 3.4.0
 * @experimental
 * @category type ids
 */
export type TypeId = typeof TypeId;
/**
 * @since 3.4.0
 * @experimental
 * @category MicroExit
 */
export declare const MicroExitTypeId: unique symbol;
/**
 * @since 3.4.0
 * @experimental
 * @category MicroExit
 */
export type MicroExitTypeId = typeof TypeId;
/**
 * A lightweight alternative to the `Effect` data type, with a subset of the functionality.
 *
 * @since 3.4.0
 * @experimental
 * @category models
 */
export interface Micro<out A, out E = never, out R = never> extends Effect<A, E, R> {
    readonly [TypeId]: Micro.Variance<A, E, R>;
    [Symbol.iterator](): MicroIterator<Micro<A, E, R>>;
    [Unify.typeSymbol]?: unknown;
    [Unify.unifySymbol]?: MicroUnify<this>;
    [Unify.ignoreSymbol]?: MicroUnifyIgnore;
}
/**
 * @category models
 * @since 3.4.3
 */
export interface MicroUnify<A extends {
    [Unify.typeSymbol]?: any;
}> extends EffectUnify<A> {
    Micro?: () => A[Unify.typeSymbol] extends Micro<infer A0, infer E0, infer R0> | infer _ ? Micro<A0, E0, R0> : never;
}
/**
 * @category models
 * @since 3.4.3
 */
export interface MicroUnifyIgnore extends EffectUnifyIgnore {
    Effect?: true;
}
/**
 * @category type lambdas
 * @since 3.4.1
 */
export interface MicroTypeLambda extends TypeLambda {
    readonly type: Micro<this["Target"], this["Out1"], this["Out2"]>;
}
/**
 * @since 3.4.0
 * @experimental
 */
export declare namespace Micro {
    /**
     * @since 3.4.0
     * @experimental
     */
    interface Variance<A, E, R> {
        _A: Covariant<A>;
        _E: Covariant<E>;
        _R: Covariant<R>;
    }
    /**
     * @since 3.4.0
     * @experimental
     */
    type Success<T> = T extends Micro<infer _A, infer _E, infer _R> ? _A : never;
    /**
     * @since 3.4.0
     * @experimental
     */
    type Error<T> = T extends Micro<infer _A, infer _E, infer _R> ? _E : never;
    /**
     * @since 3.4.0
     * @experimental
     */
    type Context<T> = T extends Micro<infer _A, infer _E, infer _R> ? _R : never;
}
/**
 * @since 3.4.0
 * @experimental
 * @category guards
 */
export declare const isMicro: (u: unknown) => u is Micro<any, any, any>;
/**
 * @since 3.4.0
 * @experimental
 * @category models
 */
export interface MicroIterator<T extends Micro<any, any, any>> {
    next(...args: ReadonlyArray<any>): IteratorResult<YieldWrap<T>, Micro.Success<T>>;
}
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export declare const MicroCauseTypeId: unique symbol;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export type MicroCauseTypeId = typeof MicroCauseTypeId;
/**
 * A `MicroCause` is a data type that represents the different ways a `Micro` can fail.
 *
 * **Details**
 *
 * `MicroCause` comes in three forms:
 *
 * - `Die`: Indicates an unforeseen defect that wasn't planned for in the system's logic.
 * - `Fail`: Covers anticipated errors that are recognized and typically handled within the application.
 * - `Interrupt`: Signifies an operation that has been purposefully stopped.
 *
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export type MicroCause<E> = MicroCause.Die | MicroCause.Fail<E> | MicroCause.Interrupt;
/**
 * @since 3.6.6
 * @experimental
 * @category guards
 */
export declare const isMicroCause: (self: unknown) => self is MicroCause<unknown>;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export declare namespace MicroCause {
    /**
     * @since 3.4.6
     * @experimental
     */
    type Error<T> = T extends MicroCause.Fail<infer E> ? E : never;
    /**
     * @since 3.4.0
     * @experimental
     */
    interface Proto<Tag extends string, E> extends Pipeable, globalThis.Error {
        readonly [MicroCauseTypeId]: {
            _E: Covariant<E>;
        };
        readonly _tag: Tag;
        readonly traces: ReadonlyArray<string>;
    }
    /**
     * @since 3.4.6
     * @experimental
     * @category MicroCause
     */
    interface Die extends Proto<"Die", never> {
        readonly defect: unknown;
    }
    /**
     * @since 3.4.6
     * @experimental
     * @category MicroCause
     */
    interface Fail<E> extends Proto<"Fail", E> {
        readonly error: E;
    }
    /**
     * @since 3.4.6
     * @experimental
     * @category MicroCause
     */
    interface Interrupt extends Proto<"Interrupt", never> {
    }
}
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export declare const causeFail: <E>(error: E, traces?: ReadonlyArray<string>) => MicroCause<E>;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export declare const causeDie: (defect: unknown, traces?: ReadonlyArray<string>) => MicroCause<never>;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export declare const causeInterrupt: (traces?: ReadonlyArray<string>) => MicroCause<never>;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export declare const causeIsFail: <E>(self: MicroCause<E>) => self is MicroCause.Fail<E>;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export declare const causeIsDie: <E>(self: MicroCause<E>) => self is MicroCause.Die;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export declare const causeIsInterrupt: <E>(self: MicroCause<E>) => self is MicroCause.Interrupt;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export declare const causeSquash: <E>(self: MicroCause<E>) => unknown;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroCause
 */
export declare const causeWithTrace: {
    /**
     * @since 3.4.6
     * @experimental
     * @category MicroCause
     */
    (trace: string): <E>(self: MicroCause<E>) => MicroCause<E>;
    /**
     * @since 3.4.6
     * @experimental
     * @category MicroCause
     */
    <E>(self: MicroCause<E>, trace: string): MicroCause<E>;
};
/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export declare const MicroFiberTypeId: unique symbol;
/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export type MicroFiberTypeId = typeof MicroFiberTypeId;
/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export interface MicroFiber<out A, out E = never> {
    readonly [MicroFiberTypeId]: MicroFiber.Variance<A, E>;
    readonly currentOpCount: number;
    readonly getRef: <I, A>(ref: Context.Reference<I, A>) => A;
    readonly context: Context.Context<never>;
    readonly addObserver: (cb: (exit: MicroExit<A, E>) => void) => () => void;
    readonly unsafeInterrupt: () => void;
    readonly unsafePoll: () => MicroExit<A, E> | undefined;
}
/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export declare namespace MicroFiber {
    /**
     * @since 3.11.0
     * @experimental
     * @category MicroFiber
     */
    interface Variance<out A, out E = never> {
        readonly _A: Covariant<A>;
        readonly _E: Covariant<E>;
    }
}
declare class MicroFiberImpl<in out A = any, in out E = any> implements MicroFiber<A, E> {
    context: Context.Context<never>;
    interruptible: boolean;
    readonly [MicroFiberTypeId]: MicroFiber.Variance<A, E>;
    readonly _stack: Array<Primitive>;
    readonly _observers: Array<(exit: MicroExit<A, E>) => void>;
    _exit: MicroExit<A, E> | undefined;
    _children: Set<MicroFiberImpl<any, any>> | undefined;
    currentOpCount: number;
    constructor(context: Context.Context<never>, interruptible?: boolean);
    getRef<I, A>(ref: Context.Reference<I, A>): A;
    addObserver(cb: (exit: MicroExit<A, E>) => void): () => void;
    _interrupted: boolean;
    unsafeInterrupt(): void;
    unsafePoll(): MicroExit<A, E> | undefined;
    evaluate(effect: Primitive): void;
    runLoop(effect: Primitive): MicroExit<A, E> | Yield;
    getCont<S extends successCont | failureCont>(symbol: S): (Primitive & Record<S, (value: any, fiber: MicroFiberImpl) => Primitive>) | undefined;
    _yielded: MicroExit<any, any> | (() => void) | undefined;
    yieldWith(value: MicroExit<any, any> | (() => void)): Yield;
    children(): Set<MicroFiber<any, any>>;
}
/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export declare const fiberAwait: <A, E>(self: MicroFiber<A, E>) => Micro<MicroExit<A, E>>;
/**
 * @since 3.11.2
 * @experimental
 * @category MicroFiber
 */
export declare const fiberJoin: <A, E>(self: MicroFiber<A, E>) => Micro<A, E>;
/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export declare const fiberInterrupt: <A, E>(self: MicroFiber<A, E>) => Micro<void>;
/**
 * @since 3.11.0
 * @experimental
 * @category MicroFiber
 */
export declare const fiberInterruptAll: <A extends Iterable<MicroFiber<any, any>>>(fibers: A) => Micro<void>;
declare const identifier: unique symbol;
type identifier = typeof identifier;
declare const evaluate: unique symbol;
type evaluate = typeof evaluate;
declare const successCont: unique symbol;
type successCont = typeof successCont;
declare const failureCont: unique symbol;
type failureCont = typeof failureCont;
declare const ensureCont: unique symbol;
type ensureCont = typeof ensureCont;
declare const Yield: unique symbol;
type Yield = typeof Yield;
interface Primitive {
    readonly [identifier]: string;
    readonly [successCont]: ((value: unknown, fiber: MicroFiberImpl) => Primitive | Yield) | undefined;
    readonly [failureCont]: ((cause: MicroCause<unknown>, fiber: MicroFiberImpl) => Primitive | Yield) | undefined;
    readonly [ensureCont]: ((fiber: MicroFiberImpl) => ((value: unknown, fiber: MicroFiberImpl) => Primitive | Yield) | undefined) | undefined;
    [evaluate](fiber: MicroFiberImpl): Primitive | Yield;
}
/**
 * Creates a `Micro` effect that will succeed with the specified constant value.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const succeed: <A>(value: A) => Micro<A>;
/**
 * Creates a `Micro` effect that will fail with the specified `MicroCause`.
 *
 * @since 3.4.6
 * @experimental
 * @category constructors
 */
export declare const failCause: <E>(cause: MicroCause<E>) => Micro<never, E>;
/**
 * Creates a `Micro` effect that fails with the given error.
 *
 * This results in a `Fail` variant of the `MicroCause` type, where the error is
 * tracked at the type level.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const fail: <E>(error: E) => Micro<never, E>;
/**
 * Creates a `Micro` effect that succeeds with a lazily evaluated value.
 *
 * If the evaluation of the value throws an error, the effect will fail with a
 * `Die` variant of the `MicroCause` type.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const sync: <A>(evaluate: LazyArg<A>) => Micro<A>;
/**
 * Lazily creates a `Micro` effect from the given side-effect.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const suspend: <A, E, R>(evaluate: LazyArg<Micro<A, E, R>>) => Micro<A, E, R>;
/**
 * Pause the execution of the current `Micro` effect, and resume it on the next
 * scheduler tick.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const yieldNowWith: (priority?: number) => Micro<void>;
/**
 * Pause the execution of the current `Micro` effect, and resume it on the next
 * scheduler tick.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const yieldNow: Micro<void>;
/**
 * Creates a `Micro` effect that will succeed with the value wrapped in `Some`.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const succeedSome: <A>(a: A) => Micro<Option.Option<A>>;
/**
 * Creates a `Micro` effect that succeeds with `None`.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const succeedNone: Micro<Option.Option<never>>;
/**
 * Creates a `Micro` effect that will fail with the lazily evaluated `MicroCause`.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const failCauseSync: <E>(evaluate: LazyArg<MicroCause<E>>) => Micro<never, E>;
/**
 * Creates a `Micro` effect that will die with the specified error.
 *
 * This results in a `Die` variant of the `MicroCause` type, where the error is
 * not tracked at the type level.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const die: (defect: unknown) => Micro<never>;
/**
 * Creates a `Micro` effect that will fail with the lazily evaluated error.
 *
 * This results in a `Fail` variant of the `MicroCause` type, where the error is
 * tracked at the type level.
 *
 * @since 3.4.6
 * @experimental
 * @category constructors
 */
export declare const failSync: <E>(error: LazyArg<E>) => Micro<never, E>;
/**
 * Converts an `Option` into a `Micro` effect, that will fail with
 * `NoSuchElementException` if the option is `None`. Otherwise, it will succeed with the
 * value of the option.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const fromOption: <A>(option: Option.Option<A>) => Micro<A, NoSuchElementException>;
/**
 * Converts an `Either` into a `Micro` effect, that will fail with the left side
 * of the either if it is a `Left`. Otherwise, it will succeed with the right
 * side of the either.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const fromEither: <R, L>(either: Either.Either<R, L>) => Micro<R, L>;
declare const void_: Micro<void>;
export { 
/**
 * A `Micro` effect that will succeed with `void` (`undefined`).
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
void_ as void };
declare const try_: <A, E>(options: {
    try: LazyArg<A>;
    catch: (error: unknown) => E;
}) => Micro<A, E>;
export { 
/**
 * The `Micro` equivalent of a try / catch block, which allows you to map
 * thrown errors to a specific error type.
 *
 * @example
 * ```ts
 * import { Micro } from "effect"
 *
 * Micro.try({
 *   try: () => { throw new Error("boom") },
 *   catch: (cause) => new Error("caught", { cause })
 * })
 * ```
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
try_ as try };
/**
 * Wrap a `Promise` into a `Micro` effect.
 *
 * Any errors will result in a `Die` variant of the `MicroCause` type, where the
 * error is not tracked at the type level.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const promise: <A>(evaluate: (signal: AbortSignal) => PromiseLike<A>) => Micro<A>;
/**
 * Wrap a `Promise` into a `Micro` effect. Any errors will be caught and
 * converted into a specific error type.
 *
 * @example
 * ```ts
 * import { Micro } from "effect"
 *
 * Micro.tryPromise({
 *   try: () => Promise.resolve("success"),
 *   catch: (cause) => new Error("caught", { cause })
 * })
 * ```
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const tryPromise: <A, E>(options: {
    readonly try: (signal: AbortSignal) => PromiseLike<A>;
    readonly catch: (error: unknown) => E;
}) => Micro<A, E>;
/**
 * Create a `Micro` effect using the current `MicroFiber`.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const withMicroFiber: <A, E = never, R = never>(evaluate: (fiber: MicroFiberImpl<A, E>) => Micro<A, E, R>) => Micro<A, E, R>;
/**
 * Flush any yielded effects that are waiting to be executed.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const yieldFlush: Micro<void>;
/**
 * Create a `Micro` effect from an asynchronous computation.
 *
 * You can return a cleanup effect that will be run when the effect is aborted.
 * It is also passed an `AbortSignal` that is triggered when the effect is
 * aborted.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const async: <A, E = never, R = never>(register: (resume: (effect: Micro<A, E, R>) => void, signal: AbortSignal) => void | Micro<void, never, R>) => Micro<A, E, R>;
/**
 * A `Micro` that will never succeed or fail. It wraps `setInterval` to prevent
 * the Javascript runtime from exiting.
 *
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const never: Micro<never>;
/**
 * @since 3.4.0
 * @experimental
 * @category constructors
 */
export declare const gen: <Self, Eff extends YieldWrap<Micro<any, any, any>>, AEff>(...args: [self: Self, body: (this: Self) => Generator<Eff, AEff, never>] | [body: () => Generator<Eff, AEff, never>]) => Micro<AEff, [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Micro<infer _A, infer E, infer _R>>] ? E : never, [Eff] extends [never] ? never : [Eff] extends [YieldWrap<Micro<infer _A, infer _E, infer R>>] ? R : never>;
/**
 * Create a `Micro` effect that will replace the success value of the given
 * effect.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export declare const as: {
    /**
     * Create a `Micro` effect that will replace the success value of the given
     * effect.
     *
     * @since 3.4.0
     * @experimental
     * @category mapping & sequencing
     */
    <A, B>(value: B): <E, R>(self: Micro<A, E, R>) => Micro<B, E, R>;
    /**
     * Create a `Micro` effect that will replace the success value of the given
     * effect.
     *
     * @since 3.4.0
     * @experimental
     * @category mapping & sequencing
     */
    <A, E, R, B>(self: Micro<A, E, R>, value: B): Micro<B, E, R>;
};
/**
 * Wrap the success value of this `Micro` effect in a `Some`.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export declare const asSome: <A, E, R>(self: Micro<A, E, R>) => Micro<Option.Option<A>, E, R>;
/**
 * Swap the error and success types of the `Micro` effect.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export declare const flip: <A, E, R>(self: Micro<A, E, R>) => Micro<E, A, R>;
/**
 * A more flexible version of `flatMap` that combines `map` and `flatMap` into a
 * single API.
 *
 * It also lets you directly pass a `Micro` effect, which will be executed after
 * the current effect.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export declare const andThen: {
    /**
     * A more flexible version of `flatMap` that combines `map` and `flatMap` into a
     * single API.
     *
     * It also lets you directly pass a `Micro` effect, which will be executed after
     * the current effect.
     *
     * @since 3.4.0
     * @experimental
     * @category mapping & sequencing
     */
    <A, X>(f: (a: A) => X): <E, R>(self: Micro<A, E, R>) => [X] extends [Micro<infer A1, infer E1, infer R1>] ? Micro<A1, E | E1, R | R1> : Micro<X, E, R>;
    /**
     * A more flexible version of `flatMap` that combines `map` and `flatMap` into a
     * single API.
     *
     * It also lets you directly pass a `Micro` effect, which will be executed after
     * the current effect.
     *
     * @since 3.4.0
     * @experimental
     * @category mapping & sequencing
     */
    <X>(f: NotFunction<X>): <A, E, R>(self: Micro<A, E, R>) => [X] extends [Micro<infer A1, infer E1, infer R1>] ? Micro<A1, E | E1, R | R1> : Micro<X, E, R>;
    /**
     * A more flexible version of `flatMap` that combines `map` and `flatMap` into a
     * single API.
     *
     * It also lets you directly pass a `Micro` effect, which will be executed after
     * the current effect.
     *
     * @since 3.4.0
     * @experimental
     * @category mapping & sequencing
     */
    <A, E, R, X>(self: Micro<A, E, R>, f: (a: A) => X): [X] extends [Micro<infer A1, infer E1, infer R1>] ? Micro<A1, E | E1, R | R1> : Micro<X, E, R>;
    /**
     * A more flexible version of `flatMap` that combines `map` and `flatMap` into a
     * single API.
     *
     * It also lets you directly pass a `Micro` effect, which will be executed after
     * the current effect.
     *
     * @since 3.4.0
     * @experimental
     * @category mapping & sequencing
     */
    <A, E, R, X>(self: Micro<A, E, R>, f: NotFunction<X>): [X] extends [Micro<infer A1, infer E1, infer R1>] ? Micro<A1, E | E1, R | R1> : Micro<X, E, R>;
};
/**
 * Execute a side effect from the success value of the `Micro` effect.
 *
 * It is similar to the `andThen` api, but the success value is ignored.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export declare const tap: {
    /**
     * Execute a side effect from the success value of the `Micro` effect.
     *
     * It is similar to the `andThen` api, but the success value is ignored.
     *
     * @since 3.4.0
     * @experimental
     * @category mapping & sequencing
     */
    <A, X>(f: (a: NoInfer<A>) => X): <E, R>(self: Micro<A, E, R>) => [X] extends [Micro<infer _A1, infer E1, infer R1>] ? Micro<A, E | E1, R | R1> : Micro<A, E, R>;
    /**
     * Execute a side effect from the success value of the `Micro` effect.
     *
     * It is similar to the `andThen` api, but the success value is ignored.
     *
     * @since 3.4.0
     * @experimental
     * @category mapping & sequencing
     */
    <X>(f: NotFunction<X>): <A, E, R>(self: Micro<A, E, R>) => [X] extends [Micro<infer _A1, infer E1, infer R1>] ? Micro<A, E | E1, R | R1> : Micro<A, E, R>;
    /**
     * Execute a side effect from the success value of the `Micro` effect.
     *
     * It is similar to the `andThen` api, but the success value is ignored.
     *
     * @since 3.4.0
     * @experimental
     * @category mapping & sequencing
     */
    <A, E, R, X>(self: Micro<A, E, R>, f: (a: NoInfer<A>) => X): [X] extends [Micro<infer _A1, infer E1, infer R1>] ? Micro<A, E | E1, R | R1> : Micro<A, E, R>;
    /**
     * Execute a side effect from the success value of the `Micro` effect.
     *
     * It is similar to the `andThen` api, but the success value is ignored.
     *
     * @since 3.4.0
     * @experimental
     * @category mapping & sequencing
     */
    <A, E, R, X>(self: Micro<A, E, R>, f: NotFunction<X>): [X] extends [Micro<infer _A1, infer E1, infer R1>] ? Micro<A, E | E1, R | R1> : Micro<A, E, R>;
};
/**
 * Replace the success value of the `Micro` effect with `void`.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export declare const asVoid: <A, E, R>(self: Micro<A, E, R>) => Micro<void, E, R>;
/**
 * Access the `MicroExit` of the given `Micro` effect.
 *
 * @since 3.4.6
 * @experimental
 * @category mapping & sequencing
 */
export declare const exit: <A, E, R>(self: Micro<A, E, R>) => Micro<MicroExit<A, E>, never, R>;
/**
 * Replace the error type of the given `Micro` with the full `MicroCause` object.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export declare const sandbox: <A, E, R>(self: Micro<A, E, R>) => Micro<A, MicroCause<E>, R>;
/**
 * Returns an effect that races all the specified effects,
 * yielding the value of the first effect to succeed with a value. Losers of
 * the race will be interrupted immediately
 *
 * @since 3.4.0
 * @experimental
 * @category sequencing
 */
export declare const raceAll: <Eff extends Micro<any, any, any>>(all: Iterable<Eff>) => Micro<Micro.Success<Eff>, Micro.Error<Eff>, Micro.Context<Eff>>;
/**
 * Returns an effect that races all the specified effects,
 * yielding the value of the first effect to succeed or fail. Losers of
 * the race will be interrupted immediately.
 *
 * @since 3.4.0
 * @experimental
 * @category sequencing
 */
export declare const raceAllFirst: <Eff extends Micro<any, any, any>>(all: Iterable<Eff>) => Micro<Micro.Success<Eff>, Micro.Error<Eff>, Micro.Context<Eff>>;
/**
 * Returns an effect that races two effects, yielding the value of the first
 * effect to succeed. Losers of the race will be interrupted immediately.
 *
 * @since 3.4.0
 * @experimental
 * @category sequencing
 */
export declare const race: {
    /**
     * Returns an effect that races two effects, yielding the value of the first
     * effect to succeed. Losers of the race will be interrupted immediately.
     *
     * @since 3.4.0
     * @experimental
     * @category sequencing
     */
    <A2, E2, R2>(that: Micro<A2, E2, R2>): <A, E, R>(self: Micro<A, E, R>) => Micro<A | A2, E | E2, R | R2>;
    /**
     * Returns an effect that races two effects, yielding the value of the first
     * effect to succeed. Losers of the race will be interrupted immediately.
     *
     * @since 3.4.0
     * @experimental
     * @category sequencing
     */
    <A, E, R, A2, E2, R2>(self: Micro<A, E, R>, that: Micro<A2, E2, R2>): Micro<A | A2, E | E2, R | R2>;
};
/**
 * Returns an effect that races two effects, yielding the value of the first
 * effect to succeed *or* fail. Losers of the race will be interrupted immediately.
 *
 * @since 3.4.0
 * @experimental
 * @category sequencing
 */
export declare const raceFirst: {
    /**
     * Returns an effect that races two effects, yielding the value of the first
     * effect to succeed *or* fail. Losers of the race will be interrupted immediately.
     *
     * @since 3.4.0
     * @experimental
     * @category sequencing
     */
    <A2, E2, R2>(that: Micro<A2, E2, R2>): <A, E, R>(self: Micro<A, E, R>) => Micro<A | A2, E | E2, R | R2>;
    /**
     * Returns an effect that races two effects, yielding the value of the first
     * effect to succeed *or* fail. Losers of the race will be interrupted immediately.
     *
     * @since 3.4.0
     * @experimental
     * @category sequencing
     */
    <A, E, R, A2, E2, R2>(self: Micro<A, E, R>, that: Micro<A2, E2, R2>): Micro<A | A2, E | E2, R | R2>;
};
/**
 * Map the success value of this `Micro` effect to another `Micro` effect, then
 * flatten the result.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export declare const flatMap: {
    /**
     * Map the success value of this `Micro` effect to another `Micro` effect, then
     * flatten the result.
     *
     * @since 3.4.0
     * @experimental
     * @category mapping & sequencing
     */
    <A, B, E2, R2>(f: (a: A) => Micro<B, E2, R2>): <E, R>(self: Micro<A, E, R>) => Micro<B, E | E2, R | R2>;
    /**
     * Map the success value of this `Micro` effect to another `Micro` effect, then
     * flatten the result.
     *
     * @since 3.4.0
     * @experimental
     * @category mapping & sequencing
     */
    <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (a: A) => Micro<B, E2, R2>): Micro<B, E | E2, R | R2>;
};
/**
 * Flattens any nested `Micro` effects, merging the error and requirement types.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export declare const flatten: <A, E, R, E2, R2>(self: Micro<Micro<A, E, R>, E2, R2>) => Micro<A, E | E2, R | R2>;
/**
 * Transforms the success value of the `Micro` effect with the specified
 * function.
 *
 * @since 3.4.0
 * @experimental
 * @category mapping & sequencing
 */
export declare const map: {
    /**
     * Transforms the success value of the `Micro` effect with the specified
     * function.
     *
     * @since 3.4.0
     * @experimental
     * @category mapping & sequencing
     */
    <A, B>(f: (a: A) => B): <E, R>(self: Micro<A, E, R>) => Micro<B, E, R>;
    /**
     * Transforms the success value of the `Micro` effect with the specified
     * function.
     *
     * @since 3.4.0
     * @experimental
     * @category mapping & sequencing
     */
    <A, E, R, B>(self: Micro<A, E, R>, f: (a: A) => B): Micro<B, E, R>;
};
/**
 * The `MicroExit` type is used to represent the result of a `Micro` computation. It
 * can either be successful, containing a value of type `A`, or it can fail,
 * containing an error of type `E` wrapped in a `MicroCause`.
 *
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export type MicroExit<A, E = never> = MicroExit.Success<A, E> | MicroExit.Failure<A, E>;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export declare namespace MicroExit {
    /**
     * @since 3.4.6
     * @experimental
     * @category MicroExit
     */
    interface Proto<out A, out E = never> extends Micro<A, E> {
        readonly [MicroExitTypeId]: MicroExitTypeId;
    }
    /**
     * @since 3.4.6
     * @experimental
     * @category MicroExit
     */
    interface Success<out A, out E> extends Proto<A, E> {
        readonly _tag: "Success";
        readonly value: A;
    }
    /**
     * @since 3.4.6
     * @experimental
     * @category MicroExit
     */
    interface Failure<out A, out E> extends Proto<A, E> {
        readonly _tag: "Failure";
        readonly cause: MicroCause<E>;
    }
}
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export declare const isMicroExit: (u: unknown) => u is MicroExit<unknown, unknown>;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export declare const exitSucceed: <A>(a: A) => MicroExit<A, never>;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export declare const exitFailCause: <E>(cause: MicroCause<E>) => MicroExit<never, E>;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export declare const exitInterrupt: MicroExit<never>;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export declare const exitFail: <E>(e: E) => MicroExit<never, E>;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export declare const exitDie: (defect: unknown) => MicroExit<never>;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export declare const exitIsSuccess: <A, E>(self: MicroExit<A, E>) => self is MicroExit.Success<A, E>;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export declare const exitIsFailure: <A, E>(self: MicroExit<A, E>) => self is MicroExit.Failure<A, E>;
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export declare const exitIsInterrupt: <A, E>(self: MicroExit<A, E>) => self is MicroExit.Failure<A, E> & {
    readonly cause: MicroCause.Interrupt;
};
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export declare const exitIsFail: <A, E>(self: MicroExit<A, E>) => self is MicroExit.Failure<A, E> & {
    readonly cause: MicroCause.Fail<E>;
};
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export declare const exitIsDie: <A, E>(self: MicroExit<A, E>) => self is MicroExit.Failure<A, E> & {
    readonly cause: MicroCause.Die;
};
/**
 * @since 3.4.6
 * @experimental
 * @category MicroExit
 */
export declare const exitVoid: MicroExit<void>;
/**
 * @since 3.11.0
 * @experimental
 * @category MicroExit
 */
export declare const exitVoidAll: <I extends Iterable<MicroExit<any, any>>>(exits: I) => MicroExit<void, I extends Iterable<MicroExit<infer _A, infer _E>> ? _E : never>;
/**
 * @since 3.5.9
 * @experimental
 * @category scheduler
 */
export interface MicroScheduler {
    readonly scheduleTask: (task: () => void, priority: number) => void;
    readonly shouldYield: (fiber: MicroFiber<unknown, unknown>) => boolean;
    readonly flush: () => void;
}
/**
 * @since 3.5.9
 * @experimental
 * @category scheduler
 */
export declare class MicroSchedulerDefault implements MicroScheduler {
    private tasks;
    private running;
    /**
     * @since 3.5.9
     */
    scheduleTask(task: () => void, _priority: number): void;
    /**
     * @since 3.5.9
     */
    afterScheduled: () => void;
    /**
     * @since 3.5.9
     */
    runTasks(): void;
    /**
     * @since 3.5.9
     */
    shouldYield(fiber: MicroFiber<unknown, unknown>): boolean;
    /**
     * @since 3.5.9
     */
    flush(): void;
}
/**
 * Access the given `Context.Tag` from the environment.
 *
 * @since 3.4.0
 * @experimental
 * @category environment
 */
export declare const service: {
    /**
     * Access the given `Context.Tag` from the environment.
     *
     * @since 3.4.0
     * @experimental
     * @category environment
     */
    <I, S>(tag: Context.Reference<I, S>): Micro<S>;
    /**
     * Access the given `Context.Tag` from the environment.
     *
     * @since 3.4.0
     * @experimental
     * @category environment
     */
    <I, S>(tag: Context.Tag<I, S>): Micro<S, never, I>;
};
/**
 * Access the given `Context.Tag` from the environment, without tracking the
 * dependency at the type level.
 *
 * It will return an `Option` of the service, depending on whether it is
 * available in the environment or not.
 *
 * @since 3.4.0
 * @experimental
 * @category environment
 */
export declare const serviceOption: <I, S>(tag: Context.Tag<I, S>) => Micro<Option.Option<S>>;
/**
 * Update the Context with the given mapping function.
 *
 * @since 3.11.0
 * @experimental
 * @category environment
 */
export declare const updateContext: {
    /**
     * Update the Context with the given mapping function.
     *
     * @since 3.11.0
     * @experimental
     * @category environment
     */
    <R2, R>(f: (context: Context.Context<R2>) => Context.Context<NoInfer<R>>): <A, E>(self: Micro<A, E, R>) => Micro<A, E, R2>;
    /**
     * Update the Context with the given mapping function.
     *
     * @since 3.11.0
     * @experimental
     * @category environment
     */
    <A, E, R, R2>(self: Micro<A, E, R>, f: (context: Context.Context<R2>) => Context.Context<NoInfer<R>>): Micro<A, E, R2>;
};
/**
 * Update the service for the given `Context.Tag` in the environment.
 *
 * @since 3.11.0
 * @experimental
 * @category environment
 */
export declare const updateService: {
    /**
     * Update the service for the given `Context.Tag` in the environment.
     *
     * @since 3.11.0
     * @experimental
     * @category environment
     */
    <I, A>(tag: Context.Reference<I, A>, f: (value: A) => A): <XA, E, R>(self: Micro<XA, E, R>) => Micro<XA, E, R>;
    /**
     * Update the service for the given `Context.Tag` in the environment.
     *
     * @since 3.11.0
     * @experimental
     * @category environment
     */
    <I, A>(tag: Context.Tag<I, A>, f: (value: A) => A): <XA, E, R>(self: Micro<XA, E, R>) => Micro<XA, E, R | I>;
    /**
     * Update the service for the given `Context.Tag` in the environment.
     *
     * @since 3.11.0
     * @experimental
     * @category environment
     */
    <XA, E, R, I, A>(self: Micro<XA, E, R>, tag: Context.Reference<I, A>, f: (value: A) => A): Micro<XA, E, R>;
    /**
     * Update the service for the given `Context.Tag` in the environment.
     *
     * @since 3.11.0
     * @experimental
     * @category environment
     */
    <XA, E, R, I, A>(self: Micro<XA, E, R>, tag: Context.Tag<I, A>, f: (value: A) => A): Micro<XA, E, R | I>;
};
/**
 * Access the current `Context` from the environment.
 *
 * @since 3.4.0
 * @experimental
 * @category environment
 */
export declare const context: <R>() => Micro<Context.Context<R>>;
/**
 * Merge the given `Context` with the current context.
 *
 * @since 3.4.0
 * @experimental
 * @category environment
 */
export declare const provideContext: {
    /**
     * Merge the given `Context` with the current context.
     *
     * @since 3.4.0
     * @experimental
     * @category environment
     */
    <XR>(context: Context.Context<XR>): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E, Exclude<R, XR>>;
    /**
     * Merge the given `Context` with the current context.
     *
     * @since 3.4.0
     * @experimental
     * @category environment
     */
    <A, E, R, XR>(self: Micro<A, E, R>, context: Context.Context<XR>): Micro<A, E, Exclude<R, XR>>;
};
/**
 * Add the provided service to the current context.
 *
 * @since 3.4.0
 * @experimental
 * @category environment
 */
export declare const provideService: {
    /**
     * Add the provided service to the current context.
     *
     * @since 3.4.0
     * @experimental
     * @category environment
     */
    <I, S>(tag: Context.Tag<I, S>, service: S): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E, Exclude<R, I>>;
    /**
     * Add the provided service to the current context.
     *
     * @since 3.4.0
     * @experimental
     * @category environment
     */
    <A, E, R, I, S>(self: Micro<A, E, R>, tag: Context.Tag<I, S>, service: S): Micro<A, E, Exclude<R, I>>;
};
/**
 * Create a service using the provided `Micro` effect, and add it to the
 * current context.
 *
 * @since 3.4.6
 * @experimental
 * @category environment
 */
export declare const provideServiceEffect: {
    /**
     * Create a service using the provided `Micro` effect, and add it to the
     * current context.
     *
     * @since 3.4.6
     * @experimental
     * @category environment
     */
    <I, S, E2, R2>(tag: Context.Tag<I, S>, acquire: Micro<S, E2, R2>): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E | E2, Exclude<R, I> | R2>;
    /**
     * Create a service using the provided `Micro` effect, and add it to the
     * current context.
     *
     * @since 3.4.6
     * @experimental
     * @category environment
     */
    <A, E, R, I, S, E2, R2>(self: Micro<A, E, R>, tag: Context.Tag<I, S>, acquire: Micro<S, E2, R2>): Micro<A, E | E2, Exclude<R, I> | R2>;
};
declare const MaxOpsBeforeYield_base: Context.ReferenceClass<MaxOpsBeforeYield, "effect/Micro/currentMaxOpsBeforeYield", number>;
/**
 * @since 3.11.0
 * @experimental
 * @category references
 */
export declare class MaxOpsBeforeYield extends MaxOpsBeforeYield_base {
}
declare const CurrentConcurrency_base: Context.ReferenceClass<CurrentConcurrency, "effect/Micro/currentConcurrency", number | "unbounded">;
/**
 * @since 3.11.0
 * @experimental
 * @category environment refs
 */
export declare class CurrentConcurrency extends CurrentConcurrency_base {
}
declare const CurrentScheduler_base: Context.ReferenceClass<CurrentScheduler, "effect/Micro/currentScheduler", MicroScheduler>;
/**
 * @since 3.11.0
 * @experimental
 * @category environment refs
 */
export declare class CurrentScheduler extends CurrentScheduler_base {
}
/**
 * If you have a `Micro` that uses `concurrency: "inherit"`, you can use this
 * api to control the concurrency of that `Micro` when it is run.
 *
 * @example
 * ```ts
 * import * as Micro from "effect/Micro"
 *
 * Micro.forEach([1, 2, 3], (n) => Micro.succeed(n), {
 *   concurrency: "inherit"
 * }).pipe(
 *   Micro.withConcurrency(2) // use a concurrency of 2
 * )
 * ```
 *
 * @since 3.4.0
 * @experimental
 * @category environment refs
 */
export declare const withConcurrency: {
    /**
     * If you have a `Micro` that uses `concurrency: "inherit"`, you can use this
     * api to control the concurrency of that `Micro` when it is run.
     *
     * @example
     * ```ts
     * import * as Micro from "effect/Micro"
     *
     * Micro.forEach([1, 2, 3], (n) => Micro.succeed(n), {
     *   concurrency: "inherit"
     * }).pipe(
     *   Micro.withConcurrency(2) // use a concurrency of 2
     * )
     * ```
     *
     * @since 3.4.0
     * @experimental
     * @category environment refs
     */
    (concurrency: "unbounded" | number): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E, R>;
    /**
     * If you have a `Micro` that uses `concurrency: "inherit"`, you can use this
     * api to control the concurrency of that `Micro` when it is run.
     *
     * @example
     * ```ts
     * import * as Micro from "effect/Micro"
     *
     * Micro.forEach([1, 2, 3], (n) => Micro.succeed(n), {
     *   concurrency: "inherit"
     * }).pipe(
     *   Micro.withConcurrency(2) // use a concurrency of 2
     * )
     * ```
     *
     * @since 3.4.0
     * @experimental
     * @category environment refs
     */
    <A, E, R>(self: Micro<A, E, R>, concurrency: "unbounded" | number): Micro<A, E, R>;
};
/**
 * Combine two `Micro` effects into a single effect that produces a tuple of
 * their results.
 *
 * @since 3.4.0
 * @experimental
 * @category zipping
 */
export declare const zip: {
    /**
     * Combine two `Micro` effects into a single effect that produces a tuple of
     * their results.
     *
     * @since 3.4.0
     * @experimental
     * @category zipping
     */
    <A2, E2, R2>(that: Micro<A2, E2, R2>, options?: {
        readonly concurrent?: boolean | undefined;
    } | undefined): <A, E, R>(self: Micro<A, E, R>) => Micro<[A, A2], E2 | E, R2 | R>;
    /**
     * Combine two `Micro` effects into a single effect that produces a tuple of
     * their results.
     *
     * @since 3.4.0
     * @experimental
     * @category zipping
     */
    <A, E, R, A2, E2, R2>(self: Micro<A, E, R>, that: Micro<A2, E2, R2>, options?: {
        readonly concurrent?: boolean | undefined;
    }): Micro<[A, A2], E | E2, R | R2>;
};
/**
 * The `Micro.zipWith` function combines two `Micro` effects and allows you to
 * apply a function to the results of the combined effects, transforming them
 * into a single value.
 *
 * @since 3.4.3
 * @experimental
 * @category zipping
 */
export declare const zipWith: {
    /**
     * The `Micro.zipWith` function combines two `Micro` effects and allows you to
     * apply a function to the results of the combined effects, transforming them
     * into a single value.
     *
     * @since 3.4.3
     * @experimental
     * @category zipping
     */
    <A2, E2, R2, A, B>(that: Micro<A2, E2, R2>, f: (a: A, b: A2) => B, options?: {
        readonly concurrent?: boolean | undefined;
    }): <E, R>(self: Micro<A, E, R>) => Micro<B, E2 | E, R2 | R>;
    /**
     * The `Micro.zipWith` function combines two `Micro` effects and allows you to
     * apply a function to the results of the combined effects, transforming them
     * into a single value.
     *
     * @since 3.4.3
     * @experimental
     * @category zipping
     */
    <A, E, R, A2, E2, R2, B>(self: Micro<A, E, R>, that: Micro<A2, E2, R2>, f: (a: A, b: A2) => B, options?: {
        readonly concurrent?: boolean | undefined;
    }): Micro<B, E2 | E, R2 | R>;
};
/**
 * Filter the specified effect with the provided function, failing with specified
 * `MicroCause` if the predicate fails.
 *
 * In addition to the filtering capabilities discussed earlier, you have the option to further
 * refine and narrow down the type of the success channel by providing a
 *
 * @since 3.4.0
 * @experimental
 * @category filtering & conditionals
 */
export declare const filterOrFailCause: {
    /**
     * Filter the specified effect with the provided function, failing with specified
     * `MicroCause` if the predicate fails.
     *
     * In addition to the filtering capabilities discussed earlier, you have the option to further
     * refine and narrow down the type of the success channel by providing a
     *
     * @since 3.4.0
     * @experimental
     * @category filtering & conditionals
     */
    <A, B extends A, E2>(refinement: Refinement<A, B>, orFailWith: (a: NoInfer<A>) => MicroCause<E2>): <E, R>(self: Micro<A, E, R>) => Micro<B, E2 | E, R>;
    /**
     * Filter the specified effect with the provided function, failing with specified
     * `MicroCause` if the predicate fails.
     *
     * In addition to the filtering capabilities discussed earlier, you have the option to further
     * refine and narrow down the type of the success channel by providing a
     *
     * @since 3.4.0
     * @experimental
     * @category filtering & conditionals
     */
    <A, E2>(predicate: Predicate<NoInfer<A>>, orFailWith: (a: NoInfer<A>) => MicroCause<E2>): <E, R>(self: Micro<A, E, R>) => Micro<A, E2 | E, R>;
    /**
     * Filter the specified effect with the provided function, failing with specified
     * `MicroCause` if the predicate fails.
     *
     * In addition to the filtering capabilities discussed earlier, you have the option to further
     * refine and narrow down the type of the success channel by providing a
     *
     * @since 3.4.0
     * @experimental
     * @category filtering & conditionals
     */
    <A, E, R, B extends A, E2>(self: Micro<A, E, R>, refinement: Refinement<A, B>, orFailWith: (a: A) => MicroCause<E2>): Micro<B, E | E2, R>;
    /**
     * Filter the specified effect with the provided function, failing with specified
     * `MicroCause` if the predicate fails.
     *
     * In addition to the filtering capabilities discussed earlier, you have the option to further
     * refine and narrow down the type of the success channel by providing a
     *
     * @since 3.4.0
     * @experimental
     * @category filtering & conditionals
     */
    <A, E, R, E2>(self: Micro<A, E, R>, predicate: Predicate<A>, orFailWith: (a: A) => MicroCause<E2>): Micro<A, E | E2, R>;
};
/**
 * Filter the specified effect with the provided function, failing with specified
 * error if the predicate fails.
 *
 * In addition to the filtering capabilities discussed earlier, you have the option to further
 * refine and narrow down the type of the success channel by providing a
 *
 * @since 3.4.0
 * @experimental
 * @category filtering & conditionals
 */
export declare const filterOrFail: {
    /**
     * Filter the specified effect with the provided function, failing with specified
     * error if the predicate fails.
     *
     * In addition to the filtering capabilities discussed earlier, you have the option to further
     * refine and narrow down the type of the success channel by providing a
     *
     * @since 3.4.0
     * @experimental
     * @category filtering & conditionals
     */
    <A, B extends A, E2>(refinement: Refinement<A, B>, orFailWith: (a: NoInfer<A>) => E2): <E, R>(self: Micro<A, E, R>) => Micro<B, E2 | E, R>;
    /**
     * Filter the specified effect with the provided function, failing with specified
     * error if the predicate fails.
     *
     * In addition to the filtering capabilities discussed earlier, you have the option to further
     * refine and narrow down the type of the success channel by providing a
     *
     * @since 3.4.0
     * @experimental
     * @category filtering & conditionals
     */
    <A, E2>(predicate: Predicate<NoInfer<A>>, orFailWith: (a: NoInfer<A>) => E2): <E, R>(self: Micro<A, E, R>) => Micro<A, E2 | E, R>;
    /**
     * Filter the specified effect with the provided function, failing with specified
     * error if the predicate fails.
     *
     * In addition to the filtering capabilities discussed earlier, you have the option to further
     * refine and narrow down the type of the success channel by providing a
     *
     * @since 3.4.0
     * @experimental
     * @category filtering & conditionals
     */
    <A, E, R, B extends A, E2>(self: Micro<A, E, R>, refinement: Refinement<A, B>, orFailWith: (a: A) => E2): Micro<B, E | E2, R>;
    /**
     * Filter the specified effect with the provided function, failing with specified
     * error if the predicate fails.
     *
     * In addition to the filtering capabilities discussed earlier, you have the option to further
     * refine and narrow down the type of the success channel by providing a
     *
     * @since 3.4.0
     * @experimental
     * @category filtering & conditionals
     */
    <A, E, R, E2>(self: Micro<A, E, R>, predicate: Predicate<A>, orFailWith: (a: A) => E2): Micro<A, E | E2, R>;
};
/**
 * The moral equivalent of `if (p) exp`.
 *
 * @since 3.4.0
 * @experimental
 * @category filtering & conditionals
 */
export declare const when: {
    /**
     * The moral equivalent of `if (p) exp`.
     *
     * @since 3.4.0
     * @experimental
     * @category filtering & conditionals
     */
    <E2 = never, R2 = never>(condition: LazyArg<boolean> | Micro<boolean, E2, R2>): <A, E, R>(self: Micro<A, E, R>) => Micro<Option.Option<A>, E | E2, R | R2>;
    /**
     * The moral equivalent of `if (p) exp`.
     *
     * @since 3.4.0
     * @experimental
     * @category filtering & conditionals
     */
    <A, E, R, E2 = never, R2 = never>(self: Micro<A, E, R>, condition: LazyArg<boolean> | Micro<boolean, E2, R2>): Micro<Option.Option<A>, E | E2, R | R2>;
};
/**
 * Repeat the given `Micro` using the provided options.
 *
 * The `while` predicate will be checked after each iteration, and can use the
 * fall `MicroExit` of the effect to determine if the repetition should continue.
 *
 * @since 3.4.6
 * @experimental
 * @category repetition
 */
export declare const repeatExit: {
    /**
     * Repeat the given `Micro` using the provided options.
     *
     * The `while` predicate will be checked after each iteration, and can use the
     * fall `MicroExit` of the effect to determine if the repetition should continue.
     *
     * @since 3.4.6
     * @experimental
     * @category repetition
     */
    <A, E>(options: {
        while: Predicate<MicroExit<A, E>>;
        times?: number | undefined;
        schedule?: MicroSchedule | undefined;
    }): <R>(self: Micro<A, E, R>) => Micro<A, E, R>;
    /**
     * Repeat the given `Micro` using the provided options.
     *
     * The `while` predicate will be checked after each iteration, and can use the
     * fall `MicroExit` of the effect to determine if the repetition should continue.
     *
     * @since 3.4.6
     * @experimental
     * @category repetition
     */
    <A, E, R>(self: Micro<A, E, R>, options: {
        while: Predicate<MicroExit<A, E>>;
        times?: number | undefined;
        schedule?: MicroSchedule | undefined;
    }): Micro<A, E, R>;
};
/**
 * Repeat the given `Micro` effect using the provided options. Only successful
 * results will be repeated.
 *
 * @since 3.4.0
 * @experimental
 * @category repetition
 */
export declare const repeat: {
    /**
     * Repeat the given `Micro` effect using the provided options. Only successful
     * results will be repeated.
     *
     * @since 3.4.0
     * @experimental
     * @category repetition
     */
    <A, E>(options?: {
        while?: Predicate<A> | undefined;
        times?: number | undefined;
        schedule?: MicroSchedule | undefined;
    } | undefined): <R>(self: Micro<A, E, R>) => Micro<A, E, R>;
    /**
     * Repeat the given `Micro` effect using the provided options. Only successful
     * results will be repeated.
     *
     * @since 3.4.0
     * @experimental
     * @category repetition
     */
    <A, E, R>(self: Micro<A, E, R>, options?: {
        while?: Predicate<A> | undefined;
        times?: number | undefined;
        schedule?: MicroSchedule | undefined;
    } | undefined): Micro<A, E, R>;
};
/**
 * Replicates the given effect `n` times.
 *
 * @since 3.11.0
 * @experimental
 * @category repetition
 */
export declare const replicate: {
    /**
     * Replicates the given effect `n` times.
     *
     * @since 3.11.0
     * @experimental
     * @category repetition
     */
    (n: number): <A, E, R>(self: Micro<A, E, R>) => Array<Micro<A, E, R>>;
    /**
     * Replicates the given effect `n` times.
     *
     * @since 3.11.0
     * @experimental
     * @category repetition
     */
    <A, E, R>(self: Micro<A, E, R>, n: number): Array<Micro<A, E, R>>;
};
/**
 * Performs this effect the specified number of times and collects the
 * results.
 *
 * @since 3.11.0
 * @category repetition
 */
export declare const replicateEffect: {
    /**
     * Performs this effect the specified number of times and collects the
     * results.
     *
     * @since 3.11.0
     * @category repetition
     */
    (n: number, options?: {
        readonly concurrency?: Concurrency | undefined;
        readonly discard?: false | undefined;
    }): <A, E, R>(self: Micro<A, E, R>) => Micro<Array<A>, E, R>;
    /**
     * Performs this effect the specified number of times and collects the
     * results.
     *
     * @since 3.11.0
     * @category repetition
     */
    (n: number, options: {
        readonly concurrency?: Concurrency | undefined;
        readonly discard: true;
    }): <A, E, R>(self: Micro<A, E, R>) => Micro<void, E, R>;
    /**
     * Performs this effect the specified number of times and collects the
     * results.
     *
     * @since 3.11.0
     * @category repetition
     */
    <A, E, R>(self: Micro<A, E, R>, n: number, options?: {
        readonly concurrency?: Concurrency | undefined;
        readonly discard?: false | undefined;
    }): Micro<Array<A>, E, R>;
    /**
     * Performs this effect the specified number of times and collects the
     * results.
     *
     * @since 3.11.0
     * @category repetition
     */
    <A, E, R>(self: Micro<A, E, R>, n: number, options: {
        readonly concurrency?: Concurrency | undefined;
        readonly discard: true;
    }): Micro<void, E, R>;
};
/**
 * Repeat the given `Micro` effect forever, only stopping if the effect fails.
 *
 * @since 3.4.0
 * @experimental
 * @category repetition
 */
export declare const forever: <A, E, R>(self: Micro<A, E, R>) => Micro<never, E, R>;
/**
 * The `MicroSchedule` type represents a function that can be used to calculate
 * the delay between repeats.
 *
 * The function takes the current attempt number and the elapsed time since the
 * first attempt, and returns the delay for the next attempt. If the function
 * returns `None`, the repetition will stop.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export type MicroSchedule = (attempt: number, elapsed: number) => Option.Option<number>;
/**
 * Create a `MicroSchedule` that will stop repeating after the specified number
 * of attempts.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export declare const scheduleRecurs: (n: number) => MicroSchedule;
/**
 * Create a `MicroSchedule` that will generate a constant delay.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export declare const scheduleSpaced: (millis: number) => MicroSchedule;
/**
 * Create a `MicroSchedule` that will generate a delay with an exponential backoff.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export declare const scheduleExponential: (baseMillis: number, factor?: number) => MicroSchedule;
/**
 * Returns a new `MicroSchedule` with an added calculated delay to each delay
 * returned by this schedule.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export declare const scheduleAddDelay: {
    /**
     * Returns a new `MicroSchedule` with an added calculated delay to each delay
     * returned by this schedule.
     *
     * @since 3.4.6
     * @experimental
     * @category scheduling
     */
    (f: () => number): (self: MicroSchedule) => MicroSchedule;
    /**
     * Returns a new `MicroSchedule` with an added calculated delay to each delay
     * returned by this schedule.
     *
     * @since 3.4.6
     * @experimental
     * @category scheduling
     */
    (self: MicroSchedule, f: () => number): MicroSchedule;
};
/**
 * Transform a `MicroSchedule` to one that will have a delay that will never exceed
 * the specified maximum.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export declare const scheduleWithMaxDelay: {
    /**
     * Transform a `MicroSchedule` to one that will have a delay that will never exceed
     * the specified maximum.
     *
     * @since 3.4.6
     * @experimental
     * @category scheduling
     */
    (max: number): (self: MicroSchedule) => MicroSchedule;
    /**
     * Transform a `MicroSchedule` to one that will have a delay that will never exceed
     * the specified maximum.
     *
     * @since 3.4.6
     * @experimental
     * @category scheduling
     */
    (self: MicroSchedule, max: number): MicroSchedule;
};
/**
 * Transform a `MicroSchedule` to one that will stop repeating after the specified
 * amount of time.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export declare const scheduleWithMaxElapsed: {
    /**
     * Transform a `MicroSchedule` to one that will stop repeating after the specified
     * amount of time.
     *
     * @since 3.4.6
     * @experimental
     * @category scheduling
     */
    (max: number): (self: MicroSchedule) => MicroSchedule;
    /**
     * Transform a `MicroSchedule` to one that will stop repeating after the specified
     * amount of time.
     *
     * @since 3.4.6
     * @experimental
     * @category scheduling
     */
    (self: MicroSchedule, max: number): MicroSchedule;
};
/**
 * Combines two `MicroSchedule`s, by recurring if either schedule wants to
 * recur, using the minimum of the two durations between recurrences.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export declare const scheduleUnion: {
    /**
     * Combines two `MicroSchedule`s, by recurring if either schedule wants to
     * recur, using the minimum of the two durations between recurrences.
     *
     * @since 3.4.6
     * @experimental
     * @category scheduling
     */
    (that: MicroSchedule): (self: MicroSchedule) => MicroSchedule;
    /**
     * Combines two `MicroSchedule`s, by recurring if either schedule wants to
     * recur, using the minimum of the two durations between recurrences.
     *
     * @since 3.4.6
     * @experimental
     * @category scheduling
     */
    (self: MicroSchedule, that: MicroSchedule): MicroSchedule;
};
/**
 * Combines two `MicroSchedule`s, by recurring only if both schedules want to
 * recur, using the maximum of the two durations between recurrences.
 *
 * @since 3.4.6
 * @experimental
 * @category scheduling
 */
export declare const scheduleIntersect: {
    /**
     * Combines two `MicroSchedule`s, by recurring only if both schedules want to
     * recur, using the maximum of the two durations between recurrences.
     *
     * @since 3.4.6
     * @experimental
     * @category scheduling
     */
    (that: MicroSchedule): (self: MicroSchedule) => MicroSchedule;
    /**
     * Combines two `MicroSchedule`s, by recurring only if both schedules want to
     * recur, using the maximum of the two durations between recurrences.
     *
     * @since 3.4.6
     * @experimental
     * @category scheduling
     */
    (self: MicroSchedule, that: MicroSchedule): MicroSchedule;
};
/**
 * Catch the full `MicroCause` object of the given `Micro` effect, allowing you to
 * recover from any kind of cause.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export declare const catchAllCause: {
    /**
     * Catch the full `MicroCause` object of the given `Micro` effect, allowing you to
     * recover from any kind of cause.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <E, B, E2, R2>(f: (cause: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A | B, E2, R | R2>;
    /**
     * Catch the full `MicroCause` object of the given `Micro` effect, allowing you to
     * recover from any kind of cause.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (cause: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>): Micro<A | B, E2, R | R2>;
};
/**
 * Selectively catch a `MicroCause` object of the given `Micro` effect,
 * using the provided predicate to determine if the failure should be caught.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export declare const catchCauseIf: {
    /**
     * Selectively catch a `MicroCause` object of the given `Micro` effect,
     * using the provided predicate to determine if the failure should be caught.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <E, B, E2, R2, EB extends MicroCause<E>>(refinement: Refinement<MicroCause<E>, EB>, f: (cause: EB) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A | B, Exclude<E, MicroCause.Error<EB>> | E2, R | R2>;
    /**
     * Selectively catch a `MicroCause` object of the given `Micro` effect,
     * using the provided predicate to determine if the failure should be caught.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <E, B, E2, R2>(predicate: Predicate<MicroCause<NoInfer<E>>>, f: (cause: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A | B, E | E2, R | R2>;
    /**
     * Selectively catch a `MicroCause` object of the given `Micro` effect,
     * using the provided predicate to determine if the failure should be caught.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <A, E, R, B, E2, R2, EB extends MicroCause<E>>(self: Micro<A, E, R>, refinement: Refinement<MicroCause<E>, EB>, f: (cause: EB) => Micro<B, E2, R2>): Micro<A | B, Exclude<E, MicroCause.Error<EB>> | E2, R | R2>;
    /**
     * Selectively catch a `MicroCause` object of the given `Micro` effect,
     * using the provided predicate to determine if the failure should be caught.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <A, E, R, B, E2, R2>(self: Micro<A, E, R>, predicate: Predicate<MicroCause<NoInfer<E>>>, f: (cause: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>): Micro<A | B, E | E2, R | R2>;
};
/**
 * Catch the error of the given `Micro` effect, allowing you to recover from it.
 *
 * It only catches expected errors.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export declare const catchAll: {
    /**
     * Catch the error of the given `Micro` effect, allowing you to recover from it.
     *
     * It only catches expected errors.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <E, B, E2, R2>(f: (e: NoInfer<E>) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A | B, E2, R | R2>;
    /**
     * Catch the error of the given `Micro` effect, allowing you to recover from it.
     *
     * It only catches expected errors.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (e: NoInfer<E>) => Micro<B, E2, R2>): Micro<A | B, E2, R | R2>;
};
/**
 * Catch any unexpected errors of the given `Micro` effect, allowing you to recover from them.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export declare const catchAllDefect: {
    /**
     * Catch any unexpected errors of the given `Micro` effect, allowing you to recover from them.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <E, B, E2, R2>(f: (defect: unknown) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A | B, E | E2, R | R2>;
    /**
     * Catch any unexpected errors of the given `Micro` effect, allowing you to recover from them.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (defect: unknown) => Micro<B, E2, R2>): Micro<A | B, E | E2, R | R2>;
};
/**
 * Perform a side effect using the full `MicroCause` object of the given `Micro`.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export declare const tapErrorCause: {
    /**
     * Perform a side effect using the full `MicroCause` object of the given `Micro`.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <E, B, E2, R2>(f: (cause: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A, E | E2, R | R2>;
    /**
     * Perform a side effect using the full `MicroCause` object of the given `Micro`.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (cause: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>): Micro<A, E | E2, R | R2>;
};
/**
 * Perform a side effect using if a `MicroCause` object matches the specified
 * predicate.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export declare const tapErrorCauseIf: {
    /**
     * Perform a side effect using if a `MicroCause` object matches the specified
     * predicate.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <E, B, E2, R2, EB extends MicroCause<E>>(refinement: Refinement<MicroCause<E>, EB>, f: (a: EB) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A, E | E2, R | R2>;
    /**
     * Perform a side effect using if a `MicroCause` object matches the specified
     * predicate.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <E, B, E2, R2>(predicate: (cause: NoInfer<MicroCause<E>>) => boolean, f: (a: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A, E | E2, R | R2>;
    /**
     * Perform a side effect using if a `MicroCause` object matches the specified
     * predicate.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <A, E, R, B, E2, R2, EB extends MicroCause<E>>(self: Micro<A, E, R>, refinement: Refinement<MicroCause<E>, EB>, f: (a: EB) => Micro<B, E2, R2>): Micro<A, E | E2, R | R2>;
    /**
     * Perform a side effect using if a `MicroCause` object matches the specified
     * predicate.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <A, E, R, B, E2, R2>(self: Micro<A, E, R>, predicate: (cause: NoInfer<MicroCause<E>>) => boolean, f: (a: NoInfer<MicroCause<E>>) => Micro<B, E2, R2>): Micro<A, E | E2, R | R2>;
};
/**
 * Perform a side effect from expected errors of the given `Micro`.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export declare const tapError: {
    /**
     * Perform a side effect from expected errors of the given `Micro`.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <E, B, E2, R2>(f: (e: NoInfer<E>) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A, E | E2, R | R2>;
    /**
     * Perform a side effect from expected errors of the given `Micro`.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (e: NoInfer<E>) => Micro<B, E2, R2>): Micro<A, E | E2, R | R2>;
};
/**
 * Perform a side effect from unexpected errors of the given `Micro`.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export declare const tapDefect: {
    /**
     * Perform a side effect from unexpected errors of the given `Micro`.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <E, B, E2, R2>(f: (defect: unknown) => Micro<B, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A, E | E2, R | R2>;
    /**
     * Perform a side effect from unexpected errors of the given `Micro`.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <A, E, R, B, E2, R2>(self: Micro<A, E, R>, f: (defect: unknown) => Micro<B, E2, R2>): Micro<A, E | E2, R | R2>;
};
/**
 * Catch any expected errors that match the specified predicate.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export declare const catchIf: {
    /**
     * Catch any expected errors that match the specified predicate.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <E, EB extends E, A2, E2, R2>(refinement: Refinement<NoInfer<E>, EB>, f: (e: EB) => Micro<A2, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A2 | A, E2 | Exclude<E, EB>, R2 | R>;
    /**
     * Catch any expected errors that match the specified predicate.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <E, A2, E2, R2>(predicate: Predicate<NoInfer<E>>, f: (e: NoInfer<E>) => Micro<A2, E2, R2>): <A, R>(self: Micro<A, E, R>) => Micro<A2 | A, E | E2, R2 | R>;
    /**
     * Catch any expected errors that match the specified predicate.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <A, E, R, EB extends E, A2, E2, R2>(self: Micro<A, E, R>, refinement: Refinement<E, EB>, f: (e: EB) => Micro<A2, E2, R2>): Micro<A | A2, E2 | Exclude<E, EB>, R | R2>;
    /**
     * Catch any expected errors that match the specified predicate.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <A, E, R, A2, E2, R2>(self: Micro<A, E, R>, predicate: Predicate<E>, f: (e: E) => Micro<A2, E2, R2>): Micro<A | A2, E | E2, R | R2>;
};
/**
 * Recovers from the specified tagged error.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export declare const catchTag: {
    /**
     * Recovers from the specified tagged error.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <K extends E extends {
        _tag: string;
    } ? E["_tag"] : never, E, A1, E1, R1>(k: K, f: (e: Extract<E, {
        _tag: K;
    }>) => Micro<A1, E1, R1>): <A, R>(self: Micro<A, E, R>) => Micro<A1 | A, E1 | Exclude<E, {
        _tag: K;
    }>, R1 | R>;
    /**
     * Recovers from the specified tagged error.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <A, E, R, K extends E extends {
        _tag: string;
    } ? E["_tag"] : never, R1, E1, A1>(self: Micro<A, E, R>, k: K, f: (e: Extract<E, {
        _tag: K;
    }>) => Micro<A1, E1, R1>): Micro<A | A1, E1 | Exclude<E, {
        _tag: K;
    }>, R | R1>;
};
/**
 * Transform the full `MicroCause` object of the given `Micro` effect.
 *
 * @since 3.4.6
 * @experimental
 * @category error handling
 */
export declare const mapErrorCause: {
    /**
     * Transform the full `MicroCause` object of the given `Micro` effect.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <E, E2>(f: (e: MicroCause<E>) => MicroCause<E2>): <A, R>(self: Micro<A, E, R>) => Micro<A, E2, R>;
    /**
     * Transform the full `MicroCause` object of the given `Micro` effect.
     *
     * @since 3.4.6
     * @experimental
     * @category error handling
     */
    <A, E, R, E2>(self: Micro<A, E, R>, f: (e: MicroCause<E>) => MicroCause<E2>): Micro<A, E2, R>;
};
/**
 * Transform any expected errors of the given `Micro` effect.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export declare const mapError: {
    /**
     * Transform any expected errors of the given `Micro` effect.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <E, E2>(f: (e: E) => E2): <A, R>(self: Micro<A, E, R>) => Micro<A, E2, R>;
    /**
     * Transform any expected errors of the given `Micro` effect.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <A, E, R, E2>(self: Micro<A, E, R>, f: (e: E) => E2): Micro<A, E2, R>;
};
/**
 * Elevate any expected errors of the given `Micro` effect to unexpected errors,
 * resulting in an error type of `never`.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export declare const orDie: <A, E, R>(self: Micro<A, E, R>) => Micro<A, never, R>;
/**
 * Recover from all errors by succeeding with the given value.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export declare const orElseSucceed: {
    /**
     * Recover from all errors by succeeding with the given value.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <B>(f: LazyArg<B>): <A, E, R>(self: Micro<A, E, R>) => Micro<A | B, never, R>;
    /**
     * Recover from all errors by succeeding with the given value.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <A, E, R, B>(self: Micro<A, E, R>, f: LazyArg<B>): Micro<A | B, never, R>;
};
/**
 * Ignore any expected errors of the given `Micro` effect, returning `void`.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export declare const ignore: <A, E, R>(self: Micro<A, E, R>) => Micro<void, never, R>;
/**
 * Ignore any expected errors of the given `Micro` effect, returning `void`.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export declare const ignoreLogged: <A, E, R>(self: Micro<A, E, R>) => Micro<void, never, R>;
/**
 * Replace the success value of the given `Micro` effect with an `Option`,
 * wrapping the success value in `Some` and returning `None` if the effect fails
 * with an expected error.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export declare const option: <A, E, R>(self: Micro<A, E, R>) => Micro<Option.Option<A>, never, R>;
/**
 * Replace the success value of the given `Micro` effect with an `Either`,
 * wrapping the success value in `Right` and wrapping any expected errors with
 * a `Left`.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export declare const either: <A, E, R>(self: Micro<A, E, R>) => Micro<Either.Either<A, E>, never, R>;
/**
 * Retry the given `Micro` effect using the provided options.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export declare const retry: {
    /**
     * Retry the given `Micro` effect using the provided options.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <A, E>(options?: {
        while?: Predicate<E> | undefined;
        times?: number | undefined;
        schedule?: MicroSchedule | undefined;
    } | undefined): <R>(self: Micro<A, E, R>) => Micro<A, E, R>;
    /**
     * Retry the given `Micro` effect using the provided options.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <A, E, R>(self: Micro<A, E, R>, options?: {
        while?: Predicate<E> | undefined;
        times?: number | undefined;
        schedule?: MicroSchedule | undefined;
    } | undefined): Micro<A, E, R>;
};
/**
 * Add a stack trace to any failures that occur in the effect. The trace will be
 * added to the `traces` field of the `MicroCause` object.
 *
 * @since 3.4.0
 * @experimental
 * @category error handling
 */
export declare const withTrace: {
    /**
     * Add a stack trace to any failures that occur in the effect. The trace will be
     * added to the `traces` field of the `MicroCause` object.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    (name: string): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E, R>;
    /**
     * Add a stack trace to any failures that occur in the effect. The trace will be
     * added to the `traces` field of the `MicroCause` object.
     *
     * @since 3.4.0
     * @experimental
     * @category error handling
     */
    <A, E, R>(self: Micro<A, E, R>, name: string): Micro<A, E, R>;
};
/**
 * @since 3.4.6
 * @experimental
 * @category pattern matching
 */
export declare const matchCauseEffect: {
    /**
     * @since 3.4.6
     * @experimental
     * @category pattern matching
     */
    <E, A2, E2, R2, A, A3, E3, R3>(options: {
        readonly onFailure: (cause: MicroCause<E>) => Micro<A2, E2, R2>;
        readonly onSuccess: (a: A) => Micro<A3, E3, R3>;
    }): <R>(self: Micro<A, E, R>) => Micro<A2 | A3, E2 | E3, R2 | R3 | R>;
    /**
     * @since 3.4.6
     * @experimental
     * @category pattern matching
     */
    <A, E, R, A2, E2, R2, A3, E3, R3>(self: Micro<A, E, R>, options: {
        readonly onFailure: (cause: MicroCause<E>) => Micro<A2, E2, R2>;
        readonly onSuccess: (a: A) => Micro<A3, E3, R3>;
    }): Micro<A2 | A3, E2 | E3, R2 | R3 | R>;
};
/**
 * @since 3.4.6
 * @experimental
 * @category pattern matching
 */
export declare const matchCause: {
    /**
     * @since 3.4.6
     * @experimental
     * @category pattern matching
     */
    <E, A2, A, A3>(options: {
        readonly onFailure: (cause: MicroCause<E>) => A2;
        readonly onSuccess: (a: A) => A3;
    }): <R>(self: Micro<A, E, R>) => Micro<A2 | A3, never, R>;
    /**
     * @since 3.4.6
     * @experimental
     * @category pattern matching
     */
    <A, E, R, A2, A3>(self: Micro<A, E, R>, options: {
        readonly onFailure: (cause: MicroCause<E>) => A2;
        readonly onSuccess: (a: A) => A3;
    }): Micro<A2 | A3, never, R>;
};
/**
 * @since 3.4.6
 * @experimental
 * @category pattern matching
 */
export declare const matchEffect: {
    /**
     * @since 3.4.6
     * @experimental
     * @category pattern matching
     */
    <E, A2, E2, R2, A, A3, E3, R3>(options: {
        readonly onFailure: (e: E) => Micro<A2, E2, R2>;
        readonly onSuccess: (a: A) => Micro<A3, E3, R3>;
    }): <R>(self: Micro<A, E, R>) => Micro<A2 | A3, E2 | E3, R2 | R3 | R>;
    /**
     * @since 3.4.6
     * @experimental
     * @category pattern matching
     */
    <A, E, R, A2, E2, R2, A3, E3, R3>(self: Micro<A, E, R>, options: {
        readonly onFailure: (e: E) => Micro<A2, E2, R2>;
        readonly onSuccess: (a: A) => Micro<A3, E3, R3>;
    }): Micro<A2 | A3, E2 | E3, R2 | R3 | R>;
};
/**
 * @since 3.4.0
 * @experimental
 * @category pattern matching
 */
export declare const match: {
    /**
     * @since 3.4.0
     * @experimental
     * @category pattern matching
     */
    <E, A2, A, A3>(options: {
        readonly onFailure: (error: E) => A2;
        readonly onSuccess: (value: A) => A3;
    }): <R>(self: Micro<A, E, R>) => Micro<A2 | A3, never, R>;
    /**
     * @since 3.4.0
     * @experimental
     * @category pattern matching
     */
    <A, E, R, A2, A3>(self: Micro<A, E, R>, options: {
        readonly onFailure: (error: E) => A2;
        readonly onSuccess: (value: A) => A3;
    }): Micro<A2 | A3, never, R>;
};
/**
 * Create a `Micro` effect that will sleep for the specified duration.
 *
 * @since 3.4.0
 * @experimental
 * @category delays & timeouts
 */
export declare const sleep: (millis: number) => Micro<void>;
/**
 * Returns an effect that will delay the execution of this effect by the
 * specified duration.
 *
 * @since 3.4.0
 * @experimental
 * @category delays & timeouts
 */
export declare const delay: {
    /**
     * Returns an effect that will delay the execution of this effect by the
     * specified duration.
     *
     * @since 3.4.0
     * @experimental
     * @category delays & timeouts
     */
    (millis: number): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E, R>;
    /**
     * Returns an effect that will delay the execution of this effect by the
     * specified duration.
     *
     * @since 3.4.0
     * @experimental
     * @category delays & timeouts
     */
    <A, E, R>(self: Micro<A, E, R>, millis: number): Micro<A, E, R>;
};
/**
 * Returns an effect that will timeout this effect, that will execute the
 * fallback effect if the timeout elapses before the effect has produced a value.
 *
 * If the timeout elapses, the running effect will be safely interrupted.
 *
 * @since 3.4.0
 * @experimental
 * @category delays & timeouts
 */
export declare const timeoutOrElse: {
    /**
     * Returns an effect that will timeout this effect, that will execute the
     * fallback effect if the timeout elapses before the effect has produced a value.
     *
     * If the timeout elapses, the running effect will be safely interrupted.
     *
     * @since 3.4.0
     * @experimental
     * @category delays & timeouts
     */
    <A2, E2, R2>(options: {
        readonly duration: number;
        readonly onTimeout: LazyArg<Micro<A2, E2, R2>>;
    }): <A, E, R>(self: Micro<A, E, R>) => Micro<A | A2, E | E2, R | R2>;
    /**
     * Returns an effect that will timeout this effect, that will execute the
     * fallback effect if the timeout elapses before the effect has produced a value.
     *
     * If the timeout elapses, the running effect will be safely interrupted.
     *
     * @since 3.4.0
     * @experimental
     * @category delays & timeouts
     */
    <A, E, R, A2, E2, R2>(self: Micro<A, E, R>, options: {
        readonly duration: number;
        readonly onTimeout: LazyArg<Micro<A2, E2, R2>>;
    }): Micro<A | A2, E | E2, R | R2>;
};
/**
 * Returns an effect that will timeout this effect, that will fail with a
 * `TimeoutException` if the timeout elapses before the effect has produced a
 * value.
 *
 * If the timeout elapses, the running effect will be safely interrupted.
 *
 * @since 3.4.0
 * @experimental
 * @category delays & timeouts
 */
export declare const timeout: {
    /**
     * Returns an effect that will timeout this effect, that will fail with a
     * `TimeoutException` if the timeout elapses before the effect has produced a
     * value.
     *
     * If the timeout elapses, the running effect will be safely interrupted.
     *
     * @since 3.4.0
     * @experimental
     * @category delays & timeouts
     */
    (millis: number): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E | TimeoutException, R>;
    /**
     * Returns an effect that will timeout this effect, that will fail with a
     * `TimeoutException` if the timeout elapses before the effect has produced a
     * value.
     *
     * If the timeout elapses, the running effect will be safely interrupted.
     *
     * @since 3.4.0
     * @experimental
     * @category delays & timeouts
     */
    <A, E, R>(self: Micro<A, E, R>, millis: number): Micro<A, E | TimeoutException, R>;
};
/**
 * Returns an effect that will timeout this effect, succeeding with a `None`
 * if the timeout elapses before the effect has produced a value; and `Some` of
 * the produced value otherwise.
 *
 * If the timeout elapses, the running effect will be safely interrupted.
 *
 * @since 3.4.0
 * @experimental
 * @category delays & timeouts
 */
export declare const timeoutOption: {
    /**
     * Returns an effect that will timeout this effect, succeeding with a `None`
     * if the timeout elapses before the effect has produced a value; and `Some` of
     * the produced value otherwise.
     *
     * If the timeout elapses, the running effect will be safely interrupted.
     *
     * @since 3.4.0
     * @experimental
     * @category delays & timeouts
     */
    (millis: number): <A, E, R>(self: Micro<A, E, R>) => Micro<Option.Option<A>, E, R>;
    /**
     * Returns an effect that will timeout this effect, succeeding with a `None`
     * if the timeout elapses before the effect has produced a value; and `Some` of
     * the produced value otherwise.
     *
     * If the timeout elapses, the running effect will be safely interrupted.
     *
     * @since 3.4.0
     * @experimental
     * @category delays & timeouts
     */
    <A, E, R>(self: Micro<A, E, R>, millis: number): Micro<Option.Option<A>, E, R>;
};
/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export declare const MicroScopeTypeId: unique symbol;
/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export type MicroScopeTypeId = typeof MicroScopeTypeId;
/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export interface MicroScope {
    readonly [MicroScopeTypeId]: MicroScopeTypeId;
    readonly addFinalizer: (finalizer: (exit: MicroExit<unknown, unknown>) => Micro<void>) => Micro<void>;
    readonly fork: Micro<MicroScope.Closeable>;
}
/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export declare namespace MicroScope {
    /**
     * @since 3.4.0
     * @experimental
     * @category resources & finalization
     */
    interface Closeable extends MicroScope {
        readonly close: (exit: MicroExit<any, any>) => Micro<void>;
    }
}
/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export declare const MicroScope: Context.Tag<MicroScope, MicroScope>;
/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export declare const scopeMake: Micro<MicroScope.Closeable>;
/**
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export declare const scopeUnsafeMake: () => MicroScope.Closeable;
/**
 * Access the current `MicroScope`.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export declare const scope: Micro<MicroScope, never, MicroScope>;
/**
 * Provide a `MicroScope` to an effect.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export declare const provideScope: {
    /**
     * Provide a `MicroScope` to an effect.
     *
     * @since 3.4.0
     * @experimental
     * @category resources & finalization
     */
    (scope: MicroScope): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E, Exclude<R, MicroScope>>;
    /**
     * Provide a `MicroScope` to an effect.
     *
     * @since 3.4.0
     * @experimental
     * @category resources & finalization
     */
    <A, E, R>(self: Micro<A, E, R>, scope: MicroScope): Micro<A, E, Exclude<R, MicroScope>>;
};
/**
 * Provide a `MicroScope` to the given effect, closing it after the effect has
 * finished executing.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export declare const scoped: <A, E, R>(self: Micro<A, E, R>) => Micro<A, E, Exclude<R, MicroScope>>;
/**
 * Create a resource with a cleanup `Micro` effect, ensuring the cleanup is
 * executed when the `MicroScope` is closed.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export declare const acquireRelease: <A, E, R>(acquire: Micro<A, E, R>, release: (a: A, exit: MicroExit<unknown, unknown>) => Micro<void>) => Micro<A, E, R | MicroScope>;
/**
 * Add a finalizer to the current `MicroScope`.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export declare const addFinalizer: (finalizer: (exit: MicroExit<unknown, unknown>) => Micro<void>) => Micro<void, never, MicroScope>;
/**
 * When the `Micro` effect is completed, run the given finalizer effect with the
 * `MicroExit` of the executed effect.
 *
 * @since 3.4.6
 * @experimental
 * @category resources & finalization
 */
export declare const onExit: {
    /**
     * When the `Micro` effect is completed, run the given finalizer effect with the
     * `MicroExit` of the executed effect.
     *
     * @since 3.4.6
     * @experimental
     * @category resources & finalization
     */
    <A, E, XE, XR>(f: (exit: MicroExit<A, E>) => Micro<void, XE, XR>): <R>(self: Micro<A, E, R>) => Micro<A, E | XE, R | XR>;
    /**
     * When the `Micro` effect is completed, run the given finalizer effect with the
     * `MicroExit` of the executed effect.
     *
     * @since 3.4.6
     * @experimental
     * @category resources & finalization
     */
    <A, E, R, XE, XR>(self: Micro<A, E, R>, f: (exit: MicroExit<A, E>) => Micro<void, XE, XR>): Micro<A, E | XE, R | XR>;
};
/**
 * Regardless of the result of the this `Micro` effect, run the finalizer effect.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export declare const ensuring: {
    /**
     * Regardless of the result of the this `Micro` effect, run the finalizer effect.
     *
     * @since 3.4.0
     * @experimental
     * @category resources & finalization
     */
    <XE, XR>(finalizer: Micro<void, XE, XR>): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E | XE, R | XR>;
    /**
     * Regardless of the result of the this `Micro` effect, run the finalizer effect.
     *
     * @since 3.4.0
     * @experimental
     * @category resources & finalization
     */
    <A, E, R, XE, XR>(self: Micro<A, E, R>, finalizer: Micro<void, XE, XR>): Micro<A, E | XE, R | XR>;
};
/**
 * When the `Micro` effect is completed, run the given finalizer effect if it
 * matches the specified predicate.
 *
 * @since 3.4.6
 * @experimental
 * @category resources & finalization
 */
export declare const onExitIf: {
    /**
     * When the `Micro` effect is completed, run the given finalizer effect if it
     * matches the specified predicate.
     *
     * @since 3.4.6
     * @experimental
     * @category resources & finalization
     */
    <A, E, XE, XR, B extends MicroExit<A, E>>(refinement: Refinement<MicroExit<A, E>, B>, f: (exit: B) => Micro<void, XE, XR>): <R>(self: Micro<A, E, R>) => Micro<A, E | XE, R | XR>;
    /**
     * When the `Micro` effect is completed, run the given finalizer effect if it
     * matches the specified predicate.
     *
     * @since 3.4.6
     * @experimental
     * @category resources & finalization
     */
    <A, E, XE, XR>(predicate: Predicate<MicroExit<NoInfer<A>, NoInfer<E>>>, f: (exit: MicroExit<NoInfer<A>, NoInfer<E>>) => Micro<void, XE, XR>): <R>(self: Micro<A, E, R>) => Micro<A, E | XE, R | XR>;
    /**
     * When the `Micro` effect is completed, run the given finalizer effect if it
     * matches the specified predicate.
     *
     * @since 3.4.6
     * @experimental
     * @category resources & finalization
     */
    <A, E, R, XE, XR, B extends MicroExit<A, E>>(self: Micro<A, E, R>, refinement: Refinement<MicroExit<A, E>, B>, f: (exit: B) => Micro<void, XE, XR>): Micro<A, E | XE, R | XR>;
    /**
     * When the `Micro` effect is completed, run the given finalizer effect if it
     * matches the specified predicate.
     *
     * @since 3.4.6
     * @experimental
     * @category resources & finalization
     */
    <A, E, R, XE, XR>(self: Micro<A, E, R>, predicate: Predicate<MicroExit<NoInfer<A>, NoInfer<E>>>, f: (exit: MicroExit<NoInfer<A>, NoInfer<E>>) => Micro<void, XE, XR>): Micro<A, E | XE, R | XR>;
};
/**
 * When the `Micro` effect fails, run the given finalizer effect with the
 * `MicroCause` of the executed effect.
 *
 * @since 3.4.6
 * @experimental
 * @category resources & finalization
 */
export declare const onError: {
    /**
     * When the `Micro` effect fails, run the given finalizer effect with the
     * `MicroCause` of the executed effect.
     *
     * @since 3.4.6
     * @experimental
     * @category resources & finalization
     */
    <A, E, XE, XR>(f: (cause: MicroCause<NoInfer<E>>) => Micro<void, XE, XR>): <R>(self: Micro<A, E, R>) => Micro<A, E | XE, R | XR>;
    /**
     * When the `Micro` effect fails, run the given finalizer effect with the
     * `MicroCause` of the executed effect.
     *
     * @since 3.4.6
     * @experimental
     * @category resources & finalization
     */
    <A, E, R, XE, XR>(self: Micro<A, E, R>, f: (cause: MicroCause<NoInfer<E>>) => Micro<void, XE, XR>): Micro<A, E | XE, R | XR>;
};
/**
 * If this `Micro` effect is aborted, run the finalizer effect.
 *
 * @since 3.4.6
 * @experimental
 * @category resources & finalization
 */
export declare const onInterrupt: {
    /**
     * If this `Micro` effect is aborted, run the finalizer effect.
     *
     * @since 3.4.6
     * @experimental
     * @category resources & finalization
     */
    <XE, XR>(finalizer: Micro<void, XE, XR>): <A, E, R>(self: Micro<A, E, R>) => Micro<A, E | XE, R | XR>;
    /**
     * If this `Micro` effect is aborted, run the finalizer effect.
     *
     * @since 3.4.6
     * @experimental
     * @category resources & finalization
     */
    <A, E, R, XE, XR>(self: Micro<A, E, R>, finalizer: Micro<void, XE, XR>): Micro<A, E | XE, R | XR>;
};
/**
 * Acquire a resource, use it, and then release the resource when the `use`
 * effect has completed.
 *
 * @since 3.4.0
 * @experimental
 * @category resources & finalization
 */
export declare const acquireUseRelease: <Resource, E, R, A, E2, R2, E3, R3>(acquire: Micro<Resource, E, R>, use: (a: Resource) => Micro<A, E2, R2>, release: (a: Resource, exit: MicroExit<A, E2>) => Micro<void, E3, R3>) => Micro<A, E | E2 | E3, R | R2 | R3>;
/**
 * Abort the current `Micro` effect.
 *
 * @since 3.4.6
 * @experimental
 * @category interruption
 */
export declare const interrupt: Micro<never>;
/**
 * Flag the effect as uninterruptible, which means that when the effect is
 * interrupted, it will be allowed to continue running until completion.
 *
 * @since 3.4.0
 * @experimental
 * @category flags
 */
export declare const uninterruptible: <A, E, R>(self: Micro<A, E, R>) => Micro<A, E, R>;
/**
 * Flag the effect as interruptible, which means that when the effect is
 * interrupted, it will be interrupted immediately.
 *
 * @since 3.4.0
 * @experimental
 * @category flags
 */
export declare const interruptible: <A, E, R>(self: Micro<A, E, R>) => Micro<A, E, R>;
/**
 * Wrap the given `Micro` effect in an uninterruptible region, preventing the
 * effect from being aborted.
 *
 * You can use the `restore` function to restore a `Micro` effect to the
 * interruptibility state before the `uninterruptibleMask` was applied.
 *
 * @example
 * ```ts
 * import * as Micro from "effect/Micro"
 *
 * Micro.uninterruptibleMask((restore) =>
 *   Micro.sleep(1000).pipe( // uninterruptible
 *     Micro.andThen(restore(Micro.sleep(1000))) // interruptible
 *   )
 * )
 * ```
 *
 * @since 3.4.0
 * @experimental
 * @category interruption
 */
export declare const uninterruptibleMask: <A, E, R>(f: (restore: <A_1, E_1, R_1>(effect: Micro<A_1, E_1, R_1>) => Micro<A_1, E_1, R_1>) => Micro<A, E, R>) => Micro<A, E, R>;
/**
 * @since 3.4.0
 * @experimental
 */
export declare namespace All {
    /**
     * @since 3.4.0
     * @experimental
     */
    type MicroAny = Micro<any, any, any>;
    /**
     * @since 3.4.0
     * @experimental
     */
    type ReturnIterable<T extends Iterable<MicroAny>, Discard extends boolean> = [T] extends [
        Iterable<Micro<infer A, infer E, infer R>>
    ] ? Micro<Discard extends true ? void : Array<A>, E, R> : never;
    /**
     * @since 3.4.0
     * @experimental
     */
    type ReturnTuple<T extends ReadonlyArray<unknown>, Discard extends boolean> = Micro<Discard extends true ? void : T[number] extends never ? [] : {
        -readonly [K in keyof T]: T[K] extends Micro<infer _A, infer _E, infer _R> ? _A : never;
    }, T[number] extends never ? never : T[number] extends Micro<infer _A, infer _E, infer _R> ? _E : never, T[number] extends never ? never : T[number] extends Micro<infer _A, infer _E, infer _R> ? _R : never> extends infer X ? X : never;
    /**
     * @since 3.4.0
     * @experimental
     */
    type ReturnObject<T, Discard extends boolean> = [T] extends [{
        [K: string]: MicroAny;
    }] ? Micro<Discard extends true ? void : {
        -readonly [K in keyof T]: [T[K]] extends [Micro<infer _A, infer _E, infer _R>] ? _A : never;
    }, keyof T extends never ? never : T[keyof T] extends Micro<infer _A, infer _E, infer _R> ? _E : never, keyof T extends never ? never : T[keyof T] extends Micro<infer _A, infer _E, infer _R> ? _R : never> : never;
    /**
     * @since 3.4.0
     * @experimental
     */
    type IsDiscard<A> = [Extract<A, {
        readonly discard: true;
    }>] extends [never] ? false : true;
    /**
     * @since 3.4.0
     * @experimental
     */
    type Return<Arg extends Iterable<MicroAny> | Record<string, MicroAny>, O extends NoExcessProperties<{
        readonly concurrency?: Concurrency | undefined;
        readonly discard?: boolean | undefined;
    }, O>> = [Arg] extends [ReadonlyArray<MicroAny>] ? ReturnTuple<Arg, IsDiscard<O>> : [Arg] extends [Iterable<MicroAny>] ? ReturnIterable<Arg, IsDiscard<O>> : [Arg] extends [Record<string, MicroAny>] ? ReturnObject<Arg, IsDiscard<O>> : never;
}
/**
 * Runs all the provided effects in sequence respecting the structure provided in input.
 *
 * Supports multiple arguments, a single argument tuple / array or record / struct.
 *
 * @since 3.4.0
 * @experimental
 * @category collecting & elements
 */
export declare const all: <const Arg extends Iterable<Micro<any, any, any>> | Record<string, Micro<any, any, any>>, O extends NoExcessProperties<{
    readonly concurrency?: Concurrency | undefined;
    readonly discard?: boolean | undefined;
}, O>>(arg: Arg, options?: O) => All.Return<Arg, O>;
/**
 * @since 3.11.0
 * @experimental
 * @category collecting & elements
 */
export declare const whileLoop: <A, E, R>(options: {
    readonly while: LazyArg<boolean>;
    readonly body: LazyArg<Micro<A, E, R>>;
    readonly step: (a: A) => void;
}) => Micro<void, E, R>;
/**
 * For each element of the provided iterable, run the effect and collect the
 * results.
 *
 * If the `discard` option is set to `true`, the results will be discarded and
 * the effect will return `void`.
 *
 * The `concurrency` option can be set to control how many effects are run
 * concurrently. By default, the effects are run sequentially.
 *
 * @since 3.4.0
 * @experimental
 * @category collecting & elements
 */
export declare const forEach: {
    /**
     * For each element of the provided iterable, run the effect and collect the
     * results.
     *
     * If the `discard` option is set to `true`, the results will be discarded and
     * the effect will return `void`.
     *
     * The `concurrency` option can be set to control how many effects are run
     * concurrently. By default, the effects are run sequentially.
     *
     * @since 3.4.0
     * @experimental
     * @category collecting & elements
     */
    <A, B, E, R>(iterable: Iterable<A>, f: (a: A, index: number) => Micro<B, E, R>, options?: {
        readonly concurrency?: Concurrency | undefined;
        readonly discard?: false | undefined;
    }): Micro<Array<B>, E, R>;
    /**
     * For each element of the provided iterable, run the effect and collect the
     * results.
     *
     * If the `discard` option is set to `true`, the results will be discarded and
     * the effect will return `void`.
     *
     * The `concurrency` option can be set to control how many effects are run
     * concurrently. By default, the effects are run sequentially.
     *
     * @since 3.4.0
     * @experimental
     * @category collecting & elements
     */
    <A, B, E, R>(iterable: Iterable<A>, f: (a: A, index: number) => Micro<B, E, R>, options: {
        readonly concurrency?: Concurrency | undefined;
        readonly discard: true;
    }): Micro<void, E, R>;
};
/**
 * Effectfully filter the elements of the provided iterable.
 *
 * Use the `concurrency` option to control how many elements are processed
 * concurrently.
 *
 * @since 3.4.0
 * @experimental
 * @category collecting & elements
 */
export declare const filter: <A, E, R>(iterable: Iterable<A>, f: (a: NoInfer<A>) => Micro<boolean, E, R>, options?: {
    readonly concurrency?: Concurrency | undefined;
    readonly negate?: boolean | undefined;
}) => Micro<Array<A>, E, R>;
/**
 * Effectfully filter the elements of the provided iterable.
 *
 * Use the `concurrency` option to control how many elements are processed
 * concurrently.
 *
 * @since 3.4.0
 * @experimental
 * @category collecting & elements
 */
export declare const filterMap: <A, B, E, R>(iterable: Iterable<A>, f: (a: NoInfer<A>) => Micro<Option.Option<B>, E, R>, options?: {
    readonly concurrency?: Concurrency | undefined;
}) => Micro<Array<B>, E, R>;
/**
 * Start a do notation block.
 *
 * @since 3.4.0
 * @experimental
 * @category do notation
 */
export declare const Do: Micro<{}>;
/**
 * Bind the success value of this `Micro` effect to the provided name.
 *
 * @since 3.4.0
 * @experimental
 * @category do notation
 */
export declare const bindTo: {
    /**
     * Bind the success value of this `Micro` effect to the provided name.
     *
     * @since 3.4.0
     * @experimental
     * @category do notation
     */
    <N extends string>(name: N): <A, E, R>(self: Micro<A, E, R>) => Micro<{
        [K in N]: A;
    }, E, R>;
    /**
     * Bind the success value of this `Micro` effect to the provided name.
     *
     * @since 3.4.0
     * @experimental
     * @category do notation
     */
    <A, E, R, N extends string>(self: Micro<A, E, R>, name: N): Micro<{
        [K in N]: A;
    }, E, R>;
};
/**
 * Bind the success value of this `Micro` effect to the provided name.
 *
 * @since 3.4.0
 * @experimental
 * @category do notation
 */
export declare const bind: {
    /**
     * Bind the success value of this `Micro` effect to the provided name.
     *
     * @since 3.4.0
     * @experimental
     * @category do notation
     */
    <N extends string, A extends Record<string, any>, B, E2, R2>(name: N, f: (a: NoInfer<A>) => Micro<B, E2, R2>): <E, R>(self: Micro<A, E, R>) => Micro<Simplify<Omit<A, N> & {
        [K in N]: B;
    }>, E | E2, R | R2>;
    /**
     * Bind the success value of this `Micro` effect to the provided name.
     *
     * @since 3.4.0
     * @experimental
     * @category do notation
     */
    <A extends Record<string, any>, E, R, B, E2, R2, N extends string>(self: Micro<A, E, R>, name: N, f: (a: NoInfer<A>) => Micro<B, E2, R2>): Micro<Simplify<Omit<A, N> & {
        [K in N]: B;
    }>, E | E2, R | R2>;
};
declare const let_: {
    <N extends string, A extends Record<string, any>, B>(name: N, f: (a: NoInfer<A>) => B): <E, R>(self: Micro<A, E, R>) => Micro<Simplify<Omit<A, N> & {
        [K in N]: B;
    }>, E, R>;
    <A extends Record<string, any>, E, R, B, N extends string>(self: Micro<A, E, R>, name: N, f: (a: NoInfer<A>) => B): Micro<Simplify<Omit<A, N> & {
        [K in N]: B;
    }>, E, R>;
};
export { 
/**
 * Bind the result of a synchronous computation to the given name.
 *
 * @since 3.4.0
 * @experimental
 * @category do notation
 */
let_ as let };
/**
 * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
 * aborted.
 *
 * When the parent `Micro` finishes, this `Micro` will be aborted.
 *
 * @since 3.4.0
 * @experimental
 * @category fiber & forking
 */
export declare const fork: <A, E, R>(self: Micro<A, E, R>) => Micro<MicroFiber<A, E>, never, R>;
/**
 * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
 * aborted.
 *
 * It will not be aborted when the parent `Micro` finishes.
 *
 * @since 3.4.0
 * @experimental
 * @category fiber & forking
 */
export declare const forkDaemon: <A, E, R>(self: Micro<A, E, R>) => Micro<MicroFiber<A, E>, never, R>;
/**
 * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
 * aborted.
 *
 * The lifetime of the handle will be attached to the provided `MicroScope`.
 *
 * @since 3.4.0
 * @experimental
 * @category fiber & forking
 */
export declare const forkIn: {
    /**
     * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
     * aborted.
     *
     * The lifetime of the handle will be attached to the provided `MicroScope`.
     *
     * @since 3.4.0
     * @experimental
     * @category fiber & forking
     */
    (scope: MicroScope): <A, E, R>(self: Micro<A, E, R>) => Micro<MicroFiber<A, E>, never, R>;
    /**
     * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
     * aborted.
     *
     * The lifetime of the handle will be attached to the provided `MicroScope`.
     *
     * @since 3.4.0
     * @experimental
     * @category fiber & forking
     */
    <A, E, R>(self: Micro<A, E, R>, scope: MicroScope): Micro<MicroFiber<A, E>, never, R>;
};
/**
 * Run the `Micro` effect in a new `MicroFiber` that can be awaited, joined, or
 * aborted.
 *
 * The lifetime of the handle will be attached to the current `MicroScope`.
 *
 * @since 3.4.0
 * @experimental
 * @category fiber & forking
 */
export declare const forkScoped: <A, E, R>(self: Micro<A, E, R>) => Micro<MicroFiber<A, E>, never, R | MicroScope>;
/**
 * Execute the `Micro` effect and return a `MicroFiber` that can be awaited, joined,
 * or aborted.
 *
 * You can listen for the result by adding an observer using the handle's
 * `addObserver` method.
 *
 * @example
 * ```ts
 * import * as Micro from "effect/Micro"
 *
 * const handle = Micro.succeed(42).pipe(
 *   Micro.delay(1000),
 *   Micro.runFork
 * )
 *
 * handle.addObserver((exit) => {
 *   console.log(exit)
 * })
 * ```
 *
 * @since 3.4.0
 * @experimental
 * @category execution
 */
export declare const runFork: <A, E>(effect: Micro<A, E>, options?: {
    readonly signal?: AbortSignal | undefined;
    readonly scheduler?: MicroScheduler | undefined;
} | undefined) => MicroFiberImpl<A, E>;
/**
 * Execute the `Micro` effect and return a `Promise` that resolves with the
 * `MicroExit` of the computation.
 *
 * @since 3.4.6
 * @experimental
 * @category execution
 */
export declare const runPromiseExit: <A, E>(effect: Micro<A, E>, options?: {
    readonly signal?: AbortSignal | undefined;
    readonly scheduler?: MicroScheduler | undefined;
} | undefined) => Promise<MicroExit<A, E>>;
/**
 * Execute the `Micro` effect and return a `Promise` that resolves with the
 * successful value of the computation.
 *
 * @since 3.4.0
 * @experimental
 * @category execution
 */
export declare const runPromise: <A, E>(effect: Micro<A, E>, options?: {
    readonly signal?: AbortSignal | undefined;
    readonly scheduler?: MicroScheduler | undefined;
} | undefined) => Promise<A>;
/**
 * Attempt to execute the `Micro` effect synchronously and return the `MicroExit`.
 *
 * If any asynchronous effects are encountered, the function will return a
 * `CauseDie` containing the `MicroFiber`.
 *
 * @since 3.4.6
 * @experimental
 * @category execution
 */
export declare const runSyncExit: <A, E>(effect: Micro<A, E>) => MicroExit<A, E>;
/**
 * Attempt to execute the `Micro` effect synchronously and return the success
 * value.
 *
 * @since 3.4.0
 * @experimental
 * @category execution
 */
export declare const runSync: <A, E>(effect: Micro<A, E>) => A;
/**
 * @since 3.4.0
 * @experimental
 * @category errors
 */
export interface YieldableError extends Pipeable, Inspectable, Readonly<Error> {
    readonly [Effectable.EffectTypeId]: Effect.VarianceStruct<never, this, never>;
    readonly [Effectable.StreamTypeId]: Stream.VarianceStruct<never, this, never>;
    readonly [Effectable.SinkTypeId]: Sink.VarianceStruct<never, unknown, never, this, never>;
    readonly [Effectable.ChannelTypeId]: Channel.VarianceStruct<never, unknown, this, unknown, never, unknown, never>;
    readonly [TypeId]: Micro.Variance<never, this, never>;
    [Symbol.iterator](): MicroIterator<Micro<never, this, never>>;
}
/**
 * @since 3.4.0
 * @experimental
 * @category errors
 */
export declare const Error: new <A extends Record<string, any> = {}>(args: Equals<A, {}> extends true ? void : {
    readonly [P in keyof A]: A[P];
}) => YieldableError & Readonly<A>;
/**
 * @since 3.4.0
 * @experimental
 * @category errors
 */
export declare const TaggedError: <Tag extends string>(tag: Tag) => new <A extends Record<string, any> = {}>(args: Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => YieldableError & {
    readonly _tag: Tag;
} & Readonly<A>;
declare const NoSuchElementException_base: new <A extends Record<string, any> = {}>(args: Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => YieldableError & {
    readonly _tag: "NoSuchElementException";
} & Readonly<A>;
/**
 * Represents a checked exception which occurs when an expected element was
 * unable to be found.
 *
 * @since 3.4.4
 * @experimental
 * @category errors
 */
export declare class NoSuchElementException extends NoSuchElementException_base<{
    message?: string | undefined;
}> {
}
declare const TimeoutException_base: new <A extends Record<string, any> = {}>(args: Equals<A, {}> extends true ? void : { readonly [P in keyof A as P extends "_tag" ? never : P]: A[P]; }) => YieldableError & {
    readonly _tag: "TimeoutException";
} & Readonly<A>;
/**
 * Represents a checked exception which occurs when a timeout occurs.
 *
 * @since 3.4.4
 * @experimental
 * @category errors
 */
export declare class TimeoutException extends TimeoutException_base {
}
//# sourceMappingURL=Micro.d.ts.map