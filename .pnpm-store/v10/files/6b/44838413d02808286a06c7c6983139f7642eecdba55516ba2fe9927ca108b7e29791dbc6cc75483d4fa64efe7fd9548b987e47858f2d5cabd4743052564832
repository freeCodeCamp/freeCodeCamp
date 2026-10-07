'use strict';
var tryToString = require('../internals/try-to-string');

var $TypeError = TypeError;

// Perform ? RequireInternalSlot(M, [[WeakSetData]])
module.exports = function (it) {
  if (typeof it == 'object' && 'has' in it && 'add' in it && 'delete' in it) return it;
  throw new $TypeError(tryToString(it) + ' is not a weakset');
};
