'use strict'

const { test } = require('node:test')

const { kTestInternals } = require('../../lib/symbols')
const PonyPromise = require('../../lib/promise')

test('withResolvers', async (t) => {
  t.plan(3)
  await t.test('resolve', async (t) => {
    t.plan(1)
    const { promise, resolve } = PonyPromise.withResolvers()
    resolve(true)
    t.assert.ok(await promise)
  })
  await t.test('reject', async (t) => {
    t.plan(1)
    const { promise, reject } = PonyPromise.withResolvers()
    await t.assert.rejects(async () => {
      reject(Error('reject'))
      return promise
    }, {
      name: 'Error',
      message: 'reject'
    })
  })
  await t.test('thenable', async (t) => {
    t.plan(1)
    const { promise, resolve } = PonyPromise.withResolvers()
    resolve(true)
    promise.then((value) => {
      t.assert.ok(value)
    })
  })
})

test('withResolvers - ponyfill', async (t) => {
  await t.test('resolve', async (t) => {
    t.plan(1)
    const { promise, resolve } = PonyPromise[kTestInternals].withResolvers()
    resolve(true)
    t.assert.ok(await promise)
  })
  await t.test('reject', async (t) => {
    t.plan(1)
    const { promise, reject } = PonyPromise[kTestInternals].withResolvers()
    await t.assert.rejects(async () => {
      reject(Error('reject'))
      return promise
    }, {
      name: 'Error',
      message: 'reject'
    })
  })
  await t.test('thenable', async (t) => {
    t.plan(1)
    const { promise, resolve } = PonyPromise.withResolvers()
    resolve(true)
    promise.then((value) => {
      t.assert.ok(value)
    })
  })
})
