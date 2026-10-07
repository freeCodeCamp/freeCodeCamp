'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and minimum keyword', () => {
  const schema1 = { type: 'number' }
  const schema2 = { type: 'number', minimum: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'number', minimum: 42 })
})

test('should merge equal minimum values', () => {
  const schema1 = { type: 'number', minimum: 42 }
  const schema2 = { type: 'number', minimum: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'number', minimum: 42 })
})

test('should merge different minimum values', () => {
  const schema1 = { type: 'integer', minimum: 42 }
  const schema2 = { type: 'integer', minimum: 43 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'integer', minimum: 43 })
})
