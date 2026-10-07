'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { mergeSchemas } = require('../index')
const { defaultResolver } = require('./utils')

test('should use a custom resolver instead of default one', () => {
  const schema1 = { type: 'string' }
  const schema2 = { type: 'number' }

  const mergedSchema = mergeSchemas(
    [schema1, schema2],
    {
      resolvers: {
        type: (keyword, values, mergedSchema, schemas) => {
          assert.strictEqual(keyword, 'type')
          assert.deepStrictEqual(values, ['string', 'number'])
          assert.deepStrictEqual(schemas, [schema1, schema2])

          mergedSchema[keyword] = 'custom-type'
        }
      },
      defaultResolver
    }
  )
  assert.deepStrictEqual(mergedSchema, { type: 'custom-type' })
})

test('should use a custom resolver for unknown keyword', () => {
  const schema1 = { customKeyword: 'string' }
  const schema2 = { customKeyword: 'number' }

  const mergedSchema = mergeSchemas(
    [schema1, schema2],
    {
      resolvers: {
        customKeyword: (keyword, values, mergedSchema, schemas) => {
          assert.strictEqual(keyword, 'customKeyword')
          assert.deepStrictEqual(values, ['string', 'number'])
          assert.deepStrictEqual(schemas, [schema1, schema2])

          mergedSchema[keyword] = 'custom-type'
        }
      },
      defaultResolver
    }
  )
  assert.deepStrictEqual(mergedSchema, { customKeyword: 'custom-type' })
})
