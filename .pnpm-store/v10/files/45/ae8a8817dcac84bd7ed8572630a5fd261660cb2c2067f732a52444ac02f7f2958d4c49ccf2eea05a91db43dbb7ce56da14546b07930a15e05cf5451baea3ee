'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { RefResolver } = require('../index.js')

test('should get a sub schema by sub schema anchor', () => {
  const refResolver = new RefResolver()

  const schemaId = 'schemaId'
  const subSchemaAnchor = '#subSchemaId'
  const schema = {
    $id: schemaId,
    definitions: {
      subSchema: {
        $id: subSchemaAnchor,
        type: 'object',
        properties: {
          foo: { type: 'string' }
        }
      }
    }
  }
  refResolver.addSchema(schema)

  const resolvedSchema = refResolver.getSchema(schemaId, subSchemaAnchor)
  assert.equal(resolvedSchema, schema.definitions.subSchema)
})

test('should fail to find a schema using an anchor instead of schema id', () => {
  const refResolver = new RefResolver()

  const schemaId = 'schemaId'
  const subSchemaAnchor = '#subSchemaId'
  const schema = {
    $id: schemaId,
    definitions: {
      subSchema: {
        $id: subSchemaAnchor,
        type: 'object',
        properties: {
          foo: { type: 'string' }
        }
      }
    }
  }
  refResolver.addSchema(schema)

  try {
    refResolver.getSchema(subSchemaAnchor)
  } catch (err) {
    assert.equal(
      err.message, 'Cannot resolve ref "#subSchemaId#". Schema with id "#subSchemaId" is not found.'
    )
  }
})
