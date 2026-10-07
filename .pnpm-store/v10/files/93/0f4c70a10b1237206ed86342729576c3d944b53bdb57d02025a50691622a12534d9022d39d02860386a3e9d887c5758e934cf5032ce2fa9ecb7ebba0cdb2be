import { TypedEvent } from 'rettime'
import { until } from 'until-async'
import { createRequestId } from '@mswjs/interceptors'
import {
  NetworkFrame,
  type NetworkFrameResolutionContext,
} from './network-frame'
import { toPublicUrl } from '../../utils/request/toPublicUrl'
import { executeHandlers } from '../../utils/executeHandlers'
import { storeResponseCookies } from '../../utils/request/storeResponseCookies'
import { isPassthroughResponse, shouldBypassRequest } from '../request-utils'
import { devUtils } from '../../utils/internal/devUtils'
import {
  executeUnhandledFrameHandle,
  type UnhandledFrameHandle,
} from '../on-unhandled-frame'
import type { HandlersController } from '../handlers-controller'
import { type AnyHandler } from '../handlers-controller'
import { type RequestHandler } from '../../handlers/RequestHandler'

interface HttpNetworkFrameOptions {
  id?: string
  request: Request
}

export class RequestEvent<
  DataType extends { requestId: string; request: Request } = {
    requestId: string
    request: Request
  },
  ReturnType = void,
  EventType extends string = string,
> extends TypedEvent<DataType, ReturnType, EventType> {
  public readonly requestId: string
  public readonly request: Request

  constructor(type: EventType, data: DataType) {
    super(...([type, {}] as any))
    this.requestId = data.requestId
    this.request = data.request
  }
}

export class ResponseEvent<
  DataType extends {
    requestId: string
    request: Request
    response: Response
  } = {
    requestId: string
    request: Request
    response: Response
  },
  ReturnType = void,
  EventType extends string = string,
> extends TypedEvent<DataType, ReturnType, EventType> {
  public readonly requestId: string
  public readonly request: Request
  public readonly response: Response

  constructor(type: EventType, data: DataType) {
    super(...([type, {}] as any))
    this.requestId = data.requestId
    this.request = data.request
    this.response = data.response
  }
}

export class UnhandledExceptionEvent<
  DataType extends {
    error: Error
    requestId: string
    request: Request
  } = {
    error: Error
    requestId: string
    request: Request
  },
  ReturnType = void,
  EventType extends string = string,
> extends TypedEvent<DataType, ReturnType, EventType> {
  public readonly error: Error
  public readonly requestId: string
  public readonly request: Request

  constructor(type: EventType, data: DataType) {
    super(...([type, {}] as any))
    this.error = data.error
    this.requestId = data.requestId
    this.request = data.request
  }
}

export type HttpNetworkFrameEventMap = {
  'request:start': RequestEvent
  'request:match': RequestEvent
  'request:unhandled': RequestEvent
  'request:end': RequestEvent
  'response:mocked': ResponseEvent
  'response:bypass': ResponseEvent
  unhandledException: UnhandledExceptionEvent
}

export abstract class HttpNetworkFrame extends NetworkFrame<
  'http',
  {
    id: string
    request: Request
  },
  HttpNetworkFrameEventMap
> {
  constructor(options: HttpNetworkFrameOptions) {
    const id = options.id || createRequestId()
    super('http', { id, request: options.request })
  }

  public getHandlers(controller: HandlersController): Array<AnyHandler> {
    return controller.getHandlersByKind('request')
  }

  public abstract respondWith(response?: Response): void

  public async getUnhandledMessage(): Promise<string> {
    const { request } = this.data

    const url = new URL(request.url)
    const publicUrl = toPublicUrl(url) + url.search
    const requestBody =
      request.body == null ? null : await request.clone().text()

    const details = `\n\n  \u2022 ${request.method} ${publicUrl}\n\n${requestBody ? `  \u2022 Request body: ${requestBody}\n\n` : ''}`
    const message = `intercepted a request without a matching request handler:${details}If you still wish to intercept this unhandled request, please create a request handler for it.\nRead more: https://mswjs.io/docs/http/intercepting-requests`

    return message
  }

  public async resolve(
    handlers: Array<RequestHandler>,
    onUnhandledFrame: UnhandledFrameHandle,
    resolutionContext?: NetworkFrameResolutionContext,
  ): Promise<boolean | null> {
    const { id: requestId, request } = this.data
    const requestCloneForLogs = resolutionContext?.quiet
      ? null
      : request.clone()

    this.events.emit(new RequestEvent('request:start', { requestId, request }))

    // Requests wrapped in explicit "bypass(request)".
    if (shouldBypassRequest(request)) {
      this.events.emit(new RequestEvent('request:end', { requestId, request }))
      this.passthrough()
      return null
    }

    const [lookupError, lookupResult] = await until(() => {
      return executeHandlers({
        requestId,
        request,
        handlers,
        resolutionContext: {
          baseUrl: resolutionContext?.baseUrl?.toString(),
          quiet: resolutionContext?.quiet,
        },
      })
    })

    if (lookupError != null) {
      if (
        !this.events.emit(
          new UnhandledExceptionEvent('unhandledException', {
            error: lookupError,
            requestId,
            request,
          }),
        )
      ) {
        // Surface the error to the developer since they haven't handled it.
        console.error(lookupError)
        devUtils.error(
          'Encountered an unhandled exception during the handler lookup for "%s %s". Please see the original error above.',
          request.method,
          request.url,
        )
      }

      this.errorWith(lookupError)
      return null
    }

    // No matching handlers.
    if (lookupResult == null) {
      this.events.emit(
        new RequestEvent('request:unhandled', {
          requestId,
          request,
        }),
      )

      /**
       * @note The unhandled frame handle must be executed during the request resolution
       * since it can influence it (e.g. error the request if the "error" startegy was used).
       */
      await executeUnhandledFrameHandle(this, onUnhandledFrame).then(
        () => this.passthrough(),
        (error) => this.errorWith(error),
      )

      this.events.emit(
        new RequestEvent('request:end', {
          requestId,
          request,
        }),
      )

      return false
    }

    const { response, handler, parsedResult } = lookupResult

    this.events.emit(
      new RequestEvent('request:match', {
        requestId,
        request,
      }),
    )

    // Handlers that returned no mocked response.
    if (response == null) {
      this.events.emit(
        new RequestEvent('request:end', {
          requestId,
          request,
        }),
      )

      this.passthrough()
      return null
    }

    // Handlers that returned explicit `passthrough()`.
    if (isPassthroughResponse(response)) {
      this.events.emit(
        new RequestEvent('request:end', {
          requestId,
          request,
        }),
      )

      this.passthrough()
      return null
    }

    const responseCloneForLogs = resolutionContext?.quiet
      ? null
      : response.clone()

    await storeResponseCookies(request, response)

    this.respondWith(response)

    this.events.emit(
      new RequestEvent('request:end', {
        requestId,
        request,
      }),
    )

    if (!resolutionContext?.quiet) {
      handler.log({
        request: requestCloneForLogs!,
        response: responseCloneForLogs!,
        parsedResult,
      })
    }

    return true
  }
}
