import * as Context from "./Context.js";
import { dual } from "./Function.js";
import { clockTag } from "./internal/clock.js";
import * as core from "./internal/core.js";
import * as defaultServices from "./internal/defaultServices.js";
import * as fiberRuntime from "./internal/fiberRuntime.js";
import * as internal from "./internal/layer.js";
import * as circularLayer from "./internal/layer/circular.js";
import * as query from "./internal/query.js";
import { randomTag } from "./internal/random.js";
import * as Scheduler from "./Scheduler.js";
/**
 * @since 2.0.0
 * @category symbols
 */
export const LayerTypeId = internal.LayerTypeId;
/**
 * @since 2.0.0
 * @category symbols
 */
export const MemoMapTypeId = internal.MemoMapTypeId;
/**
 * @since 3.13.0
 * @category models
 */
export const CurrentMemoMap = internal.CurrentMemoMap;
/**
 * Returns `true` if the specified value is a `Layer`, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const isLayer = internal.isLayer;
/**
 * Returns `true` if the specified `Layer` is a fresh version that will not be
 * shared, `false` otherwise.
 *
 * @since 2.0.0
 * @category getters
 */
export const isFresh = internal.isFresh;
/**
 * @since 3.3.0
 * @category tracing
 */
export const annotateLogs = internal.annotateLogs;
/**
 * @since 3.3.0
 * @category tracing
 */
export const annotateSpans = internal.annotateSpans;
/**
 * Builds a layer into a scoped value.
 *
 * @since 2.0.0
 * @category destructors
 */
export const build = internal.build;
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
export const buildWithScope = internal.buildWithScope;
/**
 * Recovers from all errors.
 *
 * @since 2.0.0
 * @category error handling
 */
export const catchAll = internal.catchAll;
/**
 * Recovers from all errors.
 *
 * @since 2.0.0
 * @category error handling
 */
export const catchAllCause = internal.catchAllCause;
/**
 * Constructs a `Layer` that passes along the specified context as an
 * output.
 *
 * @since 2.0.0
 * @category constructors
 */
export const context = internal.context;
/**
 * Constructs a layer that dies with the specified defect.
 *
 * @since 2.0.0
 * @category constructors
 */
export const die = internal.die;
/**
 * Constructs a layer that dies with the specified defect.
 *
 * @since 2.0.0
 * @category constructors
 */
export const dieSync = internal.dieSync;
/**
 * Replaces the layer's output with `never` and includes the layer only for its
 * side-effects.
 *
 * @since 2.0.0
 * @category mapping
 */
export const discard = internal.discard;
/**
 * Constructs a layer from the specified effect.
 *
 * @since 2.0.0
 * @category constructors
 */
export const effect = internal.fromEffect;
/**
 * Constructs a layer from the specified effect, discarding its output.
 *
 * @since 2.0.0
 * @category constructors
 */
export const effectDiscard = internal.fromEffectDiscard;
/**
 * Constructs a layer from the specified effect, which must return one or more
 * services.
 *
 * @since 2.0.0
 * @category constructors
 */
export const effectContext = internal.fromEffectContext;
/**
 * A Layer that constructs an empty Context.
 *
 * @since 2.0.0
 * @category constructors
 */
export const empty = internal.empty;
/**
 * Extends the scope of this layer, returning a new layer that when provided
 * to an effect will not immediately release its associated resources when
 * that effect completes execution but instead when the scope the resulting
 * effect depends on is closed.
 *
 * @since 2.0.0
 * @category utils
 */
export const extendScope = internal.extendScope;
/**
 * Constructs a layer that fails with the specified error.
 *
 * @since 2.0.0
 * @category constructors
 */
export const fail = internal.fail;
/**
 * Constructs a layer that fails with the specified error.
 *
 * @since 2.0.0
 * @category constructors
 */
export const failSync = internal.failSync;
/**
 * Constructs a layer that fails with the specified cause.
 *
 * @since 2.0.0
 * @category constructors
 */
export const failCause = internal.failCause;
/**
 * Constructs a layer that fails with the specified cause.
 *
 * @since 2.0.0
 * @category constructors
 */
export const failCauseSync = internal.failCauseSync;
/**
 * Constructs a layer dynamically based on the output of this layer.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flatMap = internal.flatMap;
/**
 * Flattens layers nested in the context of an effect.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const flatten = internal.flatten;
/**
 * Creates a fresh version of this layer that will not be shared.
 *
 * @since 2.0.0
 * @category utils
 */
export const fresh = internal.fresh;
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
export const mock = internal.mock;
const fromFunction = internal.fromFunction;
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
export const launch = internal.launch;
/**
 * Returns a new layer whose output is mapped by the specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
export const map = internal.map;
/**
 * Returns a layer with its error channel mapped using the specified function.
 *
 * @since 2.0.0
 * @category mapping
 */
export const mapError = internal.mapError;
/**
 * Feeds the error or output services of this layer into the input of either
 * the specified `failure` or `success` layers, resulting in a new layer with
 * the inputs of this layer, and the error or outputs of the specified layer.
 *
 * @since 2.0.0
 * @category folding
 */
export const match = internal.match;
/**
 * Feeds the error or output services of this layer into the input of either
 * the specified `failure` or `success` layers, resulting in a new layer with
 * the inputs of this layer, and the error or outputs of the specified layer.
 *
 * @since 2.0.0
 * @category folding
 */
export const matchCause = internal.matchCause;
/**
 * Returns a scoped effect that, if evaluated, will return the lazily computed
 * result of this layer.
 *
 * @since 2.0.0
 * @category utils
 */
export const memoize = internal.memoize;
/**
 * Merges this layer with the specified layer concurrently, producing a new layer with combined input and output types.
 *
 * @since 2.0.0
 * @category zipping
 */
export const merge = internal.merge;
/**
 * Combines all the provided layers concurrently, creating a new layer with merged input, error, and output types.
 *
 * @since 2.0.0
 * @category zipping
 */
export const mergeAll = internal.mergeAll;
/**
 * Translates effect failure into death of the fiber, making all failures
 * unchecked and not a part of the type of the layer.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orDie = internal.orDie;
/**
 * Executes this layer and returns its output, if it succeeds, but otherwise
 * executes the specified layer.
 *
 * @since 2.0.0
 * @category error handling
 */
export const orElse = internal.orElse;
/**
 * Returns a new layer that produces the outputs of this layer but also
 * passes through the inputs.
 *
 * @since 2.0.0
 * @category utils
 */
export const passthrough = internal.passthrough;
/**
 * Projects out part of one of the services output by this layer using the
 * specified function.
 *
 * @since 2.0.0
 * @category utils
 */
export const project = internal.project;
/**
 * @since 2.0.0
 * @category utils
 */
export const locallyEffect = internal.locallyEffect;
/**
 * @since 2.0.0
 * @category utils
 */
export const locally = internal.fiberRefLocally;
/**
 * @since 2.0.0
 * @category utils
 */
export const locallyWith = internal.fiberRefLocallyWith;
/**
 * @since 2.0.0
 * @category utils
 */
export const locallyScoped = internal.fiberRefLocallyScoped;
/**
 * @since 2.0.0
 * @category utils
 */
export const fiberRefLocallyScopedWith = internal.fiberRefLocallyScopedWith;
/**
 * Retries constructing this layer according to the specified schedule.
 *
 * @since 2.0.0
 * @category retrying
 */
export const retry = internal.retry;
/**
 * A layer that constructs a scope and closes it when the workflow the layer
 * is provided to completes execution, whether by success, failure, or
 * interruption. This can be used to close a scope when providing a layer to a
 * workflow.
 *
 * @since 2.0.0
 * @category constructors
 */
export const scope = internal.scope;
/**
 * Constructs a layer from the specified scoped effect.
 *
 * @since 2.0.0
 * @category constructors
 */
export const scoped = internal.scoped;
/**
 * Constructs a layer from the specified scoped effect, discarding its output.
 *
 * @since 2.0.0
 * @category constructors
 */
export const scopedDiscard = internal.scopedDiscard;
/**
 * Constructs a layer from the specified scoped effect, which must return one
 * or more services.
 *
 * @since 2.0.0
 * @category constructors
 */
export const scopedContext = internal.scopedContext;
/**
 * Constructs a layer that accesses and returns the specified service from the
 * context.
 *
 * @since 2.0.0
 * @category constructors
 */
export const service = internal.service;
/**
 * Constructs a layer from the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const succeed = internal.succeed;
/**
 * Constructs a layer from the specified value, which must return one or more
 * services.
 *
 * @since 2.0.0
 * @category constructors
 */
export const succeedContext = internal.succeedContext;
/**
 * Lazily constructs a layer. This is useful to avoid infinite recursion when
 * creating layers that refer to themselves.
 *
 * @since 2.0.0
 * @category constructors
 */
export const suspend = internal.suspend;
/**
 * Lazily constructs a layer from the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const sync = internal.sync;
/**
 * Lazily constructs a layer from the specified value, which must return one or more
 * services.
 *
 * @since 2.0.0
 * @category constructors
 */
export const syncContext = internal.syncContext;
/**
 * Performs the specified effect if this layer succeeds.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const tap = internal.tap;
/**
 * Performs the specified effect if this layer fails.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const tapError = internal.tapError;
/**
 * Performs the specified effect if this layer fails.
 *
 * @since 2.0.0
 * @category sequencing
 */
export const tapErrorCause = internal.tapErrorCause;
/**
 * Converts a layer that requires no services into a scoped runtime, which can
 * be used to execute effects.
 *
 * @since 2.0.0
 * @category conversions
 */
export const toRuntime = internal.toRuntime;
/**
 * Converts a layer that requires no services into a scoped runtime, which can
 * be used to execute effects.
 *
 * @since 2.0.0
 * @category conversions
 */
export const toRuntimeWithMemoMap = internal.toRuntimeWithMemoMap;
/**
 * Feeds the output services of this builder into the input of the specified
 * builder, resulting in a new builder with the inputs of this builder as
 * well as any leftover inputs, and the outputs of the specified builder.
 *
 * @since 2.0.0
 * @category utils
 */
export const provide = internal.provide;
/**
 * Feeds the output services of this layer into the input of the specified
 * layer, resulting in a new layer with the inputs of this layer, and the
 * outputs of both layers.
 *
 * @since 2.0.0
 * @category utils
 */
export const provideMerge = internal.provideMerge;
/**
 * Combines this layer with the specified layer concurrently, creating a new layer with merged input types and
 * combined output types using the provided function.
 *
 * @since 2.0.0
 * @category zipping
 */
export const zipWith = internal.zipWith;
/**
 * @since 2.0.0
 * @category utils
 */
export const unwrapEffect = internal.unwrapEffect;
/**
 * @since 2.0.0
 * @category utils
 */
export const unwrapScoped = internal.unwrapScoped;
/**
 * @since 2.0.0
 * @category clock
 */
export const setClock = clock => scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(clockTag, clock)));
/**
 * Sets the current `ConfigProvider`.
 *
 * @since 2.0.0
 * @category config
 */
export const setConfigProvider = circularLayer.setConfigProvider;
/**
 * Adds the provided span to the span stack.
 *
 * @since 2.0.0
 * @category tracing
 */
export const parentSpan = circularLayer.parentSpan;
/**
 * @since 3.15.0
 * @category Random
 */
export const setRandom = random => scopedDiscard(fiberRuntime.fiberRefLocallyScopedWith(defaultServices.currentServices, Context.add(randomTag, random)));
/**
 * @since 2.0.0
 * @category requests & batching
 */
export const setRequestBatching = requestBatching => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(core.currentRequestBatching, requestBatching));
/**
 * @since 2.0.0
 * @category requests & batching
 */
export const setRequestCaching = requestCaching => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(query.currentCacheEnabled, requestCaching));
/**
 * @since 2.0.0
 * @category requests & batching
 */
export const setRequestCache = cache => scopedDiscard(core.isEffect(cache) ? core.flatMap(cache, x => fiberRuntime.fiberRefLocallyScoped(query.currentCache, x)) : fiberRuntime.fiberRefLocallyScoped(query.currentCache, cache));
/**
 * @since 2.0.0
 * @category scheduler
 */
export const setScheduler = scheduler => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(Scheduler.currentScheduler, scheduler));
/**
 * Create and add a span to the current span stack.
 *
 * The span is ended when the Layer is released.
 *
 * @since 2.0.0
 * @category tracing
 */
export const span = circularLayer.span;
/**
 * Create a Layer that sets the current Tracer
 *
 * @since 2.0.0
 * @category tracing
 */
export const setTracer = circularLayer.setTracer;
/**
 * @since 2.0.0
 * @category tracing
 */
export const setTracerEnabled = enabled => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(core.currentTracerEnabled, enabled));
/**
 * @since 2.0.0
 * @category tracing
 */
export const setTracerTiming = enabled => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(core.currentTracerTimingEnabled, enabled));
/**
 * @since 2.0.0
 * @category logging
 */
export const setUnhandledErrorLogLevel = level => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(core.currentUnhandledErrorLogLevel, level));
/**
 * @since 3.17.0
 * @category logging
 */
export const setVersionMismatchErrorLogLevel = level => scopedDiscard(fiberRuntime.fiberRefLocallyScoped(core.currentVersionMismatchErrorLogLevel, level));
/**
 * @since 2.0.0
 * @category tracing
 */
export const withSpan = internal.withSpan;
/**
 * @since 2.0.0
 * @category tracing
 */
export const withParentSpan = internal.withParentSpan;
// -----------------------------------------------------------------------------
// memo map
// -----------------------------------------------------------------------------
/**
 * Constructs a `MemoMap` that can be used to build additional layers.
 *
 * @since 2.0.0
 * @category memo map
 */
export const makeMemoMap = internal.makeMemoMap;
/**
 * Builds a layer into an `Effect` value, using the specified `MemoMap` to memoize
 * the layer construction.
 *
 * @since 2.0.0
 * @category memo map
 */
export const buildWithMemoMap = internal.buildWithMemoMap;
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
export const updateService = /*#__PURE__*/dual(3, (layer, tag, f) => provide(layer, map(context(), c => Context.add(c, tag, f(Context.unsafeGet(c, tag))))));
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
export const ensureSuccessType = () => layer => layer;
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
export const ensureErrorType = () => layer => layer;
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
export const ensureRequirementsType = () => layer => layer;
//# sourceMappingURL=Layer.js.map