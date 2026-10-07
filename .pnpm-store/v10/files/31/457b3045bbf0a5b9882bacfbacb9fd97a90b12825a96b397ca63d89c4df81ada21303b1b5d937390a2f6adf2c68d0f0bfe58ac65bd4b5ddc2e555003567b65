'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and definitions keyword', () => {
  const schema1 = {}
  const schema2 = {
    definitions: {
      foo: { type: 'string', const: 'foo' }
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    definitions: {
      foo: { type: 'string', const: 'foo' }
    }
  })
})

test('should merge two definition schemas', () => {
  const schema1 = {
    definitions: {
      foo: { type: 'string', enum: ['foo', 'bar'] },
      bar: { type: 'string', enum: ['foo', 'bar'] }
    }
  }
  const schema2 = {
    definitions: {
      foo: { type: 'string', enum: ['foo'] },
      baz: { type: 'string' }
    }
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    definitions: {
      foo: { type: 'string', enum: ['foo'] },
      bar: { type: 'string', enum: ['foo', 'bar'] },
      baz: { type: 'string' }
    }
  })
})
