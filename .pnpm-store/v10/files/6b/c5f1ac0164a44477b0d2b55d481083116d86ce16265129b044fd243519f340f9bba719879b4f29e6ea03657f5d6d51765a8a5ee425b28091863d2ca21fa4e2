'use strict'

const bench = require('fastbench')
const bunyan = require('bunyan')
const pino = require('../')
const fs = require('node:fs')
const dest = fs.createWriteStream('/dev/null')

const tenStreams = [
  { stream: dest },
  { stream: dest },
  { stream: dest },
  { stream: dest },
  { stream: dest },
  { level: 'debug', stream: dest },
  { level: 'debug', stream: dest },
  { level: 'trace', stream: dest },
  { level: 'warn', stream: dest },
  { level: 'fatal', stream: dest }
]
const pinomsTen = pino({ level: 'debug' }, pino.multistream(tenStreams))

const fourStreams = [
  { stream: dest },
  { stream: dest },
  { level: 'debug', stream: dest },
  { level: 'trace', stream: dest }
]
const pinomsFour = pino({ level: 'debug' }, pino.multistream(fourStreams))

const pinomsOne = pino({ level: 'info' }, pino.multistream(dest))
const blogOne = bunyan.createLogger({
  name: 'myapp',
  streams: [{ stream: dest }]
})

const blogTen = bunyan.createLogger({
  name: 'myapp',
  streams: tenStreams
})
const blogFour = bunyan.createLogger({
  name: 'myapp',
  streams: fourStreams
})

const max = 10
const run = bench([
  function benchBunyanTen (cb) {
    for (let i = 0; i < max; i++) {
      blogTen.info('hello world')
      blogTen.debug('hello world')
      blogTen.trace('hello world')
      blogTen.warn('hello world')
      blogTen.fatal('hello world')
    }
    setImmediate(cb)
  },
  function benchPinoMSTen (cb) {
    for (let i = 0; i < max; i++) {
      pinomsTen.info('hello world')
      pinomsTen.debug('hello world')
      pinomsTen.trace('hello world')
      pinomsTen.warn('hello world')
      pinomsTen.fatal('hello world')
    }
    setImmediate(cb)
  },
  function benchBunyanFour (cb) {
    for (let i = 0; i < max; i++) {
      blogFour.info('hello world')
      blogFour.debug('hello world')
      blogFour.trace('hello world')
    }
    setImmediate(cb)
  },
  function benchPinoMSFour (cb) {
    for (let i = 0; i < max; i++) {
      pinomsFour.info('hello world')
      pinomsFour.debug('hello world')
      pinomsFour.trace('hello world')
    }
    setImmediate(cb)
  },
  function benchBunyanOne (cb) {
    for (let i = 0; i < max; i++) {
      blogOne.info('hello world')
    }
    setImmediate(cb)
  },
  function benchPinoMSOne (cb) {
    for (let i = 0; i < max; i++) {
      pinomsOne.info('hello world')
    }
    setImmediate(cb)
  }
], 10000)

run()
