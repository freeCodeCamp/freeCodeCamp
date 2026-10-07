'use strict';
var $ = require('../internals/export');
var iterate = require('../internals/iterate');
var aCallable = require('../internals/a-callable');
var anObject = require('../internals/an-object');
var getIteratorDirect = require('../internals/get-iterator-direct');
var iteratorClose = require('../internals/iterator-close');
var iteratorHelperWithoutClosingOnEarlyError = require('../internals/iterator-helper-without-closing-on-early-error');
var apply = require('../internals/function-apply');
var fails = require('../internals/fails');

var $TypeError = TypeError;

// https://bugs.webkit.org/show_bug.cgi?id=291651
var FAILS_ON_INITIAL_UNDEFINED = fails(function () {
  // eslint-disable-next-line es/no-iterator-prototype-reduce, es/no-array-prototype-keys, array-callback-return -- required for testing
  [].keys().reduce(function () { /* empty */ }, undefined);
});

var reduceWithoutClosingOnEarlyError = !FAILS_ON_INITIAL_UNDEFINED && iteratorHelperWithoutClosingOnEarlyError('reduce', $TypeError);

// `Iterator.prototype.reduce` method
// https://tc39.es/ecma262/#sec-iterator.prototype.reduce
$({ target: 'Iterator', proto: true, real: true, forced: FAILS_ON_INITIAL_UNDEFINED || reduceWithoutClosingOnEarlyError }, {
  reduce: function reduce(reducer /* , initialValue */) {
    anObject(this);
    try {
      aCallable(reducer);
    } catch (error) {
      iteratorClose(this, 'throw', error);
    }

    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    if (reduceWithoutClosingOnEarlyError) {
      return apply(reduceWithoutClosingOnEarlyError, this, noInitial ? [reducer] : [reducer, accumulator]);
    }
    var record = getIteratorDirect(this);
    var counter = 0;
    iterate(record, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = reducer(accumulator, value, counter);
      }
      counter++;
    }, { IS_RECORD: true });
    if (noInitial) throw new $TypeError('Reduce of empty iterator with no initial value');
    return accumulator;
  }
});
