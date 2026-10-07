"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContinuationTypeId = exports.ContinuationKImpl = exports.ContinuationFinalizerImpl = void 0;
var Exit = _interopRequireWildcard(require("../../Exit.js"));
var OpCodes = _interopRequireWildcard(require("../opCodes/continuation.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const ContinuationTypeId = exports.ContinuationTypeId = /*#__PURE__*/Symbol.for("effect/ChannelContinuation");
const continuationVariance = {
  /* c8 ignore next */
  _Env: _ => _,
  /* c8 ignore next */
  _InErr: _ => _,
  /* c8 ignore next */
  _InElem: _ => _,
  /* c8 ignore next */
  _InDone: _ => _,
  /* c8 ignore next */
  _OutErr: _ => _,
  /* c8 ignore next */
  _OutDone: _ => _,
  /* c8 ignore next */
  _OutErr2: _ => _,
  /* c8 ignore next */
  _OutElem: _ => _,
  /* c8 ignore next */
  _OutDone2: _ => _
};
/** @internal */
class ContinuationKImpl {
  onSuccess;
  onHalt;
  _tag = OpCodes.OP_CONTINUATION_K;
  [ContinuationTypeId] = continuationVariance;
  constructor(onSuccess, onHalt) {
    this.onSuccess = onSuccess;
    this.onHalt = onHalt;
  }
  onExit(exit) {
    return Exit.isFailure(exit) ? this.onHalt(exit.cause) : this.onSuccess(exit.value);
  }
}
/** @internal */
exports.ContinuationKImpl = ContinuationKImpl;
class ContinuationFinalizerImpl {
  finalizer;
  _tag = OpCodes.OP_CONTINUATION_FINALIZER;
  [ContinuationTypeId] = continuationVariance;
  constructor(finalizer) {
    this.finalizer = finalizer;
  }
}
exports.ContinuationFinalizerImpl = ContinuationFinalizerImpl;
//# sourceMappingURL=continuation.js.map