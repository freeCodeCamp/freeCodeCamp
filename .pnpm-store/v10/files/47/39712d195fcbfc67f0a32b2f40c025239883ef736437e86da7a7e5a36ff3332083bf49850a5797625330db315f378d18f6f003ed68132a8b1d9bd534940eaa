/**
 * @since 2.0.0
 */
import type * as Effect from "./Effect.js"
import * as internal from "./internal/subscriptionRef.js"
import type * as Option from "./Option.js"
import type * as PubSub from "./PubSub.js"
import * as Ref from "./Ref.js"
import type * as Stream from "./Stream.js"
import type { Subscribable } from "./Subscribable.js"
import * as Synchronized from "./SynchronizedRef.js"
import type * as Types from "./Types.js"
import type * as Unify from "./Unify.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const SubscriptionRefTypeId: unique symbol = internal.SubscriptionRefTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type SubscriptionRefTypeId = typeof SubscriptionRefTypeId

/**
 * A `SubscriptionRef<A>` is a `Ref` that can be subscribed to in order to
 * receive the current value as well as all changes to the value.
 *
 * @since 2.0.0
 * @category models
 */
export interface SubscriptionRef<in out A>
  extends SubscriptionRef.Variance<A>, Synchronized.SynchronizedRef<A>, Subscribable<A>
{
  /** @internal */
  readonly ref: Ref.Ref<A>
  /** @internal */
  readonly pubsub: PubSub.PubSub<A>
  /** @internal */
  readonly semaphore: Effect.Semaphore
  /**
   * A stream containing the current value of the `Ref` as well as all changes
   * to that value.
   */
  readonly changes: Stream.Stream<A>
  readonly [Unify.typeSymbol]?: unknown
  readonly [Unify.unifySymbol]?: SubscriptionRefUnify<this>
  readonly [Unify.ignoreSymbol]?: SubscriptionRefUnifyIgnore
}

/**
 * @category models
 * @since 3.8.0
 */
export interface SubscriptionRefUnify<A extends { [Unify.typeSymbol]?: any }>
  extends Synchronized.SynchronizedRefUnify<A>
{
  SubscriptionRef?: () => Extract<A[Unify.typeSymbol], SubscriptionRef<any>>
}

/**
 * @category models
 * @since 3.8.0
 */
export interface SubscriptionRefUnifyIgnore extends Synchronized.SynchronizedRefUnifyIgnore {
  SynchronizedRef?: true
}

/**
 * @since 2.0.0
 */
export declare namespace SubscriptionRef {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<in out A> {
    readonly [SubscriptionRefTypeId]: {
      readonly _A: Types.Invariant<A>
    }
  }
}

/**
 * @since 2.0.0
 * @category getters
 */
export const get: <A>(self: SubscriptionRef<A>) => Effect.Effect<A> = internal.get

/**
 * @since 2.0.0
 * @category utils
 */
export const getAndSet: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(value: A): (self: SubscriptionRef<A>) => Effect.Effect<A>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(self: SubscriptionRef<A>, value: A): Effect.Effect<A>
} = Ref.getAndSet

/**
 * @since 2.0.0
 * @category utils
 */
export const getAndUpdate: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(f: (a: A) => A): (self: SubscriptionRef<A>) => Effect.Effect<A>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(self: SubscriptionRef<A>, f: (a: A) => A): Effect.Effect<A>
} = Ref.getAndUpdate

/**
 * @since 2.0.0
 * @category utils
 */
export const getAndUpdateEffect: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, R, E>(f: (a: A) => Effect.Effect<A, E, R>): (self: SubscriptionRef<A>) => Effect.Effect<A, E, R>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, R, E>(self: SubscriptionRef<A>, f: (a: A) => Effect.Effect<A, E, R>): Effect.Effect<A, E, R>
} = Synchronized.getAndUpdateEffect

/**
 * @since 2.0.0
 * @category utils
 */
export const getAndUpdateSome: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(pf: (a: A) => Option.Option<A>): (self: SubscriptionRef<A>) => Effect.Effect<A>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(self: SubscriptionRef<A>, pf: (a: A) => Option.Option<A>): Effect.Effect<A>
} = Ref.getAndUpdateSome

/**
 * @since 2.0.0
 * @category utils
 */
export const getAndUpdateSomeEffect: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, R, E>(pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>): (self: SubscriptionRef<A>) => Effect.Effect<A, E, R>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, R, E>(
    self: SubscriptionRef<A>,
    pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>
  ): Effect.Effect<A, E, R>
} = Synchronized.getAndUpdateSomeEffect

/**
 * Creates a new `SubscriptionRef` with the specified value.
 *
 * @since 2.0.0
 * @category constructors
 */
export const make: <A>(value: A) => Effect.Effect<SubscriptionRef<A>> = internal.make

/**
 * @since 2.0.0
 * @category utils
 */
export const modify: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, B>(f: (a: A) => readonly [B, A]): (self: SubscriptionRef<A>) => Effect.Effect<B>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, B>(self: SubscriptionRef<A>, f: (a: A) => readonly [B, A]): Effect.Effect<B>
} = internal.modify

/**
 * @since 2.0.0
 * @category utils
 */
export const modifyEffect: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <B, A, E, R>(f: (a: A) => Effect.Effect<readonly [B, A], E, R>): (self: SubscriptionRef<A>) => Effect.Effect<B, E, R>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, B, E, R>(
    self: SubscriptionRef<A>,
    f: (a: A) => Effect.Effect<readonly [B, A], E, R>
  ): Effect.Effect<B, E, R>
} = internal.modifyEffect

/**
 * @since 2.0.0
 * @category utils
 */
export const modifySome: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <B, A>(fallback: B, pf: (a: A) => Option.Option<readonly [B, A]>): (self: SubscriptionRef<A>) => Effect.Effect<B>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, B>(
    self: SubscriptionRef<A>,
    fallback: B,
    pf: (a: A) => Option.Option<readonly [B, A]>
  ): Effect.Effect<B>
} = Ref.modifySome

/**
 * @since 2.0.0
 * @category utils
 */
export const modifySomeEffect: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, B, R, E>(
    fallback: B,
    pf: (a: A) => Option.Option<Effect.Effect<readonly [B, A], E, R>>
  ): (self: Synchronized.SynchronizedRef<A>) => Effect.Effect<B, E, R>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, B, R, E>(
    self: Synchronized.SynchronizedRef<A>,
    fallback: B,
    pf: (a: A) => Option.Option<Effect.Effect<readonly [B, A], E, R>>
  ): Effect.Effect<B, E, R>
} = Synchronized.modifySomeEffect

/**
 * @since 2.0.0
 * @category utils
 */
export const set: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(value: A): (self: SubscriptionRef<A>) => Effect.Effect<void>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(self: SubscriptionRef<A>, value: A): Effect.Effect<void>
} = internal.set

/**
 * @since 2.0.0
 * @category utils
 */
export const setAndGet: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(value: A): (self: SubscriptionRef<A>) => Effect.Effect<A>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(self: SubscriptionRef<A>, value: A): Effect.Effect<A>
} = Ref.setAndGet

/**
 * @since 2.0.0
 * @category utils
 */
export const update: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(f: (a: A) => A): (self: SubscriptionRef<A>) => Effect.Effect<void>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(self: SubscriptionRef<A>, f: (a: A) => A): Effect.Effect<void>
} = Ref.update

/**
 * @since 2.0.0
 * @category utils
 */
export const updateEffect: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, R, E>(f: (a: A) => Effect.Effect<A, E, R>): (self: Synchronized.SynchronizedRef<A>) => Effect.Effect<void, E, R>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, R, E>(self: Synchronized.SynchronizedRef<A>, f: (a: A) => Effect.Effect<A, E, R>): Effect.Effect<void, E, R>
} = Synchronized.updateEffect

/**
 * @since 2.0.0
 * @category utils
 */
export const updateAndGet: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(f: (a: A) => A): (self: SubscriptionRef<A>) => Effect.Effect<A>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(self: SubscriptionRef<A>, f: (a: A) => A): Effect.Effect<A>
} = Ref.updateAndGet

/**
 * @since 2.0.0
 * @category utils
 */
export const updateAndGetEffect: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, R, E>(f: (a: A) => Effect.Effect<A, E, R>): (self: SubscriptionRef<A>) => Effect.Effect<A, E, R>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, R, E>(self: SubscriptionRef<A>, f: (a: A) => Effect.Effect<A, E, R>): Effect.Effect<A, E, R>
} = Synchronized.updateAndGetEffect

/**
 * @since 2.0.0
 * @category utils
 */
export const updateSome: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(f: (a: A) => Option.Option<A>): (self: SubscriptionRef<A>) => Effect.Effect<void>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(self: SubscriptionRef<A>, f: (a: A) => Option.Option<A>): Effect.Effect<void>
} = Ref.updateSome

/**
 * @since 2.0.0
 * @category utils
 */
export const updateSomeEffect: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, R, E>(pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>): (self: Synchronized.SynchronizedRef<A>) => Effect.Effect<void, E, R>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, R, E>(
    self: Synchronized.SynchronizedRef<A>,
    pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>
  ): Effect.Effect<void, E, R>
} = Synchronized.updateSomeEffect

/**
 * @since 2.0.0
 * @category utils
 */
export const updateSomeAndGet: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(pf: (a: A) => Option.Option<A>): (self: SubscriptionRef<A>) => Effect.Effect<A>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A>(self: SubscriptionRef<A>, pf: (a: A) => Option.Option<A>): Effect.Effect<A>
} = Ref.updateSomeAndGet

/**
 * @since 2.0.0
 * @category utils
 */
export const updateSomeAndGetEffect: {
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, R, E>(pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>): (self: SubscriptionRef<A>) => Effect.Effect<A, E, R>
  /**
   * @since 2.0.0
   * @category utils
   */
  <A, R, E>(
    self: SubscriptionRef<A>,
    pf: (a: A) => Option.Option<Effect.Effect<A, E, R>>
  ): Effect.Effect<A, E, R>
} = Synchronized.updateSomeAndGetEffect
