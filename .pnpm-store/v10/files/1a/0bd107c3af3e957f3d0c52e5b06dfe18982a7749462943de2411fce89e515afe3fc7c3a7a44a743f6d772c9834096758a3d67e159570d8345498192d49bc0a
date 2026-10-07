'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')

test('should merge an unknown keyword with an empty schema', () => {
  const schema1 = {}
  const schema2 = { customKeyword: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2])
  assert.deepStrictEqual(mergedSchema, { customKeyword: 42 })
})

test('should merge two equal unknown keywords', () => {
  const schema1 = { customKeyword: 42 }
  const schema2 = { customKeyword: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2])
  assert.deepStrictEqual(mergedSchema, { customKeyword: 42 })
})

test('should merge two equal unknown object keywords', () => {
  const schema1 = { type: 'string', customKeyword: { foo: 'bar' } }
  const schema2 = { type: 'string', customKeyword: { foo: 'bar' } }

  const mergedSchema = mergeSchemas([schema1, schema2])
  assert.deepStrictEqual(mergedSchema, {
    type: 'string',
    customKeyword: { foo: 'bar' }
  })
})

test('should use custom defaultResolver if passed', () => {
  const schema1 = { type: 'string', customKeyword: 42 }
  const schema2 = { type: 'string', customKeyword: 43 }

  const mergedSchema = mergeSchemas(
    [schema1, schema2],
    {
      defaultResolver: (keyword, values, mergedSchema, schemas) => {
        assert.strictEqual(keyword, 'customKeyword')
        assert.deepStrictEqual(values, [42, 43])
        assert.deepStrictEqual(schemas, [schema1, schema2])

        mergedSchema.customKeyword = 'custom-value-42'
      }
    }
  )
  assert.deepStrictEqual(mergedSchema, {
    type: 'string',
    customKeyword: 'custom-value-42'
  })
})

test('should trow an error when merging two different unknown keywords', () => {
  const schema1 = { customKeyword: 42 }
  const schema2 = { customKeyword: 43 }

  assert.throws(() => {
    mergeSchemas([schema1, schema2])
  }, {
    name: 'JsonSchemaMergeError',
    code: 'JSON_SCHEMA_MERGE_ERROR',
    message: 'Resolver for "customKeyword" keyword not found.',
    schemas: [42, 43]
  })
})

test('should trow an error when merging two different unknown keywords with onConflict = throw', () => {
  const schema1 = { customKeyword: 42 }
  const schema2 = { customKeyword: 43 }

  assert.throws(() => {
    mergeSchemas([schema1, schema2], { onConflict: 'throw' })
  }, {
    name: 'JsonSchemaMergeError',
    code: 'JSON_SCHEMA_MERGE_ERROR',
    message: 'Resolver for "customKeyword" keyword not found.',
    schemas: [42, 43]
  })
})

test('should skip the keyword schemas if onConflict = skip', () => {
  const schema1 = { customKeyword: 42 }
  const schema2 = { customKeyword: 43 }

  const mergedSchema = mergeSchemas([schema1, schema2], { onConflict: 'skip' })
  assert.deepStrictEqual(mergedSchema, {})
})

test('should pick first schema if onConflict = first', () => {
  const schema1 = { customKeyword: 42 }
  const schema2 = { customKeyword: 43 }

  const mergedSchema = mergeSchemas([schema1, schema2], { onConflict: 'first' })
  assert.deepStrictEqual(mergedSchema, { customKeyword: 42 })
})

test('should throw an error if pass wrong onConflict value', () => {
  const schema1 = { customKeyword: 42 }
  const schema2 = { customKeyword: 43 }

  assert.throws(() => {
    mergeSchemas([schema1, schema2], { onConflict: 'foo' })
  }, {
    name: 'JsonSchemaMergeError',
    code: 'JSON_SCHEMA_MERGE_ERROR',
    message: 'Invalid "onConflict" option: "foo".'
  })
})
