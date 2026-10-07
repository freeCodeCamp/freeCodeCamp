import { ChildProcess } from 'child_process'
import { HttpRequestEventMap } from './glossary'
import { Interceptor } from './Interceptor'
import { BatchInterceptor } from './BatchInterceptor'
import { ClientRequestInterceptor } from './interceptors/ClientRequest'
import { XMLHttpRequestInterceptor } from './interceptors/XMLHttpRequest'
import { FetchInterceptor } from './interceptors/fetch'
import { handleRequest } from './utils/handleRequest'
import { RequestController } from './RequestController'
import { FetchRequest, FetchResponse } from './utils/fetchUtils'
import { isResponseError } from './utils/responseUtils'

export interface SerializedRequest {
  id: string
  url: string
  method: string
  headers: Array<[string, string]>
  credentials: RequestCredentials
  body: string
}

interface RevivedRequest extends Omit<SerializedRequest, 'url' | 'headers'> {
  url: URL
  headers: Headers
}

export interface SerializedResponse {
  status: number
  statusText: string
  headers: Array<[string, string]>
  body: string
}

export class RemoteHttpInterceptor extends BatchInterceptor<
  [ClientRequestInterceptor, XMLHttpRequestInterceptor, FetchInterceptor]
> {
  constructor() {
    super({
      name: 'remote-interceptor',
      interceptors: [
        new ClientRequestInterceptor(),
        new XMLHttpRequestInterceptor(),
        new FetchInterceptor(),
      ],
    })
  }

  protected setup() {
    super.setup()

    let handleParentMessage: NodeJS.MessageListener

    this.on('request', async ({ request, requestId, controller }) => {
      // Send the stringified intercepted request to
      // the parent process where the remote resolver is established.
      const serializedRequest = JSON.stringify({
        id: requestId,
        method: request.method,
        url: request.url,
        headers: Array.from(request.headers.entries()),
        credentials: request.credentials,
        body: ['GET', 'HEAD'].includes(request.method)
          ? null
          : await request.text(),
      } as SerializedRequest)

      this.logger.info(
        'sent serialized request to the child:',
        serializedRequest
      )

      process.send?.(`request:${serializedRequest}`)

      const responsePromise = new Promise<void>((resolve) => {
        handleParentMessage = (message) => {
          if (typeof message !== 'string') {
            return resolve()
          }

          if (message.startsWith(`response:${requestId}`)) {
            const [, serializedResponse] =
              message.match(/^response:.+?:(.+)$/) || []

            if (!serializedResponse) {
              return resolve()
            }

            const responseInit = JSON.parse(
              serializedResponse
            ) as SerializedResponse

            const mockedResponse = new FetchResponse(responseInit.body, {
              url: request.url,
              status: responseInit.status,
              statusText: responseInit.statusText,
              headers: responseInit.headers,
            })

            /**
             * @todo Support "errorWith" as well.
             * This response handling from the child is incomplete.
             */

            controller.respondWith(mockedResponse)
            return resolve()
          }
        }
      })

      // Listen for the mocked response message from the parent.
      this.logger.info(
        'add "message" listener to the parent process',
        handleParentMessage
      )
      process.addListener('message', handleParentMessage)

      return responsePromise
    })

    this.subscriptions.push(() => {
      process.removeListener('message', handleParentMessage)
    })
  }
}

export function requestReviver(key: string, value: any) {
  switch (key) {
    case 'url':
      return new URL(value)

    case 'headers':
      return new Headers(value)

    default:
      return value
  }
}

export interface RemoveResolverOptions {
  process: ChildProcess
}

export class RemoteHttpResolver extends Interceptor<HttpRequestEventMap> {
  static symbol = Symbol('remote-resolver')
  private process: ChildProcess

  constructor(options: RemoveResolverOptions) {
    super(RemoteHttpResolver.symbol)
    this.process = options.process
  }

  protected setup() {
    const logger = this.logger.extend('setup')

    const handleChildMessage: NodeJS.MessageListener = async (message) => {
      logger.info('received message from child!', message)

      if (typeof message !== 'string' || !message.startsWith('request:')) {
        logger.info('unknown message, ignoring...')
        return
      }

      const [, serializedRequest] = message.match(/^request:(.+)$/) || []
      if (!serializedRequest) {
        return
      }

      const requestJson = JSON.parse(
        serializedRequest,
        requestReviver
      ) as RevivedRequest

      logger.info('parsed intercepted request', requestJson)

      const request = new FetchRequest(requestJson.url, {
        method: requestJson.method,
        headers: new Headers(requestJson.headers),
        credentials: requestJson.credentials,
        body: requestJson.body,
      })

      const controller = new RequestController(request, {
        passthrough: () => {},
        respondWith: async (response) => {
          if (isResponseError(response)) {
            this.logger.info('received a network error!', { response })
            throw new Error('Not implemented')
          }

          this.logger.info('received mocked response!', { response })

          const responseClone = FetchResponse.clone(response)
          const responseText = await responseClone.text()

          // // Send the mocked response to the child process.
          const serializedResponse = JSON.stringify({
            status: response.status,
            statusText: response.statusText,
            headers: Array.from(response.headers.entries()),
            body: responseText,
          } as SerializedResponse)

          this.process.send(
            `response:${requestJson.id}:${serializedResponse}`,
            (error) => {
              if (error) {
                return
              }

              // Emit an optimistic "response" event at this point,
              // not to rely on the back-and-forth signaling for the sake of the event.
              this.emitter.emit('response', {
                request,
                requestId: requestJson.id,
                response: responseClone,
                isMockedResponse: true,
              })
            }
          )

          logger.info(
            'sent serialized mocked response to the parent:',
            serializedResponse
          )
        },
        errorWith: (reason) => {
          this.logger.info('request has errored!', { error: reason })
          throw new Error('Not implemented')
        },
      })

      await handleRequest({
        request,
        requestId: requestJson.id,
        controller,
        emitter: this.emitter,
      })
    }

    this.subscriptions.push(() => {
      this.process.removeListener('message', handleChildMessage)
      logger.info('removed the "message" listener from the child process!')
    })

    logger.info('adding a "message" listener to the child process')
    this.process.addListener('message', handleChildMessage)

    this.process.once('error', () => this.dispose())
    this.process.once('exit', () => this.dispose())
  }
}
