'use strict'

const { test } = require('node:test')

const build = require('..')

test('serialize short string', (t) => {
  t.plan(2)

  const schema = {
    type: 'string'
  }

  const input = 'abcd'
  const stringify = build(schema)
  const output = stringify(input)

  t.assert.equal(output, '"abcd"')
  t.assert.equal(JSON.parse(output), input)
})

test('serialize short string', (t) => {
  t.plan(2)

  const schema = {
    type: 'string'
  }

  const input = '\x00'
  const stringify = build(schema)
  const output = stringify(input)

  t.assert.equal(output, '"\\u0000"')
  t.assert.equal(JSON.parse(output), input)
})

test('serialize long string', (t) => {
  t.plan(2)

  const schema = {
    type: 'string'
  }

  const input = new Array(2e4).fill('\x00').join('')
  const stringify = build(schema)
  const output = stringify(input)

  t.assert.equal(output, `"${new Array(2e4).fill('\\u0000').join('')}"`)
  t.assert.equal(JSON.parse(output), input)
})

test('unsafe string', (t) => {
  t.plan(2)

  const schema = {
    type: 'string',
    format: 'unsafe'
  }

  const input = 'abcd'
  const stringify = build(schema)
  const output = stringify(input)

  t.assert.equal(output, `"${input}"`)
  t.assert.equal(JSON.parse(output), input)
})

test('unsafe unescaped string', (t) => {
  t.plan(2)

  const schema = {
    type: 'string',
    format: 'unsafe'
  }

  const input = 'abcd "abcd"'
  const stringify = build(schema)
  const output = stringify(input)

  t.assert.equal(output, `"${input}"`)
  t.assert.throws(function () {
    JSON.parse(output)
  })
})
