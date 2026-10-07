'use strict';
var $ = require('../internals/export');
var $findLast = require('../internals/array-iteration-from-last').findLast;
var addToUnscopables = require('../internals/add-to-unscopables');

// `Array.prototype.findLast` method
// https://tc39.es/ecma262/#sec-array.prototype.findlast
$({ target: 'Array', proto: true }, {
  findLast: function findLast(callbackfn /* , that = undefined */) {
    return $findLast(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

addToUnscopables('findLast');
