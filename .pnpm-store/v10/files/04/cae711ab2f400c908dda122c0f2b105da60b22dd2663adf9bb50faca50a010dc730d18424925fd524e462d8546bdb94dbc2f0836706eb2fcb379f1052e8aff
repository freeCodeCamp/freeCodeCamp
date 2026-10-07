'use strict'

const { test, mockRequire } = require('tap')
const { kThenifyDoNotWrap } = require('../../lib/symbols')

test('thenify', (t) => {
  t.plan(7)

  t.test('return undefined if booted', (t) => {
    t.plan(2)

    const { thenify } = mockRequire('../../lib/thenify', {
      '../../lib/debug': {
        debug: (message) => { t.equal(message, 'thenify returning undefined because we are already booted') }
      }
    })
    const result = thenify.call({
      booted: true
    })
    t.equal(result, undefined)
  })

  t.test('return undefined if kThenifyDoNotWrap is true', (t) => {
    t.plan(1)

    const { thenify } = require('../../lib/thenify')
    const result = thenify.call({
      [kThenifyDoNotWrap]: true
    })
    t.equal(result, undefined)
  })

  t.test('return PromiseConstructorLike if kThenifyDoNotWrap is false', (t) => {
    t.plan(3)

    const { thenify } = mockRequire('../../lib/thenify', {
      '../../lib/debug': {
        debug: (message) => { t.equal(message, 'thenify') }
      }
    })
    const promiseContructorLike = thenify.call({
      [kThenifyDoNotWrap]: false
    })

    t.type(promiseContructorLike, 'function')
    t.equal(promiseContructorLike.length, 2)
  })

  t.test('return PromiseConstructorLike', (t) => {
    t.plan(3)

    const { thenify } = mockRequire('../../lib/thenify', {
      '../../lib/debug': {
        debug: (message) => { t.equal(message, 'thenify') }
      }
    })
    const promiseContructorLike = thenify.call({})

    t.type(promiseContructorLike, 'function')
    t.equal(promiseContructorLike.length, 2)
  })

  t.test('resolve should return _server', async (t) => {
    t.plan(1)

    const { thenify } = require('../../lib/thenify')

    const server = {
      _loadRegistered: () => {
        return Promise.resolve()
      },
      _server: 'server'
    }
    const promiseContructorLike = thenify.call(server)

    promiseContructorLike(function (value) {
      t.equal(value, 'server')
    }, function (reason) {
      t.error(reason)
    })
  })

  t.test('resolving should set kThenifyDoNotWrap to true', async (t) => {
    t.plan(1)

    const { thenify } = require('../../lib/thenify')

    const server = {
      _loadRegistered: () => {
        return Promise.resolve()
      },
      [kThenifyDoNotWrap]: false,
      _server: 'server'
    }
    const promiseContructorLike = thenify.call(server)

    promiseContructorLike(function (value) {
      t.equal(server[kThenifyDoNotWrap], true)
    }, function (reason) {
      t.error(reason)
    })
  })

  t.test('rejection should pass through to reject', async (t) => {
    t.plan(1)

    const { thenify } = require('../../lib/thenify')

    const server = {
      _loadRegistered: () => {
        return Promise.reject(new Error('Arbitrary rejection'))
      },
      _server: 'server'
    }
    const promiseContructorLike = thenify.call(server)

    promiseContructorLike(function (value) {
      t.error(value)
    }, function (reason) {
      t.equal(reason.message, 'Arbitrary rejection')
    })
  })
})
