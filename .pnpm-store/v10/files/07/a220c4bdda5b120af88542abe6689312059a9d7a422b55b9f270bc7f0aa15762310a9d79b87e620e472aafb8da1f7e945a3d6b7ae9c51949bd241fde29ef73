'use strict';
var $ = require('../internals/export');
var $some = require('../internals/async-iterator-iteration').some;

// `AsyncIterator.prototype.some` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true, forced: true }, {
  some: function some(predicate) {
    return $some(this, predicate);
  }
});
