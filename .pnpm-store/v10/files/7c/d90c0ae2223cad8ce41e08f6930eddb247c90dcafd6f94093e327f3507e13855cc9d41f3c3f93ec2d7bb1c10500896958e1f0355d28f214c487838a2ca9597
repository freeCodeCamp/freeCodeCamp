'use strict'

process.env.TZ = 'UTC'

const { Writable } = require('readable-stream')
const os = require('os')
const test = require('tap').test
const pino = require('pino')
const dateformat = require('dateformat')
const path = require('path')
const rimraf = require('rimraf')
const { join } = require('path')
const fs = require('fs')
const pinoPretty = require('..')
const SonicBoom = require('sonic-boom')
const _prettyFactory = pinoPretty.prettyFactory

// Disable pino warnings
process.removeAllListeners('warning')

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
const hostname = os.hostname()

test('basic prettifier tests', (t) => {
  t.beforeEach(() => {
    Date.originalNow = Date.now
    Date.now = () => epoch
  })
  t.afterEach(() => {
    Date.now = Date.originalNow
    delete Date.originalNow
  })

  t.test('preserves output if not valid JSON', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const formatted = pretty('this is not json\nit\'s just regular output\n')
    t.equal(formatted, 'this is not json\nit\'s just regular output\n\n')
  })

  t.test('formats a line without any extra options', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] INFO (${pid}): foo\n`
        )
        cb()
      }
    }))
    log.info('foo')
  })

  t.test('will add color codes', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ colorize: true })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] \u001B[32mINFO\u001B[39m (${pid}): \u001B[36mfoo\u001B[39m\n`
        )
        cb()
      }
    }))
    log.info('foo')
  })

  t.test('will omit color codes from objects when colorizeObjects = false', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ colorize: true, singleLine: true, colorizeObjects: false })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] \u001B[32mINFO\u001B[39m (${pid}): \u001B[36mfoo\u001B[39m {"foo":"bar"}\n`
        )
        cb()
      }
    }))
    log.info({ foo: 'bar' }, 'foo')
  })

  t.test('can swap date and level position', (t) => {
    t.plan(1)
    const destination = new Writable({
      write (formatted, enc, cb) {
        t.equal(
          formatted.toString(),
          `INFO [${formattedEpoch}] (${pid}): foo\n`
        )
        cb()
      }
    })
    const pretty = pinoPretty({
      destination,
      levelFirst: true,
      colorize: false
    })
    const log = pino({}, pretty)
    log.info('foo')
  })

  t.test('can print message key value when its a string', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] INFO (${pid}): baz\n`
        )
        cb()
      }
    }))
    log.info('baz')
  })

  t.test('can print message key value when its a number', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] INFO (${pid}): 42\n`
        )
        cb()
      }
    }))
    log.info(42)
  })

  t.test('can print message key value when its a Number(0)', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] INFO (${pid}): 0\n`
        )
        cb()
      }
    }))
    log.info(0)
  })

  t.test('can print message key value when its a boolean', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] INFO (${pid}): true\n`
        )
        cb()
      }
    }))
    log.info(true)
  })

  t.test('can use different message keys', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ messageKey: 'bar' })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] INFO (${pid}): baz\n`
        )
        cb()
      }
    }))
    log.info({ bar: 'baz' })
  })

  t.test('can use different level keys', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ levelKey: 'bar' })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] WARN (${pid}): foo\n`
        )
        cb()
      }
    }))
    log.info({ msg: 'foo', bar: 'warn' })
  })

  t.test('can use a customPrettifier on default level output', (t) => {
    t.plan(1)
    const veryCustomLevels = {
      30: 'ok',
      40: 'not great'
    }
    const customPrettifiers = {
      level: (level) => `LEVEL: ${veryCustomLevels[level]}`
    }
    const pretty = prettyFactory({ customPrettifiers })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] LEVEL: ok (${pid}): foo\n`
        )
        cb()
      }
    }))
    log.info({ msg: 'foo' })
  })

  t.test('can use a customPrettifier on different-level-key output', (t) => {
    t.plan(1)
    const customPrettifiers = {
      level: (level) => `LEVEL: ${level.toUpperCase()}`
    }
    const pretty = prettyFactory({ levelKey: 'bar', customPrettifiers })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] LEVEL: WARN (${pid}): foo\n`
        )
        cb()
      }
    }))
    log.info({ msg: 'foo', bar: 'warn' })
  })

  t.test('can use a customPrettifier on name output', (t) => {
    t.plan(1)
    const customPrettifiers = {
      name: (hostname) => `NAME: ${hostname}`
    }
    const pretty = prettyFactory({ customPrettifiers })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] INFO (NAME: logger/${pid}): foo\n`
        )
        cb()
      }
    }))
    const child = log.child({ name: 'logger' })
    child.info({ msg: 'foo' })
  })

  t.test('can use a customPrettifier on hostname and pid output', (t) => {
    t.plan(1)
    const customPrettifiers = {
      hostname: (hostname) => `HOSTNAME: ${hostname}`,
      pid: (pid) => `PID: ${pid}`
    }
    const pretty = prettyFactory({ customPrettifiers, ignore: '' })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] INFO (PID: ${pid} on HOSTNAME: ${hostname}): foo\n`
        )
        cb()
      }
    }))
    log.info({ msg: 'foo' })
  })

  t.test('can use a customPrettifier on default time output', (t) => {
    t.plan(1)
    const customPrettifiers = {
      time: (timestamp) => `TIME: ${timestamp}`
    }
    const pretty = prettyFactory({ customPrettifiers })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `TIME: ${formattedEpoch} INFO (${pid}): foo\n`
        )
        cb()
      }
    }))
    log.info('foo')
  })

  t.test('can use a customPrettifier on the caller', (t) => {
    t.plan(1)
    const customPrettifiers = {
      caller: (caller) => `CALLER: ${caller}`
    }
    const pretty = prettyFactory({ customPrettifiers })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] INFO (${pid}) <CALLER: test.js:10>: foo\n`
        )
        cb()
      }
    }))
    log.info({ msg: 'foo', caller: 'test.js:10' })
  })

  t.test('can use a customPrettifier on translateTime-time output', (t) => {
    t.plan(1)
    const customPrettifiers = {
      time: (timestamp) => `TIME: ${timestamp}`
    }
    const pretty = prettyFactory({ customPrettifiers, translateTime: true })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `TIME: ${formattedEpoch} INFO (${pid}): foo\n`
        )
        cb()
      }
    }))
    log.info('foo')
  })

  t.test('will format time to UTC', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ translateTime: true })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] INFO (${pid}): foo\n`
        )
        cb()
      }
    }))
    log.info('foo')
  })

  t.test('will format time to UTC in custom format', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ translateTime: 'HH:MM:ss o' })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        const utcHour = dateformat(epoch, 'UTC:' + 'HH')
        const offset = dateformat(epoch, 'UTC:' + 'o')
        t.equal(
          formatted,
          `[${utcHour}:35:28 ${offset}] INFO (${pid}): foo\n`
        )
        cb()
      }
    }))
    log.info('foo')
  })

  t.test('will format time to local systemzone in ISO 8601 format', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ translateTime: 'sys:standard' })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        const localHour = dateformat(epoch, 'HH')
        const localMinute = dateformat(epoch, 'MM')
        const localDate = dateformat(epoch, 'yyyy-mm-dd')
        const offset = dateformat(epoch, 'o')
        t.equal(
          formatted,
          `[${localDate} ${localHour}:${localMinute}:28.992 ${offset}] INFO (${pid}): foo\n`
        )
        cb()
      }
    }))
    log.info('foo')
  })

  t.test('will format time to local systemzone in custom format', (t) => {
    t.plan(1)
    const pretty = prettyFactory({
      translateTime: 'SYS:yyyy/mm/dd HH:MM:ss o'
    })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        const localHour = dateformat(epoch, 'HH')
        const localMinute = dateformat(epoch, 'MM')
        const localDate = dateformat(epoch, 'yyyy/mm/dd')
        const offset = dateformat(epoch, 'o')
        t.equal(
          formatted,
          `[${localDate} ${localHour}:${localMinute}:28 ${offset}] INFO (${pid}): foo\n`
        )
        cb()
      }
    }))
    log.info('foo')
  })

  // TODO: 2019-03-30 -- We don't really want the indentation in this case? Or at least some better formatting.
  t.test('handles missing time', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const formatted = pretty('{"hello":"world"}')
    t.equal(formatted, '    hello: "world"\n')
  })

  t.test('handles missing pid, hostname and name', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const log = pino({ base: null }, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.match(formatted, /\[.*\] INFO: hello world/)
        cb()
      }
    }))
    log.info('hello world')
  })

  t.test('handles missing pid', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const name = 'test'
    const msg = 'hello world'
    const regex = new RegExp('\\[.*\\] INFO \\(' + name + '\\): ' + msg)

    const opts = {
      base: {
        name,
        hostname
      }
    }
    const log = pino(opts, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.match(formatted, regex)
        cb()
      }
    }))

    log.info(msg)
  })

  t.test('handles missing hostname', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const name = 'test'
    const msg = 'hello world'
    const regex = new RegExp('\\[.*\\] INFO \\(' + name + '/' + pid + '\\): ' + msg)

    const opts = {
      base: {
        name,
        pid: process.pid
      }
    }
    const log = pino(opts, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.match(formatted, regex)
        cb()
      }
    }))

    log.info(msg)
  })

  t.test('handles missing name', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const msg = 'hello world'
    const regex = new RegExp('\\[.*\\] INFO \\(' + process.pid + '\\): ' + msg)

    const opts = {
      base: {
        hostname,
        pid: process.pid
      }
    }
    const log = pino(opts, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.match(formatted, regex)
        cb()
      }
    }))

    log.info(msg)
  })

  t.test('works without time', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const log = pino({ timestamp: null }, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(formatted, `INFO (${pid}): hello world\n`)
        cb()
      }
    }))
    log.info('hello world')
  })

  t.test('prettifies properties', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.match(formatted, '    a: "b"')
        cb()
      }
    }))
    log.info({ a: 'b' }, 'hello world')
  })

  t.test('prettifies nested properties', (t) => {
    t.plan(6)
    const expectedLines = [
      '    a: {',
      '      "b": {',
      '        "c": "d"',
      '      }',
      '    }'
    ]
    const pretty = prettyFactory()
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        const lines = formatted.split('\n')
        t.equal(lines.length, expectedLines.length + 2)
        lines.shift(); lines.pop()
        for (let i = 0; i < lines.length; i += 1) {
          t.equal(lines[i], expectedLines[i])
        }
        cb()
      }
    }))
    log.info({ a: { b: { c: 'd' } } }, 'hello world')
  })

  t.test('treats the name with care', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const log = pino({ name: 'matteo' }, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(formatted, `[${formattedEpoch}] INFO (matteo/${pid}): hello world\n`)
        cb()
      }
    }))
    log.info('hello world')
  })

  t.test('handles spec allowed primitives', (t) => {
    const pretty = prettyFactory()
    let formatted = pretty(null)
    t.equal(formatted, 'null\n')

    formatted = pretty(true)
    t.equal(formatted, 'true\n')

    formatted = pretty(false)
    t.equal(formatted, 'false\n')

    t.end()
  })

  t.test('handles numbers', (t) => {
    const pretty = prettyFactory()
    let formatted = pretty(2)
    t.equal(formatted, '2\n')

    formatted = pretty(-2)
    t.equal(formatted, '-2\n')

    formatted = pretty(0.2)
    t.equal(formatted, '0.2\n')

    formatted = pretty(Infinity)
    t.equal(formatted, 'Infinity\n')

    formatted = pretty(NaN)
    t.equal(formatted, 'NaN\n')

    t.end()
  })

  t.test('handles `undefined` input', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const formatted = pretty(undefined)
    t.equal(formatted, 'undefined\n')
  })

  t.test('handles customLogLevel', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const log = pino({ customLevels: { testCustom: 35 } }, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.match(formatted, /USERLVL/)
        cb()
      }
    }))
    log.testCustom('test message')
  })

  t.test('filter some lines based on minimumLevel', (t) => {
    t.plan(3)
    const pretty = prettyFactory({ minimumLevel: 'info' })
    const expected = [
      undefined,
      undefined,
      `[${formattedEpoch}] INFO (${pid}): baz\n`
    ]
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          expected.shift()
        )
        cb()
      }
    }))
    log.info({ msg: 'foo', level: 10 })
    log.info({ msg: 'bar', level: 20 })
    // only this line will be formatted
    log.info({ msg: 'baz', level: 30 })
  })

  t.test('filter lines based on minimumLevel using custom levels and level key', (t) => {
    t.plan(3)
    const pretty = prettyFactory({ minimumLevel: 20, levelKey: 'bar' })
    const expected = [
      undefined,
      `[${formattedEpoch}] DEBUG (${pid}): bar\n`,
      `[${formattedEpoch}] INFO (${pid}): baz\n`
    ]
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          expected.shift()
        )
        cb()
      }
    }))
    log.info({ msg: 'foo', bar: 10 })
    log.info({ msg: 'bar', bar: 20 })
    log.info({ msg: 'baz', bar: 30 })
  })

  t.test('formats a line with an undefined field', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const obj = JSON.parse(chunk.toString())
        // weird hack, but we should not crash
        obj.a = undefined
        const formatted = pretty(obj)
        t.equal(
          formatted,
          `[${formattedEpoch}] INFO (${pid}): foo\n`
        )
        cb()
      }
    }))
    log.info('foo')
  })

  t.test('prettifies msg object', (t) => {
    t.plan(6)
    const expectedLines = [
      '    msg: {',
      '      "b": {',
      '        "c": "d"',
      '      }',
      '    }'
    ]
    const pretty = prettyFactory()
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        const lines = formatted.split('\n')
        t.equal(lines.length, expectedLines.length + 2)
        lines.shift(); lines.pop()
        for (let i = 0; i < lines.length; i += 1) {
          t.equal(lines[i], expectedLines[i])
        }
        cb()
      }
    }))
    log.info({ msg: { b: { c: 'd' } } })
  })

  t.test('prettifies msg object with circular references', (t) => {
    t.plan(7)
    const expectedLines = [
      '    msg: {',
      '      "a": "[Circular]",',
      '      "b": {',
      '        "c": "d"',
      '      }',
      '    }'
    ]
    const pretty = prettyFactory()
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        const lines = formatted.split('\n')
        t.equal(lines.length, expectedLines.length + 2)
        lines.shift(); lines.pop()
        for (let i = 0; i < lines.length; i += 1) {
          t.equal(lines[i], expectedLines[i])
        }
        cb()
      }
    }))

    const msg = { b: { c: 'd' } }
    msg.a = msg
    log.info({ msg })
  })

  t.test('prettifies custom key', (t) => {
    t.plan(1)
    const pretty = prettyFactory({
      customPrettifiers: {
        foo: val => `${val}_baz\nmultiline`,
        cow: val => val.toUpperCase()
      }
    })
    const arst = pretty('{"msg":"hello world", "foo": "bar", "cow": "moo", "level":30}')
    t.equal(arst, 'INFO: hello world\n    foo: bar_baz\n    multiline\n    cow: MOO\n')
  })

  t.test('does not add trailing space if prettified value begins with eol', (t) => {
    t.plan(1)
    const pretty = prettyFactory({
      customPrettifiers: {
        calls: val => '\n' + val.map(it => '  ' + it).join('\n')
      }
    })
    const arst = pretty('{"msg":"doing work","calls":["step 1","step 2","step 3"],"level":30}')
    t.equal(arst, 'INFO: doing work\n    calls:\n      step 1\n      step 2\n      step 3\n')
  })

  t.test('does not prettify custom key that does not exists', (t) => {
    t.plan(1)
    const pretty = prettyFactory({
      customPrettifiers: {
        foo: val => `${val}_baz`,
        cow: val => val.toUpperCase()
      }
    })
    const arst = pretty('{"msg":"hello world", "foo": "bar", "level":30}')
    t.equal(arst, 'INFO: hello world\n    foo: bar_baz\n')
  })

  t.test('prettifies object with some undefined values', (t) => {
    t.plan(1)
    const destination = new Writable({
      write (chunk, _, cb) {
        t.equal(
          chunk + '',
          `[${formattedEpoch}] INFO (${pid}):\n    a: {\n      "b": "c"\n    }\n    n: null\n`
        )
        cb()
      }
    })
    const pretty = pinoPretty({
      destination,
      colorize: false
    })
    const log = pino({}, pretty)
    log.info({
      a: { b: 'c' },
      s: Symbol.for('s'),
      f: f => f,
      c: class C {},
      n: null,
      err: { toJSON () {} }
    })
  })

  t.test('ignores multiple keys', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ ignore: 'pid,hostname' })
    const arst = pretty(`{"msg":"hello world", "pid":"${pid}", "hostname":"${hostname}", "time":${epoch}, "level":30}`)
    t.equal(arst, `[${formattedEpoch}] INFO: hello world\n`)
  })

  t.test('ignores a single key', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ ignore: 'pid' })
    const arst = pretty(`{"msg":"hello world", "pid":"${pid}", "hostname":"${hostname}", "time":${epoch}, "level":30}`)
    t.equal(arst, `[${formattedEpoch}] INFO (on ${hostname}): hello world\n`)
  })

  t.test('ignores time', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ ignore: 'time' })
    const arst = pretty(`{"msg":"hello world", "pid":"${pid}", "hostname":"${hostname}", "time":${epoch}, "level":30}`)
    t.equal(arst, `INFO (${pid} on ${hostname}): hello world\n`)
  })

  t.test('ignores time and level', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ ignore: 'time,level' })
    const arst = pretty(`{"msg":"hello world", "pid":"${pid}", "hostname":"${hostname}", "time":${epoch}, "level":30}`)
    t.equal(arst, `(${pid} on ${hostname}): hello world\n`)
  })

  t.test('ignores all keys but message', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ ignore: 'time,level,name,pid,hostname' })
    const arst = pretty(`{"msg":"hello world", "pid":"${pid}", "hostname":"${hostname}", "time":${epoch}, "level":30}`)
    t.equal(arst, 'hello world\n')
  })

  t.test('include nothing', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ include: '' })
    const arst = pretty(`{"msg":"hello world", "pid":"${pid}", "hostname":"${hostname}", "time":${epoch}, "level":30}`)
    t.equal(arst, 'hello world\n')
  })

  t.test('include multiple keys', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ include: 'time,level' })
    const arst = pretty(`{"msg":"hello world", "pid":"${pid}", "hostname":"${hostname}", "time":${epoch}, "level":30}`)
    t.equal(arst, `[${formattedEpoch}] INFO: hello world\n`)
  })

  t.test('include a single key', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ include: 'level' })
    const arst = pretty(`{"msg":"hello world", "pid":"${pid}", "hostname":"${hostname}", "time":${epoch}, "level":30}`)
    t.equal(arst, 'INFO: hello world\n')
  })

  t.test('include should override ignore', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ ignore: 'time,level', include: 'time,level' })
    const arst = pretty(`{"msg":"hello world", "pid":"${pid}", "hostname":"${hostname}", "time":${epoch}, "level":30}`)
    t.equal(arst, `[${formattedEpoch}] INFO: hello world\n`)
  })

  t.test('prettifies trace caller', (t) => {
    t.plan(1)
    const traceCaller = (instance) => {
      const { symbols: { asJsonSym } } = pino
      const get = (target, name) => name === asJsonSym ? asJson : target[name]

      function asJson (...args) {
        args[0] = args[0] || {}
        args[0].caller = '/tmp/script.js'
        return instance[asJsonSym].apply(this, args)
      }

      return new Proxy(instance, { get })
    }

    const pretty = prettyFactory()
    const log = traceCaller(pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(
          formatted,
          `[${formattedEpoch}] INFO (${pid}) </tmp/script.js>: foo\n`
        )
        cb()
      }
    })))
    log.info('foo')
  })

  t.test('handles specified timestampKey', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ timestampKey: '@timestamp' })
    const arst = pretty(`{"msg":"hello world", "@timestamp":${epoch}, "level":30}`)
    t.equal(arst, `[${formattedEpoch}] INFO: hello world\n`)
  })

  t.test('keeps "v" key in log', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ ignore: 'time' })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(formatted, `INFO (${pid} on ${hostname}):\n    v: 1\n`)
        cb()
      }
    }))
    log.info({ v: 1 })
  })

  t.test('Hide object `{ key: "value" }` from output when flag `hideObject` is set', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ hideObject: true })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(formatted, `[${formattedEpoch}] INFO (${pid}): hello world\n`)
        cb()
      }
    }))
    log.info({ key: 'value' }, 'hello world')
  })

  t.test('Prints extra objects on one line with singleLine=true', (t) => {
    t.plan(1)
    const pretty = prettyFactory({
      singleLine: true,
      colorize: false,
      customPrettifiers: {
        upper: val => val.toUpperCase(),
        undef: () => undefined
      }
    })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(formatted, `[${formattedEpoch}] INFO (${pid}): message {"extra":{"foo":"bar","number":42},"upper":"FOOBAR"}\n`)

        cb()
      }
    }))
    log.info({ msg: 'message', extra: { foo: 'bar', number: 42 }, upper: 'foobar', undef: 'this will not show up' })
  })

  t.test('Does not print empty object with singleLine=true', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ singleLine: true, colorize: false })
    const log = pino({}, new Writable({
      write (chunk, enc, cb) {
        const formatted = pretty(chunk.toString())
        t.equal(formatted, `[${formattedEpoch}] INFO (${pid}): message\n`)
        cb()
      }
    }))
    log.info({ msg: 'message' })
  })

  t.test('default options', (t) => {
    t.plan(1)
    t.doesNotThrow(pinoPretty)
  })

  t.test('does not call fs.close on stdout stream', (t) => {
    t.plan(2)
    const destination = pino.destination({ minLength: 4096, sync: true })
    const prettyDestination = pinoPretty({ destination, colorize: false })
    const log = pino(prettyDestination)
    log.info('this message has been buffered')
    const chunks = []
    const { close, writeSync } = fs
    let closeCalled = false
    fs.close = new Proxy(close, {
      apply: (target, self, args) => {
        closeCalled = true
      }
    })
    fs.writeSync = new Proxy(writeSync, {
      apply: (target, self, args) => {
        chunks.push(args[1])
        return args[1].length
      }
    })
    destination.end()
    Object.assign(fs, { close, writeSync })
    t.match(chunks.join(''), /INFO .+: this message has been buffered/)
    t.equal(closeCalled, false)
  })

  t.test('stream usage', async (t) => {
    t.plan(1)
    const tmpDir = path.join(__dirname, '.tmp_' + Date.now())
    t.teardown(() => rimraf(tmpDir, noop))

    const destination = join(tmpDir, 'output')

    const pretty = pinoPretty({
      singleLine: true,
      colorize: false,
      mkdir: true,
      append: false,
      destination: new SonicBoom({ dest: destination, async: false, mkdir: true, append: true }),
      customPrettifiers: {
        upper: val => val.toUpperCase(),
        undef: () => undefined
      }
    })
    const log = pino(pretty)
    log.info({ msg: 'message', extra: { foo: 'bar', number: 42 }, upper: 'foobar', undef: 'this will not show up' })

    await watchFileCreated(destination)

    const formatted = fs.readFileSync(destination, 'utf8')

    t.equal(formatted, `[${formattedEpoch}] INFO (${pid}): message {"extra":{"foo":"bar","number":42},"upper":"FOOBAR"}\n`)
  })

  t.test('sync option', async (t) => {
    t.plan(1)
    const tmpDir = path.join(__dirname, '.tmp_' + Date.now())
    t.teardown(() => rimraf(tmpDir, noop))

    const destination = join(tmpDir, 'output')

    const pretty = pinoPretty({
      singleLine: true,
      colorize: false,
      mkdir: true,
      append: false,
      sync: true,
      destination
    })
    const log = pino(pretty)
    log.info({ msg: 'message', extra: { foo: 'bar', number: 42 }, upper: 'foobar' })

    const formatted = fs.readFileSync(destination, 'utf8')

    t.equal(formatted, `[${formattedEpoch}] INFO (${pid}): message {"extra":{"foo":"bar","number":42},"upper":"foobar"}\n`)
  })

  t.end()
})

function watchFileCreated (filename) {
  return new Promise((resolve, reject) => {
    const TIMEOUT = 2000
    const INTERVAL = 100
    const threshold = TIMEOUT / INTERVAL
    let counter = 0
    const interval = setInterval(() => {
      // On some CI runs file is created but not filled
      if (fs.existsSync(filename) && fs.statSync(filename).size !== 0) {
        clearInterval(interval)
        resolve()
      } else if (counter <= threshold) {
        counter++
      } else {
        clearInterval(interval)
        reject(new Error(`${filename} was not created.`))
      }
    }, INTERVAL)
  })
}

function noop () {}
