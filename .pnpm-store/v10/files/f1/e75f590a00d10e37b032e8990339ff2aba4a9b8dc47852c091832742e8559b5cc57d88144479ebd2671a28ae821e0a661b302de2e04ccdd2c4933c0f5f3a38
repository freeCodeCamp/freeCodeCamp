import { dual } from "../../Function.js";
import { hasProperty } from "../../Predicate.js";
import * as OpCodes from "../opCodes/channelUpstreamPullStrategy.js";
/** @internal */
const UpstreamPullStrategySymbolKey = "effect/ChannelUpstreamPullStrategy";
/** @internal */
export const UpstreamPullStrategyTypeId = /*#__PURE__*/Symbol.for(UpstreamPullStrategySymbolKey);
const upstreamPullStrategyVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
const proto = {
  [UpstreamPullStrategyTypeId]: upstreamPullStrategyVariance
};
/** @internal */
export const PullAfterNext = emitSeparator => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_PULL_AFTER_NEXT;
  op.emitSeparator = emitSeparator;
  return op;
};
/** @internal */
export const PullAfterAllEnqueued = emitSeparator => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_PULL_AFTER_ALL_ENQUEUED;
  op.emitSeparator = emitSeparator;
  return op;
};
/** @internal */
export const isUpstreamPullStrategy = u => hasProperty(u, UpstreamPullStrategyTypeId);
/** @internal */
export const isPullAfterNext = self => self._tag === OpCodes.OP_PULL_AFTER_NEXT;
/** @internal */
export const isPullAfterAllEnqueued = self => self._tag === OpCodes.OP_PULL_AFTER_ALL_ENQUEUED;
/** @internal */
export const match = /*#__PURE__*/dual(2, (self, {
  onAllEnqueued,
  onNext
}) => {
  switch (self._tag) {
    case OpCodes.OP_PULL_AFTER_NEXT:
      {
        return onNext(self.emitSeparator);
      }
    case OpCodes.OP_PULL_AFTER_ALL_ENQUEUED:
      {
        return onAllEnqueued(self.emitSeparator);
      }
  }
});
//# sourceMappingURL=upstreamPullStrategy.js.map