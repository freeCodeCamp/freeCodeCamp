"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRead = exports.isFromEffect = exports.isEmit = exports.isDone = exports.isChannelState = exports.fromEffect = exports.effectOrUndefinedIgnored = exports.effect = exports.Read = exports.Emit = exports.Done = exports.ChannelStateTypeId = void 0;
var Effect = _interopRequireWildcard(require("../../Effect.js"));
var _Predicate = require("../../Predicate.js");
var OpCodes = _interopRequireWildcard(require("../opCodes/channelState.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const ChannelStateTypeId = exports.ChannelStateTypeId = /*#__PURE__*/Symbol.for("effect/ChannelState");
const channelStateVariance = {
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _R: _ => _
};
/** @internal */
const proto = {
  [ChannelStateTypeId]: channelStateVariance
};
/** @internal */
const Done = () => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_DONE;
  return op;
};
/** @internal */
exports.Done = Done;
const Emit = () => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_EMIT;
  return op;
};
/** @internal */
exports.Emit = Emit;
const fromEffect = effect => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_FROM_EFFECT;
  op.effect = effect;
  return op;
};
/** @internal */
exports.fromEffect = fromEffect;
const Read = (upstream, onEffect, onEmit, onDone) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_READ;
  op.upstream = upstream;
  op.onEffect = onEffect;
  op.onEmit = onEmit;
  op.onDone = onDone;
  return op;
};
/** @internal */
exports.Read = Read;
const isChannelState = u => (0, _Predicate.hasProperty)(u, ChannelStateTypeId);
/** @internal */
exports.isChannelState = isChannelState;
const isDone = self => self._tag === OpCodes.OP_DONE;
/** @internal */
exports.isDone = isDone;
const isEmit = self => self._tag === OpCodes.OP_EMIT;
/** @internal */
exports.isEmit = isEmit;
const isFromEffect = self => self._tag === OpCodes.OP_FROM_EFFECT;
/** @internal */
exports.isFromEffect = isFromEffect;
const isRead = self => self._tag === OpCodes.OP_READ;
/** @internal */
exports.isRead = isRead;
const effect = self => isFromEffect(self) ? self.effect : Effect.void;
/** @internal */
exports.effect = effect;
const effectOrUndefinedIgnored = self => isFromEffect(self) ? Effect.ignore(self.effect) : undefined;
exports.effectOrUndefinedIgnored = effectOrUndefinedIgnored;
//# sourceMappingURL=channelState.js.map