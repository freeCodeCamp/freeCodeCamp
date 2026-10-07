/**
 * @since 2.0.0
 */
import * as Context from "./Context.js";
import type * as DefaultServices from "./DefaultServices.js";
import * as Effect from "./Effect.js";
import type * as Fiber from "./Fiber.js";
import type * as FiberRef from "./FiberRef.js";
import type * as Layer from "./Layer.js";
import type * as Scope from "./Scope.js";
import type * as SortedSet from "./SortedSet.js";
import type * as TestAnnotation from "./TestAnnotation.js";
import * as Annotations from "./TestAnnotations.js";
import * as TestConfig from "./TestConfig.js";
import * as Live from "./TestLive.js";
import * as Sized from "./TestSized.js";
/**
 * @since 2.0.0
 */
export type TestServices = Annotations.TestAnnotations | Live.TestLive | Sized.TestSized | TestConfig.TestConfig;
/**
 * The default Effect test services.
 *
 * @since 2.0.0
 */
export declare const liveServices: Context.Context<TestServices>;
/**
 * @since 2.0.0
 */
export declare const currentServices: FiberRef.FiberRef<Context.Context<TestServices>>;
/**
 * Retrieves the `Annotations` service for this test.
 *
 * @since 2.0.0
 */
export declare const annotations: () => Effect.Effect<Annotations.TestAnnotations>;
/**
 * Retrieves the `Annotations` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
export declare const annotationsWith: <A, E, R>(f: (annotations: Annotations.TestAnnotations) => Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
/**
 * Executes the specified workflow with the specified implementation of the
 * annotations service.
 *
 * @since 2.0.0
 */
export declare const withAnnotations: ((annotations: Annotations.TestAnnotations) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>) & (<A, E, R>(effect: Effect.Effect<A, E, R>, annotations: Annotations.TestAnnotations) => Effect.Effect<A, E, R>);
/**
 * Sets the implementation of the annotations service to the specified value
 * and restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
export declare const withAnnotationsScoped: (annotations: Annotations.TestAnnotations) => Effect.Effect<void, never, Scope.Scope>;
/**
 * Constructs a new `Annotations` service wrapped in a layer.
 *
 * @since 2.0.0
 */
export declare const annotationsLayer: () => Layer.Layer<Annotations.TestAnnotations>;
/**
 * Accesses an `Annotations` instance in the context and retrieves the
 * annotation of the specified type, or its default value if there is none.
 *
 * @since 2.0.0
 */
export declare const get: <A>(key: TestAnnotation.TestAnnotation<A>) => Effect.Effect<A>;
/**
 * Accesses an `Annotations` instance in the context and appends the
 * specified annotation to the annotation map.
 *
 * @since 2.0.0
 */
export declare const annotate: <A>(key: TestAnnotation.TestAnnotation<A>, value: A) => Effect.Effect<void>;
/**
 * Returns the set of all fibers in this test.
 *
 * @since 2.0.0
 */
export declare const supervisedFibers: () => Effect.Effect<SortedSet.SortedSet<Fiber.RuntimeFiber<unknown, unknown>>>;
/**
 * Retrieves the `Live` service for this test and uses it to run the specified
 * workflow.
 *
 * @since 2.0.0
 */
export declare const liveWith: <A, E, R>(f: (live: Live.TestLive) => Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
/**
 * Retrieves the `Live` service for this test.
 *
 * @since 2.0.0
 */
export declare const live: Effect.Effect<Live.TestLive>;
/**
 * Executes the specified workflow with the specified implementation of the
 * live service.
 *
 * @since 2.0.0
 */
export declare const withLive: ((live: Live.TestLive) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>) & (<A, E, R>(effect: Effect.Effect<A, E, R>, live: Live.TestLive) => Effect.Effect<A, E, R>);
/**
 * Sets the implementation of the live service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
export declare const withLiveScoped: (live: Live.TestLive) => Effect.Effect<void, never, Scope.Scope>;
/**
 * Constructs a new `Live` service wrapped in a layer.
 *
 * @since 2.0.0
 */
export declare const liveLayer: () => Layer.Layer<Live.TestLive, never, DefaultServices.DefaultServices>;
/**
 * Provides a workflow with the "live" default Effect services.
 *
 * @since 2.0.0
 */
export declare const provideLive: <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
/**
 * Runs a transformation function with the live default Effect services while
 * ensuring that the workflow itself is run with the test services.
 *
 * @since 2.0.0
 */
export declare const provideWithLive: (<A, E, R, A2, E2, R2>(f: (effect: Effect.Effect<A, E, R>) => Effect.Effect<A2, E2, R2>) => (self: Effect.Effect<A, E, R>) => Effect.Effect<A2, E | E2, R | R2>) & (<A, E, R, A2, E2, R2>(self: Effect.Effect<A, E, R>, f: (effect: Effect.Effect<A, E, R>) => Effect.Effect<A2, E2, R2>) => Effect.Effect<A2, E | E2, R | R2>);
/**
 * Retrieves the `Sized` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
export declare const sizedWith: <A, E, R>(f: (sized: Sized.TestSized) => Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
/**
 * Retrieves the `Sized` service for this test.
 *
 * @since 2.0.0
 */
export declare const sized: Effect.Effect<Sized.TestSized>;
/**
 * Executes the specified workflow with the specified implementation of the
 * sized service.
 *
 * @since 2.0.0
 */
export declare const withSized: ((sized: Sized.TestSized) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>) & (<A, E, R>(effect: Effect.Effect<A, E, R>, sized: Sized.TestSized) => Effect.Effect<A, E, R>);
/**
 * Sets the implementation of the sized service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
export declare const withSizedScoped: (sized: Sized.TestSized) => Effect.Effect<void, never, Scope.Scope>;
/**
 * @since 2.0.0
 */
export declare const sizedLayer: (size: number) => Layer.Layer<Sized.TestSized>;
/**
 * @since 2.0.0
 */
export declare const size: Effect.Effect<number>;
/**
 * @since 2.0.0
 */
export declare const withSize: ((size: number) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>) & (<A, E, R>(effect: Effect.Effect<A, E, R>, size: number) => Effect.Effect<A, E, R>);
/**
 * Retrieves the `TestConfig` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
export declare const testConfigWith: <A, E, R>(f: (config: TestConfig.TestConfig) => Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>;
/**
 * Retrieves the `TestConfig` service for this test.
 *
 * @since 2.0.0
 */
export declare const testConfig: Effect.Effect<TestConfig.TestConfig>;
/**
 * Executes the specified workflow with the specified implementation of the
 * config service.
 *
 * @since 2.0.0
 */
export declare const withTestConfig: ((config: TestConfig.TestConfig) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>) & (<A, E, R>(effect: Effect.Effect<A, E, R>, config: TestConfig.TestConfig) => Effect.Effect<A, E, R>);
/**
 * Sets the implementation of the config service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
export declare const withTestConfigScoped: (config: TestConfig.TestConfig) => Effect.Effect<void, never, Scope.Scope>;
/**
 * Constructs a new `TestConfig` service with the specified settings.
 *
 * @since 2.0.0
 */
export declare const testConfigLayer: (params: {
    readonly repeats: number;
    readonly retries: number;
    readonly samples: number;
    readonly shrinks: number;
}) => Layer.Layer<TestConfig.TestConfig>;
/**
 * The number of times to repeat tests to ensure they are stable.
 *
 * @since 2.0.0
 */
export declare const repeats: Effect.Effect<number>;
/**
 * The number of times to retry flaky tests.
 *
 * @since 2.0.0
 */
export declare const retries: Effect.Effect<number>;
/**
 * The number of sufficient samples to check for a random variable.
 *
 * @since 2.0.0
 */
export declare const samples: Effect.Effect<number>;
/**
 * The maximum number of shrinkings to minimize large failures.
 *
 * @since 2.0.0
 */
export declare const shrinks: Effect.Effect<number>;
//# sourceMappingURL=TestServices.d.ts.map