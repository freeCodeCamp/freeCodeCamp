'use strict';
var $ = require('../internals/export');
var $every = require('../internals/async-iterator-iteration').every;

// `AsyncIterator.prototype.every` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true, forced: true }, {
  every: function every(predicate) {
    return $every(this, predicate);
  }
});
