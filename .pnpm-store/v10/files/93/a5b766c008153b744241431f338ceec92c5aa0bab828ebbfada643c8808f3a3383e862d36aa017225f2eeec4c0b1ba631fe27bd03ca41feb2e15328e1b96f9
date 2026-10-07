import * as RA from "../../Array.js";
import * as Effect from "../../Effect.js";
import { dual, identity, pipe } from "../../Function.js";
import * as HashSet from "../../HashSet.js";
import * as Option from "../../Option.js";
import * as core from "./core.js";
import * as OpCodes from "./opCodes/strategy.js";
import * as stm from "./stm.js";
import * as tQueue from "./tQueue.js";
import * as tRef from "./tRef.js";
/** @internal */
const TPubSubSymbolKey = "effect/TPubSub";
/** @internal */
export const TPubSubTypeId = /*#__PURE__*/Symbol.for(TPubSubSymbolKey);
const AbsentValue = /*#__PURE__*/Symbol.for("effect/TPubSub/AbsentValue");
/** @internal */
export const makeNode = (head, subscribers, tail) => ({
  head,
  subscribers,
  tail
});
/** @internal */
class TPubSubImpl {
  pubsubSize;
  publisherHead;
  publisherTail;
  requestedCapacity;
  strategy;
  subscriberCount;
  subscribers;
  [TPubSubTypeId] = {
    _A: _ => _
  };
  [tQueue.TEnqueueTypeId] = tQueue.tEnqueueVariance;
  constructor(pubsubSize, publisherHead, publisherTail, requestedCapacity, strategy, subscriberCount, subscribers) {
    this.pubsubSize = pubsubSize;
    this.publisherHead = publisherHead;
    this.publisherTail = publisherTail;
    this.requestedCapacity = requestedCapacity;
    this.strategy = strategy;
    this.subscriberCount = subscriberCount;
    this.subscribers = subscribers;
  }
  isShutdown = /*#__PURE__*/core.effect(journal => {
    const currentPublisherTail = tRef.unsafeGet(this.publisherTail, journal);
    return currentPublisherTail === undefined;
  });
  awaitShutdown = /*#__PURE__*/core.flatMap(this.isShutdown, isShutdown => isShutdown ? stm.void : core.retry);
  capacity() {
    return this.requestedCapacity;
  }
  size = /*#__PURE__*/core.withSTMRuntime(runtime => {
    const currentPublisherTail = tRef.unsafeGet(this.publisherTail, runtime.journal);
    if (currentPublisherTail === undefined) {
      return core.interruptAs(runtime.fiberId);
    }
    return core.succeed(tRef.unsafeGet(this.pubsubSize, runtime.journal));
  });
  isEmpty = /*#__PURE__*/core.map(this.size, size => size === 0);
  isFull = /*#__PURE__*/core.map(this.size, size => size === this.capacity());
  offer(value) {
    return core.withSTMRuntime(runtime => {
      const currentPublisherTail = tRef.unsafeGet(this.publisherTail, runtime.journal);
      if (currentPublisherTail === undefined) {
        return core.interruptAs(runtime.fiberId);
      }
      const currentSubscriberCount = tRef.unsafeGet(this.subscriberCount, runtime.journal);
      if (currentSubscriberCount === 0) {
        return core.succeed(true);
      }
      const currentPubSubSize = tRef.unsafeGet(this.pubsubSize, runtime.journal);
      if (currentPubSubSize < this.requestedCapacity) {
        const updatedPublisherTail = new tRef.TRefImpl(void 0);
        const updatedNode = makeNode(value, currentSubscriberCount, updatedPublisherTail);
        tRef.unsafeSet(currentPublisherTail, updatedNode, runtime.journal);
        tRef.unsafeSet(this.publisherTail, updatedPublisherTail, runtime.journal);
        tRef.unsafeSet(this.pubsubSize, currentPubSubSize + 1, runtime.journal);
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
            if (this.requestedCapacity > 0) {
              let currentPublisherHead = tRef.unsafeGet(this.publisherHead, runtime.journal);
              let loop = true;
              while (loop) {
                const node = tRef.unsafeGet(currentPublisherHead, runtime.journal);
                if (node === undefined) {
                  return core.retry;
                }
                const head = node.head;
                const tail = node.tail;
                if (head !== AbsentValue) {
                  const updatedNode = makeNode(AbsentValue, node.subscribers, node.tail);
                  tRef.unsafeSet(currentPublisherHead, updatedNode, runtime.journal);
                  tRef.unsafeSet(this.publisherHead, tail, runtime.journal);
                  loop = false;
                } else {
                  currentPublisherHead = tail;
                }
              }
            }
            const updatedPublisherTail = new tRef.TRefImpl(void 0);
            const updatedNode = makeNode(value, currentSubscriberCount, updatedPublisherTail);
            tRef.unsafeSet(currentPublisherTail, updatedNode, runtime.journal);
            tRef.unsafeSet(this.publisherTail, updatedPublisherTail, runtime.journal);
            return core.succeed(true);
          }
      }
    });
  }
  offerAll(iterable) {
    return core.map(stm.forEach(iterable, a => this.offer(a)), RA.every(identity));
  }
  shutdown = /*#__PURE__*/core.effect(journal => {
    const currentPublisherTail = tRef.unsafeGet(this.publisherTail, journal);
    if (currentPublisherTail !== undefined) {
      tRef.unsafeSet(this.publisherTail, void 0, journal);
      const currentSubscribers = tRef.unsafeGet(this.subscribers, journal);
      HashSet.forEach(currentSubscribers, subscriber => {
        tRef.unsafeSet(subscriber, void 0, journal);
      });
      tRef.unsafeSet(this.subscribers, HashSet.empty(), journal);
    }
  });
}
/** @internal */
class TPubSubSubscriptionImpl {
  pubsubSize;
  publisherHead;
  requestedCapacity;
  subscriberHead;
  subscriberCount;
  subscribers;
  [TPubSubTypeId] = TPubSubTypeId;
  [tQueue.TDequeueTypeId] = tQueue.tDequeueVariance;
  constructor(pubsubSize, publisherHead, requestedCapacity, subscriberHead, subscriberCount, subscribers) {
    this.pubsubSize = pubsubSize;
    this.publisherHead = publisherHead;
    this.requestedCapacity = requestedCapacity;
    this.subscriberHead = subscriberHead;
    this.subscriberCount = subscriberCount;
    this.subscribers = subscribers;
  }
  isShutdown = /*#__PURE__*/core.effect(journal => {
    const currentSubscriberHead = tRef.unsafeGet(this.subscriberHead, journal);
    return currentSubscriberHead === undefined;
  });
  awaitShutdown = /*#__PURE__*/core.flatMap(this.isShutdown, isShutdown => isShutdown ? stm.void : core.retry);
  capacity() {
    return this.requestedCapacity;
  }
  size = /*#__PURE__*/core.withSTMRuntime(runtime => {
    let currentSubscriberHead = tRef.unsafeGet(this.subscriberHead, runtime.journal);
    if (currentSubscriberHead === undefined) {
      return core.interruptAs(runtime.fiberId);
    }
    let loop = true;
    let size = 0;
    while (loop) {
      const node = tRef.unsafeGet(currentSubscriberHead, runtime.journal);
      if (node === undefined) {
        loop = false;
      } else {
        const head = node.head;
        const tail = node.tail;
        if (head !== AbsentValue) {
          size = size + 1;
          if (size >= Number.MAX_SAFE_INTEGER) {
            loop = false;
          }
        }
        currentSubscriberHead = tail;
      }
    }
    return core.succeed(size);
  });
  isEmpty = /*#__PURE__*/core.map(this.size, size => size === 0);
  isFull = /*#__PURE__*/core.map(this.size, size => size === this.capacity());
  peek = /*#__PURE__*/core.withSTMRuntime(runtime => {
    let currentSubscriberHead = tRef.unsafeGet(this.subscriberHead, runtime.journal);
    if (currentSubscriberHead === undefined) {
      return core.interruptAs(runtime.fiberId);
    }
    let value = AbsentValue;
    let loop = true;
    while (loop) {
      const node = tRef.unsafeGet(currentSubscriberHead, runtime.journal);
      if (node === undefined) {
        return core.retry;
      }
      const head = node.head;
      const tail = node.tail;
      if (head !== AbsentValue) {
        value = head;
        loop = false;
      } else {
        currentSubscriberHead = tail;
      }
    }
    return core.succeed(value);
  });
  peekOption = /*#__PURE__*/core.withSTMRuntime(runtime => {
    let currentSubscriberHead = tRef.unsafeGet(this.subscriberHead, runtime.journal);
    if (currentSubscriberHead === undefined) {
      return core.interruptAs(runtime.fiberId);
    }
    let value = Option.none();
    let loop = true;
    while (loop) {
      const node = tRef.unsafeGet(currentSubscriberHead, runtime.journal);
      if (node === undefined) {
        value = Option.none();
        loop = false;
      } else {
        const head = node.head;
        const tail = node.tail;
        if (head !== AbsentValue) {
          value = Option.some(head);
          loop = false;
        } else {
          currentSubscriberHead = tail;
        }
      }
    }
    return core.succeed(value);
  });
  shutdown = /*#__PURE__*/core.effect(journal => {
    let currentSubscriberHead = tRef.unsafeGet(this.subscriberHead, journal);
    if (currentSubscriberHead !== undefined) {
      tRef.unsafeSet(this.subscriberHead, void 0, journal);
      let loop = true;
      while (loop) {
        const node = tRef.unsafeGet(currentSubscriberHead, journal);
        if (node === undefined) {
          loop = false;
        } else {
          const head = node.head;
          const tail = node.tail;
          if (head !== AbsentValue) {
            const subscribers = node.subscribers;
            if (subscribers === 1) {
              const size = tRef.unsafeGet(this.pubsubSize, journal);
              const updatedNode = makeNode(AbsentValue, 0, tail);
              tRef.unsafeSet(currentSubscriberHead, updatedNode, journal);
              tRef.unsafeSet(this.publisherHead, tail, journal);
              tRef.unsafeSet(this.pubsubSize, size - 1, journal);
            } else {
              const updatedNode = makeNode(head, subscribers - 1, tail);
              tRef.unsafeSet(currentSubscriberHead, updatedNode, journal);
            }
          }
          currentSubscriberHead = tail;
        }
      }
      const currentSubscriberCount = tRef.unsafeGet(this.subscriberCount, journal);
      tRef.unsafeSet(this.subscriberCount, currentSubscriberCount - 1, journal);
      tRef.unsafeSet(this.subscribers, HashSet.remove(tRef.unsafeGet(this.subscribers, journal), this.subscriberHead), journal);
    }
  });
  take = /*#__PURE__*/core.withSTMRuntime(runtime => {
    let currentSubscriberHead = tRef.unsafeGet(this.subscriberHead, runtime.journal);
    if (currentSubscriberHead === undefined) {
      return core.interruptAs(runtime.fiberId);
    }
    let value = AbsentValue;
    let loop = true;
    while (loop) {
      const node = tRef.unsafeGet(currentSubscriberHead, runtime.journal);
      if (node === undefined) {
        return core.retry;
      }
      const head = node.head;
      const tail = node.tail;
      if (head !== AbsentValue) {
        const subscribers = node.subscribers;
        if (subscribers === 1) {
          const size = tRef.unsafeGet(this.pubsubSize, runtime.journal);
          const updatedNode = makeNode(AbsentValue, 0, tail);
          tRef.unsafeSet(currentSubscriberHead, updatedNode, runtime.journal);
          tRef.unsafeSet(this.publisherHead, tail, runtime.journal);
          tRef.unsafeSet(this.pubsubSize, size - 1, runtime.journal);
        } else {
          const updatedNode = makeNode(head, subscribers - 1, tail);
          tRef.unsafeSet(currentSubscriberHead, updatedNode, runtime.journal);
        }
        tRef.unsafeSet(this.subscriberHead, tail, runtime.journal);
        value = head;
        loop = false;
      } else {
        currentSubscriberHead = tail;
      }
    }
    return core.succeed(value);
  });
  takeAll = /*#__PURE__*/this.takeUpTo(Number.POSITIVE_INFINITY);
  takeUpTo(max) {
    return core.withSTMRuntime(runtime => {
      let currentSubscriberHead = tRef.unsafeGet(this.subscriberHead, runtime.journal);
      if (currentSubscriberHead === undefined) {
        return core.interruptAs(runtime.fiberId);
      }
      const builder = [];
      let n = 0;
      while (n !== max) {
        const node = tRef.unsafeGet(currentSubscriberHead, runtime.journal);
        if (node === undefined) {
          n = max;
        } else {
          const head = node.head;
          const tail = node.tail;
          if (head !== AbsentValue) {
            const subscribers = node.subscribers;
            if (subscribers === 1) {
              const size = tRef.unsafeGet(this.pubsubSize, runtime.journal);
              const updatedNode = makeNode(AbsentValue, 0, tail);
              tRef.unsafeSet(currentSubscriberHead, updatedNode, runtime.journal);
              tRef.unsafeSet(this.publisherHead, tail, runtime.journal);
              tRef.unsafeSet(this.pubsubSize, size - 1, runtime.journal);
            } else {
              const updatedNode = makeNode(head, subscribers - 1, tail);
              tRef.unsafeSet(currentSubscriberHead, updatedNode, runtime.journal);
            }
            builder.push(head);
            n = n + 1;
          }
          currentSubscriberHead = tail;
        }
      }
      tRef.unsafeSet(this.subscriberHead, currentSubscriberHead, runtime.journal);
      return core.succeed(builder);
    });
  }
}
/** @internal */
const makeTPubSub = (requestedCapacity, strategy) => pipe(stm.all([tRef.make(void 0), tRef.make(0)]), core.flatMap(([empty, pubsubSize]) => pipe(stm.all([tRef.make(empty), tRef.make(empty), tRef.make(0), tRef.make(HashSet.empty())]), core.map(([publisherHead, publisherTail, subscriberCount, subscribers]) => new TPubSubImpl(pubsubSize, publisherHead, publisherTail, requestedCapacity, strategy, subscriberCount, subscribers)))));
const makeSubscription = (pubsubSize, publisherHead, publisherTail, requestedCapacity, subscriberCount, subscribers) => pipe(tRef.get(publisherTail), core.flatMap(currentPublisherTail => pipe(stm.all([tRef.make(currentPublisherTail), tRef.get(subscriberCount), tRef.get(subscribers)]), stm.tap(([_, currentSubscriberCount]) => pipe(subscriberCount, tRef.set(currentSubscriberCount + 1))), stm.tap(([subscriberHead, _, currentSubscribers]) => pipe(subscribers, tRef.set(pipe(currentSubscribers, HashSet.add(subscriberHead))))), core.map(([subscriberHead]) => new TPubSubSubscriptionImpl(pubsubSize, publisherHead, requestedCapacity, subscriberHead, subscriberCount, subscribers)))));
/** @internal */
export const awaitShutdown = self => self.awaitShutdown;
/** @internal */
export const bounded = requestedCapacity => makeTPubSub(requestedCapacity, tQueue.BackPressure);
/** @internal */
export const capacity = self => self.capacity();
/** @internal */
export const dropping = requestedCapacity => makeTPubSub(requestedCapacity, tQueue.Dropping);
/** @internal */
export const isEmpty = self => self.isEmpty;
/** @internal */
export const isFull = self => self.isFull;
/** @internal */
export const isShutdown = self => self.isShutdown;
/** @internal */
export const publish = /*#__PURE__*/dual(2, (self, value) => self.offer(value));
/** @internal */
export const publishAll = /*#__PURE__*/dual(2, (self, iterable) => self.offerAll(iterable));
/** @internal */
export const size = self => self.size;
/** @internal */
export const shutdown = self => self.shutdown;
/** @internal */
export const sliding = requestedCapacity => makeTPubSub(requestedCapacity, tQueue.Sliding);
/** @internal */
export const subscribe = self => makeSubscription(self.pubsubSize, self.publisherHead, self.publisherTail, self.requestedCapacity, self.subscriberCount, self.subscribers);
/** @internal */
export const subscribeScoped = self => Effect.acquireRelease(subscribe(self), dequeue => tQueue.shutdown(dequeue));
/** @internal */
export const unbounded = () => makeTPubSub(Number.MAX_SAFE_INTEGER, tQueue.Dropping);
//# sourceMappingURL=tPubSub.js.map