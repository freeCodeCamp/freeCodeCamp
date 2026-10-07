import type {
  WebSocketClientConnection,
  WebSocketConnectionData,
  WebSocketData,
} from '@mswjs/interceptors/WebSocket'
import { devUtils } from '../../utils/internal/devUtils'
import { getTimestamp } from '../../utils/logging/getTimestamp'
import { toPublicUrl } from '../../utils/request/toPublicUrl'
import { getMessageLength } from './getMessageLength'
import { getPublicData } from './getPublicData'

export const colors = {
  system: '#3b82f6',
  outgoing: '#22c55e',
  incoming: '#ef4444',
  mocked: '#ff6a33',
}

export function attachWebSocketLogger(
  connection: WebSocketConnectionData,
): () => void {
  const { client, server } = connection
  const controller = new AbortController()

  logConnectionOpen(client)

  // Log the events sent from the WebSocket client.
  // WebSocket client connection object is written from the
  // server's perspective so these message events are outgoing.
  /**
   * @todo Provide the reference to the exact event handler
   * that called this `client.send()`.
   */
  client.addEventListener(
    'message',
    (event) => {
      logOutgoingClientMessage(event)
    },
    { signal: controller.signal },
  )

  client.addEventListener(
    'close',
    (event) => {
      logConnectionClose(event)
    },
    { signal: controller.signal },
  )

  // Log client errors (connection closures due to errors).
  client.socket.addEventListener(
    'error',
    (event) => {
      logClientError(event)
    },
    { signal: controller.signal },
  )

  const { send: originalClientSend } = client
  client.send = new Proxy(client.send, {
    apply(target, thisArg, args) {
      const [data] = args
      const messageEvent = new MessageEvent('message', { data })
      Object.defineProperties(messageEvent, {
        currentTarget: {
          enumerable: true,
          writable: false,
          value: client.socket,
        },
        target: {
          enumerable: true,
          writable: false,
          value: client.socket,
        },
      })

      queueMicrotask(() => {
        logIncomingMockedClientMessage(messageEvent)
      })

      return Reflect.apply(target, thisArg, args)
    },
  })

  server.addEventListener(
    'open',
    () => {
      server.addEventListener('message', (event) => {
        logIncomingServerMessage(event)
      })
    },
    {
      once: true,
      signal: controller.signal,
    },
  )

  // Log outgoing client events initiated by the event handler.
  // The actual client never sent these but the handler did.
  const { send: originalServerSend } = server
  server.send = new Proxy(server.send, {
    apply(target, thisArg, args) {
      const [data] = args
      const messageEvent = new MessageEvent('message', { data })
      Object.defineProperties(messageEvent, {
        currentTarget: {
          enumerable: true,
          writable: false,
          value: server.socket,
        },
        target: {
          enumerable: true,
          writable: false,
          value: server.socket,
        },
      })

      logOutgoingMockedClientMessage(messageEvent)

      return Reflect.apply(target, thisArg, args)
    },
  })

  // Undo method proxies.
  controller.signal.addEventListener(
    'abort',
    () => {
      client.send = originalClientSend
      server.send = originalServerSend
    },
    { once: true },
  )

  return () => {
    controller.abort()
  }
}

/**
 * Prints the WebSocket connection.
 * This is meant to be logged by every WebSocket handler
 * that intercepted this connection. This helps you see
 * what handlers observe this connection.
 */
export function logConnectionOpen(client: WebSocketClientConnection) {
  const publicUrl = toPublicUrl(client.url)

  console.groupCollapsed(
    devUtils.formatMessage(`${getTimestamp()} %c▶%c ${publicUrl}`),
    `color:${colors.system}`,
    'color:inherit',
  )
  // eslint-disable-next-line no-console
  console.log('Client:', client.socket)
  console.groupEnd()
}

function logConnectionClose(event: CloseEvent) {
  const target = event.target as WebSocket
  const publicUrl = toPublicUrl(target.url)

  console.groupCollapsed(
    devUtils.formatMessage(
      `${getTimestamp({ milliseconds: true })} %c■%c ${publicUrl}`,
    ),
    `color:${colors.system}`,
    'color:inherit',
  )
  // eslint-disable-next-line no-console
  console.log(event)
  console.groupEnd()
}

function logClientError(event: Event) {
  const socket = event.target as WebSocket
  const publicUrl = toPublicUrl(socket.url)

  console.groupCollapsed(
    devUtils.formatMessage(
      `${getTimestamp({ milliseconds: true })} %c\u00D7%c ${publicUrl}`,
    ),
    `color:${colors.system}`,
    'color:inherit',
  )
  // eslint-disable-next-line no-console
  console.log(event)
  console.groupEnd()
}

/**
 * Prints the outgoing client message.
 */
async function logOutgoingClientMessage(event: MessageEvent<WebSocketData>) {
  const byteLength = getMessageLength(event.data)
  const publicData = await getPublicData(event.data)
  const arrow = event.defaultPrevented ? '⇡' : '⬆'

  console.groupCollapsed(
    devUtils.formatMessage(
      `${getTimestamp({ milliseconds: true })} %c${arrow}%c ${publicData} %c${byteLength}%c`,
    ),
    `color:${colors.outgoing}`,
    'color:inherit',
    'color:gray;font-weight:normal',
    'color:inherit;font-weight:inherit',
  )
  // eslint-disable-next-line no-console
  console.log(event)
  console.groupEnd()
}

/**
 * Prints the outgoing client message initiated
 * by `server.send()` in the event handler.
 */
async function logOutgoingMockedClientMessage(
  event: MessageEvent<WebSocketData>,
) {
  const byteLength = getMessageLength(event.data)
  const publicData = await getPublicData(event.data)

  console.groupCollapsed(
    devUtils.formatMessage(
      `${getTimestamp({ milliseconds: true })} %c⬆%c ${publicData} %c${byteLength}%c`,
    ),
    `color:${colors.mocked}`,
    'color:inherit',
    'color:gray;font-weight:normal',
    'color:inherit;font-weight:inherit',
  )
  // eslint-disable-next-line no-console
  console.log(event)
  console.groupEnd()
}

/**
 * Prints the outgoing client message initiated
 * by `client.send()` in the event handler.
 */
async function logIncomingMockedClientMessage(
  event: MessageEvent<WebSocketData>,
) {
  const byteLength = getMessageLength(event.data)
  const publicData = await getPublicData(event.data)

  console.groupCollapsed(
    devUtils.formatMessage(
      `${getTimestamp({ milliseconds: true })} %c⬇%c ${publicData} %c${byteLength}%c`,
    ),
    `color:${colors.mocked}`,
    'color:inherit',
    'color:gray;font-weight:normal',
    'color:inherit;font-weight:inherit',
  )
  // eslint-disable-next-line no-console
  console.log(event)
  console.groupEnd()
}

async function logIncomingServerMessage(event: MessageEvent<WebSocketData>) {
  const byteLength = getMessageLength(event.data)
  const publicData = await getPublicData(event.data)
  const arrow = event.defaultPrevented ? '⇣' : '⬇'

  console.groupCollapsed(
    devUtils.formatMessage(
      `${getTimestamp({ milliseconds: true })} %c${arrow}%c ${publicData} %c${byteLength}%c`,
    ),
    `color:${colors.incoming}`,
    'color:inherit',
    'color:gray;font-weight:normal',
    'color:inherit;font-weight:inherit',
  )
  // eslint-disable-next-line no-console
  console.log(event)
  console.groupEnd()
}
