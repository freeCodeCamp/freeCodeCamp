// @vitest-environment node
import type {
  WebSocketClientConnection,
  WebSocketServerConnection,
} from '@mswjs/interceptors/WebSocket'
import { HttpNetworkFrame } from './frames/http-frame'
import { WebSocketNetworkFrame } from './frames/websocket-frame'
import type { UnhandledFrameCallback } from './on-unhandled-frame'
import { executeUnhandledFrameHandle } from './on-unhandled-frame'

beforeAll(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => void 0)
  vi.spyOn(console, 'error').mockImplementation(() => void 0)
})

afterEach(() => {
  vi.clearAllMocks()
})

afterAll(() => {
  vi.restoreAllMocks()
})

class TestHttpFrame extends HttpNetworkFrame {
  constructor(request: Request) {
    super({ request })
  }

  respondWith = () => {}
  errorWith = () => {}
  passthrough = () => {}
}

class TestWebSocketFrame extends WebSocketNetworkFrame {
  constructor() {
    super({
      connection: {
        client: {
          url: new URL('wss://localhost/test'),
        } as WebSocketClientConnection,
        server: {} as WebSocketServerConnection,
        info: { protocols: [] },
      },
    })
  }

  passthrough = () => {}
  errorWith = () => {}
}

it('does not print any warnings or errors using the "bypass" strategy', async () => {
  await expect(
    executeUnhandledFrameHandle(
      new TestHttpFrame(new Request('http://localhost/test')),
      'bypass',
    ),
  ).resolves.toBeUndefined()
  expect(console.warn).not.toHaveBeenCalled()
  expect(console.error).not.toHaveBeenCalled()
})

it('prints a warning for the HTTP frame using the "warn" strategy', async () => {
  await expect(
    executeUnhandledFrameHandle(
      new TestHttpFrame(new Request('http://localhost/test')),
      'warn',
    ),
  ).resolves.toBeUndefined()

  expect.soft(console.warn).toHaveBeenCalledOnce()
  expect(console.warn).toHaveBeenCalledWith(
    `[MSW] Warning: intercepted a request without a matching request handler:

  • GET http://localhost/test

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`,
  )
  expect(console.error).not.toHaveBeenCalled()
})

it('rejects and prints an error for the HTTP frame using the "error" strategy', async () => {
  await expect(
    executeUnhandledFrameHandle(
      new TestHttpFrame(new Request('http://localhost/test')),
      'error',
    ),
  ).rejects.toThrow(
    `[MSW] Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.`,
  )

  expect.soft(console.error).toHaveBeenCalledOnce()
  expect(console.error).toHaveBeenCalledWith(
    `[MSW] Error: intercepted a request without a matching request handler:

  • GET http://localhost/test

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`,
  )
  expect(console.warn).not.toHaveBeenCalled()
})

it('invokes the custom callback for the HTTP frame', async () => {
  const callback = vi.fn()
  const frame = new TestHttpFrame(new Request('http://localhost/test'))

  await expect(
    executeUnhandledFrameHandle(frame, callback),
  ).resolves.toBeUndefined()

  expect(callback).toHaveBeenCalledOnce()
  expect(callback).toHaveBeenCalledWith({
    defaults: {
      warn: expect.any(Function),
      error: expect.any(Function),
    },
    frame,
  })
})

it('does not print anything for common asset HTTP requests', async () => {
  await expect(
    executeUnhandledFrameHandle(
      new TestHttpFrame(new Request('http://localhost/image.png')),
      'warn',
    ),
  ).resolves.toBeUndefined()

  expect(console.warn).not.toHaveBeenCalled()
  expect(console.error).not.toHaveBeenCalled()

  await expect(
    executeUnhandledFrameHandle(
      new TestHttpFrame(new Request('http://localhost/image.png')),
      'error',
    ),
  ).resolves.toBeUndefined()

  expect(console.warn).not.toHaveBeenCalled()
  expect(console.error).not.toHaveBeenCalled()
})

it('delegates common asset HTTP requests handling to the custom callback', async () => {
  const callback = vi.fn()
  const frame = new TestHttpFrame(new Request('http://localhost/image.png'))

  await expect(
    executeUnhandledFrameHandle(frame, callback),
  ).resolves.toBeUndefined()

  expect(callback).toHaveBeenCalledOnce()
  expect(callback).toHaveBeenCalledWith({
    defaults: {
      warn: expect.any(Function),
      error: expect.any(Function),
    },
    frame,
  })
})

it('supports printing the default warning in the custom callback for the HTTP frame', async () => {
  const callback = vi.fn<UnhandledFrameCallback>(({ defaults }) => {
    defaults.warn()
  })
  const frame = new TestHttpFrame(new Request('http://localhost/test'))

  await expect(
    executeUnhandledFrameHandle(frame, callback),
  ).resolves.toBeUndefined()

  expect(callback).toHaveBeenCalledOnce()
  expect(callback).toHaveBeenCalledWith({
    defaults: {
      warn: expect.any(Function),
      error: expect.any(Function),
    },
    frame,
  })
  expect.soft(console.warn).toHaveBeenCalledOnce()
  expect(console.warn).toHaveBeenCalledWith(
    `[MSW] Warning: intercepted a request without a matching request handler:

  • GET http://localhost/test

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`,
  )
  expect(console.error).not.toHaveBeenCalled()
})

it('supports printing the default error in the custom callback for the HTTP frame', async () => {
  const callback = vi.fn<UnhandledFrameCallback>(({ defaults }) => {
    defaults.error()
  })
  const frame = new TestHttpFrame(new Request('http://localhost/test'))

  await expect(
    executeUnhandledFrameHandle(frame, callback),
  ).resolves.toBeUndefined()

  expect(callback).toHaveBeenCalledOnce()
  expect(callback).toHaveBeenCalledWith({
    defaults: {
      warn: expect.any(Function),
      error: expect.any(Function),
    },
    frame,
  })
  expect.soft(console.error).toHaveBeenCalledOnce()
  expect(console.error).toHaveBeenCalledWith(
    `[MSW] Error: intercepted a request without a matching request handler:

  • GET http://localhost/test

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`,
  )
  expect(console.warn).not.toHaveBeenCalled()
})

it('throws if given an unknown strategy for the HTTP frame', async () => {
  await expect(
    executeUnhandledFrameHandle(
      new TestHttpFrame(new Request('http://localhost/test')),
      // @ts-expect-error Intentionally invalid value.
      'intentionally-invalid',
    ),
  ).rejects.toThrow(
    `[MSW] Failed to react to an unhandled network frame: unknown strategy "intentionally-invalid". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.`,
  )
})

it('prints a warning for the WebSocket frame using the "warn" strategy', async () => {
  await expect(
    executeUnhandledFrameHandle(new TestWebSocketFrame(), 'warn'),
  ).resolves.toBeUndefined()

  expect.soft(console.warn).toHaveBeenCalledOnce()
  expect(console.warn).toHaveBeenCalledWith(
    `[MSW] Warning: intercepted a WebSocket connection without a matching event handler:

  • wss://localhost/test

If you still wish to intercept this unhandled connection, please create an event handler for it.
Read more: https://mswjs.io/docs/websocket`,
  )
  expect(console.error).not.toHaveBeenCalled()
})

it('rejects and prints an error for the WebSocket frame using the "error" strategy', async () => {
  await expect(
    executeUnhandledFrameHandle(new TestWebSocketFrame(), 'error'),
  ).rejects.toThrow(
    `[MSW] Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.`,
  )

  expect.soft(console.error).toHaveBeenCalledOnce()
  expect(console.error).toHaveBeenCalledWith(
    `[MSW] Error: intercepted a WebSocket connection without a matching event handler:

  • wss://localhost/test

If you still wish to intercept this unhandled connection, please create an event handler for it.
Read more: https://mswjs.io/docs/websocket`,
  )
  expect(console.warn).not.toHaveBeenCalled()
})

it('invokes the custom callback for the WebSocket frame', async () => {
  const callback = vi.fn()
  const frame = new TestWebSocketFrame()

  await expect(
    executeUnhandledFrameHandle(frame, callback),
  ).resolves.toBeUndefined()

  expect(callback).toHaveBeenCalledOnce()
  expect(callback).toHaveBeenCalledWith({
    defaults: {
      warn: expect.any(Function),
      error: expect.any(Function),
    },
    frame,
  })
})

it('throws if given an unknown strategy for the WebSocket frame', async () => {
  await expect(
    executeUnhandledFrameHandle(
      new TestWebSocketFrame(),
      // @ts-expect-error Intentionally invalid value.
      'intentionally-invalid',
    ),
  ).rejects.toThrow(
    `[MSW] Failed to react to an unhandled network frame: unknown strategy "intentionally-invalid". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.`,
  )
})

it('supports printing the default warning in the custom callback for the HTTP frame', async () => {
  const callback = vi.fn<UnhandledFrameCallback>(({ defaults }) => {
    defaults.warn()
  })
  const frame = new TestWebSocketFrame()

  await expect(
    executeUnhandledFrameHandle(frame, callback),
  ).resolves.toBeUndefined()

  expect(callback).toHaveBeenCalledOnce()
  expect(callback).toHaveBeenCalledWith({
    defaults: {
      warn: expect.any(Function),
      error: expect.any(Function),
    },
    frame,
  })
  expect.soft(console.warn).toHaveBeenCalledOnce()
  expect(console.warn).toHaveBeenCalledWith(
    `[MSW] Warning: intercepted a WebSocket connection without a matching event handler:

  • wss://localhost/test

If you still wish to intercept this unhandled connection, please create an event handler for it.
Read more: https://mswjs.io/docs/websocket`,
  )
  expect(console.error).not.toHaveBeenCalled()
})

it('supports printing the default error in the custom callback for the HTTP frame', async () => {
  const callback = vi.fn<UnhandledFrameCallback>(({ defaults }) => {
    defaults.error()
  })
  const frame = new TestWebSocketFrame()

  await expect(
    executeUnhandledFrameHandle(frame, callback),
  ).resolves.toBeUndefined()

  expect(callback).toHaveBeenCalledOnce()
  expect(callback).toHaveBeenCalledWith({
    defaults: {
      warn: expect.any(Function),
      error: expect.any(Function),
    },
    frame,
  })
  expect.soft(console.error).toHaveBeenCalledOnce()
  expect(console.error).toHaveBeenCalledWith(
    `[MSW] Error: intercepted a WebSocket connection without a matching event handler:

  • wss://localhost/test

If you still wish to intercept this unhandled connection, please create an event handler for it.
Read more: https://mswjs.io/docs/websocket`,
  )
  expect(console.warn).not.toHaveBeenCalled()
})
