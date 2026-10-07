'use strict'

process.env.TZ = 'UTC'

const Writable = require('stream').Writable
const test = require('tap').test
const pino = require('pino')
const serializers = pino.stdSerializers
const _prettyFactory = require('../').prettyFactory

function prettyFactory (opts) {
  if (!opts) {
    opts = { colorize: false }
  } else if (!Object.prototype.hasOwnProperty.call(opts, 'colorize')) {
    opts.colorize = false
  }
  return _prettyFactory(opts)
}

// All dates are computed from 'Fri, 30 Mar 2018 17:35:28 GMT'
const epoch = 1522431328992
const formattedEpoch = '17:35:28.992'
const pid = process.pid

test('error like objects tests', (t) => {
  t.beforeEach(() => {
    Date.originalNow = Date.now
    Date.now = () => epoch
  })
  t.afterEach(() => {
    Date.now = Date.originalNow
    delete Date.originalNow
  })

  t.test('pino transform prettifies Error', (t) => {
    t.plan(2)
    const pretty = prettyFactory()
    const err = Error('hello world')
    const expected = err.stack.split('\n')
    expected.unshift(err.message)

    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        const lines = formatted.split('\n')
        t.equal(lines.length, expected.length + 6)
        t.equal(lines[0], `[${formattedEpoch}] INFO (${pid}): hello world`)
        cb()
      }
    }))

    log.info(err)
  })

  t.test('errorProps recognizes user specified properties', (t) => {
    t.plan(3)
    const pretty = prettyFactory({ errorProps: 'statusCode,originalStack' })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.match(formatted, /\s{4}error stack/)
        t.match(formatted, /"statusCode": 500/)
        t.match(formatted, /"originalStack": "original stack"/)
        cb()
      }
    }))

    const error = Error('error message')
    error.stack = 'error stack'
    error.statusCode = 500
    error.originalStack = 'original stack'

    log.error(error)
  })

  t.test('prettifies ignores undefined errorLikeObject', (t) => {
    const pretty = prettyFactory()
    pretty({ err: undefined })
    pretty({ error: undefined })
    t.end()
  })

  t.test('prettifies Error in property within errorLikeObjectKeys', (t) => {
    t.plan(8)
    const pretty = prettyFactory({
      errorLikeObjectKeys: ['err']
    })

    const err = Error('hello world')
    const expected = err.stack.split('\n')
    expected.unshift(err.message)

    const log = pino({ serializers: { err: serializers.err } }, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        const lines = formatted.split('\n')
        t.equal(lines.length, expected.length + 6)
        t.equal(lines[0], `[${formattedEpoch}] INFO (${pid}): hello world`)
        t.match(lines[1], /\s{4}err: {/)
        t.match(lines[2], /\s{6}"type": "Error",/)
        t.match(lines[3], /\s{6}"message": "hello world",/)
        t.match(lines[4], /\s{6}"stack":/)
        t.match(lines[5], /\s{6}Error: hello world/)
        // Node 12 labels the test `<anonymous>`
        t.match(lines[6], /\s{10}(at Test.t.test|at Test.<anonymous>)/)
        cb()
      }
    }))

    log.info({ err })
  })

  t.test('prettifies Error in property with singleLine=true', (t) => {
    // singleLine=true doesn't apply to errors
    t.plan(8)
    const pretty = prettyFactory({
      singleLine: true,
      errorLikeObjectKeys: ['err']
    })

    const err = Error('hello world')
    const expected = [
      '{"extra":{"a":1,"b":2}}',
      err.message,
      ...err.stack.split('\n')
    ]

    const log = pino({ serializers: { err: serializers.err } }, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        const lines = formatted.split('\n')
        t.equal(lines.length, expected.length + 5)
        t.equal(lines[0], `[${formattedEpoch}] INFO (${pid}): hello world {"extra":{"a":1,"b":2}}`)
        t.match(lines[1], /\s{4}err: {/)
        t.match(lines[2], /\s{6}"type": "Error",/)
        t.match(lines[3], /\s{6}"message": "hello world",/)
        t.match(lines[4], /\s{6}"stack":/)
        t.match(lines[5], /\s{6}Error: hello world/)
        // Node 12 labels the test `<anonymous>`
        t.match(lines[6], /\s{10}(at Test.t.test|at Test.<anonymous>)/)
        cb()
      }
    }))

    log.info({ err, extra: { a: 1, b: 2 } })
  })

  t.test('prettifies Error in property within errorLikeObjectKeys with custom function', (t) => {
    t.plan(4)
    const pretty = prettyFactory({
      errorLikeObjectKeys: ['err'],
      customPrettifiers: {
        err: val => `error is ${val.message}`
      }
    })

    const err = Error('hello world')
    err.stack = 'Error: hello world\n    at anonymous (C:\\project\\node_modules\\example\\index.js)'
    const expected = err.stack.split('\n')
    expected.unshift(err.message)

    const log = pino({ serializers: { err: serializers.err } }, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        const lines = formatted.split('\n')
        t.equal(lines.length, 3)
        t.equal(lines[0], `[${formattedEpoch}] INFO (${pid}): hello world`)
        t.equal(lines[1], '    err: error is hello world')
        t.equal(lines[2], '')

        cb()
      }
    }))

    log.info({ err })
  })

  t.test('prettifies Error in property within errorLikeObjectKeys when stack has escaped characters', (t) => {
    t.plan(8)
    const pretty = prettyFactory({
      errorLikeObjectKeys: ['err']
    })

    const err = Error('hello world')
    err.stack = 'Error: hello world\n    at anonymous (C:\\project\\node_modules\\example\\index.js)'
    const expected = err.stack.split('\n')
    expected.unshift(err.message)

    const log = pino({ serializers: { err: serializers.err } }, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        const lines = formatted.split('\n')
        t.equal(lines.length, expected.length + 6)
        t.equal(lines[0], `[${formattedEpoch}] INFO (${pid}): hello world`)
        t.match(lines[1], /\s{4}err: {$/)
        t.match(lines[2], /\s{6}"type": "Error",$/)
        t.match(lines[3], /\s{6}"message": "hello world",$/)
        t.match(lines[4], /\s{6}"stack":$/)
        t.match(lines[5], /\s{10}Error: hello world$/)
        t.match(lines[6], /\s{10}at anonymous \(C:\\project\\node_modules\\example\\index.js\)$/)
        cb()
      }
    }))

    log.info({ err })
  })

  t.test('prettifies Error in property within errorLikeObjectKeys when stack is not the last property', (t) => {
    t.plan(9)
    const pretty = prettyFactory({
      errorLikeObjectKeys: ['err']
    })

    const err = Error('hello world')
    err.anotherField = 'dummy value'
    const expected = err.stack.split('\n')
    expected.unshift(err.message)

    const log = pino({ serializers: { err: serializers.err } }, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        const lines = formatted.split('\n')
        t.equal(lines.length, expected.length + 7)
        t.equal(lines[0], `[${formattedEpoch}] INFO (${pid}): hello world`)
        t.match(lines[1], /\s{4}err: {/)
        t.match(lines[2], /\s{6}"type": "Error",/)
        t.match(lines[3], /\s{6}"message": "hello world",/)
        t.match(lines[4], /\s{6}"stack":/)
        t.match(lines[5], /\s{6}Error: hello world/)
        // Node 12 labels the test `<anonymous>`
        t.match(lines[6], /\s{10}(at Test.t.test|at Test.<anonymous>)/)
        t.match(lines[lines.length - 3], /\s{6}"anotherField": "dummy value"/)
        cb()
      }
    }))

    log.info({ err })
  })

  t.test('errorProps flag with "*" (print all nested props)', function (t) {
    const pretty = prettyFactory({ errorProps: '*' })
    const expectedLines = [
      '    err: {',
      '      "type": "Error",',
      '      "message": "error message",',
      '      "stack":',
      '          error stack',
      '      "statusCode": 500,',
      '      "originalStack": "original stack",',
      '      "dataBaseSpecificError": {',
      '        "erroMessage": "some database error message",',
      '        "evenMoreSpecificStuff": {',
      '          "someErrorRelatedObject": "error"',
      '        }',
      '      }',
      '    }'
    ]
    t.plan(expectedLines.length)
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        const lines = formatted.split('\n')
        lines.shift(); lines.pop()
        for (let i = 0; i < lines.length; i += 1) {
          t.equal(lines[i], expectedLines[i])
        }
        cb()
      }
    }))

    const error = Error('error message')
    error.stack = 'error stack'
    error.statusCode = 500
    error.originalStack = 'original stack'
    error.dataBaseSpecificError = {
      erroMessage: 'some database error message',
      evenMoreSpecificStuff: {
        someErrorRelatedObject: 'error'
      }
    }

    log.error(error)
  })

  t.test('prettifies legacy error object at top level when singleLine=true', function (t) {
    t.plan(4)
    const pretty = prettyFactory({ singleLine: true })
    const err = Error('hello world')
    const expected = err.stack.split('\n')
    expected.unshift(err.message)

    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        const lines = formatted.split('\n')
        t.equal(lines.length, expected.length + 1)
        t.equal(lines[0], `[${formattedEpoch}] INFO (${pid}): ${expected[0]}`)
        t.equal(lines[1], `    ${expected[1]}`)
        t.equal(lines[2], `    ${expected[2]}`)
        cb()
      }
    }))

    log.info({ type: 'Error', stack: err.stack, msg: err.message })
  })

  t.test('errorProps: legacy error object at top level', function (t) {
    const pretty = prettyFactory({ errorProps: '*' })
    const expectedLines = [
      'INFO:',
      '    error stack',
      '    message: hello message',
      '    statusCode: 500',
      '    originalStack: original stack',
      '    dataBaseSpecificError: {',
      '        errorMessage: "some database error message"',
      '        evenMoreSpecificStuff: {',
      '          "someErrorRelatedObject": "error"',
      '        }',
      '    }',
      ''
    ]

    t.plan(expectedLines.length)

    const error = {}
    error.level = 30
    error.message = 'hello message'
    error.type = 'Error'
    error.stack = 'error stack'
    error.statusCode = 500
    error.originalStack = 'original stack'
    error.dataBaseSpecificError = {
      errorMessage: 'some database error message',
      evenMoreSpecificStuff: {
        someErrorRelatedObject: 'error'
      }
    }

    const formatted = pretty(JSON.stringify(error))
    const lines = formatted.split('\n')
    for (let i = 0; i < lines.length; i += 1) {
      t.equal(lines[i], expectedLines[i])
    }
  })

  t.test('errorProps flag with a single property', function (t) {
    const pretty = prettyFactory({ errorProps: 'originalStack' })
    const expectedLines = [
      'INFO:',
      '    error stack',
      '    originalStack: original stack',
      ''
    ]
    t.plan(expectedLines.length)

    const error = {}
    error.level = 30
    error.message = 'hello message'
    error.type = 'Error'
    error.stack = 'error stack'
    error.statusCode = 500
    error.originalStack = 'original stack'
    error.dataBaseSpecificError = {
      erroMessage: 'some database error message',
      evenMoreSpecificStuff: {
        someErrorRelatedObject: 'error'
      }
    }

    const formatted = pretty(JSON.stringify(error))
    const lines = formatted.split('\n')
    for (let i = 0; i < lines.length; i += 1) {
      t.equal(lines[i], expectedLines[i])
    }
  })

  t.test('errorProps flag with a single property non existent', function (t) {
    const pretty = prettyFactory({ errorProps: 'originalStackABC' })
    const expectedLines = [
      'INFO:',
      '    error stack',
      ''
    ]
    t.plan(expectedLines.length)

    const error = {}
    error.level = 30
    error.message = 'hello message'
    error.type = 'Error'
    error.stack = 'error stack'
    error.statusCode = 500
    error.originalStack = 'original stack'
    error.dataBaseSpecificError = {
      erroMessage: 'some database error message',
      evenMoreSpecificStuff: {
        someErrorRelatedObject: 'error'
      }
    }

    const formatted = pretty(JSON.stringify(error))
    const lines = formatted.split('\n')
    for (let i = 0; i < lines.length; i += 1) {
      t.equal(lines[i], expectedLines[i])
    }
  })

  t.test('handles errors with a null stack', (t) => {
    t.plan(2)
    const pretty = prettyFactory()
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.match(formatted, /\s{4}message: "foo"/)
        t.match(formatted, /\s{4}stack: null/)
        cb()
      }
    }))

    const error = { message: 'foo', stack: null }
    log.error(error)
  })

  t.test('handles errors with a null stack for Error object', (t) => {
    const pretty = prettyFactory()
    const expectedLines = [
      '      "type": "Error",',
      '      "message": "error message",',
      '      "stack":',
      '          ',
      '      "some": "property"'
    ]
    t.plan(expectedLines.length)
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        const lines = formatted.split('\n')
        lines.shift(); lines.shift(); lines.pop(); lines.pop()
        for (let i = 0; i < lines.length; i += 1) {
          t.ok(lines[i].includes(expectedLines[i]))
        }
        cb()
      }
    }))

    const error = Error('error message')
    error.stack = null
    error.some = 'property'

    log.error(error)
  })

  t.end()
})
