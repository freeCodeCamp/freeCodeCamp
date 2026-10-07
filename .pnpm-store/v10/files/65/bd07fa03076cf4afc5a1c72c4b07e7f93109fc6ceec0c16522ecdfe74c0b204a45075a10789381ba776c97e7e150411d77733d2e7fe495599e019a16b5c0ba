/*!
 * unixify <https://github.com/jonschlinkert/unixify>
 *
 * Copyright (c) 2014, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var normalizePath = require('normalize-path');

module.exports = function unixify(filepath, stripTrailing) {
  filepath = normalizePath(filepath, stripTrailing);
  return filepath.replace(/^([a-zA-Z]+:|\.\/)/, '');
};
