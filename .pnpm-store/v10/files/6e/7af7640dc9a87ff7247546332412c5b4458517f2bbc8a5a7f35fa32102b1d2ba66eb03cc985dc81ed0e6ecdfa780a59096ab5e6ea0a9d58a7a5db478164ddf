/**
 * @since 2.0.0
 */
import * as internal from "./internal/channel/mergeStrategy.js"

/**
 * @since 2.0.0
 * @category symbols
 */
export const MergeStrategyTypeId: unique symbol = internal.MergeStrategyTypeId

/**
 * @since 2.0.0
 * @category symbols
 */
export type MergeStrategyTypeId = typeof MergeStrategyTypeId

/**
 * @since 2.0.0
 * @category models
 */
export type MergeStrategy = BackPressure | BufferSliding

/**
 * @since 2.0.0
 */
export declare namespace MergeStrategy {
  /**
   * @since 2.0.0
   * @category models
   */
  export interface Proto {
    readonly [MergeStrategyTypeId]: MergeStrategyTypeId
  }
}

/**
 * @since 2.0.0
 * @category models
 */
export interface BackPressure extends MergeStrategy.Proto {
  readonly _tag: "BackPressure"
}

/**
 * @since 2.0.0
 * @category models
 */
export interface BufferSliding extends MergeStrategy.Proto {
  readonly _tag: "BufferSliding"
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const BackPressure: (_: void) => MergeStrategy = internal.BackPressure

/**
 * @since 2.0.0
 * @category constructors
 */
export const BufferSliding: (_: void) => MergeStrategy = internal.BufferSliding

/**
 * Returns `true` if the specified value is a `MergeStrategy`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isMergeStrategy: (u: unknown) => u is MergeStrategy = internal.isMergeStrategy

/**
 * Returns `true` if the specified `MergeStrategy` is a `BackPressure`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isBackPressure: (self: MergeStrategy) => self is BackPressure = internal.isBackPressure

/**
 * Returns `true` if the specified `MergeStrategy` is a `BufferSliding`, `false`
 * otherwise.
 *
 * @since 2.0.0
 * @category refinements
 */
export const isBufferSliding: (self: MergeStrategy) => self is BufferSliding = internal.isBufferSliding

/**
 * Folds an `MergeStrategy` into a value of type `A`.
 *
 * @since 2.0.0
 * @category folding
 */
export const match: {
  /**
   * Folds an `MergeStrategy` into a value of type `A`.
   *
   * @since 2.0.0
   * @category folding
   */
  <A>(
   options: {
     readonly onBackPressure: () => A
     readonly onBufferSliding: () => A
   }
  ): (self: MergeStrategy) => A
  /**
   * Folds an `MergeStrategy` into a value of type `A`.
   *
   * @since 2.0.0
   * @category folding
   */
  <A>(
   self: MergeStrategy,
   options: {
     readonly onBackPressure: () => A
     readonly onBufferSliding: () => A
   }
  ): A
} = internal.match
