'use strict'

const os = require('node:os')
const { test } = require('tap')
const { sink, once } = require('./helper')
const pino = require('../')

const { pid } = process
const hostname = os.hostname()
const level = 50
const name = 'error'

test('mixin object is included', async ({ ok, same }) => {
  let n = 0
  const stream = sink()
  const instance = pino({
    mixin () {
      return { hello: ++n }
    }
  }, stream)
  instance.level = name
  instance[name]('test')
  const result = await once(stream, 'data')
  ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
  delete result.time
  same(result, {
    pid,
    hostname,
    level,
    msg: 'test',
    hello: 1
  })
})

test('mixin object is new every time', async ({ plan, ok, same }) => {
  plan(6)

  let n = 0
  const stream = sink()
  const instance = pino({
    mixin () {
      return { hello: n }
    }
  }, stream)
  instance.level = name

  while (++n < 4) {
    const msg = `test #${n}`
    stream.pause()
    instance[name](msg)
    stream.resume()
    const result = await once(stream, 'data')
    ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
    delete result.time
    same(result, {
      pid,
      hostname,
      level,
      msg,
      hello: n
    })
  }
})

test('mixin object is not called if below log level', async ({ ok }) => {
  const stream = sink()
  const instance = pino({
    mixin () {
      ok(false, 'should not call mixin function')
    }
  }, stream)
  instance.level = 'error'
  instance.info('test')
})

test('mixin object + logged object', async ({ ok, same }) => {
  const stream = sink()
  const instance = pino({
    mixin () {
      return { foo: 1, bar: 2 }
    }
  }, stream)
  instance.level = name
  instance[name]({ bar: 3, baz: 4 })
  const result = await once(stream, 'data')
  ok(new Date(result.time) <= new Date(), 'time is greater than Date.now()')
  delete result.time
  same(result, {
    pid,
    hostname,
    level,
    foo: 1,
    bar: 3,
    baz: 4
  })
})

test('mixin not a function', async ({ throws }) => {
  const stream = sink()
  throws(function () {
    pino({ mixin: 'not a function' }, stream)
  })
})

test('mixin can use context', async ({ ok, same }) => {
  const stream = sink()
  const instance = pino({
    mixin (context) {
      ok(context !== null, 'context should be defined')
      ok(context !== undefined, 'context should be defined')
      same(context, {
        message: '123',
        stack: 'stack'
      })
      return Object.assign({
        error: context.message,
        stack: context.stack
      })
    }
  }, stream)
  instance.level = name
  instance[name]({
    message: '123',
    stack: 'stack'
  }, 'test')
})

test('mixin works without context', async ({ ok, same }) => {
  const stream = sink()
  const instance = pino({
    mixin (context) {
      ok(context !== null, 'context is still defined w/o passing mergeObject')
      ok(context !== undefined, 'context is still defined w/o passing mergeObject')
      same(context, {})
      return {
        something: true
      }
    }
  }, stream)
  instance.level = name
  instance[name]('test')
})

test('mixin can use level number', async ({ ok, same }) => {
  const stream = sink()
  const instance = pino({
    mixin (context, num) {
      ok(num !== null, 'level should be defined')
      ok(num !== undefined, 'level should be defined')
      same(num, level)
      return Object.assign({
        error: context.message,
        stack: context.stack
      })
    }
  }, stream)
  instance.level = name
  instance[name]({
    message: '123',
    stack: 'stack'
  }, 'test')
})

test('mixin receives logger as third parameter', async ({ ok, same }) => {
  const stream = sink()
  const instance = pino({
    mixin (context, num, logger) {
      ok(logger !== null, 'logger should be defined')
      ok(logger !== undefined, 'logger should be defined')
      same(logger, instance)
      return { ...context, num }
    }
  }, stream)
  instance.level = name
  instance[name]({
    message: '123'
  }, 'test')
})

test('mixin receives child logger', async ({ ok, same }) => {
  const stream = sink()
  let child = null
  const instance = pino({
    mixin (context, num, logger) {
      ok(logger !== null, 'logger should be defined')
      ok(logger !== undefined, 'logger should be defined')
      same(logger.expected, child.expected)
      return { ...context, num }
    }
  }, stream)
  instance.level = name
  instance.expected = false
  child = instance.child({})
  child.expected = true
  child[name]({
    message: '123'
  }, 'test')
})

test('mixin receives logger even if child exists', async ({ ok, same }) => {
  const stream = sink()
  let child = null
  const instance = pino({
    mixin (context, num, logger) {
      ok(logger !== null, 'logger should be defined')
      ok(logger !== undefined, 'logger should be defined')
      same(logger.expected, instance.expected)
      return { ...context, num }
    }
  }, stream)
  instance.level = name
  instance.expected = false
  child = instance.child({})
  child.expected = true
  instance[name]({
    message: '123'
  }, 'test')
})
