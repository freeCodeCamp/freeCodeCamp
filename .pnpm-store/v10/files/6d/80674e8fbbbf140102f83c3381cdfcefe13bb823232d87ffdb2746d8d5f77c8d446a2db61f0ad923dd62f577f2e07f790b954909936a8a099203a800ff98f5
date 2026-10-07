'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should return an empty schema if passing an empty array', () => {
  const mergedSchema = mergeSchemas([], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {})
})

test('should return true if passing all true values', () => {
  const mergedSchema = mergeSchemas([true, true, true], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, true)
})

test('should return true if passing all false values', () => {
  const mergedSchema = mergeSchemas([false, false, false], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, false)
})

test('should return true if passing at least one false schema', () => {
  const schema1 = { type: 'string' }
  const schema2 = { type: 'number' }

  const mergedSchema = mergeSchemas([schema1, schema2, false], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, false)
})
