/**
 * @vitest-environment jsdom
 */
import { bypass } from './bypass'

it('returns bypassed request given a request url string', async () => {
  const request = bypass('https://api.example.com/resource')

  // Relative URLs are rebased against the current location.
  expect(request.method).toBe('GET')
  expect(request.url).toBe('https://api.example.com/resource')
  expect(Array.from(request.headers)).toEqual([['accept', 'msw/passthrough']])
})

it('returns bypassed request given a request url', async () => {
  const request = bypass(new URL('/resource', 'https://api.example.com'))

  expect(request.url).toBe('https://api.example.com/resource')
  expect(Array.from(request.headers)).toEqual([['accept', 'msw/passthrough']])
})

it('returns bypassed request given request instance', async () => {
  const original = new Request('http://localhost/resource', {
    method: 'POST',
    headers: {
      accept: '*/*',
      'X-My-Header': 'value',
    },
    body: 'hello world',
  })
  const request = bypass(original)

  expect(request.method).toBe('POST')
  expect(request.url).toBe('http://localhost/resource')

  const bypassedRequestBody = await request.text()
  expect(original.bodyUsed).toBe(false)

  expect(bypassedRequestBody).toEqual(await original.text())
  expect(Array.from(request.headers)).toEqual([
    ['accept', '*/*, msw/passthrough'],
    ['content-type', 'text/plain;charset=UTF-8'],
    ['x-my-header', 'value'],
  ])
})

it('allows modifying the bypassed request instance', async () => {
  const original = new Request('http://localhost/resource', {
    method: 'POST',
    body: 'hello world',
  })
  const request = bypass(original, {
    method: 'PUT',
    headers: { 'x-modified-header': 'yes' },
  })

  expect(request.method).toBe('PUT')
  expect(Array.from(request.headers)).toEqual([
    ['accept', 'msw/passthrough'],
    ['x-modified-header', 'yes'],
  ])
  expect(original.bodyUsed).toBe(false)
  expect(request.bodyUsed).toBe(false)

  expect(await request.text()).toBe('hello world')
  expect(original.bodyUsed).toBe(false)
})

it('supports bypassing "keepalive: true" requests', async () => {
  const original = new Request('http://localhost/resource', {
    method: 'POST',
    keepalive: true,
  })
  const request = bypass(original)

  expect(request.method).toBe('POST')
  expect(request.url).toBe('http://localhost/resource')
  expect(request.body).toBeNull()
  expect(Array.from(request.headers)).toEqual([['accept', 'msw/passthrough']])
})
