'use strict'

const { test } = require('node:test')
const build = require('..')

test('nested object in pattern properties for typebox', (t) => {
  const { Type } = require('@sinclair/typebox')

  t.plan(1)

  const nestedSchema = Type.Object({
    nestedKey1: Type.String()
  })

  const RootSchema = Type.Object({
    key1: Type.Record(Type.String(), nestedSchema),
    key2: Type.Record(Type.String(), nestedSchema)
  })

  const schema = RootSchema
  const stringify = build(schema)

  const value = stringify({
    key1: {
      nestedKey: {
        nestedKey1: 'value1'
      }
    },
    key2: {
      nestedKey: {
        nestedKey1: 'value2'
      }
    }
  })
  t.assert.equal(value, '{"key1":{"nestedKey":{"nestedKey1":"value1"}},"key2":{"nestedKey":{"nestedKey1":"value2"}}}')
})
