'use strict';
var $ = require('../internals/export');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var toIntegerOrInfinity = require('../internals/to-integer-or-infinity');
var toIndexedObject = require('../internals/to-indexed-object');
var createProperty = require('../internals/create-property');

var $Array = Array;
var $RangeError = RangeError;

// Firefox bug
var INCORRECT_EXCEPTION_ON_COERCION_FAIL = (function () {
  try {
    // eslint-disable-next-line es/no-array-prototype-with, no-throw-literal -- needed for testing
    []['with']({ valueOf: function () { throw 4; } }, null);
  } catch (error) {
    return error !== 4;
  }
})();

// `Array.prototype.with` method
// https://tc39.es/ecma262/#sec-array.prototype.with
$({ target: 'Array', proto: true, forced: INCORRECT_EXCEPTION_ON_COERCION_FAIL }, {
  'with': function (index, value) {
    var O = toIndexedObject(this);
    var len = lengthOfArrayLike(O);
    var relativeIndex = toIntegerOrInfinity(index);
    var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
    if (actualIndex >= len || actualIndex < 0) throw new $RangeError('Incorrect index');
    var A = new $Array(len);
    var k = 0;
    for (; k < len; k++) createProperty(A, k, k === actualIndex ? value : O[k]);
    return A;
  }
});
