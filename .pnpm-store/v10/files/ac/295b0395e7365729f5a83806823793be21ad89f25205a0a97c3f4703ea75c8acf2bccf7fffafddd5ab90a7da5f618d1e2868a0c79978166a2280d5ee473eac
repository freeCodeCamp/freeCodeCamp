'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var bind = require('../internals/function-bind-context');
var anObject = require('../internals/an-object');
var toObject = require('../internals/to-object');
var iterate = require('../internals/iterate');

module.exports = function (C, adder, ENTRY) {
  return function from(source /* , mapFn, thisArg */) {
    var O = toObject(source);
    var length = arguments.length;
    var mapFn = length > 1 ? arguments[1] : undefined;
    var mapping = mapFn !== undefined;
    var boundFunction = mapping ? bind(mapFn, length > 2 ? arguments[2] : undefined) : undefined;
    var result = new C();
    var n = 0;
    iterate(O, function (nextItem) {
      var entry = mapping ? boundFunction(nextItem, n++) : nextItem;
      if (ENTRY) adder(result, anObject(entry)[0], entry[1]);
      else adder(result, entry);
    });
    return result;
  };
};
