import { createRequestId } from '@mswjs/interceptors'
import type { RequestHandler } from './handlers/RequestHandler'
import {
  executeHandlers,
  type ResponseResolutionContext,
} from './utils/executeHandlers'

/**
 * Finds a response for the given request instance
 * in the array of request handlers.
 * @param handlers The array of request handlers.
 * @param request The `Request` instance.
 * @param resolutionContext Request resolution options.
 * @returns {Response} A mocked response, if any.
 */
export const getResponse = async (
  handlers: Array<RequestHandler>,
  request: Request,
  resolutionContext?: ResponseResolutionContext,
): Promise<Response | undefined> => {
  const result = await executeHandlers({
    request,
    requestId: createRequestId(),
    handlers,
    resolutionContext,
  })

  return result?.response
}
