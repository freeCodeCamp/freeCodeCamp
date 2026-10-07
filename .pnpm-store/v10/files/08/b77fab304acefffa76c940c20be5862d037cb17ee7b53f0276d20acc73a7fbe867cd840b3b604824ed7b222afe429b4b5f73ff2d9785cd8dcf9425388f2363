'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and maximum keyword', () => {
  const schema1 = { type: 'number' }
  const schema2 = { type: 'number', maximum: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'number', maximum: 42 })
})

test('should merge equal maximum values', () => {
  const schema1 = { type: 'number', maximum: 42 }
  const schema2 = { type: 'number', maximum: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'number', maximum: 42 })
})

test('should merge different maximum values', () => {
  const schema1 = { type: 'integer', maximum: 42 }
  const schema2 = { type: 'integer', maximum: 43 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'integer', maximum: 42 })
})
