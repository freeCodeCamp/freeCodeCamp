/**
 * @since 2.0.0
 */
import * as Context from "./Context.js"
import type * as DefaultServices from "./DefaultServices.js"
import * as Effect from "./Effect.js"
import type * as Fiber from "./Fiber.js"
import type * as FiberRef from "./FiberRef.js"
import { dual, pipe } from "./Function.js"
import * as core from "./internal/core.js"
import * as defaultServices from "./internal/defaultServices.js"
import * as fiberRuntime from "./internal/fiberRuntime.js"
import * as layer from "./internal/layer.js"
import * as ref from "./internal/ref.js"
import type * as Layer from "./Layer.js"
import type * as Scope from "./Scope.js"
import type * as SortedSet from "./SortedSet.js"
import type * as TestAnnotation from "./TestAnnotation.js"
import * as TestAnnotationMap from "./TestAnnotationMap.js"
import * as Annotations from "./TestAnnotations.js"
import * as TestConfig from "./TestConfig.js"
import * as Live from "./TestLive.js"
import * as Sized from "./TestSized.js"

/**
 * @since 2.0.0
 */
export type TestServices =
  | Annotations.TestAnnotations
  | Live.TestLive
  | Sized.TestSized
  | TestConfig.TestConfig

/**
 * The default Effect test services.
 *
 * @since 2.0.0
 */
export const liveServices: Context.Context<TestServices> = pipe(
  Context.make(Annotations.TestAnnotations, Annotations.make(ref.unsafeMake(TestAnnotationMap.empty()))),
  Context.add(Live.TestLive, Live.make(defaultServices.liveServices)),
  Context.add(Sized.TestSized, Sized.make(100)),
  Context.add(TestConfig.TestConfig, TestConfig.make({ repeats: 100, retries: 100, samples: 200, shrinks: 1000 }))
)

/**
 * @since 2.0.0
 */
export const currentServices: FiberRef.FiberRef<Context.Context<TestServices>> = core.fiberRefUnsafeMakeContext(
  liveServices
)

/**
 * Retrieves the `Annotations` service for this test.
 *
 * @since 2.0.0
 */
export const annotations = (): Effect.Effect<Annotations.TestAnnotations> => annotationsWith(core.succeed)

/**
 * Retrieves the `Annotations` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
export const annotationsWith = <A, E, R>(
  f: (annotations: Annotations.TestAnnotations) => Effect.Effect<A, E, R>
): Effect.Effect<A, E, R> =>
  core.fiberRefGetWith(
    currentServices,
    (services) => f(Context.get(services, Annotations.TestAnnotations))
  )

/**
 * Executes the specified workflow with the specified implementation of the
 * annotations service.
 *
 * @since 2.0.0
 */
export const withAnnotations = dual<
  /**
   * Executes the specified workflow with the specified implementation of the
   * annotations service.
   *
   * @since 2.0.0
   */
  (annotations: Annotations.TestAnnotations) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  /**
   * Executes the specified workflow with the specified implementation of the
   * annotations service.
   *
   * @since 2.0.0
   */
  <A, E, R>(effect: Effect.Effect<A, E, R>, annotations: Annotations.TestAnnotations) => Effect.Effect<A, E, R>
>(2, (effect, annotations) =>
  core.fiberRefLocallyWith(
    currentServices,
    Context.add(Annotations.TestAnnotations, annotations)
  )(effect))

/**
 * Sets the implementation of the annotations service to the specified value
 * and restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
export const withAnnotationsScoped = (
  annotations: Annotations.TestAnnotations
): Effect.Effect<void, never, Scope.Scope> =>
  fiberRuntime.fiberRefLocallyScopedWith(
    currentServices,
    Context.add(Annotations.TestAnnotations, annotations)
  )

/**
 * Constructs a new `Annotations` service wrapped in a layer.
 *
 * @since 2.0.0
 */
export const annotationsLayer = (): Layer.Layer<Annotations.TestAnnotations> =>
  layer.scoped(
    Annotations.TestAnnotations,
    pipe(
      core.sync(() => ref.unsafeMake(TestAnnotationMap.empty())),
      core.map(Annotations.make),
      core.tap(withAnnotationsScoped)
    )
  )

/**
 * Accesses an `Annotations` instance in the context and retrieves the
 * annotation of the specified type, or its default value if there is none.
 *
 * @since 2.0.0
 */
export const get = <A>(key: TestAnnotation.TestAnnotation<A>): Effect.Effect<A> =>
  annotationsWith((annotations) => annotations.get(key))

/**
 * Accesses an `Annotations` instance in the context and appends the
 * specified annotation to the annotation map.
 *
 * @since 2.0.0
 */
export const annotate = <A>(key: TestAnnotation.TestAnnotation<A>, value: A): Effect.Effect<void> =>
  annotationsWith((annotations) => annotations.annotate(key, value))

/**
 * Returns the set of all fibers in this test.
 *
 * @since 2.0.0
 */
export const supervisedFibers = (): Effect.Effect<
  SortedSet.SortedSet<Fiber.RuntimeFiber<unknown, unknown>>
> => annotationsWith((annotations) => annotations.supervisedFibers)

/**
 * Retrieves the `Live` service for this test and uses it to run the specified
 * workflow.
 *
 * @since 2.0.0
 */
export const liveWith = <A, E, R>(f: (live: Live.TestLive) => Effect.Effect<A, E, R>): Effect.Effect<A, E, R> =>
  core.fiberRefGetWith(currentServices, (services) => f(Context.get(services, Live.TestLive)))

/**
 * Retrieves the `Live` service for this test.
 *
 * @since 2.0.0
 */
export const live: Effect.Effect<Live.TestLive> = liveWith(core.succeed)

/**
 * Executes the specified workflow with the specified implementation of the
 * live service.
 *
 * @since 2.0.0
 */
export const withLive = dual<
  /**
   * Executes the specified workflow with the specified implementation of the
   * live service.
   *
   * @since 2.0.0
   */
  (live: Live.TestLive) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  /**
   * Executes the specified workflow with the specified implementation of the
   * live service.
   *
   * @since 2.0.0
   */
  <A, E, R>(effect: Effect.Effect<A, E, R>, live: Live.TestLive) => Effect.Effect<A, E, R>
>(2, (effect, live) =>
  core.fiberRefLocallyWith(
    currentServices,
    Context.add(Live.TestLive, live)
  )(effect))

/**
 * Sets the implementation of the live service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
export const withLiveScoped = (live: Live.TestLive): Effect.Effect<void, never, Scope.Scope> =>
  fiberRuntime.fiberRefLocallyScopedWith(currentServices, Context.add(Live.TestLive, live))

/**
 * Constructs a new `Live` service wrapped in a layer.
 *
 * @since 2.0.0
 */
export const liveLayer = (): Layer.Layer<Live.TestLive, never, DefaultServices.DefaultServices> =>
  layer.scoped(
    Live.TestLive,
    pipe(
      core.context<DefaultServices.DefaultServices>(),
      core.map(Live.make),
      core.tap(withLiveScoped)
    )
  )

/**
 * Provides a workflow with the "live" default Effect services.
 *
 * @since 2.0.0
 */
export const provideLive = <A, E, R>(effect: Effect.Effect<A, E, R>): Effect.Effect<A, E, R> =>
  liveWith((live) => live.provide(effect))

/**
 * Runs a transformation function with the live default Effect services while
 * ensuring that the workflow itself is run with the test services.
 *
 * @since 2.0.0
 */
export const provideWithLive = dual<
  /**
   * Runs a transformation function with the live default Effect services while
   * ensuring that the workflow itself is run with the test services.
   *
   * @since 2.0.0
   */
  <A, E, R, A2, E2, R2>(f: (effect: Effect.Effect<A, E, R>) => Effect.Effect<A2, E2, R2>) => (self: Effect.Effect<A, E, R>) => Effect.Effect<A2, E | E2, R | R2>,
  /**
   * Runs a transformation function with the live default Effect services while
   * ensuring that the workflow itself is run with the test services.
   *
   * @since 2.0.0
   */
  <A, E, R, A2, E2, R2>(
    self: Effect.Effect<A, E, R>,
    f: (effect: Effect.Effect<A, E, R>) => Effect.Effect<A2, E2, R2>
  ) => Effect.Effect<A2, E | E2, R | R2>
>(2, (self, f) =>
  core.fiberRefGetWith(
    defaultServices.currentServices,
    (services) => provideLive(f(core.fiberRefLocally(defaultServices.currentServices, services)(self)))
  ))

/**
 * Retrieves the `Sized` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
export const sizedWith = <A, E, R>(f: (sized: Sized.TestSized) => Effect.Effect<A, E, R>): Effect.Effect<A, E, R> =>
  core.fiberRefGetWith(
    currentServices,
    (services) => f(Context.get(services, Sized.TestSized))
  )

/**
 * Retrieves the `Sized` service for this test.
 *
 * @since 2.0.0
 */
export const sized: Effect.Effect<Sized.TestSized> = sizedWith(core.succeed)

/**
 * Executes the specified workflow with the specified implementation of the
 * sized service.
 *
 * @since 2.0.0
 */
export const withSized = dual<
  /**
   * Executes the specified workflow with the specified implementation of the
   * sized service.
   *
   * @since 2.0.0
   */
  (sized: Sized.TestSized) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  /**
   * Executes the specified workflow with the specified implementation of the
   * sized service.
   *
   * @since 2.0.0
   */
  <A, E, R>(effect: Effect.Effect<A, E, R>, sized: Sized.TestSized) => Effect.Effect<A, E, R>
>(2, (effect, sized) =>
  core.fiberRefLocallyWith(
    currentServices,
    Context.add(Sized.TestSized, sized)
  )(effect))

/**
 * Sets the implementation of the sized service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
export const withSizedScoped = (sized: Sized.TestSized): Effect.Effect<void, never, Scope.Scope> =>
  fiberRuntime.fiberRefLocallyScopedWith(currentServices, Context.add(Sized.TestSized, sized))

/**
 * @since 2.0.0
 */
export const sizedLayer = (size: number): Layer.Layer<Sized.TestSized> =>
  layer.scoped(
    Sized.TestSized,
    pipe(
      fiberRuntime.fiberRefMake(size),
      core.map(Sized.fromFiberRef),
      core.tap(withSizedScoped)
    )
  )

/**
 * @since 2.0.0
 */
export const size: Effect.Effect<number> = sizedWith((sized) => sized.size)

/**
 * @since 2.0.0
 */
export const withSize = dual<
  /**
   * @since 2.0.0
   */
  (size: number) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  /**
   * @since 2.0.0
   */
  <A, E, R>(effect: Effect.Effect<A, E, R>, size: number) => Effect.Effect<A, E, R>
>(2, (effect, size) => sizedWith((sized) => sized.withSize(size)(effect)))

/**
 * Retrieves the `TestConfig` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
export const testConfigWith = <A, E, R>(
  f: (config: TestConfig.TestConfig) => Effect.Effect<A, E, R>
): Effect.Effect<A, E, R> =>
  core.fiberRefGetWith(
    currentServices,
    (services) => f(Context.get(services, TestConfig.TestConfig))
  )

/**
 * Retrieves the `TestConfig` service for this test.
 *
 * @since 2.0.0
 */
export const testConfig: Effect.Effect<TestConfig.TestConfig> = testConfigWith(core.succeed)

/**
 * Executes the specified workflow with the specified implementation of the
 * config service.
 *
 * @since 2.0.0
 */
export const withTestConfig = dual<
  /**
   * Executes the specified workflow with the specified implementation of the
   * config service.
   *
   * @since 2.0.0
   */
  (config: TestConfig.TestConfig) => <A, E, R>(effect: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>,
  /**
   * Executes the specified workflow with the specified implementation of the
   * config service.
   *
   * @since 2.0.0
   */
  <A, E, R>(effect: Effect.Effect<A, E, R>, config: TestConfig.TestConfig) => Effect.Effect<A, E, R>
>(2, (effect, config) =>
  core.fiberRefLocallyWith(
    currentServices,
    Context.add(TestConfig.TestConfig, config)
  )(effect))

/**
 * Sets the implementation of the config service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
export const withTestConfigScoped = (config: TestConfig.TestConfig): Effect.Effect<void, never, Scope.Scope> =>
  fiberRuntime.fiberRefLocallyScopedWith(currentServices, Context.add(TestConfig.TestConfig, config))

/**
 * Constructs a new `TestConfig` service with the specified settings.
 *
 * @since 2.0.0
 */
export const testConfigLayer = (params: {
  readonly repeats: number
  readonly retries: number
  readonly samples: number
  readonly shrinks: number
}): Layer.Layer<TestConfig.TestConfig> =>
  layer.scoped(
    TestConfig.TestConfig,
    Effect.suspend(() => {
      const testConfig = TestConfig.make(params)
      return pipe(
        withTestConfigScoped(testConfig),
        core.as(testConfig)
      )
    })
  )

/**
 * The number of times to repeat tests to ensure they are stable.
 *
 * @since 2.0.0
 */
export const repeats: Effect.Effect<number> = testConfigWith((config) => core.succeed(config.repeats))

/**
 * The number of times to retry flaky tests.
 *
 * @since 2.0.0
 */
export const retries: Effect.Effect<number> = testConfigWith((config) => core.succeed(config.retries))

/**
 * The number of sufficient samples to check for a random variable.
 *
 * @since 2.0.0
 */
export const samples: Effect.Effect<number> = testConfigWith((config) => core.succeed(config.samples))

/**
 * The maximum number of shrinkings to minimize large failures.
 *
 * @since 2.0.0
 */
export const shrinks: Effect.Effect<number> = testConfigWith((config) => core.succeed(config.shrinks))
