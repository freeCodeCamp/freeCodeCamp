'use strict';
var $ = require('../internals/export');
var globalThis = require('../internals/global-this');
var getBuiltIn = require('../internals/get-built-in');
var uncurryThis = require('../internals/function-uncurry-this');
var call = require('../internals/function-call');
var fails = require('../internals/fails');
var toString = require('../internals/to-string');
var validateArgumentsLength = require('../internals/validate-arguments-length');
var c2i = require('../internals/base64-map').c2i;

var disallowed = /[^\d+/a-z]/i;
var whitespaces = /[\t\n\f\r ]+/g;
var finalEq = /[=]{1,2}$/;

var $atob = getBuiltIn('atob');
var $Array = Array;
var fromCharCode = String.fromCharCode;
var charAt = uncurryThis(''.charAt);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);
var exec = uncurryThis(disallowed.exec);

var BASIC = !!$atob && !fails(function () {
  return $atob('aGk=') !== 'hi';
});

var NO_SPACES_IGNORE = BASIC && fails(function () {
  return $atob(' ') !== '';
});

var NO_ENCODING_CHECK = BASIC && !fails(function () {
  $atob('a');
});

var NO_ARG_RECEIVING_CHECK = BASIC && !fails(function () {
  $atob();
});

var WRONG_ARITY = BASIC && $atob.length !== 1;

var FORCED = !BASIC || NO_SPACES_IGNORE || NO_ENCODING_CHECK || NO_ARG_RECEIVING_CHECK || WRONG_ARITY;

// `atob` method
// https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob
$({ global: true, bind: true, enumerable: true, forced: FORCED }, {
  atob: function atob(data) {
    validateArgumentsLength(arguments.length, 1);
    // `webpack` dev server bug on IE global methods - use call(fn, global, ...)
    if (BASIC && !NO_SPACES_IGNORE && !NO_ENCODING_CHECK) return call($atob, globalThis, data);
    var string = replace(toString(data), whitespaces, '');
    var position = 0;
    var bc = 0;
    var length, chr, bs;
    if (!(string.length & 3)) {
      string = replace(string, finalEq, '');
    }
    length = string.length;
    var lenmod = length & 3;
    if (lenmod === 1 || exec(disallowed, string)) {
      throw new (getBuiltIn('DOMException'))('The string is not correctly encoded', 'InvalidCharacterError');
    }
    // (length >> 2) is equivalent for length / 4 floored; * 3 then multiplies the
    // number of bytes for full quanta
    // lenmod is length % 4; if there's 2 or 3 bytes it's 1 or 2 bytes of extra output
    // respectively, so -1, however use a ternary to ensure 0 does not get -1 onto length
    var output = new $Array((length >> 2) * 3 + (lenmod ? lenmod - 1 : 0));
    var outputIndex = 0;
    while (position < length) {
      chr = charAt(string, position++);
      bs = bc & 3 ? (bs << 6) + c2i[chr] : c2i[chr];
      if (bc++ & 3) output[outputIndex++] = fromCharCode(255 & bs >> (-2 * bc & 6));
    }
    return join(output, '');
  }
});
