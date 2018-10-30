/*!
 * to-regex-range <https://github.com/jonschlinkert/to-regex-range>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var repeat = require('repeat-string');
var isNumber = require('is-number');
var cache = {};

function toRegexRange(min, max, options) {
  if (isNumber(min) === false) {
    throw new RangeError('toRegexRange: first argument is invalid.');
  }

  if (typeof max === 'undefined' || min === max) {
    return String(min);
  }

  if (isNumber(max) === false) {
    throw new RangeError('toRegexRange: second argument is invalid.');
  }

  options = options || {};
  var relax = String(options.relaxZeros);
  var shorthand = String(options.shorthand);
  var capture = String(options.capture);
  var key = min + ':' + max + '=' + relax + shorthand + capture;
  if (cache.hasOwnProperty(key)) {
    return cache[key].result;
  }

  var a = Math.min(min, max);
  var b = Math.max(min, max);

  if (Math.abs(a - b) === 1) {
    var result = min + '|' + max;
    if (options.capture) {
      return '(' + result + ')';
    }
    return result;
  }

  var isPadded = padding(min) || padding(max);
  var positives = [];
  var negatives = [];

  var tok = {min: min, max: max, a: a, b: b};
  if (isPadded) {
    tok.isPadded = isPadded;
    tok.maxLen = String(tok.max).length;
  }

  if (a < 0) {
    var newMin = b < 0 ? Math.abs(b) : 1;
    var newMax = Math.abs(a);
    negatives = splitToPatterns(newMin, newMax, tok, options);
    a = tok.a = 0;
  }

  if (b >= 0) {
    positives = splitToPatterns(a, b, tok, options);
  }

  tok.negatives = negatives;
  tok.positives = positives;
  tok.result = siftPatterns(negatives, positives, options);

  if (options.capture && (positives.length + negatives.length) > 1) {
    tok.result = '(' + tok.result + ')';
  }

  cache[key] = tok;
  return tok.result;
}

function siftPatterns(neg, pos, options) {
  var onlyNegative = filterPatterns(neg, pos, '-', false, options) || [];
  var onlyPositive = filterPatterns(pos, neg, '', false, options) || [];
  var intersected = filterPatterns(neg, pos, '-?', true, options) || [];
  var subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
  return subpatterns.join('|');
}

function splitToRanges(min, max) {
  min = Number(min);
  max = Number(max);

  var nines = 1;
  var stops = [max];
  var stop = +countNines(min, nines);

  while (min <= stop && stop <= max) {
    stops = push(stops, stop);
    nines += 1;
    stop = +countNines(min, nines);
  }

  var zeros = 1;
  stop = countZeros(max + 1, zeros) - 1;

  while (min < stop && stop <= max) {
    stops = push(stops, stop);
    zeros += 1;
    stop = countZeros(max + 1, zeros) - 1;
  }

  stops.sort(compare);
  return stops;
}

/**
 * Convert a range to a regex pattern
 * @param {Number} `start`
 * @param {Number} `stop`
 * @return {String}
 */

function rangeToPattern(start, stop, options) {
  if (start === stop) {
    return {pattern: String(start), digits: []};
  }

  var zipped = zip(String(start), String(stop));
  var len = zipped.length, i = -1;

  var pattern = '';
  var digits = 0;

  while (++i < len) {
    var numbers = zipped[i];
    var startDigit = numbers[0];
    var stopDigit = numbers[1];

    if (startDigit === stopDigit) {
      pattern += startDigit;

    } else if (startDigit !== '0' || stopDigit !== '9') {
      pattern += toCharacterClass(startDigit, stopDigit);

    } else {
      digits += 1;
    }
  }

  if (digits) {
    pattern += options.shorthand ? '\\d' : '[0-9]';
  }

  return { pattern: pattern, digits: [digits] };
}

function splitToPatterns(min, max, tok, options) {
  var ranges = splitToRanges(min, max);
  var len = ranges.length;
  var idx = -1;

  var tokens = [];
  var start = min;
  var prev;

  while (++idx < len) {
    var range = ranges[idx];
    var obj = rangeToPattern(start, range, options);
    var zeros = '';

    if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
      if (prev.digits.length > 1) {
        prev.digits.pop();
      }
      prev.digits.push(obj.digits[0]);
      prev.string = prev.pattern + toQuantifier(prev.digits);
      start = range + 1;
      continue;
    }

    if (tok.isPadded) {
      zeros = padZeros(range, tok);
    }

    obj.string = zeros + obj.pattern + toQuantifier(obj.digits);
    tokens.push(obj);
    start = range + 1;
    prev = obj;
  }

  return tokens;
}

function filterPatterns(arr, comparison, prefix, intersection, options) {
  var res = [];

  for (var i = 0; i < arr.length; i++) {
    var tok = arr[i];
    var ele = tok.string;

    if (options.relaxZeros !== false) {
      if (prefix === '-' && ele.charAt(0) === '0') {
        if (ele.charAt(1) === '{') {
          ele = '0*' + ele.replace(/^0\{\d+\}/, '');
        } else {
          ele = '0*' + ele.slice(1);
        }
      }
    }

    if (!intersection && !contains(comparison, 'string', ele)) {
      res.push(prefix + ele);
    }

    if (intersection && contains(comparison, 'string', ele)) {
      res.push(prefix + ele);
    }
  }
  return res;
}

/**
 * Zip strings (`for in` can be used on string characters)
 */

function zip(a, b) {
  var arr = [];
  for (var ch in a) arr.push([a[ch], b[ch]]);
  return arr;
}

function compare(a, b) {
  return a > b ? 1 : b > a ? -1 : 0;
}

function push(arr, ele) {
  if (arr.indexOf(ele) === -1) arr.push(ele);
  return arr;
}

function contains(arr, key, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) {
      return true;
    }
  }
  return false;
}

function countNines(min, len) {
  return String(min).slice(0, -len) + repeat('9', len);
}

function countZeros(integer, zeros) {
  return integer - (integer % Math.pow(10, zeros));
}

function toQuantifier(digits) {
  var start = digits[0];
  var stop = digits[1] ? (',' + digits[1]) : '';
  if (!stop && (!start || start === 1)) {
    return '';
  }
  return '{' + start + stop + '}';
}

function toCharacterClass(a, b) {
  return '[' + a + ((b - a === 1) ? '' : '-') + b + ']';
}

function padding(str) {
  return /^-?(0+)\d/.exec(str);
}

function padZeros(val, tok) {
  if (tok.isPadded) {
    var diff = Math.abs(tok.maxLen - String(val).length);
    switch (diff) {
      case 0:
        return '';
      case 1:
        return '0';
      default: {
        return '0{' + diff + '}';
      }
    }
  }
  return val;
}

/**
 * Expose `toRegexRange`
 */

module.exports = toRegexRange;
