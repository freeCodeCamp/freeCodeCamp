'use strict';
// TODO: remove from `core-js@4`
var $ = require('../internals/export');
var $filterReject = require('../internals/array-iteration').filterReject;
var addToUnscopables = require('../internals/add-to-unscopables');

// `Array.prototype.filterOut` method
// https://github.com/tc39/proposal-array-filtering
$({ target: 'Array', proto: true, forced: true }, {
  filterOut: function filterOut(callbackfn /* , thisArg */) {
    return $filterReject(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

addToUnscopables('filterOut');
