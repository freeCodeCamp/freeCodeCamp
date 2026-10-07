'use strict';
var call = require('../internals/function-call');
var createAsyncIteratorProxy = require('../internals/async-iterator-create-proxy');

module.exports = createAsyncIteratorProxy(function () {
  return call(this.next, this.iterator);
}, true);
