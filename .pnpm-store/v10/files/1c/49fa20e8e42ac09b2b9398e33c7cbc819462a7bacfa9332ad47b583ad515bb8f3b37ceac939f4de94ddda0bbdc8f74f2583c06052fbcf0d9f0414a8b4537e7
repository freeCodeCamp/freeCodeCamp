'use strict';
var $ = require('../internals/export');
var isSubsetOf = require('../internals/set-is-subset-of');
var setMethodAcceptSetLike = require('../internals/set-method-accept-set-like');

var INCORRECT = !setMethodAcceptSetLike('isSubsetOf', function (result) {
  return result;
});

// `Set.prototype.isSubsetOf` method
// https://tc39.es/ecma262/#sec-set.prototype.issubsetof
$({ target: 'Set', proto: true, real: true, forced: INCORRECT }, {
  isSubsetOf: isSubsetOf
});
