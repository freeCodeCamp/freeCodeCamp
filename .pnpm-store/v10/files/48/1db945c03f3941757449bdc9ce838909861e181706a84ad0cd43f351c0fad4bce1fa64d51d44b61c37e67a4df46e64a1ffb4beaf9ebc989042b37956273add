"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = exports.succeed = exports.splitWhere = exports.some = exports.serviceWithSink = exports.serviceWithEffect = exports.serviceWith = exports.service = exports.refineOrDieWith = exports.refineOrDie = exports.raceWith = exports.raceBoth = exports.race = exports.provideContext = exports.orElse = exports.never = exports.mkString = exports.mapLeftover = exports.mapInputEffect = exports.mapInputChunksEffect = exports.mapInputChunks = exports.mapInput = exports.mapError = exports.mapEffect = exports.map = exports.leftover = exports.last = exports.isSink = exports.ignoreLeftover = exports.head = exports.fromQueue = exports.fromPush = exports.fromPubSub = exports.fromEffect = exports.fromChannel = exports.forEachWhile = exports.forEachChunkWhile = exports.forEachChunk = exports.forEach = exports.foldWeightedEffect = exports.foldWeightedDecomposeEffect = exports.foldWeightedDecompose = exports.foldWeighted = exports.foldUntilEffect = exports.foldUntil = exports.foldSink = exports.foldLeftEffect = exports.foldLeftChunksEffect = exports.foldLeftChunks = exports.foldLeft = exports.foldEffect = exports.foldChunksEffect = exports.foldChunks = exports.fold = exports.flatMap = exports.findEffect = exports.filterInputEffect = exports.filterInput = exports.failSync = exports.failCauseSync = exports.failCause = exports.fail = exports.every = exports.ensuringWith = exports.ensuring = exports.dropWhileEffect = exports.dropWhile = exports.dropUntilEffect = exports.dropUntil = exports.drop = exports.drain = exports.dimapEffect = exports.dimapChunksEffect = exports.dimapChunks = exports.dimap = exports.dieSync = exports.dieMessage = exports.die = exports.count = exports.contextWithSink = exports.contextWithEffect = exports.contextWith = exports.context = exports.collectLeftover = exports.collectAllWhileWith = exports.collectAllWhileEffect = exports.collectAllWhile = exports.collectAllUntilEffect = exports.collectAllUntil = exports.collectAllToSetN = exports.collectAllToSet = exports.collectAllToMapN = exports.collectAllToMap = exports.collectAllN = exports.collectAllFrom = exports.collectAll = exports.channelToSink = exports.as = exports.SinkTypeId = exports.SinkImpl = void 0;
exports.zipWith = exports.zipRight = exports.zipLeft = exports.zip = exports.withDuration = exports.unwrapScopedWith = exports.unwrapScoped = exports.unwrap = exports.toChannel = exports.timed = exports.take = exports.sync = exports.suspend = exports.summarized = void 0;
var Arr = _interopRequireWildcard(require("../Array.js"));
var Cause = _interopRequireWildcard(require("../Cause.js"));
var Chunk = _interopRequireWildcard(require("../Chunk.js"));
var Clock = _interopRequireWildcard(require("../Clock.js"));
var Duration = _interopRequireWildcard(require("../Duration.js"));
var Effect = _interopRequireWildcard(require("../Effect.js"));
var Either = _interopRequireWildcard(require("../Either.js"));
var Exit = _interopRequireWildcard(require("../Exit.js"));
var _Function = require("../Function.js");
var HashMap = _interopRequireWildcard(require("../HashMap.js"));
var HashSet = _interopRequireWildcard(require("../HashSet.js"));
var Option = _interopRequireWildcard(require("../Option.js"));
var _Pipeable = require("../Pipeable.js");
var _Predicate = require("../Predicate.js");
var PubSub = _interopRequireWildcard(require("../PubSub.js"));
var Queue = _interopRequireWildcard(require("../Queue.js"));
var Ref = _interopRequireWildcard(require("../Ref.js"));
var Scope = _interopRequireWildcard(require("../Scope.js"));
var channel = _interopRequireWildcard(require("./channel.js"));
var mergeDecision = _interopRequireWildcard(require("./channel/mergeDecision.js"));
var core = _interopRequireWildcard(require("./core-stream.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const SinkTypeId = exports.SinkTypeId = /*#__PURE__*/Symbol.for("effect/Sink");
const sinkVariance = {
  /* c8 ignore next */
  _A: _ => _,
  /* c8 ignore next */
  _In: _ => _,
  /* c8 ignore next */
  _L: _ => _,
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _R: _ => _
};
/** @internal */
class SinkImpl {
  channel;
  [SinkTypeId] = sinkVariance;
  constructor(channel) {
    this.channel = channel;
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
exports.SinkImpl = SinkImpl;
const isSink = u => (0, _Predicate.hasProperty)(u, SinkTypeId);
/** @internal */
exports.isSink = isSink;
const suspend = evaluate => new SinkImpl(core.suspend(() => toChannel(evaluate())));
/** @internal */
exports.suspend = suspend;
const as = exports.as = /*#__PURE__*/(0, _Function.dual)(2, (self, a) => (0, _Function.pipe)(self, map(() => a)));
/** @internal */
const collectAll = () => new SinkImpl(collectAllLoop(Chunk.empty()));
/** @internal */
exports.collectAll = collectAll;
const collectAllLoop = acc => core.readWithCause({
  onInput: chunk => collectAllLoop((0, _Function.pipe)(acc, Chunk.appendAll(chunk))),
  onFailure: core.failCause,
  onDone: () => core.succeed(acc)
});
/** @internal */
const collectAllN = n => suspend(() => fromChannel(collectAllNLoop(n, Chunk.empty())));
/** @internal */
exports.collectAllN = collectAllN;
const collectAllNLoop = (n, acc) => core.readWithCause({
  onInput: chunk => {
    const [collected, leftovers] = Chunk.splitAt(chunk, n);
    if (collected.length < n) {
      return collectAllNLoop(n - collected.length, Chunk.appendAll(acc, collected));
    }
    if (Chunk.isEmpty(leftovers)) {
      return core.succeed(Chunk.appendAll(acc, collected));
    }
    return core.flatMap(core.write(leftovers), () => core.succeed(Chunk.appendAll(acc, collected)));
  },
  onFailure: core.failCause,
  onDone: () => core.succeed(acc)
});
/** @internal */
const collectAllFrom = self => collectAllWhileWith(self, {
  initial: Chunk.empty(),
  while: _Function.constTrue,
  body: (chunk, a) => (0, _Function.pipe)(chunk, Chunk.append(a))
});
/** @internal */
exports.collectAllFrom = collectAllFrom;
const collectAllToMap = (key, merge) => {
  return foldLeftChunks(HashMap.empty(), (map, chunk) => (0, _Function.pipe)(chunk, Chunk.reduce(map, (map, input) => {
    const k = key(input);
    const v = (0, _Function.pipe)(map, HashMap.has(k)) ? merge((0, _Function.pipe)(map, HashMap.unsafeGet(k)), input) : input;
    return (0, _Function.pipe)(map, HashMap.set(k, v));
  })));
};
/** @internal */
exports.collectAllToMap = collectAllToMap;
const collectAllToMapN = (n, key, merge) => {
  return foldWeighted({
    initial: HashMap.empty(),
    maxCost: n,
    cost: (acc, input) => (0, _Function.pipe)(acc, HashMap.has(key(input))) ? 0 : 1,
    body: (acc, input) => {
      const k = key(input);
      const v = (0, _Function.pipe)(acc, HashMap.has(k)) ? merge((0, _Function.pipe)(acc, HashMap.unsafeGet(k)), input) : input;
      return (0, _Function.pipe)(acc, HashMap.set(k, v));
    }
  });
};
/** @internal */
exports.collectAllToMapN = collectAllToMapN;
const collectAllToSet = () => foldLeftChunks(HashSet.empty(), (acc, chunk) => (0, _Function.pipe)(chunk, Chunk.reduce(acc, (acc, input) => (0, _Function.pipe)(acc, HashSet.add(input)))));
/** @internal */
exports.collectAllToSet = collectAllToSet;
const collectAllToSetN = n => foldWeighted({
  initial: HashSet.empty(),
  maxCost: n,
  cost: (acc, input) => HashSet.has(acc, input) ? 0 : 1,
  body: (acc, input) => HashSet.add(acc, input)
});
/** @internal */
exports.collectAllToSetN = collectAllToSetN;
const collectAllUntil = p => {
  return (0, _Function.pipe)(fold([Chunk.empty(), true], tuple => tuple[1], ([chunk, _], input) => [(0, _Function.pipe)(chunk, Chunk.append(input)), !p(input)]), map(tuple => tuple[0]));
};
/** @internal */
exports.collectAllUntil = collectAllUntil;
const collectAllUntilEffect = p => {
  return (0, _Function.pipe)(foldEffect([Chunk.empty(), true], tuple => tuple[1], ([chunk, _], input) => (0, _Function.pipe)(p(input), Effect.map(bool => [(0, _Function.pipe)(chunk, Chunk.append(input)), !bool]))), map(tuple => tuple[0]));
};
/** @internal */
exports.collectAllUntilEffect = collectAllUntilEffect;
const collectAllWhile = predicate => fromChannel(collectAllWhileReader(predicate, Chunk.empty()));
/** @internal */
exports.collectAllWhile = collectAllWhile;
const collectAllWhileReader = (predicate, done) => core.readWith({
  onInput: input => {
    const [collected, leftovers] = (0, _Function.pipe)(Chunk.toReadonlyArray(input), Arr.span(predicate));
    if (leftovers.length === 0) {
      return collectAllWhileReader(predicate, (0, _Function.pipe)(done, Chunk.appendAll(Chunk.unsafeFromArray(collected))));
    }
    return (0, _Function.pipe)(core.write(Chunk.unsafeFromArray(leftovers)), channel.zipRight(core.succeed((0, _Function.pipe)(done, Chunk.appendAll(Chunk.unsafeFromArray(collected))))));
  },
  onFailure: core.fail,
  onDone: () => core.succeed(done)
});
/** @internal */
const collectAllWhileEffect = predicate => fromChannel(collectAllWhileEffectReader(predicate, Chunk.empty()));
/** @internal */
exports.collectAllWhileEffect = collectAllWhileEffect;
const collectAllWhileEffectReader = (predicate, done) => core.readWith({
  onInput: input => (0, _Function.pipe)(core.fromEffect((0, _Function.pipe)(input, Effect.takeWhile(predicate), Effect.map(Chunk.unsafeFromArray))), core.flatMap(collected => {
    const leftovers = (0, _Function.pipe)(input, Chunk.drop(collected.length));
    if (Chunk.isEmpty(leftovers)) {
      return collectAllWhileEffectReader(predicate, (0, _Function.pipe)(done, Chunk.appendAll(collected)));
    }
    return (0, _Function.pipe)(core.write(leftovers), channel.zipRight(core.succeed((0, _Function.pipe)(done, Chunk.appendAll(collected)))));
  })),
  onFailure: core.fail,
  onDone: () => core.succeed(done)
});
/** @internal */
const collectAllWhileWith = exports.collectAllWhileWith = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => {
  const refs = (0, _Function.pipe)(Ref.make(Chunk.empty()), Effect.zip(Ref.make(false)));
  const newChannel = (0, _Function.pipe)(core.fromEffect(refs), core.flatMap(([leftoversRef, upstreamDoneRef]) => {
    const upstreamMarker = core.readWith({
      onInput: input => (0, _Function.pipe)(core.write(input), core.flatMap(() => upstreamMarker)),
      onFailure: core.fail,
      onDone: done => (0, _Function.pipe)(core.fromEffect(Ref.set(upstreamDoneRef, true)), channel.as(done))
    });
    return (0, _Function.pipe)(upstreamMarker, core.pipeTo(channel.bufferChunk(leftoversRef)), core.pipeTo(collectAllWhileWithLoop(self, leftoversRef, upstreamDoneRef, options.initial, options.while, options.body)));
  }));
  return new SinkImpl(newChannel);
});
const collectAllWhileWithLoop = (self, leftoversRef, upstreamDoneRef, currentResult, p, f) => {
  return (0, _Function.pipe)(toChannel(self), channel.doneCollect, channel.foldChannel({
    onFailure: core.fail,
    onSuccess: ([leftovers, doneValue]) => p(doneValue) ? (0, _Function.pipe)(core.fromEffect(Ref.set(leftoversRef, Chunk.flatten(leftovers))), core.flatMap(() => (0, _Function.pipe)(core.fromEffect(Ref.get(upstreamDoneRef)), core.flatMap(upstreamDone => {
      const accumulatedResult = f(currentResult, doneValue);
      return upstreamDone ? (0, _Function.pipe)(core.write(Chunk.flatten(leftovers)), channel.as(accumulatedResult)) : collectAllWhileWithLoop(self, leftoversRef, upstreamDoneRef, accumulatedResult, p, f);
    })))) : (0, _Function.pipe)(core.write(Chunk.flatten(leftovers)), channel.as(currentResult))
  }));
};
/** @internal */
const collectLeftover = self => new SinkImpl((0, _Function.pipe)(core.collectElements(toChannel(self)), channel.map(([chunks, z]) => [z, Chunk.flatten(chunks)])));
/** @internal */
exports.collectLeftover = collectLeftover;
const mapInput = exports.mapInput = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => (0, _Function.pipe)(self, mapInputChunks(Chunk.map(f))));
/** @internal */
const mapInputEffect = exports.mapInputEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => mapInputChunksEffect(self, chunk => Effect.map(Effect.forEach(chunk, v => f(v)), Chunk.unsafeFromArray)));
/** @internal */
const mapInputChunks = exports.mapInputChunks = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const loop = core.readWith({
    onInput: chunk => (0, _Function.pipe)(core.write(f(chunk)), core.flatMap(() => loop)),
    onFailure: core.fail,
    onDone: core.succeed
  });
  return new SinkImpl((0, _Function.pipe)(loop, core.pipeTo(toChannel(self))));
});
/** @internal */
const mapInputChunksEffect = exports.mapInputChunksEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const loop = core.readWith({
    onInput: chunk => (0, _Function.pipe)(core.fromEffect(f(chunk)), core.flatMap(core.write), core.flatMap(() => loop)),
    onFailure: core.fail,
    onDone: core.succeed
  });
  return new SinkImpl((0, _Function.pipe)(loop, channel.pipeToOrFail(toChannel(self))));
});
/** @internal */
const die = defect => failCause(Cause.die(defect));
/** @internal */
exports.die = die;
const dieMessage = message => failCause(Cause.die(new Cause.RuntimeException(message)));
/** @internal */
exports.dieMessage = dieMessage;
const dieSync = evaluate => failCauseSync(() => Cause.die(evaluate()));
/** @internal */
exports.dieSync = dieSync;
const dimap = exports.dimap = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => map(mapInput(self, options.onInput), options.onDone));
/** @internal */
const dimapEffect = exports.dimapEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => mapEffect(mapInputEffect(self, options.onInput), options.onDone));
/** @internal */
const dimapChunks = exports.dimapChunks = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => map(mapInputChunks(self, options.onInput), options.onDone));
/** @internal */
const dimapChunksEffect = exports.dimapChunksEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => mapEffect(mapInputChunksEffect(self, options.onInput), options.onDone));
/** @internal */
const drain = exports.drain = /*#__PURE__*/new SinkImpl(/*#__PURE__*/channel.drain(/*#__PURE__*/channel.identityChannel()));
/** @internal */
const drop = n => suspend(() => new SinkImpl(dropLoop(n)));
/** @internal */
exports.drop = drop;
const dropLoop = n => core.readWith({
  onInput: input => {
    const dropped = (0, _Function.pipe)(input, Chunk.drop(n));
    const leftover = Math.max(n - input.length, 0);
    const more = Chunk.isEmpty(input) || leftover > 0;
    if (more) {
      return dropLoop(leftover);
    }
    return (0, _Function.pipe)(core.write(dropped), channel.zipRight(channel.identityChannel()));
  },
  onFailure: core.fail,
  onDone: () => core.void
});
/** @internal */
const dropUntil = predicate => new SinkImpl((0, _Function.pipe)(toChannel(dropWhile(input => !predicate(input))), channel.pipeToOrFail(toChannel(drop(1)))));
/** @internal */
exports.dropUntil = dropUntil;
const dropUntilEffect = predicate => suspend(() => new SinkImpl(dropUntilEffectReader(predicate)));
/** @internal */
exports.dropUntilEffect = dropUntilEffect;
const dropUntilEffectReader = predicate => core.readWith({
  onInput: input => (0, _Function.pipe)(input, Effect.dropUntil(predicate), Effect.map(leftover => {
    const more = leftover.length === 0;
    return more ? dropUntilEffectReader(predicate) : (0, _Function.pipe)(core.write(Chunk.unsafeFromArray(leftover)), channel.zipRight(channel.identityChannel()));
  }), channel.unwrap),
  onFailure: core.fail,
  onDone: () => core.void
});
/** @internal */
const dropWhile = predicate => new SinkImpl(dropWhileReader(predicate));
/** @internal */
exports.dropWhile = dropWhile;
const dropWhileReader = predicate => core.readWith({
  onInput: input => {
    const out = (0, _Function.pipe)(input, Chunk.dropWhile(predicate));
    if (Chunk.isEmpty(out)) {
      return dropWhileReader(predicate);
    }
    return (0, _Function.pipe)(core.write(out), channel.zipRight(channel.identityChannel()));
  },
  onFailure: core.fail,
  onDone: core.succeedNow
});
/** @internal */
const dropWhileEffect = predicate => suspend(() => new SinkImpl(dropWhileEffectReader(predicate)));
/** @internal */
exports.dropWhileEffect = dropWhileEffect;
const dropWhileEffectReader = predicate => core.readWith({
  onInput: input => (0, _Function.pipe)(input, Effect.dropWhile(predicate), Effect.map(leftover => {
    const more = leftover.length === 0;
    return more ? dropWhileEffectReader(predicate) : (0, _Function.pipe)(core.write(Chunk.unsafeFromArray(leftover)), channel.zipRight(channel.identityChannel()));
  }), channel.unwrap),
  onFailure: core.fail,
  onDone: () => core.void
});
/** @internal */
const ensuring = exports.ensuring = /*#__PURE__*/(0, _Function.dual)(2, (self, finalizer) => new SinkImpl((0, _Function.pipe)(self, toChannel, channel.ensuring(finalizer))));
/** @internal */
const ensuringWith = exports.ensuringWith = /*#__PURE__*/(0, _Function.dual)(2, (self, finalizer) => new SinkImpl((0, _Function.pipe)(self, toChannel, core.ensuringWith(finalizer))));
/** @internal */
const context = () => fromEffect(Effect.context());
/** @internal */
exports.context = context;
const contextWith = f => (0, _Function.pipe)(context(), map(f));
/** @internal */
exports.contextWith = contextWith;
const contextWithEffect = f => (0, _Function.pipe)(context(), mapEffect(f));
/** @internal */
exports.contextWithEffect = contextWithEffect;
const contextWithSink = f => new SinkImpl(channel.unwrap(Effect.contextWith(context => toChannel(f(context)))));
/** @internal */
exports.contextWithSink = contextWithSink;
const every = predicate => fold(true, _Function.identity, (acc, input) => acc && predicate(input));
/** @internal */
exports.every = every;
const fail = e => new SinkImpl(core.fail(e));
/** @internal */
exports.fail = fail;
const failSync = evaluate => new SinkImpl(core.failSync(evaluate));
/** @internal */
exports.failSync = failSync;
const failCause = cause => new SinkImpl(core.failCause(cause));
/** @internal */
exports.failCause = failCause;
const failCauseSync = evaluate => new SinkImpl(core.failCauseSync(evaluate));
/** @internal */
exports.failCauseSync = failCauseSync;
const filterInput = f => {
  return self => (0, _Function.pipe)(self, mapInputChunks(Chunk.filter(f)));
};
/** @internal */
exports.filterInput = filterInput;
const filterInputEffect = exports.filterInputEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => mapInputChunksEffect(self, chunk => Effect.map(Effect.filter(chunk, f), Chunk.unsafeFromArray)));
/** @internal */
const findEffect = exports.findEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const newChannel = (0, _Function.pipe)(core.fromEffect((0, _Function.pipe)(Ref.make(Chunk.empty()), Effect.zip(Ref.make(false)))), core.flatMap(([leftoversRef, upstreamDoneRef]) => {
    const upstreamMarker = core.readWith({
      onInput: input => (0, _Function.pipe)(core.write(input), core.flatMap(() => upstreamMarker)),
      onFailure: core.fail,
      onDone: done => (0, _Function.pipe)(core.fromEffect(Ref.set(upstreamDoneRef, true)), channel.as(done))
    });
    const loop = channel.foldChannel(core.collectElements(toChannel(self)), {
      onFailure: core.fail,
      onSuccess: ([leftovers, doneValue]) => (0, _Function.pipe)(core.fromEffect(f(doneValue)), core.flatMap(satisfied => (0, _Function.pipe)(core.fromEffect(Ref.set(leftoversRef, Chunk.flatten(leftovers))), channel.zipRight((0, _Function.pipe)(core.fromEffect(Ref.get(upstreamDoneRef)), core.flatMap(upstreamDone => {
        if (satisfied) {
          return (0, _Function.pipe)(core.write(Chunk.flatten(leftovers)), channel.as(Option.some(doneValue)));
        }
        if (upstreamDone) {
          return (0, _Function.pipe)(core.write(Chunk.flatten(leftovers)), channel.as(Option.none()));
        }
        return loop;
      }))))))
    });
    return (0, _Function.pipe)(upstreamMarker, core.pipeTo(channel.bufferChunk(leftoversRef)), core.pipeTo(loop));
  }));
  return new SinkImpl(newChannel);
});
/** @internal */
const fold = (s, contFn, f) => suspend(() => new SinkImpl(foldReader(s, contFn, f)));
/** @internal */
exports.fold = fold;
const foldReader = (s, contFn, f) => {
  if (!contFn(s)) {
    return core.succeedNow(s);
  }
  return core.readWith({
    onInput: input => {
      const [nextS, leftovers] = foldChunkSplit(s, input, contFn, f, 0, input.length);
      if (Chunk.isNonEmpty(leftovers)) {
        return (0, _Function.pipe)(core.write(leftovers), channel.as(nextS));
      }
      return foldReader(nextS, contFn, f);
    },
    onFailure: core.fail,
    onDone: () => core.succeedNow(s)
  });
};
/** @internal */
const foldChunkSplit = (s, chunk, contFn, f, index, length) => {
  if (index === length) {
    return [s, Chunk.empty()];
  }
  const s1 = f(s, (0, _Function.pipe)(chunk, Chunk.unsafeGet(index)));
  if (contFn(s1)) {
    return foldChunkSplit(s1, chunk, contFn, f, index + 1, length);
  }
  return [s1, (0, _Function.pipe)(chunk, Chunk.drop(index + 1))];
};
/** @internal */
const foldSink = exports.foldSink = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => {
  const newChannel = (0, _Function.pipe)(toChannel(self), core.collectElements, channel.foldChannel({
    onFailure: error => toChannel(options.onFailure(error)),
    onSuccess: ([leftovers, z]) => core.suspend(() => {
      const leftoversRef = {
        ref: (0, _Function.pipe)(leftovers, Chunk.filter(Chunk.isNonEmpty))
      };
      const refReader = (0, _Function.pipe)(core.sync(() => {
        const ref = leftoversRef.ref;
        leftoversRef.ref = Chunk.empty();
        return ref;
      }),
      // This cast is safe because of the L1 >: L <: In1 bound. It follows that
      // L <: In1 and therefore Chunk[L] can be safely cast to Chunk[In1].
      core.flatMap(chunk => channel.writeChunk(chunk)));
      const passthrough = channel.identityChannel();
      const continuationSink = (0, _Function.pipe)(refReader, channel.zipRight(passthrough), core.pipeTo(toChannel(options.onSuccess(z))));
      return core.flatMap(core.collectElements(continuationSink), ([newLeftovers, z1]) => (0, _Function.pipe)(core.succeed(leftoversRef.ref), core.flatMap(channel.writeChunk), channel.zipRight(channel.writeChunk(newLeftovers)), channel.as(z1)));
    })
  }));
  return new SinkImpl(newChannel);
});
/** @internal */
const foldChunks = (s, contFn, f) => suspend(() => new SinkImpl(foldChunksReader(s, contFn, f)));
/** @internal */
exports.foldChunks = foldChunks;
const foldChunksReader = (s, contFn, f) => {
  if (!contFn(s)) {
    return core.succeedNow(s);
  }
  return core.readWith({
    onInput: input => foldChunksReader(f(s, input), contFn, f),
    onFailure: core.fail,
    onDone: () => core.succeedNow(s)
  });
};
/** @internal */
const foldChunksEffect = (s, contFn, f) => suspend(() => new SinkImpl(foldChunksEffectReader(s, contFn, f)));
/** @internal */
exports.foldChunksEffect = foldChunksEffect;
const foldChunksEffectReader = (s, contFn, f) => {
  if (!contFn(s)) {
    return core.succeedNow(s);
  }
  return core.readWith({
    onInput: input => (0, _Function.pipe)(core.fromEffect(f(s, input)), core.flatMap(s => foldChunksEffectReader(s, contFn, f))),
    onFailure: core.fail,
    onDone: () => core.succeedNow(s)
  });
};
/** @internal */
const foldEffect = (s, contFn, f) => suspend(() => new SinkImpl(foldEffectReader(s, contFn, f)));
/** @internal */
exports.foldEffect = foldEffect;
const foldEffectReader = (s, contFn, f) => {
  if (!contFn(s)) {
    return core.succeedNow(s);
  }
  return core.readWith({
    onInput: input => (0, _Function.pipe)(core.fromEffect(foldChunkSplitEffect(s, input, contFn, f)), core.flatMap(([nextS, leftovers]) => (0, _Function.pipe)(leftovers, Option.match({
      onNone: () => foldEffectReader(nextS, contFn, f),
      onSome: leftover => (0, _Function.pipe)(core.write(leftover), channel.as(nextS))
    })))),
    onFailure: core.fail,
    onDone: () => core.succeedNow(s)
  });
};
/** @internal */
const foldChunkSplitEffect = (s, chunk, contFn, f) => foldChunkSplitEffectInternal(s, chunk, 0, chunk.length, contFn, f);
/** @internal */
const foldChunkSplitEffectInternal = (s, chunk, index, length, contFn, f) => {
  if (index === length) {
    return Effect.succeed([s, Option.none()]);
  }
  return (0, _Function.pipe)(f(s, (0, _Function.pipe)(chunk, Chunk.unsafeGet(index))), Effect.flatMap(s1 => contFn(s1) ? foldChunkSplitEffectInternal(s1, chunk, index + 1, length, contFn, f) : Effect.succeed([s1, Option.some((0, _Function.pipe)(chunk, Chunk.drop(index + 1)))])));
};
/** @internal */
const foldLeft = (s, f) => ignoreLeftover(fold(s, _Function.constTrue, f));
/** @internal */
exports.foldLeft = foldLeft;
const foldLeftChunks = (s, f) => foldChunks(s, _Function.constTrue, f);
/** @internal */
exports.foldLeftChunks = foldLeftChunks;
const foldLeftChunksEffect = (s, f) => ignoreLeftover(foldChunksEffect(s, _Function.constTrue, f));
/** @internal */
exports.foldLeftChunksEffect = foldLeftChunksEffect;
const foldLeftEffect = (s, f) => foldEffect(s, _Function.constTrue, f);
/** @internal */
exports.foldLeftEffect = foldLeftEffect;
const foldUntil = (s, max, f) => (0, _Function.pipe)(fold([s, 0], tuple => tuple[1] < max, ([output, count], input) => [f(output, input), count + 1]), map(tuple => tuple[0]));
/** @internal */
exports.foldUntil = foldUntil;
const foldUntilEffect = (s, max, f) => (0, _Function.pipe)(foldEffect([s, 0], tuple => tuple[1] < max, ([output, count], input) => (0, _Function.pipe)(f(output, input), Effect.map(s => [s, count + 1]))), map(tuple => tuple[0]));
/** @internal */
exports.foldUntilEffect = foldUntilEffect;
const foldWeighted = options => foldWeightedDecompose({
  ...options,
  decompose: Chunk.of
});
/** @internal */
exports.foldWeighted = foldWeighted;
const foldWeightedDecompose = options => suspend(() => new SinkImpl(foldWeightedDecomposeLoop(options.initial, 0, false, options.maxCost, options.cost, options.decompose, options.body)));
/** @internal */
exports.foldWeightedDecompose = foldWeightedDecompose;
const foldWeightedDecomposeLoop = (s, cost, dirty, max, costFn, decompose, f) => core.readWith({
  onInput: input => {
    const [nextS, nextCost, nextDirty, leftovers] = foldWeightedDecomposeFold(input, s, cost, dirty, max, costFn, decompose, f);
    if (Chunk.isNonEmpty(leftovers)) {
      return (0, _Function.pipe)(core.write(leftovers), channel.zipRight(core.succeedNow(nextS)));
    }
    if (cost > max) {
      return core.succeedNow(nextS);
    }
    return foldWeightedDecomposeLoop(nextS, nextCost, nextDirty, max, costFn, decompose, f);
  },
  onFailure: core.fail,
  onDone: () => core.succeedNow(s)
});
/** @internal */
const foldWeightedDecomposeFold = (input, s, cost, dirty, max, costFn, decompose, f) => {
  for (let index = 0; index < input.length; index++) {
    const elem = Chunk.unsafeGet(input, index);
    const prevCost = cost;
    cost = cost + costFn(s, elem);
    if (cost <= max) {
      s = f(s, elem);
      dirty = true;
      continue;
    }
    const decomposed = decompose(elem);
    if (decomposed.length <= 1 && !dirty) {
      // If `elem` cannot be decomposed, we need to cross the `max` threshold. To
      // minimize "injury", we only allow this when we haven't added anything else
      // to the aggregate (dirty = false).
      return [f(s, elem), cost, true, Chunk.drop(input, index + 1)];
    }
    if (decomposed.length <= 1 && dirty) {
      // If the state is dirty and `elem` cannot be decomposed, we stop folding
      // and include `elem` in the leftovers.
      return [s, prevCost, dirty, Chunk.drop(input, index)];
    }
    // `elem` got decomposed, so we will recurse with the decomposed elements pushed
    // into the chunk we're processing and see if we can aggregate further.
    input = Chunk.appendAll(decomposed, Chunk.drop(input, index + 1));
    cost = prevCost;
    index = -1;
  }
  return [s, cost, dirty, Chunk.empty()];
};
/** @internal */
const foldWeightedDecomposeEffect = options => suspend(() => new SinkImpl(foldWeightedDecomposeEffectLoop(options.initial, options.maxCost, options.cost, options.decompose, options.body, 0, false)));
/** @internal */
exports.foldWeightedDecomposeEffect = foldWeightedDecomposeEffect;
const foldWeightedEffect = options => foldWeightedDecomposeEffect({
  ...options,
  decompose: input => Effect.succeed(Chunk.of(input))
});
exports.foldWeightedEffect = foldWeightedEffect;
const foldWeightedDecomposeEffectLoop = (s, max, costFn, decompose, f, cost, dirty) => core.readWith({
  onInput: input => (0, _Function.pipe)(core.fromEffect(foldWeightedDecomposeEffectFold(s, max, costFn, decompose, f, input, dirty, cost, 0)), core.flatMap(([nextS, nextCost, nextDirty, leftovers]) => {
    if (Chunk.isNonEmpty(leftovers)) {
      return (0, _Function.pipe)(core.write(leftovers), channel.zipRight(core.succeedNow(nextS)));
    }
    if (cost > max) {
      return core.succeedNow(nextS);
    }
    return foldWeightedDecomposeEffectLoop(nextS, max, costFn, decompose, f, nextCost, nextDirty);
  })),
  onFailure: core.fail,
  onDone: () => core.succeedNow(s)
});
/** @internal */
const foldWeightedDecomposeEffectFold = (s, max, costFn, decompose, f, input, dirty, cost, index) => {
  if (index === input.length) {
    return Effect.succeed([s, cost, dirty, Chunk.empty()]);
  }
  const elem = (0, _Function.pipe)(input, Chunk.unsafeGet(index));
  return (0, _Function.pipe)(costFn(s, elem), Effect.map(newCost => cost + newCost), Effect.flatMap(total => {
    if (total <= max) {
      return (0, _Function.pipe)(f(s, elem), Effect.flatMap(s => foldWeightedDecomposeEffectFold(s, max, costFn, decompose, f, input, true, total, index + 1)));
    }
    return (0, _Function.pipe)(decompose(elem), Effect.flatMap(decomposed => {
      if (decomposed.length <= 1 && !dirty) {
        // If `elem` cannot be decomposed, we need to cross the `max` threshold. To
        // minimize "injury", we only allow this when we haven't added anything else
        // to the aggregate (dirty = false).
        return (0, _Function.pipe)(f(s, elem), Effect.map(s => [s, total, true, (0, _Function.pipe)(input, Chunk.drop(index + 1))]));
      }
      if (decomposed.length <= 1 && dirty) {
        // If the state is dirty and `elem` cannot be decomposed, we stop folding
        // and include `elem` in th leftovers.
        return Effect.succeed([s, cost, dirty, (0, _Function.pipe)(input, Chunk.drop(index))]);
      }
      // `elem` got decomposed, so we will recurse with the decomposed elements pushed
      // into the chunk we're processing and see if we can aggregate further.
      const next = (0, _Function.pipe)(decomposed, Chunk.appendAll((0, _Function.pipe)(input, Chunk.drop(index + 1))));
      return foldWeightedDecomposeEffectFold(s, max, costFn, decompose, f, next, dirty, cost, 0);
    }));
  }));
};
/** @internal */
const flatMap = exports.flatMap = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => foldSink(self, {
  onFailure: fail,
  onSuccess: f
}));
/** @internal */
const forEach = f => {
  const process = core.readWithCause({
    onInput: input => (0, _Function.pipe)(core.fromEffect(Effect.forEach(input, v => f(v), {
      discard: true
    })), core.flatMap(() => process)),
    onFailure: core.failCause,
    onDone: () => core.void
  });
  return new SinkImpl(process);
};
/** @internal */
exports.forEach = forEach;
const forEachChunk = f => {
  const process = core.readWithCause({
    onInput: input => (0, _Function.pipe)(core.fromEffect(f(input)), core.flatMap(() => process)),
    onFailure: core.failCause,
    onDone: () => core.void
  });
  return new SinkImpl(process);
};
/** @internal */
exports.forEachChunk = forEachChunk;
const forEachWhile = f => {
  const process = core.readWithCause({
    onInput: input => forEachWhileReader(f, input, 0, input.length, process),
    onFailure: core.failCause,
    onDone: () => core.void
  });
  return new SinkImpl(process);
};
/** @internal */
exports.forEachWhile = forEachWhile;
const forEachWhileReader = (f, input, index, length, cont) => {
  if (index === length) {
    return cont;
  }
  return (0, _Function.pipe)(core.fromEffect(f((0, _Function.pipe)(input, Chunk.unsafeGet(index)))), core.flatMap(bool => bool ? forEachWhileReader(f, input, index + 1, length, cont) : core.write((0, _Function.pipe)(input, Chunk.drop(index)))), channel.catchAll(error => (0, _Function.pipe)(core.write((0, _Function.pipe)(input, Chunk.drop(index))), channel.zipRight(core.fail(error)))));
};
/** @internal */
const forEachChunkWhile = f => {
  const reader = core.readWith({
    onInput: input => (0, _Function.pipe)(core.fromEffect(f(input)), core.flatMap(cont => cont ? reader : core.void)),
    onFailure: core.fail,
    onDone: () => core.void
  });
  return new SinkImpl(reader);
};
/** @internal */
exports.forEachChunkWhile = forEachChunkWhile;
const fromChannel = channel => new SinkImpl(channel);
/** @internal */
exports.fromChannel = fromChannel;
const fromEffect = effect => new SinkImpl(core.fromEffect(effect));
/** @internal */
exports.fromEffect = fromEffect;
const fromPubSub = (pubsub, options) => fromQueue(pubsub, options);
/** @internal */
exports.fromPubSub = fromPubSub;
const fromPush = push => new SinkImpl(channel.unwrapScoped((0, _Function.pipe)(push, Effect.map(fromPushPull))));
exports.fromPush = fromPush;
const fromPushPull = push => core.readWith({
  onInput: input => channel.foldChannel(core.fromEffect(push(Option.some(input))), {
    onFailure: ([either, leftovers]) => Either.match(either, {
      onLeft: error => (0, _Function.pipe)(core.write(leftovers), channel.zipRight(core.fail(error))),
      onRight: z => (0, _Function.pipe)(core.write(leftovers), channel.zipRight(core.succeedNow(z)))
    }),
    onSuccess: () => fromPushPull(push)
  }),
  onFailure: core.fail,
  onDone: () => channel.foldChannel(core.fromEffect(push(Option.none())), {
    onFailure: ([either, leftovers]) => Either.match(either, {
      onLeft: error => (0, _Function.pipe)(core.write(leftovers), channel.zipRight(core.fail(error))),
      onRight: z => (0, _Function.pipe)(core.write(leftovers), channel.zipRight(core.succeedNow(z)))
    }),
    onSuccess: () => core.fromEffect(Effect.dieMessage("BUG: Sink.fromPush - please report an issue at https://github.com/Effect-TS/effect/issues"))
  })
});
/** @internal */
const fromQueue = (queue, options) => options?.shutdown ? unwrapScoped(Effect.map(Effect.acquireRelease(Effect.succeed(queue), Queue.shutdown), fromQueue)) : forEachChunk(input => Queue.offerAll(queue, input));
/** @internal */
exports.fromQueue = fromQueue;
const head = () => fold(Option.none(), Option.isNone, (option, input) => Option.match(option, {
  onNone: () => Option.some(input),
  onSome: () => option
}));
/** @internal */
exports.head = head;
const ignoreLeftover = self => new SinkImpl(channel.drain(toChannel(self)));
/** @internal */
exports.ignoreLeftover = ignoreLeftover;
const last = () => foldLeftChunks(Option.none(), (s, input) => Option.orElse(Chunk.last(input), () => s));
/** @internal */
exports.last = last;
const leftover = chunk => new SinkImpl(core.suspend(() => core.write(chunk)));
/** @internal */
exports.leftover = leftover;
const map = exports.map = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  return new SinkImpl((0, _Function.pipe)(toChannel(self), channel.map(f)));
});
/** @internal */
const mapEffect = exports.mapEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => new SinkImpl((0, _Function.pipe)(toChannel(self), channel.mapEffect(f))));
/** @internal */
const mapError = exports.mapError = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => new SinkImpl((0, _Function.pipe)(toChannel(self), channel.mapError(f))));
/** @internal */
const mapLeftover = exports.mapLeftover = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => new SinkImpl((0, _Function.pipe)(toChannel(self), channel.mapOut(Chunk.map(f)))));
/** @internal */
const never = exports.never = /*#__PURE__*/fromEffect(Effect.never);
/** @internal */
const orElse = exports.orElse = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => new SinkImpl((0, _Function.pipe)(toChannel(self), channel.orElse(() => toChannel(that())))));
/** @internal */
const provideContext = exports.provideContext = /*#__PURE__*/(0, _Function.dual)(2, (self, context) => new SinkImpl((0, _Function.pipe)(toChannel(self), core.provideContext(context))));
/** @internal */
const race = exports.race = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => (0, _Function.pipe)(self, raceBoth(that), map(Either.merge)));
/** @internal */
const raceBoth = exports.raceBoth = /*#__PURE__*/(0, _Function.dual)(args => isSink(args[1]), (self, that, options) => raceWith(self, {
  other: that,
  onSelfDone: selfDone => mergeDecision.Done(Effect.map(selfDone, Either.left)),
  onOtherDone: thatDone => mergeDecision.Done(Effect.map(thatDone, Either.right)),
  capacity: options?.capacity ?? 16
}));
/** @internal */
const raceWith = exports.raceWith = /*#__PURE__*/(0, _Function.dual)(2, (self, options) => {
  function race(scope) {
    return Effect.gen(function* () {
      const pubsub = yield* PubSub.bounded(options?.capacity ?? 16);
      const subscription1 = yield* Scope.extend(PubSub.subscribe(pubsub), scope);
      const subscription2 = yield* Scope.extend(PubSub.subscribe(pubsub), scope);
      const reader = channel.toPubSub(pubsub);
      const writer = channel.fromQueue(subscription1).pipe(core.pipeTo(toChannel(self)), channel.zipLeft(core.fromEffect(Queue.shutdown(subscription1))), channel.mergeWith({
        other: channel.fromQueue(subscription2).pipe(core.pipeTo(toChannel(options.other)), channel.zipLeft(core.fromEffect(Queue.shutdown(subscription2)))),
        onSelfDone: options.onSelfDone,
        onOtherDone: options.onOtherDone
      }));
      const racedChannel = channel.mergeWith(reader, {
        other: writer,
        onSelfDone: () => mergeDecision.Await(_Function.identity),
        onOtherDone: exit => mergeDecision.Done(exit)
      });
      return new SinkImpl(racedChannel);
    });
  }
  return unwrapScopedWith(race);
});
/** @internal */
const refineOrDie = exports.refineOrDie = /*#__PURE__*/(0, _Function.dual)(2, (self, pf) => (0, _Function.pipe)(self, refineOrDieWith(pf, _Function.identity)));
/** @internal */
const refineOrDieWith = exports.refineOrDieWith = /*#__PURE__*/(0, _Function.dual)(3, (self, pf, f) => {
  const newChannel = (0, _Function.pipe)(self, toChannel, channel.catchAll(error => Option.match(pf(error), {
    onNone: () => core.failCauseSync(() => Cause.die(f(error))),
    onSome: core.fail
  })));
  return new SinkImpl(newChannel);
});
/** @internal */
const service = tag => serviceWith(tag, _Function.identity);
/** @internal */
exports.service = service;
const serviceWith = (tag, f) => fromEffect(Effect.map(tag, f));
/** @internal */
exports.serviceWith = serviceWith;
const serviceWithEffect = (tag, f) => fromEffect(Effect.flatMap(tag, f));
/** @internal */
exports.serviceWithEffect = serviceWithEffect;
const serviceWithSink = (tag, f) => new SinkImpl((0, _Function.pipe)(Effect.map(tag, service => toChannel(f(service))), channel.unwrap));
/** @internal */
exports.serviceWithSink = serviceWithSink;
const some = predicate => fold(false, bool => !bool, (acc, input) => acc || predicate(input));
/** @internal */
exports.some = some;
const splitWhere = exports.splitWhere = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => {
  const newChannel = (0, _Function.pipe)(core.fromEffect(Ref.make(Chunk.empty())), core.flatMap(ref => (0, _Function.pipe)(splitWhereSplitter(false, ref, f), channel.pipeToOrFail(toChannel(self)), core.collectElements, core.flatMap(([leftovers, z]) => (0, _Function.pipe)(core.fromEffect(Ref.get(ref)), core.flatMap(leftover => (0, _Function.pipe)(core.write((0, _Function.pipe)(leftover, Chunk.appendAll(Chunk.flatten(leftovers)))), channel.zipRight(core.succeed(z)))))))));
  return new SinkImpl(newChannel);
});
/** @internal */
const splitWhereSplitter = (written, leftovers, f) => core.readWithCause({
  onInput: input => {
    if (Chunk.isEmpty(input)) {
      return splitWhereSplitter(written, leftovers, f);
    }
    if (written) {
      const index = indexWhere(input, f);
      if (index === -1) {
        return channel.zipRight(core.write(input), splitWhereSplitter(true, leftovers, f));
      }
      const [left, right] = Chunk.splitAt(input, index);
      return channel.zipRight(core.write(left), core.fromEffect(Ref.set(leftovers, right)));
    }
    const index = indexWhere(input, f, 1);
    if (index === -1) {
      return channel.zipRight(core.write(input), splitWhereSplitter(true, leftovers, f));
    }
    const [left, right] = (0, _Function.pipe)(input, Chunk.splitAt(Math.max(index, 1)));
    return channel.zipRight(core.write(left), core.fromEffect(Ref.set(leftovers, right)));
  },
  onFailure: core.failCause,
  onDone: core.succeed
});
/** @internal */
const indexWhere = (self, predicate, from = 0) => {
  const iterator = self[Symbol.iterator]();
  let index = 0;
  let result = -1;
  let next;
  while (result < 0 && (next = iterator.next()) && !next.done) {
    const a = next.value;
    if (index >= from && predicate(a)) {
      result = index;
    }
    index = index + 1;
  }
  return result;
};
/** @internal */
const succeed = a => new SinkImpl(core.succeed(a));
/** @internal */
exports.succeed = succeed;
const sum = exports.sum = /*#__PURE__*/foldLeftChunks(0, (acc, chunk) => acc + Chunk.reduce(chunk, 0, (s, a) => s + a));
/** @internal */
const summarized = exports.summarized = /*#__PURE__*/(0, _Function.dual)(3, (self, summary, f) => {
  const newChannel = (0, _Function.pipe)(core.fromEffect(summary), core.flatMap(start => (0, _Function.pipe)(self, toChannel, core.flatMap(done => (0, _Function.pipe)(core.fromEffect(summary), channel.map(end => [done, f(start, end)]))))));
  return new SinkImpl(newChannel);
});
/** @internal */
const sync = evaluate => new SinkImpl(core.sync(evaluate));
/** @internal */
exports.sync = sync;
const take = n => (0, _Function.pipe)(foldChunks(Chunk.empty(), chunk => chunk.length < n, (acc, chunk) => (0, _Function.pipe)(acc, Chunk.appendAll(chunk))), flatMap(acc => {
  const [taken, leftover] = (0, _Function.pipe)(acc, Chunk.splitAt(n));
  return new SinkImpl((0, _Function.pipe)(core.write(leftover), channel.zipRight(core.succeedNow(taken))));
}));
/** @internal */
exports.take = take;
const toChannel = self => Effect.isEffect(self) ? toChannel(fromEffect(self)) : self.channel;
/** @internal */
exports.toChannel = toChannel;
const unwrap = effect => new SinkImpl(channel.unwrap((0, _Function.pipe)(effect, Effect.map(sink => toChannel(sink)))));
/** @internal */
exports.unwrap = unwrap;
const unwrapScoped = effect => new SinkImpl(channel.unwrapScoped(effect.pipe(Effect.map(sink => toChannel(sink)))));
/** @internal */
exports.unwrapScoped = unwrapScoped;
const unwrapScopedWith = f => new SinkImpl(channel.unwrapScopedWith(scope => f(scope).pipe(Effect.map(sink => toChannel(sink)))));
/** @internal */
exports.unwrapScopedWith = unwrapScopedWith;
const withDuration = self => (0, _Function.pipe)(self, summarized(Clock.currentTimeMillis, (start, end) => Duration.millis(end - start)));
/** @internal */
exports.withDuration = withDuration;
const zip = exports.zip = /*#__PURE__*/(0, _Function.dual)(args => isSink(args[1]), (self, that, options) => zipWith(self, that, (z, z2) => [z, z2], options));
/** @internal */
const zipLeft = exports.zipLeft = /*#__PURE__*/(0, _Function.dual)(args => isSink(args[1]), (self, that, options) => zipWith(self, that, (z, _) => z, options));
/** @internal */
const zipRight = exports.zipRight = /*#__PURE__*/(0, _Function.dual)(args => isSink(args[1]), (self, that, options) => zipWith(self, that, (_, z2) => z2, options));
/** @internal */
const zipWith = exports.zipWith = /*#__PURE__*/(0, _Function.dual)(args => isSink(args[1]), (self, that, f, options) => options?.concurrent ? raceWith(self, {
  other: that,
  onSelfDone: Exit.match({
    onFailure: cause => mergeDecision.Done(Effect.failCause(cause)),
    onSuccess: leftZ => mergeDecision.Await(Exit.match({
      onFailure: Effect.failCause,
      onSuccess: rightZ => Effect.succeed(f(leftZ, rightZ))
    }))
  }),
  onOtherDone: Exit.match({
    onFailure: cause => mergeDecision.Done(Effect.failCause(cause)),
    onSuccess: rightZ => mergeDecision.Await(Exit.match({
      onFailure: Effect.failCause,
      onSuccess: leftZ => Effect.succeed(f(leftZ, rightZ))
    }))
  })
}) : flatMap(self, z => map(that, z2 => f(z, z2))));
// Circular with Channel
/** @internal */
const channelToSink = self => new SinkImpl(self);
// Constants
/** @internal */
exports.channelToSink = channelToSink;
const count = exports.count = /*#__PURE__*/foldLeftChunks(0, (acc, chunk) => acc + chunk.length);
/** @internal */
const mkString = exports.mkString = /*#__PURE__*/suspend(() => {
  const strings = [];
  return (0, _Function.pipe)(foldLeftChunks(void 0, (_, elems) => Chunk.map(elems, elem => {
    strings.push(String(elem));
  })), map(() => strings.join("")));
});
/** @internal */
const timed = exports.timed = /*#__PURE__*/(0, _Function.pipe)(/*#__PURE__*/withDuration(drain), /*#__PURE__*/map(tuple => tuple[1]));
//# sourceMappingURL=sink.js.map