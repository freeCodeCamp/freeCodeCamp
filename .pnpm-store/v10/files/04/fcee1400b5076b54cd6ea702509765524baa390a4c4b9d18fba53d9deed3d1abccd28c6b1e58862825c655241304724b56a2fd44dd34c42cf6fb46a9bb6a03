'use strict'

const bench = require('fastbench')
const pino = require('../')
const bunyan = require('bunyan')
const bole = require('bole')('bench')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const plogNodeStream = pino(dest)
const plogDest = pino(pino.destination(('/dev/null')))
delete require.cache[require.resolve('../')]
const plogMinLength = require('../')(pino.destination({ dest: '/dev/null', sync: false, minLength: 4096 }))

const max = 10
const blog = bunyan.createLogger({
  name: 'myapp',
  streams: [{
    level: 'trace',
    stream: dest
  }]
})

require('bole').output({
  level: 'info',
  stream: dest
}).setFastTime(true)

const run = bench([
  function benchBunyanCreation (cb) {
    const child = blog.child({ a: 'property' })
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchBoleCreation (cb) {
    const child = bole('child')
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoCreation (cb) {
    const child = plogDest.child({ a: 'property' })
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoMinLengthCreation (cb) {
    const child = plogMinLength.child({ a: 'property' })
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoNodeStreamCreation (cb) {
    const child = plogNodeStream.child({ a: 'property' })
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoCreationWithOption (cb) {
    const child = plogDest.child({ a: 'property' }, { redact: [] })
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  }
], 10000)

run(run)
