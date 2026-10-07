'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { RefResolver } = require('../index.js')

test('should return true if schema exists', () => {
  const refResolver = new RefResolver()

  const schemaId = 'schemaId'
  const schema = {
    $id: 'schemaId',
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }
  refResolver.addSchema(schema)

  const hasSchema = refResolver.hasSchema(schemaId)
  assert.strictEqual(hasSchema, true)
})

test('should return false if schema does not exist', () => {
  const refResolver = new RefResolver()
  const hasSchema = refResolver.hasSchema('schemaId')
  assert.strictEqual(hasSchema, false)
})
