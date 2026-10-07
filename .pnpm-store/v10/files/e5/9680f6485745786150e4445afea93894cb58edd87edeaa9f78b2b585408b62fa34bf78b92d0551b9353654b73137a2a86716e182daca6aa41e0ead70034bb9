/**
 * @vitest-environment node
 */
import { encodeBuffer } from '@mswjs/interceptors'
import { serializeResponse } from './serializeResponse'

it('serializes response without body', async () => {
  const result = await serializeResponse(new Response(null))

  expect(result.status).toBe(200)
  expect(result.statusText).toBe('OK')
  expect(result.headers).toEqual({})
  expect(result.body).toBe('')
})

it('serializes a plain text response', async () => {
  const result = await serializeResponse(
    new Response('hello world', {
      status: 201,
      statusText: 'Created',
      headers: {
        'Content-Type': 'text/plain',
      },
    }),
  )

  expect(result.status).toBe(201)
  expect(result.statusText).toBe('Created')
  expect(result.headers).toEqual({
    'content-type': 'text/plain',
  })
  expect(result.body).toBe('hello world')
})

it('serializes a JSON response', async () => {
  const response = new Response(JSON.stringify({ users: ['John'] }), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = await serializeResponse(response)

  expect(result.headers).toEqual({
    'content-type': 'application/json',
  })
  expect(result.body).toBe(JSON.stringify({ users: ['John'] }))
})

it('serializes a ArrayBuffer response', async () => {
  const data = encodeBuffer('hello world')
  const response = new Response(data)
  const result = await serializeResponse(response)

  expect(result.body).toBe('hello world')
})

it('serializes a Blob response', async () => {
  const response = new Response(new Blob(['hello world']))
  const result = await serializeResponse(response)

  expect(result.body).toBe('hello world')
})

it('serializes a FormData response', async () => {
  const data = new FormData()
  data.set('firstName', 'Alice')
  data.set('age', '32')
  const response = new Response(data)
  const result = await serializeResponse(response)

  expect(result.body).toContain(
    `Content-Disposition: form-data; name="firstName"\r\n\r\nAlice`,
  )
  expect(result.body).toContain(
    `Content-Disposition: form-data; name="age"\r\n\r\n32`,
  )
})
