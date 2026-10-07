'use strict'

const { test } = require('node:test')

test("pino is not require'd if logger is not passed", t => {
  t.plan(1)

  const fastify = require('..')

  fastify()

  t.assert.strictEqual(require.cache[require.resolve('pino')], undefined)
})

test("pino is require'd if logger is passed", t => {
  t.plan(1)

  const fastify = require('..')

  fastify({
    logger: true
  })

  t.assert.notStrictEqual(require.cache[require.resolve('pino')], undefined)
})

test("pino is require'd if loggerInstance is passed", t => {
  t.plan(1)

  const fastify = require('..')

  const loggerInstance = {
    fatal: (msg) => { },
    error: (msg) => { },
    warn: (msg) => { },
    info: (msg) => { },
    debug: (msg) => { },
    trace: (msg) => { },
    child: () => loggerInstance
  }

  fastify({
    loggerInstance
  })

  t.assert.notStrictEqual(require.cache[require.resolve('pino')], undefined)
})
