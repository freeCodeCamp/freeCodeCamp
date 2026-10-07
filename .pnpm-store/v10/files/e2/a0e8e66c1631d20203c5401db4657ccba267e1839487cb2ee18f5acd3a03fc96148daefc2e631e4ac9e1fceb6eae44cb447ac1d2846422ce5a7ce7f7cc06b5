'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var uncurryThis = require('../internals/function-uncurry-this');
var requireObjectCoercible = require('../internals/require-object-coercible');
var isCallable = require('../internals/is-callable');
var isObject = require('../internals/is-object');
var isRegExp = require('../internals/is-regexp');
var toString = require('../internals/to-string');
var getMethod = require('../internals/get-method');
var getRegExpFlags = require('../internals/regexp-get-flags');
var getSubstitution = require('../internals/get-substitution');
var wellKnownSymbol = require('../internals/well-known-symbol');
var IS_PURE = require('../internals/is-pure');

var REPLACE = wellKnownSymbol('replace');
var $TypeError = TypeError;
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);
var max = Math.max;

// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$({ target: 'String', proto: true }, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, position, replacement;
    var endOfLastMatch = 0;
    var result = '';
    if (isObject(searchValue)) {
      IS_REG_EXP = isRegExp(searchValue);
      if (IS_REG_EXP) {
        flags = toString(requireObjectCoercible(getRegExpFlags(searchValue)));
        if (!~indexOf(flags, 'g')) throw new $TypeError('`.replaceAll` does not allow non-global regexes');
      }
      replacer = getMethod(searchValue, REPLACE);
      if (replacer) return call(replacer, searchValue, O, replaceValue);
      if (IS_PURE && IS_REG_EXP) return replace(toString(O), searchValue, replaceValue);
    }
    string = toString(O);
    searchString = toString(searchValue);
    functionalReplace = isCallable(replaceValue);
    if (!functionalReplace) replaceValue = toString(replaceValue);
    searchLength = searchString.length;
    advanceBy = max(1, searchLength);
    position = indexOf(string, searchString);
    while (position !== -1) {
      replacement = functionalReplace
        ? toString(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = position + advanceBy > string.length ? -1 : indexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += stringSlice(string, endOfLastMatch);
    }
    return result;
  }
});
