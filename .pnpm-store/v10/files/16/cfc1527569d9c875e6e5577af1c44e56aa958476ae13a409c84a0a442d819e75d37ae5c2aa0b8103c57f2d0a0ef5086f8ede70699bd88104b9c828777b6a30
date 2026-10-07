// @vitest-environment node
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

test('prints with an absolute URL and search params', async () => {
  await onUnhandledRequest(
    new Request(new URL('https://mswjs.io/api?foo=boo')),
    'warn',
  )

  expect(console.warn).toHaveBeenCalledWith(
    fixtures.warningWithoutSuggestions(`https://mswjs.io/api?foo=boo`),
  )

  await onUnhandledRequest(
    new Request(new URL('http://localhost/api?foo=boo')),
    'warn',
  )

  expect(console.warn).toHaveBeenCalledWith(
    fixtures.warningWithoutSuggestions(`http://localhost/api?foo=boo`),
  )
})
