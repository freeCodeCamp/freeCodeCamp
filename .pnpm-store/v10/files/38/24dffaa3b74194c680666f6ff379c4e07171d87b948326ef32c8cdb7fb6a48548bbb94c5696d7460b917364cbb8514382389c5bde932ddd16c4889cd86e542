'use strict';
var $ = require('../internals/export');
var WeakMapHelpers = require('../internals/weak-map-helpers');
var IS_PURE = require('../internals/is-pure');

var get = WeakMapHelpers.get;
var has = WeakMapHelpers.has;
var set = WeakMapHelpers.set;

// `WeakMap.prototype.getOrInsert` method
// https://tc39.es/ecma262/#sec-weakmap.prototype.getorinsert
$({ target: 'WeakMap', proto: true, real: true, forced: IS_PURE }, {
  getOrInsert: function getOrInsert(key, value) {
    if (has(this, key)) return get(this, key);
    set(this, key, value);
    return value;
  }
});
