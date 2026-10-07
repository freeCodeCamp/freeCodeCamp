"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.take = exports.poll = exports.offer = exports.make = exports.OP_HANDOFF_STATE_FULL = exports.OP_HANDOFF_STATE_EMPTY = exports.HandoffTypeId = void 0;
var Deferred = _interopRequireWildcard(require("../../Deferred.js"));
var Effect = _interopRequireWildcard(require("../../Effect.js"));
var _Function = require("../../Function.js");
var Option = _interopRequireWildcard(require("../../Option.js"));
var Ref = _interopRequireWildcard(require("../../Ref.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const HandoffTypeId = exports.HandoffTypeId = /*#__PURE__*/Symbol.for("effect/Stream/Handoff");
/** @internal */
const OP_HANDOFF_STATE_EMPTY = exports.OP_HANDOFF_STATE_EMPTY = "Empty";
/** @internal */
const OP_HANDOFF_STATE_FULL = exports.OP_HANDOFF_STATE_FULL = "Full";
/** @internal */
const handoffStateEmpty = notifyConsumer => ({
  _tag: OP_HANDOFF_STATE_EMPTY,
  notifyConsumer
});
/** @internal */
const handoffStateFull = (value, notifyProducer) => ({
  _tag: OP_HANDOFF_STATE_FULL,
  value,
  notifyProducer
});
/** @internal */
const handoffStateMatch = (onEmpty, onFull) => {
  return self => {
    switch (self._tag) {
      case OP_HANDOFF_STATE_EMPTY:
        {
          return onEmpty(self.notifyConsumer);
        }
      case OP_HANDOFF_STATE_FULL:
        {
          return onFull(self.value, self.notifyProducer);
        }
    }
  };
};
const handoffVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
const make = () => (0, _Function.pipe)(Deferred.make(), Effect.flatMap(deferred => Ref.make(handoffStateEmpty(deferred))), Effect.map(ref => ({
  [HandoffTypeId]: handoffVariance,
  ref
})));
/** @internal */
exports.make = make;
const offer = exports.offer = /*#__PURE__*/(0, _Function.dual)(2, (self, value) => {
  return Effect.flatMap(Deferred.make(), deferred => Effect.flatten(Ref.modify(self.ref, state => (0, _Function.pipe)(state, handoffStateMatch(notifyConsumer => [Effect.zipRight(Deferred.succeed(notifyConsumer, void 0), Deferred.await(deferred)), handoffStateFull(value, deferred)], (_, notifyProducer) => [Effect.flatMap(Deferred.await(notifyProducer), () => (0, _Function.pipe)(self, offer(value))), state])))));
});
/** @internal */
const take = self => Effect.flatMap(Deferred.make(), deferred => Effect.flatten(Ref.modify(self.ref, state => (0, _Function.pipe)(state, handoffStateMatch(notifyConsumer => [Effect.flatMap(Deferred.await(notifyConsumer), () => take(self)), state], (value, notifyProducer) => [Effect.as(Deferred.succeed(notifyProducer, void 0), value), handoffStateEmpty(deferred)])))));
/** @internal */
exports.take = take;
const poll = self => Effect.flatMap(Deferred.make(), deferred => Effect.flatten(Ref.modify(self.ref, state => (0, _Function.pipe)(state, handoffStateMatch(() => [Effect.succeed(Option.none()), state], (value, notifyProducer) => [Effect.as(Deferred.succeed(notifyProducer, void 0), Option.some(value)), handoffStateEmpty(deferred)])))));
exports.poll = poll;
//# sourceMappingURL=handoff.js.map