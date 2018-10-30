/*!
 * braces <https://github.com/jonschlinkert/braces>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module dependencies
 */

var expand = require('expand-range');
var repeat = require('repeat-element');
var tokens = require('preserve');

/**
 * Expose `braces`
 */

module.exports = function(str, options) {
  if (typeof str !== 'string') {
    throw new Error('braces expects a string');
  }
  return braces(str, options);
};

/**
 * Expand `{foo,bar}` or `{1..5}` braces in the
 * given `string`.
 *
 * @param  {String} `str`
 * @param  {Array} `arr`
 * @param  {Object} `options`
 * @return {Array}
 */

function braces(str, arr, options) {
  if (str === '') {
    return [];
  }

  if (!Array.isArray(arr)) {
    options = arr;
    arr = [];
  }

  var opts = options || {};
  arr = arr || [];

  if (typeof opts.nodupes === 'undefined') {
    opts.nodupes = true;
  }

  var fn = opts.fn;
  var es6;

  if (typeof opts === 'function') {
    fn = opts;
    opts = {};
  }

  if (!(patternRe instanceof RegExp)) {
    patternRe = patternRegex();
  }

  var matches = str.match(patternRe) || [];
  var m = matches[0];

  switch(m) {
    case '\\,':
      return escapeCommas(str, arr, opts);
    case '\\.':
      return escapeDots(str, arr, opts);
    case '\/.':
      return escapePaths(str, arr, opts);
    case ' ':
      return splitWhitespace(str);
    case '{,}':
      return exponential(str, opts, braces);
    case '{}':
      return emptyBraces(str, arr, opts);
    case '\\{':
    case '\\}':
      return escapeBraces(str, arr, opts);
    case '${':
      if (!/\{[^{]+\{/.test(str)) {
        return arr.concat(str);
      } else {
        es6 = true;
        str = tokens.before(str, es6Regex());
      }
  }

  if (!(braceRe instanceof RegExp)) {
    braceRe = braceRegex();
  }

  var match = braceRe.exec(str);
  if (match == null) {
    return [str];
  }

  var outter = match[1];
  var inner = match[2];
  if (inner === '') { return [str]; }

  var segs, segsLength;

  if (inner.indexOf('..') !== -1) {
    segs = expand(inner, opts, fn) || inner.split(',');
    segsLength = segs.length;

  } else if (inner[0] === '"' || inner[0] === '\'') {
    return arr.concat(str.split(/['"]/).join(''));

  } else {
    segs = inner.split(',');
    if (opts.makeRe) {
      return braces(str.replace(outter, wrap(segs, '|')), opts);
    }

    segsLength = segs.length;
    if (segsLength === 1 && opts.bash) {
      segs[0] = wrap(segs[0], '\\');
    }
  }

  var len = segs.length;
  var i = 0, val;

  while (len--) {
    var path = segs[i++];

    if (/(\.[^.\/])/.test(path)) {
      if (segsLength > 1) {
        return segs;
      } else {
        return [str];
      }
    }

    val = splice(str, outter, path);

    if (/\{[^{}]+?\}/.test(val)) {
      arr = braces(val, arr, opts);
    } else if (val !== '') {
      if (opts.nodupes && arr.indexOf(val) !== -1) { continue; }
      arr.push(es6 ? tokens.after(val) : val);
    }
  }

  if (opts.strict) { return filter(arr, filterEmpty); }
  return arr;
}

/**
 * Expand exponential ranges
 *
 *   `a{,}{,}` => ['a', 'a', 'a', 'a']
 */

function exponential(str, options, fn) {
  if (typeof options === 'function') {
    fn = options;
    options = null;
  }

  var opts = options || {};
  var esc = '__ESC_EXP__';
  var exp = 0;
  var res;

  var parts = str.split('{,}');
  if (opts.nodupes) {
    return fn(parts.join(''), opts);
  }

  exp = parts.length - 1;
  res = fn(parts.join(esc), opts);
  var len = res.length;
  var arr = [];
  var i = 0;

  while (len--) {
    var ele = res[i++];
    var idx = ele.indexOf(esc);

    if (idx === -1) {
      arr.push(ele);

    } else {
      ele = ele.split('__ESC_EXP__').join('');
      if (!!ele && opts.nodupes !== false) {
        arr.push(ele);

      } else {
        var num = Math.pow(2, exp);
        arr.push.apply(arr, repeat(ele, num));
      }
    }
  }
  return arr;
}

/**
 * Wrap a value with parens, brackets or braces,
 * based on the given character/separator.
 *
 * @param  {String|Array} `val`
 * @param  {String} `ch`
 * @return {String}
 */

function wrap(val, ch) {
  if (ch === '|') {
    return '(' + val.join(ch) + ')';
  }
  if (ch === ',') {
    return '{' + val.join(ch) + '}';
  }
  if (ch === '-') {
    return '[' + val.join(ch) + ']';
  }
  if (ch === '\\') {
    return '\\{' + val + '\\}';
  }
}

/**
 * Handle empty braces: `{}`
 */

function emptyBraces(str, arr, opts) {
  return braces(str.split('{}').join('\\{\\}'), arr, opts);
}

/**
 * Filter out empty-ish values
 */

function filterEmpty(ele) {
  return !!ele && ele !== '\\';
}

/**
 * Handle patterns with whitespace
 */

function splitWhitespace(str) {
  var segs = str.split(' ');
  var len = segs.length;
  var res = [];
  var i = 0;

  while (len--) {
    res.push.apply(res, braces(segs[i++]));
  }
  return res;
}

/**
 * Handle escaped braces: `\\{foo,bar}`
 */

function escapeBraces(str, arr, opts) {
  if (!/\{[^{]+\{/.test(str)) {
    return arr.concat(str.split('\\').join(''));
  } else {
    str = str.split('\\{').join('__LT_BRACE__');
    str = str.split('\\}').join('__RT_BRACE__');
    return map(braces(str, arr, opts), function(ele) {
      ele = ele.split('__LT_BRACE__').join('{');
      return ele.split('__RT_BRACE__').join('}');
    });
  }
}

/**
 * Handle escaped dots: `{1\\.2}`
 */

function escapeDots(str, arr, opts) {
  if (!/[^\\]\..+\\\./.test(str)) {
    return arr.concat(str.split('\\').join(''));
  } else {
    str = str.split('\\.').join('__ESC_DOT__');
    return map(braces(str, arr, opts), function(ele) {
      return ele.split('__ESC_DOT__').join('.');
    });
  }
}

/**
 * Handle escaped dots: `{1\\.2}`
 */

function escapePaths(str, arr, opts) {
  str = str.split('\/.').join('__ESC_PATH__');
  return map(braces(str, arr, opts), function(ele) {
    return ele.split('__ESC_PATH__').join('\/.');
  });
}

/**
 * Handle escaped commas: `{a\\,b}`
 */

function escapeCommas(str, arr, opts) {
  if (!/\w,/.test(str)) {
    return arr.concat(str.split('\\').join(''));
  } else {
    str = str.split('\\,').join('__ESC_COMMA__');
    return map(braces(str, arr, opts), function(ele) {
      return ele.split('__ESC_COMMA__').join(',');
    });
  }
}

/**
 * Regex for common patterns
 */

function patternRegex() {
  return /\${|( (?=[{,}])|(?=[{,}]) )|{}|{,}|\\,(?=.*[{}])|\/\.(?=.*[{}])|\\\.(?={)|\\{|\\}/;
}

/**
 * Braces regex.
 */

function braceRegex() {
  return /.*(\\?\{([^}]+)\})/;
}

/**
 * es6 delimiter regex.
 */

function es6Regex() {
  return /\$\{([^}]+)\}/;
}

var braceRe;
var patternRe;

/**
 * Faster alternative to `String.replace()` when the
 * index of the token to be replaces can't be supplied
 */

function splice(str, token, replacement) {
  var i = str.indexOf(token);
  return str.substr(0, i) + replacement
    + str.substr(i + token.length);
}

/**
 * Fast array map
 */

function map(arr, fn) {
  if (arr == null) {
    return [];
  }

  var len = arr.length;
  var res = new Array(len);
  var i = -1;

  while (++i < len) {
    res[i] = fn(arr[i], i, arr);
  }

  return res;
}

/**
 * Fast array filter
 */

function filter(arr, cb) {
  if (arr == null) return [];
  if (typeof cb !== 'function') {
    throw new TypeError('braces: filter expects a callback function.');
  }

  var len = arr.length;
  var res = arr.slice();
  var i = 0;

  while (len--) {
    if (!cb(arr[len], i++)) {
      res.splice(len, 1);
    }
  }
  return res;
}
