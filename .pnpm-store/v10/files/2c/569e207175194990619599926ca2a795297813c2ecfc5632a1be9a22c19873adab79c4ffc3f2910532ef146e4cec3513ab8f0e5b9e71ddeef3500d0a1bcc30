'use strict';
// TODO: Remove from `core-js@4`
var DESCRIPTORS = require('../internals/descriptors');
var addToUnscopables = require('../internals/add-to-unscopables');
var toObject = require('../internals/to-object');
var lengthOfArrayLike = require('../internals/length-of-array-like');
var defineBuiltInAccessor = require('../internals/define-built-in-accessor');

// `Array.prototype.lastIndex` accessor
// https://github.com/tc39/proposal-array-last
if (DESCRIPTORS) {
  defineBuiltInAccessor(Array.prototype, 'lastItem', {
    configurable: true,
    get: function lastItem() {
      var O = toObject(this);
      var len = lengthOfArrayLike(O);
      return len === 0 ? undefined : O[len - 1];
    },
    set: function lastItem(value) {
      var O = toObject(this);
      var len = lengthOfArrayLike(O);
      return O[len === 0 ? 0 : len - 1] = value;
    }
  });

  addToUnscopables('lastItem');
}
