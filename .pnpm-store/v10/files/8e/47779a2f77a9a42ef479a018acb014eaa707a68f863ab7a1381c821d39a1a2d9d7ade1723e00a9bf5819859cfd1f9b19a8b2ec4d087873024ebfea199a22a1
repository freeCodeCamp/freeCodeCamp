"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTestConfigScoped = exports.withTestConfig = exports.withSizedScoped = exports.withSized = exports.withSize = exports.withLiveScoped = exports.withLive = exports.withAnnotationsScoped = exports.withAnnotations = exports.testConfigWith = exports.testConfigLayer = exports.testConfig = exports.supervisedFibers = exports.sizedWith = exports.sizedLayer = exports.sized = exports.size = exports.shrinks = exports.samples = exports.retries = exports.repeats = exports.provideWithLive = exports.provideLive = exports.liveWith = exports.liveServices = exports.liveLayer = exports.live = exports.get = exports.currentServices = exports.annotationsWith = exports.annotationsLayer = exports.annotations = exports.annotate = void 0;
var Context = _interopRequireWildcard(require("./Context.js"));
var Effect = _interopRequireWildcard(require("./Effect.js"));
var _Function = require("./Function.js");
var core = _interopRequireWildcard(require("./internal/core.js"));
var defaultServices = _interopRequireWildcard(require("./internal/defaultServices.js"));
var fiberRuntime = _interopRequireWildcard(require("./internal/fiberRuntime.js"));
var layer = _interopRequireWildcard(require("./internal/layer.js"));
var ref = _interopRequireWildcard(require("./internal/ref.js"));
var TestAnnotationMap = _interopRequireWildcard(require("./TestAnnotationMap.js"));
var Annotations = _interopRequireWildcard(require("./TestAnnotations.js"));
var TestConfig = _interopRequireWildcard(require("./TestConfig.js"));
var Live = _interopRequireWildcard(require("./TestLive.js"));
var Sized = _interopRequireWildcard(require("./TestSized.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 */

/**
 * The default Effect test services.
 *
 * @since 2.0.0
 */
const liveServices = exports.liveServices = /*#__PURE__*/(0, _Function.pipe)(/*#__PURE__*/Context.make(Annotations.TestAnnotations, /*#__PURE__*/Annotations.make(/*#__PURE__*/ref.unsafeMake(/*#__PURE__*/TestAnnotationMap.empty()))), /*#__PURE__*/Context.add(Live.TestLive, /*#__PURE__*/Live.make(defaultServices.liveServices)), /*#__PURE__*/Context.add(Sized.TestSized, /*#__PURE__*/Sized.make(100)), /*#__PURE__*/Context.add(TestConfig.TestConfig, /*#__PURE__*/TestConfig.make({
  repeats: 100,
  retries: 100,
  samples: 200,
  shrinks: 1000
})));
/**
 * @since 2.0.0
 */
const currentServices = exports.currentServices = /*#__PURE__*/core.fiberRefUnsafeMakeContext(liveServices);
/**
 * Retrieves the `Annotations` service for this test.
 *
 * @since 2.0.0
 */
const annotations = () => annotationsWith(core.succeed);
/**
 * Retrieves the `Annotations` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
exports.annotations = annotations;
const annotationsWith = f => core.fiberRefGetWith(currentServices, services => f(Context.get(services, Annotations.TestAnnotations)));
/**
 * Executes the specified workflow with the specified implementation of the
 * annotations service.
 *
 * @since 2.0.0
 */
exports.annotationsWith = annotationsWith;
const withAnnotations = exports.withAnnotations = /*#__PURE__*/(0, _Function.dual)(2, (effect, annotations) => core.fiberRefLocallyWith(currentServices, Context.add(Annotations.TestAnnotations, annotations))(effect));
/**
 * Sets the implementation of the annotations service to the specified value
 * and restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
const withAnnotationsScoped = annotations => fiberRuntime.fiberRefLocallyScopedWith(currentServices, Context.add(Annotations.TestAnnotations, annotations));
/**
 * Constructs a new `Annotations` service wrapped in a layer.
 *
 * @since 2.0.0
 */
exports.withAnnotationsScoped = withAnnotationsScoped;
const annotationsLayer = () => layer.scoped(Annotations.TestAnnotations, (0, _Function.pipe)(core.sync(() => ref.unsafeMake(TestAnnotationMap.empty())), core.map(Annotations.make), core.tap(withAnnotationsScoped)));
/**
 * Accesses an `Annotations` instance in the context and retrieves the
 * annotation of the specified type, or its default value if there is none.
 *
 * @since 2.0.0
 */
exports.annotationsLayer = annotationsLayer;
const get = key => annotationsWith(annotations => annotations.get(key));
/**
 * Accesses an `Annotations` instance in the context and appends the
 * specified annotation to the annotation map.
 *
 * @since 2.0.0
 */
exports.get = get;
const annotate = (key, value) => annotationsWith(annotations => annotations.annotate(key, value));
/**
 * Returns the set of all fibers in this test.
 *
 * @since 2.0.0
 */
exports.annotate = annotate;
const supervisedFibers = () => annotationsWith(annotations => annotations.supervisedFibers);
/**
 * Retrieves the `Live` service for this test and uses it to run the specified
 * workflow.
 *
 * @since 2.0.0
 */
exports.supervisedFibers = supervisedFibers;
const liveWith = f => core.fiberRefGetWith(currentServices, services => f(Context.get(services, Live.TestLive)));
/**
 * Retrieves the `Live` service for this test.
 *
 * @since 2.0.0
 */
exports.liveWith = liveWith;
const live = exports.live = /*#__PURE__*/liveWith(core.succeed);
/**
 * Executes the specified workflow with the specified implementation of the
 * live service.
 *
 * @since 2.0.0
 */
const withLive = exports.withLive = /*#__PURE__*/(0, _Function.dual)(2, (effect, live) => core.fiberRefLocallyWith(currentServices, Context.add(Live.TestLive, live))(effect));
/**
 * Sets the implementation of the live service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
const withLiveScoped = live => fiberRuntime.fiberRefLocallyScopedWith(currentServices, Context.add(Live.TestLive, live));
/**
 * Constructs a new `Live` service wrapped in a layer.
 *
 * @since 2.0.0
 */
exports.withLiveScoped = withLiveScoped;
const liveLayer = () => layer.scoped(Live.TestLive, (0, _Function.pipe)(core.context(), core.map(Live.make), core.tap(withLiveScoped)));
/**
 * Provides a workflow with the "live" default Effect services.
 *
 * @since 2.0.0
 */
exports.liveLayer = liveLayer;
const provideLive = effect => liveWith(live => live.provide(effect));
/**
 * Runs a transformation function with the live default Effect services while
 * ensuring that the workflow itself is run with the test services.
 *
 * @since 2.0.0
 */
exports.provideLive = provideLive;
const provideWithLive = exports.provideWithLive = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.fiberRefGetWith(defaultServices.currentServices, services => provideLive(f(core.fiberRefLocally(defaultServices.currentServices, services)(self)))));
/**
 * Retrieves the `Sized` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
const sizedWith = f => core.fiberRefGetWith(currentServices, services => f(Context.get(services, Sized.TestSized)));
/**
 * Retrieves the `Sized` service for this test.
 *
 * @since 2.0.0
 */
exports.sizedWith = sizedWith;
const sized = exports.sized = /*#__PURE__*/sizedWith(core.succeed);
/**
 * Executes the specified workflow with the specified implementation of the
 * sized service.
 *
 * @since 2.0.0
 */
const withSized = exports.withSized = /*#__PURE__*/(0, _Function.dual)(2, (effect, sized) => core.fiberRefLocallyWith(currentServices, Context.add(Sized.TestSized, sized))(effect));
/**
 * Sets the implementation of the sized service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
const withSizedScoped = sized => fiberRuntime.fiberRefLocallyScopedWith(currentServices, Context.add(Sized.TestSized, sized));
/**
 * @since 2.0.0
 */
exports.withSizedScoped = withSizedScoped;
const sizedLayer = size => layer.scoped(Sized.TestSized, (0, _Function.pipe)(fiberRuntime.fiberRefMake(size), core.map(Sized.fromFiberRef), core.tap(withSizedScoped)));
/**
 * @since 2.0.0
 */
exports.sizedLayer = sizedLayer;
const size = exports.size = /*#__PURE__*/sizedWith(sized => sized.size);
/**
 * @since 2.0.0
 */
const withSize = exports.withSize = /*#__PURE__*/(0, _Function.dual)(2, (effect, size) => sizedWith(sized => sized.withSize(size)(effect)));
/**
 * Retrieves the `TestConfig` service for this test and uses it to run the
 * specified workflow.
 *
 * @since 2.0.0
 */
const testConfigWith = f => core.fiberRefGetWith(currentServices, services => f(Context.get(services, TestConfig.TestConfig)));
/**
 * Retrieves the `TestConfig` service for this test.
 *
 * @since 2.0.0
 */
exports.testConfigWith = testConfigWith;
const testConfig = exports.testConfig = /*#__PURE__*/testConfigWith(core.succeed);
/**
 * Executes the specified workflow with the specified implementation of the
 * config service.
 *
 * @since 2.0.0
 */
const withTestConfig = exports.withTestConfig = /*#__PURE__*/(0, _Function.dual)(2, (effect, config) => core.fiberRefLocallyWith(currentServices, Context.add(TestConfig.TestConfig, config))(effect));
/**
 * Sets the implementation of the config service to the specified value and
 * restores it to its original value when the scope is closed.
 *
 * @since 2.0.0
 */
const withTestConfigScoped = config => fiberRuntime.fiberRefLocallyScopedWith(currentServices, Context.add(TestConfig.TestConfig, config));
/**
 * Constructs a new `TestConfig` service with the specified settings.
 *
 * @since 2.0.0
 */
exports.withTestConfigScoped = withTestConfigScoped;
const testConfigLayer = params => layer.scoped(TestConfig.TestConfig, Effect.suspend(() => {
  const testConfig = TestConfig.make(params);
  return (0, _Function.pipe)(withTestConfigScoped(testConfig), core.as(testConfig));
}));
/**
 * The number of times to repeat tests to ensure they are stable.
 *
 * @since 2.0.0
 */
exports.testConfigLayer = testConfigLayer;
const repeats = exports.repeats = /*#__PURE__*/testConfigWith(config => core.succeed(config.repeats));
/**
 * The number of times to retry flaky tests.
 *
 * @since 2.0.0
 */
const retries = exports.retries = /*#__PURE__*/testConfigWith(config => core.succeed(config.retries));
/**
 * The number of sufficient samples to check for a random variable.
 *
 * @since 2.0.0
 */
const samples = exports.samples = /*#__PURE__*/testConfigWith(config => core.succeed(config.samples));
/**
 * The maximum number of shrinkings to minimize large failures.
 *
 * @since 2.0.0
 */
const shrinks = exports.shrinks = /*#__PURE__*/testConfigWith(config => core.succeed(config.shrinks));
//# sourceMappingURL=TestServices.js.map