'use strict'

const { test } = require('node:test')
const fp = require('../plugin')

test('checkVersion having require.main.filename', (t) => {
  const info = console.info
  t.assert.ok(require.main.filename)
  t.after(() => {
    console.info = info
  })

  console.info = function (msg) {
    t.assert.fail('logged: ' + msg)
  }

  fp((_fastify, _opts, next) => {
    next()
  }, {
    fastify: '^5.0.0'
  })
})

test('checkVersion having no require.main.filename but process.argv[1]', (t) => {
  const filename = require.main.filename
  const info = console.info
  t.after(() => {
    require.main.filename = filename
    console.info = info
  })

  require.main.filename = null

  console.info = function (msg) {
    t.assert.fail('logged: ' + msg)
  }

  fp((_fastify, _opts, next) => {
    next()
  }, {
    fastify: '^5.0.0'
  })
})

test('checkVersion having no require.main.filename and no process.argv[1]', (t) => {
  const filename = require.main.filename
  const argv = process.argv
  const info = console.info
  t.after(() => {
    require.main.filename = filename
    process.argv = argv
    console.info = info
  })

  require.main.filename = null
  process.argv[1] = null

  console.info = function (msg) {
    t.assert.fail('logged: ' + msg)
  }

  fp((_fastify, _opts, next) => {
    next()
  }, {
    fastify: '^5.0.0'
  })
})
