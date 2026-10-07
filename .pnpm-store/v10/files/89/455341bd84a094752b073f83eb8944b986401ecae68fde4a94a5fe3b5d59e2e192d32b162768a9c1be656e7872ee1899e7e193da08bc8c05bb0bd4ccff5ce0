// @vitest-environment node-websocket
import { setMaxListeners } from 'node:events'
import { WebSocketClientConnection } from '@mswjs/interceptors/WebSocket'
import type { WebSocketBroadcastChannelMessage } from './WebSocketClientManager'
import { WebSocketClientManager } from './WebSocketClientManager'
import { TestWebSocketTransport } from '../../../test/support/ws-test-utils'

const channel = new BroadcastChannel('test:channel')

/**
 * @note Increase the number of maximum event listeners
 * because the same channel is shared between different
 * manager instances in different tests.
 */
setMaxListeners(Number.MAX_SAFE_INTEGER, channel)

vi.spyOn(channel, 'postMessage')

const socket = new WebSocket('ws://localhost')

afterEach(() => {
  vi.resetAllMocks()
})

it('adds a client from this runtime to the list of clients', async () => {
  const manager = new WebSocketClientManager(channel)
  const connection = new WebSocketClientConnection(
    socket,
    new TestWebSocketTransport(),
  )

  await manager.addConnection(connection)

  // Must add the client to the list of clients.
  expect(Array.from(manager.clients.values())).toEqual([connection])
})

it('adds multiple clients from this runtime to the list of clients', async () => {
  const manager = new WebSocketClientManager(channel)
  const connectionOne = new WebSocketClientConnection(
    socket,
    new TestWebSocketTransport(),
  )
  await manager.addConnection(connectionOne)

  // Must add the client to the list of clients.
  expect(Array.from(manager.clients.values())).toEqual([connectionOne])

  const connectionTwo = new WebSocketClientConnection(
    socket,
    new TestWebSocketTransport(),
  )
  await manager.addConnection(connectionTwo)

  // Must add the new client to the list as well.
  expect(Array.from(manager.clients.values())).toEqual([
    connectionOne,
    connectionTwo,
  ])
})

it('replays a "send" event coming from another runtime', async () => {
  const manager = new WebSocketClientManager(channel)
  const connection = new WebSocketClientConnection(
    socket,
    new TestWebSocketTransport(),
  )
  await manager.addConnection(connection)
  vi.spyOn(connection, 'send')

  // Emulate another runtime signaling this connection to receive data.
  channel.dispatchEvent(
    new MessageEvent<WebSocketBroadcastChannelMessage>('message', {
      data: {
        type: 'extraneous:send',
        payload: {
          clientId: connection.id,
          data: 'hello',
        },
      },
    }),
  )

  await vi.waitFor(() => {
    // Must execute the requested operation on the connection.
    expect(connection.send).toHaveBeenCalledWith('hello')
    expect(connection.send).toHaveBeenCalledTimes(1)
  })
})

it('replays a "close" event coming from another runtime', async () => {
  const manager = new WebSocketClientManager(channel)
  const connection = new WebSocketClientConnection(
    socket,
    new TestWebSocketTransport(),
  )
  await manager.addConnection(connection)
  vi.spyOn(connection, 'close')

  // Emulate another runtime signaling this connection to close.
  channel.dispatchEvent(
    new MessageEvent<WebSocketBroadcastChannelMessage>('message', {
      data: {
        type: 'extraneous:close',
        payload: {
          clientId: connection.id,
          code: 1000,
          reason: 'Normal closure',
        },
      },
    }),
  )

  await vi.waitFor(() => {
    // Must execute the requested operation on the connection.
    expect(connection.close).toHaveBeenCalledWith(1000, 'Normal closure')
    expect(connection.close).toHaveBeenCalledTimes(1)
  })
})

it('removes the extraneous message listener when the connection closes', async () => {
  const manager = new WebSocketClientManager(channel)
  const transport = new TestWebSocketTransport()
  const connection = new WebSocketClientConnection(socket, transport)
  vi.spyOn(connection, 'close').mockImplementationOnce(() => {
    /**
     * @note This is a nasty hack so we don't have to uncouple
     * the connection from transport. Creating a mock transport
     * is difficult because it relies on the `WebSocketOverride` class.
     * All we care here is that closing the connection triggers
     * the transport closure, which it always does.
     */
    transport.dispatchEvent(new Event('close'))
  })
  vi.spyOn(connection, 'send')

  await manager.addConnection(connection)
  connection.close()

  // Signals from other runtimes have no effect on the closed connection.
  channel.dispatchEvent(
    new MessageEvent<WebSocketBroadcastChannelMessage>('message', {
      data: {
        type: 'extraneous:send',
        payload: {
          clientId: connection.id,
          data: 'hello',
        },
      },
    }),
  )

  expect(connection.send).not.toHaveBeenCalled()
})
