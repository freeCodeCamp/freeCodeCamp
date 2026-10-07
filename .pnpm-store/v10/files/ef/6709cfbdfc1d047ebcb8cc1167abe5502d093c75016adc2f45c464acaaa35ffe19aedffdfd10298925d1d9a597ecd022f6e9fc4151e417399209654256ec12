'use strict'

const test = require('node:test')
const os = require('node:os')
const diagChan = require('node:diagnostics_channel')
const { AsyncLocalStorage } = require('node:async_hooks')
const { Writable } = require('node:stream')
const tspl = require('@matteo.collina/tspl')
const pino = require('../pino')

const hostname = os.hostname()
const { pid } = process
const AS_JSON_START = 'tracing:pino_asJson:start'
const AS_JSON_END = 'tracing:pino_asJson:end'

// Skip tests if diagnostics_channel.tracingChannel is not available (Node < 18.19)
const skip = typeof diagChan.tracingChannel !== 'function'

test.beforeEach(ctx => {
  ctx.pino = {
    ts: 1757512800000, // 2025-09-10T10:00:00.000-05:00
    now: Date.now
  }

  Date.now = () => ctx.pino.ts

  ctx.pino.dest = new Writable({
    objectMode: true,
    write (data, enc, cb) {
      cb()
    }
  })
})

test.afterEach(ctx => {
  Date.now = ctx.pino.now
})

test('asJson emits events', { skip }, async (t) => {
  const plan = tspl(t, { plan: 8 })
  const { dest } = t.pino
  const logger = pino({}, dest)
  const expectedArguments = [
    {},
    'testing',
    30,
    `,"time":${t.pino.ts}`
  ]

  let startEvent
  diagChan.subscribe(AS_JSON_START, startHandler)
  diagChan.subscribe(AS_JSON_END, endHandler)

  logger.info('testing')
  await plan

  diagChan.unsubscribe(AS_JSON_START, startHandler)
  diagChan.unsubscribe(AS_JSON_END, endHandler)

  function startHandler (event) {
    startEvent = event
    plan.equal(Object.prototype.toString.call(event.instance), '[object Pino]')
    plan.equal(event.instance === logger, true)
    plan.deepStrictEqual(Array.from(event.arguments ?? []), expectedArguments)
  }

  function endHandler (event) {
    plan.equal(Object.prototype.toString.call(event.instance), '[object Pino]')
    plan.equal(event.instance === logger, true)
    plan.deepStrictEqual(Array.from(event.arguments ?? []), expectedArguments)
    plan.equal(
      event.result,
      `{"level":30,"time":${t.pino.ts},"pid":${pid},"hostname":"${hostname}","msg":"testing"}\n`
    )

    plan.equal(event.arguments === startEvent.arguments, true, 'same event object is supplied to both events')
  }
})

test('asJson context is not lost', { skip }, async (t) => {
  const plan = tspl(t, { plan: 2 })
  const { dest } = t.pino
  const logger = pino({}, dest)
  const asyncLocalStorage = new AsyncLocalStorage()
  const localStore = { foo: 'bar' }

  diagChan.subscribe(AS_JSON_START, startHandler)
  diagChan.subscribe(AS_JSON_END, endHandler)

  asyncLocalStorage.run(localStore, () => {
    logger.info('testing')
  })
  await plan

  diagChan.unsubscribe(AS_JSON_START, startHandler)
  diagChan.unsubscribe(AS_JSON_END, endHandler)

  function startHandler () {
    const store = asyncLocalStorage.getStore()
    plan.equal(store === localStore, true)
  }

  function endHandler () {
    const store = asyncLocalStorage.getStore()
    plan.equal(store === localStore, true)
  }
})
