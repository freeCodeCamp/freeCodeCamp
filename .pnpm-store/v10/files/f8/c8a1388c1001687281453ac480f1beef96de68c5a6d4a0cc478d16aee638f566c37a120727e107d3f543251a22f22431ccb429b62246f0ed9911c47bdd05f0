"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSomeAndGet = exports.updateSome = exports.updateAndGet = exports.update = exports.setAndGet = exports.set = exports.modifySome = exports.modify = exports.make = exports.getAndUpdateSome = exports.getAndUpdate = exports.getAndSet = exports.get = exports.changesStream = exports.changesScoped = exports.TSubscriptionRefTypeId = void 0;
var Effect = _interopRequireWildcard(require("../../Effect.js"));
var _Function = require("../../Function.js");
var Option = _interopRequireWildcard(require("../../Option.js"));
var _Pipeable = require("../../Pipeable.js");
var STM = _interopRequireWildcard(require("../../STM.js"));
var TPubSub = _interopRequireWildcard(require("../../TPubSub.js"));
var TQueue = _interopRequireWildcard(require("../../TQueue.js"));
var TRef = _interopRequireWildcard(require("../../TRef.js"));
var stream = _interopRequireWildcard(require("../stream.js"));
var _tQueue = require("./tQueue.js");
var _tRef = require("./tRef.js");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TSubscriptionRefSymbolKey = "effect/TSubscriptionRef";
/** @internal */
const TSubscriptionRefTypeId = exports.TSubscriptionRefTypeId = /*#__PURE__*/Symbol.for(TSubscriptionRefSymbolKey);
const TSubscriptionRefVariance = {
  /* c8 ignore next */
  _A: _ => _
};
class TDequeueMerge {
  first;
  second;
  [TQueue.TDequeueTypeId] = _tQueue.tDequeueVariance;
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
  [TRef.TRefTypeId] = _tRef.tRefVariance;
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
    return (0, _Pipeable.pipeArguments)(this, arguments);
  }
  get changes() {
    return STM.gen(this, function* () {
      const first = yield* TQueue.unbounded();
      yield* TQueue.offer(first, yield* TRef.get(this.ref));
      return new TDequeueMerge(first, yield* TPubSub.subscribe(this.pubsub));
    });
  }
  modify(f) {
    return (0, _Function.pipe)(TRef.get(this.ref), STM.map(f), STM.flatMap(([b, a]) => (0, _Function.pipe)(TRef.set(this.ref, a), STM.as(b), STM.zipLeft(TPubSub.publish(this.pubsub, a)))));
  }
}
/** @internal */
const make = value => (0, _Function.pipe)(STM.all([TPubSub.unbounded(), TRef.make(value)]), STM.map(([pubsub, ref]) => new TSubscriptionRefImpl(ref, pubsub)));
/** @internal */
exports.make = make;
const get = self => TRef.get(self.ref);
/** @internal */
exports.get = get;
const set = exports.set = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => self.modify(() => [void 0, value]));
/** @internal */
const getAndSet = exports.getAndSet = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => self.modify(a => [a, value]));
/** @internal */
const getAndUpdate = exports.getAndUpdate = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => [a, f(a)]));
/** @internal */
const getAndUpdateSome = exports.getAndUpdateSome = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => Option.match(f(a), {
  onNone: () => [a, a],
  onSome: b => [a, b]
})));
/** @internal */
const setAndGet = exports.setAndGet = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => self.modify(() => [value, value]));
/** @internal */
const modify = exports.modify = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(f));
/** @internal */
const modifySome = exports.modifySome = /*#__PURE__*/(0, _Function.dual)(3, (self, fallback, f) => self.modify(a => Option.match(f(a), {
  onNone: () => [fallback, a],
  onSome: b => b
})));
/** @internal */
const update = exports.update = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => [void 0, f(a)]));
/** @internal */
const updateAndGet = exports.updateAndGet = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => {
  const b = f(a);
  return [b, b];
}));
/** @internal */
const updateSome = exports.updateSome = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => [void 0, Option.match(f(a), {
  onNone: () => a,
  onSome: b => b
})]));
/** @internal */
const updateSomeAndGet = exports.updateSomeAndGet = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(a => Option.match(f(a), {
  onNone: () => [a, a],
  onSome: b => [b, b]
})));
/** @internal */
const changesScoped = self => Effect.acquireRelease(self.changes, TQueue.shutdown);
/** @internal */
exports.changesScoped = changesScoped;
const changesStream = self => stream.unwrap(Effect.map(self.changes, stream.fromTQueue));
exports.changesStream = changesStream;
//# sourceMappingURL=tSubscriptionRef.js.map