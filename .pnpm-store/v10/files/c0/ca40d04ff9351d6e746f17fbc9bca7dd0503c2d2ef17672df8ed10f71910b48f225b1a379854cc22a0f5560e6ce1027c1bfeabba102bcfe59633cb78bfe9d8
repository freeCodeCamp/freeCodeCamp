"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unbounded = exports.takeUpTo = exports.takeN = exports.takeBetween = exports.takeAll = exports.take = exports.tEnqueueVariance = exports.tDequeueVariance = exports.sliding = exports.size = exports.shutdown = exports.seek = exports.poll = exports.peekOption = exports.peek = exports.offerAll = exports.offer = exports.isTQueue = exports.isTEnqueue = exports.isTDequeue = exports.isShutdown = exports.isFull = exports.isEmpty = exports.dropping = exports.capacity = exports.bounded = exports.awaitShutdown = exports.TEnqueueTypeId = exports.TDequeueTypeId = exports.Sliding = exports.Dropping = exports.BackPressure = void 0;
var RA = _interopRequireWildcard(require("../../Array.js"));
var Chunk = _interopRequireWildcard(require("../../Chunk.js"));
var _Function = require("../../Function.js");
var Option = _interopRequireWildcard(require("../../Option.js"));
var _Predicate = require("../../Predicate.js");
var core = _interopRequireWildcard(require("./core.js"));
var OpCodes = _interopRequireWildcard(require("./opCodes/strategy.js"));
var stm = _interopRequireWildcard(require("./stm.js"));
var tRef = _interopRequireWildcard(require("./tRef.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const TEnqueueSymbolKey = "effect/TQueue/TEnqueue";
/** @internal */
const TEnqueueTypeId = exports.TEnqueueTypeId = /*#__PURE__*/Symbol.for(TEnqueueSymbolKey);
const TDequeueSymbolKey = "effect/TQueue/TDequeue";
/** @internal */
const TDequeueTypeId = exports.TDequeueTypeId = /*#__PURE__*/Symbol.for(TDequeueSymbolKey);
/** @internal */
const BackPressure = exports.BackPressure = {
  _tag: OpCodes.OP_BACKPRESSURE_STRATEGY
};
/** @internal */
const Dropping = exports.Dropping = {
  _tag: OpCodes.OP_DROPPING_STRATEGY
};
/** @internal */
const Sliding = exports.Sliding = {
  _tag: OpCodes.OP_SLIDING_STRATEGY
};
/** @internal */
const tDequeueVariance = exports.tDequeueVariance = {
  /* c8 ignore next */
  _Out: _ => _
};
/** @internal */
const tEnqueueVariance = exports.tEnqueueVariance = {
  /* c8 ignore next */
  _In: _ => _
};
class TQueueImpl {
  ref;
  requestedCapacity;
  strategy;
  [TDequeueTypeId] = tDequeueVariance;
  [TEnqueueTypeId] = tEnqueueVariance;
  constructor(ref, requestedCapacity, strategy) {
    this.ref = ref;
    this.requestedCapacity = requestedCapacity;
    this.strategy = strategy;
  }
  capacity() {
    return this.requestedCapacity;
  }
  size = /*#__PURE__*/core.withSTMRuntime(runtime => {
    const queue = tRef.unsafeGet(this.ref, runtime.journal);
    if (queue === undefined) {
      return core.interruptAs(runtime.fiberId);
    }
    return core.succeed(queue.length);
  });
  isFull = /*#__PURE__*/core.map(this.size, size => size === this.requestedCapacity);
  isEmpty = /*#__PURE__*/core.map(this.size, size => size === 0);
  shutdown = /*#__PURE__*/core.withSTMRuntime(runtime => {
    tRef.unsafeSet(this.ref, void 0, runtime.journal);
    return stm.void;
  });
  isShutdown = /*#__PURE__*/core.effect(journal => {
    const queue = tRef.unsafeGet(this.ref, journal);
    return queue === undefined;
  });
  awaitShutdown = /*#__PURE__*/core.flatMap(this.isShutdown, isShutdown => isShutdown ? stm.void : core.retry);
  offer(value) {
    return core.withSTMRuntime(runtime => {
      const queue = (0, _Function.pipe)(this.ref, tRef.unsafeGet(runtime.journal));
      if (queue === undefined) {
        return core.interruptAs(runtime.fiberId);
      }
      if (queue.length < this.requestedCapacity) {
        queue.push(value);
        tRef.unsafeSet(this.ref, queue, runtime.journal);
        return core.succeed(true);
      }
      switch (this.strategy._tag) {
        case OpCodes.OP_BACKPRESSURE_STRATEGY:
          {
            return core.retry;
          }
        case OpCodes.OP_DROPPING_STRATEGY:
          {
            return core.succeed(false);
          }
        case OpCodes.OP_SLIDING_STRATEGY:
          {
            if (queue.length === 0) {
              return core.succeed(true);
            }
            queue.shift();
            queue.push(value);
            tRef.unsafeSet(this.ref, queue, runtime.journal);
            return core.succeed(true);
          }
      }
    });
  }
  offerAll(iterable) {
    return core.withSTMRuntime(runtime => {
      const as = Array.from(iterable);
      const queue = tRef.unsafeGet(this.ref, runtime.journal);
      if (queue === undefined) {
        return core.interruptAs(runtime.fiberId);
      }
      if (queue.length + as.length <= this.requestedCapacity) {
        tRef.unsafeSet(this.ref, [...queue, ...as], runtime.journal);
        return core.succeed(true);
      }
      switch (this.strategy._tag) {
        case OpCodes.OP_BACKPRESSURE_STRATEGY:
          {
            return core.retry;
          }
        case OpCodes.OP_DROPPING_STRATEGY:
          {
            const forQueue = as.slice(0, this.requestedCapacity - queue.length);
            tRef.unsafeSet(this.ref, [...queue, ...forQueue], runtime.journal);
            return core.succeed(false);
          }
        case OpCodes.OP_SLIDING_STRATEGY:
          {
            const forQueue = as.slice(0, this.requestedCapacity - queue.length);
            const toDrop = queue.length + forQueue.length - this.requestedCapacity;
            const newQueue = queue.slice(toDrop);
            tRef.unsafeSet(this.ref, [...newQueue, ...forQueue], runtime.journal);
            return core.succeed(true);
          }
      }
    });
  }
  peek = /*#__PURE__*/core.withSTMRuntime(runtime => {
    const queue = tRef.unsafeGet(this.ref, runtime.journal);
    if (queue === undefined) {
      return core.interruptAs(runtime.fiberId);
    }
    if (queue.length === 0) {
      return core.retry;
    }
    return core.succeed(queue[0]);
  });
  peekOption = /*#__PURE__*/core.withSTMRuntime(runtime => {
    const queue = tRef.unsafeGet(this.ref, runtime.journal);
    if (queue === undefined) {
      return core.interruptAs(runtime.fiberId);
    }
    return core.succeed(Option.fromNullable(queue[0]));
  });
  take = /*#__PURE__*/core.withSTMRuntime(runtime => {
    const queue = tRef.unsafeGet(this.ref, runtime.journal);
    if (queue === undefined) {
      return core.interruptAs(runtime.fiberId);
    }
    if (queue.length === 0) {
      return core.retry;
    }
    const dequeued = queue.shift();
    tRef.unsafeSet(this.ref, queue, runtime.journal);
    return core.succeed(dequeued);
  });
  takeAll = /*#__PURE__*/core.withSTMRuntime(runtime => {
    const queue = tRef.unsafeGet(this.ref, runtime.journal);
    if (queue === undefined) {
      return core.interruptAs(runtime.fiberId);
    }
    tRef.unsafeSet(this.ref, [], runtime.journal);
    return core.succeed(queue);
  });
  takeUpTo(max) {
    return core.withSTMRuntime(runtime => {
      const queue = tRef.unsafeGet(this.ref, runtime.journal);
      if (queue === undefined) {
        return core.interruptAs(runtime.fiberId);
      }
      const [toTake, remaining] = Chunk.splitAt(Chunk.unsafeFromArray(queue), max);
      tRef.unsafeSet(this.ref, Array.from(remaining), runtime.journal);
      return core.succeed(Array.from(toTake));
    });
  }
}
/** @internal */
const isTQueue = u => {
  return isTEnqueue(u) && isTDequeue(u);
};
/** @internal */
exports.isTQueue = isTQueue;
const isTEnqueue = u => (0, _Predicate.hasProperty)(u, TEnqueueTypeId);
/** @internal */
exports.isTEnqueue = isTEnqueue;
const isTDequeue = u => (0, _Predicate.hasProperty)(u, TDequeueTypeId);
/** @internal */
exports.isTDequeue = isTDequeue;
const awaitShutdown = self => self.awaitShutdown;
/** @internal */
exports.awaitShutdown = awaitShutdown;
const bounded = requestedCapacity => makeQueue(requestedCapacity, BackPressure);
/** @internal */
exports.bounded = bounded;
const capacity = self => {
  return self.capacity();
};
/** @internal */
exports.capacity = capacity;
const dropping = requestedCapacity => makeQueue(requestedCapacity, Dropping);
/** @internal */
exports.dropping = dropping;
const isEmpty = self => self.isEmpty;
/** @internal */
exports.isEmpty = isEmpty;
const isFull = self => self.isFull;
/** @internal */
exports.isFull = isFull;
const isShutdown = self => self.isShutdown;
/** @internal */
exports.isShutdown = isShutdown;
const offer = exports.offer = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => self.offer(value));
/** @internal */
const offerAll = exports.offerAll = /*#__PURE__*/(0, _Function.dual)(2, (self, iterable) => self.offerAll(iterable));
/** @internal */
const peek = self => self.peek;
/** @internal */
exports.peek = peek;
const peekOption = self => self.peekOption;
/** @internal */
exports.peekOption = peekOption;
const poll = self => (0, _Function.pipe)(self.takeUpTo(1), core.map(RA.head));
/** @internal */
exports.poll = poll;
const seek = exports.seek = /*#__PURE__*/(0, _Function.dual)(2, (self, predicate) => seekLoop(self, predicate));
const seekLoop = (self, predicate) => core.flatMap(self.take, a => predicate(a) ? core.succeed(a) : seekLoop(self, predicate));
/** @internal */
const shutdown = self => self.shutdown;
/** @internal */
exports.shutdown = shutdown;
const size = self => self.size;
/** @internal */
exports.size = size;
const sliding = requestedCapacity => makeQueue(requestedCapacity, Sliding);
/** @internal */
exports.sliding = sliding;
const take = self => self.take;
/** @internal */
exports.take = take;
const takeAll = self => self.takeAll;
/** @internal */
exports.takeAll = takeAll;
const takeBetween = exports.takeBetween = /*#__PURE__*/(0, _Function.dual)(3, (self, min, max) => stm.suspend(() => {
  const takeRemainder = (min, max, acc) => {
    if (max < min) {
      return core.succeed(acc);
    }
    return (0, _Function.pipe)(self.takeUpTo(max), core.flatMap(taken => {
      const remaining = min - taken.length;
      if (remaining === 1) {
        return (0, _Function.pipe)(self.take, core.map(a => (0, _Function.pipe)(acc, Chunk.appendAll(Chunk.unsafeFromArray(taken)), Chunk.append(a))));
      }
      if (remaining > 1) {
        return (0, _Function.pipe)(self.take, core.flatMap(a => takeRemainder(remaining - 1, max - taken.length - 1, (0, _Function.pipe)(acc, Chunk.appendAll(Chunk.unsafeFromArray(taken)), Chunk.append(a)))));
      }
      return core.succeed((0, _Function.pipe)(acc, Chunk.appendAll(Chunk.unsafeFromArray(taken))));
    }));
  };
  return core.map(takeRemainder(min, max, Chunk.empty()), c => Array.from(c));
}));
/** @internal */
const takeN = exports.takeN = /*#__PURE__*/(0, _Function.dual)(2, (self, n) => (0, _Function.pipe)(self, takeBetween(n, n)));
/** @internal */
const takeUpTo = exports.takeUpTo = /*#__PURE__*/(0, _Function.dual)(2, (self, max) => self.takeUpTo(max));
/** @internal */
const unbounded = () => makeQueue(Number.MAX_SAFE_INTEGER, Dropping);
exports.unbounded = unbounded;
const makeQueue = (requestedCapacity, strategy) => core.map(tRef.make([]), ref => new TQueueImpl(ref, requestedCapacity, strategy));
//# sourceMappingURL=tQueue.js.map