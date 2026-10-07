'use strict';
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var createIteratorProxy = require('../internals/iterator-create-proxy');
var iteratorCloseAll = require('../internals/iterator-close-all');

var $TypeError = TypeError;
var slice = uncurryThis([].slice);
var push = uncurryThis([].push);
var ITERATOR_IS_EXHAUSTED = 'Iterator is exhausted';
var THROW = 'throw';

// eslint-disable-next-line max-statements -- specification case
var IteratorProxy = createIteratorProxy(function () {
  var iterCount = this.iterCount;
  if (!iterCount) {
    this.done = true;
    return;
  }
  var openIters = this.openIters;
  var iters = this.iters;
  var padding = this.padding;
  var mode = this.mode;
  var finishResults = this.finishResults;

  var results = [];
  var result, done;
  for (var i = 0; i < iterCount; i++) {
    var iter = iters[i];
    if (iter === null) {
      result = padding[i];
    } else {
      try {
        result = call(iter.next, iter.iterator);
        done = result.done;
        result = result.value;
      } catch (error) {
        openIters[i] = undefined;
        return iteratorCloseAll(openIters, THROW, error);
      }
      if (done) {
        openIters[i] = undefined;
        this.openItersCount--;
        if (mode === 'shortest') {
          this.done = true;
          return iteratorCloseAll(openIters, 'normal', undefined);
        }
        if (mode === 'strict') {
          if (i) {
            return iteratorCloseAll(openIters, THROW, new $TypeError(ITERATOR_IS_EXHAUSTED));
          }

          var open, openDone;
          for (var k = 1; k < iterCount; k++) {
            // eslint-disable-next-line max-depth -- specification case
            try {
              open = call(iters[k].next, iters[k].iterator);
              openDone = open.done;
              open = open.value;
            } catch (error) {
              openIters[k] = undefined;
              return iteratorCloseAll(openIters, THROW, open);
            }
            // eslint-disable-next-line max-depth -- specification case
            if (openDone) {
              openIters[k] = undefined;
              this.openItersCount--;
            } else {
              return iteratorCloseAll(openIters, THROW, new $TypeError(ITERATOR_IS_EXHAUSTED));
            }
          }
          this.done = true;
          return;
        }
        if (!this.openItersCount) {
          this.done = true;
          return;
        }
        iters[i] = null;
        result = padding[i];
      }
    }
    push(results, result);
  }

  return finishResults ? finishResults(results) : results;
});

module.exports = function (iters, mode, padding, finishResults) {
  var iterCount = iters.length;
  return new IteratorProxy({
    iters: iters,
    iterCount: iterCount,
    openIters: slice(iters, 0),
    openItersCount: iterCount,
    mode: mode,
    padding: padding,
    finishResults: finishResults
  });
};
