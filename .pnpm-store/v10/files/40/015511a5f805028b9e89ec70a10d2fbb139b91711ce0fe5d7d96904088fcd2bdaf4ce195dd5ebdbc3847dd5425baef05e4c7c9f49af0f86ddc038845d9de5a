'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and string enum values', () => {
  const schema1 = { type: 'string' }
  const schema2 = { type: 'string', enum: ['foo', 'bar'] }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', enum: ['foo', 'bar'] })
})

test('should merge equal string enum values', () => {
  const schema1 = { type: 'string', enum: ['foo', 'bar'] }
  const schema2 = { type: 'string', enum: ['foo', 'bar'] }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', enum: ['foo', 'bar'] })
})

test('should merge different string enum values', () => {
  const schema1 = { type: 'string', enum: ['foo', 'bar'] }
  const schema2 = { type: 'string', enum: ['foo', 'baz'] }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', enum: ['foo'] })
})

test('should throw an error if can not merge enum values', () => {
  const schema1 = { type: 'string', enum: ['foo', 'bar'] }
  const schema2 = { type: 'string', enum: ['baz', 'qux'] }

  assert.throws(() => {
    mergeSchemas([schema1, schema2], { defaultResolver })
  }, {
    name: 'JsonSchemaMergeError',
    code: 'JSON_SCHEMA_MERGE_ERROR',
    message: 'Failed to merge "enum" keyword schemas.',
    schemas: [['foo', 'bar'], ['baz', 'qux']]
  })
})
