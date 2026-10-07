/**
 * Parse titles.
 *
 * ###### Examples
 *
 * ```markdown
 * "a"
 * 'b'
 * (c)
 * "a
 * b"
 * 'a
 *     b'
 * (a\)b)
 * ```
 *
 * @param {Effects} effects
 *   Context.
 * @param {State} ok
 *   State switched to when successful.
 * @param {State} nok
 *   State switched to when unsuccessful.
 * @param {TokenType} type
 *   Type of the whole title (`"a"`, `'b'`, `(c)`).
 * @param {TokenType} markerType
 *   Type for the markers (`"`, `'`, `(`, and `)`).
 * @param {TokenType} stringType
 *   Type for the value (`a`).
 * @returns {State}
 *   Start state.
 */
export function factoryTitle(
  effects: Effects,
  ok: State,
  nok: State,
  type: TokenType,
  markerType: TokenType,
  stringType: TokenType
): State
export type Code = import('micromark-util-types').Code
export type Effects = import('micromark-util-types').Effects
export type State = import('micromark-util-types').State
export type TokenType = import('micromark-util-types').TokenType
