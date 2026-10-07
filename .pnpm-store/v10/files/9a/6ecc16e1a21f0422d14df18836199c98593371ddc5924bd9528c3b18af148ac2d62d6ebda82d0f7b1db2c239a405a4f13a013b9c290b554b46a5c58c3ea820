'use strict'

const { test } = require('node:test')
const validator = require('is-my-json-valid')
const build = require('..')

process.env.TZ = 'UTC'

test('render a date in a string as JSON', (t) => {
  t.plan(2)

  const schema = {
    title: 'a date in a string',
    type: 'string'
  }
  const toStringify = new Date(1674263005800)

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify(toStringify)

  t.assert.equal(output, JSON.stringify(toStringify))
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('render a date in a string when format is date-format as ISOString', (t) => {
  t.plan(2)

  const schema = {
    title: 'a date in a string',
    type: 'string',
    format: 'date-time'
  }
  const toStringify = new Date(1674263005800)

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify(toStringify)

  t.assert.equal(output, JSON.stringify(toStringify))
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('render a nullable date in a string when format is date-format as ISOString', (t) => {
  t.plan(2)

  const schema = {
    title: 'a date in a string',
    type: 'string',
    format: 'date-time',
    nullable: true
  }
  const toStringify = new Date(1674263005800)

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify(toStringify)

  t.assert.equal(output, JSON.stringify(toStringify))
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('render a date in a string when format is date as YYYY-MM-DD', (t) => {
  t.plan(2)

  const schema = {
    title: 'a date in a string',
    type: 'string',
    format: 'date'
  }
  const toStringify = new Date(1674263005800)

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify(toStringify)

  t.assert.equal(output, '"2023-01-21"')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('render a nullable date in a string when format is date as YYYY-MM-DD', (t) => {
  t.plan(2)

  const schema = {
    title: 'a date in a string',
    type: 'string',
    format: 'date',
    nullable: true
  }
  const toStringify = new Date(1674263005800)

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify(toStringify)

  t.assert.equal(output, '"2023-01-21"')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('verify padding for rendered date in a string when format is date', (t) => {
  t.plan(2)

  const schema = {
    title: 'a date in a string',
    type: 'string',
    format: 'date'
  }
  const toStringify = new Date(2020, 0, 1, 0, 0, 0, 0)

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify(toStringify)

  t.assert.equal(output, '"2020-01-01"')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('render a date in a string when format is time as kk:mm:ss', (t) => {
  t.plan(3)

  const schema = {
    title: 'a date in a string',
    type: 'string',
    format: 'time'
  }
  const toStringify = new Date(1674263005800)

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify(toStringify)

  validate(JSON.parse(output))
  t.assert.equal(validate.errors, null)

  t.assert.equal(output, '"01:03:25"')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('render a nullable date in a string when format is time as kk:mm:ss', (t) => {
  t.plan(3)

  const schema = {
    title: 'a date in a string',
    type: 'string',
    format: 'time',
    nullable: true
  }
  const toStringify = new Date(1674263005800)

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify(toStringify)

  validate(JSON.parse(output))
  t.assert.equal(validate.errors, null)

  t.assert.equal(output, '"01:03:25"')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('render a midnight time', (t) => {
  t.plan(3)

  const schema = {
    title: 'a date in a string',
    type: 'string',
    format: 'time'
  }
  const midnight = new Date(new Date(1674263005800).setHours(24))

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify(midnight)

  validate(JSON.parse(output))
  t.assert.equal(validate.errors, null)

  t.assert.equal(output, '"00:03:25"')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('verify padding for rendered date in a string when format is time', (t) => {
  t.plan(3)

  const schema = {
    title: 'a date in a string',
    type: 'string',
    format: 'time'
  }
  const toStringify = new Date(2020, 0, 1, 1, 1, 1, 1)

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify(toStringify)

  validate(JSON.parse(output))
  t.assert.equal(validate.errors, null)

  t.assert.equal(output, '"01:01:01"')
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('render a nested object in a string when type is date-format as ISOString', (t) => {
  t.plan(2)

  const schema = {
    title: 'an object in a string',
    type: 'object',
    properties: {
      date: {
        type: 'string',
        format: 'date-time'
      }
    }
  }
  const toStringify = { date: new Date(1674263005800) }

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify(toStringify)

  t.assert.equal(output, JSON.stringify(toStringify))
  t.assert.ok(validate(JSON.parse(output)), 'valid schema')
})

test('serializing null value', async t => {
  const input = { updatedAt: null }

  function createSchema (properties) {
    return {
      title: 'an object in a string',
      type: 'object',
      properties
    }
  }

  function serialize (schema, input) {
    const validate = validator(schema)
    const stringify = build(schema)
    const output = stringify(input)

    return {
      validate,
      output
    }
  }

  t.plan(3)

  await t.test('type::string', async t => {
    t.plan(3)

    await t.test('format::date-time', t => {
      t.plan(2)

      const prop = {
        updatedAt: {
          type: 'string',
          format: 'date-time'
        }
      }

      const {
        output,
        validate
      } = serialize(createSchema(prop), input)

      t.assert.equal(output, '{"updatedAt":""}')
      t.assert.equal(validate(JSON.parse(output)), false, 'an empty string is not a date-time format')
    })

    await t.test('format::date', t => {
      t.plan(2)

      const prop = {
        updatedAt: {
          type: 'string',
          format: 'date'
        }
      }

      const {
        output,
        validate
      } = serialize(createSchema(prop), input)

      t.assert.equal(output, '{"updatedAt":""}')
      t.assert.equal(validate(JSON.parse(output)), false, 'an empty string is not a date format')
    })

    await t.test('format::time', t => {
      t.plan(2)

      const prop = {
        updatedAt: {
          type: 'string',
          format: 'time'
        }
      }

      const {
        output,
        validate
      } = serialize(createSchema(prop), input)

      t.assert.equal(output, '{"updatedAt":""}')
      t.assert.equal(validate(JSON.parse(output)), false, 'an empty string is not a time format')
    })
  })

  await t.test('type::array', async t => {
    t.plan(6)

    await t.test('format::date-time', t => {
      t.plan(2)

      const prop = {
        updatedAt: {
          type: ['string'],
          format: 'date-time'
        }
      }

      const {
        output,
        validate
      } = serialize(createSchema(prop), input)

      t.assert.equal(output, '{"updatedAt":""}')
      t.assert.equal(validate(JSON.parse(output)), false, 'an empty string is not a date-time format')
    })

    await t.test('format::date', t => {
      t.plan(2)

      const prop = {
        updatedAt: {
          type: ['string'],
          format: 'date'
        }
      }

      const {
        output,
        validate
      } = serialize(createSchema(prop), input)

      t.assert.equal(output, '{"updatedAt":""}')
      t.assert.equal(validate(JSON.parse(output)), false, 'an empty string is not a date format')
    })

    await t.test('format::date', t => {
      t.plan(2)

      const prop = {
        updatedAt: {
          type: ['string'],
          format: 'date'
        }
      }

      const {
        output,
        validate
      } = serialize(createSchema(prop), input)

      t.assert.equal(output, '{"updatedAt":""}')
      t.assert.equal(validate(JSON.parse(output)), false, 'an empty string is not a date format')
    })

    await t.test('format::time, Date object', t => {
      t.plan(1)

      const schema = {
        oneOf: [
          {
            type: 'object',
            properties: {
              updatedAt: {
                type: ['string', 'number'],
                format: 'time'
              }
            }
          }
        ]
      }

      const date = new Date(1674263005800)
      const input = { updatedAt: date }
      const { output } = serialize(schema, input)

      t.assert.equal(output, JSON.stringify({ updatedAt: '01:03:25' }))
    })

    await t.test('format::time, Date object', t => {
      t.plan(1)

      const schema = {
        oneOf: [
          {
            type: ['string', 'number'],
            format: 'time'
          }
        ]
      }

      const date = new Date(1674263005800)
      const { output } = serialize(schema, date)

      t.assert.equal(output, '"01:03:25"')
    })

    await t.test('format::time, Date object', t => {
      t.plan(1)

      const schema = {
        oneOf: [
          {
            type: ['string', 'number'],
            format: 'time'
          }
        ]
      }

      const { output } = serialize(schema, 42)

      t.assert.equal(output, JSON.stringify(42))
    })
  })

  await t.test('type::array::nullable', async t => {
    t.plan(3)

    await t.test('format::date-time', t => {
      t.plan(2)

      const prop = {
        updatedAt: {
          type: ['string', 'null'],
          format: 'date-time'
        }
      }

      const {
        output,
        validate
      } = serialize(createSchema(prop), input)

      t.assert.equal(output, '{"updatedAt":null}')
      t.assert.ok(validate(JSON.parse(output)), 'valid schema')
    })

    await t.test('format::date', t => {
      t.plan(2)

      const prop = {
        updatedAt: {
          type: ['string', 'null'],
          format: 'date'
        }
      }

      const {
        output,
        validate
      } = serialize(createSchema(prop), input)

      t.assert.equal(output, '{"updatedAt":null}')
      t.assert.ok(validate(JSON.parse(output)), 'valid schema')
    })

    await t.test('format::time', t => {
      t.plan(2)

      const prop = {
        updatedAt: {
          type: ['string', 'null'],
          format: 'time'
        }
      }

      const {
        output,
        validate
      } = serialize(createSchema(prop), input)

      t.assert.equal(output, '{"updatedAt":null}')
      t.assert.ok(validate(JSON.parse(output)), 'valid schema')
    })
  })
})

test('Validate Date object as string type', (t) => {
  t.plan(1)

  const schema = {
    oneOf: [
      { type: 'string' }
    ]
  }
  const toStringify = new Date(1674263005800)

  const stringify = build(schema)
  const output = stringify(toStringify)

  t.assert.equal(output, JSON.stringify(toStringify))
})

test('nullable date', (t) => {
  t.plan(1)

  const schema = {
    anyOf: [
      {
        format: 'date',
        type: 'string',
        nullable: true
      }
    ]
  }

  const stringify = build(schema)

  const data = new Date(1674263005800)
  const result = stringify(data)

  t.assert.equal(result, '"2023-01-21"')
})

test('non-date format should not affect data serialization (issue #491)', (t) => {
  t.plan(1)

  const schema = {
    type: 'object',
    properties: {
      hello: {
        type: 'string',
        format: 'int64',
        pattern: '^[0-9]*$'
      }
    }
  }

  const stringify = build(schema)
  const data = { hello: 123n }
  t.assert.equal(stringify(data), '{"hello":"123"}')
})

test('should serialize also an invalid string value, even if it is not a valid date', (t) => {
  t.plan(2)

  const schema = {
    title: 'a date in a string',
    type: 'string',
    format: 'date-time',
    nullable: true
  }
  const toStringify = 'invalid'

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify(toStringify)

  t.assert.equal(output, JSON.stringify(toStringify))
  t.assert.equal(validate(JSON.parse(output)), false, 'valid schema')
})

test('should throw an error if value can not be transformed to date-time', (t) => {
  t.plan(2)

  const schema = {
    title: 'a date in a string',
    type: 'string',
    format: 'date-time',
    nullable: true
  }
  const toStringify = true

  const validate = validator(schema)
  const stringify = build(schema)

  t.assert.throws(() => stringify(toStringify), new Error('The value "true" cannot be converted to a date-time.'))
  t.assert.equal(validate(toStringify), false)
})

test('should throw an error if value can not be transformed to date', (t) => {
  t.plan(2)

  const schema = {
    title: 'a date in a string',
    type: 'string',
    format: 'date',
    nullable: true
  }
  const toStringify = true

  const validate = validator(schema)
  const stringify = build(schema)

  t.assert.throws(() => stringify(toStringify), new Error('The value "true" cannot be converted to a date.'))
  t.assert.equal(validate(toStringify), false)
})

test('should throw an error if value can not be transformed to time', (t) => {
  t.plan(2)

  const schema = {
    title: 'a time in a string',
    type: 'string',
    format: 'time',
    nullable: true
  }
  const toStringify = true

  const validate = validator(schema)
  const stringify = build(schema)

  t.assert.throws(() => stringify(toStringify), new Error('The value "true" cannot be converted to a time.'))
  t.assert.equal(validate(toStringify), false)
})

test('should serialize also an invalid string value, even if it is not a valid time', (t) => {
  t.plan(2)

  const schema = {
    title: 'a time in a string',
    type: 'string',
    format: 'time',
    nullable: true
  }
  const toStringify = 'invalid'

  const validate = validator(schema)
  const stringify = build(schema)
  const output = stringify(toStringify)

  t.assert.equal(output, JSON.stringify(toStringify))
  t.assert.equal(validate(JSON.parse(output)), false, 'valid schema')
})
