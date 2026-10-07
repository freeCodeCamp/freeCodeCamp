/**
 * Returns a relative URL if the given request URL is relative
 * to the current origin. Otherwise returns an absolute URL.
 */
export function toPublicUrl(url: string | URL): string {
  const urlInstance = url instanceof URL ? url : new URL(url)

  if (
    typeof location !== 'undefined' &&
    urlInstance.origin === location.origin
  ) {
    return urlInstance.pathname
  }

  return urlInstance.origin + urlInstance.pathname
}
