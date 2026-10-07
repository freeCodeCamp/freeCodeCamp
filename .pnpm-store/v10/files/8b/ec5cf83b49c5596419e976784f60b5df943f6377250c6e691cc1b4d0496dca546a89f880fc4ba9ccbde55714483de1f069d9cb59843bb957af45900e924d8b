/**
 * Assumes a browser is online if `undefined`, otherwise makes a best effort
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine
 */
export function isOnline() {
  // We set the default config value in the store, so we'd need to check for this in a SSR env
  return typeof navigator === 'undefined'
    ? true
    : navigator.onLine === undefined
      ? true
      : navigator.onLine
}
