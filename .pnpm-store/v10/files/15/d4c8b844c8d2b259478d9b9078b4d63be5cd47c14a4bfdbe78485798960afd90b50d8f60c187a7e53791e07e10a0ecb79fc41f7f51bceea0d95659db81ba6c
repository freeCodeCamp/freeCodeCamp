/**
 * Expose `pathToRegexp`.
 */

module.exports = pathToRegexp;

/**
 * Match matching groups in a regular expression.
 */
var MATCHING_GROUP_REGEXP = /\\.|\((?:\?<(.*?)>)?(?!\?)/g;

/**
 * Normalize the given path string,
 * returning a regular expression.
 *
 * An empty array should be passed,
 * which will contain the placeholder
 * key names. For example "/user/:id" will
 * then contain ["id"].
 *
 * @param  {String|RegExp|Array} path
 * @param  {Array} keys
 * @param  {Object} options
 * @return {RegExp}
 * @api private
 */

function pathToRegexp(path, keys, options) {
  options = options || {};
  keys = keys || [];
  var strict = options.strict;
  var end = options.end !== false;
  var flags = options.sensitive ? '' : 'i';
  var lookahead = options.lookahead !== false;
  var extraOffset = 0;
  var keysOffset = keys.length;
  var i = 0;
  var name = 0;
  var pos = 0;
  var backtrack = '';
  var m;

  if (path instanceof RegExp) {
    while (m = MATCHING_GROUP_REGEXP.exec(path.source)) {
      if (m[0][0] === '\\') continue;

      keys.push({
        name: m[1] || name++,
        optional: false,
        offset: m.index
      });
    }

    return path;
  }

  if (Array.isArray(path)) {
    // Map array parts into regexps and return their source. We also pass
    // the same keys and options instance into every generation to get
    // consistent matching groups before we join the sources together.
    path = path.map(function (value) {
      return pathToRegexp(value, keys, options).source;
    });

    return new RegExp(path.join('|'), flags);
  }

  if (typeof path !== 'string') {
    throw new TypeError('path must be a string, array of strings, or regular expression');
  }

  path = path.replace(
    /\\.|(\/)?(\.)?:(\w+)(\(.*?\))?(\*)?(\?)?|[.*]|\/\(/g,
    function (match, slash, format, key, capture, star, optional, offset) {
      if (match[0] === '\\') {
        backtrack += match;
        pos += 2;
        return match;
      }

      if (match === '.') {
        backtrack += '\\.';
        extraOffset += 1;
        pos += 1;
        return '\\.';
      }

      if (slash || format) {
        backtrack = '';
      } else {
        backtrack += path.slice(pos, offset);
      }

      pos = offset + match.length;

      if (match === '*') {
        extraOffset += 3;
        return '(.*)';
      }

      if (match === '/(') {
        backtrack += '/';
        extraOffset += 2;
        return '/(?:';
      }

      slash = slash || '';
      format = format ? '\\.' : '';
      optional = optional || '';
      capture = capture ?
        capture.replace(/\\.|\*/, function (m) { return m === '*' ? '(.*)' : m; }) :
        (backtrack ? '((?:(?!/|' + backtrack + ').)+?)' : '([^/' + format + ']+?)');

      keys.push({
        name: key,
        optional: !!optional,
        offset: offset + extraOffset
      });

      var result = '(?:'
        + format + slash + capture
        + (star ? '((?:[/' + format + '].+?)?)' : '')
        + ')'
        + optional;

      extraOffset += result.length - match.length;

      return result;
    });

  // This is a workaround for handling unnamed matching groups.
  while (m = MATCHING_GROUP_REGEXP.exec(path)) {
    if (m[0][0] === '\\') continue;

    if (keysOffset + i === keys.length || keys[keysOffset + i].offset > m.index) {
      keys.splice(keysOffset + i, 0, {
        name: name++, // Unnamed matching groups must be consistently linear.
        optional: false,
        offset: m.index
      });
    }

    i++;
  }

  path += strict ? '' : path[path.length - 1] === '/' ? '?' : '/?';

  // If the path is non-ending, match until the end or a slash.
  if (end) {
    path += '$';
  } else if (path[path.length - 1] !== '/') {
    path += lookahead ? '(?=/|$)' : '(?:/|$)';
  }

  return new RegExp('^' + path, flags);
};
