"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromEventListener = exports.fromEffectOption = exports.fromEffect = exports.fromChunks = exports.fromChunkQueue = exports.fromChunkPubSub = exports.fromChunk = exports.fromChannel = exports.fromAsyncIterable = exports.forever = exports.flattenTake = exports.flattenIterables = exports.flattenExitOption = exports.flattenEffect = exports.flattenChunks = exports.flatten = exports.flatMap = exports.findEffect = exports.find = exports.finalizer = exports.filterMapWhileEffect = exports.filterMapWhile = exports.filterMapEffect = exports.filterMap = exports.filterEffect = exports.filter = exports.failSync = exports.failCauseSync = exports.failCause = exports.fail = exports.execute = exports.ensuringWith = exports.ensuring = exports.encodeText = exports.empty = exports.either = exports.dropWhileEffect = exports.dropWhile = exports.dropUntilEffect = exports.dropUntil = exports.dropRight = exports.drop = exports.drainFork = exports.drain = exports.distributedWithDynamicCallback = exports.distributedWithDynamic = exports.distributedWith = exports.dieSync = exports.dieMessage = exports.die = exports.decodeText = exports.debounce = exports.crossWith = exports.crossRight = exports.crossLeft = exports.cross = exports.contextWithStream = exports.contextWithEffect = exports.contextWith = exports.context = exports.concatAll = exports.concat = exports.combineChunks = exports.combine = exports.chunksWith = exports.chunks = exports.channelToStream = exports.changesWithEffect = exports.changesWith = exports.changes = exports.catchTags = exports.catchTag = exports.catchSomeCause = exports.catchSome = exports.catchAllCause = exports.catchAll = exports.bufferChunks = exports.buffer = exports.broadcastedQueuesDynamic = exports.broadcastedQueues = exports.broadcastDynamic = exports.broadcast = exports.branchAfter = exports.bindTo = exports.bind = exports.asyncScoped = exports.asyncPush = exports.asyncEffect = exports.as = exports.aggregateWithinEither = exports.aggregateWithin = exports.aggregate = exports.acquireRelease = exports.accumulateChunks = exports.accumulate = exports._async = exports.StreamTypeId = exports.StreamImpl = exports.Do = exports.DefaultChunkSize = void 0;
exports.repeatElementsWith = exports.repeatElements = exports.repeatEither = exports.repeatEffectWithSchedule = exports.repeatEffectOption = exports.repeatEffectChunkOption = exports.repeatEffectChunk = exports.repeatEffect = exports.repeat = exports.refineOrDieWith = exports.refineOrDie = exports.rechunk = exports.range = exports.raceAll = exports.race = exports.provideSomeLayer = exports.provideSomeContext = exports.provideServiceStream = exports.provideServiceEffect = exports.provideService = exports.provideLayer = exports.provideContext = exports.prepend = exports.pipeThroughChannelOrFail = exports.pipeThroughChannel = exports.pipeThrough = exports.peel = exports.partitionEither = exports.partition = exports.paginateEffect = exports.paginateChunkEffect = exports.paginateChunk = exports.paginate = exports.orElseSucceed = exports.orElseIfEmptyStream = exports.orElseIfEmptyChunk = exports.orElseIfEmpty = exports.orElseFail = exports.orElseEither = exports.orElse = exports.orDieWith = exports.orDie = exports.onStart = exports.onError = exports.onEnd = exports.onDone = exports.never = exports.mkString = exports.mergeWithTag = exports.mergeWith = exports.mergeRight = exports.mergeLeft = exports.mergeEither = exports.mergeAll = exports.merge = exports.matchConcurrency = exports.mapInputContext = exports.mapErrorCause = exports.mapError = exports.mapEffectSequential = exports.mapEffectPar = exports.mapConcatEffect = exports.mapConcatChunkEffect = exports.mapConcatChunk = exports.mapConcat = exports.mapChunksEffect = exports.mapChunks = exports.mapBoth = exports.mapAccumEffect = exports.mapAccum = exports.map = exports.make = exports.let_ = exports.iterate = exports.isStream = exports.intersperseAffixes = exports.intersperse = exports.interruptWhenDeferred = exports.interruptWhen = exports.interruptAfter = exports.interleaveWith = exports.interleave = exports.identityStream = exports.haltWhenDeferred = exports.haltWhen = exports.haltAfter = exports.groupedWithin = exports.grouped = exports.groupAdjacentBy = exports.fromTQueue = exports.fromTPubSub = exports.fromSchedule = exports.fromReadableStreamByob = exports.fromReadableStream = exports.fromQueue = exports.fromPull = exports.fromPubSub = exports.fromIteratorSucceed = exports.fromIterableEffect = exports.fromIterable = void 0;
exports.zipAllSortedByKeyLeft = exports.zipAllSortedByKey = exports.zipAllRight = exports.zipAllLeft = exports.zipAll = exports.zip = exports.withSpan = exports.withExecutionPlan = exports.whenEffect = exports.whenCaseEffect = exports.whenCase = exports.when = exports.void = exports.updateService = exports.unwrapScopedWith = exports.unwrapScoped = exports.unwrap = exports.unfoldEffect = exports.unfoldChunkEffect = exports.unfoldChunk = exports.unfold = exports.transduce = exports.toReadableStreamRuntime = exports.toReadableStreamEffect = exports.toReadableStream = exports.toQueueOfElements = exports.toQueue = exports.toPull = exports.toPubSub = exports.toChannel = exports.toAsyncIterableRuntime = exports.toAsyncIterableEffect = exports.toAsyncIterable = exports.timeoutTo = exports.timeoutFailCause = exports.timeoutFail = exports.timeout = exports.tick = exports.throttleEffect = exports.throttle = exports.tapSink = exports.tapErrorCause = exports.tapError = exports.tapBoth = exports.tap = exports.takeWhile = exports.takeUntilEffect = exports.takeUntil = exports.takeRight = exports.take = exports.sync = exports.suspend = exports.succeed = exports.splitOnChunk = exports.splitLines = exports.split = exports.someOrFail = exports.someOrElse = exports.some = exports.slidingSize = exports.sliding = exports.share = exports.scopedWith = exports.scoped = exports.scheduleWith = exports.schedule = exports.scanReduceEffect = exports.scanReduce = exports.scanEffect = exports.scan = exports.runSum = exports.runScoped = exports.runLast = exports.runIntoQueueScoped = exports.runIntoQueueElementsScoped = exports.runIntoQueue = exports.runIntoPubSubScoped = exports.runIntoPubSub = exports.runHead = exports.runForEachWhileScoped = exports.runForEachWhile = exports.runForEachScoped = exports.runForEachChunkScoped = exports.runForEachChunk = exports.runForEach = exports.runFoldWhileScopedEffect = exports.runFoldWhileScoped = exports.runFoldWhileEffect = exports.runFoldWhile = exports.runFoldScopedEffect = exports.runFoldScoped = exports.runFoldEffect = exports.runFold = exports.runDrain = exports.runCount = exports.runCollect = exports.run = exports.retry = exports.repeatWith = exports.repeatValue = void 0;
exports.zipWithPreviousAndNext = exports.zipWithPrevious = exports.zipWithNext = exports.zipWithIndex = exports.zipWithChunks = exports.zipWith = exports.zipRight = exports.zipLeft = exports.zipLatestWith = exports.zipLatestAll = exports.zipLatest = exports.zipFlatten = exports.zipAllWith = exports.zipAllSortedByKeyWith = exports.zipAllSortedByKeyRight = void 0;
var Cause = _interopRequireWildcard(require("../Cause.js"));
var Chunk = _interopRequireWildcard(require("../Chunk.js"));
var Clock = _interopRequireWildcard(require("../Clock.js"));
var Context = _interopRequireWildcard(require("../Context.js"));
var Deferred = _interopRequireWildcard(require("../Deferred.js"));
var Duration = _interopRequireWildcard(require("../Duration.js"));
var Effect = _interopRequireWildcard(require("../Effect.js"));
var Either = _interopRequireWildcard(require("../Either.js"));
var Equal = _interopRequireWildcard(require("../Equal.js"));
var Exit = _interopRequireWildcard(require("../Exit.js"));
var Fiber = _interopRequireWildcard(require("../Fiber.js"));
var FiberRef = _interopRequireWildcard(require("../FiberRef.js"));
var _Function = require("../Function.js");
var internalExecutionPlan = _interopRequireWildcard(require("../internal/executionPlan.js"));
var Layer = _interopRequireWildcard(require("../Layer.js"));
var MergeDecision = _interopRequireWildcard(require("../MergeDecision.js"));
var Option = _interopRequireWildcard(require("../Option.js"));
var _Pipeable = require("../Pipeable.js");
var _Predicate = require("../Predicate.js");
var PubSub = _interopRequireWildcard(require("../PubSub.js"));
var Queue = _interopRequireWildcard(require("../Queue.js"));
var RcRef = _interopRequireWildcard(require("../RcRef.js"));
var Ref = _interopRequireWildcard(require("../Ref.js"));
var Runtime = _interopRequireWildcard(require("../Runtime.js"));
var Schedule = _interopRequireWildcard(require("../Schedule.js"));
var HaltStrategy = _interopRequireWildcard(require("../StreamHaltStrategy.js"));
var TPubSub = _interopRequireWildcard(require("../TPubSub.js"));
var TQueue = _interopRequireWildcard(require("../TQueue.js"));
var Tuple = _interopRequireWildcard(require("../Tuple.js"));
var channel = _interopRequireWildcard(require("./channel.js"));
var channelExecutor = _interopRequireWildcard(require("./channel/channelExecutor.js"));
var MergeStrategy = _interopRequireWildcard(require("./channel/mergeStrategy.js"));
var core = _interopRequireWildcard(require("./core-stream.js"));
var doNotation = _interopRequireWildcard(require("./doNotation.js"));
var _ringBuffer = require("./ringBuffer.js");
var InternalSchedule = _interopRequireWildcard(require("./schedule.js"));
var sink_ = _interopRequireWildcard(require("./sink.js"));
var DebounceState = _interopRequireWildcard(require("./stream/debounceState.js"));
var emit = _interopRequireWildcard(require("./stream/emit.js"));
var haltStrategy = _interopRequireWildcard(require("./stream/haltStrategy.js"));
var Handoff = _interopRequireWildcard(require("./stream/handoff.js"));
var HandoffSignal = _interopRequireWildcard(require("./stream/handoffSignal.js"));
var pull = _interopRequireWildcard(require("./stream/pull.js"));
var SinkEndReason = _interopRequireWildcard(require("./stream/sinkEndReason.js"));
var ZipAllState = _interopRequireWildcard(require("./stream/zipAllState.js"));
var ZipChunksState = _interopRequireWildcard(require("./stream/zipChunksState.js"));
var InternalTake = _interopRequireWildcard(require("./take.js"));
var InternalTracer = _interopRequireWildcard(require("./tracer.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const StreamSymbolKey = "effect/Stream";
/** @internal */
const StreamTypeId = exports.StreamTypeId = /*#__PURE__*/Symbol.for(StreamSymbolKey);
/** @internal */
const streamVariance = {
  _R: _ => _,
  _E: _ => _,
  _A: _ => _
};
/** @internal */
class StreamImpl {
  channel;
  [StreamTypeId] = streamVariance;
  constructor(channel) {
    this.channel = channel;
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
exports.StreamImpl = StreamImpl;
const isStream = u => (0, _Predicate.hasProperty)(u, StreamTypeId) || Effect.isEffect(u);
/** @internal */
exports.isStream = isStream;
const DefaultChunkSize = exports.DefaultChunkSize = 4096;
/** @internal */
const accumulate = self => chunks(accumulateChunks(self));
/** @internal */
exports.accumulate = accumulate;
const accumulateChunks = self => {
  const accumulator = s => core.readWith({
    onInput: input => {
      const next = Chunk.appendAll(s, input);
      return core.flatMap(core.write(next), () => accumulator(next));
    },
    onFailure: core.fail,
    onDone: () => core.void
  });
  return new StreamImpl(core.pipeTo(toChannel(self), accumulator(Chunk.empty())));
};
/** @internal */
exports.accumulateChunks = accumulateChunks;
const acquireRelease = (acquire, release) => scoped(Effect.acquireRelease(acquire, release));
/** @internal */
exports.acquireRelease = acquireRelease;
const aggregate = exports.aggregate = /*#__PURE__*/(0, _Function.dual)(2, (self, sink) => aggregateWithin(self, sink, Schedule.forever));
/** @internal */
const aggregateWithin = exports.aggregateWithin = /*#__PURE__*/(0, _Function.dual)(3, (self, sink, schedule) => filterMap(aggregateWithinEither(self, sink, schedule), _ => Either.match(_, {
  onLeft: Option.none,
  onRight: Option.some
})));
/** @internal */
const aggregateWithinEither = exports.aggregateWithinEither = /*#__PURE__*/(0, _Function.dual)(3, (self, sink, schedule) => {
  const layer = Effect.all([Handoff.make(), Ref.make(SinkEndReason.ScheduleEnd), Ref.make(Chunk.empty()), Schedule.driver(schedule), Ref.make(false), Ref.make(false)]);
  return fromEffect(layer).pipe(flatMap(([handoff, sinkEndReason, sinkLeftovers, scheduleDriver, consumed, endAfterEmit]) => {
    const handoffProducer = core.readWithCause({
      onInput: input => core.flatMap(core.fromEffect((0, _Function.pipe)(handoff, Handoff.offer(HandoffSignal.emit(input)), Effect.when(() => Chunk.isNonEmpty(input)))), () => handoffProducer),
      onFailure: cause => core.fromEffect(Handoff.offer(handoff, HandoffSignal.halt(cause))),
      onDone: () => core.fromEffect(Handoff.offer(handoff, HandoffSignal.end(SinkEndReason.UpstreamEnd)))
    });
    const handoffConsumer = (0, _Function.pipe)(Ref.getAndSet(sinkLeftovers, Chunk.empty()), Effect.flatMap(leftovers => {
      if (Chunk.isNonEmpty(leftovers)) {
        return (0, _Function.pipe)(Ref.set(consumed, true), Effect.zipRight(Effect.succeed((0, _Function.pipe)(core.write(leftovers), core.flatMap(() => handoffConsumer)))));
      }
      return (0, _Function.pipe)(Handoff.take(handoff), Effect.map(signal => {
        switch (signal._tag) {
          case HandoffSignal.OP_EMIT:
            {
              return (0, _Function.pipe)(core.fromEffect(Ref.set(consumed, true)), channel.zipRight(core.write(signal.elements)), channel.zipRight(core.fromEffect(Ref.get(endAfterEmit))), core.flatMap(bool => bool ? core.void : handoffConsumer));
            }
          case HandoffSignal.OP_HALT:
            {
              return core.failCause(signal.cause);
            }
          case HandoffSignal.OP_END:
            {
              if (signal.reason._tag === SinkEndReason.OP_SCHEDULE_END) {
                return (0, _Function.pipe)(Ref.get(consumed), Effect.map(bool => bool ? core.fromEffect((0, _Function.pipe)(Ref.set(sinkEndReason, SinkEndReason.ScheduleEnd), Effect.zipRight(Ref.set(endAfterEmit, true)))) : (0, _Function.pipe)(core.fromEffect((0, _Function.pipe)(Ref.set(sinkEndReason, SinkEndReason.ScheduleEnd), Effect.zipRight(Ref.set(endAfterEmit, true)))), core.flatMap(() => handoffConsumer))), channel.unwrap);
              }
              return (0, _Function.pipe)(Ref.set(sinkEndReason, signal.reason), Effect.zipRight(Ref.set(endAfterEmit, true)), core.fromEffect);
            }
        }
      }));
    }), channel.unwrap);
    const timeout = lastB => scheduleDriver.next(lastB);
    const scheduledAggregator = (sinkFiber, scheduleFiber, scope) => {
      const forkSink = (0, _Function.pipe)(Ref.set(consumed, false), Effect.zipRight(Ref.set(endAfterEmit, false)), Effect.zipRight((0, _Function.pipe)(handoffConsumer, channel.pipeToOrFail(sink_.toChannel(sink)), core.collectElements, channel.run, Effect.forkIn(scope))));
      const handleSide = (leftovers, b, c) => (0, _Function.pipe)(Ref.set(sinkLeftovers, Chunk.flatten(leftovers)), Effect.zipRight(Effect.map(Ref.get(sinkEndReason), reason => {
        switch (reason._tag) {
          case SinkEndReason.OP_SCHEDULE_END:
            {
              return (0, _Function.pipe)(Effect.all([Ref.get(consumed), forkSink, (0, _Function.pipe)(timeout(Option.some(b)), Effect.forkIn(scope))]), Effect.map(([wasConsumed, sinkFiber, scheduleFiber]) => {
                const toWrite = (0, _Function.pipe)(c, Option.match({
                  onNone: () => Chunk.of(Either.right(b)),
                  onSome: c => Chunk.make(Either.right(b), Either.left(c))
                }));
                if (wasConsumed) {
                  return (0, _Function.pipe)(core.write(toWrite), core.flatMap(() => scheduledAggregator(sinkFiber, scheduleFiber, scope)));
                }
                return scheduledAggregator(sinkFiber, scheduleFiber, scope);
              }), channel.unwrap);
            }
          case SinkEndReason.OP_UPSTREAM_END:
            {
              return (0, _Function.pipe)(Ref.get(consumed), Effect.map(wasConsumed => wasConsumed ? core.write(Chunk.of(Either.right(b))) : core.void), channel.unwrap);
            }
        }
      })), channel.unwrap);
      return channel.unwrap(Effect.raceWith(Fiber.join(sinkFiber), Fiber.join(scheduleFiber), {
        onSelfDone: (sinkExit, _) => (0, _Function.pipe)(Fiber.interrupt(scheduleFiber), Effect.zipRight((0, _Function.pipe)(Effect.suspend(() => sinkExit), Effect.map(([leftovers, b]) => handleSide(leftovers, b, Option.none()))))),
        onOtherDone: (scheduleExit, _) => Effect.matchCauseEffect(Effect.suspend(() => scheduleExit), {
          onFailure: cause => Either.match(Cause.failureOrCause(cause), {
            onLeft: () => (0, _Function.pipe)(handoff, Handoff.offer(HandoffSignal.end(SinkEndReason.ScheduleEnd)), Effect.forkDaemon, Effect.zipRight((0, _Function.pipe)(Fiber.join(sinkFiber), Effect.map(([leftovers, b]) => handleSide(leftovers, b, Option.none()))))),
            onRight: cause => (0, _Function.pipe)(handoff, Handoff.offer(HandoffSignal.halt(cause)), Effect.forkDaemon, Effect.zipRight((0, _Function.pipe)(Fiber.join(sinkFiber), Effect.map(([leftovers, b]) => handleSide(leftovers, b, Option.none())))))
          }),
          onSuccess: c => (0, _Function.pipe)(handoff, Handoff.offer(HandoffSignal.end(SinkEndReason.ScheduleEnd)), Effect.forkDaemon, Effect.zipRight((0, _Function.pipe)(Fiber.join(sinkFiber), Effect.map(([leftovers, b]) => handleSide(leftovers, b, Option.some(c))))))
        })
      }));
    };
    return unwrapScopedWith(scope => core.pipeTo(toChannel(self), handoffProducer).pipe(channel.run, Effect.forkIn(scope), Effect.zipRight(channel.pipeToOrFail(handoffConsumer, sink_.toChannel(sink)).pipe(core.collectElements, channel.run, Effect.forkIn(scope), Effect.flatMap(sinkFiber => timeout(Option.none()).pipe(Effect.forkIn(scope), Effect.map(scheduleFiber => new StreamImpl(scheduledAggregator(sinkFiber, scheduleFiber, scope)))))))));
  }));
});
/** @internal */
const as = exports.as = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => map(self, () => value));
const queueFromBufferOptions = bufferSize => {
  if (bufferSize === "unbounded") {
    return Queue.unbounded();
  } else if (typeof bufferSize === "number" || bufferSize === undefined) {
    return Queue.bounded(bufferSize ?? 16);
  }
  switch (bufferSize.strategy) {
    case "dropping":
      return Queue.dropping(bufferSize.bufferSize ?? 16);
    case "sliding":
      return Queue.sliding(bufferSize.bufferSize ?? 16);
    default:
      return Queue.bounded(bufferSize.bufferSize ?? 16);
  }
};
/** @internal */
const _async = (register, bufferSize) => Effect.acquireRelease(queueFromBufferOptions(bufferSize), queue => Queue.shutdown(queue)).pipe(Effect.flatMap(output => Effect.runtime().pipe(Effect.flatMap(runtime => Effect.sync(() => {
  const runPromiseExit = Runtime.runPromiseExit(runtime);
  const canceler = register(emit.make(resume => InternalTake.fromPull(resume).pipe(Effect.flatMap(take => Queue.offer(output, take)), Effect.asVoid, runPromiseExit).then(exit => {
    if (Exit.isFailure(exit)) {
      if (!Cause.isInterrupted(exit.cause)) {
        throw Cause.squash(exit.cause);
      }
    }
  })));
  return canceler;
})), Effect.map(value => {
  const loop = Queue.take(output).pipe(Effect.flatMap(take => InternalTake.done(take)), Effect.match({
    onFailure: maybeError => core.fromEffect(Queue.shutdown(output)).pipe(channel.zipRight(Option.match(maybeError, {
      onNone: () => core.void,
      onSome: error => core.fail(error)
    }))),
    onSuccess: chunk => core.write(chunk).pipe(core.flatMap(() => loop))
  }), channel.unwrap);
  return fromChannel(loop).pipe(ensuring(value ?? Effect.void));
}))), unwrapScoped);
/** @internal */
exports._async = _async;
const asyncEffect = (register, bufferSize) => (0, _Function.pipe)(Effect.acquireRelease(queueFromBufferOptions(bufferSize), queue => Queue.shutdown(queue)), Effect.flatMap(output => (0, _Function.pipe)(Effect.runtime(), Effect.flatMap(runtime => (0, _Function.pipe)(register(emit.make(k => (0, _Function.pipe)(InternalTake.fromPull(k), Effect.flatMap(take => Queue.offer(output, take)), Effect.asVoid, Runtime.runPromiseExit(runtime)).then(exit => {
  if (Exit.isFailure(exit)) {
    if (!Cause.isInterrupted(exit.cause)) {
      throw Cause.squash(exit.cause);
    }
  }
}))), Effect.map(() => {
  const loop = (0, _Function.pipe)(Queue.take(output), Effect.flatMap(InternalTake.done), Effect.match({
    onFailure: maybeError => (0, _Function.pipe)(core.fromEffect(Queue.shutdown(output)), channel.zipRight(Option.match(maybeError, {
      onNone: () => core.void,
      onSome: core.fail
    }))),
    onSuccess: chunk => (0, _Function.pipe)(core.write(chunk), core.flatMap(() => loop))
  }), channel.unwrap);
  return loop;
}))))), channel.unwrapScoped, fromChannel);
exports.asyncEffect = asyncEffect;
const queueFromBufferOptionsPush = options => {
  if (options?.bufferSize === "unbounded" || options?.bufferSize === undefined && options?.strategy === undefined) {
    return Queue.unbounded();
  }
  switch (options?.strategy) {
    case "sliding":
      return Queue.sliding(options.bufferSize ?? 16);
    default:
      return Queue.dropping(options?.bufferSize ?? 16);
  }
};
/** @internal */
const asyncPush = (register, options) => Effect.acquireRelease(queueFromBufferOptionsPush(options), Queue.shutdown).pipe(Effect.tap(queue => FiberRef.getWith(FiberRef.currentScheduler, scheduler => register(emit.makePush(queue, scheduler)))), Effect.map(queue => {
  const loop = core.flatMap(Queue.take(queue), item => Exit.isExit(item) ? Exit.isSuccess(item) ? core.void : core.failCause(item.cause) : channel.zipRight(core.write(Chunk.unsafeFromArray(item)), loop));
  return loop;
}), channel.unwrapScoped, fromChannel);
/** @internal */
exports.asyncPush = asyncPush;
const asyncScoped = (register, bufferSize) => (0, _Function.pipe)(Effect.acquireRelease(queueFromBufferOptions(bufferSize), queue => Queue.shutdown(queue)), Effect.flatMap(output => (0, _Function.pipe)(Effect.runtime(), Effect.flatMap(runtime => (0, _Function.pipe)(register(emit.make(k => (0, _Function.pipe)(InternalTake.fromPull(k), Effect.flatMap(take => Queue.offer(output, take)), Effect.asVoid, Runtime.runPromiseExit(runtime)).then(exit => {
  if (Exit.isFailure(exit)) {
    if (!Cause.isInterrupted(exit.cause)) {
      throw Cause.squash(exit.cause);
    }
  }
}))), Effect.zipRight(Ref.make(false)), Effect.flatMap(ref => (0, _Function.pipe)(Ref.get(ref), Effect.map(isDone => isDone ? pull.end() : (0, _Function.pipe)(Queue.take(output), Effect.flatMap(InternalTake.done), Effect.onError(() => (0, _Function.pipe)(Ref.set(ref, true), Effect.zipRight(Queue.shutdown(output)))))))))))), scoped, flatMap(repeatEffectChunkOption));
/** @internal */
exports.asyncScoped = asyncScoped;
const branchAfter = exports.branchAfter = /*#__PURE__*/(0, _Function.dual)(3, (self, n, f) => suspend(() => {
  const buffering = acc => core.readWith({
    onInput: input => {
      const nextSize = acc.length + input.length;
      if (nextSize >= n) {
        const [b1, b2] = (0, _Function.pipe)(input, Chunk.splitAt(n - acc.length));
        return running((0, _Function.pipe)(acc, Chunk.appendAll(b1)), b2);
      }
      return buffering((0, _Function.pipe)(acc, Chunk.appendAll(input)));
    },
    onFailure: core.fail,
    onDone: () => running(acc, Chunk.empty())
  });
  const running = (prefix, leftover) => core.pipeTo(channel.zipRight(core.write(leftover), channel.identityChannel()), toChannel(f(prefix)));
  return new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(buffering(Chunk.empty()))));
}));
/** @internal */
const broadcast = exports.broadcast = /*#__PURE__*/(0, _Function.dual)(3, (self, n, maximumLag) => (0, _Function.pipe)(self, broadcastedQueues(n, maximumLag), Effect.map(tuple => tuple.map(queue => flattenTake(fromQueue(queue, {
  shutdown: true
}))))));
/** @internal */
const broadcastDynamic = exports.broadcastDynamic = /*#__PURE__*/(0, _Function.dual)(2, (self, maximumLag) => Effect.map(toPubSub(self, maximumLag), pubsub => flattenTake(fromPubSub(pubsub))));
const share = exports.share = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => Effect.map(RcRef.make({
  acquire: broadcastDynamic(self, options),
  idleTimeToLive: options.idleTimeToLive
}), rcRef => unwrapScoped(RcRef.get(rcRef))));
/** @internal */
const broadcastedQueues = exports.broadcastedQueues = /*#__PURE__*/(0, _Function.dual)(3, (self, n, maximumLag) => Effect.flatMap(pubsubFromOptions(maximumLag), pubsub => (0, _Function.pipe)(Effect.all(Array.from({
  length: n
}, () => PubSub.subscribe(pubsub))), Effect.tap(() => Effect.forkScoped(runIntoPubSubScoped(self, pubsub))))));
/** @internal */
const broadcastedQueuesDynamic = exports.broadcastedQueuesDynamic = /*#__PURE__*/(0, _Function.dual)(2, (self, maximumLag) => Effect.map(toPubSub(self, maximumLag), PubSub.subscribe));
/** @internal */
const buffer = exports.buffer = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => {
  if (options.capacity === "unbounded") {
    return bufferUnbounded(self);
  } else if (options.strategy === "dropping") {
    return bufferDropping(self, options.capacity);
  } else if (options.strategy === "sliding") {
    return bufferSliding(self, options.capacity);
  }
  const queue = toQueueOfElements(self, options);
  return new StreamImpl(channel.unwrapScoped(Effect.map(queue, queue => {
    const process = (0, _Function.pipe)(core.fromEffect(Queue.take(queue)), core.flatMap(Exit.match({
      onFailure: cause => (0, _Function.pipe)(Cause.flipCauseOption(cause), Option.match({
        onNone: () => core.void,
        onSome: core.failCause
      })),
      onSuccess: value => core.flatMap(core.write(Chunk.of(value)), () => process)
    })));
    return process;
  })));
});
/** @internal */
const bufferChunks = exports.bufferChunks = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => {
  if (options.strategy === "dropping") {
    return bufferChunksDropping(self, options.capacity);
  } else if (options.strategy === "sliding") {
    return bufferChunksSliding(self, options.capacity);
  }
  const queue = toQueue(self, options);
  return new StreamImpl(channel.unwrapScoped(Effect.map(queue, queue => {
    const process = (0, _Function.pipe)(core.fromEffect(Queue.take(queue)), core.flatMap(InternalTake.match({
      onEnd: () => core.void,
      onFailure: core.failCause,
      onSuccess: value => (0, _Function.pipe)(core.write(value), core.flatMap(() => process))
    })));
    return process;
  })));
});
const bufferChunksDropping = /*#__PURE__*/(0, _Function.dual)(2, (self, capacity) => {
  const queue = Effect.acquireRelease(Queue.dropping(capacity), queue => Queue.shutdown(queue));
  return new StreamImpl(bufferSignal(queue, toChannel(self)));
});
const bufferChunksSliding = /*#__PURE__*/(0, _Function.dual)(2, (self, capacity) => {
  const queue = Effect.acquireRelease(Queue.sliding(capacity), queue => Queue.shutdown(queue));
  return new StreamImpl(bufferSignal(queue, toChannel(self)));
});
const bufferDropping = /*#__PURE__*/(0, _Function.dual)(2, (self, capacity) => {
  const queue = Effect.acquireRelease(Queue.dropping(capacity), queue => Queue.shutdown(queue));
  return new StreamImpl(bufferSignal(queue, toChannel(rechunk(1)(self))));
});
const bufferSliding = /*#__PURE__*/(0, _Function.dual)(2, (self, capacity) => {
  const queue = Effect.acquireRelease(Queue.sliding(capacity), queue => Queue.shutdown(queue));
  return new StreamImpl(bufferSignal(queue, toChannel((0, _Function.pipe)(self, rechunk(1)))));
});
const bufferUnbounded = self => {
  const queue = toQueue(self, {
    strategy: "unbounded"
  });
  return new StreamImpl(channel.unwrapScoped(Effect.map(queue, queue => {
    const process = (0, _Function.pipe)(core.fromEffect(Queue.take(queue)), core.flatMap(InternalTake.match({
      onEnd: () => core.void,
      onFailure: core.failCause,
      onSuccess: value => core.flatMap(core.write(value), () => process)
    })));
    return process;
  })));
};
const bufferSignal = (scoped, bufferChannel) => {
  const producer = (queue, ref) => {
    const terminate = take => (0, _Function.pipe)(Ref.get(ref), Effect.tap(Deferred.await), Effect.zipRight(Deferred.make()), Effect.flatMap(deferred => (0, _Function.pipe)(Queue.offer(queue, [take, deferred]), Effect.zipRight(Ref.set(ref, deferred)), Effect.zipRight(Deferred.await(deferred)))), Effect.asVoid, core.fromEffect);
    return core.readWithCause({
      onInput: input => (0, _Function.pipe)(Deferred.make(), Effect.flatMap(deferred => (0, _Function.pipe)(Queue.offer(queue, [InternalTake.chunk(input), deferred]), Effect.flatMap(added => (0, _Function.pipe)(Ref.set(ref, deferred), Effect.when(() => added))))), Effect.asVoid, core.fromEffect, core.flatMap(() => producer(queue, ref))),
      onFailure: error => terminate(InternalTake.failCause(error)),
      onDone: () => terminate(InternalTake.end)
    });
  };
  const consumer = queue => {
    const process = (0, _Function.pipe)(core.fromEffect(Queue.take(queue)), core.flatMap(([take, deferred]) => channel.zipRight(core.fromEffect(Deferred.succeed(deferred, void 0)), InternalTake.match(take, {
      onEnd: () => core.void,
      onFailure: core.failCause,
      onSuccess: value => (0, _Function.pipe)(core.write(value), core.flatMap(() => process))
    }))));
    return process;
  };
  return channel.unwrapScoped((0, _Function.pipe)(scoped, Effect.flatMap(queue => (0, _Function.pipe)(Deferred.make(), Effect.tap(start => Deferred.succeed(start, void 0)), Effect.flatMap(start => (0, _Function.pipe)(Ref.make(start), Effect.flatMap(ref => (0, _Function.pipe)(bufferChannel, core.pipeTo(producer(queue, ref)), channel.runScoped, Effect.forkScoped)), Effect.as(consumer(queue))))))));
};
/** @internal */
const catchAll = exports.catchAll = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => catchAllCause(self, cause => Either.match(Cause.failureOrCause(cause), {
  onLeft: f,
  onRight: failCause
})));
/** @internal */
const catchAllCause = exports.catchAllCause = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => new StreamImpl((0, _Function.pipe)(toChannel(self), core.catchAllCause(cause => toChannel(f(cause))))));
/** @internal */
const catchSome = exports.catchSome = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => (0, _Function.pipe)(self, catchAll(error => (0, _Function.pipe)(pf(error), Option.getOrElse(() => fail(error))))));
/** @internal */
const catchSomeCause = exports.catchSomeCause = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => (0, _Function.pipe)(self, catchAllCause(cause => (0, _Function.pipe)(pf(cause), Option.getOrElse(() => failCause(cause))))));
/* @internal */
const catchTag = exports.catchTag = /*#__PURE__*/(0, _Function.dual)(3, (self, k, f) => catchAll(self, e => {
  if ("_tag" in e && e["_tag"] === k) {
    return f(e);
  }
  return fail(e);
}));
/** @internal */
const catchTags = exports.catchTags = /*#__PURE__*/(0, _Function.dual)(2, (self, cases) => catchAll(self, e => {
  const keys = Object.keys(cases);
  if ("_tag" in e && keys.includes(e["_tag"])) {
    return cases[e["_tag"]](e);
  }
  return fail(e);
}));
/** @internal */
const changes = self => (0, _Function.pipe)(self, changesWith((x, y) => Equal.equals(y)(x)));
/** @internal */
exports.changes = changes;
const changesWith = exports.changesWith = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const writer = last => core.readWithCause({
    onInput: input => {
      const [newLast, newChunk] = Chunk.reduce(input, [last, Chunk.empty()], ([option, outputs], output) => {
        if (Option.isSome(option) && f(option.value, output)) {
          return [Option.some(output), outputs];
        }
        return [Option.some(output), (0, _Function.pipe)(outputs, Chunk.append(output))];
      });
      if (Chunk.isEmpty(newChunk)) return writer(newLast);
      return core.flatMap(core.write(newChunk), () => writer(newLast));
    },
    onFailure: core.failCause,
    onDone: () => core.void
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(writer(Option.none()))));
});
/** @internal */
const changesWithEffect = exports.changesWithEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const writer = last => core.readWithCause({
    onInput: input => (0, _Function.pipe)(input, Effect.reduce([last, Chunk.empty()], ([option, outputs], output) => {
      if (Option.isSome(option)) {
        return (0, _Function.pipe)(f(option.value, output), Effect.map(bool => bool ? [Option.some(output), outputs] : [Option.some(output), (0, _Function.pipe)(outputs, Chunk.append(output))]));
      }
      return Effect.succeed([Option.some(output), (0, _Function.pipe)(outputs, Chunk.append(output))]);
    }), core.fromEffect, core.flatMap(([newLast, newChunk]) => (0, _Function.pipe)(core.write(newChunk), core.flatMap(() => writer(newLast))))),
    onFailure: core.failCause,
    onDone: () => core.void
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(writer(Option.none()))));
});
/** @internal */
const chunks = self => (0, _Function.pipe)(self, mapChunks(Chunk.of));
/** @internal */
exports.chunks = chunks;
const chunksWith = exports.chunksWith = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => flattenChunks(f(chunks(self))));
const unsome = effect => Effect.catchAll(Effect.asSome(effect), o => o._tag === "None" ? Effect.succeedNone : Effect.fail(o.value));
/** @internal */
const combine = exports.combine = /*#__PURE__*/(0, _Function.dual)(4, (self, that, s, f) => {
  function producer(handoff, latch) {
    return core.fromEffect(Handoff.take(latch)).pipe(channel.zipRight(core.readWithCause({
      onInput: input => core.flatMap(core.fromEffect(Handoff.offer(handoff, Exit.succeed(input))), () => producer(handoff, latch)),
      onFailure: cause => core.fromEffect(Handoff.offer(handoff, Exit.failCause((0, _Function.pipe)(cause, Cause.map(Option.some))))),
      onDone: () => core.flatMap(core.fromEffect(Handoff.offer(handoff, Exit.fail(Option.none()))), () => producer(handoff, latch))
    })));
  }
  return new StreamImpl(channel.unwrapScopedWith(scope => Effect.all([Handoff.make(), Handoff.make(), Handoff.make(), Handoff.make()]).pipe(Effect.tap(([left, _, latchL]) => toChannel(self).pipe(channel.concatMap(channel.writeChunk), core.pipeTo(producer(left, latchL)), channelExecutor.runIn(scope), Effect.forkIn(scope))), Effect.tap(([, right, _, rightL]) => toChannel(that).pipe(channel.concatMap(channel.writeChunk), core.pipeTo(producer(right, rightL)), channelExecutor.runIn(scope), Effect.forkIn(scope))), Effect.map(([left, right, latchL, latchR]) => {
    const pullLeft = Handoff.offer(latchL, void 0).pipe(Effect.zipRight(Handoff.take(left).pipe(Effect.flatMap(_Function.identity))));
    const pullRight = Handoff.offer(latchR, void 0).pipe(Effect.zipRight(Handoff.take(right).pipe(Effect.flatMap(_Function.identity))));
    return toChannel(unfoldEffect(s, s => Effect.flatMap(f(s, pullLeft, pullRight), unsome)));
  }))));
});
/** @internal */
const combineChunks = exports.combineChunks = /*#__PURE__*/(0, _Function.dual)(4, (self, that, s, f) => {
  const producer = (handoff, latch) => channel.zipRight(core.fromEffect(Handoff.take(latch)), core.readWithCause({
    onInput: input => core.flatMap(core.fromEffect((0, _Function.pipe)(handoff, Handoff.offer(InternalTake.chunk(input)))), () => producer(handoff, latch)),
    onFailure: cause => core.fromEffect(Handoff.offer(handoff, InternalTake.failCause(cause))),
    onDone: () => core.fromEffect(Handoff.offer(handoff, InternalTake.end))
  }));
  return new StreamImpl(channel.unwrapScopedWith(scope => Effect.all([Handoff.make(), Handoff.make(), Handoff.make(), Handoff.make()]).pipe(Effect.tap(([left, _, latchL]) => core.pipeTo(toChannel(self), producer(left, latchL)).pipe(channelExecutor.runIn(scope), Effect.forkIn(scope))), Effect.tap(([_, right, __, latchR]) => core.pipeTo(toChannel(that), producer(right, latchR)).pipe(channelExecutor.runIn(scope), Effect.forkIn(scope))), Effect.map(([left, right, latchL, latchR]) => {
    const pullLeft = Handoff.offer(latchL, void 0).pipe(Effect.zipRight(Handoff.take(left).pipe(Effect.flatMap(InternalTake.done))));
    const pullRight = Handoff.offer(latchR, void 0).pipe(Effect.zipRight(Handoff.take(right).pipe(Effect.flatMap(InternalTake.done))));
    return toChannel(unfoldChunkEffect(s, s => Effect.flatMap(f(s, pullLeft, pullRight), unsome)));
  }))));
});
/** @internal */
const concat = exports.concat = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.zipRight(toChannel(that)))));
/** @internal */
const concatAll = streams => suspend(() => (0, _Function.pipe)(streams, Chunk.reduce(empty, (x, y) => concat(y)(x))));
/** @internal */
exports.concatAll = concatAll;
const cross = exports.cross = /*#__PURE__*/(0, _Function.dual)(2, (left, right) => (0, _Function.pipe)(left, crossWith(right, (a, a2) => [a, a2])));
/** @internal */
const crossLeft = exports.crossLeft = /*#__PURE__*/(0, _Function.dual)(2, (left, right) => (0, _Function.pipe)(left, crossWith(right, (a, _) => a)));
/** @internal */
const crossRight = exports.crossRight = /*#__PURE__*/(0, _Function.dual)(2, (left, right) => flatMap(left, () => right));
/** @internal */
const crossWith = exports.crossWith = /*#__PURE__*/(0, _Function.dual)(3, (left, right, f) => (0, _Function.pipe)(left, flatMap(a => (0, _Function.pipe)(right, map(b => f(a, b))))));
/** @internal */
const debounce = exports.debounce = /*#__PURE__*/(0, _Function.dual)(2, (self, duration) => unwrapScopedWith(scope => Effect.gen(function* () {
  const handoff = yield* Handoff.make();
  function enqueue(last) {
    return Clock.sleep(duration).pipe(Effect.as(last), Effect.forkIn(scope), Effect.map(fiber => consumer(DebounceState.previous(fiber))));
  }
  const producer = core.readWithCause({
    onInput: input => Option.match(Chunk.last(input), {
      onNone: () => producer,
      onSome: elem => core.fromEffect(Handoff.offer(handoff, HandoffSignal.emit(Chunk.of(elem)))).pipe(core.flatMap(() => producer))
    }),
    onFailure: cause => core.fromEffect(Handoff.offer(handoff, HandoffSignal.halt(cause))),
    onDone: () => core.fromEffect(Handoff.offer(handoff, HandoffSignal.end(SinkEndReason.UpstreamEnd)))
  });
  function consumer(state) {
    switch (state._tag) {
      case DebounceState.OP_NOT_STARTED:
        {
          return channel.unwrap(Handoff.take(handoff).pipe(Effect.map(signal => {
            switch (signal._tag) {
              case HandoffSignal.OP_EMIT:
                {
                  return channel.unwrap(enqueue(signal.elements));
                }
              case HandoffSignal.OP_HALT:
                {
                  return core.failCause(signal.cause);
                }
              case HandoffSignal.OP_END:
                {
                  return core.void;
                }
            }
          })));
        }
      case DebounceState.OP_PREVIOUS:
        {
          return channel.unwrap(Handoff.take(handoff).pipe(Effect.forkIn(scope), Effect.flatMap(handoffFiber => Effect.raceWith(Fiber.join(state.fiber), Fiber.join(handoffFiber), {
            onSelfDone: (leftExit, current) => Exit.match(leftExit, {
              onFailure: cause => Fiber.interrupt(current).pipe(Effect.as(core.failCause(cause))),
              onSuccess: chunk => Fiber.interrupt(current).pipe(Effect.zipRight(Effect.succeed(core.write(chunk).pipe(core.flatMap(() => consumer(DebounceState.current(handoffFiber)))))))
            }),
            onOtherDone: (rightExit, previous) => Exit.match(rightExit, {
              onFailure: cause => Fiber.interrupt(previous).pipe(Effect.as(core.failCause(cause))),
              onSuccess: signal => {
                switch (signal._tag) {
                  case HandoffSignal.OP_EMIT:
                    {
                      return Fiber.interrupt(previous).pipe(Effect.zipRight(enqueue(signal.elements)));
                    }
                  case HandoffSignal.OP_HALT:
                    {
                      return Fiber.interrupt(previous).pipe(Effect.as(core.failCause(signal.cause)));
                    }
                  case HandoffSignal.OP_END:
                    {
                      return Fiber.join(previous).pipe(Effect.map(chunk => core.write(chunk).pipe(channel.zipRight(core.void))));
                    }
                }
              }
            })
          }))));
        }
      case DebounceState.OP_CURRENT:
        {
          return channel.unwrap(Fiber.join(state.fiber).pipe(Effect.map(signal => {
            switch (signal._tag) {
              case HandoffSignal.OP_EMIT:
                {
                  return channel.unwrap(enqueue(signal.elements));
                }
              case HandoffSignal.OP_HALT:
                {
                  return core.failCause(signal.cause);
                }
              case HandoffSignal.OP_END:
                {
                  return core.void;
                }
            }
          })));
        }
    }
  }
  return scopedWith(scope => core.pipeTo(toChannel(self), producer).pipe(channelExecutor.runIn(scope), Effect.forkIn(scope))).pipe(crossRight(new StreamImpl(consumer(DebounceState.notStarted))));
})));
/** @internal */
const die = defect => fromEffect(Effect.die(defect));
/** @internal */
exports.die = die;
const dieSync = evaluate => fromEffect(Effect.dieSync(evaluate));
/** @internal */
exports.dieSync = dieSync;
const dieMessage = message => fromEffect(Effect.dieMessage(message));
/** @internal */
exports.dieMessage = dieMessage;
const distributedWith = exports.distributedWith = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => (0, _Function.pipe)(Deferred.make(), Effect.flatMap(deferred => (0, _Function.pipe)(self, distributedWithDynamic({
  maximumLag: options.maximumLag,
  decide: a => Effect.flatMap(Deferred.await(deferred), f => f(a))
}), Effect.flatMap(next => (0, _Function.pipe)(Effect.all(Chunk.map(Chunk.range(0, options.size - 1), id => Effect.map(next, ([key, queue]) => [[key, id], queue]))), Effect.map(Chunk.unsafeFromArray), Effect.flatMap(entries => {
  const [mappings, queues] = Chunk.reduceRight(entries, [new Map(), Chunk.empty()], ([mappings, queues], [mapping, queue]) => [mappings.set(mapping[0], mapping[1]), (0, _Function.pipe)(queues, Chunk.prepend(queue))]);
  return (0, _Function.pipe)(Deferred.succeed(deferred, a => Effect.map(options.decide(a), f => key => f(mappings.get(key)))), Effect.as(Array.from(queues)));
})))))));
/** @internal */
const distributedWithDynamicId = {
  ref: 0
};
const newDistributedWithDynamicId = () => {
  const current = distributedWithDynamicId.ref;
  distributedWithDynamicId.ref = current + 1;
  return current;
};
/** @internal */
const distributedWithDynamic = exports.distributedWithDynamic = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => distributedWithDynamicCallback(self, options.maximumLag, options.decide, () => Effect.void));
/** @internal */
const distributedWithDynamicCallback = exports.distributedWithDynamicCallback = /*#__PURE__*/(0, _Function.dual)(4, (self, maximumLag, decide, done) => (0, _Function.pipe)(Effect.acquireRelease(Ref.make(new Map()), (ref, _) => (0, _Function.pipe)(Ref.get(ref), Effect.flatMap(queues => (0, _Function.pipe)(queues.values(), Effect.forEach(Queue.shutdown))))), Effect.flatMap(queuesRef => Effect.gen(function* () {
  const offer = a => (0, _Function.pipe)(decide(a), Effect.flatMap(shouldProcess => (0, _Function.pipe)(Ref.get(queuesRef), Effect.flatMap(queues => (0, _Function.pipe)(queues.entries(), Effect.reduce(Chunk.empty(), (acc, [id, queue]) => {
    if (shouldProcess(id)) {
      return (0, _Function.pipe)(Queue.offer(queue, Exit.succeed(a)), Effect.matchCauseEffect({
        onFailure: cause =>
        // Ignore all downstream queues that were shut
        // down and remove them later
        Cause.isInterrupted(cause) ? Effect.succeed((0, _Function.pipe)(acc, Chunk.prepend(id))) : Effect.failCause(cause),
        onSuccess: () => Effect.succeed(acc)
      }));
    }
    return Effect.succeed(acc);
  }), Effect.flatMap(ids => {
    if (Chunk.isNonEmpty(ids)) {
      return Ref.update(queuesRef, map => {
        for (const id of ids) {
          map.delete(id);
        }
        return map;
      });
    }
    return Effect.void;
  }))))), Effect.asVoid);
  const queuesLock = yield* Effect.makeSemaphore(1);
  const newQueue = yield* Ref.make((0, _Function.pipe)(Queue.bounded(maximumLag), Effect.flatMap(queue => {
    const id = newDistributedWithDynamicId();
    return (0, _Function.pipe)(Ref.update(queuesRef, map => map.set(id, queue)), Effect.as([id, queue]));
  })));
  const finalize = endTake =>
  // Make sure that no queues are currently being added
  queuesLock.withPermits(1)((0, _Function.pipe)(Ref.set(newQueue, (0, _Function.pipe)(
  // All newly created queues should end immediately
  Queue.bounded(1), Effect.tap(queue => Queue.offer(queue, endTake)), Effect.flatMap(queue => {
    const id = newDistributedWithDynamicId();
    return (0, _Function.pipe)(Ref.update(queuesRef, map => map.set(id, queue)), Effect.as(Tuple.make(id, queue)));
  }))), Effect.zipRight((0, _Function.pipe)(Ref.get(queuesRef), Effect.flatMap(map => (0, _Function.pipe)(Chunk.fromIterable(map.values()), Effect.forEach(queue => (0, _Function.pipe)(Queue.offer(queue, endTake), Effect.catchSomeCause(cause => Cause.isInterrupted(cause) ? Option.some(Effect.void) : Option.none()))))))), Effect.zipRight(done(endTake)), Effect.asVoid));
  yield* (0, _Function.pipe)(self, runForEachScoped(offer), Effect.matchCauseEffect({
    onFailure: cause => finalize(Exit.failCause((0, _Function.pipe)(cause, Cause.map(Option.some)))),
    onSuccess: () => finalize(Exit.fail(Option.none()))
  }), Effect.forkScoped);
  return queuesLock.withPermits(1)(Effect.flatten(Ref.get(newQueue)));
}))));
/** @internal */
const drain = self => new StreamImpl(channel.drain(toChannel(self)));
/** @internal */
exports.drain = drain;
const drainFork = exports.drainFork = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => fromEffect(Deferred.make()).pipe(flatMap(backgroundDied => scopedWith(scope => toChannel(that).pipe(channel.drain, channelExecutor.runIn(scope), Effect.catchAllCause(cause => Deferred.failCause(backgroundDied, cause)), Effect.forkIn(scope))).pipe(crossRight(interruptWhenDeferred(self, backgroundDied))))));
/** @internal */
const drop = exports.drop = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  const loop = r => core.readWith({
    onInput: input => {
      const dropped = (0, _Function.pipe)(input, Chunk.drop(r));
      const leftover = Math.max(0, r - input.length);
      const more = Chunk.isEmpty(input) || leftover > 0;
      if (more) {
        return loop(leftover);
      }
      return (0, _Function.pipe)(core.write(dropped), channel.zipRight(channel.identityChannel()));
    },
    onFailure: core.fail,
    onDone: () => core.void
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(loop(n))));
});
/** @internal */
const dropRight = exports.dropRight = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  if (n <= 0) {
    return identityStream();
  }
  return suspend(() => {
    const queue = new _ringBuffer.RingBuffer(n);
    const reader = core.readWith({
      onInput: input => {
        const outputs = (0, _Function.pipe)(input, Chunk.filterMap(elem => {
          const head = queue.head();
          queue.put(elem);
          return head;
        }));
        return (0, _Function.pipe)(core.write(outputs), core.flatMap(() => reader));
      },
      onFailure: core.fail,
      onDone: () => core.void
    });
    return new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(reader)));
  });
});
/** @internal */
const dropUntil = exports.dropUntil = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => drop(dropWhile(self, a => !predicate(a)), 1));
/** @internal */
const dropUntilEffect = exports.dropUntilEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const loop = core.readWith({
    onInput: input => (0, _Function.pipe)(Effect.dropUntil(input, predicate), Effect.map(Chunk.unsafeFromArray), Effect.map(leftover => {
      const more = Chunk.isEmpty(leftover);
      if (more) {
        return core.suspend(() => loop);
      }
      return (0, _Function.pipe)(core.write(leftover), channel.zipRight(channel.identityChannel()));
    }), channel.unwrap),
    onFailure: core.fail,
    onDone: () => core.void
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(loop)));
});
/** @internal */
const dropWhile = exports.dropWhile = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const loop = core.readWith({
    onInput: input => {
      const output = Chunk.dropWhile(input, predicate);
      if (Chunk.isEmpty(output)) {
        return core.suspend(() => loop);
      }
      return channel.zipRight(core.write(output), channel.identityChannel());
    },
    onFailure: core.fail,
    onDone: core.succeedNow
  });
  return new StreamImpl(channel.pipeToOrFail(toChannel(self), loop));
});
/** @internal */
const dropWhileEffect = exports.dropWhileEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const loop = core.readWith({
    onInput: input => (0, _Function.pipe)(Effect.dropWhile(input, predicate), Effect.map(Chunk.unsafeFromArray), Effect.map(leftover => {
      const more = Chunk.isEmpty(leftover);
      if (more) {
        return core.suspend(() => loop);
      }
      return channel.zipRight(core.write(leftover), channel.identityChannel());
    }), channel.unwrap),
    onFailure: core.fail,
    onDone: () => core.void
  });
  return new StreamImpl(channel.pipeToOrFail(toChannel(self), loop));
});
/** @internal */
const either = self => (0, _Function.pipe)(self, map(Either.right), catchAll(error => make(Either.left(error))));
/** @internal */
exports.either = either;
const empty = exports.empty = /*#__PURE__*/new StreamImpl(core.void);
/** @internal */
const ensuring = exports.ensuring = /*#__PURE__*/(0, _Function.dual)(2, (self, finalizer) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.ensuring(finalizer))));
/** @internal */
const ensuringWith = exports.ensuringWith = /*#__PURE__*/(0, _Function.dual)(2, (self, finalizer) => new StreamImpl(core.ensuringWith(toChannel(self), finalizer)));
/** @internal */
const context = () => fromEffect(Effect.context());
/** @internal */
exports.context = context;
const contextWith = f => (0, _Function.pipe)(context(), map(f));
/** @internal */
exports.contextWith = contextWith;
const contextWithEffect = f => (0, _Function.pipe)(context(), mapEffectSequential(f));
/** @internal */
exports.contextWithEffect = contextWithEffect;
const contextWithStream = f => (0, _Function.pipe)(context(), flatMap(f));
/** @internal */
exports.contextWithStream = contextWithStream;
const execute = effect => drain(fromEffect(effect));
/** @internal */
exports.execute = execute;
const fail = error => fromEffectOption(Effect.fail(Option.some(error)));
/** @internal */
exports.fail = fail;
const failSync = evaluate => fromEffectOption(Effect.failSync(() => Option.some(evaluate())));
/** @internal */
exports.failSync = failSync;
const failCause = cause => fromEffect(Effect.failCause(cause));
/** @internal */
exports.failCause = failCause;
const failCauseSync = evaluate => fromEffect(Effect.failCauseSync(evaluate));
/** @internal */
exports.failCauseSync = failCauseSync;
const filter = exports.filter = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => mapChunks(self, Chunk.filter(predicate)));
/** @internal */
const filterEffect = exports.filterEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const loop = iterator => {
    const next = iterator.next();
    if (next.done) {
      return core.readWithCause({
        onInput: input => loop(input[Symbol.iterator]()),
        onFailure: core.failCause,
        onDone: core.succeed
      });
    } else {
      return (0, _Function.pipe)(f(next.value), Effect.map(bool => bool ? (0, _Function.pipe)(core.write(Chunk.of(next.value)), core.flatMap(() => loop(iterator))) : loop(iterator)), channel.unwrap);
    }
  };
  return new StreamImpl(core.suspend(() => (0, _Function.pipe)(toChannel(self), core.pipeTo(loop(Chunk.empty()[Symbol.iterator]())))));
});
/** @internal */
const filterMap = exports.filterMap = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => mapChunks(self, Chunk.filterMap(pf)));
/** @internal */
const filterMapEffect = exports.filterMapEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => suspend(() => {
  const loop = iterator => {
    const next = iterator.next();
    if (next.done) {
      return core.readWithCause({
        onInput: input => loop(input[Symbol.iterator]()),
        onFailure: core.failCause,
        onDone: core.succeed
      });
    } else {
      return (0, _Function.pipe)(pf(next.value), Option.match({
        onNone: () => Effect.sync(() => loop(iterator)),
        onSome: Effect.map(a2 => core.flatMap(core.write(Chunk.of(a2)), () => loop(iterator)))
      }), channel.unwrap);
    }
  };
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(loop(Chunk.empty()[Symbol.iterator]()))));
}));
/** @internal */
const filterMapWhile = exports.filterMapWhile = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => {
  const loop = core.readWith({
    onInput: input => {
      const mapped = Chunk.filterMapWhile(input, pf);
      if (mapped.length === input.length) {
        return (0, _Function.pipe)(core.write(mapped), core.flatMap(() => loop));
      }
      return core.write(mapped);
    },
    onFailure: core.fail,
    onDone: core.succeed
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(loop)));
});
/** @internal */
const filterMapWhileEffect = exports.filterMapWhileEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => suspend(() => {
  const loop = iterator => {
    const next = iterator.next();
    if (next.done) {
      return core.readWithCause({
        onInput: input => loop(input[Symbol.iterator]()),
        onFailure: core.failCause,
        onDone: core.succeed
      });
    } else {
      return channel.unwrap(Option.match(pf(next.value), {
        onNone: () => Effect.succeed(core.void),
        onSome: Effect.map(a2 => core.flatMap(core.write(Chunk.of(a2)), () => loop(iterator)))
      }));
    }
  };
  return new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(loop(Chunk.empty()[Symbol.iterator]()))));
}));
/** @internal */
const finalizer = finalizer => acquireRelease(Effect.void, () => finalizer);
/** @internal */
exports.finalizer = finalizer;
const find = exports.find = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const loop = core.readWith({
    onInput: input => Option.match(Chunk.findFirst(input, predicate), {
      onNone: () => loop,
      onSome: n => core.write(Chunk.of(n))
    }),
    onFailure: core.fail,
    onDone: () => core.void
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(loop)));
});
/** @internal */
const findEffect = exports.findEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const loop = core.readWith({
    onInput: input => (0, _Function.pipe)(Effect.findFirst(input, predicate), Effect.map(Option.match({
      onNone: () => loop,
      onSome: n => core.write(Chunk.of(n))
    })), channel.unwrap),
    onFailure: core.fail,
    onDone: () => core.void
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(loop)));
});
/** @internal */
const flatMap = exports.flatMap = /*#__PURE__*/(0, _Function.dual)(args => isStream(args[0]), (self, f, options) => {
  const bufferSize = options?.bufferSize ?? 16;
  if (options?.switch) {
    return matchConcurrency(options?.concurrency, () => flatMapParSwitchBuffer(self, 1, bufferSize, f), n => flatMapParSwitchBuffer(self, n, bufferSize, f));
  }
  return matchConcurrency(options?.concurrency, () => new StreamImpl(channel.concatMap(toChannel(self), as => (0, _Function.pipe)(as, Chunk.map(a => toChannel(f(a))), Chunk.reduce(core.void, (left, right) => (0, _Function.pipe)(left, channel.zipRight(right)))))), _ => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.concatMap(channel.writeChunk), channel.mergeMap(out => toChannel(f(out)), options))));
});
/** @internal */
const matchConcurrency = (concurrency, sequential, bounded) => {
  switch (concurrency) {
    case undefined:
      return sequential();
    case "unbounded":
      return bounded(Number.MAX_SAFE_INTEGER);
    default:
      return concurrency > 1 ? bounded(concurrency) : sequential();
  }
};
exports.matchConcurrency = matchConcurrency;
const flatMapParSwitchBuffer = /*#__PURE__*/(0, _Function.dual)(4, (self, n, bufferSize, f) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.concatMap(channel.writeChunk), channel.mergeMap(out => toChannel(f(out)), {
  concurrency: n,
  mergeStrategy: MergeStrategy.BufferSliding(),
  bufferSize
}))));
/** @internal */
const flatten = exports.flatten = /*#__PURE__*/(0, _Function.dual)(args => isStream(args[0]), (self, options) => flatMap(self, _Function.identity, options));
/** @internal */
const flattenChunks = self => {
  const flatten = core.readWithCause({
    onInput: chunks => core.flatMap(channel.writeChunk(chunks), () => flatten),
    onFailure: core.failCause,
    onDone: () => core.void
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(flatten)));
};
/** @internal */
exports.flattenChunks = flattenChunks;
const flattenEffect = exports.flattenEffect = /*#__PURE__*/(0, _Function.dual)(args => isStream(args[0]), (self, options) => options?.unordered ? flatMap(self, a => fromEffect(a), {
  concurrency: options.concurrency
}) : matchConcurrency(options?.concurrency, () => mapEffectSequential(self, _Function.identity), n => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.concatMap(channel.writeChunk), channel.mapOutEffectPar(_Function.identity, n), channel.mapOut(Chunk.of)))));
/** @internal */
const flattenExitOption = self => {
  const processChunk = (chunk, cont) => {
    const [toEmit, rest] = (0, _Function.pipe)(chunk, Chunk.splitWhere(exit => !Exit.isSuccess(exit)));
    const next = (0, _Function.pipe)(Chunk.head(rest), Option.match({
      onNone: () => cont,
      onSome: Exit.match({
        onFailure: cause => Option.match(Cause.flipCauseOption(cause), {
          onNone: () => core.void,
          onSome: core.failCause
        }),
        onSuccess: () => core.void
      })
    }));
    return (0, _Function.pipe)(core.write((0, _Function.pipe)(toEmit, Chunk.filterMap(exit => Exit.isSuccess(exit) ? Option.some(exit.value) : Option.none()))), core.flatMap(() => next));
  };
  const process = core.readWithCause({
    onInput: chunk => processChunk(chunk, process),
    onFailure: cause => core.failCause(cause),
    onDone: () => core.void
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(process)));
};
/** @internal */
exports.flattenExitOption = flattenExitOption;
const flattenIterables = self => (0, _Function.pipe)(self, map(Chunk.fromIterable), flattenChunks);
/** @internal */
exports.flattenIterables = flattenIterables;
const flattenTake = self => flattenChunks(flattenExitOption((0, _Function.pipe)(self, map(take => take.exit))));
/** @internal */
exports.flattenTake = flattenTake;
const forever = self => new StreamImpl(channel.repeated(toChannel(self)));
/** @internal */
exports.forever = forever;
const fromAsyncIterable = (iterable, onError) => (0, _Function.pipe)(Effect.acquireRelease(Effect.sync(() => iterable[Symbol.asyncIterator]()), iterator => iterator.return ? Effect.promise(async () => iterator.return()) : Effect.void), Effect.map(iterator => repeatEffectOption((0, _Function.pipe)(Effect.tryPromise({
  try: async () => iterator.next(),
  catch: reason => Option.some(onError(reason))
}), Effect.flatMap(result => result.done ? Effect.fail(Option.none()) : Effect.succeed(result.value))))), unwrapScoped);
/** @internal */
exports.fromAsyncIterable = fromAsyncIterable;
const fromChannel = channel => new StreamImpl(channel);
/** @internal */
exports.fromChannel = fromChannel;
const toChannel = stream => {
  if ("channel" in stream) {
    return stream.channel;
  } else if (Effect.isEffect(stream)) {
    return toChannel(fromEffect(stream));
  } else {
    throw new TypeError(`Expected a Stream.`);
  }
};
/** @internal */
exports.toChannel = toChannel;
const fromChunk = chunk => new StreamImpl(Chunk.isEmpty(chunk) ? core.void : core.write(chunk));
/** @internal */
exports.fromChunk = fromChunk;
const fromChunkPubSub = (pubsub, options) => {
  if (options?.scoped) {
    const effect = Effect.map(PubSub.subscribe(pubsub), fromChunkQueue);
    return options.shutdown ? Effect.map(effect, ensuring(PubSub.shutdown(pubsub))) : effect;
  }
  const stream = flatMap(scoped(PubSub.subscribe(pubsub)), fromChunkQueue);
  return options?.shutdown ? ensuring(stream, PubSub.shutdown(pubsub)) : stream;
};
/** @internal */
exports.fromChunkPubSub = fromChunkPubSub;
const fromChunkQueue = (queue, options) => (0, _Function.pipe)(Queue.take(queue), Effect.catchAllCause(cause => (0, _Function.pipe)(Queue.isShutdown(queue), Effect.flatMap(isShutdown => isShutdown && Cause.isInterrupted(cause) ? pull.end() : pull.failCause(cause)))), repeatEffectChunkOption, options?.shutdown ? ensuring(Queue.shutdown(queue)) : _Function.identity);
/** @internal */
exports.fromChunkQueue = fromChunkQueue;
const fromChunks = (...chunks) => (0, _Function.pipe)(fromIterable(chunks), flatMap(fromChunk));
/** @internal */
exports.fromChunks = fromChunks;
const fromEffect = effect => (0, _Function.pipe)(effect, Effect.mapError(Option.some), fromEffectOption);
/** @internal */
exports.fromEffect = fromEffect;
const fromEffectOption = effect => new StreamImpl(channel.unwrap(Effect.match(effect, {
  onFailure: Option.match({
    onNone: () => core.void,
    onSome: core.fail
  }),
  onSuccess: a => core.write(Chunk.of(a))
})));
/** @internal */
exports.fromEffectOption = fromEffectOption;
const fromPubSub = (pubsub, options) => {
  const maxChunkSize = options?.maxChunkSize ?? DefaultChunkSize;
  if (options?.scoped) {
    const effect = Effect.map(PubSub.subscribe(pubsub), queue => fromQueue(queue, {
      maxChunkSize,
      shutdown: true
    }));
    return options.shutdown ? Effect.map(effect, ensuring(PubSub.shutdown(pubsub))) : effect;
  }
  const stream = flatMap(scoped(PubSub.subscribe(pubsub)), queue => fromQueue(queue, {
    maxChunkSize
  }));
  return options?.shutdown ? ensuring(stream, PubSub.shutdown(pubsub)) : stream;
};
/** @internal */
exports.fromPubSub = fromPubSub;
const fromTPubSub = pubsub => {
  return unwrapScoped(Effect.map(TPubSub.subscribeScoped(pubsub), queue => fromTQueue(queue)));
};
/** @internal */
exports.fromTPubSub = fromTPubSub;
const fromIterable = iterable => suspend(() => Chunk.isChunk(iterable) ? fromChunk(iterable) : fromIteratorSucceed(iterable[Symbol.iterator]()));
/** @internal */
exports.fromIterable = fromIterable;
const fromIterableEffect = effect => (0, _Function.pipe)(effect, Effect.map(fromIterable), unwrap);
/** @internal */
exports.fromIterableEffect = fromIterableEffect;
const fromIteratorSucceed = (iterator, maxChunkSize = DefaultChunkSize) => {
  return (0, _Function.pipe)(Effect.sync(() => {
    let builder = [];
    const loop = iterator => (0, _Function.pipe)(Effect.sync(() => {
      let next = iterator.next();
      if (maxChunkSize === 1) {
        if (next.done) {
          return core.void;
        }
        return (0, _Function.pipe)(core.write(Chunk.of(next.value)), core.flatMap(() => loop(iterator)));
      }
      builder = [];
      let count = 0;
      while (next.done === false) {
        builder.push(next.value);
        count = count + 1;
        if (count >= maxChunkSize) {
          break;
        }
        next = iterator.next();
      }
      if (count > 0) {
        return (0, _Function.pipe)(core.write(Chunk.unsafeFromArray(builder)), core.flatMap(() => loop(iterator)));
      }
      return core.void;
    }), channel.unwrap);
    return new StreamImpl(loop(iterator));
  }), unwrap);
};
/** @internal */
exports.fromIteratorSucceed = fromIteratorSucceed;
const fromPull = effect => (0, _Function.pipe)(effect, Effect.map(repeatEffectChunkOption), unwrapScoped);
/** @internal */
exports.fromPull = fromPull;
const fromQueue = (queue, options) => (0, _Function.pipe)(Queue.takeBetween(queue, 1, options?.maxChunkSize ?? DefaultChunkSize), Effect.catchAllCause(cause => (0, _Function.pipe)(Queue.isShutdown(queue), Effect.flatMap(isShutdown => isShutdown && Cause.isInterrupted(cause) ? pull.end() : pull.failCause(cause)))), repeatEffectChunkOption, options?.shutdown ? ensuring(Queue.shutdown(queue)) : _Function.identity);
/** @internal */
exports.fromQueue = fromQueue;
const fromTQueue = queue => (0, _Function.pipe)(TQueue.take(queue), Effect.map(Chunk.of), Effect.catchAllCause(cause => (0, _Function.pipe)(TQueue.isShutdown(queue), Effect.flatMap(isShutdown => isShutdown && Cause.isInterrupted(cause) ? pull.end() : pull.failCause(cause)))), repeatEffectChunkOption);
/** @internal */
exports.fromTQueue = fromTQueue;
const fromSchedule = schedule => (0, _Function.pipe)(Schedule.driver(schedule), Effect.map(driver => repeatEffectOption(driver.next(void 0))), unwrap);
/** @internal */
exports.fromSchedule = fromSchedule;
const fromReadableStream = (...args) => {
  const evaluate = args.length === 1 ? args[0].evaluate : args[0];
  const onError = args.length === 1 ? args[0].onError : args[1];
  const releaseLockOnEnd = args.length === 1 ? args[0].releaseLockOnEnd === true : false;
  return unwrapScoped(Effect.map(Effect.acquireRelease(Effect.sync(() => evaluate().getReader()), reader => releaseLockOnEnd ? Effect.sync(() => reader.releaseLock()) : Effect.promise(() => reader.cancel())), reader => repeatEffectOption(Effect.flatMap(Effect.tryPromise({
    try: () => reader.read(),
    catch: reason => Option.some(onError(reason))
  }), ({
    done,
    value
  }) => done ? Effect.fail(Option.none()) : Effect.succeed(value)))));
};
/** @internal */
exports.fromReadableStream = fromReadableStream;
const fromReadableStreamByob = (...args) => {
  const evaluate = args.length === 1 ? args[0].evaluate : args[0];
  const onError = args.length === 1 ? args[0].onError : args[1];
  const allocSize = (args.length === 1 ? args[0].bufferSize : args[2]) ?? 4096;
  const releaseLockOnEnd = args.length === 1 ? args[0].releaseLockOnEnd === true : false;
  return unwrapScoped(Effect.map(Effect.acquireRelease(Effect.sync(() => evaluate().getReader({
    mode: "byob"
  })), reader => releaseLockOnEnd ? Effect.sync(() => reader.releaseLock()) : Effect.promise(() => reader.cancel())), reader => catchAll(forever(readChunkStreamByobReader(reader, onError, allocSize)), error => error === EOF ? empty : fail(error))));
};
exports.fromReadableStreamByob = fromReadableStreamByob;
const EOF = /*#__PURE__*/Symbol.for("effect/Stream/EOF");
const readChunkStreamByobReader = (reader, onError, size) => {
  const buffer = new ArrayBuffer(size);
  return paginateEffect(0, offset => Effect.flatMap(Effect.tryPromise({
    try: () => reader.read(new Uint8Array(buffer, offset, buffer.byteLength - offset)),
    catch: reason => onError(reason)
  }), ({
    done,
    value
  }) => {
    if (done) {
      return Effect.fail(EOF);
    }
    const newOffset = offset + value.byteLength;
    return Effect.succeed([value, newOffset >= buffer.byteLength ? Option.none() : Option.some(newOffset)]);
  }));
};
/** @internal */
const groupAdjacentBy = exports.groupAdjacentBy = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const groupAdjacentByChunk = (state, chunk) => {
    if (Chunk.isEmpty(chunk)) {
      return [state, Chunk.empty()];
    }
    const builder = [];
    let from = 0;
    let until = 0;
    let key = undefined;
    let previousChunk = Chunk.empty();
    switch (state._tag) {
      case "Some":
        {
          const tuple = state.value;
          key = tuple[0];
          let loop = true;
          while (loop && until < chunk.length) {
            const input = Chunk.unsafeGet(chunk, until);
            const updatedKey = f(input);
            if (!Equal.equals(key, updatedKey)) {
              const previousChunk = tuple[1];
              const additionalChunk = Chunk.unsafeFromArray(Array.from(chunk).slice(from, until));
              const group = Chunk.appendAll(previousChunk, additionalChunk);
              builder.push([key, group]);
              key = updatedKey;
              from = until;
              loop = false;
            }
            until = until + 1;
          }
          if (loop) {
            previousChunk = tuple[1];
          }
          break;
        }
      case "None":
        {
          key = f(Chunk.unsafeGet(chunk, until));
          until = until + 1;
          break;
        }
    }
    while (until < chunk.length) {
      const input = Chunk.unsafeGet(chunk, until);
      const updatedKey = f(input);
      if (!Equal.equals(key, updatedKey)) {
        builder.push([key, Chunk.unsafeFromArray(Array.from(chunk).slice(from, until))]);
        key = updatedKey;
        from = until;
      }
      until = until + 1;
    }
    const nonEmptyChunk = Chunk.appendAll(previousChunk, Chunk.unsafeFromArray(Array.from(chunk).slice(from, until)));
    const output = Chunk.unsafeFromArray(builder);
    return [Option.some([key, nonEmptyChunk]), output];
  };
  const groupAdjacent = state => core.readWithCause({
    onInput: input => {
      const [updatedState, output] = groupAdjacentByChunk(state, input);
      return Chunk.isEmpty(output) ? groupAdjacent(updatedState) : core.flatMap(core.write(output), () => groupAdjacent(updatedState));
    },
    onFailure: cause => Option.match(state, {
      onNone: () => core.failCause(cause),
      onSome: output => core.flatMap(core.write(Chunk.of(output)), () => core.failCause(cause))
    }),
    onDone: done => Option.match(state, {
      onNone: () => core.succeedNow(done),
      onSome: output => core.flatMap(core.write(Chunk.of(output)), () => core.succeedNow(done))
    })
  });
  return new StreamImpl(channel.pipeToOrFail(toChannel(self), groupAdjacent(Option.none())));
});
/** @internal */
const grouped = exports.grouped = /*#__PURE__*/(0, _Function.dual)(2, (self, chunkSize) => (0, _Function.pipe)(self, rechunk(chunkSize), chunks));
/** @internal */
const groupedWithin = exports.groupedWithin = /*#__PURE__*/(0, _Function.dual)(3, (self, chunkSize, duration) => aggregateWithin(self, sink_.collectAllN(chunkSize), Schedule.spaced(duration)));
/** @internal */
const haltWhen = exports.haltWhen = /*#__PURE__*/(0, _Function.dual)(2, (self, effect) => {
  const writer = fiber => (0, _Function.pipe)(Fiber.poll(fiber), Effect.map(Option.match({
    onNone: () => core.readWith({
      onInput: input => core.flatMap(core.write(input), () => writer(fiber)),
      onFailure: core.fail,
      onDone: () => core.void
    }),
    onSome: Exit.match({
      onFailure: core.failCause,
      onSuccess: () => core.void
    })
  })), channel.unwrap);
  return new StreamImpl(channel.unwrapScopedWith(scope => effect.pipe(Effect.forkIn(scope), Effect.map(fiber => toChannel(self).pipe(core.pipeTo(writer(fiber)))))));
});
/** @internal */
const haltAfter = exports.haltAfter = /*#__PURE__*/(0, _Function.dual)(2, (self, duration) => (0, _Function.pipe)(self, haltWhen(Clock.sleep(duration))));
/** @internal */
const haltWhenDeferred = exports.haltWhenDeferred = /*#__PURE__*/(0, _Function.dual)(2, (self, deferred) => {
  const writer = (0, _Function.pipe)(Deferred.poll(deferred), Effect.map(Option.match({
    onNone: () => core.readWith({
      onInput: input => (0, _Function.pipe)(core.write(input), core.flatMap(() => writer)),
      onFailure: core.fail,
      onDone: () => core.void
    }),
    onSome: effect => channel.unwrap(Effect.match(effect, {
      onFailure: core.fail,
      onSuccess: () => core.void
    }))
  })), channel.unwrap);
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(writer)));
});
/** @internal */
const identityStream = () => new StreamImpl(channel.identityChannel());
/** @internal */
exports.identityStream = identityStream;
const interleave = exports.interleave = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => (0, _Function.pipe)(self, interleaveWith(that, forever(make(true, false)))));
/** @internal */
const interleaveWith = exports.interleaveWith = /*#__PURE__*/(0, _Function.dual)(3, (self, that, decider) => {
  const producer = handoff => core.readWithCause({
    onInput: value => core.flatMap(core.fromEffect(Handoff.offer(handoff, InternalTake.of(value))), () => producer(handoff)),
    onFailure: cause => core.fromEffect(Handoff.offer(handoff, InternalTake.failCause(cause))),
    onDone: () => core.fromEffect(Handoff.offer(handoff, InternalTake.end))
  });
  return new StreamImpl(channel.unwrapScopedWith(scope => (0, _Function.pipe)(Handoff.make(), Effect.zip(Handoff.make()), Effect.tap(([left]) => toChannel(self).pipe(channel.concatMap(channel.writeChunk), core.pipeTo(producer(left)), channelExecutor.runIn(scope), Effect.forkIn(scope))), Effect.tap(([_, right]) => toChannel(that).pipe(channel.concatMap(channel.writeChunk), core.pipeTo(producer(right)), channelExecutor.runIn(scope), Effect.forkIn(scope))), Effect.map(([left, right]) => {
    const process = (leftDone, rightDone) => core.readWithCause({
      onInput: bool => {
        if (bool && !leftDone) {
          return (0, _Function.pipe)(core.fromEffect(Handoff.take(left)), core.flatMap(InternalTake.match({
            onEnd: () => rightDone ? core.void : process(true, rightDone),
            onFailure: core.failCause,
            onSuccess: chunk => (0, _Function.pipe)(core.write(chunk), core.flatMap(() => process(leftDone, rightDone)))
          })));
        }
        if (!bool && !rightDone) {
          return (0, _Function.pipe)(core.fromEffect(Handoff.take(right)), core.flatMap(InternalTake.match({
            onEnd: () => leftDone ? core.void : process(leftDone, true),
            onFailure: core.failCause,
            onSuccess: chunk => (0, _Function.pipe)(core.write(chunk), core.flatMap(() => process(leftDone, rightDone)))
          })));
        }
        return process(leftDone, rightDone);
      },
      onFailure: core.failCause,
      onDone: () => core.void
    });
    return (0, _Function.pipe)(toChannel(decider), channel.concatMap(channel.writeChunk), core.pipeTo(process(false, false)));
  }))));
});
/** @internal */
const intersperse = exports.intersperse = /*#__PURE__*/(0, _Function.dual)(2, (self, element) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(core.suspend(() => {
  const writer = isFirst => core.readWithCause({
    onInput: chunk => {
      const builder = [];
      let flagResult = isFirst;
      for (const output of chunk) {
        if (flagResult) {
          flagResult = false;
          builder.push(output);
        } else {
          builder.push(element);
          builder.push(output);
        }
      }
      return (0, _Function.pipe)(core.write(Chunk.unsafeFromArray(builder)), core.flatMap(() => writer(flagResult)));
    },
    onFailure: core.failCause,
    onDone: () => core.void
  });
  return writer(true);
})))));
/** @internal */
const intersperseAffixes = exports.intersperseAffixes = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  end,
  middle,
  start
}) => (0, _Function.pipe)(make(start), concat((0, _Function.pipe)(self, intersperse(middle))), concat(make(end))));
/** @internal */
const interruptAfter = exports.interruptAfter = /*#__PURE__*/(0, _Function.dual)(2, (self, duration) => (0, _Function.pipe)(self, interruptWhen(Clock.sleep(duration))));
/** @internal */
const interruptWhen = exports.interruptWhen = /*#__PURE__*/(0, _Function.dual)(2, (self, effect) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.interruptWhen(effect))));
/** @internal */
const interruptWhenDeferred = exports.interruptWhenDeferred = /*#__PURE__*/(0, _Function.dual)(2, (self, deferred) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.interruptWhenDeferred(deferred))));
/** @internal */
const iterate = (value, next) => unfold(value, a => Option.some([a, next(a)]));
/** @internal */
exports.iterate = iterate;
const make = (...as) => fromIterable(as);
/** @internal */
exports.make = make;
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.mapOut(Chunk.map(f)))));
/** @internal */
const mapAccum = exports.mapAccum = /*#__PURE__*/(0, _Function.dual)(3, (self, s, f) => {
  const accumulator = s => core.readWith({
    onInput: input => {
      const [nextS, chunk] = Chunk.mapAccum(input, s, f);
      return core.flatMap(core.write(chunk), () => accumulator(nextS));
    },
    onFailure: core.fail,
    onDone: () => core.void
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(accumulator(s))));
});
/** @internal */
const mapAccumEffect = exports.mapAccumEffect = /*#__PURE__*/(0, _Function.dual)(3, (self, s, f) => suspend(() => {
  const accumulator = s => core.readWith({
    onInput: input => (0, _Function.pipe)(Effect.suspend(() => {
      const outputs = [];
      const emit = output => Effect.sync(() => {
        outputs.push(output);
      });
      return (0, _Function.pipe)(input, Effect.reduce(s, (s, a) => (0, _Function.pipe)(f(s, a), Effect.flatMap(([s, a]) => (0, _Function.pipe)(emit(a), Effect.as(s))))), Effect.match({
        onFailure: error => {
          if (outputs.length !== 0) {
            return channel.zipRight(core.write(Chunk.unsafeFromArray(outputs)), core.fail(error));
          }
          return core.fail(error);
        },
        onSuccess: s => core.flatMap(core.write(Chunk.unsafeFromArray(outputs)), () => accumulator(s))
      }));
    }), channel.unwrap),
    onFailure: core.fail,
    onDone: () => core.void
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(accumulator(s))));
}));
/** @internal */
const mapBoth = exports.mapBoth = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => (0, _Function.pipe)(self, mapError(options.onFailure), map(options.onSuccess)));
/** @internal */
const mapChunks = exports.mapChunks = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.mapOut(f))));
/** @internal */
const mapChunksEffect = exports.mapChunksEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.mapOutEffect(f))));
/** @internal */
const mapConcat = exports.mapConcat = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => (0, _Function.pipe)(self, mapConcatChunk(a => Chunk.fromIterable(f(a)))));
/** @internal */
const mapConcatChunk = exports.mapConcatChunk = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => (0, _Function.pipe)(self, mapChunks(Chunk.flatMap(f))));
/** @internal */
const mapConcatChunkEffect = exports.mapConcatChunkEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => (0, _Function.pipe)(self, mapEffectSequential(f), mapConcatChunk(_Function.identity)));
/** @internal */
const mapConcatEffect = exports.mapConcatEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => (0, _Function.pipe)(self, mapEffectSequential(a => (0, _Function.pipe)(f(a), Effect.map(Chunk.fromIterable))), mapConcatChunk(_Function.identity)));
/** @internal */
const mapEffectSequential = exports.mapEffectSequential = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const loop = iterator => {
    const next = iterator.next();
    if (next.done) {
      return core.readWithCause({
        onInput: elem => loop(elem[Symbol.iterator]()),
        onFailure: core.failCause,
        onDone: core.succeed
      });
    } else {
      const value = next.value;
      return channel.unwrap(Effect.map(f(value), a2 => core.flatMap(core.write(Chunk.of(a2)), () => loop(iterator))));
    }
  };
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(core.suspend(() => loop(Chunk.empty()[Symbol.iterator]())))));
});
/** @internal */
const mapEffectPar = exports.mapEffectPar = /*#__PURE__*/(0, _Function.dual)(3, (self, n, f) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.concatMap(channel.writeChunk), channel.mapOutEffectPar(f, n), channel.mapOut(Chunk.of))));
/** @internal */
const mapError = exports.mapError = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.mapError(f))));
/** @internal */
const mapErrorCause = exports.mapErrorCause = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.mapErrorCause(f))));
/** @internal */
const merge = exports.merge = /*#__PURE__*/(0, _Function.dual)(args => isStream(args[1]), (self, that, options) => mergeWith(self, that, {
  onSelf: _Function.identity,
  onOther: _Function.identity,
  haltStrategy: options?.haltStrategy
}));
/** @internal */
const mergeAll = exports.mergeAll = /*#__PURE__*/(0, _Function.dual)(args => Symbol.iterator in args[0], (streams, options) => flatten(fromIterable(streams), options));
/** @internal */
const mergeWithTag = exports.mergeWithTag = /*#__PURE__*/(0, _Function.dual)(2, (streams, options) => {
  const keys = Object.keys(streams);
  const values = keys.map(key => streams[key].pipe(map(value => ({
    _tag: key,
    value
  }))));
  return mergeAll(values, options);
});
/** @internal */
const mergeEither = exports.mergeEither = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => mergeWith(self, that, {
  onSelf: Either.left,
  onOther: Either.right
}));
/** @internal */
const mergeLeft = exports.mergeLeft = /*#__PURE__*/(0, _Function.dual)(2, (left, right) => (0, _Function.pipe)(left, merge(drain(right))));
/** @internal */
const mergeRight = exports.mergeRight = /*#__PURE__*/(0, _Function.dual)(2, (left, right) => (0, _Function.pipe)(drain(left), merge(right)));
/** @internal */
const mergeWith = exports.mergeWith = /*#__PURE__*/(0, _Function.dual)(3, (self, other, options) => {
  const strategy = options.haltStrategy ? haltStrategy.fromInput(options.haltStrategy) : HaltStrategy.Both;
  const handler = terminate => exit => terminate || !Exit.isSuccess(exit) ?
  // TODO: remove
  MergeDecision.Done(Effect.suspend(() => exit)) : MergeDecision.Await(exit => Effect.suspend(() => exit));
  return new StreamImpl(channel.mergeWith(toChannel(map(self, options.onSelf)), {
    other: toChannel(map(other, options.onOther)),
    onSelfDone: handler(strategy._tag === "Either" || strategy._tag === "Left"),
    onOtherDone: handler(strategy._tag === "Either" || strategy._tag === "Right")
  }));
});
/** @internal */
const mkString = self => run(self, sink_.mkString);
/** @internal */
exports.mkString = mkString;
const never = exports.never = /*#__PURE__*/fromEffect(Effect.never);
/** @internal */
const onEnd = exports.onEnd = /*#__PURE__*/(0, _Function.dual)(2, (self, effect) => concat(self, drain(fromEffect(effect))));
/** @internal */
const onError = exports.onError = /*#__PURE__*/(0, _Function.dual)(2, (self, cleanup) => (0, _Function.pipe)(self, catchAllCause(cause => fromEffect((0, _Function.pipe)(cleanup(cause), Effect.zipRight(Effect.failCause(cause)))))));
/** @internal */
const onDone = exports.onDone = /*#__PURE__*/(0, _Function.dual)(2, (self, cleanup) => new StreamImpl((0, _Function.pipe)(toChannel(self), core.ensuringWith(exit => Exit.isSuccess(exit) ? cleanup() : Effect.void))));
/** @internal */
const onStart = exports.onStart = /*#__PURE__*/(0, _Function.dual)(2, (self, effect) => unwrap(Effect.as(effect, self)));
/** @internal */
const orDie = self => (0, _Function.pipe)(self, orDieWith(_Function.identity));
/** @internal */
exports.orDie = orDie;
const orDieWith = exports.orDieWith = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.orDieWith(f))));
/** @internal */
const orElse = exports.orElse = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.orElse(() => toChannel(that())))));
/** @internal */
const orElseEither = exports.orElseEither = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => (0, _Function.pipe)(self, map(Either.left), orElse(() => (0, _Function.pipe)(that(), map(Either.right)))));
/** @internal */
const orElseFail = exports.orElseFail = /*#__PURE__*/(0, _Function.dual)(2, (self, error) => (0, _Function.pipe)(self, orElse(() => failSync(error))));
/** @internal */
const orElseIfEmpty = exports.orElseIfEmpty = /*#__PURE__*/(0, _Function.dual)(2, (self, element) => (0, _Function.pipe)(self, orElseIfEmptyChunk(() => Chunk.of(element()))));
/** @internal */
const orElseIfEmptyChunk = exports.orElseIfEmptyChunk = /*#__PURE__*/(0, _Function.dual)(2, (self, chunk) => (0, _Function.pipe)(self, orElseIfEmptyStream(() => new StreamImpl(core.write(chunk())))));
/** @internal */
const orElseIfEmptyStream = exports.orElseIfEmptyStream = /*#__PURE__*/(0, _Function.dual)(2, (self, stream) => {
  const writer = core.readWith({
    onInput: input => {
      if (Chunk.isEmpty(input)) {
        return core.suspend(() => writer);
      }
      return (0, _Function.pipe)(core.write(input), channel.zipRight(channel.identityChannel()));
    },
    onFailure: core.fail,
    onDone: () => core.suspend(() => toChannel(stream()))
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(writer)));
});
/** @internal */
const orElseSucceed = exports.orElseSucceed = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => (0, _Function.pipe)(self, orElse(() => sync(value))));
/** @internal */
const paginate = (s, f) => paginateChunk(s, s => {
  const page = f(s);
  return [Chunk.of(page[0]), page[1]];
});
/** @internal */
exports.paginate = paginate;
const paginateChunk = (s, f) => {
  const loop = s => {
    const page = f(s);
    return Option.match(page[1], {
      onNone: () => channel.zipRight(core.write(page[0]), core.void),
      onSome: s => core.flatMap(core.write(page[0]), () => loop(s))
    });
  };
  return new StreamImpl(core.suspend(() => loop(s)));
};
/** @internal */
exports.paginateChunk = paginateChunk;
const paginateChunkEffect = (s, f) => {
  const loop = s => channel.unwrap(Effect.map(f(s), ([chunk, option]) => Option.match(option, {
    onNone: () => channel.zipRight(core.write(chunk), core.void),
    onSome: s => core.flatMap(core.write(chunk), () => loop(s))
  })));
  return new StreamImpl(core.suspend(() => loop(s)));
};
/** @internal */
exports.paginateChunkEffect = paginateChunkEffect;
const paginateEffect = (s, f) => paginateChunkEffect(s, s => (0, _Function.pipe)(f(s), Effect.map(([a, s]) => [Chunk.of(a), s])));
/** @internal */
exports.paginateEffect = paginateEffect;
const peel = exports.peel = /*#__PURE__*/(0, _Function.dual)(2, (self, sink) => {
  const OP_EMIT = "Emit";
  const OP_HALT = "Halt";
  const OP_END = "End";
  return (0, _Function.pipe)(Deferred.make(), Effect.flatMap(deferred => (0, _Function.pipe)(Handoff.make(), Effect.map(handoff => {
    const consumer = sink_.foldSink(sink_.collectLeftover(sink), {
      onFailure: error => sink_.zipRight(sink_.fromEffect(Deferred.fail(deferred, error)), sink_.fail(error)),
      onSuccess: ([z, leftovers]) => {
        const loop = core.readWithCause({
          onInput: elements => core.flatMap(core.fromEffect(Handoff.offer(handoff, {
            _tag: OP_EMIT,
            elements
          })), () => loop),
          onFailure: cause => channel.zipRight(core.fromEffect(Handoff.offer(handoff, {
            _tag: OP_HALT,
            cause
          })), core.failCause(cause)),
          onDone: _ => channel.zipRight(core.fromEffect(Handoff.offer(handoff, {
            _tag: OP_END
          })), core.void)
        });
        return sink_.fromChannel((0, _Function.pipe)(core.fromEffect(Deferred.succeed(deferred, z)), channel.zipRight(core.fromEffect((0, _Function.pipe)(handoff, Handoff.offer({
          _tag: OP_EMIT,
          elements: leftovers
        })))), channel.zipRight(loop)));
      }
    });
    const producer = (0, _Function.pipe)(Handoff.take(handoff), Effect.map(signal => {
      switch (signal._tag) {
        case OP_EMIT:
          {
            return (0, _Function.pipe)(core.write(signal.elements), core.flatMap(() => producer));
          }
        case OP_HALT:
          {
            return core.failCause(signal.cause);
          }
        case OP_END:
          {
            return core.void;
          }
      }
    }), channel.unwrap);
    return (0, _Function.pipe)(self, tapErrorCause(cause => Deferred.failCause(deferred, cause)), run(consumer), Effect.forkScoped, Effect.zipRight(Deferred.await(deferred)), Effect.map(z => [z, new StreamImpl(producer)]));
  }))), Effect.flatten);
});
/** @internal */
const partition = exports.partition = /*#__PURE__*/(0, _Function.dual)(args => typeof args[1] === "function", (self, predicate, options) => partitionEither(self, a => Effect.succeed(predicate(a) ? Either.right(a) : Either.left(a)), options));
/** @internal */
const partitionEither = exports.partitionEither = /*#__PURE__*/(0, _Function.dual)(args => typeof args[1] === "function", (self, predicate, options) => (0, _Function.pipe)(mapEffectSequential(self, predicate), distributedWith({
  size: 2,
  maximumLag: options?.bufferSize ?? 16,
  decide: Either.match({
    onLeft: () => Effect.succeed(n => n === 0),
    onRight: () => Effect.succeed(n => n === 1)
  })
}), Effect.flatMap(([queue1, queue2]) => Effect.succeed([filterMap(flattenExitOption(fromQueue(queue1, {
  shutdown: true
})), _ => Either.match(_, {
  onLeft: Option.some,
  onRight: Option.none
})), filterMap(flattenExitOption(fromQueue(queue2, {
  shutdown: true
})), _ => Either.match(_, {
  onLeft: Option.none,
  onRight: Option.some
}))]))));
/** @internal */
const pipeThrough = exports.pipeThrough = /*#__PURE__*/(0, _Function.dual)(2, (self, sink) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(sink_.toChannel(sink)))));
/** @internal */
const pipeThroughChannel = exports.pipeThroughChannel = /*#__PURE__*/(0, _Function.dual)(2, (self, channel) => new StreamImpl(core.pipeTo(toChannel(self), channel)));
/** @internal */
const pipeThroughChannelOrFail = exports.pipeThroughChannelOrFail = /*#__PURE__*/(0, _Function.dual)(2, (self, chan) => new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(chan))));
/** @internal */
const prepend = exports.prepend = /*#__PURE__*/(0, _Function.dual)(2, (self, values) => new StreamImpl(channel.zipRight(core.write(values), toChannel(self))));
/** @internal */
const provideContext = exports.provideContext = /*#__PURE__*/(0, _Function.dual)(2, (self, context) => new StreamImpl((0, _Function.pipe)(toChannel(self), core.provideContext(context))));
/** @internal */
const provideSomeContext = exports.provideSomeContext = /*#__PURE__*/(0, _Function.dual)(2, (self, context) => mapInputContext(self, Context.merge(context)));
/** @internal */
const provideLayer = exports.provideLayer = /*#__PURE__*/(0, _Function.dual)(2, (self, layer) => new StreamImpl(channel.unwrapScopedWith(scope => Layer.buildWithScope(layer, scope).pipe(Effect.map(env => (0, _Function.pipe)(toChannel(self), core.provideContext(env)))))));
/** @internal */
const provideService = exports.provideService = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, resource) => provideServiceEffect(self, tag, Effect.succeed(resource)));
/** @internal */
const provideServiceEffect = exports.provideServiceEffect = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, effect) => provideServiceStream(self, tag, fromEffect(effect)));
/** @internal */
const provideServiceStream = exports.provideServiceStream = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, stream) => contextWithStream(env => flatMap(stream, service => (0, _Function.pipe)(self, provideContext(Context.add(env, tag, service))))));
/** @internal */
const mapInputContext = exports.mapInputContext = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => contextWithStream(env => (0, _Function.pipe)(self, provideContext(f(env)))));
/** @internal */
const provideSomeLayer = exports.provideSomeLayer = /*#__PURE__*/(0, _Function.dual)(2, (self, layer) =>
// @ts-expect-error
// @effect-diagnostics-next-line missingEffectContext:off
(0, _Function.pipe)(self, provideLayer((0, _Function.pipe)(Layer.context(), Layer.merge(layer)))));
/** @internal */
const range = (min, max, chunkSize = DefaultChunkSize) => suspend(() => {
  if (min > max) {
    return empty;
  }
  const go = (min, max, chunkSize) => {
    const remaining = max - min + 1;
    if (remaining > chunkSize) {
      return (0, _Function.pipe)(core.write(Chunk.range(min, min + chunkSize - 1)), core.flatMap(() => go(min + chunkSize, max, chunkSize)));
    }
    return core.write(Chunk.range(min, min + remaining - 1));
  };
  return new StreamImpl(go(min, max, chunkSize));
});
/** @internal */
exports.range = range;
const race = exports.race = /*#__PURE__*/(0, _Function.dual)(2, (left, right) => raceAll(left, right));
/** @internal */
const raceAll = (...streams) => Deferred.make().pipe(Effect.map(halt => {
  let winner = null;
  return mergeAll(streams.map((stream, index) => stream.pipe(takeWhile(() => {
    if (winner === null) {
      winner = index;
      Deferred.unsafeDone(halt, Exit.void);
      return true;
    }
    return winner === index;
  }), interruptWhen(Deferred.await(halt).pipe(Effect.flatMap(() => winner === index ? Effect.never : Effect.void))))), {
    concurrency: streams.length
  });
}), unwrap);
/** @internal */
exports.raceAll = raceAll;
const rechunk = exports.rechunk = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => suspend(() => {
  const target = Math.max(n, 1);
  const process = rechunkProcess(new StreamRechunker(target), target);
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(process)));
}));
/** @internal */
const rechunkProcess = (rechunker, target) => core.readWithCause({
  onInput: chunk => {
    if (chunk.length === target && rechunker.isEmpty()) {
      return core.flatMap(core.write(chunk), () => rechunkProcess(rechunker, target));
    }
    if (chunk.length > 0) {
      const chunks = [];
      let result = undefined;
      let index = 0;
      while (index < chunk.length) {
        while (index < chunk.length && result === undefined) {
          result = rechunker.write((0, _Function.pipe)(chunk, Chunk.unsafeGet(index)));
          index = index + 1;
        }
        if (result !== undefined) {
          chunks.push(result);
          result = undefined;
        }
      }
      return core.flatMap(channel.writeAll(...chunks), () => rechunkProcess(rechunker, target));
    }
    return core.suspend(() => rechunkProcess(rechunker, target));
  },
  onFailure: cause => channel.zipRight(rechunker.emitIfNotEmpty(), core.failCause(cause)),
  onDone: () => rechunker.emitIfNotEmpty()
});
class StreamRechunker {
  n;
  builder = [];
  pos = 0;
  constructor(n) {
    this.n = n;
  }
  isEmpty() {
    return this.pos === 0;
  }
  write(elem) {
    this.builder.push(elem);
    this.pos += 1;
    if (this.pos === this.n) {
      const result = Chunk.unsafeFromArray(this.builder);
      this.builder = [];
      this.pos = 0;
      return result;
    }
    return undefined;
  }
  emitIfNotEmpty() {
    if (this.pos !== 0) {
      return core.write(Chunk.unsafeFromArray(this.builder));
    }
    return core.void;
  }
}
/** @internal */
const refineOrDie = exports.refineOrDie = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => (0, _Function.pipe)(self, refineOrDieWith(pf, _Function.identity)));
/** @internal */
const refineOrDieWith = exports.refineOrDieWith = /*#__PURE__*/(0, _Function.dual)(3, (self, pf, f) => new StreamImpl(channel.catchAll(toChannel(self), error => Option.match(pf(error), {
  onNone: () => core.failCause(Cause.die(f(error))),
  onSome: core.fail
}))));
/** @internal */
const repeat = exports.repeat = /*#__PURE__*/(0, _Function.dual)(2, (self, schedule) => filterMap(repeatEither(self, schedule), _ => Either.match(_, {
  onLeft: Option.none,
  onRight: Option.some
})));
/** @internal */
const repeatEffect = effect => repeatEffectOption((0, _Function.pipe)(effect, Effect.mapError(Option.some)));
/** @internal */
exports.repeatEffect = repeatEffect;
const repeatEffectChunk = effect => repeatEffectChunkOption((0, _Function.pipe)(effect, Effect.mapError(Option.some)));
/** @internal */
exports.repeatEffectChunk = repeatEffectChunk;
const repeatEffectChunkOption = effect => unfoldChunkEffect(effect, effect => (0, _Function.pipe)(Effect.map(effect, chunk => Option.some([chunk, effect])), Effect.catchAll(Option.match({
  onNone: () => Effect.succeed(Option.none()),
  onSome: Effect.fail
}))));
/** @internal */
exports.repeatEffectChunkOption = repeatEffectChunkOption;
const repeatEffectOption = effect => repeatEffectChunkOption((0, _Function.pipe)(effect, Effect.map(Chunk.of)));
/** @internal */
exports.repeatEffectOption = repeatEffectOption;
const repeatEither = exports.repeatEither = /*#__PURE__*/(0, _Function.dual)(2, (self, schedule) => repeatWith(self, schedule, {
  onElement: a => Either.right(a),
  onSchedule: Either.left
}));
/** @internal */
const repeatElements = exports.repeatElements = /*#__PURE__*/(0, _Function.dual)(2, (self, schedule) => filterMap(repeatElementsWith(self, schedule, {
  onElement: a => Option.some(a),
  onSchedule: Option.none
}), _Function.identity));
/** @internal */
const repeatElementsWith = exports.repeatElementsWith = /*#__PURE__*/(0, _Function.dual)(3, (self, schedule, options) => {
  const driver = (0, _Function.pipe)(Schedule.driver(schedule), Effect.map(driver => {
    const feed = input => Option.match(Chunk.head(input), {
      onNone: () => loop,
      onSome: a => channel.zipRight(core.write(Chunk.of(options.onElement(a))), step((0, _Function.pipe)(input, Chunk.drop(1)), a))
    });
    const step = (input, a) => {
      const advance = (0, _Function.pipe)(driver.next(a), Effect.as((0, _Function.pipe)(core.write(Chunk.of(options.onElement(a))), core.flatMap(() => step(input, a)))));
      const reset = (0, _Function.pipe)(driver.last, Effect.orDie, Effect.flatMap(b => (0, _Function.pipe)(driver.reset, Effect.map(() => (0, _Function.pipe)(core.write(Chunk.of(options.onSchedule(b))), channel.zipRight(feed(input)))))));
      return (0, _Function.pipe)(advance, Effect.orElse(() => reset), channel.unwrap);
    };
    const loop = core.readWith({
      onInput: feed,
      onFailure: core.fail,
      onDone: () => core.void
    });
    return loop;
  }), channel.unwrap);
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(driver)));
});
/** @internal */
const repeatValue = value => new StreamImpl(channel.repeated(core.write(Chunk.of(value))));
/** @internal */
exports.repeatValue = repeatValue;
const repeatWith = exports.repeatWith = /*#__PURE__*/(0, _Function.dual)(3, (self, schedule, options) => {
  return (0, _Function.pipe)(Schedule.driver(schedule), Effect.map(driver => {
    const provideLastIterationInfo = provideServiceEffect(Schedule.CurrentIterationMetadata, Ref.get(driver.iterationMeta));
    const process = (0, _Function.pipe)(self, provideLastIterationInfo, map(options.onElement), toChannel);
    const loop = channel.unwrap(Effect.match(driver.next(void 0), {
      onFailure: () => core.void,
      onSuccess: output => core.flatMap(process, () => channel.zipRight(core.write(Chunk.of(options.onSchedule(output))), loop))
    }));
    return new StreamImpl(channel.zipRight(process, loop));
  }), unwrap);
});
const repeatWithSchedule = (value, schedule) => repeatEffectWithSchedule(Effect.succeed(value), schedule);
/** @internal */
const repeatEffectWithSchedule = (effect, schedule) => flatMap(fromEffect(Effect.zip(effect, Schedule.driver(schedule))), ([a, driver]) => {
  const provideLastIterationInfo = Effect.provideServiceEffect(Schedule.CurrentIterationMetadata, Ref.get(driver.iterationMeta));
  return concat(succeed(a), unfoldEffect(a, s => Effect.matchEffect(driver.next(s), {
    onFailure: Effect.succeed,
    onSuccess: () => Effect.map(provideLastIterationInfo(effect), nextA => Option.some([nextA, nextA]))
  })));
});
/** @internal */
exports.repeatEffectWithSchedule = repeatEffectWithSchedule;
const retry = exports.retry = /*#__PURE__*/(0, _Function.dual)(2, (self, policy) => Schedule.driver(policy).pipe(Effect.map(driver => {
  const provideLastIterationInfo = provideServiceEffect(Schedule.CurrentIterationMetadata, Ref.get(driver.iterationMeta));
  const loop = toChannel(provideLastIterationInfo(self)).pipe(channel.mapOutEffect(out => Effect.as(driver.reset, out)), channel.catchAll(error => driver.next(error).pipe(Effect.match({
    onFailure: () => core.fail(error),
    onSuccess: () => loop
  }), channel.unwrap)));
  return loop;
}), channel.unwrap, fromChannel));
/** @internal */
const withExecutionPlan = exports.withExecutionPlan = /*#__PURE__*/(0, _Function.dual)(args => isStream(args[0]), (self, policy, options) => suspend(() => {
  const preventFallbackOnPartialStream = options?.preventFallbackOnPartialStream ?? false;
  let i = 0;
  let lastError = Option.none();
  const loop = suspend(() => {
    const step = policy.steps[i++];
    if (!step) {
      return fail(Option.getOrThrow(lastError));
    }
    let nextStream = Context.isContext(step.provide) ? provideSomeContext(self, step.provide) : provideSomeLayer(self, step.provide);
    let receivedElements = false;
    if (Option.isSome(lastError)) {
      const error = lastError.value;
      let attempted = false;
      const wrapped = nextStream;
      // ensure the schedule is applied at least once
      nextStream = suspend(() => {
        if (attempted) return wrapped;
        attempted = true;
        return fail(error);
      });
      nextStream = scheduleDefectRefail(retry(nextStream, internalExecutionPlan.scheduleFromStep(step, false)));
    } else {
      const schedule = internalExecutionPlan.scheduleFromStep(step, true);
      nextStream = schedule ? scheduleDefectRefail(retry(nextStream, schedule)) : nextStream;
    }
    return catchAll(preventFallbackOnPartialStream ? mapChunks(nextStream, chunk => {
      receivedElements = true;
      return chunk;
    }) : nextStream, error => {
      if (preventFallbackOnPartialStream && receivedElements) {
        return fail(error);
      }
      lastError = Option.some(error);
      return loop;
    });
  });
  return loop;
}));
const scheduleDefectRefail = self => catchAllCause(self, cause => failCause(InternalSchedule.scheduleDefectRefailCause(cause)));
/** @internal */
const run = exports.run = /*#__PURE__*/(0, _Function.dual)(2, (self, sink) => toChannel(self).pipe(channel.pipeToOrFail(sink_.toChannel(sink)), channel.runDrain));
/** @internal */
const runCollect = self => run(self, sink_.collectAll());
/** @internal */
exports.runCollect = runCollect;
const runCount = self => run(self, sink_.count);
/** @internal */
exports.runCount = runCount;
const runDrain = self => run(self, sink_.drain);
/** @internal */
exports.runDrain = runDrain;
const runFold = exports.runFold = /*#__PURE__*/(0, _Function.dual)(3, (self, s, f) => runFoldWhile(self, s, _Function.constTrue, f));
/** @internal */
const runFoldEffect = exports.runFoldEffect = /*#__PURE__*/(0, _Function.dual)(3, (self, s, f) => runFoldWhileEffect(self, s, _Function.constTrue, f));
/** @internal */
const runFoldScoped = exports.runFoldScoped = /*#__PURE__*/(0, _Function.dual)(3, (self, s, f) => (0, _Function.pipe)(self, runFoldWhileScoped(s, _Function.constTrue, f)));
/** @internal */
const runFoldScopedEffect = exports.runFoldScopedEffect = /*#__PURE__*/(0, _Function.dual)(3, (self, s, f) => (0, _Function.pipe)(self, runFoldWhileScopedEffect(s, _Function.constTrue, f)));
/** @internal */
const runFoldWhile = exports.runFoldWhile = /*#__PURE__*/(0, _Function.dual)(4, (self, s, cont, f) => run(self, sink_.fold(s, cont, f)));
/** @internal */
const runFoldWhileEffect = exports.runFoldWhileEffect = /*#__PURE__*/(0, _Function.dual)(4, (self, s, cont, f) => run(self, sink_.foldEffect(s, cont, f)));
/** @internal */
const runFoldWhileScoped = exports.runFoldWhileScoped = /*#__PURE__*/(0, _Function.dual)(4, (self, s, cont, f) => (0, _Function.pipe)(self, runScoped(sink_.fold(s, cont, f))));
/** @internal */
const runFoldWhileScopedEffect = exports.runFoldWhileScopedEffect = /*#__PURE__*/(0, _Function.dual)(4, (self, s, cont, f) => (0, _Function.pipe)(self, runScoped(sink_.foldEffect(s, cont, f))));
/** @internal */
const runForEach = exports.runForEach = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => run(self, sink_.forEach(f)));
/** @internal */
const runForEachChunk = exports.runForEachChunk = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => run(self, sink_.forEachChunk(f)));
/** @internal */
const runForEachChunkScoped = exports.runForEachChunkScoped = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => (0, _Function.pipe)(self, runScoped(sink_.forEachChunk(f))));
/** @internal */
const runForEachScoped = exports.runForEachScoped = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => (0, _Function.pipe)(self, runScoped(sink_.forEach(f))));
/** @internal */
const runForEachWhile = exports.runForEachWhile = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => run(self, sink_.forEachWhile(f)));
/** @internal */
const runForEachWhileScoped = exports.runForEachWhileScoped = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => (0, _Function.pipe)(self, runScoped(sink_.forEachWhile(f))));
/** @internal */
const runHead = self => run(self, sink_.head());
/** @internal */
exports.runHead = runHead;
const runIntoPubSub = exports.runIntoPubSub = /*#__PURE__*/(0, _Function.dual)(2, (self, pubsub) => (0, _Function.pipe)(self, runIntoQueue(pubsub)));
/** @internal */
const runIntoPubSubScoped = exports.runIntoPubSubScoped = /*#__PURE__*/(0, _Function.dual)(2, (self, pubsub) => (0, _Function.pipe)(self, runIntoQueueScoped(pubsub)));
/** @internal */
const runIntoQueue = exports.runIntoQueue = /*#__PURE__*/(0, _Function.dual)(2, (self, queue) => (0, _Function.pipe)(self, runIntoQueueScoped(queue), Effect.scoped));
/** @internal */
const runIntoQueueElementsScoped = exports.runIntoQueueElementsScoped = /*#__PURE__*/(0, _Function.dual)(2, (self, queue) => {
  const writer = core.readWithCause({
    onInput: input => core.flatMap(core.fromEffect(Queue.offerAll(queue, Chunk.map(input, Exit.succeed))), () => writer),
    onFailure: cause => core.fromEffect(Queue.offer(queue, Exit.failCause(Cause.map(cause, Option.some)))),
    onDone: () => core.fromEffect(Queue.offer(queue, Exit.fail(Option.none())))
  });
  return (0, _Function.pipe)(core.pipeTo(toChannel(self), writer), channel.drain, channel.runScoped, Effect.asVoid);
});
/** @internal */
const runIntoQueueScoped = exports.runIntoQueueScoped = /*#__PURE__*/(0, _Function.dual)(2, (self, queue) => {
  const writer = core.readWithCause({
    onInput: input => core.flatMap(core.write(InternalTake.chunk(input)), () => writer),
    onFailure: cause => core.write(InternalTake.failCause(cause)),
    onDone: () => core.write(InternalTake.end)
  });
  return (0, _Function.pipe)(core.pipeTo(toChannel(self), writer), channel.mapOutEffect(take => Queue.offer(queue, take)), channel.drain, channel.runScoped, Effect.asVoid);
});
/** @internal */
const runLast = self => run(self, sink_.last());
/** @internal */
exports.runLast = runLast;
const runScoped = exports.runScoped = /*#__PURE__*/(0, _Function.dual)(2, (self, sink) => (0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(sink_.toChannel(sink)), channel.drain, channel.runScoped));
/** @internal */
const runSum = self => run(self, sink_.sum);
/** @internal */
exports.runSum = runSum;
const scan = exports.scan = /*#__PURE__*/(0, _Function.dual)(3, (self, s, f) => (0, _Function.pipe)(self, scanEffect(s, (s, a) => Effect.succeed(f(s, a)))));
/** @internal */
const scanReduce = exports.scanReduce = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => (0, _Function.pipe)(self, scanReduceEffect((a2, a) => Effect.succeed(f(a2, a)))));
/** @internal */
const scanReduceEffect = exports.scanReduceEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => (0, _Function.pipe)(self, mapAccumEffect(Option.none(), (option, a) => {
  switch (option._tag) {
    case "None":
      {
        return Effect.succeed([Option.some(a), a]);
      }
    case "Some":
      {
        return (0, _Function.pipe)(f(option.value, a), Effect.map(b => [Option.some(b), b]));
      }
  }
})));
/** @internal */
const schedule = exports.schedule = /*#__PURE__*/(0, _Function.dual)(2, (self, schedule) => filterMap(scheduleWith(self, schedule, {
  onElement: Option.some,
  onSchedule: Option.none
}), _Function.identity));
/** @internal */
const scheduleWith = exports.scheduleWith = /*#__PURE__*/(0, _Function.dual)(3, (self, schedule, options) => {
  const loop = (driver, iterator) => {
    const next = iterator.next();
    if (next.done) {
      return core.readWithCause({
        onInput: chunk => loop(driver, chunk[Symbol.iterator]()),
        onFailure: core.failCause,
        onDone: core.succeedNow
      });
    }
    return channel.unwrap(Effect.matchEffect(driver.next(next.value), {
      onFailure: () => (0, _Function.pipe)(driver.last, Effect.orDie, Effect.map(b => (0, _Function.pipe)(core.write(Chunk.make(options.onElement(next.value), options.onSchedule(b))), core.flatMap(() => loop(driver, iterator)))), Effect.zipLeft(driver.reset)),
      onSuccess: () => Effect.succeed((0, _Function.pipe)(core.write(Chunk.of(options.onElement(next.value))), core.flatMap(() => loop(driver, iterator))))
    }));
  };
  return new StreamImpl((0, _Function.pipe)(core.fromEffect(Schedule.driver(schedule)), core.flatMap(driver => (0, _Function.pipe)(toChannel(self), core.pipeTo(loop(driver, Chunk.empty()[Symbol.iterator]()))))));
});
/** @internal */
const scanEffect = exports.scanEffect = /*#__PURE__*/(0, _Function.dual)(3, (self, s, f) => new StreamImpl((0, _Function.pipe)(core.write(Chunk.of(s)), core.flatMap(() => toChannel((0, _Function.pipe)(self, mapAccumEffect(s, (s, a) => (0, _Function.pipe)(f(s, a), Effect.map(s => [s, s])))))))));
/** @internal */
const scoped = effect => new StreamImpl(channel.ensuring(channel.scoped((0, _Function.pipe)(effect, Effect.map(Chunk.of))), Effect.void));
/** @internal */
exports.scoped = scoped;
const scopedWith = f => new StreamImpl(channel.scopedWith(scope => f(scope).pipe(Effect.map(Chunk.of))));
/** @internal */
exports.scopedWith = scopedWith;
const some = self => (0, _Function.pipe)(self, mapError(Option.some), someOrFail(() => Option.none()));
/** @internal */
exports.some = some;
const someOrElse = exports.someOrElse = /*#__PURE__*/(0, _Function.dual)(2, (self, fallback) => (0, _Function.pipe)(self, map(Option.getOrElse(fallback))));
/** @internal */
const someOrFail = exports.someOrFail = /*#__PURE__*/(0, _Function.dual)(2, (self, error) => mapEffectSequential(self, Option.match({
  onNone: () => Effect.failSync(error),
  onSome: Effect.succeed
})));
/** @internal */
const sliding = exports.sliding = /*#__PURE__*/(0, _Function.dual)(2, (self, chunkSize) => slidingSize(self, chunkSize, 1));
/** @internal */
const slidingSize = exports.slidingSize = /*#__PURE__*/(0, _Function.dual)(3, (self, chunkSize, stepSize) => {
  if (chunkSize <= 0 || stepSize <= 0) {
    return die(new Cause.IllegalArgumentException("Invalid bounds - `chunkSize` and `stepSize` must be greater than zero"));
  }
  return new StreamImpl(core.suspend(() => {
    const queue = new _ringBuffer.RingBuffer(chunkSize);
    const emitOnStreamEnd = (queueSize, channelEnd) => {
      if (queueSize < chunkSize) {
        const items = queue.toChunk();
        const result = Chunk.isEmpty(items) ? Chunk.empty() : Chunk.of(items);
        return (0, _Function.pipe)(core.write(result), core.flatMap(() => channelEnd));
      }
      const lastEmitIndex = queueSize - (queueSize - chunkSize) % stepSize;
      if (lastEmitIndex === queueSize) {
        return channelEnd;
      }
      const leftovers = queueSize - (lastEmitIndex - chunkSize + stepSize);
      const lastItems = (0, _Function.pipe)(queue.toChunk(), Chunk.takeRight(leftovers));
      const result = Chunk.isEmpty(lastItems) ? Chunk.empty() : Chunk.of(lastItems);
      return (0, _Function.pipe)(core.write(result), core.flatMap(() => channelEnd));
    };
    const reader = queueSize => core.readWithCause({
      onInput: input => core.flatMap(core.write(Chunk.filterMap(input, (element, index) => {
        queue.put(element);
        const currentIndex = queueSize + index + 1;
        if (currentIndex < chunkSize || (currentIndex - chunkSize) % stepSize > 0) {
          return Option.none();
        }
        return Option.some(queue.toChunk());
      })), () => reader(queueSize + input.length)),
      onFailure: cause => emitOnStreamEnd(queueSize, core.failCause(cause)),
      onDone: () => emitOnStreamEnd(queueSize, core.void)
    });
    return (0, _Function.pipe)(toChannel(self), core.pipeTo(reader(0)));
  }));
});
/** @internal */
const split = exports.split = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const split = (leftovers, input) => {
    const [chunk, remaining] = (0, _Function.pipe)(leftovers, Chunk.appendAll(input), Chunk.splitWhere(predicate));
    if (Chunk.isEmpty(chunk) || Chunk.isEmpty(remaining)) {
      return loop((0, _Function.pipe)(chunk, Chunk.appendAll((0, _Function.pipe)(remaining, Chunk.drop(1)))));
    }
    return (0, _Function.pipe)(core.write(Chunk.of(chunk)), core.flatMap(() => split(Chunk.empty(), (0, _Function.pipe)(remaining, Chunk.drop(1)))));
  };
  const loop = leftovers => core.readWith({
    onInput: input => split(leftovers, input),
    onFailure: core.fail,
    onDone: () => {
      if (Chunk.isEmpty(leftovers)) {
        return core.void;
      }
      if (Option.isNone((0, _Function.pipe)(leftovers, Chunk.findFirst(predicate)))) {
        return channel.zipRight(core.write(Chunk.of(leftovers)), core.void);
      }
      return channel.zipRight(split(Chunk.empty(), leftovers), core.void);
    }
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(loop(Chunk.empty()))));
});
/** @internal */
const splitOnChunk = exports.splitOnChunk = /*#__PURE__*/(0, _Function.dual)(2, (self, delimiter) => {
  const next = (leftover, delimiterIndex) => core.readWithCause({
    onInput: inputChunk => {
      let buffer;
      const [carry, delimiterCursor] = (0, _Function.pipe)(inputChunk, Chunk.reduce([(0, _Function.pipe)(leftover, Option.getOrElse(() => Chunk.empty())), delimiterIndex], ([carry, delimiterCursor], a) => {
        const concatenated = (0, _Function.pipe)(carry, Chunk.append(a));
        if (delimiterCursor < delimiter.length && Equal.equals(a, (0, _Function.pipe)(delimiter, Chunk.unsafeGet(delimiterCursor)))) {
          if (delimiterCursor + 1 === delimiter.length) {
            if (buffer === undefined) {
              buffer = [];
            }
            buffer.push((0, _Function.pipe)(concatenated, Chunk.take(concatenated.length - delimiter.length)));
            return [Chunk.empty(), 0];
          }
          return [concatenated, delimiterCursor + 1];
        }
        return [concatenated, Equal.equals(a, (0, _Function.pipe)(delimiter, Chunk.unsafeGet(0))) ? 1 : 0];
      }));
      const output = buffer === undefined ? Chunk.empty() : Chunk.unsafeFromArray(buffer);
      return core.flatMap(core.write(output), () => next(Chunk.isNonEmpty(carry) ? Option.some(carry) : Option.none(), delimiterCursor));
    },
    onFailure: cause => Option.match(leftover, {
      onNone: () => core.failCause(cause),
      onSome: chunk => channel.zipRight(core.write(Chunk.of(chunk)), core.failCause(cause))
    }),
    onDone: done => Option.match(leftover, {
      onNone: () => core.succeed(done),
      onSome: chunk => channel.zipRight(core.write(Chunk.of(chunk)), core.succeed(done))
    })
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(next(Option.none(), 0))));
});
/** @internal */
const splitLines = self => pipeThroughChannel(self, channel.splitLines());
/** @internal */
exports.splitLines = splitLines;
const succeed = value => fromChunk(Chunk.of(value));
/** @internal */
exports.succeed = succeed;
const sync = evaluate => suspend(() => fromChunk(Chunk.of(evaluate())));
/** @internal */
exports.sync = sync;
const suspend = stream => new StreamImpl(core.suspend(() => toChannel(stream())));
/** @internal */
exports.suspend = suspend;
const take = exports.take = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  if (!Number.isInteger(n)) {
    return die(new Cause.IllegalArgumentException(`${n} must be an integer`));
  }
  const loop = n => core.readWith({
    onInput: input => {
      const taken = (0, _Function.pipe)(input, Chunk.take(Math.min(n, Number.POSITIVE_INFINITY)));
      const leftover = Math.max(0, n - taken.length);
      const more = leftover > 0;
      if (more) {
        return (0, _Function.pipe)(core.write(taken), core.flatMap(() => loop(leftover)));
      }
      return core.write(taken);
    },
    onFailure: core.fail,
    onDone: core.succeed
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(0 < n ? loop(n) : core.void)));
});
/** @internal */
const takeRight = exports.takeRight = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => {
  if (n <= 0) {
    return empty;
  }
  return new StreamImpl((0, _Function.pipe)(Effect.succeed(new _ringBuffer.RingBuffer(n)), Effect.map(queue => {
    const reader = core.readWith({
      onInput: input => {
        for (const element of input) {
          queue.put(element);
        }
        return reader;
      },
      onFailure: core.fail,
      onDone: () => (0, _Function.pipe)(core.write(queue.toChunk()), channel.zipRight(core.void))
    });
    return (0, _Function.pipe)(toChannel(self), core.pipeTo(reader));
  }), channel.unwrap));
});
/** @internal */
const takeUntil = exports.takeUntil = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const loop = core.readWith({
    onInput: input => {
      const taken = (0, _Function.pipe)(input, Chunk.takeWhile(a => !predicate(a)));
      const last = (0, _Function.pipe)(input, Chunk.drop(taken.length), Chunk.take(1));
      if (Chunk.isEmpty(last)) {
        return (0, _Function.pipe)(core.write(taken), core.flatMap(() => loop));
      }
      return core.write((0, _Function.pipe)(taken, Chunk.appendAll(last)));
    },
    onFailure: core.fail,
    onDone: core.succeed
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(loop)));
});
/** @internal */
const takeUntilEffect = exports.takeUntilEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const loop = iterator => {
    const next = iterator.next();
    if (next.done) {
      return core.readWithCause({
        onInput: elem => loop(elem[Symbol.iterator]()),
        onFailure: core.failCause,
        onDone: core.succeed
      });
    }
    return (0, _Function.pipe)(predicate(next.value), Effect.map(bool => bool ? core.write(Chunk.of(next.value)) : (0, _Function.pipe)(core.write(Chunk.of(next.value)), core.flatMap(() => loop(iterator)))), channel.unwrap);
  };
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(loop(Chunk.empty()[Symbol.iterator]()))));
});
/** @internal */
const takeWhile = exports.takeWhile = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => {
  const loop = core.readWith({
    onInput: input => {
      const taken = (0, _Function.pipe)(input, Chunk.takeWhile(predicate));
      const more = taken.length === input.length;
      if (more) {
        return (0, _Function.pipe)(core.write(taken), core.flatMap(() => loop));
      }
      return core.write(taken);
    },
    onFailure: core.fail,
    onDone: core.succeed
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(loop)));
});
/** @internal */
const tap = exports.tap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => mapEffectSequential(self, a => Effect.as(f(a), a)));
/** @internal */
const tapBoth = exports.tapBoth = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => (0, _Function.pipe)(self, tapError(options.onFailure), tap(options.onSuccess)));
/** @internal */
const tapError = exports.tapError = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => catchAll(self, error => fromEffect(Effect.zipRight(f(error), Effect.fail(error)))));
/** @internal */
const tapErrorCause = exports.tapErrorCause = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const loop = core.readWithCause({
    onInput: chunk => core.flatMap(core.write(chunk), () => loop),
    onFailure: cause => core.fromEffect(Effect.zipRight(f(cause), Effect.failCause(cause))),
    onDone: core.succeedNow
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), core.pipeTo(loop)));
});
/** @internal */
const tapSink = exports.tapSink = /*#__PURE__*/(0, _Function.dual)(2, (self, sink) => (0, _Function.pipe)(fromEffect(Effect.all([Queue.bounded(1), Deferred.make()])), flatMap(([queue, deferred]) => {
  const right = flattenTake(fromQueue(queue, {
    maxChunkSize: 1
  }));
  const loop = core.readWithCause({
    onInput: chunk => (0, _Function.pipe)(core.fromEffect(Queue.offer(queue, InternalTake.chunk(chunk))), core.foldCauseChannel({
      onFailure: () => core.flatMap(core.write(chunk), () => channel.identityChannel()),
      onSuccess: () => core.flatMap(core.write(chunk), () => loop)
    })),
    onFailure: cause => (0, _Function.pipe)(core.fromEffect(Queue.offer(queue, InternalTake.failCause(cause))), core.foldCauseChannel({
      onFailure: () => core.failCause(cause),
      onSuccess: () => core.failCause(cause)
    })),
    onDone: () => (0, _Function.pipe)(core.fromEffect(Queue.offer(queue, InternalTake.end)), core.foldCauseChannel({
      onFailure: () => core.void,
      onSuccess: () => core.void
    }))
  });
  return (0, _Function.pipe)(new StreamImpl((0, _Function.pipe)(core.pipeTo(toChannel(self), loop), channel.ensuring(Effect.zipRight(Effect.forkDaemon(Queue.offer(queue, InternalTake.end)), Deferred.await(deferred))))), merge(execute((0, _Function.pipe)(run(right, sink), Effect.ensuring(Effect.zipRight(Queue.shutdown(queue), Deferred.succeed(deferred, void 0)))))));
})));
/** @internal */
const throttle = exports.throttle = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => throttleEffect(self, {
  ...options,
  cost: chunk => Effect.succeed(options.cost(chunk))
}));
/** @internal */
const throttleEffect = exports.throttleEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => {
  if (options.strategy === "enforce") {
    return throttleEnforceEffect(self, options.cost, options.units, options.duration, options.burst ?? 0);
  }
  return throttleShapeEffect(self, options.cost, options.units, options.duration, options.burst ?? 0);
});
const throttleEnforceEffect = (self, cost, units, duration, burst) => {
  const loop = (tokens, timestampMillis) => core.readWithCause({
    onInput: input => (0, _Function.pipe)(cost(input), Effect.zip(Clock.currentTimeMillis), Effect.map(([weight, currentTimeMillis]) => {
      const elapsed = currentTimeMillis - timestampMillis;
      const cycles = elapsed / Duration.toMillis(duration);
      const sum = tokens + cycles * units;
      const max = units + burst < 0 ? Number.POSITIVE_INFINITY : units + burst;
      const available = sum < 0 ? max : Math.min(sum, max);
      if (weight <= available) {
        return (0, _Function.pipe)(core.write(input), core.flatMap(() => loop(available - weight, currentTimeMillis)));
      }
      return loop(tokens, timestampMillis);
    }), channel.unwrap),
    onFailure: core.failCause,
    onDone: () => core.void
  });
  const throttled = (0, _Function.pipe)(Clock.currentTimeMillis, Effect.map(currentTimeMillis => loop(units, currentTimeMillis)), channel.unwrap);
  return new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(throttled)));
};
const throttleShapeEffect = (self, costFn, units, duration, burst) => {
  const loop = (tokens, timestampMillis) => core.readWithCause({
    onInput: input => (0, _Function.pipe)(costFn(input), Effect.zip(Clock.currentTimeMillis), Effect.map(([weight, currentTimeMillis]) => {
      const elapsed = currentTimeMillis - timestampMillis;
      const cycles = elapsed / Duration.toMillis(duration);
      const sum = tokens + cycles * units;
      const max = units + burst < 0 ? Number.POSITIVE_INFINITY : units + burst;
      const available = sum < 0 ? max : Math.min(sum, max);
      const remaining = available - weight;
      const waitCycles = remaining >= 0 ? 0 : -remaining / units;
      const delay = Duration.millis(Math.max(0, waitCycles * Duration.toMillis(duration)));
      if (Duration.greaterThan(delay, Duration.zero)) {
        return (0, _Function.pipe)(core.fromEffect(Clock.sleep(delay)), channel.zipRight(core.write(input)), core.flatMap(() => loop(remaining, currentTimeMillis)));
      }
      return core.flatMap(core.write(input), () => loop(remaining, currentTimeMillis));
    }), channel.unwrap),
    onFailure: core.failCause,
    onDone: () => core.void
  });
  const throttled = (0, _Function.pipe)(Clock.currentTimeMillis, Effect.map(currentTimeMillis => loop(units, currentTimeMillis)), channel.unwrap);
  return new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(throttled)));
};
/** @internal */
const tick = interval => repeatWithSchedule(void 0, Schedule.spaced(interval));
/** @internal */
exports.tick = tick;
const timeout = exports.timeout = /*#__PURE__*/(0, _Function.dual)(2, (self, duration) => (0, _Function.pipe)(toPull(self), Effect.map(Effect.timeoutFail({
  onTimeout: () => Option.none(),
  duration
})), fromPull));
/** @internal */
const timeoutFail = exports.timeoutFail = /*#__PURE__*/(0, _Function.dual)(3, (self, error, duration) => (0, _Function.pipe)(self, timeoutTo(duration, failSync(error))));
/** @internal */
const timeoutFailCause = exports.timeoutFailCause = /*#__PURE__*/(0, _Function.dual)(3, (self, cause, duration) => (0, _Function.pipe)(toPull(self), Effect.map(Effect.timeoutFailCause({
  onTimeout: () => Cause.map(cause(), Option.some),
  duration
})), fromPull));
/** @internal */
const timeoutTo = exports.timeoutTo = /*#__PURE__*/(0, _Function.dual)(3, (self, duration, that) => {
  const StreamTimeout = new Cause.RuntimeException("Stream Timeout");
  return (0, _Function.pipe)(self, timeoutFailCause(() => Cause.die(StreamTimeout), duration), catchSomeCause(cause => Cause.isDieType(cause) && Cause.isRuntimeException(cause.defect) && cause.defect.message !== undefined && cause.defect.message === "Stream Timeout" ? Option.some(that) : Option.none()));
});
const pubsubFromOptions = options => {
  if (typeof options === "number") {
    return PubSub.bounded(options);
  } else if (options.capacity === "unbounded") {
    return PubSub.unbounded({
      replay: options.replay
    });
  }
  switch (options.strategy) {
    case "dropping":
      return PubSub.dropping(options);
    case "sliding":
      return PubSub.sliding(options);
    default:
      return PubSub.bounded(options);
  }
};
/** @internal */
const toPubSub = exports.toPubSub = /*#__PURE__*/(0, _Function.dual)(2, (self, capacity) => (0, _Function.pipe)(Effect.acquireRelease(pubsubFromOptions(capacity), pubsub => PubSub.shutdown(pubsub)), Effect.tap(pubsub => (0, _Function.pipe)(self, runIntoPubSubScoped(pubsub), Effect.forkScoped))));
/** @internal */
const toPull = self => Effect.map(channel.toPull(toChannel(self)), pull => (0, _Function.pipe)(pull, Effect.mapError(Option.some), Effect.flatMap(Either.match({
  onLeft: () => Effect.fail(Option.none()),
  onRight: Effect.succeed
}))));
/** @internal */
exports.toPull = toPull;
const toQueue = exports.toQueue = /*#__PURE__*/(0, _Function.dual)(args => isStream(args[0]), (self, options) => Effect.tap(Effect.acquireRelease(options?.strategy === "unbounded" ? Queue.unbounded() : options?.strategy === "dropping" ? Queue.dropping(options.capacity ?? 2) : options?.strategy === "sliding" ? Queue.sliding(options.capacity ?? 2) : Queue.bounded(options?.capacity ?? 2), queue => Queue.shutdown(queue)), queue => Effect.forkScoped(runIntoQueueScoped(self, queue))));
/** @internal */
const toQueueOfElements = exports.toQueueOfElements = /*#__PURE__*/(0, _Function.dual)(args => isStream(args[0]), (self, options) => Effect.tap(Effect.acquireRelease(Queue.bounded(options?.capacity ?? 2), queue => Queue.shutdown(queue)), queue => Effect.forkScoped(runIntoQueueElementsScoped(self, queue))));
/** @internal */
const toReadableStream = exports.toReadableStream = /*#__PURE__*/(0, _Function.dual)(args => isStream(args[0]), (self, options) => toReadableStreamRuntime(self, Runtime.defaultRuntime, options));
/** @internal */
const toReadableStreamEffect = exports.toReadableStreamEffect = /*#__PURE__*/(0, _Function.dual)(args => isStream(args[0]), (self, options) => Effect.map(Effect.runtime(), runtime => toReadableStreamRuntime(self, runtime, options)));
/** @internal */
const toReadableStreamRuntime = exports.toReadableStreamRuntime = /*#__PURE__*/(0, _Function.dual)(args => isStream(args[0]), (self, runtime, options) => {
  const runFork = Runtime.runFork(runtime);
  let currentResolve = undefined;
  let fiber = undefined;
  const latch = Effect.unsafeMakeLatch(false);
  return new ReadableStream({
    start(controller) {
      fiber = runFork(runForEachChunk(self, chunk => {
        if (chunk.length === 0) return Effect.void;
        return latch.whenOpen(Effect.sync(() => {
          latch.unsafeClose();
          for (const item of chunk) {
            controller.enqueue(item);
          }
          currentResolve();
          currentResolve = undefined;
        }));
      }));
      fiber.addObserver(exit => {
        try {
          if (exit._tag === "Failure") {
            controller.error(Cause.squash(exit.cause));
          } else {
            controller.close();
          }
        } catch {
          // ignore
        }
      });
    },
    pull() {
      return new Promise(resolve => {
        currentResolve = resolve;
        Effect.runSync(latch.open);
      });
    },
    cancel() {
      if (!fiber) return;
      return Effect.runPromise(Effect.asVoid(Fiber.interrupt(fiber)));
    }
  }, options?.strategy);
});
/** @internal */
const transduce = exports.transduce = /*#__PURE__*/(0, _Function.dual)(2, (self, sink) => {
  const newChannel = core.suspend(() => {
    const leftovers = {
      ref: Chunk.empty()
    };
    const upstreamDone = {
      ref: false
    };
    const buffer = core.suspend(() => {
      const leftover = leftovers.ref;
      if (Chunk.isEmpty(leftover)) {
        return core.readWith({
          onInput: input => (0, _Function.pipe)(core.write(input), core.flatMap(() => buffer)),
          onFailure: core.fail,
          onDone: core.succeedNow
        });
      }
      leftovers.ref = Chunk.empty();
      return (0, _Function.pipe)(channel.writeChunk(leftover), core.flatMap(() => buffer));
    });
    const concatAndGet = chunk => {
      const leftover = leftovers.ref;
      const concatenated = Chunk.appendAll(leftover, Chunk.filter(chunk, chunk => chunk.length !== 0));
      leftovers.ref = concatenated;
      return concatenated;
    };
    const upstreamMarker = core.readWith({
      onInput: input => core.flatMap(core.write(input), () => upstreamMarker),
      onFailure: core.fail,
      onDone: done => channel.zipRight(core.sync(() => {
        upstreamDone.ref = true;
      }), core.succeedNow(done))
    });
    const transducer = (0, _Function.pipe)(sink, sink_.toChannel, core.collectElements, core.flatMap(([leftover, z]) => (0, _Function.pipe)(core.succeed([upstreamDone.ref, concatAndGet(leftover)]), core.flatMap(([done, newLeftovers]) => {
      const nextChannel = done && Chunk.isEmpty(newLeftovers) ? core.void : transducer;
      return (0, _Function.pipe)(core.write(Chunk.of(z)), core.flatMap(() => nextChannel));
    }))));
    return (0, _Function.pipe)(toChannel(self), core.pipeTo(upstreamMarker), core.pipeTo(buffer), channel.pipeToOrFail(transducer));
  });
  return new StreamImpl(newChannel);
});
/** @internal */
const toAsyncIterableRuntime = exports.toAsyncIterableRuntime = /*#__PURE__*/(0, _Function.dual)(args => isStream(args[0]), (self, runtime) => {
  const runFork = Runtime.runFork(runtime);
  return {
    [Symbol.asyncIterator]() {
      let currentResolve = undefined;
      let currentReject = undefined;
      let fiber = undefined;
      const latch = Effect.unsafeMakeLatch(false);
      let returned = false;
      return {
        next() {
          if (!fiber) {
            fiber = runFork(runForEach(self, value => latch.whenOpen(Effect.sync(() => {
              latch.unsafeClose();
              currentResolve({
                done: false,
                value
              });
              currentResolve = currentReject = undefined;
            }))));
            fiber.addObserver(exit => {
              if (returned) return;
              fiber = Effect.runFork(latch.whenOpen(Effect.sync(() => {
                if (exit._tag === "Failure") {
                  currentReject(Cause.squash(exit.cause));
                } else {
                  currentResolve({
                    done: true,
                    value: void 0
                  });
                }
                currentResolve = currentReject = undefined;
              })));
            });
          }
          return new Promise((resolve, reject) => {
            currentResolve = resolve;
            currentReject = reject;
            latch.unsafeOpen();
          });
        },
        return() {
          returned = true;
          if (!fiber) return Promise.resolve({
            done: true,
            value: void 0
          });
          return Effect.runPromise(Effect.as(Fiber.interrupt(fiber), {
            done: true,
            value: void 0
          }));
        }
      };
    }
  };
});
/** @internal */
const toAsyncIterable = self => toAsyncIterableRuntime(self, Runtime.defaultRuntime);
/** @internal */
exports.toAsyncIterable = toAsyncIterable;
const toAsyncIterableEffect = self => Effect.map(Effect.runtime(), runtime => toAsyncIterableRuntime(self, runtime));
/** @internal */
exports.toAsyncIterableEffect = toAsyncIterableEffect;
const unfold = (s, f) => unfoldChunk(s, s => (0, _Function.pipe)(f(s), Option.map(([a, s]) => [Chunk.of(a), s])));
/** @internal */
exports.unfold = unfold;
const unfoldChunk = (s, f) => {
  const loop = s => Option.match(f(s), {
    onNone: () => core.void,
    onSome: ([chunk, s]) => core.flatMap(core.write(chunk), () => loop(s))
  });
  return new StreamImpl(core.suspend(() => loop(s)));
};
/** @internal */
exports.unfoldChunk = unfoldChunk;
const unfoldChunkEffect = (s, f) => suspend(() => {
  const loop = s => channel.unwrap(Effect.map(f(s), Option.match({
    onNone: () => core.void,
    onSome: ([chunk, s]) => core.flatMap(core.write(chunk), () => loop(s))
  })));
  return new StreamImpl(loop(s));
});
/** @internal */
exports.unfoldChunkEffect = unfoldChunkEffect;
const unfoldEffect = (s, f) => unfoldChunkEffect(s, s => (0, _Function.pipe)(f(s), Effect.map(Option.map(([a, s]) => [Chunk.of(a), s]))));
exports.unfoldEffect = unfoldEffect;
const void_ = exports.void = /*#__PURE__*/succeed(void 0);
/** @internal */
const unwrap = effect => flatten(fromEffect(effect));
/** @internal */
exports.unwrap = unwrap;
const unwrapScoped = effect => flatten(scoped(effect));
/** @internal */
exports.unwrapScoped = unwrapScoped;
const unwrapScopedWith = f => flatten(scopedWith(scope => f(scope)));
/** @internal */
exports.unwrapScopedWith = unwrapScopedWith;
const updateService = exports.updateService = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, f) => (0, _Function.pipe)(self, mapInputContext(context => (0, _Function.pipe)(context, Context.add(tag, f((0, _Function.pipe)(context, Context.unsafeGet(tag))))))));
/** @internal */
const when = exports.when = /*#__PURE__*/(0, _Function.dual)(2, (self, test) => (0, _Function.pipe)(self, whenEffect(Effect.sync(test))));
/** @internal */
const whenCase = (evaluate, pf) => whenCaseEffect(pf)(Effect.sync(evaluate));
/** @internal */
exports.whenCase = whenCase;
const whenCaseEffect = exports.whenCaseEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => (0, _Function.pipe)(fromEffect(self), flatMap(a => (0, _Function.pipe)(pf(a), Option.getOrElse(() => empty)))));
/** @internal */
const whenEffect = exports.whenEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, effect) => (0, _Function.pipe)(fromEffect(effect), flatMap(bool => bool ? self : empty)));
/** @internal */
const withSpan = function () {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const options = InternalTracer.addSpanStackTrace(dataFirst ? arguments[2] : arguments[1]);
  if (dataFirst) {
    const self = arguments[0];
    return new StreamImpl(channel.withSpan(toChannel(self), name, options));
  }
  return self => new StreamImpl(channel.withSpan(toChannel(self), name, options));
};
/** @internal */
exports.withSpan = withSpan;
const zip = exports.zip = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => (0, _Function.pipe)(self, zipWith(that, (a, a2) => [a, a2])));
/** @internal */
const zipFlatten = exports.zipFlatten = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => (0, _Function.pipe)(self, zipWith(that, (a, a2) => [...a, a2])));
/** @internal */
const zipAll = exports.zipAll = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => zipAllWith(self, {
  other: options.other,
  onSelf: a => [a, options.defaultOther],
  onOther: a2 => [options.defaultSelf, a2],
  onBoth: (a, a2) => [a, a2]
}));
/** @internal */
const zipAllLeft = exports.zipAllLeft = /*#__PURE__*/(0, _Function.dual)(3, (self, other, defaultSelf) => zipAllWith(self, {
  other,
  onSelf: _Function.identity,
  onOther: () => defaultSelf,
  onBoth: a => a
}));
/** @internal */
const zipAllRight = exports.zipAllRight = /*#__PURE__*/(0, _Function.dual)(3, (self, other, defaultRight) => zipAllWith(self, {
  other,
  onSelf: () => defaultRight,
  onOther: _Function.identity,
  onBoth: (_, a2) => a2
}));
/** @internal */
const zipAllSortedByKey = exports.zipAllSortedByKey = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => zipAllSortedByKeyWith(self, {
  other: options.other,
  onSelf: a => [a, options.defaultOther],
  onOther: a2 => [options.defaultSelf, a2],
  onBoth: (a, a2) => [a, a2],
  order: options.order
}));
/** @internal */
const zipAllSortedByKeyLeft = exports.zipAllSortedByKeyLeft = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => zipAllSortedByKeyWith(self, {
  other: options.other,
  onSelf: _Function.identity,
  onOther: () => options.defaultSelf,
  onBoth: a => a,
  order: options.order
}));
/** @internal */
const zipAllSortedByKeyRight = exports.zipAllSortedByKeyRight = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => zipAllSortedByKeyWith(self, {
  other: options.other,
  onSelf: () => options.defaultOther,
  onOther: _Function.identity,
  onBoth: (_, a2) => a2,
  order: options.order
}));
/** @internal */
const zipAllSortedByKeyWith = exports.zipAllSortedByKeyWith = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => {
  const pull = (state, pullLeft, pullRight) => {
    switch (state._tag) {
      case ZipAllState.OP_DRAIN_LEFT:
        {
          return (0, _Function.pipe)(pullLeft, Effect.match({
            onFailure: Exit.fail,
            onSuccess: leftChunk => Exit.succeed([Chunk.map(leftChunk, ([k, a]) => [k, options.onSelf(a)]), ZipAllState.DrainLeft])
          }));
        }
      case ZipAllState.OP_DRAIN_RIGHT:
        {
          return (0, _Function.pipe)(pullRight, Effect.match({
            onFailure: Exit.fail,
            onSuccess: rightChunk => Exit.succeed([Chunk.map(rightChunk, ([k, a2]) => [k, options.onOther(a2)]), ZipAllState.DrainRight])
          }));
        }
      case ZipAllState.OP_PULL_BOTH:
        {
          return (0, _Function.pipe)(unsome(pullLeft), Effect.zip(unsome(pullRight), {
            concurrent: true
          }), Effect.matchEffect({
            onFailure: error => Effect.succeed(Exit.fail(Option.some(error))),
            onSuccess: ([leftOption, rightOption]) => {
              if (Option.isSome(leftOption) && Option.isSome(rightOption)) {
                if (Chunk.isEmpty(leftOption.value) && Chunk.isEmpty(rightOption.value)) {
                  return pull(ZipAllState.PullBoth, pullLeft, pullRight);
                }
                if (Chunk.isEmpty(leftOption.value)) {
                  return pull(ZipAllState.PullLeft(rightOption.value), pullLeft, pullRight);
                }
                if (Chunk.isEmpty(rightOption.value)) {
                  return pull(ZipAllState.PullRight(leftOption.value), pullLeft, pullRight);
                }
                return Effect.succeed(Exit.succeed(merge(leftOption.value, rightOption.value)));
              }
              if (Option.isSome(leftOption) && Option.isNone(rightOption)) {
                if (Chunk.isEmpty(leftOption.value)) {
                  return pull(ZipAllState.DrainLeft, pullLeft, pullRight);
                }
                return Effect.succeed(Exit.succeed([(0, _Function.pipe)(leftOption.value, Chunk.map(([k, a]) => [k, options.onSelf(a)])), ZipAllState.DrainLeft]));
              }
              if (Option.isNone(leftOption) && Option.isSome(rightOption)) {
                if (Chunk.isEmpty(rightOption.value)) {
                  return pull(ZipAllState.DrainRight, pullLeft, pullRight);
                }
                return Effect.succeed(Exit.succeed([(0, _Function.pipe)(rightOption.value, Chunk.map(([k, a2]) => [k, options.onOther(a2)])), ZipAllState.DrainRight]));
              }
              return Effect.succeed(Exit.fail(Option.none()));
            }
          }));
        }
      case ZipAllState.OP_PULL_LEFT:
        {
          return Effect.matchEffect(pullLeft, {
            onFailure: Option.match({
              onNone: () => Effect.succeed(Exit.succeed([(0, _Function.pipe)(state.rightChunk, Chunk.map(([k, a2]) => [k, options.onOther(a2)])), ZipAllState.DrainRight])),
              onSome: error => Effect.succeed(Exit.fail(Option.some(error)))
            }),
            onSuccess: leftChunk => Chunk.isEmpty(leftChunk) ? pull(ZipAllState.PullLeft(state.rightChunk), pullLeft, pullRight) : Effect.succeed(Exit.succeed(merge(leftChunk, state.rightChunk)))
          });
        }
      case ZipAllState.OP_PULL_RIGHT:
        {
          return Effect.matchEffect(pullRight, {
            onFailure: Option.match({
              onNone: () => Effect.succeed(Exit.succeed([Chunk.map(state.leftChunk, ([k, a]) => [k, options.onSelf(a)]), ZipAllState.DrainLeft])),
              onSome: error => Effect.succeed(Exit.fail(Option.some(error)))
            }),
            onSuccess: rightChunk => Chunk.isEmpty(rightChunk) ? pull(ZipAllState.PullRight(state.leftChunk), pullLeft, pullRight) : Effect.succeed(Exit.succeed(merge(state.leftChunk, rightChunk)))
          });
        }
    }
  };
  const merge = (leftChunk, rightChunk) => {
    const hasNext = (chunk, index) => index < chunk.length - 1;
    const builder = [];
    let state = undefined;
    let leftIndex = 0;
    let rightIndex = 0;
    let leftTuple = (0, _Function.pipe)(leftChunk, Chunk.unsafeGet(leftIndex));
    let rightTuple = (0, _Function.pipe)(rightChunk, Chunk.unsafeGet(rightIndex));
    let k1 = leftTuple[0];
    let a = leftTuple[1];
    let k2 = rightTuple[0];
    let a2 = rightTuple[1];
    let loop = true;
    while (loop) {
      const compare = options.order(k1, k2);
      if (compare === 0) {
        builder.push([k1, options.onBoth(a, a2)]);
        if (hasNext(leftChunk, leftIndex) && hasNext(rightChunk, rightIndex)) {
          leftIndex = leftIndex + 1;
          rightIndex = rightIndex + 1;
          leftTuple = (0, _Function.pipe)(leftChunk, Chunk.unsafeGet(leftIndex));
          rightTuple = (0, _Function.pipe)(rightChunk, Chunk.unsafeGet(rightIndex));
          k1 = leftTuple[0];
          a = leftTuple[1];
          k2 = rightTuple[0];
          a2 = rightTuple[1];
        } else if (hasNext(leftChunk, leftIndex)) {
          state = ZipAllState.PullRight((0, _Function.pipe)(leftChunk, Chunk.drop(leftIndex + 1)));
          loop = false;
        } else if (hasNext(rightChunk, rightIndex)) {
          state = ZipAllState.PullLeft((0, _Function.pipe)(rightChunk, Chunk.drop(rightIndex + 1)));
          loop = false;
        } else {
          state = ZipAllState.PullBoth;
          loop = false;
        }
      } else if (compare < 0) {
        builder.push([k1, options.onSelf(a)]);
        if (hasNext(leftChunk, leftIndex)) {
          leftIndex = leftIndex + 1;
          leftTuple = (0, _Function.pipe)(leftChunk, Chunk.unsafeGet(leftIndex));
          k1 = leftTuple[0];
          a = leftTuple[1];
        } else {
          const rightBuilder = [];
          rightBuilder.push(rightTuple);
          while (hasNext(rightChunk, rightIndex)) {
            rightIndex = rightIndex + 1;
            rightTuple = (0, _Function.pipe)(rightChunk, Chunk.unsafeGet(rightIndex));
            rightBuilder.push(rightTuple);
          }
          state = ZipAllState.PullLeft(Chunk.unsafeFromArray(rightBuilder));
          loop = false;
        }
      } else {
        builder.push([k2, options.onOther(a2)]);
        if (hasNext(rightChunk, rightIndex)) {
          rightIndex = rightIndex + 1;
          rightTuple = (0, _Function.pipe)(rightChunk, Chunk.unsafeGet(rightIndex));
          k2 = rightTuple[0];
          a2 = rightTuple[1];
        } else {
          const leftBuilder = [];
          leftBuilder.push(leftTuple);
          while (hasNext(leftChunk, leftIndex)) {
            leftIndex = leftIndex + 1;
            leftTuple = (0, _Function.pipe)(leftChunk, Chunk.unsafeGet(leftIndex));
            leftBuilder.push(leftTuple);
          }
          state = ZipAllState.PullRight(Chunk.unsafeFromArray(leftBuilder));
          loop = false;
        }
      }
    }
    return [Chunk.unsafeFromArray(builder), state];
  };
  return combineChunks(self, options.other, ZipAllState.PullBoth, pull);
});
/** @internal */
const zipAllWith = exports.zipAllWith = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => {
  const pull = (state, pullLeft, pullRight) => {
    switch (state._tag) {
      case ZipAllState.OP_DRAIN_LEFT:
        {
          return Effect.matchEffect(pullLeft, {
            onFailure: error => Effect.succeed(Exit.fail(error)),
            onSuccess: leftChunk => Effect.succeed(Exit.succeed([Chunk.map(leftChunk, options.onSelf), ZipAllState.DrainLeft]))
          });
        }
      case ZipAllState.OP_DRAIN_RIGHT:
        {
          return Effect.matchEffect(pullRight, {
            onFailure: error => Effect.succeed(Exit.fail(error)),
            onSuccess: rightChunk => Effect.succeed(Exit.succeed([Chunk.map(rightChunk, options.onOther), ZipAllState.DrainRight]))
          });
        }
      case ZipAllState.OP_PULL_BOTH:
        {
          return (0, _Function.pipe)(unsome(pullLeft), Effect.zip(unsome(pullRight), {
            concurrent: true
          }), Effect.matchEffect({
            onFailure: error => Effect.succeed(Exit.fail(Option.some(error))),
            onSuccess: ([leftOption, rightOption]) => {
              if (Option.isSome(leftOption) && Option.isSome(rightOption)) {
                if (Chunk.isEmpty(leftOption.value) && Chunk.isEmpty(rightOption.value)) {
                  return pull(ZipAllState.PullBoth, pullLeft, pullRight);
                }
                if (Chunk.isEmpty(leftOption.value)) {
                  return pull(ZipAllState.PullLeft(rightOption.value), pullLeft, pullRight);
                }
                if (Chunk.isEmpty(rightOption.value)) {
                  return pull(ZipAllState.PullRight(leftOption.value), pullLeft, pullRight);
                }
                return Effect.succeed(Exit.succeed(zip(leftOption.value, rightOption.value, options.onBoth)));
              }
              if (Option.isSome(leftOption) && Option.isNone(rightOption)) {
                return Effect.succeed(Exit.succeed([Chunk.map(leftOption.value, options.onSelf), ZipAllState.DrainLeft]));
              }
              if (Option.isNone(leftOption) && Option.isSome(rightOption)) {
                return Effect.succeed(Exit.succeed([Chunk.map(rightOption.value, options.onOther), ZipAllState.DrainRight]));
              }
              return Effect.succeed(Exit.fail(Option.none()));
            }
          }));
        }
      case ZipAllState.OP_PULL_LEFT:
        {
          return Effect.matchEffect(pullLeft, {
            onFailure: Option.match({
              onNone: () => Effect.succeed(Exit.succeed([Chunk.map(state.rightChunk, options.onOther), ZipAllState.DrainRight])),
              onSome: error => Effect.succeed(Exit.fail(Option.some(error)))
            }),
            onSuccess: leftChunk => {
              if (Chunk.isEmpty(leftChunk)) {
                return pull(ZipAllState.PullLeft(state.rightChunk), pullLeft, pullRight);
              }
              if (Chunk.isEmpty(state.rightChunk)) {
                return pull(ZipAllState.PullRight(leftChunk), pullLeft, pullRight);
              }
              return Effect.succeed(Exit.succeed(zip(leftChunk, state.rightChunk, options.onBoth)));
            }
          });
        }
      case ZipAllState.OP_PULL_RIGHT:
        {
          return Effect.matchEffect(pullRight, {
            onFailure: Option.match({
              onNone: () => Effect.succeed(Exit.succeed([Chunk.map(state.leftChunk, options.onSelf), ZipAllState.DrainLeft])),
              onSome: error => Effect.succeed(Exit.fail(Option.some(error)))
            }),
            onSuccess: rightChunk => {
              if (Chunk.isEmpty(rightChunk)) {
                return pull(ZipAllState.PullRight(state.leftChunk), pullLeft, pullRight);
              }
              if (Chunk.isEmpty(state.leftChunk)) {
                return pull(ZipAllState.PullLeft(rightChunk), pullLeft, pullRight);
              }
              return Effect.succeed(Exit.succeed(zip(state.leftChunk, rightChunk, options.onBoth)));
            }
          });
        }
    }
  };
  const zip = (leftChunk, rightChunk, f) => {
    const [output, either] = zipChunks(leftChunk, rightChunk, f);
    switch (either._tag) {
      case "Left":
        {
          if (Chunk.isEmpty(either.left)) {
            return [output, ZipAllState.PullBoth];
          }
          return [output, ZipAllState.PullRight(either.left)];
        }
      case "Right":
        {
          if (Chunk.isEmpty(either.right)) {
            return [output, ZipAllState.PullBoth];
          }
          return [output, ZipAllState.PullLeft(either.right)];
        }
    }
  };
  return combineChunks(self, options.other, ZipAllState.PullBoth, pull);
});
/** @internal */
const zipLatest = exports.zipLatest = /*#__PURE__*/(0, _Function.dual)(2, (left, right) => (0, _Function.pipe)(left, zipLatestWith(right, (a, a2) => [a, a2])));
const zipLatestAll = (...streams) => {
  if (streams.length === 0) {
    return empty;
  } else if (streams.length === 1) {
    return map(streams[0], x => [x]);
  }
  const [head, ...tail] = streams;
  return zipLatestWith(head, zipLatestAll(...tail), (first, second) => [first, ...second]);
};
/** @internal */
exports.zipLatestAll = zipLatestAll;
const zipLatestWith = exports.zipLatestWith = /*#__PURE__*/(0, _Function.dual)(3, (left, right, f) => {
  const pullNonEmpty = pull => (0, _Function.pipe)(pull, Effect.flatMap(chunk => Chunk.isEmpty(chunk) ? pullNonEmpty(pull) : Effect.succeed(chunk)));
  return (0, _Function.pipe)(toPull(left), Effect.map(pullNonEmpty), Effect.zip((0, _Function.pipe)(toPull(right), Effect.map(pullNonEmpty))), Effect.flatMap(([left, right]) => (0, _Function.pipe)(fromEffectOption(Effect.raceWith(left, right, {
    onSelfDone: (leftDone, rightFiber) => (0, _Function.pipe)(Effect.suspend(() => leftDone), Effect.zipWith(Fiber.join(rightFiber), (l, r) => [l, r, true])),
    onOtherDone: (rightDone, leftFiber) => (0, _Function.pipe)(Effect.suspend(() => rightDone), Effect.zipWith(Fiber.join(leftFiber), (l, r) => [r, l, false]))
  })), flatMap(([l, r, leftFirst]) => (0, _Function.pipe)(fromEffect(Ref.make([Chunk.unsafeLast(l), Chunk.unsafeLast(r)])), flatMap(latest => (0, _Function.pipe)(fromChunk(leftFirst ? (0, _Function.pipe)(r, Chunk.map(a2 => f(Chunk.unsafeLast(l), a2))) : (0, _Function.pipe)(l, Chunk.map(a => f(a, Chunk.unsafeLast(r))))), concat((0, _Function.pipe)(repeatEffectOption(left), mergeEither(repeatEffectOption(right)), mapEffectSequential(Either.match({
    onLeft: leftChunk => Ref.modify(latest, ([_, rightLatest]) => [(0, _Function.pipe)(leftChunk, Chunk.map(a => f(a, rightLatest))), [Chunk.unsafeLast(leftChunk), rightLatest]]),
    onRight: rightChunk => Ref.modify(latest, ([leftLatest, _]) => [(0, _Function.pipe)(rightChunk, Chunk.map(a2 => f(leftLatest, a2))), [leftLatest, Chunk.unsafeLast(rightChunk)]])
  })), flatMap(fromChunk))))))), toPull)), fromPull);
});
/** @internal */
const zipLeft = exports.zipLeft = /*#__PURE__*/(0, _Function.dual)(2, (left, right) => (0, _Function.pipe)(left, zipWithChunks(right, (left, right) => {
  if (left.length > right.length) {
    return [(0, _Function.pipe)(left, Chunk.take(right.length)), Either.left((0, _Function.pipe)(left, Chunk.take(right.length)))];
  }
  return [left, Either.right((0, _Function.pipe)(right, Chunk.drop(left.length)))];
})));
/** @internal */
const zipRight = exports.zipRight = /*#__PURE__*/(0, _Function.dual)(2, (left, right) => (0, _Function.pipe)(left, zipWithChunks(right, (left, right) => {
  if (left.length > right.length) {
    return [right, Either.left((0, _Function.pipe)(left, Chunk.take(right.length)))];
  }
  return [(0, _Function.pipe)(right, Chunk.take(left.length)), Either.right((0, _Function.pipe)(right, Chunk.drop(left.length)))];
})));
/** @internal */
const zipWith = exports.zipWith = /*#__PURE__*/(0, _Function.dual)(3, (left, right, f) => (0, _Function.pipe)(left, zipWithChunks(right, (leftChunk, rightChunk) => zipChunks(leftChunk, rightChunk, f))));
/** @internal */
const zipWithChunks = exports.zipWithChunks = /*#__PURE__*/(0, _Function.dual)(3, (self, that, f) => {
  const pull = (state, pullLeft, pullRight) => {
    switch (state._tag) {
      case ZipChunksState.OP_PULL_BOTH:
        {
          return (0, _Function.pipe)(unsome(pullLeft), Effect.zip(unsome(pullRight), {
            concurrent: true
          }), Effect.matchEffect({
            onFailure: error => Effect.succeed(Exit.fail(Option.some(error))),
            onSuccess: ([leftOption, rightOption]) => {
              if (Option.isSome(leftOption) && Option.isSome(rightOption)) {
                if (Chunk.isEmpty(leftOption.value) && Chunk.isEmpty(rightOption.value)) {
                  return pull(ZipChunksState.PullBoth, pullLeft, pullRight);
                }
                if (Chunk.isEmpty(leftOption.value)) {
                  return pull(ZipChunksState.PullLeft(rightOption.value), pullLeft, pullRight);
                }
                if (Chunk.isEmpty(rightOption.value)) {
                  return pull(ZipChunksState.PullRight(leftOption.value), pullLeft, pullRight);
                }
                return Effect.succeed(Exit.succeed(zip(leftOption.value, rightOption.value)));
              }
              return Effect.succeed(Exit.fail(Option.none()));
            }
          }));
        }
      case ZipChunksState.OP_PULL_LEFT:
        {
          return Effect.matchEffect(pullLeft, {
            onFailure: error => Effect.succeed(Exit.fail(error)),
            onSuccess: leftChunk => {
              if (Chunk.isEmpty(leftChunk)) {
                return pull(ZipChunksState.PullLeft(state.rightChunk), pullLeft, pullRight);
              }
              if (Chunk.isEmpty(state.rightChunk)) {
                return pull(ZipChunksState.PullRight(leftChunk), pullLeft, pullRight);
              }
              return Effect.succeed(Exit.succeed(zip(leftChunk, state.rightChunk)));
            }
          });
        }
      case ZipChunksState.OP_PULL_RIGHT:
        {
          return Effect.matchEffect(pullRight, {
            onFailure: error => Effect.succeed(Exit.fail(error)),
            onSuccess: rightChunk => {
              if (Chunk.isEmpty(rightChunk)) {
                return pull(ZipChunksState.PullRight(state.leftChunk), pullLeft, pullRight);
              }
              if (Chunk.isEmpty(state.leftChunk)) {
                return pull(ZipChunksState.PullLeft(rightChunk), pullLeft, pullRight);
              }
              return Effect.succeed(Exit.succeed(zip(state.leftChunk, rightChunk)));
            }
          });
        }
    }
  };
  const zip = (leftChunk, rightChunk) => {
    const [output, either] = f(leftChunk, rightChunk);
    switch (either._tag) {
      case "Left":
        {
          if (Chunk.isEmpty(either.left)) {
            return [output, ZipChunksState.PullBoth];
          }
          return [output, ZipChunksState.PullRight(either.left)];
        }
      case "Right":
        {
          if (Chunk.isEmpty(either.right)) {
            return [output, ZipChunksState.PullBoth];
          }
          return [output, ZipChunksState.PullLeft(either.right)];
        }
    }
  };
  return (0, _Function.pipe)(self, combineChunks(that, ZipChunksState.PullBoth, pull));
});
/** @internal */
const zipWithIndex = self => (0, _Function.pipe)(self, mapAccum(0, (index, a) => [index + 1, [a, index]]));
/** @internal */
exports.zipWithIndex = zipWithIndex;
const zipWithNext = self => {
  const process = last => core.readWithCause({
    onInput: input => {
      const [newLast, chunk] = Chunk.mapAccum(input, last, (prev, curr) => [Option.some(curr), (0, _Function.pipe)(prev, Option.map(a => [a, curr]))]);
      const output = Chunk.filterMap(chunk, option => Option.isSome(option) ? Option.some([option.value[0], Option.some(option.value[1])]) : Option.none());
      return core.flatMap(core.write(output), () => process(newLast));
    },
    onFailure: core.failCause,
    onDone: () => Option.match(last, {
      onNone: () => core.void,
      onSome: value => channel.zipRight(core.write(Chunk.of([value, Option.none()])), core.void)
    })
  });
  return new StreamImpl((0, _Function.pipe)(toChannel(self), channel.pipeToOrFail(process(Option.none()))));
};
/** @internal */
exports.zipWithNext = zipWithNext;
const zipWithPrevious = self => (0, _Function.pipe)(self, mapAccum(Option.none(), (prev, curr) => [Option.some(curr), [prev, curr]]));
/** @internal */
exports.zipWithPrevious = zipWithPrevious;
const zipWithPreviousAndNext = self => (0, _Function.pipe)(zipWithNext(zipWithPrevious(self)), map(([[prev, curr], next]) => [prev, curr, (0, _Function.pipe)(next, Option.map(tuple => tuple[1]))]));
/** @internal */
exports.zipWithPreviousAndNext = zipWithPreviousAndNext;
const zipChunks = (left, right, f) => {
  if (left.length > right.length) {
    return [(0, _Function.pipe)(left, Chunk.take(right.length), Chunk.zipWith(right, f)), Either.left((0, _Function.pipe)(left, Chunk.drop(right.length)))];
  }
  return [(0, _Function.pipe)(left, Chunk.zipWith((0, _Function.pipe)(right, Chunk.take(left.length)), f)), Either.right((0, _Function.pipe)(right, Chunk.drop(left.length)))];
};
// Do notation
/** @internal */
const Do = exports.Do = /*#__PURE__*/succeed({});
/** @internal */
const bind = exports.bind = /*#__PURE__*/(0, _Function.dual)(args => typeof args[0] !== "string", (self, tag, f, options) => flatMap(self, k => map(f(k), a => ({
  ...k,
  [tag]: a
})), options));
/* @internal */
const bindTo = exports.bindTo = /*#__PURE__*/doNotation.bindTo(map);
/* @internal */
const let_ = exports.let_ = /*#__PURE__*/doNotation.let_(map);
// Circular with Channel
/** @internal */
const channelToStream = self => {
  return new StreamImpl(self);
};
// =============================================================================
// encoding
// =============================================================================
/** @internal */
exports.channelToStream = channelToStream;
const decodeText = exports.decodeText = /*#__PURE__*/(0, _Function.dual)(args => isStream(args[0]), (self, encoding = "utf-8") => suspend(() => {
  const decoder = new TextDecoder(encoding);
  return map(self, s => decoder.decode(s, {
    stream: true
  }));
}));
/** @internal */
const encodeText = self => suspend(() => {
  const encoder = new TextEncoder();
  return map(self, s => encoder.encode(s));
});
/** @internal */
exports.encodeText = encodeText;
const fromEventListener = (target, type, options) => asyncPush(emit => Effect.acquireRelease(Effect.sync(() => target.addEventListener(type, emit.single, options)), () => Effect.sync(() => target.removeEventListener(type, emit.single, options))), {
  bufferSize: typeof options === "object" ? options.bufferSize : undefined
});
exports.fromEventListener = fromEventListener;
//# sourceMappingURL=stream.js.map