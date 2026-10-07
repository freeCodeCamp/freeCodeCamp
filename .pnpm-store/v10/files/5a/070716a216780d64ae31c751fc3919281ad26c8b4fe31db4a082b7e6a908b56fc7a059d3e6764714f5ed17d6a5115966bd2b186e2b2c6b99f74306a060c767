'use strict';
var bind = require('../internals/function-bind-context');
var uncurryThis = require('../internals/function-uncurry-this');
var toObject = require('../internals/to-object');
var isConstructor = require('../internals/is-constructor');
var getAsyncIterator = require('../internals/get-async-iterator');
var getIterator = require('../internals/get-iterator');
var getIteratorDirect = require('../internals/get-iterator-direct');
var getIteratorMethod = require('../internals/get-iterator-method');
var getMethod = require('../internals/get-method');
var getBuiltIn = require('../internals/get-built-in');
var getBuiltInPrototypeMethod = require('../internals/get-built-in-prototype-method');
var wellKnownSymbol = require('../internals/well-known-symbol');
var AsyncFromSyncIterator = require('../internals/async-from-sync-iterator');
var toArray = require('../internals/async-iterator-iteration').toArray;

var ASYNC_ITERATOR = wellKnownSymbol('asyncIterator');
var arrayIterator = uncurryThis(getBuiltInPrototypeMethod('Array', 'values'));
var arrayIteratorNext = uncurryThis(arrayIterator([]).next);

var safeArrayIterator = function () {
  return new SafeArrayIterator(this);
};

var SafeArrayIterator = function (O) {
  this.iterator = arrayIterator(O);
};

SafeArrayIterator.prototype.next = function () {
  return arrayIteratorNext(this.iterator);
};

// `Array.fromAsync` method implementation
// https://github.com/tc39/proposal-array-from-async
module.exports = function fromAsync(asyncItems /* , mapfn = undefined, thisArg = undefined */) {
  var C = this;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var thisArg = argumentsLength > 2 ? arguments[2] : undefined;
  return new (getBuiltIn('Promise'))(function (resolve) {
    var O = toObject(asyncItems);
    if (mapfn !== undefined) mapfn = bind(mapfn, thisArg);
    var usingAsyncIterator = getMethod(O, ASYNC_ITERATOR);
    var usingSyncIterator = usingAsyncIterator ? undefined : getIteratorMethod(O) || safeArrayIterator;
    var A = isConstructor(C) ? new C() : [];
    var iterator = usingAsyncIterator
      ? getAsyncIterator(O, usingAsyncIterator)
      : new AsyncFromSyncIterator(getIteratorDirect(getIterator(O, usingSyncIterator)));
    resolve(toArray(iterator, mapfn, A));
  });
};
