'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var toSetLike = require('../internals/to-set-like');
var $intersection = require('../internals/set-intersection');

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  intersection: function intersection(other) {
    return call($intersection, this, toSetLike(other));
  }
});
