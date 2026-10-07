'use strict';
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var create = require('../internals/object-create');
var getMethod = require('../internals/get-method');
var defineBuiltIns = require('../internals/define-built-ins');
var InternalStateModule = require('../internals/internal-state');
var iteratorClose = require('../internals/iterator-close');
var getBuiltIn = require('../internals/get-built-in');
var AsyncIteratorPrototype = require('../internals/async-iterator-prototype');
var createIterResultObject = require('../internals/create-iter-result-object');

var Promise = getBuiltIn('Promise');

var ASYNC_FROM_SYNC_ITERATOR = 'AsyncFromSyncIterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ASYNC_FROM_SYNC_ITERATOR);

var asyncFromSyncIteratorContinuation = function (result, resolve, reject, syncIterator, closeOnRejection) {
  var done = result.done;
  Promise.resolve(result.value).then(function (value) {
    resolve(createIterResultObject(value, done));
  }, function (error) {
    if (!done && closeOnRejection) {
      try {
        iteratorClose(syncIterator, 'throw', error);
      } catch (error2) {
        error = error2;
      }
    }

    reject(error);
  });
};

var AsyncFromSyncIterator = function AsyncIterator(iteratorRecord) {
  iteratorRecord.type = ASYNC_FROM_SYNC_ITERATOR;
  setInternalState(this, iteratorRecord);
};

AsyncFromSyncIterator.prototype = defineBuiltIns(create(AsyncIteratorPrototype), {
  next: function next() {
    var state = getInternalState(this);
    return new Promise(function (resolve, reject) {
      var result = anObject(call(state.next, state.iterator));
      asyncFromSyncIteratorContinuation(result, resolve, reject, state.iterator, true);
    });
  },
  'return': function () {
    var iterator = getInternalState(this).iterator;
    return new Promise(function (resolve, reject) {
      var $return = getMethod(iterator, 'return');
      if ($return === undefined) return resolve(createIterResultObject(undefined, true));
      var result = anObject(call($return, iterator));
      asyncFromSyncIteratorContinuation(result, resolve, reject, iterator);
    });
  }
});

module.exports = AsyncFromSyncIterator;
