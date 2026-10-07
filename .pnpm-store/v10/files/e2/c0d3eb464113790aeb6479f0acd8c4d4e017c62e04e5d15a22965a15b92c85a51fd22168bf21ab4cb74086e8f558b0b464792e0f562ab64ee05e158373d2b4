'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and minLength keyword', () => {
  const schema1 = { type: 'string' }
  const schema2 = { type: 'string', minLength: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', minLength: 42 })
})

test('should merge equal minLength values', () => {
  const schema1 = { type: 'string', minLength: 42 }
  const schema2 = { type: 'string', minLength: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', minLength: 42 })
})

test('should merge different minLength values', () => {
  const schema1 = { type: 'string', minLength: 42 }
  const schema2 = { type: 'string', minLength: 43 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', minLength: 43 })
})
