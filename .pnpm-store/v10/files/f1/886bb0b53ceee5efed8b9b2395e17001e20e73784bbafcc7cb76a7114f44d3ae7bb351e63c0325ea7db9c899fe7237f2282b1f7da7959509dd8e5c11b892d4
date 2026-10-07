/**
 * @vitest-environment node
 */
import { Socket } from 'node:net'
import { vi, it, expect } from 'vitest'
import { MockSocket } from './MockSocket'

it(`keeps the socket connecting until it's destroyed`, () => {
  const socket = new MockSocket({
    write: vi.fn(),
    read: vi.fn(),
  })

  expect(socket.connecting).toBe(true)

  socket.destroy()
  expect(socket.connecting).toBe(false)
})

it('calls the "write" on "socket.write()"', () => {
  const writeCallback = vi.fn()
  const socket = new MockSocket({
    write: writeCallback,
    read: vi.fn(),
  })

  socket.write()
  expect(writeCallback).toHaveBeenCalledWith(undefined, undefined, undefined)
})

it('calls the "write" on "socket.write(chunk)"', () => {
  const writeCallback = vi.fn()
  const socket = new MockSocket({
    write: writeCallback,
    read: vi.fn(),
  })

  socket.write('hello')
  expect(writeCallback).toHaveBeenCalledWith('hello', undefined, undefined)
})

it('calls the "write" on "socket.write(chunk, encoding)"', () => {
  const writeCallback = vi.fn()
  const socket = new MockSocket({
    write: writeCallback,
    read: vi.fn(),
  })

  socket.write('hello', 'utf8')
  expect(writeCallback).toHaveBeenCalledWith('hello', 'utf8', undefined)
})

it('calls the "write" on "socket.write(chunk, encoding, callback)"', () => {
  const writeCallback = vi.fn()
  const socket = new MockSocket({
    write: writeCallback,
    read: vi.fn(),
  })

  const callback = vi.fn()
  socket.write('hello', 'utf8', callback)
  expect(writeCallback).toHaveBeenCalledWith('hello', 'utf8', callback)
})

it('calls the "write" on "socket.end()"', () => {
  const writeCallback = vi.fn()
  const socket = new MockSocket({
    write: writeCallback,
    read: vi.fn(),
  })

  socket.end()
  expect(writeCallback).toHaveBeenCalledWith(undefined, undefined, undefined)
})

it('calls the "write" on "socket.end(chunk)"', () => {
  const writeCallback = vi.fn()
  const socket = new MockSocket({
    write: writeCallback,
    read: vi.fn(),
  })

  socket.end('final')
  expect(writeCallback).toHaveBeenCalledWith('final', undefined, undefined)
})

it('calls the "write" on "socket.end(chunk, encoding)"', () => {
  const writeCallback = vi.fn()
  const socket = new MockSocket({
    write: writeCallback,
    read: vi.fn(),
  })

  socket.end('final', 'utf8')
  expect(writeCallback).toHaveBeenCalledWith('final', 'utf8', undefined)
})

it('calls the "write" on "socket.end(chunk, encoding, callback)"', () => {
  const writeCallback = vi.fn()
  const socket = new MockSocket({
    write: writeCallback,
    read: vi.fn(),
  })

  const callback = vi.fn()
  socket.end('final', 'utf8', callback)
  expect(writeCallback).toHaveBeenCalledWith('final', 'utf8', callback)
})

it('calls the "write" on "socket.end()" without any arguments', () => {
  const writeCallback = vi.fn()
  const socket = new MockSocket({
    write: writeCallback,
    read: vi.fn(),
  })

  socket.end()
  expect(writeCallback).toHaveBeenCalledWith(undefined, undefined, undefined)
})

it('emits "finished" on .end() without any arguments', async () => {
  const finishListener = vi.fn()
  const socket = new MockSocket({
    write: vi.fn(),
    read: vi.fn(),
  })
  socket.on('finish', finishListener)
  socket.end()

  await vi.waitFor(() => {
    expect(finishListener).toHaveBeenCalledTimes(1)
  })
})

it('calls the "read" on "socket.read(chunk)"', () => {
  const readCallback = vi.fn()
  const socket = new MockSocket({
    write: vi.fn(),
    read: readCallback,
  })

  socket.push('hello')
  expect(readCallback).toHaveBeenCalledWith('hello', undefined)
})

it('calls the "read" on "socket.read(chunk, encoding)"', () => {
  const readCallback = vi.fn()
  const socket = new MockSocket({
    write: vi.fn(),
    read: readCallback,
  })

  socket.push('world', 'utf8')
  expect(readCallback).toHaveBeenCalledWith('world', 'utf8')
})

it('calls the "read" on "socket.read(null)"', () => {
  const readCallback = vi.fn()
  const socket = new MockSocket({
    write: vi.fn(),
    read: readCallback,
  })

  socket.push(null)
  expect(readCallback).toHaveBeenCalledWith(null, undefined)
})

it('updates the writable state on "socket.end()"', async () => {
  const finishListener = vi.fn()
  const endListener = vi.fn()
  const socket = new MockSocket({
    write: vi.fn(),
    read: vi.fn(),
  })
  socket.on('finish', finishListener)
  socket.on('end', endListener)

  expect(socket.writable).toBe(true)
  expect(socket.writableEnded).toBe(false)
  expect(socket.writableFinished).toBe(false)

  socket.write('hello')
  // Finish the writable stream.
  socket.end()

  expect(socket.writable).toBe(false)
  expect(socket.writableEnded).toBe(true)

  // The "finish" event is emitted when writable is done.
  // I.e. "socket.end()" is called.
  await vi.waitFor(() => {
    expect(finishListener).toHaveBeenCalledTimes(1)
  })
  expect(socket.writableFinished).toBe(true)
})

it('updates the readable state on "socket.push(null)"', async () => {
  const endListener = vi.fn()
  const socket = new MockSocket({
    write: vi.fn(),
    read: vi.fn(),
  })
  socket.on('end', endListener)

  expect(socket.readable).toBe(true)
  expect(socket.readableEnded).toBe(false)

  socket.push('hello')
  socket.push(null)

  expect(socket.readable).toBe(true)
  expect(socket.readableEnded).toBe(false)

  // Read the data to free the buffer and
  // make Socket emit "end".
  socket.read()

  await vi.waitFor(() => {
    expect(endListener).toHaveBeenCalledTimes(1)
  })
  expect(socket.readable).toBe(false)
  expect(socket.readableEnded).toBe(true)
})

it('updates the readable/writable state on "socket.destroy()"', async () => {
  const finishListener = vi.fn()
  const endListener = vi.fn()
  const closeListener = vi.fn()
  const socket = new MockSocket({
    write: vi.fn(),
    read: vi.fn(),
  })
  socket.on('finish', finishListener)
  socket.on('end', endListener)
  socket.on('close', closeListener)

  expect(socket.writable).toBe(true)
  expect(socket.writableEnded).toBe(false)
  expect(socket.writableFinished).toBe(false)
  expect(socket.readable).toBe(true)

  socket.destroy()

  expect(socket.writable).toBe(false)
  // The ".end()" wasn't called.
  expect(socket.writableEnded).toBe(false)
  expect(socket.writableFinished).toBe(false)
  expect(socket.readable).toBe(false)

  await vi.waitFor(() => {
    expect(closeListener).toHaveBeenCalledTimes(1)
  })

  // Neither "finish" nor "end" events are emitted
  // when you destroy the stream. If you want those,
  // call ".end()", then destroy the stream.
  expect(finishListener).not.toHaveBeenCalled()
  expect(endListener).not.toHaveBeenCalled()
  expect(socket.writableFinished).toBe(false)

  // The "end" event was never emitted so "readableEnded"
  // remains false.
  expect(socket.readableEnded).toBe(false)
})
