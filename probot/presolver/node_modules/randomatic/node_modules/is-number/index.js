/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function isNumber(num) {
  var type = typeof num;

  if (type === 'string' || num instanceof String) {
    // an empty string would be coerced to true with the below logic
    if (!num.trim()) return false;
  } else if (type !== 'number' && !(num instanceof Number)) {
    return false;
  }

  return (num - num + 1) >= 0;
};
