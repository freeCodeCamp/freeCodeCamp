'use strict';
var $ = require('../internals/export');
var $toArray = require('../internals/async-iterator-iteration').toArray;

// `AsyncIterator.prototype.toArray` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true, forced: true }, {
  toArray: function toArray() {
    return $toArray(this, undefined, []);
  }
});
