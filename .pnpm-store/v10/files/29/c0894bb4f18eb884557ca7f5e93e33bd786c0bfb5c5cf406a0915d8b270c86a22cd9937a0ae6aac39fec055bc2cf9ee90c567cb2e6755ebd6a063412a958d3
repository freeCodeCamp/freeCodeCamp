'use strict'

const { test } = require('node:test')
const build = require('..')

function buildTest (schema, toStringify, expected) {
  test(`render a ${schema.title} with default as JSON`, (t) => {
    t.plan(1)

    const stringify = build(schema)

    const output = stringify(toStringify)

    t.assert.equal(output, JSON.stringify(expected))
  })
}

buildTest({
  title: 'default string',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string',
      default: 'Collina'
    },
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 0
    },
    magic: {
      type: 'number'
    }
  },
  required: ['firstName', 'lastName']
}, {
  firstName: 'Matteo',
  magic: 42,
  age: 32
}, {
  firstName: 'Matteo',
  lastName: 'Collina',
  age: 32,
  magic: 42
})

buildTest({
  title: 'default string with value',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string',
      default: 'Collina'
    },
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 0
    },
    magic: {
      type: 'number'
    }
  },
  required: ['firstName', 'lastName']
}, {
  firstName: 'Matteo',
  lastName: 'collina',
  magic: 42,
  age: 32
}, {
  firstName: 'Matteo',
  lastName: 'collina',
  age: 32,
  magic: 42
})

buildTest({
  title: 'default number',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 0
    },
    magic: {
      type: 'number',
      default: 42
    }
  },
  required: ['firstName', 'lastName']
}, {
  firstName: 'Matteo',
  lastName: 'Collina',
  age: 32
}, {
  firstName: 'Matteo',
  lastName: 'Collina',
  age: 32,
  magic: 42
})

buildTest({
  title: 'default number with value',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 0
    },
    magic: {
      type: 'number',
      default: 42
    }
  },
  required: ['firstName', 'lastName']
}, {
  firstName: 'Matteo',
  lastName: 'Collina',
  age: 32,
  magic: 66
}, {
  firstName: 'Matteo',
  lastName: 'Collina',
  age: 32,
  magic: 66
})

buildTest({
  title: 'default object',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 0
    },
    otherProps: {
      type: 'object',
      default: { foo: 'bar' }
    }
  },
  required: ['firstName', 'lastName']
}, {
  firstName: 'Matteo',
  lastName: 'Collina',
  age: 32
}, {
  firstName: 'Matteo',
  lastName: 'Collina',
  age: 32,
  otherProps: { foo: 'bar' }
})

buildTest({
  title: 'default object with value',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 0
    },
    otherProps: {
      type: 'object',
      additionalProperties: true,
      default: { foo: 'bar' }
    }
  },
  required: ['firstName', 'lastName']
}, {
  firstName: 'Matteo',
  lastName: 'Collina',
  age: 32,
  otherProps: { hello: 'world' }
}, {
  firstName: 'Matteo',
  lastName: 'Collina',
  age: 32,
  otherProps: { hello: 'world' }
})

buildTest({
  title: 'default array',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 0
    },
    otherProps: {
      type: 'array',
      items: { type: 'string' },
      default: ['FOO']
    }
  },
  required: ['firstName', 'lastName']
}, {
  firstName: 'Matteo',
  lastName: 'Collina',
  age: 32
}, {
  firstName: 'Matteo',
  lastName: 'Collina',
  age: 32,
  otherProps: ['FOO']
})

buildTest({
  title: 'default array with value',
  type: 'object',
  properties: {
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 0
    },
    otherProps: {
      type: 'array',
      items: { type: 'string' },
      default: ['FOO']
    }
  },
  required: ['firstName', 'lastName']
}, {
  firstName: 'Matteo',
  lastName: 'Collina',
  age: 32,
  otherProps: ['BAR']
}, {
  firstName: 'Matteo',
  lastName: 'Collina',
  age: 32,
  otherProps: ['BAR']
})

buildTest({
  title: 'default deeper value',
  type: 'object',
  properties: {
    level1: {
      type: 'object',
      properties: {
        level2: {
          type: 'object',
          properties: {
            level3: {
              type: 'object',
              properties: {
                level4: {
                  type: 'object',
                  default: { foo: 'bar' }
                }
              }
            }
          }
        }
      }
    }
  }
}, {
  level1: { level2: { level3: { } } }
}, {
  level1: { level2: { level3: { level4: { foo: 'bar' } } } }
})

buildTest({
  title: 'default deeper value with value',
  type: 'object',
  properties: {
    level1: {
      type: 'object',
      properties: {
        level2: {
          type: 'object',
          properties: {
            level3: {
              type: 'object',
              properties: {
                level4: {
                  type: 'object',
                  default: { foo: 'bar' }
                }
              }
            }
          }
        }
      }
    }
  }
}, {
  level1: { level2: { level3: { level4: { } } } }
}, {
  level1: { level2: { level3: { level4: { } } } }
})

buildTest({
  type: 'object',
  properties: {
    name: {
      type: 'string',
      default: 'foo'
    },
    dev: {
      type: 'boolean',
      default: false
    }
  },
  required: [
    'name', 'dev'
  ]
}, {}, { name: 'foo', dev: false })

buildTest({
  type: 'object',
  properties: {
    name: {
      type: 'string',
      default: 'foo'
    },
    dev: {
      type: 'boolean'
    },
    job: {
      type: 'string',
      default: 'awesome'
    }
  },
  required: [
    'name', 'dev'
  ]
}, { dev: true }, { name: 'foo', dev: true, job: 'awesome' })
