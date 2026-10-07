'use strict';
var WeakMapHelpers = require('../internals/weak-map-helpers');

var weakmap = new WeakMapHelpers.WeakMap();
var set = WeakMapHelpers.set;
var remove = WeakMapHelpers.remove;

module.exports = function (key) {
  set(weakmap, key, 1);
  remove(weakmap, key);
  return key;
};
