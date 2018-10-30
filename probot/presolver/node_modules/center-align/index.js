/*!
 * center-align <https://github.com/jonschlinkert/center-align>
 *
 * Copycenter (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var utils = require('./utils');

module.exports = function centerAlign(val) {
  return utils.align(val, function (len, longest) {
    return Math.floor((longest - len) / 2);
  });
};
