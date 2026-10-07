'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and exclusiveMaximum keyword', () => {
  const schema1 = { type: 'number' }
  const schema2 = { type: 'number', exclusiveMaximum: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'number', exclusiveMaximum: 42 })
})

test('should merge equal exclusiveMaximum values', () => {
  const schema1 = { type: 'number', exclusiveMaximum: 42 }
  const schema2 = { type: 'number', exclusiveMaximum: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'number', exclusiveMaximum: 42 })
})

test('should merge different exclusiveMaximum values', () => {
  const schema1 = { type: 'integer', exclusiveMaximum: 42 }
  const schema2 = { type: 'integer', exclusiveMaximum: 43 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'integer', exclusiveMaximum: 42 })
})
