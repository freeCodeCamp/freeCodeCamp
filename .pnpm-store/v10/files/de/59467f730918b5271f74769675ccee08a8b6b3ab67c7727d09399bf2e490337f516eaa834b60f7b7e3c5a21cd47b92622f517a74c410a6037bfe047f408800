'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and string format keyword', () => {
  const schema1 = { type: 'string' }
  const schema2 = { type: 'string', format: 'date-time' }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', format: 'date-time' })
})

test('should merge equal string format keywords', () => {
  const schema1 = { type: 'string', format: 'date-time' }
  const schema2 = { type: 'string', format: 'date-time' }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', format: 'date-time' })
})

test('should throw an error if format keyword values are different', () => {
  const schema1 = { type: 'string', format: 'date-time' }
  const schema2 = { type: 'string', format: 'date' }

  assert.throws(() => {
    mergeSchemas([schema1, schema2], { defaultResolver })
  }, {
    name: 'JsonSchemaMergeError',
    code: 'JSON_SCHEMA_MERGE_ERROR',
    message: 'Failed to merge "format" keyword schemas.',
    schemas: ['date-time', 'date']
  })
})
