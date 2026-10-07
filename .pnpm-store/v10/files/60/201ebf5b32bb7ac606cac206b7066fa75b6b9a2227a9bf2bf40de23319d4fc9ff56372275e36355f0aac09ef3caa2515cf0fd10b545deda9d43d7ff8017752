'use strict'

const tap = require('tap')
const { sink, once } = require('./helper')
const pino = require('../')

tap.test('log method hook', t => {
  t.test('gets invoked', async t => {
    t.plan(8)

    const stream = sink()
    const logger = pino({
      hooks: {
        logMethod (args, method, level) {
          t.type(args, Array)
          t.type(level, 'number')
          t.equal(args.length, 3)
          t.equal(level, this.levels.values.info)
          t.same(args, ['a', 'b', 'c'])

          t.type(method, Function)
          t.equal(method.name, 'LOG')

          method.apply(this, [args.join('-')])
        }
      }
    }, stream)

    const o = once(stream, 'data')
    logger.info('a', 'b', 'c')
    t.match(await o, { msg: 'a-b-c' })
  })

  t.test('fatal method invokes hook', async t => {
    t.plan(2)

    const stream = sink()
    const logger = pino({
      hooks: {
        logMethod (args, method) {
          t.pass()
          method.apply(this, [args.join('-')])
        }
      }
    }, stream)

    const o = once(stream, 'data')
    logger.fatal('a')
    t.match(await o, { msg: 'a' })
  })

  t.test('children get the hook', async t => {
    t.plan(4)

    const stream = sink()
    const root = pino({
      hooks: {
        logMethod (args, method) {
          t.pass()
          method.apply(this, [args.join('-')])
        }
      }
    }, stream)
    const child = root.child({ child: 'one' })
    const grandchild = child.child({ child: 'two' })

    let o = once(stream, 'data')
    child.info('a', 'b')
    t.match(await o, { msg: 'a-b' })

    o = once(stream, 'data')
    grandchild.info('c', 'd')
    t.match(await o, { msg: 'c-d' })
  })

  t.test('get log level', async t => {
    t.plan(3)

    const stream = sink()
    const logger = pino({
      hooks: {
        logMethod (args, method, level) {
          t.type(level, 'number')
          t.equal(level, this.levels.values.error)

          method.apply(this, [args.join('-')])
        }
      }
    }, stream)

    const o = once(stream, 'data')
    logger.error('a')
    t.match(await o, { msg: 'a' })
  })

  t.end()
})

tap.test('streamWrite hook', t => {
  t.test('gets invoked', async t => {
    t.plan(1)

    const stream = sink()
    const logger = pino({
      hooks: {
        streamWrite (s) {
          return s.replaceAll('redact-me', 'XXX')
        }
      }
    }, stream)

    const o = once(stream, 'data')
    logger.info('hide redact-me in this string')
    t.match(await o, { msg: 'hide XXX in this string' })
  })

  t.end()
})
