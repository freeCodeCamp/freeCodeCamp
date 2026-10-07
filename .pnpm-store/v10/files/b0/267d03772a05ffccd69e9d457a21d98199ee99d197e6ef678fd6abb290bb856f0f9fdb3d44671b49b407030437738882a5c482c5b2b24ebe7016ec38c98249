"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zipRight = exports.zipLeft = exports.zip = exports.writeChunk = exports.writeAll = exports.withSpan = exports.updateService = exports.unwrapScopedWith = exports.unwrapScoped = exports.unwrap = exports.toQueue = exports.toPullIn = exports.toPull = exports.toPubSub = exports.splitLines = exports.serviceWithEffect = exports.serviceWithChannel = exports.serviceWith = exports.service = exports.scopedWith = exports.scoped = exports.runScoped = exports.runDrain = exports.runCollect = exports.run = exports.repeated = exports.read = exports.provideSomeLayer = exports.provideService = exports.provideLayer = exports.pipeToOrFail = exports.orElse = exports.orDieWith = exports.orDie = exports.never = exports.mergeWith = exports.mergeOutWith = exports.mergeOut = exports.mergeMap = exports.mergeAllWith = exports.mergeAllUnboundedWith = exports.mergeAllUnbounded = exports.mergeAll = exports.mapOutEffectPar = exports.mapOutEffect = exports.mapOut = exports.mapInputInEffect = exports.mapInputIn = exports.mapInputErrorEffect = exports.mapInputError = exports.mapInputEffect = exports.mapInputContext = exports.mapInput = exports.mapErrorCause = exports.mapError = exports.mapEffect = exports.map = exports.isChannelException = exports.interruptWhenDeferred = exports.interruptWhen = exports.identityChannel = exports.fromQueue = exports.fromPubSubScoped = exports.fromPubSub = exports.fromOption = exports.fromInput = exports.fromEither = exports.foldChannel = exports.flatten = exports.ensuring = exports.emitCollect = exports.drain = exports.doneCollect = exports.contextWithEffect = exports.contextWithChannel = exports.contextWith = exports.context = exports.concatOut = exports.concatMap = exports.collect = exports.catchAll = exports.bufferChunk = exports.buffer = exports.asVoid = exports.as = exports.acquireUseRelease = exports.ChannelExceptionTypeId = exports.ChannelException = void 0;
var Cause = _interopRequireWildcard(require("../Cause.js"));
var Chunk = _interopRequireWildcard(require("../Chunk.js"));
var Context = _interopRequireWildcard(require("../Context.js"));
var Deferred = _interopRequireWildcard(require("../Deferred.js"));
var Effect = _interopRequireWildcard(require("../Effect.js"));
var Either = _interopRequireWildcard(require("../Either.js"));
var Equal = _interopRequireWildcard(require("../Equal.js"));
var Exit = _interopRequireWildcard(require("../Exit.js"));
var Fiber = _interopRequireWildcard(require("../Fiber.js"));
var FiberRef = _interopRequireWildcard(require("../FiberRef.js"));
var _Function = require("../Function.js");
var Layer = _interopRequireWildcard(require("../Layer.js"));
var Option = _interopRequireWildcard(require("../Option.js"));
var _Predicate = require("../Predicate.js");
var PubSub = _interopRequireWildcard(require("../PubSub.js"));
var Queue = _interopRequireWildcard(require("../Queue.js"));
var Ref = _interopRequireWildcard(require("../Ref.js"));
var Scope = _interopRequireWildcard(require("../Scope.js"));
var executor = _interopRequireWildcard(require("./channel/channelExecutor.js"));
var mergeDecision = _interopRequireWildcard(require("./channel/mergeDecision.js"));
var mergeState = _interopRequireWildcard(require("./channel/mergeState.js"));
var mergeStrategy_ = _interopRequireWildcard(require("./channel/mergeStrategy.js"));
var singleProducerAsyncInput = _interopRequireWildcard(require("./channel/singleProducerAsyncInput.js"));
var coreEffect = _interopRequireWildcard(require("./core-effect.js"));
var core = _interopRequireWildcard(require("./core-stream.js"));
var MergeDecisionOpCodes = _interopRequireWildcard(require("./opCodes/channelMergeDecision.js"));
var MergeStateOpCodes = _interopRequireWildcard(require("./opCodes/channelMergeState.js"));
var ChannelStateOpCodes = _interopRequireWildcard(require("./opCodes/channelState.js"));
var tracer = _interopRequireWildcard(require("./tracer.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const acquireUseRelease = (acquire, use, release) => core.flatMap(core.fromEffect(Ref.make(() => Effect.void)), ref => (0, _Function.pipe)(core.fromEffect(Effect.uninterruptible(Effect.tap(acquire, a => Ref.set(ref, exit => release(a, exit))))), core.flatMap(use), core.ensuringWith(exit => Effect.flatMap(Ref.get(ref), f => f(exit)))));
/** @internal */
exports.acquireUseRelease = acquireUseRelease;
const as = exports.as = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => map(self, () => value));
/** @internal */
const asVoid = self => map(self, _Function.constVoid);
/** @internal */
exports.asVoid = asVoid;
const buffer = options => core.suspend(() => {
  const doBuffer = (empty, isEmpty, ref) => unwrap(Ref.modify(ref, inElem => isEmpty(inElem) ? [core.readWith({
    onInput: input => core.flatMap(core.write(input), () => doBuffer(empty, isEmpty, ref)),
    onFailure: error => core.fail(error),
    onDone: done => core.succeedNow(done)
  }), inElem] : [core.flatMap(core.write(inElem), () => doBuffer(empty, isEmpty, ref)), empty]));
  return doBuffer(options.empty, options.isEmpty, options.ref);
});
/** @internal */
exports.buffer = buffer;
const bufferChunk = ref => buffer({
  empty: Chunk.empty(),
  isEmpty: Chunk.isEmpty,
  ref
});
/** @internal */
exports.bufferChunk = bufferChunk;
const catchAll = exports.catchAll = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.catchAllCause(self, cause => Either.match(Cause.failureOrCause(cause), {
  onLeft: f,
  onRight: core.failCause
})));
/** @internal */
const concatMap = exports.concatMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.concatMapWith(self, f, () => void 0, () => void 0));
/** @internal */
const collect = exports.collect = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => {
  const collector = core.readWith({
    onInput: out => Option.match(pf(out), {
      onNone: () => collector,
      onSome: out2 => core.flatMap(core.write(out2), () => collector)
    }),
    onFailure: core.fail,
    onDone: core.succeedNow
  });
  return core.pipeTo(self, collector);
});
/** @internal */
const concatOut = self => core.concatAll(self);
/** @internal */
exports.concatOut = concatOut;
const mapInput = exports.mapInput = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const reader = core.readWith({
    onInput: inElem => core.flatMap(core.write(inElem), () => reader),
    onFailure: core.fail,
    onDone: done => core.succeedNow(f(done))
  });
  return core.pipeTo(reader, self);
});
/** @internal */
const mapInputEffect = exports.mapInputEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const reader = core.readWith({
    onInput: inElem => core.flatMap(core.write(inElem), () => reader),
    onFailure: core.fail,
    onDone: done => core.fromEffect(f(done))
  });
  return core.pipeTo(reader, self);
});
/** @internal */
const mapInputError = exports.mapInputError = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const reader = core.readWith({
    onInput: inElem => core.flatMap(core.write(inElem), () => reader),
    onFailure: error => core.fail(f(error)),
    onDone: core.succeedNow
  });
  return core.pipeTo(reader, self);
});
/** @internal */
const mapInputErrorEffect = exports.mapInputErrorEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const reader = core.readWith({
    onInput: inElem => core.flatMap(core.write(inElem), () => reader),
    onFailure: error => core.fromEffect(f(error)),
    onDone: core.succeedNow
  });
  return core.pipeTo(reader, self);
});
/** @internal */
const mapInputIn = exports.mapInputIn = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const reader = core.readWith({
    onInput: inElem => core.flatMap(core.write(f(inElem)), () => reader),
    onFailure: core.fail,
    onDone: core.succeedNow
  });
  return core.pipeTo(reader, self);
});
/** @internal */
const mapInputInEffect = exports.mapInputInEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const reader = core.readWith({
    onInput: inElem => core.flatMap(core.flatMap(core.fromEffect(f(inElem)), core.write), () => reader),
    onFailure: core.fail,
    onDone: core.succeedNow
  });
  return core.pipeTo(reader, self);
});
/** @internal */
const doneCollect = self => core.suspend(() => {
  const builder = [];
  return (0, _Function.pipe)(core.pipeTo(self, doneCollectReader(builder)), core.flatMap(outDone => core.succeed([Chunk.unsafeFromArray(builder), outDone])));
});
/** @internal */
exports.doneCollect = doneCollect;
const doneCollectReader = builder => {
  return core.readWith({
    onInput: outElem => core.flatMap(core.sync(() => {
      builder.push(outElem);
    }), () => doneCollectReader(builder)),
    onFailure: core.fail,
    onDone: core.succeed
  });
};
/** @internal */
const drain = self => {
  const drainer = core.readWithCause({
    onInput: () => drainer,
    onFailure: core.failCause,
    onDone: core.succeed
  });
  return core.pipeTo(self, drainer);
};
/** @internal */
exports.drain = drain;
const emitCollect = self => core.flatMap(doneCollect(self), core.write);
/** @internal */
exports.emitCollect = emitCollect;
const ensuring = exports.ensuring = /*#__PURE__*/(0, _Function.dual)(2, (self, finalizer) => core.ensuringWith(self, () => finalizer));
/** @internal */
const context = () => core.fromEffect(Effect.context());
/** @internal */
exports.context = context;
const contextWith = f => map(context(), f);
/** @internal */
exports.contextWith = contextWith;
const contextWithChannel = f => core.flatMap(context(), f);
/** @internal */
exports.contextWithChannel = contextWithChannel;
const contextWithEffect = f => mapEffect(context(), f);
/** @internal */
exports.contextWithEffect = contextWithEffect;
const flatten = self => core.flatMap(self, _Function.identity);
/** @internal */
exports.flatten = flatten;
const foldChannel = exports.foldChannel = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => core.foldCauseChannel(self, {
  onFailure: cause => {
    const either = Cause.failureOrCause(cause);
    switch (either._tag) {
      case "Left":
        {
          return options.onFailure(either.left);
        }
      case "Right":
        {
          return core.failCause(either.right);
        }
    }
  },
  onSuccess: options.onSuccess
}));
/** @internal */
const fromEither = either => core.suspend(() => Either.match(either, {
  onLeft: core.fail,
  onRight: core.succeed
}));
/** @internal */
exports.fromEither = fromEither;
const fromInput = input => unwrap(input.takeWith(core.failCause, elem => core.flatMap(core.write(elem), () => fromInput(input)), core.succeed));
/** @internal */
exports.fromInput = fromInput;
const fromPubSub = pubsub => unwrapScoped(Effect.map(PubSub.subscribe(pubsub), fromQueue));
/** @internal */
exports.fromPubSub = fromPubSub;
const fromPubSubScoped = pubsub => Effect.map(PubSub.subscribe(pubsub), fromQueue);
/** @internal */
exports.fromPubSubScoped = fromPubSubScoped;
const fromOption = option => core.suspend(() => Option.match(option, {
  onNone: () => core.fail(Option.none()),
  onSome: core.succeed
}));
/** @internal */
exports.fromOption = fromOption;
const fromQueue = queue => core.suspend(() => fromQueueInternal(queue));
/** @internal */
exports.fromQueue = fromQueue;
const fromQueueInternal = queue => (0, _Function.pipe)(core.fromEffect(Queue.take(queue)), core.flatMap(Either.match({
  onLeft: Exit.match({
    onFailure: core.failCause,
    onSuccess: core.succeedNow
  }),
  onRight: elem => core.flatMap(core.write(elem), () => fromQueueInternal(queue))
})));
/** @internal */
const identityChannel = () => core.readWith({
  onInput: input => core.flatMap(core.write(input), () => identityChannel()),
  onFailure: core.fail,
  onDone: core.succeedNow
});
/** @internal */
exports.identityChannel = identityChannel;
const interruptWhen = exports.interruptWhen = /*#__PURE__*/(0, _Function.dual)(2, (self, effect) => mergeWith(self, {
  other: core.fromEffect(effect),
  onSelfDone: selfDone => mergeDecision.Done(Effect.suspend(() => selfDone)),
  onOtherDone: effectDone => mergeDecision.Done(Effect.suspend(() => effectDone))
}));
/** @internal */
const interruptWhenDeferred = exports.interruptWhenDeferred = /*#__PURE__*/(0, _Function.dual)(2, (self, deferred) => interruptWhen(self, Deferred.await(deferred)));
/** @internal */
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.flatMap(self, a => core.sync(() => f(a))));
/** @internal */
const mapEffect = exports.mapEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.flatMap(self, z => core.fromEffect(f(z))));
/** @internal */
const mapError = exports.mapError = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => mapErrorCause(self, Cause.map(f)));
/** @internal */
const mapErrorCause = exports.mapErrorCause = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => core.catchAllCause(self, cause => core.failCause(f(cause))));
/** @internal */
const mapOut = exports.mapOut = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const reader = core.readWith({
    onInput: outElem => core.flatMap(core.write(f(outElem)), () => reader),
    onFailure: core.fail,
    onDone: core.succeedNow
  });
  return core.pipeTo(self, reader);
});
/** @internal */
const mapOutEffect = exports.mapOutEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const reader = core.readWithCause({
    onInput: outElem => (0, _Function.pipe)(core.fromEffect(f(outElem)), core.flatMap(core.write), core.flatMap(() => reader)),
    onFailure: core.failCause,
    onDone: core.succeedNow
  });
  return core.pipeTo(self, reader);
});
/** @internal */
const mapOutEffectPar = exports.mapOutEffectPar = /*#__PURE__*/(0, _Function.dual)(3, (self, f, n) => unwrapScopedWith(scope => Effect.gen(function* () {
  const input = yield* singleProducerAsyncInput.make();
  const queueReader = fromInput(input);
  const queue = yield* Queue.bounded(n);
  yield* Scope.addFinalizer(scope, Queue.shutdown(queue));
  const errorSignal = yield* Deferred.make();
  const withPermits = n === Number.POSITIVE_INFINITY ? _ => _Function.identity : (yield* Effect.makeSemaphore(n)).withPermits;
  const pull = yield* queueReader.pipe(core.pipeTo(self), toPullIn(scope));
  yield* pull.pipe(Effect.matchCauseEffect({
    onFailure: cause => Queue.offer(queue, Effect.failCause(cause)),
    onSuccess: Either.match({
      onLeft: outDone => Effect.zipRight(Effect.interruptible(withPermits(n)(Effect.void)), Effect.asVoid(Queue.offer(queue, Effect.succeed(Either.left(outDone))))),
      onRight: outElem => Effect.gen(function* () {
        const deferred = yield* Deferred.make();
        const latch = yield* Deferred.make();
        yield* Queue.offer(queue, Effect.map(Deferred.await(deferred), Either.right));
        yield* Deferred.succeed(latch, void 0).pipe(Effect.zipRight(Effect.uninterruptibleMask(restore => Effect.exit(restore(Deferred.await(errorSignal))).pipe(Effect.raceFirst(Effect.exit(restore(f(outElem)))), Effect.flatMap(_Function.identity))).pipe(Effect.tapErrorCause(cause => Deferred.failCause(errorSignal, cause)), Effect.intoDeferred(deferred))), withPermits(1), Effect.forkIn(scope));
        yield* Deferred.await(latch);
      })
    })
  }), Effect.forever, Effect.interruptible, Effect.forkIn(scope));
  const consumer = unwrap(Effect.matchCause(Effect.flatten(Queue.take(queue)), {
    onFailure: core.failCause,
    onSuccess: Either.match({
      onLeft: core.succeedNow,
      onRight: outElem => core.flatMap(core.write(outElem), () => consumer)
    })
  }));
  return core.embedInput(consumer, input);
})));
/** @internal */
const mergeAll = options => {
  return channels => mergeAllWith(options)(channels, _Function.constVoid);
};
/** @internal */
exports.mergeAll = mergeAll;
const mergeAllUnbounded = channels => mergeAllWith({
  concurrency: "unbounded"
})(channels, _Function.constVoid);
/** @internal */
exports.mergeAllUnbounded = mergeAllUnbounded;
const mergeAllUnboundedWith = (channels, f) => mergeAllWith({
  concurrency: "unbounded"
})(channels, f);
/** @internal */
exports.mergeAllUnboundedWith = mergeAllUnboundedWith;
const mergeAllWith = ({
  bufferSize = 16,
  concurrency,
  mergeStrategy = mergeStrategy_.BackPressure()
}) => (channels, f) => unwrapScopedWith(scope => Effect.gen(function* () {
  const concurrencyN = concurrency === "unbounded" ? Number.MAX_SAFE_INTEGER : concurrency;
  const input = yield* singleProducerAsyncInput.make();
  const queueReader = fromInput(input);
  const queue = yield* Queue.bounded(bufferSize);
  yield* Scope.addFinalizer(scope, Queue.shutdown(queue));
  const cancelers = yield* Queue.unbounded();
  yield* Scope.addFinalizer(scope, Queue.shutdown(cancelers));
  const lastDone = yield* Ref.make(Option.none());
  const errorSignal = yield* Deferred.make();
  const withPermits = (yield* Effect.makeSemaphore(concurrencyN)).withPermits;
  const pull = yield* toPullIn(core.pipeTo(queueReader, channels), scope);
  function evaluatePull(pull) {
    return pull.pipe(Effect.flatMap(Either.match({
      onLeft: done => Effect.succeed(Option.some(done)),
      onRight: outElem => Effect.as(Queue.offer(queue, Effect.succeed(Either.right(outElem))), Option.none())
    })), Effect.repeat({
      until: _ => Option.isSome(_)
    }), Effect.flatMap(outDone => Ref.update(lastDone, Option.match({
      onNone: () => Option.some(outDone.value),
      onSome: lastDone => Option.some(f(lastDone, outDone.value))
    }))), Effect.catchAllCause(cause => Cause.isInterrupted(cause) ? Effect.failCause(cause) : Queue.offer(queue, Effect.failCause(cause)).pipe(Effect.zipRight(Deferred.succeed(errorSignal, void 0)), Effect.asVoid)));
  }
  yield* pull.pipe(Effect.matchCauseEffect({
    onFailure: cause => Queue.offer(queue, Effect.failCause(cause)).pipe(Effect.zipRight(Effect.succeed(false))),
    onSuccess: Either.match({
      onLeft: outDone => Effect.raceWith(Effect.interruptible(Deferred.await(errorSignal)), Effect.interruptible(withPermits(concurrencyN)(Effect.void)), {
        onSelfDone: (_, permitAcquisition) => Effect.as(Fiber.interrupt(permitAcquisition), false),
        onOtherDone: (_, failureAwait) => Effect.zipRight(Fiber.interrupt(failureAwait), Ref.get(lastDone).pipe(Effect.flatMap(Option.match({
          onNone: () => Queue.offer(queue, Effect.succeed(Either.left(outDone))),
          onSome: lastDone => Queue.offer(queue, Effect.succeed(Either.left(f(lastDone, outDone))))
        })), Effect.as(false)))
      }),
      onRight: channel => mergeStrategy_.match(mergeStrategy, {
        onBackPressure: () => Effect.gen(function* () {
          const latch = yield* Deferred.make();
          const raceEffects = Effect.scopedWith(scope => toPullIn(core.pipeTo(queueReader, channel), scope).pipe(Effect.flatMap(pull => Effect.race(Effect.exit(evaluatePull(pull)), Effect.exit(Effect.interruptible(Deferred.await(errorSignal))))), Effect.flatMap(_Function.identity)));
          yield* Deferred.succeed(latch, void 0).pipe(Effect.zipRight(raceEffects), withPermits(1), Effect.forkIn(scope));
          yield* Deferred.await(latch);
          const errored = yield* Deferred.isDone(errorSignal);
          return !errored;
        }),
        onBufferSliding: () => Effect.gen(function* () {
          const canceler = yield* Deferred.make();
          const latch = yield* Deferred.make();
          const size = yield* Queue.size(cancelers);
          yield* Queue.take(cancelers).pipe(Effect.flatMap(canceler => Deferred.succeed(canceler, void 0)), Effect.when(() => size >= concurrencyN));
          yield* Queue.offer(cancelers, canceler);
          const raceEffects = Effect.scopedWith(scope => toPullIn(core.pipeTo(queueReader, channel), scope).pipe(Effect.flatMap(pull => Effect.exit(evaluatePull(pull)).pipe(Effect.race(Effect.exit(Effect.interruptible(Deferred.await(errorSignal)))), Effect.race(Effect.exit(Effect.interruptible(Deferred.await(canceler)))))), Effect.flatMap(_Function.identity)));
          yield* Deferred.succeed(latch, void 0).pipe(Effect.zipRight(raceEffects), withPermits(1), Effect.forkIn(scope));
          yield* Deferred.await(latch);
          const errored = yield* Deferred.isDone(errorSignal);
          return !errored;
        })
      })
    })
  }), Effect.repeat({
    while: _ => _
  }), Effect.forkIn(scope));
  const consumer = (0, _Function.pipe)(Queue.take(queue), Effect.flatten, Effect.matchCause({
    onFailure: core.failCause,
    onSuccess: Either.match({
      onLeft: core.succeedNow,
      onRight: outElem => core.flatMap(core.write(outElem), () => consumer)
    })
  }), unwrap);
  return core.embedInput(consumer, input);
}));
/** @internal */
exports.mergeAllWith = mergeAllWith;
const mergeMap = exports.mergeMap = /*#__PURE__*/(0, _Function.dual)(3, (self, f, options) => mergeAll(options)(mapOut(self, f)));
/** @internal */
const mergeOut = exports.mergeOut = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => mergeAll({
  concurrency: n
})(mapOut(self, _Function.identity)));
/** @internal */
const mergeOutWith = exports.mergeOutWith = /*#__PURE__*/(0, _Function.dual)(3, (self, n, f) => mergeAllWith({
  concurrency: n
})(mapOut(self, _Function.identity), f));
/** @internal */
const mergeWith = exports.mergeWith = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => {
  function merge(scope) {
    return Effect.gen(function* () {
      const input = yield* singleProducerAsyncInput.make();
      const queueReader = fromInput(input);
      const pullL = yield* toPullIn(core.pipeTo(queueReader, self), scope);
      const pullR = yield* toPullIn(core.pipeTo(queueReader, options.other), scope);
      function handleSide(exit, fiber, pull) {
        return (done, both, single) => {
          function onDecision(decision) {
            const op = decision;
            if (op._tag === MergeDecisionOpCodes.OP_DONE) {
              return Effect.succeed(core.fromEffect(Effect.zipRight(Fiber.interrupt(fiber), op.effect)));
            }
            return Effect.map(Fiber.await(fiber), Exit.match({
              onFailure: cause => core.fromEffect(op.f(Exit.failCause(cause))),
              onSuccess: Either.match({
                onLeft: done => core.fromEffect(op.f(Exit.succeed(done))),
                onRight: elem => zipRight(core.write(elem), go(single(op.f)))
              })
            }));
          }
          return Exit.match(exit, {
            onFailure: cause => onDecision(done(Exit.failCause(cause))),
            onSuccess: Either.match({
              onLeft: z => onDecision(done(Exit.succeed(z))),
              onRight: elem => Effect.succeed(core.flatMap(core.write(elem), () => core.flatMap(core.fromEffect(Effect.forkIn(Effect.interruptible(pull), scope)), leftFiber => go(both(leftFiber, fiber)))))
            })
          });
        };
      }
      function go(state) {
        switch (state._tag) {
          case MergeStateOpCodes.OP_BOTH_RUNNING:
            {
              const leftJoin = Effect.interruptible(Fiber.join(state.left));
              const rightJoin = Effect.interruptible(Fiber.join(state.right));
              return unwrap(Effect.raceWith(leftJoin, rightJoin, {
                onSelfDone: (leftExit, rf) => Effect.zipRight(Fiber.interrupt(rf), handleSide(leftExit, state.right, pullL)(options.onSelfDone, mergeState.BothRunning, f => mergeState.LeftDone(f))),
                onOtherDone: (rightExit, lf) => Effect.zipRight(Fiber.interrupt(lf), handleSide(rightExit, state.left, pullR)(options.onOtherDone, (left, right) => mergeState.BothRunning(right, left), f => mergeState.RightDone(f)))
              }));
            }
          case MergeStateOpCodes.OP_LEFT_DONE:
            {
              return unwrap(Effect.map(Effect.exit(pullR), Exit.match({
                onFailure: cause => core.fromEffect(state.f(Exit.failCause(cause))),
                onSuccess: Either.match({
                  onLeft: done => core.fromEffect(state.f(Exit.succeed(done))),
                  onRight: elem => core.flatMap(core.write(elem), () => go(mergeState.LeftDone(state.f)))
                })
              })));
            }
          case MergeStateOpCodes.OP_RIGHT_DONE:
            {
              return unwrap(Effect.map(Effect.exit(pullL), Exit.match({
                onFailure: cause => core.fromEffect(state.f(Exit.failCause(cause))),
                onSuccess: Either.match({
                  onLeft: done => core.fromEffect(state.f(Exit.succeed(done))),
                  onRight: elem => core.flatMap(core.write(elem), () => go(mergeState.RightDone(state.f)))
                })
              })));
            }
        }
      }
      return core.fromEffect(Effect.withFiberRuntime(parent => {
        const inherit = Effect.withFiberRuntime(state => {
          ;
          state.transferChildren(parent.scope());
          return Effect.void;
        });
        const leftFiber = Effect.interruptible(pullL).pipe(Effect.ensuring(inherit), Effect.forkIn(scope));
        const rightFiber = Effect.interruptible(pullR).pipe(Effect.ensuring(inherit), Effect.forkIn(scope));
        return Effect.zipWith(leftFiber, rightFiber, (left, right) => mergeState.BothRunning(left, right));
      })).pipe(core.flatMap(go), core.embedInput(input));
    });
  }
  return unwrapScopedWith(merge);
});
/** @internal */
const never = exports.never = /*#__PURE__*/core.fromEffect(Effect.never);
/** @internal */
const orDie = exports.orDie = /*#__PURE__*/(0, _Function.dual)(2, (self, error) => orDieWith(self, error));
/** @internal */
const orDieWith = exports.orDieWith = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => catchAll(self, e => core.failCauseSync(() => Cause.die(f(e)))));
/** @internal */
const orElse = exports.orElse = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => catchAll(self, that));
/** @internal */
const pipeToOrFail = exports.pipeToOrFail = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => core.suspend(() => {
  let channelException = undefined;
  const reader = core.readWith({
    onInput: outElem => core.flatMap(core.write(outElem), () => reader),
    onFailure: outErr => {
      channelException = ChannelException(outErr);
      return core.failCause(Cause.die(channelException));
    },
    onDone: core.succeedNow
  });
  const writer = core.readWithCause({
    onInput: outElem => (0, _Function.pipe)(core.write(outElem), core.flatMap(() => writer)),
    onFailure: cause => Cause.isDieType(cause) && isChannelException(cause.defect) && Equal.equals(cause.defect, channelException) ? core.fail(cause.defect.error) : core.failCause(cause),
    onDone: core.succeedNow
  });
  return core.pipeTo(core.pipeTo(core.pipeTo(self, reader), that), writer);
}));
/** @internal */
const provideService = exports.provideService = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, service) => {
  return core.flatMap(context(), context => core.provideContext(self, Context.add(context, tag, service)));
});
/** @internal */
const provideLayer = exports.provideLayer = /*#__PURE__*/(0, _Function.dual)(2, (self, layer) => unwrapScopedWith(scope => Effect.map(Layer.buildWithScope(layer, scope), context => core.provideContext(self, context))));
/** @internal */
const mapInputContext = exports.mapInputContext = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => contextWithChannel(context => core.provideContext(self, f(context))));
/** @internal */
const provideSomeLayer = exports.provideSomeLayer = /*#__PURE__*/(0, _Function.dual)(2, (self, layer) =>
// @ts-expect-error
provideLayer(self, Layer.merge(Layer.context(), layer)));
/** @internal */
const read = () => core.readOrFail(Option.none());
/** @internal */
exports.read = read;
const repeated = self => core.flatMap(self, () => repeated(self));
/** @internal */
exports.repeated = repeated;
const run = self => Effect.scopedWith(scope => executor.runIn(self, scope));
/** @internal */
exports.run = run;
const runCollect = self => run(core.collectElements(self));
/** @internal */
exports.runCollect = runCollect;
const runDrain = self => run(drain(self));
/** @internal */
exports.runDrain = runDrain;
const runScoped = self => Effect.scopeWith(scope => executor.runIn(self, scope));
/** @internal */
exports.runScoped = runScoped;
const scoped = effect => unwrap(Effect.uninterruptibleMask(restore => Effect.map(Scope.make(), scope => core.acquireReleaseOut(Effect.tapErrorCause(restore(Scope.extend(effect, scope)), cause => Scope.close(scope, Exit.failCause(cause))), (_, exit) => Scope.close(scope, exit)))));
/** @internal */
exports.scoped = scoped;
const scopedWith = f => unwrapScoped(Effect.map(Effect.scope, scope => core.flatMap(core.fromEffect(f(scope)), core.write)));
/** @internal */
exports.scopedWith = scopedWith;
const service = tag => core.fromEffect(tag);
/** @internal */
exports.service = service;
const serviceWith = tag => f => map(service(tag), f);
/** @internal */
exports.serviceWith = serviceWith;
const serviceWithChannel = tag => f => core.flatMap(service(tag), f);
/** @internal */
exports.serviceWithChannel = serviceWithChannel;
const serviceWithEffect = tag => f => mapEffect(service(tag), f);
/** @internal */
exports.serviceWithEffect = serviceWithEffect;
const splitLines = () => core.suspend(() => {
  let stringBuilder = "";
  let midCRLF = false;
  const splitLinesChunk = chunk => {
    const chunkBuilder = [];
    Chunk.map(chunk, str => {
      if (str.length !== 0) {
        let from = 0;
        let indexOfCR = str.indexOf("\r");
        let indexOfLF = str.indexOf("\n");
        if (midCRLF) {
          if (indexOfLF === 0) {
            chunkBuilder.push(stringBuilder);
            stringBuilder = "";
            from = 1;
            indexOfLF = str.indexOf("\n", from);
          } else {
            stringBuilder = stringBuilder + "\r";
          }
          midCRLF = false;
        }
        while (indexOfCR !== -1 || indexOfLF !== -1) {
          if (indexOfCR === -1 || indexOfLF !== -1 && indexOfLF < indexOfCR) {
            if (stringBuilder.length === 0) {
              chunkBuilder.push(str.substring(from, indexOfLF));
            } else {
              chunkBuilder.push(stringBuilder + str.substring(from, indexOfLF));
              stringBuilder = "";
            }
            from = indexOfLF + 1;
            indexOfLF = str.indexOf("\n", from);
          } else {
            if (str.length === indexOfCR + 1) {
              midCRLF = true;
              indexOfCR = -1;
            } else {
              if (indexOfLF === indexOfCR + 1) {
                if (stringBuilder.length === 0) {
                  chunkBuilder.push(str.substring(from, indexOfCR));
                } else {
                  stringBuilder = stringBuilder + str.substring(from, indexOfCR);
                  chunkBuilder.push(stringBuilder);
                  stringBuilder = "";
                }
                from = indexOfCR + 2;
                indexOfCR = str.indexOf("\r", from);
                indexOfLF = str.indexOf("\n", from);
              } else {
                indexOfCR = str.indexOf("\r", indexOfCR + 1);
              }
            }
          }
        }
        if (midCRLF) {
          stringBuilder = stringBuilder + str.substring(from, str.length - 1);
        } else {
          stringBuilder = stringBuilder + str.substring(from, str.length);
        }
      }
    });
    return Chunk.unsafeFromArray(chunkBuilder);
  };
  const loop = core.readWithCause({
    onInput: input => {
      const out = splitLinesChunk(input);
      return Chunk.isEmpty(out) ? loop : core.flatMap(core.write(out), () => loop);
    },
    onFailure: cause => stringBuilder.length === 0 ? core.failCause(cause) : core.flatMap(core.write(Chunk.of(stringBuilder)), () => core.failCause(cause)),
    onDone: done => stringBuilder.length === 0 ? core.succeed(done) : core.flatMap(core.write(Chunk.of(stringBuilder)), () => core.succeed(done))
  });
  return loop;
});
/** @internal */
exports.splitLines = splitLines;
const toPubSub = pubsub => toQueue(pubsub);
/** @internal */
exports.toPubSub = toPubSub;
const toPull = self => Effect.flatMap(Effect.scope, scope => toPullIn(self, scope));
/** @internal */
exports.toPull = toPull;
const toPullIn = exports.toPullIn = /*#__PURE__*/(0, _Function.dual)(2, (self, scope) => Effect.zip(Effect.sync(() => new executor.ChannelExecutor(self, void 0, _Function.identity)), Effect.runtime()).pipe(Effect.tap(([executor, runtime]) => Scope.addFinalizerExit(scope, exit => {
  const finalizer = executor.close(exit);
  return finalizer !== undefined ? Effect.provide(finalizer, runtime) : Effect.void;
})), Effect.uninterruptible, Effect.map(([executor]) => Effect.suspend(() => interpretToPull(executor.run(), executor)))));
/** @internal */
const interpretToPull = (channelState, exec) => {
  const state = channelState;
  switch (state._tag) {
    case ChannelStateOpCodes.OP_DONE:
      {
        return Exit.match(exec.getDone(), {
          onFailure: Effect.failCause,
          onSuccess: done => Effect.succeed(Either.left(done))
        });
      }
    case ChannelStateOpCodes.OP_EMIT:
      {
        return Effect.succeed(Either.right(exec.getEmit()));
      }
    case ChannelStateOpCodes.OP_FROM_EFFECT:
      {
        return (0, _Function.pipe)(state.effect, Effect.flatMap(() => interpretToPull(exec.run(), exec)));
      }
    case ChannelStateOpCodes.OP_READ:
      {
        return executor.readUpstream(state, () => interpretToPull(exec.run(), exec), cause => Effect.failCause(cause));
      }
  }
};
/** @internal */
const toQueue = queue => core.suspend(() => toQueueInternal(queue));
/** @internal */
exports.toQueue = toQueue;
const toQueueInternal = queue => {
  return core.readWithCause({
    onInput: elem => core.flatMap(core.fromEffect(Queue.offer(queue, Either.right(elem))), () => toQueueInternal(queue)),
    onFailure: cause => core.fromEffect(Queue.offer(queue, Either.left(Exit.failCause(cause)))),
    onDone: done => core.fromEffect(Queue.offer(queue, Either.left(Exit.succeed(done))))
  });
};
/** @internal */
const unwrap = channel => flatten(core.fromEffect(channel));
/** @internal */
exports.unwrap = unwrap;
const unwrapScoped = self => core.concatAllWith(scoped(self), (d, _) => d, (d, _) => d);
/** @internal */
exports.unwrapScoped = unwrapScoped;
const unwrapScopedWith = f => core.concatAllWith(scopedWith(f), (d, _) => d, (d, _) => d);
/** @internal */
exports.unwrapScopedWith = unwrapScopedWith;
const updateService = exports.updateService = /*#__PURE__*/(0, _Function.dual)(3, (self, tag, f) => mapInputContext(self, context => Context.merge(context, Context.make(tag, f(Context.unsafeGet(context, tag))))));
/** @internal */
const withSpan = function () {
  const dataFirst = typeof arguments[0] !== "string";
  const name = dataFirst ? arguments[1] : arguments[0];
  const options = tracer.addSpanStackTrace(dataFirst ? arguments[2] : arguments[1]);
  const acquire = Effect.all([Effect.makeSpan(name, options), Effect.context(), Effect.clock, FiberRef.get(FiberRef.currentTracerTimingEnabled)]);
  if (dataFirst) {
    const self = arguments[0];
    return acquireUseRelease(acquire, ([span, context]) => core.provideContext(self, Context.add(context, tracer.spanTag, span)), ([span,, clock, timingEnabled], exit) => coreEffect.endSpan(span, exit, clock, timingEnabled));
  }
  return self => acquireUseRelease(acquire, ([span, context]) => core.provideContext(self, Context.add(context, tracer.spanTag, span)), ([span,, clock, timingEnabled], exit) => coreEffect.endSpan(span, exit, clock, timingEnabled));
};
/** @internal */
exports.withSpan = withSpan;
const writeAll = (...outs) => writeChunk(Chunk.fromIterable(outs));
/** @internal */
exports.writeAll = writeAll;
const writeChunk = outs => writeChunkWriter(0, outs.length, outs);
/** @internal */
exports.writeChunk = writeChunk;
const writeChunkWriter = (idx, len, chunk) => {
  return idx === len ? core.void : (0, _Function.pipe)(core.write((0, _Function.pipe)(chunk, Chunk.unsafeGet(idx))), core.flatMap(() => writeChunkWriter(idx + 1, len, chunk)));
};
/** @internal */
const zip = exports.zip = /*#__PURE__*/(0, _Function.dual)(args => core.isChannel(args[1]), (self, that, options) => options?.concurrent ? mergeWith(self, {
  other: that,
  onSelfDone: exit1 => mergeDecision.Await(exit2 => Effect.suspend(() => Exit.zip(exit1, exit2))),
  onOtherDone: exit2 => mergeDecision.Await(exit1 => Effect.suspend(() => Exit.zip(exit1, exit2)))
}) : core.flatMap(self, a => map(that, b => [a, b])));
/** @internal */
const zipLeft = exports.zipLeft = /*#__PURE__*/(0, _Function.dual)(args => core.isChannel(args[1]), (self, that, options) => options?.concurrent ? map(zip(self, that, {
  concurrent: true
}), tuple => tuple[0]) : core.flatMap(self, z => as(that, z)));
/** @internal */
const zipRight = exports.zipRight = /*#__PURE__*/(0, _Function.dual)(args => core.isChannel(args[1]), (self, that, options) => options?.concurrent ? map(zip(self, that, {
  concurrent: true
}), tuple => tuple[1]) : core.flatMap(self, () => that));
/** @internal */
const ChannelExceptionTypeId = exports.ChannelExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Channel/ChannelException");
/** @internal */
const ChannelException = error => ({
  _tag: "ChannelException",
  [ChannelExceptionTypeId]: ChannelExceptionTypeId,
  error
});
/** @internal */
exports.ChannelException = ChannelException;
const isChannelException = u => (0, _Predicate.hasProperty)(u, ChannelExceptionTypeId);
exports.isChannelException = isChannelException;
//# sourceMappingURL=channel.js.map