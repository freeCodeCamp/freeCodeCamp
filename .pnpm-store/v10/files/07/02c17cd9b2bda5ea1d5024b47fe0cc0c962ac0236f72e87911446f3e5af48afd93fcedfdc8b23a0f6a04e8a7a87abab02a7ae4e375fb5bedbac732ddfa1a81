import { until } from 'until-async'
import type { Emitter } from 'strict-event-emitter'
import type { LifeCycleEventsMap, SharedOptions } from '../sharedOptions'
import type { RequiredDeep } from '../typeUtils'
import type { RequestHandler } from '../handlers/RequestHandler'
import {
  type HandlersExecutionResult,
  type ResponseResolutionContext,
  executeHandlers,
} from './executeHandlers'
import { onUnhandledRequest } from './request/onUnhandledRequest'
import { storeResponseCookies } from './request/storeResponseCookies'

export interface HandleRequestOptions {
  /**
   * `resolutionContext` is not part of the general public api
   * but is exposed to aid in creating extensions like
   * `@mswjs/http-middleware`.
   */
  resolutionContext?: ResponseResolutionContext

  /**
   * Invoked whenever a request is performed as-is.
   */
  onPassthroughResponse?(request: Request): void

  /**
   * Invoked when the mocked response is ready to be sent.
   */
  onMockedResponse?(
    response: Response,
    handler: RequiredDeep<HandlersExecutionResult>,
  ): void
}

export async function handleRequest(
  request: Request,
  requestId: string,
  handlers: Array<RequestHandler>,
  options: RequiredDeep<SharedOptions>,
  emitter: Emitter<LifeCycleEventsMap>,
  handleRequestOptions?: HandleRequestOptions,
): Promise<Response | undefined> {
  emitter.emit('request:start', { request, requestId })

  // Perform requests wrapped in "bypass()" as-is.
  if (request.headers.get('accept')?.includes('msw/passthrough')) {
    emitter.emit('request:end', { request, requestId })
    handleRequestOptions?.onPassthroughResponse?.(request)
    return
  }

  // Resolve a mocked response from the list of request handlers.
  const [lookupError, lookupResult] = await until(() => {
    return executeHandlers({
      request,
      requestId,
      handlers,
      resolutionContext: handleRequestOptions?.resolutionContext,
    })
  })

  if (lookupError) {
    // Allow developers to react to unhandled exceptions in request handlers.
    emitter.emit('unhandledException', {
      error: lookupError,
      request,
      requestId,
    })
    throw lookupError
  }

  // If the handler lookup returned nothing, no request handler was found
  // matching this request. Report the request as unhandled.
  if (!lookupResult) {
    await onUnhandledRequest(request, options.onUnhandledRequest)
    emitter.emit('request:unhandled', { request, requestId })
    emitter.emit('request:end', { request, requestId })
    handleRequestOptions?.onPassthroughResponse?.(request)
    return
  }

  const { response } = lookupResult

  // When the handled request returned no mocked response, warn the developer,
  // as it may be an oversight on their part. Perform the request as-is.
  if (!response) {
    emitter.emit('request:end', { request, requestId })
    handleRequestOptions?.onPassthroughResponse?.(request)
    return
  }

  // Perform the request as-is when the developer explicitly returned "req.passthrough()".
  // This produces no warning as the request was handled.
  if (
    response.status === 302 &&
    response.headers.get('x-msw-intention') === 'passthrough'
  ) {
    emitter.emit('request:end', { request, requestId })
    handleRequestOptions?.onPassthroughResponse?.(request)
    return
  }

  // Store all the received response cookies in the cookie jar.
  await storeResponseCookies(request, response)

  emitter.emit('request:match', { request, requestId })

  const requiredLookupResult =
    lookupResult as RequiredDeep<HandlersExecutionResult>

  handleRequestOptions?.onMockedResponse?.(response, requiredLookupResult)

  emitter.emit('request:end', { request, requestId })

  return response
}
