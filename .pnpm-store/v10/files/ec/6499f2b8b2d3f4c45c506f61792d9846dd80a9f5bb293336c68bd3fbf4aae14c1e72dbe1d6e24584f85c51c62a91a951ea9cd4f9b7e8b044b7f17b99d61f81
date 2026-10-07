'use strict'

const clone = require('rfdc')({ proto: true })

const { test } = require('node:test')
const build = require('..')

test('ref internal - properties', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with $ref',
    definitions: {
      def: {
        type: 'object',
        properties: {
          str: {
            type: 'string'
          }
        }
      }
    },
    type: 'object',
    properties: {
      obj: {
        $ref: '#/definitions/def'
      }
    }
  }

  const object = {
    obj: {
      str: 'test'
    }
  }

  const stringify = build(schema)
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"obj":{"str":"test"}}')
})

test('ref internal - items', (t) => {
  t.plan(2)

  const schema = {
    title: 'array with $ref',
    definitions: {
      def: {
        type: 'object',
        properties: {
          str: {
            type: 'string'
          }
        }
      }
    },
    type: 'array',
    items: { $ref: '#/definitions/def' }
  }

  const array = [{
    str: 'test'
  }]

  const stringify = build(schema)
  const output = stringify(array)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '[{"str":"test"}]')
})

test('ref external - properties', (t) => {
  t.plan(2)

  const externalSchema = {
    first: require('./ref.json'),
    second: {
      definitions: {
        num: {
          type: 'object',
          properties: {
            int: {
              type: 'integer'
            }
          }
        }
      }
    },
    third: {
      type: 'string'
    }
  }

  const schema = {
    title: 'object with $ref',
    type: 'object',
    properties: {
      obj: {
        $ref: 'first#/definitions/def'
      },
      num: {
        $ref: 'second#/definitions/num'
      },
      strPlain: {
        $ref: 'third'
      },
      strHash: {
        $ref: 'third#'
      }
    }
  }

  const object = {
    obj: {
      str: 'test'
    },
    num: {
      int: 42
    },
    strPlain: 'test',
    strHash: 'test'
  }

  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"obj":{"str":"test"},"num":{"int":42},"strPlain":"test","strHash":"test"}')
})

test('ref internal - patternProperties', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with $ref',
    definitions: {
      def: {
        type: 'object',
        properties: {
          str: {
            type: 'string'
          }
        }
      }
    },
    type: 'object',
    properties: {},
    patternProperties: {
      obj: {
        $ref: '#/definitions/def'
      }
    }
  }

  const object = {
    obj: {
      str: 'test'
    }
  }

  const stringify = build(schema)
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"obj":{"str":"test"}}')
})

test('ref internal - additionalProperties', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with $ref',
    definitions: {
      def: {
        type: 'object',
        properties: {
          str: {
            type: 'string'
          }
        }
      }
    },
    type: 'object',
    properties: {},
    additionalProperties: {
      $ref: '#/definitions/def'
    }
  }

  const object = {
    obj: {
      str: 'test'
    }
  }

  const stringify = build(schema)
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"obj":{"str":"test"}}')
})

test('ref internal - pattern-additional Properties', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with $ref',
    definitions: {
      def: {
        type: 'object',
        properties: {
          str: {
            type: 'string'
          }
        }
      }
    },
    type: 'object',
    properties: {},
    patternProperties: {
      reg: {
        $ref: '#/definitions/def'
      }
    },
    additionalProperties: {
      $ref: '#/definitions/def'
    }
  }

  const object = {
    reg: {
      str: 'test'
    },
    obj: {
      str: 'test'
    }
  }

  const stringify = build(schema)
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"reg":{"str":"test"},"obj":{"str":"test"}}')
})

test('ref external - pattern-additional Properties', (t) => {
  t.plan(2)

  const externalSchema = {
    first: require('./ref.json'),
    second: {
      definitions: {
        num: {
          type: 'object',
          properties: {
            int: {
              type: 'integer'
            }
          }
        }
      }
    }
  }

  const schema = {
    title: 'object with $ref',
    type: 'object',
    properties: {},
    patternProperties: {
      reg: {
        $ref: 'first#/definitions/def'
      }
    },
    additionalProperties: {
      $ref: 'second#/definitions/num'
    }
  }

  const object = {
    reg: {
      str: 'test'
    },
    obj: {
      int: 42
    }
  }

  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"reg":{"str":"test"},"obj":{"int":42}}')
})

test('ref internal - deepObject schema', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with $ref',
    definitions: {
      def: {
        type: 'object',
        properties: {
          coming: {
            type: 'object',
            properties: {
              where: {
                type: 'string'
              }
            }
          }
        }
      }
    },
    type: 'object',
    properties: {
      winter: {
        type: 'object',
        properties: {
          is: {
            $ref: '#/definitions/def'
          }
        }
      }
    }
  }

  const object = {
    winter: {
      is: {
        coming: {
          where: 'to town'
        }
      }
    }
  }

  const stringify = build(schema)
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"winter":{"is":{"coming":{"where":"to town"}}}}')
})

test('ref internal - plain name fragment', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with $ref',
    definitions: {
      def: {
        $id: '#uri',
        type: 'object',
        properties: {
          str: {
            type: 'string'
          }
        },
        required: ['str']
      }
    },
    type: 'object',
    properties: {
      obj: {
        $ref: '#uri'
      }
    }
  }

  const object = {
    obj: {
      str: 'test'
    }
  }

  const stringify = build(schema)
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"obj":{"str":"test"}}')
})

test('ref external - plain name fragment', (t) => {
  t.plan(2)

  const externalSchema = {
    first: {
      $id: '#first-schema',
      type: 'object',
      properties: {
        str: {
          type: 'string'
        }
      }
    },
    second: {
      definitions: {
        second: {
          $id: '#second-schema',
          type: 'object',
          properties: {
            int: {
              type: 'integer'
            }
          }
        }
      }
    }
  }

  const schema = {
    title: 'object with $ref to external plain name fragment',
    type: 'object',
    properties: {
      first: {
        $ref: 'first#first-schema'
      },
      second: {
        $ref: 'second#second-schema'
      }
    }
  }

  const object = {
    first: {
      str: 'test'
    },
    second: {
      int: 42
    }
  }

  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"first":{"str":"test"},"second":{"int":42}}')
})

test('external reference to $id', (t) => {
  t.plan(2)

  const externalSchema = {
    first: {
      $id: 'external-reference',
      type: 'object',
      properties: {
        str: {
          type: 'string'
        }
      }
    }
  }

  const schema = {
    type: 'object',
    properties: {
      first: {
        $ref: 'external-reference'
      }
    }
  }

  const object = { first: { str: 'test' } }

  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"first":{"str":"test"}}')
})

test('external reference to key#id', (t) => {
  t.plan(2)

  const externalSchema = {
    first: {
      $id: '#external-reference',
      type: 'object',
      properties: {
        str: {
          type: 'string'
        }
      }
    }
  }

  const schema = {
    type: 'object',
    properties: {
      first: {
        $ref: 'first#external-reference'
      }
    }
  }

  const object = { first: { str: 'test' } }

  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"first":{"str":"test"}}')
})

test('external and inner reference', (t) => {
  t.plan(2)

  const externalSchema = {
    first: {
      $id: 'reference',
      $ref: '#reference',
      definitions: {
        inner: {
          $id: '#reference',
          type: 'object',
          properties: {
            str: {
              type: 'string'
            }
          }
        }
      }
    }
  }

  const schema = {
    type: 'object',
    properties: {
      first: {
        $ref: 'reference'
      }
    }
  }

  const object = { first: { str: 'test' } }

  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"first":{"str":"test"}}')
})

test('external reference to key', (t) => {
  t.plan(2)

  const externalSchema = {
    first: {
      $id: 'external-reference',
      type: 'object',
      properties: {
        str: {
          type: 'string'
        }
      }
    }
  }

  const schema = {
    type: 'object',
    properties: {
      first: {
        $ref: 'external-reference'
      }
    }
  }

  const object = { first: { str: 'test' } }

  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"first":{"str":"test"}}')
})

test('ref external - plain name fragment', (t) => {
  t.plan(2)

  const externalSchema = {
    first: {
      $id: 'first-schema',
      type: 'object',
      properties: {
        str: {
          type: 'string'
        }
      }
    },
    second: {
      definitions: {
        second: {
          $id: 'second-schema',
          type: 'object',
          properties: {
            int: {
              type: 'integer'
            }
          }
        }
      }
    }
  }

  const schema = {
    title: 'object with $ref to external plain name fragment',
    type: 'object',
    properties: {
      first: {
        $ref: 'first-schema'
      },
      second: {
        $ref: 'second-schema'
      }
    }
  }

  const object = {
    first: {
      str: 'test'
    },
    second: {
      int: 42
    }
  }

  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"first":{"str":"test"},"second":{"int":42}}')
})

test('ref external - duplicate plain name fragment', (t) => {
  t.plan(2)

  const externalSchema = {
    external: {
      $id: '#duplicateSchema',
      type: 'object',
      properties: {
        prop: {
          type: 'boolean'
        }
      }
    },
    other: {
      $id: '#otherSchema',
      type: 'object',
      properties: {
        prop: {
          type: 'integer'
        }
      }
    }
  }

  const schema = {
    title: 'object with $ref to plain name fragment',
    type: 'object',
    definitions: {
      duplicate: {
        $id: '#duplicateSchema',
        type: 'object',
        properties: {
          prop: {
            type: 'string'
          }
        }
      }
    },
    properties: {
      local: {
        $ref: '#duplicateSchema'
      },
      external: {
        $ref: 'external#duplicateSchema'
      },
      other: {
        $ref: 'other#otherSchema'
      }
    }
  }

  const object = {
    local: {
      prop: 'test'
    },
    external: {
      prop: true
    },
    other: {
      prop: 42
    }
  }

  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"local":{"prop":"test"},"external":{"prop":true},"other":{"prop":42}}')
})

test('ref external - explicit external plain name fragment must not fallback to other external schemas', (t) => {
  t.plan(1)

  const externalSchema = {
    first: {
      $id: '#target',
      type: 'object',
      properties: {
        prop: {
          type: 'string'
        }
      }
    },
    second: {
      $id: '#wrong',
      type: 'object',
      properties: {
        prop: {
          type: 'integer'
        }
      }
    }
  }

  const schema = {
    title: 'object with $ref to plain name fragment',
    type: 'object',
    definitions: {
      third: {
        $id: '#wrong',
        type: 'object',
        properties: {
          prop: {
            type: 'boolean'
          }
        }
      }
    },
    properties: {
      target: {
        $ref: 'first#wrong'
      }
    }
  }

  const object = {
    target: {
      prop: 'test'
    }
  }

  t.assert.throws(() => {
    const stringify = build(schema, { schema: externalSchema })
    const output = stringify(object)
    JSON.parse(output)
  }, {
    message: 'Cannot find reference "first#wrong"'
  })
})

test('ref internal - multiple $ref format', (t) => {
  t.plan(2)

  const schema = {
    type: 'object',
    definitions: {
      one: {
        type: 'string',
        definitions: {
          two: {
            $id: '#twos',
            type: 'string'
          }
        }
      }
    },
    properties: {
      zero: {
        $id: '#three',
        type: 'string'
      },
      a: { $ref: '#/definitions/one' },
      b: { $ref: '#three' },
      c: { $ref: '#/properties/zero' },
      d: { $ref: '#twos' },
      e: { $ref: '#/definitions/one/definitions/two' }
    }
  }

  const object = {
    zero: 'test',
    a: 'test',
    b: 'test',
    c: 'test',
    d: 'test',
    e: 'test'
  }

  const stringify = build(schema)
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"zero":"test","a":"test","b":"test","c":"test","d":"test","e":"test"}')
})

test('ref external - external schema with internal ref (object property)', (t) => {
  t.plan(2)

  const externalSchema = {
    external: {
      definitions: {
        internal: { type: 'string' },
        def: {
          type: 'object',
          properties: {
            prop: { $ref: '#/definitions/internal' }
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
      prop: 'test'
    }
  }

  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"obj":{"prop":"test"}}')
})

test('ref external - external schema with internal ref (array items)', (t) => {
  t.plan(2)

  const externalSchema = {
    external: {
      definitions: {
        internal: { type: 'string' },
        def: {
          type: 'object',
          properties: {
            prop: { $ref: '#/definitions/internal' }
          }
        }
      }
    }
  }

  const schema = {
    title: 'object with $ref',
    type: 'object',
    properties: {
      arr: {
        type: 'array',
        items: {
          $ref: 'external#/definitions/def'
        }
      }
    }
  }

  const object = {
    arr: [{
      prop: 'test'
    }]
  }

  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"arr":[{"prop":"test"}]}')
})

test('ref external - external schema with internal ref (root)', (t) => {
  t.plan(2)

  const externalSchema = {
    external: {
      definitions: {
        internal: { type: 'string' },
        def: {
          type: 'object',
          properties: {
            prop: { $ref: '#/definitions/internal' }
          }
        }
      }
    }
  }

  const schema = {
    title: 'object with $ref',
    $ref: 'external#/definitions/def'
  }

  const object = {
    prop: 'test'
  }

  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"prop":"test"}')
})

test('ref external - external schema with internal ref (pattern properties)', (t) => {
  t.plan(2)

  const externalSchema = {
    external: {
      definitions: {
        internal: { type: 'string' },
        def: {
          type: 'object',
          patternProperties: {
            '^p': { $ref: '#/definitions/internal' }
          }
        }
      }
    }
  }

  const schema = {
    title: 'object with $ref',
    type: 'object',
    patternProperties: {
      '^o': {
        $ref: 'external#/definitions/def'
      }
    }
  }

  const object = {
    obj: {
      prop: 'test'
    }
  }

  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"obj":{"prop":"test"}}')
})

test('ref in root internal', (t) => {
  t.plan(2)

  const schema = {
    title: 'object with $ref in root schema',
    $ref: '#/definitions/num',
    definitions: {
      num: {
        type: 'object',
        properties: {
          int: {
            $ref: '#/definitions/int'
          }
        }
      },
      int: {
        type: 'integer'
      }
    }
  }

  const object = { int: 42 }
  const stringify = build(schema)
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"int":42}')
})

test('ref in root external', (t) => {
  t.plan(2)

  const externalSchema = {
    numbers: {
      $id: 'numbers',
      definitions: {
        num: {
          type: 'object',
          properties: {
            int: {
              type: 'integer'
            }
          }
        }
      }
    }
  }

  const schema = {
    title: 'object with $ref in root schema',
    type: 'object',
    $ref: 'numbers#/definitions/num'
  }

  const object = { int: 42 }
  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"int":42}')
})

test('ref in root external multiple times', (t) => {
  t.plan(2)

  const externalSchema = {
    numbers: {
      $id: 'numbers',
      $ref: 'subnumbers#/definitions/num'
    },
    subnumbers: {
      $id: 'subnumbers',
      definitions: {
        num: {
          type: 'object',
          properties: {
            int: {
              type: 'integer'
            }
          }
        }
      }
    }
  }

  const schema = {
    title: 'object with $ref in root schema',
    type: 'object',
    $ref: 'numbers'
  }

  const object = { int: 42 }
  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"int":42}')
})

test('ref external to relative definition', (t) => {
  t.plan(2)

  const externalSchema = {
    'relative:to:local': {
      $id: 'relative:to:local',
      type: 'object',
      properties: {
        foo: { $ref: '#/definitions/foo' }
      },
      definitions: {
        foo: { type: 'string' }
      }
    }
  }

  const schema = {
    type: 'object',
    required: ['fooParent'],
    properties: {
      fooParent: { $ref: 'relative:to:local' }
    }
  }

  const object = { fooParent: { foo: 'bar' } }
  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"fooParent":{"foo":"bar"}}')
})

test('ref to nested ref definition', (t) => {
  t.plan(2)

  const externalSchema = {
    'a:b:c1': {
      $id: 'a:b:c1',
      type: 'object',
      definitions: {
        foo: { $ref: 'a:b:c2#/definitions/foo' }
      }
    },
    'a:b:c2': {
      $id: 'a:b:c2',
      type: 'object',
      definitions: {
        foo: { type: 'string' }
      }
    }
  }

  const schema = {
    type: 'object',
    required: ['foo'],
    properties: {
      foo: { $ref: 'a:b:c1#/definitions/foo' }
    }
  }

  const object = { foo: 'foo' }
  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"foo":"foo"}')
})

test('Bad key', async t => {
  await t.test('Find match', t => {
    t.plan(1)
    try {
      build({
        definitions: {
          projectId: {
            type: 'object',
            properties: {
              id: { type: 'integer' }
            }
          }
        },
        type: 'object',
        properties: {
          data: {
            $ref: '#/definitions/porjectId'
          }
        }
      })
      t.fail('Should throw')
    } catch (err) {
      t.assert.equal(err.message, 'Cannot find reference "#/definitions/porjectId"')
    }
  })

  await t.test('No match', t => {
    t.plan(1)

    t.assert.throws(() => {
      build({
        definitions: {
          projectId: {
            type: 'object',
            properties: {
              id: { type: 'integer' }
            }
          }
        },
        type: 'object',
        properties: {
          data: {
            $ref: '#/definitions/foobar'
          }
        }
      })
    }, { message: 'Cannot find reference "#/definitions/foobar"' })
  })

  await t.test('Find match (external schema)', t => {
    t.plan(1)
    t.assert.throws(() => {
      build({
        type: 'object',
        properties: {
          data: {
            $ref: 'external#/definitions/porjectId'
          }
        }
      }, {
        schema: {
          external: {
            definitions: {
              projectId: {
                type: 'object',
                properties: {
                  id: { type: 'integer' }
                }
              }
            }
          }
        }
      })
      t.fail('Should throw')
    }, { message: 'Cannot find reference "external#/definitions/porjectId"' })
  })

  await t.test('No match (external schema)', t => {
    t.plan(1)
    t.assert.throws(() => {
      build({
        type: 'object',
        properties: {
          data: {
            $ref: 'external#/definitions/foobar'
          }
        }
      }, {
        schema: {
          external: {
            definitions: {
              projectId: {
                type: 'object',
                properties: {
                  id: { type: 'integer' }
                }
              }
            }
          }
        }
      })
    }, { message: 'Cannot find reference "external#/definitions/foobar"' })
  })

  await t.test('Find match (external definitions typo)', t => {
    t.plan(1)
    t.assert.throws(() => {
      build({
        type: 'object',
        properties: {
          data: {
            $ref: 'external#/deifnitions/projectId'
          }
        }
      }, {
        schema: {
          external: {
            definitions: {
              projectId: {
                type: 'object',
                properties: {
                  id: { type: 'integer' }
                }
              }
            }
          }
        }
      })
    }, { message: 'Cannot find reference "external#/deifnitions/projectId"' })
  })

  await t.test('Find match (definitions typo)', t => {
    t.plan(1)
    t.assert.throws(() => {
      build({
        definitions: {
          projectId: {
            type: 'object',
            properties: {
              id: { type: 'integer' }
            }
          }
        },
        type: 'object',
        properties: {
          data: {
            $ref: '#/deifnitions/projectId'
          }
        }
      })
    }, { message: 'Cannot find reference "#/deifnitions/projectId"' })
  })

  await t.test('Find match (external schema typo)', t => {
    t.plan(1)
    t.assert.throws(() => {
      build({
        type: 'object',
        properties: {
          data: {
            $ref: 'extrenal#/definitions/projectId'
          }
        }
      }, {
        schema: {
          external: {
            definitions: {
              projectId: {
                type: 'object',
                properties: {
                  id: { type: 'integer' }
                }
              }
            }
          }
        }
      })
    }, { message: 'Cannot resolve ref "extrenal#/definitions/projectId". Schema with id "extrenal" is not found.' })
  })
})

test('Regression 2.5.2', t => {
  t.plan(1)

  const externalSchema = {
    '/models/Bar': {
      $id: '/models/Bar',
      $schema: 'http://json-schema.org/schema#',
      definitions: {
        entity: {
          type: 'object',
          properties: { field: { type: 'string' } }
        }
      }
    },
    '/models/Foo': {
      $id: '/models/Foo',
      $schema: 'http://json-schema.org/schema#',
      definitions: {
        entity: {
          type: 'object',
          properties: {
            field: { type: 'string' },
            sub: {
              oneOf: [
                { $ref: '/models/Bar#/definitions/entity' },
                { type: 'null' }
              ]
            }
          }
        }
      }
    }
  }

  const schema = {
    type: 'array',
    items: {
      $ref: '/models/Foo#/definitions/entity'
    }
  }

  const stringify = build(schema, { schema: externalSchema })
  const output = stringify([{ field: 'parent', sub: { field: 'joined' } }])

  t.assert.equal(output, '[{"field":"parent","sub":{"field":"joined"}}]')
})

test('Reference through multiple definitions', (t) => {
  t.plan(2)

  const schema = {
    $ref: '#/definitions/A',
    definitions: {
      A: {
        type: 'object',
        additionalProperties: false,
        properties: { a: { anyOf: [{ $ref: '#/definitions/B' }] } },
        required: ['a']
      },
      B: {
        type: 'object',
        properties: { b: { anyOf: [{ $ref: '#/definitions/C' }] } },
        required: ['b'],
        additionalProperties: false
      },
      C: {
        type: 'object',
        properties: { c: { type: 'string', const: 'd' } },
        required: ['c'],
        additionalProperties: false
      }
    }
  }

  const object = { a: { b: { c: 'd' } } }

  const stringify = build(schema)
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, JSON.stringify(object))
})

test('issue #350', (t) => {
  t.plan(2)

  const schema = {
    title: 'Example Schema',
    type: 'object',
    properties: {
      firstName: { $ref: '#foo' },
      lastName: { $ref: '#foo' },
      nested: {
        type: 'object',
        properties: {
          firstName: { $ref: '#foo' },
          lastName: { $ref: '#foo' }
        }
      }
    },
    definitions: {
      foo: {
        $id: '#foo',
        type: 'string'
      }
    }
  }

  const object = {
    firstName: 'Matteo',
    lastName: 'Collina',
    nested: {
      firstName: 'Matteo',
      lastName: 'Collina'
    }
  }

  const stringify = build(schema)
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, JSON.stringify(object))
})

test('deep union type', (t) => {
  t.plan(1)

  const stringify = build({
    schema: {
      type: 'array',
      items: {
        oneOf: [
          {
            $ref: 'components#/schemas/IDirectory'
          },
          {
            $ref: 'components#/schemas/IImageFile'
          },
          {
            $ref: 'components#/schemas/ITextFile'
          },
          {
            $ref: 'components#/schemas/IZipFile'
          }
        ]
      },
      nullable: false
    },
    components: {
      schemas: {
        IDirectory: {
          $id: 'IDirectory',
          $recursiveAnchor: true,
          type: 'object',
          properties: {
            children: {
              type: 'array',
              items: {
                oneOf: [
                  {
                    $recursiveRef: '#'
                  },
                  {
                    $ref: 'components#/schemas/IImageFile'
                  },
                  {
                    $ref: 'components#/schemas/ITextFile'
                  },
                  {
                    $ref: 'components#/schemas/IZipFile'
                  }
                ]
              },
              nullable: false
            },
            type: {
              type: 'string',
              nullable: false
            },
            id: {
              type: 'string',
              nullable: false
            },
            name: {
              type: 'string',
              nullable: false
            }
          },
          nullable: false,
          required: [
            'children',
            'type',
            'id',
            'name'
          ]
        },
        IImageFile: {
          $id: 'IImageFile',
          type: 'object',
          properties: {
            width: {
              type: 'number',
              nullable: false
            },
            height: {
              type: 'number',
              nullable: false
            },
            url: {
              type: 'string',
              nullable: false
            },
            extension: {
              type: 'string',
              nullable: false
            },
            size: {
              type: 'number',
              nullable: false
            },
            type: {
              type: 'string',
              nullable: false
            },
            id: {
              type: 'string',
              nullable: false
            },
            name: {
              type: 'string',
              nullable: false
            }
          },
          nullable: false,
          required: [
            'width',
            'height',
            'url',
            'extension',
            'size',
            'type',
            'id',
            'name'
          ]
        },
        ITextFile: {
          $id: 'ITextFile',
          type: 'object',
          properties: {
            content: {
              type: 'string',
              nullable: false
            },
            extension: {
              type: 'string',
              nullable: false
            },
            size: {
              type: 'number',
              nullable: false
            },
            type: {
              type: 'string',
              nullable: false
            },
            id: {
              type: 'string',
              nullable: false
            },
            name: {
              type: 'string',
              nullable: false
            }
          },
          nullable: false,
          required: [
            'content',
            'extension',
            'size',
            'type',
            'id',
            'name'
          ]
        },
        IZipFile: {
          $id: 'IZipFile',
          type: 'object',
          properties: {
            files: {
              type: 'number',
              nullable: false
            },
            extension: {
              type: 'string',
              nullable: false
            },
            size: {
              type: 'number',
              nullable: false
            },
            type: {
              type: 'string',
              nullable: false
            },
            id: {
              type: 'string',
              nullable: false
            },
            name: {
              type: 'string',
              nullable: false
            }
          },
          nullable: false,
          required: [
            'files',
            'extension',
            'size',
            'type',
            'id',
            'name'
          ]
        }
      }
    }
  })

  const obj = [
    {
      type: 'directory',
      id: '7b1068a4-dd6e-474a-8d85-09a2d77639cb',
      name: 'ixcWGOKI',
      children: [
        {
          type: 'directory',
          id: '5883e17c-b207-46d4-ad2d-be72249711ce',
          name: 'vecQwFGS',
          children: []
        },
        {
          type: 'file',
          id: '670b6556-a610-4a48-8a16-9c2da97a0d18',
          name: 'eStFddzX',
          extension: 'jpg',
          size: 7,
          width: 300,
          height: 1200,
          url: 'https://github.com/samchon/typescript-json'
        },
        {
          type: 'file',
          id: '85dc796d-9593-4833-b1a1-addc8ebf74ea',
          name: 'kTdUfwRJ',
          extension: 'ts',
          size: 86,
          content: 'console.log("Hello world");'
        },
        {
          type: 'file',
          id: '8933c86a-7a1e-4d4a-b0a6-17d6896fdf89',
          name: 'NBPkefUG',
          extension: 'zip',
          size: 22,
          files: 20
        }
      ]
    }
  ]
  t.assert.equal(JSON.stringify(obj), stringify(obj))
})

test('ref with same id in properties', async (t) => {
  t.plan(2)

  const externalSchema = {
    ObjectId: {
      $id: 'ObjectId',
      type: 'string'
    },
    File: {
      $id: 'File',
      type: 'object',
      properties: {
        _id: { $ref: 'ObjectId' },
        name: { type: 'string' },
        owner: { $ref: 'ObjectId' }
      }
    }
  }

  await t.test('anyOf', (t) => {
    t.plan(1)

    const schema = {
      $id: 'Article',
      type: 'object',
      properties: {
        _id: { $ref: 'ObjectId' },
        image: {
          anyOf: [
            { $ref: 'File' },
            { type: 'null' }
          ]
        }
      }
    }

    const stringify = build(schema, { schema: externalSchema })
    const output = stringify({ _id: 'foo', image: { _id: 'bar', name: 'hello', owner: 'baz' } })

    t.assert.equal(output, '{"_id":"foo","image":{"_id":"bar","name":"hello","owner":"baz"}}')
  })

  await t.test('oneOf', (t) => {
    t.plan(1)

    const schema = {
      $id: 'Article',
      type: 'object',
      properties: {
        _id: { $ref: 'ObjectId' },
        image: {
          oneOf: [
            { $ref: 'File' },
            { type: 'null' }
          ]
        }
      }
    }

    const stringify = build(schema, { schema: externalSchema })
    const output = stringify({ _id: 'foo', image: { _id: 'bar', name: 'hello', owner: 'baz' } })

    t.assert.equal(output, '{"_id":"foo","image":{"_id":"bar","name":"hello","owner":"baz"}}')
  })
})

test('Should not modify external schemas', (t) => {
  t.plan(2)

  const externalSchema = {
    uuid: {
      format: 'uuid',
      $id: 'UUID',
      type: 'string'
    },
    Entity: {
      $id: 'Entity',
      type: 'object',
      properties: {
        id: { $ref: 'UUID' },
        id2: { $ref: 'UUID' }
      }
    }
  }

  const options = { schema: externalSchema }
  const optionsClone = clone(options)

  const stringify = build({ $ref: 'Entity' }, options)

  const data = { id: 'a4e4c954-9f5f-443a-aa65-74d95732249a' }
  const output = stringify(data)

  t.assert.equal(output, JSON.stringify(data))
  t.assert.deepStrictEqual(options, optionsClone)
})

test('input schema is not mutated', (t) => {
  t.plan(3)

  const schema = {
    title: 'object with $ref',
    type: 'object',
    definitions: {
      def: { type: 'string' }
    },
    properties: {
      obj: {
        $ref: '#/definitions/def'
      }
    }
  }

  const clonedSchema = JSON.parse(JSON.stringify(schema))

  const object = {
    obj: 'test'
  }

  const stringify = build(schema)
  const output = stringify(object)

  t.assert.doesNotThrow(() => JSON.parse(output))
  t.assert.equal(output, '{"obj":"test"}')
  t.assert.deepStrictEqual(schema, clonedSchema)
})

test('anyOf inside allOf', (t) => {
  t.plan(1)

  const schema = {
    anyOf: [
      {
        type: 'object',
        allOf: [
          {
            properties: {
              a: {
                anyOf: [
                  { const: 'A1' },
                  { const: 'A2' }
                ]
              }
            }
          },
          {
            properties: {
              b: { const: 'B' }
            }
          }
        ]
      }
    ]
  }

  const object = { a: 'A1', b: 'B' }
  const stringify = build(schema)
  const output = stringify(object)

  t.assert.equal(output, JSON.stringify(object))
})

test('should resolve absolute $refs', (t) => {
  t.plan(1)

  const externalSchema = {
    FooSchema: {
      $id: 'FooSchema',
      type: 'object',
      properties: {
        type: {
          anyOf: [
            { type: 'string', const: 'bar' },
            { type: 'string', const: 'baz' }
          ]
        }
      }
    }
  }

  const schema = { $ref: 'FooSchema' }

  const object = { type: 'bar' }
  const stringify = build(schema, { schema: externalSchema })
  const output = stringify(object)

  t.assert.equal(output, JSON.stringify(object))
})

test('nested schema should overwrite anchor scope', (t) => {
  t.plan(2)

  const externalSchema = {
    root: {
      $id: 'root',
      definitions: {
        subschema: {
          $id: 'subschema',
          definitions: {
            anchorSchema: {
              $id: '#anchor',
              type: 'string'
            }
          }
        }
      }
    }
  }

  const data = 'test'
  const stringify = build({ $ref: 'subschema#anchor' }, { schema: externalSchema })
  const output = stringify(data)

  t.assert.equal(output, JSON.stringify(data))
  t.assert.throws(() => build({ $ref: 'root#anchor' }, { schema: externalSchema }))
})

test('object property reference with default value', (t) => {
  t.plan(1)

  const schema = {
    definitions: {
      prop: {
        type: 'string',
        default: 'foo'
      }
    },
    type: 'object',
    properties: {
      prop: {
        $ref: '#/definitions/prop'
      }
    }
  }

  const stringify = build(schema)
  const output = stringify({})

  t.assert.equal(output, '{"prop":"foo"}')
})

test('should throw an Error if two non-identical schemas with same id are provided', (t) => {
  t.plan(1)

  const schema = {
    $id: 'schema',
    type: 'object',
    allOf: [
      {
        $id: 'base',
        type: 'object',
        properties: {
          name: {
            type: 'string'
          }
        },
        required: [
          'name'
        ]
      },
      {
        $id: 'inner_schema',
        type: 'object',
        properties: {
          union: {
            $id: '#id',
            anyOf: [
              {

                $id: 'guid',
                type: 'string'
              },
              {

                $id: 'email',
                type: 'string'
              }
            ]
          }
        },
        required: [
          'union'
        ]
      },
      {
        $id: 'inner_schema',
        type: 'object',
        properties: {
          union: {
            $id: '#id',
            anyOf: [
              {

                $id: 'guid',
                type: 'string'
              },
              {

                $id: 'mail',
                type: 'string'
              }
            ]
          }
        },
        required: [
          'union'
        ]
      }
    ]
  }

  try {
    build(schema)
  } catch (err) {
    t.assert.equal(err.message, 'There is already another schema with id "inner_schema".')
  }
})

test('ref internal - throw if schema has definition twice with different shape', (t) => {
  t.plan(1)

  const schema = {
    $id: 'test',
    title: 'object with $ref',
    definitions: {
      def: {
        $id: '#uri',
        type: 'object',
        properties: {
          str: {
            type: 'string'
          }
        },
        required: ['str']
      },
      def2: {
        $id: '#uri',
        type: 'object',
        properties: {
          num: {
            type: 'number'
          }
        },
        required: ['num']
      }
    },
    type: 'object',
    properties: {
      obj: {
        $ref: '#uri'
      }
    }
  }

  try {
    build(schema)
  } catch (err) {
    t.assert.equal(err.message, 'There is already another anchor "#uri" in schema "test".')
  }
})
