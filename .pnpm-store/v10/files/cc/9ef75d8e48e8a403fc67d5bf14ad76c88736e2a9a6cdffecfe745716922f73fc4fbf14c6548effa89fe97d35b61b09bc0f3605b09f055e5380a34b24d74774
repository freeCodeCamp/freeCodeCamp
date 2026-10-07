import type {Point, Position} from 'unist'

// To do: next major: remove `void` from allowed return types.

/**
 * @typeParam Context
 *   Value used as `this`.
 * @this
 *   The `warningContext` given to `parseEntities`
 * @param reason
 *   Human readable reason for emitting a parse error.
 * @param point
 *   Place where the error occurred.
 * @param code
 *   Machine readable code the error.
 */
export type WarningHandler<Context = undefined> = (
  this: Context,
  reason: string,
  point: Point,
  code: number
) => undefined | void

/**
 * @typeParam Context
 *   Value used as `this`.
 * @this
 *   The `referenceContext` given to `parseEntities`
 * @param value
 *   Decoded character reference.
 * @param position
 *   Place where `value` starts and ends.
 * @param source
 *   Raw source of character reference.
 */
export type ReferenceHandler<Context = undefined> = (
  this: Context,
  value: string,
  position: Position,
  source: string
) => undefined | void

/**
 * @typeParam Context
 *   Value used as `this`.
 * @this
 *   The `textContext` given to `parseEntities`.
 * @param value
 *   String of content.
 * @param position
 *   Place where `value` starts and ends.
 */
export type TextHandler<Context = undefined> = (
  this: Context,
  value: string,
  position: Position
) => undefined | void

/**
 * Configuration.
 *
 * @typeParam WarningContext
 *   Value used as `this` in the `warning` handler.
 * @typeParam ReferenceContext
 *   Value used as `this` in the `reference` handler.
 * @typeParam TextContext
 *   Value used as `this` in the `text` handler.
 */
export interface Options<
  WarningContext = undefined,
  ReferenceContext = undefined,
  TextContext = undefined
> {
  /**
   * Additional character to accept.
   * This allows other characters, without error, when following an ampersand.
   *
   * @default ''
   */
  additional?: string | null | undefined
  /**
   * Whether to parse `value` as an attribute value.
   * This results in slightly different behavior.
   *
   * @default false
   */
  attribute?: boolean | null | undefined
  /**
   * Whether to allow nonterminated character references.
   * For example, `&copycat` for `©cat`.
   * This behavior is compliant to the spec but can lead to unexpected results.
   *
   * @default true
   */
  nonTerminated?: boolean | null | undefined
  /**
   * Starting `position` of `value` (`Point` or `Position`). Useful when dealing with values nested in some sort of syntax tree.
   */
  position?: Readonly<Position> | Readonly<Point> | null | undefined
  /**
   * Context used when calling `warning`.
   */
  warningContext?: WarningContext | null | undefined
  /**
   * Context used when calling `reference`.
   */
  referenceContext?: ReferenceContext | null | undefined
  /**
   * Context used when calling `text`.
   */
  textContext?: TextContext | null | undefined
  /**
   * Warning handler.
   */
  warning?: WarningHandler<WarningContext> | null | undefined
  /**
   * Reference handler.
   */
  reference?: ReferenceHandler<ReferenceContext> | null | undefined
  /**
   * Text handler.
   */
  text?: TextHandler<TextContext> | null | undefined
}

export {parseEntities} from './lib/index.js'
