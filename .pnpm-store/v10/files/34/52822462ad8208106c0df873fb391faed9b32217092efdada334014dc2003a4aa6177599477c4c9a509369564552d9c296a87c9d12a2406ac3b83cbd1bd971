/**
 * @since 2.0.0
 */
import * as Context from "./Context.js";
import * as Effect from "./Effect.js";
import { dual, pipe } from "./Function.js";
import * as core from "./internal/core.js";
import * as defaultServices from "./internal/defaultServices.js";
import * as fiberRuntime from "./internal/fiberRuntime.js";
import * as layer from "./internal/layer.js";
import * as ref from "./internal/ref.js";
import * as TestAnnotationMap from "./TestAnnotationMap.js";
import * as Annotations from "./TestAnnotations.js";
import * as TestConfig from "./TestConfig.js";
import * as Live from "./TestLive.js";
import * as Sized from "./TestSized.js";
/**
 * The default Effect test services.
 *
 * @since 2.0.0
 */
export const liveServices = /*#__PURE__*/pipe(/*#__PURE__*/Context.make(Annotations.TestAnnotations, /*#__PURE__*/Annotations.make(/*#__PURE__*/ref.unsafeMake(/*#__PURE__*/TestAnnotationMap.empty()))), /*#__PURE__*/Context.add(Live.TestLive, /*#__PURE__*/Live.make(defaultServices.liveServices)), /*#__PURE__*/Context.add(Sized.TestSized, /*#__PURE__*/Sized.make(100)), /*#__PURE__*/Context.add(TestConfig.TestConfig, /*#__PURE__*/TestConfig.make({
  repeats: 100,
  retries: 100,
  samples: 200,
  shrinks: 1000
})));
/**
 * @since 2.0.0
 */
export const currentServices = /*#__PURE__*/core.fiberRefUnsafeMakeContext(liveServices);
/**
 * Retrieves the `Annotations` service for this test.
 *
 * @since 2.0.0
 */
export const annotations = () => annotationsWith(core.succeed);
/**
 * Retrieves the `Annotations` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
export const annotationsWith = f => core.fiberRefGetWith(currentServices, services => f(Context.get(services, Annotations.TestAnnotations)));
/**
 * Executes the specified workflow with the specified implementation of the
 * annotations service.
 *
 * @since 2.0.0
 */
export const withAnnotations = /*#__PURE__*/dual(2, (effect, annotations) => core.fiberRefLocallyWith(currentServices, Context.add(Annotations.TestAnnotations, annotations))(effect));
/**
 * Sets the implementation of the annotations service to the specified value
 * and restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
export const withAnnotationsScoped = annotations => fiberRuntime.fiberRefLocallyScopedWith(currentServices, Context.add(Annotations.TestAnnotations, annotations));
/**
 * Constructs a new `Annotations` service wrapped in a layer.
 *
 * @since 2.0.0
 */
export const annotationsLayer = () => layer.scoped(Annotations.TestAnnotations, pipe(core.sync(() => ref.unsafeMake(TestAnnotationMap.empty())), core.map(Annotations.make), core.tap(withAnnotationsScoped)));
/**
 * Accesses an `Annotations` instance in the context and retrieves the
 * annotation of the specified type, or its default value if there is none.
 *
 * @since 2.0.0
 */
export const get = key => annotationsWith(annotations => annotations.get(key));
/**
 * Accesses an `Annotations` instance in the context and appends the
 * specified annotation to the annotation map.
 *
 * @since 2.0.0
 */
export const annotate = (key, value) => annotationsWith(annotations => annotations.annotate(key, value));
/**
 * Returns the set of all fibers in this test.
 *
 * @since 2.0.0
 */
export const supervisedFibers = () => annotationsWith(annotations => annotations.supervisedFibers);
/**
 * Retrieves the `Live` service for this test and uses it to run the specified
 * workflow.
 *
 * @since 2.0.0
 */
export const liveWith = f => core.fiberRefGetWith(currentServices, services => f(Context.get(services, Live.TestLive)));
/**
 * Retrieves the `Live` service for this test.
 *
 * @since 2.0.0
 */
export const live = /*#__PURE__*/liveWith(core.succeed);
/**
 * Executes the specified workflow with the specified implementation of the
 * live service.
 *
 * @since 2.0.0
 */
export const withLive = /*#__PURE__*/dual(2, (effect, live) => core.fiberRefLocallyWith(currentServices, Context.add(Live.TestLive, live))(effect));
/**
 * Sets the implementation of the live service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
export const withLiveScoped = live => fiberRuntime.fiberRefLocallyScopedWith(currentServices, Context.add(Live.TestLive, live));
/**
 * Constructs a new `Live` service wrapped in a layer.
 *
 * @since 2.0.0
 */
export const liveLayer = () => layer.scoped(Live.TestLive, pipe(core.context(), core.map(Live.make), core.tap(withLiveScoped)));
/**
 * Provides a workflow with the "live" default Effect services.
 *
 * @since 2.0.0
 */
export const provideLive = effect => liveWith(live => live.provide(effect));
/**
 * Runs a transformation function with the live default Effect services while
 * ensuring that the workflow itself is run with the test services.
 *
 * @since 2.0.0
 */
export const provideWithLive = /*#__PURE__*/dual(2, (self, f) => core.fiberRefGetWith(defaultServices.currentServices, services => provideLive(f(core.fiberRefLocally(defaultServices.currentServices, services)(self)))));
/**
 * Retrieves the `Sized` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
export const sizedWith = f => core.fiberRefGetWith(currentServices, services => f(Context.get(services, Sized.TestSized)));
/**
 * Retrieves the `Sized` service for this test.
 *
 * @since 2.0.0
 */
export const sized = /*#__PURE__*/sizedWith(core.succeed);
/**
 * Executes the specified workflow with the specified implementation of the
 * sized service.
 *
 * @since 2.0.0
 */
export const withSized = /*#__PURE__*/dual(2, (effect, sized) => core.fiberRefLocallyWith(currentServices, Context.add(Sized.TestSized, sized))(effect));
/**
 * Sets the implementation of the sized service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
export const withSizedScoped = sized => fiberRuntime.fiberRefLocallyScopedWith(currentServices, Context.add(Sized.TestSized, sized));
/**
 * @since 2.0.0
 */
export const sizedLayer = size => layer.scoped(Sized.TestSized, pipe(fiberRuntime.fiberRefMake(size), core.map(Sized.fromFiberRef), core.tap(withSizedScoped)));
/**
 * @since 2.0.0
 */
export const size = /*#__PURE__*/sizedWith(sized => sized.size);
/**
 * @since 2.0.0
 */
export const withSize = /*#__PURE__*/dual(2, (effect, size) => sizedWith(sized => sized.withSize(size)(effect)));
/**
 * Retrieves the `TestConfig` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
export const testConfigWith = f => core.fiberRefGetWith(currentServices, services => f(Context.get(services, TestConfig.TestConfig)));
/**
 * Retrieves the `TestConfig` service for this test.
 *
 * @since 2.0.0
 */
export const testConfig = /*#__PURE__*/testConfigWith(core.succeed);
/**
 * Executes the specified workflow with the specified implementation of the
 * config service.
 *
 * @since 2.0.0
 */
export const withTestConfig = /*#__PURE__*/dual(2, (effect, config) => core.fiberRefLocallyWith(currentServices, Context.add(TestConfig.TestConfig, config))(effect));
/**
 * Sets the implementation of the config service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
export const withTestConfigScoped = config => fiberRuntime.fiberRefLocallyScopedWith(currentServices, Context.add(TestConfig.TestConfig, config));
/**
 * Constructs a new `TestConfig` service with the specified settings.
 *
 * @since 2.0.0
 */
export const testConfigLayer = params => layer.scoped(TestConfig.TestConfig, Effect.suspend(() => {
  const testConfig = TestConfig.make(params);
  return pipe(withTestConfigScoped(testConfig), core.as(testConfig));
}));
/**
 * The number of times to repeat tests to ensure they are stable.
 *
 * @since 2.0.0
 */
export const repeats = /*#__PURE__*/testConfigWith(config => core.succeed(config.repeats));
/**
 * The number of times to retry flaky tests.
 *
 * @since 2.0.0
 */
export const retries = /*#__PURE__*/testConfigWith(config => core.succeed(config.retries));
/**
 * The number of sufficient samples to check for a random variable.
 *
 * @since 2.0.0
 */
export const samples = /*#__PURE__*/testConfigWith(config => core.succeed(config.samples));
/**
 * The maximum number of shrinkings to minimize large failures.
 *
 * @since 2.0.0
 */
export const shrinks = /*#__PURE__*/testConfigWith(config => core.succeed(config.shrinks));
//# sourceMappingURL=TestServices.js.map