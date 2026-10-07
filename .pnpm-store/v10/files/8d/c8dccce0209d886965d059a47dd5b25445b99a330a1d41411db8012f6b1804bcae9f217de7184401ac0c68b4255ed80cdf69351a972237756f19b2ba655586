/**
 * @since 2.0.0
 */

/**
 * @since 2.0.0
 * @category symbols
 */
export const symbol: unique symbol = Symbol.for("effect/PrimaryKey")

/**
 * @since 2.0.0
 * @category models
 */
export interface PrimaryKey {
  [symbol](): string
}

/**
 * @since 2.0.0
 * @category accessors
 */
export const value = (self: PrimaryKey): string => self[symbol]()
