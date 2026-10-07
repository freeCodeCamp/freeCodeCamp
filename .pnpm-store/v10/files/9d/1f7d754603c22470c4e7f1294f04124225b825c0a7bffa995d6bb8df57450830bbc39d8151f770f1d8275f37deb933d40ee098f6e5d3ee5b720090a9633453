'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var toSetLike = require('../internals/to-set-like');
var $isSupersetOf = require('../internals/set-is-superset-of');

// `Set.prototype.isSupersetOf` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  isSupersetOf: function isSupersetOf(other) {
    return call($isSupersetOf, this, toSetLike(other));
  }
});
