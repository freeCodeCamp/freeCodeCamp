/**
 * Checks if the Service Worker API is supproted and available
 * in the current browsing context.
 */
export function supportsServiceWorker(): boolean {
  return (
    typeof navigator !== 'undefined' &&
    'serviceWorker' in navigator &&
    typeof location !== 'undefined' &&
    location.protocol !== 'file:'
  )
}

/**
 * Returns a boolean indicating whether the current browser
 * supports `ReadableStream` as a `Transferable` when posting
 * messages.
 */
export function supportsReadableStreamTransfer() {
  try {
    const stream = new ReadableStream({
      start: (controller) => controller.close(),
    })
    const message = new MessageChannel()
    message.port1.postMessage(stream, [stream])
    return true
  } catch {
    return false
  }
}
