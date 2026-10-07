'use strict'

const os = require('node:os')
const { test } = require('tap')
const pino = require('../')

const { pid } = process
const hostname = os.hostname()

test('metadata works', async ({ ok, same, equal }) => {
  const now = Date.now()
  const instance = pino({}, {
    [Symbol.for('pino.metadata')]: true,
    write (chunk) {
      equal(instance, this.lastLogger)
      equal(30, this.lastLevel)
      equal('a msg', this.lastMsg)
      ok(Number(this.lastTime) >= now)
      same(this.lastObj, { hello: 'world' })
      const result = JSON.parse(chunk)
      ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
      delete result.time
      same(result, {
        pid,
        hostname,
        level: 30,
        hello: 'world',
        msg: 'a msg'
      })
    }
  })

  instance.info({ hello: 'world' }, 'a msg')
})

test('child loggers works', async ({ ok, same, equal }) => {
  const instance = pino({}, {
    [Symbol.for('pino.metadata')]: true,
    write (chunk) {
      equal(child, this.lastLogger)
      equal(30, this.lastLevel)
      equal('a msg', this.lastMsg)
      same(this.lastObj, { from: 'child' })
      const result = JSON.parse(chunk)
      ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
      delete result.time
      same(result, {
        pid,
        hostname,
        level: 30,
        hello: 'world',
        from: 'child',
        msg: 'a msg'
      })
    }
  })

  const child = instance.child({ hello: 'world' })
  child.info({ from: 'child' }, 'a msg')
})

test('without object', async ({ ok, same, equal }) => {
  const instance = pino({}, {
    [Symbol.for('pino.metadata')]: true,
    write (chunk) {
      equal(instance, this.lastLogger)
      equal(30, this.lastLevel)
      equal('a msg', this.lastMsg)
      same({ }, this.lastObj)
      const result = JSON.parse(chunk)
      ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
      delete result.time
      same(result, {
        pid,
        hostname,
        level: 30,
        msg: 'a msg'
      })
    }
  })

  instance.info('a msg')
})

test('without msg', async ({ ok, same, equal }) => {
  const instance = pino({}, {
    [Symbol.for('pino.metadata')]: true,
    write (chunk) {
      equal(instance, this.lastLogger)
      equal(30, this.lastLevel)
      equal(undefined, this.lastMsg)
      same({ hello: 'world' }, this.lastObj)
      const result = JSON.parse(chunk)
      ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
      delete result.time
      same(result, {
        pid,
        hostname,
        level: 30,
        hello: 'world'
      })
    }
  })

  instance.info({ hello: 'world' })
})
