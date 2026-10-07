// @vitest-environment jsdom
import type { UnhandledRequestCallback } from './onUnhandledRequest'
import { onUnhandledRequest } from './onUnhandledRequest'

const fixtures = {
  warningWithoutSuggestions: (url = `/api`) => `\
[MSW] Warning: intercepted a request without a matching request handler:

  • GET ${url}

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`,
  warningWithResponseBody: (url = `/api`) => `\
[MSW] Warning: intercepted a request without a matching request handler:

  • POST ${url}

  • Request body: {"variables":{"id":"abc-123"},"query":"query UserName($id: String!) { user(id: $id) { name } }"}

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`,

  errorWithoutSuggestions: `\
[MSW] Error: intercepted a request without a matching request handler:

  • GET /api

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests`,
}

beforeEach(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => void 0)
  vi.spyOn(console, 'error').mockImplementation(() => void 0)
})

afterEach(() => {
  vi.restoreAllMocks()
})

test('supports the "bypass" request strategy', async () => {
  await onUnhandledRequest(
    new Request(new URL('http://localhost/api')),
    'bypass',
  )

  expect(console.warn).not.toHaveBeenCalled()
  expect(console.error).not.toHaveBeenCalled()
})

test('supports the "warn" request strategy', async () => {
  await onUnhandledRequest(new Request(new URL('http://localhost/api')), 'warn')

  expect(console.warn).toHaveBeenCalledWith(
    fixtures.warningWithoutSuggestions(),
  )
})

test('supports the "warn" request strategy with request body', async () => {
  await onUnhandledRequest(
    new Request(new URL('http://localhost/api'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        variables: {
          id: 'abc-123',
        },
        query: 'query UserName($id: String!) { user(id: $id) { name } }',
      }),
    }),
  )

  expect(console.warn).toHaveBeenCalledWith(fixtures.warningWithResponseBody())
})

test('supports the "error" request strategy', async () => {
  await expect(
    onUnhandledRequest(new Request(new URL('http://localhost/api')), 'error'),
  ).rejects.toThrow(
    '[MSW] Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.',
  )

  expect(console.error).toHaveBeenCalledWith(fixtures.errorWithoutSuggestions)
})

test('supports a custom callback function', async () => {
  const callback = vi.fn<UnhandledRequestCallback>((request) => {
    console.warn(`callback: ${request.method} ${request.url}`)
  })
  const request = new Request(new URL('/user', 'http://localhost:3000'))
  await onUnhandledRequest(request, callback)

  expect(callback).toHaveBeenCalledTimes(1)
  expect(callback).toHaveBeenCalledWith(request, {
    warning: expect.any(Function),
    error: expect.any(Function),
  })

  // Check that the custom logic in the callback was called.
  expect(console.warn).toHaveBeenCalledWith(
    `callback: GET http://localhost:3000/user`,
  )
})

test('supports calling default strategies from the custom callback function', async () => {
  const callback = vi.fn<UnhandledRequestCallback>((request, print) => {
    // Call the default "error" strategy.
    print.error()
  })
  const request = new Request(new URL('http://localhost/api'))
  await expect(onUnhandledRequest(request, callback)).rejects.toThrow(
    `[MSW] Cannot bypass a request when using the "error" strategy for the "onUnhandledRequest" option.`,
  )

  expect(callback).toHaveBeenCalledTimes(1)
  expect(callback).toHaveBeenCalledWith(request, {
    warning: expect.any(Function),
    error: expect.any(Function),
  })

  // Check that the default strategy was called.
  expect(console.error).toHaveBeenCalledWith(fixtures.errorWithoutSuggestions)
})

test('does not print any suggestions given no handlers to suggest', async () => {
  await onUnhandledRequest(new Request(new URL('http://localhost/api')), 'warn')

  expect(console.warn).toHaveBeenCalledWith(
    fixtures.warningWithoutSuggestions(),
  )
})

test('throws an exception given unknown request strategy', async () => {
  await expect(
    onUnhandledRequest(
      new Request(new URL('http://localhost/api')),
      // @ts-expect-error Intentional unknown strategy.
      'invalid-strategy',
    ),
  ).rejects.toThrow(
    '[MSW] Failed to react to an unhandled request: unknown strategy "invalid-strategy". Please provide one of the supported strategies ("bypass", "warn", "error") or a custom callback function as the value of the "onUnhandledRequest" option.',
  )
})

test('prints with a relative URL and search params', async () => {
  await onUnhandledRequest(
    new Request(new URL('http://localhost/api?foo=boo')),
    'warn',
  )

  expect(console.warn).toHaveBeenCalledWith(
    fixtures.warningWithoutSuggestions(`/api?foo=boo`),
  )
})

test('prints with an absolute URL and search params', async () => {
  await onUnhandledRequest(
    new Request(new URL('https://mswjs.io/api?foo=boo')),
    'warn',
  )

  expect(console.warn).toHaveBeenCalledWith(
    fixtures.warningWithoutSuggestions(`https://mswjs.io/api?foo=boo`),
  )
})

test('ignores common static assets when using the "warn" strategy', async () => {
  await Promise.allSettled([
    onUnhandledRequest(
      new Request(new URL('https://example.com/main.css')),
      'warn',
    ),
    onUnhandledRequest(
      new Request(new URL('https://example.com/index.mjs')),
      'warn',
    ),
    onUnhandledRequest(
      new Request(new URL('https://example.com/node_modules/abc-123')),
      'warn',
    ),
    onUnhandledRequest(
      new Request(new URL('https://fonts.googleapis.com/some-font')),
      'warn',
    ),
  ])

  expect(console.warn).not.toHaveBeenCalled()
})

test('ignores common static assets when using the "error" strategy', async () => {
  await Promise.allSettled([
    onUnhandledRequest(
      new Request(new URL('https://example.com/main.css')),
      'error',
    ),
    onUnhandledRequest(
      new Request(new URL('https://example.com/index.mjs')),
      'error',
    ),
    onUnhandledRequest(
      new Request(new URL('https://example.com/node_modules/abc-123')),
      'error',
    ),
    onUnhandledRequest(
      new Request(new URL('https://fonts.googleapis.com/some-font')),
      'error',
    ),
  ])

  expect(console.error).not.toHaveBeenCalled()
})

test('exposes common static assets to the explicit callback', async () => {
  let callbackRequest!: Request
  await onUnhandledRequest(
    new Request(new URL('https://example.com/main.css')),
    (request) => {
      callbackRequest = request
    },
  )

  expect(callbackRequest).toBeInstanceOf(Request)
  expect(callbackRequest.url).toBe('https://example.com/main.css')
})
