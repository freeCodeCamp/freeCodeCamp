'use strict';
var uncurryThis = require('../internals/function-uncurry-this');
var aCallable = require('../internals/a-callable');

module.exports = function demethodize() {
  return uncurryThis(aCallable(this));
};
