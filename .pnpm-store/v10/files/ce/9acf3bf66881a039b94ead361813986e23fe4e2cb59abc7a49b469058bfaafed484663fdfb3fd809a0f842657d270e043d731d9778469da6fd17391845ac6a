import { dual } from "../../Function.js";
import { hasProperty } from "../../Predicate.js";
import * as OpCodes from "../opCodes/channelMergeStrategy.js";
/** @internal */
const MergeStrategySymbolKey = "effect/ChannelMergeStrategy";
/** @internal */
export const MergeStrategyTypeId = /*#__PURE__*/Symbol.for(MergeStrategySymbolKey);
/** @internal */
const proto = {
  [MergeStrategyTypeId]: MergeStrategyTypeId
};
/** @internal */
export const BackPressure = _ => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_BACK_PRESSURE;
  return op;
};
/** @internal */
export const BufferSliding = _ => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_BUFFER_SLIDING;
  return op;
};
/** @internal */
export const isMergeStrategy = u => hasProperty(u, MergeStrategyTypeId);
/** @internal */
export const isBackPressure = self => self._tag === OpCodes.OP_BACK_PRESSURE;
/** @internal */
export const isBufferSliding = self => self._tag === OpCodes.OP_BUFFER_SLIDING;
/** @internal */
export const match = /*#__PURE__*/dual(2, (self, {
  onBackPressure,
  onBufferSliding
}) => {
  switch (self._tag) {
    case OpCodes.OP_BACK_PRESSURE:
      {
        return onBackPressure();
      }
    case OpCodes.OP_BUFFER_SLIDING:
      {
        return onBufferSliding();
      }
  }
});
//# sourceMappingURL=mergeStrategy.js.map