'use strict';
var $ = require('../internals/export');
var $find = require('../internals/async-iterator-iteration').find;

// `AsyncIterator.prototype.find` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true, forced: true }, {
  find: function find(predicate) {
    return $find(this, predicate);
  }
});
