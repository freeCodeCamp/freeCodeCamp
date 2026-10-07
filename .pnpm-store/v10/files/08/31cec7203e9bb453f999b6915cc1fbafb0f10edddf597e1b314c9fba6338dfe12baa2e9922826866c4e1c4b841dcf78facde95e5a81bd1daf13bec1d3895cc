'use strict';
var $ = require('../internals/export');
var isDisjointFrom = require('../internals/set-is-disjoint-from');
var setMethodAcceptSetLike = require('../internals/set-method-accept-set-like');

var INCORRECT = !setMethodAcceptSetLike('isDisjointFrom', function (result) {
  return !result;
});

// `Set.prototype.isDisjointFrom` method
// https://tc39.es/ecma262/#sec-set.prototype.isdisjointfrom
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  isDisjointFrom: isDisjointFrom
});
