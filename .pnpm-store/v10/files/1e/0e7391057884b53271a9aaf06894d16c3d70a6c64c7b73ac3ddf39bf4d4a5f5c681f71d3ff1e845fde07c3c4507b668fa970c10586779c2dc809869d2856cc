'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and uniqueItems keyword', () => {
  const schema1 = { type: 'array' }
  const schema2 = { type: 'array', uniqueItems: true }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'array', uniqueItems: true })
})

test('should merge two equal uniqueItems keyword schemas = true', () => {
  const schema1 = { type: 'array', uniqueItems: true }
  const schema2 = { type: 'array', uniqueItems: true }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'array', uniqueItems: true })
})

test('should merge two equal uniqueItems keyword schemas = false', () => {
  const schema1 = { type: 'array', uniqueItems: false }
  const schema2 = { type: 'array', uniqueItems: false }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'array', uniqueItems: false })
})

test('should merge two equal uniqueItems keyword schemas', () => {
  const schema1 = { type: 'array', uniqueItems: false }
  const schema2 = { type: 'array', uniqueItems: true }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'array', uniqueItems: true })
})
