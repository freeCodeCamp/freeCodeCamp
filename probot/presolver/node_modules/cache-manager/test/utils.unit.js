
var utils = require('../lib/utils');
var assert = require('assert');

var isObject = utils.isObject;

describe('utils', function() {
    describe('isObject()', function() {
        it('should return "true" when value passed is an object', function() {
            var result1 = isObject({});
            assert.ok(result1);
        });

        it('should return "false" when value passed is not an object', function() {
            var result1 = isObject('string');
            var result2 = isObject(123);
            var result3 = isObject([]);
            var result4 = isObject(function() {});
            assert.ok(!result1);
            assert.ok(!result2);
            assert.ok(!result3);
            assert.ok(!result4);
        });
    });
});