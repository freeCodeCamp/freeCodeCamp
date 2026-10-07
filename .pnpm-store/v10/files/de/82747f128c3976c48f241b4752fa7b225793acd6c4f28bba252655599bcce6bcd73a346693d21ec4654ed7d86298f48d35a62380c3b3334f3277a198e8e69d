'use strict'

const { test } = require('tap')
const { sink, once } = require('./helper')
const { PassThrough } = require('node:stream')
const pino = require('../')

test('Proxy and stream objects', async ({ equal }) => {
  const s = new PassThrough()
  s.resume()
  s.write('', () => {})
  const obj = { s, p: new Proxy({}, { get () { throw new Error('kaboom') } }) }
  const stream = sink()
  const instance = pino(stream)
  instance.info({ obj })

  const result = await once(stream, 'data')

  equal(result.obj, '[unable to serialize, circular reference is too complex to analyze]')
})

test('Proxy and stream objects', async ({ equal }) => {
  const s = new PassThrough()
  s.resume()
  s.write('', () => {})
  const obj = { s, p: new Proxy({}, { get () { throw new Error('kaboom') } }) }
  const stream = sink()
  const instance = pino(stream)
  instance.info(obj)

  const result = await once(stream, 'data')

  equal(result.p, '[unable to serialize, circular reference is too complex to analyze]')
})
