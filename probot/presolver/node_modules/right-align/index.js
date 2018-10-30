/*!
 * right-align <https://github.com/jonschlinkert/right-align>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var align = require('align-text');

module.exports = function rightAlign(val) {
  return align(val, function (len, longest) {
    return longest - len;
  });
};
