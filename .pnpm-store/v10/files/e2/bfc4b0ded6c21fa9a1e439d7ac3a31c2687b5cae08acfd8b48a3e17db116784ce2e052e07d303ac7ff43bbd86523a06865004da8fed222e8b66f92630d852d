// @vitest-environment node
import { it, expect, afterEach } from 'vitest'
import {
  recordRawFetchHeaders,
  restoreHeadersPrototype,
  getRawFetchHeaders,
} from './recordRawHeaders'

const url = 'http://localhost'

afterEach(() => {
  restoreHeadersPrototype()
})

it('returns an empty list if no headers were set', () => {
  expect(getRawFetchHeaders(new Headers())).toEqual([])
  expect(getRawFetchHeaders(new Headers(undefined))).toEqual([])
  expect(getRawFetchHeaders(new Headers({}))).toEqual([])
  expect(getRawFetchHeaders(new Headers([]))).toEqual([])
  expect(getRawFetchHeaders(new Request(url).headers)).toEqual([])
  expect(getRawFetchHeaders(new Response().headers)).toEqual([])
})

it('records raw headers (Headers / object as init)', () => {
  recordRawFetchHeaders()
  const headers = new Headers({
    'Content-Type': 'application/json',
    'X-My-Header': '1',
  })

  expect(getRawFetchHeaders(headers)).toEqual([
    ['Content-Type', 'application/json'],
    ['X-My-Header', '1'],
  ])
  expect(Object.fromEntries(headers)).toEqual({
    'content-type': 'application/json',
    'x-my-header': '1',
  })
})

it('records raw headers (Headers / array as init)', () => {
  recordRawFetchHeaders()
  const headers = new Headers([['X-My-Header', '1']])

  expect(getRawFetchHeaders(headers)).toEqual([['X-My-Header', '1']])
  expect(Object.fromEntries(headers)).toEqual({
    'x-my-header': '1',
  })
})

it('records raw headers (Headers / Headers as init', () => {
  recordRawFetchHeaders()
  const headers = new Headers([['X-My-Header', '1']])

  expect(getRawFetchHeaders(new Headers(headers))).toEqual([
    ['X-My-Header', '1'],
  ])
})

it('records raw headers added via ".set()"', () => {
  recordRawFetchHeaders()
  const headers = new Headers([['X-My-Header', '1']])
  headers.set('X-Another-Header', '2')

  expect(getRawFetchHeaders(headers)).toEqual([
    ['X-My-Header', '1'],
    ['X-Another-Header', '2'],
  ])
})

it('records raw headers added via ".append()"', () => {
  recordRawFetchHeaders()
  const headers = new Headers([['X-My-Header', '1']])
  headers.append('X-My-Header', '2')

  expect(getRawFetchHeaders(headers)).toEqual([
    ['X-My-Header', '1'],
    ['X-My-Header', '2'],
  ])
})

it('deletes the header when called ".delete()"', () => {
  const headers = new Headers([['X-My-Header', '1']])
  headers.delete('X-My-Header')

  expect(getRawFetchHeaders(headers)).toEqual([])
})

it('records raw headers (Request / object as init)', () => {
  recordRawFetchHeaders()
  const request = new Request(url, {
    headers: {
      'Content-Type': 'application/json',
      'X-My-Header': '1',
    },
  })

  expect(getRawFetchHeaders(request.headers)).toEqual([
    ['Content-Type', 'application/json'],
    ['X-My-Header', '1'],
  ])
})

it('records raw headers (Request / array as init)', () => {
  recordRawFetchHeaders()
  const request = new Request(url, {
    headers: [['X-My-Header', '1']],
  })

  expect(getRawFetchHeaders(request.headers)).toEqual([['X-My-Header', '1']])
})

it('records raw headers (Request / Headers as init)', () => {
  recordRawFetchHeaders()
  const headers = new Headers([['X-My-Header', '1']])
  const request = new Request(url, { headers })

  expect(getRawFetchHeaders(request.headers)).toEqual([['X-My-Header', '1']])
})

it('records raw headers (Request / Request as init)', () => {
  recordRawFetchHeaders()
  const init = new Request(url, { headers: [['X-My-Header', '1']] })
  const request = new Request(init)

  expect(getRawFetchHeaders(request.headers)).toEqual([['X-My-Header', '1']])
})

it('preserves headers instanceof (Request / Request as init)', () => {
  recordRawFetchHeaders()
  const init = new Request(url, { headers: [['X-My-Header', '1']] })
  new Request(init)
  expect(init.headers).toBeInstanceOf(Headers)
})

it('preserves headers instanceof (Request / Request with Headers as init)', () => {
  recordRawFetchHeaders()
  const headers = new Headers([['X-My-Header', '1']])
  const init = new Request(url, { headers })
  new Request(init)
  expect(init.headers).toBeInstanceOf(Headers)
})

it('preserves headers instanceof (Response / Response with Headers as init)', () => {
  recordRawFetchHeaders()
  const init = { headers: new Headers([['X-My-Header', '1']]) }
  new Response(url, init)
  expect(init.headers).toBeInstanceOf(Headers)
})

it('records raw headers (Request / Request+Headers as init)', () => {
  recordRawFetchHeaders()
  const init = new Request(url, { headers: [['X-My-Header', '1']] })
  expect(getRawFetchHeaders(init.headers)).toEqual([['X-My-Header', '1']])

  const request = new Request(init, {
    headers: new Headers([['X-Another-Header', '2']]),
  })

  // Must merge the raw headers from the request init
  // and the request instance itself.
  expect(getRawFetchHeaders(request.headers)).toEqual([
    ['X-My-Header', '1'],
    ['X-Another-Header', '2'],
  ])
})

it('records raw headers (Response / object as init)', () => {
  recordRawFetchHeaders()
  const response = new Response(null, {
    headers: {
      'Content-Type': 'application/json',
      'X-My-Header': '1',
    },
  })

  expect(getRawFetchHeaders(response.headers)).toEqual([
    ['Content-Type', 'application/json'],
    ['X-My-Header', '1'],
  ])
})

it('records raw headers (Response / array as init)', () => {
  recordRawFetchHeaders()
  const response = new Response(null, {
    headers: [['X-My-Header', '1']],
  })

  expect(getRawFetchHeaders(response.headers)).toEqual([['X-My-Header', '1']])
})

it('records raw headers (Response / Headers as init)', () => {
  recordRawFetchHeaders()
  const headers = new Headers([['X-My-Header', '1']])
  const response = new Response(null, { headers })

  expect(getRawFetchHeaders(response.headers)).toEqual([['X-My-Header', '1']])
})

it('stops recording once the patches are restored', () => {
  restoreHeadersPrototype()

  const headers = new Headers({ 'X-My-Header': '1' })
  // Must return the normalized headers (no access to raw headers).
  expect(getRawFetchHeaders(headers)).toEqual([['x-my-header', '1']])
})

it('overrides an existing header when calling ".set()"', () => {
  recordRawFetchHeaders()
  const headers = new Headers([['a', '1']])
  expect(headers.get('a')).toBe('1')

  headers.set('a', '2')
  expect(headers.get('a')).toBe('2')

  const headersClone = new Headers(headers)
  expect(headersClone.get('a')).toBe('2')
})

it('overrides an existing multi-value header when calling ".set()"', () => {
  recordRawFetchHeaders()
  const headers = new Headers([
    ['a', '1'],
    ['a', '2'],
  ])
  expect(headers.get('a')).toBe('1, 2')

  headers.set('a', '3')
  expect(headers.get('a')).toBe('3')
})

it('does not throw on using Headers before recording', () => {
  // If the consumer constructs a Headers instance before
  // the interceptor is enabled, it will have no internal symbol set.
  const headers = new Headers()
  recordRawFetchHeaders()
  const request = new Request(url, { headers })

  expect(getRawFetchHeaders(request.headers)).toEqual([])

  request.headers.set('X-My-Header', '1')
  expect(getRawFetchHeaders(request.headers)).toEqual([['X-My-Header', '1']])
})

/**
 * @see https://github.com/mswjs/interceptors/issues/681
 */
it('isolates headers between different headers instances', async () => {
  recordRawFetchHeaders()
  const original = new Headers()
  const firstClone = new Headers(original)
  firstClone.set('Content-Type', 'application/json')
  const secondClone = new Headers(original)

  expect(original.get('Content-Type')).toBeNull()
  expect(firstClone.get('Content-Type')).toBe('application/json')
  expect(secondClone.get('Content-Type')).toBeNull()
})

/**
 * Node.js 24+ may pass additional internal arguments to Headers.prototype.set
 * and Headers.prototype.append. This test ensures we only record the first
 * two arguments (name, value) and ignore any additional internal arguments.
 * @see https://github.com/mswjs/interceptors/issues/762
 */
it('ignores extra internal arguments passed to .set() and .append()', () => {
  recordRawFetchHeaders()
  const headers = new Headers()

  // Simulate Node.js 24+ behavior where internal calls may pass extra arguments
  // by calling the prototype methods directly with additional arguments.
  Headers.prototype.set.call(
    headers,
    'X-Set-Header',
    'set-value',
    // @ts-expect-error Internal argument
    true
  )
  Headers.prototype.append.call(
    headers,
    'X-Append-Header',
    'append-value',
    // @ts-expect-error Internal argument
    true
  )

  expect(getRawFetchHeaders(headers)).toEqual([
    ['X-Set-Header', 'set-value'],
    ['X-Append-Header', 'append-value'],
  ])
})
