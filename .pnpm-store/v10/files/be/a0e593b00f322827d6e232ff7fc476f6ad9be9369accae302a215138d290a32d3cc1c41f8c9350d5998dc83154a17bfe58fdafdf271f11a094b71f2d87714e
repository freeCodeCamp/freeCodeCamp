'use strict'

const { test } = require('node:test')
const { hookRunnerGenerator, onSendHookRunner } = require('../../lib/hooks')

test('hookRunner - Basic', t => {
  t.plan(9)

  const hookRunner = hookRunnerGenerator(iterator)

  hookRunner([fn1, fn2, fn3], 'a', 'b', done)

  function iterator (fn, a, b, done) {
    return fn(a, b, done)
  }

  function fn1 (a, b, done) {
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
    done()
  }

  function fn2 (a, b, done) {
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
    done()
  }

  function fn3 (a, b, done) {
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
    done()
  }

  function done (err, a, b) {
    t.assert.ifError(err)
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
  }
})

test('hookRunner - In case of error should skip to done', t => {
  t.plan(7)

  const hookRunner = hookRunnerGenerator(iterator)

  hookRunner([fn1, fn2, fn3], 'a', 'b', done)

  function iterator (fn, a, b, done) {
    return fn(a, b, done)
  }

  function fn1 (a, b, done) {
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
    done()
  }

  function fn2 (a, b, done) {
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
    done(new Error('kaboom'))
  }

  function fn3 () {
    t.assert.fail('We should not be here')
  }

  function done (err, a, b) {
    t.assert.strictEqual(err.message, 'kaboom')
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
  }
})

test('hookRunner - Should handle throw', t => {
  t.plan(7)

  const hookRunner = hookRunnerGenerator(iterator)

  hookRunner([fn1, fn2, fn3], 'a', 'b', done)

  function iterator (fn, a, b, done) {
    return fn(a, b, done)
  }

  function fn1 (a, b, done) {
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
    done()
  }

  function fn2 (a, b, done) {
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
    throw new Error('kaboom')
  }

  function fn3 () {
    t.assert.fail('We should not be here')
  }

  function done (err, a, b) {
    t.assert.strictEqual(err.message, 'kaboom')
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
  }
})

test('hookRunner - Should handle promises', t => {
  t.plan(9)

  const hookRunner = hookRunnerGenerator(iterator)

  hookRunner([fn1, fn2, fn3], 'a', 'b', done)

  function iterator (fn, a, b, done) {
    return fn(a, b, done)
  }

  function fn1 (a, b) {
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
    return Promise.resolve()
  }

  function fn2 (a, b) {
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
    return Promise.resolve()
  }

  function fn3 (a, b) {
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
    return Promise.resolve()
  }

  function done (err, a, b) {
    t.assert.ifError(err)
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
  }
})

test('hookRunner - In case of error should skip to done (with promises)', t => {
  t.plan(7)

  const hookRunner = hookRunnerGenerator(iterator)

  hookRunner([fn1, fn2, fn3], 'a', 'b', done)

  function iterator (fn, a, b, done) {
    return fn(a, b, done)
  }

  function fn1 (a, b) {
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
    return Promise.resolve()
  }

  function fn2 (a, b) {
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
    return Promise.reject(new Error('kaboom'))
  }

  function fn3 () {
    t.assert.fail('We should not be here')
  }

  function done (err, a, b) {
    t.assert.strictEqual(err.message, 'kaboom')
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
  }
})

test('hookRunner - Be able to exit before its natural end', t => {
  t.plan(4)

  const hookRunner = hookRunnerGenerator(iterator)

  let shouldStop = false
  hookRunner([fn1, fn2, fn3], 'a', 'b', done)

  function iterator (fn, a, b, done) {
    if (shouldStop) {
      return undefined
    }
    return fn(a, b, done)
  }

  function fn1 (a, b, done) {
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
    done()
  }

  function fn2 (a, b) {
    t.assert.strictEqual(a, 'a')
    t.assert.strictEqual(b, 'b')
    shouldStop = true
    return Promise.resolve()
  }

  function fn3 () {
    t.assert.fail('this should not be called')
  }

  function done () {
    t.assert.fail('this should not be called')
  }
})

test('hookRunner - Promises that resolve to a value do not change the state', t => {
  t.plan(5)

  const originalState = { a: 'a', b: 'b' }

  const hookRunner = hookRunnerGenerator(iterator)

  hookRunner([fn1, fn2, fn3], originalState, 'b', done)

  function iterator (fn, state, b, done) {
    return fn(state, b, done)
  }

  function fn1 (state, b, done) {
    t.assert.strictEqual(state, originalState)
    return Promise.resolve(null)
  }

  function fn2 (state, b, done) {
    t.assert.strictEqual(state, originalState)
    return Promise.resolve('string')
  }

  function fn3 (state, b, done) {
    t.assert.strictEqual(state, originalState)
    return Promise.resolve({ object: true })
  }

  function done (err, state, b) {
    t.assert.ifError(err)
    t.assert.strictEqual(state, originalState)
  }
})

test('onSendHookRunner - Basic', t => {
  t.plan(13)

  const originalRequest = { body: null }
  const originalReply = { request: originalRequest }
  const originalPayload = 'payload'

  onSendHookRunner([fn1, fn2, fn3], originalRequest, originalReply, originalPayload, done)

  function fn1 (request, reply, payload, done) {
    t.assert.deepStrictEqual(request, originalRequest)
    t.assert.deepStrictEqual(reply, originalReply)
    t.assert.strictEqual(payload, originalPayload)
    done()
  }

  function fn2 (request, reply, payload, done) {
    t.assert.deepStrictEqual(request, originalRequest)
    t.assert.deepStrictEqual(reply, originalReply)
    t.assert.strictEqual(payload, originalPayload)
    done()
  }

  function fn3 (request, reply, payload, done) {
    t.assert.deepStrictEqual(request, originalRequest)
    t.assert.deepStrictEqual(reply, originalReply)
    t.assert.strictEqual(payload, originalPayload)
    done()
  }

  function done (err, request, reply, payload) {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(request, originalRequest)
    t.assert.deepStrictEqual(reply, originalReply)
    t.assert.strictEqual(payload, originalPayload)
  }
})

test('onSendHookRunner - Can change the payload', t => {
  t.plan(7)

  const originalRequest = { body: null }
  const originalReply = { request: originalRequest }
  const v1 = { hello: 'world' }
  const v2 = { ciao: 'mondo' }
  const v3 = { winter: 'is coming' }
  const v4 = { winter: 'has come' }

  onSendHookRunner([fn1, fn2, fn3], originalRequest, originalReply, v1, done)

  function fn1 (request, reply, payload, done) {
    t.assert.deepStrictEqual(payload, v1)
    done(null, v2)
  }

  function fn2 (request, reply, payload, done) {
    t.assert.deepStrictEqual(payload, v2)
    done(null, v3)
  }

  function fn3 (request, reply, payload, done) {
    t.assert.deepStrictEqual(payload, v3)
    done(null, v4)
  }

  function done (err, request, reply, payload) {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(request, originalRequest)
    t.assert.deepStrictEqual(reply, originalReply)
    t.assert.deepStrictEqual(payload, v4)
  }
})

test('onSendHookRunner - In case of error should skip to done', t => {
  t.plan(6)

  const originalRequest = { body: null }
  const originalReply = { request: originalRequest }
  const v1 = { hello: 'world' }
  const v2 = { ciao: 'mondo' }

  onSendHookRunner([fn1, fn2, fn3], originalRequest, originalReply, v1, done)

  function fn1 (request, reply, payload, done) {
    t.assert.deepStrictEqual(payload, v1)
    done(null, v2)
  }

  function fn2 (request, reply, payload, done) {
    t.assert.deepStrictEqual(payload, v2)
    done(new Error('kaboom'))
  }

  function fn3 () {
    t.assert.fail('We should not be here')
  }

  function done (err, request, reply, payload) {
    t.assert.strictEqual(err.message, 'kaboom')
    t.assert.deepStrictEqual(request, originalRequest)
    t.assert.deepStrictEqual(reply, originalReply)
    t.assert.deepStrictEqual(payload, v2)
  }
})

test('onSendHookRunner - Should handle promises', t => {
  t.plan(7)

  const originalRequest = { body: null }
  const originalReply = { request: originalRequest }
  const v1 = { hello: 'world' }
  const v2 = { ciao: 'mondo' }
  const v3 = { winter: 'is coming' }
  const v4 = { winter: 'has come' }

  onSendHookRunner([fn1, fn2, fn3], originalRequest, originalReply, v1, done)

  function fn1 (request, reply, payload) {
    t.assert.deepStrictEqual(payload, v1)
    return Promise.resolve(v2)
  }

  function fn2 (request, reply, payload) {
    t.assert.deepStrictEqual(payload, v2)
    return Promise.resolve(v3)
  }

  function fn3 (request, reply, payload) {
    t.assert.deepStrictEqual(payload, v3)
    return Promise.resolve(v4)
  }

  function done (err, request, reply, payload) {
    t.assert.ifError(err)
    t.assert.deepStrictEqual(request, originalRequest)
    t.assert.deepStrictEqual(reply, originalReply)
    t.assert.deepStrictEqual(payload, v4)
  }
})

test('onSendHookRunner - In case of error should skip to done (with promises)', t => {
  t.plan(6)

  const originalRequest = { body: null }
  const originalReply = { request: originalRequest }
  const v1 = { hello: 'world' }
  const v2 = { ciao: 'mondo' }

  onSendHookRunner([fn1, fn2, fn3], originalRequest, originalReply, v1, done)

  function fn1 (request, reply, payload) {
    t.assert.deepStrictEqual(payload, v1)
    return Promise.resolve(v2)
  }

  function fn2 (request, reply, payload) {
    t.assert.deepStrictEqual(payload, v2)
    return Promise.reject(new Error('kaboom'))
  }

  function fn3 () {
    t.assert.fail('We should not be here')
  }

  function done (err, request, reply, payload) {
    t.assert.strictEqual(err.message, 'kaboom')
    t.assert.deepStrictEqual(request, originalRequest)
    t.assert.deepStrictEqual(reply, originalReply)
    t.assert.deepStrictEqual(payload, v2)
  }
})

test('onSendHookRunner - Be able to exit before its natural end', t => {
  t.plan(2)

  const originalRequest = { body: null }
  const originalReply = { request: originalRequest }
  const v1 = { hello: 'world' }
  const v2 = { ciao: 'mondo' }

  onSendHookRunner([fn1, fn2, fn3], originalRequest, originalReply, v1, done)

  function fn1 (request, reply, payload, done) {
    t.assert.deepStrictEqual(payload, v1)
    done(null, v2)
  }

  function fn2 (request, reply, payload) {
    t.assert.deepStrictEqual(payload, v2)
  }

  function fn3 () {
    t.assert.fail('this should not be called')
  }

  function done () {
    t.assert.fail('this should not be called')
  }
})
