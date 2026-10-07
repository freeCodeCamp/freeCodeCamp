'use strict'

const { join } = require('node:path')
const { once } = require('node:events')
const { setImmediate: immediate } = require('node:timers/promises')
const { test } = require('tap')
const pino = require('../../')

test('pino.transport emits error if the worker exits with 0 unexpectably', async ({ same, teardown, equal }) => {
  // This test will take 10s, because flushSync waits for 10s
  const transport = pino.transport({
    target: join(__dirname, '..', 'fixtures', 'crashing-transport.js'),
    sync: true
  })
  teardown(transport.end.bind(transport))

  await once(transport, 'ready')

  let maybeError
  transport.on('error', (err) => {
    maybeError = err
  })

  const logger = pino(transport)
  for (let i = 0; i < 100000; i++) {
    logger.info('hello')
  }

  await once(transport.worker, 'exit')

  await immediate()

  same(maybeError.message, 'the worker has exited')
})
