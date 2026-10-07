/**
 * @since 2.0.0
 */
import type * as Either from "./Either.js"
import * as internal from "./internal/stm/tDeferred.js"
import type * as Option from "./Option.js"
import type * as STM from "./STM.js"
import type * as TRef from "./TRef.js"
import type * as Types from "./Types.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const TDeferredTypeId: unique symbol = internal.TDeferredTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type TDeferredTypeId = typeof TDeferredTypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface TDeferred<in out A, in out E = never> extends TDeferred.Variance<A, E> {}
/**
 * @internal
 * @since 2.0.0
 */
export interface TDeferred<in out A, in out E> {
  /** @internal */
  readonly ref: TRef.TRef<Option.Option<Either.Either<A, E>>>
}

/**
 * @since 2.0.0
 */
export declare namespace TDeferred {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Variance<in out A, in out E> {
    readonly [TDeferredTypeId]: {
      readonly _A: Types.Invariant<A>
      readonly _E: Types.Invariant<E>
    }
  }
}

const _await: <A, E>(self: TDeferred<A, E>) => STM.STM<A, E> = internal._await

export {
  /**
   * @since 2.0.0
   * @category getters
   */
  _await as await
}

/**
 * @since 2.0.0
 * @category mutations
 */
export const done: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A, E>(either: Either.Either<A, E>): (self: TDeferred<A, E>) => STM.STM<boolean>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A, E>(self: TDeferred<A, E>, either: Either.Either<A, E>): STM.STM<boolean>
} = internal.done

/**
 * @since 2.0.0
 * @category mutations
 */
export const fail: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  <E>(error: E): <A>(self: TDeferred<A, E>) => STM.STM<boolean>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A, E>(self: TDeferred<A, E>, error: E): STM.STM<boolean>
} = internal.fail

/**
 * @since 2.0.0
 * @category constructors
 */
export const make: <A, E = never>() => STM.STM<TDeferred<A, E>> = internal.make

/**
 * @since 2.0.0
 * @category getters
 */
export const poll: <A, E>(self: TDeferred<A, E>) => STM.STM<Option.Option<Either.Either<A, E>>> = internal.poll

/**
 * @since 2.0.0
 * @category mutations
 */
export const succeed: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A>(value: A): <E>(self: TDeferred<A, E>) => STM.STM<boolean>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A, E>(self: TDeferred<A, E>, value: A): STM.STM<boolean>
} = internal.succeed
