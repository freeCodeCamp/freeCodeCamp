'use strict'

/* eslint no-prototype-builtins: 0 */

const { test } = require('tap')
const { sink, once } = require('./helper')
const pino = require('../')

test('pino exposes standard time functions', async ({ ok }) => {
  ok(pino.stdTimeFunctions)
  ok(pino.stdTimeFunctions.epochTime)
  ok(pino.stdTimeFunctions.unixTime)
  ok(pino.stdTimeFunctions.nullTime)
  ok(pino.stdTimeFunctions.isoTime)
  ok(pino.stdTimeFunctions.isoTimeNano)
})

test('pino accepts external time functions', async ({ equal }) => {
  const opts = {
    timestamp: () => ',"time":"none"'
  }
  const stream = sink()
  const instance = pino(opts, stream)
  instance.info('foobar')
  const result = await once(stream, 'data')
  equal(result.hasOwnProperty('time'), true)
  equal(result.time, 'none')
})

test('pino accepts external time functions with custom label', async ({ equal }) => {
  const opts = {
    timestamp: () => ',"custom-time-label":"none"'
  }
  const stream = sink()
  const instance = pino(opts, stream)
  instance.info('foobar')
  const result = await once(stream, 'data')
  equal(result.hasOwnProperty('custom-time-label'), true)
  equal(result['custom-time-label'], 'none')
})

test('inserts timestamp by default', async ({ ok, equal }) => {
  const stream = sink()
  const instance = pino(stream)
  instance.info('foobar')
  const result = await once(stream, 'data')
  equal(result.hasOwnProperty('time'), true)
  ok(new Date(result.time) <= new Date(), 'time is greater than timestamp')
  equal(result.msg, 'foobar')
})

test('omits timestamp when timestamp option is false', async ({ equal }) => {
  const stream = sink()
  const instance = pino({ timestamp: false }, stream)
  instance.info('foobar')
  const result = await once(stream, 'data')
  equal(result.hasOwnProperty('time'), false)
  equal(result.msg, 'foobar')
})

test('inserts timestamp when timestamp option is true', async ({ ok, equal }) => {
  const stream = sink()
  const instance = pino({ timestamp: true }, stream)
  instance.info('foobar')
  const result = await once(stream, 'data')
  equal(result.hasOwnProperty('time'), true)
  ok(new Date(result.time) <= new Date(), 'time is greater than timestamp')
  equal(result.msg, 'foobar')
})

test('child inserts timestamp by default', async ({ ok, equal }) => {
  const stream = sink()
  const logger = pino(stream)
  const instance = logger.child({ component: 'child' })
  instance.info('foobar')
  const result = await once(stream, 'data')
  equal(result.hasOwnProperty('time'), true)
  ok(new Date(result.time) <= new Date(), 'time is greater than timestamp')
  equal(result.msg, 'foobar')
})

test('child omits timestamp with option', async ({ equal }) => {
  const stream = sink()
  const logger = pino({ timestamp: false }, stream)
  const instance = logger.child({ component: 'child' })
  instance.info('foobar')
  const result = await once(stream, 'data')
  equal(result.hasOwnProperty('time'), false)
  equal(result.msg, 'foobar')
})

test('pino.stdTimeFunctions.unixTime returns seconds based timestamps', async ({ equal }) => {
  const opts = {
    timestamp: pino.stdTimeFunctions.unixTime
  }
  const stream = sink()
  const instance = pino(opts, stream)
  const now = Date.now
  Date.now = () => 1531069919686
  instance.info('foobar')
  const result = await once(stream, 'data')
  equal(result.hasOwnProperty('time'), true)
  equal(result.time, 1531069920)
  Date.now = now
})

test('pino.stdTimeFunctions.isoTime returns ISO 8601 timestamps', async ({ equal }) => {
  const opts = {
    timestamp: pino.stdTimeFunctions.isoTime
  }
  const stream = sink()
  const instance = pino(opts, stream)
  const ms = 1531069919686
  const now = Date.now
  Date.now = () => ms
  const iso = new Date(ms).toISOString()
  instance.info('foobar')
  const result = await once(stream, 'data')
  equal(result.hasOwnProperty('time'), true)
  equal(result.time, iso)
  Date.now = now
})
