import { dual } from "../../Function.js";
import { hasProperty } from "../../Predicate.js";
import * as OpCodes from "../opCodes/channelChildExecutorDecision.js";
/** @internal */
const ChildExecutorDecisionSymbolKey = "effect/ChannelChildExecutorDecision";
/** @internal */
export const ChildExecutorDecisionTypeId = /*#__PURE__*/Symbol.for(ChildExecutorDecisionSymbolKey);
/** @internal */
const proto = {
  [ChildExecutorDecisionTypeId]: ChildExecutorDecisionTypeId
};
/** @internal */
export const Continue = _ => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_CONTINUE;
  return op;
};
/** @internal */
export const Close = value => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_CLOSE;
  op.value = value;
  return op;
};
/** @internal */
export const Yield = _ => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_YIELD;
  return op;
};
/** @internal */
export const isChildExecutorDecision = u => hasProperty(u, ChildExecutorDecisionTypeId);
/** @internal */
export const isContinue = self => self._tag === OpCodes.OP_CONTINUE;
/** @internal */
export const isClose = self => self._tag === OpCodes.OP_CLOSE;
/** @internal */
export const isYield = self => self._tag === OpCodes.OP_YIELD;
/** @internal */
export const match = /*#__PURE__*/dual(2, (self, {
  onClose,
  onContinue,
  onYield
}) => {
  switch (self._tag) {
    case OpCodes.OP_CONTINUE:
      {
        return onContinue();
      }
    case OpCodes.OP_CLOSE:
      {
        return onClose(self.value);
      }
    case OpCodes.OP_YIELD:
      {
        return onYield();
      }
  }
});
//# sourceMappingURL=childExecutorDecision.js.map