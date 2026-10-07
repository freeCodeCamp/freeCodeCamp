"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = exports.modifyEffect = exports.modify = exports.make = exports.get = exports.SubscriptionRefTypeId = void 0;
var Effect = _interopRequireWildcard(require("../Effect.js"));
var Effectable = _interopRequireWildcard(require("../Effectable.js"));
var _Function = require("../Function.js");
var PubSub = _interopRequireWildcard(require("../PubSub.js"));
var Readable = _interopRequireWildcard(require("../Readable.js"));
var Ref = _interopRequireWildcard(require("../Ref.js"));
var Subscribable = _interopRequireWildcard(require("../Subscribable.js"));
var Synchronized = _interopRequireWildcard(require("../SynchronizedRef.js"));
var circular_ = _interopRequireWildcard(require("./effect/circular.js"));
var ref_ = _interopRequireWildcard(require("./ref.js"));
var stream = _interopRequireWildcard(require("./stream.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const SubscriptionRefSymbolKey = "effect/SubscriptionRef";
/** @internal */
const SubscriptionRefTypeId = exports.SubscriptionRefTypeId = /*#__PURE__*/Symbol.for(SubscriptionRefSymbolKey);
const subscriptionRefVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
class SubscriptionRefImpl extends Effectable.Class {
  ref;
  pubsub;
  semaphore;
  [Readable.TypeId] = Readable.TypeId;
  [Subscribable.TypeId] = Subscribable.TypeId;
  [Ref.RefTypeId] = ref_.refVariance;
  [Synchronized.SynchronizedRefTypeId] = circular_.synchronizedVariance;
  [SubscriptionRefTypeId] = subscriptionRefVariance;
  constructor(ref, pubsub, semaphore) {
    super();
    this.ref = ref;
    this.pubsub = pubsub;
    this.semaphore = semaphore;
    this.get = Ref.get(this.ref);
  }
  commit() {
    return this.get;
  }
  get;
  get changes() {
    return (0, _Function.pipe)(Ref.get(this.ref), Effect.flatMap(a => Effect.map(stream.fromPubSub(this.pubsub, {
      scoped: true
    }), s => stream.concat(stream.make(a), s))), this.semaphore.withPermits(1), stream.unwrapScoped);
  }
  modify(f) {
    return this.modifyEffect(a => Effect.succeed(f(a)));
  }
  modifyEffect(f) {
    return (0, _Function.pipe)(Ref.get(this.ref), Effect.flatMap(f), Effect.flatMap(([b, a]) => (0, _Function.pipe)(Ref.set(this.ref, a), Effect.as(b), Effect.zipLeft(PubSub.publish(this.pubsub, a)))), this.semaphore.withPermits(1));
  }
}
/** @internal */
const get = self => Ref.get(self.ref);
/** @internal */
exports.get = get;
const make = value => (0, _Function.pipe)(Effect.all([PubSub.unbounded(), Ref.make(value), Effect.makeSemaphore(1)]), Effect.map(([pubsub, ref, semaphore]) => new SubscriptionRefImpl(ref, pubsub, semaphore)));
/** @internal */
exports.make = make;
const modify = exports.modify = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modify(f));
/** @internal */
const modifyEffect = exports.modifyEffect = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => self.modifyEffect(f));
/** @internal */
const set = exports.set = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => (0, _Function.pipe)(Ref.set(self.ref, value), Effect.zipLeft(PubSub.publish(self.pubsub, value)), self.semaphore.withPermits(1)));
//# sourceMappingURL=subscriptionRef.js.map