/**
 * Determines if the given request is a static asset request.
 * Useful when deciding which unhandled requests to ignore.
 * @note Despite being ignored, you can still intercept and mock
 * static assets by creating request handlers for them.
 *
 * @example
 * import { isCommonAssetRequest } from 'msw'
 *
 * await worker.start({
 *   onUnhandledRequest(request, print) {
 *     if (!isCommonAssetRequest(request)) {
 *       print.warning()
 *     }
 *   }
 * })
 */
export function isCommonAssetRequest(request: Request): boolean {
  const url = new URL(request.url)

  // Ignore certain protocols.
  if (url.protocol === 'file:') {
    return true
  }

  // Ignore static assets hosts.
  if (/(fonts\.googleapis\.com)/.test(url.hostname)) {
    return true
  }

  // Ignore node modules served over HTTP.
  if (/node_modules/.test(url.pathname)) {
    return true
  }

  // Ignore internal Vite requests, like "/@vite/client".
  if (url.pathname.includes('@vite')) {
    return true
  }

  // Ignore common static assets.
  return /\.(s?css|less|m?jsx?|m?tsx?|html|ttf|otf|woff|woff2|eot|gif|jpe?g|png|avif|webp|svg|mp4|webm|ogg|mov|mp3|wav|ogg|flac|aac|pdf|txt|csv|json|xml|md|zip|tar|gz|rar|7z)$/i.test(
    url.pathname,
  )
}
