/**
 * Assumes true for a non-browser env, otherwise makes a best effort
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState
 */
export function isDocumentVisible(): boolean {
  // `document` may not exist in non-browser envs (like RN)
  if (typeof document === 'undefined') {
    return true
  }
  // Match true for visible, prerender, undefined
  return document.visibilityState !== 'hidden'
}
