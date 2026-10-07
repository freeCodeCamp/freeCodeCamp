"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsafeMakeSubscription = exports.unsafeMakePubSub = exports.unbounded = exports.subscribe = exports.sliding = exports.size = exports.shutdown = exports.publishAll = exports.publish = exports.makePubSub = exports.isShutdown = exports.isFull = exports.isEmpty = exports.dropping = exports.capacity = exports.bounded = exports.awaitShutdown = exports.SlidingStrategy = exports.DroppingStrategy = void 0;
var Chunk = _interopRequireWildcard(require("../Chunk.js"));
var Effectable = _interopRequireWildcard(require("../Effectable.js"));
var _Function = require("../Function.js");
var MutableQueue = _interopRequireWildcard(require("../MutableQueue.js"));
var MutableRef = _interopRequireWildcard(require("../MutableRef.js"));
var _Number = require("../Number.js");
var Option = _interopRequireWildcard(require("../Option.js"));
var _Pipeable = require("../Pipeable.js");
var core = _interopRequireWildcard(require("./core.js"));
var executionStrategy = _interopRequireWildcard(require("./executionStrategy.js"));
var fiberRuntime = _interopRequireWildcard(require("./fiberRuntime.js"));
var queue = _interopRequireWildcard(require("./queue.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const AbsentValue = /*#__PURE__*/Symbol.for("effect/PubSub/AbsentValue");
const addSubscribers = (subscription, pollers) => subscribers => {
  if (!subscribers.has(subscription)) {
    subscribers.set(subscription, new Set());
  }
  const set = subscribers.get(subscription);
  set.add(pollers);
};
const removeSubscribers = (subscription, pollers) => subscribers => {
  if (!subscribers.has(subscription)) {
    return;
  }
  const set = subscribers.get(subscription);
  set.delete(pollers);
  if (set.size === 0) {
    subscribers.delete(subscription);
  }
};
/** @internal */
const bounded = capacity => core.suspend(() => {
  const pubsub = makeBoundedPubSub(capacity);
  return makePubSub(pubsub, new BackPressureStrategy());
});
/** @internal */
exports.bounded = bounded;
const dropping = capacity => core.suspend(() => {
  const pubsub = makeBoundedPubSub(capacity);
  return makePubSub(pubsub, new DroppingStrategy());
});
/** @internal */
exports.dropping = dropping;
const sliding = capacity => core.suspend(() => {
  const pubsub = makeBoundedPubSub(capacity);
  return makePubSub(pubsub, new SlidingStrategy());
});
/** @internal */
exports.sliding = sliding;
const unbounded = options => core.suspend(() => {
  const pubsub = makeUnboundedPubSub(options);
  return makePubSub(pubsub, new DroppingStrategy());
});
/** @internal */
exports.unbounded = unbounded;
const capacity = self => self.capacity();
/** @internal */
exports.capacity = capacity;
const size = self => self.size;
/** @internal */
exports.size = size;
const isFull = self => self.isFull;
/** @internal */
exports.isFull = isFull;
const isEmpty = self => self.isEmpty;
/** @internal */
exports.isEmpty = isEmpty;
const shutdown = self => self.shutdown;
/** @internal */
exports.shutdown = shutdown;
const isShutdown = self => self.isShutdown;
/** @internal */
exports.isShutdown = isShutdown;
const awaitShutdown = self => self.awaitShutdown;
/** @internal */
exports.awaitShutdown = awaitShutdown;
const publish = exports.publish = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => self.publish(value));
/** @internal */
const publishAll = exports.publishAll = /*#__PURE__*/(0, _Function.dual)(2, (self, elements) => self.publishAll(elements));
/** @internal */
const subscribe = self => self.subscribe;
/** @internal */
exports.subscribe = subscribe;
const makeBoundedPubSub = capacity => {
  const options = typeof capacity === "number" ? {
    capacity
  } : capacity;
  ensureCapacity(options.capacity);
  const replayBuffer = options.replay && options.replay > 0 ? new ReplayBuffer(Math.ceil(options.replay)) : undefined;
  if (options.capacity === 1) {
    return new BoundedPubSubSingle(replayBuffer);
  } else if ((0, _Number.nextPow2)(options.capacity) === options.capacity) {
    return new BoundedPubSubPow2(options.capacity, replayBuffer);
  } else {
    return new BoundedPubSubArb(options.capacity, replayBuffer);
  }
};
/** @internal */
const makeUnboundedPubSub = options => new UnboundedPubSub(options?.replay ? new ReplayBuffer(options.replay) : undefined);
/** @internal */
const makeSubscription = (pubsub, subscribers, strategy) => core.map(core.deferredMake(), deferred => unsafeMakeSubscription(pubsub, subscribers, pubsub.subscribe(), MutableQueue.unbounded(), deferred, MutableRef.make(false), strategy));
/** @internal */
const unsafeMakeSubscription = (pubsub, subscribers, subscription, pollers, shutdownHook, shutdownFlag, strategy) => new SubscriptionImpl(pubsub, subscribers, subscription, pollers, shutdownHook, shutdownFlag, strategy, pubsub.replayWindow());
/** @internal */
exports.unsafeMakeSubscription = unsafeMakeSubscription;
class BoundedPubSubArb {
  capacity;
  replayBuffer;
  array;
  publisherIndex = 0;
  subscribers;
  subscriberCount = 0;
  subscribersIndex = 0;
  constructor(capacity, replayBuffer) {
    this.capacity = capacity;
    this.replayBuffer = replayBuffer;
    this.array = Array.from({
      length: capacity
    });
    this.subscribers = Array.from({
      length: capacity
    });
  }
  replayWindow() {
    return this.replayBuffer ? new ReplayWindowImpl(this.replayBuffer) : emptyReplayWindow;
  }
  isEmpty() {
    return this.publisherIndex === this.subscribersIndex;
  }
  isFull() {
    return this.publisherIndex === this.subscribersIndex + this.capacity;
  }
  size() {
    return this.publisherIndex - this.subscribersIndex;
  }
  publish(value) {
    if (this.isFull()) {
      return false;
    }
    if (this.subscriberCount !== 0) {
      const index = this.publisherIndex % this.capacity;
      this.array[index] = value;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.offer(value);
    }
    return true;
  }
  publishAll(elements) {
    if (this.subscriberCount === 0) {
      if (this.replayBuffer) {
        this.replayBuffer.offerAll(elements);
      }
      return Chunk.empty();
    }
    const chunk = Chunk.fromIterable(elements);
    const n = chunk.length;
    const size = this.publisherIndex - this.subscribersIndex;
    const available = this.capacity - size;
    const forPubSub = Math.min(n, available);
    if (forPubSub === 0) {
      return chunk;
    }
    let iteratorIndex = 0;
    const publishAllIndex = this.publisherIndex + forPubSub;
    while (this.publisherIndex !== publishAllIndex) {
      const a = Chunk.unsafeGet(chunk, iteratorIndex++);
      const index = this.publisherIndex % this.capacity;
      this.array[index] = a;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
      if (this.replayBuffer) {
        this.replayBuffer.offer(a);
      }
    }
    return Chunk.drop(chunk, iteratorIndex);
  }
  slide() {
    if (this.subscribersIndex !== this.publisherIndex) {
      const index = this.subscribersIndex % this.capacity;
      this.array[index] = AbsentValue;
      this.subscribers[index] = 0;
      this.subscribersIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.slide();
    }
  }
  subscribe() {
    this.subscriberCount += 1;
    return new BoundedPubSubArbSubscription(this, this.publisherIndex, false);
  }
}
class BoundedPubSubArbSubscription {
  self;
  subscriberIndex;
  unsubscribed;
  constructor(self, subscriberIndex, unsubscribed) {
    this.self = self;
    this.subscriberIndex = subscriberIndex;
    this.unsubscribed = unsubscribed;
  }
  isEmpty() {
    return this.unsubscribed || this.self.publisherIndex === this.subscriberIndex || this.self.publisherIndex === this.self.subscribersIndex;
  }
  size() {
    if (this.unsubscribed) {
      return 0;
    }
    return this.self.publisherIndex - Math.max(this.subscriberIndex, this.self.subscribersIndex);
  }
  poll(default_) {
    if (this.unsubscribed) {
      return default_;
    }
    this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
    if (this.subscriberIndex !== this.self.publisherIndex) {
      const index = this.subscriberIndex % this.self.capacity;
      const elem = this.self.array[index];
      this.self.subscribers[index] -= 1;
      if (this.self.subscribers[index] === 0) {
        this.self.array[index] = AbsentValue;
        this.self.subscribersIndex += 1;
      }
      this.subscriberIndex += 1;
      return elem;
    }
    return default_;
  }
  pollUpTo(n) {
    if (this.unsubscribed) {
      return Chunk.empty();
    }
    this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
    const size = this.self.publisherIndex - this.subscriberIndex;
    const toPoll = Math.min(n, size);
    if (toPoll <= 0) {
      return Chunk.empty();
    }
    const builder = [];
    const pollUpToIndex = this.subscriberIndex + toPoll;
    while (this.subscriberIndex !== pollUpToIndex) {
      const index = this.subscriberIndex % this.self.capacity;
      const a = this.self.array[index];
      this.self.subscribers[index] -= 1;
      if (this.self.subscribers[index] === 0) {
        this.self.array[index] = AbsentValue;
        this.self.subscribersIndex += 1;
      }
      builder.push(a);
      this.subscriberIndex += 1;
    }
    return Chunk.fromIterable(builder);
  }
  unsubscribe() {
    if (!this.unsubscribed) {
      this.unsubscribed = true;
      this.self.subscriberCount -= 1;
      this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
      while (this.subscriberIndex !== this.self.publisherIndex) {
        const index = this.subscriberIndex % this.self.capacity;
        this.self.subscribers[index] -= 1;
        if (this.self.subscribers[index] === 0) {
          this.self.array[index] = AbsentValue;
          this.self.subscribersIndex += 1;
        }
        this.subscriberIndex += 1;
      }
    }
  }
}
/** @internal */
class BoundedPubSubPow2 {
  capacity;
  replayBuffer;
  array;
  mask;
  publisherIndex = 0;
  subscribers;
  subscriberCount = 0;
  subscribersIndex = 0;
  constructor(capacity, replayBuffer) {
    this.capacity = capacity;
    this.replayBuffer = replayBuffer;
    this.array = Array.from({
      length: capacity
    });
    this.mask = capacity - 1;
    this.subscribers = Array.from({
      length: capacity
    });
  }
  replayWindow() {
    return this.replayBuffer ? new ReplayWindowImpl(this.replayBuffer) : emptyReplayWindow;
  }
  isEmpty() {
    return this.publisherIndex === this.subscribersIndex;
  }
  isFull() {
    return this.publisherIndex === this.subscribersIndex + this.capacity;
  }
  size() {
    return this.publisherIndex - this.subscribersIndex;
  }
  publish(value) {
    if (this.isFull()) {
      return false;
    }
    if (this.subscriberCount !== 0) {
      const index = this.publisherIndex & this.mask;
      this.array[index] = value;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.offer(value);
    }
    return true;
  }
  publishAll(elements) {
    if (this.subscriberCount === 0) {
      if (this.replayBuffer) {
        this.replayBuffer.offerAll(elements);
      }
      return Chunk.empty();
    }
    const chunk = Chunk.fromIterable(elements);
    const n = chunk.length;
    const size = this.publisherIndex - this.subscribersIndex;
    const available = this.capacity - size;
    const forPubSub = Math.min(n, available);
    if (forPubSub === 0) {
      return chunk;
    }
    let iteratorIndex = 0;
    const publishAllIndex = this.publisherIndex + forPubSub;
    while (this.publisherIndex !== publishAllIndex) {
      const elem = Chunk.unsafeGet(chunk, iteratorIndex++);
      const index = this.publisherIndex & this.mask;
      this.array[index] = elem;
      this.subscribers[index] = this.subscriberCount;
      this.publisherIndex += 1;
      if (this.replayBuffer) {
        this.replayBuffer.offer(elem);
      }
    }
    return Chunk.drop(chunk, iteratorIndex);
  }
  slide() {
    if (this.subscribersIndex !== this.publisherIndex) {
      const index = this.subscribersIndex & this.mask;
      this.array[index] = AbsentValue;
      this.subscribers[index] = 0;
      this.subscribersIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.slide();
    }
  }
  subscribe() {
    this.subscriberCount += 1;
    return new BoundedPubSubPow2Subscription(this, this.publisherIndex, false);
  }
}
/** @internal */
class BoundedPubSubPow2Subscription {
  self;
  subscriberIndex;
  unsubscribed;
  constructor(self, subscriberIndex, unsubscribed) {
    this.self = self;
    this.subscriberIndex = subscriberIndex;
    this.unsubscribed = unsubscribed;
  }
  isEmpty() {
    return this.unsubscribed || this.self.publisherIndex === this.subscriberIndex || this.self.publisherIndex === this.self.subscribersIndex;
  }
  size() {
    if (this.unsubscribed) {
      return 0;
    }
    return this.self.publisherIndex - Math.max(this.subscriberIndex, this.self.subscribersIndex);
  }
  poll(default_) {
    if (this.unsubscribed) {
      return default_;
    }
    this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
    if (this.subscriberIndex !== this.self.publisherIndex) {
      const index = this.subscriberIndex & this.self.mask;
      const elem = this.self.array[index];
      this.self.subscribers[index] -= 1;
      if (this.self.subscribers[index] === 0) {
        this.self.array[index] = AbsentValue;
        this.self.subscribersIndex += 1;
      }
      this.subscriberIndex += 1;
      return elem;
    }
    return default_;
  }
  pollUpTo(n) {
    if (this.unsubscribed) {
      return Chunk.empty();
    }
    this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
    const size = this.self.publisherIndex - this.subscriberIndex;
    const toPoll = Math.min(n, size);
    if (toPoll <= 0) {
      return Chunk.empty();
    }
    const builder = [];
    const pollUpToIndex = this.subscriberIndex + toPoll;
    while (this.subscriberIndex !== pollUpToIndex) {
      const index = this.subscriberIndex & this.self.mask;
      const elem = this.self.array[index];
      this.self.subscribers[index] -= 1;
      if (this.self.subscribers[index] === 0) {
        this.self.array[index] = AbsentValue;
        this.self.subscribersIndex += 1;
      }
      builder.push(elem);
      this.subscriberIndex += 1;
    }
    return Chunk.fromIterable(builder);
  }
  unsubscribe() {
    if (!this.unsubscribed) {
      this.unsubscribed = true;
      this.self.subscriberCount -= 1;
      this.subscriberIndex = Math.max(this.subscriberIndex, this.self.subscribersIndex);
      while (this.subscriberIndex !== this.self.publisherIndex) {
        const index = this.subscriberIndex & this.self.mask;
        this.self.subscribers[index] -= 1;
        if (this.self.subscribers[index] === 0) {
          this.self.array[index] = AbsentValue;
          this.self.subscribersIndex += 1;
        }
        this.subscriberIndex += 1;
      }
    }
  }
}
/** @internal */
class BoundedPubSubSingle {
  replayBuffer;
  publisherIndex = 0;
  subscriberCount = 0;
  subscribers = 0;
  value = AbsentValue;
  capacity = 1;
  constructor(replayBuffer) {
    this.replayBuffer = replayBuffer;
  }
  replayWindow() {
    return this.replayBuffer ? new ReplayWindowImpl(this.replayBuffer) : emptyReplayWindow;
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
  isEmpty() {
    return this.subscribers === 0;
  }
  isFull() {
    return !this.isEmpty();
  }
  size() {
    return this.isEmpty() ? 0 : 1;
  }
  publish(value) {
    if (this.isFull()) {
      return false;
    }
    if (this.subscriberCount !== 0) {
      this.value = value;
      this.subscribers = this.subscriberCount;
      this.publisherIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.offer(value);
    }
    return true;
  }
  publishAll(elements) {
    if (this.subscriberCount === 0) {
      if (this.replayBuffer) {
        this.replayBuffer.offerAll(elements);
      }
      return Chunk.empty();
    }
    const chunk = Chunk.fromIterable(elements);
    if (Chunk.isEmpty(chunk)) {
      return chunk;
    }
    if (this.publish(Chunk.unsafeHead(chunk))) {
      return Chunk.drop(chunk, 1);
    } else {
      return chunk;
    }
  }
  slide() {
    if (this.isFull()) {
      this.subscribers = 0;
      this.value = AbsentValue;
    }
    if (this.replayBuffer) {
      this.replayBuffer.slide();
    }
  }
  subscribe() {
    this.subscriberCount += 1;
    return new BoundedPubSubSingleSubscription(this, this.publisherIndex, false);
  }
}
/** @internal */
class BoundedPubSubSingleSubscription {
  self;
  subscriberIndex;
  unsubscribed;
  constructor(self, subscriberIndex, unsubscribed) {
    this.self = self;
    this.subscriberIndex = subscriberIndex;
    this.unsubscribed = unsubscribed;
  }
  isEmpty() {
    return this.unsubscribed || this.self.subscribers === 0 || this.subscriberIndex === this.self.publisherIndex;
  }
  size() {
    return this.isEmpty() ? 0 : 1;
  }
  poll(default_) {
    if (this.isEmpty()) {
      return default_;
    }
    const elem = this.self.value;
    this.self.subscribers -= 1;
    if (this.self.subscribers === 0) {
      this.self.value = AbsentValue;
    }
    this.subscriberIndex += 1;
    return elem;
  }
  pollUpTo(n) {
    if (this.isEmpty() || n < 1) {
      return Chunk.empty();
    }
    const a = this.self.value;
    this.self.subscribers -= 1;
    if (this.self.subscribers === 0) {
      this.self.value = AbsentValue;
    }
    this.subscriberIndex += 1;
    return Chunk.of(a);
  }
  unsubscribe() {
    if (!this.unsubscribed) {
      this.unsubscribed = true;
      this.self.subscriberCount -= 1;
      if (this.subscriberIndex !== this.self.publisherIndex) {
        this.self.subscribers -= 1;
        if (this.self.subscribers === 0) {
          this.self.value = AbsentValue;
        }
      }
    }
  }
}
/** @internal */
class UnboundedPubSub {
  replayBuffer;
  publisherHead = {
    value: AbsentValue,
    subscribers: 0,
    next: null
  };
  publisherTail = this.publisherHead;
  publisherIndex = 0;
  subscribersIndex = 0;
  capacity = Number.MAX_SAFE_INTEGER;
  constructor(replayBuffer) {
    this.replayBuffer = replayBuffer;
  }
  replayWindow() {
    return this.replayBuffer ? new ReplayWindowImpl(this.replayBuffer) : emptyReplayWindow;
  }
  isEmpty() {
    return this.publisherHead === this.publisherTail;
  }
  isFull() {
    return false;
  }
  size() {
    return this.publisherIndex - this.subscribersIndex;
  }
  publish(value) {
    const subscribers = this.publisherTail.subscribers;
    if (subscribers !== 0) {
      this.publisherTail.next = {
        value,
        subscribers,
        next: null
      };
      this.publisherTail = this.publisherTail.next;
      this.publisherIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.offer(value);
    }
    return true;
  }
  publishAll(elements) {
    if (this.publisherTail.subscribers !== 0) {
      for (const a of elements) {
        this.publish(a);
      }
    } else if (this.replayBuffer) {
      this.replayBuffer.offerAll(elements);
    }
    return Chunk.empty();
  }
  slide() {
    if (this.publisherHead !== this.publisherTail) {
      this.publisherHead = this.publisherHead.next;
      this.publisherHead.value = AbsentValue;
      this.subscribersIndex += 1;
    }
    if (this.replayBuffer) {
      this.replayBuffer.slide();
    }
  }
  subscribe() {
    this.publisherTail.subscribers += 1;
    return new UnboundedPubSubSubscription(this, this.publisherTail, this.publisherIndex, false);
  }
}
/** @internal */
class UnboundedPubSubSubscription {
  self;
  subscriberHead;
  subscriberIndex;
  unsubscribed;
  constructor(self, subscriberHead, subscriberIndex, unsubscribed) {
    this.self = self;
    this.subscriberHead = subscriberHead;
    this.subscriberIndex = subscriberIndex;
    this.unsubscribed = unsubscribed;
  }
  isEmpty() {
    if (this.unsubscribed) {
      return true;
    }
    let empty = true;
    let loop = true;
    while (loop) {
      if (this.subscriberHead === this.self.publisherTail) {
        loop = false;
      } else {
        if (this.subscriberHead.next.value !== AbsentValue) {
          empty = false;
          loop = false;
        } else {
          this.subscriberHead = this.subscriberHead.next;
          this.subscriberIndex += 1;
        }
      }
    }
    return empty;
  }
  size() {
    if (this.unsubscribed) {
      return 0;
    }
    return this.self.publisherIndex - Math.max(this.subscriberIndex, this.self.subscribersIndex);
  }
  poll(default_) {
    if (this.unsubscribed) {
      return default_;
    }
    let loop = true;
    let polled = default_;
    while (loop) {
      if (this.subscriberHead === this.self.publisherTail) {
        loop = false;
      } else {
        const elem = this.subscriberHead.next.value;
        if (elem !== AbsentValue) {
          polled = elem;
          this.subscriberHead.subscribers -= 1;
          if (this.subscriberHead.subscribers === 0) {
            this.self.publisherHead = this.self.publisherHead.next;
            this.self.publisherHead.value = AbsentValue;
            this.self.subscribersIndex += 1;
          }
          loop = false;
        }
        this.subscriberHead = this.subscriberHead.next;
        this.subscriberIndex += 1;
      }
    }
    return polled;
  }
  pollUpTo(n) {
    const builder = [];
    const default_ = AbsentValue;
    let i = 0;
    while (i !== n) {
      const a = this.poll(default_);
      if (a === default_) {
        i = n;
      } else {
        builder.push(a);
        i += 1;
      }
    }
    return Chunk.fromIterable(builder);
  }
  unsubscribe() {
    if (!this.unsubscribed) {
      this.unsubscribed = true;
      this.self.publisherTail.subscribers -= 1;
      while (this.subscriberHead !== this.self.publisherTail) {
        if (this.subscriberHead.next.value !== AbsentValue) {
          this.subscriberHead.subscribers -= 1;
          if (this.subscriberHead.subscribers === 0) {
            this.self.publisherHead = this.self.publisherHead.next;
            this.self.publisherHead.value = AbsentValue;
            this.self.subscribersIndex += 1;
          }
        }
        this.subscriberHead = this.subscriberHead.next;
      }
    }
  }
}
/** @internal */
class SubscriptionImpl extends Effectable.Class {
  pubsub;
  subscribers;
  subscription;
  pollers;
  shutdownHook;
  shutdownFlag;
  strategy;
  replayWindow;
  [queue.DequeueTypeId] = queue.dequeueVariance;
  constructor(pubsub, subscribers, subscription, pollers, shutdownHook, shutdownFlag, strategy, replayWindow) {
    super();
    this.pubsub = pubsub;
    this.subscribers = subscribers;
    this.subscription = subscription;
    this.pollers = pollers;
    this.shutdownHook = shutdownHook;
    this.shutdownFlag = shutdownFlag;
    this.strategy = strategy;
    this.replayWindow = replayWindow;
  }
  commit() {
    return this.take;
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
  capacity() {
    return this.pubsub.capacity;
  }
  isActive() {
    return !MutableRef.get(this.shutdownFlag);
  }
  get size() {
    return core.suspend(() => MutableRef.get(this.shutdownFlag) ? core.interrupt : core.succeed(this.subscription.size() + this.replayWindow.remaining));
  }
  unsafeSize() {
    if (MutableRef.get(this.shutdownFlag)) {
      return Option.none();
    }
    return Option.some(this.subscription.size() + this.replayWindow.remaining);
  }
  get isFull() {
    return core.suspend(() => MutableRef.get(this.shutdownFlag) ? core.interrupt : core.succeed(this.subscription.size() === this.capacity()));
  }
  get isEmpty() {
    return core.map(this.size, size => size === 0);
  }
  get shutdown() {
    return core.uninterruptible(core.withFiberRuntime(state => {
      MutableRef.set(this.shutdownFlag, true);
      return (0, _Function.pipe)(fiberRuntime.forEachParUnbounded(unsafePollAllQueue(this.pollers), d => core.deferredInterruptWith(d, state.id()), false), core.zipRight(core.sync(() => {
        this.subscribers.delete(this.subscription);
        this.subscription.unsubscribe();
        this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
      })), core.whenEffect(core.deferredSucceed(this.shutdownHook, void 0)), core.asVoid);
    }));
  }
  get isShutdown() {
    return core.sync(() => MutableRef.get(this.shutdownFlag));
  }
  get awaitShutdown() {
    return core.deferredAwait(this.shutdownHook);
  }
  get take() {
    return core.withFiberRuntime(state => {
      if (MutableRef.get(this.shutdownFlag)) {
        return core.interrupt;
      }
      if (this.replayWindow.remaining > 0) {
        const message = this.replayWindow.take();
        return core.succeed(message);
      }
      const message = MutableQueue.isEmpty(this.pollers) ? this.subscription.poll(MutableQueue.EmptyMutableQueue) : MutableQueue.EmptyMutableQueue;
      if (message === MutableQueue.EmptyMutableQueue) {
        const deferred = core.deferredUnsafeMake(state.id());
        return (0, _Function.pipe)(core.suspend(() => {
          (0, _Function.pipe)(this.pollers, MutableQueue.offer(deferred));
          (0, _Function.pipe)(this.subscribers, addSubscribers(this.subscription, this.pollers));
          this.strategy.unsafeCompletePollers(this.pubsub, this.subscribers, this.subscription, this.pollers);
          return MutableRef.get(this.shutdownFlag) ? core.interrupt : core.deferredAwait(deferred);
        }), core.onInterrupt(() => core.sync(() => unsafeRemove(this.pollers, deferred))));
      } else {
        this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
        return core.succeed(message);
      }
    });
  }
  get takeAll() {
    return core.suspend(() => {
      if (MutableRef.get(this.shutdownFlag)) {
        return core.interrupt;
      }
      const as = MutableQueue.isEmpty(this.pollers) ? unsafePollAllSubscription(this.subscription) : Chunk.empty();
      this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
      if (this.replayWindow.remaining > 0) {
        return core.succeed(Chunk.appendAll(this.replayWindow.takeAll(), as));
      }
      return core.succeed(as);
    });
  }
  takeUpTo(max) {
    return core.suspend(() => {
      if (MutableRef.get(this.shutdownFlag)) {
        return core.interrupt;
      }
      let replay = undefined;
      if (this.replayWindow.remaining >= max) {
        const as = this.replayWindow.takeN(max);
        return core.succeed(as);
      } else if (this.replayWindow.remaining > 0) {
        replay = this.replayWindow.takeAll();
        max = max - replay.length;
      }
      const as = MutableQueue.isEmpty(this.pollers) ? unsafePollN(this.subscription, max) : Chunk.empty();
      this.strategy.unsafeOnPubSubEmptySpace(this.pubsub, this.subscribers);
      return replay ? core.succeed(Chunk.appendAll(replay, as)) : core.succeed(as);
    });
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
  return (0, _Function.pipe)(self.takeUpTo(max), core.flatMap(bs => {
    const remaining = min - bs.length;
    if (remaining === 1) {
      return (0, _Function.pipe)(self.take, core.map(b => (0, _Function.pipe)(acc, Chunk.appendAll(bs), Chunk.append(b))));
    }
    if (remaining > 1) {
      return (0, _Function.pipe)(self.take, core.flatMap(b => takeRemainderLoop(self, remaining - 1, max - bs.length - 1, (0, _Function.pipe)(acc, Chunk.appendAll(bs), Chunk.append(b)))));
    }
    return core.succeed((0, _Function.pipe)(acc, Chunk.appendAll(bs)));
  }));
};
/** @internal */
class PubSubImpl {
  pubsub;
  subscribers;
  scope;
  shutdownHook;
  shutdownFlag;
  strategy;
  [queue.EnqueueTypeId] = queue.enqueueVariance;
  [queue.DequeueTypeId] = queue.dequeueVariance;
  constructor(pubsub, subscribers, scope, shutdownHook, shutdownFlag, strategy) {
    this.pubsub = pubsub;
    this.subscribers = subscribers;
    this.scope = scope;
    this.shutdownHook = shutdownHook;
    this.shutdownFlag = shutdownFlag;
    this.strategy = strategy;
  }
  capacity() {
    return this.pubsub.capacity;
  }
  get size() {
    return core.suspend(() => MutableRef.get(this.shutdownFlag) ? core.interrupt : core.sync(() => this.pubsub.size()));
  }
  unsafeSize() {
    if (MutableRef.get(this.shutdownFlag)) {
      return Option.none();
    }
    return Option.some(this.pubsub.size());
  }
  get isFull() {
    return core.map(this.size, size => size === this.capacity());
  }
  get isEmpty() {
    return core.map(this.size, size => size === 0);
  }
  get awaitShutdown() {
    return core.deferredAwait(this.shutdownHook);
  }
  get isShutdown() {
    return core.sync(() => MutableRef.get(this.shutdownFlag));
  }
  get shutdown() {
    return core.uninterruptible(core.withFiberRuntime(state => {
      (0, _Function.pipe)(this.shutdownFlag, MutableRef.set(true));
      return (0, _Function.pipe)(this.scope.close(core.exitInterrupt(state.id())), core.zipRight(this.strategy.shutdown), core.whenEffect(core.deferredSucceed(this.shutdownHook, void 0)), core.asVoid);
    }));
  }
  publish(value) {
    return core.suspend(() => {
      if (MutableRef.get(this.shutdownFlag)) {
        return core.interrupt;
      }
      if (this.pubsub.publish(value)) {
        this.strategy.unsafeCompleteSubscribers(this.pubsub, this.subscribers);
        return core.succeed(true);
      }
      return this.strategy.handleSurplus(this.pubsub, this.subscribers, Chunk.of(value), this.shutdownFlag);
    });
  }
  isActive() {
    return !MutableRef.get(this.shutdownFlag);
  }
  unsafeOffer(value) {
    if (MutableRef.get(this.shutdownFlag)) {
      return false;
    }
    if (this.pubsub.publish(value)) {
      this.strategy.unsafeCompleteSubscribers(this.pubsub, this.subscribers);
      return true;
    }
    return false;
  }
  publishAll(elements) {
    return core.suspend(() => {
      if (MutableRef.get(this.shutdownFlag)) {
        return core.interrupt;
      }
      const surplus = unsafePublishAll(this.pubsub, elements);
      this.strategy.unsafeCompleteSubscribers(this.pubsub, this.subscribers);
      if (Chunk.isEmpty(surplus)) {
        return core.succeed(true);
      }
      return this.strategy.handleSurplus(this.pubsub, this.subscribers, surplus, this.shutdownFlag);
    });
  }
  get subscribe() {
    const acquire = core.tap(fiberRuntime.all([this.scope.fork(executionStrategy.sequential), makeSubscription(this.pubsub, this.subscribers, this.strategy)]), tuple => tuple[0].addFinalizer(() => tuple[1].shutdown));
    return core.map(fiberRuntime.acquireRelease(acquire, (tuple, exit) => tuple[0].close(exit)), tuple => tuple[1]);
  }
  offer(value) {
    return this.publish(value);
  }
  offerAll(elements) {
    return this.publishAll(elements);
  }
  pipe() {
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
}
/** @internal */
const makePubSub = (pubsub, strategy) => core.flatMap(fiberRuntime.scopeMake(), scope => core.map(core.deferredMake(), deferred => unsafeMakePubSub(pubsub, new Map(), scope, deferred, MutableRef.make(false), strategy)));
/** @internal */
exports.makePubSub = makePubSub;
const unsafeMakePubSub = (pubsub, subscribers, scope, shutdownHook, shutdownFlag, strategy) => new PubSubImpl(pubsub, subscribers, scope, shutdownHook, shutdownFlag, strategy);
/** @internal */
exports.unsafeMakePubSub = unsafeMakePubSub;
const ensureCapacity = capacity => {
  if (capacity <= 0) {
    throw new core.InvalidPubSubCapacityException(`Cannot construct PubSub with capacity of ${capacity}`);
  }
};
/** @internal */
const unsafeCompleteDeferred = (deferred, a) => {
  core.deferredUnsafeDone(deferred, core.succeed(a));
};
/** @internal */
const unsafeOfferAll = (queue, as) => {
  return (0, _Function.pipe)(queue, MutableQueue.offerAll(as));
};
/** @internal */
const unsafePollAllQueue = queue => {
  return (0, _Function.pipe)(queue, MutableQueue.pollUpTo(Number.POSITIVE_INFINITY));
};
/** @internal */
const unsafePollAllSubscription = subscription => {
  return subscription.pollUpTo(Number.POSITIVE_INFINITY);
};
/** @internal */
const unsafePollN = (subscription, max) => {
  return subscription.pollUpTo(max);
};
/** @internal */
const unsafePublishAll = (pubsub, as) => {
  return pubsub.publishAll(as);
};
/** @internal */
const unsafeRemove = (queue, value) => {
  unsafeOfferAll(queue, (0, _Function.pipe)(unsafePollAllQueue(queue), Chunk.filter(elem => elem !== value)));
};
/**
 * A strategy that applies back pressure to publishers when the `PubSub` is at
 * capacity. This guarantees that all subscribers will receive all messages
 * published to the `PubSub` while they are subscribed. However, it creates the
 * risk that a slow subscriber will slow down the rate at which messages
 * are published and received by other subscribers.
 *
 * @internal
 */
class BackPressureStrategy {
  publishers = /*#__PURE__*/MutableQueue.unbounded();
  get shutdown() {
    return core.flatMap(core.fiberId, fiberId => core.flatMap(core.sync(() => unsafePollAllQueue(this.publishers)), publishers => fiberRuntime.forEachConcurrentDiscard(publishers, ([_, deferred, last]) => last ? (0, _Function.pipe)(core.deferredInterruptWith(deferred, fiberId), core.asVoid) : core.void, false, false)));
  }
  handleSurplus(pubsub, subscribers, elements, isShutdown) {
    return core.withFiberRuntime(state => {
      const deferred = core.deferredUnsafeMake(state.id());
      return (0, _Function.pipe)(core.suspend(() => {
        this.unsafeOffer(elements, deferred);
        this.unsafeOnPubSubEmptySpace(pubsub, subscribers);
        this.unsafeCompleteSubscribers(pubsub, subscribers);
        return MutableRef.get(isShutdown) ? core.interrupt : core.deferredAwait(deferred);
      }), core.onInterrupt(() => core.sync(() => this.unsafeRemove(deferred))));
    });
  }
  unsafeOnPubSubEmptySpace(pubsub, subscribers) {
    let keepPolling = true;
    while (keepPolling && !pubsub.isFull()) {
      const publisher = (0, _Function.pipe)(this.publishers, MutableQueue.poll(MutableQueue.EmptyMutableQueue));
      if (publisher === MutableQueue.EmptyMutableQueue) {
        keepPolling = false;
      } else {
        const published = pubsub.publish(publisher[0]);
        if (published && publisher[2]) {
          unsafeCompleteDeferred(publisher[1], true);
        } else if (!published) {
          unsafeOfferAll(this.publishers, (0, _Function.pipe)(unsafePollAllQueue(this.publishers), Chunk.prepend(publisher)));
        }
        this.unsafeCompleteSubscribers(pubsub, subscribers);
      }
    }
  }
  unsafeCompletePollers(pubsub, subscribers, subscription, pollers) {
    return unsafeStrategyCompletePollers(this, pubsub, subscribers, subscription, pollers);
  }
  unsafeCompleteSubscribers(pubsub, subscribers) {
    return unsafeStrategyCompleteSubscribers(this, pubsub, subscribers);
  }
  unsafeOffer(elements, deferred) {
    const iterator = elements[Symbol.iterator]();
    let next = iterator.next();
    if (!next.done) {
      // eslint-disable-next-line no-constant-condition
      while (1) {
        const value = next.value;
        next = iterator.next();
        if (next.done) {
          (0, _Function.pipe)(this.publishers, MutableQueue.offer([value, deferred, true]));
          break;
        }
        (0, _Function.pipe)(this.publishers, MutableQueue.offer([value, deferred, false]));
      }
    }
  }
  unsafeRemove(deferred) {
    unsafeOfferAll(this.publishers, (0, _Function.pipe)(unsafePollAllQueue(this.publishers), Chunk.filter(([_, a]) => a !== deferred)));
  }
}
/**
 * A strategy that drops new messages when the `PubSub` is at capacity. This
 * guarantees that a slow subscriber will not slow down the rate at which
 * messages are published. However, it creates the risk that a slow
 * subscriber will slow down the rate at which messages are received by
 * other subscribers and that subscribers may not receive all messages
 * published to the `PubSub` while they are subscribed.
 *
 * @internal
 */
class DroppingStrategy {
  get shutdown() {
    return core.void;
  }
  handleSurplus(_pubsub, _subscribers, _elements, _isShutdown) {
    return core.succeed(false);
  }
  unsafeOnPubSubEmptySpace(_pubsub, _subscribers) {
    //
  }
  unsafeCompletePollers(pubsub, subscribers, subscription, pollers) {
    return unsafeStrategyCompletePollers(this, pubsub, subscribers, subscription, pollers);
  }
  unsafeCompleteSubscribers(pubsub, subscribers) {
    return unsafeStrategyCompleteSubscribers(this, pubsub, subscribers);
  }
}
/**
 * A strategy that adds new messages and drops old messages when the `PubSub` is
 * at capacity. This guarantees that a slow subscriber will not slow down
 * the rate at which messages are published and received by other
 * subscribers. However, it creates the risk that a slow subscriber will
 * not receive some messages published to the `PubSub` while it is subscribed.
 *
 * @internal
 */
exports.DroppingStrategy = DroppingStrategy;
class SlidingStrategy {
  get shutdown() {
    return core.void;
  }
  handleSurplus(pubsub, subscribers, elements, _isShutdown) {
    return core.sync(() => {
      this.unsafeSlidingPublish(pubsub, elements);
      this.unsafeCompleteSubscribers(pubsub, subscribers);
      return true;
    });
  }
  unsafeOnPubSubEmptySpace(_pubsub, _subscribers) {
    //
  }
  unsafeCompletePollers(pubsub, subscribers, subscription, pollers) {
    return unsafeStrategyCompletePollers(this, pubsub, subscribers, subscription, pollers);
  }
  unsafeCompleteSubscribers(pubsub, subscribers) {
    return unsafeStrategyCompleteSubscribers(this, pubsub, subscribers);
  }
  unsafeSlidingPublish(pubsub, elements) {
    const it = elements[Symbol.iterator]();
    let next = it.next();
    if (!next.done && pubsub.capacity > 0) {
      let a = next.value;
      let loop = true;
      while (loop) {
        pubsub.slide();
        const pub = pubsub.publish(a);
        if (pub && (next = it.next()) && !next.done) {
          a = next.value;
        } else if (pub) {
          loop = false;
        }
      }
    }
  }
}
/** @internal */
exports.SlidingStrategy = SlidingStrategy;
const unsafeStrategyCompletePollers = (strategy, pubsub, subscribers, subscription, pollers) => {
  let keepPolling = true;
  while (keepPolling && !subscription.isEmpty()) {
    const poller = (0, _Function.pipe)(pollers, MutableQueue.poll(MutableQueue.EmptyMutableQueue));
    if (poller === MutableQueue.EmptyMutableQueue) {
      (0, _Function.pipe)(subscribers, removeSubscribers(subscription, pollers));
      if (MutableQueue.isEmpty(pollers)) {
        keepPolling = false;
      } else {
        (0, _Function.pipe)(subscribers, addSubscribers(subscription, pollers));
      }
    } else {
      const pollResult = subscription.poll(MutableQueue.EmptyMutableQueue);
      if (pollResult === MutableQueue.EmptyMutableQueue) {
        unsafeOfferAll(pollers, (0, _Function.pipe)(unsafePollAllQueue(pollers), Chunk.prepend(poller)));
      } else {
        unsafeCompleteDeferred(poller, pollResult);
        strategy.unsafeOnPubSubEmptySpace(pubsub, subscribers);
      }
    }
  }
};
/** @internal */
const unsafeStrategyCompleteSubscribers = (strategy, pubsub, subscribers) => {
  for (const [subscription, pollersSet] of subscribers) {
    for (const pollers of pollersSet) {
      strategy.unsafeCompletePollers(pubsub, subscribers, subscription, pollers);
    }
  }
};
class ReplayBuffer {
  capacity;
  constructor(capacity) {
    this.capacity = capacity;
  }
  head = {
    value: AbsentValue,
    next: null
  };
  tail = this.head;
  size = 0;
  index = 0;
  slide() {
    this.index++;
  }
  offer(a) {
    this.tail.value = a;
    this.tail.next = {
      value: AbsentValue,
      next: null
    };
    this.tail = this.tail.next;
    if (this.size === this.capacity) {
      this.head = this.head.next;
    } else {
      this.size += 1;
    }
  }
  offerAll(as) {
    for (const a of as) {
      this.offer(a);
    }
  }
}
class ReplayWindowImpl {
  buffer;
  head;
  index;
  remaining;
  constructor(buffer) {
    this.buffer = buffer;
    this.index = buffer.index;
    this.remaining = buffer.size;
    this.head = buffer.head;
  }
  fastForward() {
    while (this.index < this.buffer.index) {
      this.head = this.head.next;
      this.index++;
    }
  }
  take() {
    if (this.remaining === 0) {
      return undefined;
    } else if (this.index < this.buffer.index) {
      this.fastForward();
    }
    this.remaining--;
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
  takeN(n) {
    if (this.remaining === 0) {
      return Chunk.empty();
    } else if (this.index < this.buffer.index) {
      this.fastForward();
    }
    const len = Math.min(n, this.remaining);
    const items = new Array(len);
    for (let i = 0; i < len; i++) {
      const value = this.head.value;
      this.head = this.head.next;
      items[i] = value;
    }
    this.remaining -= len;
    return Chunk.unsafeFromArray(items);
  }
  takeAll() {
    return this.takeN(this.remaining);
  }
}
const emptyReplayWindow = {
  remaining: 0,
  take: () => undefined,
  takeN: () => Chunk.empty(),
  takeAll: () => Chunk.empty()
};
//# sourceMappingURL=pubsub.js.map