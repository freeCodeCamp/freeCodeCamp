'use strict'

process.env.TZ = 'UTC'

const test = require('tap').test
const _prettyFactory = require('../').prettyFactory

function prettyFactory (opts) {
  if (!opts) {
    opts = { colorize: false }
  } else if (!Object.prototype.hasOwnProperty.call(opts, 'colorize')) {
    opts.colorize = false
  }
  return _prettyFactory(opts)
}

const logLine = '{"level":30,"time":1522431328992,"msg":"hello world","pid":42,"hostname":"foo"}\n'

test('crlf', (t) => {
  t.test('uses LF by default', (t) => {
    t.plan(1)
    const pretty = prettyFactory()
    const formatted = pretty(logLine)
    t.equal(formatted.substr(-2), 'd\n')
  })

  t.test('can use CRLF', (t) => {
    t.plan(1)
    const pretty = prettyFactory({ crlf: true })
    const formatted = pretty(logLine)
    t.equal(formatted.substr(-3), 'd\r\n')
  })

  t.end()
})
