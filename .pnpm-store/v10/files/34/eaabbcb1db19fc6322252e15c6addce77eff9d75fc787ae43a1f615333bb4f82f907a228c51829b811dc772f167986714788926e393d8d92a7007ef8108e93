'use strict'

const bench = require('fastbench')
const pino = require('../../')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const plog = pino(dest)
delete require.cache[require.resolve('../../')]
const plogDest = require('../../')(pino.destination('/dev/null'))
delete require.cache[require.resolve('../../')]
const plogAsync = require('../../')(pino.destination({ dest: '/dev/null', sync: false }))
const deep = require('../../package.json')
deep.deep = JSON.parse(JSON.stringify(deep))
deep.deep.deep = JSON.parse(JSON.stringify(deep))
const longStr = JSON.stringify(deep)

const max = 10

const run = bench([
  function benchPinoLongString (cb) {
    for (var i = 0; i < max; i++) {
      plog.info(longStr)
    }
    setImmediate(cb)
  },
  function benchPinoDestLongString (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info(longStr)
    }
    setImmediate(cb)
  },
  function benchPinoAsyncLongString (cb) {
    for (var i = 0; i < max; i++) {
      plogAsync.info(longStr)
    }
    setImmediate(cb)
  },
  function benchPinoDeepObj (cb) {
    for (var i = 0; i < max; i++) {
      plog.info(deep)
    }
    setImmediate(cb)
  },
  function benchPinoDestDeepObj (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info(deep)
    }
    setImmediate(cb)
  },
  function benchPinoAsyncDeepObj (cb) {
    for (var i = 0; i < max; i++) {
      plogAsync.info(deep)
    }
    setImmediate(cb)
  },
  function benchPinoInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      plog.info('hello %j', deep)
    }
    setImmediate(cb)
  },
  function benchPinoDestInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello %j', deep)
    }
    setImmediate(cb)
  },
  function benchPinoAsyncInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      plogAsync.info('hello %j', deep)
    }
    setImmediate(cb)
  }
], 1000)

run(run)
