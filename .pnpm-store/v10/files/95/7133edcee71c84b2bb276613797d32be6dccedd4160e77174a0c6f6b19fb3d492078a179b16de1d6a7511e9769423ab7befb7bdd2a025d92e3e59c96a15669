// TypeScript Version: 3.4

declare namespace parseEntities {
  interface ParseEntitiesOptions<
    WC = typeof globalThis,
    TC = typeof globalThis,
    RC = typeof globalThis
  > {
    /**
     * Additional character to accept (`string?`, default: `''`).
     * This allows other characters, without error, when following an ampersand.
     */
    additional: string

    /**
     * Whether to parse `value` as an attribute value (`boolean?`, default: `false`).
     */
    attribute: boolean

    /**
     * Whether to allow non-terminated entities (`boolean`, default: `true`).
     * For example, `&copycat` for `©cat`.  This behaviour is spec-compliant but can lead to unexpected results.
     */
    nonTerminated: boolean

    /**
     * Error handler (`Function?`).
     */
    warning: ErrorHandler<WC>

    /**
     * Text handler (`Function?`).
     */
    text: TextHandler<TC>

    /**
     * Reference handler (`Function?`).
     */
    reference: ReferenceHandler<RC>

    /**
     * Context used when invoking `warning` (`'*'`, optional).
     */
    warningContext: WC

    /**
     * Context used when invoking `text` (`'*'`, optional).
     */
    textContext: TC

    /**
     * Context used when invoking `reference` (`'*'`, optional)
     */
    referenceContext: RC

    /**
     * Starting `position` of `value` (`Location` or `Position`, optional).  Useful when dealing with values nested in some sort of syntax tree.
     */
    position: Position
  }

  /**
   * Error handler.
   */
  type ErrorHandler<C> = (
    /**
     * `this` refers to `warningContext` when given to `parseEntities`.
     */
    this: C,

    /**
     * Human-readable reason for triggering a parse error (`string`).
     */
    reason: string,

    /**
     * Place at which the parse error occurred (`Position`).
     */
    position: Position,

    /**
     * Identifier of reason for triggering a parse error (`number`).
     */
    code: number
  ) => void

  /**
   * Text handler.
   */
  type TextHandler<C> = (
    /**
     * `this` refers to `textContext` when given to `parseEntities`.
     */
    this: C,

    /**
     * String of content (`string`).
     */
    value: string,

    /**
     * Location at which `value` starts and ends (`Location`).
     */
    location: Location
  ) => void

  /**
   * Character reference handler.
   */
  type ReferenceHandler<C> = (
    /**
     * `this` refers to `textContext` when given to `parseEntities`.
     */
    this: C,

    /**
     * String of content (`string`).
     */
    value: string,

    /**
     * Location at which `value` starts and ends (`Location`).
     */
    location: Location,

    /**
     * Source of character reference (`Location`).
     */
    source: Location
  ) => void

  interface Position {
    line: number
    column: number
    offset: number
    indent?: number[]
  }

  interface Location {
    start: Position
    end: Position
  }
}

/**
 * Decode special characters in `value`.
 */
declare function parseEntities<
  WC = typeof globalThis,
  TC = typeof globalThis,
  RC = typeof globalThis
>(
  value: string,
  options?: Partial<parseEntities.ParseEntitiesOptions<WC, TC, RC>>
): string

export = parseEntities
