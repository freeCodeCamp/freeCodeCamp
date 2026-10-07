import * as Effect from "../Effect.js";
import * as Effectable from "../Effectable.js";
import { dual, pipe } from "../Function.js";
import * as PubSub from "../PubSub.js";
import * as Readable from "../Readable.js";
import * as Ref from "../Ref.js";
import * as Subscribable from "../Subscribable.js";
import * as Synchronized from "../SynchronizedRef.js";
import * as circular_ from "./effect/circular.js";
import * as ref_ from "./ref.js";
import * as stream from "./stream.js";
/** @internal */
const SubscriptionRefSymbolKey = "effect/SubscriptionRef";
/** @internal */
export const SubscriptionRefTypeId = /*#__PURE__*/Symbol.for(SubscriptionRefSymbolKey);
const subscriptionRefVariance = {
  /* c8 ignore next */
  _A: _ => _
};
/** @internal */
class SubscriptionRefImpl extends Effectable.Class {
  ref;
  pubsub;
  semaphore;
  [Readable.TypeId] = Readable.TypeId;
  [Subscribable.TypeId] = Subscribable.TypeId;
  [Ref.RefTypeId] = ref_.refVariance;
  [Synchronized.SynchronizedRefTypeId] = circular_.synchronizedVariance;
  [SubscriptionRefTypeId] = subscriptionRefVariance;
  constructor(ref, pubsub, semaphore) {
    super();
    this.ref = ref;
    this.pubsub = pubsub;
    this.semaphore = semaphore;
    this.get = Ref.get(this.ref);
  }
  commit() {
    return this.get;
  }
  get;
  get changes() {
    return pipe(Ref.get(this.ref), Effect.flatMap(a => Effect.map(stream.fromPubSub(this.pubsub, {
      scoped: true
    }), s => stream.concat(stream.make(a), s))), this.semaphore.withPermits(1), stream.unwrapScoped);
  }
  modify(f) {
    return this.modifyEffect(a => Effect.succeed(f(a)));
  }
  modifyEffect(f) {
    return pipe(Ref.get(this.ref), Effect.flatMap(f), Effect.flatMap(([b, a]) => pipe(Ref.set(this.ref, a), Effect.as(b), Effect.zipLeft(PubSub.publish(this.pubsub, a)))), this.semaphore.withPermits(1));
  }
}
/** @internal */
export const get = self => Ref.get(self.ref);
/** @internal */
export const make = value => pipe(Effect.all([PubSub.unbounded(), Ref.make(value), Effect.makeSemaphore(1)]), Effect.map(([pubsub, ref, semaphore]) => new SubscriptionRefImpl(ref, pubsub, semaphore)));
/** @internal */
export const modify = /*#__PURE__*/dual(2, (self, f) => self.modify(f));
/** @internal */
export const modifyEffect = /*#__PURE__*/dual(2, (self, f) => self.modifyEffect(f));
/** @internal */
export const set = /*#__PURE__*/dual(2, (self, value) => pipe(Ref.set(self.ref, value), Effect.zipLeft(PubSub.publish(self.pubsub, value)), self.semaphore.withPermits(1)));
//# sourceMappingURL=subscriptionRef.js.map