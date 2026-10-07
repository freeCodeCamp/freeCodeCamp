"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = exports.isRightDone = exports.isMergeState = exports.isLeftDone = exports.isBothRunning = exports.RightDone = exports.MergeStateTypeId = exports.LeftDone = exports.BothRunning = void 0;
var _Function = require("../../Function.js");
var _Predicate = require("../../Predicate.js");
var OpCodes = _interopRequireWildcard(require("../opCodes/channelMergeState.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const MergeStateSymbolKey = "effect/ChannelMergeState";
/** @internal */
const MergeStateTypeId = exports.MergeStateTypeId = /*#__PURE__*/Symbol.for(MergeStateSymbolKey);
/** @internal */
const proto = {
  [MergeStateTypeId]: MergeStateTypeId
};
/** @internal */
const BothRunning = (left, right) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_BOTH_RUNNING;
  op.left = left;
  op.right = right;
  return op;
};
/** @internal */
exports.BothRunning = BothRunning;
const LeftDone = f => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_LEFT_DONE;
  op.f = f;
  return op;
};
/** @internal */
exports.LeftDone = LeftDone;
const RightDone = f => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_RIGHT_DONE;
  op.f = f;
  return op;
};
/** @internal */
exports.RightDone = RightDone;
const isMergeState = u => (0, _Predicate.hasProperty)(u, MergeStateTypeId);
/** @internal */
exports.isMergeState = isMergeState;
const isBothRunning = self => {
  return self._tag === OpCodes.OP_BOTH_RUNNING;
};
/** @internal */
exports.isBothRunning = isBothRunning;
const isLeftDone = self => {
  return self._tag === OpCodes.OP_LEFT_DONE;
};
/** @internal */
exports.isLeftDone = isLeftDone;
const isRightDone = self => {
  return self._tag === OpCodes.OP_RIGHT_DONE;
};
/** @internal */
exports.isRightDone = isRightDone;
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onBothRunning,
  onLeftDone,
  onRightDone
}) => {
  switch (self._tag) {
    case OpCodes.OP_BOTH_RUNNING:
      {
        return onBothRunning(self.left, self.right);
      }
    case OpCodes.OP_LEFT_DONE:
      {
        return onLeftDone(self.f);
      }
    case OpCodes.OP_RIGHT_DONE:
      {
        return onRightDone(self.f);
      }
  }
});
//# sourceMappingURL=mergeState.js.map