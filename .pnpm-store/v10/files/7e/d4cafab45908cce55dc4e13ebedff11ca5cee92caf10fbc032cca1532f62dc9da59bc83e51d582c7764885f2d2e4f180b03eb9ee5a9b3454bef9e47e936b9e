'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var toIndexedObject = require('../internals/to-indexed-object');
var toObject = require('../internals/to-object');
var toString = require('../internals/to-string');
var lengthOfArrayLike = require('../internals/length-of-array-like');

var push = uncurryThis([].push);
var join = uncurryThis([].join);

// `String.raw` method
// https://tc39.es/ecma262/#sec-string.raw
$({ target: 'String', stat: true }, {
  raw: function raw(template) {
    var rawTemplate = toIndexedObject(toObject(template).raw);
    var literalSegments = lengthOfArrayLike(rawTemplate);
    if (!literalSegments) return '';
    var argumentsLength = arguments.length;
    var elements = [];
    var i = 0;
    while (true) {
      push(elements, toString(rawTemplate[i++]));
      if (i === literalSegments) return join(elements, '');
      if (i < argumentsLength) push(elements, toString(arguments[i]));
    }
  }
});
