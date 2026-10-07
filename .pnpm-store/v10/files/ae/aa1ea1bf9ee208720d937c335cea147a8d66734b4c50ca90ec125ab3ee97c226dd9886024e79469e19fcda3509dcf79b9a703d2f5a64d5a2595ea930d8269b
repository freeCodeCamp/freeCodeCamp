/**
 * @vitest-environment node
 */
import { TextEncoder } from 'util'
import { HttpResponse, kDefaultContentType } from './HttpResponse'

it('creates a plain response', async () => {
  const response = new HttpResponse(null, { status: 301 })
  expect(response.status).toBe(301)
  expect(response.statusText).toBe('Moved Permanently')
  expect(response.body).toBe(null)
  await expect(response.text()).resolves.toBe('')
  expect(Object.fromEntries(response.headers.entries())).toEqual({})
})

it('supports non-configurable status codes', () => {
  expect(new HttpResponse(null, { status: 101 })).toHaveProperty('status', 101)
})

describe('HttpResponse.text()', () => {
  it('creates a text response', async () => {
    const response = HttpResponse.text('hello world', { status: 201 })

    expect(response.status).toBe(201)
    expect(response.statusText).toBe('Created')
    expect(response.body).toBeInstanceOf(ReadableStream)
    await expect(response.text()).resolves.toBe('hello world')
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '11',
      'content-type': 'text/plain',
    })
    expect(kDefaultContentType in response).toBe(true)
  })

  it('creates a text response with special characters', async () => {
    const response = HttpResponse.text('안녕 세상', { status: 201 })

    expect(response.status).toBe(201)
    expect(response.statusText).toBe('Created')
    expect(response.body).toBeInstanceOf(ReadableStream)
    await expect(response.text()).resolves.toBe('안녕 세상')
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '13',
      'content-type': 'text/plain',
    })
  })

  it('allows overriding the "Content-Type" response header', async () => {
    const response = HttpResponse.text('hello world', {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)
    await expect(response.text()).resolves.toBe('hello world')
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '11',
      'content-type': 'text/plain; charset=utf-8',
    })
    expect(kDefaultContentType in response).toBe(false)
  })

  it('allows overriding the "Content-Length" response header', async () => {
    const response = HttpResponse.text('hello world', {
      headers: { 'Content-Length': '32' },
    })

    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '32',
      'content-type': 'text/plain',
    })
  })
})

describe('HttpResponse.json()', () => {
  it('creates a json response given an object', async () => {
    const response = HttpResponse.json({ firstName: 'John' })

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)
    expect(await response.json()).toEqual({ firstName: 'John' })
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '20',
      'content-type': 'application/json',
    })
    expect(kDefaultContentType in response).toBe(true)
  })

  it('creates a json response given an object with special characters', async () => {
    const response = HttpResponse.json({ firstName: '제로' })

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)
    expect(await response.json()).toEqual({ firstName: '제로' })
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '22',
      'content-type': 'application/json',
    })
  })

  it('creates a json response given an array', async () => {
    const response = HttpResponse.json([1, 2, 3])

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)
    expect(await response.json()).toEqual([1, 2, 3])
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '7',
      'content-type': 'application/json',
    })
  })

  it('creates a json response given a plain string', async () => {
    const response = HttpResponse.json(`"hello"`)

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)
    expect(await response.json()).toBe(`"hello"`)
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '11',
      'content-type': 'application/json',
    })
  })

  it('creates a json response given a number', async () => {
    const response = HttpResponse.json(123)

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)
    expect(await response.json()).toBe(123)
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '3',
      'content-type': 'application/json',
    })
  })

  it('creates a json response given a json ReadableStream', async () => {
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(`{"firstName`))
        controller.enqueue(encoder.encode(`":"John`))
        controller.enqueue(encoder.encode(`"}`))
        controller.close()
      },
    })
    const response = HttpResponse.json(stream)

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)
    // A ReadableStream instance is not a valid body init
    // for the "Response.json()" static method. It gets serialized
    // into a plain object.
    expect(await response.json()).toEqual({})
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '2',
      'content-type': 'application/json',
    })
  })

  it('allows overriding the "Content-Type" response header', async () => {
    const response = HttpResponse.json(
      { a: 1 },
      {
        headers: {
          'Content-Type': 'application/hal+json',
        },
      },
    )

    expect(kDefaultContentType in response).toBe(false)
    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)
    expect(await response.json()).toEqual({ a: 1 })
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '7',
      'content-type': 'application/hal+json',
    })
  })

  it('allows overriding the "Content-Length" response header', async () => {
    const response = HttpResponse.json(
      { a: 1 },
      {
        headers: { 'Content-Length': '32' },
      },
    )

    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '32',
      'content-type': 'application/json',
    })
  })
})

describe('HttpResponse.xml()', () => {
  it('creates an xml response', async () => {
    const response = HttpResponse.xml('<user name="John" />')

    expect(kDefaultContentType in response).toBe(true)
    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)
    await expect(response.text()).resolves.toBe('<user name="John" />')
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-type': 'text/xml',
    })
    expect(kDefaultContentType in response).toBe(true)
  })

  it('allows overriding the "Content-Type" response header', async () => {
    const response = HttpResponse.xml('<user name="John" />', {
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
      },
    })

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)
    await expect(response.text()).resolves.toBe('<user name="John" />')
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-type': 'text/xml; charset=utf-8',
    })
    expect(kDefaultContentType in response).toBe(false)
  })
})

describe('HttpResponse.html()', () => {
  it('creates an html response', async () => {
    const response = HttpResponse.html('<p class="author">Jane Doe</p>')

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)
    await expect(response.text()).resolves.toBe(
      '<p class="author">Jane Doe</p>',
    )
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-type': 'text/html',
    })
    expect(kDefaultContentType in response).toBe(true)
  })

  it('allows overriding the "Content-Type" response header', async () => {
    const response = HttpResponse.html('<p class="author">Jane Doe</p>', {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    })

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)
    await expect(response.text()).resolves.toBe(
      '<p class="author">Jane Doe</p>',
    )
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-type': 'text/html; charset=utf-8',
    })
    expect(kDefaultContentType in response).toBe(false)
  })
})

describe('HttpResponse.arrayBuffer()', () => {
  it('creates an array buffer response', async () => {
    const buffer = new TextEncoder().encode('hello world')
    const response = HttpResponse.arrayBuffer(buffer)

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)

    const responseData = await response.arrayBuffer()
    expect(responseData).toEqual(buffer.buffer)
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '11',
      'content-type': 'application/octet-stream',
    })
    expect(kDefaultContentType in response).toBe(true)
  })

  it('allows overriding the "Content-Type" response header', async () => {
    const buffer = new TextEncoder().encode('hello world')
    const response = HttpResponse.arrayBuffer(buffer, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    })

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)

    const responseData = await response.arrayBuffer()
    expect(responseData).toEqual(buffer.buffer)
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '11',
      'content-type': 'text/plain; charset=utf-8',
    })
    expect(kDefaultContentType in response).toBe(false)
  })

  it('creates an array buffer response from a shared array buffer', async () => {
    const arrayBuffer = new TextEncoder().encode('hello world')

    // Copy the data from the array buffer to a shared array buffer
    const sharedBuffer = new SharedArrayBuffer(11)
    const sharedView = new Uint8Array(sharedBuffer)
    sharedView.set(arrayBuffer)

    const response = HttpResponse.arrayBuffer(sharedBuffer)

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)

    const responseData = await response.arrayBuffer()
    expect(responseData).toEqual(arrayBuffer.buffer)
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '11',
      'content-type': 'application/octet-stream',
    })
  })

  it('allows overriding the "Content-Type" response header for shared array buffers', async () => {
    const arrayBuffer = new TextEncoder().encode('hello world')

    // Copy the data from the array buffer to a shared array buffer
    const sharedBuffer = new SharedArrayBuffer(11)
    const sharedView = new Uint8Array(sharedBuffer)
    sharedView.set(arrayBuffer)

    const response = HttpResponse.arrayBuffer(sharedBuffer, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    })

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
    expect(response.body).toBeInstanceOf(ReadableStream)

    const responseData = await response.arrayBuffer()
    expect(responseData).toEqual(arrayBuffer.buffer)
    expect(Object.fromEntries(response.headers.entries())).toEqual({
      'content-length': '11',
      'content-type': 'text/plain; charset=utf-8',
    })
    expect(kDefaultContentType in response).toBe(false)
  })
})

it('creates a form data response', async () => {
  const formData = new FormData()
  formData.append('firstName', 'John')
  const response = HttpResponse.formData(formData)

  expect(response.status).toBe(200)
  expect(response.statusText).toBe('OK')
  expect(response.body).toBeInstanceOf(ReadableStream)

  const responseData = await response.formData()
  expect(responseData.get('firstName')).toBe('John')
  expect(Object.fromEntries(response.headers.entries())).toEqual({
    'content-type': expect.stringContaining(
      'multipart/form-data; boundary=----',
    ),
  })
})
