/**
 * @since 2.0.0
 */

import type * as Effect from "./Effect.js"
import * as internal from "./internal/stm/tSemaphore.js"
import type * as Scope from "./Scope.js"
import type * as STM from "./STM.js"
import type * as TRef from "./TRef.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const TSemaphoreTypeId: unique symbol = internal.TSemaphoreTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type TSemaphoreTypeId = typeof TSemaphoreTypeId

/**
 * @since 2.0.0
 * @category models
 */
export interface TSemaphore extends TSemaphore.Proto {}
/**
 * @internal
 * @since 2.0.0
 */
export interface TSemaphore {
  /** @internal */
  readonly permits: TRef.TRef<number>
}

/**
 * @since 2.0.0
 */
export declare namespace TSemaphore {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Proto {
    readonly [TSemaphoreTypeId]: TSemaphoreTypeId
  }
}

/**
 * @since 2.0.0
 * @category mutations
 */
export const acquire: (self: TSemaphore) => STM.STM<void> = internal.acquire

/**
 * @since 2.0.0
 * @category mutations
 */
export const acquireN: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  (n: number): (self: TSemaphore) => STM.STM<void>
  /**
   * @since 2.0.0
   * @category mutations
   */
  (self: TSemaphore, n: number): STM.STM<void>
} = internal.acquireN

/**
 * @since 2.0.0
 * @category getters
 */
export const available: (self: TSemaphore) => STM.STM<number> = internal.available

/**
 * @since 2.0.0
 * @category constructors
 */
export const make: (permits: number) => STM.STM<TSemaphore> = internal.make

/**
 * @since 2.0.0
 * @category mutations
 */
export const release: (self: TSemaphore) => STM.STM<void> = internal.release

/**
 * @since 2.0.0
 * @category mutations
 */
export const releaseN: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  (n: number): (self: TSemaphore) => STM.STM<void>
  /**
   * @since 2.0.0
   * @category mutations
   */
  (self: TSemaphore, n: number): STM.STM<void>
} = internal.releaseN

/**
 * @since 2.0.0
 * @category mutations
 */
export const withPermit: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  (semaphore: TSemaphore): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A, E, R>(self: Effect.Effect<A, E, R>, semaphore: TSemaphore): Effect.Effect<A, E, R>
} = internal.withPermit

/**
 * @since 2.0.0
 * @category mutations
 */
export const withPermits: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  (semaphore: TSemaphore, permits: number): <A, E, R>(self: Effect.Effect<A, E, R>) => Effect.Effect<A, E, R>
  /**
   * @since 2.0.0
   * @category mutations
   */
  <A, E, R>(self: Effect.Effect<A, E, R>, semaphore: TSemaphore, permits: number): Effect.Effect<A, E, R>
} = internal.withPermits

/**
 * @since 2.0.0
 * @category mutations
 */
export const withPermitScoped: (self: TSemaphore) => Effect.Effect<void, never, Scope.Scope> = internal.withPermitScoped

/**
 * @since 2.0.0
 * @category mutations
 */
export const withPermitsScoped: {
  /**
   * @since 2.0.0
   * @category mutations
   */
  (permits: number): (self: TSemaphore) => Effect.Effect<void, never, Scope.Scope>
  /**
   * @since 2.0.0
   * @category mutations
   */
  (self: TSemaphore, permits: number): Effect.Effect<void, never, Scope.Scope>
} = internal.withPermitsScoped

/**
 * @since 2.0.0
 * @category unsafe
 */
export const unsafeMake: (permits: number) => TSemaphore = internal.unsafeMakeSemaphore
