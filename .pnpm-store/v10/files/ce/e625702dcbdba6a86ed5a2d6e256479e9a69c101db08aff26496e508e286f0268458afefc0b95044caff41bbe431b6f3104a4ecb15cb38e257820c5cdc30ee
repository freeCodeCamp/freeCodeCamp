/*!
 * path-root <https://github.com/jonschlinkert/path-root>
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var pathRootRegex = require('path-root-regex');

module.exports = function(filepath) {
  if (typeof filepath !== 'string') {
    throw new TypeError('expected a string');
  }

  var match = pathRootRegex().exec(filepath);
  if (match) {
    return match[0];
  }
};
