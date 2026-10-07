'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and multipleOf keyword', () => {
  const schema1 = { type: 'number' }
  const schema2 = { type: 'number', multipleOf: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'number', multipleOf: 42 })
})

test('should merge two schemas with multipleOf keywords', () => {
  const schema1 = { type: 'number', multipleOf: 2 }
  const schema2 = { type: 'number', multipleOf: 3 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'number', multipleOf: 6 })
})

test('should merge multiple schemas with float multipleOf keywords', () => {
  const schema1 = { type: 'number', multipleOf: 0.2 }
  const schema2 = { type: 'number', multipleOf: 2 }
  const schema3 = { type: 'number', multipleOf: 2 }
  const schema4 = { type: 'number', multipleOf: 0.5 }
  const schema5 = { type: 'number', multipleOf: 1.5 }

  const mergedSchema = mergeSchemas(
    [schema1, schema2, schema3, schema4, schema5],
    { defaultResolver }
  )
  assert.deepStrictEqual(mergedSchema, { type: 'number', multipleOf: 6 })
})
