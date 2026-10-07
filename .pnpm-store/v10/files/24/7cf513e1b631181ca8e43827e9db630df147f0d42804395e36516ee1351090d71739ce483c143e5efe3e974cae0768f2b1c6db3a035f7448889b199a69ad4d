"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.void = exports.succeed = exports.retry = exports.isSuccess = exports.isRetry = exports.isInterrupt = exports.isFail = exports.isExit = exports.isDie = exports.interrupt = exports.fail = exports.die = exports.TExitTypeId = void 0;
var Equal = _interopRequireWildcard(require("../../Equal.js"));
var _Function = require("../../Function.js");
var Hash = _interopRequireWildcard(require("../../Hash.js"));
var _Predicate = require("../../Predicate.js");
var OpCodes = _interopRequireWildcard(require("./opCodes/tExit.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const TExitSymbolKey = "effect/TExit";
/** @internal */
const TExitTypeId = exports.TExitTypeId = /*#__PURE__*/Symbol.for(TExitSymbolKey);
const variance = {
  /* c8 ignore next */
  _A: _ => _,
  /* c8 ignore next */
  _E: _ => _
};
/** @internal */
const isExit = u => (0, _Predicate.hasProperty)(u, TExitTypeId);
/** @internal */
exports.isExit = isExit;
const isFail = self => {
  return self._tag === OpCodes.OP_FAIL;
};
/** @internal */
exports.isFail = isFail;
const isDie = self => {
  return self._tag === OpCodes.OP_DIE;
};
/** @internal */
exports.isDie = isDie;
const isInterrupt = self => {
  return self._tag === OpCodes.OP_INTERRUPT;
};
/** @internal */
exports.isInterrupt = isInterrupt;
const isSuccess = self => {
  return self._tag === OpCodes.OP_SUCCEED;
};
/** @internal */
exports.isSuccess = isSuccess;
const isRetry = self => {
  return self._tag === OpCodes.OP_RETRY;
};
/** @internal */
exports.isRetry = isRetry;
const fail = error => ({
  [TExitTypeId]: variance,
  _tag: OpCodes.OP_FAIL,
  error,
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.hash(TExitSymbolKey), Hash.combine(Hash.hash(OpCodes.OP_FAIL)), Hash.combine(Hash.hash(error)), Hash.cached(this));
  },
  [Equal.symbol](that) {
    return isExit(that) && that._tag === OpCodes.OP_FAIL && Equal.equals(error, that.error);
  }
});
/** @internal */
exports.fail = fail;
const die = defect => ({
  [TExitTypeId]: variance,
  _tag: OpCodes.OP_DIE,
  defect,
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.hash(TExitSymbolKey), Hash.combine(Hash.hash(OpCodes.OP_DIE)), Hash.combine(Hash.hash(defect)), Hash.cached(this));
  },
  [Equal.symbol](that) {
    return isExit(that) && that._tag === OpCodes.OP_DIE && Equal.equals(defect, that.defect);
  }
});
/** @internal */
exports.die = die;
const interrupt = fiberId => ({
  [TExitTypeId]: variance,
  _tag: OpCodes.OP_INTERRUPT,
  fiberId,
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.hash(TExitSymbolKey), Hash.combine(Hash.hash(OpCodes.OP_INTERRUPT)), Hash.combine(Hash.hash(fiberId)), Hash.cached(this));
  },
  [Equal.symbol](that) {
    return isExit(that) && that._tag === OpCodes.OP_INTERRUPT && Equal.equals(fiberId, that.fiberId);
  }
});
/** @internal */
exports.interrupt = interrupt;
const succeed = value => ({
  [TExitTypeId]: variance,
  _tag: OpCodes.OP_SUCCEED,
  value,
  [Hash.symbol]() {
    return (0, _Function.pipe)(Hash.hash(TExitSymbolKey), Hash.combine(Hash.hash(OpCodes.OP_SUCCEED)), Hash.combine(Hash.hash(value)), Hash.cached(this));
  },
  [Equal.symbol](that) {
    return isExit(that) && that._tag === OpCodes.OP_SUCCEED && Equal.equals(value, that.value);
  }
});
exports.succeed = succeed;
const retryHash = /*#__PURE__*/(0, _Function.pipe)(/*#__PURE__*/Hash.hash(TExitSymbolKey), /*#__PURE__*/Hash.combine(/*#__PURE__*/Hash.hash(OpCodes.OP_RETRY)), /*#__PURE__*/Hash.combine(/*#__PURE__*/Hash.hash("retry")));
/** @internal */
const retry = exports.retry = {
  [TExitTypeId]: variance,
  _tag: OpCodes.OP_RETRY,
  [Hash.symbol]() {
    return retryHash;
  },
  [Equal.symbol](that) {
    return isExit(that) && isRetry(that);
  }
};
const void_ = exports.void = /*#__PURE__*/succeed(undefined);
//# sourceMappingURL=tExit.js.map