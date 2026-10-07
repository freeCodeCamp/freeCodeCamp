/**
 * Turn the number (in string form as either hexa- or plain decimal) coming from
 * a numeric character reference into a character.
 *
 * Sort of like `String.fromCharCode(Number.parseInt(value, base))`, but makes
 * non-characters and control characters safe.
 *
 * @param {string} value
 *   Value to decode.
 * @param {number} base
 *   Numeric base.
 * @returns {string}
 *   Character.
 */
export function decodeNumericCharacterReference(value, base) {
  const code = Number.parseInt(value, base)
  if (
    // C0 except for HT, LF, FF, CR, space.
    code < 9 ||
    code === 11 ||
    (code > 13 && code < 32) ||
    // Control character (DEL) of C0, and C1 controls.
    (code > 126 && code < 160) ||
    // Lone high surrogates and low surrogates.
    (code > 55_295 && code < 57_344) ||
    // Noncharacters.
    (code > 64_975 && code < 65_008) /* eslint-disable no-bitwise */ ||
    (code & 65_535) === 65_535 ||
    (code & 65_535) === 65_534 /* eslint-enable no-bitwise */ ||
    // Out of range
    code > 1_114_111
  ) {
    return '\uFFFD'
  }
  return String.fromCharCode(code)
}
