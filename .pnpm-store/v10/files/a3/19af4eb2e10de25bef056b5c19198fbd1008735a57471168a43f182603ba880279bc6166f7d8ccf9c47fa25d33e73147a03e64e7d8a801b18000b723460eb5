/*!
 * is-invalid-path <https://github.com/jonschlinkert/is-invalid-path>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isGlob = require('is-glob');
var re = /[‘“!#$%&+^<=>`]/;

module.exports = function (str) {
  return (typeof str !== 'string') || isGlob(str) || re.test(str);
};
