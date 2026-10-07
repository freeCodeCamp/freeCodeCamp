// @vitest-environment node
import { it, expect } from 'vitest'
import { getBodyByteLength } from './getBodyByteLength'

const url = 'http://localhost'

it('returns explicit body length set in the "Content-Length" header', async () => {
  await expect(
    getBodyByteLength(new Request(url, { headers: { 'Content-Length': '10' } }))
  ).resolves.toBe(10)

  await expect(
    getBodyByteLength(
      new Response('hello', { headers: { 'Content-Length': '5' } })
    )
  ).resolves.toBe(5)
})

/**
 * Request.
 */

it('returns 0 for a request with an empty body', async () => {
  await expect(getBodyByteLength(new Request(url))).resolves.toBe(0)
  await expect(
    getBodyByteLength(new Request(url, { method: 'POST', body: null }))
  ).resolves.toBe(0)
  await expect(
    getBodyByteLength(new Request(url, { method: 'POST', body: undefined }))
  ).resolves.toBe(0)
  await expect(
    getBodyByteLength(new Request(url, { method: 'POST', body: '' }))
  ).resolves.toBe(0)
})

it('calculates body length from the text request body', async () => {
  await expect(
    getBodyByteLength(
      new Request(url, {
        method: 'POST',
        body: 'hello world',
      })
    )
  ).resolves.toBe(11)
})

it('calculates body length from the URLSearchParams request body', async () => {
  await expect(
    getBodyByteLength(
      new Request(url, {
        method: 'POST',
        body: new URLSearchParams([['hello', 'world']]),
      })
    )
  ).resolves.toBe(11)
})

it('calculates body length from the Blob request body', async () => {
  await expect(
    getBodyByteLength(
      new Request(url, {
        method: 'POST',
        body: new Blob(['hello world']),
      })
    )
  ).resolves.toBe(11)
})

it('calculates body length from the ArrayBuffer request body', async () => {
  await expect(
    getBodyByteLength(
      new Request(url, {
        method: 'POST',
        body: await new Blob(['hello world']).arrayBuffer(),
      })
    )
  ).resolves.toBe(11)
})

it('calculates body length from the FormData request body', async () => {
  const formData = new FormData()
  formData.append('hello', 'world')

  await expect(
    getBodyByteLength(
      new Request(url, {
        method: 'POST',
        body: formData,
      })
    )
  ).resolves.toBe(129)
})

it('calculates body length from the ReadableStream request body', async () => {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode('hello world'))
      controller.close()
    },
  })

  await expect(
    getBodyByteLength(
      new Request(url, {
        method: 'POST',
        body: stream,
        // @ts-expect-error Undocumented required Undici property.
        duplex: 'half',
      })
    )
  ).resolves.toBe(11)
})

/**
 * Response.
 */
it('returns 0 for a response with an empty body', async () => {
  await expect(getBodyByteLength(new Response())).resolves.toBe(0)
  await expect(getBodyByteLength(new Response(null))).resolves.toBe(0)
  await expect(getBodyByteLength(new Response(undefined))).resolves.toBe(0)
  await expect(getBodyByteLength(new Response(''))).resolves.toBe(0)
})

it('calculates body length from the text response body', async () => {
  await expect(getBodyByteLength(new Response('hello world'))).resolves.toBe(11)
})

it('calculates body length from the URLSearchParams response body', async () => {
  await expect(
    getBodyByteLength(new Response(new URLSearchParams([['hello', 'world']])))
  ).resolves.toBe(11)
})

it('calculates body length from the Blob response body', async () => {
  await expect(
    getBodyByteLength(new Response(new Blob(['hello world'])))
  ).resolves.toBe(11)
})

it('calculates body length from the ArrayBuffer response body', async () => {
  await expect(
    getBodyByteLength(
      new Response(await new Blob(['hello world']).arrayBuffer())
    )
  ).resolves.toBe(11)
})

it('calculates body length from the FormData response body', async () => {
  const formData = new FormData()
  formData.append('hello', 'world')

  await expect(getBodyByteLength(new Response(formData))).resolves.toBe(129)
})

it('calculates body length from the ReadableStream response body', async () => {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode('hello world'))
      controller.close()
    },
  })

  await expect(getBodyByteLength(new Response(stream))).resolves.toBe(11)
})
