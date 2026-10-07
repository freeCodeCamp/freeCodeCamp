import { dual } from "../../Function.js";
import { hasProperty } from "../../Predicate.js";
import * as OpCodes from "../opCodes/channelMergeState.js";
/** @internal */
const MergeStateSymbolKey = "effect/ChannelMergeState";
/** @internal */
export const MergeStateTypeId = /*#__PURE__*/Symbol.for(MergeStateSymbolKey);
/** @internal */
const proto = {
  [MergeStateTypeId]: MergeStateTypeId
};
/** @internal */
export const BothRunning = (left, right) => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_BOTH_RUNNING;
  op.left = left;
  op.right = right;
  return op;
};
/** @internal */
export const LeftDone = f => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_LEFT_DONE;
  op.f = f;
  return op;
};
/** @internal */
export const RightDone = f => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_RIGHT_DONE;
  op.f = f;
  return op;
};
/** @internal */
export const isMergeState = u => hasProperty(u, MergeStateTypeId);
/** @internal */
export const isBothRunning = self => {
  return self._tag === OpCodes.OP_BOTH_RUNNING;
};
/** @internal */
export const isLeftDone = self => {
  return self._tag === OpCodes.OP_LEFT_DONE;
};
/** @internal */
export const isRightDone = self => {
  return self._tag === OpCodes.OP_RIGHT_DONE;
};
/** @internal */
export const match = /*#__PURE__*/dual(2, (self, {
  onBothRunning,
  onLeftDone,
  onRightDone
}) => {
  switch (self._tag) {
    case OpCodes.OP_BOTH_RUNNING:
      {
        return onBothRunning(self.left, self.right);
      }
    case OpCodes.OP_LEFT_DONE:
      {
        return onLeftDone(self.f);
      }
    case OpCodes.OP_RIGHT_DONE:
      {
        return onRightDone(self.f);
      }
  }
});
//# sourceMappingURL=mergeState.js.map