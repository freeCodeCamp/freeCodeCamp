'use strict';
var getBuiltIn = require('../internals/get-built-in');
var isCallable = require('../internals/is-callable');
var isIterable = require('../internals/is-iterable');
var isObject = require('../internals/is-object');

var Set = getBuiltIn('Set');

var isSetLike = function (it) {
  return isObject(it)
    && typeof it.size == 'number'
    && isCallable(it.has)
    && isCallable(it.keys);
};

// fallback old -> new set methods proposal arguments
module.exports = function (it) {
  if (isSetLike(it)) return it;
  return isIterable(it) ? new Set(it) : it;
};
