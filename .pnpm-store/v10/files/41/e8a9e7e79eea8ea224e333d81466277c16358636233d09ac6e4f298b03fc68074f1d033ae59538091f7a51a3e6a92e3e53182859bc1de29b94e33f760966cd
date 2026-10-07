'use strict'

const bench = require('fastbench')
const pino = require('../')
const bunyan = require('bunyan')
const bole = require('bole')('bench')
const winston = require('winston')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const loglevel = require('./utils/wrap-log-level')(dest)
const plogNodeStream = pino(dest)
delete require.cache[require.resolve('../')]
const plogMinLength = require('../')(pino.destination({ dest: '/dev/null', minLength: 4096 }))
delete require.cache[require.resolve('../')]
const plogDest = require('../')(pino.destination('/dev/null'))

process.env.DEBUG = 'dlog'
const debug = require('debug')
const dlog = debug('dlog')
dlog.log = function (s) { dest.write(s) }

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

const chill = winston.createLogger({
  transports: [
    new winston.transports.Stream({
      stream: fs.createWriteStream('/dev/null')
    })
  ]
})

const run = bench([
  function benchBunyan (cb) {
    for (var i = 0; i < max; i++) {
      blog.info('hello world')
    }
    setImmediate(cb)
  },
  function benchWinston (cb) {
    for (var i = 0; i < max; i++) {
      chill.log('info', 'hello world')
    }
    setImmediate(cb)
  },
  function benchBole (cb) {
    for (var i = 0; i < max; i++) {
      bole.info('hello world')
    }
    setImmediate(cb)
  },
  function benchDebug (cb) {
    for (var i = 0; i < max; i++) {
      dlog('hello world')
    }
    setImmediate(cb)
  },
  function benchLogLevel (cb) {
    for (var i = 0; i < max; i++) {
      loglevel.info('hello world')
    }
    setImmediate(cb)
  },
  function benchPino (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello world')
    }
    setImmediate(cb)
  },
  function benchPinoMinLength (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info('hello world')
    }
    setImmediate(cb)
  },
  function benchPinoNodeStream (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info('hello world')
    }
    setImmediate(cb)
  }
], 10000)

run(run)
