'use strict';
var call = require('../internals/function-call');
var aCallable = require('../internals/a-callable');
var isCallable = require('../internals/is-callable');
var anObject = require('../internals/an-object');

var $TypeError = TypeError;

// `Map.prototype.upsert` method
// https://github.com/tc39/proposal-upsert
module.exports = function upsert(key, updateFn /* , insertFn */) {
  var map = anObject(this);
  var get = aCallable(map.get);
  var has = aCallable(map.has);
  var set = aCallable(map.set);
  var insertFn = arguments.length > 2 ? arguments[2] : undefined;
  var value;
  if (!isCallable(updateFn) && !isCallable(insertFn)) {
    throw new $TypeError('At least one callback required');
  }
  if (call(has, map, key)) {
    value = call(get, map, key);
    if (isCallable(updateFn)) {
      value = updateFn(value);
      call(set, map, key, value);
    }
  } else if (isCallable(insertFn)) {
    value = insertFn();
    call(set, map, key, value);
  } return value;
};
