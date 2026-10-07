/**
 * @since 2.0.0
 */
import type * as Cause from "./Cause.js";
import type * as Channel from "./Channel.js";
import type * as Chunk from "./Chunk.js";
import type * as Context from "./Context.js";
import type * as Duration from "./Duration.js";
import type * as Effect from "./Effect.js";
import type * as Either from "./Either.js";
import type * as Exit from "./Exit.js";
import type { LazyArg } from "./Function.js";
import type * as HashMap from "./HashMap.js";
import type * as HashSet from "./HashSet.js";
import type * as MergeDecision from "./MergeDecision.js";
import type * as Option from "./Option.js";
import type { Pipeable } from "./Pipeable.js";
import type { Predicate, Refinement } from "./Predicate.js";
import type * as PubSub from "./PubSub.js";
import type * as Queue from "./Queue.js";
import type * as Scope from "./Scope.js";
import type * as Types from "./Types.js";
import type * as Unify from "./Unify.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const SinkTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type SinkTypeId = typeof SinkTypeId;
/**
 * A `Sink<A, In, L, E, R>` is used to consume elements produced by a `Stream`.
 * You can think of a sink as a function that will consume a variable amount of
 * `In` elements (could be 0, 1, or many), might fail with an error of type `E`,
 * and will eventually yield a value of type `A` together with a remainder of
 * type `L` (i.e. any leftovers).
 *
 * @since 2.0.0
 * @category models
 */
export interface Sink<out A, in In = unknown, out L = never, out E = never, out R = never> extends Sink.Variance<A, In, L, E, R>, Pipeable {
}
/**
 * @since 2.0.0
 * @category models
 */
export interface SinkUnify<A extends {
    [Unify.typeSymbol]?: any;
}> extends Effect.EffectUnify<A> {
    Sink?: () => A[Unify.typeSymbol] extends Sink<infer A, infer In, infer L, infer E, infer R> | infer _ ? Sink<A, In, L, E, R> : never;
}
/**
 * @category models
 * @since 2.0.0
 */
export interface SinkUnifyIgnore extends Effect.EffectUnifyIgnore {
    Sink?: true;
}
/**
 * @since 2.0.0
 * @category models
 */
declare module "./Effect.js" {
    interface Effect<A, E, R> extends Sink<A, unknown, never, E, R> {
    }
    interface EffectUnifyIgnore {
        Sink?: true;
    }
}
/**
 * @since 2.0.0
 */
export declare namespace Sink {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<out A, in In, out L, out E, out R> {
        readonly [SinkTypeId]: VarianceStruct<A, In, L, E, R>;
    }
    /**
     * @since 2.0.0
     * @category models
     */
    interface VarianceStruct<out A, in In, out L, out E, out R> {
        _A: Types.Covariant<A>;
        _In: Types.Contravariant<In>;
        _L: Types.Covariant<L>;
        _E: Types.Covariant<E>;
        _R: Types.Covariant<R>;
    }
}
/**
 * Replaces this sink's result with the provided value.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const as: {
    /**
     * Replaces this sink's result with the provided value.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A2>(a: A2): <A, In, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A2, In, L, E, R>;
    /**
     * Replaces this sink's result with the provided value.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, In, L, E, R, A2>(self: Sink<A, In, L, E, R>, a: A2): Sink<A2, In, L, E, R>;
};
/**
 * A sink that collects all elements into a `Chunk`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const collectAll: <In>() => Sink<Chunk.Chunk<In>, In>;
/**
 * A sink that collects first `n` elements into a chunk.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const collectAllN: <In>(n: number) => Sink<Chunk.Chunk<In>, In, In>;
/**
 * Repeatedly runs the sink and accumulates its results into a `Chunk`.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const collectAllFrom: <A, In, L extends In, E, R>(self: Sink<A, In, L, E, R>) => Sink<Chunk.Chunk<A>, In, L, E, R>;
/**
 * A sink that collects all of its inputs into a map. The keys are extracted
 * from inputs using the keying function `key`; if multiple inputs use the
 * same key, they are merged using the `merge` function.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const collectAllToMap: <In, K>(key: (input: In) => K, merge: (x: In, y: In) => In) => Sink<HashMap.HashMap<K, In>, In>;
/**
 * A sink that collects first `n` keys into a map. The keys are calculated
 * from inputs using the keying function `key`; if multiple inputs use the the
 * same key, they are merged using the `merge` function.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const collectAllToMapN: <In, K>(n: number, key: (input: In) => K, merge: (x: In, y: In) => In) => Sink<HashMap.HashMap<K, In>, In, In>;
/**
 * A sink that collects all of its inputs into a set.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const collectAllToSet: <In>() => Sink<HashSet.HashSet<In>, In>;
/**
 * A sink that collects first `n` distinct inputs into a set.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const collectAllToSetN: <In>(n: number) => Sink<HashSet.HashSet<In>, In, In>;
/**
 * Accumulates incoming elements into a chunk until predicate `p` is
 * satisfied.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const collectAllUntil: <In>(p: Predicate<In>) => Sink<Chunk.Chunk<In>, In, In>;
/**
 * Accumulates incoming elements into a chunk until effectful predicate `p` is
 * satisfied.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const collectAllUntilEffect: <In, E, R>(p: (input: In) => Effect.Effect<boolean, E, R>) => Sink<Chunk.Chunk<In>, In, In, E, R>;
/**
 * Accumulates incoming elements into a chunk as long as they verify predicate
 * `p`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const collectAllWhile: {
    /**
     * Accumulates incoming elements into a chunk as long as they verify predicate
     * `p`.
     *
     * @since 2.0.0
     * @category constructors
     */
    <In, Out extends In>(refinement: Refinement<In, Out>): Sink<Chunk.Chunk<Out>, In, In>;
    /**
     * Accumulates incoming elements into a chunk as long as they verify predicate
     * `p`.
     *
     * @since 2.0.0
     * @category constructors
     */
    <In>(predicate: Predicate<In>): Sink<Chunk.Chunk<In>, In, In>;
};
/**
 * Accumulates incoming elements into a chunk as long as they verify effectful
 * predicate `p`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const collectAllWhileEffect: <In, E, R>(predicate: (input: In) => Effect.Effect<boolean, E, R>) => Sink<Chunk.Chunk<In>, In, In, E, R>;
/**
 * Repeatedly runs the sink for as long as its results satisfy the predicate
 * `p`. The sink's results will be accumulated using the stepping function `f`.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const collectAllWhileWith: {
    /**
     * Repeatedly runs the sink for as long as its results satisfy the predicate
     * `p`. The sink's results will be accumulated using the stepping function `f`.
     *
     * @since 2.0.0
     * @category utils
     */
    <A, S>(options: {
        readonly initial: S;
        readonly while: Predicate<A>;
        readonly body: (s: S, a: A) => S;
    }): <In, L extends In, E, R>(self: Sink<A, In, L, E, R>) => Sink<S, In, L, E, R>;
    /**
     * Repeatedly runs the sink for as long as its results satisfy the predicate
     * `p`. The sink's results will be accumulated using the stepping function `f`.
     *
     * @since 2.0.0
     * @category utils
     */
    <A, In, L extends In, E, R, S>(self: Sink<A, In, L, E, R>, options: {
        readonly initial: S;
        readonly while: Predicate<A>;
        readonly body: (s: S, a: A) => S;
    }): Sink<S, In, L, E, R>;
};
/**
 * Collects the leftovers from the stream when the sink succeeds and returns
 * them as part of the sink's result.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const collectLeftover: <A, In, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<[A, Chunk.Chunk<L>], In, never, E, R>;
/**
 * Transforms this sink's input elements.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const mapInput: {
    /**
     * Transforms this sink's input elements.
     *
     * @since 2.0.0
     * @category mapping
     */
    <In0, In>(f: (input: In0) => In): <A, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A, In0, L, E, R>;
    /**
     * Transforms this sink's input elements.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, In, L, E, R, In0>(self: Sink<A, In, L, E, R>, f: (input: In0) => In): Sink<A, In0, L, E, R>;
};
/**
 * Effectfully transforms this sink's input elements.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const mapInputEffect: {
    /**
     * Effectfully transforms this sink's input elements.
     *
     * @since 2.0.0
     * @category mapping
     */
    <In0, In, E2, R2>(f: (input: In0) => Effect.Effect<In, E2, R2>): <A, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A, In0, L, E2 | E, R2 | R>;
    /**
     * Effectfully transforms this sink's input elements.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, In, L, E, R, In0, E2, R2>(self: Sink<A, In, L, E, R>, f: (input: In0) => Effect.Effect<In, E2, R2>): Sink<A, In0, L, E | E2, R | R2>;
};
/**
 * Transforms this sink's input chunks. `f` must preserve chunking-invariance.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const mapInputChunks: {
    /**
     * Transforms this sink's input chunks. `f` must preserve chunking-invariance.
     *
     * @since 2.0.0
     * @category mapping
     */
    <In0, In>(f: (chunk: Chunk.Chunk<In0>) => Chunk.Chunk<In>): <A, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A, In0, L, E, R>;
    /**
     * Transforms this sink's input chunks. `f` must preserve chunking-invariance.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, In, L, E, R, In0>(self: Sink<A, In, L, E, R>, f: (chunk: Chunk.Chunk<In0>) => Chunk.Chunk<In>): Sink<A, In0, L, E, R>;
};
/**
 * Effectfully transforms this sink's input chunks. `f` must preserve
 * chunking-invariance.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const mapInputChunksEffect: {
    /**
     * Effectfully transforms this sink's input chunks. `f` must preserve
     * chunking-invariance.
     *
     * @since 2.0.0
     * @category mapping
     */
    <In0, In, E2, R2>(f: (chunk: Chunk.Chunk<In0>) => Effect.Effect<Chunk.Chunk<In>, E2, R2>): <A, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A, In0, L, E2 | E, R2 | R>;
    /**
     * Effectfully transforms this sink's input chunks. `f` must preserve
     * chunking-invariance.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, In, L, E, R, In0, E2, R2>(self: Sink<A, In, L, E, R>, f: (chunk: Chunk.Chunk<In0>) => Effect.Effect<Chunk.Chunk<In>, E2, R2>): Sink<A, In0, L, E | E2, R | R2>;
};
/**
 * A sink that counts the number of elements fed to it.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const count: Sink<number, unknown>;
/**
 * Creates a sink halting with the specified defect.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const die: (defect: unknown) => Sink<never, unknown>;
/**
 * Creates a sink halting with the specified message, wrapped in a
 * `RuntimeException`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const dieMessage: (message: string) => Sink<never, unknown>;
/**
 * Creates a sink halting with the specified defect.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const dieSync: (evaluate: LazyArg<unknown>) => Sink<never, unknown>;
/**
 * Transforms both inputs and result of this sink using the provided
 * functions.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const dimap: {
    /**
     * Transforms both inputs and result of this sink using the provided
     * functions.
     *
     * @since 2.0.0
     * @category mapping
     */
    <In0, In, A, A2>(options: {
        readonly onInput: (input: In0) => In;
        readonly onDone: (a: A) => A2;
    }): <L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A2, In0, L, E, R>;
    /**
     * Transforms both inputs and result of this sink using the provided
     * functions.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, In, L, E, R, In0, A2>(self: Sink<A, In, L, E, R>, options: {
        readonly onInput: (input: In0) => In;
        readonly onDone: (a: A) => A2;
    }): Sink<A2, In0, L, E, R>;
};
/**
 * Effectfully transforms both inputs and result of this sink using the
 * provided functions.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const dimapEffect: {
    /**
     * Effectfully transforms both inputs and result of this sink using the
     * provided functions.
     *
     * @since 2.0.0
     * @category mapping
     */
    <In0, In, E2, R2, A, A2, E3, R3>(options: {
        readonly onInput: (input: In0) => Effect.Effect<In, E2, R2>;
        readonly onDone: (a: A) => Effect.Effect<A2, E3, R3>;
    }): <L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A2, In0, L, E2 | E3 | E, R2 | R3 | R>;
    /**
     * Effectfully transforms both inputs and result of this sink using the
     * provided functions.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, In, L, E, R, In0, E2, R2, A2, E3, R3>(self: Sink<A, In, L, E, R>, options: {
        readonly onInput: (input: In0) => Effect.Effect<In, E2, R2>;
        readonly onDone: (a: A) => Effect.Effect<A2, E3, R3>;
    }): Sink<A2, In0, L, E | E2 | E3, R | R2 | R3>;
};
/**
 * Transforms both input chunks and result of this sink using the provided
 * functions.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const dimapChunks: {
    /**
     * Transforms both input chunks and result of this sink using the provided
     * functions.
     *
     * @since 2.0.0
     * @category mapping
     */
    <In0, In, A, A2>(options: {
        readonly onInput: (chunk: Chunk.Chunk<In0>) => Chunk.Chunk<In>;
        readonly onDone: (a: A) => A2;
    }): <L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A2, In0, L, E, R>;
    /**
     * Transforms both input chunks and result of this sink using the provided
     * functions.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, In, L, E, R, In0, A2>(self: Sink<A, In, L, E, R>, options: {
        readonly onInput: (chunk: Chunk.Chunk<In0>) => Chunk.Chunk<In>;
        readonly onDone: (a: A) => A2;
    }): Sink<A2, In0, L, E, R>;
};
/**
 * Effectfully transforms both input chunks and result of this sink using the
 * provided functions. `f` and `g` must preserve chunking-invariance.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const dimapChunksEffect: {
    /**
     * Effectfully transforms both input chunks and result of this sink using the
     * provided functions. `f` and `g` must preserve chunking-invariance.
     *
     * @since 2.0.0
     * @category mapping
     */
    <In0, In, E2, R2, A, A2, E3, R3>(options: {
        readonly onInput: (chunk: Chunk.Chunk<In0>) => Effect.Effect<Chunk.Chunk<In>, E2, R2>;
        readonly onDone: (a: A) => Effect.Effect<A2, E3, R3>;
    }): <L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A2, In0, L, E2 | E3 | E, R2 | R3 | R>;
    /**
     * Effectfully transforms both input chunks and result of this sink using the
     * provided functions. `f` and `g` must preserve chunking-invariance.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, In, L, E, R, In0, E2, R2, A2, E3, R3>(self: Sink<A, In, L, E, R>, options: {
        readonly onInput: (chunk: Chunk.Chunk<In0>) => Effect.Effect<Chunk.Chunk<In>, E2, R2>;
        readonly onDone: (a: A) => Effect.Effect<A2, E3, R3>;
    }): Sink<A2, In0, L, E | E2 | E3, R | R2 | R3>;
};
/**
 * A sink that ignores its inputs.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const drain: Sink<void, unknown>;
/**
 * Creates a sink that drops `n` elements.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const drop: <In>(n: number) => Sink<unknown, In, In>;
/**
 * Drops incoming elements until the predicate is satisfied.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const dropUntil: <In>(predicate: Predicate<In>) => Sink<unknown, In, In>;
/**
 * Drops incoming elements until the effectful predicate is satisfied.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const dropUntilEffect: <In, E, R>(predicate: (input: In) => Effect.Effect<boolean, E, R>) => Sink<unknown, In, In, E, R>;
/**
 * Drops incoming elements as long as the predicate is satisfied.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const dropWhile: <In>(predicate: Predicate<In>) => Sink<unknown, In, In>;
/**
 * Drops incoming elements as long as the effectful predicate is satisfied.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const dropWhileEffect: <In, E, R>(predicate: (input: In) => Effect.Effect<boolean, E, R>) => Sink<unknown, In, In, E, R>;
/**
 * Returns a new sink with an attached finalizer. The finalizer is guaranteed
 * to be executed so long as the sink begins execution (and regardless of
 * whether or not it completes).
 *
 * @since 2.0.0
 * @category finalization
 */
export declare const ensuring: {
    /**
     * Returns a new sink with an attached finalizer. The finalizer is guaranteed
     * to be executed so long as the sink begins execution (and regardless of
     * whether or not it completes).
     *
     * @since 2.0.0
     * @category finalization
     */
    <X, R2>(finalizer: Effect.Effect<X, never, R2>): <A, In, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A, In, L, E, R2 | R>;
    /**
     * Returns a new sink with an attached finalizer. The finalizer is guaranteed
     * to be executed so long as the sink begins execution (and regardless of
     * whether or not it completes).
     *
     * @since 2.0.0
     * @category finalization
     */
    <A, In, L, E, R, X, R2>(self: Sink<A, In, L, E, R>, finalizer: Effect.Effect<X, never, R2>): Sink<A, In, L, E, R | R2>;
};
/**
 * Returns a new sink with an attached finalizer. The finalizer is guaranteed
 * to be executed so long as the sink begins execution (and regardless of
 * whether or not it completes).
 *
 * @since 2.0.0
 * @category finalization
 */
export declare const ensuringWith: {
    /**
     * Returns a new sink with an attached finalizer. The finalizer is guaranteed
     * to be executed so long as the sink begins execution (and regardless of
     * whether or not it completes).
     *
     * @since 2.0.0
     * @category finalization
     */
    <A, E, X, R2>(finalizer: (exit: Exit.Exit<A, E>) => Effect.Effect<X, never, R2>): <In, L, R>(self: Sink<A, In, L, E, R>) => Sink<A, In, L, E, R2 | R>;
    /**
     * Returns a new sink with an attached finalizer. The finalizer is guaranteed
     * to be executed so long as the sink begins execution (and regardless of
     * whether or not it completes).
     *
     * @since 2.0.0
     * @category finalization
     */
    <A, In, L, E, R, X, R2>(self: Sink<A, In, L, E, R>, finalizer: (exit: Exit.Exit<A, E>) => Effect.Effect<X, never, R2>): Sink<A, In, L, E, R | R2>;
};
/**
 * Accesses the whole context of the sink.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const context: <R>() => Sink<Context.Context<R>, unknown, never, never, R>;
/**
 * Accesses the context of the sink.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const contextWith: <R, Z>(f: (context: Context.Context<R>) => Z) => Sink<Z, unknown, never, never, R>;
/**
 * Accesses the context of the sink in the context of an effect.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const contextWithEffect: <R0, A, E, R>(f: (context: Context.Context<R0>) => Effect.Effect<A, E, R>) => Sink<A, unknown, never, E, R0 | R>;
/**
 * Accesses the context of the sink in the context of a sink.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const contextWithSink: <R0, A, In, L, E, R>(f: (context: Context.Context<R0>) => Sink<A, In, L, E, R>) => Sink<A, In, L, E, R0 | R>;
/**
 * A sink that returns whether all elements satisfy the specified predicate.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const every: <In>(predicate: Predicate<In>) => Sink<boolean, In, In>;
/**
 * A sink that always fails with the specified error.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fail: <E>(e: E) => Sink<never, unknown, never, E>;
/**
 * A sink that always fails with the specified lazily evaluated error.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const failSync: <E>(evaluate: LazyArg<E>) => Sink<never, unknown, never, E>;
/**
 * Creates a sink halting with a specified `Cause`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const failCause: <E>(cause: Cause.Cause<E>) => Sink<never, unknown, never, E>;
/**
 * Creates a sink halting with a specified lazily evaluated `Cause`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const failCauseSync: <E>(evaluate: LazyArg<Cause.Cause<E>>) => Sink<never, unknown, never, E>;
/**
 * Filters the sink's input with the given predicate.
 *
 * @since 2.0.0
 * @category filtering
 */
export declare const filterInput: {
    /**
     * Filters the sink's input with the given predicate.
     *
     * @since 2.0.0
     * @category filtering
     */
    <In, In1 extends In, In2 extends In1>(f: Refinement<In1, In2>): <A, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A, In2, L, E, R>;
    /**
     * Filters the sink's input with the given predicate.
     *
     * @since 2.0.0
     * @category filtering
     */
    <In, In1 extends In>(f: Predicate<In1>): <A, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A, In1, L, E, R>;
};
/**
 * Effectfully filter the input of this sink using the specified predicate.
 *
 * @since 2.0.0
 * @category filtering
 */
export declare const filterInputEffect: {
    /**
     * Effectfully filter the input of this sink using the specified predicate.
     *
     * @since 2.0.0
     * @category filtering
     */
    <In, In1 extends In, E2, R2>(f: (input: In1) => Effect.Effect<boolean, E2, R2>): <A, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A, In1, L, E2 | E, R2 | R>;
    /**
     * Effectfully filter the input of this sink using the specified predicate.
     *
     * @since 2.0.0
     * @category filtering
     */
    <A, In, L, E, R, In1 extends In, E2, R2>(self: Sink<A, In, L, E, R>, f: (input: In1) => Effect.Effect<boolean, E2, R2>): Sink<A, In1, L, E | E2, R | R2>;
};
/**
 * Creates a sink that produces values until one verifies the predicate `f`.
 *
 * @since 2.0.0
 * @category elements
 */
export declare const findEffect: {
    /**
     * Creates a sink that produces values until one verifies the predicate `f`.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, E2, R2>(f: (a: A) => Effect.Effect<boolean, E2, R2>): <In, L extends In, E, R>(self: Sink<A, In, L, E, R>) => Sink<Option.Option<A>, In, L, E2 | E, R2 | R>;
    /**
     * Creates a sink that produces values until one verifies the predicate `f`.
     *
     * @since 2.0.0
     * @category elements
     */
    <A, In, L extends In, E, R, E2, R2>(self: Sink<A, In, L, E, R>, f: (a: A) => Effect.Effect<boolean, E2, R2>): Sink<Option.Option<A>, In, L, E | E2, R | R2>;
};
/**
 * A sink that folds its inputs with the provided function, termination
 * predicate and initial state.
 *
 * @since 2.0.0
 * @category folding
 */
export declare const fold: <S, In>(s: S, contFn: Predicate<S>, f: (s: S, input: In) => S) => Sink<S, In, In>;
/**
 * Folds over the result of the sink
 *
 * @since 2.0.0
 * @category folding
 */
export declare const foldSink: {
    /**
     * Folds over the result of the sink
     *
     * @since 2.0.0
     * @category folding
     */
    <E, A1, In, In1 extends In, L1, E1, R1, A, A2, In2 extends In, L2, E2, R2>(options: {
        readonly onFailure: (err: E) => Sink<A1, In1, L1, E1, R1>;
        readonly onSuccess: (a: A) => Sink<A2, In2, L2, E2, R2>;
    }): <L, R>(self: Sink<A, In, L, E, R>) => Sink<A1 | A2, In1 & In2, L1 | L2, E1 | E2, R1 | R2 | R>;
    /**
     * Folds over the result of the sink
     *
     * @since 2.0.0
     * @category folding
     */
    <A, In, L, E, R, A1, In1 extends In, L1, E1, R1, A2, In2 extends In, L2, E2, R2>(self: Sink<A, In, L, E, R>, options: {
        readonly onFailure: (err: E) => Sink<A1, In1, L1, E1, R1>;
        readonly onSuccess: (a: A) => Sink<A2, In2, L2, E2, R2>;
    }): Sink<A1 | A2, In1 & In2, L1 | L2, E1 | E2, R | R1 | R2>;
};
/**
 * A sink that folds its input chunks with the provided function, termination
 * predicate and initial state. `contFn` condition is checked only for the
 * initial value and at the end of processing of each chunk. `f` and `contFn`
 * must preserve chunking-invariance.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const foldChunks: <S, In>(s: S, contFn: Predicate<S>, f: (s: S, chunk: Chunk.Chunk<In>) => S) => Sink<S, In>;
/**
 * A sink that effectfully folds its input chunks with the provided function,
 * termination predicate and initial state. `contFn` condition is checked only
 * for the initial value and at the end of processing of each chunk. `f` and
 * `contFn` must preserve chunking-invariance.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const foldChunksEffect: <S, In, E, R>(s: S, contFn: Predicate<S>, f: (s: S, chunk: Chunk.Chunk<In>) => Effect.Effect<S, E, R>) => Sink<S, In, In, E, R>;
/**
 * A sink that effectfully folds its inputs with the provided function,
 * termination predicate and initial state.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const foldEffect: <S, In, E, R>(s: S, contFn: Predicate<S>, f: (s: S, input: In) => Effect.Effect<S, E, R>) => Sink<S, In, In, E, R>;
/**
 * A sink that folds its inputs with the provided function and initial state.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const foldLeft: <S, In>(s: S, f: (s: S, input: In) => S) => Sink<S, In>;
/**
 * A sink that folds its input chunks with the provided function and initial
 * state. `f` must preserve chunking-invariance.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const foldLeftChunks: <S, In>(s: S, f: (s: S, chunk: Chunk.Chunk<In>) => S) => Sink<S, In>;
/**
 * A sink that effectfully folds its input chunks with the provided function
 * and initial state. `f` must preserve chunking-invariance.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const foldLeftChunksEffect: <S, In, E, R>(s: S, f: (s: S, chunk: Chunk.Chunk<In>) => Effect.Effect<S, E, R>) => Sink<S, In, never, E, R>;
/**
 * A sink that effectfully folds its inputs with the provided function and
 * initial state.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const foldLeftEffect: <S, In, E, R>(s: S, f: (s: S, input: In) => Effect.Effect<S, E, R>) => Sink<S, In, In, E, R>;
/**
 * Creates a sink that folds elements of type `In` into a structure of type
 * `S` until `max` elements have been folded.
 *
 * Like `Sink.foldWeighted`, but with a constant cost function of `1`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const foldUntil: <In, S>(s: S, max: number, f: (s: S, input: In) => S) => Sink<S, In, In>;
/**
 * Creates a sink that effectfully folds elements of type `In` into a
 * structure of type `S` until `max` elements have been folded.
 *
 * Like `Sink.foldWeightedEffect` but with a constant cost function of `1`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const foldUntilEffect: <S, In, E, R>(s: S, max: number, f: (s: S, input: In) => Effect.Effect<S, E, R>) => Sink<S, In, In, E, R>;
/**
 * Creates a sink that folds elements of type `In` into a structure of type `S`,
 * until `max` worth of elements (determined by the `costFn`) have been folded.
 *
 * **Note**
 *
 * Elements that have an individual cost larger than `max` will force the sink
 * to cross the `max` cost. See `Sink.foldWeightedDecompose` for a variant
 * that can handle these cases.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const foldWeighted: <S, In>(options: {
    readonly initial: S;
    readonly maxCost: number;
    readonly cost: (s: S, input: In) => number;
    readonly body: (s: S, input: In) => S;
}) => Sink<S, In, In>;
/**
 * Creates a sink that folds elements of type `In` into a structure of type
 * `S`, until `max` worth of elements (determined by the `costFn`) have been
 * folded.
 *
 * The `decompose` function will be used for decomposing elements that cause
 * an `S` aggregate to cross `max` into smaller elements. For example:
 *
 * ```ts skip-type-checking
 * pipe(
 *   Stream.make(1, 5, 1),
 *   Stream.transduce(
 *     Sink.foldWeightedDecompose(
 *       Chunk.empty<number>(),
 *       4,
 *       (n: number) => n,
 *       (n: number) => Chunk.make(n - 1, 1),
 *       (acc, el) => pipe(acc, Chunk.append(el))
 *     )
 *   ),
 *   Stream.runCollect
 * )
 * ```
 *
 * The stream would emit the elements `Chunk(1), Chunk(4), Chunk(1, 1)`.
 *
 * Be vigilant with this function, it has to generate "simpler" values or the
 * fold may never end. A value is considered indivisible if `decompose` yields
 * the empty chunk or a single-valued chunk. In these cases, there is no other
 * choice than to yield a value that will cross the threshold.
 *
 * `Sink.foldWeightedDecomposeEffect` allows the decompose function to return an
 * effect value, and consequently it allows the sink to fail.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const foldWeightedDecompose: <S, In>(options: {
    readonly initial: S;
    readonly maxCost: number;
    readonly cost: (s: S, input: In) => number;
    readonly decompose: (input: In) => Chunk.Chunk<In>;
    readonly body: (s: S, input: In) => S;
}) => Sink<S, In, In>;
/**
 * Creates a sink that effectfully folds elements of type `In` into a
 * structure of type `S`, until `max` worth of elements (determined by the
 * `costFn`) have been folded.
 *
 * The `decompose` function will be used for decomposing elements that cause
 * an `S` aggregate to cross `max` into smaller elements. Be vigilant with
 * this function, it has to generate "simpler" values or the fold may never
 * end. A value is considered indivisible if `decompose` yields the empty
 * chunk or a single-valued chunk. In these cases, there is no other choice
 * than to yield a value that will cross the threshold.
 *
 * See `Sink.foldWeightedDecompose` for an example.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const foldWeightedDecomposeEffect: <S, In, E, R, E2, R2, E3, R3>(options: {
    readonly initial: S;
    readonly maxCost: number;
    readonly cost: (s: S, input: In) => Effect.Effect<number, E, R>;
    readonly decompose: (input: In) => Effect.Effect<Chunk.Chunk<In>, E2, R2>;
    readonly body: (s: S, input: In) => Effect.Effect<S, E3, R3>;
}) => Sink<S, In, In, E | E2 | E3, R | R2 | R3>;
/**
 * Creates a sink that effectfully folds elements of type `In` into a
 * structure of type `S`, until `max` worth of elements (determined by the
 * `costFn`) have been folded.
 *
 * @note
 *   Elements that have an individual cost larger than `max` will force the
 *   sink to cross the `max` cost. See `Sink.foldWeightedDecomposeEffect` for
 *   a variant that can handle these cases.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const foldWeightedEffect: <S, In, E, R, E2, R2>(options: {
    readonly initial: S;
    readonly maxCost: number;
    readonly cost: (s: S, input: In) => Effect.Effect<number, E, R>;
    readonly body: (s: S, input: In) => Effect.Effect<S, E2, R2>;
}) => Sink<S, In, In, E | E2, R | R2>;
/**
 * A sink that executes the provided effectful function for every element fed
 * to it.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const forEach: <In, X, E, R>(f: (input: In) => Effect.Effect<X, E, R>) => Sink<void, In, never, E, R>;
/**
 * A sink that executes the provided effectful function for every chunk fed to
 * it.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const forEachChunk: <In, X, E, R>(f: (input: Chunk.Chunk<In>) => Effect.Effect<X, E, R>) => Sink<void, In, never, E, R>;
/**
 * A sink that executes the provided effectful function for every chunk fed to
 * it until `f` evaluates to `false`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const forEachChunkWhile: <In, E, R>(f: (input: Chunk.Chunk<In>) => Effect.Effect<boolean, E, R>) => Sink<void, In, In, E, R>;
/**
 * A sink that executes the provided effectful function for every element fed
 * to it until `f` evaluates to `false`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const forEachWhile: <In, E, R>(f: (input: In) => Effect.Effect<boolean, E, R>) => Sink<void, In, In, E, R>;
/**
 * Runs this sink until it yields a result, then uses that result to create
 * another sink from the provided function which will continue to run until it
 * yields a result.
 *
 * This function essentially runs sinks in sequence.
 *
 * @since 2.0.0
 * @category sequencing
 */
export declare const flatMap: {
    /**
     * Runs this sink until it yields a result, then uses that result to create
     * another sink from the provided function which will continue to run until it
     * yields a result.
     *
     * This function essentially runs sinks in sequence.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <A, A1, In, In1 extends In, L1, E1, R1>(f: (a: A) => Sink<A1, In1, L1, E1, R1>): <L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A1, In & In1, L1 | L, E1 | E, R1 | R>;
    /**
     * Runs this sink until it yields a result, then uses that result to create
     * another sink from the provided function which will continue to run until it
     * yields a result.
     *
     * This function essentially runs sinks in sequence.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <A, In, L, E, R, A1, In1 extends In, L1, E1, R1>(self: Sink<A, In, L, E, R>, f: (a: A) => Sink<A1, In1, L1, E1, R1>): Sink<A1, In & In1, L | L1, E | E1, R | R1>;
};
/**
 * Creates a sink from a `Channel`.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromChannel: <L, In, E, A, R>(channel: Channel.Channel<Chunk.Chunk<L>, Chunk.Chunk<In>, E, never, A, unknown, R>) => Sink<A, In, L, E, R>;
/**
 * Creates a `Channel` from a Sink.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const toChannel: <A, In, L, E, R>(self: Sink<A, In, L, E, R>) => Channel.Channel<Chunk.Chunk<L>, Chunk.Chunk<In>, E, never, A, unknown, R>;
/**
 * Creates a single-value sink produced from an effect.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromEffect: <A, E, R>(effect: Effect.Effect<A, E, R>) => Sink<A, unknown, never, E, R>;
/**
 * Create a sink which publishes each element to the specified `PubSub`.
 *
 * If the `shutdown` parameter is `true`, the `PubSub` will be shutdown after
 * the sink is evaluated (defaults to `false`).
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromPubSub: <In>(pubsub: PubSub.PubSub<In>, options?: {
    readonly shutdown?: boolean | undefined;
}) => Sink<void, In>;
/**
 * Creates a sink from a chunk processing function.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromPush: <In, L0, R0, L, R>(push: Effect.Effect<(_: Option.Option<Chunk.Chunk<In>>) => Effect.Effect<void, readonly [Either.Either<R0, L0>, Chunk.Chunk<L>], R>, never, R>) => Sink<R0, In, L, L0, Exclude<R, Scope.Scope>>;
/**
 * Create a sink which enqueues each element into the specified queue.
 *
 * If the `shutdown` parameter is `true`, the queue will be shutdown after the
 * sink is evaluated (defaults to `false`).
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fromQueue: <In>(queue: Queue.Enqueue<In>, options?: {
    readonly shutdown?: boolean | undefined;
}) => Sink<void, In>;
/**
 * Creates a sink containing the first value.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const head: <In>() => Sink<Option.Option<In>, In, In>;
/**
 * Drains the remaining elements from the stream after the sink finishes
 *
 * @since 2.0.0
 * @category utils
 */
export declare const ignoreLeftover: <A, In, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A, In, never, E, R>;
/**
 * Creates a sink containing the last value.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const last: <In>() => Sink<Option.Option<In>, In, In>;
/**
 * Creates a sink that does not consume any input but provides the given chunk
 * as its leftovers
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const leftover: <L>(chunk: Chunk.Chunk<L>) => Sink<void, unknown, L>;
/**
 * Transforms this sink's result.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const map: {
    /**
     * Transforms this sink's result.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, A2>(f: (a: A) => A2): <In, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A2, In, L, E, R>;
    /**
     * Transforms this sink's result.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, In, L, E, R, A2>(self: Sink<A, In, L, E, R>, f: (a: A) => A2): Sink<A2, In, L, E, R>;
};
/**
 * Effectfully transforms this sink's result.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const mapEffect: {
    /**
     * Effectfully transforms this sink's result.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, A2, E2, R2>(f: (a: A) => Effect.Effect<A2, E2, R2>): <In, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A2, In, L, E2 | E, R2 | R>;
    /**
     * Effectfully transforms this sink's result.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, In, L, E, R, A2, E2, R2>(self: Sink<A, In, L, E, R>, f: (a: A) => Effect.Effect<A2, E2, R2>): Sink<A2, In, L, E | E2, R | R2>;
};
/**
 * Transforms the errors emitted by this sink using `f`.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const mapError: {
    /**
     * Transforms the errors emitted by this sink using `f`.
     *
     * @since 2.0.0
     * @category mapping
     */
    <E, E2>(f: (error: E) => E2): <A, In, L, R>(self: Sink<A, In, L, E, R>) => Sink<A, In, L, E2, R>;
    /**
     * Transforms the errors emitted by this sink using `f`.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, In, L, E, R, E2>(self: Sink<A, In, L, E, R>, f: (error: E) => E2): Sink<A, In, L, E2, R>;
};
/**
 * Transforms the leftovers emitted by this sink using `f`.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const mapLeftover: {
    /**
     * Transforms the leftovers emitted by this sink using `f`.
     *
     * @since 2.0.0
     * @category mapping
     */
    <L, L2>(f: (leftover: L) => L2): <A, In, E, R>(self: Sink<A, In, L, E, R>) => Sink<A, In, L2, E, R>;
    /**
     * Transforms the leftovers emitted by this sink using `f`.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, In, L, E, R, L2>(self: Sink<A, In, L, E, R>, f: (leftover: L) => L2): Sink<A, In, L2, E, R>;
};
/**
 * Creates a sink which transforms it's inputs into a string.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const mkString: Sink<string, unknown>;
/**
 * Creates a sink which never terminates.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const never: Sink<never, unknown>;
/**
 * Switch to another sink in case of failure
 *
 * @since 2.0.0
 * @category error handling
 */
export declare const orElse: {
    /**
     * Switch to another sink in case of failure
     *
     * @since 2.0.0
     * @category error handling
     */
    <A2, In2, L2, E2, R2>(that: LazyArg<Sink<A2, In2, L2, E2, R2>>): <A, In, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A2 | A, In & In2, L2 | L, E2 | E, R2 | R>;
    /**
     * Switch to another sink in case of failure
     *
     * @since 2.0.0
     * @category error handling
     */
    <A, In, L, E, R, A2, In2, L2, E2, R2>(self: Sink<A, In, L, E, R>, that: LazyArg<Sink<A2, In2, L2, E2, R2>>): Sink<A | A2, In & In2, L | L2, E | E2, R | R2>;
};
/**
 * Provides the sink with its required context, which eliminates its
 * dependency on `R`.
 *
 * @since 2.0.0
 * @category context
 */
export declare const provideContext: {
    /**
     * Provides the sink with its required context, which eliminates its
     * dependency on `R`.
     *
     * @since 2.0.0
     * @category context
     */
    <R>(context: Context.Context<R>): <A, In, L, E>(self: Sink<A, In, L, E, R>) => Sink<A, In, L, E, never>;
    /**
     * Provides the sink with its required context, which eliminates its
     * dependency on `R`.
     *
     * @since 2.0.0
     * @category context
     */
    <A, In, L, E, R>(self: Sink<A, In, L, E, R>, context: Context.Context<R>): Sink<A, In, L, E, never>;
};
/**
 * Runs both sinks in parallel on the input, , returning the result or the
 * error from the one that finishes first.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const race: {
    /**
     * Runs both sinks in parallel on the input, , returning the result or the
     * error from the one that finishes first.
     *
     * @since 2.0.0
     * @category utils
     */
    <R1, E1, In1, L1, A1>(that: Sink<A1, In1, L1, E1, R1>): <A, In, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A1 | A, In & In1, L1 | L, E1 | E, R1 | R>;
    /**
     * Runs both sinks in parallel on the input, , returning the result or the
     * error from the one that finishes first.
     *
     * @since 2.0.0
     * @category utils
     */
    <A, In, L, E, R, A1, In1, L1, E1, R1>(self: Sink<A, In, L, E, R>, that: Sink<A1, In1, L1, E1, R1>): Sink<A | A1, In & In1, L | L1, E | E1, R | R1>;
};
/**
 * Runs both sinks in parallel on the input, returning the result or the error
 * from the one that finishes first.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const raceBoth: {
    /**
     * Runs both sinks in parallel on the input, returning the result or the error
     * from the one that finishes first.
     *
     * @since 2.0.0
     * @category utils
     */
    <A1, In1, L1, E1, R1>(that: Sink<A1, In1, L1, E1, R1>, options?: {
        readonly capacity?: number | undefined;
    } | undefined): <A, In, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<Either.Either<A1, A>, In & In1, L1 | L, E1 | E, R1 | R>;
    /**
     * Runs both sinks in parallel on the input, returning the result or the error
     * from the one that finishes first.
     *
     * @since 2.0.0
     * @category utils
     */
    <A, In, L, E, R, A1, In1, L1, E1, R1>(self: Sink<A, In, L, E, R>, that: Sink<A1, In1, L1, E1, R1>, options?: {
        readonly capacity?: number | undefined;
    } | undefined): Sink<Either.Either<A1, A>, In & In1, L | L1, E | E1, R | R1>;
};
/**
 * Runs both sinks in parallel on the input, using the specified merge
 * function as soon as one result or the other has been computed.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const raceWith: {
    /**
     * Runs both sinks in parallel on the input, using the specified merge
     * function as soon as one result or the other has been computed.
     *
     * @since 2.0.0
     * @category utils
     */
    <A2, In2, L2, E2, R2, A, E, A3, A4>(options: {
        readonly other: Sink<A2, In2, L2, E2, R2>;
        readonly onSelfDone: (exit: Exit.Exit<A, E>) => MergeDecision.MergeDecision<R2, E2, A2, E2 | E, A3>;
        readonly onOtherDone: (exit: Exit.Exit<A2, E2>) => MergeDecision.MergeDecision<R2, E, A, E2 | E, A4>;
        readonly capacity?: number | undefined;
    }): <In, L, R>(self: Sink<A, In, L, E, R>) => Sink<A3 | A4, In & In2, L2 | L, E2 | E, R2 | R>;
    /**
     * Runs both sinks in parallel on the input, using the specified merge
     * function as soon as one result or the other has been computed.
     *
     * @since 2.0.0
     * @category utils
     */
    <A, In, L, E, R, A2, In2, L2, E2, R2, A3, A4>(self: Sink<A, In, L, E, R>, options: {
        readonly other: Sink<A2, In2, L2, E2, R2>;
        readonly onSelfDone: (exit: Exit.Exit<A, E>) => MergeDecision.MergeDecision<R2, E2, A2, E | E2, A3>;
        readonly onOtherDone: (exit: Exit.Exit<A2, E2>) => MergeDecision.MergeDecision<R2, E, A, E | E2, A4>;
        readonly capacity?: number | undefined;
    }): Sink<A3 | A4, In & In2, L | L2, E | E2, R | R2>;
};
/**
 * @since 2.0.0
 * @category error handling
 */
export declare const refineOrDie: {
    /**
     * @since 2.0.0
     * @category error handling
     */
    <E, E2>(pf: (error: E) => Option.Option<E2>): <A, In, L, R>(self: Sink<A, In, L, E, R>) => Sink<A, In, L, E2, R>;
    /**
     * @since 2.0.0
     * @category error handling
     */
    <A, In, L, E, R, E2>(self: Sink<A, In, L, E, R>, pf: (error: E) => Option.Option<E2>): Sink<A, In, L, E2, R>;
};
/**
 * @since 2.0.0
 * @category error handling
 */
export declare const refineOrDieWith: {
    /**
     * @since 2.0.0
     * @category error handling
     */
    <E, E2>(pf: (error: E) => Option.Option<E2>, f: (error: E) => unknown): <A, In, L, R>(self: Sink<A, In, L, E, R>) => Sink<A, In, L, E2, R>;
    /**
     * @since 2.0.0
     * @category error handling
     */
    <A, In, L, E, R, E2>(self: Sink<A, In, L, E, R>, pf: (error: E) => Option.Option<E2>, f: (error: E) => unknown): Sink<A, In, L, E2, R>;
};
/**
 * A sink that returns whether an element satisfies the specified predicate.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const some: <In>(predicate: Predicate<In>) => Sink<boolean, In, In>;
/**
 * Splits the sink on the specified predicate, returning a new sink that
 * consumes elements until an element after the first satisfies the specified
 * predicate.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const splitWhere: {
    /**
     * Splits the sink on the specified predicate, returning a new sink that
     * consumes elements until an element after the first satisfies the specified
     * predicate.
     *
     * @since 2.0.0
     * @category utils
     */
    <In>(f: Predicate<In>): <A, L extends In, E, R>(self: Sink<A, In, L, E, R>) => Sink<A, In, In, E, R>;
    /**
     * Splits the sink on the specified predicate, returning a new sink that
     * consumes elements until an element after the first satisfies the specified
     * predicate.
     *
     * @since 2.0.0
     * @category utils
     */
    <A, In, L extends In, E, R>(self: Sink<A, In, L, E, R>, f: Predicate<In>): Sink<A, In, In, E, R>;
};
/**
 * A sink that immediately ends with the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const succeed: <A>(a: A) => Sink<A, unknown>;
/**
 * A sink that sums incoming numeric values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const sum: Sink<number, number>;
/**
 * Summarize a sink by running an effect when the sink starts and again when
 * it completes.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const summarized: {
    /**
     * Summarize a sink by running an effect when the sink starts and again when
     * it completes.
     *
     * @since 2.0.0
     * @category utils
     */
    <A2, E2, R2, A3>(summary: Effect.Effect<A2, E2, R2>, f: (start: A2, end: A2) => A3): <A, In, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<[A, A3], In, L, E2 | E, R2 | R>;
    /**
     * Summarize a sink by running an effect when the sink starts and again when
     * it completes.
     *
     * @since 2.0.0
     * @category utils
     */
    <A, In, L, E, R, A2, E2, R2, A3>(self: Sink<A, In, L, E, R>, summary: Effect.Effect<A2, E2, R2>, f: (start: A2, end: A2) => A3): Sink<[A, A3], In, L, E | E2, R | R2>;
};
/**
 * Returns a lazily constructed sink that may require effects for its
 * creation.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const suspend: <A, In, L, E, R>(evaluate: LazyArg<Sink<A, In, L, E, R>>) => Sink<A, In, L, E, R>;
/**
 * A sink that immediately ends with the specified lazy value.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const sync: <A>(evaluate: LazyArg<A>) => Sink<A, unknown>;
/**
 * A sink that takes the specified number of values.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const take: <In>(n: number) => Sink<Chunk.Chunk<In>, In, In>;
/**
 * @since 2.0.0
 * @category constructors
 */
export declare const timed: Sink<Duration.Duration, unknown>;
/**
 * Creates a sink produced from an effect.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const unwrap: <A, In, L, E2, R2, E, R>(effect: Effect.Effect<Sink<A, In, L, E2, R2>, E, R>) => Sink<A, In, L, E2 | E, R2 | R>;
/**
 * Creates a sink produced from a scoped effect.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const unwrapScoped: <A, In, L, E, R>(effect: Effect.Effect<Sink<A, In, L, E, R>, E, R>) => Sink<A, In, L, E, Exclude<R, Scope.Scope>>;
/**
 * Constructs a `Sink` from a function which receives a `Scope` and returns
 * an effect that will result in a `Sink` if successful.
 *
 * @since 3.11.0
 * @category constructors
 */
export declare const unwrapScopedWith: <A, In, L, E, R>(f: (scope: Scope.Scope) => Effect.Effect<Sink<A, In, L, E, R>, E, R>) => Sink<A, In, L, E, R>;
/**
 * Returns the sink that executes this one and times its execution.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const withDuration: <A, In, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<[A, Duration.Duration], In, L, E, R>;
/**
 * Feeds inputs to this sink until it yields a result, then switches over to
 * the provided sink until it yields a result, finally combining the two
 * results into a tuple.
 *
 * @since 2.0.0
 * @category zipping
 */
export declare const zip: {
    /**
     * Feeds inputs to this sink until it yields a result, then switches over to
     * the provided sink until it yields a result, finally combining the two
     * results into a tuple.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A2, In, In2 extends In, L2, E2, R2>(that: Sink<A2, In2, L2, E2, R2>, options?: {
        readonly concurrent?: boolean | undefined;
    } | undefined): <A, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<[A, A2], In & In2, L2 | L, E2 | E, R2 | R>;
    /**
     * Feeds inputs to this sink until it yields a result, then switches over to
     * the provided sink until it yields a result, finally combining the two
     * results into a tuple.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A, In, L, E, R, A2, In2 extends In, L2, E2, R2>(self: Sink<A, In, L, E, R>, that: Sink<A2, In2, L2, E2, R2>, options?: {
        readonly concurrent?: boolean | undefined;
    } | undefined): Sink<[A, A2], In & In2, L | L2, E | E2, R | R2>;
};
/**
 * Like `Sink.zip` but keeps only the result from this sink.
 *
 * @since 2.0.0
 * @category zipping
 */
export declare const zipLeft: {
    /**
     * Like `Sink.zip` but keeps only the result from this sink.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A2, In, In2 extends In, L2, E2, R2>(that: Sink<A2, In2, L2, E2, R2>, options?: {
        readonly concurrent?: boolean | undefined;
    } | undefined): <A, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A, In & In2, L2 | L, E2 | E, R2 | R>;
    /**
     * Like `Sink.zip` but keeps only the result from this sink.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A, In, L, E, R, A2, In2 extends In, L2, E2, R2>(self: Sink<A, In, L, E, R>, that: Sink<A2, In2, L2, E2, R2>, options?: {
        readonly concurrent?: boolean | undefined;
    } | undefined): Sink<A, In & In2, L | L2, E | E2, R | R2>;
};
/**
 * Like `Sink.zip` but keeps only the result from `that` sink.
 *
 * @since 2.0.0
 * @category zipping
 */
export declare const zipRight: {
    /**
     * Like `Sink.zip` but keeps only the result from `that` sink.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A2, In, In2 extends In, L2, E2, R2>(that: Sink<A2, In2, L2, E2, R2>, options?: {
        readonly concurrent?: boolean | undefined;
    } | undefined): <A, L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A2, In & In2, L2 | L, E2 | E, R2 | R>;
    /**
     * Like `Sink.zip` but keeps only the result from `that` sink.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A, In, L, E, R, A2, In2 extends In, L2, E2, R2>(self: Sink<A, In, L, E, R>, that: Sink<A2, In2, L2, E2, R2>, options?: {
        readonly concurrent?: boolean | undefined;
    } | undefined): Sink<A2, In & In2, L | L2, E | E2, R | R2>;
};
/**
 * Feeds inputs to this sink until it yields a result, then switches over to
 * the provided sink until it yields a result, finally combining the two
 * results with `f`.
 *
 * @since 2.0.0
 * @category zipping
 */
export declare const zipWith: {
    /**
     * Feeds inputs to this sink until it yields a result, then switches over to
     * the provided sink until it yields a result, finally combining the two
     * results with `f`.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A2, In, In2 extends In, L2, E2, R2, A, A3>(that: Sink<A2, In2, L2, E2, R2>, f: (a: A, a2: A2) => A3, options?: {
        readonly concurrent?: boolean | undefined;
    } | undefined): <L, E, R>(self: Sink<A, In, L, E, R>) => Sink<A3, In & In2, L2 | L, E2 | E, R2 | R>;
    /**
     * Feeds inputs to this sink until it yields a result, then switches over to
     * the provided sink until it yields a result, finally combining the two
     * results with `f`.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A, In, L, E, R, A2, In2 extends In, L2, E2, R2, A3>(self: Sink<A, In, L, E, R>, that: Sink<A2, In2, L2, E2, R2>, f: (a: A, a2: A2) => A3, options?: {
        readonly concurrent?: boolean | undefined;
    } | undefined): Sink<A3, In & In2, L | L2, E | E2, R | R2>;
};
//# sourceMappingURL=Sink.d.ts.map