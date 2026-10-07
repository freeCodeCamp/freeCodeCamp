'use strict'

// We do not expect amazing numbers from `pino-pretty` as the whole purpose
// of the module is a very slow operation. However, this benchmark should give
// us some guidance on how features, or code changes, will affect the
// performance of the module.

const bench = require('fastbench')
const {
  prettyFactory
} = require('./index')

const max = 10
const tstampMillis = 1693401358754

/* eslint-disable no-var */
const run = bench([
  function basicLog (cb) {
    const pretty = prettyFactory({})
    const input = `{"time":${tstampMillis},"pid":1,"hostname":"foo","msg":"benchmark","foo":"foo","bar":{"bar":"bar"}}\n`
    for (var i = 0; i < max; i += 1) {
      pretty(input)
    }
    setImmediate(cb)
  },

  function objectLog (cb) {
    const pretty = prettyFactory({})
    const input = {
      time: tstampMillis,
      pid: 1,
      hostname: 'foo',
      msg: 'benchmark',
      foo: 'foo',
      bar: { bar: 'bar' }
    }
    for (var i = 0; i < max; i += 1) {
      pretty(input)
    }
    setImmediate(cb)
  },

  function coloredLog (cb) {
    const pretty = prettyFactory({ colorize: true })
    const input = `{"time":${tstampMillis},"pid":1,"hostname":"foo","msg":"benchmark","foo":"foo","bar":{"bar":"bar"}}\n`
    for (var i = 0; i < max; i += 1) {
      pretty(input)
    }
    setImmediate(cb)
  },

  function customPrettifiers (cb) {
    const pretty = prettyFactory({
      customPrettifiers: {
        time (tstamp) {
          return tstamp
        },
        pid () {
          return ''
        }
      }
    })
    const input = `{"time":${tstampMillis},"pid":1,"hostname":"foo","msg":"benchmark","foo":"foo","bar":{"bar":"bar"}}\n`
    for (var i = 0; i < max; i += 1) {
      pretty(input)
    }
    setImmediate(cb)
  },

  function logWithErrorObject (cb) {
    const pretty = prettyFactory({})
    const err = Error('boom')
    const input = `{"time":${tstampMillis},"pid":1,"hostname":"foo","msg":"benchmark","foo":"foo","bar":{"bar":"bar"},"err":{"message":"${err.message}","stack":"${err.stack}"}}\n`
    for (var i = 0; i < max; i += 1) {
      pretty(input)
    }
    setImmediate(cb)
  },

  function logRemappedMsgErrKeys (cb) {
    const pretty = prettyFactory({
      messageKey: 'message',
      errorLikeObjectKeys: ['myError']
    })
    const err = Error('boom')
    const input = `{"time":${tstampMillis},"pid":1,"hostname":"foo","message":"benchmark","foo":"foo","bar":{"bar":"bar"},"myError":{"message":"${err.message}","stack":"${err.stack}"}}\n`
    for (var i = 0; i < max; i += 1) {
      pretty(input)
    }
    setImmediate(cb)
  },

  function messageFormatString (cb) {
    const pretty = prettyFactory({
      messageFormat: '{levelLabel}{if pid} {pid} - {end}{msg}'
    })
    const input = `{"time":${tstampMillis},"pid":1,"hostname":"foo","msg":"benchmark","foo":"foo","bar":{"bar":"bar"}}\n`
    for (var i = 0; i < max; i += 1) {
      pretty(input)
    }
    setImmediate(cb)
  }
], 10000)

run(run)
