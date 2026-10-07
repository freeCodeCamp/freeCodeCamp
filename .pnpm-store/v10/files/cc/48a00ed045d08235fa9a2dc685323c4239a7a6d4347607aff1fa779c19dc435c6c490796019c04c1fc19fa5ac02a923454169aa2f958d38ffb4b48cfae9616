'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { RefResolver } = require('../index.js')

test('should not throw if there is a same schema with a same id', () => {
  const refResolver = new RefResolver()

  const schemaId = 'schemaId'
  const schema = {
    $id: schemaId,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  refResolver.addSchema(schema)
  refResolver.addSchema(schema)

  const resolvedSchema = refResolver.getSchema(schemaId)
  assert.deepStrictEqual(resolvedSchema, schema)
})

test('should throw if there is a same schema with a same id (allowEqualDuplicates === false)', () => {
  const refResolver = new RefResolver({
    allowEqualDuplicates: false
  })

  const schemaId = 'schemaId'
  const schema = {
    $id: schemaId,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  refResolver.addSchema(schema)

  try {
    refResolver.addSchema(schema)
    assert.fail('should throw')
  } catch (err) {
    assert.equal(err.message, `There is already another schema with id "${schemaId}".`)
  }
})

test('should throw if there is another schema with a same id', () => {
  const refResolver = new RefResolver()

  const schemaId = 'schemaId'

  const schema1 = {
    $id: schemaId,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  const schema2 = {
    $id: schemaId,
    type: 'object',
    properties: {
      bar: { type: 'string' }
    }
  }

  refResolver.addSchema(schema1)

  try {
    refResolver.addSchema(schema2)
    assert.fail('should throw')
  } catch (err) {
    assert.equal(err.message, `There is already another schema with id "${schemaId}".`)
  }

  const resolvedSchema = refResolver.getSchema(schemaId)
  assert.deepStrictEqual(resolvedSchema, schema1)
})

test('should not throw if there is a same sub schema with a same id', () => {
  const refResolver = new RefResolver()

  const subSchemaId = 'subSchemaId'

  const schema1 = {
    $id: 'schemaId1',
    definitions: {
      subSchema: {
        $id: subSchemaId,
        type: 'object',
        properties: {
          foo: { type: 'string' }
        }
      }
    }
  }

  const schema2 = {
    $id: 'schemaId2',
    definitions: {
      subSchema: {
        $id: subSchemaId,
        type: 'object',
        properties: {
          foo: { type: 'string' }
        }
      }
    }
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)

  const resolvedSchema = refResolver.getSchema(subSchemaId)
  assert.deepStrictEqual(resolvedSchema, schema1.definitions.subSchema)
  assert.deepStrictEqual(resolvedSchema, schema2.definitions.subSchema)
})

test('should throw if there is another different sub schema with a same id', () => {
  const refResolver = new RefResolver()

  const subSchemaId = 'subSchemaId'

  const schema1 = {
    $id: 'schemaId1',
    definitions: {
      subSchema: {
        $id: subSchemaId,
        type: 'object',
        properties: {
          foo: { type: 'string' }
        }
      }
    }
  }

  const schema2 = {
    $id: 'schemaId2',
    definitions: {
      subSchema: {
        $id: subSchemaId,
        type: 'object',
        properties: {
          bar: { type: 'string' }
        }
      }
    }
  }

  refResolver.addSchema(schema1)

  try {
    refResolver.addSchema(schema2)
    assert.fail('should throw')
  } catch (err) {
    assert.equal(err.message, `There is already another schema with id "${subSchemaId}".`)
  }

  const resolvedSchema = refResolver.getSchema(subSchemaId)
  assert.deepStrictEqual(resolvedSchema, schema1.definitions.subSchema)
  assert.notDeepStrictEqual(resolvedSchema, schema2.definitions.subSchema)
})

test('should throw if there is the same anchor in the same schema', () => {
  const refResolver = new RefResolver()

  const subSchemaAnchor = '#subSchemaId'

  const schema = {
    $id: 'schemaId1',
    definitions: {
      subSchema1: {
        $id: subSchemaAnchor,
        type: 'object',
        properties: {
          foo: { type: 'string' }
        }
      },
      subSchema2: {
        $id: subSchemaAnchor,
        type: 'object',
        properties: {
          bar: { type: 'string' }
        }
      }
    }
  }

  try {
    refResolver.addSchema(schema)
    assert.fail('should throw')
  } catch (err) {
    assert.equal(err.message, 'There is already another anchor "#subSchemaId" in schema "schemaId1".')
  }
})
