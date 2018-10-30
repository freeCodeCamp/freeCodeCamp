'use strict';

var path = require('path');

function containsPath(fp, segment) {
  if (typeof fp !== 'string' || typeof segment !== 'string') {
    throw new TypeError('contains-path expects file paths to be a string.');
  }

  var prefix = '(^|\\/)';
  if (segment.indexOf('./') === 0 || segment.charAt(0) === '/') {
    prefix = '^';
  }

  var re = new RegExp(prefix + normalize(segment).join('\\/') + '($|\\/)');
  fp = normalize(fp).join('/');
  return re.test(fp);
}

/**
 * Normalize slashes
 */

function normalize(str) {
  str = path.normalize(str);
  return str.split(/[\\\/]+/);
}

/**
 * Expose `containsPath`
 */

module.exports = containsPath;
