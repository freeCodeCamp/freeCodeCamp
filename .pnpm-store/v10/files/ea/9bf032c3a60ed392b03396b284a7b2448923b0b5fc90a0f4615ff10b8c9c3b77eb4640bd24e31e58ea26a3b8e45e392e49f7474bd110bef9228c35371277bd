/**
 * Removes query parameters and hashes from a given URL.
 */
export function getCleanUrl(url: URL, isAbsolute: boolean = true): string {
  return [isAbsolute && url.origin, url.pathname].filter(Boolean).join('')
}
