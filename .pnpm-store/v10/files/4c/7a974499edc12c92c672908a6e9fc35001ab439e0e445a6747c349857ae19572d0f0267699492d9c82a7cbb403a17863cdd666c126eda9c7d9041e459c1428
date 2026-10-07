'use strict';
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var anObjectOrUndefined = require('../internals/an-object-or-undefined');
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var getIteratorRecord = require('../internals/get-iterator-record');
var getIteratorFlattenable = require('../internals/get-iterator-flattenable');
var getModeOption = require('../internals/get-mode-option');
var iteratorClose = require('../internals/iterator-close');
var iteratorCloseAll = require('../internals/iterator-close-all');
var iteratorZip = require('../internals/iterator-zip');

var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var THROW = 'throw';

// `Iterator.zip` method
// https://github.com/tc39/proposal-joint-iteration
$({ target: 'Iterator', stat: true }, {
  zip: function zip(iterables /* , options */) {
    anObject(iterables);
    var options = arguments.length > 1 ? anObjectOrUndefined(arguments[1]) : undefined;
    var mode = getModeOption(options);
    var paddingOption = mode === 'longest' ? anObjectOrUndefined(options && options.padding) : undefined;

    var iters = [];
    var padding = [];
    var inputIter = getIteratorRecord(iterables);
    var iter, done, next;
    while (!done) {
      try {
        next = anObject(call(inputIter.next, inputIter.iterator));
        done = next.done;
      } catch (error) {
        return iteratorCloseAll(iters, THROW, error);
      }
      if (!done) {
        try {
          iter = getIteratorFlattenable(next.value, true);
        } catch (error) {
          return iteratorCloseAll(concat([inputIter.iterator], iters), THROW, error);
        }
        push(iters, iter);
      }
    }

    var iterCount = iters.length;
    var i, paddingDone, paddingIter;
    if (mode === 'longest') {
      if (paddingOption === undefined) {
        for (i = 0; i < iterCount; i++) push(padding, undefined);
      } else {
        try {
          paddingIter = getIteratorRecord(paddingOption);
        } catch (error) {
          return iteratorCloseAll(iters, THROW, error);
        }
        var usingIterator = true;
        for (i = 0; i < iterCount; i++) {
          if (usingIterator) {
            try {
              next = anObject(call(paddingIter.next, paddingIter.iterator));
              paddingDone = next.done;
              next = next.value;
            } catch (error) {
              return iteratorCloseAll(iters, THROW, error);
            }
            if (paddingDone) {
              usingIterator = false;
            } else {
              push(padding, next);
            }
          } else {
            push(padding, undefined);
          }
        }

        if (usingIterator) {
          try {
            iteratorClose(paddingIter.iterator, 'normal');
          } catch (error) {
            return iteratorCloseAll(iters, THROW, error);
          }
        }
      }
    }

    return iteratorZip(iters, mode, padding);
  }
});
