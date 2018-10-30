var tape = require('tape')
var validator = require('../')
var get = require('jsonpointer').get;

function toPointer( path ) {
  if ( ! ( path && path.length && path.join ) ){
    return '';
  }
  return '/' + path.join('/');
}

function lookup(schema, err){
  return get(schema, toPointer(err.schemaPath));
}

tape('schemaPath', function(t) {
  var schema = {
    type: 'object',
    target: 'top level',
    properties: {
      target: 'inside properties',
      hello: {
        target: 'inside hello',
        type:'string'
      },
      someItems: {
        target: 'in someItems',
        type: 'array',
        items: [
          {
            type: 'string'
          },
          {
            type: 'array'
          },
        ],
        additionalItems: {
          target: 'inside additionalItems',
          type: 'boolean',
        }
      },
      nestedOuter: {
        type: 'object',
        target: 'in nestedOuter',
        properties: {
          nestedInner: {
            type: 'object',
            target: 'in nestedInner',
            properties: {
              deeplyNestedProperty: {
                target: 'in deeplyNestedProperty',
                type: "boolean"
              }
            }
          },
        },
        required: ['nestedInner']
      },
      aggregate: {
        allOf: [
          { pattern: 'z$' },
          { pattern: '^a' },
          { pattern: '-' },
          { pattern: '^...$' }
        ]
      },
      negate: {
        target: "in negate",
        not: {
          type: "boolean"
        }
      },
      selection: {
        target: 'in selection',
        anyOf: [
          { 'pattern': '^[a-z]{3}$' },
          { 'pattern': '^[0-9]$' }
        ],
      },
      exclusiveSelection: {
        target: 'There can be only one',
        oneOf: [
          { pattern: 'a' },
          { pattern: 'e' },
          { pattern: 'i' },
          { pattern: 'o' },
          { pattern: 'u' }
        ]
      }
    },
    patternProperties: {
      ".*String": { type: 'string' },
      '^[01]+$': { type: 'number' }
    },
    additionalProperties: false
  }
  var validate = validator(schema, { verbose: true, greedy: true } );

  function notOkAt(data, path, message) {
    if(validate(data)) {
      return t.fail('should have failed: ' + message)
    }
    t.deepEqual(validate.errors[0].schemaPath, path, message)
  }

  function notOkWithTarget(data, target, message) {
    if(validate(data)) {
      return t.fail('should have failed: ' + message)
    }
    t.deepEqual(lookup(schema, validate.errors[0]).target, target, message)
  }

  // Top level errors
  notOkAt(null, [], 'should target parent of failed type error')
  notOkAt(undefined, [], 'should target parent of failed type error')
  notOkWithTarget({invalidAdditionalProp: '*whistles innocently*'}, 'top level', 'additionalProperties should be associated with containing schema')

  // Errors in properties
  notOkAt({hello: 42}, ['properties', 'hello'], 'should target property with type error')
  notOkAt({someItems: [42]}, ['properties','someItems','0'], 'should target specific someItems rule(0)')
  notOkAt({someItems: ['astring', 42]}, ['properties','someItems','1'], 'should target specific someItems rule(1)')
  notOkAt({someItems: ['astring', 42, 'not a boolean']}, ['properties','someItems', 'additionalItems'], 'should target additionalItems')
  notOkWithTarget({someItems: ['astring', 42, true, false, 42]}, 'inside additionalItems', 'should sitll target additionalProperties after valid additional items')

  notOkWithTarget({nestedOuter: {}}, 'in nestedOuter', 'should target container of missing required property')
  notOkWithTarget({nestedOuter: {nestedInner: 'not an object'}}, 'in nestedInner', 'should target property with type error (inner)')
  notOkWithTarget({nestedOuter: {nestedInner: {deeplyNestedProperty: 'not a boolean'}}}, 'in deeplyNestedProperty', 'should target property with type error (deep)')

  notOkAt({aggregate: 'a-a'}, ['properties', 'aggregate', 'allOf', 0], 'should target specific rule in allOf (0)')
  notOkAt({aggregate: 'z-z'}, ['properties', 'aggregate', 'allOf', 1], 'should target specific rule in allOf (1)')
  notOkAt({aggregate: 'a:z'}, ['properties', 'aggregate', 'allOf', 2], 'should target specific rule in allOf (2)')
  notOkAt({aggregate: 'a--z'}, ['properties', 'aggregate', 'allOf', 3], 'should target specific rule in allOf (3)')

  notOkAt({'notAString': 42}, ['patternProperties', '.*String'], 'should target the specific pattern in patternProperties (wildcards)')
  notOkAt({
    'I am a String': 'I really am',
    '001100111011000111100': "Don't stand around jabbering when you're in mortal danger"
  }, ['patternProperties', '^[01]+$'], 'should target the specific pattern in patternProperties ("binary" keys)')

  notOkWithTarget({negate: false}, 'in negate', 'should target container of not')

  notOkWithTarget(({selection: 'grit'}), 'in selection', 'should target container for anyOf (no matches)');
  notOkWithTarget(({exclusiveSelection: 'fly'}), 'There can be only one', 'should target container for oneOf (no match)');
  notOkWithTarget(({exclusiveSelection: 'ice'}), 'There can be only one', 'should target container for oneOf (multiple matches)');

  t.end()
})

tape('schemaPath - nested selectors', function(t) {
  var schema = {
    anyOf: [
      { oneOf:[
        { allOf: [
          {
            properties: {
              nestedSelectors: {type: "integer"}
            }
          }
        ]}
      ]}
    ]
  }
  var validate = validator(schema, { verbose: true, greedy: true } );
  t.notOk(validate({nestedSelectors: "nope"}), 'should not crash on visit inside *Of');

  t.end()
})
