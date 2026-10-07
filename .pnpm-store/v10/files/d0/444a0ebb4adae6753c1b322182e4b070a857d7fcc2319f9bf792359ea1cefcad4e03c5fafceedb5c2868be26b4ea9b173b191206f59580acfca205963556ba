"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = exports.isMergeStrategy = exports.isBufferSliding = exports.isBackPressure = exports.MergeStrategyTypeId = exports.BufferSliding = exports.BackPressure = void 0;
var _Function = require("../../Function.js");
var _Predicate = require("../../Predicate.js");
var OpCodes = _interopRequireWildcard(require("../opCodes/channelMergeStrategy.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const MergeStrategySymbolKey = "effect/ChannelMergeStrategy";
/** @internal */
const MergeStrategyTypeId = exports.MergeStrategyTypeId = /*#__PURE__*/Symbol.for(MergeStrategySymbolKey);
/** @internal */
const proto = {
  [MergeStrategyTypeId]: MergeStrategyTypeId
};
/** @internal */
const BackPressure = _ => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_BACK_PRESSURE;
  return op;
};
/** @internal */
exports.BackPressure = BackPressure;
const BufferSliding = _ => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_BUFFER_SLIDING;
  return op;
};
/** @internal */
exports.BufferSliding = BufferSliding;
const isMergeStrategy = u => (0, _Predicate.hasProperty)(u, MergeStrategyTypeId);
/** @internal */
exports.isMergeStrategy = isMergeStrategy;
const isBackPressure = self => self._tag === OpCodes.OP_BACK_PRESSURE;
/** @internal */
exports.isBackPressure = isBackPressure;
const isBufferSliding = self => self._tag === OpCodes.OP_BUFFER_SLIDING;
/** @internal */
exports.isBufferSliding = isBufferSliding;
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onBackPressure,
  onBufferSliding
}) => {
  switch (self._tag) {
    case OpCodes.OP_BACK_PRESSURE:
      {
        return onBackPressure();
      }
    case OpCodes.OP_BUFFER_SLIDING:
      {
        return onBufferSliding();
      }
  }
});
//# sourceMappingURL=mergeStrategy.js.map