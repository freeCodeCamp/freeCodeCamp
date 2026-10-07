import { http } from '../../http'
import { graphql } from '../../graphql'
import { ws } from '../../ws'
import type { WebSocketNetworkFrameEventMap } from './websocket-frame'
import { WebSocketNetworkFrame } from './websocket-frame'
import { createTestWebSocketConnection } from '../../../../test/support/ws-test-utils'
import { InMemoryHandlersController } from '#core/experimental/handlers-controller'

beforeAll(() => {
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  vi.clearAllMocks()
})

afterAll(() => {
  vi.restoreAllMocks()
})

function spyOnWebSocketFrame(frame: WebSocketNetworkFrame) {
  const events: Array<
    WebSocketNetworkFrameEventMap[keyof WebSocketNetworkFrameEventMap]
  > = []

  frame.events.on('*', (event) => events.push(event))

  return {
    events,
  }
}

it('filters only websocket type handlers', async () => {
  class WebSocketFrame extends WebSocketNetworkFrame {
    passthrough = vi.fn()
    errorWith = vi.fn()
  }

  const connection = createTestWebSocketConnection('ws://localhost/api')
  const frame = new WebSocketFrame({ connection })

  const httpHandlers = [http.post('http://localhost/api/user', () => {})]
  const graphqlHandlers = [graphql.query('GetUser', () => {})]
  const webSocketHandlers = [
    ws.link('ws://localhost').addEventListener('connection', () => {}),
  ]

  const controller = new InMemoryHandlersController([
    ...httpHandlers,
    ...webSocketHandlers,
    ...graphqlHandlers,
  ])

  expect(frame.getHandlers(controller)).toEqual(webSocketHandlers)
  expect(frame.getHandlers(new InMemoryHandlersController([]))).toEqual([])
})

it('resolves a matching connection', async () => {
  class WebSocketFrame extends WebSocketNetworkFrame {
    passthrough = vi.fn()
    errorWith = vi.fn()
  }

  const connection = createTestWebSocketConnection('ws://localhost/api')
  const frame = new WebSocketFrame({ connection })
  const { events } = spyOnWebSocketFrame(frame)

  const connectionListener = vi.fn()
  const unhandledFrameCallback = vi.fn()

  const api = ws.link('ws://localhost/api')
  const matches = await frame.resolve(
    [api.addEventListener('connection', connectionListener)],
    unhandledFrameCallback,
    { quiet: true },
  )

  expect.soft(matches).toBe(true)
  expect
    .soft(connectionListener)
    .toHaveBeenCalledExactlyOnceWith(expect.objectContaining(connection))
  expect.soft(frame.passthrough).not.toHaveBeenCalled()
  expect.soft(frame.errorWith).not.toHaveBeenCalled()
  expect.soft(unhandledFrameCallback).not.toHaveBeenCalled()
  expect.soft(events).toEqual([
    expect.objectContaining({
      type: 'connection',
      url: connection.client.url,
      protocols: connection.info.protocols,
    }),
  ])
})

it('resolves a connection when there are no handlers', async () => {
  class WebSocketFrame extends WebSocketNetworkFrame {
    passthrough = vi.fn()
    errorWith = vi.fn()
  }

  const connection = createTestWebSocketConnection('ws://localhost/api')
  const frame = new WebSocketFrame({ connection })
  const { events } = spyOnWebSocketFrame(frame)

  const connectionListener = vi.fn()
  const unhandledFrameCallback = vi.fn()

  const matches = await frame.resolve([], unhandledFrameCallback, {
    quiet: true,
  })

  expect.soft(matches).toBe(false)
  expect.soft(frame.passthrough).toHaveBeenCalledOnce()
  expect.soft(connectionListener).not.toHaveBeenCalled()
  expect.soft(frame.errorWith).not.toHaveBeenCalled()
  expect.soft(unhandledFrameCallback).toHaveBeenCalledExactlyOnceWith(
    expect.objectContaining({
      frame,
    }),
  )
  expect.soft(events).toEqual([
    expect.objectContaining({
      type: 'connection',
      url: connection.client.url,
      protocols: connection.info.protocols,
    }),
  ])
})

it('resolves a non-matching connection', async () => {
  class WebSocketFrame extends WebSocketNetworkFrame {
    passthrough = vi.fn()
    errorWith = vi.fn()
  }

  const connection = createTestWebSocketConnection('ws://localhost/api')
  const frame = new WebSocketFrame({ connection })
  const { events } = spyOnWebSocketFrame(frame)

  const connectionListener = vi.fn()
  const unhandledFrameCallback = vi.fn()

  const api = ws.link('ws://example.com/api')
  const matches = await frame.resolve(
    [api.addEventListener('connection', connectionListener)],
    unhandledFrameCallback,
    { quiet: true },
  )

  expect.soft(matches).toBe(false)
  expect.soft(frame.passthrough).toHaveBeenCalledOnce()
  expect.soft(connectionListener).not.toHaveBeenCalled()
  expect.soft(frame.errorWith).not.toHaveBeenCalled()
  expect.soft(unhandledFrameCallback).toHaveBeenCalledExactlyOnceWith(
    expect.objectContaining({
      frame,
    }),
  )
  expect.soft(events).toEqual([
    expect.objectContaining({
      type: 'connection',
      url: connection.client.url,
      protocols: connection.info.protocols,
    }),
  ])
})

it('returns null and prints the error on unhandled exception', async () => {
  class WebSocketFrame extends WebSocketNetworkFrame {
    passthrough = vi.fn()
    errorWith = vi.fn()
  }

  const connection = createTestWebSocketConnection('ws://localhost/api')
  const frame = new WebSocketFrame({ connection })
  const { events } = spyOnWebSocketFrame(frame)

  const unhandledFrameCallback = vi.fn()

  const api = ws.link('ws://localhost/api')
  const exception = new Error('Unhandled exceptin')

  await expect
    .soft(
      frame.resolve(
        [
          api.addEventListener('connection', () => {
            throw exception
          }),
        ],
        unhandledFrameCallback,
        { quiet: true },
      ),
    )
    .rejects.toThrow(exception)
  expect.soft(frame.errorWith).not.toHaveBeenCalled()
  expect.soft(frame.passthrough).not.toHaveBeenCalled()
  expect.soft(unhandledFrameCallback).not.toHaveBeenCalled()
  expect.soft(events).toEqual([
    expect.objectContaining({
      type: 'connection',
      url: connection.client.url,
      protocols: connection.info.protocols,
    }),
    expect.objectContaining({
      type: 'unhandledException',
      error: exception,
      url: connection.client.url,
      protocols: connection.info.protocols,
    }),
  ])

  expect.soft(console.error).toHaveBeenCalledTimes(2)
  expect.soft(console.error).toHaveBeenNthCalledWith(1, exception)
  expect
    .soft(console.error)
    .toHaveBeenNthCalledWith(
      2,
      '[MSW] Encountered an unhandled exception during the handler lookup for "ws://localhost/api". Please see the original error above.',
    )
})

it('does not print an unhandled exception if the "unhandledException" listener is present', async () => {
  class WebSocketFrame extends WebSocketNetworkFrame {
    passthrough = vi.fn()
    errorWith = vi.fn()
  }

  const connection = createTestWebSocketConnection('ws://localhost/api')
  const frame = new WebSocketFrame({ connection })
  const { events } = spyOnWebSocketFrame(frame)

  const unhandledExceptionListener = vi.fn()
  frame.events.on('unhandledException', unhandledExceptionListener)

  const unhandledFrameCallback = vi.fn()

  const api = ws.link('ws://localhost/api')
  const exception = new Error('Unhandled exception')

  await expect
    .soft(
      frame.resolve(
        [
          api.addEventListener('connection', () => {
            throw exception
          }),
        ],
        unhandledFrameCallback,
        { quiet: true },
      ),
    )
    .rejects.toThrow(exception)
  expect.soft(frame.errorWith).not.toHaveBeenCalled()
  expect.soft(frame.passthrough).not.toHaveBeenCalled()
  expect.soft(unhandledFrameCallback).not.toHaveBeenCalled()
  expect.soft(events).toEqual([
    expect.objectContaining({
      type: 'connection',
      url: connection.client.url,
      protocols: connection.info.protocols,
    }),
    expect.objectContaining({
      type: 'unhandledException',
      error: exception,
      url: connection.client.url,
      protocols: connection.info.protocols,
    }),
  ])

  expect.soft(unhandledExceptionListener).toHaveBeenCalledExactlyOnceWith(
    expect.objectContaining({
      error: exception,
      url: connection.client.url,
      protocols: connection.info.protocols,
    }),
  )
  expect.soft(console.error).not.toHaveBeenCalled()
})
