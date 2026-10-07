'use strict';
var $ = require('../internals/export');
var $forEach = require('../internals/async-iterator-iteration').forEach;

// `AsyncIterator.prototype.forEach` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true, forced: true }, {
  forEach: function forEach(fn) {
    return $forEach(this, fn);
  }
});
