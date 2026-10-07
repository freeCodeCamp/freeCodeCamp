import { it, expect } from 'vitest'
import { IncomingMessage } from 'http'
import { Socket } from 'net'
import * as zlib from 'zlib'
import { getIncomingMessageBody } from './getIncomingMessageBody'

it('returns utf8 string given a utf8 response body', async () => {
  const utfBuffer = Buffer.from('one')
  const message = new IncomingMessage(new Socket())

  const pendingResponseBody = getIncomingMessageBody(message)
  message.emit('data', utfBuffer)
  message.emit('end')

  expect(await pendingResponseBody).toEqual('one')
})

it('returns utf8 string given a gzipped response body', async () => {
  const utfBuffer = zlib.gzipSync(Buffer.from('two'))
  const message = new IncomingMessage(new Socket())
  message.headers = {
    'content-encoding': 'gzip',
  }

  const pendingResponseBody = getIncomingMessageBody(message)
  message.emit('data', utfBuffer)
  message.emit('end')

  expect(await pendingResponseBody).toEqual('two')
})

it('returns utf8 string given a gzipped response body with incorrect "content-length"', async () => {
  const utfBuffer = zlib.gzipSync(Buffer.from('three'))
  const message = new IncomingMessage(new Socket())
  message.headers = {
    'content-encoding': 'gzip',
    'content-length': '500',
  }

  const pendingResponseBody = getIncomingMessageBody(message)
  message.emit('data', utfBuffer)
  message.emit('end')

  expect(await pendingResponseBody).toEqual('three')
})

it('returns empty string given an empty body', async () => {
  const message = new IncomingMessage(new Socket())

  const pendingResponseBody = getIncomingMessageBody(message)
  message.emit('end')

  expect(await pendingResponseBody).toEqual('')
})
