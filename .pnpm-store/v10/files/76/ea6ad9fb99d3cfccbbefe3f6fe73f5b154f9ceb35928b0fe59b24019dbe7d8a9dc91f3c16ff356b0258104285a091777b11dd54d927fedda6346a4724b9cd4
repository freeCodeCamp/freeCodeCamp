import * as Cause from "../Cause.js";
import * as Chunk from "../Chunk.js";
import * as Context from "../Context.js";
import * as Deferred from "../Deferred.js";
import * as Effect from "../Effect.js";
import * as Either from "../Either.js";
import * as Equal from "../Equal.js";
import * as Exit from "../Exit.js";
import * as Fiber from "../Fiber.js";
import * as FiberRef from "../FiberRef.js";
import { constVoid, dual, identity, pipe } from "../Function.js";
import * as Layer from "../Layer.js";
import * as Option from "../Option.js";
import { hasProperty } from "../Predicate.js";
import * as PubSub from "../PubSub.js";
import * as Queue from "../Queue.js";
import * as Ref from "../Ref.js";
import * as Scope from "../Scope.js";
import * as executor from "./channel/channelExecutor.js";
import * as mergeDecision from "./channel/mergeDecision.js";
import * as mergeState from "./channel/mergeState.js";
import * as mergeStrategy_ from "./channel/mergeStrategy.js";
import * as singleProducerAsyncInput from "./channel/singleProducerAsyncInput.js";
import * as coreEffect from "./core-effect.js";
import * as core from "./core-stream.js";
import * as MergeDecisionOpCodes from "./opCodes/channelMergeDecision.js";
import * as MergeStateOpCodes from "./opCodes/channelMergeState.js";
import * as ChannelStateOpCodes from "./opCodes/channelState.js";
import * as tracer from "./tracer.js";
/** @internal */
export const acquireUseRelease = (acquire, use, release) => core.flatMap(core.fromEffect(Ref.make(() => Effect.void)), ref => pipe(core.fromEffect(Effect.uninterruptible(Effect.tap(acquire, a => Ref.set(ref, exit => release(a, exit))))), core.flatMap(use), core.ensuringWith(exit => Effect.flatMap(Ref.get(ref), f => f(exit)))));
/** @internal */
export const as = /*#__PURE__*/dual(2, (self, value) => map(self, () => value));
/** @internal */
export const asVoid = self => map(self, constVoid);
/** @internal */
export const buffer = options => core.suspend(() => {
  const doBuffer = (empty, isEmpty, ref) => unwrap(Ref.modify(ref, inElem => isEmpty(inElem) ? [core.readWith({
    onInput: input => core.flatMap(core.write(input), () => doBuffer(empty, isEmpty, ref)),
    onFailure: error => core.fail(error),
    onDone: done => core.succeedNow(done)
  }), inElem] : [core.flatMap(core.write(inElem), () => doBuffer(empty, isEmpty, ref)), empty]));
  return doBuffer(options.empty, options.isEmpty, options.ref);
});
/** @internal */
export const bufferChunk = ref => buffer({
  empty: Chunk.empty(),
  isEmpty: Chunk.isEmpty,
  ref
});
/** @internal */
export const catchAll = /*#__PURE__*/dual(2, (self, f) => core.catchAllCause(self, cause => Either.match(Cause.failureOrCause(cause), {
  onLeft: f,
  onRight: core.failCause
})));
/** @internal */
export const concatMap = /*#__PURE__*/dual(2, (self, f) => core.concatMapWith(self, f, () => void 0, () => void 0));
/** @internal */
export const collect = /*#__PURE__*/dual(2, (self, pf) => {
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
export const concatOut = self => core.concatAll(self);
/** @internal */
export const mapInput = /*#__PURE__*/dual(2, (self, f) => {
  const reader = core.readWith({
    onInput: inElem => core.flatMap(core.write(inElem), () => reader),
    onFailure: core.fail,
    onDone: done => core.succeedNow(f(done))
  });
  return core.pipeTo(reader, self);
});
/** @internal */
export const mapInputEffect = /*#__PURE__*/dual(2, (self, f) => {
  const reader = core.readWith({
    onInput: inElem => core.flatMap(core.write(inElem), () => reader),
    onFailure: core.fail,
    onDone: done => core.fromEffect(f(done))
  });
  return core.pipeTo(reader, self);
});
/** @internal */
export const mapInputError = /*#__PURE__*/dual(2, (self, f) => {
  const reader = core.readWith({
    onInput: inElem => core.flatMap(core.write(inElem), () => reader),
    onFailure: error => core.fail(f(error)),
    onDone: core.succeedNow
  });
  return core.pipeTo(reader, self);
});
/** @internal */
export const mapInputErrorEffect = /*#__PURE__*/dual(2, (self, f) => {
  const reader = core.readWith({
    onInput: inElem => core.flatMap(core.write(inElem), () => reader),
    onFailure: error => core.fromEffect(f(error)),
    onDone: core.succeedNow
  });
  return core.pipeTo(reader, self);
});
/** @internal */
export const mapInputIn = /*#__PURE__*/dual(2, (self, f) => {
  const reader = core.readWith({
    onInput: inElem => core.flatMap(core.write(f(inElem)), () => reader),
    onFailure: core.fail,
    onDone: core.succeedNow
  });
  return core.pipeTo(reader, self);
});
/** @internal */
export const mapInputInEffect = /*#__PURE__*/dual(2, (self, f) => {
  const reader = core.readWith({
    onInput: inElem => core.flatMap(core.flatMap(core.fromEffect(f(inElem)), core.write), () => reader),
    onFailure: core.fail,
    onDone: core.succeedNow
  });
  return core.pipeTo(reader, self);
});
/** @internal */
export const doneCollect = self => core.suspend(() => {
  const builder = [];
  return pipe(core.pipeTo(self, doneCollectReader(builder)), core.flatMap(outDone => core.succeed([Chunk.unsafeFromArray(builder), outDone])));
});
/** @internal */
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
export const drain = self => {
  const drainer = core.readWithCause({
    onInput: () => drainer,
    onFailure: core.failCause,
    onDone: core.succeed
  });
  return core.pipeTo(self, drainer);
};
/** @internal */
export const emitCollect = self => core.flatMap(doneCollect(self), core.write);
/** @internal */
export const ensuring = /*#__PURE__*/dual(2, (self, finalizer) => core.ensuringWith(self, () => finalizer));
/** @internal */
export const context = () => core.fromEffect(Effect.context());
/** @internal */
export const contextWith = f => map(context(), f);
/** @internal */
export const contextWithChannel = f => core.flatMap(context(), f);
/** @internal */
export const contextWithEffect = f => mapEffect(context(), f);
/** @internal */
export const flatten = self => core.flatMap(self, identity);
/** @internal */
export const foldChannel = /*#__PURE__*/dual(2, (self, options) => core.foldCauseChannel(self, {
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
export const fromEither = either => core.suspend(() => Either.match(either, {
  onLeft: core.fail,
  onRight: core.succeed
}));
/** @internal */
export const fromInput = input => unwrap(input.takeWith(core.failCause, elem => core.flatMap(core.write(elem), () => fromInput(input)), core.succeed));
/** @internal */
export const fromPubSub = pubsub => unwrapScoped(Effect.map(PubSub.subscribe(pubsub), fromQueue));
/** @internal */
export const fromPubSubScoped = pubsub => Effect.map(PubSub.subscribe(pubsub), fromQueue);
/** @internal */
export const fromOption = option => core.suspend(() => Option.match(option, {
  onNone: () => core.fail(Option.none()),
  onSome: core.succeed
}));
/** @internal */
export const fromQueue = queue => core.suspend(() => fromQueueInternal(queue));
/** @internal */
const fromQueueInternal = queue => pipe(core.fromEffect(Queue.take(queue)), core.flatMap(Either.match({
  onLeft: Exit.match({
    onFailure: core.failCause,
    onSuccess: core.succeedNow
  }),
  onRight: elem => core.flatMap(core.write(elem), () => fromQueueInternal(queue))
})));
/** @internal */
export const identityChannel = () => core.readWith({
  onInput: input => core.flatMap(core.write(input), () => identityChannel()),
  onFailure: core.fail,
  onDone: core.succeedNow
});
/** @internal */
export const interruptWhen = /*#__PURE__*/dual(2, (self, effect) => mergeWith(self, {
  other: core.fromEffect(effect),
  onSelfDone: selfDone => mergeDecision.Done(Effect.suspend(() => selfDone)),
  onOtherDone: effectDone => mergeDecision.Done(Effect.suspend(() => effectDone))
}));
/** @internal */
export const interruptWhenDeferred = /*#__PURE__*/dual(2, (self, deferred) => interruptWhen(self, Deferred.await(deferred)));
/** @internal */
export const map = /*#__PURE__*/dual(2, (self, f) => core.flatMap(self, a => core.sync(() => f(a))));
/** @internal */
export const mapEffect = /*#__PURE__*/dual(2, (self, f) => core.flatMap(self, z => core.fromEffect(f(z))));
/** @internal */
export const mapError = /*#__PURE__*/dual(2, (self, f) => mapErrorCause(self, Cause.map(f)));
/** @internal */
export const mapErrorCause = /*#__PURE__*/dual(2, (self, f) => core.catchAllCause(self, cause => core.failCause(f(cause))));
/** @internal */
export const mapOut = /*#__PURE__*/dual(2, (self, f) => {
  const reader = core.readWith({
    onInput: outElem => core.flatMap(core.write(f(outElem)), () => reader),
    onFailure: core.fail,
    onDone: core.succeedNow
  });
  return core.pipeTo(self, reader);
});
/** @internal */
export const mapOutEffect = /*#__PURE__*/dual(2, (self, f) => {
  const reader = core.readWithCause({
    onInput: outElem => pipe(core.fromEffect(f(outElem)), core.flatMap(core.write), core.flatMap(() => reader)),
    onFailure: core.failCause,
    onDone: core.succeedNow
  });
  return core.pipeTo(self, reader);
});
/** @internal */
export const mapOutEffectPar = /*#__PURE__*/dual(3, (self, f, n) => unwrapScopedWith(scope => Effect.gen(function* () {
  const input = yield* singleProducerAsyncInput.make();
  const queueReader = fromInput(input);
  const queue = yield* Queue.bounded(n);
  yield* Scope.addFinalizer(scope, Queue.shutdown(queue));
  const errorSignal = yield* Deferred.make();
  const withPermits = n === Number.POSITIVE_INFINITY ? _ => identity : (yield* Effect.makeSemaphore(n)).withPermits;
  const pull = yield* queueReader.pipe(core.pipeTo(self), toPullIn(scope));
  yield* pull.pipe(Effect.matchCauseEffect({
    onFailure: cause => Queue.offer(queue, Effect.failCause(cause)),
    onSuccess: Either.match({
      onLeft: outDone => Effect.zipRight(Effect.interruptible(withPermits(n)(Effect.void)), Effect.asVoid(Queue.offer(queue, Effect.succeed(Either.left(outDone))))),
      onRight: outElem => Effect.gen(function* () {
        const deferred = yield* Deferred.make();
        const latch = yield* Deferred.make();
        yield* Queue.offer(queue, Effect.map(Deferred.await(deferred), Either.right));
        yield* Deferred.succeed(latch, void 0).pipe(Effect.zipRight(Effect.uninterruptibleMask(restore => Effect.exit(restore(Deferred.await(errorSignal))).pipe(Effect.raceFirst(Effect.exit(restore(f(outElem)))), Effect.flatMap(identity))).pipe(Effect.tapErrorCause(cause => Deferred.failCause(errorSignal, cause)), Effect.intoDeferred(deferred))), withPermits(1), Effect.forkIn(scope));
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
export const mergeAll = options => {
  return channels => mergeAllWith(options)(channels, constVoid);
};
/** @internal */
export const mergeAllUnbounded = channels => mergeAllWith({
  concurrency: "unbounded"
})(channels, constVoid);
/** @internal */
export const mergeAllUnboundedWith = (channels, f) => mergeAllWith({
  concurrency: "unbounded"
})(channels, f);
/** @internal */
export const mergeAllWith = ({
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
          const raceEffects = Effect.scopedWith(scope => toPullIn(core.pipeTo(queueReader, channel), scope).pipe(Effect.flatMap(pull => Effect.race(Effect.exit(evaluatePull(pull)), Effect.exit(Effect.interruptible(Deferred.await(errorSignal))))), Effect.flatMap(identity)));
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
          const raceEffects = Effect.scopedWith(scope => toPullIn(core.pipeTo(queueReader, channel), scope).pipe(Effect.flatMap(pull => Effect.exit(evaluatePull(pull)).pipe(Effect.race(Effect.exit(Effect.interruptible(Deferred.await(errorSignal)))), Effect.race(Effect.exit(Effect.interruptible(Deferred.await(canceler)))))), Effect.flatMap(identity)));
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
  const consumer = pipe(Queue.take(queue), Effect.flatten, Effect.matchCause({
    onFailure: core.failCause,
    onSuccess: Either.match({
      onLeft: core.succeedNow,
      onRight: outElem => core.flatMap(core.write(outElem), () => consumer)
    })
  }), unwrap);
  return core.embedInput(consumer, input);
}));
/** @internal */
export const mergeMap = /*#__PURE__*/dual(3, (self, f, options) => mergeAll(options)(mapOut(self, f)));
/** @internal */
export const mergeOut = /*#__PURE__*/dual(2, (self, n) => mergeAll({
  concurrency: n
})(mapOut(self, identity)));
/** @internal */
export const mergeOutWith = /*#__PURE__*/dual(3, (self, n, f) => mergeAllWith({
  concurrency: n
})(mapOut(self, identity), f));
/** @internal */
export const mergeWith = /*#__PURE__*/dual(2, (self, options) => {
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
export const never = /*#__PURE__*/core.fromEffect(Effect.never);
/** @internal */
export const orDie = /*#__PURE__*/dual(2, (self, error) => orDieWith(self, error));
/** @internal */
export const orDieWith = /*#__PURE__*/dual(2, (self, f) => catchAll(self, e => core.failCauseSync(() => Cause.die(f(e)))));
/** @internal */
export const orElse = /*#__PURE__*/dual(2, (self, that) => catchAll(self, that));
/** @internal */
export const pipeToOrFail = /*#__PURE__*/dual(2, (self, that) => core.suspend(() => {
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
    onInput: outElem => pipe(core.write(outElem), core.flatMap(() => writer)),
    onFailure: cause => Cause.isDieType(cause) && isChannelException(cause.defect) && Equal.equals(cause.defect, channelException) ? core.fail(cause.defect.error) : core.failCause(cause),
    onDone: core.succeedNow
  });
  return core.pipeTo(core.pipeTo(core.pipeTo(self, reader), that), writer);
}));
/** @internal */
export const provideService = /*#__PURE__*/dual(3, (self, tag, service) => {
  return core.flatMap(context(), context => core.provideContext(self, Context.add(context, tag, service)));
});
/** @internal */
export const provideLayer = /*#__PURE__*/dual(2, (self, layer) => unwrapScopedWith(scope => Effect.map(Layer.buildWithScope(layer, scope), context => core.provideContext(self, context))));
/** @internal */
export const mapInputContext = /*#__PURE__*/dual(2, (self, f) => contextWithChannel(context => core.provideContext(self, f(context))));
/** @internal */
export const provideSomeLayer = /*#__PURE__*/dual(2, (self, layer) =>
// @ts-expect-error
provideLayer(self, Layer.merge(Layer.context(), layer)));
/** @internal */
export const read = () => core.readOrFail(Option.none());
/** @internal */
export const repeated = self => core.flatMap(self, () => repeated(self));
/** @internal */
export const run = self => Effect.scopedWith(scope => executor.runIn(self, scope));
/** @internal */
export const runCollect = self => run(core.collectElements(self));
/** @internal */
export const runDrain = self => run(drain(self));
/** @internal */
export const runScoped = self => Effect.scopeWith(scope => executor.runIn(self, scope));
/** @internal */
export const scoped = effect => unwrap(Effect.uninterruptibleMask(restore => Effect.map(Scope.make(), scope => core.acquireReleaseOut(Effect.tapErrorCause(restore(Scope.extend(effect, scope)), cause => Scope.close(scope, Exit.failCause(cause))), (_, exit) => Scope.close(scope, exit)))));
/** @internal */
export const scopedWith = f => unwrapScoped(Effect.map(Effect.scope, scope => core.flatMap(core.fromEffect(f(scope)), core.write)));
/** @internal */
export const service = tag => core.fromEffect(tag);
/** @internal */
export const serviceWith = tag => f => map(service(tag), f);
/** @internal */
export const serviceWithChannel = tag => f => core.flatMap(service(tag), f);
/** @internal */
export const serviceWithEffect = tag => f => mapEffect(service(tag), f);
/** @internal */
export const splitLines = () => core.suspend(() => {
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
export const toPubSub = pubsub => toQueue(pubsub);
/** @internal */
export const toPull = self => Effect.flatMap(Effect.scope, scope => toPullIn(self, scope));
/** @internal */
export const toPullIn = /*#__PURE__*/dual(2, (self, scope) => Effect.zip(Effect.sync(() => new executor.ChannelExecutor(self, void 0, identity)), Effect.runtime()).pipe(Effect.tap(([executor, runtime]) => Scope.addFinalizerExit(scope, exit => {
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
        return pipe(state.effect, Effect.flatMap(() => interpretToPull(exec.run(), exec)));
      }
    case ChannelStateOpCodes.OP_READ:
      {
        return executor.readUpstream(state, () => interpretToPull(exec.run(), exec), cause => Effect.failCause(cause));
      }
  }
};
/** @internal */
export const toQueue = queue => core.suspend(() => toQueueInternal(queue));
/** @internal */
const toQueueInternal = queue => {
  return core.readWithCause({
    onInput: elem => core.flatMap(core.fromEffect(Queue.offer(queue, Either.right(elem))), () => toQueueInternal(queue)),
    onFailure: cause => core.fromEffect(Queue.offer(queue, Either.left(Exit.failCause(cause)))),
    onDone: done => core.fromEffect(Queue.offer(queue, Either.left(Exit.succeed(done))))
  });
};
/** @internal */
export const unwrap = channel => flatten(core.fromEffect(channel));
/** @internal */
export const unwrapScoped = self => core.concatAllWith(scoped(self), (d, _) => d, (d, _) => d);
/** @internal */
export const unwrapScopedWith = f => core.concatAllWith(scopedWith(f), (d, _) => d, (d, _) => d);
/** @internal */
export const updateService = /*#__PURE__*/dual(3, (self, tag, f) => mapInputContext(self, context => Context.merge(context, Context.make(tag, f(Context.unsafeGet(context, tag))))));
/** @internal */
export const withSpan = function () {
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
export const writeAll = (...outs) => writeChunk(Chunk.fromIterable(outs));
/** @internal */
export const writeChunk = outs => writeChunkWriter(0, outs.length, outs);
/** @internal */
const writeChunkWriter = (idx, len, chunk) => {
  return idx === len ? core.void : pipe(core.write(pipe(chunk, Chunk.unsafeGet(idx))), core.flatMap(() => writeChunkWriter(idx + 1, len, chunk)));
};
/** @internal */
export const zip = /*#__PURE__*/dual(args => core.isChannel(args[1]), (self, that, options) => options?.concurrent ? mergeWith(self, {
  other: that,
  onSelfDone: exit1 => mergeDecision.Await(exit2 => Effect.suspend(() => Exit.zip(exit1, exit2))),
  onOtherDone: exit2 => mergeDecision.Await(exit1 => Effect.suspend(() => Exit.zip(exit1, exit2)))
}) : core.flatMap(self, a => map(that, b => [a, b])));
/** @internal */
export const zipLeft = /*#__PURE__*/dual(args => core.isChannel(args[1]), (self, that, options) => options?.concurrent ? map(zip(self, that, {
  concurrent: true
}), tuple => tuple[0]) : core.flatMap(self, z => as(that, z)));
/** @internal */
export const zipRight = /*#__PURE__*/dual(args => core.isChannel(args[1]), (self, that, options) => options?.concurrent ? map(zip(self, that, {
  concurrent: true
}), tuple => tuple[1]) : core.flatMap(self, () => that));
/** @internal */
export const ChannelExceptionTypeId = /*#__PURE__*/Symbol.for("effect/Channel/ChannelException");
/** @internal */
export const ChannelException = error => ({
  _tag: "ChannelException",
  [ChannelExceptionTypeId]: ChannelExceptionTypeId,
  error
});
/** @internal */
export const isChannelException = u => hasProperty(u, ChannelExceptionTypeId);
//# sourceMappingURL=channel.js.map