'use strict';
var $ = require('../internals/export');
var anObject = require('../internals/an-object');
var call = require('../internals/function-call');
var createIteratorProxy = require('../internals/iterator-create-proxy');
var getIteratorDirect = require('../internals/get-iterator-direct');
var iteratorClose = require('../internals/iterator-close');
var uncurryThis = require('../internals/function-uncurry-this');

var $RangeError = RangeError;
var push = uncurryThis([].push);

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  var next = this.next;
  var chunkSize = this.chunkSize;
  var buffer = [];
  var result, done;
  while (true) {
    result = anObject(call(next, iterator));
    done = !!result.done;
    if (done) {
      if (buffer.length) return buffer;
      this.done = true;
      return;
    }
    push(buffer, result.value);
    if (buffer.length === chunkSize) return buffer;
  }
});

// `Iterator.prototype.chunks` method
// https://github.com/tc39/proposal-iterator-chunking
$({ target: 'Iterator', proto: true, real: true, forced: true }, {
  chunks: function chunks(chunkSize) {
    var O = anObject(this);
    if (typeof chunkSize != 'number' || !chunkSize || chunkSize >>> 0 !== chunkSize) {
      return iteratorClose(O, 'throw', new $RangeError('chunkSize must be integer in [1, 2^32-1]'));
    }
    return new IteratorProxy(getIteratorDirect(O), {
      chunkSize: chunkSize
    });
  }
});
