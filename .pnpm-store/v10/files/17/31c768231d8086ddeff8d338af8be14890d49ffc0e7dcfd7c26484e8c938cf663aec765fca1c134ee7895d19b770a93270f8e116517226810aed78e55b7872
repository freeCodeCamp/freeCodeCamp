'use strict';
var $ = require('../internals/export');
var uncurryThis = require('../internals/function-uncurry-this');
var aString = require('../internals/a-string');
var hasOwn = require('../internals/has-own-property');
var padStart = require('../internals/string-pad').start;
var WHITESPACES = require('../internals/whitespaces');

var $Array = Array;
var $escape = RegExp.escape;
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var numberToString = uncurryThis(1.1.toString);
var join = uncurryThis([].join);
var FIRST_DIGIT_OR_ASCII = /^[0-9a-z]/i;
var SYNTAX_SOLIDUS = /^[$()*+./?[\\\]^{|}]/;
var OTHER_PUNCTUATORS_AND_WHITESPACES = RegExp('^[!"#%&\',\\-:;<=>@`~' + WHITESPACES + ']');
var exec = uncurryThis(FIRST_DIGIT_OR_ASCII.exec);

var ControlEscape = {
  '\u0009': 't',
  '\u000A': 'n',
  '\u000B': 'v',
  '\u000C': 'f',
  '\u000D': 'r'
};

var escapeChar = function (chr) {
  var hex = numberToString(charCodeAt(chr, 0), 16);
  return hex.length < 3 ? '\\x' + padStart(hex, 2, '0') : '\\u' + padStart(hex, 4, '0');
};

// Avoiding the use of polyfills of the previous iteration of this proposal
var FORCED = !$escape || $escape('ab') !== '\\x61b';

// `RegExp.escape` method
// https://tc39.es/ecma262/#sec-regexp.escape
$({ target: 'RegExp', stat: true, forced: FORCED }, {
  escape: function escape(S) {
    aString(S);
    var length = S.length;
    var result = $Array(length);

    for (var i = 0; i < length; i++) {
      var chr = charAt(S, i);
      if (i === 0 && exec(FIRST_DIGIT_OR_ASCII, chr)) {
        result[i] = escapeChar(chr);
      } else if (hasOwn(ControlEscape, chr)) {
        result[i] = '\\' + ControlEscape[chr];
      } else if (exec(SYNTAX_SOLIDUS, chr)) {
        result[i] = '\\' + chr;
      } else if (exec(OTHER_PUNCTUATORS_AND_WHITESPACES, chr)) {
        result[i] = escapeChar(chr);
      } else {
        var charCode = charCodeAt(chr, 0);
        // single UTF-16 code unit
        if ((charCode & 0xF800) !== 0xD800) result[i] = chr;
        // unpaired surrogate
        else if (charCode >= 0xDC00 || i + 1 >= length || (charCodeAt(S, i + 1) & 0xFC00) !== 0xDC00) result[i] = escapeChar(chr);
        // surrogate pair
        else {
          result[i] = chr;
          result[++i] = charAt(S, i);
        }
      }
    }

    return join(result, '');
  }
});
