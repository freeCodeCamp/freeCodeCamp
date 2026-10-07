'use strict';
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var AsyncFromSyncIterator = require('../internals/async-from-sync-iterator');
var WrapAsyncIterator = require('../internals/async-iterator-wrap');
var getIteratorDirect = require('../internals/get-iterator-direct');

// `Iterator.prototype.toAsync` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'Iterator', proto: true, real: true, forced: true }, {
  toAsync: function toAsync() {
    return new WrapAsyncIterator(getIteratorDirect(new AsyncFromSyncIterator(getIteratorDirect(anObject(this)))));
  }
});
