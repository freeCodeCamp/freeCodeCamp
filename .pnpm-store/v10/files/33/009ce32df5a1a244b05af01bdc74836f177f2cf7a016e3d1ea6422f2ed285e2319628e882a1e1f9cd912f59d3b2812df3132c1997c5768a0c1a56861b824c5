'use strict';
var globalThis = require('../internals/global-this');
var fails = require('../internals/fails');
var uncurryThis = require('../internals/function-uncurry-this');
var toString = require('../internals/to-string');
var trim = require('../internals/string-trim').trim;
var whitespaces = require('../internals/whitespaces');

var charAt = uncurryThis(''.charAt);
var $parseFloat = globalThis.parseFloat;
var Symbol = globalThis.Symbol;
var ITERATOR = Symbol && Symbol.iterator;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity
  // MS Edge 18- broken with boxed symbols
  || (ITERATOR && !fails(function () { $parseFloat(Object(ITERATOR)); }));

// `parseFloat` method
// https://tc39.es/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(toString(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && charAt(trimmedString, 0) === '-' ? -0 : result;
} : $parseFloat;
