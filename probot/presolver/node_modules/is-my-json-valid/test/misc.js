var tape = require('tape')
var cosmic = require('./fixtures/cosmic')
var validator = require('../')
var validatorRequire = require('../require')

tape('simple', function(t) {
  var schema = {
    required: true,
    type: 'object',
    properties: {
      hello: {type:'string', required:true}
    }
  }

  var validate = validator(schema)

  t.ok(validate({hello: 'world'}), 'should be valid')
  t.notOk(validate(), 'should be invalid')
  t.notOk(validate({}), 'should be invalid')
  t.end()
})

tape('data is undefined', function (t) {
  var validate = validator({type: 'string'})

  t.notOk(validate(null))
  t.notOk(validate(undefined))
  t.end()
})

tape('advanced', function(t) {
  var validate = validator(cosmic.schema)

  t.ok(validate(cosmic.valid), 'should be valid')
  t.notOk(validate(cosmic.invalid), 'should be invalid')
  t.end()
})

tape('greedy/false', function(t) {
  var validate = validator({
    type: 'object',
    properties: {
      x: {
        type: 'number'
      }
    },
    required: ['x', 'y']
  });
  t.notOk(validate({}), 'should be invalid')
  t.strictEqual(validate.errors.length, 2);
  t.strictEqual(validate.errors[0].field, 'data.x')
  t.strictEqual(validate.errors[0].message, 'is required')
  t.strictEqual(validate.errors[1].field, 'data.y')
  t.strictEqual(validate.errors[1].message, 'is required')
  t.notOk(validate({x: 'string'}), 'should be invalid')
  t.strictEqual(validate.errors.length, 1);
  t.strictEqual(validate.errors[0].field, 'data.y')
  t.strictEqual(validate.errors[0].message, 'is required')
  t.notOk(validate({x: 'string', y: 'value'}), 'should be invalid')
  t.strictEqual(validate.errors.length, 1);
  t.strictEqual(validate.errors[0].field, 'data.x')
  t.strictEqual(validate.errors[0].message, 'is the wrong type')
  t.end();
});

tape('greedy/true', function(t) {
  var validate = validator({
    type: 'object',
    properties: {
      x: {
        type: 'number'
      }
    },
    required: ['x', 'y']
  }, {
    greedy: true
  });
  t.notOk(validate({}), 'should be invalid')
  t.strictEqual(validate.errors.length, 2);
  t.strictEqual(validate.errors[0].field, 'data.x')
  t.strictEqual(validate.errors[0].message, 'is required')
  t.strictEqual(validate.errors[1].field, 'data.y')
  t.strictEqual(validate.errors[1].message, 'is required')
  t.notOk(validate({x: 'string'}), 'should be invalid')
  t.strictEqual(validate.errors.length, 2);
  t.strictEqual(validate.errors[0].field, 'data.y')
  t.strictEqual(validate.errors[0].message, 'is required')
  t.strictEqual(validate.errors[1].field, 'data.x')
  t.strictEqual(validate.errors[1].message, 'is the wrong type')
  t.notOk(validate({x: 'string', y: 'value'}), 'should be invalid')
  t.strictEqual(validate.errors.length, 1);
  t.strictEqual(validate.errors[0].field, 'data.x')
  t.strictEqual(validate.errors[0].message, 'is the wrong type')
  t.ok(validate({x: 1, y: 'value'}), 'should be invalid')
  t.end();
});

tape('additional props', function(t) {
  var validate = validator({
    type: 'object',
    additionalProperties: false
  }, {
    verbose: true
  })

  t.ok(validate({}))
  t.notOk(validate({foo:'bar'}))
  t.ok(validate.errors[0].value === 'data.foo', 'should output the property not allowed in verbose mode')
  t.strictEqual(validate.errors[0].type, 'object', 'error object should contain the type')
  t.end()
})

tape('array', function(t) {
  var validate = validator({
    type: 'array',
    required: true,
    items: {
      type: 'string'
    }
  })

  t.notOk(validate({}), 'wrong type')
  t.notOk(validate(), 'is required')
  t.ok(validate(['test']))
  t.end()
})

tape('nested array', function(t) {
  var validate = validator({
    type: 'object',
    properties: {
      list: {
        type: 'array',
        required: true,
        items: {
          type: 'string'
        }
      }
    }
  })

  t.notOk(validate({}), 'is required')
  t.ok(validate({list:['test']}))
  t.notOk(validate({list:[1]}))
  t.end()
})

tape('enum', function(t) {
  var validate = validator({
    type: 'object',
    properties: {
      foo: {
        type: 'number',
        required: true,
        enum: [42]
      }
    }
  })

  t.notOk(validate({}), 'is required')
  t.ok(validate({foo:42}))
  t.notOk(validate({foo:43}))
  t.end()
})

tape('minimum/maximum', function(t) {
  var validate = validator({
    type: 'object',
    properties: {
      foo: {
        type: 'number',
        minimum: 0,
        maximum: 0
      }
    }
  })

  t.notOk(validate({foo:-42}))
  t.ok(validate({foo:0}))
  t.notOk(validate({foo:42}))
  t.end()
})

tape('exclusiveMinimum/exclusiveMaximum', function(t) {
  var validate = validator({
    type: 'object',
    properties: {
      foo: {
        type: 'number',
        minimum: 10,
        maximum: 20,
        exclusiveMinimum: true,
        exclusiveMaximum: true
      }
    }
  })

  t.notOk(validate({foo:10}))
  t.ok(validate({foo:11}))
  t.notOk(validate({foo:20}))
  t.ok(validate({foo:19}))
  t.end()
})

tape('minimum/maximum number type', function(t) {
  var validate = validator({
    type: ['integer', 'null'],
    minimum: 1,
    maximum: 100
  })

  t.notOk(validate(-1))
  t.notOk(validate(0))
  t.ok(validate(null))
  t.ok(validate(1))
  t.ok(validate(100))
  t.notOk(validate(101))
  t.end()
})

tape('custom format', function(t) {
  var validate = validator({
    type: 'object',
    properties: {
      foo: {
        type: 'string',
        format: 'as'
      }
    }
  }, {formats: {as:/^a+$/}})

  t.notOk(validate({foo:''}), 'not as')
  t.notOk(validate({foo:'b'}), 'not as')
  t.notOk(validate({foo:'aaab'}), 'not as')
  t.ok(validate({foo:'a'}), 'as')
  t.ok(validate({foo:'aaaaaa'}), 'as')
  t.end()
})

tape('custom format function', function(t) {
  var validate = validator({
    type: 'object',
    properties: {
      foo: {
        type: 'string',
        format: 'as'
      }
    }
  }, {formats: {as:function(s) { return /^a+$/.test(s) } }})

  t.notOk(validate({foo:''}), 'not as')
  t.notOk(validate({foo:'b'}), 'not as')
  t.notOk(validate({foo:'aaab'}), 'not as')
  t.ok(validate({foo:'a'}), 'as')
  t.ok(validate({foo:'aaaaaa'}), 'as')
  t.end()
})

tape('do not mutate schema', function(t) {
  var sch = {
    items: [
      {}
    ],
    additionalItems: {
      type: 'integer'
    }
  }

  var copy = JSON.parse(JSON.stringify(sch))

  validator(sch)

  t.same(sch, copy, 'did not mutate')
  t.end()
})

tape('#toJSON()', function(t) {
  var schema = {
    required: true,
    type: 'object',
    properties: {
      hello: {type:'string', required:true}
    }
  }

  var validate = validator(schema)

  t.deepEqual(validate.toJSON(), schema, 'should return original schema')
  t.end()
})

tape('external schemas', function(t) {
  var ext = {type: 'string'}
  var schema = {
    required: true,
    $ref: '#ext'
  }

  var validate = validator(schema, {schemas: {ext:ext}})

  t.ok(validate('hello string'), 'is a string')
  t.notOk(validate(42), 'not a string')
  t.end()
})

tape('external schema URIs', function(t) {
  var ext = {type: 'string'}
  var schema = {
    required: true,
    $ref: 'http://example.com/schemas/schemaURIs'
  }

  var opts = {schemas:{}};
  opts.schemas['http://example.com/schemas/schemaURIs'] = ext;
  var validate = validator(schema, opts)

  t.ok(validate('hello string'), 'is a string')
  t.notOk(validate(42), 'not a string')
  t.end()
})

tape('top-level external schema', function(t) {
  var defs = {
    "string": {
      type: "string"
    },
    "sex": {
      type: "string",
      enum: ["male", "female", "other"]
    }
  }
  var schema = {
    type: "object",
    properties: {
      "name": { $ref: "definitions.json#/string" },
      "sex": { $ref: "definitions.json#/sex" }
    },
    required: ["name", "sex"]
  }

  var validate = validator(schema, {
    schemas: {
      "definitions.json": defs
    }
  })
  t.ok(validate({name:"alice", sex:"female"}), 'is an object')
  t.notOk(validate({name:"alice", sex: "bob"}), 'recognizes external schema')
  t.notOk(validate({name:2, sex: "female"}), 'recognizes external schema')
  t.end()
})

tape('nested required array decl', function(t) {
  var schema = {
    properties: {
      x: {
        type: 'object',
        properties: {
          y: {
            type: 'object',
            properties: {
              z: {
                type: 'string'
              }
            },
            required: ['z']
          }
        }
      }
    },
    required: ['x']
  }

  var validate = validator(schema)

  t.ok(validate({x: {}}), 'should be valid')
  t.notOk(validate({}), 'should not be valid')
  t.strictEqual(validate.errors[0].field, 'data.x', 'should output the missing field')
  t.end()
})

tape('verbose mode', function(t) {
  var schema = {
    required: true,
    type: 'object',
    properties: {
      hello: {
        required: true,
        type: 'string'
      }
    }
  };

  var validate = validator(schema, {verbose: true})

  t.ok(validate({hello: 'string'}), 'should be valid')
  t.notOk(validate({hello: 100}), 'should not be valid')
  t.strictEqual(validate.errors[0].value, 100, 'error object should contain the invalid value')
  t.strictEqual(validate.errors[0].type, 'string', 'error object should contain the type')
  t.end()
})

tape('additional props in verbose mode', function(t) {
  var schema = {
    type: 'object',
    required: true,
    additionalProperties: false,
    properties: {
      foo: {
        type: 'string'
      },
      'hello world': {
        type: 'object',
        required: true,
        additionalProperties: false,
        properties: {
          foo: {
            type: 'string'
          }
        }
      }
    }
  };

  var validate = validator(schema, {verbose: true})

  validate({'hello world': {bar: 'string'}});

  t.strictEqual(validate.errors[0].value, 'data["hello world"].bar', 'should output the path to the additional prop in the error')
  t.end()
})

tape('Date.now() is an integer', function(t) {
  var schema = {type: 'integer'}
  var validate = validator(schema)

  t.ok(validate(Date.now()), 'is integer')
  t.end()
})

tape('field shows item index in arrays', function(t) {
  var schema = {
    type: 'array',
    items: {
      type: 'array',
      items: {
        properties: {
          foo: {
            type: 'string',
            required: true
          }
        }
      }
    }
  }

  var validate = validator(schema)

  validate([
    [
      { foo: 'test' },
      { foo: 'test' }
    ],
    [
      { foo: 'test' },
      { baz: 'test' }
    ]
  ])

  t.strictEqual(validate.errors[0].field, 'data.1.1.foo', 'should output the field with specific index of failing item in the error')
  t.end()
})
