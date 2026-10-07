'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var toSetLike = require('../internals/to-set-like');
var $union = require('../internals/set-union');

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  union: function union(other) {
    return call($union, this, toSetLike(other));
  }
});
