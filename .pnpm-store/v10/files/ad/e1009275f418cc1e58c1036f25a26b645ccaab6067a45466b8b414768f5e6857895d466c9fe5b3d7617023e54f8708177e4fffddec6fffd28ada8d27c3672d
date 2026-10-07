import * as Arr from "../Array.js";
import * as Chunk from "../Chunk.js";
import * as Effectable from "../Effectable.js";
import { dual, pipe } from "../Function.js";
import * as MutableQueue from "../MutableQueue.js";
import * as MutableRef from "../MutableRef.js";
import * as Option from "../Option.js";
import { pipeArguments } from "../Pipeable.js";
import { hasProperty } from "../Predicate.js";
import * as core from "./core.js";
import * as fiberRuntime from "./fiberRuntime.js";
/** @internal */
const EnqueueSymbolKey = "effect/QueueEnqueue";
/** @internal */
export const EnqueueTypeId = /*#__PURE__*/Symbol.for(EnqueueSymbolKey);
/** @internal */
const DequeueSymbolKey = "effect/QueueDequeue";
/** @internal */
export const DequeueTypeId = /*#__PURE__*/Symbol.for(DequeueSymbolKey);
/** @internal */
const QueueStrategySymbolKey = "effect/QueueStrategy";
/** @internal */
export const QueueStrategyTypeId = /*#__PURE__*/Symbol.for(QueueStrategySymbolKey);
/** @internal */
const BackingQueueSymbolKey = "effect/BackingQueue";
/** @internal */
export const BackingQueueTypeId = /*#__PURE__*/Symbol.for(BackingQueueSymbolKey);
const queueStrategyVariance = {
  /* c8 ignore next */
  _A: _ => _
};
const backingQueueVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
export const enqueueVariance = {
  /* c8 ignore next */
  _In: _ => _
};
/** @internal */
export const dequeueVariance = {
  /* c8 ignore next */
  _Out: _ => _
};
/** @internal */
class QueueImpl extends Effectable.Class {
  queue;
  takers;
  shutdownHook;
  shutdownFlag;
  strategy;
  [EnqueueTypeId] = enqueueVariance;
  [DequeueTypeId] = dequeueVariance;
  constructor(/** @internal */
  queue, /** @internal */
  takers, /** @internal */
  shutdownHook, /** @internal */
  shutdownFlag, /** @internal */
  strategy) {
    super();
    this.queue = queue;
    this.takers = takers;
    this.shutdownHook = shutdownHook;
    this.shutdownFlag = shutdownFlag;
    this.strategy = strategy;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  commit() {
    return this.take;
  }
  capacity() {
    return this.queue.capacity();
  }
  get size() {
    return core.suspend(() => core.catchAll(this.unsafeSize(), () => core.interrupt));
  }
  unsafeSize() {
    if (MutableRef.get(this.shutdownFlag)) {
      return Option.none();
    }
    return Option.some(this.queue.length() - MutableQueue.length(this.takers) + this.strategy.surplusSize());
  }
  get isEmpty() {
    return core.map(this.size, size => size <= 0);
  }
  get isFull() {
    return core.map(this.size, size => size >= this.capacity());
  }
  get shutdown() {
    return core.uninterruptible(core.withFiberRuntime(state => {
      pipe(this.shutdownFlag, MutableRef.set(true));
      return pipe(fiberRuntime.forEachConcurrentDiscard(unsafePollAll(this.takers), d => core.deferredInterruptWith(d, state.id()), false, false), core.zipRight(this.strategy.shutdown), core.whenEffect(core.deferredSucceed(this.shutdownHook, void 0)), core.asVoid);
    }));
  }
  get isShutdown() {
    return core.sync(() => MutableRef.get(this.shutdownFlag));
  }
  get awaitShutdown() {
    return core.deferredAwait(this.shutdownHook);
  }
  isActive() {
    return !MutableRef.get(this.shutdownFlag);
  }
  unsafeOffer(value) {
    if (MutableRef.get(this.shutdownFlag)) {
      return false;
    }
    let noRemaining;
    if (this.queue.length() === 0) {
      const taker = pipe(this.takers, MutableQueue.poll(MutableQueue.EmptyMutableQueue));
      if (taker !== MutableQueue.EmptyMutableQueue) {
        unsafeCompleteDeferred(taker, value);
        noRemaining = true;
      } else {
        noRemaining = false;
      }
    } else {
      noRemaining = false;
    }
    if (noRemaining) {
      return true;
    }
    // Not enough takers, offer to the queue
    const succeeded = this.queue.offer(value);
    unsafeCompleteTakers(this.strategy, this.queue, this.takers);
    return succeeded;
  }
  offer(value) {
    return core.suspend(() => {
      if (MutableRef.get(this.shutdownFlag)) {
        return core.interrupt;
      }
      let noRemaining;
      if (this.queue.length() === 0) {
        const taker = pipe(this.takers, MutableQueue.poll(MutableQueue.EmptyMutableQueue));
        if (taker !== MutableQueue.EmptyMutableQueue) {
          unsafeCompleteDeferred(taker, value);
          noRemaining = true;
        } else {
          noRemaining = false;
        }
      } else {
        noRemaining = false;
      }
      if (noRemaining) {
        return core.succeed(true);
      }
      // Not enough takers, offer to the queue
      const succeeded = this.queue.offer(value);
      unsafeCompleteTakers(this.strategy, this.queue, this.takers);
      return succeeded ? core.succeed(true) : this.strategy.handleSurplus([value], this.queue, this.takers, this.shutdownFlag);
    });
  }
  offerAll(iterable) {
    return core.suspend(() => {
      if (MutableRef.get(this.shutdownFlag)) {
        return core.interrupt;
      }
      const values = Arr.fromIterable(iterable);
      const pTakers = this.queue.length() === 0 ? Arr.fromIterable(unsafePollN(this.takers, values.length)) : Arr.empty;
      const [forTakers, remaining] = pipe(values, Arr.splitAt(pTakers.length));
      for (let i = 0; i < pTakers.length; i++) {
        const taker = pTakers[i];
        const item = forTakers[i];
        unsafeCompleteDeferred(taker, item);
      }
      if (remaining.length === 0) {
        return core.succeed(true);
      }
      // Not enough takers, offer to the queue
      const surplus = this.queue.offerAll(remaining);
      unsafeCompleteTakers(this.strategy, this.queue, this.takers);
      return Chunk.isEmpty(surplus) ? core.succeed(true) : this.strategy.handleSurplus(surplus, this.queue, this.takers, this.shutdownFlag);
    });
  }
  get take() {
    return core.withFiberRuntime(state => {
      if (MutableRef.get(this.shutdownFlag)) {
        return core.interrupt;
      }
      const item = this.queue.poll(MutableQueue.EmptyMutableQueue);
      if (item !== MutableQueue.EmptyMutableQueue) {
        this.strategy.unsafeOnQueueEmptySpace(this.queue, this.takers);
        return core.succeed(item);
      } else {
        // Add the deferred to takers, then:
        // - Try to take again in case a value was added since
        // - Wait for the deferred to be completed
        // - Clean up resources in case of interruption
        const deferred = core.deferredUnsafeMake(state.id());
        return pipe(core.suspend(() => {
          pipe(this.takers, MutableQueue.offer(deferred));
          unsafeCompleteTakers(this.strategy, this.queue, this.takers);
          return MutableRef.get(this.shutdownFlag) ? core.interrupt : core.deferredAwait(deferred);
        }), core.onInterrupt(() => {
          return core.sync(() => unsafeRemove(this.takers, deferred));
        }));
      }
    });
  }
  get takeAll() {
    return core.suspend(() => {
      return MutableRef.get(this.shutdownFlag) ? core.interrupt : core.sync(() => {
        const values = this.queue.pollUpTo(Number.POSITIVE_INFINITY);
        this.strategy.unsafeOnQueueEmptySpace(this.queue, this.takers);
        return Chunk.fromIterable(values);
      });
    });
  }
  takeUpTo(max) {
    return core.suspend(() => MutableRef.get(this.shutdownFlag) ? core.interrupt : core.sync(() => {
      const values = this.queue.pollUpTo(max);
      this.strategy.unsafeOnQueueEmptySpace(this.queue, this.takers);
      return Chunk.fromIterable(values);
    }));
  }
  takeBetween(min, max) {
    return core.suspend(() => takeRemainderLoop(this, min, max, Chunk.empty()));
  }
}
/** @internal */
const takeRemainderLoop = (self, min, max, acc) => {
  if (max < min) {
    return core.succeed(acc);
  }
  return pipe(takeUpTo(self, max), core.flatMap(bs => {
    const remaining = min - bs.length;
    if (remaining === 1) {
      return pipe(take(self), core.map(b => pipe(acc, Chunk.appendAll(bs), Chunk.append(b))));
    }
    if (remaining > 1) {
      return pipe(take(self), core.flatMap(b => takeRemainderLoop(self, remaining - 1, max - bs.length - 1, pipe(acc, Chunk.appendAll(bs), Chunk.append(b)))));
    }
    return core.succeed(pipe(acc, Chunk.appendAll(bs)));
  }));
};
/** @internal */
export const isQueue = u => isEnqueue(u) && isDequeue(u);
/** @internal */
export const isEnqueue = u => hasProperty(u, EnqueueTypeId);
/** @internal */
export const isDequeue = u => hasProperty(u, DequeueTypeId);
/** @internal */
export const bounded = requestedCapacity => pipe(core.sync(() => MutableQueue.bounded(requestedCapacity)), core.flatMap(queue => make(backingQueueFromMutableQueue(queue), backPressureStrategy())));
/** @internal */
export const dropping = requestedCapacity => pipe(core.sync(() => MutableQueue.bounded(requestedCapacity)), core.flatMap(queue => make(backingQueueFromMutableQueue(queue), droppingStrategy())));
/** @internal */
export const sliding = requestedCapacity => pipe(core.sync(() => MutableQueue.bounded(requestedCapacity)), core.flatMap(queue => make(backingQueueFromMutableQueue(queue), slidingStrategy())));
/** @internal */
export const unbounded = () => pipe(core.sync(() => MutableQueue.unbounded()), core.flatMap(queue => make(backingQueueFromMutableQueue(queue), droppingStrategy())));
/** @internal */
const unsafeMake = (queue, takers, shutdownHook, shutdownFlag, strategy) => {
  return new QueueImpl(queue, takers, shutdownHook, shutdownFlag, strategy);
};
/** @internal */
export const make = (queue, strategy) => pipe(core.deferredMake(), core.map(deferred => unsafeMake(queue, MutableQueue.unbounded(), deferred, MutableRef.make(false), strategy)));
/** @internal */
export class BackingQueueFromMutableQueue {
  mutable;
  [BackingQueueTypeId] = backingQueueVariance;
  constructor(mutable) {
    this.mutable = mutable;
  }
  poll(def) {
    return MutableQueue.poll(this.mutable, def);
  }
  pollUpTo(limit) {
    return MutableQueue.pollUpTo(this.mutable, limit);
  }
  offerAll(elements) {
    return MutableQueue.offerAll(this.mutable, elements);
  }
  offer(element) {
    return MutableQueue.offer(this.mutable, element);
  }
  capacity() {
    return MutableQueue.capacity(this.mutable);
  }
  length() {
    return MutableQueue.length(this.mutable);
  }
}
/** @internal */
export const backingQueueFromMutableQueue = mutable => new BackingQueueFromMutableQueue(mutable);
/** @internal */
export const capacity = self => self.capacity();
/** @internal */
export const size = self => self.size;
/** @internal */
export const isFull = self => self.isFull;
/** @internal */
export const isEmpty = self => self.isEmpty;
/** @internal */
export const isShutdown = self => self.isShutdown;
/** @internal */
export const awaitShutdown = self => self.awaitShutdown;
/** @internal */
export const shutdown = self => self.shutdown;
/** @internal */
export const offer = /*#__PURE__*/dual(2, (self, value) => self.offer(value));
/** @internal */
export const unsafeOffer = /*#__PURE__*/dual(2, (self, value) => self.unsafeOffer(value));
/** @internal */
export const offerAll = /*#__PURE__*/dual(2, (self, iterable) => self.offerAll(iterable));
/** @internal */
export const poll = self => core.map(self.takeUpTo(1), Chunk.head);
/** @internal */
export const take = self => self.take;
/** @internal */
export const takeAll = self => self.takeAll;
/** @internal */
export const takeUpTo = /*#__PURE__*/dual(2, (self, max) => self.takeUpTo(max));
/** @internal */
export const takeBetween = /*#__PURE__*/dual(3, (self, min, max) => self.takeBetween(min, max));
/** @internal */
export const takeN = /*#__PURE__*/dual(2, (self, n) => self.takeBetween(n, n));
// -----------------------------------------------------------------------------
// Strategy
// -----------------------------------------------------------------------------
/** @internal */
export const backPressureStrategy = () => new BackPressureStrategy();
/** @internal */
export const droppingStrategy = () => new DroppingStrategy();
/** @internal */
export const slidingStrategy = () => new SlidingStrategy();
/** @internal */
class BackPressureStrategy {
  [QueueStrategyTypeId] = queueStrategyVariance;
  putters = /*#__PURE__*/MutableQueue.unbounded();
  surplusSize() {
    return MutableQueue.length(this.putters);
  }
  onCompleteTakersWithEmptyQueue(takers) {
    while (!MutableQueue.isEmpty(this.putters) && !MutableQueue.isEmpty(takers)) {
      const taker = MutableQueue.poll(takers, void 0);
      const putter = MutableQueue.poll(this.putters, void 0);
      if (putter[2]) {
        unsafeCompleteDeferred(putter[1], true);
      }
      unsafeCompleteDeferred(taker, putter[0]);
    }
  }
  get shutdown() {
    return pipe(core.fiberId, core.flatMap(fiberId => pipe(core.sync(() => unsafePollAll(this.putters)), core.flatMap(putters => fiberRuntime.forEachConcurrentDiscard(putters, ([_, deferred, isLastItem]) => isLastItem ? pipe(core.deferredInterruptWith(deferred, fiberId), core.asVoid) : core.void, false, false)))));
  }
  handleSurplus(iterable, queue, takers, isShutdown) {
    return core.withFiberRuntime(state => {
      const deferred = core.deferredUnsafeMake(state.id());
      return pipe(core.suspend(() => {
        this.unsafeOffer(iterable, deferred);
        this.unsafeOnQueueEmptySpace(queue, takers);
        unsafeCompleteTakers(this, queue, takers);
        return MutableRef.get(isShutdown) ? core.interrupt : core.deferredAwait(deferred);
      }), core.onInterrupt(() => core.sync(() => this.unsafeRemove(deferred))));
    });
  }
  unsafeOnQueueEmptySpace(queue, takers) {
    let keepPolling = true;
    while (keepPolling && (queue.capacity() === Number.POSITIVE_INFINITY || queue.length() < queue.capacity())) {
      const putter = pipe(this.putters, MutableQueue.poll(MutableQueue.EmptyMutableQueue));
      if (putter === MutableQueue.EmptyMutableQueue) {
        keepPolling = false;
      } else {
        const offered = queue.offer(putter[0]);
        if (offered && putter[2]) {
          unsafeCompleteDeferred(putter[1], true);
        } else if (!offered) {
          unsafeOfferAll(this.putters, pipe(unsafePollAll(this.putters), Chunk.prepend(putter)));
        }
        unsafeCompleteTakers(this, queue, takers);
      }
    }
  }
  unsafeOffer(iterable, deferred) {
    const stuff = Arr.fromIterable(iterable);
    for (let i = 0; i < stuff.length; i++) {
      const value = stuff[i];
      if (i === stuff.length - 1) {
        pipe(this.putters, MutableQueue.offer([value, deferred, true]));
      } else {
        pipe(this.putters, MutableQueue.offer([value, deferred, false]));
      }
    }
  }
  unsafeRemove(deferred) {
    unsafeOfferAll(this.putters, pipe(unsafePollAll(this.putters), Chunk.filter(([, _]) => _ !== deferred)));
  }
}
/** @internal */
class DroppingStrategy {
  [QueueStrategyTypeId] = queueStrategyVariance;
  surplusSize() {
    return 0;
  }
  get shutdown() {
    return core.void;
  }
  onCompleteTakersWithEmptyQueue() {}
  handleSurplus(_iterable, _queue, _takers, _isShutdown) {
    return core.succeed(false);
  }
  unsafeOnQueueEmptySpace(_queue, _takers) {
    //
  }
}
/** @internal */
class SlidingStrategy {
  [QueueStrategyTypeId] = queueStrategyVariance;
  surplusSize() {
    return 0;
  }
  get shutdown() {
    return core.void;
  }
  onCompleteTakersWithEmptyQueue() {}
  handleSurplus(iterable, queue, takers, _isShutdown) {
    return core.sync(() => {
      this.unsafeOffer(queue, iterable);
      unsafeCompleteTakers(this, queue, takers);
      return true;
    });
  }
  unsafeOnQueueEmptySpace(_queue, _takers) {
    //
  }
  unsafeOffer(queue, iterable) {
    const iterator = iterable[Symbol.iterator]();
    let next;
    let offering = true;
    while (!(next = iterator.next()).done && offering) {
      if (queue.capacity() === 0) {
        return;
      }
      // Poll 1 and retry
      queue.poll(MutableQueue.EmptyMutableQueue);
      offering = queue.offer(next.value);
    }
  }
}
/** @internal */
const unsafeCompleteDeferred = (deferred, a) => {
  return core.deferredUnsafeDone(deferred, core.succeed(a));
};
/** @internal */
const unsafeOfferAll = (queue, as) => {
  return pipe(queue, MutableQueue.offerAll(as));
};
/** @internal */
const unsafePollAll = queue => {
  return pipe(queue, MutableQueue.pollUpTo(Number.POSITIVE_INFINITY));
};
/** @internal */
const unsafePollN = (queue, max) => {
  return pipe(queue, MutableQueue.pollUpTo(max));
};
/** @internal */
export const unsafeRemove = (queue, a) => {
  unsafeOfferAll(queue, pipe(unsafePollAll(queue), Chunk.filter(b => a !== b)));
};
/** @internal */
export const unsafeCompleteTakers = (strategy, queue, takers) => {
  // Check both a taker and an item are in the queue, starting with the taker
  let keepPolling = true;
  while (keepPolling && queue.length() !== 0) {
    const taker = pipe(takers, MutableQueue.poll(MutableQueue.EmptyMutableQueue));
    if (taker !== MutableQueue.EmptyMutableQueue) {
      const element = queue.poll(MutableQueue.EmptyMutableQueue);
      if (element !== MutableQueue.EmptyMutableQueue) {
        unsafeCompleteDeferred(taker, element);
        strategy.unsafeOnQueueEmptySpace(queue, takers);
      } else {
        unsafeOfferAll(takers, pipe(unsafePollAll(takers), Chunk.prepend(taker)));
      }
      keepPolling = true;
    } else {
      keepPolling = false;
    }
  }
  if (keepPolling && queue.length() === 0 && !MutableQueue.isEmpty(takers)) {
    strategy.onCompleteTakersWithEmptyQueue(takers);
  }
};
//# sourceMappingURL=queue.js.map