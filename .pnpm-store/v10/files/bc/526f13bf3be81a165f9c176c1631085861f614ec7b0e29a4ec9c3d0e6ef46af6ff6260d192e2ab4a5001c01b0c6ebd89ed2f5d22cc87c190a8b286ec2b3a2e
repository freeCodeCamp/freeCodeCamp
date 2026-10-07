'use strict';
var call = require('../internals/function-call');
var anObject = require('../internals/an-object');
var getIteratorDirect = require('../internals/get-iterator-direct');
var getIteratorMethod = require('../internals/get-iterator-method');

module.exports = function (obj, stringHandling) {
  if (!stringHandling || typeof obj !== 'string') anObject(obj);
  var method = getIteratorMethod(obj);
  return getIteratorDirect(anObject(method !== undefined ? call(method, obj) : obj));
};
