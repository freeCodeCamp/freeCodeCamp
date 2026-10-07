'use strict';
var globalThis = require('../internals/global-this');
var uncurryThis = require('../internals/function-uncurry-this');

module.exports = function (CONSTRUCTOR, METHOD) {
  return uncurryThis(globalThis[CONSTRUCTOR].prototype[METHOD]);
};
