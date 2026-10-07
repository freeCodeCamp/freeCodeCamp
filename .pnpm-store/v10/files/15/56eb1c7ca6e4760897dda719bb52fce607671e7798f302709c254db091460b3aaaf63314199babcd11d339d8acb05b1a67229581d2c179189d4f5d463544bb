'use strict';
var $ = require('../internals/export');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var toIndexedObject = require('../internals/to-indexed-object');
var createProperty = require('../internals/create-property');
var addToUnscopables = require('../internals/add-to-unscopables');

var $Array = Array;

// `Array.prototype.toReversed` method
// https://tc39.es/ecma262/#sec-array.prototype.toreversed
$({ target: 'Array', proto: true }, {
  toReversed: function toReversed() {
    var O = toIndexedObject(this);
    var len = lengthOfArrayLike(O);
    var A = new $Array(len);
    var k = 0;
    for (; k < len; k++) createProperty(A, k, O[len - k - 1]);
    return A;
  }
});

addToUnscopables('toReversed');
