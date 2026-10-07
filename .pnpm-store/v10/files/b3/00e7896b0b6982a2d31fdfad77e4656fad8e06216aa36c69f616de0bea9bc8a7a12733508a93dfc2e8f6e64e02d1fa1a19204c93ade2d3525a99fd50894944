import * as OpCodes from "./opCodes/deferred.js";
/** @internal */
const DeferredSymbolKey = "effect/Deferred";
/** @internal */
export const DeferredTypeId = /*#__PURE__*/Symbol.for(DeferredSymbolKey);
/** @internal */
export const deferredVariance = {
  /* c8 ignore next */
  _E: _ => _,
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
export const pending = joiners => {
  return {
    _tag: OpCodes.OP_STATE_PENDING,
    joiners
  };
};
/** @internal */
export const done = effect => {
  return {
    _tag: OpCodes.OP_STATE_DONE,
    effect
  };
};
//# sourceMappingURL=deferred.js.map