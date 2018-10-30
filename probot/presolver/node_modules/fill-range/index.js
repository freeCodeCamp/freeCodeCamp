/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var isObject = require('isobject');
var isNumber = require('is-number');
var randomize = require('randomatic');
var repeatStr = require('repeat-string');
var repeat = require('repeat-element');

/**
 * Expose `fillRange`
 */

module.exports = fillRange;

/**
 * Return a range of numbers or letters.
 *
 * @param  {String} `a` Start of the range
 * @param  {String} `b` End of the range
 * @param  {String} `step` Increment or decrement to use.
 * @param  {Function} `fn` Custom function to modify each element in the range.
 * @return {Array}
 */

function fillRange(a, b, step, options, fn) {
  if (a == null || b == null) {
    throw new Error('fill-range expects the first and second args to be strings.');
  }

  if (typeof step === 'function') {
    fn = step; options = {}; step = null;
  }

  if (typeof options === 'function') {
    fn = options; options = {};
  }

  if (isObject(step)) {
    options = step; step = '';
  }

  var expand, regex = false, sep = '';
  var opts = options || {};

  if (typeof opts.silent === 'undefined') {
    opts.silent = true;
  }

  step = step || opts.step;

  // store a ref to unmodified arg
  var origA = a, origB = b;

  b = (b.toString() === '-0') ? 0 : b;

  if (opts.optimize || opts.makeRe) {
    step = step ? (step += '~') : step;
    expand = true;
    regex = true;
    sep = '~';
  }

  // handle special step characters
  if (typeof step === 'string') {
    var match = stepRe().exec(step);

    if (match) {
      var i = match.index;
      var m = match[0];

      // repeat string
      if (m === '+') {
        return repeat(a, b);

      // randomize a, `b` times
      } else if (m === '?') {
        return [randomize(a, b)];

      // expand right, no regex reduction
      } else if (m === '>') {
        step = step.substr(0, i) + step.substr(i + 1);
        expand = true;

      // expand to an array, or if valid create a reduced
      // string for a regex logic `or`
      } else if (m === '|') {
        step = step.substr(0, i) + step.substr(i + 1);
        expand = true;
        regex = true;
        sep = m;

      // expand to an array, or if valid create a reduced
      // string for a regex range
      } else if (m === '~') {
        step = step.substr(0, i) + step.substr(i + 1);
        expand = true;
        regex = true;
        sep = m;
      }
    } else if (!isNumber(step)) {
      if (!opts.silent) {
        throw new TypeError('fill-range: invalid step.');
      }
      return null;
    }
  }

  if (/[.&*()[\]^%$#@!]/.test(a) || /[.&*()[\]^%$#@!]/.test(b)) {
    if (!opts.silent) {
      throw new RangeError('fill-range: invalid range arguments.');
    }
    return null;
  }

  // has neither a letter nor number, or has both letters and numbers
  // this needs to be after the step logic
  if (!noAlphaNum(a) || !noAlphaNum(b) || hasBoth(a) || hasBoth(b)) {
    if (!opts.silent) {
      throw new RangeError('fill-range: invalid range arguments.');
    }
    return null;
  }

  // validate arguments
  var isNumA = isNumber(zeros(a));
  var isNumB = isNumber(zeros(b));

  if ((!isNumA && isNumB) || (isNumA && !isNumB)) {
    if (!opts.silent) {
      throw new TypeError('fill-range: first range argument is incompatible with second.');
    }
    return null;
  }

  // by this point both are the same, so we
  // can use A to check going forward.
  var isNum = isNumA;
  var num = formatStep(step);

  // is the range alphabetical? or numeric?
  if (isNum) {
    // if numeric, coerce to an integer
    a = +a; b = +b;
  } else {
    // otherwise, get the charCode to expand alpha ranges
    a = a.charCodeAt(0);
    b = b.charCodeAt(0);
  }

  // is the pattern descending?
  var isDescending = a > b;

  // don't create a character class if the args are < 0
  if (a < 0 || b < 0) {
    expand = false;
    regex = false;
  }

  // detect padding
  var padding = isPadded(origA, origB);
  var res, pad, arr = [];
  var ii = 0;

  // character classes, ranges and logical `or`
  if (regex) {
    if (shouldExpand(a, b, num, isNum, padding, opts)) {
      // make sure the correct separator is used
      if (sep === '|' || sep === '~') {
        sep = detectSeparator(a, b, num, isNum, isDescending);
      }
      return wrap([origA, origB], sep, opts);
    }
  }

  while (isDescending ? (a >= b) : (a <= b)) {
    if (padding && isNum) {
      pad = padding(a);
    }

    // custom function
    if (typeof fn === 'function') {
      res = fn(a, isNum, pad, ii++);

    // letters
    } else if (!isNum) {
      if (regex && isInvalidChar(a)) {
        res = null;
      } else {
        res = String.fromCharCode(a);
      }

    // numbers
    } else {
      res = formatPadding(a, pad);
    }

    // add result to the array, filtering any nulled values
    if (res !== null) arr.push(res);

    // increment or decrement
    if (isDescending) {
      a -= num;
    } else {
      a += num;
    }
  }

  // now that the array is expanded, we need to handle regex
  // character classes, ranges or logical `or` that wasn't
  // already handled before the loop
  if ((regex || expand) && !opts.noexpand) {
    // make sure the correct separator is used
    if (sep === '|' || sep === '~') {
      sep = detectSeparator(a, b, num, isNum, isDescending);
    }
    if (arr.length === 1 || a < 0 || b < 0) { return arr; }
    return wrap(arr, sep, opts);
  }

  return arr;
}

/**
 * Wrap the string with the correct regex
 * syntax.
 */

function wrap(arr, sep, opts) {
  if (sep === '~') { sep = '-'; }
  var str = arr.join(sep);
  var pre = opts && opts.regexPrefix;

  // regex logical `or`
  if (sep === '|') {
    str = pre ? pre + str : str;
    str = '(' + str + ')';
  }

  // regex character class
  if (sep === '-') {
    str = (pre && pre === '^')
      ? pre + str
      : str;
    str = '[' + str + ']';
  }
  return [str];
}

/**
 * Check for invalid characters
 */

function isCharClass(a, b, step, isNum, isDescending) {
  if (isDescending) { return false; }
  if (isNum) { return a <= 9 && b <= 9; }
  if (a < b) { return step === 1; }
  return false;
}

/**
 * Detect the correct separator to use
 */

function shouldExpand(a, b, num, isNum, padding, opts) {
  if (isNum && (a > 9 || b > 9)) { return false; }
  return !padding && num === 1 && a < b;
}

/**
 * Detect the correct separator to use
 */

function detectSeparator(a, b, step, isNum, isDescending) {
  var isChar = isCharClass(a, b, step, isNum, isDescending);
  if (!isChar) {
    return '|';
  }
  return '~';
}

/**
 * Correctly format the step based on type
 */

function formatStep(step) {
  return Math.abs(step >> 0) || 1;
}

/**
 * Format padding, taking leading `-` into account
 */

function formatPadding(ch, pad) {
  var res = pad ? pad + ch : ch;
  if (pad && ch.toString().charAt(0) === '-') {
    res = '-' + pad + ch.toString().substr(1);
  }
  return res.toString();
}

/**
 * Check for invalid characters
 */

function isInvalidChar(str) {
  var ch = toStr(str);
  return ch === '\\'
    || ch === '['
    || ch === ']'
    || ch === '^'
    || ch === '('
    || ch === ')'
    || ch === '`';
}

/**
 * Convert to a string from a charCode
 */

function toStr(ch) {
  return String.fromCharCode(ch);
}


/**
 * Step regex
 */

function stepRe() {
  return /\?|>|\||\+|\~/g;
}

/**
 * Return true if `val` has either a letter
 * or a number
 */

function noAlphaNum(val) {
  return /[a-z0-9]/i.test(val);
}

/**
 * Return true if `val` has both a letter and
 * a number (invalid)
 */

function hasBoth(val) {
  return /[a-z][0-9]|[0-9][a-z]/i.test(val);
}

/**
 * Normalize zeros for checks
 */

function zeros(val) {
  if (/^-*0+$/.test(val.toString())) {
    return '0';
  }
  return val;
}

/**
 * Return true if `val` has leading zeros,
 * or a similar valid pattern.
 */

function hasZeros(val) {
  return /[^.]\.|^-*0+[0-9]/.test(val);
}

/**
 * If the string is padded, returns a curried function with
 * the a cached padding string, or `false` if no padding.
 *
 * @param  {*} `origA` String or number.
 * @return {String|Boolean}
 */

function isPadded(origA, origB) {
  if (hasZeros(origA) || hasZeros(origB)) {
    var alen = length(origA);
    var blen = length(origB);

    var len = alen >= blen
      ? alen
      : blen;

    return function (a) {
      return repeatStr('0', len - length(a));
    };
  }
  return false;
}

/**
 * Get the string length of `val`
 */

function length(val) {
  return val.toString().length;
}
