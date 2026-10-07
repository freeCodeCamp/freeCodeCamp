'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { RefResolver } = require('../index.js')

test('should get schema by schema id', () => {
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

  const resolvedSchema = refResolver.getSchema(schemaId)
  assert.equal(resolvedSchema, schema)
})

test('should return null if schema was not found', () => {
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

  const resolvedSchema = refResolver.getSchema(schemaId, '#/definitions/missingSchema')
  assert.equal(resolvedSchema, null)
})

test('should get a sub schema by sub schema id', () => {
  const refResolver = new RefResolver()

  const schemaId = 'schemaId'
  const subSchemaId = 'subSchemaId'
  const schema = {
    $id: schemaId,
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
  refResolver.addSchema(schema)

  const resolvedSchema = refResolver.getSchema(subSchemaId)
  assert.equal(resolvedSchema, schema.definitions.subSchema)
})

test('should get a sub schema by schema json pointer', () => {
  const refResolver = new RefResolver()

  const schemaId = 'schemaId'
  const subSchemaId = 'subSchemaId'
  const schema = {
    $id: schemaId,
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
  refResolver.addSchema(schema)

  const jsonPointer = '#/definitions/subSchema'
  const resolvedSchema = refResolver.getSchema(schemaId, jsonPointer)
  assert.equal(resolvedSchema, schema.definitions.subSchema)
})

test('should get a sub schema by sub schema json pointer', () => {
  const refResolver = new RefResolver()

  const schemaId = 'schemaId'
  const subSchemaId = 'subSchemaId'
  const schema = {
    $id: schemaId,
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
  refResolver.addSchema(schema)

  const jsonPointer = '#/properties/foo'
  const resolvedSchema = refResolver.getSchema(subSchemaId, jsonPointer)
  assert.equal(resolvedSchema, schema.definitions.subSchema.properties.foo)
})

test('should handle null schema correctly', () => {
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

  const resolvedSchema = refResolver.getSchema(schemaId)
  assert.equal(resolvedSchema, schema)
})

test('should add a schema without root $id', () => {
  const refResolver = new RefResolver()

  const schemaId = 'schemaId'
  const schema = {
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }
  refResolver.addSchema(schema, schemaId)

  const resolvedSchema = refResolver.getSchema(schemaId)
  assert.equal(resolvedSchema, schema)
})

test('root $id has higher priority than a schemaId argument', () => {
  const refResolver = new RefResolver()

  const schemaIdProperty = 'schemaId1'
  const schemaIdArgument = 'schemaId2'

  const schema = {
    $id: schemaIdProperty,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }
  refResolver.addSchema(schema, schemaIdArgument)

  const resolvedSchema = refResolver.getSchema(schemaIdProperty)
  assert.equal(resolvedSchema, schema)

  try {
    refResolver.getSchema(schemaIdArgument)
    assert.fail('should have thrown an error')
  } catch (err) {
    assert.equal(
      err.message,
      `Cannot resolve ref "${schemaIdArgument}#". Schema with id "${schemaIdArgument}" is not found.`
    )
  }
})

test('should not use a root $id if it is an anchor', () => {
  const refResolver = new RefResolver()

  const schemaIdProperty = '#schemaId1'
  const schemaIdArgument = 'schemaId2'

  const schema = {
    $id: schemaIdProperty,
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }
  refResolver.addSchema(schema, schemaIdArgument)

  try {
    refResolver.getSchema(schemaIdProperty)
    assert.fail('should have thrown an error')
  } catch (err) {
    assert.equal(
      err.message,
      `Cannot resolve ref "${schemaIdProperty}#". Schema with id "${schemaIdProperty}" is not found.`
    )
  }

  const resolvedSchema2 = refResolver.getSchema(schemaIdArgument)
  assert.equal(resolvedSchema2, schema)

  const resolvedSchema3 = refResolver.getSchema(schemaIdArgument, schemaIdProperty)
  assert.equal(resolvedSchema3, schema)
})

test('should return null if sub schema by json pointer is not found', () => {
  const refResolver = new RefResolver()

  const schemaId = 'schemaId'
  const schema = {
    $id: 'schemaId',
    type: 'object',
    properties: {
      foo: { type: 'string' }
    }
  }

  refResolver.addSchema(schema)

  const schemaRefs = refResolver.getSchema(schemaId, '#/missingSchema')
  assert.equal(schemaRefs, null)
})
