'use strict'

const assert = require('node:assert/strict')
const { test } = require('node:test')
const { RefResolver } = require('../index.js')

test('should return schema refs', () => {
  const refResolver = new RefResolver()

  const schemaId = 'schemaId'
  const schema = {
    $id: 'schemaId',
    type: 'object',
    properties: {
      foo: { $ref: 'schemaId2#/definitions/foo' },
      bar: { $ref: 'schemaId3#/definitions/bar' },
      baz: {
        type: 'object',
        properties: {
          qux: { $ref: 'schemaId4#/definitions/qux' }
        }
      }
    }
  }

  refResolver.addSchema(schema)

  const schemaRefs = refResolver.getSchemaRefs(schemaId)
  assert.deepStrictEqual(schemaRefs, [
    { schemaId: 'schemaId2', jsonPointer: '#/definitions/foo' },
    { schemaId: 'schemaId3', jsonPointer: '#/definitions/bar' },
    { schemaId: 'schemaId4', jsonPointer: '#/definitions/qux' }
  ])
})

test('should return nested schema refs', () => {
  const refResolver = new RefResolver()

  const schemaId = 'schemaId'
  const subSchemaId = 'subSchemaId'

  const schema = {
    $id: 'schemaId',
    $ref: 'schemaId2#/definitions/subschema',
    definitions: {
      subschema: {
        $id: subSchemaId,
        type: 'object',
        properties: {
          foo: { $ref: 'schemaId2#/definitions/foo' },
          bar: { $ref: 'schemaId3#/definitions/bar' },
          baz: {
            type: 'object',
            properties: {
              qux: { $ref: 'schemaId4#/definitions/qux' }
            }
          }
        }
      }
    }
  }

  refResolver.addSchema(schema)

  const schemaRefs = refResolver.getSchemaRefs(schemaId)
  assert.deepStrictEqual(schemaRefs, [
    { schemaId: 'schemaId2', jsonPointer: '#/definitions/subschema' }
  ])

  const subSchemaRefs = refResolver.getSchemaRefs(subSchemaId)
  assert.deepStrictEqual(subSchemaRefs, [
    { schemaId: 'schemaId2', jsonPointer: '#/definitions/foo' },
    { schemaId: 'schemaId3', jsonPointer: '#/definitions/bar' },
    { schemaId: 'schemaId4', jsonPointer: '#/definitions/qux' }
  ])
})

test('should throw is schema does not exist', () => {
  const refResolver = new RefResolver()

  try {
    refResolver.getSchemaRefs('schemaId')
    assert.fail('should throw error')
  } catch (error) {
    assert.equal(error.message, 'Schema with id "schemaId" is not found.')
  }
})
