/**
 * Parse labels.
 *
 * > 👉 **Note**: labels in markdown are capped at 999 characters in the string.
 *
 * ###### Examples
 *
 * ```markdown
 * [a]
 * [a
 * b]
 * [a\]b]
 * ```
 *
 * @this {TokenizeContext}
 *   Tokenize context.
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {State} nok
 *   State switched to when unsuccessful.
 * @param {TokenType} type
 *   Type of the whole label (`[a]`).
 * @param {TokenType} markerType
 *   Type for the markers (`[` and `]`).
 * @param {TokenType} stringType
 *   Type for the identifier (`a`).
 * @returns {State}
 *   Start state.
 */
export function factoryLabel(
  this: import('micromark-util-types').TokenizeContext,
  effects: Effects,
  ok: State,
  nok: State,
  type: TokenType,
  markerType: TokenType,
  stringType: TokenType
): State
export type Effects = import('micromark-util-types').Effects
export type State = import('micromark-util-types').State
export type TokenizeContext = import('micromark-util-types').TokenizeContext
export type TokenType = import('micromark-util-types').TokenType
