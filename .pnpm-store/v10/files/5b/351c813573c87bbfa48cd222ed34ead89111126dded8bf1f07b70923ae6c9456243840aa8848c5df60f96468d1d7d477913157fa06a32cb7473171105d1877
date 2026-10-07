/**
 * Check if the given character code, or the character code at the first
 * character, is hexadecimal.
 *
 * @param {string|number} character
 * @returns {boolean} Whether `character` is hexadecimal
 */
export function isHexadecimal(character) {
  const code =
    typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 /* a */ && code <= 102) /* z */ ||
    (code >= 65 /* A */ && code <= 70) /* Z */ ||
    (code >= 48 /* A */ && code <= 57) /* Z */
  )
}
