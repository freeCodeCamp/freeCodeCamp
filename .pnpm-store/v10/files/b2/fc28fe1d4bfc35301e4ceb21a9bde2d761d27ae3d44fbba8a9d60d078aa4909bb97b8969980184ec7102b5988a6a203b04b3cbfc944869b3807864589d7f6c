import * as Effect from "../Effect.js"
import * as Effectable from "../Effectable.js"
import { dual, pipe } from "../Function.js"
import * as PubSub from "../PubSub.js"
import * as Readable from "../Readable.js"
import * as Ref from "../Ref.js"
import type { Stream } from "../Stream.js"
import * as Subscribable from "../Subscribable.js"
import type * as SubscriptionRef from "../SubscriptionRef.js"
import * as Synchronized from "../SynchronizedRef.js"
import * as circular_ from "./effect/circular.js"
import * as ref_ from "./ref.js"
import * as stream from "./stream.js"

/** @internal */
const SubscriptionRefSymbolKey = "effect/SubscriptionRef"

/** @internal */
export const SubscriptionRefTypeId: SubscriptionRef.SubscriptionRefTypeId = Symbol.for(
  SubscriptionRefSymbolKey
) as SubscriptionRef.SubscriptionRefTypeId

const subscriptionRefVariance = {
  /* c8 ignore next */
  _A: (_: any) => _
}

/** @internal */
class SubscriptionRefImpl<in out A> extends Effectable.Class<A> implements SubscriptionRef.SubscriptionRef<A> {
  readonly [Readable.TypeId]: Readable.TypeId = Readable.TypeId
  readonly [Subscribable.TypeId]: Subscribable.TypeId = Subscribable.TypeId
  readonly [Ref.RefTypeId] = ref_.refVariance
  readonly [Synchronized.SynchronizedRefTypeId] = circular_.synchronizedVariance
  readonly [SubscriptionRefTypeId] = subscriptionRefVariance
  constructor(
    readonly ref: Ref.Ref<A>,
    readonly pubsub: PubSub.PubSub<A>,
    readonly semaphore: Effect.Semaphore
  ) {
    super()
    this.get = Ref.get(this.ref)
  }
  commit() {
    return this.get
  }
  readonly get: Effect.Effect<A>
  get changes(): Stream<A> {
    return pipe(
      Ref.get(this.ref),
      Effect.flatMap((a) =>
        Effect.map(
          stream.fromPubSub(this.pubsub, { scoped: true }),
          (s) =>
            stream.concat(
              stream.make(a),
              s
            )
        )
      ),
      this.semaphore.withPermits(1),
      stream.unwrapScoped
    )
  }
  modify<B>(f: (a: A) => readonly [B, A]): Effect.Effect<B> {
    return this.modifyEffect((a) => Effect.succeed(f(a)))
  }
  modifyEffect<B, E, R>(f: (a: A) => Effect.Effect<readonly [B, A], E, R>): Effect.Effect<B, E, R> {
    return pipe(
      Ref.get(this.ref),
      Effect.flatMap(f),
      Effect.flatMap(([b, a]) =>
        pipe(
          Ref.set(this.ref, a),
          Effect.as(b),
          Effect.zipLeft(PubSub.publish(this.pubsub, a))
        )
      ),
      this.semaphore.withPermits(1)
    )
  }
}

/** @internal */
export const get = <A>(self: SubscriptionRef.SubscriptionRef<A>): Effect.Effect<A> => Ref.get(self.ref)

/** @internal */
export const make = <A>(value: A): Effect.Effect<SubscriptionRef.SubscriptionRef<A>> =>
  pipe(
    Effect.all([
      PubSub.unbounded<A>(),
      Ref.make(value),
      Effect.makeSemaphore(1)
    ]),
    Effect.map(([pubsub, ref, semaphore]) => new SubscriptionRefImpl(ref, pubsub, semaphore))
  )

/** @internal */
export const modify = dual<
  <A, B>(f: (a: A) => readonly [B, A]) => (self: SubscriptionRef.SubscriptionRef<A>) => Effect.Effect<B>,
  <A, B>(
    self: SubscriptionRef.SubscriptionRef<A>,
    f: (a: A) => readonly [B, A]
  ) => Effect.Effect<B>
>(2, <A, B>(
  self: SubscriptionRef.SubscriptionRef<A>,
  f: (a: A) => readonly [B, A]
): Effect.Effect<B> => self.modify(f))

/** @internal */
export const modifyEffect = dual<
  <B, A, E, R>(
    f: (a: A) => Effect.Effect<readonly [B, A], E, R>
  ) => (self: SubscriptionRef.SubscriptionRef<A>) => Effect.Effect<B, E, R>,
  <A, B, E, R>(
    self: SubscriptionRef.SubscriptionRef<A>,
    f: (a: A) => Effect.Effect<readonly [B, A], E, R>
  ) => Effect.Effect<B, E, R>
>(2, <A, B, E, R>(
  self: SubscriptionRef.SubscriptionRef<A>,
  f: (a: A) => Effect.Effect<readonly [B, A], E, R>
): Effect.Effect<B, E, R> => self.modifyEffect(f))

/** @internal */
export const set = dual<
  <A>(value: A) => (self: SubscriptionRef.SubscriptionRef<A>) => Effect.Effect<void>,
  <A>(
    self: SubscriptionRef.SubscriptionRef<A>,
    value: A
  ) => Effect.Effect<void>
>(2, <A>(
  self: SubscriptionRef.SubscriptionRef<A>,
  value: A
): Effect.Effect<void> =>
  pipe(
    Ref.set(self.ref, value),
    Effect.zipLeft(PubSub.publish(self.pubsub, value)),
    self.semaphore.withPermits(1)
  ))
