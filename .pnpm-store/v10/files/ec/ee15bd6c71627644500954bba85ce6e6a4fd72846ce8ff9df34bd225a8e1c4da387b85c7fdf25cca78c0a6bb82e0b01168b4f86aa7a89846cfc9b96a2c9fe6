"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = exports.isMergeDecision = exports.MergeDecisionTypeId = exports.Done = exports.AwaitConst = exports.Await = void 0;
var _Function = require("../../Function.js");
var _Predicate = require("../../Predicate.js");
var OpCodes = _interopRequireWildcard(require("../opCodes/channelMergeDecision.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const MergeDecisionSymbolKey = "effect/ChannelMergeDecision";
/** @internal */
const MergeDecisionTypeId = exports.MergeDecisionTypeId = /*#__PURE__*/Symbol.for(MergeDecisionSymbolKey);
/** @internal */
const proto = {
  [MergeDecisionTypeId]: {
    _R: _ => _,
    _E0: _ => _,
    _Z0: _ => _,
    _E: _ => _,
    _Z: _ => _
  }
};
/** @internal */
const Done = effect => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_DONE;
  op.effect = effect;
  return op;
};
/** @internal */
exports.Done = Done;
const Await = f => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_AWAIT;
  op.f = f;
  return op;
};
/** @internal */
exports.Await = Await;
const AwaitConst = effect => Await(() => effect);
/** @internal */
exports.AwaitConst = AwaitConst;
const isMergeDecision = u => (0, _Predicate.hasProperty)(u, MergeDecisionTypeId);
/** @internal */
exports.isMergeDecision = isMergeDecision;
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onAwait,
  onDone
}) => {
  const op = self;
  switch (op._tag) {
    case OpCodes.OP_DONE:
      return onDone(op.effect);
    case OpCodes.OP_AWAIT:
      return onAwait(op.f);
  }
});
//# sourceMappingURL=mergeDecision.js.map