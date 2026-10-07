import * as Equal from "../../Equal.js";
import { pipe } from "../../Function.js";
import * as Hash from "../../Hash.js";
import { hasProperty } from "../../Predicate.js";
import * as OpCodes from "./opCodes/tExit.js";
/** @internal */
const TExitSymbolKey = "effect/TExit";
/** @internal */
export const TExitTypeId = /*#__PURE__*/Symbol.for(TExitSymbolKey);
const variance = {
  /* c8 ignore next */
  _A: _ => _,
  /* c8 ignore next */
  _E: _ => _
};
/** @internal */
export const isExit = u => hasProperty(u, TExitTypeId);
/** @internal */
export const isFail = self => {
  return self._tag === OpCodes.OP_FAIL;
};
/** @internal */
export const isDie = self => {
  return self._tag === OpCodes.OP_DIE;
};
/** @internal */
export const isInterrupt = self => {
  return self._tag === OpCodes.OP_INTERRUPT;
};
/** @internal */
export const isSuccess = self => {
  return self._tag === OpCodes.OP_SUCCEED;
};
/** @internal */
export const isRetry = self => {
  return self._tag === OpCodes.OP_RETRY;
};
/** @internal */
export const fail = error => ({
  [TExitTypeId]: variance,
  _tag: OpCodes.OP_FAIL,
  error,
  [Hash.symbol]() {
    return pipe(Hash.hash(TExitSymbolKey), Hash.combine(Hash.hash(OpCodes.OP_FAIL)), Hash.combine(Hash.hash(error)), Hash.cached(this));
  },
  [Equal.symbol](that) {
    return isExit(that) && that._tag === OpCodes.OP_FAIL && Equal.equals(error, that.error);
  }
});
/** @internal */
export const die = defect => ({
  [TExitTypeId]: variance,
  _tag: OpCodes.OP_DIE,
  defect,
  [Hash.symbol]() {
    return pipe(Hash.hash(TExitSymbolKey), Hash.combine(Hash.hash(OpCodes.OP_DIE)), Hash.combine(Hash.hash(defect)), Hash.cached(this));
  },
  [Equal.symbol](that) {
    return isExit(that) && that._tag === OpCodes.OP_DIE && Equal.equals(defect, that.defect);
  }
});
/** @internal */
export const interrupt = fiberId => ({
  [TExitTypeId]: variance,
  _tag: OpCodes.OP_INTERRUPT,
  fiberId,
  [Hash.symbol]() {
    return pipe(Hash.hash(TExitSymbolKey), Hash.combine(Hash.hash(OpCodes.OP_INTERRUPT)), Hash.combine(Hash.hash(fiberId)), Hash.cached(this));
  },
  [Equal.symbol](that) {
    return isExit(that) && that._tag === OpCodes.OP_INTERRUPT && Equal.equals(fiberId, that.fiberId);
  }
});
/** @internal */
export const succeed = value => ({
  [TExitTypeId]: variance,
  _tag: OpCodes.OP_SUCCEED,
  value,
  [Hash.symbol]() {
    return pipe(Hash.hash(TExitSymbolKey), Hash.combine(Hash.hash(OpCodes.OP_SUCCEED)), Hash.combine(Hash.hash(value)), Hash.cached(this));
  },
  [Equal.symbol](that) {
    return isExit(that) && that._tag === OpCodes.OP_SUCCEED && Equal.equals(value, that.value);
  }
});
const retryHash = /*#__PURE__*/pipe(/*#__PURE__*/Hash.hash(TExitSymbolKey), /*#__PURE__*/Hash.combine(/*#__PURE__*/Hash.hash(OpCodes.OP_RETRY)), /*#__PURE__*/Hash.combine(/*#__PURE__*/Hash.hash("retry")));
/** @internal */
export const retry = {
  [TExitTypeId]: variance,
  _tag: OpCodes.OP_RETRY,
  [Hash.symbol]() {
    return retryHash;
  },
  [Equal.symbol](that) {
    return isExit(that) && isRetry(that);
  }
};
const void_ = /*#__PURE__*/succeed(undefined);
export { /** @internal */
void_ as void };
//# sourceMappingURL=tExit.js.map