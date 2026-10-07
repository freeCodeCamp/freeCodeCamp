'use strict';
var call = require('../internals/function-call');
var AsyncFromSyncIterator = require('../internals/async-from-sync-iterator');
var anObject = require('../internals/an-object');
var getIterator = require('../internals/get-iterator');
var getIteratorDirect = require('../internals/get-iterator-direct');
var getMethod = require('../internals/get-method');
var wellKnownSymbol = require('../internals/well-known-symbol');

var ASYNC_ITERATOR = wellKnownSymbol('asyncIterator');

module.exports = function (it, usingIterator) {
  var method = arguments.length < 2 ? getMethod(it, ASYNC_ITERATOR) : usingIterator;
  return method ? anObject(call(method, it)) : new AsyncFromSyncIterator(getIteratorDirect(getIterator(it)));
};
