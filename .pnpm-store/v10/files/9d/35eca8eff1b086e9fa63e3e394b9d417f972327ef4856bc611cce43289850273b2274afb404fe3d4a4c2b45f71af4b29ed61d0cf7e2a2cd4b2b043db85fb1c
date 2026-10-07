'use strict'

const { test } = require('tap')
const { executeWithThenable } = require('../../lib/execute-with-thenable')
const { kAvvio } = require('../../lib/symbols')

test('executeWithThenable', (t) => {
  t.plan(6)

  t.test('passes the arguments to the function', (t) => {
    t.plan(5)

    executeWithThenable((...args) => {
      t.equal(args.length, 3)
      t.equal(args[0], 1)
      t.equal(args[1], 2)
      t.equal(args[2], 3)
    }, [1, 2, 3], (err) => {
      t.error(err)
    })
  })

  t.test('function references this to itself', (t) => {
    t.plan(2)

    const func = function () {
      t.equal(this, func)
    }
    executeWithThenable(func, [], (err) => {
      t.error(err)
    })
  })

  t.test('handle resolving Promise of func', (t) => {
    t.plan(1)

    const fn = function () {
      return Promise.resolve(42)
    }

    executeWithThenable(fn, [], (err) => {
      t.error(err)
    })
  })

  t.test('handle rejecting Promise of func', (t) => {
    t.plan(1)

    const fn = function () {
      return Promise.reject(new Error('Arbitrary Error'))
    }

    executeWithThenable(fn, [], (err) => {
      t.equal(err.message, 'Arbitrary Error')
    })
  })

  t.test('dont handle avvio mocks PromiseLike results but use callback if provided', (t) => {
    t.plan(1)

    const fn = function () {
      const result = Promise.resolve(42)
      result[kAvvio] = true
    }

    executeWithThenable(fn, [], (err) => {
      t.error(err)
    })
  })

  t.test('dont handle avvio mocks Promises and if no callback is provided', (t) => {
    t.plan(1)

    const fn = function () {
      t.pass(1)
      const result = Promise.resolve(42)
      result[kAvvio] = true
    }

    executeWithThenable(fn, [])
  })
})
