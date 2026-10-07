'use strict'

const bench = require('fastbench')
const pino = require('../../')

const base = pino(pino.destination('/dev/null'))
const baseCl = pino({
  customLevels: { foo: 31 }
}, pino.destination('/dev/null'))
const child = base.child({})
const childCl = base.child({
  customLevels: { foo: 31 }
})
const childOfBaseCl = baseCl.child({})

const max = 100

const run = bench([
  function benchPinoNoCustomLevel (cb) {
    for (var i = 0; i < max; i++) {
      base.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoCustomLevel (cb) {
    for (var i = 0; i < max; i++) {
      baseCl.foo({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchChildNoCustomLevel (cb) {
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChildCustomLevel (cb) {
    for (var i = 0; i < max; i++) {
      childCl.foo({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChildInheritedCustomLevel (cb) {
    for (var i = 0; i < max; i++) {
      childOfBaseCl.foo({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChildCreation (cb) {
    const child = base.child({})
    for (var i = 0; i < max; i++) {
      child.info({ hello: 'world' })
    }
    setImmediate(cb)
  },
  function benchPinoChildCreationCustomLevel (cb) {
    const child = base.child({
      customLevels: { foo: 31 }
    })
    for (var i = 0; i < max; i++) {
      child.foo({ hello: 'world' })
    }
    setImmediate(cb)
  }
], 10000)

run(run)
