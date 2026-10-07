/**
 * @since 2.0.0
 */

import type * as Journal from "./internal/stm/journal.js"
import * as internal from "./internal/stm/tRef.js"
import type * as TxnId from "./internal/stm/txnId.js"
import type * as Versioned from "./internal/stm/versioned.js"
import type * as Option from "./Option.js"
import type { Pipeable } from "./Pipeable.js"
import type * as STM from "./STM.js"
import type * as Types from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const TRefTypeId: unique symbol = internal.TRefTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type TRefTypeId = typeof TRefTypeId

/**
 * A `TRef<A>` is a purely functional description of a mutable reference that can
 * be modified as part of a transactional effect. The fundamental operations of
 * a `TRef` are `set` and `get`. `set` transactionally sets the reference to a
 * new value. `get` gets the current value of the reference.
 *
 * NOTE: While `TRef<A>` provides the transactional equivalent of a mutable
 * reference, the value inside the `TRef` should be immutable.
 *
 * @since 2.0.0
 * @category models
 */
export interface TRef<in out A> extends TRef.Variance<A>, Pipeable {
  /**
   * Note: the method is unbound, exposed only for potential extensions.
   */
  modify<B>(f: (a: A) => readonly [B, A]): STM.STM<B>
}
/**
 * @internal
 * @since 2.0.0
 */
export interface TRef<in out A> {
  /** @internal */
  todos: Map<TxnId.TxnId, Journal.Todo>
  /** @internal */
  versioned: Versioned.Versioned<A>
}

/**
 * @since 2.0.0
 */
export declare namespace TRef {
  /**
   * @since 2.0.0
   */
  export interface Variance<in out A> {
    readonly [TRefTypeId]: {
      readonly _A: Types.Invariant<A>
    }
  }
}

/**
 * @since 2.0.0
 * @category mutations
 */
export const get: <A>(self: TRef<A>) => STM.STM<A> = internal.get

/**
 * @since 2.0.0
 * @category mutations
 */
export const getAndSet: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(value: A): (self: TRef<A>) => STM.STM<A>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(self: TRef<A>, value: A): STM.STM<A>
} = internal.getAndSet

/**
 * @since 2.0.0
 * @category mutations
 */
export const getAndUpdate: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(f: (a: A) => A): (self: TRef<A>) => STM.STM<A>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(self: TRef<A>, f: (a: A) => A): STM.STM<A>
} = internal.getAndUpdate

/**
 * @since 2.0.0
 * @category mutations
 */
export const getAndUpdateSome: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(f: (a: A) => Option.Option<A>): (self: TRef<A>) => STM.STM<A>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(self: TRef<A>, f: (a: A) => Option.Option<A>): STM.STM<A>
} = internal.getAndUpdateSome

/**
 * @since 2.0.0
 * @category constructors
 */
export const make: <A>(value: A) => STM.STM<TRef<A>> = internal.make

/**
 * @since 2.0.0
 * @category mutations
 */
export const modify: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A, B>(f: (a: A) => readonly [B, A]): (self: TRef<A>) => STM.STM<B>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A, B>(self: TRef<A>, f: (a: A) => readonly [B, A]): STM.STM<B>
} = internal.modify

/**
 * @since 2.0.0
 * @category mutations
 */
export const modifySome: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A, B>(fallback: B, f: (a: A) => Option.Option<readonly [B, A]>): (self: TRef<A>) => STM.STM<B>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A, B>(self: TRef<A>, fallback: B, f: (a: A) => Option.Option<readonly [B, A]>): STM.STM<B>
} = internal.modifySome

/**
 * @since 2.0.0
 * @category mutations
 */
export const set: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(value: A): (self: TRef<A>) => STM.STM<void>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(self: TRef<A>, value: A): STM.STM<void>
} = internal.set

/**
 * @since 2.0.0
 * @category mutations
 */
export const setAndGet: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(value: A): (self: TRef<A>) => STM.STM<A>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(self: TRef<A>, value: A): STM.STM<A>
} = internal.setAndGet

/**
 * @since 2.0.0
 * @category mutations
 */
export const update: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(f: (a: A) => A): (self: TRef<A>) => STM.STM<void>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(self: TRef<A>, f: (a: A) => A): STM.STM<void>
} = internal.update

/**
 * @since 2.0.0
 * @category mutations
 */
export const updateAndGet: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(f: (a: A) => A): (self: TRef<A>) => STM.STM<A>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(self: TRef<A>, f: (a: A) => A): STM.STM<A>
} = internal.updateAndGet

/**
 * @since 2.0.0
 * @category mutations
 */
export const updateSome: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(f: (a: A) => Option.Option<A>): (self: TRef<A>) => STM.STM<void>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(self: TRef<A>, f: (a: A) => Option.Option<A>): STM.STM<void>
} = internal.updateSome

/**
 * @since 2.0.0
 * @category mutations
 */
export const updateSomeAndGet: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(f: (a: A) => Option.Option<A>): (self: TRef<A>) => STM.STM<A>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(self: TRef<A>, f: (a: A) => Option.Option<A>): STM.STM<A>
} = internal.updateSomeAndGet
