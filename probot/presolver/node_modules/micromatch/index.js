/*!
 * micromatch <https://github.com/jonschlinkert/micromatch>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var expand = require('./lib/expand');
var utils = require('./lib/utils');

/**
 * The main function. Pass an array of filepaths,
 * and a string or array of glob patterns
 *
 * @param  {Array|String} `files`
 * @param  {Array|String} `patterns`
 * @param  {Object} `opts`
 * @return {Array} Array of matches
 */

function micromatch(files, patterns, opts) {
  if (!files || !patterns) return [];
  opts = opts || {};

  if (typeof opts.cache === 'undefined') {
    opts.cache = true;
  }

  if (!Array.isArray(patterns)) {
    return match(files, patterns, opts);
  }

  var len = patterns.length, i = 0;
  var omit = [], keep = [];

  while (len--) {
    var glob = patterns[i++];
    if (typeof glob === 'string' && glob.charCodeAt(0) === 33 /* ! */) {
      omit.push.apply(omit, match(files, glob.slice(1), opts));
    } else {
      keep.push.apply(keep, match(files, glob, opts));
    }
  }
  return utils.diff(keep, omit);
}

/**
 * Return an array of files that match the given glob pattern.
 *
 * This function is called by the main `micromatch` function If you only
 * need to pass a single pattern you might get very minor speed improvements
 * using this function.
 *
 * @param  {Array} `files`
 * @param  {String} `pattern`
 * @param  {Object} `options`
 * @return {Array}
 */

function match(files, pattern, opts) {
  if (utils.typeOf(files) !== 'string' && !Array.isArray(files)) {
    throw new Error(msg('match', 'files', 'a string or array'));
  }

  files = utils.arrayify(files);
  opts = opts || {};

  var negate = opts.negate || false;
  var orig = pattern;

  if (typeof pattern === 'string') {
    negate = pattern.charAt(0) === '!';
    if (negate) {
      pattern = pattern.slice(1);
    }

    // we need to remove the character regardless,
    // so the above logic is still needed
    if (opts.nonegate === true) {
      negate = false;
    }
  }

  var _isMatch = matcher(pattern, opts);
  var len = files.length, i = 0;
  var res = [];

  while (i < len) {
    var file = files[i++];
    var fp = utils.unixify(file, opts);

    if (!_isMatch(fp)) { continue; }
    res.push(fp);
  }

  if (res.length === 0) {
    if (opts.failglob === true) {
      throw new Error('micromatch.match() found no matches for: "' + orig + '".');
    }

    if (opts.nonull || opts.nullglob) {
      res.push(utils.unescapeGlob(orig));
    }
  }

  // if `negate` was defined, diff negated files
  if (negate) { res = utils.diff(files, res); }

  // if `ignore` was defined, diff ignored filed
  if (opts.ignore && opts.ignore.length) {
    pattern = opts.ignore;
    opts = utils.omit(opts, ['ignore']);
    res = utils.diff(res, micromatch(res, pattern, opts));
  }

  if (opts.nodupes) {
    return utils.unique(res);
  }
  return res;
}

/**
 * Returns a function that takes a glob pattern or array of glob patterns
 * to be used with `Array#filter()`. (Internally this function generates
 * the matching function using the [matcher] method).
 *
 * ```js
 * var fn = mm.filter('[a-c]');
 * ['a', 'b', 'c', 'd', 'e'].filter(fn);
 * //=> ['a', 'b', 'c']
 * ```
 * @param  {String|Array} `patterns` Can be a glob or array of globs.
 * @param  {Options} `opts` Options to pass to the [matcher] method.
 * @return {Function} Filter function to be passed to `Array#filter()`.
 */

function filter(patterns, opts) {
  if (!Array.isArray(patterns) && typeof patterns !== 'string') {
    throw new TypeError(msg('filter', 'patterns', 'a string or array'));
  }

  patterns = utils.arrayify(patterns);
  var len = patterns.length, i = 0;
  var patternMatchers = Array(len);
  while (i < len) {
    patternMatchers[i] = matcher(patterns[i++], opts);
  }

  return function(fp) {
    if (fp == null) return [];
    var len = patternMatchers.length, i = 0;
    var res = true;

    fp = utils.unixify(fp, opts);
    while (i < len) {
      var fn = patternMatchers[i++];
      if (!fn(fp)) {
        res = false;
        break;
      }
    }
    return res;
  };
}

/**
 * Returns true if the filepath contains the given
 * pattern. Can also return a function for matching.
 *
 * ```js
 * isMatch('foo.md', '*.md', {});
 * //=> true
 *
 * isMatch('*.md', {})('foo.md')
 * //=> true
 * ```
 * @param  {String} `fp`
 * @param  {String} `pattern`
 * @param  {Object} `opts`
 * @return {Boolean}
 */

function isMatch(fp, pattern, opts) {
  if (typeof fp !== 'string') {
    throw new TypeError(msg('isMatch', 'filepath', 'a string'));
  }

  fp = utils.unixify(fp, opts);
  if (utils.typeOf(pattern) === 'object') {
    return matcher(fp, pattern);
  }
  return matcher(pattern, opts)(fp);
}

/**
 * Returns true if the filepath matches the
 * given pattern.
 */

function contains(fp, pattern, opts) {
  if (typeof fp !== 'string') {
    throw new TypeError(msg('contains', 'pattern', 'a string'));
  }

  opts = opts || {};
  opts.contains = (pattern !== '');
  fp = utils.unixify(fp, opts);

  if (opts.contains && !utils.isGlob(pattern)) {
    return fp.indexOf(pattern) !== -1;
  }
  return matcher(pattern, opts)(fp);
}

/**
 * Returns true if a file path matches any of the
 * given patterns.
 *
 * @param  {String} `fp` The filepath to test.
 * @param  {String|Array} `patterns` Glob patterns to use.
 * @param  {Object} `opts` Options to pass to the `matcher()` function.
 * @return {String}
 */

function any(fp, patterns, opts) {
  if (!Array.isArray(patterns) && typeof patterns !== 'string') {
    throw new TypeError(msg('any', 'patterns', 'a string or array'));
  }

  patterns = utils.arrayify(patterns);
  var len = patterns.length;

  fp = utils.unixify(fp, opts);
  while (len--) {
    var isMatch = matcher(patterns[len], opts);
    if (isMatch(fp)) {
      return true;
    }
  }
  return false;
}

/**
 * Filter the keys of an object with the given `glob` pattern
 * and `options`
 *
 * @param  {Object} `object`
 * @param  {Pattern} `object`
 * @return {Array}
 */

function matchKeys(obj, glob, options) {
  if (utils.typeOf(obj) !== 'object') {
    throw new TypeError(msg('matchKeys', 'first argument', 'an object'));
  }

  var fn = matcher(glob, options);
  var res = {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key) && fn(key)) {
      res[key] = obj[key];
    }
  }
  return res;
}

/**
 * Return a function for matching based on the
 * given `pattern` and `options`.
 *
 * @param  {String} `pattern`
 * @param  {Object} `options`
 * @return {Function}
 */

function matcher(pattern, opts) {
  // pattern is a function
  if (typeof pattern === 'function') {
    return pattern;
  }
  // pattern is a regex
  if (pattern instanceof RegExp) {
    return function(fp) {
      return pattern.test(fp);
    };
  }

  if (typeof pattern !== 'string') {
    throw new TypeError(msg('matcher', 'pattern', 'a string, regex, or function'));
  }

  // strings, all the way down...
  pattern = utils.unixify(pattern, opts);

  // pattern is a non-glob string
  if (!utils.isGlob(pattern)) {
    return utils.matchPath(pattern, opts);
  }
  // pattern is a glob string
  var re = makeRe(pattern, opts);

  // `matchBase` is defined
  if (opts && opts.matchBase) {
    return utils.hasFilename(re, opts);
  }
  // `matchBase` is not defined
  return function(fp) {
    fp = utils.unixify(fp, opts);
    return re.test(fp);
  };
}

/**
 * Create and cache a regular expression for matching
 * file paths.
 *
 * If the leading character in the `glob` is `!`, a negation
 * regex is returned.
 *
 * @param  {String} `glob`
 * @param  {Object} `options`
 * @return {RegExp}
 */

function toRegex(glob, options) {
  // clone options to prevent  mutating the original object
  var opts = Object.create(options || {});
  var flags = opts.flags || '';
  if (opts.nocase && flags.indexOf('i') === -1) {
    flags += 'i';
  }

  var parsed = expand(glob, opts);

  // pass in tokens to avoid parsing more than once
  opts.negated = opts.negated || parsed.negated;
  opts.negate = opts.negated;
  glob = wrapGlob(parsed.pattern, opts);
  var re;

  try {
    re = new RegExp(glob, flags);
    return re;
  } catch (err) {
    err.reason = 'micromatch invalid regex: (' + re + ')';
    if (opts.strict) throw new SyntaxError(err);
  }

  // we're only here if a bad pattern was used and the user
  // passed `options.silent`, so match nothing
  return /$^/;
}

/**
 * Create the regex to do the matching. If the leading
 * character in the `glob` is `!` a negation regex is returned.
 *
 * @param {String} `glob`
 * @param {Boolean} `negate`
 */

function wrapGlob(glob, opts) {
  var prefix = (opts && !opts.contains) ? '^' : '';
  var after = (opts && !opts.contains) ? '$' : '';
  glob = ('(?:' + glob + ')' + after);
  if (opts && opts.negate) {
    return prefix + ('(?!^' + glob + ').*$');
  }
  return prefix + glob;
}

/**
 * Create and cache a regular expression for matching file paths.
 * If the leading character in the `glob` is `!`, a negation
 * regex is returned.
 *
 * @param  {String} `glob`
 * @param  {Object} `options`
 * @return {RegExp}
 */

function makeRe(glob, opts) {
  if (utils.typeOf(glob) !== 'string') {
    throw new Error(msg('makeRe', 'glob', 'a string'));
  }
  return utils.cache(toRegex, glob, opts);
}

/**
 * Make error messages consistent. Follows this format:
 *
 * ```js
 * msg(methodName, argNumber, nativeType);
 * // example:
 * msg('matchKeys', 'first', 'an object');
 * ```
 *
 * @param  {String} `method`
 * @param  {String} `num`
 * @param  {String} `type`
 * @return {String}
 */

function msg(method, what, type) {
  return 'micromatch.' + method + '(): ' + what + ' should be ' + type + '.';
}

/**
 * Public methods
 */

/* eslint no-multi-spaces: 0 */
micromatch.any       = any;
micromatch.braces    = micromatch.braceExpand = utils.braces;
micromatch.contains  = contains;
micromatch.expand    = expand;
micromatch.filter    = filter;
micromatch.isMatch   = isMatch;
micromatch.makeRe    = makeRe;
micromatch.match     = match;
micromatch.matcher   = matcher;
micromatch.matchKeys = matchKeys;

/**
 * Expose `micromatch`
 */

module.exports = micromatch;
