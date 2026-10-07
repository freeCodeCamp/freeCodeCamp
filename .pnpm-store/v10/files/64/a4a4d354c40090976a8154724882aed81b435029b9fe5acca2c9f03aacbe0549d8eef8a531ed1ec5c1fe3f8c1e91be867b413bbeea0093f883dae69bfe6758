/**
 * Returns a boolean indicating whether the given URL string
 * can be parsed into a `URL` instance.
 * A substitute for `URL.canParse()` for Node.js 18.
 */
export function canParseUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch (_error) {
    return false
  }
}
