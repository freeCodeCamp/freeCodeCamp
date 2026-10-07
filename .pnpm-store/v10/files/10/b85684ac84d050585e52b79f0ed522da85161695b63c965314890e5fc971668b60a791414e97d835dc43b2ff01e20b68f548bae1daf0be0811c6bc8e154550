import * as Deferred from "../../Deferred.js";
import * as Effect from "../../Effect.js";
import { dual, pipe } from "../../Function.js";
import * as Option from "../../Option.js";
import * as Ref from "../../Ref.js";
/** @internal */
export const HandoffTypeId = /*#__PURE__*/Symbol.for("effect/Stream/Handoff");
/** @internal */
export const OP_HANDOFF_STATE_EMPTY = "Empty";
/** @internal */
export const OP_HANDOFF_STATE_FULL = "Full";
/** @internal */
const handoffStateEmpty = notifyConsumer => ({
  _tag: OP_HANDOFF_STATE_EMPTY,
  notifyConsumer
});
/** @internal */
const handoffStateFull = (value, notifyProducer) => ({
  _tag: OP_HANDOFF_STATE_FULL,
  value,
  notifyProducer
});
/** @internal */
const handoffStateMatch = (onEmpty, onFull) => {
  return self => {
    switch (self._tag) {
      case OP_HANDOFF_STATE_EMPTY:
        {
          return onEmpty(self.notifyConsumer);
        }
      case OP_HANDOFF_STATE_FULL:
        {
          return onFull(self.value, self.notifyProducer);
        }
    }
  };
};
const handoffVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
export const make = () => pipe(Deferred.make(), Effect.flatMap(deferred => Ref.make(handoffStateEmpty(deferred))), Effect.map(ref => ({
  [HandoffTypeId]: handoffVariance,
  ref
})));
/** @internal */
export const offer = /*#__PURE__*/dual(2, (self, value) => {
  return Effect.flatMap(Deferred.make(), deferred => Effect.flatten(Ref.modify(self.ref, state => pipe(state, handoffStateMatch(notifyConsumer => [Effect.zipRight(Deferred.succeed(notifyConsumer, void 0), Deferred.await(deferred)), handoffStateFull(value, deferred)], (_, notifyProducer) => [Effect.flatMap(Deferred.await(notifyProducer), () => pipe(self, offer(value))), state])))));
});
/** @internal */
export const take = self => Effect.flatMap(Deferred.make(), deferred => Effect.flatten(Ref.modify(self.ref, state => pipe(state, handoffStateMatch(notifyConsumer => [Effect.flatMap(Deferred.await(notifyConsumer), () => take(self)), state], (value, notifyProducer) => [Effect.as(Deferred.succeed(notifyProducer, void 0), value), handoffStateEmpty(deferred)])))));
/** @internal */
export const poll = self => Effect.flatMap(Deferred.make(), deferred => Effect.flatten(Ref.modify(self.ref, state => pipe(state, handoffStateMatch(() => [Effect.succeed(Option.none()), state], (value, notifyProducer) => [Effect.as(Deferred.succeed(notifyProducer, void 0), Option.some(value)), handoffStateEmpty(deferred)])))));
//# sourceMappingURL=handoff.js.map