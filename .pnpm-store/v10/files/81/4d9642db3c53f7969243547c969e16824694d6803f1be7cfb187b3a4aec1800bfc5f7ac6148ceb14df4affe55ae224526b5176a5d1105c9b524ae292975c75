'use strict'

const { test } = require('node:test')

const Ajv = require('ajv')
const ajv = new Ajv({ coerceTypes: true })

const validation = require('../../lib/validation')
const { normalizeSchema } = require('../../lib/schemas')
const symbols = require('../../lib/validation').symbols
const { kSchemaVisited } = require('../../lib/symbols')

test('Symbols', t => {
  t.plan(5)
  t.assert.strictEqual(typeof symbols.responseSchema, 'symbol')
  t.assert.strictEqual(typeof symbols.bodySchema, 'symbol')
  t.assert.strictEqual(typeof symbols.querystringSchema, 'symbol')
  t.assert.strictEqual(typeof symbols.paramsSchema, 'symbol')
  t.assert.strictEqual(typeof symbols.headersSchema, 'symbol')
})

;['compileSchemasForValidation',
  'compileSchemasForSerialization'].forEach(func => {
  test(`${func} schema - missing schema`, t => {
    t.plan(2)
    const context = {}
    validation[func](context)
    t.assert.strictEqual(typeof context[symbols.bodySchema], 'undefined')
    t.assert.strictEqual(typeof context[symbols.responseSchema], 'undefined')
  })

  test(`${func} schema - missing output schema`, t => {
    t.plan(1)
    const context = { schema: {} }
    validation[func](context, null)
    t.assert.strictEqual(typeof context[symbols.responseSchema], 'undefined')
  })
})

test('build schema - output schema', t => {
  t.plan(2)
  const opts = {
    schema: {
      response: {
        '2xx': {
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        },
        201: {
          type: 'object',
          properties: {
            hello: { type: 'number' }
          }
        }
      }
    }
  }
  validation.compileSchemasForSerialization(opts, ({ schema, method, url, httpPart }) => ajv.compile(schema))
  t.assert.strictEqual(typeof opts[symbols.responseSchema]['2xx'], 'function')
  t.assert.strictEqual(typeof opts[symbols.responseSchema]['201'], 'function')
})

test('build schema - body schema', t => {
  t.plan(1)
  const opts = {
    schema: {
      body: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }
  validation.compileSchemasForValidation(opts, ({ schema, method, url, httpPart }) => ajv.compile(schema))
  t.assert.strictEqual(typeof opts[symbols.bodySchema], 'function')
})

test('build schema - body with multiple content type schemas', t => {
  t.plan(2)
  const opts = {
    schema: {
      body: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                hello: { type: 'string' }
              }
            }
          },
          'text/plain': {
            schema: { type: 'string' }
          }
        }
      }
    }
  }
  validation.compileSchemasForValidation(opts, ({ schema, method, url, httpPart }) => ajv.compile(schema))
  t.assert.ok(opts[symbols.bodySchema]['application/json'], 'function')
  t.assert.ok(opts[symbols.bodySchema]['text/plain'], 'function')
})

test('build schema - avoid repeated normalize schema', t => {
  t.plan(3)
  const serverConfig = {}
  const opts = {
    schema: {
      query: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }
  opts.schema = normalizeSchema(opts.schema, serverConfig)
  t.assert.notStrictEqual(kSchemaVisited, undefined)
  t.assert.strictEqual(opts.schema[kSchemaVisited], true)
  t.assert.strictEqual(opts.schema, normalizeSchema(opts.schema, serverConfig))
})

test('build schema - query schema', t => {
  t.plan(2)
  const serverConfig = {}
  const opts = {
    schema: {
      query: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }
  opts.schema = normalizeSchema(opts.schema, serverConfig)
  validation.compileSchemasForValidation(opts, ({ schema, method, url, httpPart }) => ajv.compile(schema))
  t.assert.ok(typeof opts[symbols.querystringSchema].schema.type === 'string')
  t.assert.strictEqual(typeof opts[symbols.querystringSchema], 'function')
})

test('build schema - query schema abbreviated', t => {
  t.plan(2)
  const serverConfig = {}
  const opts = {
    schema: {
      query: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }
  opts.schema = normalizeSchema(opts.schema, serverConfig)
  validation.compileSchemasForValidation(opts, ({ schema, method, url, httpPart }) => ajv.compile(schema))
  t.assert.ok(typeof opts[symbols.querystringSchema].schema.type === 'string')
  t.assert.strictEqual(typeof opts[symbols.querystringSchema], 'function')
})

test('build schema - querystring schema', t => {
  t.plan(2)
  const opts = {
    schema: {
      querystring: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }
  validation.compileSchemasForValidation(opts, ({ schema, method, url, httpPart }) => ajv.compile(schema))
  t.assert.ok(typeof opts[symbols.querystringSchema].schema.type === 'string')
  t.assert.strictEqual(typeof opts[symbols.querystringSchema], 'function')
})

test('build schema - querystring schema abbreviated', t => {
  t.plan(2)
  const serverConfig = {}
  const opts = {
    schema: {
      querystring: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }
  opts.schema = normalizeSchema(opts.schema, serverConfig)
  validation.compileSchemasForValidation(opts, ({ schema, method, url, httpPart }) => ajv.compile(schema))
  t.assert.ok(typeof opts[symbols.querystringSchema].schema.type === 'string')
  t.assert.strictEqual(typeof opts[symbols.querystringSchema], 'function')
})

test('build schema - must throw if querystring and query schema exist', t => {
  t.plan(2)
  try {
    const serverConfig = {}
    const opts = {
      schema: {
        query: {
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        },
        querystring: {
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        }
      }
    }
    opts.schema = normalizeSchema(opts.schema, serverConfig)
  } catch (err) {
    t.assert.strictEqual(err.code, 'FST_ERR_SCH_DUPLICATE')
    t.assert.strictEqual(err.message, 'Schema with \'querystring\' already present!')
  }
})

test('build schema - params schema', t => {
  t.plan(1)
  const opts = {
    schema: {
      params: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  }
  validation.compileSchemasForValidation(opts, ({ schema, method, url, httpPart }) => ajv.compile(schema))
  t.assert.strictEqual(typeof opts[symbols.paramsSchema], 'function')
})

test('build schema - headers schema', t => {
  t.plan(1)
  const opts = {
    schema: {
      headers: {
        type: 'object',
        properties: {
          'content-type': { type: 'string' }
        }
      }
    }
  }
  validation.compileSchemasForValidation(opts, ({ schema, method, url, httpPart }) => ajv.compile(schema))
  t.assert.strictEqual(typeof opts[symbols.headersSchema], 'function')
})

test('build schema - headers are lowercase', t => {
  t.plan(1)
  const opts = {
    schema: {
      headers: {
        type: 'object',
        properties: {
          'Content-Type': { type: 'string' }
        }
      }
    }
  }
  validation.compileSchemasForValidation(opts, ({ schema, method, url, httpPart }) => {
    t.assert.ok(schema.properties['content-type'], 'lowercase content-type exists')
    return () => { }
  })
})

test('build schema - headers are not lowercased in case of custom object', t => {
  t.plan(1)

  class Headers { }
  const opts = {
    schema: {
      headers: new Headers()
    }
  }
  validation.compileSchemasForValidation(opts, ({ schema, method, url, httpPart }) => {
    t.assert.ok(schema, Headers)
    return () => { }
  })
})

test('build schema - headers are not lowercased in case of custom validator provided', t => {
  t.plan(1)

  class Headers { }
  const opts = {
    schema: {
      headers: new Headers()
    }
  }
  validation.compileSchemasForValidation(opts, ({ schema, method, url, httpPart }) => {
    t.assert.ok(schema, Headers)
    return () => { }
  }, true)
})

test('build schema - uppercased headers are not included', t => {
  t.plan(1)
  const opts = {
    schema: {
      headers: {
        type: 'object',
        properties: {
          'Content-Type': { type: 'string' }
        }
      }
    }
  }
  validation.compileSchemasForValidation(opts, ({ schema, method, url, httpPart }) => {
    t.assert.ok(!('Content-Type' in schema.properties), 'uppercase does not exist')
    return () => { }
  })
})

test('build schema - mixed schema types are individually skipped or normalized', t => {
  t.plan(2)

  class CustomSchemaClass { }

  const testCases = [{
    schema: {
      body: new CustomSchemaClass()
    },
    assertions: (schema) => {
      t.assert.ok(schema.body, CustomSchemaClass)
    }
  }, {
    schema: {
      response: {
        200: new CustomSchemaClass()
      }
    },
    assertions: (schema) => {
      t.assert.ok(schema.response[200], CustomSchemaClass)
    }
  }]

  testCases.forEach((testCase) => {
    const result = normalizeSchema(testCase.schema, {})
    testCase.assertions(result)
  })
})
