'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var getIteratorDirect = require('../internals/get-iterator-direct');
var notANaN = require('../internals/not-a-nan');
var toPositiveInteger = require('../internals/to-positive-integer');
var iteratorClose = require('../internals/iterator-close');
var createIteratorProxy = require('../internals/iterator-create-proxy');
var iteratorHelperThrowsOnInvalidIterator = require('../internals/iterator-helper-throws-on-invalid-iterator');
var iteratorHelperWithoutClosingOnEarlyError = require('../internals/iterator-helper-without-closing-on-early-error');
var IS_PURE = require('../internals/is-pure');

var DROP_WITHOUT_THROWING_ON_INVALID_ITERATOR = !IS_PURE && !iteratorHelperThrowsOnInvalidIterator('drop', 0);
var dropWithoutClosingOnEarlyError = !IS_PURE && !DROP_WITHOUT_THROWING_ON_INVALID_ITERATOR
  && iteratorHelperWithoutClosingOnEarlyError('drop', RangeError);

var FORCED = IS_PURE || DROP_WITHOUT_THROWING_ON_INVALID_ITERATOR || dropWithoutClosingOnEarlyError;

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var next = this.next;
  var result, done;
  while (this.remaining) {
    this.remaining--;
    result = anObject(call(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
  }
  result = anObject(call(next, iterator));
  done = this.done = !!result.done;
  if (!done) return result.value;
});

// `Iterator.prototype.drop` method
// https://tc39.es/ecma262/#sec-iterator.prototype.drop
$({ target: 'Iterator', proto: true, real: true, forced: FORCED }, {
  drop: function drop(limit) {
    anObject(this);
    var remaining;
    try {
      remaining = toPositiveInteger(notANaN(+limit));
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    if (dropWithoutClosingOnEarlyError) return call(dropWithoutClosingOnEarlyError, this, remaining);

    return new IteratorProxy(getIteratorDirect(this), {
      remaining: remaining
    });
  }
});
