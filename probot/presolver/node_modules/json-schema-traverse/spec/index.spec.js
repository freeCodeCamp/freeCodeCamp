'use strict';

var traverse = require('../index');
var assert = require('assert');

describe('json-schema-traverse', function() {
  var calls;

  beforeEach(function() {
    calls = [];
  });

  it('should traverse all keywords containing schemas recursively', function() {
    var schema = require('./fixtures/schema').schema;
    var expectedCalls = require('./fixtures/schema').expectedCalls;

    traverse(schema, callback);
    assert.deepStrictEqual(calls, expectedCalls);
  });


  describe('allKeys option', function() {
    var schema = {
      someObject: {
        minimum: 1,
        maximum: 2
      }
    };

    it('should traverse objects with allKeys: true option', function() {
      // schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex
      var expectedCalls = [
        [schema, '', schema, undefined, undefined, undefined, undefined],
        [schema.someObject, '/someObject', schema, '', 'someObject', schema, undefined]
      ];

      traverse(schema, {allKeys: true}, callback);
      assert.deepStrictEqual(calls, expectedCalls);
    });


    it('should NOT traverse objects with allKeys: false option', function() {
      // schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex
      var expectedCalls = [
        [schema, '', schema, undefined, undefined, undefined, undefined]
      ];

      traverse(schema, {allKeys: false}, callback);
      assert.deepStrictEqual(calls, expectedCalls);
    });


    it('should NOT traverse objects without allKeys option', function() {
      // schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex
      var expectedCalls = [
        [schema, '', schema, undefined, undefined, undefined, undefined]
      ];

      traverse(schema, callback);
      assert.deepStrictEqual(calls, expectedCalls);
    });


    it('should NOT travers objects in standard keywords which value is not a schema', function() {
      var schema2 = {
        const: {foo: 'bar'},
        enum: ['a', 'b'],
        required: ['foo'],
        another: {

        },
        patternProperties: {}, // will not traverse - no properties
        dependencies: true, // will not traverse - invalid
        properties: {
          smaller: {
            type: 'number'
          },
          larger: {
            type: 'number',
            minimum: {$data: '1/smaller'}
          }
        }
      };

      // schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex
      var expectedCalls = [
        [schema2, '', schema2, undefined, undefined, undefined, undefined],
        [schema2.another, '/another', schema2, '', 'another', schema2, undefined],
        [schema2.properties.smaller, '/properties/smaller', schema2, '', 'properties', schema2, 'smaller'],
        [schema2.properties.larger, '/properties/larger', schema2, '', 'properties', schema2, 'larger'],
      ];

      traverse(schema2, {allKeys: true}, callback);
      assert.deepStrictEqual(calls, expectedCalls);
    });
  });


  function callback() {
    calls.push(Array.prototype.slice.call(arguments));
  }
});
