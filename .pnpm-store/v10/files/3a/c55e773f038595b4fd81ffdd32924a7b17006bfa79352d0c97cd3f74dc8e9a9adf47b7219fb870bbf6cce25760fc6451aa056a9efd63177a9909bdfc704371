import * as Effect from "../../Effect.js";
import { dual, pipe } from "../../Function.js";
import * as Option from "../../Option.js";
import { pipeArguments } from "../../Pipeable.js";
import * as STM from "../../STM.js";
import * as TPubSub from "../../TPubSub.js";
import * as TQueue from "../../TQueue.js";
import * as TRef from "../../TRef.js";
import * as stream from "../stream.js";
import { tDequeueVariance } from "./tQueue.js";
import { tRefVariance } from "./tRef.js";
/** @internal */
const TSubscriptionRefSymbolKey = "effect/TSubscriptionRef";
/** @internal */
export const TSubscriptionRefTypeId = /*#__PURE__*/Symbol.for(TSubscriptionRefSymbolKey);
const TSubscriptionRefVariance = {
  /* c8 ignore next */
  _A: _ => _
};
class TDequeueMerge {
  first;
  second;
  [TQueue.TDequeueTypeId] = tDequeueVariance;
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
  peek = /*#__PURE__*/STM.gen(this, function* () {
    const first = yield* this.peekOption;
    if (first._tag === "Some") {
      return first.value;
    }
    return yield* STM.retry;
  });
  peekOption = /*#__PURE__*/STM.gen(this, function* () {
    const first = yield* this.first.peekOption;
    if (first._tag === "Some") {
      return first;
    }
    const second = yield* this.second.peekOption;
    if (second._tag === "Some") {
      return second;
    }
    return Option.none();
  });
  take = /*#__PURE__*/STM.gen(this, function* () {
    if (!(yield* this.first.isEmpty)) {
      return yield* this.first.take;
    }
    if (!(yield* this.second.isEmpty)) {
      return yield* this.second.take;
    }
    return yield* STM.retry;
  });
  takeAll = /*#__PURE__*/STM.gen(this, function* () {
    return [...(yield* this.first.takeAll), ...(yield* this.second.takeAll)];
  });
  takeUpTo(max) {
    return STM.gen(this, function* () {
      const first = yield* this.first.takeUpTo(max);
      if (first.length >= max) {
        return first;
      }
      return [...first, ...(yield* this.second.takeUpTo(max - first.length))];
    });
  }
  capacity() {
    return this.first.capacity() + this.second.capacity();
  }
  size = /*#__PURE__*/STM.gen(this, function* () {
    return (yield* this.first.size) + (yield* this.second.size);
  });
  isFull = /*#__PURE__*/STM.gen(this, function* () {
    return (yield* this.first.isFull) && (yield* this.second.isFull);
  });
  isEmpty = /*#__PURE__*/STM.gen(this, function* () {
    return (yield* this.first.isEmpty) && (yield* this.second.isEmpty);
  });
  shutdown = /*#__PURE__*/STM.gen(this, function* () {
    yield* this.first.shutdown;
    yield* this.second.shutdown;
  });
  isShutdown = /*#__PURE__*/STM.gen(this, function* () {
    return (yield* this.first.isShutdown) && (yield* this.second.isShutdown);
  });
  awaitShutdown = /*#__PURE__*/STM.gen(this, function* () {
    yield* this.first.awaitShutdown;
    yield* this.second.awaitShutdown;
  });
}
/** @internal */
class TSubscriptionRefImpl {
  ref;
  pubsub;
  [TSubscriptionRefTypeId] = TSubscriptionRefVariance;
  [TRef.TRefTypeId] = tRefVariance;
  constructor(ref, pubsub) {
    this.ref = ref;
    this.pubsub = pubsub;
  }
  get todos() {
    return this.ref.todos;
  }
  get versioned() {
    return this.ref.versioned;
  }
  pipe() {
    return pipeArguments(this, arguments);
  }
  get changes() {
    return STM.gen(this, function* () {
      const first = yield* TQueue.unbounded();
      yield* TQueue.offer(first, yield* TRef.get(this.ref));
      return new TDequeueMerge(first, yield* TPubSub.subscribe(this.pubsub));
    });
  }
  modify(f) {
    return pipe(TRef.get(this.ref), STM.map(f), STM.flatMap(([b, a]) => pipe(TRef.set(this.ref, a), STM.as(b), STM.zipLeft(TPubSub.publish(this.pubsub, a)))));
  }
}
/** @internal */
export const make = value => pipe(STM.all([TPubSub.unbounded(), TRef.make(value)]), STM.map(([pubsub, ref]) => new TSubscriptionRefImpl(ref, pubsub)));
/** @internal */
export const get = self => TRef.get(self.ref);
/** @internal */
export const set = /*#__PURE__*/dual(2, (self, value) => self.modify(() => [void 0, value]));
/** @internal */
export const getAndSet = /*#__PURE__*/dual(2, (self, value) => self.modify(a => [a, value]));
/** @internal */
export const getAndUpdate = /*#__PURE__*/dual(2, (self, f) => self.modify(a => [a, f(a)]));
/** @internal */
export const getAndUpdateSome = /*#__PURE__*/dual(2, (self, f) => self.modify(a => Option.match(f(a), {
  onNone: () => [a, a],
  onSome: b => [a, b]
})));
/** @internal */
export const setAndGet = /*#__PURE__*/dual(2, (self, value) => self.modify(() => [value, value]));
/** @internal */
export const modify = /*#__PURE__*/dual(2, (self, f) => self.modify(f));
/** @internal */
export const modifySome = /*#__PURE__*/dual(3, (self, fallback, f) => self.modify(a => Option.match(f(a), {
  onNone: () => [fallback, a],
  onSome: b => b
})));
/** @internal */
export const update = /*#__PURE__*/dual(2, (self, f) => self.modify(a => [void 0, f(a)]));
/** @internal */
export const updateAndGet = /*#__PURE__*/dual(2, (self, f) => self.modify(a => {
  const b = f(a);
  return [b, b];
}));
/** @internal */
export const updateSome = /*#__PURE__*/dual(2, (self, f) => self.modify(a => [void 0, Option.match(f(a), {
  onNone: () => a,
  onSome: b => b
})]));
/** @internal */
export const updateSomeAndGet = /*#__PURE__*/dual(2, (self, f) => self.modify(a => Option.match(f(a), {
  onNone: () => [a, a],
  onSome: b => [b, b]
})));
/** @internal */
export const changesScoped = self => Effect.acquireRelease(self.changes, TQueue.shutdown);
/** @internal */
export const changesStream = self => stream.unwrap(Effect.map(self.changes, stream.fromTQueue));
//# sourceMappingURL=tSubscriptionRef.js.map