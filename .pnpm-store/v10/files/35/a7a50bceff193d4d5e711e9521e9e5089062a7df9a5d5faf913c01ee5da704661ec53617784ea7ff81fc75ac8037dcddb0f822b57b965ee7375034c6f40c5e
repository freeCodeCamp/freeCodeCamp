'use strict'

const bench = require('fastbench')
const pino = require('../')
const bunyan = require('bunyan')
const bole = require('bole')('bench')('child')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const plogNodeStream = pino(dest).child({ a: 'property' })
delete require.cache[require.resolve('../')]
const plogDest = require('../')(pino.destination('/dev/null')).child({ a: 'property' })
delete require.cache[require.resolve('../')]
const plogMinLength = require('../')(pino.destination({ dest: '/dev/null', sync: false, minLength: 4096 }))

const max = 10
const blog = bunyan.createLogger({
  name: 'myapp',
  streams: [{
    level: 'trace',
    stream: dest
  }]
}).child({ a: 'property' })

require('bole').output({
  level: 'info',
  stream: dest
}).setFastTime(true)

const run = bench([
  function benchBunyanChild (cb) {
    for (var i = 0; i < max; i++) {
      blog.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchBoleChild (cb) {
    for (var i = 0; i < max; i++) {
      bole.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChild (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoMinLengthChild (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoNodeStreamChild (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info({ hello: 'world' })
    }
    setImmediate(cb)
  }
], 10000)

run(run)
