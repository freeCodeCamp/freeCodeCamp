'use strict'

const { test } = require('node:test')
const build = require('..')

test('object with multiple types field', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with multiple types field',
    type: 'object',
    properties: {
      str: {
        oneOf: [{
          type: 'string'
        }, {
          type: 'boolean'
        }]
      }
    }
  }
  const stringify = build(schema)

  t.assert.equal(stringify({ str: 'string' }), '{"str":"string"}')
  t.assert.equal(stringify({ str: true }), '{"str":true}')
})

test('object with field of type object or null', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with field of type object or null',
    type: 'object',
    properties: {
      prop: {
        oneOf: [{
          type: 'object',
          properties: {
            str: {
              type: 'string'
            }
          }
        }, {
          type: 'null'
        }]
      }
    }
  }
  const stringify = build(schema)

  t.assert.equal(stringify({ prop: null }), '{"prop":null}')

  t.assert.equal(stringify({
    prop: {
      str: 'string', remove: 'this'
    }
  }), '{"prop":{"str":"string"}}')
})

test('object with field of type object or array', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with field of type object or array',
    type: 'object',
    properties: {
      prop: {
        oneOf: [{
          type: 'object',
          properties: {},
          additionalProperties: true
        }, {
          type: 'array',
          items: {
            type: 'string'
          }
        }]
      }
    }
  }
  const stringify = build(schema)

  t.assert.equal(stringify({
    prop: { str: 'string' }
  }), '{"prop":{"str":"string"}}')

  t.assert.equal(stringify({
    prop: ['string']
  }), '{"prop":["string"]}')
})

test('object with field of type string and coercion disable ', (t) => {
  t.plan(1)

  const schema = {
    title: 'object with field of type string',
    type: 'object',
    properties: {
      str: {
        oneOf: [{
          type: 'string'
        }]
      }
    }
  }
  const stringify = build(schema)
  t.assert.throws(() => stringify({ str: 1 }))
})

test('object with field of type string and coercion enable ', (t) => {
  t.plan(1)

  const schema = {
    title: 'object with field of type string',
    type: 'object',
    properties: {
      str: {
        oneOf: [{
          type: 'string'
        }]
      }
    }
  }

  const options = {
    ajv: {
      coerceTypes: true
    }
  }
  const stringify = build(schema, options)

  const value = stringify({
    str: 1
  })
  t.assert.equal(value, '{"str":"1"}')
})

test('object with field with type union of multiple objects', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with oneOf property value containing objects',
    type: 'object',
    properties: {
      oneOfSchema: {
        oneOf: [
          {
            type: 'object',
            properties: {
              baz: { type: 'number' }
            },
            required: ['baz']
          },
          {
            type: 'object',
            properties: {
              bar: { type: 'string' }
            },
            required: ['bar']
          }
        ]
      }
    },
    required: ['oneOfSchema']
  }

  const stringify = build(schema)

  t.assert.equal(stringify({ oneOfSchema: { baz: 5 } }), '{"oneOfSchema":{"baz":5}}')

  t.assert.equal(stringify({ oneOfSchema: { bar: 'foo' } }), '{"oneOfSchema":{"bar":"foo"}}')
})

test('null value in schema', (t) => {
  t.plan(0)

  const schema = {
    title: 'schema with null child',
    type: 'string',
    nullable: true,
    enum: [null]
  }

  build(schema)
})

test('oneOf and $ref together', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    properties: {
      cs: {
        oneOf: [
          {
            $ref: '#/definitions/Option'
          },
          {
            type: 'boolean'
          }
        ]
      }
    },
    definitions: {
      Option: {
        type: 'string'
      }
    }
  }

  const stringify = build(schema)

  t.assert.equal(stringify({ cs: 'franco' }), '{"cs":"franco"}')

  t.assert.equal(stringify({ cs: true }), '{"cs":true}')
})

test('oneOf and $ref: 2 levels are fine', (t) => {
  t.plan(1)

  const schema = {
    type: 'object',
    properties: {
      cs: {
        oneOf: [
          {
            $ref: '#/definitions/Option'
          },
          {
            type: 'boolean'
          }
        ]
      }
    },
    definitions: {
      Option: {
        oneOf: [
          {
            type: 'number'
          },
          {
            type: 'boolean'
          }
        ]
      }
    }
  }

  const stringify = build(schema)
  const value = stringify({
    cs: 3
  })
  t.assert.equal(value, '{"cs":3}')
})

test('oneOf and $ref: multiple levels should throw at build.', (t) => {
  t.plan(3)

  const schema = {
    type: 'object',
    properties: {
      cs: {
        oneOf: [
          {
            $ref: '#/definitions/Option'
          },
          {
            type: 'boolean'
          }
        ]
      }
    },
    definitions: {
      Option: {
        oneOf: [
          {
            $ref: '#/definitions/Option2'
          },
          {
            type: 'string'
          }
        ]
      },
      Option2: {
        type: 'number'
      }
    }
  }

  const stringify = build(schema)

  t.assert.equal(stringify({ cs: 3 }), '{"cs":3}')
  t.assert.equal(stringify({ cs: true }), '{"cs":true}')
  t.assert.equal(stringify({ cs: 'pippo' }), '{"cs":"pippo"}')
})

test('oneOf and $ref - multiple external $ref', (t) => {
  t.plan(2)

  const externalSchema = {
    external: {
      definitions: {
        def: {
          type: 'object',
          properties: {
            prop: { oneOf: [{ $ref: 'external2#/definitions/other' }] }
          }
        }
      }
    },
    external2: {
      definitions: {
        internal: {
          type: 'string'
        },
        other: {
          type: 'object',
          properties: {
            prop2: { $ref: '#/definitions/internal' }
          }
        }
      }
    }
  }

  const schema = {
    title: 'object with $ref',
    type: 'object',
    properties: {
      obj: {
        $ref: 'external#/definitions/def'
      }
    }
  }

  const object = {
    obj: {
      prop: {
        prop2: 'test'
      }
    }
  }

  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"obj":{"prop":{"prop2":"test"}}}')
})

test('oneOf with enum with more than 100 entries', (t) => {
  t.plan(1)

  const schema = {
    title: 'type array that may have one of declared items',
    type: 'array',
    items: {
      oneOf: [
        {
          type: 'string',
          enum: ['EUR', 'USD', ...(new Set([...new Array(200)].map(() => Math.random().toString(36).substr(2, 3)))).values()]
        },
        { type: 'null' }
      ]
    }
  }
  const stringify = build(schema)

  const value = stringify(['EUR', 'USD', null])
  t.assert.equal(value, '["EUR","USD",null]')
})

test('oneOf object with field of type string with format or null', (t) => {
  t.plan(1)

  const toStringify = new Date()

  const withOneOfSchema = {
    type: 'object',
    properties: {
      prop: {
        oneOf: [{
          type: 'string',
          format: 'date-time'
        }, {
          type: 'null'
        }]
      }
    }
  }

  const withOneOfStringify = build(withOneOfSchema)

  t.assert.equal(withOneOfStringify({
    prop: toStringify
  }), `{"prop":"${toStringify.toISOString()}"}`)
})

test('one array item match oneOf types', (t) => {
  t.plan(3)

  const schema = {
    type: 'object',
    additionalProperties: false,
    required: ['data'],
    properties: {
      data: {
        type: 'array',
        minItems: 1,
        items: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'number'
            }
          ]
        }
      }
    }
  }

  const stringify = build(schema)

  t.assert.equal(stringify({ data: ['foo'] }), '{"data":["foo"]}')
  t.assert.equal(stringify({ data: [1] }), '{"data":[1]}')
  t.assert.throws(() => stringify({ data: [false, 'foo'] }))
})

test('some array items match oneOf types', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    additionalProperties: false,
    required: ['data'],
    properties: {
      data: {
        type: 'array',
        minItems: 1,
        items: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'number'
            }
          ]
        }
      }
    }
  }

  const stringify = build(schema)

  t.assert.equal(stringify({ data: ['foo', 5] }), '{"data":["foo",5]}')
  t.assert.throws(() => stringify({ data: [false, 'foo', true, 5] }))
})

test('all array items does not match oneOf types', (t) => {
  t.plan(1)

  const schema = {
    type: 'object',
    additionalProperties: false,
    required: ['data'],
    properties: {
      data: {
        type: 'array',
        minItems: 1,
        items: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'number'
            }
          ]
        }
      }
    }
  }

  const stringify = build(schema)

  t.assert.throws(() => stringify({ data: [null, false, true, undefined, [], {}] }))
})
