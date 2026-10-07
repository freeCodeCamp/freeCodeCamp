'use strict'

const { test } = require('node:test')

const build = require('..')

test('render a bigint as JSON', (t) => {
  t.plan(1)

  const schema = {
    title: 'bigint',
    type: 'integer'
  }

  const stringify = build(schema)
  const output = stringify(1615n)

  t.assert.equal(output, '1615')
})

test('render an object with a bigint as JSON', (t) => {
  t.plan(1)

  const schema = {
    title: 'object with bigint',
    type: 'object',
    properties: {
      id: {
        type: 'integer'
      }
    }
  }

  const stringify = build(schema)
  const output = stringify({
    id: 1615n
  })

  t.assert.equal(output, '{"id":1615}')
})

test('render an array with a bigint as JSON', (t) => {
  t.plan(1)

  const schema = {
    title: 'array with bigint',
    type: 'array',
    items: {
      type: 'integer'
    }
  }

  const stringify = build(schema)
  const output = stringify([1615n])

  t.assert.equal(output, '[1615]')
})

test('render an object with an additionalProperty of type bigint as JSON', (t) => {
  t.plan(1)

  const schema = {
    title: 'object with bigint',
    type: 'object',
    additionalProperties: {
      type: 'integer'
    }
  }

  const stringify = build(schema)
  const output = stringify({
    num: 1615n
  })

  t.assert.equal(output, '{"num":1615}')
})
