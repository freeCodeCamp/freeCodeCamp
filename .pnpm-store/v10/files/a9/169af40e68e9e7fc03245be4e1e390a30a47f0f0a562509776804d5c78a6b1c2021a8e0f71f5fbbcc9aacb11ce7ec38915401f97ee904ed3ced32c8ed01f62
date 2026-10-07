'use strict';
var isDetached = require('../internals/array-buffer-is-detached');

var $TypeError = TypeError;

module.exports = function (it) {
  if (isDetached(it)) throw new $TypeError('ArrayBuffer is detached');
  return it;
};
