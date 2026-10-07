/**
 * @since 3.10.0
 */
import type * as Effect from "./Effect.js"
import * as internal from "./internal/stm/tSubscriptionRef.js"
import type * as Option from "./Option.js"
import type * as Scope from "./Scope.js"
import type * as STM from "./STM.js"
import type * as Stream from "./Stream.js"
import type * as TPubSub from "./TPubSub.js"
import type * as TQueue from "./TQueue.js"
import type * as TRef from "./TRef.js"
import type * as Types from "./Types.js"

/**
 * @since 3.10.0
 * @category symbols
 */
export const TSubscriptionRefTypeId: unique symbol = internal.TSubscriptionRefTypeId

/**
 * @since 3.10.0
 * @category symbols
 */
export type TSubscriptionRefTypeId = typeof TSubscriptionRefTypeId

/**
 * A `TSubscriptionRef<A>` is a `TRef` that can be subscribed to in order to
 * receive a `TDequeue<A>` of the current value and all committed changes to the value.
 *
 * @since 3.10.0
 * @category models
 */
export interface TSubscriptionRef<in out A> extends TSubscriptionRef.Variance<A>, TRef.TRef<A> {
  /** @internal */
  readonly ref: TRef.TRef<A>
  /** @internal */
  readonly pubsub: TPubSub.TPubSub<A>
  /** @internal */
  modify<B>(f: (a: A) => readonly [B, A]): STM.STM<B>

  /**
   * A TDequeue containing the current value of the `Ref` as well as all changes
   * to that value.
   */
  readonly changes: STM.STM<TQueue.TDequeue<A>>
}

/**
 * @since 3.10.0
 */
export declare namespace TSubscriptionRef {
  /**
   * @since 3.10.0
   * @category models
   */
  export interface Variance<in out A> {
    readonly [TSubscriptionRefTypeId]: {
      readonly _A: Types.Invariant<A>
    }
  }
}

/**
 * @since 3.10.0
 * @category mutations
 */
export const get: <A>(self: TSubscriptionRef<A>) => STM.STM<A> = internal.get

/**
 * @since 3.10.0
 * @category mutations
 */
export const getAndSet: {
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(value: A): (self: TSubscriptionRef<A>) => STM.STM<A>
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(self: TSubscriptionRef<A>, value: A): STM.STM<A>
} = internal.getAndSet

/**
 * @since 3.10.0
 * @category mutations
 */
export const getAndUpdate: {
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(f: (a: A) => A): (self: TSubscriptionRef<A>) => STM.STM<A>
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(self: TSubscriptionRef<A>, f: (a: A) => A): STM.STM<A>
} = internal.getAndUpdate

/**
 * @since 3.10.0
 * @category mutations
 */
export const getAndUpdateSome: {
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(f: (a: A) => Option.Option<A>): (self: TSubscriptionRef<A>) => STM.STM<A>
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(self: TSubscriptionRef<A>, f: (a: A) => Option.Option<A>): STM.STM<A>
} = internal.getAndUpdateSome

/**
 * @since 3.10.0
 * @category constructors
 */
export const make: <A>(value: A) => STM.STM<TSubscriptionRef<A>> = internal.make

/**
 * @since 3.10.0
 * @category mutations
 */
export const modify: {
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A, B>(f: (a: A) => readonly [B, A]): (self: TSubscriptionRef<A>) => STM.STM<B>
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A, B>(self: TSubscriptionRef<A>, f: (a: A) => readonly [B, A]): STM.STM<B>
} = internal.modify

/**
 * @since 3.10.0
 * @category mutations
 */
export const modifySome: {
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A, B>(fallback: B, f: (a: A) => Option.Option<readonly [B, A]>): (self: TSubscriptionRef<A>) => STM.STM<B>
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A, B>(
   self: TSubscriptionRef<A>,
   fallback: B,
   f: (a: A) => Option.Option<readonly [B, A]>
  ): STM.STM<B>
} = internal.modifySome

/**
 * @since 3.10.0
 * @category mutations
 */
export const set: {
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(value: A): (self: TSubscriptionRef<A>) => STM.STM<void>
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(self: TSubscriptionRef<A>, value: A): STM.STM<void>
} = internal.set

/**
 * @since 3.10.0
 * @category mutations
 */
export const setAndGet: {
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(value: A): (self: TSubscriptionRef<A>) => STM.STM<A>
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(self: TSubscriptionRef<A>, value: A): STM.STM<A>
} = internal.setAndGet

/**
 * @since 3.10.0
 * @category mutations
 */
export const update: {
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(f: (a: A) => A): (self: TSubscriptionRef<A>) => STM.STM<void>
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(self: TSubscriptionRef<A>, f: (a: A) => A): STM.STM<void>
} = internal.update

/**
 * @since 3.10.0
 * @category mutations
 */
export const updateAndGet: {
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(f: (a: A) => A): (self: TSubscriptionRef<A>) => STM.STM<A>
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(self: TSubscriptionRef<A>, f: (a: A) => A): STM.STM<A>
} = internal.updateAndGet

/**
 * @since 3.10.0
 * @category mutations
 */
export const updateSome: {
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(f: (a: A) => Option.Option<A>): (self: TSubscriptionRef<A>) => STM.STM<void>
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(self: TSubscriptionRef<A>, f: (a: A) => Option.Option<A>): STM.STM<void>
} = internal.updateSome

/**
 * @since 3.10.0
 * @category mutations
 */
export const updateSomeAndGet: {
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(f: (a: A) => Option.Option<A>): (self: TSubscriptionRef<A>) => STM.STM<A>
  /**
   * @since 3.10.0
   * @category mutations
   */
  <A>(self: TSubscriptionRef<A>, f: (a: A) => Option.Option<A>): STM.STM<A>
} = internal.updateSomeAndGet

/**
 * @since 3.10.0
 * @category mutations
 */
export const changesScoped: <A>(self: TSubscriptionRef<A>) => Effect.Effect<TQueue.TDequeue<A>, never, Scope.Scope> =
  internal.changesScoped

/**
 * @since 3.10.0
 * @category mutations
 */
export const changesStream: <A>(self: TSubscriptionRef<A>) => Stream.Stream<A> = internal.changesStream

/**
 * @since 3.10.0
 * @category mutations
 */
export const changes: <A>(self: TSubscriptionRef<A>) => STM.STM<TQueue.TDequeue<A>> = (self) => self.changes
