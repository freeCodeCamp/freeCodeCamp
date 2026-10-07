"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipWith = exports.withSpan = exports.withParentSpan = exports.updateService = exports.unwrapScoped = exports.unwrapEffect = exports.toRuntimeWithMemoMap = exports.toRuntime = exports.tapErrorCause = exports.tapError = exports.tap = exports.syncContext = exports.sync = exports.suspend = exports.succeedContext = exports.succeed = exports.span = exports.setVersionMismatchErrorLogLevel = exports.setUnhandledErrorLogLevel = exports.setTracerTiming = exports.setTracerEnabled = exports.setTracer = exports.setScheduler = exports.setRequestCaching = exports.setRequestCache = exports.setRequestBatching = exports.setRandom = exports.setConfigProvider = exports.setClock = exports.service = exports.scopedDiscard = exports.scopedContext = exports.scoped = exports.scope = exports.retry = exports.provideMerge = exports.provide = exports.project = exports.passthrough = exports.parentSpan = exports.orElse = exports.orDie = exports.mock = exports.mergeAll = exports.merge = exports.memoize = exports.matchCause = exports.match = exports.mapError = exports.map = exports.makeMemoMap = exports.locallyWith = exports.locallyScoped = exports.locallyEffect = exports.locally = exports.launch = exports.isLayer = exports.isFresh = exports.function = exports.fresh = exports.flatten = exports.flatMap = exports.fiberRefLocallyScopedWith = exports.failSync = exports.failCauseSync = exports.failCause = exports.fail = exports.extendScope = exports.ensureSuccessType = exports.ensureRequirementsType = exports.ensureErrorType = exports.empty = exports.effectDiscard = exports.effectContext = exports.effect = exports.discard = exports.dieSync = exports.die = exports.context = exports.catchAllCause = exports.catchAll = exports.buildWithScope = exports.buildWithMemoMap = exports.build = exports.annotateSpans = exports.annotateLogs = exports.MemoMapTypeId = exports.LayerTypeId = exports.CurrentMemoMap = void 0;
var Context = _interopRequireWildcard(require("./Context.js"));
var _Function = require("./Function.js");
var _clock = require("./internal/clock.js");
var core = _interopRequireWildcard(require("./internal/core.js"));
var defaultServices = _interopRequireWildcard(require("./internal/defaultServices.js"));
var fiberRuntime = _interopRequireWildcard(require("./internal/fiberRuntime.js"));
var internal = _interopRequireWildcard(require("./internal/layer.js"));
var circularLayer = _interopRequireWildcard(require("./internal/layer/circular.js"));
var query = _interopRequireWildcard(require("./internal/query.js"));
var _random = require("./internal/random.js");
var Scheduler = _interopRequireWildcard(require("./Scheduler.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const LayerTypeId = exports.LayerTypeId = internal.LayerTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
const MemoMapTypeId = exports.MemoMapTypeId = internal.MemoMapTypeId;
/**
 * @since 3.13.0
 * @category models
 */
const CurrentMemoMap = exports.CurrentMemoMap = internal.CurrentMemoMap;
/**
 * Returns `true` if the specified value is a `Layer`, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const isLayer = exports.isLayer = internal.isLayer;
/**
 * Returns `true` if the specified `Layer` is a fresh version that will not be
 * shared, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
const isFresh = exports.isFresh = internal.isFresh;
/**
 * @since 3.3.0
 * @category tracing
 */
const annotateLogs = exports.annotateLogs = internal.annotateLogs;
/**
 * @since 3.3.0
 * @category tracing
 */
const annotateSpans = exports.annotateSpans = internal.annotateSpans;
/**
 * Builds a layer into a scoped value.
 *
 * @since 2.0.0
 * @category destructors
 */
const build = exports.build = internal.build;
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
const buildWithScope = exports.buildWithScope = internal.buildWithScope;
/**
 * Recovers from all errors.
 *
 * @since 2.0.0
 * @category error handling
 */
const catchAll = exports.catchAll = internal.catchAll;
/**
 * Recovers from all errors.
 *
 * @since 2.0.0
 * @category error handling
 */
const catchAllCause = exports.catchAllCause = internal.catchAllCause;
/**
 * Constructs a `Layer` that passes along the specified context as an
 * output.
 *
 * @since 2.0.0
 * @category constructors
 */
const context = exports.context = internal.context;
/**
 * Constructs a layer that dies with the specified defect.
 *
 * @since 2.0.0
 * @category constructors
 */
const die = exports.die = internal.die;
/**
 * Constructs a layer that dies with the specified defect.
 *
 * @since 2.0.0
 * @category constructors
 */
const dieSync = exports.dieSync = internal.dieSync;
/**
 * Replaces the layer's output with `never` and includes the layer only for its
 * side-effects.
 *
 * @since 2.0.0
 * @category mapping
 */
const discard = exports.discard = internal.discard;
/**
 * Constructs a layer from the specified effect.
 *
 * @since 2.0.0
 * @category constructors
 */
const effect = exports.effect = internal.fromEffect;
/**
 * Constructs a layer from the specified effect, discarding its output.
 *
 * @since 2.0.0
 * @category constructors
 */
const effectDiscard = exports.effectDiscard = internal.fromEffectDiscard;
/**
 * Constructs a layer from the specified effect, which must return one or more
 * services.
 *
 * @since 2.0.0
 * @category constructors
 */
const effectContext = exports.effectContext = internal.fromEffectContext;
/**
 * A Layer that constructs an empty Context.
 *
 * @since 2.0.0
 * @category constructors
 */
const empty = exports.empty = internal.empty;
/**
 * Extends the scope of this layer, returning a new layer that when provided
 * to an effect will not immediately release its associated resources when
 * that effect completes execution but instead when the scope the resulting
 * effect depends on is closed.
 *
 * @since 2.0.0
 * @category utils
 */
const extendScope = exports.extendScope = internal.extendScope;
/**
 * Constructs a layer that fails with the specified error.
 *
 * @since 2.0.0
 * @category constructors
 */
const fail = exports.fail = internal.fail;
/**
 * Constructs a layer that fails with the specified error.
 *
 * @since 2.0.0
 * @category constructors
 */
const failSync = exports.failSync = internal.failSync;
/**
 * Constructs a layer that fails with the specified cause.
 *
 * @since 2.0.0
 * @category constructors
 */
const failCause = exports.failCause = internal.failCause;
/**
 * Constructs a layer that fails with the specified cause.
 *
 * @since 2.0.0
 * @category constructors
 */
const failCauseSync = exports.failCauseSync = internal.failCauseSync;
/**
 * Constructs a layer dynamically based on the output of this layer.
 *
 * @since 2.0.0
 * @category sequencing
 */
const flatMap = exports.flatMap = internal.flatMap;
/**
 * Flattens layers nested in the context of an effect.
 *
 * @since 2.0.0
 * @category sequencing
 */
const flatten = exports.flatten = internal.flatten;
/**
 * Creates a fresh version of this layer that will not be shared.
 *
 * @since 2.0.0
 * @category utils
 */
const fresh = exports.fresh = internal.fresh;
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
const mock = exports.mock = internal.mock;
const fromFunction = exports.function = internal.fromFunction;
/**
 * Builds this layer and uses it until it is interrupted. This is useful when
 * your entire application is a layer, such as an HTTP server.
 *
 * @since 2.0.0
 * @category conversions
 */
const launch = exports.launch = internal.launch;
/**
 * Returns a new layer whose output is mapped by the specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
const map = exports.map = internal.map;
/**
 * Returns a layer with its error channel mapped using the specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapError = exports.mapError = internal.mapError;
/**
 * Feeds the error or output services of this layer into the input of either
 * the specified `failure` or `success` layers, resulting in a new layer with
 * the inputs of this layer, and the error or outputs of the specified layer.
 *
 * @since 2.0.0
 * @category folding
 */
const match = exports.match = internal.match;
/**
 * Feeds the error or output services of this layer into the input of either
 * the specified `failure` or `success` layers, resulting in a new layer with
 * the inputs of this layer, and the error or outputs of the specified layer.
 *
 * @since 2.0.0
 * @category folding
 */
const matchCause = exports.matchCause = internal.matchCause;
/**
 * Returns a scoped effect that, if evaluated, will return the lazily computed
 * result of this layer.
 *
 * @since 2.0.0
 * @category utils
 */
const memoize = exports.memoize = internal.memoize;
/**
 * Merges this layer with the specified layer concurrently, producing a new layer with combined input and output types.
 *
 * @since 2.0.0
 * @category zipping
 */
const merge = exports.merge = internal.merge;
/**
 * Combines all the provided layers concurrently, creating a new layer with merged input, error, and output types.
 *
 * @since 2.0.0
 * @category zipping
 */
const mergeAll = exports.mergeAll = internal.mergeAll;
/**
 * Translates effect failure into death of the fiber, making all failures
 * unchecked and not a part of the type of the layer.
 *
 * @since 2.0.0
 * @category error handling
 */
const orDie = exports.orDie = internal.orDie;
/**
 * Executes this layer and returns its output, if it succeeds, but otherwise
 * executes the specified layer.
 *
 * @since 2.0.0
 * @category error handling
 */
const orElse = exports.orElse = internal.orElse;
/**
 * Returns a new layer that produces the outputs of this layer but also
 * passes through the inputs.
 *
 * @since 2.0.0
 * @category utils
 */
const passthrough = exports.passthrough = internal.passthrough;
/**
 * Projects out part of one of the services output by this layer using the
 * specified function.
 *
 * @since 2.0.0
 * @category utils
 */
const project = exports.project = internal.project;
/**
 * @since 2.0.0
 * @category utils
 */
const locallyEffect = exports.locallyEffect = internal.locallyEffect;
/**
 * @since 2.0.0
 * @category utils
 */
const locally = exports.locally = internal.fiberRefLocally;
/**
 * @since 2.0.0
 * @category utils
 */
const locallyWith = exports.locallyWith = internal.fiberRefLocallyWith;
/**
 * @since 2.0.0
 * @category utils
 */
const locallyScoped = exports.locallyScoped = internal.fiberRefLocallyScoped;
/**
 * @since 2.0.0
 * @category utils
 */
const fiberRefLocallyScopedWith = exports.fiberRefLocallyScopedWith = internal.fiberRefLocallyScopedWith;
/**
 * Retries constructing this layer according to the specified schedule.
 *
 * @since 2.0.0
 * @category retrying
 */
const retry = exports.retry = internal.retry;
/**
 * A layer that constructs a scope and closes it when the workflow the layer
 * is provided to completes execution, whether by success, failure, or
 * interruption. This can be used to close a scope when providing a layer to a
 * workflow.
 *
 * @since 2.0.0
 * @category constructors
 */
const scope = exports.scope = internal.scope;
/**
 * Constructs a layer from the specified scoped effect.
 *
 * @since 2.0.0
 * @category constructors
 */
const scoped = exports.scoped = internal.scoped;
/**
 * Constructs a layer from the specified scoped effect, discarding its output.
 *
 * @since 2.0.0
 * @category constructors
 */
const scopedDiscard = exports.scopedDiscard = internal.scopedDiscard;
/**
 * Constructs a layer from the specified scoped effect, which must return one
 * or more services.
 *
 * @since 2.0.0
 * @category constructors
 */
const scopedContext = exports.scopedContext = internal.scopedContext;
/**
 * Constructs a layer that accesses and returns the specified service from the
 * context.
 *
 * @since 2.0.0
 * @category constructors
 */
const service = exports.service = internal.service;
/**
 * Constructs a layer from the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
const succeed = exports.succeed = internal.succeed;
/**
 * Constructs a layer from the specified value, which must return one or more
 * services.
 *
 * @since 2.0.0
 * @category constructors
 */
const succeedContext = exports.succeedContext = internal.succeedContext;
/**
 * Lazily constructs a layer. This is useful to avoid infinite recursion when
 * creating layers that refer to themselves.
 *
 * @since 2.0.0
 * @category constructors
 */
const suspend = exports.suspend = internal.suspend;
/**
 * Lazily constructs a layer from the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
const sync = exports.sync = internal.sync;
/**
 * Lazily constructs a layer from the specified value, which must return one or more
 * services.
 *
 * @since 2.0.0
 * @category constructors
 */
const syncContext = exports.syncContext = internal.syncContext;
/**
 * Performs the specified effect if this layer succeeds.
 *
 * @since 2.0.0
 * @category sequencing
 */
const tap = exports.tap = internal.tap;
/**
 * Performs the specified effect if this layer fails.
 *
 * @since 2.0.0
 * @category sequencing
 */
const tapError = exports.tapError = internal.tapError;
/**
 * Performs the specified effect if this layer fails.
 *
 * @since 2.0.0
 * @category sequencing
 */
const tapErrorCause = exports.tapErrorCause = internal.tapErrorCause;
/**
 * Converts a layer that requires no services into a scoped runtime, which can
 * be used to execute effects.
 *
 * @since 2.0.0
 * @category conversions
 */
const toRuntime = exports.toRuntime = internal.toRuntime;
/**
 * Converts a layer that requires no services into a scoped runtime, which can
 * be used to execute effects.
 *
 * @since 2.0.0
 * @category conversions
 */
const toRuntimeWithMemoMap = exports.toRuntimeWithMemoMap = internal.toRuntimeWithMemoMap;
/**
 * Feeds the output services of this builder into the input of the specified
 * builder, resulting in a new builder with the inputs of this builder as
 * well as any leftover inputs, and the outputs of the specified builder.
 *
 * @since 2.0.0
 * @category utils
 */
const provide = exports.provide = internal.provide;
/**
 * Feeds the output services of this layer into the input of the specified
 * layer, resulting in a new layer with the inputs of this layer, and the
 * outputs of both layers.
 *
 * @since 2.0.0
 * @category utils
 */
const provideMerge = exports.provideMerge = internal.provideMerge;
/**
 * Combines this layer with the specified layer concurrently, creating a new layer with merged input types and
 * combined output types using the provided function.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipWith = exports.zipWith = internal.zipWith;
/**
 * @since 2.0.0
 * @category utils
 */
const unwrapEffect = exports.unwrapEffect = internal.unwrapEffect;
/**
 * @since 2.0.0
 * @category utils
 */
const unwrapScoped = exports.unwrapScoped = internal.unwrapScoped;
/**
 * @since 2.0.0
 * @category clock
 */
const setClock = clock => scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(_clock.clockTag, clock)));
/**
 * Sets the current `ConfigProvider`.
 *
 * @since 2.0.0
 * @category config
 */
exports.setClock = setClock;
const setConfigProvider = exports.setConfigProvider = circularLayer.setConfigProvider;
/**
 * Adds the provided span to the span stack.
 *
 * @since 2.0.0
 * @category tracing
 */
const parentSpan = exports.parentSpan = circularLayer.parentSpan;
/**
 * @since 3.15.0
 * @category Random
 */
const setRandom = random => scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(_random.randomTag, random)));
/**
 * @since 2.0.0
 * @category requests & batching
 */
exports.setRandom = setRandom;
const setRequestBatching = requestBatching => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(core.currentRequestBatching, requestBatching));
/**
 * @since 2.0.0
 * @category requests & batching
 */
exports.setRequestBatching = setRequestBatching;
const setRequestCaching = requestCaching => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(query.currentCacheEnabled, requestCaching));
/**
 * @since 2.0.0
 * @category requests & batching
 */
exports.setRequestCaching = setRequestCaching;
const setRequestCache = cache => scopedDiscard(core.isEffect(cache) ? core.flatMap(cache, x => fiberRuntime.fiberRefLocallyScoped(query.currentCache, x)) : fiberRuntime.fiberRefLocallyScoped(query.currentCache, cache));
/**
 * @since 2.0.0
 * @category scheduler
 */
exports.setRequestCache = setRequestCache;
const setScheduler = scheduler => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(Scheduler.currentScheduler, scheduler));
/**
 * Create and add a span to the current span stack.
 *
 * The span is ended when the Layer is released.
 *
 * @since 2.0.0
 * @category tracing
 */
exports.setScheduler = setScheduler;
const span = exports.span = circularLayer.span;
/**
 * Create a Layer that sets the current Tracer
 *
 * @since 2.0.0
 * @category tracing
 */
const setTracer = exports.setTracer = circularLayer.setTracer;
/**
 * @since 2.0.0
 * @category tracing
 */
const setTracerEnabled = enabled => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(core.currentTracerEnabled, enabled));
/**
 * @since 2.0.0
 * @category tracing
 */
exports.setTracerEnabled = setTracerEnabled;
const setTracerTiming = enabled => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(core.currentTracerTimingEnabled, enabled));
/**
 * @since 2.0.0
 * @category logging
 */
exports.setTracerTiming = setTracerTiming;
const setUnhandledErrorLogLevel = level => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(core.currentUnhandledErrorLogLevel, level));
/**
 * @since 3.17.0
 * @category logging
 */
exports.setUnhandledErrorLogLevel = setUnhandledErrorLogLevel;
const setVersionMismatchErrorLogLevel = level => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(core.currentVersionMismatchErrorLogLevel, level));
/**
 * @since 2.0.0
 * @category tracing
 */
exports.setVersionMismatchErrorLogLevel = setVersionMismatchErrorLogLevel;
const withSpan = exports.withSpan = internal.withSpan;
/**
 * @since 2.0.0
 * @category tracing
 */
const withParentSpan = exports.withParentSpan = internal.withParentSpan;
// -----------------------------------------------------------------------------
// memo map
// -----------------------------------------------------------------------------
/**
 * Constructs a `MemoMap` that can be used to build additional layers.
 *
 * @since 2.0.0
 * @category memo map
 */
const makeMemoMap = exports.makeMemoMap = internal.makeMemoMap;
/**
 * Builds a layer into an `Effect` value, using the specified `MemoMap` to memoize
 * the layer construction.
 *
 * @since 2.0.0
 * @category memo map
 */
const buildWithMemoMap = exports.buildWithMemoMap = internal.buildWithMemoMap;
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
const updateService = exports.updateService = /*#__PURE__*/(0, _Function.dual)(3, (layer, tag, f) => provide(layer, map(context(), c => Context.add(c, tag, f(Context.unsafeGet(c, tag))))));
// -----------------------------------------------------------------------------
// Type constraints
// -----------------------------------------------------------------------------
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
const ensureSuccessType = () => layer => layer;
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
exports.ensureSuccessType = ensureSuccessType;
const ensureErrorType = () => layer => layer;
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
exports.ensureErrorType = ensureErrorType;
const ensureRequirementsType = () => layer => layer;
exports.ensureRequirementsType = ensureRequirementsType;
//# sourceMappingURL=Layer.js.map