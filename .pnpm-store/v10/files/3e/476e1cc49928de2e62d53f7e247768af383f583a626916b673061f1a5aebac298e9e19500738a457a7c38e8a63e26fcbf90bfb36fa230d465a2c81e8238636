'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { RefResolver } = require('../index.js')

test('should throw id schema not found', () => {
  const refResolver = new RefResolver()

  try {
    refResolver.derefSchema('schemaId1')
  } catch (err) {
    assert.strictEqual(err.message, 'Schema with id "schemaId1" is not found.')
  }
})

test('should throw id source schema has a key with a same key as ref schema, but diff value', () => {
  const refResolver = new RefResolver()

  const schemaId1 = 'schemaId1'
  const schemaId2 = 'schemaId2'

  const schema1 = {
    $id: schemaId1,
    $ref: schemaId2,
    properties: {
      foo: { type: 'string' }
    }
  }

  const schema2 = {
    $id: schemaId2,
    type: 'object',
    properties: {
      foo: { type: 'number' }
    }
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)

  try {
    refResolver.derefSchema('schemaId1')
    assert.fail('should throw error')
  } catch (err) {
    assert.strictEqual(
      err.message,
      'Cannot resolve ref "schemaId2". Property "properties" already exists in schema "schemaId1".'
    )
  }
})

test('should not throw id source schema has a key with a same key and value as ref schema', () => {
  const refResolver = new RefResolver()

  const schemaId1 = 'schemaId1'
  const schemaId2 = 'schemaId2'

  const schema1 = {
    $id: schemaId1,
    $ref: schemaId2,
    properties: {
      foo: { type: 'string' }
    }
  }

  const schema2 = {
    $id: schemaId2,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)

  refResolver.derefSchema(schemaId1)

  const derefSchema = refResolver.getDerefSchema(schemaId1)
  assert.deepStrictEqual(derefSchema, {
    $id: schemaId1,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  })
})

test('should get deref schema from the cache', () => {
  const refResolver = new RefResolver()

  const schemaId1 = 'schemaId1'
  const schemaId2 = 'schemaId2'

  const schema1 = {
    $id: schemaId1,
    $ref: schemaId2,
    properties: {
      foo: { type: 'string' }
    }
  }

  const schema2 = {
    $id: schemaId2,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)

  refResolver.derefSchema(schemaId1)
  schema1.properties = {}
  refResolver.derefSchema(schemaId1)

  const derefSchema = refResolver.getDerefSchema(schemaId1)
  assert.deepStrictEqual(derefSchema, {
    $id: schemaId1,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  })
})

test('should insert ref symbol', () => {
  const refResolver = new RefResolver({
    insertRefSymbol: true
  })

  const schemaId1 = 'schemaId1'
  const schemaId2 = 'schemaId2'

  const schema1 = {
    $id: schemaId1,
    $ref: schemaId2
  }

  const schema2 = {
    $id: schemaId2,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  refResolver.addSchema(schema1)
  refResolver.addSchema(schema2)

  refResolver.derefSchema(schemaId1)

  const derefSchema = refResolver.getDerefSchema(schemaId1)
  assert.deepStrictEqual(derefSchema, {
    $id: schemaId1,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    },
    [Symbol.for('json-schema-ref')]: schemaId2
  })
})

test('should clone schema without refs', () => {
  const refResolver = new RefResolver({
    cloneSchemaWithoutRefs: true
  })

  const schemaId = 'schemaId2'

  const schema = {
    $id: schemaId,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  refResolver.addSchema(schema)
  refResolver.derefSchema(schemaId)

  schema.properties = null

  const derefSchema = refResolver.getDerefSchema(schemaId)
  assert.deepStrictEqual(derefSchema, {
    $id: schemaId,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  })
})

test('should throw if target ref schema is not found', () => {
  const inputSchema = {
    $id: 'http://example.com/root.json',
    definitions: {
      A: { $id: '#foo' },
      B: {
        $id: 'other.json',
        definitions: {
          X: { $id: '#bar', type: 'string' },
          Y: { $id: 't/inner.json' }
        }
      },
      C: {
        $id: 'urn:uuid:ee564b8a-7a87-4125-8c96-e9f123d6766f',
        type: 'object'
      }
    }
  }

  const addresSchema = {
    $id: 'relativeAddress', // Note: prefer always absolute URI like: http://mysite.com
    type: 'object',
    properties: {
      zip: { $ref: 'urn:uuid:ee564b8a-7a87-4125-8c96-e9f123d6766f' },
      city2: { $ref: '#foo' }
    }
  }

  const refResolver = new RefResolver()
  refResolver.addSchema(inputSchema)
  refResolver.addSchema(addresSchema)

  try {
    refResolver.derefSchema('relativeAddress')
  } catch (error) {
    assert.strictEqual(
      error.message,
      'Cannot resolve ref "#foo". Ref "#foo" is not found in schema "relativeAddress".'
    )
  }
})

test('should deref schema without root $id', () => {
  const refResolver = new RefResolver()

  const schemaId = 'schemaId1'
  const schema = {
    type: 'object',
    definitions: {
      id1: {
        type: 'object',
        properties: {
          id1: {
            type: 'integer'
          }
        }
      }
    },
    allOf: [
      {
        $ref: '#/definitions/id1'
      }
    ]
  }

  refResolver.addSchema(schema, schemaId)
  const derefSchema = refResolver.getDerefSchema(schemaId)

  assert.deepStrictEqual(derefSchema, {
    type: 'object',
    definitions: {
      id1: {
        type: 'object',
        properties: {
          id1: {
            type: 'integer'
          }
        }
      }
    },
    allOf: [
      {
        type: 'object',
        properties: {
          id1: {
            type: 'integer'
          }
        }
      }
    ]
  })
})
