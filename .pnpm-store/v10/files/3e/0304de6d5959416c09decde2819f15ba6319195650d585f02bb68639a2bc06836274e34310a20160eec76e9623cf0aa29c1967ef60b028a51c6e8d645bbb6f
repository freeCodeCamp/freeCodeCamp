'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var getIteratorDirect = require('../internals/get-iterator-direct');
var notANaN = require('../internals/not-a-nan');
var toPositiveInteger = require('../internals/to-positive-integer');
var createIteratorProxy = require('../internals/iterator-create-proxy');
var iteratorClose = require('../internals/iterator-close');
var iteratorHelperWithoutClosingOnEarlyError = require('../internals/iterator-helper-without-closing-on-early-error');
var IS_PURE = require('../internals/is-pure');

var takeWithoutClosingOnEarlyError = !IS_PURE && iteratorHelperWithoutClosingOnEarlyError('take', RangeError);

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  if (!this.remaining--) {
    this.done = true;
    return iteratorClose(iterator, 'normal', undefined);
  }
  var result = anObject(call(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return result.value;
});

// `Iterator.prototype.take` method
// https://tc39.es/ecma262/#sec-iterator.prototype.take
$({ target: 'Iterator', proto: true, real: true, forced: IS_PURE || takeWithoutClosingOnEarlyError }, {
  take: function take(limit) {
    anObject(this);
    var remaining;
    try {
      remaining = toPositiveInteger(notANaN(+limit));
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (takeWithoutClosingOnEarlyError) return call(takeWithoutClosingOnEarlyError, this, remaining);

    return new IteratorProxy(getIteratorDirect(this), {
      remaining: remaining
    });
  }
});
