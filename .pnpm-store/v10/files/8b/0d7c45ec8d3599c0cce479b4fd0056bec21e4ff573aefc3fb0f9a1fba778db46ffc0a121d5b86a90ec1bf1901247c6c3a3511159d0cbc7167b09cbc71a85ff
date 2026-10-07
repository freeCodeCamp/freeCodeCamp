/**
 * Validate the given header name.
 * @see https://fetch.spec.whatwg.org/#header-name
 */
export function isValidHeaderName(value: unknown) {
  if (typeof value !== 'string') {
    return false
  }

  if (value.length === 0) {
    return false
  }

  for (let i = 0; i < value.length; i++) {
    const character = value.charCodeAt(i)

    if (character > 0x7f || !isToken(character)) {
      return false
    }
  }

  return true
}

function isToken(value: string | number): boolean {
  return ![
    0x7f,
    0x20,
    '(',
    ')',
    '<',
    '>',
    '@',
    ',',
    ';',
    ':',
    '\\',
    '"',
    '/',
    '[',
    ']',
    '?',
    '=',
    '{',
    '}',
  ].includes(value)
}
