import * as RA from "../../Array.js";
import * as Chunk from "../../Chunk.js";
import { dual, pipe } from "../../Function.js";
import * as Option from "../../Option.js";
import { hasProperty } from "../../Predicate.js";
import * as core from "./core.js";
import * as OpCodes from "./opCodes/strategy.js";
import * as stm from "./stm.js";
import * as tRef from "./tRef.js";
const TEnqueueSymbolKey = "effect/TQueue/TEnqueue";
/** @internal */
export const TEnqueueTypeId = /*#__PURE__*/Symbol.for(TEnqueueSymbolKey);
const TDequeueSymbolKey = "effect/TQueue/TDequeue";
/** @internal */
export const TDequeueTypeId = /*#__PURE__*/Symbol.for(TDequeueSymbolKey);
/** @internal */
export const BackPressure = {
  _tag: OpCodes.OP_BACKPRESSURE_STRATEGY
};
/** @internal */
export const Dropping = {
  _tag: OpCodes.OP_DROPPING_STRATEGY
};
/** @internal */
export const Sliding = {
  _tag: OpCodes.OP_SLIDING_STRATEGY
};
/** @internal */
export const tDequeueVariance = {
  /* c8 ignore next */
  _Out: _ => _
};
/** @internal */
export const tEnqueueVariance = {
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
      const queue = pipe(this.ref, tRef.unsafeGet(runtime.journal));
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
export const isTQueue = u => {
  return isTEnqueue(u) && isTDequeue(u);
};
/** @internal */
export const isTEnqueue = u => hasProperty(u, TEnqueueTypeId);
/** @internal */
export const isTDequeue = u => hasProperty(u, TDequeueTypeId);
/** @internal */
export const awaitShutdown = self => self.awaitShutdown;
/** @internal */
export const bounded = requestedCapacity => makeQueue(requestedCapacity, BackPressure);
/** @internal */
export const capacity = self => {
  return self.capacity();
};
/** @internal */
export const dropping = requestedCapacity => makeQueue(requestedCapacity, Dropping);
/** @internal */
export const isEmpty = self => self.isEmpty;
/** @internal */
export const isFull = self => self.isFull;
/** @internal */
export const isShutdown = self => self.isShutdown;
/** @internal */
export const offer = /*#__PURE__*/dual(2, (self, value) => self.offer(value));
/** @internal */
export const offerAll = /*#__PURE__*/dual(2, (self, iterable) => self.offerAll(iterable));
/** @internal */
export const peek = self => self.peek;
/** @internal */
export const peekOption = self => self.peekOption;
/** @internal */
export const poll = self => pipe(self.takeUpTo(1), core.map(RA.head));
/** @internal */
export const seek = /*#__PURE__*/dual(2, (self, predicate) => seekLoop(self, predicate));
const seekLoop = (self, predicate) => core.flatMap(self.take, a => predicate(a) ? core.succeed(a) : seekLoop(self, predicate));
/** @internal */
export const shutdown = self => self.shutdown;
/** @internal */
export const size = self => self.size;
/** @internal */
export const sliding = requestedCapacity => makeQueue(requestedCapacity, Sliding);
/** @internal */
export const take = self => self.take;
/** @internal */
export const takeAll = self => self.takeAll;
/** @internal */
export const takeBetween = /*#__PURE__*/dual(3, (self, min, max) => stm.suspend(() => {
  const takeRemainder = (min, max, acc) => {
    if (max < min) {
      return core.succeed(acc);
    }
    return pipe(self.takeUpTo(max), core.flatMap(taken => {
      const remaining = min - taken.length;
      if (remaining === 1) {
        return pipe(self.take, core.map(a => pipe(acc, Chunk.appendAll(Chunk.unsafeFromArray(taken)), Chunk.append(a))));
      }
      if (remaining > 1) {
        return pipe(self.take, core.flatMap(a => takeRemainder(remaining - 1, max - taken.length - 1, pipe(acc, Chunk.appendAll(Chunk.unsafeFromArray(taken)), Chunk.append(a)))));
      }
      return core.succeed(pipe(acc, Chunk.appendAll(Chunk.unsafeFromArray(taken))));
    }));
  };
  return core.map(takeRemainder(min, max, Chunk.empty()), c => Array.from(c));
}));
/** @internal */
export const takeN = /*#__PURE__*/dual(2, (self, n) => pipe(self, takeBetween(n, n)));
/** @internal */
export const takeUpTo = /*#__PURE__*/dual(2, (self, max) => self.takeUpTo(max));
/** @internal */
export const unbounded = () => makeQueue(Number.MAX_SAFE_INTEGER, Dropping);
const makeQueue = (requestedCapacity, strategy) => core.map(tRef.make([]), ref => new TQueueImpl(ref, requestedCapacity, strategy));
//# sourceMappingURL=tQueue.js.map