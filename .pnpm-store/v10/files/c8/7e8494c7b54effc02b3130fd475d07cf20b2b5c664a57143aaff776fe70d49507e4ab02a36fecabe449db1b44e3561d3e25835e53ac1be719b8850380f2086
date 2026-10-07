'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and minItems keyword', () => {
  const schema1 = { type: 'array' }
  const schema2 = { type: 'array', minItems: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'array', minItems: 42 })
})

test('should merge equal minItems values', () => {
  const schema1 = { type: 'array', minItems: 42 }
  const schema2 = { type: 'array', minItems: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'array', minItems: 42 })
})

test('should merge different minItems values', () => {
  const schema1 = { type: 'array', minItems: 42 }
  const schema2 = { type: 'array', minItems: 43 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'array', minItems: 43 })
})
