'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var anObject = require('../internals/an-object');
var isObject = require('../internals/is-object');
var getIteratorDirect = require('../internals/get-iterator-direct');
var createAsyncIteratorProxy = require('../internals/async-iterator-create-proxy');
var createIterResultObject = require('../internals/create-iter-result-object');
var closeAsyncIteration = require('../internals/async-iterator-close');

var AsyncIteratorProxy = createAsyncIteratorProxy(function (Promise) {
  var state = this;
  var iterator = state.iterator;
  var predicate = state.predicate;

  return new Promise(function (resolve, reject) {
    var doneAndReject = function (error) {
      state.done = true;
      reject(error);
    };

    var ifAbruptCloseAsyncIterator = function (error) {
      closeAsyncIteration(iterator, doneAndReject, error, doneAndReject);
    };

    var loop = function () {
      try {
        Promise.resolve(anObject(call(state.next, iterator))).then(function (step) {
          try {
            if (anObject(step).done) {
              state.done = true;
              resolve(createIterResultObject(undefined, true));
            } else {
              var value = step.value;
              try {
                var result = predicate(value, state.counter++);

                var handler = function (selected) {
                  selected ? resolve(createIterResultObject(value, false)) : loop();
                };

                if (isObject(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);
                else handler(result);
              } catch (error3) { ifAbruptCloseAsyncIterator(error3); }
            }
          } catch (error2) { doneAndReject(error2); }
        }, doneAndReject);
      } catch (error) { doneAndReject(error); }
    };

    loop();
  });
});

// `AsyncIterator.prototype.filter` method
// https://github.com/tc39/proposal-async-iterator-helpers
$({ target: 'AsyncIterator', proto: true, real: true, forced: true }, {
  filter: function filter(predicate) {
    anObject(this);
    aCallable(predicate);
    return new AsyncIteratorProxy(getIteratorDirect(this), {
      predicate: predicate
    });
  }
});
