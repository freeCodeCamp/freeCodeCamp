'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and exclusiveMinimum keyword', () => {
  const schema1 = { type: 'number' }
  const schema2 = { type: 'number', exclusiveMinimum: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'number', exclusiveMinimum: 42 })
})

test('should merge equal exclusiveMinimum values', () => {
  const schema1 = { type: 'number', exclusiveMinimum: 42 }
  const schema2 = { type: 'number', exclusiveMinimum: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'number', exclusiveMinimum: 42 })
})

test('should merge different exclusiveMinimum values', () => {
  const schema1 = { type: 'integer', exclusiveMinimum: 42 }
  const schema2 = { type: 'integer', exclusiveMinimum: 43 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'integer', exclusiveMinimum: 43 })
})
