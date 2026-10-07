/**
 * @since 2.0.0
 */
import * as internal from "./internal/stream/haltStrategy.js"

/**
 * @since 2.0.0
 * @category models
 */
export type HaltStrategy = Left | Right | Both | Either

/**
 * @since 2.0.0
 * @category models
 */
export type HaltStrategyInput = HaltStrategy | "left" | "right" | "both" | "either"

/**
 * @since 2.0.0
 * @category models
 */
export interface Left {
  readonly _tag: "Left"
}

/**
 * @since 2.0.0
 * @category models
 */
export interface Right {
  readonly _tag: "Right"
}

/**
 * @since 2.0.0
 * @category models
 */
export interface Both {
  readonly _tag: "Both"
}

/**
 * @since 2.0.0
 * @category models
 */
export interface Either {
  readonly _tag: "Either"
}

/**
 * @since 2.0.0
 * @category constructors
 */
export const Left: HaltStrategy = internal.Left

/**
 * @since 2.0.0
 * @category constructors
 */
export const Right: HaltStrategy = internal.Right

/**
 * @since 2.0.0
 * @category constructors
 */
export const Both: HaltStrategy = internal.Both

/**
 * @since 2.0.0
 * @category constructors
 */
export const Either: HaltStrategy = internal.Either

/**
 * @since 2.0.0
 * @category constructors
 */
export const fromInput: (input: HaltStrategyInput) => HaltStrategy = internal.fromInput

/**
 * @since 2.0.0
 * @category refinements
 */
export const isLeft: (self: HaltStrategy) => self is Left = internal.isLeft

/**
 * @since 2.0.0
 * @category refinements
 */
export const isRight: (self: HaltStrategy) => self is Right = internal.isRight

/**
 * @since 2.0.0
 * @category refinements
 */
export const isBoth: (self: HaltStrategy) => self is Both = internal.isBoth

/**
 * @since 2.0.0
 * @category refinements
 */
export const isEither: (self: HaltStrategy) => self is Either = internal.isEither

/**
 * Folds over the specified `HaltStrategy` using the provided case functions.
 *
 * @since 2.0.0
 * @category folding
 */
export const match: {
  /**
   * Folds over the specified `HaltStrategy` using the provided case functions.
   *
   * @since 2.0.0
   * @category folding
   */
  <Z>(
   options: {
     readonly onLeft: () => Z
     readonly onRight: () => Z
     readonly onBoth: () => Z
     readonly onEither: () => Z
   }
  ): (self: HaltStrategy) => Z
  /**
   * Folds over the specified `HaltStrategy` using the provided case functions.
   *
   * @since 2.0.0
   * @category folding
   */
  <Z>(
   self: HaltStrategy,
   options: {
     readonly onLeft: () => Z
     readonly onRight: () => Z
     readonly onBoth: () => Z
     readonly onEither: () => Z
   }
  ): Z
} = internal.match
