'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var toSetLike = require('../internals/to-set-like');
var $difference = require('../internals/set-difference');

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
// TODO: Obsolete version, remove from `core-js@4`
$({ target: 'Set', proto: true, real: true, forced: true }, {
  difference: function difference(other) {
    return call($difference, this, toSetLike(other));
  }
});
