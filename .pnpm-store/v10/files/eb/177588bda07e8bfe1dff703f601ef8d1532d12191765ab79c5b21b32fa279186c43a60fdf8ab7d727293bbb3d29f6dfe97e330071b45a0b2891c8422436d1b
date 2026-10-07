'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and string default keyword', () => {
  const schema1 = { type: 'string' }
  const schema2 = { type: 'string', default: 'foo' }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', default: 'foo' })
})

test('should merge equal string default keywords', () => {
  const schema1 = { type: 'string', default: 'foo' }
  const schema2 = { type: 'string', default: 'foo' }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', default: 'foo' })
})

test('should throw an error if default string values are different', () => {
  const schema1 = { type: 'string', default: 'foo' }
  const schema2 = { type: 'string', default: 'bar' }

  assert.throws(() => {
    mergeSchemas([schema1, schema2], { defaultResolver })
  }, {
    name: 'JsonSchemaMergeError',
    code: 'JSON_SCHEMA_MERGE_ERROR',
    message: 'Failed to merge "default" keyword schemas.',
    schemas: ['foo', 'bar']
  })
})

test('should throw an error if default object values are different', () => {
  const schema1 = { type: 'object', default: { foo: 'bar' } }
  const schema2 = { type: 'object', default: { foo: 'baz' } }

  assert.throws(() => {
    mergeSchemas([schema1, schema2], { defaultResolver })
  }, {
    name: 'JsonSchemaMergeError',
    code: 'JSON_SCHEMA_MERGE_ERROR',
    message: 'Failed to merge "default" keyword schemas.',
    schemas: [{ foo: 'bar' }, { foo: 'baz' }]
  })
})
