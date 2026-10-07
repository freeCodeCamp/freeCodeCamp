'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and dependencies keyword', () => {
  const schema1 = {}
  const schema2 = {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'string' }
    },
    dependencies: {
      foo: ['bar']
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'string' }
    },
    dependencies: {
      foo: ['bar']
    }
  })
})

test('should merge two dependencies keyword schemas', () => {
  const schema1 = {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'string' },
      que: { type: 'string' }
    },
    dependencies: {
      foo: ['bar', 'que'],
      bar: ['que']
    }
  }
  const schema2 = {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'string' },
      baz: { type: 'string' }
    },
    dependencies: {
      foo: ['baz'],
      baz: ['foo']
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    type: 'object',
    properties: {
      foo: { type: 'string' },
      bar: { type: 'string' },
      que: { type: 'string' },
      baz: { type: 'string' }
    },
    dependencies: {
      foo: ['bar', 'que', 'baz'],
      bar: ['que'],
      baz: ['foo']
    }
  })
})
