"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pending = exports.done = exports.deferredVariance = exports.DeferredTypeId = void 0;
var OpCodes = _interopRequireWildcard(require("./opCodes/deferred.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const DeferredSymbolKey = "effect/Deferred";
/** @internal */
const DeferredTypeId = exports.DeferredTypeId = /*#__PURE__*/Symbol.for(DeferredSymbolKey);
/** @internal */
const deferredVariance = exports.deferredVariance = {
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
const pending = joiners => {
  return {
    _tag: OpCodes.OP_STATE_PENDING,
    joiners
  };
};
/** @internal */
exports.pending = pending;
const done = effect => {
  return {
    _tag: OpCodes.OP_STATE_DONE,
    effect
  };
};
exports.done = done;
//# sourceMappingURL=deferred.js.map