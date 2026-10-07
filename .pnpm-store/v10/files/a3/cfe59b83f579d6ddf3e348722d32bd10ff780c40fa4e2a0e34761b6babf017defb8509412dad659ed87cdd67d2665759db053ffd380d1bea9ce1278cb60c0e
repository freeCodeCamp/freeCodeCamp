/**
 * A `Layer<ROut, E, RIn>` describes how to build one or more services in your
 * application. Services can be injected into effects via
 * `Effect.provideService`. Effects can require services via `Effect.service`.
 *
 * Layer can be thought of as recipes for producing bundles of services, given
 * their dependencies (other services).
 *
 * Construction of services can be effectful and utilize resources that must be
 * acquired and safely released when the services are done being utilized.
 *
 * By default layers are shared, meaning that if the same layer is used twice
 * the layer will only be allocated a single time.
 *
 * Because of their excellent composition properties, layers are the idiomatic
 * way in Effect-TS to create services that depend on other services.
 *
 * @since 2.0.0
 */
import type * as Cause from "./Cause.js";
import type * as Clock from "./Clock.js";
import type { ConfigProvider } from "./ConfigProvider.js";
import * as Context from "./Context.js";
import type * as Effect from "./Effect.js";
import type * as Exit from "./Exit.js";
import type { FiberRef } from "./FiberRef.js";
import { type LazyArg } from "./Function.js";
import type { LogLevel } from "./LogLevel.js";
import type * as Option from "./Option.js";
import type { Pipeable } from "./Pipeable.js";
import type * as Random from "./Random.js";
import type * as Request from "./Request.js";
import type * as Runtime from "./Runtime.js";
import type * as Schedule from "./Schedule.js";
import * as Scheduler from "./Scheduler.js";
import type * as Scope from "./Scope.js";
import type * as Stream from "./Stream.js";
import type * as Tracer from "./Tracer.js";
import type * as Types from "./Types.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const LayerTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type LayerTypeId = typeof LayerTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface Layer<in ROut, out E = never, out RIn = never> extends Layer.Variance<ROut, E, RIn>, Pipeable {
}
/**
 * @since 2.0.0
 */
export declare namespace Layer {
    /**
     * @since 2.0.0
     * @category models
     */
    interface Variance<in ROut, out E, out RIn> {
        readonly [LayerTypeId]: {
            readonly _ROut: Types.Contravariant<ROut>;
            readonly _E: Types.Covariant<E>;
            readonly _RIn: Types.Covariant<RIn>;
        };
    }
    /**
     * @since 3.9.0
     * @category type-level
     */
    interface Any {
        readonly [LayerTypeId]: {
            readonly _ROut: Types.Contravariant<never>;
            readonly _E: Types.Covariant<any>;
            readonly _RIn: Types.Covariant<any>;
        };
    }
    /**
     * @since 2.0.0
     * @category type-level
     */
    type Context<T extends Any> = [T] extends [Layer<infer _ROut, infer _E, infer _RIn>] ? _RIn : never;
    /**
     * @since 2.0.0
     * @category type-level
     */
    type Error<T extends Any> = [T] extends [Layer<infer _ROut, infer _E, infer _RIn>] ? _E : never;
    /**
     * @since 2.0.0
     * @category type-level
     */
    type Success<T extends Any> = [T] extends [Layer<infer _ROut, infer _E, infer _RIn>] ? _ROut : never;
}
/**
 * @since 2.0.0
 * @category symbols
 */
export declare const MemoMapTypeId: unique symbol;
/**
 * @since 2.0.0
 * @category symbols
 */
export type MemoMapTypeId = typeof MemoMapTypeId;
/**
 * @since 2.0.0
 * @category models
 */
export interface MemoMap {
    readonly [MemoMapTypeId]: MemoMapTypeId;
}
/**
 * @since 3.13.0
 * @category models
 */
export interface CurrentMemoMap {
    readonly _: unique symbol;
}
/**
 * @since 3.13.0
 * @category models
 */
export declare const CurrentMemoMap: Context.Reference<CurrentMemoMap, MemoMap>;
/**
 * Returns `true` if the specified value is a `Layer`, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isLayer: (u: unknown) => u is Layer<unknown, unknown, unknown>;
/**
 * Returns `true` if the specified `Layer` is a fresh version that will not be
 * shared, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export declare const isFresh: <RIn, E, ROut>(self: Layer<ROut, E, RIn>) => boolean;
/**
 * @since 3.3.0
 * @category tracing
 */
export declare const annotateLogs: {
    /**
     * @since 3.3.0
     * @category tracing
     */
    (key: string, value: unknown): <A, E, R>(self: Layer<A, E, R>) => Layer<A, E, R>;
    /**
     * @since 3.3.0
     * @category tracing
     */
    (values: Record<string, unknown>): <A, E, R>(self: Layer<A, E, R>) => Layer<A, E, R>;
    /**
     * @since 3.3.0
     * @category tracing
     */
    <A, E, R>(self: Layer<A, E, R>, key: string, value: unknown): Layer<A, E, R>;
    /**
     * @since 3.3.0
     * @category tracing
     */
    <A, E, R>(self: Layer<A, E, R>, values: Record<string, unknown>): Layer<A, E, R>;
};
/**
 * @since 3.3.0
 * @category tracing
 */
export declare const annotateSpans: {
    /**
     * @since 3.3.0
     * @category tracing
     */
    (key: string, value: unknown): <A, E, R>(self: Layer<A, E, R>) => Layer<A, E, R>;
    /**
     * @since 3.3.0
     * @category tracing
     */
    (values: Record<string, unknown>): <A, E, R>(self: Layer<A, E, R>) => Layer<A, E, R>;
    /**
     * @since 3.3.0
     * @category tracing
     */
    <A, E, R>(self: Layer<A, E, R>, key: string, value: unknown): Layer<A, E, R>;
    /**
     * @since 3.3.0
     * @category tracing
     */
    <A, E, R>(self: Layer<A, E, R>, values: Record<string, unknown>): Layer<A, E, R>;
};
/**
 * Builds a layer into a scoped value.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const build: <RIn, E, ROut>(self: Layer<ROut, E, RIn>) => Effect.Effect<Context.Context<ROut>, E, Scope.Scope | RIn>;
/**
 * Builds a layer into an `Effect` value. Any resources associated with this
 * layer will be released when the specified scope is closed unless their scope
 * has been extended. This allows building layers where the lifetime of some of
 * the services output by the layer exceed the lifetime of the effect the
 * layer is provided to.
 *
 * @since 2.0.0
 * @category destructors
 */
export declare const buildWithScope: {
    /**
     * Builds a layer into an `Effect` value. Any resources associated with this
     * layer will be released when the specified scope is closed unless their scope
     * has been extended. This allows building layers where the lifetime of some of
     * the services output by the layer exceed the lifetime of the effect the
     * layer is provided to.
     *
     * @since 2.0.0
     * @category destructors
     */
    (scope: Scope.Scope): <RIn, E, ROut>(self: Layer<ROut, E, RIn>) => Effect.Effect<Context.Context<ROut>, E, RIn>;
    /**
     * Builds a layer into an `Effect` value. Any resources associated with this
     * layer will be released when the specified scope is closed unless their scope
     * has been extended. This allows building layers where the lifetime of some of
     * the services output by the layer exceed the lifetime of the effect the
     * layer is provided to.
     *
     * @since 2.0.0
     * @category destructors
     */
    <RIn, E, ROut>(self: Layer<ROut, E, RIn>, scope: Scope.Scope): Effect.Effect<Context.Context<ROut>, E, RIn>;
};
/**
 * Recovers from all errors.
 *
 * @since 2.0.0
 * @category error handling
 */
export declare const catchAll: {
    /**
     * Recovers from all errors.
     *
     * @since 2.0.0
     * @category error handling
     */
    <E, RIn2, E2, ROut2>(onError: (error: E) => Layer<ROut2, E2, RIn2>): <RIn, ROut>(self: Layer<ROut, E, RIn>) => Layer<ROut & ROut2, E2, RIn2 | RIn>;
    /**
     * Recovers from all errors.
     *
     * @since 2.0.0
     * @category error handling
     */
    <RIn, E, ROut, RIn2, E2, ROut2>(self: Layer<ROut, E, RIn>, onError: (error: E) => Layer<ROut2, E2, RIn2>): Layer<ROut & ROut2, E2, RIn | RIn2>;
};
/**
 * Recovers from all errors.
 *
 * @since 2.0.0
 * @category error handling
 */
export declare const catchAllCause: {
    /**
     * Recovers from all errors.
     *
     * @since 2.0.0
     * @category error handling
     */
    <E, RIn2, E2, ROut2>(onError: (cause: Cause.Cause<E>) => Layer<ROut2, E2, RIn2>): <RIn, ROut>(self: Layer<ROut, E, RIn>) => Layer<ROut & ROut2, E2, RIn2 | RIn>;
    /**
     * Recovers from all errors.
     *
     * @since 2.0.0
     * @category error handling
     */
    <RIn, E, ROut, RIn2, E2, ROut22>(self: Layer<ROut, E, RIn>, onError: (cause: Cause.Cause<E>) => Layer<ROut22, E2, RIn2>): Layer<ROut & ROut22, E2, RIn | RIn2>;
};
/**
 * Constructs a `Layer` that passes along the specified context as an
 * output.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const context: <R>() => Layer<R, never, R>;
/**
 * Constructs a layer that dies with the specified defect.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const die: (defect: unknown) => Layer<unknown>;
/**
 * Constructs a layer that dies with the specified defect.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const dieSync: (evaluate: LazyArg<unknown>) => Layer<unknown>;
/**
 * Replaces the layer's output with `never` and includes the layer only for its
 * side-effects.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const discard: <RIn, E, ROut>(self: Layer<ROut, E, RIn>) => Layer<never, E, RIn>;
/**
 * Constructs a layer from the specified effect.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const effect: {
    /**
     * Constructs a layer from the specified effect.
     *
     * @since 2.0.0
     * @category constructors
     */
    <I, S>(tag: Context.Tag<I, S>): <E, R>(effect: Effect.Effect<Types.NoInfer<S>, E, R>) => Layer<I, E, R>;
    /**
     * Constructs a layer from the specified effect.
     *
     * @since 2.0.0
     * @category constructors
     */
    <I, S, E, R>(tag: Context.Tag<I, S>, effect: Effect.Effect<Types.NoInfer<S>, E, R>): Layer<I, E, R>;
};
/**
 * Constructs a layer from the specified effect, discarding its output.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const effectDiscard: <X, E, R>(effect: Effect.Effect<X, E, R>) => Layer<never, E, R>;
/**
 * Constructs a layer from the specified effect, which must return one or more
 * services.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const effectContext: <A, E, R>(effect: Effect.Effect<Context.Context<A>, E, R>) => Layer<A, E, R>;
/**
 * A Layer that constructs an empty Context.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const empty: Layer<never>;
/**
 * Extends the scope of this layer, returning a new layer that when provided
 * to an effect will not immediately release its associated resources when
 * that effect completes execution but instead when the scope the resulting
 * effect depends on is closed.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const extendScope: <RIn, E, ROut>(self: Layer<ROut, E, RIn>) => Layer<ROut, E, Scope.Scope | RIn>;
/**
 * Constructs a layer that fails with the specified error.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const fail: <E>(error: E) => Layer<unknown, E>;
/**
 * Constructs a layer that fails with the specified error.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const failSync: <E>(evaluate: LazyArg<E>) => Layer<unknown, E>;
/**
 * Constructs a layer that fails with the specified cause.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const failCause: <E>(cause: Cause.Cause<E>) => Layer<unknown, E>;
/**
 * Constructs a layer that fails with the specified cause.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const failCauseSync: <E>(evaluate: LazyArg<Cause.Cause<E>>) => Layer<unknown, E>;
/**
 * Constructs a layer dynamically based on the output of this layer.
 *
 * @since 2.0.0
 * @category sequencing
 */
export declare const flatMap: {
    /**
     * Constructs a layer dynamically based on the output of this layer.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <A, A2, E2, R2>(f: (context: Context.Context<A>) => Layer<A2, E2, R2>): <E, R>(self: Layer<A, E, R>) => Layer<A2, E2 | E, R2 | R>;
    /**
     * Constructs a layer dynamically based on the output of this layer.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <A, E, R, A2, E2, R2>(self: Layer<A, E, R>, f: (context: Context.Context<A>) => Layer<A2, E2, R2>): Layer<A2, E | E2, R | R2>;
};
/**
 * Flattens layers nested in the context of an effect.
 *
 * @since 2.0.0
 * @category sequencing
 */
export declare const flatten: {
    /**
     * Flattens layers nested in the context of an effect.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <I, A, E2, R2>(tag: Context.Tag<I, Layer<A, E2, R2>>): <E, R>(self: Layer<I, E, R>) => Layer<A, E2 | E, R2 | R>;
    /**
     * Flattens layers nested in the context of an effect.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <I, E, R, A, E2, R2>(self: Layer<I, E, R>, tag: Context.Tag<I, Layer<A, E2, R2>>): Layer<A, E | E2, R | R2>;
};
/**
 * Creates a fresh version of this layer that will not be shared.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const fresh: <A, E, R>(self: Layer<A, E, R>) => Layer<A, E, R>;
/**
 * @since 3.17.0
 * @category Testing
 */
export type PartialEffectful<A extends object> = Types.Simplify<{
    [K in keyof A as A[K] extends Effect.Effect<any, any, any> | Stream.Stream<any, any, any> | ((...args: any) => Effect.Effect<any, any, any> | Stream.Stream<any, any, any>) ? K : never]?: A[K];
} & {
    [K in keyof A as A[K] extends Effect.Effect<any, any, any> | Stream.Stream<any, any, any> | ((...args: any) => Effect.Effect<any, any, any> | Stream.Stream<any, any, any>) ? never : K]: A[K];
}>;
/**
 * Creates a mock layer for testing purposes. You can provide a partial
 * implementation of the service, and any methods not provided will
 * throw an `UnimplementedError` defect when called.
 *
 * **Example**
 *
 * ```ts
 * import { Context, Effect, Layer } from "effect"
 *
 * class MyService extends Context.Tag("MyService")<
 *   MyService,
 *   {
 *     one: Effect.Effect<number>
 *     two(): Effect.Effect<number>
 *   }
 * >() {}
 *
 * const MyServiceTest = Layer.mock(MyService, {
 *   two: () => Effect.succeed(2)
 * })
 * ```
 *
 * @since 3.17.0
 * @category Testing
 */
export declare const mock: {
    /**
     * Creates a mock layer for testing purposes. You can provide a partial
     * implementation of the service, and any methods not provided will
     * throw an `UnimplementedError` defect when called.
     *
     * **Example**
     *
     * ```ts
     * import { Context, Effect, Layer } from "effect"
     *
     * class MyService extends Context.Tag("MyService")<
     *   MyService,
     *   {
     *     one: Effect.Effect<number>
     *     two(): Effect.Effect<number>
     *   }
     * >() {}
     *
     * const MyServiceTest = Layer.mock(MyService, {
     *   two: () => Effect.succeed(2)
     * })
     * ```
     *
     * @since 3.17.0
     * @category Testing
     */
    <I, S extends object>(tag: Context.Tag<I, S>): (service: PartialEffectful<S>) => Layer<I>;
    /**
     * Creates a mock layer for testing purposes. You can provide a partial
     * implementation of the service, and any methods not provided will
     * throw an `UnimplementedError` defect when called.
     *
     * **Example**
     *
     * ```ts
     * import { Context, Effect, Layer } from "effect"
     *
     * class MyService extends Context.Tag("MyService")<
     *   MyService,
     *   {
     *     one: Effect.Effect<number>
     *     two(): Effect.Effect<number>
     *   }
     * >() {}
     *
     * const MyServiceTest = Layer.mock(MyService, {
     *   two: () => Effect.succeed(2)
     * })
     * ```
     *
     * @since 3.17.0
     * @category Testing
     */
    <I, S extends object>(tag: Context.Tag<I, S>, service: PartialEffectful<S>): Layer<I>;
};
declare const fromFunction: <I1, S1, I2, S2>(tagA: Context.Tag<I1, S1>, tagB: Context.Tag<I2, S2>, f: (a: Types.NoInfer<S1>) => Types.NoInfer<S2>) => Layer<I2, never, I1>;
export { 
/**
 * Constructs a layer from the context using the specified function.
 *
 * @since 2.0.0
 * @category constructors
 */
fromFunction as function };
/**
 * Builds this layer and uses it until it is interrupted. This is useful when
 * your entire application is a layer, such as an HTTP server.
 *
 * @since 2.0.0
 * @category conversions
 */
export declare const launch: <RIn, E, ROut>(self: Layer<ROut, E, RIn>) => Effect.Effect<never, E, RIn>;
/**
 * Returns a new layer whose output is mapped by the specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const map: {
    /**
     * Returns a new layer whose output is mapped by the specified function.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, B>(f: (context: Context.Context<A>) => Context.Context<B>): <E, R>(self: Layer<A, E, R>) => Layer<B, E, R>;
    /**
     * Returns a new layer whose output is mapped by the specified function.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, E, R, B>(self: Layer<A, E, R>, f: (context: Context.Context<A>) => Context.Context<B>): Layer<B, E, R>;
};
/**
 * Returns a layer with its error channel mapped using the specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
export declare const mapError: {
    /**
     * Returns a layer with its error channel mapped using the specified function.
     *
     * @since 2.0.0
     * @category mapping
     */
    <E, E2>(f: (error: E) => E2): <A, R>(self: Layer<A, E, R>) => Layer<A, E2, R>;
    /**
     * Returns a layer with its error channel mapped using the specified function.
     *
     * @since 2.0.0
     * @category mapping
     */
    <A, E, R, E2>(self: Layer<A, E, R>, f: (error: E) => E2): Layer<A, E2, R>;
};
/**
 * Feeds the error or output services of this layer into the input of either
 * the specified `failure` or `success` layers, resulting in a new layer with
 * the inputs of this layer, and the error or outputs of the specified layer.
 *
 * @since 2.0.0
 * @category folding
 */
export declare const match: {
    /**
     * Feeds the error or output services of this layer into the input of either
     * the specified `failure` or `success` layers, resulting in a new layer with
     * the inputs of this layer, and the error or outputs of the specified layer.
     *
     * @since 2.0.0
     * @category folding
     */
    <E, A2, E2, R2, A, A3, E3, R3>(options: {
        readonly onFailure: (error: E) => Layer<A2, E2, R2>;
        readonly onSuccess: (context: Context.Context<A>) => Layer<A3, E3, R3>;
    }): <R>(self: Layer<A, E, R>) => Layer<A2 & A3, E2 | E3, R2 | R3 | R>;
    /**
     * Feeds the error or output services of this layer into the input of either
     * the specified `failure` or `success` layers, resulting in a new layer with
     * the inputs of this layer, and the error or outputs of the specified layer.
     *
     * @since 2.0.0
     * @category folding
     */
    <A, E, R, A2, E2, R2, A3, E3, R3>(self: Layer<A, E, R>, options: {
        readonly onFailure: (error: E) => Layer<A2, E2, R2>;
        readonly onSuccess: (context: Context.Context<A>) => Layer<A3, E3, R3>;
    }): Layer<A2 & A3, E2 | E3, R | R2 | R3>;
};
/**
 * Feeds the error or output services of this layer into the input of either
 * the specified `failure` or `success` layers, resulting in a new layer with
 * the inputs of this layer, and the error or outputs of the specified layer.
 *
 * @since 2.0.0
 * @category folding
 */
export declare const matchCause: {
    /**
     * Feeds the error or output services of this layer into the input of either
     * the specified `failure` or `success` layers, resulting in a new layer with
     * the inputs of this layer, and the error or outputs of the specified layer.
     *
     * @since 2.0.0
     * @category folding
     */
    <E, A2, E2, R2, A, A3, E3, R3>(options: {
        readonly onFailure: (cause: Cause.Cause<E>) => Layer<A2, E2, R2>;
        readonly onSuccess: (context: Context.Context<A>) => Layer<A3, E3, R3>;
    }): <R>(self: Layer<A, E, R>) => Layer<A2 & A3, E2 | E3, R2 | R3 | R>;
    /**
     * Feeds the error or output services of this layer into the input of either
     * the specified `failure` or `success` layers, resulting in a new layer with
     * the inputs of this layer, and the error or outputs of the specified layer.
     *
     * @since 2.0.0
     * @category folding
     */
    <A, E, R, A2, E2, R2, A3, E3, R3>(self: Layer<A, E, R>, options: {
        readonly onFailure: (cause: Cause.Cause<E>) => Layer<A2, E2, R2>;
        readonly onSuccess: (context: Context.Context<A>) => Layer<A3, E3, R3>;
    }): Layer<A2 & A3, E2 | E3, R | R2 | R3>;
};
/**
 * Returns a scoped effect that, if evaluated, will return the lazily computed
 * result of this layer.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const memoize: <RIn, E, ROut>(self: Layer<ROut, E, RIn>) => Effect.Effect<Layer<ROut, E, RIn>, never, Scope.Scope>;
/**
 * Merges this layer with the specified layer concurrently, producing a new layer with combined input and output types.
 *
 * @since 2.0.0
 * @category zipping
 */
export declare const merge: {
    /**
     * Merges this layer with the specified layer concurrently, producing a new layer with combined input and output types.
     *
     * @since 2.0.0
     * @category zipping
     */
    <RIn2, E2, ROut2>(that: Layer<ROut2, E2, RIn2>): <RIn, E1, ROut>(self: Layer<ROut, E1, RIn>) => Layer<ROut2 | ROut, E2 | E1, RIn2 | RIn>;
    /**
     * Merges this layer with the specified layer concurrently, producing a new layer with combined input and output types.
     *
     * @since 2.0.0
     * @category zipping
     */
    <RIn, E1, ROut, RIn2, E2, ROut2>(self: Layer<ROut, E1, RIn>, that: Layer<ROut2, E2, RIn2>): Layer<ROut | ROut2, E1 | E2, RIn | RIn2>;
};
/**
 * Combines all the provided layers concurrently, creating a new layer with merged input, error, and output types.
 *
 * @since 2.0.0
 * @category zipping
 */
export declare const mergeAll: <Layers extends readonly [Layer<never, any, any>, ...Array<Layer<never, any, any>>]>(...layers: Layers) => Layer<{
    [k in keyof Layers]: Layer.Success<Layers[k]>;
}[number], {
    [k in keyof Layers]: Layer.Error<Layers[k]>;
}[number], {
    [k in keyof Layers]: Layer.Context<Layers[k]>;
}[number]>;
/**
 * Translates effect failure into death of the fiber, making all failures
 * unchecked and not a part of the type of the layer.
 *
 * @since 2.0.0
 * @category error handling
 */
export declare const orDie: <A, E, R>(self: Layer<A, E, R>) => Layer<A, never, R>;
/**
 * Executes this layer and returns its output, if it succeeds, but otherwise
 * executes the specified layer.
 *
 * @since 2.0.0
 * @category error handling
 */
export declare const orElse: {
    /**
     * Executes this layer and returns its output, if it succeeds, but otherwise
     * executes the specified layer.
     *
     * @since 2.0.0
     * @category error handling
     */
    <A2, E2, R2>(that: LazyArg<Layer<A2, E2, R2>>): <A, E, R>(self: Layer<A, E, R>) => Layer<A & A2, E2 | E, R2 | R>;
    /**
     * Executes this layer and returns its output, if it succeeds, but otherwise
     * executes the specified layer.
     *
     * @since 2.0.0
     * @category error handling
     */
    <A, E, R, A2, E2, R2>(self: Layer<A, E, R>, that: LazyArg<Layer<A2, E2, R2>>): Layer<A & A2, E | E2, R | R2>;
};
/**
 * Returns a new layer that produces the outputs of this layer but also
 * passes through the inputs.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const passthrough: <RIn, E, ROut>(self: Layer<ROut, E, RIn>) => Layer<RIn | ROut, E, RIn>;
/**
 * Projects out part of one of the services output by this layer using the
 * specified function.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const project: {
    /**
     * Projects out part of one of the services output by this layer using the
     * specified function.
     *
     * @since 2.0.0
     * @category utils
     */
    <I1, S1, I2, S2>(tagA: Context.Tag<I1, S1>, tagB: Context.Tag<I2, S2>, f: (a: Types.NoInfer<S1>) => Types.NoInfer<S2>): <RIn, E>(self: Layer<I1, E, RIn>) => Layer<I2, E, RIn>;
    /**
     * Projects out part of one of the services output by this layer using the
     * specified function.
     *
     * @since 2.0.0
     * @category utils
     */
    <RIn, E, I1, S1, I2, S2>(self: Layer<I1, E, RIn>, tagA: Context.Tag<I1, S1>, tagB: Context.Tag<I2, S2>, f: (a: Types.NoInfer<S1>) => Types.NoInfer<S2>): Layer<I2, E, RIn>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const locallyEffect: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <RIn, E, ROut, RIn2, E2, ROut2>(f: (_: Effect.Effect<RIn, E, Context.Context<ROut>>) => Effect.Effect<RIn2, E2, Context.Context<ROut2>>): (self: Layer<ROut, E, RIn>) => Layer<ROut2, E2, RIn2>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <RIn, E, ROut, RIn2, E2, ROut2>(self: Layer<ROut, E, RIn>, f: (_: Effect.Effect<RIn, E, Context.Context<ROut>>) => Effect.Effect<RIn2, E2, Context.Context<ROut2>>): Layer<ROut2, E2, RIn2>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const locally: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <X>(ref: FiberRef<X>, value: X): <A, E, R>(self: Layer<A, E, R>) => Layer<A, E, R>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, E, R, X>(self: Layer<A, E, R>, ref: FiberRef<X>, value: X): Layer<A, E, R>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const locallyWith: {
    /**
     * @since 2.0.0
     * @category utils
     */
    <X>(ref: FiberRef<X>, value: (_: X) => X): <A, E, R>(self: Layer<A, E, R>) => Layer<A, E, R>;
    /**
     * @since 2.0.0
     * @category utils
     */
    <A, E, R, X>(self: Layer<A, E, R>, ref: FiberRef<X>, value: (_: X) => X): Layer<A, E, R>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const locallyScoped: <A>(self: FiberRef<A>, value: A) => Layer<never>;
/**
 * @since 2.0.0
 * @category utils
 */
export declare const fiberRefLocallyScopedWith: <A>(self: FiberRef<A>, value: (_: A) => A) => Layer<never>;
/**
 * Retries constructing this layer according to the specified schedule.
 *
 * @since 2.0.0
 * @category retrying
 */
export declare const retry: {
    /**
     * Retries constructing this layer according to the specified schedule.
     *
     * @since 2.0.0
     * @category retrying
     */
    <X, E, RIn2>(schedule: Schedule.Schedule<X, NoInfer<E>, RIn2>): <ROut, RIn>(self: Layer<ROut, E, RIn>) => Layer<ROut, E, RIn2 | RIn>;
    /**
     * Retries constructing this layer according to the specified schedule.
     *
     * @since 2.0.0
     * @category retrying
     */
    <ROut, E, RIn, X, RIn2>(self: Layer<ROut, E, RIn>, schedule: Schedule.Schedule<X, E, RIn2>): Layer<ROut, E, RIn | RIn2>;
};
/**
 * A layer that constructs a scope and closes it when the workflow the layer
 * is provided to completes execution, whether by success, failure, or
 * interruption. This can be used to close a scope when providing a layer to a
 * workflow.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const scope: Layer<Scope.Scope>;
/**
 * Constructs a layer from the specified scoped effect.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const scoped: {
    /**
     * Constructs a layer from the specified scoped effect.
     *
     * @since 2.0.0
     * @category constructors
     */
    <I, S>(tag: Context.Tag<I, S>): <E, R>(effect: Effect.Effect<Types.NoInfer<S>, E, R>) => Layer<I, E, Exclude<R, Scope.Scope>>;
    /**
     * Constructs a layer from the specified scoped effect.
     *
     * @since 2.0.0
     * @category constructors
     */
    <I, S, E, R>(tag: Context.Tag<I, S>, effect: Effect.Effect<Types.NoInfer<S>, E, R>): Layer<I, E, Exclude<R, Scope.Scope>>;
};
/**
 * Constructs a layer from the specified scoped effect, discarding its output.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const scopedDiscard: <X, E, R>(effect: Effect.Effect<X, E, R>) => Layer<never, E, Exclude<R, Scope.Scope>>;
/**
 * Constructs a layer from the specified scoped effect, which must return one
 * or more services.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const scopedContext: <A, E, R>(effect: Effect.Effect<Context.Context<A>, E, R>) => Layer<A, E, Exclude<R, Scope.Scope>>;
/**
 * Constructs a layer that accesses and returns the specified service from the
 * context.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const service: <I, S>(tag: Context.Tag<I, S>) => Layer<I, never, I>;
/**
 * Constructs a layer from the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const succeed: {
    /**
     * Constructs a layer from the specified value.
     *
     * @since 2.0.0
     * @category constructors
     */
    <I, S>(tag: Context.Tag<I, S>): (resource: Types.NoInfer<S>) => Layer<I>;
    /**
     * Constructs a layer from the specified value.
     *
     * @since 2.0.0
     * @category constructors
     */
    <I, S>(tag: Context.Tag<I, S>, resource: Types.NoInfer<S>): Layer<I>;
};
/**
 * Constructs a layer from the specified value, which must return one or more
 * services.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const succeedContext: <A>(context: Context.Context<A>) => Layer<A>;
/**
 * Lazily constructs a layer. This is useful to avoid infinite recursion when
 * creating layers that refer to themselves.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const suspend: <RIn, E, ROut>(evaluate: LazyArg<Layer<ROut, E, RIn>>) => Layer<ROut, E, RIn>;
/**
 * Lazily constructs a layer from the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const sync: {
    /**
     * Lazily constructs a layer from the specified value.
     *
     * @since 2.0.0
     * @category constructors
     */
    <I, S>(tag: Context.Tag<I, S>): (evaluate: LazyArg<Types.NoInfer<S>>) => Layer<I>;
    /**
     * Lazily constructs a layer from the specified value.
     *
     * @since 2.0.0
     * @category constructors
     */
    <I, S>(tag: Context.Tag<I, S>, evaluate: LazyArg<Types.NoInfer<S>>): Layer<I>;
};
/**
 * Lazily constructs a layer from the specified value, which must return one or more
 * services.
 *
 * @since 2.0.0
 * @category constructors
 */
export declare const syncContext: <A>(evaluate: LazyArg<Context.Context<A>>) => Layer<A>;
/**
 * Performs the specified effect if this layer succeeds.
 *
 * @since 2.0.0
 * @category sequencing
 */
export declare const tap: {
    /**
     * Performs the specified effect if this layer succeeds.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <ROut, XR extends ROut, RIn2, E2, X>(f: (context: Context.Context<XR>) => Effect.Effect<X, E2, RIn2>): <RIn, E>(self: Layer<ROut, E, RIn>) => Layer<ROut, E2 | E, RIn2 | RIn>;
    /**
     * Performs the specified effect if this layer succeeds.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <RIn, E, ROut, XR extends ROut, RIn2, E2, X>(self: Layer<ROut, E, RIn>, f: (context: Context.Context<XR>) => Effect.Effect<X, E2, RIn2>): Layer<ROut, E | E2, RIn | RIn2>;
};
/**
 * Performs the specified effect if this layer fails.
 *
 * @since 2.0.0
 * @category sequencing
 */
export declare const tapError: {
    /**
     * Performs the specified effect if this layer fails.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <E, XE extends E, RIn2, E2, X>(f: (e: XE) => Effect.Effect<X, E2, RIn2>): <RIn, ROut>(self: Layer<ROut, E, RIn>) => Layer<ROut, E | E2, RIn2 | RIn>;
    /**
     * Performs the specified effect if this layer fails.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <RIn, E, XE extends E, ROut, RIn2, E2, X>(self: Layer<ROut, E, RIn>, f: (e: XE) => Effect.Effect<X, E2, RIn2>): Layer<ROut, E | E2, RIn | RIn2>;
};
/**
 * Performs the specified effect if this layer fails.
 *
 * @since 2.0.0
 * @category sequencing
 */
export declare const tapErrorCause: {
    /**
     * Performs the specified effect if this layer fails.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <E, XE extends E, RIn2, E2, X>(f: (cause: Cause.Cause<XE>) => Effect.Effect<X, E2, RIn2>): <RIn, ROut>(self: Layer<ROut, E, RIn>) => Layer<ROut, E | E2, RIn2 | RIn>;
    /**
     * Performs the specified effect if this layer fails.
     *
     * @since 2.0.0
     * @category sequencing
     */
    <RIn, E, XE extends E, ROut, RIn2, E2, X>(self: Layer<ROut, E, RIn>, f: (cause: Cause.Cause<XE>) => Effect.Effect<X, E2, RIn2>): Layer<ROut, E | E2, RIn | RIn2>;
};
/**
 * Converts a layer that requires no services into a scoped runtime, which can
 * be used to execute effects.
 *
 * @since 2.0.0
 * @category conversions
 */
export declare const toRuntime: <RIn, E, ROut>(self: Layer<ROut, E, RIn>) => Effect.Effect<Runtime.Runtime<ROut>, E, Scope.Scope | RIn>;
/**
 * Converts a layer that requires no services into a scoped runtime, which can
 * be used to execute effects.
 *
 * @since 2.0.0
 * @category conversions
 */
export declare const toRuntimeWithMemoMap: {
    /**
     * Converts a layer that requires no services into a scoped runtime, which can
     * be used to execute effects.
     *
     * @since 2.0.0
     * @category conversions
     */
    (memoMap: MemoMap): <RIn, E, ROut>(self: Layer<ROut, E, RIn>) => Effect.Effect<Runtime.Runtime<ROut>, E, Scope.Scope | RIn>;
    /**
     * Converts a layer that requires no services into a scoped runtime, which can
     * be used to execute effects.
     *
     * @since 2.0.0
     * @category conversions
     */
    <RIn, E, ROut>(self: Layer<ROut, E, RIn>, memoMap: MemoMap): Effect.Effect<Runtime.Runtime<ROut>, E, Scope.Scope | RIn>;
};
/**
 * Feeds the output services of this builder into the input of the specified
 * builder, resulting in a new builder with the inputs of this builder as
 * well as any leftover inputs, and the outputs of the specified builder.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const provide: {
    /**
     * Feeds the output services of this builder into the input of the specified
     * builder, resulting in a new builder with the inputs of this builder as
     * well as any leftover inputs, and the outputs of the specified builder.
     *
     * @since 2.0.0
     * @category utils
     */
    <RIn, E, ROut>(that: Layer<ROut, E, RIn>): <RIn2, E2, ROut2>(self: Layer<ROut2, E2, RIn2>) => Layer<ROut2, E | E2, RIn | Exclude<RIn2, ROut>>;
    /**
     * Feeds the output services of this builder into the input of the specified
     * builder, resulting in a new builder with the inputs of this builder as
     * well as any leftover inputs, and the outputs of the specified builder.
     *
     * @since 2.0.0
     * @category utils
     */
    <const Layers extends readonly [Layer.Any, ...Array<Layer.Any>]>(that: Layers): <A, E, R>(self: Layer<A, E, R>) => Layer<A, E | {
        [k in keyof Layers]: Layer.Error<Layers[k]>;
    }[number], {
        [k in keyof Layers]: Layer.Context<Layers[k]>;
    }[number] | Exclude<R, {
        [k in keyof Layers]: Layer.Success<Layers[k]>;
    }[number]>>;
    /**
     * Feeds the output services of this builder into the input of the specified
     * builder, resulting in a new builder with the inputs of this builder as
     * well as any leftover inputs, and the outputs of the specified builder.
     *
     * @since 2.0.0
     * @category utils
     */
    <RIn2, E2, ROut2, RIn, E, ROut>(self: Layer<ROut2, E2, RIn2>, that: Layer<ROut, E, RIn>): Layer<ROut2, E | E2, RIn | Exclude<RIn2, ROut>>;
    /**
     * Feeds the output services of this builder into the input of the specified
     * builder, resulting in a new builder with the inputs of this builder as
     * well as any leftover inputs, and the outputs of the specified builder.
     *
     * @since 2.0.0
     * @category utils
     */
    <A, E, R, const Layers extends readonly [Layer.Any, ...Array<Layer.Any>]>(self: Layer<A, E, R>, that: Layers): Layer<A, E | {
        [k in keyof Layers]: Layer.Error<Layers[k]>;
    }[number], {
        [k in keyof Layers]: Layer.Context<Layers[k]>;
    }[number] | Exclude<R, {
        [k in keyof Layers]: Layer.Success<Layers[k]>;
    }[number]>>;
};
/**
 * Feeds the output services of this layer into the input of the specified
 * layer, resulting in a new layer with the inputs of this layer, and the
 * outputs of both layers.
 *
 * @since 2.0.0
 * @category utils
 */
export declare const provideMerge: {
    /**
     * Feeds the output services of this layer into the input of the specified
     * layer, resulting in a new layer with the inputs of this layer, and the
     * outputs of both layers.
     *
     * @since 2.0.0
     * @category utils
     */
    <RIn, E, ROut>(self: Layer<ROut, E, RIn>): <RIn2, E2, ROut2>(that: Layer<ROut2, E2, RIn2>) => Layer<ROut | ROut2, E | E2, RIn | Exclude<RIn2, ROut>>;
    /**
     * Feeds the output services of this layer into the input of the specified
     * layer, resulting in a new layer with the inputs of this layer, and the
     * outputs of both layers.
     *
     * @since 2.0.0
     * @category utils
     */
    <RIn2, E2, ROut2, RIn, E, ROut>(that: Layer<ROut2, E2, RIn2>, self: Layer<ROut, E, RIn>): Layer<ROut2 | ROut, E2 | E, RIn | Exclude<RIn2, ROut>>;
};
/**
 * Combines this layer with the specified layer concurrently, creating a new layer with merged input types and
 * combined output types using the provided function.
 *
 * @since 2.0.0
 * @category zipping
 */
export declare const zipWith: {
    /**
     * Combines this layer with the specified layer concurrently, creating a new layer with merged input types and
     * combined output types using the provided function.
     *
     * @since 2.0.0
     * @category zipping
     */
    <B, E2, R2, A, C>(that: Layer<B, E2, R2>, f: (a: Context.Context<A>, b: Context.Context<B>) => Context.Context<C>): <E, R>(self: Layer<A, E, R>) => Layer<C, E2 | E, R2 | R>;
    /**
     * Combines this layer with the specified layer concurrently, creating a new layer with merged input types and
     * combined output types using the provided function.
     *
     * @since 2.0.0
     * @category zipping
     */
    <A, E, R, B, E2, R2, C>(self: Layer<A, E, R>, that: Layer<B, E2, R2>, f: (a: Context.Context<A>, b: Context.Context<B>) => Context.Context<C>): Layer<C, E | E2, R | R2>;
};
/**
 * @since 2.0.0
 * @category utils
 */
export declare const unwrapEffect: <A, E1, R1, E, R>(self: Effect.Effect<Layer<A, E1, R1>, E, R>) => Layer<A, E | E1, R | R1>;
/**
 * @since 2.0.0
 * @category utils
 */
export declare const unwrapScoped: <A, E1, R1, E, R>(self: Effect.Effect<Layer<A, E1, R1>, E, R>) => Layer<A, E | E1, R1 | Exclude<R, Scope.Scope>>;
/**
 * @since 2.0.0
 * @category clock
 */
export declare const setClock: <A extends Clock.Clock>(clock: A) => Layer<never>;
/**
 * Sets the current `ConfigProvider`.
 *
 * @since 2.0.0
 * @category config
 */
export declare const setConfigProvider: (configProvider: ConfigProvider) => Layer<never>;
/**
 * Adds the provided span to the span stack.
 *
 * @since 2.0.0
 * @category tracing
 */
export declare const parentSpan: (span: Tracer.AnySpan) => Layer<Tracer.ParentSpan>;
/**
 * @since 3.15.0
 * @category Random
 */
export declare const setRandom: <A extends Random.Random>(random: A) => Layer<never>;
/**
 * @since 2.0.0
 * @category requests & batching
 */
export declare const setRequestBatching: (requestBatching: boolean) => Layer<never>;
/**
 * @since 2.0.0
 * @category requests & batching
 */
export declare const setRequestCaching: (requestCaching: boolean) => Layer<never>;
/**
 * @since 2.0.0
 * @category requests & batching
 */
export declare const setRequestCache: {
    /**
     * @since 2.0.0
     * @category requests & batching
     */
    <E, R>(cache: Effect.Effect<Request.Cache, E, R>): Layer<never, E, Exclude<R, Scope.Scope>>;
    /**
     * @since 2.0.0
     * @category requests & batching
     */
    (cache: Request.Cache): Layer<never>;
};
/**
 * @since 2.0.0
 * @category scheduler
 */
export declare const setScheduler: (scheduler: Scheduler.Scheduler) => Layer<never>;
/**
 * Create and add a span to the current span stack.
 *
 * The span is ended when the Layer is released.
 *
 * @since 2.0.0
 * @category tracing
 */
export declare const span: (name: string, options?: Tracer.SpanOptions & {
    readonly onEnd?: ((span: Tracer.Span, exit: Exit.Exit<unknown, unknown>) => Effect.Effect<void>) | undefined;
}) => Layer<Tracer.ParentSpan>;
/**
 * Create a Layer that sets the current Tracer
 *
 * @since 2.0.0
 * @category tracing
 */
export declare const setTracer: (tracer: Tracer.Tracer) => Layer<never>;
/**
 * @since 2.0.0
 * @category tracing
 */
export declare const setTracerEnabled: (enabled: boolean) => Layer<never>;
/**
 * @since 2.0.0
 * @category tracing
 */
export declare const setTracerTiming: (enabled: boolean) => Layer<never>;
/**
 * @since 2.0.0
 * @category logging
 */
export declare const setUnhandledErrorLogLevel: (level: Option.Option<LogLevel>) => Layer<never>;
/**
 * @since 3.17.0
 * @category logging
 */
export declare const setVersionMismatchErrorLogLevel: (level: Option.Option<LogLevel>) => Layer<never>;
/**
 * @since 2.0.0
 * @category tracing
 */
export declare const withSpan: {
    /**
     * @since 2.0.0
     * @category tracing
     */
    (name: string, options?: Tracer.SpanOptions & {
        readonly onEnd?: ((span: Tracer.Span, exit: Exit.Exit<unknown, unknown>) => Effect.Effect<void>) | undefined;
    }): <A, E, R>(self: Layer<A, E, R>) => Layer<A, E, Exclude<R, Tracer.ParentSpan>>;
    /**
     * @since 2.0.0
     * @category tracing
     */
    <A, E, R>(self: Layer<A, E, R>, name: string, options?: Tracer.SpanOptions & {
        readonly onEnd?: ((span: Tracer.Span, exit: Exit.Exit<unknown, unknown>) => Effect.Effect<void>) | undefined;
    }): Layer<A, E, Exclude<R, Tracer.ParentSpan>>;
};
/**
 * @since 2.0.0
 * @category tracing
 */
export declare const withParentSpan: {
    /**
     * @since 2.0.0
     * @category tracing
     */
    (span: Tracer.AnySpan): <A, E, R>(self: Layer<A, E, R>) => Layer<A, E, Exclude<R, Tracer.ParentSpan>>;
    /**
     * @since 2.0.0
     * @category tracing
     */
    <A, E, R>(self: Layer<A, E, R>, span: Tracer.AnySpan): Layer<A, E, Exclude<R, Tracer.ParentSpan>>;
};
/**
 * Constructs a `MemoMap` that can be used to build additional layers.
 *
 * @since 2.0.0
 * @category memo map
 */
export declare const makeMemoMap: Effect.Effect<MemoMap>;
/**
 * Builds a layer into an `Effect` value, using the specified `MemoMap` to memoize
 * the layer construction.
 *
 * @since 2.0.0
 * @category memo map
 */
export declare const buildWithMemoMap: {
    /**
     * Builds a layer into an `Effect` value, using the specified `MemoMap` to memoize
     * the layer construction.
     *
     * @since 2.0.0
     * @category memo map
     */
    (memoMap: MemoMap, scope: Scope.Scope): <RIn, E, ROut>(self: Layer<ROut, E, RIn>) => Effect.Effect<Context.Context<ROut>, E, RIn>;
    /**
     * Builds a layer into an `Effect` value, using the specified `MemoMap` to memoize
     * the layer construction.
     *
     * @since 2.0.0
     * @category memo map
     */
    <RIn, E, ROut>(self: Layer<ROut, E, RIn>, memoMap: MemoMap, scope: Scope.Scope): Effect.Effect<Context.Context<ROut>, E, RIn>;
};
/**
 * Updates a service in the context with a new implementation.
 *
 * **Details**
 *
 * This function modifies the existing implementation of a service in the
 * context. It retrieves the current service, applies the provided
 * transformation function `f`, and replaces the old service with the
 * transformed one.
 *
 * **When to Use**
 *
 * This is useful for adapting or extending a service's behavior during the
 * creation of a layer.
 *
 * @since 3.13.0
 * @category utils
 */
export declare const updateService: (<I, A>(tag: Context.Tag<I, A>, f: (a: A) => A) => <A1, E1, R1>(layer: Layer<A1, E1, R1>) => Layer<A1, E1, I | R1>) & (<A1, E1, R1, I, A>(layer: Layer<A1, E1, R1>, tag: Context.Tag<I, A>, f: (a: A) => A) => Layer<A1, E1, I | R1>);
/**
 * A no-op type constraint that enforces the success channel of a Layer conforms to
 * the specified success type `ROut`.
 *
 * @example
 * import { Layer } from "effect"
 *
 * // Ensure that the layer produces the expected services.
 * const program = Layer.succeed(MyService, new MyServiceImpl()).pipe(Layer.ensureSuccessType<MyService>())
 *
 * @since 3.20.0
 * @category Type constraints
 */
export declare const ensureSuccessType: <ROut>() => <ROut2 extends ROut, E, RIn>(layer: Layer<ROut2, E, RIn>) => Layer<ROut2, E, RIn>;
/**
 * A no-op type constraint that enforces the error channel of a Layer conforms to
 * the specified error type `E`.
 *
 * @example
 * import { Layer } from "effect"
 *
 * // Ensure that the layer does not expose any unhandled errors.
 * const program = Layer.succeed(MyService, new MyServiceImpl()).pipe(Layer.ensureErrorType<never>())
 *
 * @since 3.20.0
 * @category Type constraints
 */
export declare const ensureErrorType: <E>() => <ROut, E2 extends E, RIn>(layer: Layer<ROut, E2, RIn>) => Layer<ROut, E2, RIn>;
/**
 * A no-op type constraint that enforces the requirements channel of a Layer conforms to
 * the specified requirements type `RIn`.
 *
 * @example
 * import { Layer } from "effect"
 *
 * // Ensure that the layer does not have any requirements.
 * const program = Layer.succeed(MyService, new MyServiceImpl()).pipe(Layer.ensureRequirementsType<never>())
 *
 * @since 3.20.0
 * @category Type constraints
 */
export declare const ensureRequirementsType: <RIn>() => <ROut, E, RIn2 extends RIn>(layer: Layer<ROut, E, RIn2>) => Layer<ROut, E, RIn2>;
//# sourceMappingURL=Layer.d.ts.map