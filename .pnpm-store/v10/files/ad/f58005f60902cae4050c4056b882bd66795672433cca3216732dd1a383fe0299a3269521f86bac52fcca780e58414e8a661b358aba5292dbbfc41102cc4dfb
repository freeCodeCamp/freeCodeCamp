'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var anObject = require('../internals/an-object');
var getIteratorDirect = require('../internals/get-iterator-direct');
var getIteratorFlattenable = require('../internals/get-iterator-flattenable');
var createIteratorProxy = require('../internals/iterator-create-proxy');
var iteratorClose = require('../internals/iterator-close');
var IS_PURE = require('../internals/is-pure');
var iteratorHelperThrowsOnInvalidIterator = require('../internals/iterator-helper-throws-on-invalid-iterator');
var iteratorHelperWithoutClosingOnEarlyError = require('../internals/iterator-helper-without-closing-on-early-error');

// Should not throw an error for an iterator without `return` method. Fixed in Safari 26.2
// https://bugs.webkit.org/show_bug.cgi?id=297532
function throwsOnIteratorWithoutReturn() {
  try {
    // eslint-disable-next-line es/no-map, es/no-iterator, es/no-iterator-prototype-flatmap -- required for testing
    var it = Iterator.prototype.flatMap.call(new Map([[4, 5]]).entries(), function (v) { return v; });
    it.next();
    it['return']();
  } catch (error) {
    return true;
  }
}

var FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE
  && !iteratorHelperThrowsOnInvalidIterator('flatMap', function () { /* empty */ });
var flatMapWithoutClosingOnEarlyError = !IS_PURE && !FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError('flatMap', TypeError);

var FORCED = IS_PURE || FLAT_MAP_WITHOUT_THROWING_ON_INVALID_ITERATOR || flatMapWithoutClosingOnEarlyError
  || throwsOnIteratorWithoutReturn();

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var mapper = this.mapper;
  var result, inner;

  while (true) {
    if (inner = this.inner) try {
      result = anObject(call(inner.next, inner.iterator));
      if (!result.done) return result.value;
      this.inner = null;
    } catch (error) { iteratorClose(iterator, 'throw', error); }

    result = anObject(call(this.next, iterator));

    if (this.done = !!result.done) return;

    try {
      this.inner = getIteratorFlattenable(mapper(result.value, this.counter++), false);
    } catch (error) { iteratorClose(iterator, 'throw', error); }
  }
});

// `Iterator.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-iterator.prototype.flatmap
$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  flatMap: function flatMap(mapper) {
    anObject(this);
    try {
      aCallable(mapper);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (flatMapWithoutClosingOnEarlyError) return call(flatMapWithoutClosingOnEarlyError, this, mapper);

    return new IteratorProxy(getIteratorDirect(this), {
      mapper: mapper,
      inner: null
    });
  }
});
