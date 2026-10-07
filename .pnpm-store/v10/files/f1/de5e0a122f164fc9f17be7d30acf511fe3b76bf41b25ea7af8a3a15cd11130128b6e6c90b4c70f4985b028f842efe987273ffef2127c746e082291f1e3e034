'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and required keyword', () => {
  const schema1 = { type: 'object' }
  const schema2 = { type: 'object', required: ['foo'] }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'object', required: ['foo'] })
})

test('should merge two equal required keywords', () => {
  const schema1 = { type: 'object', required: ['foo'] }
  const schema2 = { type: 'object', required: ['foo'] }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'object', required: ['foo'] })
})

test('should merge two different required keywords', () => {
  const schema1 = { type: 'object', required: ['foo', 'bar'] }
  const schema2 = { type: 'object', required: ['foo', 'baz'] }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'object', required: ['foo', 'bar', 'baz'] })
})
