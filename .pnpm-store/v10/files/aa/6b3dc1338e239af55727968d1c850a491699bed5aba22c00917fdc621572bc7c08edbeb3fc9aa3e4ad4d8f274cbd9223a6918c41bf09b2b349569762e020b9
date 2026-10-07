'use strict';
var tryToString = require('../internals/try-to-string');

var $TypeError = TypeError;

// Perform ? RequireInternalSlot(M, [[WeakMapData]])
module.exports = function (it) {
  if (typeof it == 'object' && 'has' in it && 'get' in it && 'set' in it && 'delete') return it;
  throw new $TypeError(tryToString(it) + ' is not a weakmap');
};
