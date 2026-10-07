import { dual } from "../../Function.js";
import { hasProperty } from "../../Predicate.js";
import * as OpCodes from "../opCodes/channelUpstreamPullRequest.js";
/** @internal */
const UpstreamPullRequestSymbolKey = "effect/ChannelUpstreamPullRequest";
/** @internal */
export const UpstreamPullRequestTypeId = /*#__PURE__*/Symbol.for(UpstreamPullRequestSymbolKey);
const upstreamPullRequestVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
const proto = {
  [UpstreamPullRequestTypeId]: upstreamPullRequestVariance
};
/** @internal */
export const Pulled = value => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_PULLED;
  op.value = value;
  return op;
};
/** @internal */
export const NoUpstream = activeDownstreamCount => {
  const op = Object.create(proto);
  op._tag = OpCodes.OP_NO_UPSTREAM;
  op.activeDownstreamCount = activeDownstreamCount;
  return op;
};
/** @internal */
export const isUpstreamPullRequest = u => hasProperty(u, UpstreamPullRequestTypeId);
/** @internal */
export const isPulled = self => self._tag === OpCodes.OP_PULLED;
/** @internal */
export const isNoUpstream = self => self._tag === OpCodes.OP_NO_UPSTREAM;
/** @internal */
export const match = /*#__PURE__*/dual(2, (self, {
  onNoUpstream,
  onPulled
}) => {
  switch (self._tag) {
    case OpCodes.OP_PULLED:
      {
        return onPulled(self.value);
      }
    case OpCodes.OP_NO_UPSTREAM:
      {
        return onNoUpstream(self.activeDownstreamCount);
      }
  }
});
//# sourceMappingURL=upstreamPullRequest.js.map