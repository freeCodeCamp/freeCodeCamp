"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromIterableEffect = exports.fromIterable = exports.fromEventListener = exports.fromEffectOption = exports.fromEffect = exports.fromChunks = exports.fromChunkQueue = exports.fromChunkPubSub = exports.fromChunk = exports.fromChannel = exports.fromAsyncIterable = exports.forever = exports.flattenTake = exports.flattenIterables = exports.flattenExitOption = exports.flattenEffect = exports.flattenChunks = exports.flatten = exports.flatMap = exports.findEffect = exports.find = exports.finalizer = exports.filterMapWhileEffect = exports.filterMapWhile = exports.filterMapEffect = exports.filterMap = exports.filterEffect = exports.filter = exports.failSync = exports.failCauseSync = exports.failCause = exports.fail = exports.execute = exports.ensuringWith = exports.ensuring = exports.encodeText = exports.empty = exports.either = exports.dropWhileEffect = exports.dropWhile = exports.dropUntilEffect = exports.dropUntil = exports.dropRight = exports.drop = exports.drainFork = exports.drain = exports.distributedWithDynamic = exports.distributedWith = exports.dieSync = exports.dieMessage = exports.die = exports.decodeText = exports.debounce = exports.crossWith = exports.crossRight = exports.crossLeft = exports.cross = exports.contextWithStream = exports.contextWithEffect = exports.contextWith = exports.context = exports.concatAll = exports.concat = exports.combineChunks = exports.combine = exports.chunksWith = exports.chunks = exports.changesWithEffect = exports.changesWith = exports.changes = exports.catchTags = exports.catchTag = exports.catchSomeCause = exports.catchSome = exports.catchAllCause = exports.catchAll = exports.bufferChunks = exports.buffer = exports.broadcastedQueuesDynamic = exports.broadcastedQueues = exports.broadcastDynamic = exports.broadcast = exports.branchAfter = exports.bindTo = exports.bindEffect = exports.bind = exports.asyncScoped = exports.asyncPush = exports.asyncEffect = exports.async = exports.as = exports.aggregateWithinEither = exports.aggregateWithin = exports.aggregate = exports.acquireRelease = exports.accumulateChunks = exports.accumulate = exports.StreamTypeId = exports.Do = exports.DefaultChunkSize = void 0;
exports.retry = exports.repeatWith = exports.repeatValue = exports.repeatElementsWith = exports.repeatElements = exports.repeatEither = exports.repeatEffectWithSchedule = exports.repeatEffectOption = exports.repeatEffectChunkOption = exports.repeatEffectChunk = exports.repeatEffect = exports.repeat = exports.refineOrDieWith = exports.refineOrDie = exports.rechunk = exports.range = exports.raceAll = exports.race = exports.provideSomeLayer = exports.provideSomeContext = exports.provideServiceStream = exports.provideServiceEffect = exports.provideService = exports.provideLayer = exports.provideContext = exports.prepend = exports.pipeThroughChannelOrFail = exports.pipeThroughChannel = exports.pipeThrough = exports.peel = exports.partitionEither = exports.partition = exports.paginateEffect = exports.paginateChunkEffect = exports.paginateChunk = exports.paginate = exports.orElseSucceed = exports.orElseIfEmptyStream = exports.orElseIfEmptyChunk = exports.orElseIfEmpty = exports.orElseFail = exports.orElseEither = exports.orElse = exports.orDieWith = exports.orDie = exports.onStart = exports.onError = exports.onEnd = exports.onDone = exports.never = exports.mkString = exports.mergeWithTag = exports.mergeWith = exports.mergeRight = exports.mergeLeft = exports.mergeEither = exports.mergeAll = exports.merge = exports.mapInputContext = exports.mapErrorCause = exports.mapError = exports.mapEffect = exports.mapConcatEffect = exports.mapConcatChunkEffect = exports.mapConcatChunk = exports.mapConcat = exports.mapChunksEffect = exports.mapChunks = exports.mapBoth = exports.mapAccumEffect = exports.mapAccum = exports.map = exports.make = exports.let = exports.iterate = exports.intersperseAffixes = exports.intersperse = exports.interruptWhenDeferred = exports.interruptWhen = exports.interruptAfter = exports.interleaveWith = exports.interleave = exports.identity = exports.haltWhenDeferred = exports.haltWhen = exports.haltAfter = exports.groupedWithin = exports.grouped = exports.groupByKey = exports.groupBy = exports.groupAdjacentBy = exports.fromTQueue = exports.fromTPubSub = exports.fromSchedule = exports.fromReadableStreamByob = exports.fromReadableStream = exports.fromQueue = exports.fromPull = exports.fromPubSub = exports.fromIteratorSucceed = void 0;
exports.zipAllWith = exports.zipAllSortedByKeyWith = exports.zipAllSortedByKeyRight = exports.zipAllSortedByKeyLeft = exports.zipAllSortedByKey = exports.zipAllRight = exports.zipAllLeft = exports.zipAll = exports.zip = exports.withSpan = exports.withExecutionPlan = exports.whenEffect = exports.whenCaseEffect = exports.whenCase = exports.when = exports.void = exports.updateService = exports.unwrapScopedWith = exports.unwrapScoped = exports.unwrap = exports.unfoldEffect = exports.unfoldChunkEffect = exports.unfoldChunk = exports.unfold = exports.transduce = exports.toReadableStreamRuntime = exports.toReadableStreamEffect = exports.toReadableStream = exports.toQueueOfElements = exports.toQueue = exports.toPull = exports.toPubSub = exports.toChannel = exports.toAsyncIterableRuntime = exports.toAsyncIterableEffect = exports.toAsyncIterable = exports.timeoutTo = exports.timeoutFailCause = exports.timeoutFail = exports.timeout = exports.tick = exports.throttleEffect = exports.throttle = exports.tapSink = exports.tapErrorCause = exports.tapError = exports.tapBoth = exports.tap = exports.takeWhile = exports.takeUntilEffect = exports.takeUntil = exports.takeRight = exports.take = exports.sync = exports.suspend = exports.succeed = exports.splitOnChunk = exports.splitLines = exports.split = exports.someOrFail = exports.someOrElse = exports.some = exports.slidingSize = exports.sliding = exports.share = exports.scopedWith = exports.scoped = exports.scheduleWith = exports.schedule = exports.scanReduceEffect = exports.scanReduce = exports.scanEffect = exports.scan = exports.runSum = exports.runScoped = exports.runLast = exports.runIntoQueueScoped = exports.runIntoQueueElementsScoped = exports.runIntoQueue = exports.runIntoPubSubScoped = exports.runIntoPubSub = exports.runHead = exports.runForEachWhileScoped = exports.runForEachWhile = exports.runForEachScoped = exports.runForEachChunkScoped = exports.runForEachChunk = exports.runForEach = exports.runFoldWhileScopedEffect = exports.runFoldWhileScoped = exports.runFoldWhileEffect = exports.runFoldWhile = exports.runFoldScopedEffect = exports.runFoldScoped = exports.runFoldEffect = exports.runFold = exports.runDrain = exports.runCount = exports.runCollect = exports.run = void 0;
exports.zipWithPreviousAndNext = exports.zipWithPrevious = exports.zipWithNext = exports.zipWithIndex = exports.zipWithChunks = exports.zipWith = exports.zipRight = exports.zipLeft = exports.zipLatestWith = exports.zipLatestAll = exports.zipLatest = exports.zipFlatten = void 0;
var groupBy_ = _interopRequireWildcard(require("./internal/groupBy.js"));
var internal = _interopRequireWildcard(require("./internal/stream.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @since 2.0.0
 * @category symbols
 */
const StreamTypeId = exports.StreamTypeId = internal.StreamTypeId;
/**
 * The default chunk size used by the various combinators and constructors of
 * `Stream`.
 *
 * @since 2.0.0
 * @category constants
 */
const DefaultChunkSize = exports.DefaultChunkSize = internal.DefaultChunkSize;
/**
 * Collects each underlying Chunk of the stream into a new chunk, and emits it
 * on each pull.
 *
 * @since 2.0.0
 * @category utils
 */
const accumulate = exports.accumulate = internal.accumulate;
/**
 * Re-chunks the elements of the stream by accumulating each underlying chunk.
 *
 * @since 2.0.0
 * @category utils
 */
const accumulateChunks = exports.accumulateChunks = internal.accumulateChunks;
/**
 * Creates a stream from a single value that will get cleaned up after the
 * stream is consumed.
 *
 * @example
 * ```ts
 * import { Console, Effect, Stream } from "effect"
 *
 * // Simulating File operations
 * const open = (filename: string) =>
 *   Effect.gen(function*() {
 *     yield* Console.log(`Opening ${filename}`)
 *     return {
 *       getLines: Effect.succeed(["Line 1", "Line 2", "Line 3"]),
 *       close: Console.log(`Closing ${filename}`)
 *     }
 *   })
 *
 * const stream = Stream.acquireRelease(
 *   open("file.txt"),
 *   (file) => file.close
 * ).pipe(Stream.flatMap((file) => file.getLines))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // Opening file.txt
 * // Closing file.txt
 * // { _id: 'Chunk', values: [ [ 'Line 1', 'Line 2', 'Line 3' ] ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const acquireRelease = exports.acquireRelease = internal.acquireRelease;
/**
 * Aggregates elements of this stream using the provided sink for as long as
 * the downstream operators on the stream are busy.
 *
 * This operator divides the stream into two asynchronous "islands". Operators
 * upstream of this operator run on one fiber, while downstream operators run
 * on another. Whenever the downstream fiber is busy processing elements, the
 * upstream fiber will feed elements into the sink until it signals
 * completion.
 *
 * Any sink can be used here, but see `Sink.foldWeightedEffect` and
 * `Sink.foldUntilEffect` for sinks that cover the common usecases.
 *
 * @since 2.0.0
 * @category utils
 */
const aggregate = exports.aggregate = internal.aggregate;
/**
 * Like {@link aggregateWithinEither}, but only returns the `Right` results.
 *
 * @since 2.0.0
 * @category utils
 */
const aggregateWithin = exports.aggregateWithin = internal.aggregateWithin;
/**
 * Aggregates elements using the provided sink until it completes, or until
 * the delay signalled by the schedule has passed.
 *
 * This operator divides the stream into two asynchronous islands. Operators
 * upstream of this operator run on one fiber, while downstream operators run
 * on another. Elements will be aggregated by the sink until the downstream
 * fiber pulls the aggregated value, or until the schedule's delay has passed.
 *
 * Aggregated elements will be fed into the schedule to determine the delays
 * between pulls.
 *
 * @since 2.0.0
 * @category utils
 */
const aggregateWithinEither = exports.aggregateWithinEither = internal.aggregateWithinEither;
/**
 * Maps the success values of this stream to the specified constant value.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.range(1, 5).pipe(Stream.as(null))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ null, null, null, null, null ] }
 * ```
 *
 * @since 2.0.0
 * @category mapping
 */
const as = exports.as = internal.as;
const _async = exports.async = internal._async;
/**
 * Creates a stream from an asynchronous callback that can be called multiple
 * times The registration of the callback itself returns an effect. The
 * optionality of the error type `E` can be used to signal the end of the
 * stream, by setting it to `None`.
 *
 * @since 2.0.0
 * @category constructors
 */
const asyncEffect = exports.asyncEffect = internal.asyncEffect;
/**
 * Creates a stream from an external push-based resource.
 *
 * You can use the `emit` helper to emit values to the stream. The `emit` helper
 * returns a boolean indicating whether the value was emitted or not.
 *
 * You can also use the `emit` helper to signal the end of the stream by
 * using apis such as `emit.end` or `emit.fail`.
 *
 * By default it uses an "unbounded" buffer size.
 * You can customize the buffer size and strategy by passing an object as the
 * second argument with the `bufferSize` and `strategy` fields.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * Stream.asyncPush<string>((emit) =>
 *   Effect.acquireRelease(
 *     Effect.gen(function*() {
 *       yield* Effect.log("subscribing")
 *       return setInterval(() => emit.single("tick"), 1000)
 *     }),
 *     (handle) =>
 *       Effect.gen(function*() {
 *         yield* Effect.log("unsubscribing")
 *         clearInterval(handle)
 *       })
 *   ), { bufferSize: 16, strategy: "dropping" })
 * ```
 *
 * @since 3.6.0
 * @category constructors
 */
const asyncPush = exports.asyncPush = internal.asyncPush;
/**
 * Creates a stream from an asynchronous callback that can be called multiple
 * times. The registration of the callback itself returns an a scoped
 * resource. The optionality of the error type `E` can be used to signal the
 * end of the stream, by setting it to `None`.
 *
 * @since 2.0.0
 * @category constructors
 */
const asyncScoped = exports.asyncScoped = internal.asyncScoped;
/**
 * Returns a `Stream` that first collects `n` elements from the input `Stream`,
 * and then creates a new `Stream` using the specified function, and sends all
 * the following elements through that.
 *
 * @since 2.0.0
 * @category sequencing
 */
const branchAfter = exports.branchAfter = internal.branchAfter;
/**
 * Fan out the stream, producing a list of streams that have the same elements
 * as this stream. The driver stream will only ever advance the `maximumLag`
 * chunks before the slowest downstream stream.
 *
 * @example
 * ```ts
 * import { Console, Effect, Fiber, Schedule, Stream } from "effect"
 *
 * const numbers = Effect.scoped(
 *   Stream.range(1, 20).pipe(
 *     Stream.tap((n) => Console.log(`Emit ${n} element before broadcasting`)),
 *     Stream.broadcast(2, 5),
 *     Stream.flatMap(([first, second]) =>
 *       Effect.gen(function*() {
 *         const fiber1 = yield* Stream.runFold(first, 0, (acc, e) => Math.max(acc, e)).pipe(
 *           Effect.andThen((max) => Console.log(`Maximum: ${max}`)),
 *           Effect.fork
 *         )
 *         const fiber2 = yield* second.pipe(
 *           Stream.schedule(Schedule.spaced("1 second")),
 *           Stream.runForEach((n) => Console.log(`Logging to the Console: ${n}`)),
 *           Effect.fork
 *         )
 *         yield* Fiber.join(fiber1).pipe(
 *           Effect.zip(Fiber.join(fiber2), { concurrent: true })
 *         )
 *       })
 *     ),
 *     Stream.runCollect
 *   )
 * )
 *
 * Effect.runPromise(numbers).then(console.log)
 * // Emit 1 element before broadcasting
 * // Emit 2 element before broadcasting
 * // Emit 3 element before broadcasting
 * // Emit 4 element before broadcasting
 * // Emit 5 element before broadcasting
 * // Emit 6 element before broadcasting
 * // Emit 7 element before broadcasting
 * // Emit 8 element before broadcasting
 * // Emit 9 element before broadcasting
 * // Emit 10 element before broadcasting
 * // Emit 11 element before broadcasting
 * // Logging to the Console: 1
 * // Logging to the Console: 2
 * // Logging to the Console: 3
 * // Logging to the Console: 4
 * // Logging to the Console: 5
 * // Emit 12 element before broadcasting
 * // Emit 13 element before broadcasting
 * // Emit 14 element before broadcasting
 * // Emit 15 element before broadcasting
 * // Emit 16 element before broadcasting
 * // Logging to the Console: 6
 * // Logging to the Console: 7
 * // Logging to the Console: 8
 * // Logging to the Console: 9
 * // Logging to the Console: 10
 * // Emit 17 element before broadcasting
 * // Emit 18 element before broadcasting
 * // Emit 19 element before broadcasting
 * // Emit 20 element before broadcasting
 * // Logging to the Console: 11
 * // Logging to the Console: 12
 * // Logging to the Console: 13
 * // Logging to the Console: 14
 * // Logging to the Console: 15
 * // Maximum: 20
 * // Logging to the Console: 16
 * // Logging to the Console: 17
 * // Logging to the Console: 18
 * // Logging to the Console: 19
 * // Logging to the Console: 20
 * // { _id: 'Chunk', values: [ undefined ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const broadcast = exports.broadcast = internal.broadcast;
/**
 * Returns a new Stream that multicasts the original Stream, subscribing to it as soon as the first consumer subscribes.
 * As long as there is at least one consumer, the upstream will continue running and emitting data.
 * When all consumers have exited, the upstream will be finalized.
 *
 * @since 3.8.0
 * @category utils
 */
const share = exports.share = internal.share;
/**
 * Fan out the stream, producing a dynamic number of streams that have the
 * same elements as this stream. The driver stream will only ever advance the
 * `maximumLag` chunks before the slowest downstream stream.
 *
 * @since 2.0.0
 * @category utils
 */
const broadcastDynamic = exports.broadcastDynamic = internal.broadcastDynamic;
/**
 * Converts the stream to a scoped list of queues. Every value will be
 * replicated to every queue with the slowest queue being allowed to buffer
 * `maximumLag` chunks before the driver is back pressured.
 *
 * Queues can unsubscribe from upstream by shutting down.
 *
 * @since 2.0.0
 * @category utils
 */
const broadcastedQueues = exports.broadcastedQueues = internal.broadcastedQueues;
/**
 * Converts the stream to a scoped dynamic amount of queues. Every chunk will
 * be replicated to every queue with the slowest queue being allowed to buffer
 * `maximumLag` chunks before the driver is back pressured.
 *
 * Queues can unsubscribe from upstream by shutting down.
 *
 * @since 2.0.0
 * @category utils
 */
const broadcastedQueuesDynamic = exports.broadcastedQueuesDynamic = internal.broadcastedQueuesDynamic;
/**
 * Allows a faster producer to progress independently of a slower consumer by
 * buffering up to `capacity` elements in a queue.
 *
 * Note: This combinator destroys the chunking structure. It's recommended to
 *       use rechunk afterwards. Additionally, prefer capacities that are powers
 *       of 2 for better performance.
 *
 * @example
 * ```ts
 * import { Console, Effect, Schedule, Stream } from "effect"
 *
 * const stream = Stream.range(1, 10).pipe(
 *   Stream.tap((n) => Console.log(`before buffering: ${n}`)),
 *   Stream.buffer({ capacity: 4 }),
 *   Stream.tap((n) => Console.log(`after buffering: ${n}`)),
 *   Stream.schedule(Schedule.spaced("5 seconds"))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // before buffering: 1
 * // before buffering: 2
 * // before buffering: 3
 * // before buffering: 4
 * // before buffering: 5
 * // before buffering: 6
 * // after buffering: 1
 * // after buffering: 2
 * // before buffering: 7
 * // after buffering: 3
 * // before buffering: 8
 * // after buffering: 4
 * // before buffering: 9
 * // after buffering: 5
 * // before buffering: 10
 * // ...
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const buffer = exports.buffer = internal.buffer;
/**
 * Allows a faster producer to progress independently of a slower consumer by
 * buffering up to `capacity` chunks in a queue.
 *
 * @note Prefer capacities that are powers of 2 for better performance.
 * @since 2.0.0
 * @category utils
 */
const bufferChunks = exports.bufferChunks = internal.bufferChunks;
/**
 * Switches over to the stream produced by the provided function in case this
 * one fails with a typed error.
 *
 * @since 2.0.0
 * @category error handling
 */
const catchAll = exports.catchAll = internal.catchAll;
/**
 * Switches over to the stream produced by the provided function in case this
 * one fails. Allows recovery from all causes of failure, including
 * interruption if the stream is uninterruptible.
 *
 * @since 2.0.0
 * @category error handling
 */
const catchAllCause = exports.catchAllCause = internal.catchAllCause;
/**
 * Switches over to the stream produced by the provided function in case this
 * one fails with some typed error.
 *
 * @since 2.0.0
 * @category error handling
 */
const catchSome = exports.catchSome = internal.catchSome;
/**
 * Switches over to the stream produced by the provided function in case this
 * one fails with an error matching the given `_tag`.
 *
 * @since 2.0.0
 * @category error handling
 */
const catchTag = exports.catchTag = internal.catchTag;
/**
 * Switches over to the stream produced by one of the provided functions, in
 * case this one fails with an error matching one of the given `_tag`'s.
 *
 * @since 2.0.0
 * @category error handling
 */
const catchTags = exports.catchTags = internal.catchTags;
/**
 * Switches over to the stream produced by the provided function in case this
 * one fails with some errors. Allows recovery from all causes of failure,
 * including interruption if the stream is uninterruptible.
 *
 * @since 2.0.0
 * @category error handling
 */
const catchSomeCause = exports.catchSomeCause = internal.catchSomeCause;
/**
 * Returns a new stream that only emits elements that are not equal to the
 * previous element emitted, using natural equality to determine whether two
 * elements are equal.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 1, 1, 2, 2, 3, 4).pipe(Stream.changes)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3, 4 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const changes = exports.changes = internal.changes;
/**
 * Returns a new stream that only emits elements that are not equal to the
 * previous element emitted, using the specified function to determine whether
 * two elements are equal.
 *
 * @since 2.0.0
 * @category utils
 */
const changesWith = exports.changesWith = internal.changesWith;
/**
 * Returns a new stream that only emits elements that are not equal to the
 * previous element emitted, using the specified effectual function to
 * determine whether two elements are equal.
 *
 * @since 2.0.0
 * @category utils
 */
const changesWithEffect = exports.changesWithEffect = internal.changesWithEffect;
/**
 * Exposes the underlying chunks of the stream as a stream of chunks of
 * elements.
 *
 * @since 2.0.0
 * @category utils
 */
const chunks = exports.chunks = internal.chunks;
/**
 * Performs the specified stream transformation with the chunk structure of
 * the stream exposed.
 *
 * @since 2.0.0
 * @category utils
 */
const chunksWith = exports.chunksWith = internal.chunksWith;
/**
 * Combines the elements from this stream and the specified stream by
 * repeatedly applying the function `f` to extract an element using both sides
 * and conceptually "offer" it to the destination stream. `f` can maintain
 * some internal state to control the combining process, with the initial
 * state being specified by `s`.
 *
 * Where possible, prefer `Stream.combineChunks` for a more efficient
 * implementation.
 *
 * @since 2.0.0
 * @category utils
 */
const combine = exports.combine = internal.combine;
/**
 * Combines the chunks from this stream and the specified stream by repeatedly
 * applying the function `f` to extract a chunk using both sides and
 * conceptually "offer" it to the destination stream. `f` can maintain some
 * internal state to control the combining process, with the initial state
 * being specified by `s`.
 *
 * @since 2.0.0
 * @category utils
 */
const combineChunks = exports.combineChunks = internal.combineChunks;
/**
 * Concatenates the specified stream with this stream, resulting in a stream
 * that emits the elements from this stream and then the elements from the
 * specified stream.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const s1 = Stream.make(1, 2, 3)
 * const s2 = Stream.make(4, 5)
 *
 * const stream = Stream.concat(s1, s2)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const concat = exports.concat = internal.concat;
/**
 * Concatenates all of the streams in the chunk to one stream.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Stream } from "effect"
 *
 * const s1 = Stream.make(1, 2, 3)
 * const s2 = Stream.make(4, 5)
 * const s3 = Stream.make(6, 7, 8)
 *
 * const stream = Stream.concatAll(Chunk.make(s1, s2, s3))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // {
 * //   _id: 'Chunk',
 * //   values: [
 * //     1, 2, 3, 4,
 * //     5, 6, 7, 8
 * //   ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const concatAll = exports.concatAll = internal.concatAll;
/**
 * Composes this stream with the specified stream to create a cartesian
 * product of elements. The `right` stream would be run multiple times, for
 * every element in the `left` stream.
 *
 * See also `Stream.zip` for the more common point-wise variant.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const s1 = Stream.make(1, 2, 3)
 * const s2 = Stream.make("a", "b")
 *
 * const product = Stream.cross(s1, s2)
 *
 * Effect.runPromise(Stream.runCollect(product)).then(console.log)
 * // {
 * //   _id: "Chunk",
 * //   values: [
 * //     [ 1, "a" ], [ 1, "b" ], [ 2, "a" ], [ 2, "b" ], [ 3, "a" ], [ 3, "b" ]
 * //   ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const cross = exports.cross = internal.cross;
/**
 * Composes this stream with the specified stream to create a cartesian
 * product of elements, but keeps only elements from `left` stream. The `right`
 * stream would be run multiple times, for every element in the `left` stream.
 *
 * See also `Stream.zipLeft` for the more common point-wise variant.
 *
 * @since 2.0.0
 * @category utils
 */
const crossLeft = exports.crossLeft = internal.crossLeft;
/**
 * Composes this stream with the specified stream to create a cartesian
 * product of elements, but keeps only elements from the `right` stream. The
 * `left` stream would be run multiple times, for every element in the `right`
 * stream.
 *
 * See also `Stream.zipRight` for the more common point-wise variant.
 *
 * @since 2.0.0
 * @category utils
 */
const crossRight = exports.crossRight = internal.crossRight;
/**
 * Composes this stream with the specified stream to create a cartesian
 * product of elements with a specified function. The `right` stream would be
 * run multiple times, for every element in the `left` stream.
 *
 * See also `Stream.zipWith` for the more common point-wise variant.
 *
 * @since 2.0.0
 * @category utils
 */
const crossWith = exports.crossWith = internal.crossWith;
/**
 * Delays the emission of values by holding new values for a set duration. If
 * no new values arrive during that time the value is emitted, however if a
 * new value is received during the holding period the previous value is
 * discarded and the process is repeated with the new value.
 *
 * This operator is useful if you have a stream of "bursty" events which
 * eventually settle down and you only need the final event of the burst. For
 * example, a search engine may only want to initiate a search after a user
 * has paused typing so as to not prematurely recommend results.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * let last = Date.now()
 * const log = (message: string) =>
 *   Effect.sync(() => {
 *     const end = Date.now()
 *     console.log(`${message} after ${end - last}ms`)
 *     last = end
 *   })
 *
 * const stream = Stream.make(1, 2, 3).pipe(
 *   Stream.concat(
 *     Stream.fromEffect(Effect.sleep("200 millis").pipe(Effect.as(4))) // Emit 4 after 200 ms
 *   ),
 *   Stream.concat(Stream.make(5, 6)), // Continue with more rapid values
 *   Stream.concat(
 *     Stream.fromEffect(Effect.sleep("150 millis").pipe(Effect.as(7))) // Emit 7 after 150 ms
 *   ),
 *   Stream.concat(Stream.make(8)),
 *   Stream.tap((n) => log(`Received ${n}`)),
 *   Stream.debounce("100 millis"), // Only emit values after a pause of at least 100 milliseconds,
 *   Stream.tap((n) => log(`> Emitted ${n}`))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // Received 1 after 5ms
 * // Received 2 after 2ms
 * // Received 3 after 0ms
 * // > Emitted 3 after 104ms
 * // Received 4 after 99ms
 * // Received 5 after 1ms
 * // Received 6 after 0ms
 * // > Emitted 6 after 101ms
 * // Received 7 after 50ms
 * // Received 8 after 1ms
 * // > Emitted 8 after 101ms
 * // { _id: 'Chunk', values: [ 3, 6, 8 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const debounce = exports.debounce = internal.debounce;
/**
 * The stream that dies with the specified defect.
 *
 * @since 2.0.0
 * @category constructors
 */
const die = exports.die = internal.die;
/**
 * The stream that dies with the specified lazily evaluated defect.
 *
 * @since 2.0.0
 * @category constructors
 */
const dieSync = exports.dieSync = internal.dieSync;
/**
 * The stream that dies with an exception described by `message`.
 *
 * @since 2.0.0
 * @category constructors
 */
const dieMessage = exports.dieMessage = internal.dieMessage;
/**
 * More powerful version of `Stream.broadcast`. Allows to provide a function
 * that determines what queues should receive which elements. The decide
 * function will receive the indices of the queues in the resulting list.
 *
 * @since 2.0.0
 * @category utils
 */
const distributedWith = exports.distributedWith = internal.distributedWith;
/**
 * More powerful version of `Stream.distributedWith`. This returns a function
 * that will produce new queues and corresponding indices. You can also
 * provide a function that will be executed after the final events are
 * enqueued in all queues. Shutdown of the queues is handled by the driver.
 * Downstream users can also shutdown queues manually. In this case the driver
 * will continue but no longer backpressure on them.
 *
 * @since 2.0.0
 * @category utils
 */
const distributedWithDynamic = exports.distributedWithDynamic = internal.distributedWithDynamic;
/**
 * Converts this stream to a stream that executes its effects but emits no
 * elements. Useful for sequencing effects using streams:
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * // We create a stream and immediately drain it.
 * const stream = Stream.range(1, 6).pipe(Stream.drain)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const drain = exports.drain = internal.drain;
/**
 * Drains the provided stream in the background for as long as this stream is
 * running. If this stream ends before `other`, `other` will be interrupted.
 * If `other` fails, this stream will fail with that error.
 *
 * @since 2.0.0
 * @category utils
 */
const drainFork = exports.drainFork = internal.drainFork;
/**
 * Drops the specified number of elements from this stream.
 *
 * @since 2.0.0
 * @category utils
 */
const drop = exports.drop = internal.drop;
/**
 * Drops the last specified number of elements from this stream.
 *
 * @note This combinator keeps `n` elements in memory. Be careful with big
 *       numbers.
 * @since 2.0.0
 * @category utils
 */
const dropRight = exports.dropRight = internal.dropRight;
/**
 * Drops all elements of the stream until the specified predicate evaluates to
 * `true`.
 *
 * @since 2.0.0
 * @category utils
 */
const dropUntil = exports.dropUntil = internal.dropUntil;
/**
 * Drops all elements of the stream until the specified effectful predicate
 * evaluates to `true`.
 *
 * @since 2.0.0
 * @category utils
 */
const dropUntilEffect = exports.dropUntilEffect = internal.dropUntilEffect;
/**
 * Drops all elements of the stream for as long as the specified predicate
 * evaluates to `true`.
 *
 * @since 2.0.0
 * @category utils
 */
const dropWhile = exports.dropWhile = internal.dropWhile;
/**
 * Drops all elements of the stream for as long as the specified predicate
 * produces an effect that evalutates to `true`
 *
 * @since 2.0.0
 * @category utils
 */
const dropWhileEffect = exports.dropWhileEffect = internal.dropWhileEffect;
/**
 * Returns a stream whose failures and successes have been lifted into an
 * `Either`. The resulting stream cannot fail, because the failures have been
 * exposed as part of the `Either` success case.
 *
 * @note The stream will end as soon as the first error occurs.
 *
 * @since 2.0.0
 * @category utils
 */
const either = exports.either = internal.either;
/**
 * The empty stream.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.empty
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const empty = exports.empty = internal.empty;
/**
 * Executes the provided finalizer after this stream's finalizers run.
 *
 * @example
 * ```ts
 * import { Console, Effect, Stream } from "effect"
 *
 * const program = Stream.fromEffect(Console.log("Application Logic.")).pipe(
 *   Stream.concat(Stream.finalizer(Console.log("Finalizing the stream"))),
 *   Stream.ensuring(
 *     Console.log("Doing some other works after stream's finalization")
 *   )
 * )
 *
 * Effect.runPromise(Stream.runCollect(program)).then(console.log)
 * // Application Logic.
 * // Finalizing the stream
 * // Doing some other works after stream's finalization
 * // { _id: 'Chunk', values: [ undefined, undefined ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const ensuring = exports.ensuring = internal.ensuring;
/**
 * Executes the provided finalizer after this stream's finalizers run.
 *
 * @since 2.0.0
 * @category utils
 */
const ensuringWith = exports.ensuringWith = internal.ensuringWith;
/**
 * Accesses the whole context of the stream.
 *
 * @since 2.0.0
 * @category context
 */
const context = exports.context = internal.context;
/**
 * Accesses the context of the stream.
 *
 * @since 2.0.0
 * @category context
 */
const contextWith = exports.contextWith = internal.contextWith;
/**
 * Accesses the context of the stream in the context of an effect.
 *
 * @since 2.0.0
 * @category context
 */
const contextWithEffect = exports.contextWithEffect = internal.contextWithEffect;
/**
 * Accesses the context of the stream in the context of a stream.
 *
 * @since 2.0.0
 * @category context
 */
const contextWithStream = exports.contextWithStream = internal.contextWithStream;
/**
 * Creates a stream that executes the specified effect but emits no elements.
 *
 * @since 2.0.0
 * @category constructors
 */
const execute = exports.execute = internal.execute;
/**
 * Terminates with the specified error.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.fail("Uh oh!")
 *
 * Effect.runPromiseExit(Stream.runCollect(stream)).then(console.log)
 * // {
 * //   _id: 'Exit',
 * //   _tag: 'Failure',
 * //   cause: { _id: 'Cause', _tag: 'Fail', failure: 'Uh oh!' }
 * // }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const fail = exports.fail = internal.fail;
/**
 * Terminates with the specified lazily evaluated error.
 *
 * @since 2.0.0
 * @category constructors
 */
const failSync = exports.failSync = internal.failSync;
/**
 * The stream that always fails with the specified `Cause`.
 *
 * @since 2.0.0
 * @category constructors
 */
const failCause = exports.failCause = internal.failCause;
/**
 * The stream that always fails with the specified lazily evaluated `Cause`.
 *
 * @since 2.0.0
 * @category constructors
 */
const failCauseSync = exports.failCauseSync = internal.failCauseSync;
/**
 * Filters the elements emitted by this stream using the provided function.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.range(1, 11).pipe(Stream.filter((n) => n % 2 === 0))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 2, 4, 6, 8, 10 ] }
 * ```
 *
 * @since 2.0.0
 * @category filtering
 */
const filter = exports.filter = internal.filter;
/**
 * Effectfully filters the elements emitted by this stream.
 *
 * @since 2.0.0
 * @category filtering
 */
const filterEffect = exports.filterEffect = internal.filterEffect;
/**
 * Performs a filter and map in a single step.
 *
 * @since 2.0.0
 * @category utils
 */
const filterMap = exports.filterMap = internal.filterMap;
/**
 * Performs an effectful filter and map in a single step.
 *
 * @since 2.0.0
 * @category utils
 */
const filterMapEffect = exports.filterMapEffect = internal.filterMapEffect;
/**
 * Transforms all elements of the stream for as long as the specified partial
 * function is defined.
 *
 * @since 2.0.0
 * @category utils
 */
const filterMapWhile = exports.filterMapWhile = internal.filterMapWhile;
/**
 * Effectfully transforms all elements of the stream for as long as the
 * specified partial function is defined.
 *
 * @since 2.0.0
 * @category utils
 */
const filterMapWhileEffect = exports.filterMapWhileEffect = internal.filterMapWhileEffect;
/**
 * Creates a one-element stream that never fails and executes the finalizer
 * when it ends.
 *
 * @example
 * ```ts
 * import { Console, Effect, Stream } from "effect"
 *
 * const application = Stream.fromEffect(Console.log("Application Logic."))
 *
 * const deleteDir = (dir: string) => Console.log(`Deleting dir: ${dir}`)
 *
 * const program = application.pipe(
 *   Stream.concat(
 *     Stream.finalizer(
 *       deleteDir("tmp").pipe(
 *         Effect.andThen(Console.log("Temporary directory was deleted."))
 *       )
 *     )
 *   )
 * )
 *
 * Effect.runPromise(Stream.runCollect(program)).then(console.log)
 * // Application Logic.
 * // Deleting dir: tmp
 * // Temporary directory was deleted.
 * // { _id: 'Chunk', values: [ undefined, undefined ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const finalizer = exports.finalizer = internal.finalizer;
/**
 * Finds the first element emitted by this stream that satisfies the provided
 * predicate.
 *
 * @since 2.0.0
 * @category elements
 */
const find = exports.find = internal.find;
/**
 * Finds the first element emitted by this stream that satisfies the provided
 * effectful predicate.
 *
 * @since 2.0.0
 * @category elements
 */
const findEffect = exports.findEffect = internal.findEffect;
/**
 * Returns a stream made of the concatenation in strict order of all the
 * streams produced by passing each element of this stream to `f0`
 *
 * @since 2.0.0
 * @category sequencing
 */
const flatMap = exports.flatMap = internal.flatMap;
/**
 * Flattens this stream-of-streams into a stream made of the concatenation in
 * strict order of all the streams.
 *
 * @since 2.0.0
 * @category sequencing
 */
const flatten = exports.flatten = internal.flatten;
/**
 * Submerges the chunks carried by this stream into the stream's structure,
 * while still preserving them.
 *
 * @since 2.0.0
 * @category sequencing
 */
const flattenChunks = exports.flattenChunks = internal.flattenChunks;
/**
 * Flattens `Effect` values into the stream's structure, preserving all
 * information about the effect.
 *
 * @since 2.0.0
 * @category sequencing
 */
const flattenEffect = exports.flattenEffect = internal.flattenEffect;
/**
 * Unwraps `Exit` values that also signify end-of-stream by failing with `None`.
 *
 * @since 2.0.0
 * @category sequencing
 */
const flattenExitOption = exports.flattenExitOption = internal.flattenExitOption;
/**
 * Submerges the iterables carried by this stream into the stream's structure,
 * while still preserving them.
 *
 * @since 2.0.0
 * @category sequencing
 */
const flattenIterables = exports.flattenIterables = internal.flattenIterables;
/**
 * Unwraps `Exit` values and flatten chunks that also signify end-of-stream
 * by failing with `None`.
 *
 * @since 2.0.0
 * @category sequencing
 */
const flattenTake = exports.flattenTake = internal.flattenTake;
/**
 * Repeats this stream forever.
 *
 * @since 2.0.0
 * @category utils
 */
const forever = exports.forever = internal.forever;
/**
 * Creates a stream from an `AsyncIterable`.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const myAsyncIterable = async function*() {
 *   yield 1
 *   yield 2
 * }
 *
 * const stream = Stream.fromAsyncIterable(
 *   myAsyncIterable(),
 *   (e) => new Error(String(e)) // Error Handling
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const fromAsyncIterable = exports.fromAsyncIterable = internal.fromAsyncIterable;
/**
 * Creates a stream from a `Channel`.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromChannel = exports.fromChannel = internal.fromChannel;
/**
 * Creates a channel from a `Stream`.
 *
 * @since 2.0.0
 * @category constructors
 */
const toChannel = exports.toChannel = internal.toChannel;
/**
 * Creates a stream from a `Chunk` of values.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Stream } from "effect"
 *
 * // Creating a stream with values from a single Chunk
 * const stream = Stream.fromChunk(Chunk.make(1, 2, 3))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const fromChunk = exports.fromChunk = internal.fromChunk;
/**
 * Creates a stream from a subscription to a `PubSub`.
 *
 * **Options**
 *
 * - `shutdown`: If `true`, the `PubSub` will be shutdown after the stream is evaluated (defaults to `false`)
 *
 * @since 2.0.0
 * @category constructors
 */
const fromChunkPubSub = exports.fromChunkPubSub = internal.fromChunkPubSub;
/**
 * Creates a stream from a `Queue` of values.
 *
 * **Options**
 *
 * - `shutdown`: If `true`, the queue will be shutdown after the stream is evaluated (defaults to `false`)
 *
 * @since 2.0.0
 * @category constructors
 */
const fromChunkQueue = exports.fromChunkQueue = internal.fromChunkQueue;
/**
 * Creates a stream from an arbitrary number of chunks.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Stream } from "effect"
 *
 * // Creating a stream with values from multiple Chunks
 * const stream = Stream.fromChunks(Chunk.make(1, 2, 3), Chunk.make(4, 5, 6))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5, 6 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const fromChunks = exports.fromChunks = internal.fromChunks;
/**
 * Either emits the success value of this effect or terminates the stream
 * with the failure value of this effect.
 *
 * @example
 * ```ts
 * import { Effect, Random, Stream } from "effect"
 *
 * const stream = Stream.fromEffect(Random.nextInt)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // Example Output: { _id: 'Chunk', values: [ 922694024 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const fromEffect = exports.fromEffect = internal.fromEffect;
/**
 * Creates a stream from an effect producing a value of type `A` or an empty
 * `Stream`.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromEffectOption = exports.fromEffectOption = internal.fromEffectOption;
/**
 * Creates a stream from a subscription to a `PubSub`.
 *
 * **Options**
 *
 * - `shutdown`: If `true`, the `PubSub` will be shutdown after the stream is evaluated (defaults to `false`)
 *
 * @since 2.0.0
 * @category constructors
 */
const fromPubSub = exports.fromPubSub = internal.fromPubSub;
/**
 * Creates a stream from a subscription to a `TPubSub`.
 *
 * @since 3.10.0
 * @category constructors
 */
const fromTPubSub = exports.fromTPubSub = internal.fromTPubSub;
/**
 * Creates a new `Stream` from an iterable collection of values.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const numbers = [1, 2, 3]
 *
 * const stream = Stream.fromIterable(numbers)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const fromIterable = exports.fromIterable = internal.fromIterable;
/**
 * Creates a stream from an effect producing a value of type `Iterable<A>`.
 *
 * @example
 * ```ts
 * import { Context, Effect, Stream } from "effect"
 *
 * class Database extends Context.Tag("Database")<
 *   Database,
 *   { readonly getUsers: Effect.Effect<Array<string>> }
 * >() {}
 *
 * const getUsers = Database.pipe(Effect.andThen((_) => _.getUsers))
 *
 * const stream = Stream.fromIterableEffect(getUsers)
 *
 * Effect.runPromise(
 *   Stream.runCollect(stream.pipe(Stream.provideService(Database, { getUsers: Effect.succeed(["user1", "user2"]) })))
 * ).then(console.log)
 * // { _id: 'Chunk', values: [ 'user1', 'user2' ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const fromIterableEffect = exports.fromIterableEffect = internal.fromIterableEffect;
/**
 * Creates a stream from an iterator
 *
 * @since 2.0.0
 * @category constructors
 */
const fromIteratorSucceed = exports.fromIteratorSucceed = internal.fromIteratorSucceed;
/**
 * Creates a stream from an effect that pulls elements from another stream.
 *
 * See `Stream.toPull` for reference.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromPull = exports.fromPull = internal.fromPull;
/**
 * Creates a stream from a queue of values
 *
 * **Options**
 *
 * - `maxChunkSize`: The maximum number of queued elements to put in one chunk in the stream
 * - `shutdown`: If `true`, the queue will be shutdown after the stream is evaluated (defaults to `false`)
 *
 * @since 2.0.0
 * @category constructors
 */
const fromQueue = exports.fromQueue = internal.fromQueue;
/**
 * Creates a stream from a TQueue of values
 *
 * @since 3.10.0
 * @category constructors
 */
const fromTQueue = exports.fromTQueue = internal.fromTQueue;
/**
 * Creates a stream from a `ReadableStream`.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromReadableStream = exports.fromReadableStream = internal.fromReadableStream;
/**
 * Creates a stream from a `ReadableStreamBYOBReader`.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader.
 *
 * @since 2.0.0
 * @category constructors
 */
const fromReadableStreamByob = exports.fromReadableStreamByob = internal.fromReadableStreamByob;
/**
 * Creates a stream from a `Schedule` that does not require any further
 * input. The stream will emit an element for each value output from the
 * schedule, continuing for as long as the schedule continues.
 *
 * @example
 * ```ts
 * import { Effect, Schedule, Stream } from "effect"
 *
 * // Emits values every 1 second for a total of 5 emissions
 * const schedule = Schedule.spaced("1 second").pipe(
 *   Schedule.compose(Schedule.recurs(5))
 * )
 *
 * const stream = Stream.fromSchedule(schedule)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const fromSchedule = exports.fromSchedule = internal.fromSchedule;
/**
 * Creates a pipeline that groups on adjacent keys, calculated by the
 * specified function.
 *
 * @since 2.0.0
 * @category grouping
 */
const groupAdjacentBy = exports.groupAdjacentBy = internal.groupAdjacentBy;
/**
 * More powerful version of `Stream.groupByKey`.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, GroupBy, Stream } from "effect"
 *
 * const groupByKeyResult = Stream.fromIterable([
 *   "Mary",
 *   "James",
 *   "Robert",
 *   "Patricia",
 *   "John",
 *   "Jennifer",
 *   "Rebecca",
 *   "Peter"
 * ]).pipe(
 *   Stream.groupBy((name) => Effect.succeed([name.substring(0, 1), name]))
 * )
 *
 * const stream = GroupBy.evaluate(groupByKeyResult, (key, stream) =>
 *   Stream.fromEffect(
 *     Stream.runCollect(stream).pipe(
 *       Effect.andThen((chunk) => [key, Chunk.size(chunk)] as const)
 *     )
 *   ))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // {
 * //   _id: 'Chunk',
 * //   values: [ [ 'M', 1 ], [ 'J', 3 ], [ 'R', 2 ], [ 'P', 2 ] ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category grouping
 */
const groupBy = exports.groupBy = groupBy_.groupBy;
/**
 * Partition a stream using a function and process each stream individually.
 * This returns a data structure that can be used to further filter down which
 * groups shall be processed.
 *
 * After calling apply on the GroupBy object, the remaining groups will be
 * processed in parallel and the resulting streams merged in a
 * nondeterministic fashion.
 *
 * Up to `buffer` elements may be buffered in any group stream before the
 * producer is backpressured. Take care to consume from all streams in order
 * to prevent deadlocks.
 *
 * For example, to collect the first 2 words for every starting letter from a
 * stream of words:
 *
 * ```ts
 * import { pipe, GroupBy, Stream } from "effect"
 *
 * pipe(
 *   Stream.fromIterable(["hello", "world", "hi", "holla"]),
 *   Stream.groupByKey((word) => word[0]),
 *   GroupBy.evaluate((key, stream) =>
 *     pipe(
 *       stream,
 *       Stream.take(2),
 *       Stream.map((words) => [key, words] as const)
 *     )
 *   )
 * )
 * ```
 *
 * @since 2.0.0
 * @category grouping
 */
const groupByKey = exports.groupByKey = groupBy_.groupByKey;
/**
 * Partitions the stream with specified `chunkSize`.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.range(0, 8).pipe(Stream.grouped(3))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then((chunks) => console.log("%o", chunks))
 * // {
 * //   _id: 'Chunk',
 * //   values: [
 * //     { _id: 'Chunk', values: [ 0, 1, 2, [length]: 3 ] },
 * //     { _id: 'Chunk', values: [ 3, 4, 5, [length]: 3 ] },
 * //     { _id: 'Chunk', values: [ 6, 7, 8, [length]: 3 ] },
 * //     [length]: 3
 * //   ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category grouping
 */
const grouped = exports.grouped = internal.grouped;
/**
 * Partitions the stream with the specified `chunkSize` or until the specified
 * `duration` has passed, whichever is satisfied first.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Schedule, Stream } from "effect"
 *
 * const stream = Stream.range(0, 9).pipe(
 *   Stream.repeat(Schedule.spaced("1 second")),
 *   Stream.groupedWithin(18, "1.5 seconds"),
 *   Stream.take(3)
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then((chunks) => console.log(Chunk.toArray(chunks)))
 * // [
 * //   {
 * //     _id: 'Chunk',
 * //     values: [
 * //       0, 1, 2, 3, 4, 5, 6,
 * //       7, 8, 9, 0, 1, 2, 3,
 * //       4, 5, 6, 7
 * //     ]
 * //   },
 * //   {
 * //     _id: 'Chunk',
 * //     values: [
 * //       8, 9, 0, 1, 2,
 * //       3, 4, 5, 6, 7,
 * //       8, 9
 * //     ]
 * //   },
 * //   {
 * //     _id: 'Chunk',
 * //     values: [
 * //       0, 1, 2, 3, 4, 5, 6,
 * //       7, 8, 9, 0, 1, 2, 3,
 * //       4, 5, 6, 7
 * //     ]
 * //   }
 * // ]
 * ```
 *
 * @since 2.0.0
 * @category grouping
 */
const groupedWithin = exports.groupedWithin = internal.groupedWithin;
/**
 * Specialized version of haltWhen which halts the evaluation of this stream
 * after the given duration.
 *
 * An element in the process of being pulled will not be interrupted when the
 * given duration completes. See `interruptAfter` for this behavior.
 *
 * @since 2.0.0
 * @category utils
 */
const haltAfter = exports.haltAfter = internal.haltAfter;
/**
 * Halts the evaluation of this stream when the provided effect completes. The
 * given effect will be forked as part of the returned stream, and its success
 * will be discarded.
 *
 * An element in the process of being pulled will not be interrupted when the
 * effect completes. See `interruptWhen` for this behavior.
 *
 * If the effect completes with a failure, the stream will emit that failure.
 *
 * @since 2.0.0
 * @category utils
 */
const haltWhen = exports.haltWhen = internal.haltWhen;
/**
 * Halts the evaluation of this stream when the provided promise resolves.
 *
 * If the promise completes with a failure, the stream will emit that failure.
 *
 * @since 2.0.0
 * @category utils
 */
const haltWhenDeferred = exports.haltWhenDeferred = internal.haltWhenDeferred;
/**
 * The identity pipeline, which does not modify streams in any way.
 *
 * @since 2.0.0
 * @category utils
 */
const identity = exports.identity = internal.identityStream;
/**
 * Interleaves this stream and the specified stream deterministically by
 * alternating pulling values from this stream and the specified stream. When
 * one stream is exhausted all remaining values in the other stream will be
 * pulled.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const s1 = Stream.make(1, 2, 3)
 * const s2 = Stream.make(4, 5, 6)
 *
 * const stream = Stream.interleave(s1, s2)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 4, 2, 5, 3, 6 ] }
 * ```
 * @since 2.0.0
 * @category utils
 */
const interleave = exports.interleave = internal.interleave;
/**
 * Combines this stream and the specified stream deterministically using the
 * stream of boolean values `pull` to control which stream to pull from next.
 * A value of `true` indicates to pull from this stream and a value of `false`
 * indicates to pull from the specified stream. Only consumes as many elements
 * as requested by the `pull` stream. If either this stream or the specified
 * stream are exhausted further requests for values from that stream will be
 * ignored.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const s1 = Stream.make(1, 3, 5, 7, 9)
 * const s2 = Stream.make(2, 4, 6, 8, 10)
 *
 * const booleanStream = Stream.make(true, false, false).pipe(Stream.forever)
 *
 * const stream = Stream.interleaveWith(s1, s2, booleanStream)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // {
 * //   _id: 'Chunk',
 * //   values: [
 * //     1, 2,  4, 3, 6,
 * //     8, 5, 10, 7, 9
 * //   ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const interleaveWith = exports.interleaveWith = internal.interleaveWith;
/**
 * Intersperse stream with provided `element`.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3, 4, 5).pipe(Stream.intersperse(0))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // {
 * //   _id: 'Chunk',
 * //   values: [
 * //     1, 0, 2, 0, 3,
 * //     0, 4, 0, 5
 * //   ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const intersperse = exports.intersperse = internal.intersperse;
/**
 * Intersperse the specified element, also adding a prefix and a suffix.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3, 4, 5).pipe(
 *   Stream.intersperseAffixes({
 *     start: "[",
 *     middle: "-",
 *     end: "]"
 *   })
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // {
 * //   _id: 'Chunk',
 * //   values: [
 * //     '[', 1,   '-', 2,   '-',
 * //     3,   '-', 4,   '-', 5,
 * //     ']'
 * //   ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const intersperseAffixes = exports.intersperseAffixes = internal.intersperseAffixes;
/**
 * Specialized version of `Stream.interruptWhen` which interrupts the
 * evaluation of this stream after the given `Duration`.
 *
 * @since 2.0.0
 * @category utils
 */
const interruptAfter = exports.interruptAfter = internal.interruptAfter;
/**
 * Interrupts the evaluation of this stream when the provided effect
 * completes. The given effect will be forked as part of this stream, and its
 * success will be discarded. This combinator will also interrupt any
 * in-progress element being pulled from upstream.
 *
 * If the effect completes with a failure before the stream completes, the
 * returned stream will emit that failure.
 *
 * @since 2.0.0
 * @category utils
 */
const interruptWhen = exports.interruptWhen = internal.interruptWhen;
/**
 * Interrupts the evaluation of this stream when the provided promise
 * resolves. This combinator will also interrupt any in-progress element being
 * pulled from upstream.
 *
 * If the promise completes with a failure, the stream will emit that failure.
 *
 * @since 2.0.0
 * @category utils
 */
const interruptWhenDeferred = exports.interruptWhenDeferred = internal.interruptWhenDeferred;
/**
 * The infinite stream of iterative function application: a, f(a), f(f(a)),
 * f(f(f(a))), ...
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * // An infinite Stream of numbers starting from 1 and incrementing
 * const stream = Stream.iterate(1, (n) => n + 1)
 *
 * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(10)))).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const iterate = exports.iterate = internal.iterate;
/**
 * Creates a stream from an sequence of values.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const make = exports.make = internal.make;
/**
 * Transforms the elements of this stream using the supplied function.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3).pipe(Stream.map((n) => n + 1))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 2, 3, 4 ] }
 * ```
 *
 * @since 2.0.0
 * @category mapping
 */
const map = exports.map = internal.map;
/**
 * Statefully maps over the elements of this stream to produce new elements.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const runningTotal = (stream: Stream.Stream<number>): Stream.Stream<number> =>
 *   stream.pipe(Stream.mapAccum(0, (s, a) => [s + a, s + a]))
 *
 * // input:  0, 1, 2, 3, 4, 5, 6
 * Effect.runPromise(Stream.runCollect(runningTotal(Stream.range(0, 6)))).then(
 *   console.log
 * )
 * // { _id: "Chunk", values: [ 0, 1, 3, 6, 10, 15, 21 ] }
 * ```
 *
 * @since 2.0.0
 * @category mapping
 */
const mapAccum = exports.mapAccum = internal.mapAccum;
/**
 * Statefully and effectfully maps over the elements of this stream to produce
 * new elements.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapAccumEffect = exports.mapAccumEffect = internal.mapAccumEffect;
/**
 * Returns a stream whose failure and success channels have been mapped by the
 * specified `onFailure` and `onSuccess` functions.
 *
 * @since 2.0.0
 * @category utils
 */
const mapBoth = exports.mapBoth = internal.mapBoth;
/**
 * Transforms the chunks emitted by this stream.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapChunks = exports.mapChunks = internal.mapChunks;
/**
 * Effectfully transforms the chunks emitted by this stream.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapChunksEffect = exports.mapChunksEffect = internal.mapChunksEffect;
/**
 * Maps each element to an iterable, and flattens the iterables into the
 * output of this stream.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const numbers = Stream.make("1-2-3", "4-5", "6").pipe(
 *   Stream.mapConcat((s) => s.split("-")),
 *   Stream.map((s) => parseInt(s))
 * )
 *
 * Effect.runPromise(Stream.runCollect(numbers)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5, 6 ] }
 * ```
 *
 * @since 2.0.0
 * @category mapping
 */
const mapConcat = exports.mapConcat = internal.mapConcat;
/**
 * Maps each element to a chunk, and flattens the chunks into the output of
 * this stream.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapConcatChunk = exports.mapConcatChunk = internal.mapConcatChunk;
/**
 * Effectfully maps each element to a chunk, and flattens the chunks into the
 * output of this stream.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapConcatChunkEffect = exports.mapConcatChunkEffect = internal.mapConcatChunkEffect;
/**
 * Effectfully maps each element to an iterable, and flattens the iterables
 * into the output of this stream.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapConcatEffect = exports.mapConcatEffect = internal.mapConcatEffect;
/**
 * Maps over elements of the stream with the specified effectful function.
 *
 * @example
 * ```ts
 * import { Effect, Random, Stream } from "effect"
 *
 * const stream = Stream.make(10, 20, 30).pipe(
 *   Stream.mapEffect((n) => Random.nextIntBetween(0, n))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // Example Output: { _id: 'Chunk', values: [ 7, 19, 8 ] }
 * ```
 *
 * @since 2.0.0
 * @category mapping
 */
const mapEffect = exports.mapEffect = groupBy_.mapEffectOptions;
/**
 * Transforms the errors emitted by this stream using `f`.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapError = exports.mapError = internal.mapError;
/**
 * Transforms the full causes of failures emitted by this stream.
 *
 * @since 2.0.0
 * @category mapping
 */
const mapErrorCause = exports.mapErrorCause = internal.mapErrorCause;
/**
 * Merges this stream and the specified stream together.
 *
 * New produced stream will terminate when both specified stream terminate if
 * no termination strategy is specified.
 *
 * @example
 * ```ts
 * import { Effect, Schedule, Stream } from "effect"
 *
 * const s1 = Stream.make(1, 2, 3).pipe(
 *   Stream.schedule(Schedule.spaced("100 millis"))
 * )
 * const s2 = Stream.make(4, 5, 6).pipe(
 *   Stream.schedule(Schedule.spaced("200 millis"))
 * )
 *
 * const stream = Stream.merge(s1, s2)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 4, 2, 3, 5, 6 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const merge = exports.merge = internal.merge;
/**
 * Merges a variable list of streams in a non-deterministic fashion. Up to `n`
 * streams may be consumed in parallel and up to `outputBuffer` chunks may be
 * buffered by this operator.
 *
 * @since 2.0.0
 * @category utils
 */
const mergeAll = exports.mergeAll = internal.mergeAll;
/**
 * Merges a struct of streams into a single stream of tagged values.
 * @category combinators
 * @since 3.8.5
 *
 * @example
 * ```ts
 * import { Stream } from "effect"
 * // Stream.Stream<{ _tag: "a"; value: number; } | { _tag: "b"; value: string; }>
 * const res = Stream.mergeWithTag({
 *    a: Stream.make(0),
 *    b: Stream.make("")
 * }, { concurrency: "unbounded" })
 * ```
 */
const mergeWithTag = exports.mergeWithTag = internal.mergeWithTag;
/**
 * Merges this stream and the specified stream together to a common element
 * type with the specified mapping functions.
 *
 * New produced stream will terminate when both specified stream terminate if
 * no termination strategy is specified.
 *
 * @example
 * ```ts
 * import { Effect, Schedule, Stream } from "effect"
 *
 * const s1 = Stream.make("1", "2", "3").pipe(
 *   Stream.schedule(Schedule.spaced("100 millis"))
 * )
 * const s2 = Stream.make(4.1, 5.3, 6.2).pipe(
 *   Stream.schedule(Schedule.spaced("200 millis"))
 * )
 *
 * const stream = Stream.mergeWith(s1, s2, {
 *   onSelf: (s) => parseInt(s),
 *   onOther: (n) => Math.floor(n)
 * })
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 4, 2, 3, 5, 6 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const mergeWith = exports.mergeWith = internal.mergeWith;
/**
 * Merges this stream and the specified stream together to produce a stream of
 * eithers.
 *
 * @since 2.0.0
 * @category utils
 */
const mergeEither = exports.mergeEither = internal.mergeEither;
/**
 * Merges this stream and the specified stream together, discarding the values
 * from the right stream.
 *
 * @since 2.0.0
 * @category utils
 */
const mergeLeft = exports.mergeLeft = internal.mergeLeft;
/**
 * Merges this stream and the specified stream together, discarding the values
 * from the left stream.
 *
 * @since 2.0.0
 * @category utils
 */
const mergeRight = exports.mergeRight = internal.mergeRight;
/**
 * Returns a combined string resulting from concatenating each of the values
 * from the stream.
 *
 * @since 2.0.0
 * @category utils
 */
const mkString = exports.mkString = internal.mkString;
/**
 * The stream that never produces any value or fails with any error.
 *
 * @since 2.0.0
 * @category constructors
 */
const never = exports.never = internal.never;
/**
 * Adds an effect to be executed at the end of the stream.
 *
 * @example
 * ```ts
 * import { Console, Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3).pipe(
 *   Stream.map((n) => n * 2),
 *   Stream.tap((n) => Console.log(`after mapping: ${n}`)),
 *   Stream.onEnd(Console.log("Stream ended"))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // after mapping: 2
 * // after mapping: 4
 * // after mapping: 6
 * // Stream ended
 * // { _id: 'Chunk', values: [ 2, 4, 6 ] }
 * ```
 *
 * @since 3.6.0
 * @category sequencing
 */
const onEnd = exports.onEnd = internal.onEnd;
/**
 * Runs the specified effect if this stream fails, providing the error to the
 * effect if it exists.
 *
 * Note: Unlike `Effect.onError` there is no guarantee that the provided
 * effect will not be interrupted.
 *
 * @since 2.0.0
 * @category utils
 */
const onError = exports.onError = internal.onError;
/**
 * Runs the specified effect if this stream ends.
 *
 * @since 2.0.0
 * @category utils
 */
const onDone = exports.onDone = internal.onDone;
/**
 * Adds an effect to be executed at the start of the stream.
 *
 * @example
 * ```ts
 * import { Console, Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3).pipe(
 *   Stream.onStart(Console.log("Stream started")),
 *   Stream.map((n) => n * 2),
 *   Stream.tap((n) => Console.log(`after mapping: ${n}`))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // Stream started
 * // after mapping: 2
 * // after mapping: 4
 * // after mapping: 6
 * // { _id: 'Chunk', values: [ 2, 4, 6 ] }
 * ```
 *
 * @since 3.6.0
 * @category sequencing
 */
const onStart = exports.onStart = internal.onStart;
/**
 * Translates any failure into a stream termination, making the stream
 * infallible and all failures unchecked.
 *
 * @since 2.0.0
 * @category error handling
 */
const orDie = exports.orDie = internal.orDie;
/**
 * Keeps none of the errors, and terminates the stream with them, using the
 * specified function to convert the `E` into a defect.
 *
 * @since 2.0.0
 * @category error handling
 */
const orDieWith = exports.orDieWith = internal.orDieWith;
/**
 * Switches to the provided stream in case this one fails with a typed error.
 *
 * See also `Stream.catchAll`.
 *
 * @since 2.0.0
 * @category error handling
 */
const orElse = exports.orElse = internal.orElse;
/**
 * Switches to the provided stream in case this one fails with a typed error.
 *
 * See also `Stream.catchAll`.
 *
 * @since 2.0.0
 * @category error handling
 */
const orElseEither = exports.orElseEither = internal.orElseEither;
/**
 * Fails with given error in case this one fails with a typed error.
 *
 * See also `Stream.catchAll`.
 *
 * @since 2.0.0
 * @category error handling
 */
const orElseFail = exports.orElseFail = internal.orElseFail;
/**
 * Produces the specified element if this stream is empty.
 *
 * @since 2.0.0
 * @category error handling
 */
const orElseIfEmpty = exports.orElseIfEmpty = internal.orElseIfEmpty;
/**
 * Produces the specified chunk if this stream is empty.
 *
 * @since 2.0.0
 * @category error handling
 */
const orElseIfEmptyChunk = exports.orElseIfEmptyChunk = internal.orElseIfEmptyChunk;
/**
 * Switches to the provided stream in case this one is empty.
 *
 * @since 2.0.0
 * @category error handling
 */
const orElseIfEmptyStream = exports.orElseIfEmptyStream = internal.orElseIfEmptyStream;
/**
 * Succeeds with the specified value if this one fails with a typed error.
 *
 * @since 2.0.0
 * @category error handling
 */
const orElseSucceed = exports.orElseSucceed = internal.orElseSucceed;
/**
 * Like `Stream.unfold`, but allows the emission of values to end one step further
 * than the unfolding of the state. This is useful for embedding paginated
 * APIs, hence the name.
 *
 * @example
 * ```ts
 * import { Effect, Option, Stream } from "effect"
 *
 * const stream = Stream.paginate(0, (n) => [
 *   n,
 *   n < 3 ? Option.some(n + 1) : Option.none()
 * ])
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 0, 1, 2, 3 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const paginate = exports.paginate = internal.paginate;
/**
 * Like `Stream.unfoldChunk`, but allows the emission of values to end one step
 * further than the unfolding of the state. This is useful for embedding
 * paginated APIs, hence the name.
 *
 * @since 2.0.0
 * @category constructors
 */
const paginateChunk = exports.paginateChunk = internal.paginateChunk;
/**
 * Like `Stream.unfoldChunkEffect`, but allows the emission of values to end one step
 * further than the unfolding of the state. This is useful for embedding
 * paginated APIs, hence the name.
 *
 * @since 2.0.0
 * @category constructors
 */
const paginateChunkEffect = exports.paginateChunkEffect = internal.paginateChunkEffect;
/**
 * Like `Stream.unfoldEffect` but allows the emission of values to end one step
 * further than the unfolding of the state. This is useful for embedding
 * paginated APIs, hence the name.
 *
 * @since 2.0.0
 * @category constructors
 */
const paginateEffect = exports.paginateEffect = internal.paginateEffect;
/**
 * Splits a stream into two substreams based on a predicate.
 *
 * **Details**
 *
 * The `Stream.partition` function splits a stream into two parts: one for
 * elements that satisfy the predicate (evaluated to `true`) and another for
 * those that do not (evaluated to `false`).
 *
 * The faster stream may advance up to `bufferSize` elements ahead of the slower
 * one.
 *
 * **Example** (Partitioning a Stream into Even and Odd Numbers)
 *
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const partition = Stream.range(1, 9).pipe(
 *   Stream.partition((n) => n % 2 === 0, { bufferSize: 5 })
 * )
 *
 * const program = Effect.scoped(
 *   Effect.gen(function*() {
 *     const [odds, evens] = yield* partition
 *     console.log(yield* Stream.runCollect(odds))
 *     console.log(yield* Stream.runCollect(evens))
 *   })
 * )
 *
 * Effect.runPromise(program)
 * // { _id: 'Chunk', values: [ 1, 3, 5, 7, 9 ] }
 * // { _id: 'Chunk', values: [ 2, 4, 6, 8 ] }
 * ```
 *
 * @see {@link partitionEither} for partitioning a stream based on effectful
 * conditions.
 *
 * @since 2.0.0
 * @category utils
 */
const partition = exports.partition = internal.partition;
/**
 * Splits a stream into two substreams based on an effectful condition.
 *
 * **Details**
 *
 * The `Stream.partitionEither` function is used to divide a stream into two
 * parts: one for elements that satisfy a condition producing `Either.left`
 * values, and another for those that produce `Either.right` values. This
 * function applies an effectful predicate to each element in the stream to
 * determine which substream it belongs to.
 *
 * The faster stream may advance up to `bufferSize` elements ahead of the slower
 * one.
 *
 * **Example** (Partitioning a Stream with an Effectful Predicate)
 *
 * ```ts
 * import { Effect, Either, Stream } from "effect"
 *
 * const partition = Stream.range(1, 9).pipe(
 *   Stream.partitionEither(
 *     (n) => Effect.succeed(n % 2 === 0 ? Either.right(n) : Either.left(n)),
 *     { bufferSize: 5 }
 *   )
 * )
 *
 * const program = Effect.scoped(
 *   Effect.gen(function*() {
 *     const [evens, odds] = yield* partition
 *     console.log(yield* Stream.runCollect(evens))
 *     console.log(yield* Stream.runCollect(odds))
 *   })
 * )
 *
 * Effect.runPromise(program)
 * // { _id: 'Chunk', values: [ 1, 3, 5, 7, 9 ] }
 * // { _id: 'Chunk', values: [ 2, 4, 6, 8 ] }
 * ```
 *
 * @see {@link partition} for partitioning a stream based on simple conditions.
 *
 * @since 2.0.0
 * @category utils
 */
const partitionEither = exports.partitionEither = internal.partitionEither;
/**
 * Peels off enough material from the stream to construct a `Z` using the
 * provided `Sink` and then returns both the `Z` and the rest of the
 * `Stream` in a scope. Like all scoped values, the provided stream is
 * valid only within the scope.
 *
 * @since 2.0.0
 * @category utils
 */
const peel = exports.peel = internal.peel;
/**
 * Pipes all of the values from this stream through the provided sink.
 *
 * See also `Stream.transduce`.
 *
 * @since 2.0.0
 * @category utils
 */
const pipeThrough = exports.pipeThrough = internal.pipeThrough;
/**
 * Pipes all the values from this stream through the provided channel.
 *
 * @since 2.0.0
 * @category utils
 */
const pipeThroughChannel = exports.pipeThroughChannel = internal.pipeThroughChannel;
/**
 * Pipes all values from this stream through the provided channel, passing
 * through any error emitted by this stream unchanged.
 *
 * @since 2.0.0
 * @category utils
 */
const pipeThroughChannelOrFail = exports.pipeThroughChannelOrFail = internal.pipeThroughChannelOrFail;
/**
 * Emits the provided chunk before emitting any other value.
 *
 * @since 2.0.0
 * @category utils
 */
const prepend = exports.prepend = internal.prepend;
/**
 * Provides the stream with its required context, which eliminates its
 * dependency on `R`.
 *
 * @since 2.0.0
 * @category context
 */
const provideContext = exports.provideContext = internal.provideContext;
/**
 * Provides the stream with some of its required context, which eliminates its
 * dependency on `R`.
 *
 * @since 3.16.9
 * @category context
 */
const provideSomeContext = exports.provideSomeContext = internal.provideSomeContext;
/**
 * Provides a `Layer` to the stream, which translates it to another level.
 *
 * @since 2.0.0
 * @category context
 */
const provideLayer = exports.provideLayer = internal.provideLayer;
/**
 * Provides the stream with the single service it requires. If the stream
 * requires more than one service use `Stream.provideContext` instead.
 *
 * @since 2.0.0
 * @category context
 */
const provideService = exports.provideService = internal.provideService;
/**
 * Provides the stream with the single service it requires. If the stream
 * requires more than one service use `Stream.provideContext` instead.
 *
 * @since 2.0.0
 * @category context
 */
const provideServiceEffect = exports.provideServiceEffect = internal.provideServiceEffect;
/**
 * Provides the stream with the single service it requires. If the stream
 * requires more than one service use `Stream.provideContext` instead.
 *
 * @since 2.0.0
 * @category context
 */
const provideServiceStream = exports.provideServiceStream = internal.provideServiceStream;
/**
 * Transforms the context being provided to the stream with the specified
 * function.
 *
 * @since 2.0.0
 * @category context
 */
const mapInputContext = exports.mapInputContext = internal.mapInputContext;
/**
 * Splits the context into two parts, providing one part using the
 * specified layer and leaving the remainder `R0`.
 *
 * @since 2.0.0
 * @category context
 */
const provideSomeLayer = exports.provideSomeLayer = internal.provideSomeLayer;
/**
 * Returns a stream that mirrors the first upstream to emit an item.
 * As soon as one of the upstream emits a first value, the other is interrupted.
 * The resulting stream will forward all items from the "winning" source stream.
 * Any upstream failures will cause the returned stream to fail.
 *
 * @example
 * ```ts
 * import { Stream, Schedule, Console, Effect } from "effect"
 *
 * const stream = Stream.fromSchedule(Schedule.spaced('2 millis')).pipe(
 *   Stream.race(Stream.fromSchedule(Schedule.spaced('1 millis'))),
 *   Stream.take(6),
 *   Stream.tap(Console.log)
 * )
 *
 * Effect.runPromise(Stream.runDrain(stream))
 * // Output each millisecond from the first stream, the rest streams are interrupted
 * // 0
 * // 1
 * // 2
 * // 3
 * // 4
 * // 5
 * ```
 * @since 3.7.0
 * @category racing
 */
const race = exports.race = internal.race;
/**
 * Returns a stream that mirrors the first upstream to emit an item.
 * As soon as one of the upstream emits a first value, all the others are interrupted.
 * The resulting stream will forward all items from the "winning" source stream.
 * Any upstream failures will cause the returned stream to fail.
 *
 * @example
 * ```ts
 * import { Stream, Schedule, Console, Effect } from "effect"
 *
 * const stream = Stream.raceAll(
 *   Stream.fromSchedule(Schedule.spaced('1 millis')),
 *   Stream.fromSchedule(Schedule.spaced('2 millis')),
 *   Stream.fromSchedule(Schedule.spaced('4 millis')),
 * ).pipe(Stream.take(6), Stream.tap(Console.log))
 *
 * Effect.runPromise(Stream.runDrain(stream))
 * // Output each millisecond from the first stream, the rest streams are interrupted
 * // 0
 * // 1
 * // 2
 * // 3
 * // 4
 * // 5
 * ```
 * @since 3.5.0
 * @category racing
 */
const raceAll = exports.raceAll = internal.raceAll;
/**
 * Constructs a stream from a range of integers, including both endpoints.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * // A Stream with a range of numbers from 1 to 5
 * const stream = Stream.range(1, 5)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const range = exports.range = internal.range;
/**
 * Re-chunks the elements of the stream into chunks of `n` elements each. The
 * last chunk might contain less than `n` elements.
 *
 * @since 2.0.0
 * @category utils
 */
const rechunk = exports.rechunk = internal.rechunk;
/**
 * Keeps some of the errors, and terminates the fiber with the rest
 *
 * @since 2.0.0
 * @category error handling
 */
const refineOrDie = exports.refineOrDie = internal.refineOrDie;
/**
 * Keeps some of the errors, and terminates the fiber with the rest, using the
 * specified function to convert the `E` into a defect.
 *
 * @since 2.0.0
 * @category error handling
 */
const refineOrDieWith = exports.refineOrDieWith = internal.refineOrDieWith;
/**
 * Repeats the entire stream using the specified schedule. The stream will
 * execute normally, and then repeat again according to the provided schedule.
 *
 * @example
 * ```ts
 * import { Effect, Schedule, Stream } from "effect"
 *
 * const stream = Stream.repeat(Stream.succeed(1), Schedule.forever)
 *
 * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(5)))).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 1, 1, 1, 1 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const repeat = exports.repeat = internal.repeat;
/**
 * Creates a stream from an effect producing a value of type `A` which repeats
 * forever.
 *
 * @example
 * ```ts
 * import { Effect, Random, Stream } from "effect"
 *
 * const stream = Stream.repeatEffect(Random.nextInt)
 *
 * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(5)))).then(console.log)
 * // Example Output: { _id: 'Chunk', values: [ 3891571149, 4239494205, 2352981603, 2339111046, 1488052210 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const repeatEffect = exports.repeatEffect = internal.repeatEffect;
/**
 * Creates a stream from an effect producing chunks of `A` values which
 * repeats forever.
 *
 * @since 2.0.0
 * @category constructors
 */
const repeatEffectChunk = exports.repeatEffectChunk = internal.repeatEffectChunk;
/**
 * Creates a stream from an effect producing chunks of `A` values until it
 * fails with `None`.
 *
 * @since 2.0.0
 * @category constructors
 */
const repeatEffectChunkOption = exports.repeatEffectChunkOption = internal.repeatEffectChunkOption;
/**
 * Creates a stream from an effect producing values of type `A` until it fails
 * with `None`.
 *
 * @example
 * ```ts
 * // In this example, we're draining an Iterator to create a stream from it
 * import { Stream, Effect, Option } from "effect"
 *
 * const drainIterator = <A>(it: Iterator<A>): Stream.Stream<A> =>
 *   Stream.repeatEffectOption(
 *     Effect.sync(() => it.next()).pipe(
 *       Effect.andThen((res) => {
 *         if (res.done) {
 *           return Effect.fail(Option.none())
 *         }
 *         return Effect.succeed(res.value)
 *       })
 *     )
 *   )
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const repeatEffectOption = exports.repeatEffectOption = internal.repeatEffectOption;
/**
 * Creates a stream from an effect producing a value of type `A`, which is
 * repeated using the specified schedule.
 *
 * @since 2.0.0
 * @category constructors
 */
const repeatEffectWithSchedule = exports.repeatEffectWithSchedule = internal.repeatEffectWithSchedule;
/**
 * Repeats the entire stream using the specified schedule. The stream will
 * execute normally, and then repeat again according to the provided schedule.
 * The schedule output will be emitted at the end of each repetition.
 *
 * @since 2.0.0
 * @category utils
 */
const repeatEither = exports.repeatEither = internal.repeatEither;
/**
 * Repeats each element of the stream using the provided schedule. Repetitions
 * are done in addition to the first execution, which means using
 * `Schedule.recurs(1)` actually results in the original effect, plus an
 * additional recurrence, for a total of two repetitions of each value in the
 * stream.
 *
 * @since 2.0.0
 * @category utils
 */
const repeatElements = exports.repeatElements = internal.repeatElements;
/**
 * Repeats each element of the stream using the provided schedule. When the
 * schedule is finished, then the output of the schedule will be emitted into
 * the stream. Repetitions are done in addition to the first execution, which
 * means using `Schedule.recurs(1)` actually results in the original effect,
 * plus an additional recurrence, for a total of two repetitions of each value
 * in the stream.
 *
 * This function accepts two conversion functions, which allow the output of
 * this stream and the output of the provided schedule to be unified into a
 * single type. For example, `Either` or similar data type.
 *
 * @since 2.0.0
 * @category utils
 */
const repeatElementsWith = exports.repeatElementsWith = internal.repeatElementsWith;
/**
 * Repeats the provided value infinitely.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.repeatValue(0)
 *
 * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(5)))).then(console.log)
 * // { _id: 'Chunk', values: [ 0, 0, 0, 0, 0 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const repeatValue = exports.repeatValue = internal.repeatValue;
/**
 * Repeats the entire stream using the specified schedule. The stream will
 * execute normally, and then repeat again according to the provided schedule.
 * The schedule output will be emitted at the end of each repetition and can
 * be unified with the stream elements using the provided functions.
 *
 * @since 2.0.0
 * @category utils
 */
const repeatWith = exports.repeatWith = internal.repeatWith;
/**
 * When the stream fails, retry it according to the given schedule
 *
 * This retries the entire stream, so will re-execute all of the stream's
 * acquire operations.
 *
 * The schedule is reset as soon as the first element passes through the
 * stream again.
 *
 * @since 2.0.0
 * @category utils
 */
const retry = exports.retry = internal.retry;
/**
 * Apply an `ExecutionPlan` to the stream, which allows you to fallback to
 * different resources in case of failure.
 *
 * If you have a stream that could fail with partial results, you can use
 * the `preventFallbackOnPartialStream` option to prevent contamination of
 * the final stream with partial results.
 *
 * @since 3.16.0
 * @category Error handling
 * @experimental
 */
const withExecutionPlan = exports.withExecutionPlan = internal.withExecutionPlan;
/**
 * Runs the sink on the stream to produce either the sink's result or an error.
 *
 * @since 2.0.0
 * @category destructors
 */
const run = exports.run = internal.run;
/**
 * Runs the stream and collects all of its elements to a chunk.
 *
 * @since 2.0.0
 * @category destructors
 */
const runCollect = exports.runCollect = internal.runCollect;
/**
 * Runs the stream and emits the number of elements processed
 *
 * @since 2.0.0
 * @category destructors
 */
const runCount = exports.runCount = internal.runCount;
/**
 * Runs the stream only for its effects. The emitted elements are discarded.
 *
 * @since 2.0.0
 * @category destructors
 */
const runDrain = exports.runDrain = internal.runDrain;
/**
 * Executes a pure fold over the stream of values - reduces all elements in
 * the stream to a value of type `S`.
 *
 * @since 2.0.0
 * @category destructors
 */
const runFold = exports.runFold = internal.runFold;
/**
 * Executes an effectful fold over the stream of values.
 *
 * @since 2.0.0
 * @category destructors
 */
const runFoldEffect = exports.runFoldEffect = internal.runFoldEffect;
/**
 * Executes a pure fold over the stream of values. Returns a scoped value that
 * represents the scope of the stream.
 *
 * @since 2.0.0
 * @category destructors
 */
const runFoldScoped = exports.runFoldScoped = internal.runFoldScoped;
/**
 * Executes an effectful fold over the stream of values. Returns a scoped
 * value that represents the scope of the stream.
 *
 * @since 2.0.0
 * @category destructors
 */
const runFoldScopedEffect = exports.runFoldScopedEffect = internal.runFoldScopedEffect;
/**
 * Reduces the elements in the stream to a value of type `S`. Stops the fold
 * early when the condition is not fulfilled. Example:
 *
 * @since 2.0.0
 * @category destructors
 */
const runFoldWhile = exports.runFoldWhile = internal.runFoldWhile;
/**
 * Executes an effectful fold over the stream of values. Stops the fold early
 * when the condition is not fulfilled.
 *
 * @since 2.0.0
 * @category destructors
 */
const runFoldWhileEffect = exports.runFoldWhileEffect = internal.runFoldWhileEffect;
/**
 * Executes a pure fold over the stream of values. Returns a scoped value that
 * represents the scope of the stream. Stops the fold early when the condition
 * is not fulfilled.
 *
 * @since 2.0.0
 * @category destructors
 */
const runFoldWhileScoped = exports.runFoldWhileScoped = internal.runFoldWhileScoped;
/**
 * Executes an effectful fold over the stream of values. Returns a scoped
 * value that represents the scope of the stream. Stops the fold early when
 * the condition is not fulfilled.
 *
 * @since 2.0.0
 * @category destructors
 */
const runFoldWhileScopedEffect = exports.runFoldWhileScopedEffect = internal.runFoldWhileScopedEffect;
/**
 * Consumes all elements of the stream, passing them to the specified
 * callback.
 *
 * @since 2.0.0
 * @category destructors
 */
const runForEach = exports.runForEach = internal.runForEach;
/**
 * Consumes all elements of the stream, passing them to the specified
 * callback.
 *
 * @since 2.0.0
 * @category destructors
 */
const runForEachChunk = exports.runForEachChunk = internal.runForEachChunk;
/**
 * Like `Stream.runForEachChunk`, but returns a scoped effect so the
 * finalization order can be controlled.
 *
 * @since 2.0.0
 * @category destructors
 */
const runForEachChunkScoped = exports.runForEachChunkScoped = internal.runForEachChunkScoped;
/**
 * Like `Stream.forEach`, but returns a scoped effect so the finalization
 * order can be controlled.
 *
 * @since 2.0.0
 * @category destructors
 */
const runForEachScoped = exports.runForEachScoped = internal.runForEachScoped;
/**
 * Consumes elements of the stream, passing them to the specified callback,
 * and terminating consumption when the callback returns `false`.
 *
 * @since 2.0.0
 * @category destructors
 */
const runForEachWhile = exports.runForEachWhile = internal.runForEachWhile;
/**
 * Like `Stream.runForEachWhile`, but returns a scoped effect so the
 * finalization order can be controlled.
 *
 * @since 2.0.0
 * @category destructors
 */
const runForEachWhileScoped = exports.runForEachWhileScoped = internal.runForEachWhileScoped;
/**
 * Runs the stream to completion and yields the first value emitted by it,
 * discarding the rest of the elements.
 *
 * @since 2.0.0
 * @category destructors
 */
const runHead = exports.runHead = internal.runHead;
/**
 * Publishes elements of this stream to a `PubSub`. Stream failure and ending will
 * also be signalled.
 *
 * @since 2.0.0
 * @category destructors
 */
const runIntoPubSub = exports.runIntoPubSub = internal.runIntoPubSub;
/**
 * Like `Stream.runIntoPubSub`, but provides the result as a scoped effect to
 * allow for scope composition.
 *
 * @since 2.0.0
 * @category destructors
 */
const runIntoPubSubScoped = exports.runIntoPubSubScoped = internal.runIntoPubSubScoped;
/**
 * Enqueues elements of this stream into a queue. Stream failure and ending
 * will also be signalled.
 *
 * @since 2.0.0
 * @category destructors
 */
const runIntoQueue = exports.runIntoQueue = internal.runIntoQueue;
/**
 * Like `Stream.runIntoQueue`, but provides the result as a scoped Effect
 * to allow for scope composition.
 *
 * @since 2.0.0
 * @category destructors
 */
const runIntoQueueElementsScoped = exports.runIntoQueueElementsScoped = internal.runIntoQueueElementsScoped;
/**
 * Like `Stream.runIntoQueue`, but provides the result as a scoped effect
 * to allow for scope composition.
 *
 * @since 2.0.0
 * @category destructors
 */
const runIntoQueueScoped = exports.runIntoQueueScoped = internal.runIntoQueueScoped;
/**
 * Runs the stream to completion and yields the last value emitted by it,
 * discarding the rest of the elements.
 *
 * @since 2.0.0
 * @category destructors
 */
const runLast = exports.runLast = internal.runLast;
/**
 * @since 2.0.0
 * @category destructors
 */
const runScoped = exports.runScoped = internal.runScoped;
/**
 * Runs the stream to a sink which sums elements, provided they are Numeric.
 *
 * @since 2.0.0
 * @category destructors
 */
const runSum = exports.runSum = internal.runSum;
/**
 * Statefully maps over the elements of this stream to produce all
 * intermediate results of type `S` given an initial S.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.range(1, 6).pipe(Stream.scan(0, (a, b) => a + b))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 0,  1,  3, 6, 10, 15, 21 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const scan = exports.scan = internal.scan;
/**
 * Statefully and effectfully maps over the elements of this stream to produce
 * all intermediate results of type `S` given an initial S.
 *
 * @since 2.0.0
 * @category utils
 */
const scanEffect = exports.scanEffect = internal.scanEffect;
/**
 * Statefully maps over the elements of this stream to produce all
 * intermediate results.
 *
 * See also `Stream.scan`.
 *
 * @since 2.0.0
 * @category utils
 */
const scanReduce = exports.scanReduce = internal.scanReduce;
/**
 * Statefully and effectfully maps over the elements of this stream to produce
 * all intermediate results.
 *
 * See also `Stream.scanEffect`.
 *
 * @since 2.0.0
 * @category utils
 */
const scanReduceEffect = exports.scanReduceEffect = internal.scanReduceEffect;
/**
 * Schedules the output of the stream using the provided `schedule`.
 *
 * @since 2.0.0
 * @category utils
 */
const schedule = exports.schedule = internal.schedule;
/**
 * Schedules the output of the stream using the provided `schedule` and emits
 * its output at the end (if `schedule` is finite). Uses the provided function
 * to align the stream and schedule outputs on the same type.
 *
 * @since 2.0.0
 * @category utils
 */
const scheduleWith = exports.scheduleWith = internal.scheduleWith;
/**
 * Creates a single-valued stream from a scoped resource.
 *
 * @example
 * ```ts
 * import { Console, Effect, Stream } from "effect"
 *
 * // Creating a single-valued stream from a scoped resource
 * const stream = Stream.scoped(
 *  Effect.acquireRelease(
 *    Console.log("acquire"),
 *    () => Console.log("release")
 *  )
 * ).pipe(
 *  Stream.flatMap(() => Console.log("use"))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // acquire
 * // use
 * // release
 * // { _id: 'Chunk', values: [ undefined ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const scoped = exports.scoped = internal.scoped;
/**
 * Use a function that receives a scope and returns an effect to emit an output
 * element. The output element will be the result of the returned effect, if
 * successful.
 *
 * @since 3.11.0
 * @category constructors
 */
const scopedWith = exports.scopedWith = internal.scopedWith;
/**
 * Emits a sliding window of `n` elements.
 *
 * ```ts
 * import { pipe, Stream } from "effect"
 *
 * pipe(
 *   Stream.make(1, 2, 3, 4),
 *   Stream.sliding(2),
 *   Stream.runCollect
 * )
 * // => Chunk(Chunk(1, 2), Chunk(2, 3), Chunk(3, 4))
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const sliding = exports.sliding = internal.sliding;
/**
 * Like `sliding`, but with a configurable `stepSize` parameter.
 *
 * @since 2.0.0
 * @category utils
 */
const slidingSize = exports.slidingSize = internal.slidingSize;
/**
 * Converts an option on values into an option on errors.
 *
 * @since 2.0.0
 * @category utils
 */
const some = exports.some = internal.some;
/**
 * Extracts the optional value, or returns the given 'default'.
 *
 * @since 2.0.0
 * @category utils
 */
const someOrElse = exports.someOrElse = internal.someOrElse;
/**
 * Extracts the optional value, or fails with the given error 'e'.
 *
 * @since 2.0.0
 * @category utils
 */
const someOrFail = exports.someOrFail = internal.someOrFail;
/**
 * Splits elements based on a predicate or refinement.
 *
 * ```ts
 * import { pipe, Stream } from "effect"
 *
 * pipe(
 *   Stream.range(1, 10),
 *   Stream.split((n) => n % 4 === 0),
 *   Stream.runCollect
 * )
 * // => Chunk(Chunk(1, 2, 3), Chunk(5, 6, 7), Chunk(9))
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const split = exports.split = internal.split;
/**
 * Splits elements on a delimiter and transforms the splits into desired output.
 *
 * @since 2.0.0
 * @category utils
 */
const splitOnChunk = exports.splitOnChunk = internal.splitOnChunk;
/**
 * Splits strings on newlines. Handles both Windows newlines (`\r\n`) and UNIX
 * newlines (`\n`).
 *
 * @since 2.0.0
 * @category combinators
 */
const splitLines = exports.splitLines = internal.splitLines;
/**
 * Creates a single-valued pure stream.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * // A Stream with a single number
 * const stream = Stream.succeed(3)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 3 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const succeed = exports.succeed = internal.succeed;
/**
 * Creates a single-valued pure stream.
 *
 * @since 2.0.0
 * @category constructors
 */
const sync = exports.sync = internal.sync;
/**
 * Returns a lazily constructed stream.
 *
 * @since 2.0.0
 * @category constructors
 */
const suspend = exports.suspend = internal.suspend;
/**
 * Takes the specified number of elements from this stream.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.take(Stream.iterate(0, (n) => n + 1), 5)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const take = exports.take = internal.take;
/**
 * Takes the last specified number of elements from this stream.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.takeRight(Stream.make(1, 2, 3, 4, 5, 6), 3)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 4, 5, 6 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const takeRight = exports.takeRight = internal.takeRight;
/**
 * Takes all elements of the stream until the specified predicate evaluates to
 * `true`.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.takeUntil(Stream.iterate(0, (n) => n + 1), (n) => n === 4)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const takeUntil = exports.takeUntil = internal.takeUntil;
/**
 * Takes all elements of the stream until the specified effectual predicate
 * evaluates to `true`.
 *
 * @since 2.0.0
 * @category utils
 */
const takeUntilEffect = exports.takeUntilEffect = internal.takeUntilEffect;
/**
 * Takes all elements of the stream for as long as the specified predicate
 * evaluates to `true`.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.takeWhile(Stream.iterate(0, (n) => n + 1), (n) => n < 5)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const takeWhile = exports.takeWhile = internal.takeWhile;
/**
 * Adds an effect to consumption of every element of the stream.
 *
 * @example
 * ```ts
 * import { Console, Effect, Stream } from "effect"
 *
 * const stream = Stream.make(1, 2, 3).pipe(
 *   Stream.tap((n) => Console.log(`before mapping: ${n}`)),
 *   Stream.map((n) => n * 2),
 *   Stream.tap((n) => Console.log(`after mapping: ${n}`))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // before mapping: 1
 * // after mapping: 2
 * // before mapping: 2
 * // after mapping: 4
 * // before mapping: 3
 * // after mapping: 6
 * // { _id: 'Chunk', values: [ 2, 4, 6 ] }
 * ```
 *
 * @since 2.0.0
 * @category sequencing
 */
const tap = exports.tap = internal.tap;
/**
 * Returns a stream that effectfully "peeks" at the failure or success of
 * the stream.
 *
 * @since 2.0.0
 * @category sequencing
 */
const tapBoth = exports.tapBoth = internal.tapBoth;
/**
 * Returns a stream that effectfully "peeks" at the failure of the stream.
 *
 * @since 2.0.0
 * @category sequencing
 */
const tapError = exports.tapError = internal.tapError;
/**
 * Returns a stream that effectfully "peeks" at the cause of failure of the
 * stream.
 *
 * @since 2.0.0
 * @category utils
 */
const tapErrorCause = exports.tapErrorCause = internal.tapErrorCause;
/**
 * Sends all elements emitted by this stream to the specified sink in addition
 * to emitting them.
 *
 * @since 2.0.0
 * @category sequencing
 */
const tapSink = exports.tapSink = internal.tapSink;
/**
 * Delays the chunks of this stream according to the given bandwidth
 * parameters using the token bucket algorithm. Allows for burst in the
 * processing of elements by allowing the token bucket to accumulate tokens up
 * to a `units + burst` threshold. The weight of each chunk is determined by
 * the `cost` function.
 *
 * If using the "enforce" strategy, chunks that do not meet the bandwidth
 * constraints are dropped. If using the "shape" strategy, chunks are delayed
 * until they can be emitted without exceeding the bandwidth constraints.
 *
 * Defaults to the "shape" strategy.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Schedule, Stream } from "effect"
 *
 * let last = Date.now()
 * const log = (message: string) =>
 *   Effect.sync(() => {
 *     const end = Date.now()
 *     console.log(`${message} after ${end - last}ms`)
 *     last = end
 *   })
 *
 * const stream = Stream.fromSchedule(Schedule.spaced("50 millis")).pipe(
 *   Stream.take(6),
 *   Stream.tap((n) => log(`Received ${n}`)),
 *   Stream.throttle({
 *     cost: Chunk.size,
 *     duration: "100 millis",
 *     units: 1
 *   }),
 *   Stream.tap((n) => log(`> Emitted ${n}`))
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // Received 0 after 56ms
 * // > Emitted 0 after 0ms
 * // Received 1 after 52ms
 * // > Emitted 1 after 48ms
 * // Received 2 after 52ms
 * // > Emitted 2 after 49ms
 * // Received 3 after 52ms
 * // > Emitted 3 after 48ms
 * // Received 4 after 52ms
 * // > Emitted 4 after 47ms
 * // Received 5 after 52ms
 * // > Emitted 5 after 49ms
 * // { _id: 'Chunk', values: [ 0, 1, 2, 3, 4, 5 ] }
 * ```
 *
 * @since 2.0.0
 * @category utils
 */
const throttle = exports.throttle = internal.throttle;
/**
 * Delays the chunks of this stream according to the given bandwidth
 * parameters using the token bucket algorithm. Allows for burst in the
 * processing of elements by allowing the token bucket to accumulate tokens up
 * to a `units + burst` threshold. The weight of each chunk is determined by
 * the effectful `costFn` function.
 *
 * If using the "enforce" strategy, chunks that do not meet the bandwidth
 * constraints are dropped. If using the "shape" strategy, chunks are delayed
 * until they can be emitted without exceeding the bandwidth constraints.
 *
 * Defaults to the "shape" strategy.
 *
 * @since 2.0.0
 * @category utils
 */
const throttleEffect = exports.throttleEffect = internal.throttleEffect;
/**
 * A stream that emits void values spaced by the specified duration.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * let last = Date.now()
 * const log = (message: string) =>
 *   Effect.sync(() => {
 *     const end = Date.now()
 *     console.log(`${message} after ${end - last}ms`)
 *     last = end
 *   })
 *
 * const stream = Stream.tick("1 seconds").pipe(Stream.tap(() => log("tick")))
 *
 * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(5)))).then(console.log)
 * // tick after 4ms
 * // tick after 1003ms
 * // tick after 1001ms
 * // tick after 1002ms
 * // tick after 1002ms
 * // { _id: 'Chunk', values: [ undefined, undefined, undefined, undefined, undefined ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const tick = exports.tick = internal.tick;
/**
 * Ends the stream if it does not produce a value after the specified duration.
 *
 * @since 2.0.0
 * @category utils
 */
const timeout = exports.timeout = internal.timeout;
/**
 * Fails the stream with given error if it does not produce a value after d
 * duration.
 *
 * @since 2.0.0
 * @category utils
 */
const timeoutFail = exports.timeoutFail = internal.timeoutFail;
/**
 * Fails the stream with given cause if it does not produce a value after d
 * duration.
 *
 * @since 2.0.0
 * @category utils
 */
const timeoutFailCause = exports.timeoutFailCause = internal.timeoutFailCause;
/**
 * Switches the stream if it does not produce a value after the specified
 * duration.
 *
 * @since 2.0.0
 * @category utils
 */
const timeoutTo = exports.timeoutTo = internal.timeoutTo;
/**
 * Converts the stream to a scoped `PubSub` of chunks. After the scope is closed,
 * the `PubSub` will never again produce values and should be discarded.
 *
 * @since 2.0.0
 * @category destructors
 */
const toPubSub = exports.toPubSub = internal.toPubSub;
/**
 * Returns in a scope an Effect that can be used to repeatedly pull chunks
 * from the stream. The pull effect fails with None when the stream is
 * finished, or with Some error if it fails, otherwise it returns a chunk of
 * the stream's output.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * // Simulate a chunked stream
 * const stream = Stream.fromIterable([1, 2, 3, 4, 5]).pipe(Stream.rechunk(2))
 *
 * const program = Effect.gen(function*() {
 *   // Create an effect to get data chunks from the stream
 *   const getChunk = yield* Stream.toPull(stream)
 *
 *   // Continuously fetch and process chunks
 *   while (true) {
 *     const chunk = yield* getChunk
 *     console.log(chunk)
 *   }
 * })
 *
 * Effect.runPromise(Effect.scoped(program)).then(console.log, console.error)
 * // { _id: 'Chunk', values: [ 1, 2 ] }
 * // { _id: 'Chunk', values: [ 3, 4 ] }
 * // { _id: 'Chunk', values: [ 5 ] }
 * // (FiberFailure) Error: {
 * //   "_id": "Option",
 * //   "_tag": "None"
 * // }
 * ```
 *
 * @since 2.0.0
 * @category destructors
 */
const toPull = exports.toPull = internal.toPull;
/**
 * Converts the stream to a scoped queue of chunks. After the scope is closed,
 * the queue will never again produce values and should be discarded.
 *
 * Defaults to the "suspend" back pressure strategy with a capacity of 2.
 *
 * @since 2.0.0
 * @category destructors
 */
const toQueue = exports.toQueue = internal.toQueue;
/**
 * Converts the stream to a scoped queue of elements. After the scope is
 * closed, the queue will never again produce values and should be discarded.
 *
 * Defaults to a capacity of 2.
 *
 * @since 2.0.0
 * @category destructors
 */
const toQueueOfElements = exports.toQueueOfElements = internal.toQueueOfElements;
/**
 * Converts the stream to a `ReadableStream`.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
 *
 * @since 2.0.0
 * @category destructors
 */
const toReadableStream = exports.toReadableStream = internal.toReadableStream;
/**
 * Converts the stream to a `Effect<ReadableStream>`.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
 *
 * @since 2.0.0
 * @category destructors
 */
const toReadableStreamEffect = exports.toReadableStreamEffect = internal.toReadableStreamEffect;
/**
 * Converts the stream to a `ReadableStream` using the provided runtime.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream.
 *
 * @since 2.0.0
 * @category destructors
 */
const toReadableStreamRuntime = exports.toReadableStreamRuntime = internal.toReadableStreamRuntime;
/**
 * Converts the stream to a `AsyncIterable` using the provided runtime.
 *
 * @since 3.15.0
 * @category destructors
 */
const toAsyncIterableRuntime = exports.toAsyncIterableRuntime = internal.toAsyncIterableRuntime;
/**
 * Converts the stream to a `AsyncIterable` capturing the required dependencies.
 *
 * @since 3.15.0
 * @category destructors
 */
const toAsyncIterableEffect = exports.toAsyncIterableEffect = internal.toAsyncIterableEffect;
/**
 * Converts the stream to a `AsyncIterable`.
 *
 * @since 3.15.0
 * @category destructors
 */
const toAsyncIterable = exports.toAsyncIterable = internal.toAsyncIterable;
/**
 * Applies the transducer to the stream and emits its outputs.
 *
 * @since 2.0.0
 * @category utils
 */
const transduce = exports.transduce = internal.transduce;
/**
 * Creates a stream by peeling off the "layers" of a value of type `S`.
 *
 * @example
 * ```ts
 * import { Effect, Option, Stream } from "effect"
 *
 * const stream = Stream.unfold(1, (n) => Option.some([n, n + 1]))
 *
 * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(5)))).then(console.log)
 * // { _id: 'Chunk', values: [ 1, 2, 3, 4, 5 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const unfold = exports.unfold = internal.unfold;
/**
 * Creates a stream by peeling off the "layers" of a value of type `S`.
 *
 * @since 2.0.0
 * @category constructors
 */
const unfoldChunk = exports.unfoldChunk = internal.unfoldChunk;
/**
 * Creates a stream by effectfully peeling off the "layers" of a value of type
 * `S`.
 *
 * @since 2.0.0
 * @category constructors
 */
const unfoldChunkEffect = exports.unfoldChunkEffect = internal.unfoldChunkEffect;
/**
 * Creates a stream by effectfully peeling off the "layers" of a value of type
 * `S`.
 *
 * @example
 * ```ts
 * import { Effect, Option, Random, Stream } from "effect"
 *
 * const stream = Stream.unfoldEffect(1, (n) =>
 *   Random.nextBoolean.pipe(
 *     Effect.map((b) => (b ? Option.some([n, -n]) : Option.some([n, n])))
 *   ))
 *
 * Effect.runPromise(Stream.runCollect(stream.pipe(Stream.take(5)))).then(console.log)
 * // { _id: 'Chunk', values: [ 1, -1, -1, -1, -1 ] }
 * ```
 *
 * @since 2.0.0
 * @category constructors
 */
const unfoldEffect = exports.unfoldEffect = internal.unfoldEffect;
const void_ = exports.void = internal.void;
/**
 * Creates a stream produced from an `Effect`.
 *
 * @since 2.0.0
 * @category constructors
 */
const unwrap = exports.unwrap = internal.unwrap;
/**
 * Creates a stream produced from a scoped `Effect`.
 *
 * @since 2.0.0
 * @category constructors
 */
const unwrapScoped = exports.unwrapScoped = internal.unwrapScoped;
/**
 * Creates a stream produced from a function which receives a `Scope` and
 * returns an `Effect`. The resulting stream will emit a single element, which
 * will be the result of the returned effect, if successful.
 *
 * @since 3.11.0
 * @category constructors
 */
const unwrapScopedWith = exports.unwrapScopedWith = internal.unwrapScopedWith;
/**
 * Updates the specified service within the context of the `Stream`.
 *
 * @since 2.0.0
 * @category context
 */
const updateService = exports.updateService = internal.updateService;
/**
 * Returns the specified stream if the given condition is satisfied, otherwise
 * returns an empty stream.
 *
 * @since 2.0.0
 * @category utils
 */
const when = exports.when = internal.when;
/**
 * Returns the resulting stream when the given `PartialFunction` is defined
 * for the given value, otherwise returns an empty stream.
 *
 * @since 2.0.0
 * @category constructors
 */
const whenCase = exports.whenCase = internal.whenCase;
/**
 * Returns the stream when the given partial function is defined for the given
 * effectful value, otherwise returns an empty stream.
 *
 * @since 2.0.0
 * @category utils
 */
const whenCaseEffect = exports.whenCaseEffect = internal.whenCaseEffect;
/**
 * Returns the stream if the given effectful condition is satisfied, otherwise
 * returns an empty stream.
 *
 * @since 2.0.0
 * @category utils
 */
const whenEffect = exports.whenEffect = internal.whenEffect;
/**
 * Wraps the stream with a new span for tracing.
 *
 * @since 2.0.0
 * @category tracing
 */
const withSpan = exports.withSpan = internal.withSpan;
/**
 * Zips this stream with another point-wise and emits tuples of elements from
 * both streams.
 *
 * The new stream will end when one of the sides ends.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * // We create two streams and zip them together.
 * const stream = Stream.zip(
 *   Stream.make(1, 2, 3, 4, 5, 6),
 *   Stream.make("a", "b", "c")
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] ] }
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
const zip = exports.zip = internal.zip;
/**
 * Zips this stream with another point-wise and emits tuples of elements from
 * both streams.
 *
 * The new stream will end when one of the sides ends.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipFlatten = exports.zipFlatten = internal.zipFlatten;
/**
 * Zips this stream with another point-wise, creating a new stream of pairs of
 * elements from both sides.
 *
 * The defaults `defaultLeft` and `defaultRight` will be used if the streams
 * have different lengths and one of the streams has ended before the other.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.zipAll(Stream.make(1, 2, 3, 4, 5, 6), {
 *   other: Stream.make("a", "b", "c"),
 *   defaultSelf: 0,
 *   defaultOther: "x"
 * })
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: "Chunk", values: [ [ 1, "a" ], [ 2, "b" ], [ 3, "c" ], [ 4, "x" ], [ 5, "x" ], [ 6, "x" ] ] }
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
const zipAll = exports.zipAll = internal.zipAll;
/**
 * Zips this stream with another point-wise, and keeps only elements from this
 * stream.
 *
 * The provided default value will be used if the other stream ends before
 * this one.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipAllLeft = exports.zipAllLeft = internal.zipAllLeft;
/**
 * Zips this stream with another point-wise, and keeps only elements from the
 * other stream.
 *
 * The provided default value will be used if this stream ends before the
 * other one.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipAllRight = exports.zipAllRight = internal.zipAllRight;
/**
 * Zips this stream that is sorted by distinct keys and the specified stream
 * that is sorted by distinct keys to produce a new stream that is sorted by
 * distinct keys. Combines values associated with each key into a tuple,
 * using the specified values `defaultLeft` and `defaultRight` to fill in
 * missing values.
 *
 * This allows zipping potentially unbounded streams of data by key in
 * constant space but the caller is responsible for ensuring that the
 * streams are sorted by distinct keys.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipAllSortedByKey = exports.zipAllSortedByKey = internal.zipAllSortedByKey;
/**
 * Zips this stream that is sorted by distinct keys and the specified stream
 * that is sorted by distinct keys to produce a new stream that is sorted by
 * distinct keys. Keeps only values from this stream, using the specified
 * value `default` to fill in missing values.
 *
 * This allows zipping potentially unbounded streams of data by key in
 * constant space but the caller is responsible for ensuring that the
 * streams are sorted by distinct keys.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipAllSortedByKeyLeft = exports.zipAllSortedByKeyLeft = internal.zipAllSortedByKeyLeft;
/**
 * Zips this stream that is sorted by distinct keys and the specified stream
 * that is sorted by distinct keys to produce a new stream that is sorted by
 * distinct keys. Keeps only values from that stream, using the specified
 * value `default` to fill in missing values.
 *
 * This allows zipping potentially unbounded streams of data by key in
 * constant space but the caller is responsible for ensuring that the
 * streams are sorted by distinct keys.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipAllSortedByKeyRight = exports.zipAllSortedByKeyRight = internal.zipAllSortedByKeyRight;
/**
 * Zips this stream that is sorted by distinct keys and the specified stream
 * that is sorted by distinct keys to produce a new stream that is sorted by
 * distinct keys. Uses the functions `left`, `right`, and `both` to handle
 * the cases where a key and value exist in this stream, that stream, or
 * both streams.
 *
 * This allows zipping potentially unbounded streams of data by key in
 * constant space but the caller is responsible for ensuring that the
 * streams are sorted by distinct keys.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipAllSortedByKeyWith = exports.zipAllSortedByKeyWith = internal.zipAllSortedByKeyWith;
/**
 * Zips this stream with another point-wise. The provided functions will be
 * used to create elements for the composed stream.
 *
 * The functions `left` and `right` will be used if the streams have different
 * lengths and one of the streams has ended before the other.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.zipAllWith(Stream.make(1, 2, 3, 4, 5, 6), {
 *   other: Stream.make("a", "b", "c"),
 *   onSelf: (n) => [n, "x"],
 *   onOther: (s) => [0, s],
 *   onBoth: (n, s) => [n - s.length, s]
 * })
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: "Chunk", values: [ [ 0, "a" ], [ 1, "b" ], [ 2, "c" ], [ 4, "x" ], [ 5, "x" ], [ 6, "x" ] ] }
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
const zipAllWith = exports.zipAllWith = internal.zipAllWith;
/**
 * Zips the two streams so that when a value is emitted by either of the two
 * streams, it is combined with the latest value from the other stream to
 * produce a result.
 *
 * Note: tracking the latest value is done on a per-chunk basis. That means
 * that emitted elements that are not the last value in chunks will never be
 * used for zipping.
 *
 * @example
 * ```ts
 * import { Effect, Schedule, Stream } from "effect"
 *
 * const s1 = Stream.make(1, 2, 3).pipe(
 *   Stream.schedule(Schedule.spaced("1 second"))
 * )
 *
 * const s2 = Stream.make("a", "b", "c", "d").pipe(
 *   Stream.schedule(Schedule.spaced("500 millis"))
 * )
 *
 * const stream = Stream.zipLatest(s1, s2)
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: "Chunk", values: [ [ 1, "a" ], [ 1, "b" ], [ 2, "b" ], [ 2, "c" ], [ 2, "d" ], [ 3, "d" ] ] }
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
const zipLatest = exports.zipLatest = internal.zipLatest;
/**
 * Zips multiple streams so that when a value is emitted by any of the streams,
 * it is combined with the latest values from the other streams to produce a result.
 *
 * Note: tracking the latest value is done on a per-chunk basis. That means
 * that emitted elements that are not the last value in chunks will never be
 * used for zipping.
 *
 * @example
 * ```ts
 * import { Stream, Schedule, Console, Effect } from "effect"
 *
 * const stream = Stream.zipLatestAll(
 *     Stream.fromSchedule(Schedule.spaced('1 millis')),
 *     Stream.fromSchedule(Schedule.spaced('2 millis')),
 *     Stream.fromSchedule(Schedule.spaced('4 millis')),
 * ).pipe(Stream.take(6), Stream.tap(Console.log))
 *
 * Effect.runPromise(Stream.runDrain(stream))
 * // Output:
 * // [ 0, 0, 0 ]
 * // [ 1, 0, 0 ]
 * // [ 1, 1, 0 ]
 * // [ 2, 1, 0 ]
 * // [ 3, 1, 0 ]
 * // [ 3, 1, 1 ]
 * // .....
 * ```
 *
 * @since 3.3.0
 * @category zipping
 */
const zipLatestAll = exports.zipLatestAll = internal.zipLatestAll;
/**
 * Zips the two streams so that when a value is emitted by either of the two
 * streams, it is combined with the latest value from the other stream to
 * produce a result.
 *
 * Note: tracking the latest value is done on a per-chunk basis. That means
 * that emitted elements that are not the last value in chunks will never be
 * used for zipping.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipLatestWith = exports.zipLatestWith = internal.zipLatestWith;
/**
 * Zips this stream with another point-wise, but keeps only the outputs of
 * `left` stream.
 *
 * The new stream will end when one of the sides ends.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipLeft = exports.zipLeft = internal.zipLeft;
/**
 * Zips this stream with another point-wise, but keeps only the outputs of the
 * `right` stream.
 *
 * The new stream will end when one of the sides ends.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipRight = exports.zipRight = internal.zipRight;
/**
 * Zips this stream with another point-wise and applies the function to the
 * paired elements.
 *
 * The new stream will end when one of the sides ends.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * // We create two streams and zip them with custom logic.
 * const stream = Stream.zipWith(
 *   Stream.make(1, 2, 3, 4, 5, 6),
 *   Stream.make("a", "b", "c"),
 *   (n, s) => [n - s.length, s]
 * )
 *
 * Effect.runPromise(Stream.runCollect(stream)).then(console.log)
 * // { _id: 'Chunk', values: [ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ] ] }
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
const zipWith = exports.zipWith = internal.zipWith;
/**
 * Zips this stream with another point-wise and applies the function to the
 * paired elements.
 *
 * The new stream will end when one of the sides ends.
 *
 * @since 2.0.0
 * @category zipping
 */
const zipWithChunks = exports.zipWithChunks = internal.zipWithChunks;
/**
 * Zips each element with the next element if present.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Stream } from "effect"
 *
 * const stream = Stream.zipWithNext(Stream.make(1, 2, 3, 4))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then((chunk) => console.log(Chunk.toArray(chunk)))
 * // [
 * //   [ 1, { _id: 'Option', _tag: 'Some', value: 2 } ],
 * //   [ 2, { _id: 'Option', _tag: 'Some', value: 3 } ],
 * //   [ 3, { _id: 'Option', _tag: 'Some', value: 4 } ],
 * //   [ 4, { _id: 'Option', _tag: 'None' } ]
 * // ]
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
const zipWithNext = exports.zipWithNext = internal.zipWithNext;
/**
 * Zips each element with the previous element. Initially accompanied by
 * `None`.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Stream } from "effect"
 *
 * const stream = Stream.zipWithPrevious(Stream.make(1, 2, 3, 4))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then((chunk) => console.log(Chunk.toArray(chunk)))
 * // [
 * //   [ { _id: 'Option', _tag: 'None' }, 1 ],
 * //   [ { _id: 'Option', _tag: 'Some', value: 1 }, 2 ],
 * //   [ { _id: 'Option', _tag: 'Some', value: 2 }, 3 ],
 * //   [ { _id: 'Option', _tag: 'Some', value: 3 }, 4 ]
 * // ]
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
const zipWithPrevious = exports.zipWithPrevious = internal.zipWithPrevious;
/**
 * Zips each element with both the previous and next element.
 *
 * @example
 * ```ts
 * import { Chunk, Effect, Stream } from "effect"
 *
 * const stream = Stream.zipWithPreviousAndNext(Stream.make(1, 2, 3, 4))
 *
 * Effect.runPromise(Stream.runCollect(stream)).then((chunk) => console.log(Chunk.toArray(chunk)))
 * // [
 * //   [
 * //     { _id: 'Option', _tag: 'None' },
 * //     1,
 * //     { _id: 'Option', _tag: 'Some', value: 2 }
 * //   ],
 * //   [
 * //     { _id: 'Option', _tag: 'Some', value: 1 },
 * //     2,
 * //     { _id: 'Option', _tag: 'Some', value: 3 }
 * //   ],
 * //   [
 * //     { _id: 'Option', _tag: 'Some', value: 2 },
 * //     3,
 * //     { _id: 'Option', _tag: 'Some', value: 4 }
 * //   ],
 * //   [
 * //     { _id: 'Option', _tag: 'Some', value: 3 },
 * //     4,
 * //     { _id: 'Option', _tag: 'None' }
 * //   ]
 * // ]
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
const zipWithPreviousAndNext = exports.zipWithPreviousAndNext = internal.zipWithPreviousAndNext;
/**
 * Zips this stream together with the index of elements.
 *
 * @example
 * ```ts
 * import { Effect, Stream } from "effect"
 *
 * const stream = Stream.make("Mary", "James", "Robert", "Patricia")
 *
 * const indexedStream = Stream.zipWithIndex(stream)
 *
 * Effect.runPromise(Stream.runCollect(indexedStream)).then(console.log)
 * // {
 * //   _id: 'Chunk',
 * //   values: [ [ 'Mary', 0 ], [ 'James', 1 ], [ 'Robert', 2 ], [ 'Patricia', 3 ] ]
 * // }
 * ```
 *
 * @since 2.0.0
 * @category zipping
 */
const zipWithIndex = exports.zipWithIndex = internal.zipWithIndex;
// -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------
/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Stream` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Chunk, Effect, pipe, Stream } from "effect"
 *
 * const result = pipe(
 *   Stream.Do,
 *   Stream.bind("x", () => Stream.succeed(2)),
 *   Stream.bind("y", () => Stream.succeed(3)),
 *   Stream.let("sum", ({ x, y }) => x + y)
 * )
 * assert.deepStrictEqual(Effect.runSync(Stream.runCollect(result)), Chunk.of({ x: 2, y: 3, sum: 5 }))
 * ```
 *
 * @see {@link bindTo}
 * @see {@link bind}
 * @see {@link bindEffect}
 * @see {@link let_ let}
 *
 * @category do notation
 * @since 2.0.0
 */
const Do = exports.Do = internal.Do;
/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Stream` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Chunk, Effect, pipe, Stream } from "effect"
 *
 * const result = pipe(
 *   Stream.Do,
 *   Stream.bind("x", () => Stream.succeed(2)),
 *   Stream.bind("y", () => Stream.succeed(3)),
 *   Stream.let("sum", ({ x, y }) => x + y)
 * )
 * assert.deepStrictEqual(Effect.runSync(Stream.runCollect(result)), Chunk.of({ x: 2, y: 3, sum: 5 }))
 * ```
 *
 * @see {@link Do}
 * @see {@link bindTo}
 * @see {@link bindEffect}
 * @see {@link let_ let}
 *
 * @category do notation
 * @since 2.0.0
 */
const bind = exports.bind = internal.bind;
/**
 * Binds an effectful value in a `do` scope
 *
 * @see {@link Do}
 * @see {@link bindTo}
 * @see {@link bind}
 * @see {@link let_ let}
 *
 * @since 2.0.0
 * @category do notation
 */
const bindEffect = exports.bindEffect = groupBy_.bindEffect;
/**
 * The "do simulation" in Effect allows you to write code in a more declarative style, similar to the "do notation" in other programming languages. It provides a way to define variables and perform operations on them using functions like `bind` and `let`.
 *
 * Here's how the do simulation works:
 *
 * 1. Start the do simulation using the `Do` value
 * 2. Within the do simulation scope, you can use the `bind` function to define variables and bind them to `Stream` values
 * 3. You can accumulate multiple `bind` statements to define multiple variables within the scope
 * 4. Inside the do simulation scope, you can also use the `let` function to define variables and bind them to simple values
 *
 * @example
 * ```ts
 * import * as assert from "node:assert"
 * import { Chunk, Effect, pipe, Stream } from "effect"
 *
 * const result = pipe(
 *   Stream.Do,
 *   Stream.bind("x", () => Stream.succeed(2)),
 *   Stream.bind("y", () => Stream.succeed(3)),
 *   Stream.let("sum", ({ x, y }) => x + y)
 * )
 * assert.deepStrictEqual(Effect.runSync(Stream.runCollect(result)), Chunk.of({ x: 2, y: 3, sum: 5 }))
 * ```
 *
 * @see {@link Do}
 * @see {@link bind}
 * @see {@link bindEffect}
 * @see {@link let_ let}
 *
 * @category do notation
 * @since 2.0.0
 */
const bindTo = exports.bindTo = internal.bindTo;
const let_ = exports.let = internal.let_;
// -------------------------------------------------------------------------------------
// encoding
// -------------------------------------------------------------------------------------
/**
 * Decode Uint8Array chunks into a stream of strings using the specified encoding.
 *
 * @since 2.0.0
 * @category encoding
 */
const decodeText = exports.decodeText = internal.decodeText;
/**
 * Encode a stream of strings into a stream of Uint8Array chunks using the specified encoding.
 *
 * @since 2.0.0
 * @category encoding
 */
const encodeText = exports.encodeText = internal.encodeText;
/**
 * Creates a `Stream` using addEventListener.
 * @since 3.1.0
 */
const fromEventListener = exports.fromEventListener = internal.fromEventListener;
//# sourceMappingURL=Stream.js.map