'use strict';

var utils = module.exports;
var path = require('path');

/**
 * Module dependencies
 */

var Snapdragon = require('snapdragon');
utils.define = require('define-property');
utils.diff = require('arr-diff');
utils.extend = require('extend-shallow');
utils.pick = require('object.pick');
utils.typeOf = require('kind-of');
utils.unique = require('array-unique');

/**
 * Returns true if the platform is windows, or `path.sep` is `\\`.
 * This is defined as a function to allow `path.sep` to be set in unit tests,
 * or by the user, if there is a reason to do so.
 * @return {Boolean}
 */

utils.isWindows = function() {
  return path.sep === '\\' || process.platform === 'win32';
};

/**
 * Get the `Snapdragon` instance to use
 */

utils.instantiate = function(ast, options) {
  var snapdragon;
  // if an instance was created by `.parse`, use that instance
  if (utils.typeOf(ast) === 'object' && ast.snapdragon) {
    snapdragon = ast.snapdragon;
  // if the user supplies an instance on options, use that instance
  } else if (utils.typeOf(options) === 'object' && options.snapdragon) {
    snapdragon = options.snapdragon;
  // create a new instance
  } else {
    snapdragon = new Snapdragon(options);
  }

  utils.define(snapdragon, 'parse', function(str, options) {
    var parsed = Snapdragon.prototype.parse.apply(this, arguments);
    parsed.input = str;

    // escape unmatched brace/bracket/parens
    var last = this.parser.stack.pop();
    if (last && this.options.strictErrors !== true) {
      var open = last.nodes[0];
      var inner = last.nodes[1];
      if (last.type === 'bracket') {
        if (inner.val.charAt(0) === '[') {
          inner.val = '\\' + inner.val;
        }

      } else {
        open.val = '\\' + open.val;
        var sibling = open.parent.nodes[1];
        if (sibling.type === 'star') {
          sibling.loose = true;
        }
      }
    }

    // add non-enumerable parser reference
    utils.define(parsed, 'parser', this.parser);
    return parsed;
  });

  return snapdragon;
};

/**
 * Create the key to use for memoization. The key is generated
 * by iterating over the options and concatenating key-value pairs
 * to the pattern string.
 */

utils.createKey = function(pattern, options) {
  if (utils.typeOf(options) !== 'object') {
    return pattern;
  }
  var val = pattern;
  var keys = Object.keys(options);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    val += ';' + key + '=' + String(options[key]);
  }
  return val;
};

/**
 * Cast `val` to an array
 * @return {Array}
 */

utils.arrayify = function(val) {
  if (typeof val === 'string') return [val];
  return val ? (Array.isArray(val) ? val : [val]) : [];
};

/**
 * Return true if `val` is a non-empty string
 */

utils.isString = function(val) {
  return typeof val === 'string';
};

/**
 * Return true if `val` is a non-empty string
 */

utils.isObject = function(val) {
  return utils.typeOf(val) === 'object';
};

/**
 * Returns true if the given `str` has special characters
 */

utils.hasSpecialChars = function(str) {
  return /(?:(?:(^|\/)[!.])|[*?+()|\[\]{}]|[+@]\()/.test(str);
};

/**
 * Escape regex characters in the given string
 */

utils.escapeRegex = function(str) {
  return str.replace(/[-[\]{}()^$|*+?.\\\/\s]/g, '\\$&');
};

/**
 * Normalize slashes in the given filepath.
 *
 * @param {String} `filepath`
 * @return {String}
 */

utils.toPosixPath = function(str) {
  return str.replace(/\\+/g, '/');
};

/**
 * Strip backslashes before special characters in a string.
 *
 * @param {String} `str`
 * @return {String}
 */

utils.unescape = function(str) {
  return utils.toPosixPath(str.replace(/\\(?=[*+?!.])/g, ''));
};

/**
 * Strip the prefix from a filepath
 * @param {String} `fp`
 * @return {String}
 */

utils.stripPrefix = function(str) {
  if (str.charAt(0) !== '.') {
    return str;
  }
  var ch = str.charAt(1);
  if (utils.isSlash(ch)) {
    return str.slice(2);
  }
  return str;
};

/**
 * Returns true if the given str is an escaped or
 * unescaped path character
 */

utils.isSlash = function(str) {
  return str === '/' || str === '\\/' || str === '\\' || str === '\\\\';
};

/**
 * Returns a function that returns true if the given
 * pattern matches or contains a `filepath`
 *
 * @param {String} `pattern`
 * @return {Function}
 */

utils.matchPath = function(pattern, options) {
  return (options && options.contains)
    ? utils.containsPattern(pattern, options)
    : utils.equalsPattern(pattern, options);
};

/**
 * Returns true if the given (original) filepath or unixified path are equal
 * to the given pattern.
 */

utils._equals = function(filepath, unixPath, pattern) {
  return pattern === filepath || pattern === unixPath;
};

/**
 * Returns true if the given (original) filepath or unixified path contain
 * the given pattern.
 */

utils._contains = function(filepath, unixPath, pattern) {
  return filepath.indexOf(pattern) !== -1 || unixPath.indexOf(pattern) !== -1;
};

/**
 * Returns a function that returns true if the given
 * pattern is the same as a given `filepath`
 *
 * @param {String} `pattern`
 * @return {Function}
 */

utils.equalsPattern = function(pattern, options) {
  var unixify = utils.unixify(options);
  options = options || {};

  return function fn(filepath) {
    var equal = utils._equals(filepath, unixify(filepath), pattern);
    if (equal === true || options.nocase !== true) {
      return equal;
    }
    var lower = filepath.toLowerCase();
    return utils._equals(lower, unixify(lower), pattern);
  };
};

/**
 * Returns a function that returns true if the given
 * pattern contains a `filepath`
 *
 * @param {String} `pattern`
 * @return {Function}
 */

utils.containsPattern = function(pattern, options) {
  var unixify = utils.unixify(options);
  options = options || {};

  return function(filepath) {
    var contains = utils._contains(filepath, unixify(filepath), pattern);
    if (contains === true || options.nocase !== true) {
      return contains;
    }
    var lower = filepath.toLowerCase();
    return utils._contains(lower, unixify(lower), pattern);
  };
};

/**
 * Returns a function that returns true if the given
 * regex matches the `filename` of a file path.
 *
 * @param {RegExp} `re` Matching regex
 * @return {Function}
 */

utils.matchBasename = function(re) {
  return function(filepath) {
    return re.test(path.basename(filepath));
  };
};

/**
 * Determines the filepath to return based on the provided options.
 * @return {any}
 */

utils.value = function(str, unixify, options) {
  if (options && options.unixify === false) {
    return str;
  }
  return unixify(str);
};

/**
 * Returns a function that normalizes slashes in a string to forward
 * slashes, strips `./` from beginning of paths, and optionally unescapes
 * special characters.
 * @return {Function}
 */

utils.unixify = function(options) {
  options = options || {};
  return function(filepath) {
    if (utils.isWindows() || options.unixify === true) {
      filepath = utils.toPosixPath(filepath);
    }
    if (options.stripPrefix !== false) {
      filepath = utils.stripPrefix(filepath);
    }
    if (options.unescape === true) {
      filepath = utils.unescape(filepath);
    }
    return filepath;
  };
};
