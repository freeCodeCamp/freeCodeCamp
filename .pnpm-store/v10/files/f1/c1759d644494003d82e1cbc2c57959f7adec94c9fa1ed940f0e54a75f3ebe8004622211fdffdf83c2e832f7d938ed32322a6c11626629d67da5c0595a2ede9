// @vitest-environment node
import { http } from './http'
import { getResponse } from './getResponse'

it('returns undefined given empty headers array', async () => {
  await expect(
    getResponse([], new Request('http://localhost/')),
  ).resolves.toBeUndefined()
})

it('returns undefined given no matching handlers', async () => {
  await expect(
    getResponse(
      [http.get('/product', () => void 0)],
      new Request('http://localhost/user'),
    ),
  ).resolves.toBeUndefined()
})

it('returns undefined given a matching handler that returned no response', async () => {
  await expect(
    getResponse(
      [http.get('*/user', () => void 0)],
      new Request('http://localhost/user'),
    ),
  ).resolves.toBeUndefined()
})

it('returns undefined given a matching handler that returned explicit undefined', async () => {
  await expect(
    getResponse(
      [http.get('*/user', () => undefined)],
      new Request('http://localhost/user'),
    ),
  ).resolves.toBeUndefined()
})

it('returns the response returned from a matching handler', async () => {
  const response = await getResponse(
    [http.get('*/user', () => Response.json({ name: 'John' }))],
    new Request('http://localhost/user'),
  )

  expect(response?.status).toBe(200)
  expect(response?.headers.get('Content-Type')).toBe('application/json')
  await expect(response?.json()).resolves.toEqual({ name: 'John' })
})

it('returns the response from the first matching handler if multiple match', async () => {
  const response = await getResponse(
    [
      http.get('*/user', () => Response.json({ name: 'John' })),
      http.get('*/user', () => Response.json({ name: 'Kate' })),
    ],
    new Request('http://localhost/user'),
  )

  expect(response?.status).toBe(200)
  expect(response?.headers.get('Content-Type')).toBe('application/json')
  await expect(response?.json()).resolves.toEqual({ name: 'John' })
})

it('supports custom base url', async () => {
  const response = await getResponse(
    [http.get('/resource', () => new Response('hello world'))],
    new Request('https://localhost:3000/resource'),
    {
      baseUrl: 'https://localhost:3000/',
    },
  )

  expect(response?.status).toBe(200)
  await expect(response?.text()).resolves.toBe('hello world')
})
