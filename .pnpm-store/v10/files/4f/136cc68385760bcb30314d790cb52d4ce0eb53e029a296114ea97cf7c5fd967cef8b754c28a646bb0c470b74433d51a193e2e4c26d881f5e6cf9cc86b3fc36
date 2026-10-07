'use strict';
var $ = require('../internals/export');
var addToUnscopables = require('../internals/add-to-unscopables');
var uniqueBy = require('../internals/array-unique-by');

// `Array.prototype.uniqueBy` method
// https://github.com/tc39/proposal-array-unique
$({ target: 'Array', proto: true, forced: true }, {
  uniqueBy: uniqueBy
});

addToUnscopables('uniqueBy');
