'use strict';

/**
 * Module dependencies
 */

var extend = require('extend-shallow');
var unique = require('array-unique');
var toRegex = require('to-regex');

/**
 * Local dependencies
 */

var compilers = require('./lib/compilers');
var parsers = require('./lib/parsers');
var Extglob = require('./lib/extglob');
var utils = require('./lib/utils');
var MAX_LENGTH = 1024 * 64;

/**
 * Convert the given `extglob` pattern into a regex-compatible string. Returns
 * an object with the compiled result and the parsed AST.
 *
 * ```js
 * var extglob = require('extglob');
 * console.log(extglob('*.!(*a)'));
 * //=> '(?!\\.)[^/]*?\\.(?!(?!\\.)[^/]*?a\\b).*?'
 * ```
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

function extglob(pattern, options) {
  return extglob.create(pattern, options).output;
}

/**
 * Takes an array of strings and an extglob pattern and returns a new
 * array that contains only the strings that match the pattern.
 *
 * ```js
 * var extglob = require('extglob');
 * console.log(extglob.match(['a.a', 'a.b', 'a.c'], '*.!(*a)'));
 * //=> ['a.b', 'a.c']
 * ```
 * @param {Array} `list` Array of strings to match
 * @param {String} `pattern` Extglob pattern
 * @param {Object} `options`
 * @return {Array} Returns an array of matches
 * @api public
 */

extglob.match = function(list, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('expected pattern to be a string');
  }

  list = utils.arrayify(list);
  var isMatch = extglob.matcher(pattern, options);
  var len = list.length;
  var idx = -1;
  var matches = [];

  while (++idx < len) {
    var ele = list[idx];

    if (isMatch(ele)) {
      matches.push(ele);
    }
  }

  // if no options were passed, uniquify results and return
  if (typeof options === 'undefined') {
    return unique(matches);
  }

  if (matches.length === 0) {
    if (options.failglob === true) {
      throw new Error('no matches found for "' + pattern + '"');
    }
    if (options.nonull === true || options.nullglob === true) {
      return [pattern.split('\\').join('')];
    }
  }

  return options.nodupes !== false ? unique(matches) : matches;
};

/**
 * Returns true if the specified `string` matches the given
 * extglob `pattern`.
 *
 * ```js
 * var extglob = require('extglob');
 *
 * console.log(extglob.isMatch('a.a', '*.!(*a)'));
 * //=> false
 * console.log(extglob.isMatch('a.b', '*.!(*a)'));
 * //=> true
 * ```
 * @param {String} `string` String to match
 * @param {String} `pattern` Extglob pattern
 * @param {String} `options`
 * @return {Boolean}
 * @api public
 */

extglob.isMatch = function(str, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('expected pattern to be a string');
  }

  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  if (pattern === str) {
    return true;
  }

  if (pattern === '' || pattern === ' ' || pattern === '.') {
    return pattern === str;
  }

  var isMatch = utils.memoize('isMatch', pattern, options, extglob.matcher);
  return isMatch(str);
};

/**
 * Returns true if the given `string` contains the given pattern. Similar to `.isMatch` but
 * the pattern can match any part of the string.
 *
 * ```js
 * var extglob = require('extglob');
 * console.log(extglob.contains('aa/bb/cc', '*b'));
 * //=> true
 * console.log(extglob.contains('aa/bb/cc', '*d'));
 * //=> false
 * ```
 * @param {String} `str` The string to match.
 * @param {String} `pattern` Glob pattern to use for matching.
 * @param {Object} `options`
 * @return {Boolean} Returns true if the patter matches any part of `str`.
 * @api public
 */

extglob.contains = function(str, pattern, options) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  if (pattern === '' || pattern === ' ' || pattern === '.') {
    return pattern === str;
  }

  var opts = extend({}, options, {contains: true});
  opts.strictClose = false;
  opts.strictOpen = false;
  return extglob.isMatch(str, pattern, opts);
};

/**
 * Takes an extglob pattern and returns a matcher function. The returned
 * function takes the string to match as its only argument.
 *
 * ```js
 * var extglob = require('extglob');
 * var isMatch = extglob.matcher('*.!(*a)');
 *
 * console.log(isMatch('a.a'));
 * //=> false
 * console.log(isMatch('a.b'));
 * //=> true
 * ```
 * @param {String} `pattern` Extglob pattern
 * @param {String} `options`
 * @return {Boolean}
 * @api public
 */

extglob.matcher = function(pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('expected pattern to be a string');
  }

  function matcher() {
    var re = extglob.makeRe(pattern, options);
    return function(str) {
      return re.test(str);
    };
  }

  return utils.memoize('matcher', pattern, options, matcher);
};

/**
 * Convert the given `extglob` pattern into a regex-compatible string. Returns
 * an object with the compiled result and the parsed AST.
 *
 * ```js
 * var extglob = require('extglob');
 * console.log(extglob.create('*.!(*a)').output);
 * //=> '(?!\\.)[^/]*?\\.(?!(?!\\.)[^/]*?a\\b).*?'
 * ```
 * @param {String} `str`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

extglob.create = function(pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('expected pattern to be a string');
  }

  function create() {
    var ext = new Extglob(options);
    var ast = ext.parse(pattern, options);
    return ext.compile(ast, options);
  }

  return utils.memoize('create', pattern, options, create);
};

/**
 * Returns an array of matches captured by `pattern` in `string`, or `null`
 * if the pattern did not match.
 *
 * ```js
 * var extglob = require('extglob');
 * extglob.capture(pattern, string[, options]);
 *
 * console.log(extglob.capture('test/*.js', 'test/foo.js'));
 * //=> ['foo']
 * console.log(extglob.capture('test/*.js', 'foo/bar.css'));
 * //=> null
 * ```
 * @param {String} `pattern` Glob pattern to use for matching.
 * @param {String} `string` String to match
 * @param {Object} `options` See available [options](#options) for changing how matches are performed
 * @return {Boolean} Returns an array of captures if the string matches the glob pattern, otherwise `null`.
 * @api public
 */

extglob.capture = function(pattern, str, options) {
  var re = extglob.makeRe(pattern, extend({capture: true}, options));

  function match() {
    return function(string) {
      var match = re.exec(string);
      if (!match) {
        return null;
      }

      return match.slice(1);
    };
  }

  var capture = utils.memoize('capture', pattern, options, match);
  return capture(str);
};

/**
 * Create a regular expression from the given `pattern` and `options`.
 *
 * ```js
 * var extglob = require('extglob');
 * var re = extglob.makeRe('*.!(*a)');
 * console.log(re);
 * //=> /^[^\/]*?\.(?![^\/]*?a)[^\/]*?$/
 * ```
 * @param {String} `pattern` The pattern to convert to regex.
 * @param {Object} `options`
 * @return {RegExp}
 * @api public
 */

extglob.makeRe = function(pattern, options) {
  if (pattern instanceof RegExp) {
    return pattern;
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('expected pattern to be a string');
  }

  if (pattern.length > MAX_LENGTH) {
    throw new Error('expected pattern to be less than ' + MAX_LENGTH + ' characters');
  }

  function makeRe() {
    var opts = extend({strictErrors: false}, options);
    if (opts.strictErrors === true) opts.strict = true;
    var res = extglob.create(pattern, opts);
    return toRegex(res.output, opts);
  }

  var regex = utils.memoize('makeRe', pattern, options, makeRe);
  if (regex.source.length > MAX_LENGTH) {
    throw new SyntaxError('potentially malicious regex detected');
  }

  return regex;
};

/**
 * Cache
 */

extglob.cache = utils.cache;
extglob.clearCache = function() {
  extglob.cache.__data__ = {};
};

/**
 * Expose `Extglob` constructor, parsers and compilers
 */

extglob.Extglob = Extglob;
extglob.compilers = compilers;
extglob.parsers = parsers;

/**
 * Expose `extglob`
 * @type {Function}
 */

module.exports = extglob;
