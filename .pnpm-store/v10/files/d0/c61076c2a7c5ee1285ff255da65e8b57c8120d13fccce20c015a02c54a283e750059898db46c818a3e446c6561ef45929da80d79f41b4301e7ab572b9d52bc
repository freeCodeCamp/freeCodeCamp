'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and nullable = true keyword', () => {
  const schema1 = { type: 'string' }
  const schema2 = { type: 'string', nullable: true }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', nullable: true })
})

test('should merge empty schema and nullable = false keyword', () => {
  const schema1 = { type: 'string' }
  const schema2 = { type: 'string', nullable: false }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', nullable: false })
})

test('should merge schemas with nullable true and false values', () => {
  const schema1 = { type: 'string', nullable: false }
  const schema2 = { type: 'string', nullable: true }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string', nullable: false })
})
