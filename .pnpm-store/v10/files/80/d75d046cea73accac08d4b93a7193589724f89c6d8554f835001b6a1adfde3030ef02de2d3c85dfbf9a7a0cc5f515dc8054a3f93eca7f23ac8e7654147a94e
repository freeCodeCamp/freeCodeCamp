'use strict';
var $ = require('../internals/export');
var anInstance = require('../internals/an-instance');
var getPrototypeOf = require('../internals/object-get-prototype-of');
var createNonEnumerableProperty = require('../internals/create-non-enumerable-property');
var hasOwn = require('../internals/has-own-property');
var wellKnownSymbol = require('../internals/well-known-symbol');
var AsyncIteratorPrototype = require('../internals/async-iterator-prototype');
var IS_PURE = require('../internals/is-pure');

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var $TypeError = TypeError;

var AsyncIteratorConstructor = function AsyncIterator() {
  anInstance(this, AsyncIteratorPrototype);
  if (getPrototypeOf(this) === AsyncIteratorPrototype) throw new $TypeError('Abstract class AsyncIterator not directly constructable');
};

AsyncIteratorConstructor.prototype = AsyncIteratorPrototype;

if (!hasOwn(AsyncIteratorPrototype, TO_STRING_TAG)) {
  createNonEnumerableProperty(AsyncIteratorPrototype, TO_STRING_TAG, 'AsyncIterator');
}

if (IS_PURE || !hasOwn(AsyncIteratorPrototype, 'constructor') || AsyncIteratorPrototype.constructor === Object) {
  createNonEnumerableProperty(AsyncIteratorPrototype, 'constructor', AsyncIteratorConstructor);
}

// `AsyncIterator` constructor
// https://github.com/tc39/proposal-async-iterator-helpers
$({ global: true, constructor: true, forced: IS_PURE }, {
  AsyncIterator: AsyncIteratorConstructor
});
