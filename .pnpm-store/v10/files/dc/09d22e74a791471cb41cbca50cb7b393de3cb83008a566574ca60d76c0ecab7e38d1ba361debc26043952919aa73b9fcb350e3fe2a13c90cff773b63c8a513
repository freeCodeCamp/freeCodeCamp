export const REQUEST_INTENTION_HEADER_NAME = 'x-msw-intention'

export enum RequestIntention {
  passthrough = 'passthrough',
}

export function shouldBypassRequest(request: Request): boolean {
  return !!request.headers.get('accept')?.includes('msw/passthrough')
}

export function isPassthroughResponse(response: Response): boolean {
  return (
    response.status === 302 &&
    response.headers.get(REQUEST_INTENTION_HEADER_NAME) ===
      RequestIntention.passthrough
  )
}

/**
 * Remove the internal passthrough instruction from the request's `Accept` header.
 */
export function deleteRequestPassthroughHeader(request: Request): void {
  const acceptHeader = request.headers.get('accept')

  /**
   * @note Remove the internal bypass request header.
   * In the browser, this is done by the worker script.
   * In Node.js, it has to be done here.
   */
  if (acceptHeader) {
    const nextAcceptHeader = acceptHeader.replace(/(,\s+)?msw\/passthrough/, '')

    if (nextAcceptHeader) {
      request.headers.set('accept', nextAcceptHeader)
    } else {
      request.headers.delete('accept')
    }
  }
}
