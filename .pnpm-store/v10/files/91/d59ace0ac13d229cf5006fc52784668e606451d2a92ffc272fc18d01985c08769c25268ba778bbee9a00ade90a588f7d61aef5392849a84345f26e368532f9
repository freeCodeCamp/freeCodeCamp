import * as Arr from "../Array.js";
import * as Cause from "../Cause.js";
import * as Chunk from "../Chunk.js";
import * as Clock from "../Clock.js";
import * as Duration from "../Duration.js";
import * as Effect from "../Effect.js";
import * as Either from "../Either.js";
import * as Exit from "../Exit.js";
import { constTrue, dual, identity, pipe } from "../Function.js";
import * as HashMap from "../HashMap.js";
import * as HashSet from "../HashSet.js";
import * as Option from "../Option.js";
import { pipeArguments } from "../Pipeable.js";
import { hasProperty } from "../Predicate.js";
import * as PubSub from "../PubSub.js";
import * as Queue from "../Queue.js";
import * as Ref from "../Ref.js";
import * as Scope from "../Scope.js";
import * as channel from "./channel.js";
import * as mergeDecision from "./channel/mergeDecision.js";
import * as core from "./core-stream.js";
/** @internal */
export const SinkTypeId = /*#__PURE__*/Symbol.for("effect/Sink");
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
export class SinkImpl {
  channel;
  [SinkTypeId] = sinkVariance;
  constructor(channel) {
    this.channel = channel;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
}
/** @internal */
export const isSink = u => hasProperty(u, SinkTypeId);
/** @internal */
export const suspend = evaluate => new SinkImpl(core.suspend(() => toChannel(evaluate())));
/** @internal */
export const as = /*#__PURE__*/dual(2, (self, a) => pipe(self, map(() => a)));
/** @internal */
export const collectAll = () => new SinkImpl(collectAllLoop(Chunk.empty()));
/** @internal */
const collectAllLoop = acc => core.readWithCause({
  onInput: chunk => collectAllLoop(pipe(acc, Chunk.appendAll(chunk))),
  onFailure: core.failCause,
  onDone: () => core.succeed(acc)
});
/** @internal */
export const collectAllN = n => suspend(() => fromChannel(collectAllNLoop(n, Chunk.empty())));
/** @internal */
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
export const collectAllFrom = self => collectAllWhileWith(self, {
  initial: Chunk.empty(),
  while: constTrue,
  body: (chunk, a) => pipe(chunk, Chunk.append(a))
});
/** @internal */
export const collectAllToMap = (key, merge) => {
  return foldLeftChunks(HashMap.empty(), (map, chunk) => pipe(chunk, Chunk.reduce(map, (map, input) => {
    const k = key(input);
    const v = pipe(map, HashMap.has(k)) ? merge(pipe(map, HashMap.unsafeGet(k)), input) : input;
    return pipe(map, HashMap.set(k, v));
  })));
};
/** @internal */
export const collectAllToMapN = (n, key, merge) => {
  return foldWeighted({
    initial: HashMap.empty(),
    maxCost: n,
    cost: (acc, input) => pipe(acc, HashMap.has(key(input))) ? 0 : 1,
    body: (acc, input) => {
      const k = key(input);
      const v = pipe(acc, HashMap.has(k)) ? merge(pipe(acc, HashMap.unsafeGet(k)), input) : input;
      return pipe(acc, HashMap.set(k, v));
    }
  });
};
/** @internal */
export const collectAllToSet = () => foldLeftChunks(HashSet.empty(), (acc, chunk) => pipe(chunk, Chunk.reduce(acc, (acc, input) => pipe(acc, HashSet.add(input)))));
/** @internal */
export const collectAllToSetN = n => foldWeighted({
  initial: HashSet.empty(),
  maxCost: n,
  cost: (acc, input) => HashSet.has(acc, input) ? 0 : 1,
  body: (acc, input) => HashSet.add(acc, input)
});
/** @internal */
export const collectAllUntil = p => {
  return pipe(fold([Chunk.empty(), true], tuple => tuple[1], ([chunk, _], input) => [pipe(chunk, Chunk.append(input)), !p(input)]), map(tuple => tuple[0]));
};
/** @internal */
export const collectAllUntilEffect = p => {
  return pipe(foldEffect([Chunk.empty(), true], tuple => tuple[1], ([chunk, _], input) => pipe(p(input), Effect.map(bool => [pipe(chunk, Chunk.append(input)), !bool]))), map(tuple => tuple[0]));
};
/** @internal */
export const collectAllWhile = predicate => fromChannel(collectAllWhileReader(predicate, Chunk.empty()));
/** @internal */
const collectAllWhileReader = (predicate, done) => core.readWith({
  onInput: input => {
    const [collected, leftovers] = pipe(Chunk.toReadonlyArray(input), Arr.span(predicate));
    if (leftovers.length === 0) {
      return collectAllWhileReader(predicate, pipe(done, Chunk.appendAll(Chunk.unsafeFromArray(collected))));
    }
    return pipe(core.write(Chunk.unsafeFromArray(leftovers)), channel.zipRight(core.succeed(pipe(done, Chunk.appendAll(Chunk.unsafeFromArray(collected))))));
  },
  onFailure: core.fail,
  onDone: () => core.succeed(done)
});
/** @internal */
export const collectAllWhileEffect = predicate => fromChannel(collectAllWhileEffectReader(predicate, Chunk.empty()));
/** @internal */
const collectAllWhileEffectReader = (predicate, done) => core.readWith({
  onInput: input => pipe(core.fromEffect(pipe(input, Effect.takeWhile(predicate), Effect.map(Chunk.unsafeFromArray))), core.flatMap(collected => {
    const leftovers = pipe(input, Chunk.drop(collected.length));
    if (Chunk.isEmpty(leftovers)) {
      return collectAllWhileEffectReader(predicate, pipe(done, Chunk.appendAll(collected)));
    }
    return pipe(core.write(leftovers), channel.zipRight(core.succeed(pipe(done, Chunk.appendAll(collected)))));
  })),
  onFailure: core.fail,
  onDone: () => core.succeed(done)
});
/** @internal */
export const collectAllWhileWith = /*#__PURE__*/dual(2, (self, options) => {
  const refs = pipe(Ref.make(Chunk.empty()), Effect.zip(Ref.make(false)));
  const newChannel = pipe(core.fromEffect(refs), core.flatMap(([leftoversRef, upstreamDoneRef]) => {
    const upstreamMarker = core.readWith({
      onInput: input => pipe(core.write(input), core.flatMap(() => upstreamMarker)),
      onFailure: core.fail,
      onDone: done => pipe(core.fromEffect(Ref.set(upstreamDoneRef, true)), channel.as(done))
    });
    return pipe(upstreamMarker, core.pipeTo(channel.bufferChunk(leftoversRef)), core.pipeTo(collectAllWhileWithLoop(self, leftoversRef, upstreamDoneRef, options.initial, options.while, options.body)));
  }));
  return new SinkImpl(newChannel);
});
const collectAllWhileWithLoop = (self, leftoversRef, upstreamDoneRef, currentResult, p, f) => {
  return pipe(toChannel(self), channel.doneCollect, channel.foldChannel({
    onFailure: core.fail,
    onSuccess: ([leftovers, doneValue]) => p(doneValue) ? pipe(core.fromEffect(Ref.set(leftoversRef, Chunk.flatten(leftovers))), core.flatMap(() => pipe(core.fromEffect(Ref.get(upstreamDoneRef)), core.flatMap(upstreamDone => {
      const accumulatedResult = f(currentResult, doneValue);
      return upstreamDone ? pipe(core.write(Chunk.flatten(leftovers)), channel.as(accumulatedResult)) : collectAllWhileWithLoop(self, leftoversRef, upstreamDoneRef, accumulatedResult, p, f);
    })))) : pipe(core.write(Chunk.flatten(leftovers)), channel.as(currentResult))
  }));
};
/** @internal */
export const collectLeftover = self => new SinkImpl(pipe(core.collectElements(toChannel(self)), channel.map(([chunks, z]) => [z, Chunk.flatten(chunks)])));
/** @internal */
export const mapInput = /*#__PURE__*/dual(2, (self, f) => pipe(self, mapInputChunks(Chunk.map(f))));
/** @internal */
export const mapInputEffect = /*#__PURE__*/dual(2, (self, f) => mapInputChunksEffect(self, chunk => Effect.map(Effect.forEach(chunk, v => f(v)), Chunk.unsafeFromArray)));
/** @internal */
export const mapInputChunks = /*#__PURE__*/dual(2, (self, f) => {
  const loop = core.readWith({
    onInput: chunk => pipe(core.write(f(chunk)), core.flatMap(() => loop)),
    onFailure: core.fail,
    onDone: core.succeed
  });
  return new SinkImpl(pipe(loop, core.pipeTo(toChannel(self))));
});
/** @internal */
export const mapInputChunksEffect = /*#__PURE__*/dual(2, (self, f) => {
  const loop = core.readWith({
    onInput: chunk => pipe(core.fromEffect(f(chunk)), core.flatMap(core.write), core.flatMap(() => loop)),
    onFailure: core.fail,
    onDone: core.succeed
  });
  return new SinkImpl(pipe(loop, channel.pipeToOrFail(toChannel(self))));
});
/** @internal */
export const die = defect => failCause(Cause.die(defect));
/** @internal */
export const dieMessage = message => failCause(Cause.die(new Cause.RuntimeException(message)));
/** @internal */
export const dieSync = evaluate => failCauseSync(() => Cause.die(evaluate()));
/** @internal */
export const dimap = /*#__PURE__*/dual(2, (self, options) => map(mapInput(self, options.onInput), options.onDone));
/** @internal */
export const dimapEffect = /*#__PURE__*/dual(2, (self, options) => mapEffect(mapInputEffect(self, options.onInput), options.onDone));
/** @internal */
export const dimapChunks = /*#__PURE__*/dual(2, (self, options) => map(mapInputChunks(self, options.onInput), options.onDone));
/** @internal */
export const dimapChunksEffect = /*#__PURE__*/dual(2, (self, options) => mapEffect(mapInputChunksEffect(self, options.onInput), options.onDone));
/** @internal */
export const drain = /*#__PURE__*/new SinkImpl(/*#__PURE__*/channel.drain(/*#__PURE__*/channel.identityChannel()));
/** @internal */
export const drop = n => suspend(() => new SinkImpl(dropLoop(n)));
/** @internal */
const dropLoop = n => core.readWith({
  onInput: input => {
    const dropped = pipe(input, Chunk.drop(n));
    const leftover = Math.max(n - input.length, 0);
    const more = Chunk.isEmpty(input) || leftover > 0;
    if (more) {
      return dropLoop(leftover);
    }
    return pipe(core.write(dropped), channel.zipRight(channel.identityChannel()));
  },
  onFailure: core.fail,
  onDone: () => core.void
});
/** @internal */
export const dropUntil = predicate => new SinkImpl(pipe(toChannel(dropWhile(input => !predicate(input))), channel.pipeToOrFail(toChannel(drop(1)))));
/** @internal */
export const dropUntilEffect = predicate => suspend(() => new SinkImpl(dropUntilEffectReader(predicate)));
/** @internal */
const dropUntilEffectReader = predicate => core.readWith({
  onInput: input => pipe(input, Effect.dropUntil(predicate), Effect.map(leftover => {
    const more = leftover.length === 0;
    return more ? dropUntilEffectReader(predicate) : pipe(core.write(Chunk.unsafeFromArray(leftover)), channel.zipRight(channel.identityChannel()));
  }), channel.unwrap),
  onFailure: core.fail,
  onDone: () => core.void
});
/** @internal */
export const dropWhile = predicate => new SinkImpl(dropWhileReader(predicate));
/** @internal */
const dropWhileReader = predicate => core.readWith({
  onInput: input => {
    const out = pipe(input, Chunk.dropWhile(predicate));
    if (Chunk.isEmpty(out)) {
      return dropWhileReader(predicate);
    }
    return pipe(core.write(out), channel.zipRight(channel.identityChannel()));
  },
  onFailure: core.fail,
  onDone: core.succeedNow
});
/** @internal */
export const dropWhileEffect = predicate => suspend(() => new SinkImpl(dropWhileEffectReader(predicate)));
/** @internal */
const dropWhileEffectReader = predicate => core.readWith({
  onInput: input => pipe(input, Effect.dropWhile(predicate), Effect.map(leftover => {
    const more = leftover.length === 0;
    return more ? dropWhileEffectReader(predicate) : pipe(core.write(Chunk.unsafeFromArray(leftover)), channel.zipRight(channel.identityChannel()));
  }), channel.unwrap),
  onFailure: core.fail,
  onDone: () => core.void
});
/** @internal */
export const ensuring = /*#__PURE__*/dual(2, (self, finalizer) => new SinkImpl(pipe(self, toChannel, channel.ensuring(finalizer))));
/** @internal */
export const ensuringWith = /*#__PURE__*/dual(2, (self, finalizer) => new SinkImpl(pipe(self, toChannel, core.ensuringWith(finalizer))));
/** @internal */
export const context = () => fromEffect(Effect.context());
/** @internal */
export const contextWith = f => pipe(context(), map(f));
/** @internal */
export const contextWithEffect = f => pipe(context(), mapEffect(f));
/** @internal */
export const contextWithSink = f => new SinkImpl(channel.unwrap(Effect.contextWith(context => toChannel(f(context)))));
/** @internal */
export const every = predicate => fold(true, identity, (acc, input) => acc && predicate(input));
/** @internal */
export const fail = e => new SinkImpl(core.fail(e));
/** @internal */
export const failSync = evaluate => new SinkImpl(core.failSync(evaluate));
/** @internal */
export const failCause = cause => new SinkImpl(core.failCause(cause));
/** @internal */
export const failCauseSync = evaluate => new SinkImpl(core.failCauseSync(evaluate));
/** @internal */
export const filterInput = f => {
  return self => pipe(self, mapInputChunks(Chunk.filter(f)));
};
/** @internal */
export const filterInputEffect = /*#__PURE__*/dual(2, (self, f) => mapInputChunksEffect(self, chunk => Effect.map(Effect.filter(chunk, f), Chunk.unsafeFromArray)));
/** @internal */
export const findEffect = /*#__PURE__*/dual(2, (self, f) => {
  const newChannel = pipe(core.fromEffect(pipe(Ref.make(Chunk.empty()), Effect.zip(Ref.make(false)))), core.flatMap(([leftoversRef, upstreamDoneRef]) => {
    const upstreamMarker = core.readWith({
      onInput: input => pipe(core.write(input), core.flatMap(() => upstreamMarker)),
      onFailure: core.fail,
      onDone: done => pipe(core.fromEffect(Ref.set(upstreamDoneRef, true)), channel.as(done))
    });
    const loop = channel.foldChannel(core.collectElements(toChannel(self)), {
      onFailure: core.fail,
      onSuccess: ([leftovers, doneValue]) => pipe(core.fromEffect(f(doneValue)), core.flatMap(satisfied => pipe(core.fromEffect(Ref.set(leftoversRef, Chunk.flatten(leftovers))), channel.zipRight(pipe(core.fromEffect(Ref.get(upstreamDoneRef)), core.flatMap(upstreamDone => {
        if (satisfied) {
          return pipe(core.write(Chunk.flatten(leftovers)), channel.as(Option.some(doneValue)));
        }
        if (upstreamDone) {
          return pipe(core.write(Chunk.flatten(leftovers)), channel.as(Option.none()));
        }
        return loop;
      }))))))
    });
    return pipe(upstreamMarker, core.pipeTo(channel.bufferChunk(leftoversRef)), core.pipeTo(loop));
  }));
  return new SinkImpl(newChannel);
});
/** @internal */
export const fold = (s, contFn, f) => suspend(() => new SinkImpl(foldReader(s, contFn, f)));
/** @internal */
const foldReader = (s, contFn, f) => {
  if (!contFn(s)) {
    return core.succeedNow(s);
  }
  return core.readWith({
    onInput: input => {
      const [nextS, leftovers] = foldChunkSplit(s, input, contFn, f, 0, input.length);
      if (Chunk.isNonEmpty(leftovers)) {
        return pipe(core.write(leftovers), channel.as(nextS));
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
  const s1 = f(s, pipe(chunk, Chunk.unsafeGet(index)));
  if (contFn(s1)) {
    return foldChunkSplit(s1, chunk, contFn, f, index + 1, length);
  }
  return [s1, pipe(chunk, Chunk.drop(index + 1))];
};
/** @internal */
export const foldSink = /*#__PURE__*/dual(2, (self, options) => {
  const newChannel = pipe(toChannel(self), core.collectElements, channel.foldChannel({
    onFailure: error => toChannel(options.onFailure(error)),
    onSuccess: ([leftovers, z]) => core.suspend(() => {
      const leftoversRef = {
        ref: pipe(leftovers, Chunk.filter(Chunk.isNonEmpty))
      };
      const refReader = pipe(core.sync(() => {
        const ref = leftoversRef.ref;
        leftoversRef.ref = Chunk.empty();
        return ref;
      }),
      // This cast is safe because of the L1 >: L <: In1 bound. It follows that
      // L <: In1 and therefore Chunk[L] can be safely cast to Chunk[In1].
      core.flatMap(chunk => channel.writeChunk(chunk)));
      const passthrough = channel.identityChannel();
      const continuationSink = pipe(refReader, channel.zipRight(passthrough), core.pipeTo(toChannel(options.onSuccess(z))));
      return core.flatMap(core.collectElements(continuationSink), ([newLeftovers, z1]) => pipe(core.succeed(leftoversRef.ref), core.flatMap(channel.writeChunk), channel.zipRight(channel.writeChunk(newLeftovers)), channel.as(z1)));
    })
  }));
  return new SinkImpl(newChannel);
});
/** @internal */
export const foldChunks = (s, contFn, f) => suspend(() => new SinkImpl(foldChunksReader(s, contFn, f)));
/** @internal */
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
export const foldChunksEffect = (s, contFn, f) => suspend(() => new SinkImpl(foldChunksEffectReader(s, contFn, f)));
/** @internal */
const foldChunksEffectReader = (s, contFn, f) => {
  if (!contFn(s)) {
    return core.succeedNow(s);
  }
  return core.readWith({
    onInput: input => pipe(core.fromEffect(f(s, input)), core.flatMap(s => foldChunksEffectReader(s, contFn, f))),
    onFailure: core.fail,
    onDone: () => core.succeedNow(s)
  });
};
/** @internal */
export const foldEffect = (s, contFn, f) => suspend(() => new SinkImpl(foldEffectReader(s, contFn, f)));
/** @internal */
const foldEffectReader = (s, contFn, f) => {
  if (!contFn(s)) {
    return core.succeedNow(s);
  }
  return core.readWith({
    onInput: input => pipe(core.fromEffect(foldChunkSplitEffect(s, input, contFn, f)), core.flatMap(([nextS, leftovers]) => pipe(leftovers, Option.match({
      onNone: () => foldEffectReader(nextS, contFn, f),
      onSome: leftover => pipe(core.write(leftover), channel.as(nextS))
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
  return pipe(f(s, pipe(chunk, Chunk.unsafeGet(index))), Effect.flatMap(s1 => contFn(s1) ? foldChunkSplitEffectInternal(s1, chunk, index + 1, length, contFn, f) : Effect.succeed([s1, Option.some(pipe(chunk, Chunk.drop(index + 1)))])));
};
/** @internal */
export const foldLeft = (s, f) => ignoreLeftover(fold(s, constTrue, f));
/** @internal */
export const foldLeftChunks = (s, f) => foldChunks(s, constTrue, f);
/** @internal */
export const foldLeftChunksEffect = (s, f) => ignoreLeftover(foldChunksEffect(s, constTrue, f));
/** @internal */
export const foldLeftEffect = (s, f) => foldEffect(s, constTrue, f);
/** @internal */
export const foldUntil = (s, max, f) => pipe(fold([s, 0], tuple => tuple[1] < max, ([output, count], input) => [f(output, input), count + 1]), map(tuple => tuple[0]));
/** @internal */
export const foldUntilEffect = (s, max, f) => pipe(foldEffect([s, 0], tuple => tuple[1] < max, ([output, count], input) => pipe(f(output, input), Effect.map(s => [s, count + 1]))), map(tuple => tuple[0]));
/** @internal */
export const foldWeighted = options => foldWeightedDecompose({
  ...options,
  decompose: Chunk.of
});
/** @internal */
export const foldWeightedDecompose = options => suspend(() => new SinkImpl(foldWeightedDecomposeLoop(options.initial, 0, false, options.maxCost, options.cost, options.decompose, options.body)));
/** @internal */
const foldWeightedDecomposeLoop = (s, cost, dirty, max, costFn, decompose, f) => core.readWith({
  onInput: input => {
    const [nextS, nextCost, nextDirty, leftovers] = foldWeightedDecomposeFold(input, s, cost, dirty, max, costFn, decompose, f);
    if (Chunk.isNonEmpty(leftovers)) {
      return pipe(core.write(leftovers), channel.zipRight(core.succeedNow(nextS)));
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
export const foldWeightedDecomposeEffect = options => suspend(() => new SinkImpl(foldWeightedDecomposeEffectLoop(options.initial, options.maxCost, options.cost, options.decompose, options.body, 0, false)));
/** @internal */
export const foldWeightedEffect = options => foldWeightedDecomposeEffect({
  ...options,
  decompose: input => Effect.succeed(Chunk.of(input))
});
const foldWeightedDecomposeEffectLoop = (s, max, costFn, decompose, f, cost, dirty) => core.readWith({
  onInput: input => pipe(core.fromEffect(foldWeightedDecomposeEffectFold(s, max, costFn, decompose, f, input, dirty, cost, 0)), core.flatMap(([nextS, nextCost, nextDirty, leftovers]) => {
    if (Chunk.isNonEmpty(leftovers)) {
      return pipe(core.write(leftovers), channel.zipRight(core.succeedNow(nextS)));
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
  const elem = pipe(input, Chunk.unsafeGet(index));
  return pipe(costFn(s, elem), Effect.map(newCost => cost + newCost), Effect.flatMap(total => {
    if (total <= max) {
      return pipe(f(s, elem), Effect.flatMap(s => foldWeightedDecomposeEffectFold(s, max, costFn, decompose, f, input, true, total, index + 1)));
    }
    return pipe(decompose(elem), Effect.flatMap(decomposed => {
      if (decomposed.length <= 1 && !dirty) {
        // If `elem` cannot be decomposed, we need to cross the `max` threshold. To
        // minimize "injury", we only allow this when we haven't added anything else
        // to the aggregate (dirty = false).
        return pipe(f(s, elem), Effect.map(s => [s, total, true, pipe(input, Chunk.drop(index + 1))]));
      }
      if (decomposed.length <= 1 && dirty) {
        // If the state is dirty and `elem` cannot be decomposed, we stop folding
        // and include `elem` in th leftovers.
        return Effect.succeed([s, cost, dirty, pipe(input, Chunk.drop(index))]);
      }
      // `elem` got decomposed, so we will recurse with the decomposed elements pushed
      // into the chunk we're processing and see if we can aggregate further.
      const next = pipe(decomposed, Chunk.appendAll(pipe(input, Chunk.drop(index + 1))));
      return foldWeightedDecomposeEffectFold(s, max, costFn, decompose, f, next, dirty, cost, 0);
    }));
  }));
};
/** @internal */
export const flatMap = /*#__PURE__*/dual(2, (self, f) => foldSink(self, {
  onFailure: fail,
  onSuccess: f
}));
/** @internal */
export const forEach = f => {
  const process = core.readWithCause({
    onInput: input => pipe(core.fromEffect(Effect.forEach(input, v => f(v), {
      discard: true
    })), core.flatMap(() => process)),
    onFailure: core.failCause,
    onDone: () => core.void
  });
  return new SinkImpl(process);
};
/** @internal */
export const forEachChunk = f => {
  const process = core.readWithCause({
    onInput: input => pipe(core.fromEffect(f(input)), core.flatMap(() => process)),
    onFailure: core.failCause,
    onDone: () => core.void
  });
  return new SinkImpl(process);
};
/** @internal */
export const forEachWhile = f => {
  const process = core.readWithCause({
    onInput: input => forEachWhileReader(f, input, 0, input.length, process),
    onFailure: core.failCause,
    onDone: () => core.void
  });
  return new SinkImpl(process);
};
/** @internal */
const forEachWhileReader = (f, input, index, length, cont) => {
  if (index === length) {
    return cont;
  }
  return pipe(core.fromEffect(f(pipe(input, Chunk.unsafeGet(index)))), core.flatMap(bool => bool ? forEachWhileReader(f, input, index + 1, length, cont) : core.write(pipe(input, Chunk.drop(index)))), channel.catchAll(error => pipe(core.write(pipe(input, Chunk.drop(index))), channel.zipRight(core.fail(error)))));
};
/** @internal */
export const forEachChunkWhile = f => {
  const reader = core.readWith({
    onInput: input => pipe(core.fromEffect(f(input)), core.flatMap(cont => cont ? reader : core.void)),
    onFailure: core.fail,
    onDone: () => core.void
  });
  return new SinkImpl(reader);
};
/** @internal */
export const fromChannel = channel => new SinkImpl(channel);
/** @internal */
export const fromEffect = effect => new SinkImpl(core.fromEffect(effect));
/** @internal */
export const fromPubSub = (pubsub, options) => fromQueue(pubsub, options);
/** @internal */
export const fromPush = push => new SinkImpl(channel.unwrapScoped(pipe(push, Effect.map(fromPushPull))));
const fromPushPull = push => core.readWith({
  onInput: input => channel.foldChannel(core.fromEffect(push(Option.some(input))), {
    onFailure: ([either, leftovers]) => Either.match(either, {
      onLeft: error => pipe(core.write(leftovers), channel.zipRight(core.fail(error))),
      onRight: z => pipe(core.write(leftovers), channel.zipRight(core.succeedNow(z)))
    }),
    onSuccess: () => fromPushPull(push)
  }),
  onFailure: core.fail,
  onDone: () => channel.foldChannel(core.fromEffect(push(Option.none())), {
    onFailure: ([either, leftovers]) => Either.match(either, {
      onLeft: error => pipe(core.write(leftovers), channel.zipRight(core.fail(error))),
      onRight: z => pipe(core.write(leftovers), channel.zipRight(core.succeedNow(z)))
    }),
    onSuccess: () => core.fromEffect(Effect.dieMessage("BUG: Sink.fromPush - please report an issue at https://github.com/Effect-TS/effect/issues"))
  })
});
/** @internal */
export const fromQueue = (queue, options) => options?.shutdown ? unwrapScoped(Effect.map(Effect.acquireRelease(Effect.succeed(queue), Queue.shutdown), fromQueue)) : forEachChunk(input => Queue.offerAll(queue, input));
/** @internal */
export const head = () => fold(Option.none(), Option.isNone, (option, input) => Option.match(option, {
  onNone: () => Option.some(input),
  onSome: () => option
}));
/** @internal */
export const ignoreLeftover = self => new SinkImpl(channel.drain(toChannel(self)));
/** @internal */
export const last = () => foldLeftChunks(Option.none(), (s, input) => Option.orElse(Chunk.last(input), () => s));
/** @internal */
export const leftover = chunk => new SinkImpl(core.suspend(() => core.write(chunk)));
/** @internal */
export const map = /*#__PURE__*/dual(2, (self, f) => {
  return new SinkImpl(pipe(toChannel(self), channel.map(f)));
});
/** @internal */
export const mapEffect = /*#__PURE__*/dual(2, (self, f) => new SinkImpl(pipe(toChannel(self), channel.mapEffect(f))));
/** @internal */
export const mapError = /*#__PURE__*/dual(2, (self, f) => new SinkImpl(pipe(toChannel(self), channel.mapError(f))));
/** @internal */
export const mapLeftover = /*#__PURE__*/dual(2, (self, f) => new SinkImpl(pipe(toChannel(self), channel.mapOut(Chunk.map(f)))));
/** @internal */
export const never = /*#__PURE__*/fromEffect(Effect.never);
/** @internal */
export const orElse = /*#__PURE__*/dual(2, (self, that) => new SinkImpl(pipe(toChannel(self), channel.orElse(() => toChannel(that())))));
/** @internal */
export const provideContext = /*#__PURE__*/dual(2, (self, context) => new SinkImpl(pipe(toChannel(self), core.provideContext(context))));
/** @internal */
export const race = /*#__PURE__*/dual(2, (self, that) => pipe(self, raceBoth(that), map(Either.merge)));
/** @internal */
export const raceBoth = /*#__PURE__*/dual(args => isSink(args[1]), (self, that, options) => raceWith(self, {
  other: that,
  onSelfDone: selfDone => mergeDecision.Done(Effect.map(selfDone, Either.left)),
  onOtherDone: thatDone => mergeDecision.Done(Effect.map(thatDone, Either.right)),
  capacity: options?.capacity ?? 16
}));
/** @internal */
export const raceWith = /*#__PURE__*/dual(2, (self, options) => {
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
        onSelfDone: () => mergeDecision.Await(identity),
        onOtherDone: exit => mergeDecision.Done(exit)
      });
      return new SinkImpl(racedChannel);
    });
  }
  return unwrapScopedWith(race);
});
/** @internal */
export const refineOrDie = /*#__PURE__*/dual(2, (self, pf) => pipe(self, refineOrDieWith(pf, identity)));
/** @internal */
export const refineOrDieWith = /*#__PURE__*/dual(3, (self, pf, f) => {
  const newChannel = pipe(self, toChannel, channel.catchAll(error => Option.match(pf(error), {
    onNone: () => core.failCauseSync(() => Cause.die(f(error))),
    onSome: core.fail
  })));
  return new SinkImpl(newChannel);
});
/** @internal */
export const service = tag => serviceWith(tag, identity);
/** @internal */
export const serviceWith = (tag, f) => fromEffect(Effect.map(tag, f));
/** @internal */
export const serviceWithEffect = (tag, f) => fromEffect(Effect.flatMap(tag, f));
/** @internal */
export const serviceWithSink = (tag, f) => new SinkImpl(pipe(Effect.map(tag, service => toChannel(f(service))), channel.unwrap));
/** @internal */
export const some = predicate => fold(false, bool => !bool, (acc, input) => acc || predicate(input));
/** @internal */
export const splitWhere = /*#__PURE__*/dual(2, (self, f) => {
  const newChannel = pipe(core.fromEffect(Ref.make(Chunk.empty())), core.flatMap(ref => pipe(splitWhereSplitter(false, ref, f), channel.pipeToOrFail(toChannel(self)), core.collectElements, core.flatMap(([leftovers, z]) => pipe(core.fromEffect(Ref.get(ref)), core.flatMap(leftover => pipe(core.write(pipe(leftover, Chunk.appendAll(Chunk.flatten(leftovers)))), channel.zipRight(core.succeed(z)))))))));
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
    const [left, right] = pipe(input, Chunk.splitAt(Math.max(index, 1)));
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
export const succeed = a => new SinkImpl(core.succeed(a));
/** @internal */
export const sum = /*#__PURE__*/foldLeftChunks(0, (acc, chunk) => acc + Chunk.reduce(chunk, 0, (s, a) => s + a));
/** @internal */
export const summarized = /*#__PURE__*/dual(3, (self, summary, f) => {
  const newChannel = pipe(core.fromEffect(summary), core.flatMap(start => pipe(self, toChannel, core.flatMap(done => pipe(core.fromEffect(summary), channel.map(end => [done, f(start, end)]))))));
  return new SinkImpl(newChannel);
});
/** @internal */
export const sync = evaluate => new SinkImpl(core.sync(evaluate));
/** @internal */
export const take = n => pipe(foldChunks(Chunk.empty(), chunk => chunk.length < n, (acc, chunk) => pipe(acc, Chunk.appendAll(chunk))), flatMap(acc => {
  const [taken, leftover] = pipe(acc, Chunk.splitAt(n));
  return new SinkImpl(pipe(core.write(leftover), channel.zipRight(core.succeedNow(taken))));
}));
/** @internal */
export const toChannel = self => Effect.isEffect(self) ? toChannel(fromEffect(self)) : self.channel;
/** @internal */
export const unwrap = effect => new SinkImpl(channel.unwrap(pipe(effect, Effect.map(sink => toChannel(sink)))));
/** @internal */
export const unwrapScoped = effect => new SinkImpl(channel.unwrapScoped(effect.pipe(Effect.map(sink => toChannel(sink)))));
/** @internal */
export const unwrapScopedWith = f => new SinkImpl(channel.unwrapScopedWith(scope => f(scope).pipe(Effect.map(sink => toChannel(sink)))));
/** @internal */
export const withDuration = self => pipe(self, summarized(Clock.currentTimeMillis, (start, end) => Duration.millis(end - start)));
/** @internal */
export const zip = /*#__PURE__*/dual(args => isSink(args[1]), (self, that, options) => zipWith(self, that, (z, z2) => [z, z2], options));
/** @internal */
export const zipLeft = /*#__PURE__*/dual(args => isSink(args[1]), (self, that, options) => zipWith(self, that, (z, _) => z, options));
/** @internal */
export const zipRight = /*#__PURE__*/dual(args => isSink(args[1]), (self, that, options) => zipWith(self, that, (_, z2) => z2, options));
/** @internal */
export const zipWith = /*#__PURE__*/dual(args => isSink(args[1]), (self, that, f, options) => options?.concurrent ? raceWith(self, {
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
export const channelToSink = self => new SinkImpl(self);
// Constants
/** @internal */
export const count = /*#__PURE__*/foldLeftChunks(0, (acc, chunk) => acc + chunk.length);
/** @internal */
export const mkString = /*#__PURE__*/suspend(() => {
  const strings = [];
  return pipe(foldLeftChunks(void 0, (_, elems) => Chunk.map(elems, elem => {
    strings.push(String(elem));
  })), map(() => strings.join("")));
});
/** @internal */
export const timed = /*#__PURE__*/pipe(/*#__PURE__*/withDuration(drain), /*#__PURE__*/map(tuple => tuple[1]));
//# sourceMappingURL=sink.js.map