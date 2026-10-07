'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and string const keyword', () => {
  const schema1 = { type: 'string' }
  const schema2 = { type: 'string', const: 'foo' }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', const: 'foo' })
})

test('should merge equal string const keywords', () => {
  const schema1 = { type: 'string', const: 'foo' }
  const schema2 = { type: 'string', const: 'foo' }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', const: 'foo' })
})

test('should merge equal object const keywords', () => {
  const schema1 = { type: 'string', const: { foo: 'bar' } }
  const schema2 = { type: 'string', const: { foo: 'bar' } }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', const: { foo: 'bar' } })
})

test('should throw an error if const string values are different', () => {
  const schema1 = { type: 'string', const: 'foo' }
  const schema2 = { type: 'string', const: 'bar' }

  assert.throws(() => {
    mergeSchemas([schema1, schema2], { defaultResolver })
  }, {
    name: 'JsonSchemaMergeError',
    code: 'JSON_SCHEMA_MERGE_ERROR',
    message: 'Failed to merge "const" keyword schemas.',
    schemas: ['foo', 'bar']
  })
})

test('should throw an error if const object values are different', () => {
  const schema1 = { type: 'object', const: { foo: 'bar' } }
  const schema2 = { type: 'object', const: { foo: 'baz' } }

  assert.throws(() => {
    mergeSchemas([schema1, schema2], { defaultResolver })
  }, {
    name: 'JsonSchemaMergeError',
    code: 'JSON_SCHEMA_MERGE_ERROR',
    message: 'Failed to merge "const" keyword schemas.',
    schemas: [{ foo: 'bar' }, { foo: 'baz' }]
  })
})
