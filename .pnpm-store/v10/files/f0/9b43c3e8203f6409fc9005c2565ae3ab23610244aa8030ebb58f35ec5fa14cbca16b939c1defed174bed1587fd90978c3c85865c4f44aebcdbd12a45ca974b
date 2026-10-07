// @vitest-environment jsdom
import { createRequestId } from '@mswjs/interceptors'
import type { HttpRequestResolverExtras } from './HttpHandler'
import { HttpHandler } from './HttpHandler'
import { HttpResponse } from '..'
import type { ResponseResolver } from './RequestHandler'

const resolver: ResponseResolver<
  HttpRequestResolverExtras<{ userId: string }>
> = ({ params }) => {
  return HttpResponse.json({ userId: params.userId })
}

describe('info', () => {
  it('exposes request handler information', () => {
    const handler = new HttpHandler('GET', '/user/:userId', resolver)

    expect(handler.info.header).toEqual('GET /user/:userId')
    expect(handler.info.method).toEqual('GET')
    expect(handler.info.path).toEqual('/user/:userId')
    expect(handler.isUsed).toBe(false)
  })
})

describe('parse', () => {
  it('parses a URL given a matching request', async () => {
    const handler = new HttpHandler('GET', '/user/:userId', resolver)
    const request = new Request(new URL('/user/abc-123', location.href))

    expect(await handler.parse({ request })).toEqual({
      match: {
        matches: true,
        params: {
          userId: 'abc-123',
        },
      },
      cookies: {},
    })
  })

  it('parses a URL and ignores the request method', async () => {
    const handler = new HttpHandler('GET', '/user/:userId', resolver)
    const request = new Request(new URL('/user/def-456', location.href), {
      method: 'POST',
    })

    expect(await handler.parse({ request })).toEqual({
      match: {
        matches: true,
        params: {
          userId: 'def-456',
        },
      },
      cookies: {},
    })
  })

  it('returns negative match result given a non-matching request', async () => {
    const handler = new HttpHandler('GET', '/user/:userId', resolver)
    const request = new Request(new URL('/login', location.href))

    expect(await handler.parse({ request })).toEqual({
      match: {
        matches: false,
        params: {},
      },
      cookies: {},
    })
  })
})

describe('predicate', () => {
  it('returns true given a matching request', async () => {
    const handler = new HttpHandler('POST', '/login', resolver)
    const request = new Request(new URL('/login', location.href), {
      method: 'POST',
    })

    await expect(
      handler.predicate({
        request,
        parsedResult: await handler.parse({ request }),
      }),
    ).resolves.toBe(true)
  })

  it('supports RegExp as the request method', async () => {
    const handler = new HttpHandler(/.+/, '/login', resolver)
    const requests = [
      new Request(new URL('/login', location.href)),
      new Request(new URL('/login', location.href), { method: 'POST' }),
      new Request(new URL('/login', location.href), { method: 'DELETE' }),
    ]

    for (const request of requests) {
      await expect(
        handler.predicate({
          request,
          parsedResult: await handler.parse({ request }),
        }),
      ).resolves.toBe(true)
    }
  })

  it('returns false given a non-matching request', async () => {
    const handler = new HttpHandler('POST', '/login', resolver)
    const request = new Request(new URL('/user/abc-123', location.href))

    await expect(
      handler.predicate({
        request,
        parsedResult: await handler.parse({ request }),
      }),
    ).resolves.toBe(false)
  })

  it('supports custom predicate function', async () => {
    const handler = new HttpHandler(
      'GET',
      ({ request }) => {
        return new URL(request.url).searchParams.get('a') === '1'
      },
      resolver,
    )

    {
      const request = new Request(new URL('/login?a=1', location.href))
      await expect(
        handler.predicate({
          request,
          parsedResult: await handler.parse({ request }),
        }),
      ).resolves.toBe(true)
    }

    {
      const request = new Request(new URL('/login', location.href))
      await expect(
        handler.predicate({
          request,
          parsedResult: await handler.parse({ request }),
        }),
      ).resolves.toBe(false)
    }
  })
})

describe('test', () => {
  it('returns true given a matching request', async () => {
    const handler = new HttpHandler('GET', '/user/:userId', resolver)
    const firstTest = await handler.test({
      request: new Request(new URL('/user/abc-123', location.href)),
    })
    const secondTest = await handler.test({
      request: new Request(new URL('/user/def-456', location.href)),
    })

    expect(firstTest).toBe(true)
    expect(secondTest).toBe(true)
  })

  it('returns false given a non-matching request', async () => {
    const handler = new HttpHandler('GET', '/user/:userId', resolver)
    const firstTest = await handler.test({
      request: new Request(new URL('/login', location.href)),
    })
    const secondTest = await handler.test({
      request: new Request(new URL('/user/', location.href)),
    })
    const thirdTest = await handler.test({
      request: new Request(new URL('/user/abc-123/extra', location.href)),
    })

    expect(firstTest).toBe(false)
    expect(secondTest).toBe(false)
    expect(thirdTest).toBe(false)
  })
})

describe('run', () => {
  it('returns a mocked response given a matching request', async () => {
    const handler = new HttpHandler('GET', '/user/:userId', resolver)
    const request = new Request(new URL('/user/abc-123', location.href))
    const requestId = createRequestId()
    const result = await handler.run({ request, requestId })

    expect(result!.handler).toEqual(handler)
    expect(result!.parsedResult).toEqual({
      match: {
        matches: true,
        params: {
          userId: 'abc-123',
        },
      },
      cookies: {},
    })
    expect(result!.request.method).toBe('GET')
    expect(result!.request.url).toBe('http://localhost/user/abc-123')
    expect(result!.response?.status).toBe(200)
    expect(result!.response?.statusText).toBe('OK')
    await expect(result?.response?.json()).resolves.toEqual({
      userId: 'abc-123',
    })
  })

  it('returns null given a non-matching request', async () => {
    const handler = new HttpHandler('POST', '/login', resolver)
    const result = await handler.run({
      request: new Request(new URL('/users', location.href)),
      requestId: createRequestId(),
    })

    expect(result).toBeNull()
  })

  it('returns an empty "params" object given request with no URL parameters', async () => {
    const handler = new HttpHandler('GET', '/users', resolver)
    const result = await handler.run({
      request: new Request(new URL('/users', location.href)),
      requestId: createRequestId(),
    })

    expect(result?.parsedResult?.match?.params).toEqual({})
  })

  it('exhausts resolver until its generator completes', async () => {
    const handler = new HttpHandler('GET', '/users', function* () {
      let count = 0

      while (count < 5) {
        count += 1
        yield HttpResponse.text('pending')
      }

      return HttpResponse.text('complete')
    })

    const run = async () => {
      const result = await handler.run({
        request: new Request(new URL('/users', location.href)),
        requestId: createRequestId(),
      })
      return result?.response?.text()
    }

    await expect(run()).resolves.toBe('pending')
    await expect(run()).resolves.toBe('pending')
    await expect(run()).resolves.toBe('pending')
    await expect(run()).resolves.toBe('pending')
    await expect(run()).resolves.toBe('pending')
    await expect(run()).resolves.toBe('complete')
    await expect(run()).resolves.toBe('complete')
  })
})
