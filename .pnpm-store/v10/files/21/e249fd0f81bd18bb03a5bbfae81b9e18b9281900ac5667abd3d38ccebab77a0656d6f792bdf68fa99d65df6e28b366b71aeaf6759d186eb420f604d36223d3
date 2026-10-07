'use strict';
var $ = require('../internals/export');
var copyWithin = require('../internals/array-copy-within');
var addToUnscopables = require('../internals/add-to-unscopables');

// `Array.prototype.copyWithin` method
// https://tc39.es/ecma262/#sec-array.prototype.copywithin
$({ target: 'Array', proto: true }, {
  copyWithin: copyWithin
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('copyWithin');
