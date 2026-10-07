"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = exports.isUpstreamPullRequest = exports.isPulled = exports.isNoUpstream = exports.UpstreamPullRequestTypeId = exports.Pulled = exports.NoUpstream = void 0;
var _Function = require("../../Function.js");
var _Predicate = require("../../Predicate.js");
var OpCodes = _interopRequireWildcard(require("../opCodes/channelUpstreamPullRequest.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const UpstreamPullRequestSymbolKey = "effect/ChannelUpstreamPullRequest";
/** @internal */
const UpstreamPullRequestTypeId = exports.UpstreamPullRequestTypeId = /*#__PURE__*/Symbol.for(UpstreamPullRequestSymbolKey);
const upstreamPullRequestVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
const proto = {
  [UpstreamPullRequestTypeId]: upstreamPullRequestVariance
};
/** @internal */
const Pulled = value => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_PULLED;
  op.value = value;
  return op;
};
/** @internal */
exports.Pulled = Pulled;
const NoUpstream = activeDownstreamCount => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_NO_UPSTREAM;
  op.activeDownstreamCount = activeDownstreamCount;
  return op;
};
/** @internal */
exports.NoUpstream = NoUpstream;
const isUpstreamPullRequest = u => (0, _Predicate.hasProperty)(u, UpstreamPullRequestTypeId);
/** @internal */
exports.isUpstreamPullRequest = isUpstreamPullRequest;
const isPulled = self => self._tag === OpCodes.OP_PULLED;
/** @internal */
exports.isPulled = isPulled;
const isNoUpstream = self => self._tag === OpCodes.OP_NO_UPSTREAM;
/** @internal */
exports.isNoUpstream = isNoUpstream;
const match = exports.match = /*#__PURE__*/(0, _Function.dual)(2, (self, {
  onNoUpstream,
  onPulled
}) => {
  switch (self._tag) {
    case OpCodes.OP_PULLED:
      {
        return onPulled(self.value);
      }
    case OpCodes.OP_NO_UPSTREAM:
      {
        return onNoUpstream(self.activeDownstreamCount);
      }
  }
});
//# sourceMappingURL=upstreamPullRequest.js.map