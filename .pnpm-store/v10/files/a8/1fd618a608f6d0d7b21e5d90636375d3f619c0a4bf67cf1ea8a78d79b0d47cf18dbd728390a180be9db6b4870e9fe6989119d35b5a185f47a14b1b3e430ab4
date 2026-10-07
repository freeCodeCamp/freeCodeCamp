//
// format - printf-like string formatting for JavaScript
// github.com/samsonjs/format
// @_sjs
//
// Copyright 2010 - 2013 Sami Samhuri <sami@samhuri.net>
//
// MIT License
// http://sjs.mit-license.org
//

;(function() {

  //// Export the API
  var namespace;

  // CommonJS / Node module
  if (typeof module !== 'undefined') {
    namespace = module.exports = format;
  }

  // Browsers and other environments
  else {
    // Get the global object. Works in ES3, ES5, and ES5 strict mode.
    namespace = (function(){ return this || (1,eval)('this') }());
  }

  namespace.format = format;
  namespace.vsprintf = vsprintf;

  if (typeof console !== 'undefined' && typeof console.log === 'function') {
    namespace.printf = printf;
  }

  function printf(/* ... */) {
    console.log(format.apply(null, arguments));
  }

  function vsprintf(fmt, replacements) {
    return format.apply(null, [fmt].concat(replacements));
  }

  function format(fmt) {
    var argIndex = 1 // skip initial format argument
      , args = [].slice.call(arguments)
      , i = 0
      , n = fmt.length
      , result = ''
      , c
      , escaped = false
      , arg
      , tmp
      , leadingZero = false
      , precision
      , nextArg = function() { return args[argIndex++]; }
      , slurpNumber = function() {
          var digits = '';
          while (/\d/.test(fmt[i])) {
            digits += fmt[i++];
            c = fmt[i];
          }
          return digits.length > 0 ? parseInt(digits) : null;
        }
      ;
    for (; i < n; ++i) {
      c = fmt[i];
      if (escaped) {
        escaped = false;
        if (c == '.') {
          leadingZero = false;
          c = fmt[++i];
        }
        else if (c == '0' && fmt[i + 1] == '.') {
          leadingZero = true;
          i += 2;
          c = fmt[i];
        }
        else {
          leadingZero = true;
        }
        precision = slurpNumber();
        switch (c) {
        case 'b': // number in binary
          result += parseInt(nextArg(), 10).toString(2);
          break;
        case 'c': // character
          arg = nextArg();
          if (typeof arg === 'string' || arg instanceof String)
            result += arg;
          else
            result += String.fromCharCode(parseInt(arg, 10));
          break;
        case 'd': // number in decimal
          result += parseInt(nextArg(), 10);
          break;
        case 'f': // floating point number
          tmp = String(parseFloat(nextArg()).toFixed(precision || 6));
          result += leadingZero ? tmp : tmp.replace(/^0/, '');
          break;
        case 'j': // JSON
          result += JSON.stringify(nextArg());
          break;
        case 'o': // number in octal
          result += '0' + parseInt(nextArg(), 10).toString(8);
          break;
        case 's': // string
          result += nextArg();
          break;
        case 'x': // lowercase hexadecimal
          result += '0x' + parseInt(nextArg(), 10).toString(16);
          break;
        case 'X': // uppercase hexadecimal
          result += '0x' + parseInt(nextArg(), 10).toString(16).toUpperCase();
          break;
        default:
          result += c;
          break;
        }
      } else if (c === '%') {
        escaped = true;
      } else {
        result += c;
      }
    }
    return result;
  }

}());
