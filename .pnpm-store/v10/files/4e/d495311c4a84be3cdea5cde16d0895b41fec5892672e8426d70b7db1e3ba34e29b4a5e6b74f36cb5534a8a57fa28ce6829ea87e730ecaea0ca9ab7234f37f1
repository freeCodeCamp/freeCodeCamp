'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and maxItems keyword', () => {
  const schema1 = { type: 'array' }
  const schema2 = { type: 'array', maxItems: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'array', maxItems: 42 })
})

test('should merge equal maxItems values', () => {
  const schema1 = { type: 'array', maxItems: 42 }
  const schema2 = { type: 'array', maxItems: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'array', maxItems: 42 })
})

test('should merge different maxItems values', () => {
  const schema1 = { type: 'array', maxItems: 42 }
  const schema2 = { type: 'array', maxItems: 43 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'array', maxItems: 42 })
})
