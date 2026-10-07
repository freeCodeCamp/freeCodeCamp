import { dual } from "../../Function.js";
import { hasProperty } from "../../Predicate.js";
import * as OpCodes from "../opCodes/channelMergeDecision.js";
/** @internal */
const MergeDecisionSymbolKey = "effect/ChannelMergeDecision";
/** @internal */
export const MergeDecisionTypeId = /*#__PURE__*/Symbol.for(MergeDecisionSymbolKey);
/** @internal */
const proto = {
  [MergeDecisionTypeId]: {
    _R: _ => _,
    _E0: _ => _,
    _Z0: _ => _,
    _E: _ => _,
    _Z: _ => _
  }
};
/** @internal */
export const Done = effect => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_DONE;
  op.effect = effect;
  return op;
};
/** @internal */
export const Await = f => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_AWAIT;
  op.f = f;
  return op;
};
/** @internal */
export const AwaitConst = effect => Await(() => effect);
/** @internal */
export const isMergeDecision = u => hasProperty(u, MergeDecisionTypeId);
/** @internal */
export const match = /*#__PURE__*/dual(2, (self, {
  onAwait,
  onDone
}) => {
  const op = self;
  switch (op._tag) {
    case OpCodes.OP_DONE:
      return onDone(op.effect);
    case OpCodes.OP_AWAIT:
      return onAwait(op.f);
  }
});
//# sourceMappingURL=mergeDecision.js.map