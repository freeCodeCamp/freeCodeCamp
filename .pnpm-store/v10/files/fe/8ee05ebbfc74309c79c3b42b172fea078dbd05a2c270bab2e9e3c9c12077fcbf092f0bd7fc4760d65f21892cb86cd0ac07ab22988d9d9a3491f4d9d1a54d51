'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas, MergeError } = require('../index')
const { defaultResolver } = require('./utils')

test('should merge empty schema and oneOf keyword', () => {
  const schema1 = {}
  const schema2 = {
    oneOf: [
      { type: 'string', const: 'foo' }
    ]
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    oneOf: [
      { type: 'string', const: 'foo' }
    ]
  })
})

test('should merge two schemas with oneOfs schemas', () => {
  const schema1 = {
    oneOf: [
      { type: 'string', enum: ['foo1', 'foo2', 'foo3'] },
      { type: 'string', enum: ['foo3', 'foo4', 'foo5'] }
    ]
  }
  const schema2 = {
    oneOf: [
      { type: 'string', enum: ['foo2', 'foo3', 'foo4'] },
      { type: 'string', enum: ['foo3', 'foo6', 'foo7'] }
    ]
  }

  const mergedSchema = mergeSchemas([schema1, schema2], { defaultResolver })
  assert.deepStrictEqual(mergedSchema, {
    oneOf: [
      { type: 'string', enum: ['foo2', 'foo3'] },
      { type: 'string', enum: ['foo3'] },
      { type: 'string', enum: ['foo3', 'foo4'] },
      { type: 'string', enum: ['foo3'] }
    ]
  })
})

test('should merge three schemas with oneOfs schemas', () => {
  const schema1 = {
    oneOf: [
      { type: 'string', enum: ['foo1', 'foo2', 'foo3', 'foo4'] },
      { type: 'string', enum: ['foo3', 'foo4', 'foo5', 'foo7'] }
    ]
  }
  const schema2 = {
    oneOf: [
      { type: 'string', enum: ['foo2', 'foo3', 'foo4', 'foo5'] },
      { type: 'string', enum: ['foo3', 'foo6', 'foo7', 'foo8'] }
    ]
  }

  const schema3 = {
    oneOf: [
      { type: 'string', enum: ['foo1', 'foo3', 'foo5', 'foo7'] },
      { type: 'string', enum: ['foo2', 'foo4', 'foo6', 'foo8'] }
    ]
  }

  const mergedSchema = mergeSchemas(
    [schema1, schema2, schema3],
    { defaultResolver }
  )
  assert.deepStrictEqual(mergedSchema, {
    oneOf: [
      { type: 'string', enum: ['foo3'] },
      { type: 'string', enum: ['foo2', 'foo4'] },
      { type: 'string', enum: ['foo3'] },
      { type: 'string', enum: ['foo3', 'foo5'] },
      { type: 'string', enum: ['foo4'] },
      { type: 'string', enum: ['foo3', 'foo7'] }
    ]
  })
})

test('should throw a non MergeError error during oneOf merge', () => {
  const schema1 = {
    oneOf: [
      { type: 'string', customKeyword: 42 },
      { type: 'string', customKeyword: 43 }
    ]
  }
  const schema2 = {
    oneOf: [
      { type: 'string', customKeyword: 44 },
      { type: 'string', customKeyword: 45 }
    ]
  }

  assert.throws(() => {
    mergeSchemas(
      [schema1, schema2],
      {
        resolvers: {
          customKeyword: () => {
            throw new Error('Custom error')
          }
        },
        defaultResolver
      }
    )
  }, {
    name: 'Error',
    message: 'Custom error'
  })
})

test('should not throw a MergeError error during oneOf merge', () => {
  const schema1 = {
    oneOf: [
      { type: 'string', customKeyword: 42 },
      { type: 'string', customKeyword: 43 }
    ]
  }
  const schema2 = {
    oneOf: [
      { type: 'string', customKeyword: 44 },
      { type: 'string', customKeyword: 45 }
    ]
  }

  const mergedSchema = mergeSchemas(
    [schema1, schema2],
    {
      resolvers: {
        customKeyword: (keyword, values) => {
          throw new MergeError(keyword, values)
        }
      },
      defaultResolver
    }
  )
  assert.deepStrictEqual(mergedSchema, { oneOf: [] })
})
