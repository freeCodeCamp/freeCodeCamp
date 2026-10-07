'use strict';
var tryToString = require('../internals/try-to-string');

var $TypeError = TypeError;

// Perform ? RequireInternalSlot(M, [[MapData]])
module.exports = function (it) {
  if (typeof it == 'object' && 'size' in it && 'has' in it && 'get' in it && 'set' in it && 'delete' in it && 'entries' in it) return it;
  throw new $TypeError(tryToString(it) + ' is not a map');
};
