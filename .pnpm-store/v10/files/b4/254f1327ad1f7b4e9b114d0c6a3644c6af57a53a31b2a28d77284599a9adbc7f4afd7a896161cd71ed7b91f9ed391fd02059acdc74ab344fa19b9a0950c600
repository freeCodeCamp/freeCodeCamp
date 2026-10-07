'use strict'

const { test } = require('node:test')
const build = require('..')

test('Finite numbers', t => {
  const values = [-5, 0, -0, 1.33, 99, 100.0,
    Math.E, Number.EPSILON,
    Number.MAX_SAFE_INTEGER, Number.MAX_VALUE,
    Number.MIN_SAFE_INTEGER, Number.MIN_VALUE]

  t.plan(values.length)

  const schema = {
    type: 'number'
  }

  const stringify = build(schema)

  values.forEach(v => t.assert.equal(stringify(v), JSON.stringify(v)))
})

test('Infinite integers', t => {
  const values = [Infinity, -Infinity]

  t.plan(values.length)

  const schema = {
    type: 'integer'
  }

  const stringify = build(schema)

  values.forEach(v => {
    try {
      stringify(v)
    } catch (err) {
      t.assert.equal(err.message, `The value "${v}" cannot be converted to an integer.`)
    }
  })
})

test('Infinite numbers', t => {
  const values = [Infinity, -Infinity]

  t.plan(values.length)

  const schema = {
    type: 'number'
  }

  const stringify = build(schema)

  values.forEach(v => t.assert.equal(stringify(v), JSON.stringify(v)))
})
