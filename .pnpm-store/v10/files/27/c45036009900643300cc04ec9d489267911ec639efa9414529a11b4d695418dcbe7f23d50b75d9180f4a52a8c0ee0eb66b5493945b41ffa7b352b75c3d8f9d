'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should skip $id keyword if they are equal', () => {
  const schema1 = { $id: 'foo', type: 'string' }
  const schema2 = { $id: 'foo', type: 'string' }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string' })
})

test('should skip $id keyword if they are different', () => {
  const schema1 = { $id: 'foo', type: 'string' }
  const schema2 = { $id: 'bar', type: 'string' }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, { type: 'string' })
})
