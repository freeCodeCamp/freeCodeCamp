"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = exports.isYield = exports.isContinue = exports.isClose = exports.isChildExecutorDecision = exports.Yield = exports.Continue = exports.Close = exports.ChildExecutorDecisionTypeId = void 0;
var _Function = require("../../Function.js");
var _Predicate = require("../../Predicate.js");
var OpCodes = _interopRequireWildcard(require("../opCodes/channelChildExecutorDecision.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const ChildExecutorDecisionSymbolKey = "effect/ChannelChildExecutorDecision";
/** @internal */
const ChildExecutorDecisionTypeId = exports.ChildExecutorDecisionTypeId = /*#__PURE__*/Symbol.for(ChildExecutorDecisionSymbolKey);
/** @internal */
const proto = {
  [ChildExecutorDecisionTypeId]: ChildExecutorDecisionTypeId
};
/** @internal */
const Continue = _ => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_CONTINUE;
  return op;
};
/** @internal */
exports.Continue = Continue;
const Close = value => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_CLOSE;
  op.value = value;
  return op;
};
/** @internal */
exports.Close = Close;
const Yield = _ => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_YIELD;
  return op;
};
/** @internal */
exports.Yield = Yield;
const isChildExecutorDecision = u => (0, _Predicate.hasProperty)(u, ChildExecutorDecisionTypeId);
/** @internal */
exports.isChildExecutorDecision = isChildExecutorDecision;
const isContinue = self => self._tag === OpCodes.OP_CONTINUE;
/** @internal */
exports.isContinue = isContinue;
const isClose = self => self._tag === OpCodes.OP_CLOSE;
/** @internal */
exports.isClose = isClose;
const isYield = self => self._tag === OpCodes.OP_YIELD;
/** @internal */
exports.isYield = isYield;
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onClose,
  onContinue,
  onYield
}) => {
  switch (self._tag) {
    case OpCodes.OP_CONTINUE:
      {
        return onContinue();
      }
    case OpCodes.OP_CLOSE:
      {
        return onClose(self.value);
      }
    case OpCodes.OP_YIELD:
      {
        return onYield();
      }
  }
});
//# sourceMappingURL=childExecutorDecision.js.map