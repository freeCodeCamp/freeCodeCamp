'use strict'

const formatters = {
  level (label, number) {
    return {
      log: {
        level: label
      }
    }
  },
  bindings (bindings) {
    return {
      process: {
        pid: bindings.pid
      },
      host: {
        name: bindings.hostname
      }
    }
  },
  log (obj) {
    return { foo: 'bar', ...obj }
  }
}

const bench = require('fastbench')
const pino = require('../')
delete require.cache[require.resolve('../')]
const pinoNoFormatters = require('../')(pino.destination('/dev/null'))
delete require.cache[require.resolve('../')]
const pinoFormatters = require('../')({ formatters }, pino.destination('/dev/null'))

const max = 10

const run = bench([
  function benchPinoNoFormatters (cb) {
    for (var i = 0; i < max; i++) {
      pinoNoFormatters.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoFormatters (cb) {
    for (var i = 0; i < max; i++) {
      pinoFormatters.info({ hello: 'world' })
    }
    setImmediate(cb)
  }
], 10000)

run(run)
