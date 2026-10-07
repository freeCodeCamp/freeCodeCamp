"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = exports.isUpstreamPullStrategy = exports.isPullAfterNext = exports.isPullAfterAllEnqueued = exports.UpstreamPullStrategyTypeId = exports.PullAfterNext = exports.PullAfterAllEnqueued = void 0;
var _Function = require("../../Function.js");
var _Predicate = require("../../Predicate.js");
var OpCodes = _interopRequireWildcard(require("../opCodes/channelUpstreamPullStrategy.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const UpstreamPullStrategySymbolKey = "effect/ChannelUpstreamPullStrategy";
/** @internal */
const UpstreamPullStrategyTypeId = exports.UpstreamPullStrategyTypeId = /*#__PURE__*/Symbol.for(UpstreamPullStrategySymbolKey);
const upstreamPullStrategyVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
const proto = {
  [UpstreamPullStrategyTypeId]: upstreamPullStrategyVariance
};
/** @internal */
const PullAfterNext = emitSeparator => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_PULL_AFTER_NEXT;
  op.emitSeparator = emitSeparator;
  return op;
};
/** @internal */
exports.PullAfterNext = PullAfterNext;
const PullAfterAllEnqueued = emitSeparator => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_PULL_AFTER_ALL_ENQUEUED;
  op.emitSeparator = emitSeparator;
  return op;
};
/** @internal */
exports.PullAfterAllEnqueued = PullAfterAllEnqueued;
const isUpstreamPullStrategy = u => (0, _Predicate.hasProperty)(u, UpstreamPullStrategyTypeId);
/** @internal */
exports.isUpstreamPullStrategy = isUpstreamPullStrategy;
const isPullAfterNext = self => self._tag === OpCodes.OP_PULL_AFTER_NEXT;
/** @internal */
exports.isPullAfterNext = isPullAfterNext;
const isPullAfterAllEnqueued = self => self._tag === OpCodes.OP_PULL_AFTER_ALL_ENQUEUED;
/** @internal */
exports.isPullAfterAllEnqueued = isPullAfterAllEnqueued;
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onAllEnqueued,
  onNext
}) => {
  switch (self._tag) {
    case OpCodes.OP_PULL_AFTER_NEXT:
      {
        return onNext(self.emitSeparator);
      }
    case OpCodes.OP_PULL_AFTER_ALL_ENQUEUED:
      {
        return onAllEnqueued(self.emitSeparator);
      }
  }
});
//# sourceMappingURL=upstreamPullStrategy.js.map