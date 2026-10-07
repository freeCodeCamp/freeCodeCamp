"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unwrap = exports.toChannel = exports.timed = exports.take = exports.sync = exports.suspend = exports.summarized = exports.sum = exports.succeed = exports.splitWhere = exports.some = exports.refineOrDieWith = exports.refineOrDie = exports.raceWith = exports.raceBoth = exports.race = exports.provideContext = exports.orElse = exports.never = exports.mkString = exports.mapLeftover = exports.mapInputEffect = exports.mapInputChunksEffect = exports.mapInputChunks = exports.mapInput = exports.mapError = exports.mapEffect = exports.map = exports.leftover = exports.last = exports.ignoreLeftover = exports.head = exports.fromQueue = exports.fromPush = exports.fromPubSub = exports.fromEffect = exports.fromChannel = exports.forEachWhile = exports.forEachChunkWhile = exports.forEachChunk = exports.forEach = exports.foldWeightedEffect = exports.foldWeightedDecomposeEffect = exports.foldWeightedDecompose = exports.foldWeighted = exports.foldUntilEffect = exports.foldUntil = exports.foldSink = exports.foldLeftEffect = exports.foldLeftChunksEffect = exports.foldLeftChunks = exports.foldLeft = exports.foldEffect = exports.foldChunksEffect = exports.foldChunks = exports.fold = exports.flatMap = exports.findEffect = exports.filterInputEffect = exports.filterInput = exports.failSync = exports.failCauseSync = exports.failCause = exports.fail = exports.every = exports.ensuringWith = exports.ensuring = exports.dropWhileEffect = exports.dropWhile = exports.dropUntilEffect = exports.dropUntil = exports.drop = exports.drain = exports.dimapEffect = exports.dimapChunksEffect = exports.dimapChunks = exports.dimap = exports.dieSync = exports.dieMessage = exports.die = exports.count = exports.contextWithSink = exports.contextWithEffect = exports.contextWith = exports.context = exports.collectLeftover = exports.collectAllWhileWith = exports.collectAllWhileEffect = exports.collectAllWhile = exports.collectAllUntilEffect = exports.collectAllUntil = exports.collectAllToSetN = exports.collectAllToSet = exports.collectAllToMapN = exports.collectAllToMap = exports.collectAllN = exports.collectAllFrom = exports.collectAll = exports.as = exports.SinkTypeId = void 0;
exports.zipWith = exports.zipRight = exports.zipLeft = exports.zip = exports.withDuration = exports.unwrapScopedWith = exports.unwrapScoped = void 0;
var internal = _interopRequireWildcard(require("./internal/sink.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const SinkTypeId = exports.SinkTypeId = internal.SinkTypeId;
/**
 * Replaces this sink's result with the provided value.
 *
 * @since 2.0.0
 * @category mapping
 */
const as = exports.as = internal.as;
/**
 * A sink that collects all elements into a `Chunk`.
 *
 * @since 2.0.0
 * @category constructors
 */
const collectAll = exports.collectAll = internal.collectAll;
/**
 * A sink that collects first `n` elements into a chunk.
 *
 * @since 2.0.0
 * @category constructors
 */
const collectAllN = exports.collectAllN = internal.collectAllN;
/**
 * Repeatedly runs the sink and accumulates its results into a `Chunk`.
 *
 * @since 2.0.0
 * @category utils
 */
const collectAllFrom = exports.collectAllFrom = internal.collectAllFrom;
/**
 * A sink that collects all of its inputs into a map. The keys are extracted
 * from inputs using the keying function `key`; if multiple inputs use the
 * same key, they are merged using the `merge` function.
 *
 * @since 2.0.0
 * @category constructors
 */
const collectAllToMap = exports.collectAllToMap = internal.collectAllToMap;
/**
 * A sink that collects first `n` keys into a map. The keys are calculated
 * from inputs using the keying function `key`; if multiple inputs use the the
 * same key, they are merged using the `merge` function.
 *
 * @since 2.0.0
 * @category constructors
 */
const collectAllToMapN = exports.collectAllToMapN = internal.collectAllToMapN;
/**
 * A sink that collects all of its inputs into a set.
 *
 * @since 2.0.0
 * @category constructors
 */
const collectAllToSet = exports.collectAllToSet = internal.collectAllToSet;
/**
 * A sink that collects first `n` distinct inputs into a set.
 *
 * @since 2.0.0
 * @category constructors
 */
const collectAllToSetN = exports.collectAllToSetN = internal.collectAllToSetN;
/**
 * Accumulates incoming elements into a chunk until predicate `p` is
 * satisfied.
 *
 * @since 2.0.0
 * @category constructors
 */
const collectAllUntil = exports.collectAllUntil = internal.collectAllUntil;
/**
 * Accumulates incoming elements into a chunk until effectful predicate `p` is
 * satisfied.
 *
 * @since 2.0.0
 * @category constructors
 */
const collectAllUntilEffect = exports.collectAllUntilEffect = internal.collectAllUntilEffect;
/**
 * Accumulates incoming elements into a chunk as long as they verify predicate
 * `p`.
 *
 * @since 2.0.0
 * @category constructors
 */
const collectAllWhile = exports.collectAllWhile = internal.collectAllWhile;
/**
 * Accumulates incoming elements into a chunk as long as they verify effectful
 * predicate `p`.
 *
 * @since 2.0.0
 * @category constructors
 */
const collectAllWhileEffect = exports.collectAllWhileEffect = internal.collectAllWhileEffect;
/**
 * Repeatedly runs the sink for as long as its results satisfy the predicate
 * `p`. The sink's results will be accumulated using the stepping function `f`.
 *
 * @since 2.0.0
 * @category utils
 */
const collectAllWhileWith = exports.collectAllWhileWith = internal.collectAllWhileWith;
/**
 * Collects the leftovers from the stream when the sink succeeds and returns
 * them as part of the sink's result.
 *
 * @since 2.0.0
 * @category utils
 */
const collectLeftover = exports.collectLeftover = internal.collectLeftover;
/**
 * Transforms this sink's input elements.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapInput = exports.mapInput = internal.mapInput;
/**
 * Effectfully transforms this sink's input elements.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapInputEffect = exports.mapInputEffect = internal.mapInputEffect;
/**
 * Transforms this sink's input chunks. `f` must preserve chunking-invariance.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapInputChunks = exports.mapInputChunks = internal.mapInputChunks;
/**
 * Effectfully transforms this sink's input chunks. `f` must preserve
 * chunking-invariance.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapInputChunksEffect = exports.mapInputChunksEffect = internal.mapInputChunksEffect;
/**
 * A sink that counts the number of elements fed to it.
 *
 * @since 2.0.0
 * @category constructors
 */
const count = exports.count = internal.count;
/**
 * Creates a sink halting with the specified defect.
 *
 * @since 2.0.0
 * @category constructors
 */
const die = exports.die = internal.die;
/**
 * Creates a sink halting with the specified message, wrapped in a
 * `RuntimeException`.
 *
 * @since 2.0.0
 * @category constructors
 */
const dieMessage = exports.dieMessage = internal.dieMessage;
/**
 * Creates a sink halting with the specified defect.
 *
 * @since 2.0.0
 * @category constructors
 */
const dieSync = exports.dieSync = internal.dieSync;
/**
 * Transforms both inputs and result of this sink using the provided
 * functions.
 *
 * @since 2.0.0
 * @category mapping
 */
const dimap = exports.dimap = internal.dimap;
/**
 * Effectfully transforms both inputs and result of this sink using the
 * provided functions.
 *
 * @since 2.0.0
 * @category mapping
 */
const dimapEffect = exports.dimapEffect = internal.dimapEffect;
/**
 * Transforms both input chunks and result of this sink using the provided
 * functions.
 *
 * @since 2.0.0
 * @category mapping
 */
const dimapChunks = exports.dimapChunks = internal.dimapChunks;
/**
 * Effectfully transforms both input chunks and result of this sink using the
 * provided functions. `f` and `g` must preserve chunking-invariance.
 *
 * @since 2.0.0
 * @category mapping
 */
const dimapChunksEffect = exports.dimapChunksEffect = internal.dimapChunksEffect;
/**
 * A sink that ignores its inputs.
 *
 * @since 2.0.0
 * @category constructors
 */
const drain = exports.drain = internal.drain;
/**
 * Creates a sink that drops `n` elements.
 *
 * @since 2.0.0
 * @category constructors
 */
const drop = exports.drop = internal.drop;
/**
 * Drops incoming elements until the predicate is satisfied.
 *
 * @since 2.0.0
 * @category constructors
 */
const dropUntil = exports.dropUntil = internal.dropUntil;
/**
 * Drops incoming elements until the effectful predicate is satisfied.
 *
 * @since 2.0.0
 * @category constructors
 */
const dropUntilEffect = exports.dropUntilEffect = internal.dropUntilEffect;
/**
 * Drops incoming elements as long as the predicate is satisfied.
 *
 * @since 2.0.0
 * @category constructors
 */
const dropWhile = exports.dropWhile = internal.dropWhile;
/**
 * Drops incoming elements as long as the effectful predicate is satisfied.
 *
 * @since 2.0.0
 * @category constructors
 */
const dropWhileEffect = exports.dropWhileEffect = internal.dropWhileEffect;
/**
 * Returns a new sink with an attached finalizer. The finalizer is guaranteed
 * to be executed so long as the sink begins execution (and regardless of
 * whether or not it completes).
 *
 * @since 2.0.0
 * @category finalization
 */
const ensuring = exports.ensuring = internal.ensuring;
/**
 * Returns a new sink with an attached finalizer. The finalizer is guaranteed
 * to be executed so long as the sink begins execution (and regardless of
 * whether or not it completes).
 *
 * @since 2.0.0
 * @category finalization
 */
const ensuringWith = exports.ensuringWith = internal.ensuringWith;
/**
 * Accesses the whole context of the sink.
 *
 * @since 2.0.0
 * @category constructors
 */
const context = exports.context = internal.context;
/**
 * Accesses the context of the sink.
 *
 * @since 2.0.0
 * @category constructors
 */
const contextWith = exports.contextWith = internal.contextWith;
/**
 * Accesses the context of the sink in the context of an effect.
 *
 * @since 2.0.0
 * @category constructors
 */
const contextWithEffect = exports.contextWithEffect = internal.contextWithEffect;
/**
 * Accesses the context of the sink in the context of a sink.
 *
 * @since 2.0.0
 * @category constructors
 */
const contextWithSink = exports.contextWithSink = internal.contextWithSink;
/**
 * A sink that returns whether all elements satisfy the specified predicate.
 *
 * @since 2.0.0
 * @category constructors
 */
const every = exports.every = internal.every;
/**
 * A sink that always fails with the specified error.
 *
 * @since 2.0.0
 * @category constructors
 */
const fail = exports.fail = internal.fail;
/**
 * A sink that always fails with the specified lazily evaluated error.
 *
 * @since 2.0.0
 * @category constructors
 */
const failSync = exports.failSync = internal.failSync;
/**
 * Creates a sink halting with a specified `Cause`.
 *
 * @since 2.0.0
 * @category constructors
 */
const failCause = exports.failCause = internal.failCause;
/**
 * Creates a sink halting with a specified lazily evaluated `Cause`.
 *
 * @since 2.0.0
 * @category constructors
 */
const failCauseSync = exports.failCauseSync = internal.failCauseSync;
/**
 * Filters the sink's input with the given predicate.
 *
 * @since 2.0.0
 * @category filtering
 */
const filterInput = exports.filterInput = internal.filterInput;
/**
 * Effectfully filter the input of this sink using the specified predicate.
 *
 * @since 2.0.0
 * @category filtering
 */
const filterInputEffect = exports.filterInputEffect = internal.filterInputEffect;
/**
 * Creates a sink that produces values until one verifies the predicate `f`.
 *
 * @since 2.0.0
 * @category elements
 */
const findEffect = exports.findEffect = internal.findEffect;
/**
 * A sink that folds its inputs with the provided function, termination
 * predicate and initial state.
 *
 * @since 2.0.0
 * @category folding
 */
const fold = exports.fold = internal.fold;
/**
 * Folds over the result of the sink
 *
 * @since 2.0.0
 * @category folding
 */
const foldSink = exports.foldSink = internal.foldSink;
/**
 * A sink that folds its input chunks with the provided function, termination
 * predicate and initial state. `contFn` condition is checked only for the
 * initial value and at the end of processing of each chunk. `f` and `contFn`
 * must preserve chunking-invariance.
 *
 * @since 2.0.0
 * @category constructors
 */
const foldChunks = exports.foldChunks = internal.foldChunks;
/**
 * A sink that effectfully folds its input chunks with the provided function,
 * termination predicate and initial state. `contFn` condition is checked only
 * for the initial value and at the end of processing of each chunk. `f` and
 * `contFn` must preserve chunking-invariance.
 *
 * @since 2.0.0
 * @category constructors
 */
const foldChunksEffect = exports.foldChunksEffect = internal.foldChunksEffect;
/**
 * A sink that effectfully folds its inputs with the provided function,
 * termination predicate and initial state.
 *
 * @since 2.0.0
 * @category constructors
 */
const foldEffect = exports.foldEffect = internal.foldEffect;
/**
 * A sink that folds its inputs with the provided function and initial state.
 *
 * @since 2.0.0
 * @category constructors
 */
const foldLeft = exports.foldLeft = internal.foldLeft;
/**
 * A sink that folds its input chunks with the provided function and initial
 * state. `f` must preserve chunking-invariance.
 *
 * @since 2.0.0
 * @category constructors
 */
const foldLeftChunks = exports.foldLeftChunks = internal.foldLeftChunks;
/**
 * A sink that effectfully folds its input chunks with the provided function
 * and initial state. `f` must preserve chunking-invariance.
 *
 * @since 2.0.0
 * @category constructors
 */
const foldLeftChunksEffect = exports.foldLeftChunksEffect = internal.foldLeftChunksEffect;
/**
 * A sink that effectfully folds its inputs with the provided function and
 * initial state.
 *
 * @since 2.0.0
 * @category constructors
 */
const foldLeftEffect = exports.foldLeftEffect = internal.foldLeftEffect;
/**
 * Creates a sink that folds elements of type `In` into a structure of type
 * `S` until `max` elements have been folded.
 *
 * Like `Sink.foldWeighted`, but with a constant cost function of `1`.
 *
 * @since 2.0.0
 * @category constructors
 */
const foldUntil = exports.foldUntil = internal.foldUntil;
/**
 * Creates a sink that effectfully folds elements of type `In` into a
 * structure of type `S` until `max` elements have been folded.
 *
 * Like `Sink.foldWeightedEffect` but with a constant cost function of `1`.
 *
 * @since 2.0.0
 * @category constructors
 */
const foldUntilEffect = exports.foldUntilEffect = internal.foldUntilEffect;
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
const foldWeighted = exports.foldWeighted = internal.foldWeighted;
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
const foldWeightedDecompose = exports.foldWeightedDecompose = internal.foldWeightedDecompose;
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
const foldWeightedDecomposeEffect = exports.foldWeightedDecomposeEffect = internal.foldWeightedDecomposeEffect;
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
const foldWeightedEffect = exports.foldWeightedEffect = internal.foldWeightedEffect;
/**
 * A sink that executes the provided effectful function for every element fed
 * to it.
 *
 * @since 2.0.0
 * @category constructors
 */
const forEach = exports.forEach = internal.forEach;
/**
 * A sink that executes the provided effectful function for every chunk fed to
 * it.
 *
 * @since 2.0.0
 * @category constructors
 */
const forEachChunk = exports.forEachChunk = internal.forEachChunk;
/**
 * A sink that executes the provided effectful function for every chunk fed to
 * it until `f` evaluates to `false`.
 *
 * @since 2.0.0
 * @category constructors
 */
const forEachChunkWhile = exports.forEachChunkWhile = internal.forEachChunkWhile;
/**
 * A sink that executes the provided effectful function for every element fed
 * to it until `f` evaluates to `false`.
 *
 * @since 2.0.0
 * @category constructors
 */
const forEachWhile = exports.forEachWhile = internal.forEachWhile;
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
const flatMap = exports.flatMap = internal.flatMap;
/**
 * Creates a sink from a `Channel`.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromChannel = exports.fromChannel = internal.fromChannel;
/**
 * Creates a `Channel` from a Sink.
 *
 * @since 2.0.0
 * @category constructors
 */
const toChannel = exports.toChannel = internal.toChannel;
/**
 * Creates a single-value sink produced from an effect.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromEffect = exports.fromEffect = internal.fromEffect;
/**
 * Create a sink which publishes each element to the specified `PubSub`.
 *
 * If the `shutdown` parameter is `true`, the `PubSub` will be shutdown after
 * the sink is evaluated (defaults to `false`).
 *
 * @since 2.0.0
 * @category constructors
 */
const fromPubSub = exports.fromPubSub = internal.fromPubSub;
/**
 * Creates a sink from a chunk processing function.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromPush = exports.fromPush = internal.fromPush;
/**
 * Create a sink which enqueues each element into the specified queue.
 *
 * If the `shutdown` parameter is `true`, the queue will be shutdown after the
 * sink is evaluated (defaults to `false`).
 *
 * @since 2.0.0
 * @category constructors
 */
const fromQueue = exports.fromQueue = internal.fromQueue;
/**
 * Creates a sink containing the first value.
 *
 * @since 2.0.0
 * @category constructors
 */
const head = exports.head = internal.head;
/**
 * Drains the remaining elements from the stream after the sink finishes
 *
 * @since 2.0.0
 * @category utils
 */
const ignoreLeftover = exports.ignoreLeftover = internal.ignoreLeftover;
/**
 * Creates a sink containing the last value.
 *
 * @since 2.0.0
 * @category constructors
 */
const last = exports.last = internal.last;
/**
 * Creates a sink that does not consume any input but provides the given chunk
 * as its leftovers
 *
 * @since 2.0.0
 * @category constructors
 */
const leftover = exports.leftover = internal.leftover;
/**
 * Transforms this sink's result.
 *
 * @since 2.0.0
 * @category mapping
 */
const map = exports.map = internal.map;
/**
 * Effectfully transforms this sink's result.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapEffect = exports.mapEffect = internal.mapEffect;
/**
 * Transforms the errors emitted by this sink using `f`.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapError = exports.mapError = internal.mapError;
/**
 * Transforms the leftovers emitted by this sink using `f`.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapLeftover = exports.mapLeftover = internal.mapLeftover;
/**
 * Creates a sink which transforms it's inputs into a string.
 *
 * @since 2.0.0
 * @category constructors
 */
const mkString = exports.mkString = internal.mkString;
/**
 * Creates a sink which never terminates.
 *
 * @since 2.0.0
 * @category constructors
 */
const never = exports.never = internal.never;
/**
 * Switch to another sink in case of failure
 *
 * @since 2.0.0
 * @category error handling
 */
const orElse = exports.orElse = internal.orElse;
/**
 * Provides the sink with its required context, which eliminates its
 * dependency on `R`.
 *
 * @since 2.0.0
 * @category context
 */
const provideContext = exports.provideContext = internal.provideContext;
/**
 * Runs both sinks in parallel on the input, , returning the result or the
 * error from the one that finishes first.
 *
 * @since 2.0.0
 * @category utils
 */
const race = exports.race = internal.race;
/**
 * Runs both sinks in parallel on the input, returning the result or the error
 * from the one that finishes first.
 *
 * @since 2.0.0
 * @category utils
 */
const raceBoth = exports.raceBoth = internal.raceBoth;
/**
 * Runs both sinks in parallel on the input, using the specified merge
 * function as soon as one result or the other has been computed.
 *
 * @since 2.0.0
 * @category utils
 */
const raceWith = exports.raceWith = internal.raceWith;
/**
 * @since 2.0.0
 * @category error handling
 */
const refineOrDie = exports.refineOrDie = internal.refineOrDie;
/**
 * @since 2.0.0
 * @category error handling
 */
const refineOrDieWith = exports.refineOrDieWith = internal.refineOrDieWith;
/**
 * A sink that returns whether an element satisfies the specified predicate.
 *
 * @since 2.0.0
 * @category constructors
 */
const some = exports.some = internal.some;
/**
 * Splits the sink on the specified predicate, returning a new sink that
 * consumes elements until an element after the first satisfies the specified
 * predicate.
 *
 * @since 2.0.0
 * @category utils
 */
const splitWhere = exports.splitWhere = internal.splitWhere;
/**
 * A sink that immediately ends with the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
const succeed = exports.succeed = internal.succeed;
/**
 * A sink that sums incoming numeric values.
 *
 * @since 2.0.0
 * @category constructors
 */
const sum = exports.sum = internal.sum;
/**
 * Summarize a sink by running an effect when the sink starts and again when
 * it completes.
 *
 * @since 2.0.0
 * @category utils
 */
const summarized = exports.summarized = internal.summarized;
/**
 * Returns a lazily constructed sink that may require effects for its
 * creation.
 *
 * @since 2.0.0
 * @category constructors
 */
const suspend = exports.suspend = internal.suspend;
/**
 * A sink that immediately ends with the specified lazy value.
 *
 * @since 2.0.0
 * @category constructors
 */
const sync = exports.sync = internal.sync;
/**
 * A sink that takes the specified number of values.
 *
 * @since 2.0.0
 * @category constructors
 */
const take = exports.take = internal.take;
/**
 * @since 2.0.0
 * @category constructors
 */
const timed = exports.timed = internal.timed;
/**
 * Creates a sink produced from an effect.
 *
 * @since 2.0.0
 * @category constructors
 */
const unwrap = exports.unwrap = internal.unwrap;
/**
 * Creates a sink produced from a scoped effect.
 *
 * @since 2.0.0
 * @category constructors
 */
const unwrapScoped = exports.unwrapScoped = internal.unwrapScoped;
/**
 * Constructs a `Sink` from a function which receives a `Scope` and returns
 * an effect that will result in a `Sink` if successful.
 *
 * @since 3.11.0
 * @category constructors
 */
const unwrapScopedWith = exports.unwrapScopedWith = internal.unwrapScopedWith;
/**
 * Returns the sink that executes this one and times its execution.
 *
 * @since 2.0.0
 * @category utils
 */
const withDuration = exports.withDuration = internal.withDuration;
/**
 * Feeds inputs to this sink until it yields a result, then switches over to
 * the provided sink until it yields a result, finally combining the two
 * results into a tuple.
 *
 * @since 2.0.0
 * @category zipping
 */
const zip = exports.zip = internal.zip;
/**
 * Like `Sink.zip` but keeps only the result from this sink.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipLeft = exports.zipLeft = internal.zipLeft;
/**
 * Like `Sink.zip` but keeps only the result from `that` sink.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipRight = exports.zipRight = internal.zipRight;
/**
 * Feeds inputs to this sink until it yields a result, then switches over to
 * the provided sink until it yields a result, finally combining the two
 * results with `f`.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipWith = exports.zipWith = internal.zipWith;
//# sourceMappingURL=Sink.js.map