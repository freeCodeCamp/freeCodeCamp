import type { WebSocketConnectionData } from '@mswjs/interceptors/WebSocket'
import type { RequestHandler } from '../handlers/RequestHandler'
import type { WebSocketHandler } from '../handlers/WebSocketHandler'
import { webSocketInterceptor } from './webSocketInterceptor'
import {
  onUnhandledRequest,
  type UnhandledRequestStrategy,
} from '../utils/request/onUnhandledRequest'
import { isHandlerKind } from '../utils/internal/isHandlerKind'

interface HandleWebSocketEventOptions {
  getUnhandledRequestStrategy: () => UnhandledRequestStrategy
  getHandlers: () => Array<RequestHandler | WebSocketHandler>
  onMockedConnection: (connection: WebSocketConnectionData) => void
  onPassthroughConnection: (onnection: WebSocketConnectionData) => void
}

export function handleWebSocketEvent(options: HandleWebSocketEventOptions) {
  webSocketInterceptor.on('connection', async (connection) => {
    /**
     * @todo @fixme Reference the handlers controller here and use `.getHandlersByKind`.
     * That one relies on the pre-grouped handlers map and will be more performant.
     */
    const handlers = options.getHandlers().filter(isHandlerKind('websocket'))

    // Ignore this connection if the user hasn't defined any handlers.
    if (handlers.length > 0) {
      options?.onMockedConnection(connection)

      await Promise.all(
        handlers.map((handler) => {
          // Iterate over the handlers and forward the connection
          // event to WebSocket event handlers. This is equivalent
          // to dispatching that event onto multiple listeners.
          return handler.run(connection)
        }),
      )

      return
    }

    // Construct a request representing this WebSocket connection.
    const request = new Request(connection.client.url, {
      headers: {
        upgrade: 'websocket',
        connection: 'upgrade',
      },
    })
    await onUnhandledRequest(
      request,
      options.getUnhandledRequestStrategy(),
    ).catch((error) => {
      const errorEvent = new Event('error')
      Object.defineProperty(errorEvent, 'cause', {
        enumerable: true,
        configurable: false,
        value: error,
      })
      connection.client.socket.dispatchEvent(errorEvent)
    })

    options?.onPassthroughConnection(connection)

    // If none of the "ws" handlers matched,
    // establish the WebSocket connection as-is.
    connection.server.connect()
  })
}
