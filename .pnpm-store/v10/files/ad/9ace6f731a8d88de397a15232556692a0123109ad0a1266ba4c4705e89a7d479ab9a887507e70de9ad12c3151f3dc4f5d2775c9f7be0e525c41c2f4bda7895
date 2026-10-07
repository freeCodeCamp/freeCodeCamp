'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and maxLength keyword', () => {
  const schema1 = { type: 'string' }
  const schema2 = { type: 'string', maxLength: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', maxLength: 42 })
})

test('should merge equal maxLength values', () => {
  const schema1 = { type: 'string', maxLength: 42 }
  const schema2 = { type: 'string', maxLength: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', maxLength: 42 })
})

test('should merge different maxLength values', () => {
  const schema1 = { type: 'string', maxLength: 42 }
  const schema2 = { type: 'string', maxLength: 43 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', maxLength: 42 })
})
