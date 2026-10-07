"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapEffectOptions = exports.make = exports.isGroupBy = exports.groupByKey = exports.groupBy = exports.first = exports.filter = exports.evaluate = exports.bindEffect = exports.GroupByTypeId = void 0;
var Cause = _interopRequireWildcard(require("../Cause.js"));
var Chunk = _interopRequireWildcard(require("../Chunk.js"));
var Deferred = _interopRequireWildcard(require("../Deferred.js"));
var Effect = _interopRequireWildcard(require("../Effect.js"));
var Effectable = _interopRequireWildcard(require("../Effectable.js"));
var Exit = _interopRequireWildcard(require("../Exit.js"));
var _Function = require("../Function.js");
var Option = _interopRequireWildcard(require("../Option.js"));
var _Pipeable = require("../Pipeable.js");
var _Predicate = require("../Predicate.js");
var Queue = _interopRequireWildcard(require("../Queue.js"));
var Ref = _interopRequireWildcard(require("../Ref.js"));
var Scope = _interopRequireWildcard(require("../Scope.js"));
var channel = _interopRequireWildcard(require("./channel.js"));
var channelExecutor = _interopRequireWildcard(require("./channel/channelExecutor.js"));
var core = _interopRequireWildcard(require("./core-stream.js"));
var stream = _interopRequireWildcard(require("./stream.js"));
var take = _interopRequireWildcard(require("./take.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const GroupBySymbolKey = "effect/GroupBy";
/** @internal */
const GroupByTypeId = exports.GroupByTypeId = /*#__PURE__*/Symbol.for(GroupBySymbolKey);
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
const isGroupBy = u => (0, _Predicate.hasProperty)(u, GroupByTypeId);
/** @internal */
exports.isGroupBy = isGroupBy;
const evaluate = exports.evaluate = /*#__PURE__*/(0, _Function.dual)(args => isGroupBy(args[0]), (self, f, options) => stream.flatMap(self.grouped, ([key, queue]) => f(key, stream.flattenTake(stream.fromQueue(queue, {
  shutdown: true
}))), {
  concurrency: "unbounded",
  bufferSize: options?.bufferSize ?? 16
}));
/** @internal */
const filter = exports.filter = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => make((0, _Function.pipe)(self.grouped, stream.filterEffect(tuple => {
  if (predicate(tuple[0])) {
    return (0, _Function.pipe)(Effect.succeed(tuple), Effect.as(true));
  }
  return (0, _Function.pipe)(Queue.shutdown(tuple[1]), Effect.as(false));
}))));
/** @internal */
const first = exports.first = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => make((0, _Function.pipe)(stream.zipWithIndex(self.grouped), stream.filterEffect(tuple => {
  const index = tuple[1];
  const queue = tuple[0][1];
  if (index < n) {
    return (0, _Function.pipe)(Effect.succeed(tuple), Effect.as(true));
  }
  return (0, _Function.pipe)(Queue.shutdown(queue), Effect.as(false));
}), stream.map(tuple => tuple[0]))));
/** @internal */
const make = grouped => ({
  [GroupByTypeId]: groupByVariance,
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  },
  grouped
});
// Circular with Stream
/** @internal */
exports.make = make;
const groupBy = exports.groupBy = /*#__PURE__*/(0, _Function.dual)(args => stream.isStream(args[0]), (self, f, options) => make(stream.unwrapScoped(Effect.gen(function* () {
  const decider = yield* Deferred.make();
  const output = yield* Effect.acquireRelease(Queue.bounded(options?.bufferSize ?? 16), queue => Queue.shutdown(queue));
  const ref = yield* Ref.make(new Map());
  const add = yield* (0, _Function.pipe)(stream.mapEffectSequential(self, f), stream.distributedWithDynamicCallback(options?.bufferSize ?? 16, ([key, value]) => Effect.flatMap(Deferred.await(decider), f => f(key, value)), exit => Queue.offer(output, exit)));
  yield* Deferred.succeed(decider, (key, _) => (0, _Function.pipe)(Ref.get(ref), Effect.map(map => Option.fromNullable(map.get(key))), Effect.flatMap(Option.match({
    onNone: () => Effect.flatMap(add, ([index, queue]) => Effect.zipRight(Ref.update(ref, map => map.set(key, index)), (0, _Function.pipe)(Queue.offer(output, Exit.succeed([key, mapDequeue(queue, exit => new take.TakeImpl((0, _Function.pipe)(exit, Exit.map(tuple => Chunk.of(tuple[1])))))])), Effect.as(n => n === index)))),
    onSome: index => Effect.succeed(n => n === index)
  }))));
  return stream.flattenExitOption(stream.fromQueue(output, {
    shutdown: true
  }));
}))));
/** @internal */
const mapEffectOptions = exports.mapEffectOptions = /*#__PURE__*/(0, _Function.dual)(args => typeof args[0] !== "function", (self, f, options) => {
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
const bindEffect = exports.bindEffect = /*#__PURE__*/(0, _Function.dual)(args => typeof args[0] !== "string", (self, tag, f, options) => mapEffectOptions(self, k => Effect.map(f(k), a => ({
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
    return (0, _Function.pipe)(Queue.take(this.dequeue), Effect.map(a => this.f(a)));
  }
  get takeAll() {
    return (0, _Function.pipe)(Queue.takeAll(this.dequeue), Effect.map(Chunk.map(a => this.f(a))));
  }
  takeUpTo(max) {
    return (0, _Function.pipe)(Queue.takeUpTo(this.dequeue, max), Effect.map(Chunk.map(a => this.f(a))));
  }
  takeBetween(min, max) {
    return (0, _Function.pipe)(Queue.takeBetween(this.dequeue, min, max), Effect.map(Chunk.map(a => this.f(a))));
  }
  takeN(n) {
    return (0, _Function.pipe)(Queue.takeN(this.dequeue, n), Effect.map(Chunk.map(a => this.f(a))));
  }
  poll() {
    return (0, _Function.pipe)(Queue.poll(this.dequeue), Effect.map(Option.map(a => this.f(a))));
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
  commit() {
    return this.take;
  }
}
/** @internal */
const groupByKey = exports.groupByKey = /*#__PURE__*/(0, _Function.dual)(args => typeof args[0] !== "function", (self, f, options) => {
  const loop = (map, outerQueue) => core.readWithCause({
    onInput: input => core.flatMap(core.fromEffect(Effect.forEach(groupByIterable(input, f), ([key, values]) => {
      const innerQueue = map.get(key);
      if (innerQueue === undefined) {
        return (0, _Function.pipe)(Queue.bounded(options?.bufferSize ?? 16), Effect.flatMap(innerQueue => (0, _Function.pipe)(Effect.sync(() => {
          map.set(key, innerQueue);
        }), Effect.zipRight(Queue.offer(outerQueue, take.of([key, innerQueue]))), Effect.zipRight((0, _Function.pipe)(Queue.offer(innerQueue, take.chunk(values)), Effect.catchSomeCause(cause => Cause.isInterruptedOnly(cause) ? Option.some(Effect.void) : Option.none()))))));
      }
      return Effect.catchSomeCause(Queue.offer(innerQueue, take.chunk(values)), cause => Cause.isInterruptedOnly(cause) ? Option.some(Effect.void) : Option.none());
    }, {
      discard: true
    })), () => loop(map, outerQueue)),
    onFailure: cause => core.fromEffect(Queue.offer(outerQueue, take.failCause(cause))),
    onDone: () => core.fromEffect((0, _Function.pipe)(Effect.forEach(map.entries(), ([_, innerQueue]) => (0, _Function.pipe)(Queue.offer(innerQueue, take.end), Effect.catchSomeCause(cause => Cause.isInterruptedOnly(cause) ? Option.some(Effect.void) : Option.none())), {
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
const groupByIterable = /*#__PURE__*/(0, _Function.dual)(2, (iterable, f) => {
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