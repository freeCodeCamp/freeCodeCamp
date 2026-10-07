'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var anObject = require('../internals/an-object');
var getIteratorMethod = require('../internals/get-iterator-method');
var createIteratorProxy = require('../internals/iterator-create-proxy');

var $Array = Array;

var IteratorProxy = createIteratorProxy(function () {
  while (true) {
    var iterator = this.iterator;
    if (!iterator) {
      var iterableIndex = this.nextIterableIndex++;
      var iterables = this.iterables;
      if (iterableIndex >= iterables.length) {
        this.done = true;
        return;
      }
      var entry = iterables[iterableIndex];
      this.iterables[iterableIndex] = null;
      iterator = this.iterator = call(entry.method, entry.iterable);
      this.next = iterator.next;
    }
    var result = anObject(call(this.next, iterator));
    if (result.done) {
      this.iterator = null;
      this.next = null;
      continue;
    }
    return result.value;
  }
});

// `Iterator.concat` method
// https://github.com/tc39/proposal-iterator-sequencing
$({ target: 'Iterator', stat: true }, {
  concat: function concat() {
    var length = arguments.length;
    var iterables = $Array(length);
    for (var index = 0; index < length; index++) {
      var item = anObject(arguments[index]);
      iterables[index] = {
        iterable: item,
        method: aCallable(getIteratorMethod(item))
      };
    }
    return new IteratorProxy({
      iterables: iterables,
      nextIterableIndex: 0,
      iterator: null,
      next: null
    });
  }
});
