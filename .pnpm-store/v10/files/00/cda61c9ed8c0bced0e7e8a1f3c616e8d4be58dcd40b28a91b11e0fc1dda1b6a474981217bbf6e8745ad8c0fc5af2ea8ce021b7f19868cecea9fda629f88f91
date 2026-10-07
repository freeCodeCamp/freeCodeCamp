const AJV = require('ajv')
const fastUri = require('../')
const ajv = new AJV({
  uriResolver: fastUri // comment this line to see it works with uri-js
})
const test = require('tape')

test('ajv', t => {
  t.plan(1)
  const schema = {
    $ref: '#/definitions/Record%3Cstring%2CPerson%3E',
    definitions: {
      Person: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string'
          }
        }
      },
      'Record<string,Person>': {
        type: 'object',
        additionalProperties: {
          $ref: '#/definitions/Person'
        }
      }
    }
  }

  const data = {
    joe: {
      firstName: 'Joe'
    }

  }

  const validate = ajv.compile(schema)
  t.ok(validate(data))
})
