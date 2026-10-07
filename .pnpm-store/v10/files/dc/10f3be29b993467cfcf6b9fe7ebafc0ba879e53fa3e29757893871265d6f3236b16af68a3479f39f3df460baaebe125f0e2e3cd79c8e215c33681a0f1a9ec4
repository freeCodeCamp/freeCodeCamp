'use strict'

const { test } = require('node:test')
const inject = require('../index')

test('basic async await', async t => {
  const dispatch = function (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('hello')
  }

  try {
    const res = await inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello' })
    t.assert.strictEqual(res.payload, 'hello')
  } catch (err) {
    t.assert.fail(err)
  }
})

test('basic async await (errored)', async t => {
  const dispatch = function (_req, res) {
    res.connection.destroy(new Error('kaboom'))
  }

  await t.assert.rejects(() => inject(dispatch, { method: 'GET', url: 'http://example.com:8080/hello' }), Error)
})

test('chainable api with async await', async t => {
  const dispatch = function (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('hello')
  }

  try {
    const chain = inject(dispatch).get('http://example.com:8080/hello')
    const res = await chain.end()
    t.assert.strictEqual(res.payload, 'hello')
  } catch (err) {
    t.assert.fail(err)
  }
})

test('chainable api with async await without end()', async t => {
  const dispatch = function (_req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('hello')
  }

  try {
    const res = await inject(dispatch).get('http://example.com:8080/hello')
    t.assert.strictEqual(res.payload, 'hello')
  } catch (err) {
    t.assert.fail(err)
  }
})
