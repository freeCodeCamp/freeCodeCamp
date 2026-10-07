'use strict'

const tap = require('tap')
const prettifyErrorLog = require('./prettify-error-log')
const {
  ERROR_LIKE_KEYS,
  MESSAGE_KEY
} = require('../constants')

const context = {
  EOL: '\n',
  IDENT: '    ',
  customPrettifiers: {},
  errorLikeObjectKeys: ERROR_LIKE_KEYS,
  errorProps: [],
  messageKey: MESSAGE_KEY
}

tap.test('returns string with default settings', async t => {
  const err = Error('Something went wrong')
  const str = prettifyErrorLog({ log: err, context })
  t.ok(str.startsWith('    Error: Something went wrong'))
})

tap.test('returns string with custom ident', async t => {
  const err = Error('Something went wrong')
  const str = prettifyErrorLog({
    log: err,
    context: {
      ...context,
      IDENT: '  '
    }
  })
  t.ok(str.startsWith('  Error: Something went wrong'))
})

tap.test('returns string with custom eol', async t => {
  const err = Error('Something went wrong')
  const str = prettifyErrorLog({
    log: err,
    context: {
      ...context,
      EOL: '\r\n'
    }
  })
  t.ok(str.startsWith('    Error: Something went wrong\r\n'))
})

tap.test('errorProperties', t => {
  t.test('excludes all for wildcard', async t => {
    const err = Error('boom')
    err.foo = 'foo'
    const str = prettifyErrorLog({
      log: err,
      context: {
        ...context,
        errorProps: ['*']
      }
    })
    t.ok(str.startsWith('    Error: boom'))
    t.equal(str.includes('foo: "foo"'), false)
  })

  t.test('excludes only selected properties', async t => {
    const err = Error('boom')
    err.foo = 'foo'
    const str = prettifyErrorLog({
      log: err,
      context: {
        ...context,
        errorProps: ['foo']
      }
    })
    t.ok(str.startsWith('    Error: boom'))
    t.equal(str.includes('foo: foo'), true)
  })

  t.test('ignores specified properties if not present', async t => {
    const err = Error('boom')
    err.foo = 'foo'
    const str = prettifyErrorLog({
      log: err,
      context: {
        ...context,
        errorProps: ['foo', 'bar']
      }
    })
    t.ok(str.startsWith('    Error: boom'))
    t.equal(str.includes('foo: foo'), true)
    t.equal(str.includes('bar'), false)
  })

  t.test('processes nested objects', async t => {
    const err = Error('boom')
    err.foo = { bar: 'bar', message: 'included' }
    const str = prettifyErrorLog({
      log: err,
      context: {
        ...context,
        errorProps: ['foo']
      }
    })
    t.ok(str.startsWith('    Error: boom'))
    t.equal(str.includes('foo: {'), true)
    t.equal(str.includes('bar: "bar"'), true)
    t.equal(str.includes('message: "included"'), true)
  })

  t.end()
})
