'use strict';
var uncurryThisAccessor = require('../internals/function-uncurry-this-accessor');
var SetHelpers = require('../internals/set-helpers');

module.exports = uncurryThisAccessor(SetHelpers.proto, 'size', 'get') || function (set) {
  return set.size;
};
