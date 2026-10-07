'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var toIndexedObject = require('../internals/to-indexed-object');
var toString = require('../internals/to-string');
var lengthOfArrayLike = require('../internals/length-of-array-like');

var $TypeError = TypeError;
var push = uncurryThis([].push);
var join = uncurryThis([].join);

// `String.cooked` method
// https://tc39.es/proposal-string-cooked/
module.exports = function cooked(template /* , ...substitutions */) {
  var cookedTemplate = toIndexedObject(template);
  var literalSegments = lengthOfArrayLike(cookedTemplate);
  if (!literalSegments) return '';
  var argumentsLength = arguments.length;
  var elements = [];
  var i = 0;
  while (true) {
    var nextVal = cookedTemplate[i++];
    if (nextVal === undefined) throw new $TypeError('Incorrect template');
    push(elements, toString(nextVal));
    if (i === literalSegments) return join(elements, '');
    if (i < argumentsLength) push(elements, toString(arguments[i]));
  }
};
