import * as Cause from "../Cause.js";
import * as Chunk from "../Chunk.js";
import * as Deferred from "../Deferred.js";
import * as Effect from "../Effect.js";
import * as Effectable from "../Effectable.js";
import * as Exit from "../Exit.js";
import { dual, pipe } from "../Function.js";
import * as Option from "../Option.js";
import { pipeArguments } from "../Pipeable.js";
import { hasProperty } from "../Predicate.js";
import * as Queue from "../Queue.js";
import * as Ref from "../Ref.js";
import * as Scope from "../Scope.js";
import * as channel from "./channel.js";
import * as channelExecutor from "./channel/channelExecutor.js";
import * as core from "./core-stream.js";
import * as stream from "./stream.js";
import * as take from "./take.js";
/** @internal */
const GroupBySymbolKey = "effect/GroupBy";
/** @internal */
export const GroupByTypeId = /*#__PURE__*/Symbol.for(GroupBySymbolKey);
const groupByVariance = {
  /* c8 ignore next */
  _R: _ => _,
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _K: _ => _,
  /* c8 ignore next */
  _V: _ => _
};
/** @internal */
export const isGroupBy = u => hasProperty(u, GroupByTypeId);
/** @internal */
export const evaluate = /*#__PURE__*/dual(args => isGroupBy(args[0]), (self, f, options) => stream.flatMap(self.grouped, ([key, queue]) => f(key, stream.flattenTake(stream.fromQueue(queue, {
  shutdown: true
}))), {
  concurrency: "unbounded",
  bufferSize: options?.bufferSize ?? 16
}));
/** @internal */
export const filter = /*#__PURE__*/dual(2, (self, predicate) => make(pipe(self.grouped, stream.filterEffect(tuple => {
  if (predicate(tuple[0])) {
    return pipe(Effect.succeed(tuple), Effect.as(true));
  }
  return pipe(Queue.shutdown(tuple[1]), Effect.as(false));
}))));
/** @internal */
export const first = /*#__PURE__*/dual(2, (self, n) => make(pipe(stream.zipWithIndex(self.grouped), stream.filterEffect(tuple => {
  const index = tuple[1];
  const queue = tuple[0][1];
  if (index < n) {
    return pipe(Effect.succeed(tuple), Effect.as(true));
  }
  return pipe(Queue.shutdown(queue), Effect.as(false));
}), stream.map(tuple => tuple[0]))));
/** @internal */
export const make = grouped => ({
  [GroupByTypeId]: groupByVariance,
  pipe() {
    return pipeArguments(this, arguments);
  },
  grouped
});
// Circular with Stream
/** @internal */
export const groupBy = /*#__PURE__*/dual(args => stream.isStream(args[0]), (self, f, options) => make(stream.unwrapScoped(Effect.gen(function* () {
  const decider = yield* Deferred.make();
  const output = yield* Effect.acquireRelease(Queue.bounded(options?.bufferSize ?? 16), queue => Queue.shutdown(queue));
  const ref = yield* Ref.make(new Map());
  const add = yield* pipe(stream.mapEffectSequential(self, f), stream.distributedWithDynamicCallback(options?.bufferSize ?? 16, ([key, value]) => Effect.flatMap(Deferred.await(decider), f => f(key, value)), exit => Queue.offer(output, exit)));
  yield* Deferred.succeed(decider, (key, _) => pipe(Ref.get(ref), Effect.map(map => Option.fromNullable(map.get(key))), Effect.flatMap(Option.match({
    onNone: () => Effect.flatMap(add, ([index, queue]) => Effect.zipRight(Ref.update(ref, map => map.set(key, index)), pipe(Queue.offer(output, Exit.succeed([key, mapDequeue(queue, exit => new take.TakeImpl(pipe(exit, Exit.map(tuple => Chunk.of(tuple[1])))))])), Effect.as(n => n === index)))),
    onSome: index => Effect.succeed(n => n === index)
  }))));
  return stream.flattenExitOption(stream.fromQueue(output, {
    shutdown: true
  }));
}))));
/** @internal */
export const mapEffectOptions = /*#__PURE__*/dual(args => typeof args[0] !== "function", (self, f, options) => {
  if (options?.key) {
    return evaluate(groupByKey(self, options.key, {
      bufferSize: options.bufferSize
    }), (_, s) => stream.mapEffectSequential(s, f));
  }
  return stream.matchConcurrency(options?.concurrency, () => stream.mapEffectSequential(self, f), n => options?.unordered ? stream.flatMap(self, a => stream.fromEffect(f(a)), {
    concurrency: n
  }) : stream.mapEffectPar(self, n, f));
});
/** @internal */
export const bindEffect = /*#__PURE__*/dual(args => typeof args[0] !== "string", (self, tag, f, options) => mapEffectOptions(self, k => Effect.map(f(k), a => ({
  ...k,
  [tag]: a
})), options));
const mapDequeue = (dequeue, f) => new MapDequeue(dequeue, f);
class MapDequeue extends Effectable.Class {
  dequeue;
  f;
  [Queue.DequeueTypeId] = {
    _Out: _ => _
  };
  constructor(dequeue, f) {
    super();
    this.dequeue = dequeue;
    this.f = f;
  }
  capacity() {
    return Queue.capacity(this.dequeue);
  }
  get size() {
    return Queue.size(this.dequeue);
  }
  unsafeSize() {
    return this.dequeue.unsafeSize();
  }
  get awaitShutdown() {
    return Queue.awaitShutdown(this.dequeue);
  }
  isActive() {
    return this.dequeue.isActive();
  }
  get isShutdown() {
    return Queue.isShutdown(this.dequeue);
  }
  get shutdown() {
    return Queue.shutdown(this.dequeue);
  }
  get isFull() {
    return Queue.isFull(this.dequeue);
  }
  get isEmpty() {
    return Queue.isEmpty(this.dequeue);
  }
  get take() {
    return pipe(Queue.take(this.dequeue), Effect.map(a => this.f(a)));
  }
  get takeAll() {
    return pipe(Queue.takeAll(this.dequeue), Effect.map(Chunk.map(a => this.f(a))));
  }
  takeUpTo(max) {
    return pipe(Queue.takeUpTo(this.dequeue, max), Effect.map(Chunk.map(a => this.f(a))));
  }
  takeBetween(min, max) {
    return pipe(Queue.takeBetween(this.dequeue, min, max), Effect.map(Chunk.map(a => this.f(a))));
  }
  takeN(n) {
    return pipe(Queue.takeN(this.dequeue, n), Effect.map(Chunk.map(a => this.f(a))));
  }
  poll() {
    return pipe(Queue.poll(this.dequeue), Effect.map(Option.map(a => this.f(a))));
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  commit() {
    return this.take;
  }
}
/** @internal */
export const groupByKey = /*#__PURE__*/dual(args => typeof args[0] !== "function", (self, f, options) => {
  const loop = (map, outerQueue) => core.readWithCause({
    onInput: input => core.flatMap(core.fromEffect(Effect.forEach(groupByIterable(input, f), ([key, values]) => {
      const innerQueue = map.get(key);
      if (innerQueue === undefined) {
        return pipe(Queue.bounded(options?.bufferSize ?? 16), Effect.flatMap(innerQueue => pipe(Effect.sync(() => {
          map.set(key, innerQueue);
        }), Effect.zipRight(Queue.offer(outerQueue, take.of([key, innerQueue]))), Effect.zipRight(pipe(Queue.offer(innerQueue, take.chunk(values)), Effect.catchSomeCause(cause => Cause.isInterruptedOnly(cause) ? Option.some(Effect.void) : Option.none()))))));
      }
      return Effect.catchSomeCause(Queue.offer(innerQueue, take.chunk(values)), cause => Cause.isInterruptedOnly(cause) ? Option.some(Effect.void) : Option.none());
    }, {
      discard: true
    })), () => loop(map, outerQueue)),
    onFailure: cause => core.fromEffect(Queue.offer(outerQueue, take.failCause(cause))),
    onDone: () => core.fromEffect(pipe(Effect.forEach(map.entries(), ([_, innerQueue]) => pipe(Queue.offer(innerQueue, take.end), Effect.catchSomeCause(cause => Cause.isInterruptedOnly(cause) ? Option.some(Effect.void) : Option.none())), {
      discard: true
    }), Effect.zipRight(Queue.offer(outerQueue, take.end))))
  });
  return make(stream.unwrapScopedWith(scope => Effect.gen(function* () {
    const map = new Map();
    const queue = yield* Queue.unbounded();
    yield* Scope.addFinalizer(scope, Queue.shutdown(queue));
    return yield* stream.toChannel(self).pipe(core.pipeTo(loop(map, queue)), channel.drain, channelExecutor.runIn(scope), Effect.forkIn(scope), Effect.as(stream.flattenTake(stream.fromQueue(queue, {
      shutdown: true
    }))));
  })));
});
/**
 * A variant of `groupBy` that retains the insertion order of keys.
 *
 * @internal
 */
const groupByIterable = /*#__PURE__*/dual(2, (iterable, f) => {
  const builder = [];
  const iterator = iterable[Symbol.iterator]();
  const map = new Map();
  let next;
  while ((next = iterator.next()) && !next.done) {
    const value = next.value;
    const key = f(value);
    if (map.has(key)) {
      const innerBuilder = map.get(key);
      innerBuilder.push(value);
    } else {
      const innerBuilder = [value];
      builder.push([key, innerBuilder]);
      map.set(key, innerBuilder);
    }
  }
  return Chunk.unsafeFromArray(builder.map(tuple => [tuple[0], Chunk.unsafeFromArray(tuple[1])]));
});
//# sourceMappingURL=groupBy.js.map