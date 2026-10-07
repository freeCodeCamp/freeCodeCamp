'use strict';
var $ = require('../internals/export');
var addToUnscopables = require('../internals/add-to-unscopables');
var $groupToMap = require('../internals/array-group-to-map');
var IS_PURE = require('../internals/is-pure');

// `Array.prototype.groupToMap` method
// https://github.com/tc39/proposal-array-grouping
$({ target: 'Array', proto: true, forced: IS_PURE }, {
  groupToMap: $groupToMap
});

addToUnscopables('groupToMap');
