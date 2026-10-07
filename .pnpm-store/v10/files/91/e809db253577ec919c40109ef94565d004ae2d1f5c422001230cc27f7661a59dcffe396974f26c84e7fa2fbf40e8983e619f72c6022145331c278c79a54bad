import { isAbsoluteUrl } from './isAbsoluteUrl'

/**
 * Returns an absolute URL based on the given path.
 */
export function getAbsoluteUrl(path: string, baseUrl?: string): string {
  // already absolute URL
  if (isAbsoluteUrl(path)) {
    return path
  }

  // Ignore path with pattern start with *
  if (path.startsWith('*')) {
    return path
  }

  // Resolve a relative request URL against a given custom "baseUrl"
  // or the document baseURI (in the case of browser/browser-like environments).
  const origin = baseUrl || (typeof location !== 'undefined' && location.href)

  return origin
    ? // Encode and decode the path to preserve escaped characters.
      decodeURI(new URL(encodeURI(path), origin).href)
    : path
}
