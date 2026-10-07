'use strict';
var $ = require('../internals/export');
var aMap = require('../internals/a-map');
var MapHelpers = require('../internals/map-helpers');
var IS_PURE = require('../internals/is-pure');

var get = MapHelpers.get;
var has = MapHelpers.has;
var set = MapHelpers.set;

// `Map.prototype.getOrInsert` method
// https://github.com/tc39/proposal-upsert
$({ target: 'Map', proto: true, real: true, forced: IS_PURE }, {
  getOrInsert: function getOrInsert(key, value) {
    if (has(aMap(this), key)) return get(this, key);
    set(this, key, value);
    return value;
  }
});
