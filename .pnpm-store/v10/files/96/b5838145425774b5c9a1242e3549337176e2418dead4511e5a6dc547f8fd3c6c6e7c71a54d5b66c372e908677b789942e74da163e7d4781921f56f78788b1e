/**
 * Validate the given header value.
 * @see https://fetch.spec.whatwg.org/#header-value
 */
export function isValidHeaderValue(value: unknown): boolean {
  if (typeof value !== 'string') {
    return false
  }

  if (value.trim() !== value) {
    return false
  }

  for (let i = 0; i < value.length; i++) {
    const character = value.charCodeAt(i)

    if (
      // NUL.
      character === 0x00 ||
      // HTTP newline bytes.
      character === 0x0a ||
      character === 0x0d
    ) {
      return false
    }
  }

  return true
}
