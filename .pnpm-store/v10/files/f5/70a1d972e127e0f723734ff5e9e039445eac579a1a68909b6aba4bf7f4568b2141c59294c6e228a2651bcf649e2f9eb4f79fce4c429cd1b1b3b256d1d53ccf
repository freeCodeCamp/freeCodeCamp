import { it, expect } from 'vitest'
import { parse } from 'url'
import { globalAgent as httpGlobalAgent, RequestOptions } from 'http'
import { Agent as HttpsAgent, globalAgent as httpsGlobalAgent } from 'https'
import { getUrlByRequestOptions } from '../../../utils/getUrlByRequestOptions'
import { normalizeClientRequestArgs } from './normalizeClientRequestArgs'

it('handles [string, callback] input', () => {
  const [url, options, callback] = normalizeClientRequestArgs('https:', [
    'https://mswjs.io/resource',
    function cb() {},
  ])

  // URL string must be converted to a URL instance.
  expect(url.href).toEqual('https://mswjs.io/resource')

  // Request options must be derived from the URL instance.
  expect(options).toHaveProperty('method', 'GET')
  expect(options).toHaveProperty('protocol', 'https:')
  expect(options).toHaveProperty('hostname', 'mswjs.io')
  expect(options).toHaveProperty('path', '/resource')

  // Callback must be preserved.
  expect(callback?.name).toEqual('cb')
})

it('handles [string, RequestOptions, callback] input', () => {
  const initialOptions = {
    headers: {
      'Content-Type': 'text/plain',
    },
  }
  const [url, options, callback] = normalizeClientRequestArgs('https:', [
    'https://mswjs.io/resource',
    initialOptions,
    function cb() {},
  ])

  // URL must be created from the string.
  expect(url.href).toEqual('https://mswjs.io/resource')

  // Request options must be preserved.
  expect(options).toHaveProperty('headers', initialOptions.headers)

  // Callback must be preserved.
  expect(callback?.name).toEqual('cb')
})

it('handles [URL, callback] input', () => {
  const [url, options, callback] = normalizeClientRequestArgs('https:', [
    new URL('https://mswjs.io/resource'),
    function cb() {},
  ])

  // URL must be preserved.
  expect(url.href).toEqual('https://mswjs.io/resource')

  // Request options must be derived from the URL instance.
  expect(options.method).toEqual('GET')
  expect(options.protocol).toEqual('https:')
  expect(options.hostname).toEqual('mswjs.io')
  expect(options.path).toEqual('/resource')

  // Callback must be preserved.
  expect(callback?.name).toEqual('cb')
})

it('handles [Absolute Legacy URL, callback] input', () => {
  const [url, options, callback] = normalizeClientRequestArgs('https:', [
    parse('https://cherry:durian@mswjs.io:12345/resource?apple=banana'),
    function cb() {},
  ])

  // URL must be preserved.
  expect(url.toJSON()).toEqual(
    new URL(
      'https://cherry:durian@mswjs.io:12345/resource?apple=banana'
    ).toJSON()
  )

  // Request options must be derived from the URL instance.
  expect(options.method).toEqual('GET')
  expect(options.protocol).toEqual('https:')
  expect(options.hostname).toEqual('mswjs.io')
  expect(options.path).toEqual('/resource?apple=banana')
  expect(options.port).toEqual(12345)
  expect(options.auth).toEqual('cherry:durian')

  // Callback must be preserved.
  expect(callback?.name).toEqual('cb')
})

it('handles [Relative Legacy URL, RequestOptions without path set, callback] input', () => {
  const [url, options, callback] = normalizeClientRequestArgs('http:', [
    parse('/resource?apple=banana'),
    { host: 'mswjs.io' },
    function cb() {},
  ])

  // Correct WHATWG URL generated.
  expect(url.toJSON()).toEqual(
    new URL('http://mswjs.io/resource?apple=banana').toJSON()
  )

  // No path in request options, so legacy url path is copied-in.
  expect(options.protocol).toEqual('http:')
  expect(options.host).toEqual('mswjs.io')
  expect(options.path).toEqual('/resource?apple=banana')

  // Callback must be preserved.
  expect(callback?.name).toEqual('cb')
})

it('handles [Relative Legacy URL, RequestOptions with path set, callback] input', () => {
  const [url, options, callback] = normalizeClientRequestArgs('http:', [
    parse('/resource?apple=banana'),
    { host: 'mswjs.io', path: '/other?cherry=durian' },
    function cb() {},
  ])

  // Correct WHATWG URL generated.
  expect(url.toJSON()).toEqual(
    new URL('http://mswjs.io/other?cherry=durian').toJSON()
  )

  // Path in request options, so that path is preferred.
  expect(options.protocol).toEqual('http:')
  expect(options.host).toEqual('mswjs.io')
  expect(options.path).toEqual('/other?cherry=durian')

  // Callback must be preserved.
  expect(callback?.name).toEqual('cb')
})

it('handles [Relative Legacy URL, callback] input', () => {
  const [url, options, callback] = normalizeClientRequestArgs('http:', [
    parse('/resource?apple=banana'),
    function cb() {},
  ])

  // Correct WHATWG URL generated.
  expect(url.toJSON()).toMatch(
    getUrlByRequestOptions({ path: '/resource?apple=banana' }).toJSON()
  )

  // Check path is in options.
  expect(options.protocol).toEqual('http:')
  expect(options.path).toEqual('/resource?apple=banana')

  // Callback must be preserved.
  expect(callback).toBeTypeOf('function')
  expect(callback?.name).toEqual('cb')
})

it('handles [Relative Legacy URL] input', () => {
  const [url, options, callback] = normalizeClientRequestArgs('http:', [
    parse('/resource?apple=banana'),
  ])

  // Correct WHATWG URL generated.
  expect(url.toJSON()).toMatch(
    getUrlByRequestOptions({ path: '/resource?apple=banana' }).toJSON()
  )

  // Check path is in options.
  expect(options.protocol).toEqual('http:')
  expect(options.path).toEqual('/resource?apple=banana')

  // Callback must be preserved.
  expect(callback).toBeUndefined()
})

it('handles [URL, RequestOptions, callback] input', () => {
  const [url, options, callback] = normalizeClientRequestArgs('https:', [
    new URL('https://mswjs.io/resource'),
    {
      agent: false,
      headers: {
        'Content-Type': 'text/plain',
      },
    },
    function cb() {},
  ])

  // URL must be preserved.
  expect(url.href).toEqual('https://mswjs.io/resource')

  // Options must be preserved.
  // `urlToHttpOptions` from `node:url` generates additional
  // ClientRequest options, some of which are not legally allowed.
  expect(options).toMatchObject<RequestOptions>({
    agent: false,
    _defaultAgent: httpsGlobalAgent,
    protocol: url.protocol,
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain',
    },
    hostname: url.hostname,
    path: url.pathname,
  })

  // Callback must be preserved.
  expect(callback).toBeTypeOf('function')
  expect(callback?.name).toEqual('cb')
})

it('handles [URL, RequestOptions] where options have custom "hostname"', () => {
  const [url, options] = normalizeClientRequestArgs('http:', [
    new URL('http://example.com/path-from-url'),
    {
      hostname: 'host-from-options.com',
    },
  ])
  expect(url.href).toBe('http://host-from-options.com/path-from-url')
  expect(options).toMatchObject({
    hostname: 'host-from-options.com',
    path: '/path-from-url',
  })
})

it('handles [URL, RequestOptions] where options contain "host" and "path" and "port"', () => {
  const [url, options] = normalizeClientRequestArgs('http:', [
    new URL('http://example.com/path-from-url?a=b&c=d'),
    {
      hostname: 'host-from-options.com',
      path: '/path-from-options',
      port: 1234,
    },
  ])
  // Must remove the query string since it's not specified in "options.path"
  expect(url.href).toBe('http://host-from-options.com:1234/path-from-options')
  expect(options).toMatchObject<RequestOptions>({
    hostname: 'host-from-options.com',
    path: '/path-from-options',
    port: 1234,
  })
})

it('handles [URL, RequestOptions] where options contain "path" with query string', () => {
  const [url, options] = normalizeClientRequestArgs('http:', [
    new URL('http://example.com/path-from-url?a=b&c=d'),
    {
      path: '/path-from-options?foo=bar&baz=xyz',
    },
  ])
  expect(url.href).toBe('http://example.com/path-from-options?foo=bar&baz=xyz')
  expect(options).toMatchObject<RequestOptions>({
    hostname: 'example.com',
    path: '/path-from-options?foo=bar&baz=xyz',
  })
})

it('handles [RequestOptions, callback] input', () => {
  const initialOptions = {
    method: 'POST',
    protocol: 'https:',
    host: 'mswjs.io',
    /**
     * @see https://github.com/mswjs/msw/issues/705
     */
    origin: 'https://mswjs.io',
    path: '/resource',
    headers: {
      'Content-Type': 'text/plain',
    },
  }
  const [url, options, callback] = normalizeClientRequestArgs('https:', [
    initialOptions,
    function cb() {},
  ])

  // URL must be derived from request options.
  expect(url.href).toEqual('https://mswjs.io/resource')

  // Request options must be preserved.
  expect(options).toMatchObject(initialOptions)

  // Callback must be preserved.
  expect(callback).toBeTypeOf('function')
  expect(callback?.name).toEqual('cb')
})

it('handles [Empty RequestOptions, callback] input', () => {
  const [_, options, callback] = normalizeClientRequestArgs('https:', [
    {},
    function cb() {},
  ])

  expect(options.protocol).toEqual('https:')

  // Callback must be preserved
  expect(callback?.name).toEqual('cb')
})

/**
 * @see https://github.com/mswjs/interceptors/issues/19
 */
it('handles [PartialRequestOptions, callback] input', () => {
  const initialOptions = {
    method: 'GET',
    port: '50176',
    path: '/resource',
    host: '127.0.0.1',
    ca: undefined,
    key: undefined,
    pfx: undefined,
    cert: undefined,
    passphrase: undefined,
    agent: false,
  }
  const [url, options, callback] = normalizeClientRequestArgs('https:', [
    initialOptions,
    function cb() {},
  ])

  // URL must be derived from request options.
  expect(url.toJSON()).toEqual(
    new URL('https://127.0.0.1:50176/resource').toJSON()
  )

  // Request options must be preserved.
  expect(options).toMatchObject(initialOptions)

  // Options protocol must be inferred from the request issuing module.
  expect(options.protocol).toEqual('https:')

  // Callback must be preserved.
  expect(callback).toBeTypeOf('function')
  expect(callback?.name).toEqual('cb')
})

it('sets the default Agent for HTTP request', () => {
  const [, options] = normalizeClientRequestArgs('http:', [
    'http://github.com',
    {},
  ])

  expect(options._defaultAgent).toEqual(httpGlobalAgent)
})

it('sets the default Agent for HTTPS request', () => {
  const [, options] = normalizeClientRequestArgs('https:', [
    'https://github.com',
    {},
  ])

  expect(options._defaultAgent).toEqual(httpsGlobalAgent)
})

it('preserves a custom default Agent when set', () => {
  const [, options] = normalizeClientRequestArgs('https:', [
    'https://github.com',
    {
      /**
       * @note Intentionally incorrect Agent for HTTPS request.
       */
      _defaultAgent: httpGlobalAgent,
    },
  ])

  expect(options._defaultAgent).toEqual(httpGlobalAgent)
})

it('merges URL-based RequestOptions with the custom RequestOptions', () => {
  const [url, options] = normalizeClientRequestArgs('https:', [
    'https://github.com/graphql',
    {
      method: 'GET',
      pfx: 'PFX_KEY',
    },
  ])

  expect(url.href).toEqual('https://github.com/graphql')

  // Original request options must be preserved.
  expect(options.method).toEqual('GET')
  expect(options.pfx).toEqual('PFX_KEY')

  // Other options must be inferred from the URL.
  expect(options.protocol).toEqual(url.protocol)
  expect(options.hostname).toEqual(url.hostname)
  expect(options.path).toEqual(url.pathname)
})

it('respects custom "options.path" over URL path', () => {
  const [url, options] = normalizeClientRequestArgs('http:', [
    new URL('http://example.com/path-from-url'),
    {
      path: '/path-from-options',
    },
  ])

  expect(url.href).toBe('http://example.com/path-from-options')
  expect(options.protocol).toBe('http:')
  expect(options.hostname).toBe('example.com')
  expect(options.path).toBe('/path-from-options')
})

it('respects custom "options.path" over URL path with query string', () => {
  const [url, options] = normalizeClientRequestArgs('http:', [
    new URL('http://example.com/path-from-url?a=b&c=d'),
    {
      path: '/path-from-options',
    },
  ])

  // Must replace both the path and the query string.
  expect(url.href).toBe('http://example.com/path-from-options')
  expect(options.protocol).toBe('http:')
  expect(options.hostname).toBe('example.com')
  expect(options.path).toBe('/path-from-options')
})

it('preserves URL query string', () => {
  const [url, options] = normalizeClientRequestArgs('http:', [
    new URL('http://example.com:8080/resource?a=b&c=d'),
  ])

  expect(url.href).toBe('http://example.com:8080/resource?a=b&c=d')
  expect(options.protocol).toBe('http:')
  // expect(options.host).toBe('example.com:8080')
  expect(options.hostname).toBe('example.com')
  // Query string is a part of the options path.
  expect(options.path).toBe('/resource?a=b&c=d')
  expect(options.port).toBe(8080)
})
