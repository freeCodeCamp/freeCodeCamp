'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and maxProperties keyword', () => {
  const schema1 = { type: 'object' }
  const schema2 = { type: 'object', maxProperties: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'object', maxProperties: 42 })
})

test('should merge equal maxProperties values', () => {
  const schema1 = { type: 'object', maxProperties: 42 }
  const schema2 = { type: 'object', maxProperties: 42 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'object', maxProperties: 42 })
})

test('should merge different maxProperties values', () => {
  const schema1 = { type: 'object', maxProperties: 42 }
  const schema2 = { type: 'object', maxProperties: 43 }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'object', maxProperties: 42 })
})
