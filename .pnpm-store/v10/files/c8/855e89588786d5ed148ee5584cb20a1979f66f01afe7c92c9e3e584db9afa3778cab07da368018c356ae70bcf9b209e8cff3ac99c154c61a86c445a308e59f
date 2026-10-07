import type { RequestHandler } from '../handlers/RequestHandler'
import { type RequestHandlerExecutionResult } from '../handlers/RequestHandler'

export interface HandlersExecutionResult {
  handler: RequestHandler
  parsedResult?: any
  response?: Response
}

export interface ResponseResolutionContext {
  /**
   * A base url to use when resolving relative urls.
   * @note This is primarily used by the `@mswjs/http-middleware`
   * to resolve relative urls in the context of the running server
   */
  baseUrl?: string
  quiet?: boolean
}

/**
 * Executes the list of request handlers against the given request.
 * Returns the execution result object containing any matching request
 * handler and any mocked response it returned.
 */
export const executeHandlers = async <Handlers extends Array<RequestHandler>>({
  request,
  requestId,
  handlers,
  resolutionContext,
}: {
  request: Request
  requestId: string
  handlers: Handlers
  resolutionContext?: ResponseResolutionContext
}): Promise<HandlersExecutionResult | null> => {
  let matchingHandler: RequestHandler | null = null
  let result: RequestHandlerExecutionResult<any> | null = null

  for (const handler of handlers) {
    result = await handler.run({ request, requestId, resolutionContext })

    // If the handler produces some result for this request,
    // it automatically becomes matching.
    if (result !== null) {
      matchingHandler = handler
    }

    // Stop the lookup if this handler returns a mocked response.
    // If it doesn't, it will still be considered the last matching
    // handler until any of them returns a response. This way we can
    // distinguish between fallthrough handlers without responses
    // and the lack of a matching handler.
    if (result?.response) {
      break
    }
  }

  if (matchingHandler) {
    return {
      handler: matchingHandler,
      parsedResult: result?.parsedResult,
      response: result?.response,
    }
  }

  return null
}
