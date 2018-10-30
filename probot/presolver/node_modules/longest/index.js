/*!
 * longest <https://github.com/jonschlinkert/longest>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function(arr) {
  if (!arr) {
    return null;
  }

  var len = arr.length;
  if (!len) {
    return null;
  }

  var c = 0;
  var i = 0;
  var ele;
  var elen;
  var res;

  for (; i < len; i++) {
    ele = arr[i].toString();
    elen = ele.length;

    if (elen > c) {
      res = ele;
      c = elen;
    }
  }

  return res;
};
