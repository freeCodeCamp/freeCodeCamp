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
declare function isCommonAssetRequest(request: Request): boolean;

export { isCommonAssetRequest };
