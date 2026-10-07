'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge equal type values', () => {
  const schema1 = { type: 'string' }
  const schema2 = { type: 'string' }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string' })
})

test('should merge array type values', () => {
  const schema1 = { type: ['string', 'number'] }
  const schema2 = { type: ['null', 'string'] }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string' })
})

test('should merge array type values', () => {
  const schema1 = { type: ['string', 'number'] }
  const schema2 = { type: 'string' }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string' })
})

test('should merge array type values', () => {
  const schema1 = { type: ['number', 'string', 'boolean'] }
  const schema2 = { type: ['string', 'number', 'null'] }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: ['number', 'string'] })
})

test('should throw an error if can not merge type values', () => {
  const schema1 = { type: 'string' }
  const schema2 = { type: 'number' }

  assert.throws(() => {
    mergeSchemas([schema1, schema2], { defaultResolver })
  }, {
    name: 'JsonSchemaMergeError',
    code: 'JSON_SCHEMA_MERGE_ERROR',
    message: 'Failed to merge "type" keyword schemas.',
    schemas: [['string'], ['number']]
  })
})
