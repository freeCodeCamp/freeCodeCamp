"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unbounded = exports.subscribeScoped = exports.subscribe = exports.sliding = exports.size = exports.shutdown = exports.publishAll = exports.publish = exports.makeNode = exports.isShutdown = exports.isFull = exports.isEmpty = exports.dropping = exports.capacity = exports.bounded = exports.awaitShutdown = exports.TPubSubTypeId = void 0;
var RA = _interopRequireWildcard(require("../../Array.js"));
var Effect = _interopRequireWildcard(require("../../Effect.js"));
var _Function = require("../../Function.js");
var HashSet = _interopRequireWildcard(require("../../HashSet.js"));
var Option = _interopRequireWildcard(require("../../Option.js"));
var core = _interopRequireWildcard(require("./core.js"));
var OpCodes = _interopRequireWildcard(require("./opCodes/strategy.js"));
var stm = _interopRequireWildcard(require("./stm.js"));
var tQueue = _interopRequireWildcard(require("./tQueue.js"));
var tRef = _interopRequireWildcard(require("./tRef.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TPubSubSymbolKey = "effect/TPubSub";
/** @internal */
const TPubSubTypeId = exports.TPubSubTypeId = /*#__PURE__*/Symbol.for(TPubSubSymbolKey);
const AbsentValue = /*#__PURE__*/Symbol.for("effect/TPubSub/AbsentValue");
/** @internal */
const makeNode = (head, subscribers, tail) => ({
  head,
  subscribers,
  tail
});
/** @internal */
exports.makeNode = makeNode;
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
    return core.map(stm.forEach(iterable, a => this.offer(a)), RA.every(_Function.identity));
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
const makeTPubSub = (requestedCapacity, strategy) => (0, _Function.pipe)(stm.all([tRef.make(void 0), tRef.make(0)]), core.flatMap(([empty, pubsubSize]) => (0, _Function.pipe)(stm.all([tRef.make(empty), tRef.make(empty), tRef.make(0), tRef.make(HashSet.empty())]), core.map(([publisherHead, publisherTail, subscriberCount, subscribers]) => new TPubSubImpl(pubsubSize, publisherHead, publisherTail, requestedCapacity, strategy, subscriberCount, subscribers)))));
const makeSubscription = (pubsubSize, publisherHead, publisherTail, requestedCapacity, subscriberCount, subscribers) => (0, _Function.pipe)(tRef.get(publisherTail), core.flatMap(currentPublisherTail => (0, _Function.pipe)(stm.all([tRef.make(currentPublisherTail), tRef.get(subscriberCount), tRef.get(subscribers)]), stm.tap(([_, currentSubscriberCount]) => (0, _Function.pipe)(subscriberCount, tRef.set(currentSubscriberCount + 1))), stm.tap(([subscriberHead, _, currentSubscribers]) => (0, _Function.pipe)(subscribers, tRef.set((0, _Function.pipe)(currentSubscribers, HashSet.add(subscriberHead))))), core.map(([subscriberHead]) => new TPubSubSubscriptionImpl(pubsubSize, publisherHead, requestedCapacity, subscriberHead, subscriberCount, subscribers)))));
/** @internal */
const awaitShutdown = self => self.awaitShutdown;
/** @internal */
exports.awaitShutdown = awaitShutdown;
const bounded = requestedCapacity => makeTPubSub(requestedCapacity, tQueue.BackPressure);
/** @internal */
exports.bounded = bounded;
const capacity = self => self.capacity();
/** @internal */
exports.capacity = capacity;
const dropping = requestedCapacity => makeTPubSub(requestedCapacity, tQueue.Dropping);
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
const publish = exports.publish = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => self.offer(value));
/** @internal */
const publishAll = exports.publishAll = /*#__PURE__*/(0, _Function.dual)(2, (self, iterable) => self.offerAll(iterable));
/** @internal */
const size = self => self.size;
/** @internal */
exports.size = size;
const shutdown = self => self.shutdown;
/** @internal */
exports.shutdown = shutdown;
const sliding = requestedCapacity => makeTPubSub(requestedCapacity, tQueue.Sliding);
/** @internal */
exports.sliding = sliding;
const subscribe = self => makeSubscription(self.pubsubSize, self.publisherHead, self.publisherTail, self.requestedCapacity, self.subscriberCount, self.subscribers);
/** @internal */
exports.subscribe = subscribe;
const subscribeScoped = self => Effect.acquireRelease(subscribe(self), dequeue => tQueue.shutdown(dequeue));
/** @internal */
exports.subscribeScoped = subscribeScoped;
const unbounded = () => makeTPubSub(Number.MAX_SAFE_INTEGER, tQueue.Dropping);
exports.unbounded = unbounded;
//# sourceMappingURL=tPubSub.js.map