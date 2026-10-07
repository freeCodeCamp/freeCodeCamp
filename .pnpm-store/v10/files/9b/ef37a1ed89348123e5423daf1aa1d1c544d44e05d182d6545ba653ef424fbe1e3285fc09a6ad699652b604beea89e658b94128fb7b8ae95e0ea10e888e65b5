// @vitest-environment jsdom
import { Emitter } from 'strict-event-emitter'
import { createRequestId } from '@mswjs/interceptors'
import type { LifeCycleEventsMap, SharedOptions } from '../sharedOptions'
import type { RequestHandler } from '../handlers/RequestHandler'
import { http } from '../http'
import type { HandleRequestOptions } from './handleRequest'
import { handleRequest } from './handleRequest'
import type { RequiredDeep } from '../typeUtils'
import { HttpResponse } from '../HttpResponse'
import { passthrough } from '../passthrough'

const options: RequiredDeep<SharedOptions> = {
  onUnhandledRequest: vi.fn(),
}
const handleRequestOptions: Partial<Record<keyof HandleRequestOptions, any>> = {
  onPassthroughResponse: vi.fn(),
  onMockedResponse: vi.fn(),
}

function setup() {
  const emitter = new Emitter<LifeCycleEventsMap>()
  const listener = vi.fn()

  const createMockListener = (name: string) => {
    return (...args: any) => {
      listener(name, ...args)
    }
  }

  emitter.on('request:start', createMockListener('request:start'))
  emitter.on('request:match', createMockListener('request:match'))
  emitter.on('request:unhandled', createMockListener('request:unhandled'))
  emitter.on('request:end', createMockListener('request:end'))
  emitter.on('response:mocked', createMockListener('response:mocked'))
  emitter.on('response:bypass', createMockListener('response:bypass'))

  const events = listener.mock.calls
  return { emitter, events }
}

beforeEach(() => {
  vi.spyOn(global.console, 'warn').mockImplementation(() => void 0)
})

afterEach(() => {
  vi.resetAllMocks()
})

test('returns undefined for a request with the "accept: msw/passthrough" header equal to "bypass"', async () => {
  const { emitter, events } = setup()

  const requestId = createRequestId()
  const request = new Request(new URL('http://localhost/user'), {
    headers: new Headers({
      accept: 'msw/passthrough',
    }),
  })
  const handlers: Array<RequestHandler> = []

  const result = await handleRequest(
    request,
    requestId,
    handlers,
    options,
    emitter,
    handleRequestOptions,
  )

  expect(result).toBeUndefined()
  expect(events).toEqual([
    ['request:start', { request, requestId }],
    ['request:end', { request, requestId }],
  ])
  expect(options.onUnhandledRequest).not.toHaveBeenCalled()
  expect(handleRequestOptions.onPassthroughResponse).toHaveBeenNthCalledWith(
    1,
    request,
  )
  expect(handleRequestOptions.onMockedResponse).not.toHaveBeenCalled()
})

test('does not bypass a request with "accept: msw/*" header set to arbitrary value', async () => {
  const { emitter } = setup()

  const request = new Request(new URL('http://localhost/user'), {
    headers: new Headers({
      accept: 'msw/invalid',
    }),
  })
  const handlers: Array<RequestHandler> = [
    http.get('/user', () => {
      return HttpResponse.text('hello world')
    }),
  ]

  const result = await handleRequest(
    request,
    createRequestId(),
    handlers,
    options,
    emitter,
    handleRequestOptions,
  )

  expect(result).not.toBeUndefined()
  expect(options.onUnhandledRequest).not.toHaveBeenCalled()
  expect(handleRequestOptions.onMockedResponse).toHaveBeenCalledTimes(1)
})

test('reports request as unhandled when it has no matching request handlers', async () => {
  const { emitter, events } = setup()

  const requestId = createRequestId()
  const request = new Request(new URL('http://localhost/user'))
  const handlers: Array<RequestHandler> = []

  const result = await handleRequest(
    request,
    requestId,
    handlers,
    options,
    emitter,
    handleRequestOptions,
  )

  expect(result).toBeUndefined()
  expect(events).toEqual([
    ['request:start', { request, requestId }],
    ['request:unhandled', { request, requestId }],
    ['request:end', { request, requestId }],
  ])
  expect(options.onUnhandledRequest).toHaveBeenNthCalledWith(1, request, {
    warning: expect.any(Function),
    error: expect.any(Function),
  })
  expect(handleRequestOptions.onPassthroughResponse).toHaveBeenNthCalledWith(
    1,
    request,
  )
  expect(handleRequestOptions.onMockedResponse).not.toHaveBeenCalled()
})

test('returns undefined on a request handler that returns no response', async () => {
  const { emitter, events } = setup()

  const requestId = createRequestId()
  const request = new Request(new URL('http://localhost/user'))
  const handlers: Array<RequestHandler> = [
    http.get('/user', () => {
      // Intentionally blank response resolver.
      return
    }),
  ]

  const result = await handleRequest(
    request,
    requestId,
    handlers,
    options,
    emitter,
    handleRequestOptions,
  )

  expect(result).toBeUndefined()
  expect(events).toEqual([
    ['request:start', { request, requestId }],
    ['request:end', { request, requestId }],
  ])
  expect(options.onUnhandledRequest).not.toHaveBeenCalled()
  expect(handleRequestOptions.onPassthroughResponse).toHaveBeenNthCalledWith(
    1,
    request,
  )
  expect(handleRequestOptions.onMockedResponse).not.toHaveBeenCalled()

  /**
   * @note Returning undefined from a resolver no longer prints a warning.
   */
  expect(console.warn).toHaveBeenCalledTimes(0)
})

test('returns the mocked response for a request with a matching request handler', async () => {
  const { emitter, events } = setup()

  const requestId = createRequestId()
  const request = new Request(new URL('http://localhost/user'))
  const mockedResponse = HttpResponse.json({ firstName: 'John' })
  const handlers: Array<RequestHandler> = [
    http.get('/user', () => {
      return mockedResponse
    }),
  ]
  const lookupResult = {
    handler: handlers[0],
    response: mockedResponse,
    request,
    parsedResult: {
      match: { matches: true, params: {} },
      cookies: {},
    },
  }

  const result = await handleRequest(
    request,
    requestId,
    handlers,
    options,
    emitter,
    handleRequestOptions,
  )

  expect(result).toEqual(mockedResponse)
  expect(events).toEqual([
    ['request:start', { request, requestId }],
    ['request:match', { request, requestId }],
    ['request:end', { request, requestId }],
  ])
  expect(handleRequestOptions.onPassthroughResponse).not.toHaveBeenCalled()

  expect(handleRequestOptions.onMockedResponse).toHaveBeenCalledTimes(1)
  const [mockedResponseParam, lookupResultParam] =
    handleRequestOptions.onMockedResponse.mock.calls[0]

  expect(mockedResponseParam.status).toBe(mockedResponse.status)
  expect(mockedResponseParam.statusText).toBe(mockedResponse.statusText)
  expect(Object.fromEntries(mockedResponseParam.headers.entries())).toEqual(
    Object.fromEntries(mockedResponse.headers.entries()),
  )

  expect(lookupResultParam).toEqual({
    handler: lookupResult.handler,
    parsedResult: lookupResult.parsedResult,
    response: expect.objectContaining({
      status: lookupResult.response.status,
      statusText: lookupResult.response.statusText,
    }),
  })
})

it('returns undefined without warning on a passthrough request', async () => {
  const { emitter, events } = setup()

  const requestId = createRequestId()
  const request = new Request(new URL('http://localhost/user'))
  const handlers: Array<RequestHandler> = [
    http.get('/user', () => {
      return passthrough()
    }),
  ]

  const result = await handleRequest(
    request,
    requestId,
    handlers,
    options,
    emitter,
    handleRequestOptions,
  )

  expect(result).toBeUndefined()
  expect(events).toEqual([
    ['request:start', { request, requestId }],
    ['request:end', { request, requestId }],
  ])
  expect(options.onUnhandledRequest).not.toHaveBeenCalled()
  expect(handleRequestOptions.onPassthroughResponse).toHaveBeenNthCalledWith(
    1,
    request,
  )
  expect(handleRequestOptions.onMockedResponse).not.toHaveBeenCalled()
})

it('calls the handler with the requestId', async () => {
  const { emitter } = setup()

  const requestId = createRequestId()
  const request = new Request(new URL('http://localhost/user'))
  const handlerFn = vi.fn()
  const handlers: Array<RequestHandler> = [http.get('/user', handlerFn)]

  await handleRequest(
    request,
    requestId,
    handlers,
    options,
    emitter,
    handleRequestOptions,
  )

  expect(handlerFn).toHaveBeenCalledWith(expect.objectContaining({ requestId }))
})

it('marks the first matching one-time handler as used', async () => {
  const { emitter } = setup()

  const oneTimeHandler = http.get(
    '/resource',
    () => {
      return HttpResponse.text('One-time')
    },
    { once: true },
  )
  const anotherHandler = http.get('/resource', () => {
    return HttpResponse.text('Another')
  })
  const handlers: Array<RequestHandler> = [oneTimeHandler, anotherHandler]

  const requestId = createRequestId()
  const request = new Request('http://localhost/resource')
  const firstResult = await handleRequest(
    request,
    requestId,
    handlers,
    options,
    emitter,
    handleRequestOptions,
  )

  expect(await firstResult?.text()).toBe('One-time')
  expect(oneTimeHandler.isUsed).toBe(true)
  expect(anotherHandler.isUsed).toBe(false)

  const secondResult = await handleRequest(
    request,
    requestId,
    handlers,
    options,
    emitter,
    handleRequestOptions,
  )

  expect(await secondResult?.text()).toBe('Another')
  expect(anotherHandler.isUsed).toBe(true)
  expect(oneTimeHandler.isUsed).toBe(true)
})

it('does not mark non-matching one-time handlers as used', async () => {
  const { emitter } = setup()

  const oneTimeHandler = http.get(
    '/resource',
    () => {
      return HttpResponse.text('One-time')
    },
    { once: true },
  )
  const anotherHandler = http.get(
    '/another',
    () => {
      return HttpResponse.text('Another')
    },
    { once: true },
  )
  const handlers: Array<RequestHandler> = [oneTimeHandler, anotherHandler]

  const requestId = createRequestId()
  const firstResult = await handleRequest(
    new Request('http://localhost/another'),
    requestId,
    handlers,
    options,
    emitter,
    handleRequestOptions,
  )

  expect(await firstResult?.text()).toBe('Another')
  expect(oneTimeHandler.isUsed).toBe(false)
  expect(anotherHandler.isUsed).toBe(true)

  const secondResult = await handleRequest(
    new Request('http://localhost/resource'),
    requestId,
    handlers,
    options,
    emitter,
    handleRequestOptions,
  )

  expect(await secondResult?.text()).toBe('One-time')
  expect(anotherHandler.isUsed).toBe(true)
  expect(oneTimeHandler.isUsed).toBe(true)
})

it('handles parallel requests with one-time handlers', async () => {
  const { emitter } = setup()

  const oneTimeHandler = http.get(
    '/resource',
    () => {
      return HttpResponse.text('One-time')
    },
    { once: true },
  )
  const anotherHandler = http.get('/resource', () => {
    return HttpResponse.text('Another')
  })
  const handlers: Array<RequestHandler> = [oneTimeHandler, anotherHandler]

  const requestId = createRequestId()
  const request = new Request('http://localhost/resource')
  const firstResultPromise = handleRequest(
    request,
    requestId,
    handlers,
    options,
    emitter,
    handleRequestOptions,
  )
  const secondResultPromise = handleRequest(
    request,
    requestId,
    handlers,
    options,
    emitter,
    handleRequestOptions,
  )

  const firstResult = await firstResultPromise
  const secondResult = await secondResultPromise

  expect(await firstResult?.text()).toBe('One-time')
  expect(await secondResult?.text()).toBe('Another')
  expect(oneTimeHandler.isUsed).toBe(true)
  expect(anotherHandler.isUsed).toBe(true)
})

describe('[Private] - resolutionContext - used for extensions', () => {
  describe('#baseUrl', () => {
    test('when defined, handle requests to that base url only defining pathnames in the handler', async () => {
      const { emitter } = setup()

      const baseUrl = 'http://this-base-url-works.com'
      const handleRequestOptionsWithBaseUrl: HandleRequestOptions = {
        ...handleRequestOptions,
        resolutionContext: { baseUrl },
      }

      const handler = http.get('/resource', () => {
        return HttpResponse.text('Mocked response')
      })

      const handlers: Array<RequestHandler> = [handler]

      const requestId = createRequestId()
      const request = new Request(new URL('/resource', baseUrl))
      const response = await handleRequest(
        request,
        requestId,
        handlers,
        options,
        emitter,
        handleRequestOptionsWithBaseUrl,
      )

      expect(await response?.text()).toBe('Mocked response')
    })

    test('when defined, do not handle requests to different base urls when defining pathnames in the handler', async () => {
      const { emitter } = setup()

      const baseUrl = 'http://this-base-url-works.com'
      const handleRequestOptionsWithBaseUrl: HandleRequestOptions = {
        ...handleRequestOptions,
        resolutionContext: { baseUrl },
      }

      const handler = http.get('/resource', () => {
        return HttpResponse.text('Mocked response')
      })

      const handlers: Array<RequestHandler> = [handler]

      const requestId = createRequestId()
      const request = new Request(
        new URL('/resource', `http://not-the-base-url.com`),
      )
      const response = await handleRequest(
        request,
        requestId,
        handlers,
        options,
        emitter,
        handleRequestOptionsWithBaseUrl,
      )

      expect(response).toBeUndefined()
    })
  })
})

describe('handler with custom predicate', () => {
  test('matches if custom predicate returns true', async () => {
    const { emitter, events } = setup()

    const requestId = createRequestId()
    const request = new Request(new URL('http://localhost/login'), {
      method: 'POST',
      body: JSON.stringify({ username: 'test', password: 'password' }),
      headers: { 'Content-Type': 'application/json' },
    })
    const handlers: Array<RequestHandler> = [
      http.post(
        async ({ request }) => {
          const body = await request.clone().json()
          return body.username === 'test' && body.password === 'password'
        },
        () =>
          HttpResponse.json({
            success: true,
          }),
      ),
    ]

    const result = await handleRequest(
      request,
      requestId,
      handlers,
      options,
      emitter,
      handleRequestOptions,
    )

    expect(result).toBeDefined()
    expect(await result?.json()).toStrictEqual({ success: true })
    expect(events).toEqual([
      ['request:start', { request, requestId }],
      ['request:match', { request, requestId }],
      ['request:end', { request, requestId }],
    ])
    expect(handleRequestOptions.onMockedResponse).toHaveBeenCalledTimes(1)
  })

  test('does not match if custom predicate returns false', async () => {
    const { emitter, events } = setup()

    const requestId = createRequestId()
    const request = new Request(new URL('http://localhost/login'), {
      method: 'POST',
      body: JSON.stringify({ username: 'test', password: 'passwordd' }),
      headers: { 'Content-Type': 'application/json' },
    })
    const handlers: Array<RequestHandler> = [
      http.post(
        async ({ request }) => {
          const body = await request.clone().json()
          return body.username === 'test' && body.password === 'password'
        },
        () =>
          HttpResponse.json({
            success: true,
          }),
      ),
    ]

    const result = await handleRequest(
      request,
      requestId,
      handlers,
      options,
      emitter,
      handleRequestOptions,
    )

    expect(result).toBeUndefined()
    expect(events).toEqual([
      ['request:start', { request, requestId }],
      ['request:unhandled', { request, requestId }],
      ['request:end', { request, requestId }],
    ])
    expect(options.onUnhandledRequest).toHaveBeenCalledTimes(1)
    expect(handleRequestOptions.onPassthroughResponse).toHaveBeenCalledTimes(1)
  })
})
