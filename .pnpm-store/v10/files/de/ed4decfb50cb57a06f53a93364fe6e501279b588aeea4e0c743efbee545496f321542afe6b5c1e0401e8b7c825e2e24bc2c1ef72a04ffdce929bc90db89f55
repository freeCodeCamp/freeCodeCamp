import * as Exit from "../../Exit.js";
import * as OpCodes from "../opCodes/continuation.js";
/** @internal */
export const ContinuationTypeId = /*#__PURE__*/Symbol.for("effect/ChannelContinuation");
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
export class ContinuationKImpl {
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
export class ContinuationFinalizerImpl {
  finalizer;
  _tag = OpCodes.OP_CONTINUATION_FINALIZER;
  [ContinuationTypeId] = continuationVariance;
  constructor(finalizer) {
    this.finalizer = finalizer;
  }
}
//# sourceMappingURL=continuation.js.map