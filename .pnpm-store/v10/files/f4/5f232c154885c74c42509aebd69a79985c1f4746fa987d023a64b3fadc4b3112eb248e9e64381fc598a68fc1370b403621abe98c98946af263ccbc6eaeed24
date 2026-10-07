'use strict'

const bench = require('fastbench')
const pino = require('../')
const bunyan = require('bunyan')
const bole = require('bole')('bench')
const winston = require('winston')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')
const plogNodeStream = pino(dest)
delete require.cache[require.resolve('../')]
const plogDest = require('../')(pino.destination('/dev/null'))
delete require.cache[require.resolve('../')]
const plogMinLength = require('../')(pino.destination({ dest: '/dev/null', sync: false, minLength: 4096 }))
delete require.cache[require.resolve('../')]

const deep = require('../package.json')
deep.deep = Object.assign({}, JSON.parse(JSON.stringify(deep)))
deep.deep.deep = Object.assign({}, JSON.parse(JSON.stringify(deep)))
deep.deep.deep.deep = Object.assign({}, JSON.parse(JSON.stringify(deep)))

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

const max = 10

const run = bench([
  function benchBunyanInterpolate (cb) {
    for (var i = 0; i < max; i++) {
      blog.info('hello %s', 'world')
    }
    setImmediate(cb)
  },
  function benchWinstonInterpolate (cb) {
    for (var i = 0; i < max; i++) {
      chill.log('info', 'hello %s', 'world')
    }
    setImmediate(cb)
  },
  function benchBoleInterpolate (cb) {
    for (var i = 0; i < max; i++) {
      bole.info('hello %s', 'world')
    }
    setImmediate(cb)
  },
  function benchPinoInterpolate (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello %s', 'world')
    }
    setImmediate(cb)
  },
  function benchPinoMinLengthInterpolate (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info('hello %s', 'world')
    }
    setImmediate(cb)
  },
  function benchPinoNodeStreamInterpolate (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info('hello %s', 'world')
    }
    setImmediate(cb)
  },
  function benchBunyanInterpolateAll (cb) {
    for (var i = 0; i < max; i++) {
      blog.info('hello %s %j %d', 'world', { obj: true }, 4)
    }
    setImmediate(cb)
  },

  function benchWinstonInterpolateAll (cb) {
    for (var i = 0; i < max; i++) {
      chill.log('info', 'hello %s %j %d', 'world', { obj: true }, 4)
    }
    setImmediate(cb)
  },
  function benchBoleInterpolateAll (cb) {
    for (var i = 0; i < max; i++) {
      bole.info('hello %s %j %d', 'world', { obj: true }, 4)
    }
    setImmediate(cb)
  },
  function benchPinoInterpolateAll (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello %s %j %d', 'world', { obj: true }, 4)
    }
    setImmediate(cb)
  },
  function benchPinoMinLengthInterpolateAll (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info('hello %s %j %d', 'world', { obj: true }, 4)
    }
    setImmediate(cb)
  },
  function benchPinoNodeStreamInterpolateAll (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info('hello %s %j %d', 'world', { obj: true }, 4)
    }
    setImmediate(cb)
  },
  function benchBunyanInterpolateExtra (cb) {
    for (var i = 0; i < max; i++) {
      blog.info('hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })
    }
    setImmediate(cb)
  },
  function benchWinstonInterpolateExtra (cb) {
    for (var i = 0; i < max; i++) {
      chill.log('info', 'hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })
    }
    setImmediate(cb)
  },
  function benchBoleInterpolateExtra (cb) {
    for (var i = 0; i < max; i++) {
      bole.info('hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })
    }
    setImmediate(cb)
  },
  function benchPinoInterpolateExtra (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })
    }
    setImmediate(cb)
  },
  function benchPinoMinLengthInterpolateExtra (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info('hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })
    }
    setImmediate(cb)
  },
  function benchPinoNodeStreamInterpolateExtra (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info('hello %s %j %d', 'world', { obj: true }, 4, { another: 'obj' })
    }
    setImmediate(cb)
  },
  function benchBunyanInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      blog.info('hello %j', deep)
    }
    setImmediate(cb)
  },
  function benchWinstonInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      chill.log('info', 'hello %j', deep)
    }
    setImmediate(cb)
  },
  function benchBoleInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      bole.info('hello %j', deep)
    }
    setImmediate(cb)
  },
  function benchPinoInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      plogDest.info('hello %j', deep)
    }
    setImmediate(cb)
  },
  function benchPinoMinLengthInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      plogMinLength.info('hello %j', deep)
    }
    setImmediate(cb)
  },
  function benchPinoNodeStreamInterpolateDeep (cb) {
    for (var i = 0; i < max; i++) {
      plogNodeStream.info('hello %j', deep)
    }
    setImmediate(cb)
  }
], 10000)

run(run)
