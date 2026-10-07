'use strict'

const { test } = require('node:test')
const build = require('..')

test('possibly nullable integer primitive alternative', (t) => {
  t.plan(1)

  const schema = {
    title: 'simple object with multi-type nullable primitive',
    type: 'object',
    properties: {
      data: {
        type: ['integer']
      }
    }
  }

  const stringify = build(schema, { ajv: { allowUnionTypes: true } })

  const value = stringify({
    data: 4
  })
  t.assert.equal(value, '{"data":4}')
})

test('possibly nullable number primitive alternative', (t) => {
  t.plan(1)

  const schema = {
    title: 'simple object with multi-type nullable primitive',
    type: 'object',
    properties: {
      data: {
        type: ['number']
      }
    }
  }

  const stringify = build(schema)

  const value = stringify({
    data: 4
  })
  t.assert.equal(value, '{"data":4}')
})

test('possibly nullable integer primitive alternative with null value', (t) => {
  t.plan(1)

  const schema = {
    title: 'simple object with multi-type nullable primitive',
    type: 'object',
    properties: {
      data: {
        type: ['integer']
      }
    }
  }

  const stringify = build(schema)

  const value = stringify({
    data: null
  })
  t.assert.equal(value, '{"data":0}')
})

test('possibly nullable number primitive alternative with null value', (t) => {
  t.plan(1)

  const schema = {
    title: 'simple object with multi-type nullable primitive',
    type: 'object',
    properties: {
      data: {
        type: ['number']
      }
    }
  }

  const stringify = build(schema)

  const value = stringify({
    data: null
  })
  t.assert.equal(value, '{"data":0}')
})

test('possibly nullable number primitive alternative with null value', (t) => {
  t.plan(1)

  const schema = {
    title: 'simple object with multi-type nullable primitive',
    type: 'object',
    properties: {
      data: {
        type: ['boolean']
      }
    }
  }

  const stringify = build(schema)

  const value = stringify({
    data: null
  })
  t.assert.equal(value, '{"data":false}')
})

test('nullable integer primitive', (t) => {
  t.plan(1)

  const schema = {
    title: 'simple object with nullable primitive',
    type: 'object',
    properties: {
      data: {
        type: ['integer', 'null']
      }
    }
  }

  const stringify = build(schema)

  const value = stringify({
    data: 4
  })
  t.assert.equal(value, '{"data":4}')
})

test('nullable number primitive', (t) => {
  t.plan(1)

  const schema = {
    title: 'simple object with nullable primitive',
    type: 'object',
    properties: {
      data: {
        type: ['number', 'null']
      }
    }
  }

  const stringify = build(schema)

  const value = stringify({
    data: 4
  })
  t.assert.equal(value, '{"data":4}')
})

test('nullable primitive with null value', (t) => {
  t.plan(1)

  const schema = {
    title: 'simple object with nullable primitive',
    type: 'object',
    properties: {
      data: {
        type: ['integer', 'null']
      }
    }
  }

  const stringify = build(schema)

  const value = stringify({
    data: null
  })
  t.assert.equal(value, '{"data":null}')
})

test('nullable number primitive with null value', (t) => {
  t.plan(1)

  const schema = {
    title: 'simple object with nullable primitive',
    type: 'object',
    properties: {
      data: {
        type: ['number', 'null']
      }
    }
  }

  const stringify = build(schema)

  const value = stringify({
    data: null
  })
  t.assert.equal(value, '{"data":null}')
})

test('possibly null object with multi-type property', (t) => {
  t.plan(3)

  const schema = {
    title: 'simple object with multi-type property',
    type: 'object',
    properties: {
      objectOrNull: {
        type: ['object', 'null'],
        properties: {
          stringOrNumber: {
            type: ['string', 'number']
          }
        }
      }
    }
  }
  const stringify = build(schema)

  t.assert.equal(stringify({
    objectOrNull: {
      stringOrNumber: 'string'
    }
  }), '{"objectOrNull":{"stringOrNumber":"string"}}')

  t.assert.equal(stringify({
    objectOrNull: {
      stringOrNumber: 42
    }
  }), '{"objectOrNull":{"stringOrNumber":42}}')

  t.assert.equal(stringify({
    objectOrNull: null
  }), '{"objectOrNull":null}')
})

test('object with possibly null array of multiple types', (t) => {
  t.plan(5)

  const schema = {
    title: 'object with array of multiple types',
    type: 'object',
    properties: {
      arrayOfStringsAndNumbers: {
        type: ['array', 'null'],
        items: {
          type: ['string', 'number', 'null']
        }
      }
    }
  }
  const stringify = build(schema)

  try {
    const value = stringify({
      arrayOfStringsAndNumbers: null
    })
    t.assert.equal(value, '{"arrayOfStringsAndNumbers":null}')
  } catch (e) {
    console.log(e)
    t.fail()
  }

  try {
    const value = stringify({
      arrayOfStringsAndNumbers: ['string1', 'string2']
    })
    t.assert.equal(value, '{"arrayOfStringsAndNumbers":["string1","string2"]}')
  } catch (e) {
    console.log(e)
    t.fail()
  }

  t.assert.equal(stringify({
    arrayOfStringsAndNumbers: [42, 7]
  }), '{"arrayOfStringsAndNumbers":[42,7]}')

  t.assert.equal(stringify({
    arrayOfStringsAndNumbers: ['string1', 42, 7, 'string2']
  }), '{"arrayOfStringsAndNumbers":["string1",42,7,"string2"]}')

  t.assert.equal(stringify({
    arrayOfStringsAndNumbers: ['string1', null, 42, 7, 'string2', null]
  }), '{"arrayOfStringsAndNumbers":["string1",null,42,7,"string2",null]}')
})

test('object with tuple of multiple types', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with array of multiple types',
    type: 'object',
    properties: {
      fixedTupleOfStringsAndNumbers: {
        type: 'array',
        items: [
          {
            type: 'string'
          },
          {
            type: 'number'
          },
          {
            type: ['string', 'number']
          }
        ]
      }
    }
  }
  const stringify = build(schema)

  try {
    const value = stringify({
      fixedTupleOfStringsAndNumbers: ['string1', 42, 7]
    })
    t.assert.equal(value, '{"fixedTupleOfStringsAndNumbers":["string1",42,7]}')
  } catch (e) {
    console.log(e)
    t.fail()
  }

  try {
    const value = stringify({
      fixedTupleOfStringsAndNumbers: ['string1', 42, 'string2']
    })
    t.assert.equal(value, '{"fixedTupleOfStringsAndNumbers":["string1",42,"string2"]}')
  } catch (e) {
    console.log(e)
    t.fail()
  }
})

test('object with anyOf and multiple types', (t) => {
  t.plan(3)

  const schema = {
    title: 'object with anyOf and multiple types',
    type: 'object',
    properties: {
      objectOrBoolean: {
        anyOf: [
          {
            type: 'object',
            properties: {
              stringOrNumber: {
                type: ['string', 'number']
              }
            }
          },
          {
            type: 'boolean'
          }
        ]
      }
    }
  }
  const stringify = build(schema, { ajv: { allowUnionTypes: true } })

  try {
    const value = stringify({
      objectOrBoolean: { stringOrNumber: 'string' }
    })
    t.assert.equal(value, '{"objectOrBoolean":{"stringOrNumber":"string"}}')
  } catch (e) {
    console.log(e)
    t.fail()
  }

  t.assert.equal(stringify({
    objectOrBoolean: { stringOrNumber: 42 }
  }), '{"objectOrBoolean":{"stringOrNumber":42}}')

  t.assert.equal(stringify({
    objectOrBoolean: true
  }), '{"objectOrBoolean":true}')
})

test('string type array can handle dates', (t) => {
  t.plan(1)
  const schema = {
    type: 'object',
    properties: {
      date: { type: ['string'] },
      dateObject: { type: ['string'], format: 'date-time' }
    }
  }
  const stringify = build(schema)
  const value = stringify({
    date: new Date('2018-04-20T07:52:31.017Z'),
    dateObject: new Date('2018-04-21T07:52:31.017Z')
  })
  t.assert.equal(value, '{"date":"2018-04-20T07:52:31.017Z","dateObject":"2018-04-21T07:52:31.017Z"}')
})

test('object that is simultaneously a string and a json', (t) => {
  t.plan(2)
  const schema = {
    type: 'object',
    properties: {
      simultaneously: {
        type: ['string', 'object'],
        properties: {
          foo: { type: 'string' }
        }
      }
    }
  }

  const likeObjectId = {
    toString () { return 'hello' }
  }

  const stringify = build(schema)
  const valueStr = stringify({ simultaneously: likeObjectId })
  t.assert.equal(valueStr, '{"simultaneously":"hello"}')

  const valueObj = stringify({ simultaneously: { foo: likeObjectId } })
  t.assert.equal(valueObj, '{"simultaneously":{"foo":"hello"}}')
})

test('object that is simultaneously a string and a json switched', (t) => {
  t.plan(2)
  const schema = {
    type: 'object',
    properties: {
      simultaneously: {
        type: ['object', 'string'],
        properties: {
          foo: { type: 'string' }
        }
      }
    }
  }

  const likeObjectId = {
    toString () { return 'hello' }
  }

  const stringify = build(schema)
  const valueStr = stringify({ simultaneously: likeObjectId })
  t.assert.equal(valueStr, '{"simultaneously":{}}')

  const valueObj = stringify({ simultaneously: { foo: likeObjectId } })
  t.assert.equal(valueObj, '{"simultaneously":{"foo":"hello"}}')
})

test('class instance that is simultaneously a string and a json', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    properties: {
      simultaneously: {
        type: ['string', 'object'],
        properties: {
          foo: { type: 'string' }
        }
      }
    }
  }

  class Test {
    toString () { return 'hello' }
  }

  const likeObjectId = new Test()

  const stringify = build(schema)
  const valueStr = stringify({ simultaneously: likeObjectId })
  t.assert.equal(valueStr, '{"simultaneously":"hello"}')

  const valueObj = stringify({ simultaneously: { foo: likeObjectId } })
  t.assert.equal(valueObj, '{"simultaneously":{"foo":"hello"}}')
})

test('should not throw an error when type is array and object is null, it should instead coerce to []', (t) => {
  t.plan(1)
  const schema = {
    type: 'object',
    properties: {
      arr: {
        type: 'array',
        items: {
          type: 'number'
        }
      }
    }
  }

  const stringify = build(schema)
  const result = stringify({ arr: null })
  t.assert.equal(result, JSON.stringify({ arr: [] }))
})

test('should throw an error when type is array and object is not an array', (t) => {
  t.plan(1)
  const schema = {
    type: 'object',
    properties: {
      arr: {
        type: 'array',
        items: {
          type: 'number'
        }
      }
    }
  }

  const stringify = build(schema)
  t.assert.throws(() => stringify({ arr: { foo: 'hello' } }), new TypeError('The value of \'#/properties/arr\' does not match schema definition.'))
})

test('should throw an error when type is array and object is not an array with external schema', (t) => {
  t.plan(1)
  const schema = {
    type: 'object',
    properties: {
      arr: {
        $ref: 'arrayOfNumbers#/definitions/arr'
      }
    }
  }

  const externalSchema = {
    arrayOfNumbers: {
      definitions: {
        arr: {
          type: 'array',
          items: {
            type: 'number'
          }
        }
      }
    }
  }

  const stringify = build(schema, { schema: externalSchema })
  t.assert.throws(() => stringify({ arr: { foo: 'hello' } }), new TypeError('The value of \'arrayOfNumbers#/definitions/arr\' does not match schema definition.'))
})

test('throw an error if none of types matches', (t) => {
  t.plan(1)

  const schema = {
    title: 'simple object with multi-type nullable primitive',
    type: 'object',
    properties: {
      data: {
        type: ['number', 'boolean']
      }
    }
  }

  const stringify = build(schema)
  t.assert.throws(() => stringify({ data: 'string' }), 'The value "string" does not match schema definition.')
})
